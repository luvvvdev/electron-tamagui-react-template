var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@tamagui/font-inter/dist/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/@tamagui/font-inter/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      createInterFont: () => createInterFont2
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_core6 = require("@tamagui/core-node");
    var import_react_native = require("react-native-web-lite");
    var createInterFont2 = /* @__PURE__ */ __name((font = {}, {
      sizeLineHeight = /* @__PURE__ */ __name((size2) => size2 + 10, "sizeLineHeight"),
      sizeSize = /* @__PURE__ */ __name((size2) => size2 * 1, "sizeSize")
    } = {}) => {
      const size2 = Object.fromEntries(
        Object.entries({
          ...defaultSizes,
          ...font.size
        }).map(([k, v]) => [k, sizeSize(+v)])
      );
      return (0, import_core6.createFont)({
        family: import_react_native.Platform.OS == "web" ? 'Inter, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' : "Inter",
        lineHeight: Object.fromEntries(
          Object.entries(size2).map(([k, v]) => [k, sizeLineHeight((0, import_core6.getVariableValue)(v))])
        ),
        weight: {
          4: "300"
        },
        letterSpacing: {
          4: 0
        },
        ...font,
        size: size2
      });
    }, "createInterFont");
    var defaultSizes = {
      1: 11,
      2: 12,
      3: 13,
      4: 14,
      5: 16,
      6: 18,
      7: 20,
      8: 23,
      9: 30,
      10: 46,
      11: 55,
      12: 62,
      13: 72,
      14: 92,
      15: 114,
      16: 134
    };
  }
});

// node_modules/@tamagui/font-silkscreen/dist/cjs/index.js
var require_cjs2 = __commonJS({
  "node_modules/@tamagui/font-silkscreen/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      createSilkscreenFont: () => createSilkscreenFont2
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_core6 = require("@tamagui/core-node");
    var import_react_native = require("react-native-web-lite");
    var createSilkscreenFont2 = /* @__PURE__ */ __name((font = {}) => {
      return (0, import_core6.createFont)({
        family: import_react_native.Platform.OS == "web" ? "Silkscreen, Fira Code, Monaco, Consolas, Ubuntu Mono, monospace" : "Silkscreen",
        size: size2,
        lineHeight: Object.fromEntries(
          Object.entries(size2).map(([k, v]) => [k, v * 1.2 + 6])
        ),
        weight: {
          4: "300"
        },
        letterSpacing: {
          4: 1,
          5: 3,
          6: 3,
          9: -2,
          10: -3,
          12: -4
        },
        ...font
      });
    }, "createSilkscreenFont");
    var size2 = {
      1: 11,
      2: 12,
      3: 13,
      4: 14,
      5: 15,
      6: 16,
      7: 18,
      8: 21,
      9: 28,
      10: 42,
      11: 52,
      12: 62,
      13: 72,
      14: 92,
      15: 114,
      16: 124
    };
  }
});

