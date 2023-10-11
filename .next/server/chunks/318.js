"use strict";
exports.id = 318;
exports.ids = [318];
exports.modules = {

/***/ 7318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./components/ResponsiveHeader.js




const ResponsiveHeader = ({ activePage  })=>{
    router_default().events.on('routeChangeStart', (url)=>{
        setShowMenu(false);
    });
    const { 0: showSubMenu1 , 1: setShowSubMenu1  } = (0,external_react_.useState)(false);
    const { 0: showSubMenu2 , 1: setShowSubMenu2  } = (0,external_react_.useState)(false);
    const { 0: showMenu , 1: setShowMenu  } = (0,external_react_.useState)(false);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "transition-custom w-full overflow-auto",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-start justify-between pt-6 pb-0",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: activePage === 'home' ? 'bg-white pt-4 pr-8 pb-5 pl-[47px] md:pl-16 rounded-r-full' : 'pl-5 md:pl-10 pt-2.5',
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex items-center justify-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/",
                                        passHref: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/images/masnad-logo.png",
                                                alt: "Masnad Law Firm",
                                                width: "166"
                                            })
                                        })
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "self-start pr-5 md:pr-10",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: activePage === 'home' ? 'px-0 py-0 my-0 text-accents_0 transition-all focus:outline-none' : 'px-0 py-0 my-0 text-accents_9 transition-all focus:outline-none',
                                    onClick: ()=>setShowMenu(!showMenu)
                                    ,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        className: "fill-current",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "28",
                                        height: "28",
                                        viewBox: "0 0 20 20",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                                children: "menu-toggle"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: showMenu ? 'fixed top-0 right-[0%] bg-primary text-accents_0 w-80 md:w-96 h-screen overflow-y-auto z-50 transition-all duration-500' : 'fixed top-0 -right-full bg-primary text-accents_0 w-0 h-screen z-50 transition-all duration-500',
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "w-full flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex items-start justify-between px-8 py-6 bg-white",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/",
                                                        passHref: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/images/masnad-logo.png",
                                                                alt: "Masnad Law Firm",
                                                                width: "168"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                        htmlFor: "menu-toggle",
                                                        className: "cursor-pointer transition-all",
                                                        onClick: ()=>setShowMenu(false)
                                                        ,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                            className: "text-accents_9",
                                                            width: "30",
                                                            height: "30",
                                                            viewBox: "0 0 20 20",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                                                    children: "cancel-menu"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                                className: "flex items-center overflow-y-scroll",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "flex flex-col w-full font-bold py-2",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "py-2.5 w-full px-5",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/",
                                                                passHref: true,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: activePage === 'home' ? 'text-tertiary' : 'transition-custom hover:text-tertiary',
                                                                    children: "Home"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "py-2.5 w-full pl-5",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                className: "relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "flex items-center justify-between pr-5",
                                                                        onClick: ()=>setShowSubMenu1(!showSubMenu1)
                                                                        ,
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: activePage === 'about' || activePage === 'accreditation-recognitions' ? 'text-tertiary' : 'transition-custom hover:text-tertiary',
                                                                                children: "About"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: `flex items-center justify-center ${showSubMenu1 ? 'transform rotate-180 transition-all duration-300 ease-in-out' : ''}`,
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                                    className: "w-2.5 h-2.5 pointer-events-none",
                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                    viewBox: "0 0 412 232",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                        d: "M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z",
                                                                                        fill: "#ffffff",
                                                                                        fillRule: "nonzero"
                                                                                    })
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                        className: showSubMenu1 ? 'block mt-2' : 'hidden',
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                className: "px-5 py-2.5 flex last:border-b-0 font-normal",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                    href: "/about",
                                                                                    passHref: true,
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                        className: activePage === 'about' ? 'text-tertiary' : 'transition-custom hover:text-tertiary w-full',
                                                                                        children: "About Firm"
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                className: "px-5 py-2.5 flex last:border-b-0 font-normal",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                    href: "/accreditation-recognitions",
                                                                                    passHref: true,
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                        className: activePage === 'accreditation-recognitions' ? 'text-tertiary' : 'transition-custom hover:text-tertiary w-full',
                                                                                        children: "Accreditation & Recognitions"
                                                                                    })
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "py-2.5 w-full px-5",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/practices",
                                                                passHref: true,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: activePage === 'practices' ? 'text-tertiary' : 'transition-custom hover:text-tertiary',
                                                                    children: "Practices"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "py-2.5 w-full px-5",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/insights",
                                                                passHref: true,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: activePage === 'insights' ? 'text-tertiary' : 'transition-custom hover:text-tertiary',
                                                                    children: "Insights"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "py-2.5 w-full pl-5",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                className: "relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "flex items-center justify-between pr-5",
                                                                        onClick: ()=>setShowSubMenu2(!showSubMenu2)
                                                                        ,
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: activePage !== 'home' && activePage !== 'about' && activePage !== 'accreditation-recognitions' && activePage !== 'insights' && activePage !== 'practices' && activePage !== 'contact' ? 'text-tertiary' : 'transition-custom hover:text-tertiary',
                                                                                children: "Resources"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: `flex items-center justify-center ${showSubMenu2 ? 'transform rotate-180 transition-all duration-300 ease-in-out' : ''}`,
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                                    className: "w-2.5 h-2.5 pointer-events-none",
                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                    viewBox: "0 0 412 232",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                        d: "M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z",
                                                                                        fill: "#ffffff",
                                                                                        fillRule: "nonzero"
                                                                                    })
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                        className: showSubMenu2 ? 'block mt-2' : 'hidden',
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                className: "px-5 py-2.5 flex last:border-b-0 font-normal",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                    href: "/afghanistan-laws-regulations",
                                                                                    passHref: true,
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                        className: activePage === 'afghanistan-laws-regulations' ? 'text-tertiary' : 'transition-custom hover:text-tertiary w-full',
                                                                                        children: "Afghanistan Laws & Regulations"
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                className: "px-5 py-2.5 flex last:border-b-0 font-normal",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                    href: "/tax-manuals-guidelines",
                                                                                    passHref: true,
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                        className: activePage === 'tax-manuals-guidelines' ? 'text-tertiary' : 'transition-custom hover:text-tertiary w-full',
                                                                                        children: "Tax Manuals & Guidelines"
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                className: "px-5 py-2.5 flex last:border-b-0 font-normal",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                    href: "/legal-books-papers",
                                                                                    passHref: true,
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                        className: activePage === 'legal-books' ? 'text-tertiary' : 'transition-custom hover:text-tertiary w-full',
                                                                                        children: "Legal Books & Papers"
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                className: "px-5 py-2.5 flex last:border-b-0 font-normal",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                    href: "/legal-documents-templates",
                                                                                    passHref: true,
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                        className: activePage === 'legal-documents' ? 'text-tertiary' : 'transition-custom hover:text-tertiary w-full',
                                                                                        children: "Legal Documents (Templates)"
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                className: "px-5 py-2.5 flex last:border-b-0 font-normal",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                    href: "/legal-reports",
                                                                                    passHref: true,
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                        className: activePage === 'legal-reports' ? 'text-tertiary' : 'transition-custom hover:text-tertiary w-full',
                                                                                        children: "Legal Reports"
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                className: "px-5 py-2.5 flex last:border-b-0 font-normal",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                    href: "/links",
                                                                                    passHref: true,
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                        className: activePage === '/links' ? 'text-tertiary' : 'transition-custom hover:text-tertiary w-full',
                                                                                        children: "Useful Links"
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                className: "px-5 py-2.5 flex last:border-b-0 font-normal",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                    href: "/doing-business-in-afghanistan",
                                                                                    passHref: true,
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                        className: activePage === 'doing-biz-in-afg' ? 'text-tertiary' : 'transition-custom hover:text-tertiary w-full',
                                                                                        children: "Doing Business in Afghanistan"
                                                                                    })
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "py-2.5 w-full px-5",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/contact",
                                                                passHref: true,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: activePage === 'contact' ? 'text-tertiary' : 'transition-custom hover:text-tertiary',
                                                                    children: "Contact Us"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex items-center mt-8 mb-10 ml-5",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "flex items-center text-accents_0",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "flex items-center mr-2 last:mr-0",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "w-10 h-10 rounded-1/2 flex items-center justify-center bg-tertiary",
                                                                href: "https://www.facebook.com/MasnadLawFirm/",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "flaticon-facebook"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "flex items-center mr-2 last:mr-0",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "w-10 h-10 rounded-1/2 flex items-center justify-center bg-tertiary",
                                                                href: "https://twitter.com/masnadlc",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "flaticon-twitter"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "flex items-center mr-2 last:mr-0",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "w-10 h-10 rounded-1/2 flex items-center justify-center bg-tertiary",
                                                                href: "https://www.linkedin.com/company/masnad?trk=biz-companies-cym",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "flaticon-linkedin"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: showMenu ? 'overlay-full-black' : 'hidden'
            })
        ]
    }));
};
/* harmony default export */ const components_ResponsiveHeader = (ResponsiveHeader);

