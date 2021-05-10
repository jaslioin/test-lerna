import * as index from './lib-components/index.js';
export { default as TestLibSample } from './lib-components/test-lib-sample/test-lib-sample.vue.js';
export { default as TestA } from './lib-components/test-a/test-a.vue.js';
export { default as TestFolder } from './lib-components/test-folder/test-folder.vue.js';

// Import vue components

const install = function installTestLib(Vue) {
  Object.entries(index).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export default install;
