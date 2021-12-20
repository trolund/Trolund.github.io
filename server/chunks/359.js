exports.id = 359;
exports.ids = [359];
exports.modules = {

/***/ 4239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Menu_Menu)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(4041);
// EXTERNAL MODULE: external "react-icons/si"
var si_ = __webpack_require__(764);
// EXTERNAL MODULE: external "react-icons/vsc"
var vsc_ = __webpack_require__(382);
// EXTERNAL MODULE: ./components/Menu/Menu.module.css
var Menu_module = __webpack_require__(6255);
var Menu_module_default = /*#__PURE__*/__webpack_require__.n(Menu_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Menu/Menu.tsx










var ResponsiveMode;

(function (ResponsiveMode) {
  ResponsiveMode[ResponsiveMode["DESKTOP"] = 0] = "DESKTOP";
  ResponsiveMode[ResponsiveMode["MOBILE"] = 1] = "MOBILE";
})(ResponsiveMode || (ResponsiveMode = {}));

var MenuState;

(function (MenuState) {
  MenuState[MenuState["INIT"] = 0] = "INIT";
  MenuState[MenuState["SHOW"] = 1] = "SHOW";
  MenuState[MenuState["HIDE"] = 2] = "HIDE";
})(MenuState || (MenuState = {}));

const breakpoint = 600;

function Menu({
  items,
  disableScroll,
  spacing
}) {
  const key = "isDark";
  const {
    0: menuState,
    1: setMenuState
  } = (0,external_react_.useState)(ResponsiveMode.DESKTOP);
  const {
    0: SideMenuState,
    1: setSideMenuState
  } = (0,external_react_.useState)(MenuState.INIT);
  const {
    0: showbg,
    1: setShowbg
  } = (0,external_react_.useState)(false);
  const {
    0: isDark,
    1: setIsDark
  } = (0,external_react_.useState)(false);
  const router = (0,router_.useRouter)();
  (0,external_react_.useEffect)(() => {
    state();

    if (disableScroll) {
      setShowbg(true);
    }

    window.addEventListener('resize', state, false);
    window.addEventListener('scroll', scrollControl, false);
    return () => {
      window.removeEventListener('resize', state, false);
      window.removeEventListener('scroll', scrollControl, false);
    };
  }, []);
  (0,external_react_.useEffect)(() => {
    let isDark = localStorage.getItem(key) === 'true';
    setIsDark(isDark);
  }, []);
  (0,external_react_.useEffect)(() => {
    updateColors(isDark);
  }, [isDark]);

  const scrollControl = () => {
    if (window.scrollY > 5 || disableScroll) {
      setShowbg(true);
    } else {
      setShowbg(false);
    }
  };

  const state = () => {
    if (window.innerWidth < breakpoint) {
      setMenuState(ResponsiveMode.MOBILE);
    } else {
      setMenuState(ResponsiveMode.DESKTOP);
    }
  };

  const toggleMenu = () => {
    if (menuState === ResponsiveMode.MOBILE) {
      SideMenuState === MenuState.SHOW ? setSideMenuState(MenuState.HIDE) : setSideMenuState(MenuState.SHOW);
    } else {
      setSideMenuState(MenuState.SHOW);
    }
  };

  const getMenuClass = (state, reponsiveMode, showbg) => {
    if (state === MenuState.HIDE) {
      if (reponsiveMode === ResponsiveMode.DESKTOP) {
        return (Menu_module_default()).hidedesktop + " shadow-sm";
      } else {
        return (Menu_module_default()).hide + " " + (Menu_module_default()).menubg + " shadow-sm";
      }
    } else if (state === MenuState.SHOW) {
      if (reponsiveMode === ResponsiveMode.DESKTOP) {
        return +"shadow-sm " + (showbg ? (Menu_module_default()).showdesktop + " " + (Menu_module_default()).menubg : (Menu_module_default()).showdesktop);
      } else {
        return (Menu_module_default()).show + " " + (Menu_module_default()).menubg + " shadow-sm";
      }
    } else {
      if (reponsiveMode === ResponsiveMode.DESKTOP) {
        if (showbg || disableScroll && state != MenuState.INIT) {
          return (Menu_module_default()).showdesktop + " " + (Menu_module_default()).menubg + " shadow-sm " + "her2";
        }

        return (Menu_module_default()).showdesktop;
      } else {
        return (Menu_module_default()).init;
      }
    }
  };

  const switchTheme = e => {
    setIsDark(!isDark);
  };

  const updateColors = isDark => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }

    localStorage.setItem(key, String(isDark));
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [menuState === ResponsiveMode.MOBILE && /*#__PURE__*/jsx_runtime_.jsx("button", {
      className: (SideMenuState == MenuState.SHOW ? "is-active " : "") + "hamburger hamburger--collapse " + (Menu_module_default()).menuButton,
      type: "button",
      onClick: toggleMenu,
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "hamburger-box",
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "hamburger-inner"
        })
      })
    }), menuState !== ResponsiveMode.DESKTOP && /*#__PURE__*/jsx_runtime_.jsx("div", {
      onClick: () => setSideMenuState(MenuState.HIDE),
      style: {
        left: "var(--menu-width)",
        height: "100vh",
        width: "calc(100vw - var(--menu-width))",
        position: "fixed",
        zIndex: 99999,
        top: 0
      }
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Menu_module_default()).menu + " " + getMenuClass(SideMenuState, menuState, showbg),
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Menu_module_default()).menuContainer + " container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          children: [items === null || items === void 0 ? void 0 : items.map(i => /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
            href: i.link,
            children: /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: router.pathname == i.link ? (Menu_module_default()).active : "",
              style: i.styles,
              children: i.itemName
            }, i.link)
          }, i.link)), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (Menu_module_default()).icons,
            children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "https://github.com/trolund",
              children: /*#__PURE__*/jsx_runtime_.jsx(vsc_.VscGithubInverted, {
                size: 30,
                style: {
                  animationDelay: "0.2s"
                }
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "https://www.linkedin.com/in/trolund/",
              children: /*#__PURE__*/jsx_runtime_.jsx(si_.SiLinkedin, {
                size: 30,
                style: {
                  animationDelay: "0.5s"
                }
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              onClick: switchTheme,
              style: {
                display: "inline",
                float: "right",
                cursor: "pointer"
              },
              children: isDark ? /*#__PURE__*/jsx_runtime_.jsx(md_.MdDarkMode, {
                size: 30
              }) : /*#__PURE__*/jsx_runtime_.jsx(md_.MdOutlineDarkMode, {
                size: 30
              })
            })]
          })]
        })
      })
    }), spacing && /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        height: "calc(var(--menu-height) + 20px)"
      }
    })]
  });
}

