import * as index from './lib-components/index.js';
export { default as TestLibTsSample } from './lib-components/test-lib-ts-sample/test-lib-ts-sample.vue.js';
export { default as TestA } from './lib-components/test-a/test-a.vue.js';

// Import vue components

const install = function installTestLibTs(Vue) {
  Object.entries(index).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export default install;
