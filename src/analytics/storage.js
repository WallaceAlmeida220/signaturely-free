const VISITOR_KEY = 'sigcraft_visitor_id';
const SESSION_KEY = 'sigcraft_session_data';
const FIRST_TOUCH_KEY = 'sigcraft_first_touch';
const LAST_TOUCH_KEY = 'sigcraft_last_touch';

// Função nativa para gerar UUID sem dependências de pacotes externos
function generateUUID() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return 'v_' + Math.random().toString(36).substring(2, 11) + Date.now();
}

// Retorna ou gera um UUID anônimo e persistente
export function getOrCreateVisitorId() {
  let visitorId = localStorage.getItem(VISITOR_KEY);
  if (!visitorId) {
    visitorId = generateUUID();
    localStorage.setItem(VISITOR_KEY, visitorId);
  }
  return visitorId;
}

// Gerenciamento de Sessão Ativa
export function getOrCreateSession() {
  const visitorId = getOrCreateVisitorId();
  const now = Date.now();
  const rawSession = sessionStorage.getItem(SESSION_KEY);
  
  if (rawSession) {
    try {
      const session = JSON.parse(rawSession);
      session.last_activity = now;
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
      return { session, isNew: false };
    } catch (e) {
      // Re-inicializa se estiver corrompido
    }
  }

  const sessionId = 's_' + Math.random().toString(36).substring(2, 11) + now;
  const newSession = {
    session_id: sessionId,
    visitor_id: visitorId,
    started_at: new Date(now).toISOString(),
    last_activity: now,
    landing_page: window.location.pathname + window.location.search,
    referrer: document.referrer || 'direct',
  };

  sessionStorage.setItem(SESSION_KEY, JSON.stringify(newSession));
  return { session: newSession, isNew: true };
}

// Salva a Atribuição First-Touch e Last-Touch
export function saveAttribution(utmData) {
  if (!utmData || Object.keys(utmData).length === 0) return;

  const now = new Date().toISOString();
  const attributionPayload = { ...utmData, captured_at: now };

  if (!localStorage.getItem(FIRST_TOUCH_KEY)) {
    localStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(attributionPayload));
  }

  localStorage.setItem(LAST_TOUCH_KEY, JSON.stringify(attributionPayload));
}

export function getAttributionData() {
  const firstTouch = JSON.parse(localStorage.getItem(FIRST_TOUCH_KEY) || '{}');
  const lastTouch = JSON.parse(localStorage.getItem(LAST_TOUCH_KEY) || '{}');

  return {
    first_touch_source: firstTouch.utm_source || 'direct',
    first_touch_medium: firstTouch.utm_medium || 'none',
    first_touch_campaign: firstTouch.utm_campaign || 'none',
    last_touch_source: lastTouch.utm_source || 'direct',
    last_touch_medium: lastTouch.utm_medium || 'none',
    last_touch_campaign: lastTouch.utm_campaign || 'none',
  };
}