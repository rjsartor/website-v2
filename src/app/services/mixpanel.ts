import mixpanel from 'mixpanel-browser';

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN; 
// const MIXPANEL_TOKEN = 'LOCAL';

const initializeMixpanel = (): void => {
  if (typeof window !== 'undefined' && MIXPANEL_TOKEN) {
    mixpanel.init(MIXPANEL_TOKEN, {debug: true, track_pageview: true, persistence: 'localStorage'});
  }
};

const trackEvent = (event: string, properties?: Record<string, unknown>): void => {
    mixpanel.track(event, properties);
};

const trackPageView = (page: string): void => {
  mixpanel.track('Page Viewed', { page });
};

const trackButtonClick = (buttonName: string): void => {
  mixpanel.track('Button Clicked', { buttonName });
};

export { trackPageView, trackButtonClick, initializeMixpanel, trackEvent };