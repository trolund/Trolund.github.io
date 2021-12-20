(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Index),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./components/container.tsx
var container = __webpack_require__(3754);
// EXTERNAL MODULE: ./components/more-stories.tsx + 1 modules
var more_stories = __webpack_require__(7033);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/intro.tsx

function Intro() {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12"
  });
}
// EXTERNAL MODULE: ./components/layout.tsx + 2 modules
var layout = __webpack_require__(9636);
// EXTERNAL MODULE: ./lib/api.ts
var api = __webpack_require__(4241);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/One/One.module.css
var One_module = __webpack_require__(1393);
var One_module_default = /*#__PURE__*/__webpack_require__.n(One_module);
;// CONCATENATED MODULE: ./components/One/One.tsx






function One({}) {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (One_module_default()).shadowfilter,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (One_module_default()).colorOne,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (One_module_default()).container,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
            className: (One_module_default()).main,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (One_module_default()).profile + " " + (One_module_default()).bounceintop
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (One_module_default()).shadow
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
              className: (One_module_default()).title + " " + (One_module_default()).textfocusin,
              children: ["Hi ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: (One_module_default()).wave,
                children: "\uD83D\uDC4B"
              }), ", I'm ", /*#__PURE__*/jsx_runtime_.jsx("b", {
                children: "Troels Lund"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: (One_module_default()).description + " " + (One_module_default()).textfocusin2,
              children: "I am a software engineer"
            })]
          })
        })
      })
    })
  });
}

;
/* harmony default export */ const One_One = (One);
;// CONCATENATED MODULE: ./components/One/index.ts

// EXTERNAL MODULE: ./components/Menu/index.ts + 1 modules
var Menu = __webpack_require__(4239);
// EXTERNAL MODULE: ./constants/menu.ts
var menu = __webpack_require__(3739);
// EXTERNAL MODULE: ./lib/constants.tsx
var constants = __webpack_require__(1721);
;// CONCATENATED MODULE: ./pages/index.tsx













function Index({
  allPosts,
  projects
}) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  const morePosts = allPosts.reverse().slice(2);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Menu/* default */.Z, {
      items: menu/* default */.Z
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
        children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
          children: constants/* TITLE */.R
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(One_One, {}), /*#__PURE__*/jsx_runtime_.jsx(Intro, {}), /*#__PURE__*/jsx_runtime_.jsx(container/* default */.Z, {
        children: morePosts.length > 0 && /*#__PURE__*/jsx_runtime_.jsx(more_stories/* default */.Z, {
          posts: morePosts
        })
      })]
    })]
  });
}
async function getStaticProps() {
  const allPosts = (0,api/* getAllPosts */.Bd)(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt', 'tags']);
  const projects = (0,api/* getAllProjects */.Yw)(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt', 'tags', 'technologies']);
  return {
    props: {
      allPosts,
      projects
    }
  };
}

/***/ }),

/***/ 1393:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "One_container__1d1Qq",
	"textfocusin": "One_textfocusin__3EEZh",
	"text-focus-in": "One_text-focus-in__3pQlk",
	"textfocusin2": "One_textfocusin2__1tHrb",
	"bounceintop": "One_bounceintop__3671q",
	"bounce-in-top": "One_bounce-in-top__L5p_C",
	"wave": "One_wave__3txhC",
	"shadowfilter": "One_shadowfilter__1he2o",
	"colorOne": "One_colorOne__22dn4",
	"bg-ani": "One_bg-ani__1YZCT",
	"main": "One_main__2OEwc",
	"footer": "One_footer__3UE_j",
	"title": "One_title__33AOO",
	"description": "One_description__3nTqZ",
	"code": "One_code__3eNTO",
	"grid": "One_grid__1JQ_8",
	"card": "One_card__c2NIo",
	"logo": "One_logo__7xgm-",
	"profile": "One_profile__3byyc",
	"shadow": "One_shadow__2sAlD",
	"bounce-in-top-shadow": "One_bounce-in-top-shadow__buu3D",
	"ball": "One_ball__3M5fu"
};


/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 4146:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

/***/ }),

/***/ 8076:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 4041:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/md");

/***/ }),

/***/ 764:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/si");

/***/ }),

/***/ 382:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/vsc");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [400,664,359,786,430,33], () => (__webpack_exec__(3139)));
module.exports = __webpack_exports__;

})();