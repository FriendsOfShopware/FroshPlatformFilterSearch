import FroshPlatformSearchFilterPlugin from './frosh-platform-filter-search/frosh-platform-filter-search.plugin.js';

const PluginManager = window.PluginManager;
PluginManager.register('FroshPlatformFilterSearch', FroshPlatformSearchFilterPlugin, '[data-frosh-platform-filter-search=true]');
