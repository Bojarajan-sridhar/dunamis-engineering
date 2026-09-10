Add-Type -AssemblyName System.Drawing

$srcPath = "c:\esol project\Dunnamies\public\images\hero\hero-peb.jpg"
$destPath = "c:\esol project\Dunnamies\public\images\hero\hero-peb-4k.jpg"

if (-not (Test-Path $srcPath)) {
    Write-Error "Source file not found: $srcPath"
    exit 1
}

$fileBytes = [System.IO.File]::ReadAllBytes($srcPath)
$ms = New-Object System.IO.MemoryStream($fileBytes, 0, $fileBytes.Length)
$img = [System.Drawing.Image]::FromStream($ms)

$targetW = 3840
$targetH = [int]([double]$img.Height * ([double]$targetW / [double]$img.Width))
Write-Host "Upscaling from $($img.Width)x$($img.Height) to $($targetW)x$($targetH)..."

$bmp = New-Object System.Drawing.Bitmap($targetW, $targetH, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

$rect = New-Object System.Drawing.Rectangle(0, 0, $targetW, $targetH)
$g.DrawImage($img, $rect, 0, 0, $img.Width, $img.Height, [System.Drawing.GraphicsUnit]::Pixel)

$img.Dispose()
$ms.Dispose()

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]98)

$bmp.Save($destPath, $jpegCodec, $encoderParams)
$bmp.Dispose()
$g.Dispose()

# Replace original with 4K version
Move-Item -Path $destPath -Destination $srcPath -Force

$finalSize = (Get-Item $srcPath).Length / 1MB
Write-Host ("SUCCESS: 4K image created at {0:N2} MB ({1}x{2})" -f $finalSize, $targetW, $targetH)
