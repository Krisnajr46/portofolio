# 🚀 Raja Krisna — Cloud Engineer Portfolio

Personal portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**, designed to showcase my background, skills, projects, certifications, and experience as a Cloud Engineer.

The project also includes a **contact form powered by Resend API** for sending messages directly from the portfolio website.

---

## 🌐 Project Overview

This project is a modern personal portfolio website with a responsive interface and server-side API for contact form submissions.

### Main Features

* 🏠 Hero / Landing Page
* 👨‍💻 About Me
* 🛠️ Technical Skills
* 💼 Experience
* 🚀 Projects
* 📜 Certifications
* 🐙 GitHub Projects
* 📬 Contact Form
* 📧 Email delivery using Resend
* 📱 Responsive design
* ⚡ Next.js App Router
* 🐳 Docker-ready deployment
* ☁️ Designed for cloud deployment

---

## 🧰 Tech Stack

| Technology   | Purpose                 |
| ------------ | ----------------------- |
| Next.js 14   | Frontend framework      |
| React        | UI development          |
| TypeScript   | Type-safe development   |
| Tailwind CSS | Styling                 |
| Resend       | Email delivery          |
| Node.js      | Runtime                 |
| Docker       | Containerization        |
| Git & GitHub | Version control         |
| AWS EC2      | Cloud deployment target |

---

## 📁 Project Structure

```text
nextjs-portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── About.tsx
│   ├── Certifications.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Github.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   ├── Reveal.tsx
│   ├── SectionHeading.tsx
│   ├── Skills.tsx
│   └── Terminal.tsx
│
├── public/
│   └── ...
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

# ⚙️ Requirements

Before running the project, make sure the following are installed:

* Node.js 18+
* npm
* Git

Optional for containerized deployment:

* Docker
* Docker Compose

---

# 🚀 Installation

Clone the repository:

```bash
git clone <YOUR_GITHUB_REPOSITORY>
```

Enter the project directory:

```bash
cd nextjs-portfolio
```

Install dependencies:

```bash
npm install
```

---

# 🔐 Environment Variables

The contact form uses **Resend** to send emails.

Create a `.env` file:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your_email@example.com
```

### Important

Do not commit `.env` to GitHub.

Make sure `.gitignore` contains:

```gitignore
.env
.env.local
.env.production
```

---

# 📧 Resend Configuration

The application uses the Resend API for the contact form.

Install Resend:

```bash
npm install resend
```

The API endpoint is:

```text
/api/contact
```

The contact flow is:

```text
User
  ↓
Contact Form
  ↓
Next.js API Route
  ↓
Resend API
  ↓
Email
```

---

# 🧪 Development

Run the development server:

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:3000
```

For an EC2 server, you can access it through:

```text
http://YOUR_EC2_PUBLIC_IP:3000
```

Make sure port `3000` is allowed by the EC2 Security Group when testing directly.

---

# 🏗️ Production Build

Before deployment, test the production build:

```bash
npm run build
```

The project should generate output similar to:

```text
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages
✓ Collecting build traces
✓ Finalizing page optimization
```

Run the production server:

```bash
npm run start
```

The production application runs on:

```text
http://localhost:3000
```

---

# 🐳 Docker Deployment

The project is designed to be containerized using Docker.

A typical production architecture is:

```text
                    Internet
                       │
                       ▼
                  ┌─────────┐
                  │  Nginx  │
                  │  :80    │
                  └────┬────┘
                       │
                       ▼
              ┌─────────────────┐
              │ Next.js         │
              │ Portfolio       │
              │ Container :3000 │
              └────────┬────────┘
                       │
                       ▼
                 Resend API
```

---

## 🐳 Build Docker Image

After creating the Dockerfile:

```bash
docker build -t nextjs-portfolio:latest .
```

Check the image:

```bash
docker images
```

---

## ▶️ Run Docker Container

```bash
docker run -d \
  --name nextjs-portfolio \
  -p 3000:3000 \
  --env-file .env \
  nextjs-portfolio:latest
