// Encrypted ClickBank HopLink generated for this affiliate account.
const AFFILIATE_URL = "https://c34dbbz59606jg9p1tmzy-5xc6.hop.clickbank.net";

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-affiliate]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!AFFILIATE_URL.startsWith("https://")) {
      alert("Affiliate HopLink is not configured yet.");
      return;
    }

    const url = new URL(AFFILIATE_URL);
    if (url.hostname.endsWith("clickbank.net")) {
      url.searchParams.set("tid", "presell-main");
    }

    window.location.href = url.toString();
  });
});