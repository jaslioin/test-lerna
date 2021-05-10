import script from './test-a.vue_rollup-plugin-vue=script.js';
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
  }, [_c("p", [_vm._v("\n    The counter was " + _vm._s(_vm.changedBy) + " to "), _c("b", [_vm._v(_vm._s(_vm.counter))]), _vm._v(".\n  ")]), _vm._v(" "), _c("button", {
    on: {
      click: _vm.increment
    }
  }, [_vm._v("Click +1")]), _vm._v(" "), _c("button", {
    on: {
      click: _vm.decrement
    }
  }, [_vm._v("Click -1")]), _vm._v(" "), _c("button", {
    on: {
      click: function ($event) {
        return _vm.increment(5);
      }
    }
  }, [_vm._v("Click +5")]), _vm._v(" "), _c("button", {
    on: {
      click: function ($event) {
        return _vm.decrement(5);
      }
    }
  }, [_vm._v("Click -5")]), _vm._v(" "), _c("button", {
    on: {
      click: _vm.reset
    }
  }, [_vm._v("Reset")])]);
};

var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-4bbcdb9a_0", {
    source: "\n.test-lib-sample[data-v-4bbcdb9a] {\n  display: block;\n  width: 400px;\n  margin: 25px auto;\n  border: 1px solid #ccc;\n  background: #eaeaea;\n  text-align: center;\n  padding: 25px;\n}\n.test-lib-sample p[data-v-4bbcdb9a] {\n  margin: 0 0 1em;\n}\n",
    map: {
      "version": 3,
      "sources": ["C:\\Users\\User\\Projects\\New folder\\test-lib\\src\\lib-components\\test-a\\test-a.vue"],
      "names": [],
      "mappings": ";AAyDA;EACA,cAAA;EACA,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;EACA,aAAA;AACA;AACA;EACA,eAAA;AACA",
      "file": "test-a.vue",
      "sourcesContent": ["<script>\nexport default /*#__PURE__*/ {\n  name: \"TestA\", // vue component name\n  data() {\n    return {\n      counter: 5,\n      initCounter: 5,\n      message: {\n        action: null,\n        amount: null,\n      },\n    };\n  },\n  computed: {\n    changedBy() {\n      const { message } = this;\n      if (!message.action) return \"initialized\";\n      return `${message.action} ${message.amount || \"\"}`.trim();\n    },\n  },\n  methods: {\n    increment(arg) {\n      const amount = typeof arg !== \"number\" ? 1 : arg;\n      this.counter += amount;\n      this.message.action = \"incremented by\";\n      this.message.amount = amount;\n    },\n    decrement(arg) {\n      const amount = typeof arg !== \"number\" ? 1 : arg;\n      this.counter -= amount;\n      this.message.action = \"decremented by\";\n      this.message.amount = amount;\n    },\n    reset() {\n      this.counter = this.initCounter;\n      this.message.action = \"reset\";\n      this.message.amount = null;\n    },\n  },\n};\n</script>\n\n<template>\n  <div class=\"test-lib-sample\">\n    <p>\n      The counter was {{ changedBy }} to <b>{{ counter }}</b\n      >.\n    </p>\n    <button @click=\"increment\">Click +1</button>\n    <button @click=\"decrement\">Click -1</button>\n    <button @click=\"increment(5)\">Click +5</button>\n    <button @click=\"decrement(5)\">Click -5</button>\n    <button @click=\"reset\">Reset</button>\n  </div>\n</template>\n\n<style scoped>\n.test-lib-sample {\n  display: block;\n  width: 400px;\n  margin: 25px auto;\n  border: 1px solid #ccc;\n  background: #eaeaea;\n  text-align: center;\n  padding: 25px;\n}\n.test-lib-sample p {\n  margin: 0 0 1em;\n}\n</style>\n"]
    },
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-4bbcdb9a";
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
