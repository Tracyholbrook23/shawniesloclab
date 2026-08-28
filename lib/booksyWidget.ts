// Booksy embedded widget helper.
//
// The widget script (loaded once, globally, in app/layout.tsx) injects a
// hidden default "BOOK NOW" button + popup dialog into the page. We keep
// our own custom-styled buttons/links everywhere on the site, and just
// programmatically click Booksy's real button to open its popup — so the
// visual design stays 100% ours, but the booking calendar, deposits,
// reminders, and everything else stay 100% Booksy's.
//
// Every "Book" link still keeps a real href to this fallback URL, so if
// the widget script hasn't loaded yet (or fails), clicking still works —
// it just opens Shawnie's Booksy page directly instead of the popup.
export const BOOKSY_URL = "https://shawnieholbrook.booksy.com";

/**
 * Tries to open the embedded Booksy booking popup by clicking the widget's
 * own (hidden) trigger button. Returns true if it found and clicked it.
 * Safe to call from a click handler on any anchor that also has a real
 * `href` fallback — call `event.preventDefault()` yourself only when this
 * returns true, so the fallback link still works if the widget isn't ready.
 */
export function openBooksyWidget(event?: { preventDefault: () => void }): boolean {
  if (typeof document === "undefined") return false;

  const trigger = document.querySelector<HTMLElement>(".booksy-widget-button");
  if (trigger) {
    event?.preventDefault();
    trigger.click();
    return true;
  }

  return false;
}
