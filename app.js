// Encrypted ClickBank HopLink generated for this affiliate account.
const AFFILIATE_URL = "https://c34dbbz59606jg9p1tmzy-5xc6.hop.clickbank.net";

document.getElementById("year").textContent = new Date().getFullYear();

function getTrackingId() {
  const params = new URLSearchParams(window.location.search);
  const source = (params.get("src") || "presell-main")
    .toLowerCase()
    .replace(/[^a-z0-9_-]/g, "")
    .slice(0, 40);

  return source || "presell-main";
}

document.querySelectorAll("[data-affiliate]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!AFFILIATE_URL.startsWith("https://")) {
      alert("Affiliate HopLink is not configured yet.");
      return;
    }

    const url = new URL(AFFILIATE_URL);
    if (url.hostname.endsWith("clickbank.net")) {
      url.searchParams.set("tid", getTrackingId());
    }

    window.location.href = url.toString();
  });
});