"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/recipeSerch.tsx":
/*!********************************************!*\
  !*** ./src/app/components/recipeSerch.tsx ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n// Dicionário simples para traduzir ingredientes\nconst ingredientDictionary = {\n    maçã: \"apple\",\n    banana: \"banana\",\n    laranja: \"orange\",\n    morango: \"strawberry\",\n    abacaxi: \"pineapple\",\n    uva: \"grape\",\n    limão: \"lemon\",\n    pêssego: \"peach\",\n    tomate: \"tomato\",\n    cebola: \"onion\",\n    alho: \"garlic\",\n    cenoura: \"carrot\",\n    batata: \"potato\",\n    brócolis: \"broccoli\",\n    espinafre: \"spinach\",\n    couve: \"kale\",\n    arroz: \"rice\",\n    quinoa: \"quinoa\",\n    aveia: \"oats\",\n    \"farinha de trigo\": \"flour\",\n    milho: \"corn\",\n    feijão: \"bean\",\n    frango: \"chicken\",\n    \"carne bovina\": \"beef\",\n    porco: \"pork\",\n    peixe: \"fish\",\n    camarão: \"shrimp\",\n    leite: \"milk\",\n    queijo: \"cheese\",\n    iogurte: \"yogurt\",\n    manteiga: \"butter\",\n    \"creme de leite\": \"cream\",\n    sal: \"salt\",\n    pimenta: \"pepper\",\n    \"azeite de oliva\": \"olive oil\",\n    vinagre: \"vinegar\",\n    mostarda: \"mustard\",\n    \"molho de soja\": \"soy sauce\",\n    amêndoas: \"almonds\",\n    \"castanha de caju\": \"cashew\",\n    nozes: \"walnuts\",\n    \"semente de chia\": \"chia seeds\",\n    linhaça: \"flaxseed\",\n    açúcar: \"sugar\",\n    chocolate: \"chocolate\",\n    mel: \"honey\",\n    baunilha: \"vanilla\",\n    gelatina: \"gelatin\"\n};\nconst RecipeSearch = ()=>{\n    _s();\n    const [ingredient, setIngredient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [recipes, setRecipes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const apiId = \"3604410a\"; // Substitua com sua API ID\n    const apiKey = \"5709e285216615e66b3338490856617d\"; // Substitua com sua API KEY\n    const translateIngredient = (input)=>{\n        return ingredientDictionary[input.toLowerCase()] || input; // Retorna a tradução ou o próprio ingrediente\n    };\n    const fetchRecipes = async ()=>{\n        setLoading(true);\n        setError(null);\n        try {\n            const translatedIngredient = translateIngredient(ingredient.trim());\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"https://api.edamam.com/search?q=\".concat(translatedIngredient, \"&app_id=\").concat(apiId, \"&app_key=\").concat(apiKey));\n            setRecipes(response.data.hits);\n        } catch (err) {\n            if (axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isAxiosError(err) && err.response) {\n                const message = err.response.data.message || \"Erro desconhecido.\";\n                setError(\"Erro: \".concat(message));\n            } else {\n                setError(\"Erro ao buscar receitas. Tente novamente mais tarde.\");\n            }\n        } finally{\n            setLoading(false);\n        }\n    };\n    const handleSearch = ()=>{\n        if (ingredient.trim()) {\n            fetchRecipes();\n        } else {\n            setError(\"Por favor, insira um ingrediente.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Buscador de Receitas\"\n            }, void 0, false, {\n                fileName: \"/Users/duanny.almeida/Documents/busca-receitas/src/app/components/recipeSerch.tsx\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"text-[#9D9D9D]\",\n                type: \"text\",\n                value: ingredient,\n                onChange: (e)=>setIngredient(e.target.value),\n                placeholder: \"Digite um ingrediente\"\n            }, void 0, false, {\n                fileName: \"/Users/duanny.almeida/Documents/busca-receitas/src/app/components/recipeSerch.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleSearch,\n                disabled: loading,\n                children: loading ? \"Carregando...\" : \"Buscar Receitas\"\n            }, void 0, false, {\n                fileName: \"/Users/duanny.almeida/Documents/busca-receitas/src/app/components/recipeSerch.tsx\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            color: \"red\"\n                        },\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"/Users/duanny.almeida/Documents/busca-receitas/src/app/components/recipeSerch.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 19\n                    }, undefined),\n                    recipes.length === 0 && !loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Nenhuma receita encontrada.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/duanny.almeida/Documents/busca-receitas/src/app/components/recipeSerch.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 46\n                    }, undefined),\n                    recipes.map((param, index)=>{\n                        let { recipe } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: recipe.label\n                                }, void 0, false, {\n                                    fileName: \"/Users/duanny.almeida/Documents/busca-receitas/src/app/components/recipeSerch.tsx\",\n                                    lineNumber: 130,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: recipe.image,\n                                    alt: recipe.label,\n                                    style: {\n                                        width: \"100px\",\n                                        height: \"auto\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/duanny.almeida/Documents/busca-receitas/src/app/components/recipeSerch.tsx\",\n                                    lineNumber: 131,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Ingredientes: \",\n                                        recipe.ingredientLines.join(\", \")\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/duanny.almeida/Documents/busca-receitas/src/app/components/recipeSerch.tsx\",\n                                    lineNumber: 136,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: recipe.url,\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    children: \"Ver Receita\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/duanny.almeida/Documents/busca-receitas/src/app/components/recipeSerch.tsx\",\n                                    lineNumber: 137,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/duanny.almeida/Documents/busca-receitas/src/app/components/recipeSerch.tsx\",\n                            lineNumber: 129,\n                            columnNumber: 11\n                        }, undefined);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/duanny.almeida/Documents/busca-receitas/src/app/components/recipeSerch.tsx\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/duanny.almeida/Documents/busca-receitas/src/app/components/recipeSerch.tsx\",\n        lineNumber: 113,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RecipeSearch, \"oaoKZhodVJPOfTdrafG/DsDA6D8=\");\n_c = RecipeSearch;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecipeSearch);\nvar _c;\n$RefreshReg$(_c, \"RecipeSearch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9yZWNpcGVTZXJjaC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVpQztBQUNQO0FBYTFCLGdEQUFnRDtBQUNoRCxNQUFNRSx1QkFBa0Q7SUFDdERDLE1BQU07SUFDTkMsUUFBUTtJQUNSQyxTQUFTO0lBQ1RDLFNBQVM7SUFDVEMsU0FBUztJQUNUQyxLQUFLO0lBQ0xDLE9BQU87SUFDUEMsU0FBUztJQUNUQyxRQUFRO0lBQ1JDLFFBQVE7SUFDUkMsTUFBTTtJQUNOQyxTQUFTO0lBQ1RDLFFBQVE7SUFDUkMsVUFBVTtJQUNWQyxXQUFXO0lBQ1hDLE9BQU87SUFDUEMsT0FBTztJQUNQQyxRQUFRO0lBQ1JDLE9BQU87SUFDUCxvQkFBb0I7SUFDcEJDLE9BQU87SUFDUEMsUUFBUTtJQUNSQyxRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCQyxPQUFPO0lBQ1BDLE9BQU87SUFDUEMsU0FBUztJQUNUQyxPQUFPO0lBQ1BDLFFBQVE7SUFDUkMsU0FBUztJQUNUQyxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCQyxLQUFLO0lBQ0xDLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkJDLFNBQVM7SUFDVEMsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQkMsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQkMsT0FBTztJQUNQLG1CQUFtQjtJQUNuQkMsU0FBUztJQUNUQyxRQUFRO0lBQ1JDLFdBQVc7SUFDWEMsS0FBSztJQUNMQyxVQUFVO0lBQ1ZDLFVBQVU7QUFFWjtBQUVBLE1BQU1DLGVBQXlCOztJQUM3QixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBRzlDLCtDQUFRQSxDQUFTO0lBQ3JELE1BQU0sQ0FBQytDLFNBQVNDLFdBQVcsR0FBR2hELCtDQUFRQSxDQUFjLEVBQUU7SUFDdEQsTUFBTSxDQUFDaUQsU0FBU0MsV0FBVyxHQUFHbEQsK0NBQVFBLENBQVU7SUFDaEQsTUFBTSxDQUFDbUQsT0FBT0MsU0FBUyxHQUFHcEQsK0NBQVFBLENBQWdCO0lBRWxELE1BQU1xRCxRQUFRLFlBQVksMkJBQTJCO0lBQ3JELE1BQU1DLFNBQVMsb0NBQW9DLDRCQUE0QjtJQUUvRSxNQUFNQyxzQkFBc0IsQ0FBQ0M7UUFDM0IsT0FBT3RELG9CQUFvQixDQUFDc0QsTUFBTUMsV0FBVyxHQUFHLElBQUlELE9BQU8sOENBQThDO0lBQzNHO0lBRUEsTUFBTUUsZUFBZTtRQUNuQlIsV0FBVztRQUNYRSxTQUFTO1FBQ1QsSUFBSTtZQUNGLE1BQU1PLHVCQUF1Qkosb0JBQW9CVixXQUFXZSxJQUFJO1lBQ2hFLE1BQU1DLFdBQVcsTUFBTTVELDZDQUFLQSxDQUFDNkQsR0FBRyxDQUM5QixtQ0FBa0VULE9BQS9CTSxzQkFBcUIsWUFBMkJMLE9BQWpCRCxPQUFNLGFBQWtCLE9BQVBDO1lBRXJGTixXQUFXYSxTQUFTRSxJQUFJLENBQUNDLElBQUk7UUFDL0IsRUFBRSxPQUFPQyxLQUFLO1lBQ1osSUFBSWhFLDZDQUFLQSxDQUFDaUUsWUFBWSxDQUFDRCxRQUFRQSxJQUFJSixRQUFRLEVBQUU7Z0JBQzNDLE1BQU1NLFVBQVVGLElBQUlKLFFBQVEsQ0FBQ0UsSUFBSSxDQUFDSSxPQUFPLElBQUk7Z0JBQzdDZixTQUFTLFNBQWlCLE9BQVJlO1lBQ3BCLE9BQU87Z0JBQ0xmLFNBQVM7WUFDWDtRQUNGLFNBQVU7WUFDUkYsV0FBVztRQUNiO0lBQ0Y7SUFFQSxNQUFNa0IsZUFBZTtRQUNuQixJQUFJdkIsV0FBV2UsSUFBSSxJQUFJO1lBQ3JCRjtRQUNGLE9BQU87WUFDTE4sU0FBUztRQUNYO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2lCOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ2Q7Z0JBQ0NlLFdBQVU7Z0JBQ1ZDLE1BQUs7Z0JBQ0xDLE9BQU81QjtnQkFDUDZCLFVBQVUsQ0FBQ0MsSUFBTTdCLGNBQWM2QixFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0JBQzdDSSxhQUFZOzs7Ozs7MEJBRWQsOERBQUNDO2dCQUFPQyxTQUFTWDtnQkFBY1ksVUFBVS9COzBCQUN0Q0EsVUFBVSxrQkFBa0I7Ozs7OzswQkFFL0IsOERBQUNvQjs7b0JBQ0VsQix1QkFBUyw4REFBQzhCO3dCQUFFQyxPQUFPOzRCQUFFQyxPQUFPO3dCQUFNO2tDQUFJaEM7Ozs7OztvQkFDdENKLFFBQVFxQyxNQUFNLEtBQUssS0FBSyxDQUFDbkMseUJBQVcsOERBQUNnQztrQ0FBRTs7Ozs7O29CQUN2Q2xDLFFBQVFzQyxHQUFHLENBQUMsUUFBYUM7NEJBQVosRUFBRUMsTUFBTSxFQUFFOzZDQUN0Qiw4REFBQ2xCOzs4Q0FDQyw4REFBQ21COzhDQUFJRCxPQUFPRSxLQUFLOzs7Ozs7OENBQ2pCLDhEQUFDQztvQ0FDQ0MsS0FBS0osT0FBT0ssS0FBSztvQ0FDakJDLEtBQUtOLE9BQU9FLEtBQUs7b0NBQ2pCUCxPQUFPO3dDQUFFWSxPQUFPO3dDQUFTQyxRQUFRO29DQUFPOzs7Ozs7OENBRTFDLDhEQUFDZDs7d0NBQUU7d0NBQWVNLE9BQU9TLGVBQWUsQ0FBQ0MsSUFBSSxDQUFDOzs7Ozs7OzhDQUM5Qyw4REFBQ0M7b0NBQUVDLE1BQU1aLE9BQU9hLEdBQUc7b0NBQUV4QixRQUFPO29DQUFTeUIsS0FBSTs4Q0FBc0I7Ozs7Ozs7MkJBUnZEZjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JwQjtHQTNFTTFDO0tBQUFBO0FBNkVOLGlFQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9yZWNpcGVTZXJjaC50c3g/ZjY0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW50ZXJmYWNlIFJlY2lwZSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGltYWdlOiBzdHJpbmc7XG4gIGluZ3JlZGllbnRMaW5lczogc3RyaW5nW107XG4gIHVybDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgUmVjaXBlSGl0IHtcbiAgcmVjaXBlOiBSZWNpcGU7XG59XG5cbi8vIERpY2lvbsOhcmlvIHNpbXBsZXMgcGFyYSB0cmFkdXppciBpbmdyZWRpZW50ZXNcbmNvbnN0IGluZ3JlZGllbnREaWN0aW9uYXJ5OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge1xuICBtYcOnw6M6IFwiYXBwbGVcIixcbiAgYmFuYW5hOiBcImJhbmFuYVwiLFxuICBsYXJhbmphOiBcIm9yYW5nZVwiLFxuICBtb3JhbmdvOiBcInN0cmF3YmVycnlcIixcbiAgYWJhY2F4aTogXCJwaW5lYXBwbGVcIixcbiAgdXZhOiBcImdyYXBlXCIsXG4gIGxpbcOjbzogXCJsZW1vblwiLFxuICBww6pzc2VnbzogXCJwZWFjaFwiLFxuICB0b21hdGU6IFwidG9tYXRvXCIsXG4gIGNlYm9sYTogXCJvbmlvblwiLFxuICBhbGhvOiBcImdhcmxpY1wiLFxuICBjZW5vdXJhOiBcImNhcnJvdFwiLFxuICBiYXRhdGE6IFwicG90YXRvXCIsXG4gIGJyw7Njb2xpczogXCJicm9jY29saVwiLFxuICBlc3BpbmFmcmU6IFwic3BpbmFjaFwiLFxuICBjb3V2ZTogXCJrYWxlXCIsXG4gIGFycm96OiBcInJpY2VcIixcbiAgcXVpbm9hOiBcInF1aW5vYVwiLFxuICBhdmVpYTogXCJvYXRzXCIsXG4gIFwiZmFyaW5oYSBkZSB0cmlnb1wiOiBcImZsb3VyXCIsXG4gIG1pbGhvOiBcImNvcm5cIixcbiAgZmVpasOjbzogXCJiZWFuXCIsXG4gIGZyYW5nbzogXCJjaGlja2VuXCIsXG4gIFwiY2FybmUgYm92aW5hXCI6IFwiYmVlZlwiLFxuICBwb3JjbzogXCJwb3JrXCIsXG4gIHBlaXhlOiBcImZpc2hcIixcbiAgY2FtYXLDo286IFwic2hyaW1wXCIsXG4gIGxlaXRlOiBcIm1pbGtcIixcbiAgcXVlaWpvOiBcImNoZWVzZVwiLFxuICBpb2d1cnRlOiBcInlvZ3VydFwiLFxuICBtYW50ZWlnYTogXCJidXR0ZXJcIixcbiAgXCJjcmVtZSBkZSBsZWl0ZVwiOiBcImNyZWFtXCIsXG4gIHNhbDogXCJzYWx0XCIsXG4gIHBpbWVudGE6IFwicGVwcGVyXCIsXG4gIFwiYXplaXRlIGRlIG9saXZhXCI6IFwib2xpdmUgb2lsXCIsXG4gIHZpbmFncmU6IFwidmluZWdhclwiLFxuICBtb3N0YXJkYTogXCJtdXN0YXJkXCIsXG4gIFwibW9saG8gZGUgc29qYVwiOiBcInNveSBzYXVjZVwiLFxuICBhbcOqbmRvYXM6IFwiYWxtb25kc1wiLFxuICBcImNhc3RhbmhhIGRlIGNhanVcIjogXCJjYXNoZXdcIixcbiAgbm96ZXM6IFwid2FsbnV0c1wiLFxuICBcInNlbWVudGUgZGUgY2hpYVwiOiBcImNoaWEgc2VlZHNcIixcbiAgbGluaGHDp2E6IFwiZmxheHNlZWRcIixcbiAgYcOnw7pjYXI6IFwic3VnYXJcIixcbiAgY2hvY29sYXRlOiBcImNob2NvbGF0ZVwiLFxuICBtZWw6IFwiaG9uZXlcIixcbiAgYmF1bmlsaGE6IFwidmFuaWxsYVwiLFxuICBnZWxhdGluYTogXCJnZWxhdGluXCIsXG4gIC8vIEFkaWNpb25lIG1haXMgaW5ncmVkaWVudGVzIGNvbmZvcm1lIG5lY2Vzc8OhcmlvXG59O1xuXG5jb25zdCBSZWNpcGVTZWFyY2g6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbaW5ncmVkaWVudCwgc2V0SW5ncmVkaWVudF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbcmVjaXBlcywgc2V0UmVjaXBlc10gPSB1c2VTdGF0ZTxSZWNpcGVIaXRbXT4oW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgYXBpSWQgPSBcIjM2MDQ0MTBhXCI7IC8vIFN1YnN0aXR1YSBjb20gc3VhIEFQSSBJRFxuICBjb25zdCBhcGlLZXkgPSBcIjU3MDllMjg1MjE2NjE1ZTY2YjMzMzg0OTA4NTY2MTdkXCI7IC8vIFN1YnN0aXR1YSBjb20gc3VhIEFQSSBLRVlcblxuICBjb25zdCB0cmFuc2xhdGVJbmdyZWRpZW50ID0gKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgIHJldHVybiBpbmdyZWRpZW50RGljdGlvbmFyeVtpbnB1dC50b0xvd2VyQ2FzZSgpXSB8fCBpbnB1dDsgLy8gUmV0b3JuYSBhIHRyYWR1w6fDo28gb3UgbyBwcsOzcHJpbyBpbmdyZWRpZW50ZVxuICB9O1xuXG4gIGNvbnN0IGZldGNoUmVjaXBlcyA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHNldEVycm9yKG51bGwpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0cmFuc2xhdGVkSW5ncmVkaWVudCA9IHRyYW5zbGF0ZUluZ3JlZGllbnQoaW5ncmVkaWVudC50cmltKCkpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgIGBodHRwczovL2FwaS5lZGFtYW0uY29tL3NlYXJjaD9xPSR7dHJhbnNsYXRlZEluZ3JlZGllbnR9JmFwcF9pZD0ke2FwaUlkfSZhcHBfa2V5PSR7YXBpS2V5fWBcbiAgICAgICk7XG4gICAgICBzZXRSZWNpcGVzKHJlc3BvbnNlLmRhdGEuaGl0cyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoYXhpb3MuaXNBeGlvc0Vycm9yKGVycikgJiYgZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlIHx8IFwiRXJybyBkZXNjb25oZWNpZG8uXCI7XG4gICAgICAgIHNldEVycm9yKGBFcnJvOiAke21lc3NhZ2V9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRFcnJvcihcIkVycm8gYW8gYnVzY2FyIHJlY2VpdGFzLiBUZW50ZSBub3ZhbWVudGUgbWFpcyB0YXJkZS5cIik7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoKSA9PiB7XG4gICAgaWYgKGluZ3JlZGllbnQudHJpbSgpKSB7XG4gICAgICBmZXRjaFJlY2lwZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXJyb3IoXCJQb3IgZmF2b3IsIGluc2lyYSB1bSBpbmdyZWRpZW50ZS5cIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5CdXNjYWRvciBkZSBSZWNlaXRhczwvaDE+XG4gICAgICA8aW5wdXRcbiAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1bIzlEOUQ5RF1cIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHZhbHVlPXtpbmdyZWRpZW50fVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEluZ3JlZGllbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSB1bSBpbmdyZWRpZW50ZVwiXG4gICAgICAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTZWFyY2h9IGRpc2FibGVkPXtsb2FkaW5nfT5cbiAgICAgICAge2xvYWRpbmcgPyBcIkNhcnJlZ2FuZG8uLi5cIiA6IFwiQnVzY2FyIFJlY2VpdGFzXCJ9XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtlcnJvciAmJiA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT57ZXJyb3J9PC9wPn1cbiAgICAgICAge3JlY2lwZXMubGVuZ3RoID09PSAwICYmICFsb2FkaW5nICYmIDxwPk5lbmh1bWEgcmVjZWl0YSBlbmNvbnRyYWRhLjwvcD59XG4gICAgICAgIHtyZWNpcGVzLm1hcCgoeyByZWNpcGUgfSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPGgzPntyZWNpcGUubGFiZWx9PC9oMz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXtyZWNpcGUuaW1hZ2V9XG4gICAgICAgICAgICAgIGFsdD17cmVjaXBlLmxhYmVsfVxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDBweFwiLCBoZWlnaHQ6IFwiYXV0b1wiIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHA+SW5ncmVkaWVudGVzOiB7cmVjaXBlLmluZ3JlZGllbnRMaW5lcy5qb2luKFwiLCBcIil9PC9wPlxuICAgICAgICAgICAgPGEgaHJlZj17cmVjaXBlLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICBWZXIgUmVjZWl0YVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVjaXBlU2VhcmNoO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiYXhpb3MiLCJpbmdyZWRpZW50RGljdGlvbmFyeSIsIm1hw6fDoyIsImJhbmFuYSIsImxhcmFuamEiLCJtb3JhbmdvIiwiYWJhY2F4aSIsInV2YSIsImxpbcOjbyIsInDDqnNzZWdvIiwidG9tYXRlIiwiY2Vib2xhIiwiYWxobyIsImNlbm91cmEiLCJiYXRhdGEiLCJicsOzY29saXMiLCJlc3BpbmFmcmUiLCJjb3V2ZSIsImFycm96IiwicXVpbm9hIiwiYXZlaWEiLCJtaWxobyIsImZlaWrDo28iLCJmcmFuZ28iLCJwb3JjbyIsInBlaXhlIiwiY2FtYXLDo28iLCJsZWl0ZSIsInF1ZWlqbyIsImlvZ3VydGUiLCJtYW50ZWlnYSIsInNhbCIsInBpbWVudGEiLCJ2aW5hZ3JlIiwibW9zdGFyZGEiLCJhbcOqbmRvYXMiLCJub3plcyIsImxpbmhhw6dhIiwiYcOnw7pjYXIiLCJjaG9jb2xhdGUiLCJtZWwiLCJiYXVuaWxoYSIsImdlbGF0aW5hIiwiUmVjaXBlU2VhcmNoIiwiaW5ncmVkaWVudCIsInNldEluZ3JlZGllbnQiLCJyZWNpcGVzIiwic2V0UmVjaXBlcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImFwaUlkIiwiYXBpS2V5IiwidHJhbnNsYXRlSW5ncmVkaWVudCIsImlucHV0IiwidG9Mb3dlckNhc2UiLCJmZXRjaFJlY2lwZXMiLCJ0cmFuc2xhdGVkSW5ncmVkaWVudCIsInRyaW0iLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJoaXRzIiwiZXJyIiwiaXNBeGlvc0Vycm9yIiwibWVzc2FnZSIsImhhbmRsZVNlYXJjaCIsImRpdiIsImgxIiwiY2xhc3NOYW1lIiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJwIiwic3R5bGUiLCJjb2xvciIsImxlbmd0aCIsIm1hcCIsImluZGV4IiwicmVjaXBlIiwiaDMiLCJsYWJlbCIsImltZyIsInNyYyIsImltYWdlIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJpbmdyZWRpZW50TGluZXMiLCJqb2luIiwiYSIsImhyZWYiLCJ1cmwiLCJyZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/recipeSerch.tsx\n"));

/***/ })

});