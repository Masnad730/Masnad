"use strict";
exports.id = 625;
exports.ids = [625];
exports.modules = {

/***/ 5625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Pagination = ({ itemsPerPage , totalItems , currentPage , setCurrentPage , paginate  })=>{
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++){
        pageNumbers.push(i);
    }
    const paginateToBack = ()=>{
        if (currentPage > 1) setCurrentPage(currentPage - 1);
        else if (currentPage <= 1) setCurrentPage(currentPage);
    };
    const paginateToNext = ()=>{
        if (currentPage < pageNumbers.length) setCurrentPage(currentPage + 1);
        else if (currentPage >= pageNumbers.length) setCurrentPage(currentPage);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: `min-w-full justify-end items-center border-b border-accents_4 ${totalItems === itemsPerPage ? 'hidden' : 'flex'}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex items-center justify-center mb-4",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-wrap items-center text-gray-700 pb-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mb-1 last:mb-0 md:mb-0",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            onClick: paginateToBack,
                            disabled: currentPage <= 1 ? true : false,
                            className: "h-10 flex items-center justify-start p-0 px-2 mr-1 cursor-pointer rounded-none border border-accents_4 text-black disabled:text-accents_6",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "100%",
                                    height: "100%",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    className: "w-4 h-4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                        points: "15 18 9 12 15 6"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-sm",
                                    children: "Previous"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex items-center font-medium mb-1 last:mb-0 md:mb-0",
                        children: pageNumbers.map((pageNumber)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `flex justify-center items-center cursor-pointer transition duration-150 ease-in mr-1 last:mr-0 ${pageNumber === currentPage ? 'bg-tertiary text-accents_0' : 'hover:bg-accents_4'}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>paginate(pageNumber)
                                    ,
                                    className: "h-10 p-0 px-3 focus:outline-none rounded-none border border-accents_4",
                                    children: pageNumber
                                })
                            }, pageNumber)
                        )
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mb-1 last:mb-0 md:mb-0",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            onClick: paginateToNext,
                            disabled: currentPage >= pageNumbers.length ? true : false,
                            className: "h-10 flex justify-end items-center p-0 px-2 ml-1 rounded-none cursor-pointer border border-accents_4 text-black disabled:text-accents_6",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-sm",
                                    children: "Next"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "100%",
                                    height: "100%",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    className: "w-4 h-4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                        points: "9 18 15 12 9 6"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);


/***/ })

};
;