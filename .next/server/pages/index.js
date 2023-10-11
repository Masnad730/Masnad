"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(4626);
// EXTERNAL MODULE: ./components/layout/Layout.js + 4 modules
var Layout = __webpack_require__(7318);
;// CONCATENATED MODULE: ./components/PracticesSection.js


const Practices = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-cover lg:bg-100% bg-no-repeat bg-top-4 md:bg-0%",
        style: {
            backgroundImage: 'url("/images/bg-practice.jpg")'
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container pt-2 lg:pt-32 pb-10",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-sm-6 col-md-4 col-lg-3 p-[0!important]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "pr-px pb-px",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "bg-tertiary text-white h-full w-full flex flex-col items-center justify-start px-2 md:px-0 py-10",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "h-12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "text-sm md:text-base text-center",
                                                children: "Tax Law"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mt-8 mb-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/icons/svg-white/tax.svg",
                                                alt: "Tax Law",
                                                width: "65",
                                                height: "62"
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-6 col-md-4 col-lg-3 p-[0!important]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "pr-px pb-px",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "bg-tertiary text-white h-full w-full flex flex-col items-center justify-start px-2 md:px-0 py-10",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "h-12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "text-sm md:text-base text-center",
                                                children: "Aviation"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mt-8 mb-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/icons/svg-white/aviation.svg",
                                                alt: "Aviation",
                                                width: "65",
                                                height: "62"
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-6 col-md-4 col-lg-3 p-[0!important]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "pr-px pb-px",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "bg-tertiary text-white h-full w-full flex flex-col items-center justify-start px-2 md:px-0 py-10",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "h-12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "text-sm md:text-base text-center",
                                                children: "Real Estate"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mt-8 mb-3",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/icons/svg-white/real-estate.svg",
                                                alt: "Real Estate",
                                                width: "65",
                                                height: "62"
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-6 col-md-6 col-lg-3 p-[0!important]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "pr-px pb-px",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "bg-tertiary text-white h-full w-full flex flex-col items-center justify-start px-2 md:px-0 py-10",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "h-12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "text-sm md:text-base text-center",
                                                children: "Banking and Financial Services"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mt-8 mb-3",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/icons/svg-white/banking-and-financial-services.svg",
                                                alt: "Banking and Financial Services",
                                                width: "65",
                                                height: "62"
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-6 col-md-6 col-lg-3 p-[0!important]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "pr-px pb-px",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "bg-tertiary text-white h-full w-full flex flex-col items-center justify-start px-2 md:px-0 py-10",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "h-12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "text-sm md:text-base text-center",
                                                children: "Due Diligence and Investigation"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mt-8 mb-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/icons/svg-white/due-diligence-and-investigations.svg",
                                                alt: "Due Diligence and Investigation",
                                                width: "65",
                                                height: "62"
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6 p-[0!important]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "pr-px pb-px h-full",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "bg-secondary text-white w-full h-full flex flex-col items-center justify-start py-10 px-8",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "text-xl md:text-2xl mb-3",
                                            children: "Practice Areas"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-center",
                                            children: "Masnad Law Firm provides full-service to its Clients. The following highlights a general description of many of our practice areas."
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-6 col-md-4 col-lg-3 p-[0!important]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "pr-px pb-px",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "bg-tertiary text-white h-full w-full flex flex-col items-center justify-start px-2 md:px-0 py-10",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "h-12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "text-sm md:text-base text-center",
                                                children: "Employment and Labor Law"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mt-8 mb-3",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/icons/svg-white/employment-and-labor-law.svg",
                                                alt: "Employment and Labor Law",
                                                width: "65",
                                                height: "62"
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-6 col-md-4 col-lg-3 p-[0!important]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "pr-px pb-px",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "bg-tertiary text-white h-full w-full flex flex-col items-center justify-start px-2 md:px-0 py-10",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "h-12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "text-sm md:text-base text-center",
                                                children: "Intellectual Property"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mt-8 mb-3",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/icons/svg-white/intellectual-property.svg",
                                                alt: "Intellectual Property",
                                                width: "65",
                                                height: "62"
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-6 col-md-4 col-lg-3 p-[0!important]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "pr-px pb-px",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "bg-tertiary text-white h-full w-full flex flex-col items-center justify-start px-2 md:px-0 py-10",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "h-12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "text-sm md:text-base text-center",
                                                children: "Insolvency, Bankruptcy and Restructuring"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mt-8 mb-3",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/icons/svg-white/insolvency-bankruptcy-and-restructuring.svg",
                                                alt: "Insolvency, Bankruptcy and Restructuring",
                                                width: "65",
                                                height: "62"
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-6 col-md-6 col-lg-3 p-[0!important]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "pr-px pb-px",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "bg-tertiary text-white h-full w-full flex flex-col items-center justify-start px-2 md:px-0 py-10",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "h-12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "text-sm md:text-base text-center",
                                                children: "Insurance and Reinsurance"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mt-8 mb-3",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/icons/svg-white/insurance-and-reinsurance.svg",
                                                alt: "Insurance and Reinsurance",
                                                width: "65",
                                                height: "62"
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-12 col-md-6 col-lg-3 p-[0!important]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "pr-px pb-px",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "bg-tertiary text-white h-full w-full flex flex-col items-center justify-start px-2 md:px-0 py-10",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "h-12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "text-sm md:text-base text-center",
                                                children: "Immigration"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mt-8 mb-3",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/icons/svg-white/immigration.svg",
                                                alt: "Immigration",
                                                width: "65",
                                                height: "62"
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex justify-end items-center mt-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/practices",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "text-white hover:text-primary font-playfair",
                                    children: "Discover More"
                                })
                            })
                        })
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const PracticesSection = (Practices);

