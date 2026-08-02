/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // Remove "X-Powered-By: Next.js" para evitar fingerprinting
  
  // Otimização de Imagens Segura
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [], // Nenhum domínio externo permitido para imagens. Apenas locais (/public).
    dangerouslyAllowSVG: false,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Headers de Segurança de Nível Empresarial
  async headers() {
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // 'unsafe-inline' necessário para Next.js/Tailwind/Framer Motion em produção
      "style-src 'self' 'unsafe-inline'", // Necessário para Tailwind JIT
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      "connect-src 'self' https://discord.gg https://www.tiktok.com https://www.youtube.com",
      "frame-ancestors 'none'", // Previne Clickjacking
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join("; ");

    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: csp,
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload", // Força HTTPS por 1 ano
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Cache agressivo para assets estáticos
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, proxy-revalidate", // Previne cache de páginas dinâmicas/sensíveis
          },
        ],
      },
    ];
  },
};

export default nextConfig;