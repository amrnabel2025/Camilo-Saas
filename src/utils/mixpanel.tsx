import mixpanel from 'mixpanel-browser';
// _____________Initialize Mixpanel______________//

mixpanel.init('56f86cc178d8d66e3db03cb254242728', {
  debug: true, // Enables debugging
  track_pageview: true, // Automatically track page views
  persistence: 'localStorage', // Stores user data in localStorage
});

// ______________________Routing Tracking_______________________//
export const RoutingTracking = (page: string) => {
  mixpanel.track(page, {
    status: 'n/a', // No Success/Failure concept here
    page: page,
    timestamp: new Date().toISOString(),
  });
};


export const ActionControl = (
  action: string,
) => {
  mixpanel.track(action, {
    action,
    timestamp: new Date().toISOString(),
  });
};

export default mixpanel;
