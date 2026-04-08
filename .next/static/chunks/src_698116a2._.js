(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (param, ref)=>{
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 42,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 6,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 32,
        columnNumber: 37
    }, ("TURBOPACK compile-time value", void 0));
});
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (param, ref)=>{
    let { className, type, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Label;
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Label$React.forwardRef");
__turbopack_context__.k.register(_c1, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/separator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const Separator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (param, ref)=>{
    let { className, orientation = "horizontal", decorative = true, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/separator.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Separator;
Separator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Separator$React.forwardRef");
__turbopack_context__.k.register(_c1, "Separator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FeedbackSearch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeedbackSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-round.js [app-client] (ecmascript) <export default as UserRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hash.js [app-client] (ecmascript) <export default as Hash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const springTransition = {
    type: "spring",
    stiffness: 400,
    damping: 30
};
function getFieldIcon(id, type) {
    if (id.toLowerCase().includes("email") || type === "email") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"];
    if (id.toLowerCase().includes("phone") || type === "tel") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"];
    if (id.toLowerCase().includes("contact") || id.toLowerCase().includes("name")) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__["UserRound"];
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"];
}
function FeedbackSearch(param) {
    let { config } = param;
    _s();
    const [criteria, setCriteria] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const searchFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FeedbackSearch.useMemo[searchFields]": ()=>{
            var _config_feedbackSearchFields;
            if ((_config_feedbackSearchFields = config.feedbackSearchFields) === null || _config_feedbackSearchFields === void 0 ? void 0 : _config_feedbackSearchFields.length) return config.feedbackSearchFields;
            return [
                {
                    id: "contactId",
                    label: "Contact ID",
                    placeholder: "Enter contact reference"
                }
            ];
        }
    }["FeedbackSearch.useMemo[searchFields]"], [
        config.feedbackSearchFields
    ]);
    const fakeResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FeedbackSearch.useMemo[fakeResults]": ()=>{
            if (!submitted) return [];
            return [
                {
                    id: "".concat(config.partnerId.toUpperCase(), "-1001"),
                    name: "Jordan Matthews",
                    status: "Open",
                    detail: "Awaiting consultant follow-up"
                },
                {
                    id: "".concat(config.partnerId.toUpperCase(), "-1042"),
                    name: "Amelia Naidoo",
                    status: "Resolved",
                    detail: "Customer contacted and query resolved"
                },
                {
                    id: "".concat(config.partnerId.toUpperCase(), "-1114"),
                    name: "Thabo Maseko",
                    status: "In Progress",
                    detail: "Assigned to retention team"
                }
            ];
        }
    }["FeedbackSearch.useMemo[fakeResults]"], [
        config.partnerId,
        submitted
    ]);
    const hasAnyCriteria = Object.values(criteria).some((value)=>value.trim());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-semibold tracking-tight text-foreground",
                        children: "Feedback Search"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FeedbackSearch.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground max-w-2xl",
                        children: [
                            "Search for one or more contacts using the identifiers configured for",
                            " ",
                            config.partnerName,
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FeedbackSearch.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FeedbackSearch.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "border-border form-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                className: "text-base",
                                children: "Search Criteria"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FeedbackSearch.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                children: "Enter any combination of the fields below to find matching contacts."
                            }, void 0, false, {
                                fileName: "[project]/src/components/FeedbackSearch.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FeedbackSearch.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-5",
                                children: searchFields.map((field, index)=>{
                                    const Icon = getFieldIcon(field.id, field.type);
                                    var _field_type, _criteria_field_id;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 10
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            ...springTransition,
                                            delay: index * 0.04
                                        },
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: field.id,
                                                className: "text-sm font-medium text-foreground flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        className: "w-3.5 h-3.5 text-muted-foreground"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FeedbackSearch.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 21
                                                    }, this),
                                                    field.label
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/FeedbackSearch.tsx",
                                                lineNumber: 109,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                id: field.id,
                                                type: (_field_type = field.type) !== null && _field_type !== void 0 ? _field_type : "text",
                                                value: (_criteria_field_id = criteria[field.id]) !== null && _criteria_field_id !== void 0 ? _criteria_field_id : "",
                                                placeholder: field.placeholder,
                                                onChange: (event)=>setCriteria((previous)=>({
                                                            ...previous,
                                                            [field.id]: event.target.value
                                                        })),
                                                className: "h-11 bg-card border-border focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FeedbackSearch.tsx",
                                                lineNumber: 116,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, field.id, true, {
                                        fileName: "[project]/src/components/FeedbackSearch.tsx",
                                        lineNumber: 102,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/FeedbackSearch.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        disabled: !hasAnyCriteria,
                                        onClick: ()=>setSubmitted(true),
                                        className: "bg-brand text-brand-foreground hover:opacity-90 btn-press",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "w-4 h-4 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FeedbackSearch.tsx",
                                                lineNumber: 141,
                                                columnNumber: 15
                                            }, this),
                                            "Search"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/FeedbackSearch.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "outline",
                                        onClick: ()=>{
                                            setCriteria({});
                                            setSubmitted(false);
                                        },
                                        children: "Clear"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FeedbackSearch.tsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FeedbackSearch.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FeedbackSearch.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FeedbackSearch.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            submitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "border-border form-container-elevated",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                className: "text-base",
                                children: "Matching Contacts"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FeedbackSearch.tsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                children: "Example results based on the current search criteria."
                            }, void 0, false, {
                                fileName: "[project]/src/components/FeedbackSearch.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FeedbackSearch.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "space-y-4",
                        children: fakeResults.map((result, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    index > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                                        className: "mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FeedbackSearch.tsx",
                                        lineNumber: 169,
                                        columnNumber: 31
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-semibold text-foreground",
                                                                children: result.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/FeedbackSearch.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-muted text-muted-foreground border border-border",
                                                                children: result.status
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/FeedbackSearch.tsx",
                                                                lineNumber: 176,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/FeedbackSearch.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-muted-foreground mono",
                                                        children: result.id
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FeedbackSearch.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: result.detail
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FeedbackSearch.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/FeedbackSearch.tsx",
                                                lineNumber: 171,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "button",
                                                variant: "outline",
                                                size: "sm",
                                                children: "Open Contact"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FeedbackSearch.tsx",
                                                lineNumber: 187,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/FeedbackSearch.tsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, result.id, true, {
                                fileName: "[project]/src/components/FeedbackSearch.tsx",
                                lineNumber: 168,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/FeedbackSearch.tsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FeedbackSearch.tsx",
                lineNumber: 159,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FeedbackSearch.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(FeedbackSearch, "XtmCpespBlX5wm4B9k2CduLIvJQ=");
_c = FeedbackSearch;
var _c;
__turbopack_context__.k.register(_c, "FeedbackSearch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PartnerFooter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PartnerFooter",
    ()=>PartnerFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function PartnerFooter(param) {
    let { config } = param;
    const footer = config.footer;
    var _footer_layout;
    const layout = (_footer_layout = footer === null || footer === void 0 ? void 0 : footer.layout) !== null && _footer_layout !== void 0 ? _footer_layout : "split";
    const showPoweredBy = (footer === null || footer === void 0 ? void 0 : footer.showPoweredBy) !== false;
    var _footer_poweredByLabel;
    const poweredByLabel = (_footer_poweredByLabel = footer === null || footer === void 0 ? void 0 : footer.poweredByLabel) !== null && _footer_poweredByLabel !== void 0 ? _footer_poweredByLabel : "ContactRequest";
    var _footer_logos;
    const logos = (_footer_logos = footer === null || footer === void 0 ? void 0 : footer.logos) !== null && _footer_logos !== void 0 ? _footer_logos : [];
    var _footer_links;
    const links = (_footer_links = footer === null || footer === void 0 ? void 0 : footer.links) !== null && _footer_links !== void 0 ? _footer_links : [
        {
            label: "Privacy",
            type: "privacy"
        },
        {
            label: "Terms",
            type: "terms"
        }
    ];
    const poweredByNode = showPoweredBy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-xs text-muted-foreground",
        children: [
            "Powered by",
            " ",
            (footer === null || footer === void 0 ? void 0 : footer.poweredByUrl) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: footer.poweredByUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "font-medium text-foreground hover:underline underline-offset-2",
                children: poweredByLabel
            }, void 0, false, {
                fileName: "[project]/src/components/PartnerFooter.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-medium text-foreground",
                children: poweredByLabel
            }, void 0, false, {
                fileName: "[project]/src/components/PartnerFooter.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PartnerFooter.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
    const linksNode = links.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-4",
        children: links.map((link)=>link.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: link.url,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-xs text-muted-foreground hover:text-foreground transition-colors",
                children: link.label
            }, link.label, false, {
                fileName: "[project]/src/components/PartnerFooter.tsx",
                lineNumber: 38,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors",
                children: link.label
            }, link.label, false, {
                fileName: "[project]/src/components/PartnerFooter.tsx",
                lineNumber: 48,
                columnNumber: 11
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/PartnerFooter.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
    const logosNode = logos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-3 flex flex-wrap items-center justify-center gap-4",
        children: logos.map((logo)=>{
            const logoTile = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex h-14 min-w-32 items-center justify-center rounded-md border border-border/80 bg-background/70 px-4 py-2.5 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: logo.logoUrl,
                    alt: logo.label,
                    className: "h-8 w-auto max-w-[150px] object-contain",
                    loading: "lazy"
                }, void 0, false, {
                    fileName: "[project]/src/components/PartnerFooter.tsx",
                    lineNumber: 64,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PartnerFooter.tsx",
                lineNumber: 63,
                columnNumber: 11
            }, this);
            return logo.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: logo.url,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "transition-transform duration-150 hover:-translate-y-0.5",
                "aria-label": logo.label,
                children: logoTile
            }, logo.label, false, {
                fileName: "[project]/src/components/PartnerFooter.tsx",
                lineNumber: 74,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-label": logo.label,
                children: logoTile
            }, logo.label, false, {
                fileName: "[project]/src/components/PartnerFooter.tsx",
                lineNumber: 85,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/PartnerFooter.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            logosNode,
            layout === "split" && (poweredByNode || linksNode) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    poweredByNode,
                    linksNode
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PartnerFooter.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, this),
            layout === "centered" && (poweredByNode || linksNode) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-2",
                children: [
                    poweredByNode,
                    linksNode
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PartnerFooter.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, this),
            layout === "links-only" && linksNode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center",
                children: linksNode
            }, void 0, false, {
                fileName: "[project]/src/components/PartnerFooter.tsx",
                lineNumber: 109,
                columnNumber: 9
            }, this),
            (footer === null || footer === void 0 ? void 0 : footer.note) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-[10px] text-muted-foreground/70 leading-relaxed text-center",
                children: footer.note
            }, void 0, false, {
                fileName: "[project]/src/components/PartnerFooter.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_c = PartnerFooter;
var _c;
__turbopack_context__.k.register(_c, "PartnerFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PartnerShell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/themes/dist/esm/components/theme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PartnerFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PartnerFooter.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function toHslComponents(value, fallback) {
    if (!(value === null || value === void 0 ? void 0 : value.trim())) return fallback;
    const trimmed = value.trim();
    // Accept both "hsl(210, 100%, 35%)" and "210 100% 35%".
    if (trimmed.startsWith("hsl(")) {
        return trimmed.slice(4, -1).replace(/,/g, " ").replace(/\s+/g, " ").trim();
    }
    return trimmed;
}
const PartnerShell = (param)=>{
    let { config, children, variant = "form" } = param;
    var _config_logoUrl, _config_bannerUrl;
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PartnerShell.useEffect": ()=>{
            document.documentElement.setAttribute("data-partner", config.partnerId);
            return ({
                "PartnerShell.useEffect": ()=>{
                    document.documentElement.removeAttribute("data-partner");
                }
            })["PartnerShell.useEffect"];
        }
    }["PartnerShell.useEffect"], [
        config.partnerId
    ]);
    const maxWidth = variant === "feedback" ? "max-w-3xl" : "max-w-xl";
    const theme = config.theme;
    const logoUrl = (_config_logoUrl = config.logoUrl) === null || _config_logoUrl === void 0 ? void 0 : _config_logoUrl.trim();
    const bannerUrl = (_config_bannerUrl = config.bannerUrl) === null || _config_bannerUrl === void 0 ? void 0 : _config_bannerUrl.trim();
    const showFormTopBanner = variant === "form" && !!bannerUrl && config.attachBannerToFormTop === true;
    const primary = toHslComponents(theme.primary, "220 14% 20%");
    const primaryForeground = toHslComponents(theme.primaryForeground, "0 0% 100%");
    const radixTheme = theme.radix;
    const shellStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PartnerShell.useMemo[shellStyle]": ()=>({
                "--brand-primary": primary,
                "--brand-primary-foreground": primaryForeground,
                "--primary": primary,
                "--primary-foreground": primaryForeground,
                "--ring": primary,
                "--radius": theme.radius || "0.5rem",
                "--partner-page-background": theme.pageBackground || "var(--accent-2, #f8fafc)",
                "--partner-header-background": theme.headerBackground || "var(--color-panel-translucent, rgba(255,255,255,0.92))",
                "--partner-footer-background": theme.footerBackground || "var(--color-panel-translucent, rgba(255,255,255,0.9))",
                "--partner-card-background": theme.cardBackground || "var(--color-panel-solid, rgba(255,255,255,0.95))",
                "--partner-card-border": theme.cardBorder || "var(--accent-7, rgba(15,23,42,0.1))",
                "--partner-headline-color": theme.headlineColor || "hsl(var(--foreground))",
                "--partner-description-color": theme.descriptionColor || "hsl(var(--muted-foreground))",
                "--partner-body-text-color": theme.bodyTextColor || "hsl(var(--foreground))",
                "--partner-accent-shadow": theme.badgeStyle === "solid" ? "0 14px 28px hsl(".concat(primary, " / 0.2)") : "0 12px 24px hsl(".concat(primary, " / 0.12)"),
                "--partner-badge-background": theme.badgeStyle === "solid" ? "hsl(".concat(primary, ")") : "hsl(".concat(primary, " / 0.86)"),
                "--partner-badge-shadow": theme.badgeStyle === "solid" ? "0 10px 24px hsl(".concat(primary, " / 0.35)") : "0 8px 18px hsl(".concat(primary, " / 0.24)")
            })
    }["PartnerShell.useMemo[shellStyle]"], [
        primary,
        primaryForeground,
        theme.radius,
        theme.pageBackground,
        theme.headerBackground,
        theme.footerBackground,
        theme.cardBackground,
        theme.cardBorder,
        theme.badgeStyle
    ]);
    var _radixTheme_appearance, _radixTheme_accentColor, _radixTheme_grayColor, _radixTheme_radius, _radixTheme_scaling, _radixTheme_panelBackground;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Theme"], {
        appearance: (_radixTheme_appearance = radixTheme === null || radixTheme === void 0 ? void 0 : radixTheme.appearance) !== null && _radixTheme_appearance !== void 0 ? _radixTheme_appearance : "light",
        accentColor: (_radixTheme_accentColor = radixTheme === null || radixTheme === void 0 ? void 0 : radixTheme.accentColor) !== null && _radixTheme_accentColor !== void 0 ? _radixTheme_accentColor : "blue",
        grayColor: (_radixTheme_grayColor = radixTheme === null || radixTheme === void 0 ? void 0 : radixTheme.grayColor) !== null && _radixTheme_grayColor !== void 0 ? _radixTheme_grayColor : "slate",
        radius: (_radixTheme_radius = radixTheme === null || radixTheme === void 0 ? void 0 : radixTheme.radius) !== null && _radixTheme_radius !== void 0 ? _radixTheme_radius : "medium",
        scaling: (_radixTheme_scaling = radixTheme === null || radixTheme === void 0 ? void 0 : radixTheme.scaling) !== null && _radixTheme_scaling !== void 0 ? _radixTheme_scaling : "100%",
        panelBackground: (_radixTheme_panelBackground = radixTheme === null || radixTheme === void 0 ? void 0 : radixTheme.panelBackground) !== null && _radixTheme_panelBackground !== void 0 ? _radixTheme_panelBackground : "translucent",
        asChild: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-svh flex flex-col partner-shell-bg",
            style: shellStyle,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "w-full border-b border-border partner-header-surface",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "".concat(maxWidth, " mx-auto px-6 py-4 flex items-center justify-between"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: logoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: logoUrl,
                                    alt: "".concat(config.partnerName, " logo"),
                                    className: "h-8 w-auto max-w-[180px] object-contain",
                                    loading: "lazy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PartnerShell.tsx",
                                    lineNumber: 129,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-md partner-brand-badge flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-brand-foreground text-sm font-bold",
                                                children: config.partnerName.charAt(0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PartnerShell.tsx",
                                                lineNumber: 138,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PartnerShell.tsx",
                                            lineNumber: 137,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-foreground",
                                            children: config.partnerName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PartnerShell.tsx",
                                            lineNumber: 142,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PartnerShell.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: variant === "feedback" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    asChild: true,
                                    variant: "ghost",
                                    size: "sm",
                                    className: "text-muted-foreground hover:text-foreground gap-1.5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/".concat(config.partnerId),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PartnerShell.tsx",
                                                lineNumber: 157,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs",
                                                children: "Back to Form"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PartnerShell.tsx",
                                                lineNumber: 158,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PartnerShell.tsx",
                                        lineNumber: 156,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PartnerShell.tsx",
                                    lineNumber: 150,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        config.feedback && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            asChild: true,
                                            variant: "outline",
                                            size: "sm",
                                            className: "gap-1.5 text-xs btn-press",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/".concat(config.partnerId, "/feedback"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PartnerShell.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Feedback"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/PartnerShell.tsx",
                                                lineNumber: 170,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PartnerShell.tsx",
                                            lineNumber: 164,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5 text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PartnerShell.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs",
                                                    children: "Secure"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PartnerShell.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PartnerShell.tsx",
                                            lineNumber: 176,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PartnerShell.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PartnerShell.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/PartnerShell.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "flex-1 flex items-start justify-center px-6 py-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full ".concat(maxWidth),
                        children: [
                            variant === "form" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-semibold tracking-tight",
                                        style: {
                                            color: "var(--partner-headline-color)"
                                        },
                                        children: config.headline || "Contact ".concat(config.partnerName)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PartnerShell.tsx",
                                        lineNumber: 191,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    config.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm leading-relaxed",
                                        style: {
                                            color: "var(--partner-description-color)"
                                        },
                                        children: config.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PartnerShell.tsx",
                                        lineNumber: 198,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PartnerShell.tsx",
                                lineNumber: 190,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            variant === "form" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border overflow-hidden partner-card-surface",
                                children: [
                                    showFormTopBanner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-b border-border/80 h-24 md:h-28 w-full bg-center bg-cover bg-no-repeat",
                                        style: {
                                            backgroundImage: "url(".concat(bannerUrl, ")")
                                        },
                                        role: "img",
                                        "aria-label": "".concat(config.partnerName, " banner"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sr-only",
                                            children: "".concat(config.partnerName, " banner")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PartnerShell.tsx",
                                            lineNumber: 216,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PartnerShell.tsx",
                                        lineNumber: 210,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 form-container",
                                        children: children
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PartnerShell.tsx",
                                        lineNumber: 219,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PartnerShell.tsx",
                                lineNumber: 208,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : children
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PartnerShell.tsx",
                        lineNumber: 188,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/PartnerShell.tsx",
                    lineNumber: 187,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "w-full border-t border-border partner-footer-surface",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "".concat(maxWidth, " mx-auto px-6 py-4"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PartnerFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartnerFooter"], {
                            config: config
                        }, void 0, false, {
                            fileName: "[project]/src/components/PartnerShell.tsx",
                            lineNumber: 230,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/PartnerShell.tsx",
                        lineNumber: 229,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/PartnerShell.tsx",
                    lineNumber: 228,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PartnerShell.tsx",
            lineNumber: 118,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/PartnerShell.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PartnerShell, "FIGcnxNz4z4zpy+4f7RTr2OZLCI=");
_c = PartnerShell;
const __TURBOPACK__default__export__ = PartnerShell;
var _c;
__turbopack_context__.k.register(_c, "PartnerShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/partners.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllPartnerIds",
    ()=>getAllPartnerIds,
    "getPartnerConfig",
    ()=>getPartnerConfig,
    "isValidPartner",
    ()=>isValidPartner
]);
const partnerRegistry = {
    absa: {
        partnerId: "absa",
        partnerName: "Absa",
        headline: "Request a call from Absa",
        description: "Fill in your details and one of our consultants will contact you within 24 hours.",
        submitLabel: "Request Contact",
        successMessage: "Thank you! An Absa consultant will reach out to you shortly.",
        settings: {
            vdn: "ABSA001",
            brokerCode: "ABS-BROKER"
        },
        theme: {
            primary: "354 85% 44%",
            primaryForeground: "0 0% 100%",
            radius: "8px",
            radix: {
                accentColor: "crimson",
                grayColor: "mauve",
                radius: "medium",
                scaling: "100%",
                panelBackground: "translucent",
                appearance: "light"
            },
            pageBackground: "#fef2f2",
            headerBackground: "rgba(255,245,245,0.92)",
            footerBackground: "rgba(255,247,247,0.92)",
            cardBackground: "rgba(255,255,255,0.95)",
            cardBorder: "rgba(185,28,28,0.2)",
            badgeStyle: "soft"
        },
        feedback: false,
        feedbackSearchFields: [
            {
                id: "contactId",
                label: "Contact ID",
                placeholder: "e.g. CT10000"
            },
            {
                id: "acc_number",
                label: "Account Number",
                placeholder: "Enter account number"
            },
            {
                id: "phone",
                label: "Phone Number",
                placeholder: "82 000 0000"
            }
        ],
        fields: [],
        sections: [
            {
                id: "personal",
                title: "Personal Details",
                description: "Tell us a little about yourself.",
                fields: [
                    {
                        id: "full_name",
                        type: "text",
                        label: "Full Name",
                        placeholder: "John Doe",
                        width: 12,
                        required: true,
                        validation: {
                            maxLength: 100
                        }
                    },
                    {
                        id: "email",
                        type: "email",
                        label: "Email Address",
                        placeholder: "john@example.com",
                        width: 6,
                        required: true
                    },
                    {
                        id: "phone",
                        type: "tel",
                        label: "Phone Number",
                        placeholder: "82 000 0000",
                        width: 6,
                        required: true,
                        phoneFormat: "split",
                        areaCodePlaceholder: "+27"
                    }
                ]
            },
            {
                id: "account",
                title: "Account Details",
                description: "Help us find your account.",
                fields: [
                    {
                        id: "acc_number",
                        type: "number",
                        label: "Account Number",
                        placeholder: "Enter your account number",
                        width: 6,
                        required: true
                    },
                    {
                        id: "product",
                        type: "select",
                        label: "Product Interest",
                        width: 6,
                        required: true,
                        options: [
                            {
                                label: "Home Loan",
                                value: "home_loan"
                            },
                            {
                                label: "Vehicle Finance",
                                value: "vehicle_finance"
                            },
                            {
                                label: "Personal Loan",
                                value: "personal_loan"
                            },
                            {
                                label: "Credit Card",
                                value: "credit_card"
                            }
                        ]
                    },
                    {
                        id: "message",
                        type: "textarea",
                        label: "Additional Comments",
                        placeholder: "Tell us how we can help...",
                        width: 12,
                        required: false
                    }
                ]
            },
            {
                id: "refer",
                title: "Refer Contacts",
                description: "Add one or more contacts you would like Absa to call. You can add as many as needed.",
                purpose: "refer",
                repeatable: true,
                addEntryLabel: "Add Referred Contact",
                fields: [
                    {
                        id: "firstName",
                        type: "text",
                        label: "First Name",
                        placeholder: "Jane",
                        width: 6,
                        required: true
                    },
                    {
                        id: "surname",
                        type: "text",
                        label: "Surname",
                        placeholder: "Doe",
                        width: 6,
                        required: true
                    },
                    {
                        id: "cellNumber",
                        type: "tel",
                        label: "Mobile Number",
                        placeholder: "82 000 0000",
                        width: 6,
                        required: true,
                        phoneFormat: "split",
                        areaCodePlaceholder: "+27"
                    },
                    {
                        id: "email",
                        type: "email",
                        label: "Email Address",
                        placeholder: "jane@example.com",
                        width: 6,
                        required: false
                    }
                ]
            }
        ],
        termsAndConditions: "Terms and Conditions for Absa Contact Request\n\n1. By submitting this form, you consent to being contacted by an Absa representative.\n2. Your personal information will be processed in accordance with Absa's Privacy Policy.\n3. Absa reserves the right to decline any request at its sole discretion.\n4. All information provided must be accurate and up to date.\n5. Communications may be via phone, email, or SMS based on the contact details you provide.\n6. This service is available to South African residents only.\n7. Absa will not share your information with third parties without your consent.\n8. You may withdraw your consent at any time by contacting Absa directly.",
        footer: {
            showPoweredBy: true,
            layout: "split",
            links: [
                {
                    label: "Privacy Policy",
                    url: "https://www.absa.co.za/legal/privacy-policy/",
                    type: "privacy"
                },
                {
                    label: "Terms of Use",
                    url: "https://www.absa.co.za/legal/terms-of-use/",
                    type: "terms"
                },
                {
                    label: "Contact Us",
                    url: "https://www.absa.co.za/contact-us/",
                    type: "contact"
                }
            ]
        }
    },
    nedbank: {
        partnerId: "nedbank",
        partnerName: "Nedbank",
        headline: "Get in touch with Nedbank",
        description: "Complete the form below and we'll connect you with the right team.",
        submitLabel: "Send Request",
        successMessage: "Your request has been submitted. Nedbank will be in touch soon.",
        settings: {
            vdn: "NED001",
            brokerCode: "NED-BROKER"
        },
        theme: {
            primary: "142 76% 28%",
            primaryForeground: "0 0% 100%",
            radius: "0px",
            radix: {
                accentColor: "green",
                grayColor: "sage",
                radius: "none",
                scaling: "100%",
                panelBackground: "translucent",
                appearance: "light"
            },
            pageBackground: "#f0fdf4",
            headerBackground: "rgba(240,253,244,0.92)",
            footerBackground: "rgba(236,253,245,0.9)",
            cardBackground: "rgba(255,255,255,0.95)",
            cardBorder: "rgba(5,150,105,0.2)",
            badgeStyle: "solid"
        },
        feedback: true,
        feedbackSearchFields: [
            {
                id: "id_number",
                label: "ID Number",
                placeholder: "13-digit SA ID number"
            },
            {
                id: "phone",
                label: "Phone Number",
                placeholder: "82 000 0000"
            },
            {
                id: "email",
                label: "Email Address",
                placeholder: "john@example.com"
            }
        ],
        fields: [],
        sections: [
            {
                id: "personal",
                title: "Personal Information",
                fields: [
                    {
                        id: "first_name",
                        type: "text",
                        label: "First Name",
                        placeholder: "John",
                        width: 6,
                        required: true
                    },
                    {
                        id: "last_name",
                        type: "text",
                        label: "Last Name",
                        placeholder: "Doe",
                        width: 6,
                        required: true
                    },
                    {
                        id: "id_number",
                        type: "text",
                        label: "ID Number",
                        placeholder: "Enter your SA ID",
                        width: 12,
                        required: true,
                        validation: {
                            pattern: "^[0-9]{13}$",
                            message: "Must be a 13-digit SA ID number"
                        }
                    }
                ]
            },
            {
                id: "contact",
                title: "Contact Preferences",
                fields: [
                    {
                        id: "email",
                        type: "email",
                        label: "Email Address",
                        placeholder: "john@example.com",
                        width: 12,
                        required: true
                    },
                    {
                        id: "phone",
                        type: "tel",
                        label: "Contact Number",
                        placeholder: "82 000 0000",
                        width: 6,
                        required: true,
                        phoneFormat: "split",
                        areaCodePlaceholder: "+27"
                    },
                    {
                        id: "preferred_date",
                        type: "date",
                        label: "Preferred Contact Date",
                        width: 6,
                        required: false
                    }
                ]
            },
            {
                id: "refer",
                title: "Refer Contacts",
                description: "Add referred contacts below. Each added contact is submitted as a separate request.",
                purpose: "refer",
                repeatable: true,
                addEntryLabel: "Add Referral",
                fields: [
                    {
                        id: "firstName",
                        type: "text",
                        label: "First Name",
                        placeholder: "Jane",
                        width: 6,
                        required: true
                    },
                    {
                        id: "surname",
                        type: "text",
                        label: "Surname",
                        placeholder: "Doe",
                        width: 6,
                        required: true
                    },
                    {
                        id: "cellNumber",
                        type: "tel",
                        label: "Mobile Number",
                        placeholder: "82 000 0000",
                        width: 6,
                        required: true,
                        phoneFormat: "split",
                        areaCodePlaceholder: "+27"
                    },
                    {
                        id: "email",
                        type: "email",
                        label: "Email Address",
                        placeholder: "jane@example.com",
                        width: 6,
                        required: false
                    }
                ]
            }
        ],
        termsAndConditions: "Terms and Conditions for Nedbank Contact Request\n\n1. By completing this form, you agree to be contacted by a Nedbank advisor.\n2. Your ID number and personal details will be handled in compliance with POPIA.\n3. Nedbank will use the information solely for the purpose of responding to your enquiry.\n4. You confirm that the information provided is true and correct.\n5. Nedbank reserves the right to verify the information submitted.\n6. This form does not constitute an application for any Nedbank product or service.",
        footer: {
            showPoweredBy: true,
            layout: "split",
            links: [
                {
                    label: "Privacy",
                    url: "https://www.nedbank.co.za/content/nedbank/desktop/gt/en/legal/privacy-notice.html",
                    type: "privacy"
                },
                {
                    label: "Terms",
                    url: "https://www.nedbank.co.za/content/nedbank/desktop/gt/en/legal/terms-and-conditions.html",
                    type: "terms"
                }
            ],
            note: "Nedbank Ltd Reg No 1951/000009/06. Authorised Financial Services and Registered Credit Provider (NCRCP16)."
        }
    },
    fnb: {
        partnerId: "fnb",
        partnerName: "FNB",
        headline: "Request a callback from FNB",
        description: "We'd love to hear from you. Fill in your details below.",
        submitLabel: "Request Callback",
        successMessage: "All done! An FNB representative will call you back.",
        settings: {
            vdn: "FNB001",
            brokerCode: "FNB-BROKER"
        },
        theme: {
            primary: "32 95% 44%",
            primaryForeground: "0 0% 100%",
            radius: "12px",
            radix: {
                accentColor: "amber",
                grayColor: "sand",
                radius: "large",
                scaling: "100%",
                panelBackground: "translucent",
                appearance: "light"
            },
            pageBackground: "#fffbeb",
            headerBackground: "rgba(255,251,235,0.92)",
            footerBackground: "rgba(255,251,235,0.9)",
            cardBackground: "rgba(255,255,255,0.95)",
            cardBorder: "rgba(217,119,6,0.2)",
            badgeStyle: "soft"
        },
        feedback: true,
        feedbackSearchFields: [
            {
                id: "phone",
                label: "Phone Number",
                placeholder: "82 000 0000"
            },
            {
                id: "email",
                label: "Email Address",
                placeholder: "you@email.com"
            }
        ],
        fields: [
            {
                id: "full_name",
                type: "text",
                label: "Full Name",
                placeholder: "Your full name",
                width: 12,
                required: true
            },
            {
                id: "email",
                type: "email",
                label: "Email",
                placeholder: "you@email.com",
                width: 6,
                required: true
            },
            {
                id: "phone",
                type: "tel",
                label: "Phone",
                placeholder: "82 000 0000",
                width: 6,
                required: true,
                phoneFormat: "split",
                areaCodePlaceholder: "+27"
            },
            {
                id: "service",
                type: "select",
                label: "Service Required",
                width: 12,
                required: true,
                options: [
                    {
                        label: "Banking",
                        value: "banking"
                    },
                    {
                        label: "Insurance",
                        value: "insurance"
                    },
                    {
                        label: "Investments",
                        value: "investments"
                    }
                ]
            }
        ],
        footer: {
            showPoweredBy: true,
            layout: "centered",
            links: [
                {
                    label: "Privacy",
                    url: "https://www.fnb.co.za/legal/privacy-policy.html",
                    type: "privacy"
                },
                {
                    label: "Terms",
                    url: "https://www.fnb.co.za/legal/terms-and-conditions.html",
                    type: "terms"
                },
                {
                    label: "Contact",
                    url: "https://www.fnb.co.za/contact-us/",
                    type: "contact"
                }
            ],
            note: "FirstRand Bank Ltd (Reg. No. 1929/001225/06). An Authorised Financial Services and Credit Provider (NCRCP20)."
        }
    },
    zapper: {
        partnerId: "zapper",
        partnerName: "Zapper",
        logoUrl: "https://www.zapper.com/wp-content/uploads/2023/08/Zapper-Logo.png",
        bannerUrl: "https://payfast.io/wp-content/uploads/2024/06/Zapper-2.png.webp",
        attachBannerToFormTop: true,
        headline: "Get in touch with Zapper",
        description: "Share your details and a Zapper consultant will contact you shortly.",
        submitLabel: "Submit Request",
        successMessage: "Thank you. Zapper will be in touch soon.",
        settings: {
            vdn: "ZPR001",
            brokerCode: "ZAPPER-BROKER"
        },
        theme: {
            primary: "160 96% 30%",
            primaryForeground: "0 0% 100%",
            radius: "10px",
            radix: {
                accentColor: "jade",
                grayColor: "sage",
                radius: "medium",
                scaling: "100%",
                panelBackground: "translucent",
                appearance: "light"
            },
            pageBackground: "#ecfdf5",
            headerBackground: "rgba(236,253,245,0.95)",
            footerBackground: "rgba(220,252,231,0.94)",
            cardBackground: "rgba(255,255,255,0.96)",
            cardBorder: "rgba(5,150,105,0.24)",
            headlineColor: "#065f46",
            descriptionColor: "#047857",
            badgeStyle: "soft"
        },
        feedback: true,
        feedbackSearchFields: [
            {
                id: "phone",
                label: "Phone Number",
                placeholder: "82 000 0000"
            },
            {
                id: "merchant_name",
                label: "Merchant Name",
                placeholder: "Enter merchant name"
            }
        ],
        fields: [
            {
                id: "full_name",
                type: "text",
                label: "Full Name",
                placeholder: "Jane Doe",
                width: 12,
                required: true
            },
            {
                id: "email",
                type: "email",
                label: "Email Address",
                placeholder: "jane@example.com",
                width: 6,
                required: true
            },
            {
                id: "phone",
                type: "tel",
                label: "Phone Number",
                placeholder: "82 000 0000",
                width: 6,
                required: true,
                phoneFormat: "split",
                areaCodePlaceholder: "+27"
            },
            {
                id: "merchant_name",
                type: "text",
                label: "Merchant Name",
                placeholder: "Your business name",
                width: 6,
                required: false
            },
            {
                id: "message",
                type: "textarea",
                label: "How can we help?",
                placeholder: "Tell us about your enquiry",
                width: 12,
                required: false
            }
        ],
        footer: {
            layout: "centered",
            showPoweredBy: false,
            links: [],
            logos: [
                {
                    label: "Auto & General",
                    logoUrl: "https://www.fanews.co.za/images/cmsimages/big/auto-and-general-logo_news_22198_16419.jpg"
                },
                {
                    label: "Budget",
                    logoUrl: "https://vmsautobody.co.za/wp-content/uploads/2023/10/Budget.png"
                }
            ]
        }
    }
};
function getPartnerConfig(partnerId) {
    return partnerRegistry[partnerId.toLowerCase()] || null;
}
function isValidPartner(partnerId) {
    return partnerId.toLowerCase() in partnerRegistry;
}
function getAllPartnerIds() {
    return Object.keys(partnerRegistry);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/environment.dev.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "environmentDev",
    ()=>environmentDev
]);
const environmentDev = {
    name: "dev",
    baseUrl: "https://partner-connect-dev.example.com",
    enableApiCalls: true
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/environment.local.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "environmentLocal",
    ()=>environmentLocal
]);
const environmentLocal = {
    name: "local",
    baseUrl: "",
    enableApiCalls: true
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/environment.prod.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "environmentProd",
    ()=>environmentProd
]);
const environmentProd = {
    name: "prod",
    baseUrl: "https://partner-connect-prod.example.com",
    enableApiCalls: true
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/environment.sit.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "environmentSit",
    ()=>environmentSit
]);
const environmentSit = {
    name: "sit",
    baseUrl: "https://partner-connect-sit.example.com",
    enableApiCalls: true
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/environment.testing.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "environmentTesting",
    ()=>environmentTesting
]);
const environmentTesting = {
    name: "testing",
    // Testing must use local behavior and should not hit real APIs.
    baseUrl: "",
    enableApiCalls: false
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/environment.uat.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "environmentUat",
    ()=>environmentUat
]);
const environmentUat = {
    name: "uat",
    baseUrl: "https://partner-connect-uat.example.com",
    enableApiCalls: true
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/environment.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "areApiCallsEnabled",
    ()=>areApiCallsEnabled,
    "buildApiUrl",
    ()=>buildApiUrl,
    "getActiveEnvironmentName",
    ()=>getActiveEnvironmentName,
    "getEnvironmentConfig",
    ()=>getEnvironmentConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$environment$2e$dev$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/environment.dev.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$environment$2e$local$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/environment.local.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$environment$2e$prod$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/environment.prod.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$environment$2e$sit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/environment.sit.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$environment$2e$testing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/environment.testing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$environment$2e$uat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/environment.uat.ts [app-client] (ecmascript)");
;
;
;
;
;
;
const environmentMap = {
    local: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$environment$2e$local$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["environmentLocal"],
    dev: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$environment$2e$dev$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["environmentDev"],
    sit: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$environment$2e$sit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["environmentSit"],
    uat: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$environment$2e$uat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["environmentUat"],
    prod: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$environment$2e$prod$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["environmentProd"],
    testing: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$environment$2e$testing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["environmentTesting"]
};
function normalizeEnvironmentName(value) {
    if (!value) {
        // Safe default for local development if no app environment is provided.
        return "local";
    }
    const normalized = value.trim().toLowerCase();
    if (normalized === "local") return "local";
    if (normalized === "dev") return "dev";
    if (normalized === "sit") return "sit";
    if (normalized === "uat") return "uat";
    if (normalized === "prod") return "prod";
    if (normalized === "testing") return "testing";
    return "local";
}
function getActiveEnvironmentName() {
    var _process_env_NEXT_PUBLIC_APP_ENV;
    return normalizeEnvironmentName((_process_env_NEXT_PUBLIC_APP_ENV = ("TURBOPACK compile-time value", "testing")) !== null && _process_env_NEXT_PUBLIC_APP_ENV !== void 0 ? _process_env_NEXT_PUBLIC_APP_ENV : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.APP_ENV);
}
function getEnvironmentConfig() {
    return environmentMap[getActiveEnvironmentName()];
}
function areApiCallsEnabled() {
    return getEnvironmentConfig().enableApiCalls;
}
function buildApiUrl(path) {
    const { baseUrl } = getEnvironmentConfig();
    if (!baseUrl) {
        return path;
    }
    const trimmedBase = baseUrl.replace(/\/+$/, "");
    const normalizedPath = path.startsWith("/") ? path : "/".concat(path);
    return "".concat(trimmedBase).concat(normalizedPath);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/partner-config-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPartnerConfigStore",
    ()=>createPartnerConfigStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$partners$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/partners.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/environment.ts [app-client] (ecmascript)");
;
;
;
const STORAGE_KEY = "contactrequest.local-partners.v1";
function normalizeField(field) {
    return {
        ...field,
        isActive: field.isActive !== false
    };
}
function normalizePartnerConfig(config) {
    var _config_sections;
    const normalizedSections = ((_config_sections = config.sections) !== null && _config_sections !== void 0 ? _config_sections : []).map((section)=>({
            ...section,
            fields: section.fields.map(normalizeField)
        }));
    var _config_fields;
    const normalizedFields = ((_config_fields = config.fields) !== null && _config_fields !== void 0 ? _config_fields : []).map(normalizeField);
    if (normalizedSections.length === 0 && normalizedFields.length > 0) {
        normalizedSections.push({
            id: "main",
            title: "Contact Details",
            fields: normalizedFields
        });
    } else if (normalizedFields.length > 0) {
        const sectionFieldIds = new Set(normalizedSections.flatMap((section)=>section.fields.map((field)=>field.id)));
        const unassigned = normalizedFields.filter((field)=>!sectionFieldIds.has(field.id));
        if (unassigned.length > 0) {
            const mainSection = normalizedSections.find((section)=>section.id === "main") || normalizedSections[0];
            mainSection.fields = [
                ...mainSection.fields,
                ...unassigned
            ];
        }
    }
    return {
        ...config,
        partnerId: normalizePartnerId(config.partnerId),
        isActive: config.isActive !== false,
        fields: normalizedSections.flatMap((section)=>section.fields),
        sections: normalizedSections
    };
}
function normalizePartnerId(partnerId) {
    return partnerId.trim().toLowerCase();
}
function getBasePartners() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$partners$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllPartnerIds"])().map((id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$partners$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPartnerConfig"])(id)).filter((cfg)=>!!cfg).map(normalizePartnerConfig);
}
function mergePartners(base, overrides) {
    const merged = new Map();
    base.forEach((cfg)=>{
        merged.set(normalizePartnerId(cfg.partnerId), cfg);
    });
    overrides.forEach((cfg)=>{
        const normalized = normalizePartnerConfig(cfg);
        merged.set(normalized.partnerId, normalized);
    });
    return Array.from(merged.values());
}
function readLocalPartners() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed;
    } catch (e) {
        return [];
    }
}
function writeLocalPartners(partners) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(partners));
}
class LocalPartnerConfigStore {
    async list() {
        const base = getBasePartners();
        const local = readLocalPartners();
        return mergePartners(base, local);
    }
    async get(partnerId) {
        const id = normalizePartnerId(partnerId);
        const partners = await this.list();
        var _partners_find;
        return (_partners_find = partners.find((cfg)=>normalizePartnerId(cfg.partnerId) === id)) !== null && _partners_find !== void 0 ? _partners_find : null;
    }
    async upsert(config) {
        const id = normalizePartnerId(config.partnerId);
        const local = readLocalPartners();
        const existingIndex = local.findIndex((cfg)=>normalizePartnerId(cfg.partnerId) === id);
        const nextConfig = normalizePartnerConfig({
            ...config,
            partnerId: id
        });
        if (existingIndex >= 0) {
            local[existingIndex] = nextConfig;
        } else {
            local.push(nextConfig);
        }
        writeLocalPartners(local);
    }
}
/**
 * DB-ready adapter contract. Replace endpoint behavior once backend is available.
 */ class ApiPartnerConfigStore {
    async list() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["areApiCallsEnabled"])()) {
            return this.fallback.list();
        }
        try {
            const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildApiUrl"])("/api/partners/config"), {
                method: "GET"
            });
            if (!response.ok) throw new Error("Failed to fetch partner config");
            const payload = await response.json();
            if (!Array.isArray(payload)) throw new Error("Invalid payload shape");
            return payload;
        } catch (e) {
            return this.fallback.list();
        }
    }
    async get(partnerId) {
        const id = normalizePartnerId(partnerId);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["areApiCallsEnabled"])()) {
            return this.fallback.get(id);
        }
        try {
            const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildApiUrl"])("/api/partners/config/".concat(id)), {
                method: "GET"
            });
            if (!response.ok) throw new Error("Partner not found");
            return normalizePartnerConfig(await response.json());
        } catch (e) {
            return this.fallback.get(id);
        }
    }
    async upsert(config) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["areApiCallsEnabled"])()) {
            await this.fallback.upsert(config);
            return;
        }
        try {
            const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildApiUrl"])("/api/partners/config"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(config)
            });
            if (!response.ok) throw new Error("Failed to save partner config");
        } catch (e) {
            await this.fallback.upsert(config);
        }
    }
    constructor(fallback = new LocalPartnerConfigStore()){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "fallback", void 0);
        this.fallback = fallback;
    }
}
function createPartnerConfigStore() {
    let mode = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "auto";
    if (mode === "local") {
        return new LocalPartnerConfigStore();
    }
    if (mode === "api") {
        return new ApiPartnerConfigStore();
    }
    const { baseUrl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnvironmentConfig"])();
    const shouldUseApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["areApiCallsEnabled"])() && baseUrl.trim().length > 0;
    return shouldUseApi ? new ApiPartnerConfigStore() : new LocalPartnerConfigStore();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/usePartnerConfig.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePartnerConfig",
    ()=>usePartnerConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$partner$2d$config$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/partner-config-store.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$partner$2d$config$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPartnerConfigStore"])("local");
function usePartnerConfig() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const [config, setConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePartnerConfig.useEffect": ()=>{
            const partnerId = params.partnerId;
            if (!partnerId) return;
            let cancelled = false;
            const loadConfig = {
                "usePartnerConfig.useEffect.loadConfig": async ()=>{
                    const resolved = await store.get(partnerId);
                    if (cancelled) return;
                    if (!resolved) {
                        router.replace("/unauthorized");
                        return;
                    }
                    if (resolved.isActive === false) {
                        router.replace("/unauthorized");
                        return;
                    }
                    if (options.requireFeedback && !resolved.feedback) {
                        router.replace("/".concat(partnerId));
                        return;
                    }
                    setConfig(resolved);
                }
            }["usePartnerConfig.useEffect.loadConfig"];
            loadConfig();
            return ({
                "usePartnerConfig.useEffect": ()=>{
                    cancelled = true;
                }
            })["usePartnerConfig.useEffect"];
        }
    }["usePartnerConfig.useEffect"], [
        params.partnerId,
        router,
        options.requireFeedback
    ]);
    return config;
}
_s(usePartnerConfig, "JojJ3/f11eaEgjqYYkJgyKeh8KU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/partner/PartnerFeedbackPageClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PartnerFeedbackPageClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeedbackSearch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FeedbackSearch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PartnerShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PartnerShell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePartnerConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePartnerConfig.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PartnerFeedbackPageClient() {
    _s();
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePartnerConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePartnerConfig"])({
        requireFeedback: true
    });
    if (!config) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PartnerShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        config: config,
        variant: "feedback",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeedbackSearch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            config: config
        }, void 0, false, {
            fileName: "[project]/src/components/partner/PartnerFeedbackPageClient.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/partner/PartnerFeedbackPageClient.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(PartnerFeedbackPageClient, "g8HsDhPxwN92Nr9U/ovVZUHvxIo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePartnerConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePartnerConfig"]
    ];
});
_c = PartnerFeedbackPageClient;
var _c;
__turbopack_context__.k.register(_c, "PartnerFeedbackPageClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_698116a2._.js.map