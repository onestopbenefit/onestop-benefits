/* ===========================================================
   Onestop Benefits — line icon set
   24x24, stroke currentColor, minimal & geometric.
   =========================================================== */

const S = ({ children }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true"
       stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

/* ---- product icons ---- */
export const IcAuto = () => <S><path d="M3 13l1.5-4.2A2 2 0 0 1 6.4 7.5h11.2a2 2 0 0 1 1.9 1.3L21 13"/><path d="M3 13h18v4a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-1H6.5v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><circle cx="6.5" cy="15.5" r="0.6"/><circle cx="17.5" cy="15.5" r="0.6"/></S>;
export const IcHome = () => <S><path d="M4 11.5L12 5l8 6.5"/><path d="M6 10.5V19h12v-8.5"/><path d="M10.5 19v-4.5h3V19"/></S>;
export const IcRenters = () => <S><rect x="5" y="4" width="14" height="16" rx="1.4"/><path d="M9 8h2M9 12h2M13 8h2M13 12h2M9 16h6"/></S>;
export const IcLife = () => <S><path d="M12 20s-6.5-4.2-8.4-8.2C2.2 9 3.5 5.8 6.6 5.8c1.9 0 3.1 1.1 3.9 2.3l1.5 2.2"/><path d="M12 20s6.5-4.2 8.4-8.2c1.4-2.8.1-6-3-6-1.9 0-3.1 1.1-3.9 2.3"/></S>;
export const IcBusiness = () => <S><rect x="3.5" y="8" width="17" height="11" rx="1.6"/><path d="M9 8V6.5A1.5 1.5 0 0 1 10.5 5h3A1.5 1.5 0 0 1 15 6.5V8"/><path d="M3.5 13h17"/></S>;
export const IcCondo = () => <S><rect x="6" y="3.5" width="12" height="17" rx="1.2"/><path d="M9 7h1.5M9 10.5h1.5M9 14h1.5M13.5 7H15M13.5 10.5H15M13.5 14H15"/><path d="M9.5 20.5v-3h5v3"/></S>;
export const IcUmbrella = () => <S><path d="M12 4v1"/><path d="M3.5 12a8.5 8.5 0 0 1 17 0z"/><path d="M12 12v5.5a2 2 0 0 1-4 0"/></S>;
export const IcBundle = () => <S><path d="M12 3l8 4.2-8 4.2-8-4.2z"/><path d="M4 12l8 4.2 8-4.2"/><path d="M4 16.3l8 4.2 8-4.2"/></S>;
export const IcBundle2 = () => <S><rect x="4" y="4" width="11" height="11" rx="1.6"/><rect x="9" y="9" width="11" height="11" rx="1.6" fill="#fff"/></S>;
export const IcMoto = () => <S><circle cx="5.5" cy="15.5" r="3"/><circle cx="18.5" cy="15.5" r="3"/><path d="M5.5 15.5l3.5-5h4l2 5"/><path d="M9 10.5h5.5l1.5 2.5M11 7.5h3"/></S>;
export const IcFinancial = () => <S><path d="M4 20h16"/><path d="M7 16l3.5-4 3 2.5L20 7"/><path d="M16 7h4v4"/></S>;

/* ---- UI icons ---- */
export const IcShield = () => <S><path d="M12 3l7 2.5v5c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9v-5z"/><path d="M9 12l2 2 4-4"/></S>;
export const IcPhone = () => <S><path d="M5 4h3l1.4 4-2 1.4a11 11 0 0 0 5.2 5.2L14 13l4 1.4V17a2 2 0 0 1-2 2A13 13 0 0 1 3 6a2 2 0 0 1 2-2z"/></S>;
export const IcText = () => <S><path d="M5 5h14a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 19 16H9l-4 3.5V16H5a1.5 1.5 0 0 1-1.5-1.5v-8A1.5 1.5 0 0 1 5 5z"/><path d="M8.5 9.5h7M8.5 12.5h4"/></S>;
export const IcMail = () => <S><rect x="3.5" y="5.5" width="17" height="13" rx="1.6"/><path d="M4 7l8 5.5L20 7"/></S>;
export const IcPin = () => <S><path d="M12 21c4-4 7-6.9 7-10.5A7 7 0 0 0 5 10.5C5 14.1 8 17 12 21z"/><circle cx="12" cy="10.5" r="2.4"/></S>;
export const IcClock = () => <S><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 1.8"/></S>;
export const IcCheck = () => <S><path d="M5 12.5l4.5 4.5L19 6.5"/></S>;
export const IcCheckBig = () => <svg viewBox="0 0 24 24" width="36" height="36" fill="none" aria-hidden="true" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 6.5"/></svg>;
export const IcChevron = () => <S><path d="M6 9l6 6 6-6"/></S>;
export const IcPlus = () => <S><path d="M12 5v14M5 12h14"/></S>;
export const IcArrow = () => <S><path d="M5 12h14M13 6l6 6-6 6"/></S>;
export const IcClose = () => <S><path d="M6 6l12 12M18 6L6 18"/></S>;
export const IcMenu = () => <S><path d="M4 7h16M4 12h16M4 17h16"/></S>;
export const IcHandshake = () => <S><path d="M3 9l3-2 4 3 2-1 2 1 4-3 3 2"/><path d="M6 7v7l4 3 2-1 2 1 4-3V7"/><path d="M10 10l2 2 2-2"/></S>;
export const IcLock = () => <S><rect x="5.5" y="10.5" width="13" height="9" rx="1.6"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/></S>;
export const IcCal = () => <S><rect x="4" y="5.5" width="16" height="14" rx="1.6"/><path d="M4 9.5h16M8 3.5v3M16 3.5v3"/></S>;
export const IcUser = () => <S><circle cx="12" cy="8.5" r="3.4"/><path d="M5.5 19.5a6.5 6.5 0 0 1 13 0"/></S>;
export const IcDirections = () => <S><path d="M12 21c4-4 7-6.9 7-10.5A7 7 0 0 0 5 10.5C5 14.1 8 17 12 21z"/><path d="M12 8v5M12 8l-2 2M12 8l2 2"/></S>;

/* ---- social ---- */
export const IcFacebook = () => <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M14 9h2.5V6H14c-2 0-3.3 1.3-3.3 3.4V11H8.5v3h2.2v7h3v-7h2.3l.5-3h-2.8V9.6c0-.4.3-.6.8-.6z"/></svg>;
export const IcLinkedin = () => <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M7 9.5v9H4v-9zM5.5 4.5a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6zM10 9.5h2.9v1.3c.5-.8 1.6-1.6 3.2-1.6 2.5 0 3.9 1.5 3.9 4.5v4.8h-3v-4.3c0-1.2-.5-2-1.6-2s-1.5.7-1.5 2v4.3H10z"/></svg>;
export const IcInstagram = () => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="4.5"/><circle cx="12" cy="12" r="3.6"/><circle cx="16.6" cy="7.4" r="0.9" fill="currentColor" stroke="none"/></svg>;
export const IcGoogle = () => <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 11v2.8h3.9c-.2 1-1.3 3-3.9 3a4.3 4.3 0 0 1 0-8.6c1.3 0 2.2.6 2.7 1l2-1.9A7 7 0 1 0 12 19c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2z"/></svg>;

/* product icon map keyed by the `icon` field in products.js */
export const PRODUCT_ICONS = {
  auto: IcAuto, home: IcHome, renters: IcRenters, life: IcLife,
  business: IcBusiness, condo: IcCondo, umbrella: IcUmbrella,
  bundle: IcBundle, bundle2: IcBundle2, moto: IcMoto, financial: IcFinancial,
};
