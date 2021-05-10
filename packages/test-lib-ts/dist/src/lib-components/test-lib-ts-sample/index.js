import script from './test-lib-ts-sample.vue_rollup-plugin-vue=script.js';
import normalizeComponent from '../../../node_modules/vue-runtime-helpers/dist/normalize-component.mjs.js';
import createInjector from '../../../node_modules/vue-runtime-helpers/dist/inject-style/browser.mjs.js';

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "test-lib-ts-sample"
  }, [_c('p', [_vm._v("\n    The counter was " + _vm._s(_vm.changedBy) + " to "), _c('b', [_vm._v(_vm._s(_vm.counter))]), _vm._v(".\n  ")]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.increment
    }
  }, [_vm._v("Click +1")]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.decrement
    }
  }, [_vm._v("Click -1")]), _vm._v(" "), _c('button', {
    on: {
      "click": function ($event) {
        return _vm.increment(5);
      }
    }
  }, [_vm._v("Click +5")]), _vm._v(" "), _c('button', {
    on: {
      "click": function ($event) {
        return _vm.decrement(5);
      }
    }
  }, [_vm._v("Click -5")]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.reset
    }
  }, [_vm._v("Reset")])]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-793b1b36_0", {
    source: ".test-lib-ts-sample[data-v-793b1b36]{display:block;width:400px;margin:25px auto;border:1px solid #ccc;background:#eaeaea;text-align:center;padding:25px}.test-lib-ts-sample p[data-v-793b1b36]{margin:0 0 1em}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-793b1b36";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

export default __vue_component__;
