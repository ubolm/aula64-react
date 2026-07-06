export function trackContactClick(method, location) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "contact_click", {
    contact_method: method,
    link_location: location,
  });
}
