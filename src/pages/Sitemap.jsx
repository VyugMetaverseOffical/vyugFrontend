import React from 'react';

const routes = [
  { path: "/", lastMod: new Date(), priority: 1.0 },
  { path: "/about-us", lastMod: new Date(), priority: 0.8 },
  { path: "/vyug-airdrop", lastMod: new Date(), priority: 0.8 },
  { path: "/landing-page/login", lastMod: new Date(), priority: 0.8 },
  { path: "/landing-page/register", lastMod: new Date(), priority: 0.8 },
  { path: "/landing-page/register/verify-otp", lastMod: new Date(), priority: 0.8 },
  { path: "/mission-vision", lastMod: new Date(), priority: 0.8 },
  { path: "/innovators", lastMod: new Date(), priority: 0.8 },
  { path: "/regions", lastMod: new Date(), priority: 0.8 },
  { path: "/regions/virtual-reality-in-forest", lastMod: new Date(), priority: 0.8 },
  { path: "/regions/virtual-reality-in-water-body", lastMod: new Date(), priority: 0.8 },
  { path: "/regions/virtual-reality-in-island", lastMod: new Date(), priority: 0.8 },
  { path: "/regions/virtual-reality-in-desert", lastMod: new Date(), priority: 0.8 },
  { path: "/regions/virtual-reality-in-mountain", lastMod: new Date(), priority: 0.8 },
  { path: "/regions/virtual-reality-in-plains", lastMod: new Date(), priority: 0.8 },
  { path: "/sectors", lastMod: new Date(), priority: 0.8 },
  { path: "/sectors/virtual-reality-in-education", lastMod: new Date(), priority: 0.8 },
  { path: "/sectors/virtual-reality-in-entertainment", lastMod: new Date(), priority: 0.8 },
  { path: "/sectors/virtual-reality-in-commercial", lastMod: new Date(), priority: 0.8 },
  { path: "/sectors/virtual-reality-in-corporate", lastMod: new Date(), priority: 0.8 },
  { path: "/sectors/virtual-reality-in-event", lastMod: new Date(), priority: 0.8 },
  { path: "/sectors/virtual-reality-in-tourism", lastMod: new Date(), priority: 0.8 },
  { path: "/sectors/virtual-reality-in-sports", lastMod: new Date(), priority: 0.8 },
  { path: "/sectors/virtual-reality-in-hospitality", lastMod: new Date(), priority: 0.8 },
  { path: "/sectors/virtual-reality-in-sustainability", lastMod: new Date(), priority: 0.8 },
  { path: "/partners", lastMod: new Date(), priority: 0.8 },
  { path: "/invest-in-vyug", lastMod: new Date(), priority: 0.8 },
  { path: "/be-an-investor", lastMod: new Date(), priority: 0.8 },
  { path: "/map", lastMod: new Date(), priority: 0.8 },
  { path: "/trade-center/market-place", lastMod: new Date(), priority: 0.8 },
  { path: "/privacy-policy", lastMod: new Date(), priority: 0.8 },
  { path: "/vyug-token", lastMod: new Date(), priority: 0.8 },
  { path: "/wallet", lastMod: new Date(), priority: 0.8 },
  { path: "/play-space", lastMod: new Date(), priority: 0.8 },
  { path: "/buzz/announcements", lastMod: new Date(), priority: 0.8 },
  { path: "/buzz/announcement/vyug-token-deployed-on-mainnet", lastMod: new Date(), priority: 0.8 },
  { path: "/buzz/announcement/vyug-token-deployed-on-testnet", lastMod: new Date(), priority: 0.8 },
  { path: "/buzz/announcement/vyug-jackpot-announcement", lastMod: new Date(), priority: 0.8 },
  { path: "/buzz/announcement/vyug-enters-new-arenas-with-beta", lastMod: new Date(), priority: 0.8 },
  { path: "/buzz/announcement/vyug-launches-the-airdrop-of-revolution", lastMod: new Date(), priority: 0.8 },
  { path: "/buzz/events", lastMod: new Date(), priority: 0.8 },
  { path: "/buzz/pr-news", lastMod: new Date(), priority: 0.8 },
  { path: "/buzz/pr-news/a-virtual-solution-for-all-your-real-world-limitations", lastMod: new Date(), priority: 0.8 },
  { path: "/buzz/pr-news/unleashing-boundless-possibilities-in-the-virtual-realm", lastMod: new Date(), priority: 0.8 },
  { path: "/buzz/pr-news/celebrities-avatars-and-a-glimpse-into-the-future-of-virtual-experiences", lastMod: new Date(), priority: 0.8 },
  { path: "/buzz/pr-news/vyug-avatar-launched-at-greater-noida-expo-center", lastMod: new Date(), priority: 0.8 },
  { path: "/buzz/pr-news/vyug-avatar-released-shilpa-shetty-and-ronit-roy-inaugurated-it", lastMod: new Date(), priority: 0.8 },
  { path: "/buzz/pr-news/raise-awareness-about-metaverse-and-related-technologies", lastMod: new Date(), priority: 0.8 },
  { path: "/buzz/pr-news/vyug-launches-unprecedented-airdrop-for-Its-hyper-realistic-metaverse", lastMod: new Date(), priority: 0.8 },
  { path: "/buzz/pr-news/metaverse-education-revolutionising-learning-beyond-boundaries", lastMod: new Date(), priority: 0.8 },
  { path: "/buzz/pr-news/vyug-unveil-organised-to-raise-awareness-about-metavers", lastMod: new Date(), priority: 0.8 },
  { path: "/buzz/pr-news/vyug-is-ready-with-new-dimensions-in-the-field-of-metaverse", lastMod: new Date(), priority: 0.8 },
  { path: "/buzz/pr-news/vyug-is-ready-with-new-dimensions-in-the-field-of-metaverse-and-success", lastMod: new Date(), priority: 0.8 },
  { path: "/buzz/pr-news/unlock-the-future", lastMod: new Date(), priority: 0.8 },
  { path: "/buzz/pr-news/vyug-is-ready-with-new-dimensions", lastMod: new Date(), priority: 0.8 },
  { path: "/buzz/pr-news/metaverse-and-successfully-showcased-ubaid-chand-avatar", lastMod: new Date(), priority: 0.8 },
  { path: "/buzz/pr-news/vyug-unveils-massive-airdrop-for-Its-groundbreaking-hyper-realistic-metaverse", lastMod: new Date(), priority: 0.8 },
  { path: "/buzz/pr-news/vyug-is-ready-with-new-dimensions-in-metaverse", lastMod: new Date(), priority: 0.8 },
  { path: "/buzz/pr-news/vyug-announces-completion-of-security-audit", lastMod: new Date(), priority: 0.8 },
  { path: "/buzz/pr-news/vyug-metaverse-launches-alpha-testing-phase", lastMod: new Date(), priority: 0.8 },
  { path: "/buzz/blogs", lastMod: new Date(), priority: 0.8 },
  { path: "/buzz/blogs/why-vyug", lastMod: new Date(), priority: 0.8 },
  { path: "/stream-announcement", lastMod: new Date(), priority: 0.8 },
  { path: "/terms-of-use", lastMod: new Date(), priority: 0.8 },
  { path: "/auth/login", lastMod: new Date(), priority: 0.8 },
  { path: "/auth/signup", lastMod: new Date(), priority: 0.8 },
  { path: "/auth/signup/verify-otp", lastMod: new Date(), priority: 0.8 },
  { path: "/auth/create-account", lastMod: new Date(), priority: 0.8 },
  { path: "/auth/forgot-password", lastMod: new Date(), priority: 0.8 },
  { path: "/auth/forgot/verify-otp", lastMod: new Date(), priority: 0.8 },
  { path: "/auth/reset-password", lastMod: new Date(), priority: 0.8 },
  { path: "/whitepaper", lastMod: new Date(), priority: 0.8 },
  // Add more static routes here
];

const generateSitemap = () => {
  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">`;
  const xmlFooter = `\n</urlset>`;
  
  const xmlUrls = routes.map(route => {
    return `
      <url>
        <loc>https://www.vyugmetaverse.com${route.path}</loc>
        <lastmod>${route.lastMod.toISOString().split('T')[0]}</lastmod>
        <priority>${route.priority}</priority>
      </url>`;
  }).join('');

  return `${xmlHeader}${xmlUrls}${xmlFooter}`;
};

const Sitemap = () => {
  const downloadSitemap = () => {
    const sitemapContent = generateSitemap();
    const blob = new Blob([sitemapContent], { type: 'text/xml' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h1>Sitemap</h1>
      <button onClick={downloadSitemap}>Download Sitemap</button>
    </div>
  );
};

export default Sitemap;