;// CONCATENATED MODULE: ./components/Header.js





const Header = ({ activePage  })=>{
    const { 0: showNavbar , 1: setShowNavbar  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "block lg:hidden",
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_ResponsiveHeader, {
                    activePage: activePage
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: showNavbar ? 'hidden lg:block fixed top-0 min-w-full bg-white z-50 shadow-navbar font-lato' : 'hidden lg:block min-w-full p-0 m-0 font-lato',
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: activePage === 'home' && !showNavbar ? 'flex justify-between items-center pr-24 pl-0 py-5' : 'flex justify-between items-center px-24 py-5',
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: activePage === 'home' && !showNavbar ? 'bg-white pt-4 pr-8 pb-5 pl-[90px] rounded-r-full' : '',
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/",
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/images/masnad-logo.png",
                                        alt: "Masnad Law Firm",
                                        width: "203"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                            className: activePage === 'home' && !showNavbar ? 'text-white hidden lg:block' : 'text-accents_9 hidden lg:block',
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "flex",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "ml-10 first:ml-0 py-1 uppercase text-medium relative border-hover",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: `py-2 ${activePage === 'home' ? 'text-primary' : activePage === 'home' && !showNavbar ? 'text-white' : 'text-accents_9'}`,
                                                children: "home"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "ml-10 first:ml-0 py-1 uppercase text-medium relative border-hover group",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "#",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "py-6 relative",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: activePage === 'about' ? 'text-primary' : activePage === 'home' && !showNavbar ? 'text-white' : 'text-accents_9',
                                                        children: "about"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "hidden opacity-0 absolute -left-3/4 top-0 z-50 py-8 pl-10 mt-14 w-72 bg-accents_9 normal-case text-accents_0 group-hover:block group-hover:opacity-100 font-lato",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "py-3 text-base w-max relative border-hover",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                    href: "/about",
                                                                    passHref: true,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        children: "About Firm"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "py-3 text-base w-max relative border-hover",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                    href: "/accreditation-recognitions",
                                                                    passHref: true,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        children: "Accreditation & Recognitions"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "ml-10 first:ml-0 py-1 uppercase text-medium relative border-hover",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/practices",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: `py-2 ${activePage === 'practices' ? 'text-primary' : activePage === 'home' && !showNavbar ? 'text-white' : 'text-accents_9'}`,
                                                children: "practices"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "ml-10 first:ml-0 py-1 uppercase text-medium relative border-hover",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/insights",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: `py-2 ${activePage === 'insights' ? 'text-primary' : activePage === 'home' && !showNavbar ? 'text-white' : 'text-accents_9'}`,
                                                children: "insights"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "ml-10 first:ml-0 py-1 uppercase text-medium relative border-hover group",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "#",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "py-6 relative",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: activePage === 'resources' ? 'text-primary' : activePage === 'home' && !showNavbar ? 'text-white' : 'text-accents_9',
                                                        children: "resources"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "hidden opacity-0 absolute -left-3/4 top-0 z-50 py-8 pl-10 mt-14 w-72 bg-accents_9 normal-case text-accents_0 group-hover:block group-hover:opacity-100 font-lato",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "py-3 text-base w-max relative border-hover",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                    href: "/afghanistan-laws-regulations",
                                                                    passHref: true,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        children: "Afghanistan Laws & Regulations"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "py-3 text-base w-max relative border-hover",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                    href: "/tax-manuals-guidelines",
                                                                    passHref: true,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        children: "Tax Manuals & Guidelines"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "py-3 text-base w-max relative border-hover",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                    href: "/legal-books-papers",
                                                                    passHref: true,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        children: "Legal Books & Papers"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "py-3 text-base w-max relative border-hover",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                    href: "/legal-documents-templates",
                                                                    passHref: true,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        children: "Legal Documents (Templates)"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "py-3 text-base w-max relative border-hover",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                    href: "/legal-reports",
                                                                    passHref: true,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        children: "Legal Reports"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "py-3 text-base w-max relative border-hover",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                    href: "/links",
                                                                    passHref: true,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        children: "Useful Links"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "py-3 text-base w-max relative border-hover",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                    href: "/doing-business-in-afghanistan",
                                                                    passHref: true,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        children: "Doing Business in Afghanistan"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "ml-10 first:ml-0 py-1 uppercase text-medium relative border-hover",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/contact",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: `py-2 ${activePage === 'contact' ? 'text-primary' : activePage === 'home' && !showNavbar ? 'text-white' : 'text-accents_9'}`,
                                                children: "contact us"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "ml-10 first:ml-0 py-1 uppercase text-medium relative border-hover",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fas fa-search"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const components_Header = (Header);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
// EXTERNAL MODULE: external "react-spinners/ClipLoader"
var ClipLoader_ = __webpack_require__(3278);
var ClipLoader_default = /*#__PURE__*/__webpack_require__.n(ClipLoader_);
// EXTERNAL MODULE: external "notistack"
var external_notistack_ = __webpack_require__(3142);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(4626);
;// CONCATENATED MODULE: ./components/Footer.js







const Footer = ()=>{
    const { enqueueSnackbar  } = (0,external_notistack_.useSnackbar)();
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(false);
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)('');
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        (0,api/* submitSubscriptionEmail */.H7)(email, setEmail, setIsLoading, enqueueSnackbar);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "bg-grey-light-1 text-accents_8 text- pt-2 pb-6",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row py-16 md:py-20 lg:py-28 items-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col items-center justify-center text-center min-w-full",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "pb-8",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "text-xl md:text-2xl lg:text-4xl text-accents_9 font-bold mb-2",
                                            children: "Subscribe to our newsletter!"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-accents_6 font-rubik",
                                            children: "Stay up to date with our latest insights."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                        onSubmit: handleSubmit,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "max-w-[440px] mx-auto",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        name: "email",
                                                        type: "email",
                                                        className: "rounded",
                                                        value: email,
                                                        onChange: (e)=>setEmail(e.target.value)
                                                        ,
                                                        required: true
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        type: "submit",
                                                        className: "bg-secondary text-white w-full text-center rounded",
                                                        children: !isLoading ? 'Subscribe' : /*#__PURE__*/ jsx_runtime_.jsx((ClipLoader_default()), {
                                                            color: '#fff',
                                                            loading: isLoading,
                                                            size: 30
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                className: "border-t border-accents_5"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "px-8",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col md:flex-row flex-wrap items-center justify-between py-12",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex-1 flex items-center justify-start",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                    className: "mb-8 lg:mb-0",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "flex",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "ml-5 first:ml-0 lg:ml-6 lg:first:ml-0 capitalize text-sm md:text-base",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/about",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "about us"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "ml-5 first:ml-0 lg:ml-6 lg:first:ml-0 capitalize text-sm md:text-base",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/practices",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "practices"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "ml-5 first:ml-0 lg:ml-6 lg:first:ml-0 capitalize text-sm md:text-base",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/insights",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "insights"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "ml-5 first:ml-0 lg:ml-6 lg:first:ml-0 capitalize text-sm md:text-base",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/contact",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "contact us"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex-1 flex items-center justify-center order-3 lg:!order-none basis-full lg:basis-auto pt-4 lg:pt-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/images/masnad-logo.png",
                                            alt: "Masnad Law Firm",
                                            className: "w-[166px] lg:w-[203px]"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex-1 flex items-center justify-end mb-8 lg:mb-0",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "flex items-center justify-center text-accents_8 text-xl mr-8 last:mr-0",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://www.facebook.com/MasnadLawFirm/",
                                                target: "_blank",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "flaticon-facebook"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "flex items-center justify-center text-accents_8 text-xl mr-8 last:mr-0",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://twitter.com/masnadlc",
                                                target: "_blank",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "flaticon-twitter"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "flex items-center justify-center text-accents_8 text-xl mr-8 last:mr-0",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://www.linkedin.com/company/masnad?trk=biz-companies-cym",
                                                target: "_blank",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "flaticon-linkedin"
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-12 text-center",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "text-xs",
                                    children: [
                                        "All Rights Reserved. Copyright \xa9 ",
                                        new Date().getFullYear(),
                                        " Masnad Law Firm"
                                    ]
                                })
                            })
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: external "react-responsive-carousel"
var external_react_responsive_carousel_ = __webpack_require__(4508);
;// CONCATENATED MODULE: ./components/HeroSlider.js


const HeroSlider = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_responsive_carousel_.Carousel, {
        autoPlay: true,
        showStatus: false,
        showThumbs: false,
        showArrows: false,
        infiniteLoop: true,
        interval: 4000,
        showIndicators: true,
        animationHandler: "fade",
        swipeable: false,
        dynamicHeight: false,
        renderIndicator: (onClickHandler, isSelected, index, label)=>{
            if (isSelected) {
                return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "w-2 h-2 inline-block my-0 mx-2 bg-primary",
                    "aria-label": `Selected: ${label} ${index + 1}`,
                    title: `Selected: ${label} ${index + 1}`
                }));
            }
            return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "w-2 h-2 inline-block my-0 mx-2 bg-white",
                onClick: onClickHandler,
                onKeyDown: onClickHandler,
                value: index,
                role: "button",
                tabIndex: 0,
                title: `${label} ${index + 1}`,
                "aria-label": `${label} ${index + 1}`
            }, index));
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative h-[90vh]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/images/slider-1.jpg",
                        alt: "Slider 1",
                        className: "w-full h-full object-cover"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute top-0 left-0 right-0 bottom-0 z-10 w-full h-full opacity-100 transition-custom bg-black-alpha-0.6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "absolute top-1/2 left-1/2 z-[9999] w-11/12 md:w-2/3 lg:w-auto transform -translate-x-1/2 -translate-y-1/2",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                className: "text-accents_0 text-center uppercase",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mb-6 last:mb-0 text-2xl md:text-3xl lg:text-4xl font-rubik font-light tracking-wide",
                                        children: "welcome to"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mb-6 last:mb-0 text-[1.645rem] md:text-4xl xl:text-6xl font-bold font-poppins tracking-widest",
                                        children: "masnad law firm"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mb-6 last:mb-0 text-2xl md:text-3xl lg:text-4xl font-rubik font-light tracking-wide normal-case",
                                        children: "A Full-Service Law Firm"
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative h-[90vh]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/images/slider-2.jpg",
                        alt: "Slider 2",
                        className: "w-full h-full object-cover"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute top-0 left-0 right-0 bottom-0 z-10 w-full h-full opacity-100 transition-custom bg-black-alpha-0.6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "absolute top-1/2 left-1/2 z-[9999] w-11/12 md:w-2/3 lg:w-auto transform -translate-x-1/2 -translate-y-1/2",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "pt-20",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mb-10",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "text-white text-xl md:text-2xl lg:text-3xl font-poppins tracking-wide leading-normal",
                                            children: "We are recognized as 'Annual Award Winner' by Global Law Experts and have received 'Certificate of Excellence' from Advisory Excellence."
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center justify-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/images/global-law-experts-winner.jpg",
                                                alt: "",
                                                width: "150",
                                                height: "127",
                                                className: "w-[150px!important] h-[127px!important] mr-8 last:mr-0"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/images/advisory-execellence-award.jpeg",
                                                alt: "",
                                                width: "150",
                                                height: "127",
                                                className: "w-[150px!important] h-[127px!important] mr-8 last:mr-0"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative h-[90vh]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/images/slider-3.jpg",
                        alt: "Slider 3",
                        className: "w-full h-full object-cover"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute top-0 left-0 right-0 bottom-0 z-10 w-full h-full opacity-100 transition-custom bg-black-alpha-0.6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "absolute top-1/2 left-1/2 z-[9999] w-11/12 md:w-2/3 lg:w-auto transform -translate-x-1/2 -translate-y-1/2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "pt-20",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mb-10",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "text-white text-xl md:text-2xl lg:text-3xl font-poppins tracking-wide leading-normal",
                                        children: "We are experienced family composed of numerous well known and prestigious professionals in every legal domain and practice area."
                                    })
                                })
                            })
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_HeroSlider = (HeroSlider);

