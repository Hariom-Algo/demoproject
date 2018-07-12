var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

var rootDir = 'system-dashboard-debug';
module.exports = {
    navigateFallback: '/index.html',
    navigateFallbackWhitelist: [/^(?!\/__)/], // <-- necessary for Firebase OAuth
    root: 'system-dashboard-debug/',
    plugins: [
    new SWPrecacheWebpackPlugin({
    cacheId: 'system-dashboard-debug',
    filename: 'service-worker.js',
    staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}'],
    stripPrefixMulti: {
	'dist': 'system-dashboard-debug/',
    },
    mergeStaticsConfig: true // if you don't set this to true, you won't see any webpack-emitted assets in your serviceworker config
	}),
    ]
  };
