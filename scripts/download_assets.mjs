import fs from "fs";
import path from "path";
import { pipeline } from "stream/promises";

const baseUrl = "https://dunamisengg.com";

const filesToDownload = [
  // Logos
  { url: `${baseUrl}/assets/images/logo_new.png`, dest: "public/images/logo.png" },
  { url: `${baseUrl}/assets/images/logo.png`, dest: "public/images/logo_old.png" },
  { url: `${baseUrl}/assets/images/favicon.ico`, dest: "public/favicon.ico" },
  
  // Sliders / Hero
  { url: `${baseUrl}/assets/images/slider-1.jpg`, dest: "public/images/hero/slider-1.jpg" },
  { url: `${baseUrl}/assets/images/slider-2.jpg`, dest: "public/images/hero/slider-2.jpg" },
  { url: `${baseUrl}/assets/images/slider-3.jpg`, dest: "public/images/hero/slider-3.jpg" },
  
  // About / Mission / Vision / Career
  { url: `${baseUrl}/assets/images/aboutus.jpg`, dest: "public/images/about/aboutus.jpg" },
  { url: `${baseUrl}/assets/images/vision.jpg`, dest: "public/images/about/vision.jpg" },
  { url: `${baseUrl}/assets/images/mission.jpg`, dest: "public/images/about/mission.jpg" },
  { url: `${baseUrl}/assets/images/ind1.jpg`, dest: "public/images/services/ind1.jpg" },
  { url: `${baseUrl}/assets/images/career.jpg`, dest: "public/images/career/career.jpg" },

  // Clients (1 to 13)
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((num) => ({
    url: `${baseUrl}/assets/images/client/${num}.jpg`,
    dest: `public/images/clients/client-${num}.jpg`,
  })),

  // Portfolio
  ...Array.from({ length: 16 }, (_, i) => i + 1).flatMap((num) => [
    {
      url: `${baseUrl}/assets/images/portfolio/portfolio-${num}.jpg`,
      dest: `public/images/projects/project-${num}.jpg`,
    },
    {
      url: `${baseUrl}/assets/images/portfolio/portfolio-big-${num}.jpg`,
      dest: `public/images/projects/project-big-${num}.jpg`,
    },
  ]),
];

async function download() {
  console.log("Starting asset download from", baseUrl);
  for (const item of filesToDownload) {
    const targetPath = path.resolve(item.dest);
    const dir = path.dirname(targetPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    try {
      const res = await fetch(item.url);
      if (!res.ok) {
        console.warn(`[SKIP/ERROR ${res.status}] ${item.url}`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(targetPath, buffer);
      console.log(`[OK] Saved ${item.dest} (${buffer.length} bytes)`);
    } catch (err) {
      console.error(`[FAIL] ${item.url}:`, err.message);
    }
  }
  console.log("Download complete!");
}

download();
