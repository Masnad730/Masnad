"use strict";
(() => {
var exports = {};
exports.id = 458;
exports.ids = [458];
exports.modules = {

/***/ 1283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PracticeArea),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(4626);
// EXTERNAL MODULE: ./components/layout/Layout.js + 4 modules
var Layout = __webpack_require__(7318);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/PracticesSidebarNav.js


const PracticesSidebarNav = ({ selectedPractice , allPractices  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-grey-light-1 border-r border-accents_4 sidebar-nav",
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            className: "h-[774px] overflow-y-scroll border-b",
            children: allPractices.map((practice, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: ` ${practice.acf.area === selectedPractice.acf.area ? 'bg-grey-light-2' : 'hover:bg-grey-light-2'}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: `/practices/${practice.slug}`,
                        passHref: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: "flex items-center pl-10 pr-10 pb-5 pt-5",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex items-center justify-center mr-3",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `/icons/svg-black/${practice.slug}.svg`,
                                        alt: "",
                                        width: "35",
                                        height: "32"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "text-base font-normal",
                                    children: practice.acf.area
                                })
                            ]
                        })
                    })
                })
            )
        })
    }));
};
/* harmony default export */ const components_PracticesSidebarNav = (PracticesSidebarNav);

;// CONCATENATED MODULE: ./pages/practices/[slug].js




function PracticeArea({ practice , allPractices  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "pt-20 md:pt-32 lg:pt-48 pb-16",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row justify-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "text-2xl md:text-3xl lg:text-4xl mb-2",
                                    children: "Practice Area"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative line-sep-center"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "text-base lg:text-lg mb-4",
                                    children: [
                                        "We represent clients of all sizes, across industry, as well as foreign missions,",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        " government entities and INGOs."
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 order-2 order-lg-1",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_PracticesSidebarNav, {
                                selectedPractice: practice,
                                allPractices: allPractices
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-8 order-1 order-lg-2",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "h-auto md:h-80 mb-12",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "w-full h-full object-cover",
                                            src: practice.acf.image.url,
                                            alt: practice.acf.area
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mb-4 md:mb-2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "text-2xl md:text-3xl",
                                            children: practice.acf.area
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "whitespace-pre-wrap",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "dashed",
                                            dangerouslySetInnerHTML: {
                                                __html: practice.acf.description
                                            }
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
PracticeArea.getLayout = function getLayout(page, { practice  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        title: `${practice.acf.area} - Masnad Law Firm`,
        canonical: `https://masnad.af/practices/${practice.slug}`,
        descriptionContent: practice.acf.description.substring(0, 160),
        children: page
    }));
};
const getStaticPaths = async ()=>{
    const practices = await (0,api/* getAllPracticesCustomFields */.u2)();
    const paths = practices.map((practice)=>({
            params: {
                slug: practice.slug
            }
        })
    );
    return {
        paths,
        fallback: false
    };
};
async function getStaticProps({ params  }) {
    const allPractices = await (0,api/* getAllPracticesCustomFields */.u2)();
    return {
        props: {
            practice: allPractices.find((practice)=>practice.slug === params.slug
            ) || {},
            allPractices
        }
    };
}


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

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

/***/ 3142:
/***/ ((module) => {

module.exports = require("notistack");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4508:
/***/ ((module) => {

module.exports = require("react-responsive-carousel");

/***/ }),

/***/ 3278:
/***/ ((module) => {

module.exports = require("react-spinners/ClipLoader");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,318], () => (__webpack_exec__(1283)));
module.exports = __webpack_exports__;

})();