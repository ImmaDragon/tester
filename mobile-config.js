App.icons({
  'ipad': 'public/images/appicon.png',
  'ipad_2x': 'public/images/appicon.png',
});


App.launchScreens({
  'ipad_landscape': 'public/images/splash.png',
  'ipad_landscape_2x': 'public/images/splash.png',
});

App.setPreference('Orientation', 'landscape');
App.setPreference('SuppressesIncrementalRendering', true);
App.setPreference('BackupWebStorage', 'none');
App.accessRule('*');