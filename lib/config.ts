// lib/config.ts

export const COMPANY_CONFIG = {
  name: "Spectre",
  tagline: {
    pt: "Soluções premium em tecnologia e segurança.",
    en: "Premium technology and security solutions.",
  },

  timeline: [
    {
      year: "2024",
      title: { pt: "A Concepção", en: "The Beginning" },
      description: {
        pt: "A Spectre foi originalmente concebida. A ideia do projeto foi criada e os primeiros conceitos foram planejados.",
        en: "Spectre was originally conceived. The project idea was created and the first concepts were planned.",
      },
    },
    {
      year: "2025",
      title: { pt: "Desenvolvimento", en: "Development" },
      description: {
        pt: "O desenvolvimento começou oficialmente. O projeto saiu da fase de planejamento e os primeiros produtos, infraestrutura e sistemas começaram a ser construídos.",
        en: "Development officially began. The project left the planning stage and the first products, infrastructure and systems started being built.",
      },
    },
    {
      year: "2026",
      title: { pt: "Lançamento Oficial", en: "Official Launch" },
      description: {
        pt: "A Spectre foi oficialmente lançada como uma loja completa, com um site profissional, suporte dedicado no Discord e um catálogo crescente de produtos.",
        en: "Spectre officially launched as a complete store, featuring a professional website, dedicated Discord support, and a growing catalog of products.",
      },
    },
  ],

  stats: {
    products: 5,
    weeklyUpdates: "10+",
    supportAvailability: "24/7",
    activeCustomers: 250,
  },

  // Links sociais oficiais atualizados
  social: {
    discord: "https://discord.gg/cqsUYw3u7G",
    tiktok: "https://www.tiktok.com/@spectre_xiters",
    youtube: "https://www.youtube.com/@spectre_xiter",
  },

  // Política de Reembolso
  refund: {
    title: { pt: "Política de Reembolso", en: "Refund Policy" },
    subtitle: {
      pt: "Solicitações de reembolso dependem da duração da licença adquirida.",
      en: "Refund requests depend on the purchased license duration.",
    },
    tiers: [
      { license: "7-Day", deadline: { pt: "3 dias", en: "3 days" } },
      { license: "14-Day", deadline: { pt: "7 dias", en: "7 days" } },
      { license: "30-Day", deadline: { pt: "15 dias", en: "15 days" } },
    ],
  },

  // Método de Pagamento
  payment: {
    method: {
      pt: "PIX via nosso Bot oficial do Discord",
      en: "PIX via our official Discord Bot",
    },
    description: {
      pt: "Todos os pagamentos são processados de forma segura e automatizada através do nosso bot oficial no Discord.",
      en: "All payments are processed securely and automatically through our official Discord bot.",
    },
  },
} as const;