// node_modules/@tamagui/shorthands/dist/cjs/index.js
var require_cjs3 = __commonJS({
  "node_modules/@tamagui/shorthands/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      shorthands: () => shorthands2
    });
    module2.exports = __toCommonJS2(src_exports);
    var shorthands2 = {
      ussel: "userSelect",
      cur: "cursor",
      pe: "pointerEvents",
      col: "color",
      ff: "fontFamily",
      fos: "fontSize",
      fost: "fontStyle",
      fow: "fontWeight",
      ls: "letterSpacing",
      lh: "lineHeight",
      ta: "textAlign",
      tt: "textTransform",
      ww: "wordWrap",
      ac: "alignContent",
      ai: "alignItems",
      als: "alignSelf",
      b: "bottom",
      bc: "backgroundColor",
      bg: "backgroundColor",
      bbc: "borderBottomColor",
      bblr: "borderBottomLeftRadius",
      bbrr: "borderBottomRightRadius",
      bbw: "borderBottomWidth",
      blc: "borderLeftColor",
      blw: "borderLeftWidth",
      boc: "borderColor",
      br: "borderRadius",
      bs: "borderStyle",
      brw: "borderRightWidth",
      brc: "borderRightColor",
      btc: "borderTopColor",
      btlr: "borderTopLeftRadius",
      btrr: "borderTopRightRadius",
      btw: "borderTopWidth",
      bw: "borderWidth",
      dsp: "display",
      f: "flex",
      fb: "flexBasis",
      fd: "flexDirection",
      fg: "flexGrow",
      fs: "flexShrink",
      fw: "flexWrap",
      h: "height",
      jc: "justifyContent",
      l: "left",
      m: "margin",
      mah: "maxHeight",
      maw: "maxWidth",
      mb: "marginBottom",
      mih: "minHeight",
      miw: "minWidth",
      ml: "marginLeft",
      mr: "marginRight",
      mt: "marginTop",
      mx: "marginHorizontal",
      my: "marginVertical",
      o: "opacity",
      ov: "overflow",
      p: "padding",
      pb: "paddingBottom",
      pl: "paddingLeft",
      pos: "position",
      pr: "paddingRight",
      pt: "paddingTop",
      px: "paddingHorizontal",
      py: "paddingVertical",
      r: "right",
      shac: "shadowColor",
      shar: "shadowRadius",
      shof: "shadowOffset",
      shop: "shadowOpacity",
      t: "top",
      w: "width",
      zi: "zIndex"
    };
    shorthands2["bxs"] = "boxSizing";
    shorthands2["bxsh"] = "boxShadow";
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/amber.js
var require_amber = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/amber.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var amber_exports = {};
    __export2(amber_exports, {
      amber: () => amber2
    });
    module2.exports = __toCommonJS2(amber_exports);
    var amber2 = {
      amber1: "hsl(36, 100%, 6.1%)",
      amber2: "hsl(35, 100%, 7.6%)",
      amber3: "hsl(32, 100%, 10.2%)",
      amber4: "hsl(32, 100%, 12.4%)",
      amber5: "hsl(33, 100%, 14.6%)",
      amber6: "hsl(35, 100%, 17.1%)",
      amber7: "hsl(35, 91.0%, 21.6%)",
      amber8: "hsl(36, 100%, 25.5%)",
      amber9: "hsl(39, 100%, 57.0%)",
      amber10: "hsl(43, 100%, 64.0%)",
      amber11: "hsl(39, 90.0%, 49.8%)",
      amber12: "hsl(39, 97.0%, 93.2%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/blue.js
var require_blue = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/blue.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var blue_exports = {};
    __export2(blue_exports, {
      blue: () => blue3
    });
    module2.exports = __toCommonJS2(blue_exports);
    var blue3 = {
      blue1: "hsl(212, 35.0%, 9.2%)",
      blue2: "hsl(216, 50.0%, 11.8%)",
      blue3: "hsl(214, 59.4%, 15.3%)",
      blue4: "hsl(214, 65.8%, 17.9%)",
      blue5: "hsl(213, 71.2%, 20.2%)",
      blue6: "hsl(212, 77.4%, 23.1%)",
      blue7: "hsl(211, 85.1%, 27.4%)",
      blue8: "hsl(211, 89.7%, 34.1%)",
      blue9: "hsl(206, 100%, 50.0%)",
      blue10: "hsl(209, 100%, 60.6%)",
      blue11: "hsl(210, 100%, 66.1%)",
      blue12: "hsl(206, 98.0%, 95.8%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/bronze.js
var require_bronze = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/bronze.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var bronze_exports = {};
    __export2(bronze_exports, {
      bronze: () => bronze2
    });
    module2.exports = __toCommonJS2(bronze_exports);
    var bronze2 = {
      bronze1: "hsl(17, 10.0%, 8.8%)",
      bronze2: "hsl(15, 14.8%, 10.6%)",
      bronze3: "hsl(15, 16.3%, 14.3%)",
      bronze4: "hsl(16, 17.1%, 17.2%)",
      bronze5: "hsl(16, 17.6%, 19.6%)",
      bronze6: "hsl(16, 18.1%, 22.9%)",
      bronze7: "hsl(17, 18.8%, 28.8%)",
      bronze8: "hsl(17, 19.6%, 38.0%)",
      bronze9: "hsl(17, 20.0%, 54.0%)",
      bronze10: "hsl(18, 24.0%, 59.0%)",
      bronze11: "hsl(18, 35.0%, 68.5%)",
      bronze12: "hsl(18, 57.0%, 94.1%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/brown.js
var require_brown = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/brown.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var brown_exports = {};
    __export2(brown_exports, {
      brown: () => brown2
    });
    module2.exports = __toCommonJS2(brown_exports);
    var brown2 = {
      brown1: "hsl(22, 15.0%, 8.7%)",
      brown2: "hsl(20, 28.3%, 10.4%)",
      brown3: "hsl(20, 28.0%, 14.0%)",
      brown4: "hsl(21, 28.4%, 16.5%)",
      brown5: "hsl(22, 28.7%, 18.9%)",
      brown6: "hsl(23, 29.0%, 22.3%)",
      brown7: "hsl(25, 29.5%, 27.8%)",
      brown8: "hsl(27, 30.1%, 35.9%)",
      brown9: "hsl(28, 34.0%, 51.0%)",
      brown10: "hsl(28, 41.4%, 55.8%)",
      brown11: "hsl(28, 60.0%, 64.5%)",
      brown12: "hsl(30, 67.0%, 94.0%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/crimson.js
var require_crimson = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/crimson.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var crimson_exports = {};
    __export2(crimson_exports, {
      crimson: () => crimson2
    });
    module2.exports = __toCommonJS2(crimson_exports);
    var crimson2 = {
      crimson1: "hsl(335, 20.0%, 9.6%)",
      crimson2: "hsl(335, 32.2%, 11.6%)",
      crimson3: "hsl(335, 42.5%, 16.5%)",
      crimson4: "hsl(335, 47.2%, 19.3%)",
      crimson5: "hsl(335, 50.9%, 21.8%)",
      crimson6: "hsl(335, 55.7%, 25.3%)",
      crimson7: "hsl(336, 62.9%, 30.8%)",
      crimson8: "hsl(336, 74.9%, 39.0%)",
      crimson9: "hsl(336, 80.0%, 57.8%)",
      crimson10: "hsl(339, 84.1%, 62.6%)",
      crimson11: "hsl(341, 90.0%, 67.3%)",
      crimson12: "hsl(332, 87.0%, 96.0%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/cyan.js
var require_cyan = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/cyan.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var cyan_exports = {};
    __export2(cyan_exports, {
      cyan: () => cyan2
    });
    module2.exports = __toCommonJS2(cyan_exports);
    var cyan2 = {
      cyan1: "hsl(192, 60.0%, 7.2%)",
      cyan2: "hsl(192, 71.4%, 8.2%)",
      cyan3: "hsl(192, 75.9%, 10.8%)",
      cyan4: "hsl(192, 79.3%, 12.8%)",
      cyan5: "hsl(192, 82.5%, 14.6%)",
      cyan6: "hsl(192, 86.6%, 16.9%)",
      cyan7: "hsl(192, 92.6%, 20.1%)",
      cyan8: "hsl(192, 100%, 24.5%)",
      cyan9: "hsl(190, 95.0%, 39.0%)",
      cyan10: "hsl(188, 100%, 40.0%)",
      cyan11: "hsl(186, 100%, 42.2%)",
      cyan12: "hsl(185, 73.0%, 93.2%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/gold.js
var require_gold = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/gold.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var gold_exports = {};
    __export2(gold_exports, {
      gold: () => gold2
    });
    module2.exports = __toCommonJS2(gold_exports);
    var gold2 = {
      gold1: "hsl(44, 9.0%, 8.3%)",
      gold2: "hsl(43, 14.3%, 9.6%)",
      gold3: "hsl(42, 15.5%, 13.0%)",
      gold4: "hsl(41, 16.4%, 15.6%)",
      gold5: "hsl(41, 16.9%, 17.8%)",
      gold6: "hsl(40, 17.6%, 20.8%)",
      gold7: "hsl(38, 18.5%, 26.4%)",
      gold8: "hsl(36, 19.6%, 35.1%)",
      gold9: "hsl(36, 20.0%, 49.5%)",
      gold10: "hsl(36, 22.3%, 54.5%)",
      gold11: "hsl(35, 30.0%, 64.0%)",
      gold12: "hsl(49, 52.0%, 93.8%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/grass.js
var require_grass = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/grass.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var grass_exports = {};
    __export2(grass_exports, {
      grass: () => grass2
    });
    module2.exports = __toCommonJS2(grass_exports);
    var grass2 = {
      grass1: "hsl(146, 30.0%, 7.4%)",
      grass2: "hsl(136, 33.3%, 8.8%)",
      grass3: "hsl(137, 36.0%, 11.4%)",
      grass4: "hsl(137, 37.6%, 13.7%)",
      grass5: "hsl(136, 38.7%, 16.0%)",
      grass6: "hsl(135, 39.6%, 19.1%)",
      grass7: "hsl(134, 40.3%, 23.8%)",
      grass8: "hsl(131, 40.1%, 30.8%)",
      grass9: "hsl(131, 41.0%, 46.5%)",
      grass10: "hsl(131, 39.0%, 52.1%)",
      grass11: "hsl(131, 43.0%, 57.2%)",
      grass12: "hsl(137, 72.0%, 94.0%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/gray.js
var require_gray = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/gray.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var gray_exports = {};
    __export2(gray_exports, {
      gray: () => gray3
    });
    module2.exports = __toCommonJS2(gray_exports);
    var gray3 = {
      gray1: "hsl(0, 0%, 8.5%)",
      gray2: "hsl(0, 0%, 11.0%)",
      gray3: "hsl(0, 0%, 13.6%)",
      gray4: "hsl(0, 0%, 15.8%)",
      gray5: "hsl(0, 0%, 17.9%)",
      gray6: "hsl(0, 0%, 20.5%)",
      gray7: "hsl(0, 0%, 24.3%)",
      gray8: "hsl(0, 0%, 31.2%)",
      gray9: "hsl(0, 0%, 43.9%)",
      gray10: "hsl(0, 0%, 49.4%)",
      gray11: "hsl(0, 0%, 62.8%)",
      gray12: "hsl(0, 0%, 93.0%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/green.js
var require_green = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/green.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var green_exports = {};
    __export2(green_exports, {
      green: () => green3
    });
    module2.exports = __toCommonJS2(green_exports);
    var green3 = {
      green1: "hsl(146, 30.0%, 7.4%)",
      green2: "hsl(155, 44.2%, 8.4%)",
      green3: "hsl(155, 46.7%, 10.9%)",
      green4: "hsl(154, 48.4%, 12.9%)",
      green5: "hsl(154, 49.7%, 14.9%)",
      green6: "hsl(154, 50.9%, 17.6%)",
      green7: "hsl(153, 51.8%, 21.8%)",
      green8: "hsl(151, 51.7%, 28.4%)",
      green9: "hsl(151, 55.0%, 41.5%)",
      green10: "hsl(151, 49.3%, 46.5%)",
      green11: "hsl(151, 50.0%, 53.2%)",
      green12: "hsl(137, 72.0%, 94.0%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/indigo.js
var require_indigo = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/indigo.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var indigo_exports = {};
    __export2(indigo_exports, {
      indigo: () => indigo2
    });
    module2.exports = __toCommonJS2(indigo_exports);
    var indigo2 = {
      indigo1: "hsl(229, 24.0%, 10.0%)",
      indigo2: "hsl(230, 36.4%, 12.9%)",
      indigo3: "hsl(228, 43.3%, 17.5%)",
      indigo4: "hsl(227, 47.2%, 21.0%)",
      indigo5: "hsl(227, 50.0%, 24.1%)",
      indigo6: "hsl(226, 52.9%, 28.2%)",
      indigo7: "hsl(226, 56.0%, 34.5%)",
      indigo8: "hsl(226, 58.2%, 44.1%)",
      indigo9: "hsl(226, 70.0%, 55.5%)",
      indigo10: "hsl(227, 75.2%, 61.6%)",
      indigo11: "hsl(228, 100%, 75.9%)",
      indigo12: "hsl(226, 83.0%, 96.3%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/lime.js
var require_lime = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/lime.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var lime_exports = {};
    __export2(lime_exports, {
      lime: () => lime2
    });
    module2.exports = __toCommonJS2(lime_exports);
    var lime2 = {
      lime1: "hsl(75, 55.0%, 6.0%)",
      lime2: "hsl(74, 56.8%, 7.3%)",
      lime3: "hsl(78, 50.2%, 9.9%)",
      lime4: "hsl(79, 50.3%, 12.1%)",
      lime5: "hsl(79, 52.6%, 14.2%)",
      lime6: "hsl(78, 55.7%, 16.7%)",
      lime7: "hsl(77, 59.7%, 20.1%)",
      lime8: "hsl(75, 64.8%, 24.5%)",
      lime9: "hsl(81, 67.0%, 50.0%)",
      lime10: "hsl(75, 85.0%, 60.0%)",
      lime11: "hsl(81, 70.0%, 43.8%)",
      lime12: "hsl(84, 79.0%, 92.6%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/mint.js
var require_mint = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/mint.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var mint_exports = {};
    __export2(mint_exports, {
      mint: () => mint2
    });
    module2.exports = __toCommonJS2(mint_exports);
    var mint2 = {
      mint1: "hsl(173, 50.0%, 6.6%)",
      mint2: "hsl(176, 73.0%, 7.3%)",
      mint3: "hsl(175, 79.3%, 8.9%)",
      mint4: "hsl(174, 84.8%, 10.3%)",
      mint5: "hsl(174, 90.2%, 11.9%)",
      mint6: "hsl(173, 96.0%, 13.8%)",
      mint7: "hsl(172, 100%, 16.8%)",
      mint8: "hsl(170, 100%, 21.4%)",
      mint9: "hsl(167, 65.0%, 66.0%)",
      mint10: "hsl(163, 80.0%, 77.0%)",
      mint11: "hsl(167, 70.0%, 48.0%)",
      mint12: "hsl(165, 80.0%, 94.8%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/olive.js
var require_olive = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/olive.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var olive_exports = {};
    __export2(olive_exports, {
      olive: () => olive2
    });
    module2.exports = __toCommonJS2(olive_exports);
    var olive2 = {
      olive1: "hsl(110, 5.0%, 8.6%)",
      olive2: "hsl(105, 7.4%, 10.6%)",
      olive3: "hsl(106, 6.4%, 13.1%)",
      olive4: "hsl(106, 5.8%, 15.3%)",
      olive5: "hsl(107, 5.3%, 17.4%)",
      olive6: "hsl(107, 4.9%, 19.9%)",
      olive7: "hsl(108, 4.4%, 23.6%)",
      olive8: "hsl(110, 3.8%, 30.6%)",
      olive9: "hsl(110, 6.0%, 42.5%)",
      olive10: "hsl(111, 4.8%, 48.2%)",
      olive11: "hsl(110, 5.0%, 61.8%)",
      olive12: "hsl(110, 6.0%, 93.0%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/orange.js
var require_orange = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/orange.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var orange_exports = {};
    __export2(orange_exports, {
      orange: () => orange3
    });
    module2.exports = __toCommonJS2(orange_exports);
    var orange3 = {
      orange1: "hsl(30, 70.0%, 7.2%)",
      orange2: "hsl(28, 100%, 8.4%)",
      orange3: "hsl(26, 91.1%, 11.6%)",
      orange4: "hsl(25, 88.3%, 14.1%)",
      orange5: "hsl(24, 87.6%, 16.6%)",
      orange6: "hsl(24, 88.6%, 19.8%)",
      orange7: "hsl(24, 92.4%, 24.0%)",
      orange8: "hsl(25, 100%, 29.0%)",
      orange9: "hsl(24, 94.0%, 50.0%)",
      orange10: "hsl(24, 100%, 58.5%)",
      orange11: "hsl(24, 100%, 62.2%)",
      orange12: "hsl(24, 97.0%, 93.2%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/pink.js
var require_pink = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/pink.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var pink_exports = {};
    __export2(pink_exports, {
      pink: () => pink3
    });
    module2.exports = __toCommonJS2(pink_exports);
    var pink3 = {
      pink1: "hsl(318, 25.0%, 9.6%)",
      pink2: "hsl(319, 32.2%, 11.6%)",
      pink3: "hsl(319, 41.0%, 16.0%)",
      pink4: "hsl(320, 45.4%, 18.7%)",
      pink5: "hsl(320, 49.0%, 21.1%)",
      pink6: "hsl(321, 53.6%, 24.4%)",
      pink7: "hsl(321, 61.1%, 29.7%)",
      pink8: "hsl(322, 74.9%, 37.5%)",
      pink9: "hsl(322, 65.0%, 54.5%)",
      pink10: "hsl(323, 72.8%, 59.2%)",
      pink11: "hsl(325, 90.0%, 66.4%)",
      pink12: "hsl(322, 90.0%, 95.8%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/plum.js
var require_plum = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/plum.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var plum_exports = {};
    __export2(plum_exports, {
      plum: () => plum2
    });
    module2.exports = __toCommonJS2(plum_exports);
    var plum2 = {
      plum1: "hsl(301, 20.0%, 9.4%)",
      plum2: "hsl(300, 29.8%, 11.2%)",
      plum3: "hsl(298, 34.4%, 15.3%)",
      plum4: "hsl(297, 36.8%, 18.3%)",
      plum5: "hsl(296, 38.5%, 21.1%)",
      plum6: "hsl(295, 40.4%, 24.7%)",
      plum7: "hsl(294, 42.7%, 30.6%)",
      plum8: "hsl(292, 45.1%, 40.0%)",
      plum9: "hsl(292, 45.0%, 51.0%)",
      plum10: "hsl(295, 50.0%, 55.4%)",
      plum11: "hsl(300, 60.0%, 62.0%)",
      plum12: "hsl(296, 74.0%, 95.7%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/purple.js
var require_purple = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/purple.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var purple_exports = {};
    __export2(purple_exports, {
      purple: () => purple3
    });
    module2.exports = __toCommonJS2(purple_exports);
    var purple3 = {
      purple1: "hsl(284, 20.0%, 9.6%)",
      purple2: "hsl(283, 30.0%, 11.8%)",
      purple3: "hsl(281, 37.5%, 16.5%)",
      purple4: "hsl(280, 41.2%, 20.0%)",
      purple5: "hsl(279, 43.8%, 23.3%)",
      purple6: "hsl(277, 46.4%, 27.5%)",
      purple7: "hsl(275, 49.3%, 34.6%)",
      purple8: "hsl(272, 52.1%, 45.9%)",
      purple9: "hsl(272, 51.0%, 54.0%)",
      purple10: "hsl(273, 57.3%, 59.1%)",
      purple11: "hsl(275, 80.0%, 71.0%)",
      purple12: "hsl(279, 75.0%, 95.7%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/mauve.js
var require_mauve = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/mauve.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var mauve_exports = {};
    __export2(mauve_exports, {
      mauve: () => mauve2
    });
    module2.exports = __toCommonJS2(mauve_exports);
    var mauve2 = {
      mauve1: "hsl(246, 6.0%, 9.0%)",
      mauve2: "hsl(240, 5.1%, 11.6%)",
      mauve3: "hsl(241, 5.0%, 14.3%)",
      mauve4: "hsl(242, 4.9%, 16.5%)",
      mauve5: "hsl(243, 4.9%, 18.8%)",
      mauve6: "hsl(244, 4.9%, 21.5%)",
      mauve7: "hsl(245, 4.9%, 25.4%)",
      mauve8: "hsl(247, 4.8%, 32.5%)",
      mauve9: "hsl(252, 4.0%, 45.2%)",
      mauve10: "hsl(247, 3.4%, 50.7%)",
      mauve11: "hsl(253, 4.0%, 63.7%)",
      mauve12: "hsl(256, 6.0%, 93.2%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/red.js
var require_red = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/red.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var red_exports = {};
    __export2(red_exports, {
      red: () => red3
    });
    module2.exports = __toCommonJS2(red_exports);
    var red3 = {
      red1: "hsl(353, 23.0%, 9.8%)",
      red2: "hsl(357, 34.4%, 12.0%)",
      red3: "hsl(356, 43.4%, 16.4%)",
      red4: "hsl(356, 47.6%, 19.2%)",
      red5: "hsl(356, 51.1%, 21.9%)",
      red6: "hsl(356, 55.2%, 25.9%)",
      red7: "hsl(357, 60.2%, 31.8%)",
      red8: "hsl(358, 65.0%, 40.4%)",
      red9: "hsl(358, 75.0%, 59.0%)",
      red10: "hsl(358, 85.3%, 64.0%)",
      red11: "hsl(358, 100%, 69.5%)",
      red12: "hsl(351, 89.0%, 96.0%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/sage.js
var require_sage = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/sage.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var sage_exports = {};
    __export2(sage_exports, {
      sage: () => sage2
    });
    module2.exports = __toCommonJS2(sage_exports);
    var sage2 = {
      sage1: "hsl(155, 7.0%, 8.4%)",
      sage2: "hsl(150, 7.4%, 10.6%)",
      sage3: "hsl(150, 6.7%, 13.1%)",
      sage4: "hsl(150, 6.4%, 15.3%)",
      sage5: "hsl(150, 6.1%, 17.4%)",
      sage6: "hsl(150, 5.8%, 19.9%)",
      sage7: "hsl(150, 5.5%, 23.6%)",
      sage8: "hsl(150, 5.1%, 30.6%)",
      sage9: "hsl(155, 6.0%, 42.5%)",
      sage10: "hsl(153, 4.8%, 48.2%)",
      sage11: "hsl(155, 5.0%, 61.8%)",
      sage12: "hsl(155, 6.0%, 93.0%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/sand.js
var require_sand = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/sand.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var sand_exports = {};
    __export2(sand_exports, {
      sand: () => sand2
    });
    module2.exports = __toCommonJS2(sand_exports);
    var sand2 = {
      sand1: "hsl(61, 2.0%, 8.3%)",
      sand2: "hsl(60, 3.7%, 10.6%)",
      sand3: "hsl(58, 3.7%, 13.1%)",
      sand4: "hsl(57, 3.6%, 15.3%)",
      sand5: "hsl(56, 3.7%, 17.4%)",
      sand6: "hsl(55, 3.7%, 19.9%)",
      sand7: "hsl(53, 3.7%, 23.6%)",
      sand8: "hsl(50, 3.8%, 30.6%)",
      sand9: "hsl(50, 4.0%, 42.7%)",
      sand10: "hsl(52, 3.1%, 48.3%)",
      sand11: "hsl(50, 4.0%, 61.8%)",
      sand12: "hsl(56, 4.0%, 92.8%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/sky.js
var require_sky = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/sky.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var sky_exports = {};
    __export2(sky_exports, {
      sky: () => sky2
    });
    module2.exports = __toCommonJS2(sky_exports);
    var sky2 = {
      sky1: "hsl(205, 45.0%, 8.6%)",
      sky2: "hsl(202, 71.4%, 9.6%)",
      sky3: "hsl(201, 74.6%, 12.2%)",
      sky4: "hsl(201, 77.4%, 14.4%)",
      sky5: "hsl(200, 80.3%, 16.5%)",
      sky6: "hsl(200, 84.1%, 18.9%)",
      sky7: "hsl(199, 90.2%, 22.1%)",
      sky8: "hsl(198, 100%, 26.1%)",
      sky9: "hsl(193, 98.0%, 70.0%)",
      sky10: "hsl(192, 100%, 77.0%)",
      sky11: "hsl(192, 85.0%, 55.8%)",
      sky12: "hsl(198, 98.0%, 95.8%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/slate.js
var require_slate = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/slate.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var slate_exports = {};
    __export2(slate_exports, {
      slate: () => slate2
    });
    module2.exports = __toCommonJS2(slate_exports);
    var slate2 = {
      slate1: "hsl(200, 7.0%, 8.8%)",
      slate2: "hsl(195, 7.1%, 11.0%)",
      slate3: "hsl(197, 6.8%, 13.6%)",
      slate4: "hsl(198, 6.6%, 15.8%)",
      slate5: "hsl(199, 6.4%, 17.9%)",
      slate6: "hsl(201, 6.2%, 20.5%)",
      slate7: "hsl(203, 6.0%, 24.3%)",
      slate8: "hsl(207, 5.6%, 31.6%)",
      slate9: "hsl(206, 6.0%, 43.9%)",
      slate10: "hsl(206, 5.2%, 49.5%)",
      slate11: "hsl(206, 6.0%, 63.0%)",
      slate12: "hsl(210, 6.0%, 93.0%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/teal.js
var require_teal = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/teal.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var teal_exports = {};
    __export2(teal_exports, {
      teal: () => teal2
    });
    module2.exports = __toCommonJS2(teal_exports);
    var teal2 = {
      teal1: "hsl(168, 48.0%, 6.5%)",
      teal2: "hsl(169, 77.8%, 7.1%)",
      teal3: "hsl(170, 76.1%, 9.2%)",
      teal4: "hsl(171, 75.8%, 11.0%)",
      teal5: "hsl(171, 75.7%, 12.8%)",
      teal6: "hsl(172, 75.8%, 15.1%)",
      teal7: "hsl(172, 76.7%, 18.6%)",
      teal8: "hsl(173, 80.2%, 23.7%)",
      teal9: "hsl(173, 80.0%, 36.0%)",
      teal10: "hsl(174, 83.9%, 38.2%)",
      teal11: "hsl(174, 90.0%, 40.7%)",
      teal12: "hsl(166, 73.0%, 93.1%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/tomato.js
var require_tomato = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/tomato.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var tomato_exports = {};
    __export2(tomato_exports, {
      tomato: () => tomato2
    });
    module2.exports = __toCommonJS2(tomato_exports);
    var tomato2 = {
      tomato1: "hsl(10, 23.0%, 9.4%)",
      tomato2: "hsl(9, 44.8%, 11.4%)",
      tomato3: "hsl(8, 52.0%, 15.3%)",
      tomato4: "hsl(7, 56.3%, 18.0%)",
      tomato5: "hsl(7, 60.1%, 20.6%)",
      tomato6: "hsl(8, 64.8%, 24.0%)",
      tomato7: "hsl(8, 71.2%, 29.1%)",
      tomato8: "hsl(10, 80.2%, 35.7%)",
      tomato9: "hsl(10, 78.0%, 54.0%)",
      tomato10: "hsl(10, 81.7%, 59.0%)",
      tomato11: "hsl(10, 85.0%, 62.8%)",
      tomato12: "hsl(10, 89.0%, 96.0%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/violet.js
var require_violet = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/violet.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var violet_exports = {};
    __export2(violet_exports, {
      violet: () => violet2
    });
    module2.exports = __toCommonJS2(violet_exports);
    var violet2 = {
      violet1: "hsl(250, 20.0%, 10.2%)",
      violet2: "hsl(255, 30.3%, 12.9%)",
      violet3: "hsl(253, 37.0%, 18.4%)",
      violet4: "hsl(252, 40.1%, 22.5%)",
      violet5: "hsl(252, 42.2%, 26.2%)",
      violet6: "hsl(251, 44.3%, 31.1%)",
      violet7: "hsl(250, 46.8%, 38.9%)",
      violet8: "hsl(250, 51.8%, 51.2%)",
      violet9: "hsl(252, 56.0%, 57.5%)",
      violet10: "hsl(251, 63.2%, 63.2%)",
      violet11: "hsl(250, 95.0%, 76.8%)",
      violet12: "hsl(252, 87.0%, 96.4%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/yellow.js
var require_yellow = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/yellow.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var yellow_exports = {};
    __export2(yellow_exports, {
      yellow: () => yellow3
    });
    module2.exports = __toCommonJS2(yellow_exports);
    var yellow3 = {
      yellow1: "hsl(45, 100%, 5.5%)",
      yellow2: "hsl(46, 100%, 6.7%)",
      yellow3: "hsl(45, 100%, 8.7%)",
      yellow4: "hsl(45, 100%, 10.4%)",
      yellow5: "hsl(47, 100%, 12.1%)",
      yellow6: "hsl(49, 100%, 14.3%)",
      yellow7: "hsl(49, 90.3%, 18.4%)",
      yellow8: "hsl(50, 100%, 22.0%)",
      yellow9: "hsl(53, 92.0%, 50.0%)",
      yellow10: "hsl(54, 100%, 68.0%)",
      yellow11: "hsl(48, 100%, 47.0%)",
      yellow12: "hsl(53, 100%, 91.0%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/amberA.js
var require_amberA = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/amberA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var amberA_exports = {};
    __export2(amberA_exports, {
      amberA: () => amberA2
    });
    module2.exports = __toCommonJS2(amberA_exports);
    var amberA2 = {
      amberA1: "hsla(0, 0%, 0%, 0)",
      amberA2: "hsla(31, 100%, 49.7%, 0.036)",
      amberA3: "hsla(27, 100%, 49.9%, 0.094)",
      amberA4: "hsla(29, 100%, 50.0%, 0.143)",
      amberA5: "hsla(31, 100%, 50.0%, 0.192)",
      amberA6: "hsla(35, 100%, 50.0%, 0.250)",
      amberA7: "hsla(34, 99.6%, 52.9%, 0.331)",
      amberA8: "hsla(36, 100%, 50.0%, 0.442)",
      amberA9: "hsla(40, 100%, 57.2%, 0.980)",
      amberA10: "hsla(44, 100%, 64.2%, 0.980)",
      amberA11: "hsla(39, 99.9%, 52.7%, 0.938)",
      amberA12: "hsla(45, 100%, 94.2%, 0.980)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/blueA.js
var require_blueA = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/blueA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var blueA_exports = {};
    __export2(blueA_exports, {
      blueA: () => blueA2
    });
    module2.exports = __toCommonJS2(blueA_exports);
    var blueA2 = {
      blueA1: "hsla(0, 0%, 0%, 0)",
      blueA2: "hsla(221, 97.8%, 52.4%, 0.059)",
      blueA3: "hsla(215, 99.3%, 54.2%, 0.135)",
      blueA4: "hsla(215, 99.3%, 53.8%, 0.198)",
      blueA5: "hsla(213, 99.4%, 52.8%, 0.252)",
      blueA6: "hsla(212, 99.9%, 51.7%, 0.323)",
      blueA7: "hsla(211, 100%, 50.7%, 0.435)",
      blueA8: "hsla(211, 99.8%, 50.9%, 0.597)",
      blueA9: "hsla(205, 100%, 50.0%, 0.980)",
      blueA10: "hsla(208, 100%, 60.7%, 0.980)",
      blueA11: "hsla(209, 100%, 66.3%, 0.980)",
      blueA12: "hsla(196, 100%, 96.8%, 0.980)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/bronzeA.js
var require_bronzeA = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/bronzeA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var bronzeA_exports = {};
    __export2(bronzeA_exports, {
      bronzeA: () => bronzeA2
    });
    module2.exports = __toCommonJS2(bronzeA_exports);
    var bronzeA2 = {
      bronzeA1: "hsla(0, 0%, 0%, 0)",
      bronzeA2: "hsla(20, 88.2%, 74.2%, 0.027)",
      bronzeA3: "hsla(10, 99.4%, 83.0%, 0.074)",
      bronzeA4: "hsla(18, 96.0%, 81.1%, 0.114)",
      bronzeA5: "hsla(18, 99.4%, 81.7%, 0.148)",
      bronzeA6: "hsla(15, 98.1%, 82.4%, 0.192)",
      bronzeA7: "hsla(16, 99.2%, 82.9%, 0.270)",
      bronzeA8: "hsla(18, 99.5%, 82.6%, 0.396)",
      bronzeA9: "hsla(18, 99.3%, 85.0%, 0.592)",
      bronzeA10: "hsla(18, 99.6%, 85.2%, 0.657)",
      bronzeA11: "hsla(17, 99.9%, 86.1%, 0.774)",
      bronzeA12: "hsla(20, 99.8%, 96.4%, 0.974)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/brownA.js
var require_brownA = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/brownA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var brownA_exports = {};
    __export2(brownA_exports, {
      brownA: () => brownA2
    });
    module2.exports = __toCommonJS2(brownA_exports);
    var brownA2 = {
      brownA1: "hsla(0, 0%, 0%, 0)",
      brownA2: "hsla(22, 99.6%, 53.6%, 0.035)",
      brownA3: "hsla(18, 97.8%, 69.0%, 0.088)",
      brownA4: "hsla(21, 98.2%, 71.0%, 0.123)",
      brownA5: "hsla(25, 98.4%, 72.1%, 0.158)",
      brownA6: "hsla(25, 98.7%, 73.5%, 0.206)",
      brownA7: "hsla(25, 99.0%, 74.6%, 0.289)",
      brownA8: "hsla(28, 99.2%, 75.3%, 0.407)",
      brownA9: "hsla(28, 100%, 74.8%, 0.642)",
      brownA10: "hsla(28, 99.9%, 74.9%, 0.712)",
      brownA11: "hsla(28, 99.9%, 74.9%, 0.843)",
      brownA12: "hsla(32, 98.2%, 95.7%, 0.979)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/crimsonA.js
var require_crimsonA = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/crimsonA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var crimsonA_exports = {};
    __export2(crimsonA_exports, {
      crimsonA: () => crimsonA2
    });
    module2.exports = __toCommonJS2(crimsonA_exports);
    var crimsonA2 = {
      crimsonA1: "hsla(0, 0%, 0%, 0)",
      crimsonA2: "hsla(336, 96.8%, 53.2%, 0.045)",
      crimsonA3: "hsla(335, 98.7%, 59.3%, 0.138)",
      crimsonA4: "hsla(336, 99.1%, 59.9%, 0.191)",
      crimsonA5: "hsla(335, 99.4%, 59.4%, 0.244)",
      crimsonA6: "hsla(335, 99.4%, 59.4%, 0.315)",
      crimsonA7: "hsla(336, 99.5%, 57.8%, 0.439)",
      crimsonA8: "hsla(336, 99.9%, 55.4%, 0.642)",
      crimsonA9: "hsla(336, 99.9%, 62.8%, 0.903)",
      crimsonA10: "hsla(339, 99.9%, 66.3%, 0.934)",
      crimsonA11: "hsla(341, 99.9%, 69.5%, 0.965)",
      crimsonA12: "hsla(327, 100%, 97.1%, 0.980)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/cyanA.js
var require_cyanA = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/cyanA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var cyanA_exports = {};
    __export2(cyanA_exports, {
      cyanA: () => cyanA2
    });
    module2.exports = __toCommonJS2(cyanA_exports);
    var cyanA2 = {
      cyanA1: "hsla(0, 0%, 0%, 0)",
      cyanA2: "hsla(196, 100%, 50.0%, 0.031)",
      cyanA3: "hsla(192, 98.0%, 50.9%, 0.085)",
      cyanA4: "hsla(194, 99.6%, 51.3%, 0.133)",
      cyanA5: "hsla(192, 99.5%, 51.3%, 0.173)",
      cyanA6: "hsla(193, 99.7%, 50.4%, 0.226)",
      cyanA7: "hsla(192, 100%, 50.0%, 0.310)",
      cyanA8: "hsla(193, 100%, 50.0%, 0.425)",
      cyanA9: "hsla(190, 99.8%, 50.8%, 0.731)",
      cyanA10: "hsla(188, 100%, 50.0%, 0.775)",
      cyanA11: "hsla(186, 100%, 49.9%, 0.824)",
      cyanA12: "hsla(185, 99.8%, 95.1%, 0.978)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/goldA.js
var require_goldA = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/goldA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var goldA_exports = {};
    __export2(goldA_exports, {
      goldA: () => goldA2
    });
    module2.exports = __toCommonJS2(goldA_exports);
    var goldA2 = {
      goldA1: "hsla(0, 0%, 0%, 0)",
      goldA2: "hsla(40, 93.7%, 70.6%, 0.022)",
      goldA3: "hsla(40, 97.5%, 80.6%, 0.065)",
      goldA4: "hsla(40, 95.9%, 80.8%, 0.100)",
      goldA5: "hsla(38, 97.3%, 82.1%, 0.130)",
      goldA6: "hsla(39, 97.2%, 82.5%, 0.169)",
      goldA7: "hsla(37, 99.3%, 82.4%, 0.246)",
      goldA8: "hsla(35, 98.7%, 82.2%, 0.363)",
      goldA9: "hsla(36, 99.7%, 82.8%, 0.552)",
      goldA10: "hsla(35, 99.2%, 83.7%, 0.613)",
      goldA11: "hsla(35, 99.3%, 85.3%, 0.725)",
      goldA12: "hsla(49, 98.6%, 96.7%, 0.966)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/grassA.js
var require_grassA = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/grassA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var grassA_exports = {};
    __export2(grassA_exports, {
      grassA: () => grassA2
    });
    module2.exports = __toCommonJS2(grassA_exports);
    var grassA2 = {
      grassA1: "hsla(0, 0%, 0%, 0)",
      grassA2: "hsla(107, 97.2%, 61.9%, 0.022)",
      grassA3: "hsla(128, 96.5%, 69.8%, 0.066)",
      grassA4: "hsla(130, 100%, 70.2%, 0.100)",
      grassA5: "hsla(130, 98.2%, 69.1%, 0.140)",
      grassA6: "hsla(132, 99.9%, 69.3%, 0.187)",
      grassA7: "hsla(132, 99.9%, 69.8%, 0.261)",
      grassA8: "hsla(130, 99.6%, 70.5%, 0.370)",
      grassA9: "hsla(130, 99.7%, 70.6%, 0.618)",
      grassA10: "hsla(131, 100%, 73.5%, 0.674)",
      grassA11: "hsla(130, 99.7%, 75.6%, 0.731)",
      grassA12: "hsla(137, 100%, 95.8%, 0.980)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/grayA.js
var require_grayA = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/grayA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var grayA_exports = {};
    __export2(grayA_exports, {
      grayA: () => grayA2
    });
    module2.exports = __toCommonJS2(grayA_exports);
    var grayA2 = {
      grayA1: "hsla(0, 0%, 100%, 0)",
      grayA2: "hsla(0, 0%, 100%, 0.026)",
      grayA3: "hsla(0, 0%, 100%, 0.056)",
      grayA4: "hsla(0, 0%, 100%, 0.077)",
      grayA5: "hsla(0, 0%, 100%, 0.103)",
      grayA6: "hsla(0, 0%, 100%, 0.129)",
      grayA7: "hsla(0, 0%, 100%, 0.172)",
      grayA8: "hsla(0, 0%, 100%, 0.249)",
      grayA9: "hsla(0, 0%, 100%, 0.386)",
      grayA10: "hsla(0, 0%, 100%, 0.446)",
      grayA11: "hsla(0, 0%, 100%, 0.592)",
      grayA12: "hsla(0, 0%, 100%, 0.923)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/greenA.js
var require_greenA = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/greenA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var greenA_exports = {};
    __export2(greenA_exports, {
      greenA: () => greenA2
    });
    module2.exports = __toCommonJS2(greenA_exports);
    var greenA2 = {
      greenA1: "hsla(0, 0%, 0%, 0)",
      greenA2: "hsla(169, 100%, 48.5%, 0.027)",
      greenA3: "hsla(162, 98.7%, 57.9%, 0.070)",
      greenA4: "hsla(158, 98.6%, 59.7%, 0.105)",
      greenA5: "hsla(158, 98.6%, 60.7%, 0.140)",
      greenA6: "hsla(156, 99.9%, 62.0%, 0.187)",
      greenA7: "hsla(154, 99.5%, 63.1%, 0.257)",
      greenA8: "hsla(152, 99.7%, 64.2%, 0.370)",
      greenA9: "hsla(151, 99.7%, 63.8%, 0.605)",
      greenA10: "hsla(152, 99.9%, 66.5%, 0.661)",
      greenA11: "hsla(151, 99.7%, 69.2%, 0.740)",
      greenA12: "hsla(137, 100%, 95.8%, 0.980)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/indigoA.js
var require_indigoA = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/indigoA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var indigoA_exports = {};
    __export2(indigoA_exports, {
      indigoA: () => indigoA2
    });
    module2.exports = __toCommonJS2(indigoA_exports);
    var indigoA2 = {
      indigoA1: "hsla(0, 0%, 0%, 0)",
      indigoA2: "hsla(234, 97.4%, 59.9%, 0.059)",
      indigoA3: "hsla(228, 99.2%, 61.7%, 0.144)",
      indigoA4: "hsla(227, 99.7%, 62.0%, 0.211)",
      indigoA5: "hsla(227, 99.2%, 62.3%, 0.270)",
      indigoA6: "hsla(226, 99.9%, 62.1%, 0.350)",
      indigoA7: "hsla(226, 99.9%, 62.0%, 0.471)",
      indigoA8: "hsla(226, 99.9%, 62.1%, 0.655)",
      indigoA9: "hsla(226, 99.9%, 63.6%, 0.848)",
      indigoA10: "hsla(227, 99.8%, 67.7%, 0.893)",
      indigoA11: "hsla(227, 100%, 76.3%, 0.980)",
      indigoA12: "hsla(226, 100%, 97.5%, 0.980)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/limeA.js
var require_limeA = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/limeA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var limeA_exports = {};
    __export2(limeA_exports, {
      limeA: () => limeA2
    });
    module2.exports = __toCommonJS2(limeA_exports);
    var limeA2 = {
      limeA1: "hsla(0, 0%, 0%, 0)",
      limeA2: "hsla(75, 96.4%, 59.6%, 0.022)",
      limeA3: "hsla(88, 98.0%, 70.4%, 0.061)",
      limeA4: "hsla(81, 97.8%, 67.4%, 0.096)",
      limeA5: "hsla(82, 98.4%, 65.6%, 0.135)",
      limeA6: "hsla(79, 99.7%, 64.3%, 0.182)",
      limeA7: "hsla(77, 99.1%, 62.1%, 0.252)",
      limeA8: "hsla(75, 100%, 60.0%, 0.342)",
      limeA9: "hsla(81, 99.8%, 59.7%, 0.819)",
      limeA10: "hsla(75, 99.8%, 63.7%, 0.936)",
      limeA11: "hsla(81, 99.9%, 58.7%, 0.719)",
      limeA12: "hsla(83, 100%, 94.2%, 0.980)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/mintA.js
var require_mintA = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/mintA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var mintA_exports = {};
    __export2(mintA_exports, {
      mintA: () => mintA2
    });
    module2.exports = __toCommonJS2(mintA_exports);
    var mintA2 = {
      mintA1: "hsla(0, 0%, 0%, 0)",
      mintA2: "hsla(180, 100%, 49.2%, 0.031)",
      mintA3: "hsla(176, 100%, 49.7%, 0.070)",
      mintA4: "hsla(173, 100%, 49.7%, 0.105)",
      mintA5: "hsla(173, 100%, 49.8%, 0.144)",
      mintA6: "hsla(172, 100%, 49.8%, 0.192)",
      mintA7: "hsla(171, 100%, 49.9%, 0.266)",
      mintA8: "hsla(169, 100%, 49.9%, 0.366)",
      mintA9: "hsla(167, 99.8%, 75.0%, 0.870)",
      mintA10: "hsla(163, 99.9%, 80.7%, 0.948)",
      mintA11: "hsla(167, 99.9%, 58.7%, 0.796)",
      mintA12: "hsla(169, 100%, 96.2%, 0.980)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/oliveA.js
var require_oliveA = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/oliveA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var oliveA_exports = {};
    __export2(oliveA_exports, {
      oliveA: () => oliveA2
    });
    module2.exports = __toCommonJS2(oliveA_exports);
    var oliveA2 = {
      oliveA1: "hsla(0, 0%, 0%, 0)",
      oliveA2: "hsla(91, 97.0%, 84.0%, 0.026)",
      oliveA3: "hsla(101, 87.4%, 87.7%, 0.057)",
      oliveA4: "hsla(92, 91.8%, 94.1%, 0.078)",
      oliveA5: "hsla(101, 92.6%, 93.5%, 0.104)",
      oliveA6: "hsla(102, 91.1%, 94.6%, 0.130)",
      oliveA7: "hsla(102, 92.5%, 95.9%, 0.173)",
      oliveA8: "hsla(107, 100%, 96.5%, 0.250)",
      oliveA9: "hsla(110, 98.3%, 94.1%, 0.397)",
      oliveA10: "hsla(109, 99.6%, 95.3%, 0.457)",
      oliveA11: "hsla(113, 95.3%, 97.2%, 0.600)",
      oliveA12: "hsla(120, 93.5%, 99.6%, 0.927)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/orangeA.js
var require_orangeA = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/orangeA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var orangeA_exports = {};
    __export2(orangeA_exports, {
      orangeA: () => orangeA2
    });
    module2.exports = __toCommonJS2(orangeA_exports);
    var orangeA2 = {
      orangeA1: "hsla(0, 0%, 0%, 0)",
      orangeA2: "hsla(13, 100%, 49.7%, 0.054)",
      orangeA3: "hsla(20, 100%, 49.7%, 0.117)",
      orangeA4: "hsla(23, 100%, 49.8%, 0.166)",
      orangeA5: "hsla(23, 99.4%, 50.1%, 0.215)",
      orangeA6: "hsla(23, 99.8%, 51.1%, 0.286)",
      orangeA7: "hsla(23, 99.7%, 50.6%, 0.389)",
      orangeA8: "hsla(24, 100%, 49.9%, 0.523)",
      orangeA9: "hsla(24, 99.9%, 51.6%, 0.965)",
      orangeA10: "hsla(25, 100%, 58.6%, 0.980)",
      orangeA11: "hsla(24, 100%, 62.4%, 0.980)",
      orangeA12: "hsla(26, 100%, 94.2%, 0.980)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/pinkA.js
var require_pinkA = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/pinkA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var pinkA_exports = {};
    __export2(pinkA_exports, {
      pinkA: () => pinkA2
    });
    module2.exports = __toCommonJS2(pinkA_exports);
    var pinkA2 = {
      pinkA1: "hsla(0, 0%, 0%, 0)",
      pinkA2: "hsla(320, 98.1%, 64.1%, 0.036)",
      pinkA3: "hsla(320, 99.1%, 63.1%, 0.121)",
      pinkA4: "hsla(320, 99.5%, 62.7%, 0.170)",
      pinkA5: "hsla(319, 99.7%, 61.5%, 0.219)",
      pinkA6: "hsla(322, 99.4%, 60.8%, 0.291)",
      pinkA7: "hsla(321, 99.6%, 58.7%, 0.407)",
      pinkA8: "hsla(322, 99.7%, 55.4%, 0.608)",
      pinkA9: "hsla(322, 100%, 64.6%, 0.817)",
      pinkA10: "hsla(323, 100%, 66.3%, 0.875)",
      pinkA11: "hsla(325, 99.9%, 68.6%, 0.960)",
      pinkA12: "hsla(314, 100%, 96.9%, 0.980)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/plumA.js
var require_plumA = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/plumA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var plumA_exports = {};
    __export2(plumA_exports, {
      plumA: () => plumA2
    });
    module2.exports = __toCommonJS2(plumA_exports);
    var plumA2 = {
      plumA1: "hsla(0, 0%, 0%, 0)",
      plumA2: "hsla(300, 96.4%, 58.4%, 0.036)",
      plumA3: "hsla(300, 99.4%, 67.1%, 0.102)",
      plumA4: "hsla(295, 99.8%, 66.3%, 0.155)",
      plumA5: "hsla(295, 99.4%, 67.1%, 0.204)",
      plumA6: "hsla(294, 99.0%, 67.8%, 0.262)",
      plumA7: "hsla(294, 99.9%, 67.7%, 0.363)",
      plumA8: "hsla(292, 99.8%, 67.5%, 0.527)",
      plumA9: "hsla(292, 99.9%, 69.2%, 0.695)",
      plumA10: "hsla(295, 99.9%, 70.8%, 0.748)",
      plumA11: "hsla(300, 99.8%, 72.9%, 0.828)",
      plumA12: "hsla(300, 100%, 97.1%, 0.980)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/purpleA.js
var require_purpleA = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/purpleA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var purpleA_exports = {};
    __export2(purpleA_exports, {
      purpleA: () => purpleA2
    });
    module2.exports = __toCommonJS2(purpleA_exports);
    var purpleA2 = {
      purpleA1: "hsla(0, 0%, 0%, 0)",
      purpleA2: "hsla(280, 96.5%, 57.5%, 0.045)",
      purpleA3: "hsla(279, 98.7%, 62.8%, 0.129)",
      purpleA4: "hsla(279, 99.1%, 64.0%, 0.191)",
      purpleA5: "hsla(278, 99.8%, 64.2%, 0.248)",
      purpleA6: "hsla(276, 99.6%, 64.6%, 0.328)",
      purpleA7: "hsla(274, 99.9%, 64.6%, 0.456)",
      purpleA8: "hsla(272, 99.7%, 64.6%, 0.660)",
      purpleA9: "hsla(272, 99.9%, 69.1%, 0.748)",
      purpleA10: "hsla(273, 100%, 71.3%, 0.801)",
      purpleA11: "hsla(275, 99.9%, 75.3%, 0.934)",
      purpleA12: "hsla(286, 100%, 97.1%, 0.980)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/mauveA.js
var require_mauveA = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/mauveA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var mauveA_exports = {};
    __export2(mauveA_exports, {
      mauveA: () => mauveA2
    });
    module2.exports = __toCommonJS2(mauveA_exports);
    var mauveA2 = {
      mauveA1: "hsla(0, 0%, 0%, 0)",
      mauveA2: "hsla(240, 76.7%, 91.2%, 0.031)",
      mauveA3: "hsla(240, 86.0%, 95.8%, 0.061)",
      mauveA4: "hsla(240, 91.8%, 94.7%, 0.087)",
      mauveA5: "hsla(240, 91.5%, 95.8%, 0.113)",
      mauveA6: "hsla(240, 92.0%, 93.8%, 0.148)",
      mauveA7: "hsla(240, 94.8%, 95.3%, 0.191)",
      mauveA8: "hsla(249, 98.1%, 95.2%, 0.273)",
      mauveA9: "hsla(248, 97.6%, 96.2%, 0.416)",
      mauveA10: "hsla(248, 95.5%, 96.6%, 0.477)",
      mauveA11: "hsla(250, 98.0%, 98.0%, 0.615)",
      mauveA12: "hsla(240, 93.9%, 99.6%, 0.931)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/redA.js
var require_redA = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/redA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var redA_exports = {};
    __export2(redA_exports, {
      redA: () => redA2
    });
    module2.exports = __toCommonJS2(redA_exports);
    var redA2 = {
      redA1: "hsla(0, 0%, 0%, 0)",
      redA2: "hsla(5, 98.5%, 53.8%, 0.045)",
      redA3: "hsla(359, 99.1%, 61.1%, 0.130)",
      redA4: "hsla(358, 98.8%, 61.0%, 0.184)",
      redA5: "hsla(357, 99.6%, 60.3%, 0.237)",
      redA6: "hsla(358, 99.6%, 60.3%, 0.322)",
      redA7: "hsla(357, 100%, 59.5%, 0.442)",
      redA8: "hsla(358, 99.8%, 59.1%, 0.621)",
      redA9: "hsla(358, 100%, 65.5%, 0.884)",
      redA10: "hsla(358, 100%, 67.5%, 0.942)",
      redA11: "hsla(358, 100%, 69.7%, 0.980)",
      redA12: "hsla(352, 100%, 97.1%, 0.980)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/sageA.js
var require_sageA = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/sageA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var sageA_exports = {};
    __export2(sageA_exports, {
      sageA: () => sageA2
    });
    module2.exports = __toCommonJS2(sageA_exports);
    var sageA2 = {
      sageA1: "hsla(0, 0%, 0%, 0)",
      sageA2: "hsla(123, 94.4%, 91.4%, 0.026)",
      sageA3: "hsla(123, 82.9%, 91.0%, 0.057)",
      sageA4: "hsla(124, 97.9%, 94.5%, 0.082)",
      sageA5: "hsla(125, 90.0%, 95.2%, 0.104)",
      sageA6: "hsla(142, 95.1%, 94.8%, 0.134)",
      sageA7: "hsla(143, 92.8%, 95.7%, 0.173)",
      sageA8: "hsla(146, 94.7%, 95.3%, 0.255)",
      sageA9: "hsla(151, 98.2%, 94.4%, 0.397)",
      sageA10: "hsla(148, 99.5%, 95.5%, 0.457)",
      sageA11: "hsla(152, 95.1%, 97.3%, 0.600)",
      sageA12: "hsla(149, 93.3%, 99.6%, 0.927)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/sandA.js
var require_sandA = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/sandA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var sandA_exports = {};
    __export2(sandA_exports, {
      sandA: () => sandA2
    });
    module2.exports = __toCommonJS2(sandA_exports);
    var sandA2 = {
      sandA1: "hsla(0, 0%, 0%, 0)",
      sandA2: "hsla(60, 89.8%, 91.4%, 0.026)",
      sandA3: "hsla(60, 95.5%, 92.5%, 0.056)",
      sandA4: "hsla(60, 75.6%, 96.4%, 0.078)",
      sandA5: "hsla(60, 81.9%, 95.2%, 0.104)",
      sandA6: "hsla(41, 87.6%, 94.8%, 0.134)",
      sandA7: "hsla(60, 95.4%, 96.2%, 0.172)",
      sandA8: "hsla(49, 93.5%, 95.7%, 0.254)",
      sandA9: "hsla(52, 97.3%, 96.2%, 0.391)",
      sandA10: "hsla(52, 97.8%, 96.7%, 0.451)",
      sandA11: "hsla(51, 97.0%, 97.8%, 0.597)",
      sandA12: "hsla(60, 88.7%, 99.8%, 0.923)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/skyA.js
var require_skyA = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/skyA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var skyA_exports = {};
    __export2(skyA_exports, {
      skyA: () => skyA2
    });
    module2.exports = __toCommonJS2(skyA_exports);
    var skyA2 = {
      skyA1: "hsla(0, 0%, 0%, 0)",
      skyA2: "hsla(208, 100%, 49.8%, 0.045)",
      skyA3: "hsla(201, 100%, 49.8%, 0.099)",
      skyA4: "hsla(201, 100%, 50.0%, 0.148)",
      skyA5: "hsla(200, 100%, 49.8%, 0.198)",
      skyA6: "hsla(199, 100%, 49.9%, 0.256)",
      skyA7: "hsla(199, 100%, 49.9%, 0.337)",
      skyA8: "hsla(199, 100%, 50.0%, 0.453)",
      skyA9: "hsla(192, 100%, 70.8%, 0.980)",
      skyA10: "hsla(190, 100%, 77.6%, 0.980)",
      skyA11: "hsla(192, 99.9%, 59.6%, 0.924)",
      skyA12: "hsla(189, 100%, 96.8%, 0.980)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/slateA.js
var require_slateA = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/slateA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var slateA_exports = {};
    __export2(slateA_exports, {
      slateA: () => slateA2
    });
    module2.exports = __toCommonJS2(slateA_exports);
    var slateA2 = {
      slateA1: "hsla(0, 0%, 0%, 0)",
      slateA2: "hsla(181, 98.9%, 91.8%, 0.026)",
      slateA3: "hsla(182, 86.7%, 91.4%, 0.057)",
      slateA4: "hsla(209, 86.7%, 93.9%, 0.083)",
      slateA5: "hsla(200, 90.3%, 93.4%, 0.109)",
      slateA6: "hsla(209, 95.3%, 93.5%, 0.139)",
      slateA7: "hsla(204, 98.5%, 93.9%, 0.182)",
      slateA8: "hsla(209, 94.0%, 94.7%, 0.265)",
      slateA9: "hsla(207, 97.3%, 94.0%, 0.412)",
      slateA10: "hsla(209, 99.4%, 95.2%, 0.472)",
      slateA11: "hsla(208, 98.7%, 96.8%, 0.615)",
      slateA12: "hsla(211, 86.7%, 99.6%, 0.927)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/tealA.js
var require_tealA = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/tealA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var tealA_exports = {};
    __export2(tealA_exports, {
      tealA: () => tealA2
    });
    module2.exports = __toCommonJS2(tealA_exports);
    var tealA2 = {
      tealA1: "hsla(0, 0%, 0%, 0)",
      tealA2: "hsla(171, 100%, 49.2%, 0.031)",
      tealA3: "hsla(172, 100%, 49.7%, 0.070)",
      tealA4: "hsla(175, 100%, 49.7%, 0.105)",
      tealA5: "hsla(174, 98.9%, 50.1%, 0.140)",
      tealA6: "hsla(174, 100%, 51.8%, 0.187)",
      tealA7: "hsla(173, 99.6%, 53.2%, 0.257)",
      tealA8: "hsla(174, 99.6%, 53.3%, 0.366)",
      tealA9: "hsla(173, 99.9%, 54.6%, 0.609)",
      tealA10: "hsla(174, 99.9%, 53.8%, 0.670)",
      tealA11: "hsla(174, 100%, 52.0%, 0.748)",
      tealA12: "hsla(166, 98.6%, 95.0%, 0.979)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/tomatoA.js
var require_tomatoA = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/tomatoA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var tomatoA_exports = {};
    __export2(tomatoA_exports, {
      tomatoA: () => tomatoA2
    });
    module2.exports = __toCommonJS2(tomatoA_exports);
    var tomatoA2 = {
      tomatoA1: "hsla(0, 0%, 0%, 0)",
      tomatoA2: "hsla(5, 100%, 49.6%, 0.058)",
      tomatoA3: "hsla(6, 99.6%, 54.9%, 0.133)",
      tomatoA4: "hsla(6, 99.2%, 55.4%, 0.191)",
      tomatoA5: "hsla(6, 99.5%, 55.8%, 0.244)",
      tomatoA6: "hsla(7, 99.7%, 55.9%, 0.319)",
      tomatoA7: "hsla(8, 99.8%, 54.8%, 0.434)",
      tomatoA8: "hsla(10, 99.8%, 53.5%, 0.598)",
      tomatoA9: "hsla(10, 100%, 59.7%, 0.885)",
      tomatoA10: "hsla(10, 100%, 63.6%, 0.916)",
      tomatoA11: "hsla(10, 99.7%, 66.4%, 0.939)",
      tomatoA12: "hsla(12, 100%, 97.1%, 0.980)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/violetA.js
var require_violetA = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/violetA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var violetA_exports = {};
    __export2(violetA_exports, {
      violetA: () => violetA2
    });
    module2.exports = __toCommonJS2(violetA_exports);
    var violetA2 = {
      violetA1: "hsla(0, 0%, 0%, 0)",
      violetA2: "hsla(258, 98.2%, 61.0%, 0.054)",
      violetA3: "hsla(252, 98.8%, 65.8%, 0.148)",
      violetA4: "hsla(253, 99.7%, 65.7%, 0.219)",
      violetA5: "hsla(252, 99.7%, 66.4%, 0.286)",
      violetA6: "hsla(251, 99.7%, 66.2%, 0.371)",
      violetA7: "hsla(250, 99.7%, 66.3%, 0.514)",
      violetA8: "hsla(250, 99.7%, 66.1%, 0.733)",
      violetA9: "hsla(252, 99.9%, 70.3%, 0.786)",
      violetA10: "hsla(251, 99.9%, 72.9%, 0.844)",
      violetA11: "hsla(250, 100%, 77.9%, 0.980)",
      violetA12: "hsla(254, 100%, 97.5%, 0.980)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/dark/yellowA.js
var require_yellowA = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/dark/yellowA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var yellowA_exports = {};
    __export2(yellowA_exports, {
      yellowA: () => yellowA2
    });
    module2.exports = __toCommonJS2(yellowA_exports);
    var yellowA2 = {
      yellowA1: "hsla(0, 0%, 0%, 0)",
      yellowA2: "hsla(49, 100%, 49.1%, 0.027)",
      yellowA3: "hsla(45, 100%, 49.7%, 0.071)",
      yellowA4: "hsla(46, 100%, 49.7%, 0.111)",
      yellowA5: "hsla(47, 100%, 49.9%, 0.150)",
      yellowA6: "hsla(51, 100%, 49.8%, 0.199)",
      yellowA7: "hsla(51, 99.8%, 53.6%, 0.269)",
      yellowA8: "hsla(51, 100%, 49.9%, 0.371)",
      yellowA9: "hsla(53, 100%, 52.0%, 0.956)",
      yellowA10: "hsla(56, 100%, 68.4%, 0.980)",
      yellowA11: "hsla(48, 100%, 50.0%, 0.934)",
      yellowA12: "hsla(60, 100%, 91.8%, 0.980)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/amber.js
var require_amber2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/amber.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var amber_exports = {};
    __export2(amber_exports, {
      amber: () => amber2
    });
    module2.exports = __toCommonJS2(amber_exports);
    var amber2 = {
      amber1: "hsl(39, 70.0%, 99.0%)",
      amber2: "hsl(40, 100%, 96.5%)",
      amber3: "hsl(44, 100%, 91.7%)",
      amber4: "hsl(43, 100%, 86.8%)",
      amber5: "hsl(42, 100%, 81.8%)",
      amber6: "hsl(38, 99.7%, 76.3%)",
      amber7: "hsl(36, 86.1%, 67.1%)",
      amber8: "hsl(35, 85.2%, 55.1%)",
      amber9: "hsl(39, 100%, 57.0%)",
      amber10: "hsl(35, 100%, 55.5%)",
      amber11: "hsl(30, 100%, 34.0%)",
      amber12: "hsl(20, 80.0%, 17.0%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/blue.js
var require_blue2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/blue.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var blue_exports = {};
    __export2(blue_exports, {
      blue: () => blue3
    });
    module2.exports = __toCommonJS2(blue_exports);
    var blue3 = {
      blue1: "hsl(206, 100%, 99.2%)",
      blue2: "hsl(210, 100%, 98.0%)",
      blue3: "hsl(209, 100%, 96.5%)",
      blue4: "hsl(210, 98.8%, 94.0%)",
      blue5: "hsl(209, 95.0%, 90.1%)",
      blue6: "hsl(209, 81.2%, 84.5%)",
      blue7: "hsl(208, 77.5%, 76.9%)",
      blue8: "hsl(206, 81.9%, 65.3%)",
      blue9: "hsl(206, 100%, 50.0%)",
      blue10: "hsl(208, 100%, 47.3%)",
      blue11: "hsl(211, 100%, 43.2%)",
      blue12: "hsl(211, 100%, 15.0%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/bronze.js
var require_bronze2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/bronze.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var bronze_exports = {};
    __export2(bronze_exports, {
      bronze: () => bronze2
    });
    module2.exports = __toCommonJS2(bronze_exports);
    var bronze2 = {
      bronze1: "hsl(15, 30.0%, 99.1%)",
      bronze2: "hsl(17, 63.6%, 97.8%)",
      bronze3: "hsl(17, 42.1%, 95.2%)",
      bronze4: "hsl(17, 35.2%, 92.1%)",
      bronze5: "hsl(17, 31.5%, 88.2%)",
      bronze6: "hsl(17, 29.0%, 83.0%)",
      bronze7: "hsl(17, 26.9%, 75.6%)",
      bronze8: "hsl(17, 25.1%, 66.5%)",
      bronze9: "hsl(17, 20.0%, 54.0%)",
      bronze10: "hsl(17, 18.1%, 50.1%)",
      bronze11: "hsl(15, 20.0%, 43.1%)",
      bronze12: "hsl(12, 22.0%, 21.5%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/brown.js
var require_brown2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/brown.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var brown_exports = {};
    __export2(brown_exports, {
      brown: () => brown2
    });
    module2.exports = __toCommonJS2(brown_exports);
    var brown2 = {
      brown1: "hsl(30, 40.0%, 99.1%)",
      brown2: "hsl(30, 50.0%, 97.6%)",
      brown3: "hsl(30, 52.5%, 94.6%)",
      brown4: "hsl(30, 53.0%, 91.2%)",
      brown5: "hsl(29, 52.9%, 86.8%)",
      brown6: "hsl(29, 52.5%, 80.9%)",
      brown7: "hsl(29, 51.5%, 72.8%)",
      brown8: "hsl(28, 50.0%, 63.1%)",
      brown9: "hsl(28, 34.0%, 51.0%)",
      brown10: "hsl(27, 31.8%, 47.6%)",
      brown11: "hsl(25, 30.0%, 41.0%)",
      brown12: "hsl(20, 30.0%, 19.0%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/crimson.js
var require_crimson2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/crimson.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var crimson_exports = {};
    __export2(crimson_exports, {
      crimson: () => crimson2
    });
    module2.exports = __toCommonJS2(crimson_exports);
    var crimson2 = {
      crimson1: "hsl(332, 100%, 99.4%)",
      crimson2: "hsl(330, 100%, 98.4%)",
      crimson3: "hsl(331, 85.6%, 96.6%)",
      crimson4: "hsl(331, 78.1%, 94.2%)",
      crimson5: "hsl(332, 72.1%, 91.1%)",
      crimson6: "hsl(333, 67.0%, 86.7%)",
      crimson7: "hsl(335, 63.5%, 80.4%)",
      crimson8: "hsl(336, 62.3%, 72.9%)",
      crimson9: "hsl(336, 80.0%, 57.8%)",
      crimson10: "hsl(336, 73.7%, 53.5%)",
      crimson11: "hsl(336, 75.0%, 47.2%)",
      crimson12: "hsl(340, 65.0%, 14.5%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/cyan.js
var require_cyan2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/cyan.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var cyan_exports = {};
    __export2(cyan_exports, {
      cyan: () => cyan2
    });
    module2.exports = __toCommonJS2(cyan_exports);
    var cyan2 = {
      cyan1: "hsl(185, 60.0%, 98.7%)",
      cyan2: "hsl(185, 73.3%, 97.1%)",
      cyan3: "hsl(186, 70.2%, 94.4%)",
      cyan4: "hsl(186, 63.8%, 90.6%)",
      cyan5: "hsl(187, 58.3%, 85.4%)",
      cyan6: "hsl(188, 54.6%, 78.4%)",
      cyan7: "hsl(189, 53.7%, 68.7%)",
      cyan8: "hsl(189, 60.3%, 52.5%)",
      cyan9: "hsl(190, 95.0%, 39.0%)",
      cyan10: "hsl(191, 91.2%, 36.8%)",
      cyan11: "hsl(192, 85.0%, 31.0%)",
      cyan12: "hsl(192, 88.0%, 12.5%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/gold.js
var require_gold2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/gold.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var gold_exports = {};
    __export2(gold_exports, {
      gold: () => gold2
    });
    module2.exports = __toCommonJS2(gold_exports);
    var gold2 = {
      gold1: "hsl(50, 20.0%, 99.1%)",
      gold2: "hsl(47, 52.9%, 96.7%)",
      gold3: "hsl(46, 38.2%, 93.7%)",
      gold4: "hsl(44, 32.7%, 90.1%)",
      gold5: "hsl(43, 29.9%, 85.7%)",
      gold6: "hsl(41, 28.3%, 79.8%)",
      gold7: "hsl(39, 27.6%, 71.9%)",
      gold8: "hsl(36, 27.2%, 61.8%)",
      gold9: "hsl(36, 20.0%, 49.5%)",
      gold10: "hsl(36, 19.8%, 45.7%)",
      gold11: "hsl(36, 20.0%, 39.0%)",
      gold12: "hsl(36, 16.0%, 20.0%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/grass.js
var require_grass2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/grass.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var grass_exports = {};
    __export2(grass_exports, {
      grass: () => grass2
    });
    module2.exports = __toCommonJS2(grass_exports);
    var grass2 = {
      grass1: "hsl(116, 50.0%, 98.9%)",
      grass2: "hsl(120, 60.0%, 97.1%)",
      grass3: "hsl(120, 53.6%, 94.8%)",
      grass4: "hsl(121, 47.5%, 91.4%)",
      grass5: "hsl(122, 42.6%, 86.5%)",
      grass6: "hsl(124, 39.0%, 79.7%)",
      grass7: "hsl(126, 37.1%, 70.2%)",
      grass8: "hsl(131, 38.1%, 56.3%)",
      grass9: "hsl(131, 41.0%, 46.5%)",
      grass10: "hsl(132, 43.1%, 42.2%)",
      grass11: "hsl(133, 50.0%, 32.5%)",
      grass12: "hsl(130, 30.0%, 14.9%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/gray.js
var require_gray2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/gray.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var gray_exports = {};
    __export2(gray_exports, {
      gray: () => gray3
    });
    module2.exports = __toCommonJS2(gray_exports);
    var gray3 = {
      gray1: "hsl(0, 0%, 99.0%)",
      gray2: "hsl(0, 0%, 97.3%)",
      gray3: "hsl(0, 0%, 95.1%)",
      gray4: "hsl(0, 0%, 93.0%)",
      gray5: "hsl(0, 0%, 90.9%)",
      gray6: "hsl(0, 0%, 88.7%)",
      gray7: "hsl(0, 0%, 85.8%)",
      gray8: "hsl(0, 0%, 78.0%)",
      gray9: "hsl(0, 0%, 56.1%)",
      gray10: "hsl(0, 0%, 52.3%)",
      gray11: "hsl(0, 0%, 43.5%)",
      gray12: "hsl(0, 0%, 9.0%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/green.js
var require_green2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/green.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var green_exports = {};
    __export2(green_exports, {
      green: () => green3
    });
    module2.exports = __toCommonJS2(green_exports);
    var green3 = {
      green1: "hsl(136, 50.0%, 98.9%)",
      green2: "hsl(138, 62.5%, 96.9%)",
      green3: "hsl(139, 55.2%, 94.5%)",
      green4: "hsl(140, 48.7%, 91.0%)",
      green5: "hsl(141, 43.7%, 86.0%)",
      green6: "hsl(143, 40.3%, 79.0%)",
      green7: "hsl(146, 38.5%, 69.0%)",
      green8: "hsl(151, 40.2%, 54.1%)",
      green9: "hsl(151, 55.0%, 41.5%)",
      green10: "hsl(152, 57.5%, 37.6%)",
      green11: "hsl(153, 67.0%, 28.5%)",
      green12: "hsl(155, 40.0%, 14.0%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/indigo.js
var require_indigo2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/indigo.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var indigo_exports = {};
    __export2(indigo_exports, {
      indigo: () => indigo2
    });
    module2.exports = __toCommonJS2(indigo_exports);
    var indigo2 = {
      indigo1: "hsl(225, 60.0%, 99.4%)",
      indigo2: "hsl(223, 100%, 98.6%)",
      indigo3: "hsl(223, 98.4%, 97.1%)",
      indigo4: "hsl(223, 92.9%, 95.0%)",
      indigo5: "hsl(224, 87.1%, 92.0%)",
      indigo6: "hsl(224, 81.9%, 87.8%)",
      indigo7: "hsl(225, 77.4%, 82.1%)",
      indigo8: "hsl(226, 75.4%, 74.5%)",
      indigo9: "hsl(226, 70.0%, 55.5%)",
      indigo10: "hsl(226, 58.6%, 51.3%)",
      indigo11: "hsl(226, 55.0%, 45.0%)",
      indigo12: "hsl(226, 62.0%, 17.0%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/lime.js
var require_lime2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/lime.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var lime_exports = {};
    __export2(lime_exports, {
      lime: () => lime2
    });
    module2.exports = __toCommonJS2(lime_exports);
    var lime2 = {
      lime1: "hsl(85, 50.0%, 98.7%)",
      lime2: "hsl(85, 66.7%, 96.5%)",
      lime3: "hsl(85, 76.0%, 92.3%)",
      lime4: "hsl(84, 75.3%, 87.5%)",
      lime5: "hsl(84, 71.5%, 81.9%)",
      lime6: "hsl(82, 65.0%, 74.6%)",
      lime7: "hsl(79, 53.2%, 61.8%)",
      lime8: "hsl(76, 61.7%, 45.1%)",
      lime9: "hsl(81, 67.0%, 50.0%)",
      lime10: "hsl(80, 68.3%, 46.9%)",
      lime11: "hsl(75, 80.0%, 26.0%)",
      lime12: "hsl(78, 70.0%, 11.5%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/mint.js
var require_mint2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/mint.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var mint_exports = {};
    __export2(mint_exports, {
      mint: () => mint2
    });
    module2.exports = __toCommonJS2(mint_exports);
    var mint2 = {
      mint1: "hsl(165, 80.0%, 98.8%)",
      mint2: "hsl(164, 88.2%, 96.7%)",
      mint3: "hsl(164, 76.6%, 93.3%)",
      mint4: "hsl(165, 68.8%, 89.5%)",
      mint5: "hsl(165, 60.6%, 84.5%)",
      mint6: "hsl(165, 53.5%, 76.9%)",
      mint7: "hsl(166, 50.7%, 66.1%)",
      mint8: "hsl(168, 52.8%, 51.0%)",
      mint9: "hsl(167, 65.0%, 66.0%)",
      mint10: "hsl(167, 59.3%, 63.1%)",
      mint11: "hsl(172, 72.0%, 28.5%)",
      mint12: "hsl(172, 70.0%, 12.0%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/olive.js
var require_olive2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/olive.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var olive_exports = {};
    __export2(olive_exports, {
      olive: () => olive2
    });
    module2.exports = __toCommonJS2(olive_exports);
    var olive2 = {
      olive1: "hsl(110, 20.0%, 99.0%)",
      olive2: "hsl(120, 16.7%, 97.6%)",
      olive3: "hsl(119, 10.1%, 95.2%)",
      olive4: "hsl(118, 8.1%, 93.0%)",
      olive5: "hsl(117, 7.1%, 90.8%)",
      olive6: "hsl(115, 6.4%, 88.5%)",
      olive7: "hsl(114, 5.9%, 85.4%)",
      olive8: "hsl(110, 5.2%, 77.3%)",
      olive9: "hsl(110, 3.5%, 55.5%)",
      olive10: "hsl(111, 2.8%, 51.7%)",
      olive11: "hsl(110, 3.0%, 43.0%)",
      olive12: "hsl(110, 25.0%, 9.5%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/orange.js
var require_orange2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/orange.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var orange_exports = {};
    __export2(orange_exports, {
      orange: () => orange3
    });
    module2.exports = __toCommonJS2(orange_exports);
    var orange3 = {
      orange1: "hsl(24, 70.0%, 99.0%)",
      orange2: "hsl(24, 83.3%, 97.6%)",
      orange3: "hsl(24, 100%, 95.3%)",
      orange4: "hsl(25, 100%, 92.2%)",
      orange5: "hsl(25, 100%, 88.2%)",
      orange6: "hsl(25, 100%, 82.8%)",
      orange7: "hsl(24, 100%, 75.3%)",
      orange8: "hsl(24, 94.5%, 64.3%)",
      orange9: "hsl(24, 94.0%, 50.0%)",
      orange10: "hsl(24, 100%, 46.5%)",
      orange11: "hsl(24, 100%, 37.0%)",
      orange12: "hsl(15, 60.0%, 17.0%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/pink.js
var require_pink2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/pink.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var pink_exports = {};
    __export2(pink_exports, {
      pink: () => pink3
    });
    module2.exports = __toCommonJS2(pink_exports);
    var pink3 = {
      pink1: "hsl(322, 100%, 99.4%)",
      pink2: "hsl(323, 100%, 98.4%)",
      pink3: "hsl(323, 86.3%, 96.5%)",
      pink4: "hsl(323, 78.7%, 94.2%)",
      pink5: "hsl(323, 72.2%, 91.1%)",
      pink6: "hsl(323, 66.3%, 86.6%)",
      pink7: "hsl(323, 62.0%, 80.1%)",
      pink8: "hsl(323, 60.3%, 72.4%)",
      pink9: "hsl(322, 65.0%, 54.5%)",
      pink10: "hsl(322, 63.9%, 50.7%)",
      pink11: "hsl(322, 75.0%, 46.0%)",
      pink12: "hsl(320, 70.0%, 13.5%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/plum.js
var require_plum2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/plum.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var plum_exports = {};
    __export2(plum_exports, {
      plum: () => plum2
    });
    module2.exports = __toCommonJS2(plum_exports);
    var plum2 = {
      plum1: "hsl(292, 90.0%, 99.4%)",
      plum2: "hsl(300, 100%, 98.6%)",
      plum3: "hsl(299, 71.2%, 96.4%)",
      plum4: "hsl(299, 62.0%, 93.8%)",
      plum5: "hsl(298, 56.1%, 90.5%)",
      plum6: "hsl(296, 51.3%, 85.8%)",
      plum7: "hsl(295, 48.2%, 78.9%)",
      plum8: "hsl(292, 47.7%, 70.8%)",
      plum9: "hsl(292, 45.0%, 51.0%)",
      plum10: "hsl(292, 50.2%, 46.9%)",
      plum11: "hsl(292, 60.0%, 42.5%)",
      plum12: "hsl(291, 66.0%, 14.0%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/purple.js
var require_purple2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/purple.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var purple_exports = {};
    __export2(purple_exports, {
      purple: () => purple3
    });
    module2.exports = __toCommonJS2(purple_exports);
    var purple3 = {
      purple1: "hsl(280, 65.0%, 99.4%)",
      purple2: "hsl(276, 100%, 99.0%)",
      purple3: "hsl(276, 83.1%, 97.0%)",
      purple4: "hsl(275, 76.4%, 94.7%)",
      purple5: "hsl(275, 70.8%, 91.8%)",
      purple6: "hsl(274, 65.4%, 87.8%)",
      purple7: "hsl(273, 61.0%, 81.7%)",
      purple8: "hsl(272, 60.0%, 73.5%)",
      purple9: "hsl(272, 51.0%, 54.0%)",
      purple10: "hsl(272, 46.8%, 50.3%)",
      purple11: "hsl(272, 50.0%, 45.8%)",
      purple12: "hsl(272, 66.0%, 16.0%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/mauve.js
var require_mauve2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/mauve.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var mauve_exports = {};
    __export2(mauve_exports, {
      mauve: () => mauve2
    });
    module2.exports = __toCommonJS2(mauve_exports);
    var mauve2 = {
      mauve1: "hsl(300, 20.0%, 99.0%)",
      mauve2: "hsl(300, 7.7%, 97.5%)",
      mauve3: "hsl(294, 5.5%, 95.3%)",
      mauve4: "hsl(289, 4.7%, 93.3%)",
      mauve5: "hsl(283, 4.4%, 91.3%)",
      mauve6: "hsl(278, 4.1%, 89.1%)",
      mauve7: "hsl(271, 3.9%, 86.3%)",
      mauve8: "hsl(255, 3.7%, 78.8%)",
      mauve9: "hsl(252, 4.0%, 57.3%)",
      mauve10: "hsl(253, 3.5%, 53.5%)",
      mauve11: "hsl(252, 4.0%, 44.8%)",
      mauve12: "hsl(260, 25.0%, 11.0%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/red.js
var require_red2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/red.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var red_exports = {};
    __export2(red_exports, {
      red: () => red3
    });
    module2.exports = __toCommonJS2(red_exports);
    var red3 = {
      red1: "hsl(359, 100%, 99.4%)",
      red2: "hsl(359, 100%, 98.6%)",
      red3: "hsl(360, 100%, 96.8%)",
      red4: "hsl(360, 97.9%, 94.8%)",
      red5: "hsl(360, 90.2%, 91.9%)",
      red6: "hsl(360, 81.7%, 87.8%)",
      red7: "hsl(359, 74.2%, 81.7%)",
      red8: "hsl(359, 69.5%, 74.3%)",
      red9: "hsl(358, 75.0%, 59.0%)",
      red10: "hsl(358, 69.4%, 55.2%)",
      red11: "hsl(358, 65.0%, 48.7%)",
      red12: "hsl(354, 50.0%, 14.6%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/sage.js
var require_sage2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/sage.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var sage_exports = {};
    __export2(sage_exports, {
      sage: () => sage2
    });
    module2.exports = __toCommonJS2(sage_exports);
    var sage2 = {
      sage1: "hsl(155, 30.0%, 98.8%)",
      sage2: "hsl(150, 16.7%, 97.6%)",
      sage3: "hsl(151, 10.6%, 95.2%)",
      sage4: "hsl(151, 8.8%, 93.0%)",
      sage5: "hsl(151, 7.8%, 90.8%)",
      sage6: "hsl(152, 7.2%, 88.4%)",
      sage7: "hsl(153, 6.7%, 85.3%)",
      sage8: "hsl(154, 6.1%, 77.5%)",
      sage9: "hsl(155, 3.5%, 55.5%)",
      sage10: "hsl(154, 2.8%, 51.7%)",
      sage11: "hsl(155, 3.0%, 43.0%)",
      sage12: "hsl(155, 24.0%, 9.0%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/sand.js
var require_sand2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/sand.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var sand_exports = {};
    __export2(sand_exports, {
      sand: () => sand2
    });
    module2.exports = __toCommonJS2(sand_exports);
    var sand2 = {
      sand1: "hsl(50, 20.0%, 99.0%)",
      sand2: "hsl(60, 7.7%, 97.5%)",
      sand3: "hsl(59, 6.5%, 95.1%)",
      sand4: "hsl(58, 6.1%, 92.9%)",
      sand5: "hsl(57, 6.0%, 90.7%)",
      sand6: "hsl(56, 5.9%, 88.4%)",
      sand7: "hsl(55, 5.9%, 85.2%)",
      sand8: "hsl(51, 6.0%, 77.1%)",
      sand9: "hsl(50, 2.0%, 55.7%)",
      sand10: "hsl(55, 1.7%, 51.9%)",
      sand11: "hsl(50, 2.0%, 43.1%)",
      sand12: "hsl(50, 6.0%, 10.0%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/sky.js
var require_sky2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/sky.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var sky_exports = {};
    __export2(sky_exports, {
      sky: () => sky2
    });
    module2.exports = __toCommonJS2(sky_exports);
    var sky2 = {
      sky1: "hsl(193, 100%, 98.8%)",
      sky2: "hsl(193, 100%, 97.3%)",
      sky3: "hsl(193, 99.0%, 94.7%)",
      sky4: "hsl(193, 91.4%, 91.4%)",
      sky5: "hsl(194, 82.0%, 86.6%)",
      sky6: "hsl(194, 74.1%, 79.5%)",
      sky7: "hsl(194, 72.3%, 69.6%)",
      sky8: "hsl(193, 77.9%, 53.9%)",
      sky9: "hsl(193, 98.0%, 70.0%)",
      sky10: "hsl(193, 87.0%, 66.5%)",
      sky11: "hsl(195, 100%, 31.5%)",
      sky12: "hsl(195, 100%, 13.0%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/slate.js
var require_slate2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/slate.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var slate_exports = {};
    __export2(slate_exports, {
      slate: () => slate2
    });
    module2.exports = __toCommonJS2(slate_exports);
    var slate2 = {
      slate1: "hsl(206, 30.0%, 98.8%)",
      slate2: "hsl(210, 16.7%, 97.6%)",
      slate3: "hsl(209, 13.3%, 95.3%)",
      slate4: "hsl(209, 12.2%, 93.2%)",
      slate5: "hsl(208, 11.7%, 91.1%)",
      slate6: "hsl(208, 11.3%, 88.9%)",
      slate7: "hsl(207, 11.1%, 85.9%)",
      slate8: "hsl(205, 10.7%, 78.0%)",
      slate9: "hsl(206, 6.0%, 56.1%)",
      slate10: "hsl(206, 5.8%, 52.3%)",
      slate11: "hsl(206, 6.0%, 43.5%)",
      slate12: "hsl(206, 24.0%, 9.0%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/teal.js
var require_teal2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/teal.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var teal_exports = {};
    __export2(teal_exports, {
      teal: () => teal2
    });
    module2.exports = __toCommonJS2(teal_exports);
    var teal2 = {
      teal1: "hsl(165, 60.0%, 98.8%)",
      teal2: "hsl(169, 64.7%, 96.7%)",
      teal3: "hsl(169, 59.8%, 94.0%)",
      teal4: "hsl(169, 53.1%, 90.2%)",
      teal5: "hsl(170, 47.1%, 85.0%)",
      teal6: "hsl(170, 42.6%, 77.9%)",
      teal7: "hsl(170, 39.9%, 68.1%)",
      teal8: "hsl(172, 42.1%, 52.5%)",
      teal9: "hsl(173, 80.0%, 36.0%)",
      teal10: "hsl(173, 83.4%, 32.5%)",
      teal11: "hsl(174, 90.0%, 25.2%)",
      teal12: "hsl(170, 50.0%, 12.5%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/tomato.js
var require_tomato2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/tomato.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var tomato_exports = {};
    __export2(tomato_exports, {
      tomato: () => tomato2
    });
    module2.exports = __toCommonJS2(tomato_exports);
    var tomato2 = {
      tomato1: "hsl(10, 100%, 99.4%)",
      tomato2: "hsl(8, 100%, 98.4%)",
      tomato3: "hsl(8, 100%, 96.6%)",
      tomato4: "hsl(8, 100%, 94.3%)",
      tomato5: "hsl(8, 92.8%, 91.0%)",
      tomato6: "hsl(9, 84.7%, 86.3%)",
      tomato7: "hsl(10, 77.3%, 79.5%)",
      tomato8: "hsl(10, 71.6%, 71.0%)",
      tomato9: "hsl(10, 78.0%, 54.0%)",
      tomato10: "hsl(10, 71.5%, 50.0%)",
      tomato11: "hsl(10, 82.0%, 43.5%)",
      tomato12: "hsl(10, 50.0%, 13.5%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/violet.js
var require_violet2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/violet.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var violet_exports = {};
    __export2(violet_exports, {
      violet: () => violet2
    });
    module2.exports = __toCommonJS2(violet_exports);
    var violet2 = {
      violet1: "hsl(255, 65.0%, 99.4%)",
      violet2: "hsl(252, 100%, 99.0%)",
      violet3: "hsl(252, 96.9%, 97.4%)",
      violet4: "hsl(252, 91.5%, 95.5%)",
      violet5: "hsl(252, 85.1%, 93.0%)",
      violet6: "hsl(252, 77.8%, 89.4%)",
      violet7: "hsl(252, 71.0%, 83.7%)",
      violet8: "hsl(252, 68.6%, 76.3%)",
      violet9: "hsl(252, 56.0%, 57.5%)",
      violet10: "hsl(251, 48.1%, 53.5%)",
      violet11: "hsl(250, 43.0%, 48.0%)",
      violet12: "hsl(254, 60.0%, 18.5%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/yellow.js
var require_yellow2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/yellow.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var yellow_exports = {};
    __export2(yellow_exports, {
      yellow: () => yellow3
    });
    module2.exports = __toCommonJS2(yellow_exports);
    var yellow3 = {
      yellow1: "hsl(60, 54.0%, 98.5%)",
      yellow2: "hsl(52, 100%, 95.5%)",
      yellow3: "hsl(55, 100%, 90.9%)",
      yellow4: "hsl(54, 100%, 86.6%)",
      yellow5: "hsl(52, 97.9%, 82.0%)",
      yellow6: "hsl(50, 89.4%, 76.1%)",
      yellow7: "hsl(47, 80.4%, 68.0%)",
      yellow8: "hsl(48, 100%, 46.1%)",
      yellow9: "hsl(53, 92.0%, 50.0%)",
      yellow10: "hsl(50, 100%, 48.5%)",
      yellow11: "hsl(42, 100%, 29.0%)",
      yellow12: "hsl(40, 55.0%, 13.5%)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/amberA.js
var require_amberA2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/amberA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var amberA_exports = {};
    __export2(amberA_exports, {
      amberA: () => amberA2
    });
    module2.exports = __toCommonJS2(amberA_exports);
    var amberA2 = {
      amberA1: "hsla(40, 94.9%, 38.7%, 0.016)",
      amberA2: "hsla(40, 100%, 50.3%, 0.071)",
      amberA3: "hsla(44, 100%, 50.1%, 0.165)",
      amberA4: "hsla(43, 100%, 50.0%, 0.263)",
      amberA5: "hsla(42, 100%, 50.0%, 0.365)",
      amberA6: "hsla(38, 100%, 50.1%, 0.475)",
      amberA7: "hsla(36, 99.9%, 46.2%, 0.612)",
      amberA8: "hsla(35, 99.8%, 46.0%, 0.832)",
      amberA9: "hsla(39, 100%, 50.0%, 0.859)",
      amberA10: "hsla(35, 100%, 50.0%, 0.891)",
      amberA11: "hsla(29, 100%, 33.6%, 0.980)",
      amberA12: "hsla(20, 99.8%, 14.1%, 0.965)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/blueA.js
var require_blueA2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/blueA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var blueA_exports = {};
    __export2(blueA_exports, {
      blueA: () => blueA2
    });
    module2.exports = __toCommonJS2(blueA_exports);
    var blueA2 = {
      blueA1: "hsla(210, 100%, 51.0%, 0.016)",
      blueA2: "hsla(210, 100%, 51.0%, 0.040)",
      blueA3: "hsla(210, 100%, 50.3%, 0.071)",
      blueA4: "hsla(210, 100%, 50.1%, 0.118)",
      blueA5: "hsla(208, 99.1%, 47.1%, 0.189)",
      blueA6: "hsla(209, 99.5%, 45.3%, 0.283)",
      blueA7: "hsla(208, 99.9%, 43.8%, 0.412)",
      blueA8: "hsla(206, 99.8%, 45.1%, 0.632)",
      blueA9: "hsla(206, 100%, 50.0%, 0.980)",
      blueA10: "hsla(208, 100%, 47.2%, 0.980)",
      blueA11: "hsla(212, 100%, 43.0%, 0.980)",
      blueA12: "hsla(213, 100%, 14.4%, 0.980)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/bronzeA.js
var require_bronzeA2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/bronzeA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var bronzeA_exports = {};
    __export2(bronzeA_exports, {
      bronzeA: () => bronzeA2
    });
    module2.exports = __toCommonJS2(bronzeA_exports);
    var bronzeA2 = {
      bronzeA1: "hsla(0, 89.3%, 18.3%, 0.012)",
      bronzeA2: "hsla(17, 95.1%, 40.1%, 0.036)",
      bronzeA3: "hsla(18, 98.3%, 29.8%, 0.067)",
      bronzeA4: "hsla(17, 99.6%, 26.0%, 0.106)",
      bronzeA5: "hsla(19, 99.6%, 23.8%, 0.157)",
      bronzeA6: "hsla(17, 99.2%, 22.5%, 0.220)",
      bronzeA7: "hsla(18, 99.7%, 21.6%, 0.310)",
      bronzeA8: "hsla(17, 99.5%, 20.2%, 0.420)",
      bronzeA9: "hsla(18, 99.9%, 16.7%, 0.553)",
      bronzeA10: "hsla(17, 99.2%, 15.4%, 0.589)",
      bronzeA11: "hsla(15, 99.9%, 13.2%, 0.655)",
      bronzeA12: "hsla(12, 98.7%, 5.7%, 0.832)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/brownA.js
var require_brownA2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/brownA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var brownA_exports = {};
    __export2(brownA_exports, {
      brownA: () => brownA2
    });
    module2.exports = __toCommonJS2(brownA_exports);
    var brownA2 = {
      brownA1: "hsla(30, 94.3%, 34.6%, 0.012)",
      brownA2: "hsla(30, 94.3%, 34.6%, 0.036)",
      brownA3: "hsla(30, 97.7%, 33.9%, 0.083)",
      brownA4: "hsla(31, 98.5%, 34.2%, 0.134)",
      brownA5: "hsla(29, 100%, 34.3%, 0.200)",
      brownA6: "hsla(28, 99.2%, 34.6%, 0.291)",
      brownA7: "hsla(29, 99.8%, 33.8%, 0.412)",
      brownA8: "hsla(28, 100%, 33.3%, 0.553)",
      brownA9: "hsla(28, 99.9%, 25.5%, 0.655)",
      brownA10: "hsla(27, 99.7%, 22.4%, 0.675)",
      brownA11: "hsla(25, 99.8%, 17.3%, 0.714)",
      brownA12: "hsla(21, 99.4%, 6.6%, 0.867)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/crimsonA.js
var require_crimsonA2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/crimsonA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var crimsonA_exports = {};
    __export2(crimsonA_exports, {
      crimsonA: () => crimsonA2
    });
    module2.exports = __toCommonJS2(crimsonA_exports);
    var crimsonA2 = {
      crimsonA1: "hsla(340, 100%, 51.0%, 0.012)",
      crimsonA2: "hsla(330, 100%, 51.0%, 0.032)",
      crimsonA3: "hsla(332, 99.1%, 47.1%, 0.063)",
      crimsonA4: "hsla(331, 99.9%, 44.3%, 0.102)",
      crimsonA5: "hsla(333, 99.9%, 42.3%, 0.153)",
      crimsonA6: "hsla(333, 99.5%, 40.5%, 0.224)",
      crimsonA7: "hsla(335, 99.7%, 39.1%, 0.322)",
      crimsonA8: "hsla(336, 99.5%, 38.5%, 0.440)",
      crimsonA9: "hsla(336, 99.9%, 44.3%, 0.761)",
      crimsonA10: "hsla(336, 100%, 42.5%, 0.808)",
      crimsonA11: "hsla(336, 99.8%, 40.3%, 0.883)",
      crimsonA12: "hsla(340, 99.0%, 10.0%, 0.950)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/cyanA.js
var require_cyanA2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/cyanA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var cyanA_exports = {};
    __export2(cyanA_exports, {
      cyanA: () => cyanA2
    });
    module2.exports = __toCommonJS2(cyanA_exports);
    var cyanA2 = {
      cyanA1: "hsla(195, 95.2%, 41.2%, 0.020)",
      cyanA2: "hsla(185, 99.9%, 42.3%, 0.051)",
      cyanA3: "hsla(186, 97.8%, 42.2%, 0.095)",
      cyanA4: "hsla(186, 99.9%, 38.5%, 0.153)",
      cyanA5: "hsla(187, 99.3%, 36.6%, 0.232)",
      cyanA6: "hsla(188, 99.4%, 35.4%, 0.334)",
      cyanA7: "hsla(189, 99.6%, 35.0%, 0.483)",
      cyanA8: "hsla(189, 99.9%, 37.6%, 0.761)",
      cyanA9: "hsla(190, 100%, 37.8%, 0.980)",
      cyanA10: "hsla(191, 99.9%, 34.6%, 0.969)",
      cyanA11: "hsla(192, 100%, 27.6%, 0.953)",
      cyanA12: "hsla(192, 100%, 11.0%, 0.980)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/goldA.js
var require_goldA2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/goldA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var goldA_exports = {};
    __export2(goldA_exports, {
      goldA: () => goldA2
    });
    module2.exports = __toCommonJS2(goldA_exports);
    var goldA2 = {
      goldA1: "hsla(60, 89.3%, 18.3%, 0.012)",
      goldA2: "hsla(47, 99.9%, 34.6%, 0.051)",
      goldA3: "hsla(45, 97.0%, 27.9%, 0.087)",
      goldA4: "hsla(46, 98.0%, 25.4%, 0.134)",
      goldA5: "hsla(43, 98.4%, 22.6%, 0.185)",
      goldA6: "hsla(41, 99.7%, 22.0%, 0.259)",
      goldA7: "hsla(38, 99.8%, 21.5%, 0.357)",
      goldA8: "hsla(36, 99.3%, 21.5%, 0.487)",
      goldA9: "hsla(36, 99.9%, 16.2%, 0.604)",
      goldA10: "hsla(36, 99.2%, 14.6%, 0.636)",
      goldA11: "hsla(35, 99.1%, 11.2%, 0.687)",
      goldA12: "hsla(38, 98.0%, 3.8%, 0.832)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/grassA.js
var require_grassA2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/grassA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var grassA_exports = {};
    __export2(grassA_exports, {
      grassA: () => grassA2
    });
    module2.exports = __toCommonJS2(grassA_exports);
    var grassA2 = {
      grassA1: "hsla(120, 94.9%, 38.7%, 0.016)",
      grassA2: "hsla(120, 94.9%, 38.7%, 0.048)",
      grassA3: "hsla(120, 98.0%, 35.5%, 0.079)",
      grassA4: "hsla(120, 98.7%, 31.5%, 0.126)",
      grassA5: "hsla(122, 98.5%, 29.9%, 0.193)",
      grassA6: "hsla(125, 99.2%, 27.9%, 0.283)",
      grassA7: "hsla(125, 99.9%, 27.0%, 0.408)",
      grassA8: "hsla(131, 100%, 27.6%, 0.604)",
      grassA9: "hsla(131, 99.7%, 26.3%, 0.726)",
      grassA10: "hsla(132, 99.9%, 24.0%, 0.761)",
      grassA11: "hsla(133, 99.5%, 19.5%, 0.840)",
      grassA12: "hsla(128, 98.0%, 4.9%, 0.895)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/grayA.js
var require_grayA2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/grayA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var grayA_exports = {};
    __export2(grayA_exports, {
      grayA: () => grayA2
    });
    module2.exports = __toCommonJS2(grayA_exports);
    var grayA2 = {
      grayA1: "hsla(0, 0%, 0%, 0.012)",
      grayA2: "hsla(0, 0%, 0%, 0.027)",
      grayA3: "hsla(0, 0%, 0%, 0.047)",
      grayA4: "hsla(0, 0%, 0%, 0.071)",
      grayA5: "hsla(0, 0%, 0%, 0.090)",
      grayA6: "hsla(0, 0%, 0%, 0.114)",
      grayA7: "hsla(0, 0%, 0%, 0.141)",
      grayA8: "hsla(0, 0%, 0%, 0.220)",
      grayA9: "hsla(0, 0%, 0%, 0.439)",
      grayA10: "hsla(0, 0%, 0%, 0.478)",
      grayA11: "hsla(0, 0%, 0%, 0.565)",
      grayA12: "hsla(0, 0%, 0%, 0.910)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/greenA.js
var require_greenA2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/greenA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var greenA_exports = {};
    __export2(greenA_exports, {
      greenA: () => greenA2
    });
    module2.exports = __toCommonJS2(greenA_exports);
    var greenA2 = {
      greenA1: "hsla(140, 94.9%, 38.7%, 0.016)",
      greenA2: "hsla(138, 99.9%, 38.5%, 0.051)",
      greenA3: "hsla(139, 97.7%, 36.9%, 0.087)",
      greenA4: "hsla(139, 98.5%, 32.7%, 0.134)",
      greenA5: "hsla(141, 100%, 30.4%, 0.200)",
      greenA6: "hsla(142, 99.0%, 28.9%, 0.295)",
      greenA7: "hsla(146, 99.5%, 27.6%, 0.428)",
      greenA8: "hsla(151, 99.5%, 28.8%, 0.644)",
      greenA9: "hsla(151, 99.9%, 28.0%, 0.812)",
      greenA10: "hsla(152, 99.6%, 25.8%, 0.840)",
      greenA11: "hsla(153, 99.9%, 21.0%, 0.906)",
      greenA12: "hsla(155, 99.4%, 6.2%, 0.918)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/indigoA.js
var require_indigoA2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/indigoA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var indigoA_exports = {};
    __export2(indigoA_exports, {
      indigoA: () => indigoA2
    });
    module2.exports = __toCommonJS2(indigoA_exports);
    var indigoA2 = {
      indigoA1: "hsla(240, 92.6%, 26.5%, 0.008)",
      indigoA2: "hsla(223, 100%, 51.0%, 0.028)",
      indigoA3: "hsla(224, 100%, 50.1%, 0.059)",
      indigoA4: "hsla(223, 98.0%, 48.5%, 0.099)",
      indigoA5: "hsla(225, 98.6%, 46.4%, 0.150)",
      indigoA6: "hsla(224, 99.5%, 44.9%, 0.224)",
      indigoA7: "hsla(225, 99.7%, 43.9%, 0.318)",
      indigoA8: "hsla(226, 99.5%, 43.1%, 0.448)",
      indigoA9: "hsla(226, 100%, 41.2%, 0.757)",
      indigoA10: "hsla(226, 99.8%, 37.1%, 0.773)",
      indigoA11: "hsla(226, 99.6%, 31.1%, 0.797)",
      indigoA12: "hsla(226, 99.3%, 11.4%, 0.938)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/limeA.js
var require_limeA2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/limeA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var limeA_exports = {};
    __export2(limeA_exports, {
      limeA: () => limeA2
    });
    module2.exports = __toCommonJS2(limeA_exports);
    var limeA2 = {
      limeA1: "hsla(80, 93.8%, 31.4%, 0.020)",
      limeA2: "hsla(85, 99.3%, 40.2%, 0.059)",
      limeA3: "hsla(84, 98.7%, 43.2%, 0.138)",
      limeA4: "hsla(84, 99.6%, 43.0%, 0.220)",
      limeA5: "hsla(85, 99.8%, 41.8%, 0.310)",
      limeA6: "hsla(82, 99.8%, 39.3%, 0.420)",
      limeA7: "hsla(79, 99.7%, 34.6%, 0.585)",
      limeA8: "hsla(76, 99.8%, 33.7%, 0.828)",
      limeA9: "hsla(81, 99.8%, 40.2%, 0.836)",
      limeA10: "hsla(80, 100%, 37.6%, 0.851)",
      limeA11: "hsla(75, 99.5%, 22.0%, 0.950)",
      limeA12: "hsla(78, 99.6%, 8.4%, 0.965)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/mintA.js
var require_mintA2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/mintA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var mintA_exports = {};
    __export2(mintA_exports, {
      mintA: () => mintA2
    });
    module2.exports = __toCommonJS2(mintA_exports);
    var mintA2 = {
      mintA1: "hsla(168, 95.4%, 42.8%, 0.024)",
      mintA2: "hsla(164, 99.1%, 47.1%, 0.063)",
      mintA3: "hsla(164, 99.3%, 43.5%, 0.118)",
      mintA4: "hsla(164, 99.3%, 41.3%, 0.177)",
      mintA5: "hsla(165, 99.0%, 37.5%, 0.248)",
      mintA6: "hsla(165, 100%, 35.0%, 0.353)",
      mintA7: "hsla(166, 99.9%, 33.5%, 0.510)",
      mintA8: "hsla(168, 99.6%, 34.6%, 0.750)",
      mintA9: "hsla(167, 99.9%, 39.5%, 0.561)",
      mintA10: "hsla(167, 99.7%, 37.4%, 0.589)",
      mintA11: "hsla(172, 99.8%, 22.4%, 0.922)",
      mintA12: "hsla(172, 99.7%, 8.8%, 0.965)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/oliveA.js
var require_oliveA2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/oliveA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var oliveA_exports = {};
    __export2(oliveA_exports, {
      oliveA: () => oliveA2
    });
    module2.exports = __toCommonJS2(oliveA_exports);
    var oliveA2 = {
      oliveA1: "hsla(120, 89.3%, 18.3%, 0.012)",
      oliveA2: "hsla(120, 87.7%, 16.0%, 0.028)",
      oliveA3: "hsla(120, 99.5%, 7.7%, 0.051)",
      oliveA4: "hsla(120, 92.3%, 8.5%, 0.075)",
      oliveA5: "hsla(120, 86.0%, 6.9%, 0.099)",
      oliveA6: "hsla(120, 94.8%, 6.8%, 0.122)",
      oliveA7: "hsla(120, 99.3%, 5.2%, 0.153)",
      oliveA8: "hsla(110, 93.8%, 5.2%, 0.240)",
      oliveA9: "hsla(111, 98.7%, 3.0%, 0.459)",
      oliveA10: "hsla(111, 93.5%, 2.9%, 0.499)",
      oliveA11: "hsla(111, 95.2%, 2.5%, 0.585)",
      oliveA12: "hsla(110, 97.6%, 2.6%, 0.930)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/orangeA.js
var require_orangeA2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/orangeA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var orangeA_exports = {};
    __export2(orangeA_exports, {
      orangeA: () => orangeA2
    });
    module2.exports = __toCommonJS2(orangeA_exports);
    var orangeA2 = {
      orangeA1: "hsla(20, 94.9%, 38.7%, 0.016)",
      orangeA2: "hsla(24, 95.8%, 46.5%, 0.044)",
      orangeA3: "hsla(25, 100%, 50.5%, 0.095)",
      orangeA4: "hsla(26, 100%, 50.0%, 0.157)",
      orangeA5: "hsla(25, 100%, 50.1%, 0.236)",
      orangeA6: "hsla(25, 100%, 50.1%, 0.346)",
      orangeA7: "hsla(24, 100%, 50.1%, 0.495)",
      orangeA8: "hsla(24, 99.7%, 48.7%, 0.695)",
      orangeA9: "hsla(24, 99.9%, 48.4%, 0.969)",
      orangeA10: "hsla(23, 100%, 46.4%, 0.980)",
      orangeA11: "hsla(23, 100%, 36.8%, 0.980)",
      orangeA12: "hsla(15, 99.4%, 11.0%, 0.934)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/pinkA.js
var require_pinkA2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/pinkA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var pinkA_exports = {};
    __export2(pinkA_exports, {
      pinkA: () => pinkA2
    });
    module2.exports = __toCommonJS2(pinkA_exports);
    var pinkA2 = {
      pinkA1: "hsla(320, 100%, 51.0%, 0.012)",
      pinkA2: "hsla(323, 100%, 51.0%, 0.032)",
      pinkA3: "hsla(323, 98.9%, 47.3%, 0.067)",
      pinkA4: "hsla(323, 99.9%, 44.3%, 0.102)",
      pinkA5: "hsla(324, 99.9%, 42.3%, 0.153)",
      pinkA6: "hsla(323, 99.5%, 39.6%, 0.224)",
      pinkA7: "hsla(323, 99.7%, 38.5%, 0.322)",
      pinkA8: "hsla(323, 99.5%, 37.7%, 0.444)",
      pinkA9: "hsla(322, 99.7%, 39.3%, 0.750)",
      pinkA10: "hsla(322, 100%, 39.1%, 0.808)",
      pinkA11: "hsla(322, 99.8%, 39.0%, 0.887)",
      pinkA12: "hsla(321, 99.8%, 10.0%, 0.961)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/plumA.js
var require_plumA2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/plumA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var plumA_exports = {};
    __export2(plumA_exports, {
      plumA: () => plumA2
    });
    module2.exports = __toCommonJS2(plumA_exports);
    var plumA2 = {
      plumA1: "hsla(280, 100%, 51.0%, 0.012)",
      plumA2: "hsla(300, 100%, 51.0%, 0.028)",
      plumA3: "hsla(300, 99.0%, 40.9%, 0.063)",
      plumA4: "hsla(300, 99.9%, 38.5%, 0.102)",
      plumA5: "hsla(298, 98.2%, 35.9%, 0.150)",
      plumA6: "hsla(297, 99.6%, 33.7%, 0.216)",
      plumA7: "hsla(295, 99.7%, 32.6%, 0.314)",
      plumA8: "hsla(292, 99.6%, 32.4%, 0.432)",
      plumA9: "hsla(292, 99.9%, 31.0%, 0.710)",
      plumA10: "hsla(292, 99.9%, 30.8%, 0.765)",
      plumA11: "hsla(292, 99.8%, 30.7%, 0.832)",
      plumA12: "hsla(291, 99.9%, 9.7%, 0.953)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/purpleA.js
var require_purpleA2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/purpleA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var purpleA_exports = {};
    __export2(purpleA_exports, {
      purpleA: () => purpleA2
    });
    module2.exports = __toCommonJS2(purpleA_exports);
    var purpleA2 = {
      purpleA1: "hsla(300, 94.3%, 34.6%, 0.012)",
      purpleA2: "hsla(276, 100%, 51.0%, 0.020)",
      purpleA3: "hsla(277, 99.6%, 46.5%, 0.055)",
      purpleA4: "hsla(274, 97.9%, 44.3%, 0.095)",
      purpleA5: "hsla(276, 98.6%, 42.0%, 0.142)",
      purpleA6: "hsla(275, 100%, 39.2%, 0.200)",
      purpleA7: "hsla(273, 99.2%, 38.2%, 0.295)",
      purpleA8: "hsla(272, 99.7%, 37.6%, 0.424)",
      purpleA9: "hsla(272, 99.6%, 34.0%, 0.695)",
      purpleA10: "hsla(272, 99.7%, 32.0%, 0.730)",
      purpleA11: "hsla(272, 99.8%, 29.7%, 0.773)",
      purpleA12: "hsla(272, 99.2%, 11.3%, 0.946)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/mauveA.js
var require_mauveA2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/mauveA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var mauveA_exports = {};
    __export2(mauveA_exports, {
      mauveA: () => mauveA2
    });
    module2.exports = __toCommonJS2(mauveA_exports);
    var mauveA2 = {
      mauveA1: "hsla(300, 89.3%, 18.3%, 0.012)",
      mauveA2: "hsla(300, 78.1%, 9.0%, 0.028)",
      mauveA3: "hsla(300, 99.5%, 7.7%, 0.051)",
      mauveA4: "hsla(270, 90.5%, 6.1%, 0.071)",
      mauveA5: "hsla(270, 83.0%, 5.2%, 0.091)",
      mauveA6: "hsla(300, 93.5%, 3.7%, 0.114)",
      mauveA7: "hsla(270, 82.6%, 3.3%, 0.142)",
      mauveA8: "hsla(255, 95.2%, 3.7%, 0.220)",
      mauveA9: "hsla(255, 94.8%, 3.7%, 0.444)",
      mauveA10: "hsla(253, 96.5%, 3.8%, 0.483)",
      mauveA11: "hsla(247, 97.9%, 3.2%, 0.569)",
      mauveA12: "hsla(261, 98.7%, 3.0%, 0.918)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/redA.js
var require_redA2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/redA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var redA_exports = {};
    __export2(redA_exports, {
      redA: () => redA2
    });
    module2.exports = __toCommonJS2(redA_exports);
    var redA2 = {
      redA1: "hsla(0, 100%, 51.0%, 0.012)",
      redA2: "hsla(0, 100%, 51.0%, 0.032)",
      redA3: "hsla(0, 100%, 50.2%, 0.063)",
      redA4: "hsla(0, 100%, 50.0%, 0.102)",
      redA5: "hsla(0, 99.9%, 47.5%, 0.153)",
      redA6: "hsla(0, 99.5%, 44.9%, 0.224)",
      redA7: "hsla(359, 99.7%, 42.7%, 0.318)",
      redA8: "hsla(359, 99.6%, 41.1%, 0.436)",
      redA9: "hsla(358, 99.9%, 42.9%, 0.718)",
      redA10: "hsla(358, 99.9%, 41.0%, 0.761)",
      redA11: "hsla(358, 99.8%, 38.3%, 0.832)",
      redA12: "hsla(355, 99.3%, 7.9%, 0.926)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/sageA.js
var require_sageA2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/sageA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var sageA_exports = {};
    __export2(sageA_exports, {
      sageA: () => sageA2
    });
    module2.exports = __toCommonJS2(sageA_exports);
    var sageA2 = {
      sageA1: "hsla(150, 92.6%, 26.5%, 0.016)",
      sageA2: "hsla(150, 87.7%, 16.0%, 0.028)",
      sageA3: "hsla(160, 98.4%, 10.9%, 0.055)",
      sageA4: "hsla(140, 92.3%, 8.5%, 0.075)",
      sageA5: "hsla(160, 86.0%, 6.9%, 0.099)",
      sageA6: "hsla(156, 95.1%, 8.2%, 0.126)",
      sageA7: "hsla(156, 98.6%, 6.3%, 0.157)",
      sageA8: "hsla(154, 94.6%, 6.0%, 0.240)",
      sageA9: "hsla(154, 98.7%, 3.0%, 0.459)",
      sageA10: "hsla(154, 93.5%, 2.9%, 0.499)",
      sageA11: "hsla(154, 95.2%, 2.5%, 0.585)",
      sageA12: "hsla(158, 97.0%, 2.4%, 0.934)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/sandA.js
var require_sandA2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/sandA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var sandA_exports = {};
    __export2(sandA_exports, {
      sandA: () => sandA2
    });
    module2.exports = __toCommonJS2(sandA_exports);
    var sandA2 = {
      sandA1: "hsla(60, 89.3%, 18.3%, 0.012)",
      sandA2: "hsla(60, 78.1%, 9.0%, 0.028)",
      sandA3: "hsla(60, 99.0%, 3.9%, 0.051)",
      sandA4: "hsla(60, 88.9%, 5.9%, 0.075)",
      sandA5: "hsla(60, 86.0%, 6.9%, 0.099)",
      sandA6: "hsla(60, 93.2%, 5.2%, 0.122)",
      sandA7: "hsla(60, 98.3%, 5.1%, 0.157)",
      sandA8: "hsla(51, 94.1%, 6.0%, 0.244)",
      sandA9: "hsla(60, 99.8%, 1.7%, 0.451)",
      sandA10: "hsla(60, 90.7%, 1.8%, 0.491)",
      sandA11: "hsla(45, 93.7%, 1.5%, 0.577)",
      sandA12: "hsla(60, 98.0%, 0.7%, 0.906)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/skyA.js
var require_skyA2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/skyA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var skyA_exports = {};
    __export2(skyA_exports, {
      skyA: () => skyA2
    });
    module2.exports = __toCommonJS2(skyA_exports);
    var skyA2 = {
      skyA1: "hsla(190, 100%, 51.0%, 0.024)",
      skyA2: "hsla(193, 100%, 50.1%, 0.055)",
      skyA3: "hsla(193, 100%, 50.1%, 0.106)",
      skyA4: "hsla(194, 99.6%, 47.7%, 0.165)",
      skyA5: "hsla(194, 99.2%, 45.4%, 0.244)",
      skyA6: "hsla(194, 99.9%, 42.3%, 0.357)",
      skyA7: "hsla(194, 99.8%, 42.2%, 0.526)",
      skyA8: "hsla(193, 99.9%, 43.8%, 0.820)",
      skyA9: "hsla(193, 99.7%, 49.4%, 0.593)",
      skyA10: "hsla(193, 99.8%, 46.6%, 0.628)",
      skyA11: "hsla(196, 100%, 31.2%, 0.980)",
      skyA12: "hsla(196, 100%, 12.2%, 0.980)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/slateA.js
var require_slateA2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/slateA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var slateA_exports = {};
    __export2(slateA_exports, {
      slateA: () => slateA2
    });
    module2.exports = __toCommonJS2(slateA_exports);
    var slateA2 = {
      slateA1: "hsla(210, 92.6%, 26.5%, 0.016)",
      slateA2: "hsla(210, 87.7%, 16.0%, 0.028)",
      slateA3: "hsla(210, 98.8%, 14.4%, 0.055)",
      slateA4: "hsla(210, 94.1%, 11.1%, 0.075)",
      slateA5: "hsla(216, 91.1%, 10.9%, 0.099)",
      slateA6: "hsla(206, 96.4%, 11.3%, 0.126)",
      slateA7: "hsla(210, 99.1%, 10.1%, 0.157)",
      slateA8: "hsla(205, 96.5%, 10.0%, 0.244)",
      slateA9: "hsla(206, 98.8%, 5.9%, 0.467)",
      slateA10: "hsla(206, 99.6%, 5.4%, 0.506)",
      slateA11: "hsla(206, 97.0%, 4.8%, 0.593)",
      slateA12: "hsla(202, 97.0%, 2.4%, 0.934)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/tealA.js
var require_tealA2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/tealA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var tealA_exports = {};
    __export2(tealA_exports, {
      tealA: () => tealA2
    });
    module2.exports = __toCommonJS2(tealA_exports);
    var tealA2 = {
      tealA1: "hsla(165, 95.2%, 41.2%, 0.020)",
      tealA2: "hsla(169, 99.5%, 39.4%, 0.055)",
      tealA3: "hsla(167, 97.6%, 38.1%, 0.095)",
      tealA4: "hsla(168, 98.1%, 34.6%, 0.150)",
      tealA5: "hsla(170, 99.4%, 32.3%, 0.220)",
      tealA6: "hsla(170, 99.7%, 30.1%, 0.314)",
      tealA7: "hsla(170, 99.3%, 28.7%, 0.448)",
      tealA8: "hsla(172, 99.8%, 29.7%, 0.675)",
      tealA9: "hsla(173, 99.8%, 31.1%, 0.930)",
      tealA10: "hsla(173, 99.7%, 28.7%, 0.946)",
      tealA11: "hsla(174, 99.8%, 23.3%, 0.977)",
      tealA12: "hsla(171, 98.8%, 6.8%, 0.938)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/tomatoA.js
var require_tomatoA2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/tomatoA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var tomatoA_exports = {};
    __export2(tomatoA_exports, {
      tomatoA: () => tomatoA2
    });
    module2.exports = __toCommonJS2(tomatoA_exports);
    var tomatoA2 = {
      tomatoA1: "hsla(0, 100%, 51.0%, 0.012)",
      tomatoA2: "hsla(8, 100%, 51.0%, 0.032)",
      tomatoA3: "hsla(7, 100%, 50.2%, 0.067)",
      tomatoA4: "hsla(8, 100%, 50.1%, 0.114)",
      tomatoA5: "hsla(7, 99.5%, 47.9%, 0.173)",
      tomatoA6: "hsla(9, 99.9%, 46.2%, 0.255)",
      tomatoA7: "hsla(10, 99.8%, 43.6%, 0.365)",
      tomatoA8: "hsla(10, 99.5%, 41.8%, 0.499)",
      tomatoA9: "hsla(10, 99.9%, 43.8%, 0.820)",
      tomatoA10: "hsla(10, 100%, 41.8%, 0.859)",
      tomatoA11: "hsla(10, 99.9%, 38.8%, 0.922)",
      tomatoA12: "hsla(10, 99.0%, 7.4%, 0.934)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/violetA.js
var require_violetA2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/violetA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var violetA_exports = {};
    __export2(violetA_exports, {
      violetA: () => violetA2
    });
    module2.exports = __toCommonJS2(violetA_exports);
    var violetA2 = {
      violetA1: "hsla(270, 94.3%, 34.6%, 0.012)",
      violetA2: "hsla(252, 100%, 51.0%, 0.020)",
      violetA3: "hsla(254, 100%, 50.0%, 0.051)",
      violetA4: "hsla(251, 98.3%, 48.2%, 0.087)",
      violetA5: "hsla(252, 99.0%, 45.7%, 0.130)",
      violetA6: "hsla(251, 99.1%, 44.0%, 0.189)",
      violetA7: "hsla(252, 99.5%, 41.7%, 0.279)",
      violetA8: "hsla(252, 100%, 40.7%, 0.400)",
      violetA9: "hsla(252, 99.9%, 35.8%, 0.663)",
      violetA10: "hsla(251, 99.6%, 32.5%, 0.691)",
      violetA11: "hsla(250, 99.8%, 28.4%, 0.726)",
      violetA12: "hsla(254, 99.5%, 11.9%, 0.926)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/light/yellowA.js
var require_yellowA2 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/light/yellowA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var yellowA_exports = {};
    __export2(yellowA_exports, {
      yellowA: () => yellowA2
    });
    module2.exports = __toCommonJS2(yellowA_exports);
    var yellowA2 = {
      yellowA1: "hsla(60, 94.3%, 34.6%, 0.024)",
      yellowA2: "hsla(52, 100%, 50.4%, 0.091)",
      yellowA3: "hsla(55, 100%, 50.2%, 0.181)",
      yellowA4: "hsla(54, 100%, 50.1%, 0.267)",
      yellowA5: "hsla(52, 99.9%, 49.5%, 0.357)",
      yellowA6: "hsla(50, 100%, 47.4%, 0.451)",
      yellowA7: "hsla(47, 99.8%, 44.6%, 0.577)",
      yellowA8: "hsla(48, 100%, 46.0%, 0.980)",
      yellowA9: "hsla(53, 100%, 48.0%, 0.961)",
      yellowA10: "hsla(50, 100%, 48.4%, 0.980)",
      yellowA11: "hsla(42, 100%, 28.6%, 0.980)",
      yellowA12: "hsla(41, 98.9%, 8.0%, 0.942)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/blackA.js
var require_blackA = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/blackA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var blackA_exports = {};
    __export2(blackA_exports, {
      blackA: () => blackA2
    });
    module2.exports = __toCommonJS2(blackA_exports);
    var blackA2 = {
      blackA1: "hsla(0, 0%, 0%, 0.012)",
      blackA2: "hsla(0, 0%, 0%, 0.027)",
      blackA3: "hsla(0, 0%, 0%, 0.047)",
      blackA4: "hsla(0, 0%, 0%, 0.071)",
      blackA5: "hsla(0, 0%, 0%, 0.090)",
      blackA6: "hsla(0, 0%, 0%, 0.114)",
      blackA7: "hsla(0, 0%, 0%, 0.141)",
      blackA8: "hsla(0, 0%, 0%, 0.220)",
      blackA9: "hsla(0, 0%, 0%, 0.439)",
      blackA10: "hsla(0, 0%, 0%, 0.478)",
      blackA11: "hsla(0, 0%, 0%, 0.565)",
      blackA12: "hsla(0, 0%, 0%, 0.910)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/whiteA.js
var require_whiteA = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/whiteA.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var whiteA_exports = {};
    __export2(whiteA_exports, {
      whiteA: () => whiteA2
    });
    module2.exports = __toCommonJS2(whiteA_exports);
    var whiteA2 = {
      whiteA1: "hsla(0, 0%, 100%, 0)",
      whiteA2: "hsla(0, 0%, 100%, 0.013)",
      whiteA3: "hsla(0, 0%, 100%, 0.034)",
      whiteA4: "hsla(0, 0%, 100%, 0.056)",
      whiteA5: "hsla(0, 0%, 100%, 0.086)",
      whiteA6: "hsla(0, 0%, 100%, 0.124)",
      whiteA7: "hsla(0, 0%, 100%, 0.176)",
      whiteA8: "hsla(0, 0%, 100%, 0.249)",
      whiteA9: "hsla(0, 0%, 100%, 0.386)",
      whiteA10: "hsla(0, 0%, 100%, 0.446)",
      whiteA11: "hsla(0, 0%, 100%, 0.592)",
      whiteA12: "hsla(0, 0%, 100%, 0.923)"
    };
  }
});

// node_modules/@tamagui/colors/dist/cjs/index.js
var require_cjs4 = __commonJS({
  "node_modules/@tamagui/colors/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      amber: () => import_amber2.amber,
      amberA: () => import_amberA2.amberA,
      amberDark: () => import_amber.amber,
      amberDarkA: () => import_amberA.amberA,
      blackA: () => import_blackA.blackA,
      blue: () => import_blue2.blue,
      blueA: () => import_blueA2.blueA,
      blueDark: () => import_blue.blue,
      blueDarkA: () => import_blueA.blueA,
      bronze: () => import_bronze2.bronze,
      bronzeA: () => import_bronzeA2.bronzeA,
      bronzeDark: () => import_bronze.bronze,
      bronzeDarkA: () => import_bronzeA.bronzeA,
      brown: () => import_brown2.brown,
      brownA: () => import_brownA2.brownA,
      brownDark: () => import_brown.brown,
      brownDarkA: () => import_brownA.brownA,
      crimson: () => import_crimson2.crimson,
      crimsonA: () => import_crimsonA2.crimsonA,
      crimsonDark: () => import_crimson.crimson,
      crimsonDarkA: () => import_crimsonA.crimsonA,
      cyan: () => import_cyan2.cyan,
      cyanA: () => import_cyanA2.cyanA,
      cyanDark: () => import_cyan.cyan,
      cyanDarkA: () => import_cyanA.cyanA,
      gold: () => import_gold2.gold,
      goldA: () => import_goldA2.goldA,
      goldDark: () => import_gold.gold,
      goldDarkA: () => import_goldA.goldA,
      grass: () => import_grass2.grass,
      grassA: () => import_grassA2.grassA,
      grassDark: () => import_grass.grass,
      grassDarkA: () => import_grassA.grassA,
      gray: () => import_gray2.gray,
      grayA: () => import_grayA2.grayA,
      grayDark: () => import_gray.gray,
      grayDarkA: () => import_grayA.grayA,
      green: () => import_green2.green,
      greenA: () => import_greenA2.greenA,
      greenDark: () => import_green.green,
      greenDarkA: () => import_greenA.greenA,
      indigo: () => import_indigo2.indigo,
      indigoA: () => import_indigoA2.indigoA,
      indigoDark: () => import_indigo.indigo,
      indigoDarkA: () => import_indigoA.indigoA,
      lime: () => import_lime2.lime,
      limeA: () => import_limeA2.limeA,
      limeDark: () => import_lime.lime,
      limeDarkA: () => import_limeA.limeA,
      mauve: () => import_mauve2.mauve,
      mauveA: () => import_mauveA2.mauveA,
      mauveDark: () => import_mauve.mauve,
      mauveDarkA: () => import_mauveA.mauveA,
      mint: () => import_mint2.mint,
      mintA: () => import_mintA2.mintA,
      mintDark: () => import_mint.mint,
      mintDarkA: () => import_mintA.mintA,
      olive: () => import_olive2.olive,
      oliveA: () => import_oliveA2.oliveA,
      oliveDark: () => import_olive.olive,
      oliveDarkA: () => import_oliveA.oliveA,
      orange: () => import_orange2.orange,
      orangeA: () => import_orangeA2.orangeA,
      orangeDark: () => import_orange.orange,
      orangeDarkA: () => import_orangeA.orangeA,
      pink: () => import_pink2.pink,
      pinkA: () => import_pinkA2.pinkA,
      pinkDark: () => import_pink.pink,
      pinkDarkA: () => import_pinkA.pinkA,
      plum: () => import_plum2.plum,
      plumA: () => import_plumA2.plumA,
      plumDark: () => import_plum.plum,
      plumDarkA: () => import_plumA.plumA,
      purple: () => import_purple2.purple,
      purpleA: () => import_purpleA2.purpleA,
      purpleDark: () => import_purple.purple,
      purpleDarkA: () => import_purpleA.purpleA,
      red: () => import_red2.red,
      redA: () => import_redA2.redA,
      redDark: () => import_red.red,
      redDarkA: () => import_redA.redA,
      sage: () => import_sage2.sage,
      sageA: () => import_sageA2.sageA,
      sageDark: () => import_sage.sage,
      sageDarkA: () => import_sageA.sageA,
      sand: () => import_sand2.sand,
      sandA: () => import_sandA2.sandA,
      sandDark: () => import_sand.sand,
      sandDarkA: () => import_sandA.sandA,
      sky: () => import_sky2.sky,
      skyA: () => import_skyA2.skyA,
      skyDark: () => import_sky.sky,
      skyDarkA: () => import_skyA.skyA,
      slate: () => import_slate2.slate,
      slateA: () => import_slateA2.slateA,
      slateDark: () => import_slate.slate,
      slateDarkA: () => import_slateA.slateA,
      teal: () => import_teal2.teal,
      tealA: () => import_tealA2.tealA,
      tealDark: () => import_teal.teal,
      tealDarkA: () => import_tealA.tealA,
      tomato: () => import_tomato2.tomato,
      tomatoA: () => import_tomatoA2.tomatoA,
      tomatoDark: () => import_tomato.tomato,
      tomatoDarkA: () => import_tomatoA.tomatoA,
      violet: () => import_violet2.violet,
      violetA: () => import_violetA2.violetA,
      violetDark: () => import_violet.violet,
      violetDarkA: () => import_violetA.violetA,
      whiteA: () => import_whiteA.whiteA,
      yellow: () => import_yellow2.yellow,
      yellowA: () => import_yellowA2.yellowA,
      yellowDark: () => import_yellow.yellow,
      yellowDarkA: () => import_yellowA.yellowA
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_amber = require_amber();
    var import_blue = require_blue();
    var import_bronze = require_bronze();
    var import_brown = require_brown();
    var import_crimson = require_crimson();
    var import_cyan = require_cyan();
    var import_gold = require_gold();
    var import_grass = require_grass();
    var import_gray = require_gray();
    var import_green = require_green();
    var import_indigo = require_indigo();
    var import_lime = require_lime();
    var import_mint = require_mint();
    var import_olive = require_olive();
    var import_orange = require_orange();
    var import_pink = require_pink();
    var import_plum = require_plum();
    var import_purple = require_purple();
    var import_mauve = require_mauve();
    var import_red = require_red();
    var import_sage = require_sage();
    var import_sand = require_sand();
    var import_sky = require_sky();
    var import_slate = require_slate();
    var import_teal = require_teal();
    var import_tomato = require_tomato();
    var import_violet = require_violet();
    var import_yellow = require_yellow();
    var import_amberA = require_amberA();
    var import_blueA = require_blueA();
    var import_bronzeA = require_bronzeA();
    var import_brownA = require_brownA();
    var import_crimsonA = require_crimsonA();
    var import_cyanA = require_cyanA();
    var import_goldA = require_goldA();
    var import_grassA = require_grassA();
    var import_grayA = require_grayA();
    var import_greenA = require_greenA();
    var import_indigoA = require_indigoA();
    var import_limeA = require_limeA();
    var import_mintA = require_mintA();
    var import_oliveA = require_oliveA();
    var import_orangeA = require_orangeA();
    var import_pinkA = require_pinkA();
    var import_plumA = require_plumA();
    var import_purpleA = require_purpleA();
    var import_mauveA = require_mauveA();
    var import_redA = require_redA();
    var import_sageA = require_sageA();
    var import_sandA = require_sandA();
    var import_skyA = require_skyA();
    var import_slateA = require_slateA();
    var import_tealA = require_tealA();
    var import_tomatoA = require_tomatoA();
    var import_violetA = require_violetA();
    var import_yellowA = require_yellowA();
    var import_amber2 = require_amber2();
    var import_blue2 = require_blue2();
    var import_bronze2 = require_bronze2();
    var import_brown2 = require_brown2();
    var import_crimson2 = require_crimson2();
    var import_cyan2 = require_cyan2();
    var import_gold2 = require_gold2();
    var import_grass2 = require_grass2();
    var import_gray2 = require_gray2();
    var import_green2 = require_green2();
    var import_indigo2 = require_indigo2();
    var import_lime2 = require_lime2();
    var import_mint2 = require_mint2();
    var import_olive2 = require_olive2();
    var import_orange2 = require_orange2();
    var import_pink2 = require_pink2();
    var import_plum2 = require_plum2();
    var import_purple2 = require_purple2();
    var import_mauve2 = require_mauve2();
    var import_red2 = require_red2();
    var import_sage2 = require_sage2();
    var import_sand2 = require_sand2();
    var import_sky2 = require_sky2();
    var import_slate2 = require_slate2();
    var import_teal2 = require_teal2();
    var import_tomato2 = require_tomato2();
    var import_violet2 = require_violet2();
    var import_yellow2 = require_yellow2();
    var import_amberA2 = require_amberA2();
    var import_blueA2 = require_blueA2();
    var import_bronzeA2 = require_bronzeA2();
    var import_brownA2 = require_brownA2();
    var import_crimsonA2 = require_crimsonA2();
    var import_cyanA2 = require_cyanA2();
    var import_goldA2 = require_goldA2();
    var import_grassA2 = require_grassA2();
    var import_grayA2 = require_grayA2();
    var import_greenA2 = require_greenA2();
    var import_indigoA2 = require_indigoA2();
    var import_limeA2 = require_limeA2();
    var import_mintA2 = require_mintA2();
    var import_oliveA2 = require_oliveA2();
    var import_orangeA2 = require_orangeA2();
    var import_pinkA2 = require_pinkA2();
    var import_plumA2 = require_plumA2();
    var import_purpleA2 = require_purpleA2();
    var import_mauveA2 = require_mauveA2();
    var import_redA2 = require_redA2();
    var import_sageA2 = require_sageA2();
    var import_sandA2 = require_sandA2();
    var import_skyA2 = require_skyA2();
    var import_slateA2 = require_slateA2();
    var import_tealA2 = require_tealA2();
    var import_tomatoA2 = require_tomatoA2();
    var import_violetA2 = require_violetA2();
    var import_yellowA2 = require_yellowA2();
    var import_blackA = require_blackA();
    var import_whiteA = require_whiteA();
  }
});

// node_modules/@tamagui/animations-react-native/dist/cjs/polyfill.js
var require_polyfill = __commonJS({
  "node_modules/@tamagui/animations-react-native/dist/cjs/polyfill.js"() {
    "use strict";
    if (typeof requestAnimationFrame === "undefined") {
      globalThis["requestAnimationFrame"] = setImmediate;
    }
  }
});

// node_modules/@tamagui/animate-presence/dist/cjs/LayoutGroupContext.js
var require_LayoutGroupContext = __commonJS({
  "node_modules/@tamagui/animate-presence/dist/cjs/LayoutGroupContext.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var LayoutGroupContext_exports = {};
    __export2(LayoutGroupContext_exports, {
      LayoutGroupContext: () => LayoutGroupContext
    });
    module2.exports = __toCommonJS2(LayoutGroupContext_exports);
    var import_react = require("react");
    var LayoutGroupContext = (0, import_react.createContext)({});
  }
});

// node_modules/@tamagui/animate-presence/dist/cjs/PresenceContext.js
var require_PresenceContext = __commonJS({
  "node_modules/@tamagui/animate-presence/dist/cjs/PresenceContext.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var PresenceContext_exports = {};
    __export2(PresenceContext_exports, {
      PresenceContext: () => PresenceContext2
    });
    module2.exports = __toCommonJS2(PresenceContext_exports);
    var import_react = require("react");
    var PresenceContext2 = (0, import_react.createContext)(null);
  }
});

// node_modules/@tamagui/animate-presence/dist/cjs/PresenceChild.js
var require_PresenceChild = __commonJS({
  "node_modules/@tamagui/animate-presence/dist/cjs/PresenceChild.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var PresenceChild_exports = {};
    __export2(PresenceChild_exports, {
      PresenceChild: () => PresenceChild
    });
    module2.exports = __toCommonJS2(PresenceChild_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core6 = require("@tamagui/core-node");
    var React = __toESM2(require("react"));
    var import_PresenceContext = require_PresenceContext();
    var PresenceChild = /* @__PURE__ */ __name(({
      children,
      initial,
      isPresent,
      onExitComplete,
      exitVariant,
      enterVariant,
      presenceAffectsLayout
    }) => {
      const presenceChildren = (0, import_core6.useConstant)(newChildrenMap);
      const id = (0, import_core6.useId)() || "";
      const context = React.useMemo(
        () => {
          return {
            id,
            initial,
            isPresent,
            exitVariant,
            enterVariant,
            onExitComplete: (id2) => {
              presenceChildren.set(id2, true);
              for (const isComplete of presenceChildren.values()) {
                if (!isComplete) {
                  return;
                }
              }
              onExitComplete == null ? void 0 : onExitComplete();
            },
            register: (id2) => {
              presenceChildren.set(id2, false);
              return () => presenceChildren.delete(id2);
            }
          };
        },
        presenceAffectsLayout ? void 0 : [isPresent, exitVariant, enterVariant]
      );
      React.useMemo(() => {
        presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
      }, [isPresent]);
      React.useEffect(() => {
        !isPresent && !presenceChildren.size && (onExitComplete == null ? void 0 : onExitComplete());
      }, [isPresent]);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_PresenceContext.PresenceContext.Provider, {
        value: context,
        children
      });
    }, "PresenceChild");
    function newChildrenMap() {
      return /* @__PURE__ */ new Map();
    }
    __name(newChildrenMap, "newChildrenMap");
  }
});

// node_modules/@tamagui/animate-presence/dist/cjs/AnimatePresence.js
var require_AnimatePresence = __commonJS({
  "node_modules/@tamagui/animate-presence/dist/cjs/AnimatePresence.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var AnimatePresence_exports = {};
    __export2(AnimatePresence_exports, {
      AnimatePresence: () => AnimatePresence
    });
    module2.exports = __toCommonJS2(AnimatePresence_exports);
    var import_jsx_runtime = require("react/jsx-runtime");
    var import_core6 = require("@tamagui/core-node");
    var import_react = __toESM2(require("react"));
    var import_LayoutGroupContext = require_LayoutGroupContext();
    var import_PresenceChild = require_PresenceChild();
    import_react.default["keep"];
    var getChildKey = /* @__PURE__ */ __name((child) => child.key || "", "getChildKey");
    var isDev = process.env.NODE_ENV !== "production";
    function updateChildLookup(children, allChildren) {
      const seenChildren = isDev ? /* @__PURE__ */ new Set() : null;
      children.forEach((child) => {
        const key = getChildKey(child);
        if (isDev && seenChildren && seenChildren.has(key)) {
          console.warn(`Children of AnimatePresence require unique keys. "${key}" is a duplicate.`);
          seenChildren.add(key);
        }
        allChildren.set(key, child);
      });
    }
    __name(updateChildLookup, "updateChildLookup");
    function onlyElements(children) {
      const filtered = [];
      import_react.Children.forEach(children, (child, index) => {
        if ((0, import_react.isValidElement)(child)) {
          if (!child.key) {
            if (process.env.NODE_ENV === "development") {
              console.warn(`No key given to AnimatePresence child, assigning index as key`);
            }
            filtered.push(
              import_react.default.cloneElement(child, {
                key: index
              })
            );
          } else {
            filtered.push(child);
          }
        }
      });
      return filtered;
    }
    __name(onlyElements, "onlyElements");
    var AnimatePresence = /* @__PURE__ */ __name(({
      children,
      enterVariant,
      exitVariant,
      initial = true,
      onExitComplete,
      exitBeforeEnter,
      presenceAffectsLayout = true
    }) => {
      let forceRender = (0, import_core6.useForceUpdate)();
      const forceRenderLayoutGroup = (0, import_react.useContext)(import_LayoutGroupContext.LayoutGroupContext).forceRender;
      if (forceRenderLayoutGroup)
        forceRender = forceRenderLayoutGroup;
      const isMounted = (0, import_core6.useIsMounted)();
      const filteredChildren = onlyElements(children);
      let childrenToRender = filteredChildren;
      const exiting = /* @__PURE__ */ new Set();
      const presentChildren = (0, import_react.useRef)(childrenToRender);
      const allChildren = (0, import_react.useRef)(/* @__PURE__ */ new Map()).current;
      const isInitialRender = (0, import_react.useRef)(true);
      (0, import_core6.useIsomorphicLayoutEffect)(() => {
        isInitialRender.current = false;
        updateChildLookup(filteredChildren, allChildren);
        presentChildren.current = childrenToRender;
      });
      (0, import_core6.useUnmountEffect)(() => {
        isInitialRender.current = true;
        allChildren.clear();
        exiting.clear();
      });
      if (isInitialRender.current) {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
          children: childrenToRender.map((child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_PresenceChild.PresenceChild, {
            isPresent: true,
            exitVariant,
            enterVariant,
            initial: initial ? void 0 : false,
            presenceAffectsLayout,
            children: child
          }, getChildKey(child)))
        });
      }
      childrenToRender = [...childrenToRender];
      const presentKeys = presentChildren.current.map(getChildKey);
      const targetKeys = filteredChildren.map(getChildKey);
      const numPresent = presentKeys.length;
      for (let i = 0; i < numPresent; i++) {
        const key = presentKeys[i];
        if (targetKeys.indexOf(key) === -1) {
          exiting.add(key);
        }
      }
      if (exitBeforeEnter && exiting.size) {
        childrenToRender = [];
      }
      exiting.forEach((key) => {
        if (targetKeys.indexOf(key) !== -1)
          return;
        const child = allChildren.get(key);
        if (!child)
          return;
        const insertionIndex = presentKeys.indexOf(key);
        childrenToRender.splice(
          insertionIndex,
          0,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_PresenceChild.PresenceChild, {
            isPresent: false,
            onExitComplete: () => {
              allChildren.delete(key);
              exiting.delete(key);
              const removeIndex = presentChildren.current.findIndex(
                (presentChild) => presentChild.key === key
              );
              presentChildren.current.splice(removeIndex, 1);
              if (!exiting.size) {
                presentChildren.current = filteredChildren;
                if (isMounted.current === false)
                  return;
                forceRender();
                onExitComplete == null ? void 0 : onExitComplete();
              }
            },
            exitVariant,
            enterVariant,
            presenceAffectsLayout,
            children: child
          }, getChildKey(child))
        );
      });
      childrenToRender = childrenToRender.map((child) => {
        const key = child.key;
        return exiting.has(key) ? child : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_PresenceChild.PresenceChild, {
          isPresent: true,
          exitVariant,
          enterVariant,
          presenceAffectsLayout,
          children: child
        }, getChildKey(child));
      });
      if (process.env.NODE_ENV !== "production" && exitBeforeEnter && childrenToRender.length > 1) {
        console.warn(
          `You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour.`
        );
      }
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
        children: exiting.size ? childrenToRender : childrenToRender.map((child) => (0, import_react.cloneElement)(child))
      });
    }, "AnimatePresence");
    AnimatePresence.displayName = "AnimatePresence";
  }
});

// node_modules/@tamagui/animate-presence/dist/cjs/usePresence.js
var require_usePresence = __commonJS({
  "node_modules/@tamagui/animate-presence/dist/cjs/usePresence.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var usePresence_exports = {};
    __export2(usePresence_exports, {
      isPresent: () => isPresent,
      useIsPresent: () => useIsPresent,
      usePresence: () => usePresence
    });
    module2.exports = __toCommonJS2(usePresence_exports);
    var import_core6 = require("@tamagui/core-node");
    var import_react = require("react");
    var import_PresenceContext = require_PresenceContext();
    function usePresence() {
      const context = (0, import_react.useContext)(import_PresenceContext.PresenceContext);
      if (context === null) {
        return [true, null];
      }
      const { isPresent: isPresent2, onExitComplete, register } = context;
      const id = (0, import_core6.useId)() || "";
      (0, import_react.useEffect)(() => register(id), [id, register]);
      const safeToRemove = /* @__PURE__ */ __name(() => onExitComplete == null ? void 0 : onExitComplete(id), "safeToRemove");
      return !isPresent2 && onExitComplete ? [false, safeToRemove] : [true];
    }
    __name(usePresence, "usePresence");
    function useIsPresent() {
      return isPresent((0, import_react.useContext)(import_PresenceContext.PresenceContext));
    }
    __name(useIsPresent, "useIsPresent");
    function isPresent(context) {
      return context === null ? true : context.isPresent;
    }
    __name(isPresent, "isPresent");
  }
});

// node_modules/@tamagui/animate-presence/dist/cjs/index.js
var require_cjs5 = __commonJS({
  "node_modules/@tamagui/animate-presence/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      PresenceContext: () => import_PresenceContext.PresenceContext
    });
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_AnimatePresence(), module2.exports);
    __reExport2(src_exports, require_usePresence(), module2.exports);
    var import_PresenceContext = require_PresenceContext();
  }
});

// node_modules/@tamagui/animations-react-native/dist/cjs/createAnimations.js
var require_createAnimations = __commonJS({
  "node_modules/@tamagui/animations-react-native/dist/cjs/createAnimations.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var createAnimations_exports = {};
    __export2(createAnimations_exports, {
      AnimatedText: () => AnimatedText,
      AnimatedView: () => AnimatedView,
      createAnimations: () => createAnimations2,
      useAnimatedNumber: () => useAnimatedNumber,
      useAnimatedNumberReaction: () => useAnimatedNumberReaction,
      useAnimatedNumberStyle: () => useAnimatedNumberStyle
    });
    module2.exports = __toCommonJS2(createAnimations_exports);
    var import_animate_presence = require_cjs5();
    var import_core6 = require("@tamagui/core-node");
    var import_react = require("react");
    var import_react_native = require("react-native-web-lite");
    var animatedStyleKey = {
      transform: true,
      opacity: true
    };
    var AnimatedView = import_react_native.Animated.View;
    var AnimatedText = import_react_native.Animated.Text;
    function useAnimatedNumber(initial) {
      const state = (0, import_react.useRef)(
        null
      );
      if (!state.current) {
        state.current = {
          composite: null,
          val: new import_react_native.Animated.Value(initial),
          strategy: { type: "spring" }
        };
      }
      return {
        getInstance() {
          return state.current.val;
        },
        getValue() {
          return state.current.val["_value"];
        },
        stop() {
          var _a;
          (_a = state.current.composite) == null ? void 0 : _a.stop();
          state.current.composite = null;
        },
        setValue(next, { type, ...config2 } = { type: "spring" }) {
          var _a, _b;
          const val = state.current.val;
          if (type === "direct") {
            val.setValue(next);
          } else if (type === "spring") {
            (_a = state.current.composite) == null ? void 0 : _a.stop();
            const composite = import_react_native.Animated.spring(val, {
              ...config2,
              toValue: next,
              useNativeDriver: !import_core6.isWeb
            });
            composite.start();
            state.current.composite = composite;
          } else {
            (_b = state.current.composite) == null ? void 0 : _b.stop();
            const composite = import_react_native.Animated.timing(val, {
              ...config2,
              toValue: next,
              useNativeDriver: !import_core6.isWeb
            });
            composite.start();
            state.current.composite = composite;
          }
        }
      };
    }
    __name(useAnimatedNumber, "useAnimatedNumber");
    function useAnimatedNumberReaction(value, cb) {
      const onChange = (0, import_core6.useEvent)((current) => {
        cb(current.value);
      });
      (0, import_react.useEffect)(() => {
        const id = value.getInstance().addListener(onChange);
        return () => {
          value.getInstance().removeListener(id);
        };
      }, [value, onChange]);
    }
    __name(useAnimatedNumberReaction, "useAnimatedNumberReaction");
    function useAnimatedNumberStyle(value, getStyle) {
      return getStyle(value.getInstance());
    }
    __name(useAnimatedNumberStyle, "useAnimatedNumberStyle");
    function createAnimations2(animations2) {
      AnimatedView["displayName"] = "AnimatedView";
      AnimatedText["displayName"] = "AnimatedText";
      return {
        avoidClasses: true,
        animations: animations2,
        View: AnimatedView,
        Text: AnimatedText,
        useAnimatedNumber,
        useAnimatedNumberReaction,
        useAnimatedNumberStyle,
        useAnimations: (props, helpers) => {
          var _a;
          const { onDidAnimate, delay, getStyle, state } = helpers;
          const [isPresent, sendExitComplete] = (0, import_animate_presence.usePresence)();
          const presence = (0, import_react.useContext)(import_animate_presence.PresenceContext);
          const isExiting = isPresent === false;
          const isEntering = !state.mounted;
          const all = getStyle({
            isExiting,
            isEntering,
            exitVariant: presence == null ? void 0 : presence.exitVariant,
            enterVariant: presence == null ? void 0 : presence.enterVariant
          });
          const animateStyles = (0, import_react.useRef)({});
          const animatedTranforms = (0, import_react.useRef)([]);
          const interpolations = (0, import_react.useRef)(/* @__PURE__ */ new WeakMap());
          const runners = [];
          const completions = [];
          function update(key, animated, valIn) {
            const [val, type] = getValue(valIn);
            const value = animated || new import_react_native.Animated.Value(val);
            if (type) {
              interpolations.current.set(value, getInterpolated(value, type, val));
            }
            if (animated) {
              const animationConfig = getAnimationConfig(key, animations2, props.animation);
              let resolve;
              const promise = new Promise((res) => {
                resolve = res;
              });
              completions.push(promise);
              runners.push(() => {
                if (animated["_value"] === val) {
                  resolve();
                  return;
                }
                animated.stopAnimation();
                import_react_native.Animated.spring(animated, {
                  toValue: val,
                  useNativeDriver: !import_core6.isWeb,
                  ...animationConfig
                }).start(({ finished }) => {
                  if (finished) {
                    resolve();
                  }
                });
              });
            }
            return value;
          }
          __name(update, "update");
          function getValue(input) {
            if (typeof input !== "string") {
              return [input];
            }
            const neg = input[0] === "-";
            if (neg)
              input = input.slice(1);
            const [_, number, after] = input.match(/([-0-9]+)(deg|%)/) ?? [];
            return [+number * (neg ? -1 : 1), after];
          }
          __name(getValue, "getValue");
          const nonAnimatedStyle = {};
          for (const key in all) {
            const val = all[key];
            if (animatedStyleKey[key]) {
              if (key === "transform") {
                if (val) {
                  for (const [index, transform] of val.entries()) {
                    if (!transform)
                      continue;
                    const tkey = Object.keys(transform)[0];
                    animatedTranforms.current[index] = {
                      [tkey]: update(tkey, (_a = animatedTranforms.current[index]) == null ? void 0 : _a[tkey], transform[tkey])
                    };
                  }
                }
              } else {
                animateStyles.current[key] = update(key, animateStyles.current[key], val);
              }
            } else {
              nonAnimatedStyle[key] = val;
            }
          }
          const animatedStyle = {
            ...Object.fromEntries(
              Object.entries({
                ...animateStyles.current
              }).map(([k, v]) => [k, interpolations.current.get(v) || v])
            ),
            transform: animatedTranforms.current.map((r) => {
              const key = Object.keys(r)[0];
              const val = interpolations.current.get(r[key]) || r[key];
              return { [key]: val };
            })
          };
          const args = [
            JSON.stringify(all),
            state.mounted,
            state.hover,
            state.press,
            state.pressIn,
            state.focus,
            delay,
            isPresent,
            onDidAnimate,
            presence == null ? void 0 : presence.exitVariant,
            presence == null ? void 0 : presence.enterVariant
          ];
          (0, import_core6.useIsomorphicLayoutEffect)(() => {
            for (const runner of runners) {
              runner();
            }
            Promise.all(completions).then(() => {
              onDidAnimate == null ? void 0 : onDidAnimate();
              if (isExiting) {
                sendExitComplete == null ? void 0 : sendExitComplete();
              }
            });
          }, args);
          return (0, import_react.useMemo)(() => {
            return {
              style: [nonAnimatedStyle, animatedStyle]
            };
          }, args);
        }
      };
    }
    __name(createAnimations2, "createAnimations");
    function getInterpolated(val, postfix, next) {
      const cur = val["_value"];
      const inputRange = [cur, next];
      const outputRange = [`${cur}deg`, `${next}deg`];
      if (next < cur) {
        inputRange.reverse();
        outputRange.reverse();
      }
      return val.interpolate({
        inputRange,
        outputRange
      });
    }
    __name(getInterpolated, "getInterpolated");
    function getAnimationConfig(key, animations2, animation) {
      if (typeof animation === "string") {
        return animations2[animation];
      }
      let type = "";
      let extraConf;
      if (Array.isArray(animation)) {
        type = animation[0];
        const conf = animation[1] && animation[1][key];
        if (conf) {
          if (typeof conf === "string") {
            type = conf;
          } else {
            type = conf.type || type;
            extraConf = conf;
          }
        }
      } else {
        const val = animation == null ? void 0 : animation[key];
        type = val == null ? void 0 : val.type;
        extraConf = val;
      }
      const found = animations2[type];
      if (!found) {
        throw new Error(`No animation of type "${type}" for key "${key}"`);
      }
      return {
        ...found,
        ...extraConf
      };
    }
    __name(getAnimationConfig, "getAnimationConfig");
  }
});

// node_modules/@tamagui/animations-react-native/dist/cjs/index.js
var require_cjs6 = __commonJS({
  "node_modules/@tamagui/animations-react-native/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    var import_polyfill = require_polyfill();
    __reExport2(src_exports, require_createAnimations(), module2.exports);
  }
});

// tamagui.config.js
var tamagui_config_exports = {};
__export(tamagui_config_exports, {
  default: () => tamagui_config_default
});
module.exports = __toCommonJS(tamagui_config_exports);
var import_core5 = require("@tamagui/core-node");

// node_modules/@tamagui/config-base/dist/esm/tamagui.config.js
var import_font_inter = __toESM(require_cjs());
var import_font_silkscreen = __toESM(require_cjs2());
var import_shorthands = __toESM(require_cjs3());

// node_modules/@tamagui/theme-base/dist/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  color: () => color,
  colorNames: () => colorNames,
  colorSchemes: () => colorSchemes,
  darkColors: () => darkColors,
  lightColors: () => lightColors,
  radius: () => radius,
  size: () => size,
  space: () => space,
  themes: () => themes,
  tokens: () => tokens,
  zIndex: () => zIndex
});

// node_modules/@tamagui/theme-base/dist/esm/themes.js
var import_core3 = require("@tamagui/core-node");

// node_modules/@tamagui/theme-base/dist/esm/colorUtils.js
var import_core = require("@tamagui/core-node");
var hexToRGBA = /* @__PURE__ */ __name((hex, alpha = 1) => {
  if (!isValidHex(hex)) {
    throw new Error("Invalid HEX");
  }
  const chunkSize = Math.floor((hex.length - 1) / 3);
  const hexArr = getChunksFromString(hex.slice(1), chunkSize);
  const [r, g, b, a] = (hexArr == null ? void 0 : hexArr.map(convertHexUnitTo256)) ?? [];
  return `rgba(${r}, ${g}, ${b}, ${getAlphaFloat(a, alpha)})`;
}, "hexToRGBA");
var setColorAlpha = /* @__PURE__ */ __name((colorIn, alpha = 1) => {
  let color2 = `${(0, import_core.getVariableValue)(colorIn)}`;
  if (color2.startsWith("hsl(")) {
    return color2.replace("hsl", "hsla").replace(")", `, ${alpha})`);
  }
  if (color2.startsWith("#")) {
    return hexToRGBA(color2, alpha);
  }
  if (color2.startsWith("rgb(")) {
    return color2.replace("rgb", "rgba").replace(")", `, ${alpha})`);
  }
  return color2;
}, "setColorAlpha");
var isValidHex = /* @__PURE__ */ __name((hex) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hex), "isValidHex");
var getChunksFromString = /* @__PURE__ */ __name((st, chunkSize = 0) => st.match(new RegExp(`.{${chunkSize}}`, "g")), "getChunksFromString");
var convertHexUnitTo256 = /* @__PURE__ */ __name((hexStr) => parseInt(hexStr.repeat(2 / hexStr.length), 16), "convertHexUnitTo256");
var getAlphaFloat = /* @__PURE__ */ __name((a, alpha = 1) => {
  if (a !== void 0) {
    return a / 255;
  }
  if (typeof alpha != "number" || alpha < 0 || alpha > 1) {
    return 1;
  }
  return alpha;
}, "getAlphaFloat");

// node_modules/@tamagui/theme-base/dist/esm/tokens.js
var import_colors = __toESM(require_cjs4());
var import_core2 = require("@tamagui/core-node");
var size = {
  0: 0,
  0.25: 2,
  0.5: 4,
  0.75: 8,
  1: 20,
  1.5: 24,
  2: 28,
  2.5: 32,
  3: 36,
  3.5: 40,
  4: 44,
  true: 44,
  4.5: 48,
  5: 52,
  5.5: 59,
  6: 64,
  6.5: 69,
  7: 74,
  7.6: 79,
  8: 84,
  8.5: 89,
  9: 94,
  9.5: 99,
  10: 104,
  11: 124,
  12: 144,
  13: 164,
  14: 184,
  15: 204,
  16: 224,
  17: 224,
  18: 244,
  19: 264,
  20: 284
};
var spaces = Object.entries(size).map(([k, v]) => [
  k,
  Math.max(0, v <= 16 ? Math.round(v * 0.333) : Math.floor(v * 0.7 - 12))
]);
var spacesNegative = spaces.map(([k, v]) => [`-${k}`, -v]);
var space = {
  ...Object.fromEntries(spaces),
  ...Object.fromEntries(spacesNegative)
};
var zIndex = {
  0: 0,
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  5: 500
};
var colorTokens = {
  light: {
    blue: import_colors.blue,
    gray: import_colors.gray,
    green: import_colors.green,
    orange: import_colors.orange,
    pink: import_colors.pink,
    purple: import_colors.purple,
    red: import_colors.red,
    yellow: import_colors.yellow
  },
  dark: {
    blue: import_colors.blueDark,
    gray: import_colors.grayDark,
    green: import_colors.greenDark,
    orange: import_colors.orangeDark,
    pink: import_colors.pinkDark,
    purple: import_colors.purpleDark,
    red: import_colors.redDark,
    yellow: import_colors.yellowDark
  }
};
var darkColors = {
  ...colorTokens.dark.blue,
  ...colorTokens.dark.gray,
  ...colorTokens.dark.green,
  ...colorTokens.dark.orange,
  ...colorTokens.dark.pink,
  ...colorTokens.dark.purple,
  ...colorTokens.dark.red,
  ...colorTokens.dark.yellow
};
var lightColors = {
  ...colorTokens.light.blue,
  ...colorTokens.light.gray,
  ...colorTokens.light.green,
  ...colorTokens.light.orange,
  ...colorTokens.light.pink,
  ...colorTokens.light.purple,
  ...colorTokens.light.red,
  ...colorTokens.light.yellow
};
var color = {
  ...postfixObjKeys(lightColors, "Light"),
  ...postfixObjKeys(darkColors, "Dark")
};
function postfixObjKeys(obj, postfix) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [`${k}${postfix}`, v]));
}
__name(postfixObjKeys, "postfixObjKeys");
var radius = {
  0: 0,
  1: 3,
  2: 5,
  3: 7,
  4: 9,
  5: 10,
  6: 16,
  7: 19,
  8: 22,
  9: 26,
  10: 34,
  11: 42,
  12: 50
};
var tokens = (0, import_core2.createTokens)({
  color,
  radius,
  zIndex,
  space,
  size
});

// node_modules/@tamagui/theme-base/dist/esm/themes.js
var alternates = [1, 2, 3];
var alts = [1, 2];
function createThemesFrom(name, getTheme, props) {
  const { shift = 0 } = props;
  const theme = getTheme(0 + shift, props);
  let themeEntries = [[name, theme]];
  const altThemes = alternates.map((alt) => [
    `${name}_alt${alt}`,
    getTheme(alt * 1 + shift, props)
  ]);
  const altThemes2 = alternates.map((alt) => [
    `${name}_alt${alt}`,
    getTheme(alt + shift, props)
  ]);
  const altButtonThemes = alternates.map((_, i) => {
    const [bName, bTheme] = [altThemes2[i][0], (altThemes2[i + 1] || altThemes2[i])[1]];
    return [`${bName}_Button`, bTheme];
  });
  const darkerTheme = getTheme(Math.max(0, shift + (props.isLight ? 1 : -1)), props);
  const activeTheme = props.activeTheme || {
    ...theme,
    borderColor: props.backgrounds[7],
    background: props.backgrounds[6],
    backgroundHover: props.backgrounds[6],
    backgroundPress: props.backgrounds[6]
  };
  const inverted = altThemes.map(([_name, theme2]) => {
    return {
      ...theme2,
      background: theme2.color,
      backgroundHover: theme2.colorHover,
      backgroundFocus: theme2.colorFocus,
      backgroundPress: theme2.colorPress,
      color: theme2.background,
      colorHover: theme2.backgroundHover,
      colorFocus: theme2.backgroundFocus,
      colorPress: theme2.backgroundPress
    };
  });
  themeEntries = [
    ...themeEntries,
    ...altThemes.slice(0, alts.length),
    ...altButtonThemes.slice(0, alts.length),
    [`${name}_Button`, altThemes2[1][1]],
    [`${name}_DrawerFrame`, altThemes2[1][1]],
    [`${name}_SliderTrack`, altThemes[0][1]],
    [`${name}_SliderTrackActive`, altThemes[2][1]],
    [`${name}_SliderThumb`, inverted[2]],
    [`${name}_Progress`, altThemes[2][1]],
    [`${name}_ProgressIndicator`, inverted[2]],
    [`${name}_Switch`, altThemes[0][1]],
    [`${name}_SwitchThumb`, inverted[2]],
    [`${name}_TooltipArrow`, altThemes[1][1]],
    [`${name}_TooltipContent`, altThemes[1][1]],
    [`${name}_darker`, darkerTheme],
    [`${name}_active`, activeTheme]
  ];
  const themes2 = Object.fromEntries(themeEntries);
  return themes2;
}
__name(createThemesFrom, "createThemesFrom");
var themeCreator = /* @__PURE__ */ __name((str = 1, {
  backgrounds,
  isLight = true,
  isBase = false,
  colors = [...backgrounds].reverse(),
  borderColors = isLight ? colors : backgrounds,
  backgroundStrong,
  offsets: offsetsProp
}) => {
  const offsets = {
    borderColor: (offsetsProp == null ? void 0 : offsetsProp.borderColor) ?? (offsetsProp == null ? void 0 : offsetsProp.background) ?? [0, 0, 0, 0],
    background: (offsetsProp == null ? void 0 : offsetsProp.background) ?? [0, 0, 0, 0],
    color: (offsetsProp == null ? void 0 : offsetsProp.color) ?? [0, 0, 0, 0]
  };
  const darkColors2 = isLight ? colors : backgrounds;
  const lighterDir = isLight ? -1 : 1;
  const darkerDir = -lighterDir;
  const strongerDir = isLight ? darkerDir : lighterDir;
  const softerDir = -strongerDir;
  const get = /* @__PURE__ */ __name((arr, index, name = "background") => {
    return arr[Math.max(0, Math.min(index + (offsets[name][str] || 0), arr.length - 1))];
  }, "get");
  const colorTranslucent = setColorAlpha((0, import_core3.getVariableValue)(get(colors, 0 + str, "color")), 0.5);
  const theme = {
    background: get(backgrounds, str),
    backgroundStrong: backgroundStrong || get(backgrounds, str + strongerDir * 2),
    backgroundSoft: get(backgrounds, str + softerDir * 2),
    backgroundHover: get(backgrounds, str + lighterDir),
    backgroundPress: get(backgrounds, str + darkerDir),
    backgroundFocus: get(backgrounds, str + darkerDir * 2),
    backgroundTransparent: "hsla(0, 0%, 0%, 0.012)",
    color: get(colors, 0 + str, "color"),
    colorHover: get(colors, 1 + str, "color"),
    colorPress: get(colors, 2 + str, "color"),
    colorFocus: get(colors, 3 + str, "color"),
    colorTranslucent,
    colorMid: (isLight ? colors : backgrounds)[Math.floor(colors.length / 2)],
    shadowColor: isLight ? "hsla(0, 0%, 0%, 0.03)" : "hsla(0, 0%, 0%, 0.2)",
    shadowColorHover: darkColors2[!isLight ? 1 : 8],
    shadowColorPress: darkColors2[!isLight ? 1 : 8],
    shadowColorFocus: darkColors2[!isLight ? 1 : 8],
    borderColor: null,
    borderColorHover: null,
    borderColorPress: null,
    borderColorFocus: null,
    color1: backgrounds[0],
    color2: backgrounds[1],
    color3: backgrounds[2],
    color4: backgrounds[3],
    color5: backgrounds[4],
    color6: backgrounds[5],
    color7: backgrounds[6],
    color8: backgrounds[7],
    color9: backgrounds[8],
    color10: backgrounds[9],
    color11: backgrounds[10],
    color12: backgrounds[11]
  };
  if (isBase) {
    Object.assign(theme, {
      borderColor: isLight ? get(colors, 8 - str, "borderColor") : get(backgrounds, 2 + str, "borderColor"),
      borderColorHover: isLight ? get(colors, 6 - str, "borderColor") : get(backgrounds, 3 + str, "borderColor"),
      borderColorPress: isLight ? get(colors, 5 - str, "borderColor") : get(backgrounds, 1 + str, "borderColor"),
      borderColorFocus: isLight ? get(colors, 4 - str, "borderColor") : get(backgrounds, 3 + str, "borderColor")
    });
  } else {
    Object.assign(theme, {
      borderColor: get(borderColors, 1 + strongerDir, "borderColor"),
      borderColorHover: get(borderColors, 2 + strongerDir, "borderColor"),
      borderColorPress: get(borderColors, 3 + strongerDir, "borderColor"),
      borderColorFocus: get(borderColors, 4 + strongerDir, "borderColor")
    });
  }
  return theme;
}, "themeCreator");
var themeColors = {
  light: [
    "#fff",
    "#f4f4f4",
    "hsl(0, 0%, 99.0%)",
    "hsl(0, 0%, 97.3%)",
    "hsl(0, 0%, 95.1%)",
    "hsl(0, 0%, 93.0%)",
    "hsl(0, 0%, 90.9%)",
    "hsl(0, 0%, 88.7%)",
    "hsl(0, 0%, 85.8%)",
    "hsl(0, 0%, 78.0%)",
    "hsl(0, 0%, 56.1%)",
    "hsl(0, 0%, 52.3%)",
    "hsl(0, 0%, 43.5%)",
    "hsl(0, 0%, 9.0%)"
  ],
  dark: [
    "#111111",
    "#151515",
    "#191919",
    "#232323",
    "#282828",
    "#323232",
    "#383838",
    "#424242",
    "#494949",
    "#545454",
    "#626262",
    "#777777"
  ]
};
var lightThemes = createThemesFrom("light", themeCreator, {
  backgrounds: themeColors.light,
  backgroundStrong: import_core3.isWeb ? "#fefefe" : "#f2f2f2",
  borderColors: themeColors.light.slice(2),
  isLight: true,
  offsets: {
    background: [2, 2, 2, 2, 2, 2]
  }
});
var darkThemes = createThemesFrom("dark", themeCreator, {
  backgrounds: themeColors.dark,
  colors: themeColors.light.slice(2),
  backgroundStrong: "#070707",
  isBase: true,
  isLight: false,
  shift: 1,
  offsets: {
    color: [0, 4, 5, 5, 5, 5]
  }
});
darkThemes.dark_darker.background = "#030303";
darkThemes.dark_darker.backgroundStrong = "#000";
var light = (0, import_core3.createTheme)({
  ...lightColors,
  ...lightThemes.light
});
var dark = (0, import_core3.createTheme)({
  ...darkColors,
  ...darkThemes.dark
});
var baseThemes = {
  ...lightThemes,
  light,
  light_active: lightThemes.light,
  light_Card: lightThemes.light,
  light_SliderTrack: lightThemes.light_alt1,
  light_SliderTrackActive: lightThemes.light_alt2,
  light_Switch: lightThemes.light_alt2,
  light_SwitchThumb: lightThemes.light,
  light_DrawerFrame: lightThemes.light_alt1,
  ...darkThemes,
  dark,
  dark_active: darkThemes.dark,
  dark_Card: darkThemes.dark,
  dark_DrawerFrame: darkThemes.dark_alt1,
  dark_SliderTrack: darkThemes.dark_darker,
  dark_SliderTrackActive: darkThemes.dark_alt2,
  dark_Switch: darkThemes.dark_alt2,
  dark_SwitchThumb: darkThemes.dark_darker,
  dark_Button: darkThemes.dark_alt1
};
var darkEntries = Object.entries(dark);
var lightEntries = Object.entries(light);
function findColors(prefix, dark2 = false) {
  return Object.fromEntries(
    (dark2 ? darkEntries : lightEntries).filter(([k]) => k.startsWith(prefix))
  );
}
__name(findColors, "findColors");
var colorSchemes = [
  { name: "blue", colors: findColors("blue"), darkColors: findColors("blue", true) },
  { name: "gray", colors: findColors("gray"), darkColors: findColors("gray", true) },
  { name: "green", colors: findColors("green"), darkColors: findColors("green", true) },
  { name: "orange", colors: findColors("orange"), darkColors: findColors("orange", true) },
  { name: "pink", colors: findColors("pink"), darkColors: findColors("pink", true) },
  { name: "purple", colors: findColors("purple"), darkColors: findColors("purple", true) },
  { name: "red", colors: findColors("red"), darkColors: findColors("red", true) },
  { name: "yellow", colors: findColors("yellow"), darkColors: findColors("yellow", true) }
];
var colorNames = [
  "blue",
  "green",
  "orange",
  "pink",
  "purple",
  "red",
  "yellow",
  "gray"
];
var colorThemeEntries = colorSchemes.flatMap(({ name, colors, darkColors: darkColors2 }) => {
  const [altLightThemes, altDarkThemes] = [
    { colors: darkColors2, backgrounds: colors },
    { colors, backgrounds: darkColors2 }
  ].map((props, i) => {
    const isLight = i === 0;
    const colorsBase = Object.values(props.colors).slice(2);
    const [backgrounds, colors2] = [
      Object.values(props.backgrounds),
      isLight ? colorsBase : [colorsBase[0], "#ccc", ...colorsBase.slice(1)]
    ];
    const scheme = isLight ? "light" : "dark";
    const shift = isLight ? 0 : 1;
    const themeWithAlts = createThemesFrom(name, themeCreator, {
      colors: colors2,
      backgrounds,
      borderColors: backgrounds,
      isLight,
      shift,
      isBase: false,
      offsets: {
        background: isLight ? [2, 2, 2, 2, 2, 2] : null,
        borderColor: isLight ? [2, 2, 2, 3, 2] : null,
        color: isLight ? [0, 0, -1, -2, -3, -3, -4] : [-1, -1, -1, -1, -1, -1]
      }
    });
    return Object.entries(themeWithAlts).map(([k, v]) => [`${scheme}_${k}`, v]);
  });
  return [...altLightThemes, ...altDarkThemes];
});
var colorThemes = Object.fromEntries(colorThemeEntries);
baseThemes.dark_active = {
  ...colorThemes.dark_blue_alt2,
  background: darkColors.blue10,
  backgroundHover: darkColors.blue11,
  backgroundPress: darkColors.blue9,
  backgroundFocus: darkColors.blue9,
  color: darkColors.blue12,
  colorHover: darkColors.blue12,
  colorPress: darkColors.blue12,
  colorFocus: darkColors.blue12
};
baseThemes.light_active = baseThemes.dark_active;
var allThemes = {
  ...baseThemes,
  ...colorThemes
};
var themes = allThemes;

// node_modules/@tamagui/theme-base/dist/esm/index.js
__reExport(esm_exports, __toESM(require_cjs4()));

// node_modules/@tamagui/config-base/dist/esm/animations.js
var import_animations_react_native = __toESM(require_cjs6());
var animations = (0, import_animations_react_native.createAnimations)({
  bouncy: {
    damping: 9,
    mass: 0.9,
    stiffness: 150
  },
  lazy: {
    damping: 18,
    stiffness: 50
  },
  slow: {
    damping: 15,
    stiffness: 40
  },
  quick: {
    damping: 20,
    mass: 1.2,
    stiffness: 250
  },
  tooltip: {
    damping: 10,
    mass: 0.9,
    stiffness: 100
  }
});

// node_modules/@tamagui/config-base/dist/esm/createGenericFont.js
var import_core4 = require("@tamagui/core-node");
var genericFontSizes = {
  1: 10,
  2: 11,
  3: 12,
  4: 14,
  5: 15,
  6: 16,
  7: 20,
  8: 22,
  9: 30,
  10: 42,
  11: 52,
  12: 62,
  13: 72,
  14: 92,
  15: 114,
  16: 124
};
function createGenericFont(family, font = {}, {
  sizeLineHeight = /* @__PURE__ */ __name((val) => val * 1.35, "sizeLineHeight")
} = {}) {
  const size2 = font.size || genericFontSizes;
  return (0, import_core4.createFont)({
    family,
    size: size2,
    lineHeight: Object.fromEntries(
      Object.entries(size2).map(([k, v]) => [k, sizeLineHeight(+v)])
    ),
    weight: { 0: "300" },
    letterSpacing: { 4: 0 },
    ...font
  });
}
__name(createGenericFont, "createGenericFont");

// node_modules/@tamagui/config-base/dist/esm/media.js
var media = {
  xl: { maxWidth: 1650 },
  lg: { maxWidth: 1280 },
  md: { maxWidth: 1020 },
  sm: { maxWidth: 800 },
  xs: { maxWidth: 660 },
  xxs: { maxWidth: 390 },
  gtXs: { minWidth: 660 + 1 },
  gtSm: { minWidth: 800 + 1 },
  gtMd: { minWidth: 1020 + 1 },
  gtLg: { minWidth: 1280 + 1 },
  gtXl: { minWidth: 1650 + 1 },
  tiny: { maxWidth: 500 },
  gtTiny: { minWidth: 500 + 1 },
  small: { maxWidth: 620 },
  gtSmall: { minWidth: 620 + 1 },
  medium: { maxWidth: 780 },
  gtMedium: { minWidth: 780 + 1 },
  large: { maxWidth: 900 },
  gtLarge: { minWidth: 900 + 1 }
};

// node_modules/@tamagui/config-base/dist/esm/tamagui.config.js
var silkscreenFont = (0, import_font_silkscreen.createSilkscreenFont)();
var headingFont = (0, import_font_inter.createInterFont)(
  {
    size: {
      5: 13,
      6: 15
    },
    transform: {
      6: "uppercase",
      7: "none"
    },
    weight: {
      6: "400",
      7: "700"
    },
    color: {
      6: "$colorFocus",
      7: "$color"
    },
    letterSpacing: {
      5: 2,
      6: 1,
      7: 0,
      8: 0,
      9: -1,
      10: -1,
      12: -2,
      14: -3,
      15: -4
    },
    face: {
      700: { normal: "InterBold" },
      800: { normal: "InterBold" },
      900: { normal: "InterBold" }
    }
  },
  { sizeLineHeight: (size2) => Math.round(size2 * 1.1 + (size2 < 30 ? 10 : 0)) }
);
var bodyFont = (0, import_font_inter.createInterFont)(
  {
    family: process.env.TAMAGUI_TARGET === "native" ? "Inter" : '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    weight: {
      1: "500",
      7: "600"
    }
  },
  {
    sizeSize: (size2) => Math.round(size2),
    sizeLineHeight: (size2) => Math.round(size2 * 1.1 + (size2 >= 12 ? 10 : 4))
  }
);
var monoFont = createGenericFont(
  `"ui-monospace", "SFMono-Regular", "SF Mono", Menlo, Consolas, "Liberation Mono", monospace`,
  {
    weight: {
      1: "500"
    },
    size: {
      1: 11,
      2: 12,
      3: 13,
      4: 14,
      5: 16,
      6: 18,
      7: 20,
      8: 22,
      9: 30,
      10: 42,
      11: 52,
      12: 62,
      13: 72,
      14: 92,
      15: 114,
      16: 124
    }
  },
  {
    sizeLineHeight: (x) => x * 1.5
  }
);
var config = {
  defaultTheme: "light",
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  animations,
  media,
  shorthands: import_shorthands.shorthands,
  themes,
  tokens,
  fonts: {
    heading: headingFont,
    body: bodyFont,
    mono: monoFont,
    silkscreen: silkscreenFont
  }
};
config.mediaQueryDefaultActive = {
  xxs: true,
  xs: true,
  sm: true
};

// tamagui.config.js
var appConfig = (0, import_core5.createTamagui)(config);
var tamagui_config_default = appConfig;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
