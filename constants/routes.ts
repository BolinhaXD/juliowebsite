/**
 * Central route paths for the app. Use these for all navigation links
 * so routes stay consistent (e.g. /portefolio, /portefolio/1).
 */
export const routes = {
  home: "/",
  portefolio: "/portefolio",
  portefolioProject: (id: string | number) => `/portefolio/${id}`,
} as const;
