import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from '../../analytics';
import { EVENT_NAMES } from '../../analytics/types';

export function RouteTracker() {
  const location = useLocation();
  const lastTrackedPath = useRef(null);

  useEffect(() => {
    const currentPath = location.pathname + location.search;

    if (lastTrackedPath.current !== currentPath) {
      lastTrackedPath.current = currentPath;
      analytics.track(EVENT_NAMES.PAGE_VIEW, {
        pathname: location.pathname,
        search: location.search,
      });
    }
  }, [location]);

  return null;
}