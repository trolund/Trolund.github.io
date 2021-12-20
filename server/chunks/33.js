"use strict";
exports.id = 33;
exports.ids = [33];
exports.modules = {

/***/ 7033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MoreStories)
});

// EXTERNAL MODULE: ./components/avatar.tsx
var avatar = __webpack_require__(1035);
// EXTERNAL MODULE: ./components/date-formatter.tsx
var date_formatter = __webpack_require__(2057);
// EXTERNAL MODULE: ./components/cover-image.tsx
var cover_image = __webpack_require__(6299);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/post-preview.tsx






function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mb-5",
      children: /*#__PURE__*/jsx_runtime_.jsx(cover_image/* default */.Z, {
        slug: slug,
        title: title,
        src: coverImage
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
    }), /*#__PURE__*/jsx_runtime_.jsx(avatar/* default */.Z, {
      name: author.name,
      picture: author.picture
    })]
  });
}
;// CONCATENATED MODULE: ./components/more-stories.tsx



function MoreStories({
  posts
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      className: "mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight",
      children: "More Stories"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32",
      children: posts.map(post => /*#__PURE__*/jsx_runtime_.jsx(PostPreview, {
        title: post.title,
        coverImage: post.coverImage,
        date: post.date,
        author: post.author,
        slug: post.slug,
        excerpt: post.excerpt
      }, post.slug))
    })]
  });
}

/***/ })

};
;