(() => {
var exports = {};
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 9943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PostTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


function PostTitle({
  children
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
      className: "text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left",
      children: [children, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
          height: "5px",
          maxWidth: "500px",
          backgroundImage: "var(--bg-img)",
          backgroundSize: "cover",
          borderRadius: "8px"
        }
      })]
    })
  });
}

/***/ }),

/***/ 2021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Post),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "next/error"
const error_namespaceObject = require("next/error");
var error_default = /*#__PURE__*/__webpack_require__.n(error_namespaceObject);
// EXTERNAL MODULE: ./components/container.tsx
var container = __webpack_require__(3754);
// EXTERNAL MODULE: ./components/markdown-styles.module.css
var markdown_styles_module = __webpack_require__(6293);
var markdown_styles_module_default = /*#__PURE__*/__webpack_require__.n(markdown_styles_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/post-body.tsx


function PostBody({
  content
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "max-w-2xl mx-auto",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (markdown_styles_module_default()).markdown,
      dangerouslySetInnerHTML: {
        __html: content
      }
    })
  });
}
// EXTERNAL MODULE: ./components/avatar.tsx
var avatar = __webpack_require__(1035);
// EXTERNAL MODULE: ./components/date-formatter.tsx
var date_formatter = __webpack_require__(2057);
// EXTERNAL MODULE: ./components/cover-image.tsx
var cover_image = __webpack_require__(6299);
// EXTERNAL MODULE: ./components/post-title.tsx
var post_title = __webpack_require__(9943);
;// CONCATENATED MODULE: ./components/post-header.tsx







function PostHeader({
  title,
  coverImage,
  date,
  author
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(post_title/* default */.Z, {
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "hidden md:block md:mb-12",
      children: /*#__PURE__*/jsx_runtime_.jsx(avatar/* default */.Z, {
        name: author.name,
        picture: author.picture
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mb-8 md:mb-16 sm:mx-0",
      children: /*#__PURE__*/jsx_runtime_.jsx(cover_image/* default */.Z, {
        slug: "",
        title: title,
        src: coverImage
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "max-w-2xl mx-auto",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "block md:hidden mb-6",
        children: /*#__PURE__*/jsx_runtime_.jsx(avatar/* default */.Z, {
          name: author.name,
          picture: author.picture
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mb-6 text-lg",
        children: /*#__PURE__*/jsx_runtime_.jsx(date_formatter/* default */.Z, {
          dateString: date
        })
      })]
    })]
  });
}
// EXTERNAL MODULE: ./components/layout.tsx + 2 modules
var layout = __webpack_require__(9636);
// EXTERNAL MODULE: ./lib/api.ts
var api = __webpack_require__(4241);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./lib/constants.tsx
var constants = __webpack_require__(1721);
;// CONCATENATED MODULE: external "remark"
const external_remark_namespaceObject = require("remark");
var external_remark_default = /*#__PURE__*/__webpack_require__.n(external_remark_namespaceObject);
;// CONCATENATED MODULE: external "remark-html"
const external_remark_html_namespaceObject = require("remark-html");
var external_remark_html_default = /*#__PURE__*/__webpack_require__.n(external_remark_html_namespaceObject);
;// CONCATENATED MODULE: ./lib/markdownToHtml.tsx


async function markdownToHtml(markdown) {
  const result = await external_remark_default()().use((external_remark_html_default())).process(markdown);
  return result.toString();
}
// EXTERNAL MODULE: ./components/Menu/index.ts + 1 modules
var Menu = __webpack_require__(4239);
// EXTERNAL MODULE: ./constants/menu.ts
var menu = __webpack_require__(3739);
;// CONCATENATED MODULE: ./pages/posts/[slug].tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















function Post({
  post,
  morePosts,
  preview
}) {
  const router = (0,router_.useRouter)();

  if (!router.isFallback && !(post !== null && post !== void 0 && post.slug)) {
    return /*#__PURE__*/jsx_runtime_.jsx((error_default()), {
      statusCode: 404
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(container/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Menu/* default */.Z, {
        items: menu/* default */.Z,
        disableScroll: true,
        spacing: true
      }), router.isFallback ? /*#__PURE__*/jsx_runtime_.jsx(post_title/* default */.Z, {
        children: "Loading\u2026"
      }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("article", {
          className: "mb-32",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
              children: [post.title, " | Next.js Blog Example with ", constants/* CMS_NAME */.yf]
            }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
              property: "og:image",
              content: post.ogImage.url
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(PostHeader, {
            title: post.title,
            coverImage: post.coverImage,
            date: post.date,
            author: post.author
          }), /*#__PURE__*/jsx_runtime_.jsx(PostBody, {
            content: post.content
          })]
        })
      })]
    })
  });
}
async function getStaticProps({
  params
}) {
  const post = (0,api/* getPostBySlug */.zQ)(params.slug, ['title', 'date', 'slug', 'author', 'content', 'ogImage', 'coverImage']);
  const content = await markdownToHtml(post.content || '');
  return {
    props: {
      post: _objectSpread(_objectSpread({}, post), {}, {
        content
      })
    }
  };
}
async function getStaticPaths() {
  const posts = (0,api/* getAllPosts */.Bd)(['slug']);
  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug
        }
      };
    }),
    fallback: false
  };
}

/***/ }),

/***/ 6293:
/***/ ((module) => {

// Exports
module.exports = {
	"markdown": "markdown-styles_markdown__1x9gM"
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [400,664,359,786,430], () => (__webpack_exec__(2021)));
module.exports = __webpack_exports__;

})();