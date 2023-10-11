"use strict";
(() => {
var exports = {};
exports.id = 685;
exports.ids = [685];
exports.modules = {

/***/ 5045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AfghanistanLaws),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4626);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3278);
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7318);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5625);







function AfghanistanLaws({ treaties , afghanLaws  }) {
    const { 0: currentPage , 1: setCurrentPage  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
    const { 0: itemsPerPage , 1: setItemsPerPage  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(10);
    const { 0: userChoice1 , 1: setUserChoice  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('laws');
    const { 0: defaultCategory , 1: setDefaultCategory  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('all-categories');
    const { 0: afgLawsUserCategory , 1: setAFGLawsUserCategory  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(afghanLaws);
    //State Variables for Searching Function
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: isSearching , 1: setIsSearching  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: userQuery , 1: setUserQuery  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
    const { 0: searchedItems , 1: setSearchedItems  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    // Get Current Item
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = afgLawsUserCategory.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber)=>{
        setCurrentPage(pageNumber);
    };
    //
    const selectedItems = currentItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
            className: "border-b border-accents_2",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                    className: "border-t-0 px-6 align-middle border-l-0 border-r-0 p-4",
                    colSpan: "5",
                    children: item.acf.legislation
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                    className: "border-t-0 px-6 align-middle border-l-0 border-r-0 p-4",
                    children: item.acf.gazette
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                    className: "border-t-0 px-6 align-middle border-l-0 border-r-0 p-4",
                    colSpan: "3",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.IntlProvider, {
                        locale: "en-US",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedDate, {
                            value: item.acf.published,
                            month: "short",
                            year: "numeric",
                            day: "2-digit"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                    className: "border-t-0 px-6 align-middle border-l-0 border-r-0 p-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: item.acf.doc_english.url,
                        className: "bg-tertiary text-white p-2 cursor-pointer",
                        target: "_blank",
                        download: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fa fa-download"
                        })
                    })
                })
            ]
        }, index)
    );
    const selectedItemsAfterSearch = searchedItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
            className: "border-b border-accents_2",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                    className: "border-t-0 px-6 align-middle border-l-0 border-r-0 p-4",
                    children: item.acf.legislation
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                    className: "border-t-0 px-6 align-middle border-l-0 border-r-0 p-4",
                    children: item.acf.gazette
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                    className: "border-t-0 px-6 align-middle border-l-0 border-r-0 p-4",
                    colSpan: "3",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.IntlProvider, {
                        locale: "en-US",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedDate, {
                            value: item.acf.published,
                            month: "short",
                            year: "numeric",
                            day: "2-digit"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                    className: "border-t-0 px-6 align-middle border-l-0 border-r-0 p-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: item.acf.doc_english.url,
                        className: "bg-tertiary text-white p-2 cursor-pointer",
                        target: "_blank",
                        download: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fa fa-download"
                        })
                    })
                })
            ]
        }, index)
    );
    // Handle Click Event
    const handleClick = (userChoice)=>{
        setUserChoice(userChoice);
    };
    const handleChange = async (e)=>{
        setUserQuery(e.target.value);
        setIsLoading(true);
        setIsSearching(e.target.value === '' ? false : true);
        await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__/* .searchForAfghanLaw */ .tq)(e.target.value, setSearchedItems, setIsLoading);
    };
    const handleCategoryChange = async (e)=>{
        if (e.target.value === 'all-categories') {
            setDefaultCategory(e.target.value);
            setAFGLawsUserCategory(afghanLaws);
        } else {
            const userCategory = afghanLaws.filter((law)=>law.acf.category.find((category)=>category.post_name === e.target.value
                )
            );
            setDefaultCategory(e.target.value);
            setAFGLawsUserCategory(userCategory);
            setCurrentPage(1);
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "pt-36 pb-28",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row justify-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-2xl md:text-3xl lg:text-5xl font-playfair leading-snug mb-2",
                                    children: "Afghanistan Laws & Regulations"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "relative line-sep-center"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-base md:text-lg mb-4",
                                    children: "Unofficial English translated version of Afghanistan laws and regulations"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-3",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `mb-2 py-3 px-5 cursor-pointer ${userChoice1 === 'laws' ? 'bg-tertiary text-grey-light-1' : 'bg-grey-light-1 text-tertiary hover:text-primary'}`,
                                        onClick: ()=>handleClick('laws')
                                        ,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "mr-2",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa fa-gavel"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "font-extrabold text-base md:text-lg",
                                                children: "Laws & Regulations"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `mb-2 py-3 px-5 cursor-pointer ${userChoice1 === 'treaties' ? 'bg-tertiary text-grey-light-1' : 'bg-grey-light-1 text-tertiary hover:text-primary'}`,
                                        onClick: ()=>handleClick('treaties')
                                        ,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "mr-2",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa fa-handshake"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "font-extrabold text-base md:text-lg",
                                                children: "Treaties & Conventions"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        userChoice1 === 'laws' ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-lg-9",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-12",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "bg-grey-light-1 text-accents_8 px-8 py-4",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex flex-wrap flex-col md:flex-row",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "mr-0 md:mr-4",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                                        id: "",
                                                                        name: "",
                                                                        value: defaultCategory,
                                                                        onChange: handleCategoryChange,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "all-categories",
                                                                                children: "All Categories"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "commercial-laws",
                                                                                children: "Commercial Laws"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "administration-laws",
                                                                                children: "Administration Laws"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "civil-laws",
                                                                                children: "Civil Laws"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "constitution",
                                                                                children: "Constitution"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "criminal-laws",
                                                                                children: "Criminal Laws"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "miscellaneous-laws",
                                                                                children: "Miscellaneous Laws"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "flex-1",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                                                    onSubmit: handleSubmit,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "flex",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "flex-1 mr-4 last:mr-0",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                name: "userQuery",
                                                                                value: userQuery,
                                                                                onChange: handleChange,
                                                                                spellCheck: "true",
                                                                                type: "search",
                                                                                placeholder: "Search",
                                                                                required: true
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-12",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "relative overflow-x-auto shadow-md sm:rounded-lg",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                                    className: "items-center bg-transparent w-full table-auto",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                                            className: "bg-gray-50",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                        className: "border-t-0 px-6 align-middle border-l-0 border-r-0 p-4",
                                                                        colSpan: "5",
                                                                        children: "Legislation"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                        className: "border-t-0 px-6 align-middle border-l-0 border-r-0 p-4",
                                                                        children: "Gazette"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                        className: "border-t-0 px-6 align-middle border-l-0 border-r-0 p-4",
                                                                        colSpan: "2",
                                                                        children: "Published"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                        className: "border-t-0 px-6 align-middle border-l-0 border-r-0 p-4"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                        className: "border-t-0 px-6 align-middle border-l-0 border-r-0 p-4"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                                            className: "text-center",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                    colSpan: "6",
                                                                    className: "py-4 align-middle",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                        size: "50px"
                                                                    })
                                                                })
                                                            })
                                                        }) : isSearching && searchedItems.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                                            className: "text-center",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                    colSpan: "6",
                                                                    className: "py-4 align-middle",
                                                                    children: "No matching records found"
                                                                })
                                                            })
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                                            children: userQuery ? selectedItemsAfterSearch : selectedItems
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                }),
                                isSearching ? '' : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "row",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex items-center justify-end pt-7",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Pagination__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                itemsPerPage: itemsPerPage,
                                                totalItems: afgLawsUserCategory.length,
                                                paginate: paginate,
                                                currentPage: currentPage,
                                                setCurrentPage: setCurrentPage
                                            })
                                        })
                                    })
                                })
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-9",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "relative overflow-x-auto shadow-md sm:rounded-lg",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                    className: "items-center bg-transparent w-full table-auto",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                            className: "bg-gray-50",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        className: "border-t-0 px-6 align-middle border-l-0 border-r-0 p-4",
                                                        children: "Treaties & Conventions"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        className: "border-t-0 px-6 align-middle border-l-0 border-r-0 p-4",
                                                        children: "Year"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        className: "border-t-0 px-6 align-middle border-l-0 border-r-0 p-4",
                                                        children: "Pashto"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        className: "border-t-0 px-6 align-middle border-l-0 border-r-0 p-4",
                                                        children: "Dari"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        className: "border-t-0 px-6 align-middle border-l-0 border-r-0 p-4",
                                                        children: "English"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                            children: treaties.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                    className: "border-b border-accents_2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: "border-t-0 px-6 align-middle border-l-0 border-r-0 p-4",
                                                            children: item.acf.title
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: "border-t-0 px-6 align-middle border-l-0 border-r-0 p-4",
                                                            children: item.acf.year
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: "border-t-0 px-6 align-middle border-l-0 border-r-0 p-4",
                                                            children: item.acf.doc_pashto && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: item.acf.doc_pashto.url,
                                                                className: "bg-tertiary text-white p-2 cursor-pointer",
                                                                target: "_blank",
                                                                download: true,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fa fa-download"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: "border-t-0 px-6 align-middle border-l-0 border-r-0 p-4",
                                                            children: item.acf.doc_dari && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: item.acf.doc_dari.url,
                                                                className: "bg-tertiary text-white p-2 cursor-pointer",
                                                                target: "_blank",
                                                                download: true,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fa fa-download"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: "border-t-0 px-6 align-middle border-l-0 border-r-0 p-4",
                                                            children: item.acf.doc_english && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: item.acf.doc_english.url,
                                                                className: "bg-tertiary text-white p-2 cursor-pointer",
                                                                target: "_blank",
                                                                download: true,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fa fa-download"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                }, index)
                                            )
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
AfghanistanLaws.getLayout = function getLayout(page) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        title: "Afghanistan Laws & Regulations - Masnad Law Firm",
        page: "afghanistan-laws-regulations",
        canonical: "https://masnad.af/afghanistan-laws-regulations",
        pageDescription: "Here is the list of Afghanistan laws and regulations ranging from civil to commercial to criminal that are translated in English. Please note that the English translation of the legislations is not official and is therefore not guaranteed by Masnad Law Firm. We recommend to use Dari & Pashto official version of the legislations for better understanding.",
        children: page
    }));
};
async function getStaticProps({ params  }) {
    const treaties = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__/* .getAllTreatiesAndConventions */ .aW)();
    const afghanLaws = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__/* .getAllAfghanistanLaws */ ._b)();
    return {
        props: {
            afghanLaws,
            treaties
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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,318,625], () => (__webpack_exec__(5045)));
module.exports = __webpack_exports__;

})();