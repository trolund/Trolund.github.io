"use strict";
(() => {
var exports = {};
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 9943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 3314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Projects),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./components/container.tsx
var container = __webpack_require__(3754);
// EXTERNAL MODULE: ./components/layout.tsx + 2 modules
var layout = __webpack_require__(9636);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./constants/menu.ts
var menu = __webpack_require__(3739);
// EXTERNAL MODULE: ./components/Menu/index.ts + 1 modules
var Menu = __webpack_require__(4239);
// EXTERNAL MODULE: ./components/post-title.tsx
var post_title = __webpack_require__(9943);
// EXTERNAL MODULE: ./lib/api.ts
var api = __webpack_require__(4241);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/date-formatter.tsx
var date_formatter = __webpack_require__(2057);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/ProjectItem/ProjectItem.tsx





function ProjectItem({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tags,
  technologies
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mb-5",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: external_classnames_default()('shadow-small', {
          'hover:shadow-medium transition-shadow duration-200': slug
        }) + " " + "pt-4 pl-2",
        style: {
          backgroundImage: `url(${coverImage})`,
          height: "200px",
          width: "100%",
          backgroundSize: "cover"
        },
        children: technologies && technologies.map((t, i) => /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "px-3 py-2 bg-accent-1 border-solid border-2 border-gray-800 border-opacity-25 rounded-full mr-2",
          children: t
        }, i))
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
      className: "text-3xl mb-3 leading-snug",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        as: `/posts/${slug}`,
        href: "/posts/[slug]",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "hover:underline",
          children: title
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "text-lg mb-4",
      children: /*#__PURE__*/jsx_runtime_.jsx(date_formatter/* default */.Z, {
        dateString: date
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "text-lg leading-relaxed mb-4",
      children: excerpt
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "text-base font-semibold float-right",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        as: `/posts/${slug}`,
        href: "/posts/[slug]",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "hover:underline",
          children: "L\xE6s mere"
        })
      })
    })]
  });
}
;// CONCATENATED MODULE: ./components/projects.tsx


function ProjectsView({
  posts
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32",
      children: posts.map(post => /*#__PURE__*/jsx_runtime_.jsx(ProjectItem, {
        title: post.title,
        coverImage: post.coverImage,
        date: post.date,
        author: post.author,
        slug: post.slug,
        excerpt: post.excerpt,
        technologies: post.technologies,
        content: ''
      }, post.slug))
    })
  });
}
;// CONCATENATED MODULE: ./pages/projects.tsx











function Projects({
  projects
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Menu/* default */.Z, {
      items: menu/* default */.Z,
      disableScroll: true,
      spacing: true
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
        children: /*#__PURE__*/jsx_runtime_.jsx("title", {
          children: "Projects"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(container/* default */.Z, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(post_title/* default */.Z, {
          children: "Projects"
        }), /*#__PURE__*/jsx_runtime_.jsx(ProjectsView, {
          posts: projects
        })]
      })]
    })]
  });
}
async function getStaticProps() {
  const projects = (0,api/* getAllProjects */.Yw)(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt', 'tags', 'technologies']);
  return {
    props: {
      projects
    }
  };
}

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4041:
/***/ ((module) => {

module.exports = require("react-icons/md");

/***/ }),

/***/ 764:
/***/ ((module) => {

module.exports = require("react-icons/si");

/***/ }),

/***/ 382:
/***/ ((module) => {

module.exports = require("react-icons/vsc");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [400,664,359,786], () => (__webpack_exec__(3314)));
module.exports = __webpack_exports__;

})();