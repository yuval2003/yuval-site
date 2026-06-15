/**
 * Single source of truth for the contact action — the phone number (display +
 * tel: href) and the WhatsApp link. Reused by CTAButtons, StickyContactBar and
 * Footer so the number can never drift between them (PLAN.md §2, §3).
 *
 * The number itself comes from the brief: 052-707-1952 (international 972…).
 */
export const phoneDisplay = "052-707-1952";
export const phoneHref = "tel:0527071952";
export const whatsappHref = "https://wa.me/972527071952";

/** Footer / contact location line — frontal lessons, at the student's home, מרכז. */
export const locationLine = "שיעורים פרונטליים · אצלך בבית · אזור המרכז";
