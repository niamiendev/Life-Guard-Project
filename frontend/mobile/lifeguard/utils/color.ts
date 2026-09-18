// ============================================================
// COLOR PALETTE — DESIGN SYSTEM
// ============================================================

// ------------------------------------------------------------
// PRIMARY COLOR
// ------------------------------------------------------------

export const PRIMARY = {

    /** Emergency red — Primary · CTA · SOS */
    emergencyRed: "#E24B4A",

    /** Light red (tint) — Badges · Tags · Backgrounds — #E24B4A at 15% opacity */
    lightRed: "rgba(226, 75, 74, 0.15)",

    // Palette de teintes (de la plus claire à la plus foncée)
    tints: {
        50: "#FCEBEB",
        100: "#F9D6D6",
        200: "#F2ADAD",
        300: "#EB8585",
        400: "#E45C5C", // ↑ utilisé
        500: "#E24B4A", // couleur de base
        600: "#C43A39",
        700: "#A62B2B",
        800: "#871E1E",
        900: "#501313",
    },

} as const;


// ------------------------------------------------------------
// DARK BACKGROUNDS
// ------------------------------------------------------------

export const DARK_BACKGROUNDS = {

    /** App black — Phone background */
    appBlack: "#0D0D0F",

    /** Surface black — Cards · Inputs */
    surfaceBlack: "#131318",

    /** Intermediate black — Phone frame */
    intermediateBlack: "#181820",

    /** Elevated black — Separators */
    elevatedBlack: "#1E1E28",

    /** Dark gray — Borders · Outlines */
    darkGray: "#2A2A2E",

} as const;


// ------------------------------------------------------------
// TEXT
// ------------------------------------------------------------

export const TEXT = {

    /** Title white — Titles · Names */
    titleWhite: "#F0F0F0",

    /** Secondary white — Body · Values */
    secondaryWhite: "#D0D0D0",

    /** Medium gray — Subtitles */
    mediumGray: "#888888",

    /** Label gray — Labels · Hints */
    labelGray: "#555555",

    /** Subtle gray — Placeholder · Inactive */
    subtleGray: "#444444",

} as const;


// ------------------------------------------------------------
// SEMANTIC COLORS
// ------------------------------------------------------------

export const SEMANTIC = {

    /** Success green — Confirmed · Received · GPS */
    successGreen: "#1D9E75",

    /** Info blue — Police · SAMU · Information */
    infoBlue: "#378ADD",

    /** Warning amber — Firefighters · In progress */
    warningAmber: "#EF9F27",

    /** Secondary purple — Contacts · Profile */
    secondaryPurple: "#7F77DD",

} as const;


// ------------------------------------------------------------
// GLOBAL EXPORT
// ------------------------------------------------------------

export const COLORS = {

    primary: PRIMARY,
    darkBackgrounds: DARK_BACKGROUNDS,
    text: TEXT,
    semantic: SEMANTIC,

} as const;

export type Colors = typeof COLORS;