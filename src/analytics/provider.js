import posthog from 'posthog-js';

const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY;
const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com';

let isExternalAnalyticsReady = false;

export function initExternalAnalytics() {
  if (POSTHOG_KEY) {
    try {
      posthog.init(POSTHOG_KEY, {
        api_host: POSTHOG_HOST,
        autocapture: false,
        capture_pageview: false,
        persistence: 'localStorage',
        sanitize_properties: (properties) => {
          delete properties.password;
          delete properties.token;
          delete properties.credit_card;
          return properties;
        },
      });
      isExternalAnalyticsReady = true;
      if (import.meta.env.DEV) {
        console.log('[Analytics] PostHog conectado e pronto!');
      }
    } catch (error) {
      if (import.meta.env.DEV) {
        console.warn('[Analytics] Falha ao inicializar o PostHog:', error);
      }
    }
  } else {
    if (import.meta.env.DEV) {
      console.log('[Analytics] Nenhuma chave do PostHog encontrada no .env.local.');
    }
  }
}

export function sendToProvider(eventName, payload) {
  if (isExternalAnalyticsReady) {
    posthog.capture(eventName, payload);
  }

  if (import.meta.env.DEV) {
    console.groupCollapsed(`[Analytics Track] ${eventName}`);
    console.log('Payload:', payload);
    console.groupEnd();
  }
}

export function identifyUserInProvider(userId, userTraits = {}) {
  if (isExternalAnalyticsReady) {
    posthog.identify(userId, userTraits);
  }
}