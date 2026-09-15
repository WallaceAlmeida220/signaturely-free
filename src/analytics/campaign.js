// Captura parâmetros UTM da URL
export function parseUTMParams(searchParams = window.location.search) {
  const params = new URLSearchParams(searchParams);
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  const utm = {};

  utmKeys.forEach((key) => {
    if (params.has(key)) {
      utm[key] = params.get(key);
    }
  });

  return utm;
}

// Classificador de Origem de Tráfego
export function getTrafficSource(utm = {}, referrer = document.referrer) {
  if (utm.utm_source) {
    const medium = (utm.utm_medium || '').toLowerCase();
    if (medium.includes('email') || medium.includes('outreach')) return 'Email';
    if (medium.includes('cpc') || medium.includes('ppc') || medium.includes('paid')) return 'Paid';
    if (medium.includes('social')) return 'Social';
    return 'Campaign';
  }

  if (!referrer) return 'Direct / Unknown';

  const refLower = referrer.toLowerCase();
  if (refLower.includes('google') || refLower.includes('bing') || refLower.includes('duckduckgo')) return 'Organic Search';
  if (refLower.includes('linkedin') || refLower.includes('twitter') || refLower.includes('t.co') || refLower.includes('facebook') || refLower.includes('reddit')) return 'Social';

  return 'Referral';
}

// Gerador de URLs para Campanhas Outbound (Requisito 16 & 17)
export function generateTrackingUrl({ baseUrl, source, medium, campaign, content, term }) {
  try {
    const url = new URL(baseUrl);
    if (source) url.searchParams.set('utm_source', source);
    if (medium) url.searchParams.set('utm_medium', medium);
    if (campaign) url.searchParams.set('utm_campaign', campaign);
    if (content) url.searchParams.set('utm_content', content);
    if (term) url.searchParams.set('utm_term', term);
    return url.toString();
  } catch (err) {
    console.error('Invalid Base URL provided to generateTrackingUrl:', baseUrl);
    return baseUrl;
  }
}