;
/* harmony default export */ const Menu_Menu = (Menu);
;// CONCATENATED MODULE: ./components/Menu/index.ts



/***/ }),

/***/ 3754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Container({
  children
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "md:container mx-auto px-5 main-content",
    children: children
  });
}

/***/ }),

/***/ 9636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: ./components/container.tsx
var container = __webpack_require__(3754);
// EXTERNAL MODULE: ./components/Footer/Footer.module.css
var Footer_module = __webpack_require__(1957);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Footer/footer.tsx




function Footer() {
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    className: "bg-accent-1 border-t border-accent-2 " + (Footer_module_default()).footer,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(container/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
        className: (Footer_module_default()).svg + " float-right",
        children: /*#__PURE__*/jsx_runtime_.jsx("clipPath", {
          id: "my-clip-path",
          clipPathUnits: "objectBoundingBox",
          children: /*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M1,0 l-0.25,0.917,-0.339,-0.302,0.325,-0.343,-0.436,0.301,-0.301,-0.073,1,-0.5 m-0.625,0.695 v0.306 l0.136,-0.185,-0.136,-0.121"
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "float-left p-10",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
          className: "font-extrabold",
          children: "Kontakt oplysninger"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            children: "Mobil: 29456660"
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: "Email: Trolund@gmail.com"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "Du er altid velkomen til at kontakte mig."
        })]
      })]
    })
  });
}
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./lib/constants.tsx
var constants = __webpack_require__(1721);
;// CONCATENATED MODULE: ./components/meta.tsx




function Meta() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicon/apple-touch-icon.png"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon/favicon-32x32.png"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon/favicon-16x16.png"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "manifest",
      href: "/favicon/site.webmanifest"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "mask-icon",
      href: "/favicon/safari-pinned-tab.svg",
      color: "#000000"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "shortcut icon",
      href: "/favicon/favicon.ico"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "msapplication-TileColor",
      content: "#000000"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "msapplication-config",
      content: "/favicon/browserconfig.xml"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "theme-color",
      content: "#000"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "alternate",
      type: "application/rss+xml",
      href: "/feed.xml"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "description",
      content: `A statically generated blog example using Next.js and ${constants/* CMS_NAME */.yf}.`
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:image",
      content: constants/* HOME_OG_IMAGE_URL */.vC
    })]
  });
}
;// CONCATENATED MODULE: ./components/layout.tsx





function Layout({
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Meta, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        minHeight: "calc(100vh - (var(--footer-height) + var(--menu-height) + 20px))"
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("main", {
        children: children
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
  });
}

/***/ }),

/***/ 3739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menu = [{
  itemName: "Forside",
  link: "/"
}, {
  itemName: "Aboute me",
  link: "/aboute"
}, {
  itemName: "Projects",
  link: "/projects"
}, // { itemName: "CV", link: "/cv" },
{
  itemName: "Blog",
  link: "/blog"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ 1721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "yf": () => (/* binding */ CMS_NAME),
/* harmony export */   "R": () => (/* binding */ TITLE),
/* harmony export */   "vC": () => (/* binding */ HOME_OG_IMAGE_URL)
/* harmony export */ });
/* unused harmony export EXAMPLE_PATH */
const EXAMPLE_PATH = 'blog-starter';
const CMS_NAME = 'Markdown';
const TITLE = 'Troels Lund - Software engineer';
const HOME_OG_IMAGE_URL = 'https://og-image.now.sh/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg';

/***/ }),

/***/ 1957:
/***/ ((module) => {

// Exports
module.exports = {
	"svg": "Footer_svg__wXeO5",
	"footer": "Footer_footer__31YtZ"
};


/***/ }),

/***/ 6255:
/***/ ((module) => {

// Exports
module.exports = {
	"menubg": "Menu_menubg__1Mb_b",
	"menu": "Menu_menu__3MYEe",
	"init": "Menu_init__lxA3S",
	"menuButton": "Menu_menuButton__25EkS",
	"hide": "Menu_hide__1OA9z",
	"hidedesktop": "Menu_hidedesktop__2PPqo",
	"hided": "Menu_hided__gmz6e",
	"show": "Menu_show__2TubB",
	"showdesktop": "Menu_showdesktop__1xklg",
	"showd": "Menu_showd__3oDR_",
	"menuContainer": "Menu_menuContainer__2-WBL",
	"active": "Menu_active__1c4yu",
	"icons": "Menu_icons__2IQpV",
	"text-focus-in": "Menu_text-focus-in__9SoXV",
	"text-hover": "Menu_text-hover__vWTfw"
};


/***/ })

};
;