// EXTERNAL MODULE: ./components/CTA.js
var CTA = __webpack_require__(9244);
// EXTERNAL MODULE: ./components/InsightSection.js
var InsightSection = __webpack_require__(976);
// EXTERNAL MODULE: ./components/CompanyBackground.js
var CompanyBackground = __webpack_require__(3440);
// EXTERNAL MODULE: ./components/BorderlessSolution.js
var BorderlessSolution = __webpack_require__(5459);
;// CONCATENATED MODULE: ./pages/index.js









function Home({ allInsights  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(CompanyBackground/* default */.Z, {
                showMore: false
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PracticesSection, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(CTA/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(BorderlessSolution/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "pt-12 pb-24",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "pb-12 flex items-center justify-between font-playfair",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "dash-line"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    className: "text-base md:text-xl uppercase",
                                                    children: "insights"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/insights",
                                            passHref: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "text-accents_6 text-xs md:text-base hover:text-primary",
                                                children: "Discover more"
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: allInsights.map((insight, index)=>{
                                if (index < 3) {
                                    return(/*#__PURE__*/ jsx_runtime_.jsx(InsightSection/* default */.Z, {
                                        image: insight.acf.image.url,
                                        datePublished: insight.modified,
                                        title: insight.title.rendered,
                                        description: insight.acf.description,
                                        slug: insight.slug
                                    }, insight.id));
                                }
                            })
                        })
                    ]
                })
            })
        ]
    }));
};
async function getStaticProps({ params  }) {
    const allInsights = await (0,api/* getAllInsights */.xR)();
    return {
        props: {
            allInsights
        }
    };
}
Home.getLayout = function getLayout(page) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        title: "Masnad Law Firm - A Full Service Law Firm",
        page: "home",
        canonical: "https://masnad.af/",
        pageDescription: "Masnad Law Firm (MLF) is a local law firm distinguished from other Afghan legal institutions by its close relationship with lawyers from more than 100 countries on all continents of the globe.",
        jsonLD: "{ \"@context\": \"https://schema.org\", \"@graph\": [ { \"@type\": \"WebSite\", \"@id\": \"https://masnad.af/#website\", \"url\": \"https://masnad.af/\", \"name\": \"Masnad Law Firm\", \"description\": \"A Full-Service Law Firm Based in Kabul, Afghanistan\", \"publisher\": { \"@id\": \"https://masnad.af/#organization\" } }, { \"@type\": \"Organization\", \"@id\": \"https://masnad.af/#organization\", \"name\": \"Masnad Law Firm\", \"url\": \"https://masnad.af/\", \"logo\": \"https://masnad.af/img/masnad-logo.png\" }, { \"@type\": \"BreadcrumbList\", \"@id\": \"https://masnad.af/#breadcrumblist\", \"itemListElement\": [ { \"@type\": \"ListItem\", \"@id\": \"https://masnad.af#about/#listItem\", \"position\": 1, \"item\": { \"@type\": \"WebPage\", \"@id\": \"https://masnad.af#about/#item\", \"name\": \"About\", \"description\": \"Masnad Law Firm (MLF) is not a simple legal firm, but an experienced family composed of numerous well known and prestigious professionals in every legal domain and practice area.\", \"url\": \"https://masnad.af#about\" } }, { \"@type\": \"ListItem\", \"@id\": \"https://masnad.af#contact/#listItem\", \"position\": 2, \"item\": { \"@type\": \"WebPage\", \"@id\": \"https://masnad.af#contact/#item\", \"name\": \"Contact\", \"description\": \"Contact us. Ansori Street, Shahri Now, District 10, Kabul, Afghanistan | +93 730 830 830. info@masnad.af\", \"url\": \"https://masnad.af#contact\" } } ] }, { \"@type\": \"WebPage\", \"@id\": \"https://masnad.af/#webpage\", \"url\": \"https://masnad.af/\", \"name\": \"Masnad Law Firm\", \"description\": \"Masnad Law Firm (MLF) is a local law firm distinguished from other Afghan legal institutions by its close relationship with lawyers from more than 100 countries on all continents of the globe.\", \"inLanguage\": \"en-US\", \"isPartOf\": { \"@id\": \"https://masnad.af/#website\" }, \"breadcrumb\": { \"@id\": \"https://masnad.af/#breadcrumblist\" } } ] }",
        children: page
    }));
};


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

/***/ 3126:
/***/ ((module) => {

module.exports = require("react-intl");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,318,976,925], () => (__webpack_exec__(6662)));
module.exports = __webpack_exports__;

})();