import script from './test-lib-sample.vue_rollup-plugin-vue=script.js';
import normalizeComponent from '../../../node_modules/vue-runtime-helpers/dist/normalize-component.mjs.js';
import createInjector from '../../../node_modules/vue-runtime-helpers/dist/inject-style/browser.mjs.js';

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "test-lib-sample"
  }, [_c("p", [_vm._v("The counter was " + _vm._s(_vm.changedBy) + " to "), _c("b", [_vm._v(_vm._s(_vm.counter))]), _vm._v(".")]), _vm._v(" "), _c("button", {
    on: {
      click: _vm.increment
    }
  }, [_vm._v("\n    Click +1\n  ")]), _vm._v(" "), _c("button", {
    on: {
      click: _vm.decrement
    }
  }, [_vm._v("\n    Click -1\n  ")]), _vm._v(" "), _c("button", {
    on: {
      click: function ($event) {
        return _vm.increment(5);
      }
    }
  }, [_vm._v("\n    Click +5\n  ")]), _vm._v(" "), _c("button", {
    on: {
      click: function ($event) {
        return _vm.decrement(5);
      }
    }
  }, [_vm._v("\n    Click -5\n  ")]), _vm._v(" "), _c("button", {
    on: {
      click: _vm.reset
    }
  }, [_vm._v("\n    Reset\n  ")])]);
};

var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-37fad576_0", {
    source: "\n.test-lib-sample[data-v-37fad576] {\n  display: block;\n  width: 400px;\n  margin: 25px auto;\n  border: 1px solid #ccc;\n  background: #eaeaea;\n  text-align: center;\n  padding: 25px;\n}\n.test-lib-sample p[data-v-37fad576] {\n  margin: 0 0 1em;\n}\n",
    map: {
      "version": 3,
      "sources": ["C:\\Users\\User\\Projects\\New folder\\test-lib\\src\\lib-components\\test-lib-sample\\test-lib-sample.vue"],
      "names": [],
      "mappings": ";AAiEA;EACA,cAAA;EACA,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;EACA,aAAA;AACA;AACA;EACA,eAAA;AACA",
      "file": "test-lib-sample.vue",
      "sourcesContent": ["<script>\n\nexport default /*#__PURE__*/{\n  name: 'TestLibSample', // vue component name\n  data() {\n    return {\n      counter: 5,\n      initCounter: 5,\n      message: {\n        action: null,\n        amount: null,\n      },\n    };\n  },\n  computed: {\n    changedBy() {\n      const { message } = this;\n      if (!message.action) return 'initialized';\n      return `${message.action} ${message.amount || ''}`.trim();\n    },\n  },\n  methods: {\n    increment(arg) {\n      const amount = (typeof arg !== 'number') ? 1 : arg;\n      this.counter += amount;\n      this.message.action = 'incremented by';\n      this.message.amount = amount;\n    },\n    decrement(arg) {\n      const amount = (typeof arg !== 'number') ? 1 : arg;\n      this.counter -= amount;\n      this.message.action = 'decremented by';\n      this.message.amount = amount;\n    },\n    reset() {\n      this.counter = this.initCounter;\n      this.message.action = 'reset';\n      this.message.amount = null;\n    },\n  },\n};\n</script>\n\n<template>\n  <div class=\"test-lib-sample\">\n    <p>The counter was {{ changedBy }} to <b>{{ counter }}</b>.</p>\n    <button @click=\"increment\">\n      Click +1\n    </button>\n    <button @click=\"decrement\">\n      Click -1\n    </button>\n    <button @click=\"increment(5)\">\n      Click +5\n    </button>\n    <button @click=\"decrement(5)\">\n      Click -5\n    </button>\n    <button @click=\"reset\">\n      Reset\n    </button>\n  </div>\n</template>\n\n<style scoped>\n  .test-lib-sample {\n    display: block;\n    width: 400px;\n    margin: 25px auto;\n    border: 1px solid #ccc;\n    background: #eaeaea;\n    text-align: center;\n    padding: 25px;\n  }\n  .test-lib-sample p {\n    margin: 0 0 1em;\n  }\n</style>\n"]
    },
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-37fad576";
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
