export const SITE_CONFIG = {
  name: "BREXD",
  url: "https://brexd.com",
  defaultLocale: "pt-BR" as const,
  locales: ["pt-BR"] as const,
} as const;

export const SEGMENTS = {
  export: {
    key: "export",
    color: "#0D2137",
    colorClass: "bg-seg-export",
    textClass: "text-seg-export",
    icon: "Ship",
  },
  import: {
    key: "import",
    color: "#1B7A3D",
    colorClass: "bg-seg-import",
    textClass: "text-seg-import",
    icon: "Package",
  },
  engineering: {
    key: "engineering",
    color: "#E8B624",
    colorClass: "bg-seg-engineering",
    textClass: "text-seg-engineering",
    icon: "HardHat",
  },
  agribusiness: {
    key: "agribusiness",
    color: "#2E8B57",
    colorClass: "bg-seg-agribusiness",
    textClass: "text-seg-agribusiness",
    icon: "Wheat",
  },
  technology: {
    key: "technology",
    color: "#1E56A0",
    colorClass: "bg-seg-technology",
    textClass: "text-seg-technology",
    icon: "Cpu",
  },
} as const;

export const OFFICES = [
  {
    city: "Sao Paulo",
    country: "Brasil",
    role: "Sede Global",
    address: "Av. Brigadeiro Faria Lima, 3477 - 14th Floor, Itaim Bibi",
    phone: "+55 (11) 3045-8800",
    email: "saopaulo@brexd.com",
    timezone: "BRT (GMT-3)",
    coordinates: { lat: -23.5677, lng: -46.6929 },
  },
  {
    city: "Miami",
    country: "EUA",
    role: "Operações Américas",
    address: "1395 Brickell Avenue, Suite 800, Miami, FL 33131",
    phone: "+1 (305) 555-0147",
    email: "miami@brexd.com",
    timezone: "EST (GMT-5)",
    coordinates: { lat: 25.7617, lng: -80.1918 },
  },
  {
    city: "Shanghai",
    country: "China",
    role: "Operações Ásia",
    address: "Shanghai Tower, 501 Yincheng Middle Road, Pudong",
    phone: "+86 21 5888 0147",
    email: "shanghai@brexd.com",
    timezone: "CST (GMT+8)",
    coordinates: { lat: 31.2354, lng: 121.5055 },
  },
] as const;

export const STATS = [
  { value: 28, suffix: "+", labelKey: "stats.years" },
  { value: 3, suffix: "", labelKey: "stats.offices" },
  { value: 500, suffix: "+", labelKey: "stats.projects" },
  { value: 18, suffix: "", labelKey: "stats.countries" },
  { value: 350, suffix: "+", labelKey: "stats.team" },
  { value: 3.2, suffix: "B", prefix: "$", labelKey: "stats.revenue" },
] as const;

export const NAV_LINKS = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  {
    key: "segments",
    href: "/segments",
    children: [
      { key: "export", href: "/segments/export" },
      { key: "import", href: "/segments/import" },
      { key: "engineering", href: "/segments/engineering" },
      { key: "agribusiness", href: "/segments/agribusiness" },
      { key: "technology", href: "/segments/technology" },
    ],
  },
  { key: "projects", href: "/projects" },
  { key: "partners", href: "/partners" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
] as const;
