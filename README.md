# DUNAMIS ENGINEERING & CONSTRUCTION — WEBSITE

A fast, modern, and production-ready corporate engineering web application rebuilt from scratch for **Dunamis Construction and Engineering Private Limited** ([https://dunamisengg.com](https://dunamisengg.com/)).

Built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**.

---

## Key Highlights

- **Aesthetic**: Premium Industrial + Modern Corporate B2B identity (Obsidian/Charcoal palette with high-visibility Safety Amber accents, clean grids, and technical typography).
- **100% Real Factual Data**:
  - Registered Office in Poonamallee, Chennai.
  - Heavy Fabrication Yard (70,000+ sq.ft. open yard & 5,000 sq.ft. covered workshop) in Kiloy Village, Sriperumbudur.
  - 10 actual service capabilities (PEB, Structural Fabrication, Equipment Fabrication, Erection, Roofing, Pipeline, Construction, Rockwool, HVAC, Fire Fighting).
  - Verified projects (Sriperumbudur Sheds, KIA Motors Press Work, KEC Pipe Rack, Gudiyatham Shed, French Village Court, HL Mando RCS Cabin, Thirumalai Chemical, KK Nagar).
  - Real client logos and active job openings.
- **Zero Heavy Overhead**: No database, no separate microservices, no heavy 3D packages. Static data stored in clean TypeScript files under `data/`.
- **Fast & SEO-Optimized**: Server-side rendered and statically generated pages, Schema.org JSON-LD structured data, dynamic `sitemap.xml`, and `robots.txt`.

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Rendering**: Static Site Generation (SSG) / React Server Components (RSC)

---

## Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

---

## Production Build & Run

### 1. Build for Production
```bash
npm run build
```
This compiles TypeScript, optimizes Tailwind CSS, and pre-renders all 32 static and dynamic routes.

### 2. Start the Production Server
```bash
npm start
```
The application will launch on port `3000` (or the port specified by the `PORT` environment variable).

---

## Normal Server / VPS Deployment (Ubuntu / Debian / AlmaLinux)

Deploying this application to a normal server is straightforward:

### Step 1: Upload Project Files
Upload the project repository to your server directory (e.g., `/var/www/dunamis`).

### Step 2: Install Node.js (v18 or higher) & Dependencies
```bash
cd /var/www/dunamis
npm install
npm run build
```

### Step 3: Run as a Background Service with PM2
Install PM2 to keep the application running continuously:
```bash
npm install -g pm2
pm2 start npm --name "dunamis-web" -- start
pm2 save
pm2 startup
```

### Step 4: Reverse Proxy with Nginx (Port 80 / 443)
Configure Nginx as a reverse proxy to forward traffic to `http://localhost:3000`:

```nginx
server {
    server_name dunamisengg.com www.dunamisengg.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Step 5: Enable Free HTTPS (SSL)
Use Certbot to configure Let's Encrypt SSL:
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d dunamisengg.com -d www.dunamisengg.com
```

---

## cPanel / Shared Node.js Hosting Deployment

1. In cPanel, navigate to **Setup Node.js App**.
2. Create Application:
   - **Node.js version**: 18.x or 20.x
   - **Application mode**: Production
   - **Application root**: `dunamis`
   - **Application startup file**: `node_modules/next/dist/bin/next` with argument `start` (or run `npm start`).
3. Upload project files (excluding `node_modules`).
4. Click **Run NPM Install** and **Run NPM Build** in the cPanel Node.js interface.
5. Click **Restart** to start the application.

---

## Vercel / Cloud Deployment

If deploying to Vercel, Netlify, or AWS Amplify:
1. Connect the Git repository.
2. Framework Preset: **Next.js**
3. Build Command: `npm run build`
4. Output Directory: `.next`
5. Click **Deploy**.

---

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout, fonts, Navbar, Footer, Schema.org JSON-LD
│   ├── page.tsx                # Homepage (Hero, About, Capabilities, Projects, Process, Why, Clients)
│   ├── about/page.tsx          # About, Mission/Vision, Kiloy Yard facilities
│   ├── services/
│   │   ├── page.tsx            # All 10 services + ancillary services
│   │   └── [slug]/page.tsx     # Dynamic individual service detail page
│   ├── projects/
│   │   ├── page.tsx            # Projects archive with category filter
│   │   └── [slug]/page.tsx     # Dynamic individual project detail page
│   ├── gallery/page.tsx        # Masonry photo gallery with zero-dependency Lightbox
│   ├── careers/page.tsx        # Job openings (Civil, Electrical, Electrician, Instrument)
│   ├── contact/page.tsx        # Contact details, addresses, phone lines, map & RFQ form
│   ├── sitemap.ts              # Dynamic sitemap generator
│   ├── robots.ts               # Dynamic robots.txt
│   └── globals.css             # Tailwind styling and custom tech grid tokens
├── components/
│   ├── Navbar.tsx              # Dynamic transparent-to-solid sticky header + mobile drawer
│   ├── Footer.tsx              # Rich industrial corporate footer
│   ├── Hero.tsx                # Full-screen industrial hero with metrics & scroll indicator
│   ├── SectionHeading.tsx      # Reusable section title with engineering tags
│   ├── ServiceCard.tsx         # Capability cards with hover zoom & specifications
│   ├── ProjectCard.tsx         # Editorial project card
│   ├── Lightbox.tsx            # Zero-dependency accessible image viewer
│   ├── TimelineProcess.tsx     # 6-step engineering timeline (01 to 06)
│   ├── WhyDunamis.tsx          # Factual strengths & reliability section
│   ├── ClientGrid.tsx          # Real client logo grid
│   ├── ProjectsFilter.tsx      # Category tab switcher
│   └── ContactForm.tsx         # Validated inquiry / RFQ form
├── data/
│   ├── company.ts              # Office addresses, phone numbers, leadership contacts
│   ├── services.ts             # 10 core services with full technical specifications
│   ├── projects.ts             # Verified real projects & specs
│   ├── clients.ts              # Real client logos & sectors
│   ├── gallery.ts              # Categorized site & progress photos
│   └── careers.ts              # Real job roles and requirements
└── public/
    └── images/                 # All authentic downloaded Dunamis assets
```

---

## Content Editing

All website content is stored in clean TypeScript data files in `data/`:
- Edit company addresses or phone numbers in `data/company.ts`
- Edit services and technical specifications in `data/services.ts`
- Add or modify projects in `data/projects.ts`
- Update career postings in `data/careers.ts`
- Add client logos in `data/clients.ts`
- Add gallery photos in `data/gallery.ts`

No database or SQL queries required!
