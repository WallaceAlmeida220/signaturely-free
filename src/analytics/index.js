import { getOrCreateSession, getOrCreateVisitorId, saveAttribution, getAttributionData } from './storage';
import { parseUTMParams, getTrafficSource } from './campaign';
import { initExternalAnalytics, sendToProvider, identifyUserInProvider } from './provider';

class AnalyticsEngine {
  constructor() {
    this.initialized = false;
  }

  init() {
    if (this.initialized) return;

    // 1. Inicializa Provedor Externo
    initExternalAnalytics();

    // 2. Resolve Sessão e Visitante
    const { session, isNew } = getOrCreateSession();
    const utm = parseUTMParams();

    // 3. Processa Atribuição
    if (Object.keys(utm).length > 0) {
      saveAttribution(utm);
    }

    // 4. Dispara Evento de Início de Sessão se for uma nova visita
    if (isNew) {
      const trafficSource = getTrafficSource(utm);
      this.track('session_started', {
        landing_page: session.landing_page,
        referrer: session.referrer,
        traffic_source: trafficSource,
        ...utm,
      });
    }

    this.initialized = true;
  }

  track(eventName, customProperties = {}) {
    const { session } = getOrCreateSession();
    const attribution = getAttributionData();

    const payload = {
      event_name: eventName,
      timestamp: new Date().toISOString(),
      visitor_id: getOrCreateVisitorId(),
      session_id: session.session_id,
      path: window.location.pathname,
      url: window.location.href,
      device_type: window.innerWidth < 768 ? 'mobile' : 'desktop',
      ...attribution,
      ...customProperties,
    };

    sendToProvider(eventName, payload);
  }

  identify(userId, traits = {}) {
    identifyUserInProvider(userId, traits);
  }
}

export const analytics = new AnalyticsEngine();