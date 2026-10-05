export const GH_USER = "Krisnajr46";
export const links = {
  github: `https://github.com/${GH_USER}`,
  linkedin: "https://linkedin.com/in/your-username", // TODO
  email: "mailto:your.email@example.com",              // TODO
  cv: "/cv.pdf",                                        // taruh file CV di /public/cv.pdf
};

export const skills: Record<string, { icon: "cloud" | "devops" | "monitor" | "network" | "code"; items: string[] }> = {
  Cloud: { icon: "cloud", items: ["AWS", "EC2", "IAM", "VPC", "Cloud Computing"] },
  DevOps: { icon: "devops", items: ["Docker", "Docker Compose", "GitHub Actions", "CI/CD", "Linux", "Bash"] },
  Monitoring: { icon: "monitor", items: ["Grafana", "Prometheus", "Node Exporter"] },
  Networking: { icon: "network", items: ["TCP/IP", "Subnetting", "VLAN", "Routing", "OSPF", "EIGRP", "BGP", "MikroTik", "Cisco"] },
  Development: { icon: "code", items: ["Python", "Flask", "Node.js", "REST API", "PostgreSQL", "MySQL"] },
};

export type Project = {
  title: string; desc: string; stack: string[]; arch: string[][];
  overview: string; deploy: string; challenge: string; solution: string; result: string; repo: string;
};
export const projects: Project[] = [
  { title: "Cloud-Native E-Commerce Platform",
    desc: "Containerized full-stack e-commerce application deployed using Docker Compose with PostgreSQL, Redis, Nginx, monitoring, and cloud infrastructure.",
    stack: ["AWS EC2", "Docker", "Docker Compose", "PostgreSQL", "Redis", "Nginx", "Grafana", "Prometheus", "GitHub Actions"],
    arch: [["User", "Nginx", "Frontend / Backend", "PostgreSQL + Redis"], ["Prometheus", "Grafana"]],
    overview: "A multi-container e-commerce app built to practice running a realistic production-style stack on a cloud VM.",
    deploy: "Code is pushed to GitHub, GitHub Actions builds the images, and the stack is deployed to AWS EC2 with Docker Compose behind Nginx.",
    challenge: "Service startup order, container networking, and persisting database data.",
    solution: "Health checks, named volumes, and a dedicated Compose network with Nginx as the single entry point.",
    result: "[Edit: tulis hasil nyata, mis. waktu deploy, uptime, jumlah service]",
    repo: `https://github.com/${GH_USER}` },
  { title: "IoT Telemetry Monitoring Platform",
    desc: "An IoT simulation and monitoring platform that collects telemetry data through messaging infrastructure and visualizes system metrics using Grafana.",
    stack: ["Docker", "MQTT", "Grafana", "Prometheus", "Linux", "AWS EC2"],
    arch: [["IoT Simulator", "MQTT Broker", "Collector", "Prometheus"], ["Prometheus", "Grafana"]],
    overview: "A simulated sensor fleet publishing telemetry over MQTT, visualized in real time.",
    deploy: "All services run as Docker containers on an AWS EC2 Linux instance.",
    challenge: "Handling message flow and exposing metrics in a Prometheus-friendly format.",
    solution: "A collector service that bridges MQTT messages to Prometheus metrics.",
    result: "[Edit: tulis hasil nyata]", repo: `https://github.com/${GH_USER}` },
  { title: "DevOps Homelab Infrastructure",
    desc: "A personal infrastructure laboratory for practicing Linux administration, Docker, CI/CD, monitoring, networking, and self-hosted services.",
    stack: ["Ubuntu", "Docker", "GitHub Actions", "Prometheus", "Grafana", "Tailscale", "Nginx"],
    arch: [["Tailscale VPN", "Nginx", "Self-hosted Services"], ["Prometheus", "Grafana"]],
    overview: "A hands-on lab for safely experimenting with Linux, networking, and automation.",
    deploy: "Ubuntu host running Dockerized services, reached privately through Tailscale, with CI/CD via GitHub Actions.",
    challenge: "Secure remote access and keeping every service observable.",
    solution: "Tailscale for private networking, plus Prometheus and Grafana for visibility.",
    result: "[Edit: tulis hasil nyata]", repo: `https://github.com/${GH_USER}` },
];

export const journey = [
  { t: "Informatics Student", s: "Universitas Gunadarma", d: "Focus: Networking, Programming, Cloud Computing" },
  { t: "Networking & Infrastructure", s: "", d: "Learning: Cisco, MikroTik, VLAN, Routing, Subnetting" },
  { t: "DevOps", s: "", d: "Learning: Linux, Docker, Git, CI/CD" },
  { t: "Cloud Engineering", s: "", d: "Learning: AWS, EC2, Cloud Infrastructure, Monitoring" },
  { t: "Current Focus", s: "", d: "Building production-style cloud projects and improving DevOps skills." },
];

// Placeholder: ganti dengan sertifikat asli. Jangan isi sertifikat yang belum kamu miliki.
export const certs = [
  { title: "AWS Learning", meta: "[Edit: nama sertifikat · penerbit · tahun]", url: "" },
  { title: "Cloud Engineer Bootcamp", meta: "[Edit: penyelenggara · tahun]", url: "" },
  { title: "Networking Certification", meta: "[Edit: Cisco / MikroTik · tahun]", url: "" },
  { title: "Linux / DevOps Learning", meta: "[Edit: kursus · platform]", url: "" },
  { title: "Other Certificate", meta: "[Edit: tambah sendiri]", url: "" },
];

// Fallback jika GitHub API gagal
export const fallbackRepos = [
  { id: 1, name: "cloud-native-ecommerce", description: "Docker Compose stack with monitoring.", html_url: links.github, language: "YAML", stargazers_count: 0 },
  { id: 2, name: "iot-telemetry-platform", description: "MQTT telemetry with Grafana dashboards.", html_url: links.github, language: "Python", stargazers_count: 0 },
  { id: 3, name: "devops-homelab", description: "Homelab configs and automation scripts.", html_url: links.github, language: "Shell", stargazers_count: 0 },
];
