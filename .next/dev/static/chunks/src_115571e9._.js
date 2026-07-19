(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/custom/MethodSelector.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MethodSelector",
    ()=>MethodSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3X3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-client] (ecmascript) <export default as Grid3X3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/key-round.js [app-client] (ecmascript) <export default as KeyRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeySquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/key-square.js [app-client] (ecmascript) <export default as KeySquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock-keyhole.js [app-client] (ecmascript) <export default as LockKeyhole>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/repeat-2.js [app-client] (ecmascript) <export default as Repeat2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sigma.js [app-client] (ecmascript) <export default as Sigma>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const METHODS = [
    {
        id: 'caesar',
        label: 'Caesar',
        type: 'text',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"],
        description: 'Printable shift ring'
    },
    {
        id: 'vigenere',
        label: 'Vigenere',
        type: 'text',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat2$3e$__["Repeat2"],
        description: 'Repeating key stream'
    },
    {
        id: 'playfair',
        label: 'Playfair',
        type: 'text',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3X3$3e$__["Grid3X3"],
        description: 'Digraph grid cipher'
    },
    {
        id: 'hill',
        label: 'Hill',
        type: 'text',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__["Sigma"],
        description: 'Matrix block cipher'
    },
    {
        id: 'rsa',
        label: 'RSA',
        type: 'file',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeySquare$3e$__["KeySquare"],
        description: 'Asymmetric file lock'
    },
    {
        id: 'aes',
        label: 'AES',
        type: 'file',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__["LockKeyhole"],
        description: 'Symmetric file lock'
    }
];
function buildPlayfairGrid(rawKey) {
    const keyLetters = rawKey.toUpperCase().replace(/[^A-Z]/g, '').replace(/J/g, 'I');
    const seen = new Set();
    const grid = [];
    for (const ch of keyLetters){
        if (!seen.has(ch)) {
            seen.add(ch);
            grid.push(ch);
        }
    }
    for(let c = 65; c <= 90; c++){
        const ch = String.fromCharCode(c);
        if (ch === 'J') continue;
        if (!seen.has(ch)) {
            seen.add(ch);
            grid.push(ch);
        }
    }
    return {
        grid,
        keySet: new Set(keyLetters)
    };
}
const inputBase = 'w-full rounded-xl border border-[var(--panel-border)] bg-black/20 py-2.5 pl-10 pr-4 ' + 'text-sm font-semibold text-[var(--panel-text)] placeholder:text-[var(--panel-text-muted)]/60 ' + 'transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--ring)]';
function KeyInput({ label, value, onChange, type = 'text', placeholder }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: -8
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: -8
        },
        transition: {
            duration: 0.2
        },
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "mb-1.5 block text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/custom/MethodSelector.jsx",
                lineNumber: 58,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__["KeyRound"], {
                        className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--accent)]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/MethodSelector.jsx",
                        lineNumber: 62,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: type,
                        value: value,
                        onChange: (e)=>onChange(e.target.value),
                        placeholder: placeholder,
                        className: inputBase,
                        autoComplete: "off",
                        spellCheck: false
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/MethodSelector.jsx",
                        lineNumber: 63,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/custom/MethodSelector.jsx",
                lineNumber: 61,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/custom/MethodSelector.jsx",
        lineNumber: 51,
        columnNumber: 9
    }, this);
}
_c = KeyInput;
function PlayfairGrid({ rawKey }) {
    _s();
    const { grid, keySet } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlayfairGrid.useMemo": ()=>buildPlayfairGrid(rawKey)
    }["PlayfairGrid.useMemo"], [
        rawKey
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            scale: 0.95
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        exit: {
            opacity: 0,
            scale: 0.95
        },
        transition: {
            duration: 0.25
        },
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]",
                children: [
                    "Polybius Square ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium normal-case tracking-normal text-[var(--text-muted)]/70",
                        children: "(I = J)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/MethodSelector.jsx",
                        lineNumber: 89,
                        columnNumber: 33
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/custom/MethodSelector.jsx",
                lineNumber: 88,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-1",
                style: {
                    gridTemplateColumns: 'repeat(5, minmax(0, 1fr))'
                },
                children: grid.map((letter, idx)=>{
                    const isKey = keySet.has(letter);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        layout: true,
                        transition: {
                            type: 'spring',
                            stiffness: 400,
                            damping: 30
                        },
                        className: `flex aspect-square select-none items-center justify-center rounded-lg border text-sm font-black ${isKey ? 'border-[var(--accent-2)]/60 bg-[var(--accent-2)] text-[#071014] shadow-[0_0_16px_rgba(182,255,92,0.18)]' : 'border-[var(--panel-border)] bg-black/20 text-[var(--panel-text)]'}`,
                        children: letter
                    }, idx, false, {
                        fileName: "[project]/src/components/custom/MethodSelector.jsx",
                        lineNumber: 95,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/custom/MethodSelector.jsx",
                lineNumber: 91,
                columnNumber: 13
            }, this),
            rawKey.trim() !== '' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-xs text-[var(--text-muted)]/80",
                children: "Highlighted cells come from the key; remaining cells fill alphabetically."
            }, void 0, false, {
                fileName: "[project]/src/components/custom/MethodSelector.jsx",
                lineNumber: 107,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/custom/MethodSelector.jsx",
        lineNumber: 81,
        columnNumber: 9
    }, this);
}
_s(PlayfairGrid, "pmGcEZX2j00iqh4opxnufvPKtuA=");
_c1 = PlayfairGrid;
function HillMatrixInput({ value, onChange }) {
    _s1();
    const matrix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HillMatrixInput.useMemo[matrix]": ()=>{
            try {
                const parsed = JSON.parse(value);
                if (Array.isArray(parsed) && Array.isArray(parsed[0])) {
                    return parsed;
                }
            } catch  {
                return [
                    [
                        0,
                        0
                    ],
                    [
                        0,
                        0
                    ]
                ];
            }
            return [
                [
                    0,
                    0
                ],
                [
                    0,
                    0
                ]
            ];
        }
    }["HillMatrixInput.useMemo[matrix]"], [
        value
    ]);
    const size = matrix.length || 2;
    const updateCell = (r, c, val)=>{
        const newMatrix = matrix.map((row)=>[
                ...row
            ]);
        const intVal = parseInt(val, 10);
        newMatrix[r][c] = isNaN(intVal) ? 0 : intVal;
        onChange(JSON.stringify(newMatrix));
    };
    const toggleSize = (newSize)=>{
        if (size === newSize) return;
        const newMatrix = newSize === 2 ? [
            [
                0,
                0
            ],
            [
                0,
                0
            ]
        ] : [
            [
                0,
                0,
                0
            ],
            [
                0,
                0,
                0
            ],
            [
                0,
                0,
                0
            ]
        ];
        onChange(JSON.stringify(newMatrix));
    };
    const generateRandomMatrix = ()=>{
        const gcd = (a, b)=>b === 0 ? a : gcd(b, a % b);
        const getDet2x2 = (m)=>m[0][0] * m[1][1] - m[0][1] * m[1][0];
        const getDet3x3 = (m)=>{
            return m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1]) - m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0]) + m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0]);
        };
        while(true){
            const tempMatrix = [];
            for(let r = 0; r < size; r++){
                const row = [];
                for(let c = 0; c < size; c++){
                    row.push(Math.floor(Math.random() * 26));
                }
                tempMatrix.push(row);
            }
            const det = size === 2 ? getDet2x2(tempMatrix) : getDet3x3(tempMatrix);
            const detMod26 = (det % 26 + 26) % 26;
            if (detMod26 !== 0 && gcd(detMod26, 26) === 1) {
                onChange(JSON.stringify(tempMatrix));
                break;
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: -8
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: -8
        },
        transition: {
            duration: 0.2
        },
        className: "flex w-full flex-col gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]",
                        children: "Hill Matrix Key"
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/MethodSelector.jsx",
                        lineNumber: 184,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1 rounded-lg border border-[var(--panel-border)] bg-black/20 p-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>toggleSize(2),
                                className: `rounded-md px-3 py-1 text-xs font-black transition-colors ${size === 2 ? 'bg-[var(--accent)] text-[#031014]' : 'text-[var(--text-muted)] hover:bg-white/10 hover:text-[var(--text-main)]'}`,
                                children: "2x2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/custom/MethodSelector.jsx",
                                lineNumber: 188,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>toggleSize(3),
                                className: `rounded-md px-3 py-1 text-xs font-black transition-colors ${size === 3 ? 'bg-[var(--accent)] text-[#031014]' : 'text-[var(--text-muted)] hover:bg-white/10 hover:text-[var(--text-main)]'}`,
                                children: "3x3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/custom/MethodSelector.jsx",
                                lineNumber: 194,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/custom/MethodSelector.jsx",
                        lineNumber: 187,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/custom/MethodSelector.jsx",
                lineNumber: 183,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-2",
                style: {
                    gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`
                },
                children: matrix.map((row, r)=>row.map((cell, c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "number",
                            value: cell.toString(),
                            onChange: (e)=>updateCell(r, c, e.target.value),
                            className: "w-full appearance-none rounded-xl border border-[var(--panel-border)] bg-black/20 px-2 py-3 text-center font-mono text-base font-black text-[var(--panel-text)] transition-all duration-200 [appearance:textfield] placeholder:text-[var(--panel-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
                            placeholder: "0"
                        }, `${r}-${c}`, false, {
                            fileName: "[project]/src/components/custom/MethodSelector.jsx",
                            lineNumber: 206,
                            columnNumber: 25
                        }, this)))
            }, void 0, false, {
                fileName: "[project]/src/components/custom/MethodSelector.jsx",
                lineNumber: 203,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: generateRandomMatrix,
                className: "mt-1 flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--panel-border)] bg-black/20 py-2 text-xs font-bold text-[var(--text-muted)] transition-colors hover:border-[var(--accent)]/50 hover:bg-[var(--accent-light)] hover:text-[var(--text-main)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                        className: "h-3.5 w-3.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/MethodSelector.jsx",
                        lineNumber: 222,
                        columnNumber: 17
                    }, this),
                    "Generate Random Key Matrix"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/custom/MethodSelector.jsx",
                lineNumber: 218,
                columnNumber: 13
            }, this)
        ]
    }, "hill", true, {
        fileName: "[project]/src/components/custom/MethodSelector.jsx",
        lineNumber: 175,
        columnNumber: 9
    }, this);
}
_s1(HillMatrixInput, "B7SCPA0akcMrt99EnMjry60K58M=");
_c2 = HillMatrixInput;
function MethodSelector({ selected, onChange, keyValue, onKeyChange, inputType, bruteForce = false, onBruteForceChange, mode = 'encrypt' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full flex-col gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `grid w-full gap-2 ${inputType === 'text' ? 'sm:grid-cols-2 xl:grid-cols-4' : 'sm:grid-cols-2'}`,
                children: METHODS.filter((m)=>m.type === inputType).map((method)=>{
                    const isActive = selected === method.id;
                    const Icon = method.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onChange(method.id),
                        className: `algorithm-card group relative min-h-28 overflow-hidden rounded-lg border p-3 text-left transition-all ${isActive ? 'border-[var(--accent)] bg-[var(--accent)]/[0.08] shadow-[0_0_24px_var(--accent-glow)]' : 'border-[var(--panel-border)] bg-black/20 hover:border-[var(--accent)]/55 hover:bg-[var(--accent)]/[0.04]'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "relative z-10 flex h-full flex-col justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-start justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `hex-icon flex h-9 w-9 items-center justify-center ${isActive ? 'bg-[var(--accent)] text-[#031014]' : 'bg-[var(--accent)]/10 text-[var(--accent)]'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/custom/MethodSelector.jsx",
                                                lineNumber: 245,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/custom/MethodSelector.jsx",
                                            lineNumber: 244,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `h-1.5 w-1.5 rounded-full ${isActive ? 'bg-[var(--accent-2)] shadow-[0_0_10px_var(--accent-2)]' : 'bg-white/15'}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/custom/MethodSelector.jsx",
                                            lineNumber: 247,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/custom/MethodSelector.jsx",
                                    lineNumber: 243,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "block font-mono text-sm text-[var(--text-main)]",
                                            children: method.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/custom/MethodSelector.jsx",
                                            lineNumber: 250,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mt-0.5 block text-[11px] text-[var(--text-muted)]",
                                            children: method.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/custom/MethodSelector.jsx",
                                            lineNumber: 251,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/custom/MethodSelector.jsx",
                                    lineNumber: 249,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.16em] transition-colors ${isActive ? 'text-[var(--accent)]' : 'text-[var(--text-muted)] group-hover:text-[var(--accent)]'}`,
                                    children: [
                                        isActive ? 'Selected' : 'Try it',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "h-3 w-3 transition-transform group-hover:translate-x-0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/custom/MethodSelector.jsx",
                                            lineNumber: 255,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/custom/MethodSelector.jsx",
                                    lineNumber: 253,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/custom/MethodSelector.jsx",
                            lineNumber: 242,
                            columnNumber: 29
                        }, this)
                    }, method.id, false, {
                        fileName: "[project]/src/components/custom/MethodSelector.jsx",
                        lineNumber: 237,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/custom/MethodSelector.jsx",
                lineNumber: 232,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-md px-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: [
                        selected === 'caesar' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KeyInput, {
                                    label: "Caesar Shift",
                                    type: "number",
                                    value: keyValue,
                                    onChange: onKeyChange,
                                    placeholder: "Enter shift number"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/custom/MethodSelector.jsx",
                                    lineNumber: 267,
                                    columnNumber: 29
                                }, this),
                                mode === 'decrypt' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex cursor-pointer select-none items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: !!bruteForce,
                                            onChange: (event)=>onBruteForceChange?.(event.target.checked),
                                            className: "h-4 w-4 cursor-pointer accent-[var(--accent)]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/custom/MethodSelector.jsx",
                                            lineNumber: 276,
                                            columnNumber: 37
                                        }, this),
                                        "Brute Force"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/custom/MethodSelector.jsx",
                                    lineNumber: 275,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, "caesar", true, {
                            fileName: "[project]/src/components/custom/MethodSelector.jsx",
                            lineNumber: 266,
                            columnNumber: 25
                        }, this),
                        selected === 'vigenere' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KeyInput, {
                                label: "Vigenere Key",
                                type: "text",
                                value: keyValue,
                                onChange: onKeyChange,
                                placeholder: "Enter text key"
                            }, void 0, false, {
                                fileName: "[project]/src/components/custom/MethodSelector.jsx",
                                lineNumber: 290,
                                columnNumber: 29
                            }, this)
                        }, "vigenere", false, {
                            fileName: "[project]/src/components/custom/MethodSelector.jsx",
                            lineNumber: 289,
                            columnNumber: 25
                        }, this),
                        selected === 'playfair' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KeyInput, {
                                    label: "Playfair Key",
                                    type: "text",
                                    value: keyValue,
                                    onChange: onKeyChange,
                                    placeholder: "e.g. BOX"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/custom/MethodSelector.jsx",
                                    lineNumber: 302,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayfairGrid, {
                                    rawKey: keyValue ?? ''
                                }, void 0, false, {
                                    fileName: "[project]/src/components/custom/MethodSelector.jsx",
                                    lineNumber: 309,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, "playfair", true, {
                            fileName: "[project]/src/components/custom/MethodSelector.jsx",
                            lineNumber: 301,
                            columnNumber: 25
                        }, this),
                        selected === 'hill' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HillMatrixInput, {
                            value: keyValue,
                            onChange: onKeyChange
                        }, void 0, false, {
                            fileName: "[project]/src/components/custom/MethodSelector.jsx",
                            lineNumber: 314,
                            columnNumber: 25
                        }, this),
                        selected === 'rsa' && (!inputType || inputType === 'text') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KeyInput, {
                                label: "RSA Key",
                                type: "text",
                                value: keyValue,
                                onChange: onKeyChange,
                                placeholder: "Enter RSA key"
                            }, void 0, false, {
                                fileName: "[project]/src/components/custom/MethodSelector.jsx",
                                lineNumber: 319,
                                columnNumber: 29
                            }, this)
                        }, "rsa", false, {
                            fileName: "[project]/src/components/custom/MethodSelector.jsx",
                            lineNumber: 318,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/custom/MethodSelector.jsx",
                    lineNumber: 264,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/custom/MethodSelector.jsx",
                lineNumber: 263,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/custom/MethodSelector.jsx",
        lineNumber: 231,
        columnNumber: 9
    }, this);
}
_c3 = MethodSelector;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "KeyInput");
__turbopack_context__.k.register(_c1, "PlayfairGrid");
__turbopack_context__.k.register(_c2, "HillMatrixInput");
__turbopack_context__.k.register(_c3, "MethodSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/custom/ModeToggle.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModeToggle",
    ()=>ModeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as LockIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UnlockIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock-open.js [app-client] (ecmascript) <export default as UnlockIcon>");
;
;
;
;
function ModeToggle({ mode, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex items-center rounded-full border border-[var(--panel-border)] bg-[var(--control-bg)] p-1 shadow-inner shadow-black/40",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onChange('encrypt'),
                className: `relative z-10 flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-colors sm:px-6 ${mode === 'encrypt' ? 'text-[#031014]' : 'text-[var(--panel-text-muted)] hover:text-[var(--panel-text)]'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockIcon$3e$__["LockIcon"], {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/ModeToggle.jsx",
                        lineNumber: 12,
                        columnNumber: 17
                    }, this),
                    "Encrypt"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/custom/ModeToggle.jsx",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onChange('decrypt'),
                className: `relative z-10 flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-colors sm:px-6 ${mode === 'decrypt' ? 'text-[#031014]' : 'text-[var(--panel-text-muted)] hover:text-[var(--panel-text)]'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UnlockIcon$3e$__["UnlockIcon"], {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/ModeToggle.jsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, this),
                    "Decrypt"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/custom/ModeToggle.jsx",
                lineNumber: 16,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-[var(--accent)] shadow-[0_0_22px_var(--accent-glow)]",
                initial: false,
                animate: {
                    left: mode === 'encrypt' ? '4px' : 'calc(50%)'
                },
                transition: {
                    type: 'spring',
                    stiffness: 400,
                    damping: 30
                }
            }, void 0, false, {
                fileName: "[project]/src/components/custom/ModeToggle.jsx",
                lineNumber: 24,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/custom/ModeToggle.jsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
_c = ModeToggle;
var _c;
__turbopack_context__.k.register(_c, "ModeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/custom/TextPanel.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextPanel",
    ()=>TextPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CopyIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as CopyIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrashIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.js [app-client] (ecmascript) <export default as TrashIcon>");
;
var _s = __turbopack_context__.k.signature();
;
;
function TextPanel({ label, value, onChange, placeholder, readOnly = false, onClear, disabled = false }) {
    _s();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextPanel.useEffect": ()=>{
            if (copied) {
                const timeout = setTimeout({
                    "TextPanel.useEffect.timeout": ()=>setCopied(false)
                }["TextPanel.useEffect.timeout"], 2000);
                return ({
                    "TextPanel.useEffect": ()=>clearTimeout(timeout)
                })["TextPanel.useEffect"];
            }
        }
    }["TextPanel.useEffect"], [
        copied
    ]);
    const handleCopy = async ()=>{
        if (!value) return;
        try {
            await navigator.clipboard.writeText(value);
            setCopied(true);
        } catch (err) {
            console.error('Failed to copy text', err);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `group flex h-full flex-col overflow-hidden rounded-lg border border-[var(--panel-border)] bg-[var(--panel-bg)] shadow-[0_24px_70px_rgba(0,0,0,0.38)] backdrop-blur-xl transition-all duration-300 hover:border-[var(--accent)]/40 ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-3 border-b border-[var(--panel-border)] bg-white/[0.03] px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[var(--panel-text)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_14px_var(--accent-glow)]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/custom/TextPanel.jsx",
                                lineNumber: 36,
                                columnNumber: 21
                            }, this),
                            label
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/custom/TextPanel.jsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            value?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full border border-[var(--panel-border)] bg-black/20 px-2.5 py-1 text-xs text-[var(--panel-text-muted)]",
                                children: [
                                    value.length,
                                    " chars"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/custom/TextPanel.jsx",
                                lineNumber: 41,
                                columnNumber: 25
                            }, this),
                            onClear && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClear,
                                disabled: disabled,
                                className: "rounded-lg p-1.5 text-[var(--panel-text-muted)] transition-colors hover:bg-white/10 hover:text-[var(--error)] disabled:cursor-not-allowed disabled:opacity-50",
                                title: "Clear text",
                                "aria-label": "Clear text",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrashIcon$3e$__["TrashIcon"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/custom/TextPanel.jsx",
                                    lineNumber: 54,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/custom/TextPanel.jsx",
                                lineNumber: 47,
                                columnNumber: 25
                            }, this),
                            readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleCopy,
                                disabled: !value || disabled,
                                className: `flex items-center gap-1.5 rounded-lg p-1.5 transition-colors ${copied ? 'bg-[var(--success)]/10 text-[var(--success)]' : 'text-[var(--panel-text-muted)] hover:bg-white/10 hover:text-[var(--panel-text)] disabled:cursor-not-allowed disabled:opacity-50'}`,
                                title: "Copy to clipboard",
                                "aria-label": "Copy to clipboard",
                                children: [
                                    copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/custom/TextPanel.jsx",
                                        lineNumber: 66,
                                        columnNumber: 39
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CopyIcon$3e$__["CopyIcon"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/custom/TextPanel.jsx",
                                        lineNumber: 66,
                                        columnNumber: 65
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "pr-1 text-xs font-semibold",
                                        children: copied ? 'Copied' : 'Copy'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/custom/TextPanel.jsx",
                                        lineNumber: 67,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/custom/TextPanel.jsx",
                                lineNumber: 59,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/custom/TextPanel.jsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/custom/TextPanel.jsx",
                lineNumber: 34,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex-1 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-4 rounded-lg border border-white/[0.04] bg-[linear-gradient(135deg,rgba(38,246,255,0.05),transparent_45%,rgba(182,255,92,0.04))]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/TextPanel.jsx",
                        lineNumber: 76,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: value,
                        onChange: (e)=>onChange?.(e.target.value),
                        placeholder: disabled ? 'Please enter a key to enable encryption...' : placeholder,
                        readOnly: readOnly,
                        disabled: disabled,
                        className: "relative z-10 h-full min-h-[200px] w-full resize-none bg-transparent p-2 font-mono text-sm leading-6 text-[var(--panel-text)] placeholder:text-[var(--panel-text-muted)]/55 focus:outline-none disabled:cursor-not-allowed",
                        spellCheck: false
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/TextPanel.jsx",
                        lineNumber: 77,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/custom/TextPanel.jsx",
                lineNumber: 75,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/custom/TextPanel.jsx",
        lineNumber: 33,
        columnNumber: 9
    }, this);
}
_s(TextPanel, "tYwv5uTSY0YuYQo/cPrkmqvP85Y=");
_c = TextPanel;
var _c;
__turbopack_context__.k.register(_c, "TextPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/custom/TypeToggle.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TypeToggle",
    ()=>TypeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileTextIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileTextIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file.js [app-client] (ecmascript) <export default as FileIcon>");
;
;
;
;
function TypeToggle({ type, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex items-center rounded-full border border-[var(--panel-border)] bg-[var(--control-bg)] p-1 shadow-inner shadow-black/40",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onChange('text'),
                className: `relative z-10 flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-colors sm:px-6 ${type === 'text' ? 'text-[#031014]' : 'text-[var(--panel-text-muted)] hover:text-[var(--panel-text)]'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileTextIcon$3e$__["FileTextIcon"], {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/TypeToggle.jsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    "Text"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/custom/TypeToggle.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onChange('file'),
                className: `relative z-10 flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-colors sm:px-6 ${type === 'file' ? 'text-[#031014]' : 'text-[var(--panel-text-muted)] hover:text-[var(--panel-text)]'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileIcon$3e$__["FileIcon"], {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/TypeToggle.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    "File"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/custom/TypeToggle.jsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-[var(--accent-2)] shadow-[0_0_22px_rgba(182,255,92,0.24)]",
                initial: false,
                animate: {
                    left: type === 'text' ? '4px' : 'calc(50%)'
                },
                transition: {
                    type: 'spring',
                    stiffness: 400,
                    damping: 30
                }
            }, void 0, false, {
                fileName: "[project]/src/components/custom/TypeToggle.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/custom/TypeToggle.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = TypeToggle;
var _c;
__turbopack_context__.k.register(_c, "TypeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/custom/FilePanel.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilePanel",
    ()=>FilePanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloudIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-upload.js [app-client] (ecmascript) <export default as UploadCloudIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file.js [app-client] (ecmascript) <export default as FileIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DownloadIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as DownloadIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircleIcon>");
;
var _s = __turbopack_context__.k.signature();
;
;
function FilePanel({ variant, label, file, processedFile, onFileSelect, onClear, isProcessing }) {
    _s();
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleDragOver = (e)=>{
        e.preventDefault();
        setIsDragging(true);
    };
    const handleDragLeave = ()=>setIsDragging(false);
    const handleDrop = (e)=>{
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            onFileSelect?.(e.dataTransfer.files[0]);
        }
    };
    const handleFileChange = (e)=>{
        if (e.target.files && e.target.files.length > 0) {
            onFileSelect?.(e.target.files[0]);
        }
    };
    const handleDownload = ()=>{
        if (!processedFile) return;
        const url = URL.createObjectURL(processedFile.blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = processedFile.fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };
    const formatSize = (bytes)=>{
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = [
            'Bytes',
            'KB',
            'MB',
            'GB'
        ];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full flex-col overflow-hidden rounded-lg border border-[var(--panel-border)] bg-[var(--panel-bg)] shadow-[0_24px_70px_rgba(0,0,0,0.38)] backdrop-blur-xl transition-all duration-300 hover:border-[var(--accent)]/40",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-3 border-b border-[var(--panel-border)] bg-white/[0.03] px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[var(--panel-text)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-2 w-2 rounded-full bg-[var(--accent-2)] shadow-[0_0_14px_rgba(182,255,92,0.28)]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/custom/FilePanel.jsx",
                                lineNumber: 62,
                                columnNumber: 21
                            }, this),
                            label
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/custom/FilePanel.jsx",
                        lineNumber: 61,
                        columnNumber: 17
                    }, this),
                    variant === 'upload' && file && onClear && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClear,
                        className: "rounded-lg p-1.5 text-[var(--panel-text-muted)] transition-colors hover:bg-white/10 hover:text-[var(--error)]",
                        title: "Clear file",
                        "aria-label": "Clear file",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/src/components/custom/FilePanel.jsx",
                            lineNumber: 72,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/FilePanel.jsx",
                        lineNumber: 66,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/custom/FilePanel.jsx",
                lineNumber: 60,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex flex-1 flex-col items-center justify-center p-6",
                children: variant === 'upload' ? file ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center space-y-4 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-2 flex h-16 w-16 items-center justify-center rounded-lg border border-[var(--accent)]/30 bg-[var(--accent-light)] text-[var(--accent)] shadow-[0_0_26px_var(--accent-glow)]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileIcon$3e$__["FileIcon"], {
                                size: 32
                            }, void 0, false, {
                                fileName: "[project]/src/components/custom/FilePanel.jsx",
                                lineNumber: 82,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/custom/FilePanel.jsx",
                            lineNumber: 81,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "max-w-[250px] truncate font-semibold text-[var(--panel-text)]",
                                    title: file.name,
                                    children: file.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/custom/FilePanel.jsx",
                                    lineNumber: 85,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm text-[var(--panel-text-muted)]",
                                    children: [
                                        formatSize(file.size),
                                        " locked in buffer"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/custom/FilePanel.jsx",
                                    lineNumber: 88,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/custom/FilePanel.jsx",
                            lineNumber: 84,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/custom/FilePanel.jsx",
                    lineNumber: 80,
                    columnNumber: 25
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-5 text-center transition-all ${isDragging ? 'scale-[0.98] border-[var(--accent)] bg-[var(--accent-light)]' : 'border-[var(--panel-border)] bg-black/10 hover:border-[var(--accent)]/70 hover:bg-white/[0.04]'}`,
                    onDragOver: handleDragOver,
                    onDragLeave: handleDragLeave,
                    onDrop: handleDrop,
                    onClick: ()=>fileInputRef.current?.click(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloudIcon$3e$__["UploadCloudIcon"], {
                            size: 48,
                            className: `mb-4 transition-colors ${isDragging ? 'text-[var(--accent)]' : 'text-[var(--panel-text-muted)]'}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/custom/FilePanel.jsx",
                            lineNumber: 101,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-1 font-semibold text-[var(--panel-text)]",
                            children: "Drop file into the vault"
                        }, void 0, false, {
                            fileName: "[project]/src/components/custom/FilePanel.jsx",
                            lineNumber: 102,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-[var(--panel-text-muted)]",
                            children: "or click to browse"
                        }, void 0, false, {
                            fileName: "[project]/src/components/custom/FilePanel.jsx",
                            lineNumber: 103,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "file",
                            ref: fileInputRef,
                            onChange: handleFileChange,
                            className: "hidden"
                        }, void 0, false, {
                            fileName: "[project]/src/components/custom/FilePanel.jsx",
                            lineNumber: 104,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/custom/FilePanel.jsx",
                    lineNumber: 94,
                    columnNumber: 25
                }, this) : processedFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-full flex-col items-center justify-center space-y-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-20 w-20 items-center justify-center rounded-full border border-[var(--success)]/30 bg-[var(--success)]/10 text-[var(--success)] shadow-[0_0_30px_rgba(100,255,145,0.2)]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleIcon$3e$__["CheckCircleIcon"], {
                                size: 40
                            }, void 0, false, {
                                fileName: "[project]/src/components/custom/FilePanel.jsx",
                                lineNumber: 110,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/custom/FilePanel.jsx",
                            lineNumber: 109,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-1 max-w-[250px] truncate text-lg font-semibold text-[var(--panel-text)]",
                                    title: processedFile.fileName,
                                    children: processedFile.fileName
                                }, void 0, false, {
                                    fileName: "[project]/src/components/custom/FilePanel.jsx",
                                    lineNumber: 113,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-[var(--panel-text-muted)]",
                                    children: formatSize(processedFile.blob.size)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/custom/FilePanel.jsx",
                                    lineNumber: 116,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/custom/FilePanel.jsx",
                            lineNumber: 112,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleDownload,
                            className: "flex items-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-3 font-bold text-[#031014] shadow-[0_0_26px_var(--accent-glow)] transition-all hover:scale-105 hover:bg-[var(--accent-hover)] active:scale-95",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DownloadIcon$3e$__["DownloadIcon"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/components/custom/FilePanel.jsx",
                                    lineNumber: 122,
                                    columnNumber: 29
                                }, this),
                                "Download File"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/custom/FilePanel.jsx",
                            lineNumber: 118,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/custom/FilePanel.jsx",
                    lineNumber: 108,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center text-center opacity-70",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileIcon$3e$__["FileIcon"], {
                            size: 48,
                            className: "mb-4 text-[var(--panel-text-muted)]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/custom/FilePanel.jsx",
                            lineNumber: 128,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-medium text-[var(--panel-text-muted)]",
                            children: isProcessing ? 'Processing secure payload...' : 'Awaiting file output...'
                        }, void 0, false, {
                            fileName: "[project]/src/components/custom/FilePanel.jsx",
                            lineNumber: 129,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/custom/FilePanel.jsx",
                    lineNumber: 127,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/custom/FilePanel.jsx",
                lineNumber: 77,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/custom/FilePanel.jsx",
        lineNumber: 59,
        columnNumber: 9
    }, this);
}
_s(FilePanel, "ICSTOYkc0inD8Xn4CialJ2zzBsY=");
_c = FilePanel;
var _c;
__turbopack_context__.k.register(_c, "FilePanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/custom/CipherVisualizer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CipherVisualizer",
    ()=>CipherVisualizer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CirclePause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-pause.js [app-client] (ecmascript) <export default as CirclePause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CirclePlay$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-play.js [app-client] (ecmascript) <export default as CirclePlay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gauge.js [app-client] (ecmascript) <export default as Gauge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$orbit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Orbit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/orbit.js [app-client] (ecmascript) <export default as Orbit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/route.js [app-client] (ecmascript) <export default as Route>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const PRINTABLE_START = 32;
const PRINTABLE_COUNT = 95;
const ALPHABET = 'ABCDEFGHIKLMNOPQRSTUVWXYZ';
const mod = (value, divisor)=>(value % divisor + divisor) % divisor;
const printableLabel = (char)=>char === ' ' ? 'SPACE' : char;
function parseMatrix(rawKey) {
    try {
        const matrix = JSON.parse(rawKey);
        const valid = Array.isArray(matrix) && [
            2,
            3
        ].includes(matrix.length) && matrix.every((row)=>Array.isArray(row) && row.length === matrix.length && row.every(Number.isFinite));
        return valid ? matrix : null;
    } catch  {
        return null;
    }
}
function determinant(matrix) {
    if (matrix.length === 2) {
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    }
    const [[a, b, c], [d, e, f], [g, h, i]] = matrix;
    return a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
}
function modularInverse(value, modulus) {
    const normalized = mod(value, modulus);
    for(let candidate = 1; candidate < modulus; candidate += 1){
        if (normalized * candidate % modulus === 1) return candidate;
    }
    return null;
}
function adjugate(matrix) {
    if (matrix.length === 2) {
        return [
            [
                matrix[1][1],
                -matrix[0][1]
            ],
            [
                -matrix[1][0],
                matrix[0][0]
            ]
        ];
    }
    const result = Array.from({
        length: 3
    }, ()=>Array(3).fill(0));
    for(let row = 0; row < 3; row += 1){
        for(let column = 0; column < 3; column += 1){
            const minor = matrix.filter((_, rowIndex)=>rowIndex !== row).map((matrixRow)=>matrixRow.filter((_, columnIndex)=>columnIndex !== column));
            const minorDet = minor[0][0] * minor[1][1] - minor[0][1] * minor[1][0];
            result[column][row] = ((row + column) % 2 === 0 ? 1 : -1) * minorDet;
        }
    }
    return result;
}
function inverseKeyMatrix(matrix) {
    const inverseDeterminant = modularInverse(determinant(matrix), 26);
    if (inverseDeterminant === null) return null;
    return adjugate(matrix).map((row)=>row.map((value)=>mod(inverseDeterminant * value, 26)));
}
function buildPlayfairMatrix(rawKey) {
    const key = rawKey.toUpperCase().replace(/J/g, 'I').replace(/[^A-Z]/g, '');
    const seen = new Set();
    const letters = [];
    for (const char of key + ALPHABET){
        if (!seen.has(char)) {
            seen.add(char);
            letters.push(char);
        }
    }
    return Array.from({
        length: 5
    }, (_, row)=>letters.slice(row * 5, row * 5 + 5));
}
function preparePlayfairText(rawText, mode) {
    const clean = [
        ...rawText
    ].filter((char)=>/[A-Za-z]/.test(char)).join('').toUpperCase().replace(/J/g, 'I');
    if (mode === 'decrypt') return clean;
    let prepared = '';
    let index = 0;
    while(index < clean.length){
        const first = clean[index];
        const second = clean[index + 1];
        if (!second || first === second) {
            prepared += `${first}X`;
            index += 1;
        } else {
            prepared += `${first}${second}`;
            index += 2;
        }
    }
    return prepared;
}
function positionOf(matrix, char) {
    for(let row = 0; row < matrix.length; row += 1){
        const column = matrix[row].indexOf(char);
        if (column !== -1) return [
            row,
            column
        ];
    }
    return null;
}
function buildCaesarSteps(text, rawKey, mode) {
    const shift = Number.parseInt(rawKey, 10) || 3;
    const signedShift = mode === 'encrypt' ? shift : -shift;
    return [
        ...text
    ].map((input, index)=>{
        const sourceIndex = mod(input.codePointAt(0) - PRINTABLE_START, PRINTABLE_COUNT);
        const targetIndex = mod(sourceIndex + signedShift, PRINTABLE_COUNT);
        return {
            index,
            input,
            output: String.fromCharCode(targetIndex + PRINTABLE_START),
            sourceIndex,
            targetIndex,
            signedShift,
            explanation: `${mode === 'encrypt' ? 'Add' : 'Subtract'} ${Math.abs(shift)} in the 95-character printable ring.`
        };
    });
}
function buildVigenereSteps(text, key, mode) {
    if (!key) return [];
    const keyCharacters = [
        ...key
    ];
    return [
        ...text
    ].map((input, index)=>{
        const keyChar = keyCharacters[index % keyCharacters.length];
        const keyShift = keyChar.codePointAt(0) - PRINTABLE_START;
        const signedShift = mode === 'encrypt' ? keyShift : -keyShift;
        const sourceIndex = mod(input.codePointAt(0) - PRINTABLE_START, PRINTABLE_COUNT);
        const targetIndex = mod(sourceIndex + signedShift, PRINTABLE_COUNT);
        return {
            index,
            input,
            output: String.fromCharCode(targetIndex + PRINTABLE_START),
            keyChar,
            keyShift,
            sourceIndex,
            targetIndex,
            signedShift,
            explanation: `Key “${printableLabel(keyChar)}” contributes ${keyShift}; ${mode === 'encrypt' ? 'add' : 'subtract'} it modulo 95.`
        };
    });
}
function buildPlayfairSteps(text, key, mode) {
    if (!key) return [];
    const matrix = buildPlayfairMatrix(key);
    const prepared = preparePlayfairText(text, mode);
    const shift = mode === 'encrypt' ? 1 : 4;
    const steps = [];
    for(let index = 0; index + 1 < prepared.length; index += 2){
        const inputPair = prepared.slice(index, index + 2);
        const firstPosition = positionOf(matrix, inputPair[0]);
        const secondPosition = positionOf(matrix, inputPair[1]);
        if (!firstPosition || !secondPosition) continue;
        const [firstRow, firstColumn] = firstPosition;
        const [secondRow, secondColumn] = secondPosition;
        let targetPositions;
        let rule;
        let explanation;
        if (firstRow === secondRow) {
            targetPositions = [
                [
                    firstRow,
                    (firstColumn + shift) % 5
                ],
                [
                    secondRow,
                    (secondColumn + shift) % 5
                ]
            ];
            rule = 'same-row';
            explanation = `Same row: shift ${mode === 'encrypt' ? 'right' : 'left'}, wrapping at the edge.`;
        } else if (firstColumn === secondColumn) {
            targetPositions = [
                [
                    (firstRow + shift) % 5,
                    firstColumn
                ],
                [
                    (secondRow + shift) % 5,
                    secondColumn
                ]
            ];
            rule = 'same-column';
            explanation = `Same column: shift ${mode === 'encrypt' ? 'down' : 'up'}, wrapping at the edge.`;
        } else {
            targetPositions = [
                [
                    firstRow,
                    secondColumn
                ],
                [
                    secondRow,
                    firstColumn
                ]
            ];
            rule = 'rectangle';
            explanation = 'Rectangle: keep each row and take the opposite corner column.';
        }
        steps.push({
            index: steps.length,
            matrix,
            prepared,
            inputPair,
            outputPair: targetPositions.map(([row, column])=>matrix[row][column]).join(''),
            sourcePositions: [
                firstPosition,
                secondPosition
            ],
            targetPositions,
            rule,
            explanation
        });
    }
    return steps;
}
function buildHillSteps(text, rawKey, mode) {
    const keyMatrix = parseMatrix(rawKey);
    if (!keyMatrix) return {
        steps: [],
        error: 'Enter a valid 2x2 or 3x3 numeric key matrix.'
    };
    const matrix = mode === 'decrypt' ? inverseKeyMatrix(keyMatrix) : keyMatrix;
    if (!matrix) return {
        steps: [],
        error: 'This matrix has no modular inverse, so it cannot decrypt modulo 26.'
    };
    const size = matrix.length;
    let prepared = [
        ...text
    ].filter((char)=>/[A-Za-z]/.test(char)).join('').toUpperCase();
    if (mode === 'encrypt') {
        while(prepared.length % size !== 0)prepared += 'X';
    }
    const steps = [];
    for(let index = 0; index + size <= prepared.length; index += size){
        const inputBlock = prepared.slice(index, index + size);
        const vector = [
            ...inputBlock
        ].map((char)=>char.charCodeAt(0) - 65);
        const calculations = matrix.map((row)=>{
            const terms = row.map((value, column)=>value * vector[column]);
            const sum = terms.reduce((total, value)=>total + value, 0);
            return {
                terms,
                sum,
                result: mod(sum, 26)
            };
        });
        steps.push({
            index: steps.length,
            inputBlock,
            outputBlock: calculations.map((item)=>String.fromCharCode(item.result + 65)).join(''),
            vector,
            matrix,
            calculations,
            explanation: `${mode === 'decrypt' ? 'Inverse key' : 'Key'} matrix × ${size}-letter vector, then reduce every row modulo 26.`
        });
    }
    return {
        steps,
        error: ''
    };
}
function buildVisualization(method, text, key, mode) {
    if (!text) return {
        steps: [],
        error: ''
    };
    if (method === 'caesar') return {
        steps: buildCaesarSteps(text, key, mode),
        error: ''
    };
    if (method === 'vigenere') return {
        steps: buildVigenereSteps(text, key, mode),
        error: key ? '' : 'Enter a Vigenere key to begin.'
    };
    if (method === 'playfair') return {
        steps: buildPlayfairSteps(text, key, mode),
        error: key ? '' : 'Enter a Playfair key to build the matrix.'
    };
    if (method === 'hill') return buildHillSteps(text, key, mode);
    return {
        steps: [],
        error: ''
    };
}
function CharacterNode({ label, char, tone = 'neutral' }) {
    const tones = {
        neutral: 'border-white/10 bg-white/[0.03] text-[var(--text-main)]',
        source: 'border-[var(--accent)]/70 bg-[var(--accent)]/10 text-[var(--accent)] shadow-[0_0_22px_var(--accent-glow)]',
        target: 'border-[var(--accent-2)]/70 bg-[var(--accent-2)]/10 text-[var(--accent-2)] shadow-[0_0_22px_rgba(182,255,92,0.14)]'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-w-24 rounded-lg border px-4 py-3 text-center ${tones[tone]}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "block text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                lineNumber: 268,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                className: "mt-1 block font-mono text-2xl",
                children: printableLabel(char)
            }, void 0, false, {
                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                lineNumber: 269,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
        lineNumber: 267,
        columnNumber: 9
    }, this);
}
_c = CharacterNode;
function ShiftDiagram({ step }) {
    const direction = step.signedShift >= 0 ? 'right' : 'left';
    const distance = Math.abs(step.signedShift);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CharacterNode, {
                        label: "Source",
                        char: step.input,
                        tone: "source"
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                        lineNumber: 280,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-w-40 flex-1 items-center gap-2 text-[var(--accent)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-px flex-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] shadow-[0_0_10px_var(--accent-glow)]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                lineNumber: 282,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "whitespace-nowrap rounded-full border border-[var(--accent)]/30 bg-black/20 px-3 py-1 font-mono text-xs",
                                children: [
                                    direction,
                                    " ",
                                    distance
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                lineNumber: 283,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: `h-5 w-5 ${direction === 'left' ? 'rotate-180' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                lineNumber: 286,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                        lineNumber: 281,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CharacterNode, {
                        label: "Result",
                        char: step.output,
                        tone: "target"
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                        lineNumber: 288,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                lineNumber: 279,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Metric, {
                        label: "Source index",
                        value: step.sourceIndex
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                        lineNumber: 291,
                        columnNumber: 17
                    }, this),
                    'keyChar' in step && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Metric, {
                        label: "Key character",
                        value: printableLabel(step.keyChar)
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                        lineNumber: 292,
                        columnNumber: 39
                    }, this),
                    'keyShift' in step && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Metric, {
                        label: "Key shift",
                        value: step.keyShift
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                        lineNumber: 293,
                        columnNumber: 40
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Metric, {
                        label: "Target index",
                        value: step.targetIndex
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                        lineNumber: 294,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                lineNumber: 290,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
        lineNumber: 278,
        columnNumber: 9
    }, this);
}
_c1 = ShiftDiagram;
function Metric({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-l border-[var(--panel-border)] pl-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "block text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                lineNumber: 303,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                className: "mt-1 block font-mono text-lg text-[var(--text-main)]",
                children: value
            }, void 0, false, {
                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                lineNumber: 304,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
        lineNumber: 302,
        columnNumber: 9
    }, this);
}
_c2 = Metric;
function VigenereAlignment({ steps, currentIndex }) {
    const start = Math.max(0, currentIndex - 5);
    const visible = steps.slice(start, start + 11);
    const row = (label, getValue, tone)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-[4.5rem_repeat(var(--visible),minmax(2rem,1fr))] gap-1",
            style: {
                '--visible': visible.length
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "self-center text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                    lineNumber: 314,
                    columnNumber: 13
                }, this),
                visible.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `flex aspect-square min-h-8 items-center justify-center rounded border font-mono text-xs transition-all ${item.index === currentIndex ? tone : 'border-white/10 bg-white/[0.02] text-[var(--text-muted)]'}`,
                        children: printableLabel(getValue(item))
                    }, `${label}-${item.index}`, false, {
                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                        lineNumber: 316,
                        columnNumber: 17
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
            lineNumber: 313,
            columnNumber: 9
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2 overflow-hidden",
        children: [
            row('Input', (item)=>item.input, 'border-[var(--accent)] bg-[var(--accent)]/15 text-[var(--accent)]'),
            row('Key', (item)=>item.keyChar, 'border-[var(--accent-3)] bg-[var(--accent-3)]/15 text-[var(--accent-3)]'),
            row('Output', (item)=>item.index <= currentIndex ? item.output : '·', 'border-[var(--accent-2)] bg-[var(--accent-2)]/15 text-[var(--accent-2)]')
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
        lineNumber: 326,
        columnNumber: 9
    }, this);
}
_c3 = VigenereAlignment;
function PlayfairDiagram({ step }) {
    const samePosition = (position, target)=>position[0] === target[0] && position[1] === target[1];
    const isSource = (position)=>step.sourcePositions.some((target)=>samePosition(position, target));
    const isTarget = (position)=>step.targetPositions.some((target)=>samePosition(position, target));
    const isRuleArea = ([row, column])=>{
        if (step.rule === 'same-row') return row === step.sourcePositions[0][0];
        if (step.rule === 'same-column') return column === step.sourcePositions[0][1];
        return [
            step.sourcePositions[0][0],
            step.sourcePositions[1][0]
        ].includes(row) && [
            step.sourcePositions[0][1],
            step.sourcePositions[1][1]
        ].includes(column);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-5 md:grid-cols-[minmax(15rem,21rem)_1fr] md:items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-5 gap-1.5",
                children: step.matrix.flatMap((row, rowIndex)=>row.map((letter, columnIndex)=>{
                        const position = [
                            rowIndex,
                            columnIndex
                        ];
                        const source = isSource(position);
                        const target = isTarget(position);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex aspect-square items-center justify-center rounded-md border font-mono text-sm font-bold transition-all duration-300 ${target ? 'border-[var(--accent-2)] bg-[var(--accent-2)]/20 text-[var(--accent-2)] shadow-[0_0_18px_rgba(182,255,92,0.18)]' : source ? 'border-[var(--accent)] bg-[var(--accent)]/20 text-[var(--accent)] shadow-[0_0_18px_var(--accent-glow)]' : isRuleArea(position) ? 'border-[var(--accent-3)]/40 bg-[var(--accent-3)]/10 text-[var(--text-main)]' : 'border-white/10 bg-white/[0.02] text-[var(--text-muted)]'}`,
                            children: letter
                        }, `${rowIndex}-${columnIndex}`, false, {
                            fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                            lineNumber: 353,
                            columnNumber: 25
                        }, this);
                    }))
            }, void 0, false, {
                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                lineNumber: 347,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CharacterNode, {
                        label: "Pair",
                        char: step.inputPair,
                        tone: "source"
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                        lineNumber: 363,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__["Route"], {
                        className: "h-6 w-6 text-[var(--accent-3)]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                        lineNumber: 364,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CharacterNode, {
                        label: "Mapped",
                        char: step.outputPair,
                        tone: "target"
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                        lineNumber: 365,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                lineNumber: 362,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
        lineNumber: 346,
        columnNumber: 9
    }, this);
}
_c4 = PlayfairDiagram;
function MatrixGrid({ matrix }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-1",
        style: {
            gridTemplateColumns: `repeat(${matrix.length}, minmax(2.5rem, 1fr))`
        },
        children: matrix.flat().map((value, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex h-10 items-center justify-center border border-[var(--accent)]/25 bg-[var(--accent)]/[0.06] font-mono text-sm text-[var(--accent)]",
                children: value
            }, index, false, {
                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                lineNumber: 375,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
        lineNumber: 373,
        columnNumber: 9
    }, this);
}
_c5 = MatrixGrid;
function VectorGrid({ values, tone = 'source' }) {
    const toneClass = tone === 'target' ? 'border-[var(--accent-2)]/35 bg-[var(--accent-2)]/[0.07] text-[var(--accent-2)]' : 'border-[var(--accent-3)]/35 bg-[var(--accent-3)]/[0.07] text-[var(--accent-3)]';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-1",
        children: values.map((value, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `flex h-10 min-w-12 items-center justify-center border font-mono text-sm ${toneClass}`,
                children: value
            }, index, false, {
                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                lineNumber: 390,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
        lineNumber: 388,
        columnNumber: 9
    }, this);
}
_c6 = VectorGrid;
function HillDiagram({ step }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MatrixGrid, {
                        matrix: step.matrix
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                        lineNumber: 400,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-xl text-[var(--text-muted)]",
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                        lineNumber: 401,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VectorGrid, {
                        values: step.vector
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                        lineNumber: 402,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-xl text-[var(--text-muted)]",
                        children: "≡"
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                        lineNumber: 403,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VectorGrid, {
                        values: step.calculations.map((item)=>item.result),
                        tone: "target"
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                        lineNumber: 404,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-xs text-[var(--text-muted)]",
                        children: "mod 26"
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                        lineNumber: 405,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                lineNumber: 399,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-2 md:grid-cols-3",
                children: step.calculations.map((calculation, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-md border border-white/10 bg-black/20 px-3 py-2 font-mono text-xs text-[var(--text-muted)]",
                        children: [
                            "row ",
                            index + 1,
                            ": ",
                            calculation.terms.join(' + '),
                            " = ",
                            calculation.sum,
                            " → ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--accent-2)]",
                                children: calculation.result
                            }, void 0, false, {
                                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                lineNumber: 410,
                                columnNumber: 96
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                        lineNumber: 409,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                lineNumber: 407,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center font-mono text-sm text-[var(--text-main)]",
                children: [
                    step.inputBlock,
                    " → ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[var(--accent-2)]",
                        children: step.outputBlock
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                        lineNumber: 415,
                        columnNumber: 37
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                lineNumber: 414,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
        lineNumber: 398,
        columnNumber: 9
    }, this);
}
_c7 = HillDiagram;
function CipherVisualizer({ method, text, output, keyValue, mode }) {
    _s();
    const { steps, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CipherVisualizer.useMemo": ()=>buildVisualization(method, text, keyValue, mode)
    }["CipherVisualizer.useMemo"], [
        method,
        text,
        keyValue,
        mode
    ]);
    const [stepIndex, setStepIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [speed, setSpeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(900);
    const currentStep = steps[Math.min(stepIndex, Math.max(0, steps.length - 1))];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CipherVisualizer.useEffect": ()=>{
            if (!isPlaying || steps.length < 2) return undefined;
            const timer = window.setInterval({
                "CipherVisualizer.useEffect.timer": ()=>{
                    setStepIndex({
                        "CipherVisualizer.useEffect.timer": (current)=>{
                            if (current >= steps.length - 1) {
                                setIsPlaying(false);
                                return current;
                            }
                            return current + 1;
                        }
                    }["CipherVisualizer.useEffect.timer"]);
                }
            }["CipherVisualizer.useEffect.timer"], speed);
            return ({
                "CipherVisualizer.useEffect": ()=>window.clearInterval(timer)
            })["CipherVisualizer.useEffect"];
        }
    }["CipherVisualizer.useEffect"], [
        isPlaying,
        speed,
        steps.length
    ]);
    if (![
        'caesar',
        'vigenere',
        'playfair',
        'hill'
    ].includes(method)) return null;
    const previous = ()=>{
        setIsPlaying(false);
        setStepIndex((current)=>Math.max(0, current - 1));
    };
    const next = ()=>{
        setIsPlaying(false);
        setStepIndex((current)=>Math.min(steps.length - 1, current + 1));
    };
    const togglePlay = ()=>{
        if (stepIndex >= steps.length - 1) setStepIndex(0);
        setIsPlaying((current)=>!current);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mt-5 overflow-hidden rounded-lg border border-[var(--panel-border)] bg-[var(--panel-bg)] shadow-[0_0_50px_rgba(0,229,204,0.06)] backdrop-blur-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 border-b border-[var(--panel-border)] px-4 py-4 sm:px-5 lg:flex-row lg:items-center lg:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hex-icon flex h-10 w-10 items-center justify-center bg-[var(--accent)]/15 text-[var(--accent)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$orbit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Orbit$3e$__["Orbit"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                    lineNumber: 465,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                lineNumber: 464,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]",
                                        children: "Live transformation trace"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                        lineNumber: 468,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-mono text-base font-bold capitalize text-[var(--text-main)]",
                                        children: [
                                            method,
                                            " visual lab"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                        lineNumber: 469,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                lineNumber: 467,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                        lineNumber: 463,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: previous,
                                disabled: !currentStep || stepIndex === 0,
                                className: "visual-control",
                                title: "Previous step",
                                "aria-label": "Previous step",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                    lineNumber: 475,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                lineNumber: 474,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: togglePlay,
                                disabled: steps.length < 2,
                                className: "visual-control visual-control-primary",
                                title: isPlaying ? 'Pause autoplay' : 'Start autoplay',
                                "aria-label": isPlaying ? 'Pause autoplay' : 'Start autoplay',
                                children: [
                                    isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CirclePause$3e$__["CirclePause"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                        lineNumber: 478,
                                        columnNumber: 38
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CirclePlay$3e$__["CirclePlay"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                        lineNumber: 478,
                                        columnNumber: 76
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: isPlaying ? 'Pause' : 'Auto play'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                        lineNumber: 479,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                lineNumber: 477,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: next,
                                disabled: !currentStep || stepIndex >= steps.length - 1,
                                className: "visual-control",
                                title: "Next step",
                                "aria-label": "Next step",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                    lineNumber: 482,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                lineNumber: 481,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "ml-1 flex items-center gap-2 text-xs text-[var(--text-muted)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"], {
                                        className: "h-4 w-4 text-[var(--accent-3)]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                        lineNumber: 485,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sr-only",
                                        children: "Autoplay speed"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                        lineNumber: 486,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: "300",
                                        max: "1800",
                                        step: "150",
                                        value: 2100 - speed,
                                        onChange: (event)=>setSpeed(2100 - Number(event.target.value)),
                                        className: "visual-speed",
                                        "aria-label": "Autoplay speed"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                        lineNumber: 487,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                lineNumber: 484,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                        lineNumber: 473,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                lineNumber: 462,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 sm:p-6",
                children: [
                    !text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-9 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-sm text-[var(--text-main)]",
                                children: "Enter text to generate the trace."
                            }, void 0, false, {
                                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                lineNumber: 504,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-xs text-[var(--text-muted)]",
                                children: "The final result still comes from the existing cipher endpoint."
                            }, void 0, false, {
                                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                lineNumber: 505,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                        lineNumber: 503,
                        columnNumber: 21
                    }, this),
                    text && error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-md border border-[var(--error)]/35 bg-[var(--error)]/10 px-4 py-3 text-sm text-[var(--error)]",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                        lineNumber: 510,
                        columnNumber: 21
                    }, this),
                    currentStep && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-[var(--text-main)]",
                                        children: currentStep.explanation
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                        lineNumber: 516,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full border border-[var(--panel-border)] bg-black/20 px-3 py-1 font-mono text-xs text-[var(--text-muted)]",
                                        children: [
                                            "Step ",
                                            Math.min(stepIndex + 1, steps.length),
                                            " / ",
                                            steps.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                        lineNumber: 517,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                lineNumber: 515,
                                columnNumber: 25
                            }, this),
                            (method === 'caesar' || method === 'vigenere') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShiftDiagram, {
                                step: currentStep
                            }, void 0, false, {
                                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                lineNumber: 522,
                                columnNumber: 76
                            }, this),
                            method === 'vigenere' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VigenereAlignment, {
                                steps: steps,
                                currentIndex: stepIndex
                            }, void 0, false, {
                                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                lineNumber: 523,
                                columnNumber: 51
                            }, this),
                            method === 'playfair' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayfairDiagram, {
                                step: currentStep
                            }, void 0, false, {
                                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                lineNumber: 524,
                                columnNumber: 51
                            }, this),
                            method === 'hill' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HillDiagram, {
                                step: currentStep
                            }, void 0, false, {
                                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                lineNumber: 525,
                                columnNumber: 47
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-between gap-3 border-t border-[var(--panel-border)] pt-4 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--text-muted)]",
                                        children: "Server output remains authoritative"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                        lineNumber: 528,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        className: "max-w-full break-all text-[var(--accent-2)]",
                                        children: output || 'processing…'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                        lineNumber: 529,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                                lineNumber: 527,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                        lineNumber: 514,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
                lineNumber: 501,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/custom/CipherVisualizer.jsx",
        lineNumber: 461,
        columnNumber: 9
    }, this);
}
_s(CipherVisualizer, "wDoxEJ9P+VL+AkcnhPSIpitn5gA=");
_c8 = CipherVisualizer;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "CharacterNode");
__turbopack_context__.k.register(_c1, "ShiftDiagram");
__turbopack_context__.k.register(_c2, "Metric");
__turbopack_context__.k.register(_c3, "VigenereAlignment");
__turbopack_context__.k.register(_c4, "PlayfairDiagram");
__turbopack_context__.k.register(_c5, "MatrixGrid");
__turbopack_context__.k.register(_c6, "VectorGrid");
__turbopack_context__.k.register(_c7, "HillDiagram");
__turbopack_context__.k.register(_c8, "CipherVisualizer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/utils/encryptions.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "base64Cipher",
    ()=>base64Cipher,
    "caesarCipher",
    ()=>caesarCipher,
    "getKeyPlaceholder",
    ()=>getKeyPlaceholder,
    "processText",
    ()=>processText,
    "requiresKey",
    ()=>requiresKey,
    "rot13",
    ()=>rot13,
    "runCaesarBruteForce",
    ()=>runCaesarBruteForce,
    "vigenereCipher",
    ()=>vigenereCipher,
    "xorCipher",
    ()=>xorCipher
]);
// Helper: Modulo that works correctly with negative numbers
const mod = (n, m)=>(n % m + m) % m;
const caesarCipher = (text1, shift, mode1)=>{
    const actualShift = mode1 === 'encrypt' ? shift : -shift;
    return text1.replace(/[a-zA-Z]/g, (char)=>{
        const base = char <= 'Z' ? 65 : 97;
        return String.fromCharCode(mod(char.charCodeAt(0) - base + actualShift, 26) + base);
    });
};
const rot13 = (text1)=>{
    return caesarCipher(text1, 13, 'encrypt') // ROT13 is symmetric
    ;
};
const base64Cipher = (text1, mode1)=>{
    try {
        if (mode1 === 'encrypt') {
            // Encode to base64, handling unicode characters properly
            return btoa(encodeURIComponent(text1).replace(/%([0-9A-F]{2})/g, (match, p1)=>String.fromCharCode('0x' + p1)));
        } else {
            // Decode from base64
            if (!text1.trim()) return '';
            return decodeURIComponent(Array.prototype.map.call(atob(text1), (c)=>'%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
        }
    } catch (e) {
        return 'Error: Invalid Base64 input';
    }
};
const vigenereCipher = (tex, key, mod)=>{
    if (!key) return text;
    const cleanKey = key.replace(/[^a-zA-Z]/g, '').toUpperCase();
    if (!cleanKey) return text;
    let keyIndex = 0;
    return text.replace(/[a-zA-Z]/g, (char)=>{
        const isUpper = char <= 'Z';
        const base = isUpper ? 65 : 97;
        const charCode = char.charCodeAt(0) - base;
        const shift = cleanKey.charCodeAt(keyIndex % cleanKey.length) - 65;
        const actualShift = mode === 'encrypt' ? shift : -shift;
        keyIndex++;
        return String.fromCharCode(mod(charCode + actualShift, 26) + base);
    });
};
const xorCipher = (text1, key, mode1)=>{
    if (!key) return text1;
    try {
        let processText = text1;
        // If decrypting, we expect the input to be base64 encoded (from our encryptor)
        if (mode1 === 'decrypt') {
            try {
                processText = atob(text1);
            } catch  {
                return 'Error: Invalid XOR input (expected Base64)';
            }
        }
        let result = '';
        for(let i = 0; i < processText.length; i++){
            result += String.fromCharCode(processText.charCodeAt(i) ^ key.charCodeAt(i % key.length));
        }
        // If encrypting, encode to base64 to ensure printable characters
        if (mode1 === 'encrypt') {
            return btoa(result);
        }
        return result;
    } catch (e) {
        return 'Error processing XOR cipher';
    }
};
const processText = (text1, method, key, mode1)=>{
    if (!text1) return '';
    switch(method){
        case 'caesar':
            const shift = parseInt(key, 10);
            return caesarCipher(text1, isNaN(shift) ? 0 : shift, mode1);
        case 'rot13':
            return rot13(text1);
        case 'base64':
            return base64Cipher(text1, mode1);
        case 'vigenere':
            return vigenereCipher(text1, key, mode1);
        case 'xor':
            return xorCipher(text1, key, mode1);
        default:
            return text1;
    }
};
const requiresKey = (method)=>{
    return [
        'caesar',
        'vigenere',
        'xor'
    ].includes(method);
};
async function runCaesarBruteForce(ciphertext) {
    const response = await fetch('/api/caesar/bruteforce', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: ciphertext || ''
        })
    });
    if (!response.ok) {
        throw new Error(`Brute-force request failed (${response.status})`);
    }
    const data = await response.json();
    return Array.isArray(data?.candidates) ? data.candidates : [];
}
const getKeyPlaceholder = (method)=>{
    switch(method){
        case 'caesar':
            return 'Enter shift number (e.g., 3)';
        case 'vigenere':
            return 'Enter text key (e.g., SECRET)';
        case 'xor':
            return 'Enter encryption key';
        default:
            return '';
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/custom/BruteForcePanel.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BruteForcePanel",
    ()=>BruteForcePanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$to$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownToLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down-to-line.js [app-client] (ecmascript) <export default as ArrowDownToLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as CircleAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/key-round.js [app-client] (ecmascript) <export default as KeyRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$orbit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Orbit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/orbit.js [app-client] (ecmascript) <export default as Orbit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ldrs$2f$dist$2f$react$2f$Quantum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quantum$3e$__ = __turbopack_context__.i("[project]/node_modules/ldrs/dist/react/Quantum.js [app-client] (ecmascript) <export default as Quantum>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$utils$2f$encryptions$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/utils/encryptions.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const ROW_HEIGHT_PX = 56 // fixed row height so 5 rows fit exactly in the scroll area
;
function LoadingState() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center gap-4 py-12 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ldrs$2f$dist$2f$react$2f$Quantum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quantum$3e$__["Quantum"], {
                size: "142",
                speed: "3.1",
                color: "#05fbff"
            }, void 0, false, {
                fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-mono text-sm text-[var(--text-main)]",
                children: "Brute-forcing 26 shifts…"
            }, void 0, false, {
                fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-[var(--text-muted)]",
                children: "Asking the server for every possible key."
            }, void 0, false, {
                fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
                lineNumber: 24,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
_c = LoadingState;
function ErrorState({ message, onRetry }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-3 rounded-md border border-[var(--error)]/40 bg-[var(--error)]/10 px-4 py-6 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleAlert$3e$__["CircleAlert"], {
                className: "h-6 w-6 text-[var(--error)]"
            }, void 0, false, {
                fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
                lineNumber: 34,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-[var(--error)]",
                children: message
            }, void 0, false, {
                fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
                lineNumber: 35,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onRetry,
                className: "rounded-md border border-[var(--panel-border)] bg-black/20 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[var(--text-muted)] transition-colors hover:border-[var(--accent)]/50 hover:text-[var(--accent)]",
                children: "Retry"
            }, void 0, false, {
                fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
                lineNumber: 36,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
        lineNumber: 33,
        columnNumber: 9
    }, this);
}
_c1 = ErrorState;
function EmptyState() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "py-10 text-center font-mono text-sm text-[var(--text-muted)]",
        children: "Enter ciphertext to brute-force."
    }, void 0, false, {
        fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
        lineNumber: 49,
        columnNumber: 9
    }, this);
}
_c2 = EmptyState;
function CandidateRow({ candidate, isEven }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `grid grid-cols-[minmax(8rem,18%)_minmax(0,1fr)] items-center gap-4 px-4 py-3 ${isEven ? 'bg-black/10' : 'bg-transparent'}`,
        style: {
            minHeight: ROW_HEIGHT_PX
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__["KeyRound"], {
                        className: "h-4 w-4 text-[var(--accent-3)]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
                        lineNumber: 62,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-base font-bold text-[var(--accent)]",
                        children: [
                            "Shift ",
                            candidate.shift
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
                        lineNumber: 63,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
                lineNumber: 61,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                title: candidate.plaintext,
                className: "block truncate text-left font-mono text-sm text-[var(--text-main)]",
                children: candidate.plaintext || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[var(--text-muted)]",
                    children: "(empty)"
                }, void 0, false, {
                    fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
                    lineNumber: 71,
                    columnNumber: 41
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
                lineNumber: 67,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
        lineNumber: 57,
        columnNumber: 9
    }, this);
}
_c3 = CandidateRow;
function BruteForcePanel({ ciphertext = '' }) {
    _s();
    const [candidates, setCandidates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [hasRun, setHasRun] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Increment to force a re-fetch (used by the Retry button).
    const [reloadToken, setReloadToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BruteForcePanel.useEffect": ()=>{
            if (!ciphertext) {
                setCandidates([]);
                setError('');
                setIsLoading(false);
                setHasRun(false);
                return undefined;
            }
            let cancelled = false;
            setIsLoading(true);
            setError('');
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$utils$2f$encryptions$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runCaesarBruteForce"])(ciphertext).then({
                "BruteForcePanel.useEffect": (result)=>{
                    if (cancelled) return;
                    setCandidates(result);
                    setHasRun(true);
                }
            }["BruteForcePanel.useEffect"]).catch({
                "BruteForcePanel.useEffect": (err)=>{
                    if (cancelled) return;
                    setCandidates([]);
                    setError(err?.message || 'Unable to reach the brute-force service.');
                    setHasRun(true);
                }
            }["BruteForcePanel.useEffect"]).finally({
                "BruteForcePanel.useEffect": ()=>{
                    if (!cancelled) setIsLoading(false);
                }
            }["BruteForcePanel.useEffect"]);
            return ({
                "BruteForcePanel.useEffect": ()=>{
                    cancelled = true;
                }
            })["BruteForcePanel.useEffect"];
        }
    }["BruteForcePanel.useEffect"], [
        ciphertext,
        reloadToken
    ]);
    const showEmpty = !ciphertext;
    const showLoading = !showEmpty && isLoading;
    const showError = !showEmpty && !isLoading && !!error;
    const showResults = !showEmpty && !isLoading && !error;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mt-5 overflow-hidden rounded-lg border border-[var(--panel-border)] bg-[var(--panel-bg)] shadow-[0_0_50px_rgba(0,229,204,0.06)] backdrop-blur-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 border-b border-[var(--panel-border)] px-4 py-4 sm:px-5 lg:flex-row lg:items-center lg:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hex-icon flex h-10 w-10 items-center justify-center bg-[var(--accent-3)]/15 text-[var(--accent-3)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$orbit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Orbit$3e$__["Orbit"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
                                    lineNumber: 129,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
                                lineNumber: 128,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent-3)]",
                                        children: "All possible keys"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
                                        lineNumber: 132,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-mono text-base font-bold capitalize text-[var(--text-main)]",
                                        children: "Caesar brute force"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
                                        lineNumber: 135,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
                                lineNumber: 131,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
                        lineNumber: 127,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-xs text-[var(--text-muted)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "h-4 w-4 text-[var(--accent-3)]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
                                lineNumber: 142,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono uppercase tracking-[0.16em]",
                                children: hasRun && !showLoading && !showError ? `${candidates.length} candidates` : 'Awaiting ciphertext'
                            }, void 0, false, {
                                fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
                                lineNumber: 143,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
                        lineNumber: 141,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
                lineNumber: 126,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 sm:p-6",
                children: [
                    showEmpty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {}, void 0, false, {
                        fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
                        lineNumber: 152,
                        columnNumber: 31
                    }, this),
                    showLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingState, {}, void 0, false, {
                        fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
                        lineNumber: 153,
                        columnNumber: 33
                    }, this),
                    showError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorState, {
                        message: error,
                        onRetry: ()=>setReloadToken((token)=>token + 1)
                    }, void 0, false, {
                        fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
                        lineNumber: 155,
                        columnNumber: 21
                    }, this),
                    showResults && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 8
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.25
                        },
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between rounded-md border border-[var(--panel-border)] bg-black/20 px-3 py-2 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-2 text-[var(--text-muted)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$to$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownToLine$3e$__["ArrowDownToLine"], {
                                                className: "h-4 w-4 text-[var(--accent-2)]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
                                                lineNumber: 170,
                                                columnNumber: 33
                                            }, this),
                                            "Server returned every candidate at once — scroll to inspect."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
                                        lineNumber: 169,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[var(--text-muted)]",
                                        children: "5 visible"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
                                        lineNumber: 173,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
                                lineNumber: 168,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-y-auto rounded-md border border-[var(--panel-border)] bg-black/15",
                                style: {
                                    maxHeight: ROW_HEIGHT_PX * 5
                                },
                                children: candidates.map((candidate, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CandidateRow, {
                                        candidate: candidate,
                                        isEven: index % 2 === 0
                                    }, candidate.shift, false, {
                                        fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
                                        lineNumber: 183,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
                                lineNumber: 178,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
                        lineNumber: 162,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
                lineNumber: 151,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/custom/BruteForcePanel.jsx",
        lineNumber: 125,
        columnNumber: 9
    }, this);
}
_s(BruteForcePanel, "oMw1VpdA2/0D5DSkHRJugTRytIs=");
_c4 = BruteForcePanel;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "LoadingState");
__turbopack_context__.k.register(_c1, "ErrorState");
__turbopack_context__.k.register(_c2, "EmptyState");
__turbopack_context__.k.register(_c3, "CandidateRow");
__turbopack_context__.k.register(_c4, "BruteForcePanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$custom$2f$MethodSelector$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/custom/MethodSelector.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$custom$2f$ModeToggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/custom/ModeToggle.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$custom$2f$TextPanel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/custom/TextPanel.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$custom$2f$TypeToggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/custom/TypeToggle.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightLeftIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right-left.js [app-client] (ecmascript) <export default as ArrowRightLeftIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BinaryIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/binary.js [app-client] (ecmascript) <export default as BinaryIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRoundIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/key-round.js [app-client] (ecmascript) <export default as KeyRoundIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as PlayIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SparklesIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as SparklesIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$custom$2f$FilePanel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/custom/FilePanel.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$custom$2f$CipherVisualizer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/custom/CipherVisualizer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$custom$2f$BruteForcePanel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/custom/BruteForcePanel.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jszip/lib/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
const CIPHER_CONFIG = {
    caesar: {
        endpoint: "/api/caesar",
        prepareKey: (key)=>parseInt(key, 10) || 3
    },
    vigenere: {
        endpoint: "/api/vigenere",
        prepareKey: (key)=>key
    },
    hill: {
        endpoint: "/api/hillfair-cipher",
        prepareKey: (key)=>{
            try {
                return JSON.parse(key);
            } catch  {
                return [
                    [
                        0,
                        0
                    ],
                    [
                        0,
                        0
                    ]
                ];
            }
        }
    },
    playfair: {
        endpoint: "/api/playfair-cipher",
        prepareKey: (key)=>key.trim()
    }
};
const BIT_SEEDS = [
    '0100110011010010110100101101',
    '1011001010110100101001011010',
    '0010110100101101011010010011',
    '1100100101101001011010010110',
    '0110101100100101101010011010'
];
const binaryColumns = Array.from({
    length: 64
}, (_, index)=>{
    const length = 20 + index * 7 % 25;
    const seed = BIT_SEEDS[index % BIT_SEEDS.length];
    const offset = index * 3 % seed.length;
    const source = seed.repeat(Math.ceil((length + offset) / seed.length) + 1);
    return {
        bits: source.slice(offset, offset + length),
        left: `${(index * 1.61 + index % 5 * 0.19) % 100}%`,
        delay: `-${(index * 1.37 % 12).toFixed(2)}s`,
        duration: `${(6.5 + index % 9 * 0.62).toFixed(2)}s`,
        opacity: (0.16 + index % 6 * 0.055).toFixed(2),
        size: `${(0.58 + index % 4 * 0.055).toFixed(2)}rem`,
        blur: index % 11 === 0 ? '0.9px' : index % 5 === 0 ? '0.35px' : '0px',
        drift: `${(index % 5 - 2) * 7}px`
    };
});
function Home() {
    _s();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('encrypt');
    const [inputType, setInputType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('text');
    const [method, setMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('caesar');
    const [key, setKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('3');
    const [inputText, setInputText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [keyFile, setKeyFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [processedFile, setProcessedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [outputText, setOutputText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [ambientMotion, setAmbientMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [bruteForce, setBruteForce] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleMethodChange = (newMethod)=>{
        setMethod(newMethod);
        if (newMethod === 'caesar') setKey('3');
        else if (newMethod === 'hill') setKey('[[0,0],[0,0]]');
        else setKey('');
        setBruteForce(false);
    };
    const isKeyMissing = [
        'vigenere',
        'playfair',
        'hill',
        'caesar'
    ].includes(method) && (!key || key.trim() === '');
    const handleCipherAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleCipherAction]": async ()=>{
            if (!inputText || isKeyMissing) {
                setOutputText('');
                return;
            }
            const config = CIPHER_CONFIG[method];
            if (!config) return;
            try {
                const payload = {
                    text: inputText,
                    mode: mode
                };
                if (config.prepareKey) {
                    const preparedKey = config.prepareKey(key);
                    if (method === 'caesar') {
                        payload.shift = preparedKey;
                    } else {
                        payload.key = preparedKey;
                    }
                }
                const response = await fetch(config.endpoint, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                let result = data.text;
                if (!result && data.message) {
                    result = data.message.replace(/^(encrypt: |decrypt: )/, '');
                }
                setOutputText(result || '');
            } catch (error) {
                console.error("Cipher Error:", error);
                setOutputText("Error processing text. Check key format.");
            }
        }
    }["Home.useCallback[handleCipherAction]"], [
        inputText,
        key,
        method,
        mode,
        isKeyMissing
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const timer = setTimeout({
                "Home.useEffect.timer": ()=>{
                    handleCipherAction();
                }
            }["Home.useEffect.timer"], 500);
            return ({
                "Home.useEffect": ()=>clearTimeout(timer)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        handleCipherAction
    ]);
    const MAX_FILE_SIZE = 100 * 1024 * 1024;
    const handleFileProcess = async ()=>{
        if (!file) return;
        if (file.size > MAX_FILE_SIZE) {
            alert('File size exceeds the 100MB limit. Please upload a smaller file.');
            return;
        }
        setIsProcessing(true);
        try {
            if ([
                'rsa',
                'aes'
            ].includes(method)) {
                if (mode === 'encrypt') {
                    const formData = new FormData();
                    formData.append('file', file);
                    const endpoint = method === 'rsa' ? 'https://encryption-system-web-1.onrender.com/rsa-file-encrypt' : '/api/aes-file-encrypt';
                    const response = await fetch(endpoint, {
                        method: 'POST',
                        body: formData
                    });
                    if (!response.ok) throw new Error('Encryption failed');
                    const data = await response.json();
                    if (data.encrypted_file) {
                        const encFileBytes = Uint8Array.from(atob(data.encrypted_file), (c)=>c.charCodeAt(0));
                        const extIndex = data.filename.lastIndexOf('.');
                        const originalExt = extIndex !== -1 ? data.filename.substring(extIndex) : '';
                        const baseName = extIndex !== -1 ? data.filename.substring(0, extIndex) : data.filename;
                        const extBytes = new TextEncoder().encode(originalExt);
                        const header = new Uint8Array(2);
                        new DataView(header.buffer).setUint16(0, extBytes.length, true);
                        const encWithHeader = new Uint8Array(header.length + extBytes.length + encFileBytes.length);
                        encWithHeader.set(header, 0);
                        encWithHeader.set(extBytes, 2);
                        encWithHeader.set(encFileBytes, 2 + extBytes.length);
                        if (method === 'rsa' && data.private_key && data.encrypted_aes_key) {
                            const zip = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
                            zip.file(baseName + '.enc', encWithHeader);
                            const keyData = {
                                private_key: data.private_key,
                                encrypted_aes_key: data.encrypted_aes_key
                            };
                            zip.file(baseName + '.key', JSON.stringify(keyData, null, 2));
                            const zipContent = await zip.generateAsync({
                                type: "blob"
                            });
                            setProcessedFile({
                                blob: zipContent,
                                fileName: baseName + '.zip'
                            });
                        } else if (method === 'aes' && data.encrypted_key) {
                            const zip = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
                            zip.file(baseName + '.enc', encWithHeader);
                            zip.file(baseName + '.key', data.encrypted_key);
                            const zipContent = await zip.generateAsync({
                                type: "blob"
                            });
                            setProcessedFile({
                                blob: zipContent,
                                fileName: baseName + '.zip'
                            });
                        } else {
                            const encBlob = new Blob([
                                encWithHeader
                            ], {
                                type: 'application/octet-stream'
                            });
                            setProcessedFile({
                                blob: encBlob,
                                fileName: baseName + '.enc'
                            });
                        }
                    } else {
                        alert("Processed successfully, but no file returned.");
                    }
                } else if (mode === 'decrypt') {
                    if (!keyFile) {
                        alert('Please upload the key file needed for decryption.');
                        setIsProcessing(false);
                        return;
                    }
                    const keyFileContent = await keyFile.text();
                    let keyData = null;
                    let aesKeyString = null;
                    if (method === 'aes') {
                        // AES .key file is a plain base64 string — wrap it so the JSON-parsing
                        // branch below stays uniform.
                        aesKeyString = keyFileContent.trim();
                        keyData = {
                            encrypted_key: aesKeyString
                        };
                    } else {
                        try {
                            keyData = JSON.parse(keyFileContent);
                        } catch (e) {
                            alert('Invalid key file format. Please upload a valid .key file.');
                            setIsProcessing(false);
                            return;
                        }
                    }
                    const encArrayBuffer = await file.arrayBuffer();
                    const encAllBytes = new Uint8Array(encArrayBuffer);
                    const extLength = new DataView(encArrayBuffer).getUint16(0, true);
                    const originalExt = new TextDecoder().decode(encAllBytes.slice(2, 2 + extLength));
                    const rawEncryptedBytes = encAllBytes.slice(2 + extLength);
                    const formData = new FormData();
                    if (method === 'rsa') {
                        const encBlob = new Blob([
                            rawEncryptedBytes
                        ], {
                            type: 'application/octet-stream'
                        });
                        formData.append('encrypted_file', encBlob, 'encrypted.bin');
                        formData.append('encrypted_aes_key', keyData.encrypted_aes_key);
                        formData.append('private_key', keyData.private_key);
                    } else if (method === 'aes') {
                        // Backend expects encrypted_file + encrypted_key as base64 strings,
                        // matching the shape of the encrypt response.
                        let binary = '';
                        for(let i = 0; i < rawEncryptedBytes.length; i++){
                            binary += String.fromCharCode(rawEncryptedBytes[i]);
                        }
                        const encryptedFileB64 = btoa(binary);
                        formData.append('encrypted_file', encryptedFileB64);
                        formData.append('encrypted_key', keyData.encrypted_key);
                        formData.append('filename', file.name.replace(/\.enc$/i, ''));
                    }
                    const endpoint = method === 'rsa' ? 'https://encryption-system-web-1.onrender.com/rsa-file-decrypt' : '/api/aes-file-decrypt';
                    try {
                        const response = await fetch(endpoint, {
                            method: 'POST',
                            body: formData
                        });
                        if (!response.ok) throw new Error('Decryption failed');
                        const data = await response.json();
                        if (data.decrypted_file) {
                            const decFileBytes = Uint8Array.from(atob(data.decrypted_file), (c)=>c.charCodeAt(0));
                            const decBlob = new Blob([
                                decFileBytes
                            ], {
                                type: 'application/octet-stream'
                            });
                            const encBaseName = file.name.replace('.enc', '') || 'decrypted_file';
                            setProcessedFile({
                                blob: decBlob,
                                fileName: encBaseName + originalExt
                            });
                        } else {
                            alert("Decrypted successfully, but no file returned.");
                        }
                    } catch (err) {
                        console.error(err);
                        alert("Error decrypting file.");
                    }
                    setIsProcessing(false);
                }
            }
        } catch (e) {
            console.error("File processing error:", e);
            alert("An error occurred during file processing.");
        }
        setIsProcessing(false);
    };
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 24
            }
        }
    };
    const handleSwap = ()=>{
        setInputText(outputText);
        setMode(mode === 'encrypt' ? 'decrypt' : 'encrypt');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-mode": mode,
        className: "cipher-shell relative min-h-screen overflow-hidden font-sans text-[var(--text-main)]",
        children: [
            ambientMotion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "binary-rain pointer-events-none fixed inset-0 overflow-hidden",
                "aria-hidden": "true",
                children: binaryColumns.map((column, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "binary-stream",
                        style: {
                            left: column.left,
                            animationDelay: column.delay,
                            animationDuration: column.duration,
                            '--stream-opacity': column.opacity,
                            '--stream-size': column.size,
                            '--stream-blur': column.blur,
                            '--stream-drift': column.drift
                        },
                        children: [
                            ...column.bits
                        ].map((bit, bitIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "binary-digit",
                                children: bit
                            }, bitIndex, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 355,
                                columnNumber: 17
                            }, this))
                    }, index, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 341,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 339,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8 lg:py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "grid gap-5 rounded-lg border border-[var(--glass-border)] bg-[var(--glass-bg)] p-5 shadow-[var(--shell-shadow)] backdrop-blur-xl sm:p-7 lg:grid-cols-[1fr_auto] lg:items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-12 w-12 items-center justify-center rounded-lg border border-[var(--accent)]/40 bg-[var(--accent-soft)] text-[var(--accent)] shadow-[0_0_28px_var(--accent-glow)]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheckIcon$3e$__["ShieldCheckIcon"], {
                                                    className: "h-6 w-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 367,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 366,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BinaryIcon$3e$__["BinaryIcon"], {
                                                                className: "h-4 w-4 text-[var(--accent)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.js",
                                                                lineNumber: 371,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Crypto Algorithm Console"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.js",
                                                        lineNumber: 370,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "mt-1 text-4xl font-black text-[var(--text-main)] sm:text-5xl",
                                                        children: "Cipher Studio"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.js",
                                                        lineNumber: 374,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 369,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 365,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "max-w-3xl text-sm leading-6 text-[var(--text-muted)] sm:text-base",
                                        children: "Encrypt text, decrypt messages, and process protected files from one focused control room."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 379,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 364,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 sm:min-w-[360px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setAmbientMotion((current)=>!current),
                                        className: "ml-auto flex items-center gap-2 rounded-md border border-[var(--panel-border)] bg-black/20 px-3 py-2 text-xs font-bold text-[var(--text-muted)] transition-all hover:border-[var(--accent)]/50 hover:text-[var(--accent)]",
                                        "aria-pressed": ambientMotion,
                                        children: ambientMotion ? 'Pause ambient motion' : 'Resume ambient motion'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 385,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-3 gap-3 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-lg border border-[var(--glass-border)] bg-black/20 p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SparklesIcon$3e$__["SparklesIcon"], {
                                                        className: "mx-auto mb-2 h-5 w-5 text-[var(--accent)]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.js",
                                                        lineNumber: 395,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]",
                                                        children: "Mode"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.js",
                                                        lineNumber: 396,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-sm font-bold capitalize",
                                                        children: mode
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.js",
                                                        lineNumber: 397,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 394,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-lg border border-[var(--glass-border)] bg-black/20 p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRoundIcon$3e$__["KeyRoundIcon"], {
                                                        className: "mx-auto mb-2 h-5 w-5 text-[var(--accent-2)]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.js",
                                                        lineNumber: 400,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]",
                                                        children: "Method"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.js",
                                                        lineNumber: 401,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-sm font-bold uppercase",
                                                        children: method
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.js",
                                                        lineNumber: 402,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 399,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-lg border border-[var(--glass-border)] bg-black/20 p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BinaryIcon$3e$__["BinaryIcon"], {
                                                        className: "mx-auto mb-2 h-5 w-5 text-[var(--accent-3)]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.js",
                                                        lineNumber: 405,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]",
                                                        children: "Input"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.js",
                                                        lineNumber: 406,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-sm font-bold capitalize",
                                                        children: inputType
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.js",
                                                        lineNumber: 407,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 404,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 393,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 384,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 363,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-5 rounded-lg border border-[var(--glass-border)] bg-[var(--glass-bg)] p-4 shadow-[var(--shell-shadow)] backdrop-blur-xl sm:p-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-between gap-4 xl:flex-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap justify-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$custom$2f$ModeToggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModeToggle"], {
                                            mode: mode,
                                            onChange: setMode
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 416,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$custom$2f$TypeToggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeToggle"], {
                                            type: inputType,
                                            onChange: (newType)=>{
                                                setInputType(newType);
                                                if (newType === 'text' && [
                                                    'rsa',
                                                    'aes'
                                                ].includes(method)) {
                                                    setMethod('caesar');
                                                } else if (newType === 'file' && ![
                                                    'rsa',
                                                    'aes'
                                                ].includes(method)) {
                                                    setMethod('rsa');
                                                }
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 417,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 415,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$custom$2f$MethodSelector$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MethodSelector"], {
                                    selected: method,
                                    onChange: handleMethodChange,
                                    keyValue: key,
                                    onKeyChange: setKey,
                                    inputType: inputType,
                                    bruteForce: bruteForce,
                                    onBruteForceChange: setBruteForce,
                                    mode: mode
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 426,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 414,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 413,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: itemVariants,
                        initial: "hidden",
                        animate: "show",
                        className: "mt-5 grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-5",
                        children: inputType === 'text' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[400px] lg:h-[500px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$custom$2f$TextPanel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextPanel"], {
                                        label: mode === 'encrypt' ? 'Plaintext' : 'Ciphertext',
                                        value: inputText,
                                        onChange: setInputText,
                                        placeholder: `Enter text to ${mode}...`,
                                        onClear: ()=>setInputText(''),
                                        disabled: isKeyMissing
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 448,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 447,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center items-center py-2 lg:py-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSwap,
                                        disabled: !inputText && !outputText || isKeyMissing,
                                        className: "group rounded-full border border-[var(--accent)]/40 bg-[var(--control-bg)] p-4 text-[var(--accent)] shadow-[0_0_30px_var(--accent-glow)] transition-all hover:scale-105 hover:border-[var(--accent)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100",
                                        title: "Swap input and output",
                                        "aria-label": "Swap input and output",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightLeftIcon$3e$__["ArrowRightLeftIcon"], {
                                            className: "w-6 h-6 lg:rotate-0 rotate-90 transition-transform group-hover:rotate-180 duration-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 466,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 459,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 458,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[400px] lg:h-[500px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$custom$2f$TextPanel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextPanel"], {
                                        label: mode === 'encrypt' ? 'Ciphertext' : 'Plaintext',
                                        value: outputText,
                                        placeholder: "Result will appear here...",
                                        readOnly: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 471,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 470,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-4 h-[400px] lg:h-[500px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: [
                                                'rsa',
                                                'aes'
                                            ].includes(method) && mode === 'decrypt' ? 'h-1/2' : 'h-full',
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$custom$2f$FilePanel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilePanel"], {
                                                variant: "upload",
                                                label: mode === 'encrypt' ? 'File to Encrypt' : 'Encrypted File',
                                                file: file,
                                                onFileSelect: setFile,
                                                onClear: ()=>{
                                                    setFile(null);
                                                    setProcessedFile(null);
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 483,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 482,
                                            columnNumber: 17
                                        }, this),
                                        [
                                            'rsa',
                                            'aes'
                                        ].includes(method) && mode === 'decrypt' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-1/2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$custom$2f$FilePanel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilePanel"], {
                                                variant: "upload",
                                                label: "Key File (.key)",
                                                file: keyFile,
                                                onFileSelect: setKeyFile,
                                                onClear: ()=>setKeyFile(null)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 496,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 495,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 481,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center items-center py-2 lg:py-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleFileProcess,
                                        disabled: !file || [
                                            'rsa',
                                            'aes'
                                        ].includes(method) && mode === 'decrypt' && !keyFile || isProcessing,
                                        className: "group flex flex-col items-center justify-center gap-1 rounded-full border border-[var(--accent)]/40 bg-[var(--control-bg)] p-4 text-[var(--accent)] shadow-[0_0_30px_var(--accent-glow)] transition-all hover:scale-105 hover:border-[var(--accent)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100",
                                        title: "Process File",
                                        "aria-label": "Process File",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayIcon$3e$__["PlayIcon"], {
                                                className: "w-6 h-6 outline-none border-none fill-current"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 515,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold",
                                                children: "Process"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 516,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 508,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 507,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[400px] lg:h-[500px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$custom$2f$FilePanel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilePanel"], {
                                        variant: "download",
                                        label: mode === 'encrypt' ? 'Encrypted File' : 'Decrypted File',
                                        processedFile: processedFile,
                                        isProcessing: isProcessing
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 521,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 520,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 439,
                        columnNumber: 9
                    }, this),
                    inputType === 'text' && (method === 'caesar' && bruteForce && mode === 'decrypt' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$custom$2f$BruteForcePanel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BruteForcePanel"], {
                        ciphertext: inputText
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 534,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$custom$2f$CipherVisualizer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CipherVisualizer"], {
                        method: method,
                        text: inputText,
                        output: outputText,
                        keyValue: key,
                        mode: mode
                    }, `${method}-${mode}-${key}-${inputText}-${bruteForce ? 'bf' : 'trace'}`, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 536,
                        columnNumber: 13
                    }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 362,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 337,
        columnNumber: 5
    }, this);
}
_s(Home, "wIrfOeb2Yui4B+qmXCgLun2Msl8=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_115571e9._.js.map