;// CONCATENATED MODULE: ./components/layout/Layout.js






const Layout = ({ children , title , canonical , pageDescription , jsonLD , page  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "canonical",
                        href: canonical
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: pageDescription
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: jsonLD
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    page === 'home' ? /*#__PURE__*/ jsx_runtime_.jsx(components_HeroSlider, {}) : '',
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: page === 'home' ? 'min-w-full absolute top-0 left-0 z-50' : '',
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {
                            activePage: page
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    }));
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ }),

/***/ 4626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u2": () => (/* binding */ getAllPracticesCustomFields),
/* harmony export */   "xR": () => (/* binding */ getAllInsights),
/* harmony export */   "_b": () => (/* binding */ getAllAfghanistanLaws),
/* harmony export */   "tq": () => (/* binding */ searchForAfghanLaw),
/* harmony export */   "aW": () => (/* binding */ getAllTreatiesAndConventions),
/* harmony export */   "Je": () => (/* binding */ getAllTaxManuals),
/* harmony export */   "gD": () => (/* binding */ getAllTaxGuidelines),
/* harmony export */   "bd": () => (/* binding */ getAllLegalBooks),
/* harmony export */   "Lv": () => (/* binding */ getAllLegalDocTemplates),
/* harmony export */   "Fm": () => (/* binding */ getAllLegalReports),
/* harmony export */   "$m": () => (/* binding */ getAllDoingBizInAfghanistan),
/* harmony export */   "ww": () => (/* binding */ getAllUsefulLinks),
/* harmony export */   "gw": () => (/* binding */ searchForUsefulLinks),
/* harmony export */   "yW": () => (/* binding */ submitEnquiry),
/* harmony export */   "H7": () => (/* binding */ submitSubscriptionEmail)
/* harmony export */ });
/* unused harmony export getAllPractices */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

