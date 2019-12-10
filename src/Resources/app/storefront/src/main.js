import FroshPlatformSearchFilterPlugin from './frosh-platform-filter-search/frosh-platform-filter-search.plugin';

const PluginManager = window.PluginManager;
PluginManager.register('FroshPlatformFilterSearch', FroshPlatformSearchFilterPlugin, '[data-frosh-platform-filter-search=true]');

if (module.hot) {
    module.hot.accept();
}