```

Check running containers:

```bash
docker ps
```

Check application logs:

```bash
docker logs nextjs-portfolio
```

---

# 🐳 Docker Compose

For production deployment, Docker Compose can be used to manage the application.

Example:

```yaml
services:
  portfolio:
    build: .
    container_name: nextjs-portfolio
    restart: unless-stopped
    ports:
      - "3000:3000"
    env_file:
      - .env
```

Start the application:

```bash
docker compose up -d
```

Check containers:

```bash
docker compose ps
```

View logs:

```bash
docker compose logs -f
```

Stop the application:

```bash
docker compose down
```

---

# ☁️ AWS EC2 Deployment

This project can be deployed to an Ubuntu-based AWS EC2 instance.

Basic deployment flow:

```text
Developer
    │
    ▼
GitHub Repository
    │
    ▼
AWS EC2
    │
    ▼
Docker
    │
    ▼
Next.js Container
    │
    ▼
Nginx
    │
    ▼
Internet
```

### Example EC2 workflow

Connect to the server:

```bash
ssh ubuntu@YOUR_EC2_PUBLIC_IP
```

Clone the project:

```bash
git clone <YOUR_GITHUB_REPOSITORY>
```

Enter the project:

```bash
cd nextjs-portfolio
```

Build and start:

```bash
docker compose up -d --build
```

Check the deployment:

```bash
docker compose ps
```

---

# 🔍 Troubleshooting

## `Module not found: Can't resolve './globals.css'`

Make sure the file exists:

```text
app/globals.css
```

The filename is case-sensitive.

---

## `Module not found: Can't resolve '@/components/About'`

Make sure the component exists as:

```text
components/About.tsx
```

Linux is case-sensitive.

For example:

```text
about.tsx
```

and:

```text
About.tsx
```

are treated as different filenames.

---

## Check Next.js Build

Run:

```bash
npm run build
```

If the build succeeds, the application is ready for production deployment.

---

## Check Docker Logs

```bash
docker compose logs --tail=100
```

Or:

```bash
docker logs nextjs-portfolio
```

---

# 📊 Project Verification

The current Next.js production build has been successfully verified.

```text
Next.js 14.2.5

✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages
✓ Collecting build traces
✓ Finalizing page optimization
```

Available routes include:

```text
/
 /_not-found
 /api/contact
```

The main portfolio page is statically generated while the contact API is server-rendered.

---

# 🔒 Security Notes

Never expose sensitive credentials in GitHub.

Do not commit:

```text
.env
.env.local
.env.production
```

Do not put the Resend API key directly inside frontend components.

Use environment variables:

```env
RESEND_API_KEY=...
```

For production deployment, HTTPS should be configured through Nginx and a valid domain.

---

# 📈 Future Improvements

Planned improvements for the project:

* [ ] Docker production deployment
* [ ] Nginx reverse proxy
* [ ] HTTPS with SSL/TLS
* [ ] Custom domain
* [ ] GitHub Actions CI/CD
* [ ] Automated Docker image build
* [ ] GitHub Container Registry
* [ ] Monitoring with Prometheus
* [ ] Grafana dashboard
* [ ] Application health check
* [ ] Cloud deployment automation
* [ ] AWS infrastructure documentation

---

# 🎯 Cloud Engineer Skills Demonstrated

This project is not only a portfolio website, but also a practical Cloud Engineer project.

The project demonstrates experience with:

```text
Linux
  ↓
Git & GitHub
  ↓
Node.js / Next.js
  ↓
REST API
  ↓
Docker
  ↓
Docker Compose
  ↓
Nginx
  ↓
AWS EC2
  ↓
CI/CD
  ↓
Monitoring
```

---

# 👨‍💻 Author

**Raja Krisna**

Informatics Student | Cloud Engineer Enthusiast

Interested in:

* Cloud Computing
* DevOps
* Linux
* Networking
* Docker
* AWS
* Infrastructure
* Automation
* Monitoring

---

## ⭐ Project Goal

The main goal of this project is to build a professional personal portfolio while simultaneously demonstrating practical skills in **Cloud Engineering, Linux, Docker, deployment, and modern web development**.

If you find this project useful, feel free to give the repository a ⭐.