async function getAllPractices() {
    const practices = await axios.get(`https://wpbackend.navisa.af/wp-json/wp/v2/masnad-practices/?per_page=100`).then((res)=>res.data
    ).catch((err)=>{
        console.log(err);
    });
    return practices;
}
async function getAllPracticesCustomFields() {
    const practices = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://wpbackend.navisa.af/wp-json/wp/v2/masnad-practices/?per_page=100&_fields[]=slug&_fields[]=acf`).then((res)=>res.data
    ).catch((err)=>{
        console.log(err);
    });
    return practices;
}
async function getAllInsights() {
    const insights = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://wpbackend.navisa.af/wp-json/wp/v2/masnad-insights/?per_page=100`).then((res)=>res.data
    ).catch((err)=>{
        console.log(err);
    });
    return insights;
}
async function getAllAfghanistanLaws() {
    const afghanLaws = await axios__WEBPACK_IMPORTED_MODULE_0___default().get('https://wpbackend.navisa.af/wp-json/wp/v2/afghanistan-laws/?per_page=100&order=asc').then((res)=>res.data
    ).catch((err)=>{
        console.log(err);
    });
    return afghanLaws;
}
async function searchForAfghanLaw(query, setSearchedItems, setIsLoading) {
    const afghanLaws = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://wpbackend.navisa.af/wp-json/wp/v2/afghanistan-laws?search=${query}`).then((res)=>{
        console.log(res.data);
        setSearchedItems(res.data);
        setIsLoading(false);
    }).catch((err)=>{
        console.log(err);
    });
    return afghanLaws;
}
async function getAllTreatiesAndConventions() {
    const treaties = await axios__WEBPACK_IMPORTED_MODULE_0___default().get('https://wpbackend.navisa.af/wp-json/wp/v2/masnad-treaties/?per_page=100').then((res)=>res.data
    ).catch((err)=>{
        console.log(err);
    });
    return treaties;
}
async function getAllTaxManuals() {
    const taxManuals = await axios__WEBPACK_IMPORTED_MODULE_0___default().get('https://wpbackend.navisa.af/wp-json/wp/v2/masnad-tax-manuals/?per_page=100&order=asc').then((res)=>res.data
    ).catch((err)=>{
        console.log(err);
    });
    return taxManuals;
}
async function getAllTaxGuidelines() {
    const taxGuidelines = await axios__WEBPACK_IMPORTED_MODULE_0___default().get('https://wpbackend.navisa.af/wp-json/wp/v2/masnad-tax-guides/?per_page=100&order=asc').then((res)=>res.data
    ).catch((err)=>{
        console.log(err);
    });
    return taxGuidelines;
}
async function getAllLegalBooks() {
    const legalBooks = await axios__WEBPACK_IMPORTED_MODULE_0___default().get('https://wpbackend.navisa.af/wp-json/wp/v2/masnad-legal-books/?per_page=100').then((res)=>res.data
    ).catch((err)=>{
        console.log(err);
    });
    return legalBooks;
}
async function getAllLegalDocTemplates() {
    const templates = await axios__WEBPACK_IMPORTED_MODULE_0___default().get('https://wpbackend.navisa.af/wp-json/wp/v2/masnad-legal-docs/?per_page=100').then((res)=>res.data
    ).catch((err)=>{
        console.log(err);
    });
    return templates;
}
async function getAllLegalReports() {
    const legalReports = await axios__WEBPACK_IMPORTED_MODULE_0___default().get('https://wpbackend.navisa.af/wp-json/wp/v2/masnad-legal-reports/?per_page=100&order=asc').then((res)=>res.data
    ).catch((err)=>{
        console.log(err);
    });
    return legalReports;
}
async function getAllDoingBizInAfghanistan() {
    const doingBusiness = await axios__WEBPACK_IMPORTED_MODULE_0___default().get('https://wpbackend.navisa.af/wp-json/wp/v2/masnad-doing-biz-afg/?per_page=100').then((res)=>res.data
    ).catch((err)=>{
        console.log(err);
    });
    return doingBusiness;
}
async function getAllUsefulLinks() {
    const links = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://wpbackend.navisa.af/wp-json/wp/v2/masnad-useful-links/?per_page=100&_fields[]=slug&_fields[]=acf&order=asc`).then((res)=>res.data
    ).catch((err)=>{
        console.log(err);
    });
    return links;
}
async function searchForUsefulLinks(query, setSearchedItems, setIsLoading) {
    const links = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://wpbackend.navisa.af/wp-json/wp/v2/masnad-useful-links?search=${query}`).then((res)=>{
        setSearchedItems(res.data);
        setIsLoading(false);
    }).catch((err)=>{
        console.log(err);
    });
    return links;
}
async function submitEnquiry(userInfo, setUserInfo, setIsLoading, enqueueSnackbar) {
    const res1 = await axios__WEBPACK_IMPORTED_MODULE_0___default().post('https://wpbackend.navisa.af/wp-json/jwt-auth/v1/token', {
        username: 'admin',
        password: 'I6FR%0^hD@Z[@'
    }).then(async (res2)=>{
        await axios__WEBPACK_IMPORTED_MODULE_0___default().post('https://wpbackend.navisa.af/wp-json/wp/v2/masnad-enquires', {
            title: 'User Enquiry - Masnad Law Firm',
            status: 'publish',
            fields: {
                name: userInfo.firstName + userInfo.lastName,
                phone_number: userInfo.phoneNumber,
                email: userInfo.email,
                message: userInfo.message
            }
        }, {
            headers: {
                Authorization: `Bearer ${res2.data.token}`
            }
        }).then((res)=>{
            setIsLoading(false);
            if (res.status === 201) {
                enqueueSnackbar('Your message has been submitted successfully.');
                setIsLoading(false);
            } else {
                enqueueSnackbar('There was an error trying to send your message, Please try again.');
                setIsLoading(false);
            }
            return res.data;
        }).catch((err)=>{
            console.log(err);
            setIsLoading(false);
            enqueueSnackbar('There was an error trying to send your message, Please check your network connection and try again.');
        });
    }).catch((err)=>{
        console.log(err);
    });
    setUserInfo({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        message: ''
    });
    return res1;
}
async function submitSubscriptionEmail(email, setEmail, setIsLoading, enqueueSnackbar) {
    const res3 = await axios__WEBPACK_IMPORTED_MODULE_0___default().post('https://wpbackend.navisa.af/wp-json/jwt-auth/v1/token', {
        username: 'admin',
        password: 'I6FR%0^hD@Z[@'
    }).then(async (res4)=>{
        await axios__WEBPACK_IMPORTED_MODULE_0___default().post('https://wpbackend.navisa.af/wp-json/wp/v2/ms-subscribed-email', {
            title: 'Email Subscription',
            status: 'publish',
            fields: {
                email: email
            }
        }, {
            headers: {
                Authorization: `Bearer ${res4.data.token}`
            }
        }).then((res)=>{
            setIsLoading(false);
            if (res.status === 201) {
                enqueueSnackbar('Your email is registered successfully');
            } else {
                enqueueSnackbar('Your email is not registered, please try again');
            }
        }).catch((err)=>{
            console.log(err);
            setIsLoading(false);
            enqueueSnackbar('Your email is not registered, please try again');
        });
    }).catch((err)=>{
        console.log(err);
    });
    setEmail('');
    return res3;
}


/***/ })

};
;