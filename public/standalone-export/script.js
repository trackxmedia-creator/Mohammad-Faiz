/**
 * =========================================================================
 * FAIZ KHAN - PORTFOLIO JAVASCRIPT CONFIGURATION
 * =========================================================================
 * Beginner-friendly: Edit your contact details and video paths right here!
 * =========================================================================
 */

const CONFIG = {
  // Your WhatsApp number in international format (no +, spaces, or dashes)
  whatsappNumber: "91YOURNUMBER", // Replace with your number e.g. "919876543210"
  
  // Your primary contact email
  contactEmail: "trackxmedia@gmail.com",
  
  // Brand name
  brandName: "Faiz Khan",

  // Default pre-filled WhatsApp message
  prefilledWhatsAppMessage: "Hi Faiz, I'm interested in your AI UGC ad services. I'd like to discuss a campaign for my brand.",

  // Three Featured Video URLs (HTML5 MP4 files)
  hairOilVideoUrl: "../assets/aistudio/Dropper_bottle_product_commercia__20261027192618_69ac62e4.mp4",
  energyDrinkVideoUrl: "../assets/aistudio/Java_Monster_energy_drink_commer__20261027192721_4c6871b3.mp4",
  coffeeBrandVideoUrl: "../assets/aistudio/Mushroom_coffee_product_commercial_20261027192436_93a6da86.mp4",

  // Optional poster image URLs (leave empty "" to display first video frame)
  hairOilPosterUrl: "",
  energyDrinkPosterUrl: "",
  coffeeBrandPosterUrl: ""
};

// Helper: build WhatsApp URL
function getWhatsAppUrl(customMessage) {
  const number = CONFIG.whatsappNumber.replace(/[^0-9]/g, "");
  const msg = encodeURIComponent(customMessage || CONFIG.prefilledWhatsAppMessage);
  return `https://wa.me/${number || "91YOURNUMBER"}?text=${msg}`;
}

// Helper: build mailto URL
function getMailtoUrl(subject, body) {
  return `mailto:${CONFIG.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize WhatsApp Links
  document.querySelectorAll(".js-whatsapp-link").forEach((link) => {
    link.setAttribute("href", getWhatsAppUrl());
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });

  // 2. Initialize Email Links
  document.querySelectorAll(".js-email-link").forEach((link) => {
    link.setAttribute("href", getMailtoUrl("Inquiry: AI UGC Ad Creatives", "Hi Faiz,\n\nI want to discuss an AI UGC video ad campaign for my brand."));
  });

  // 3. Inject Video Sources
  const hairOilVideo = document.getElementById("video-hair-oil");
  if (hairOilVideo && CONFIG.hairOilVideoUrl) {
    hairOilVideo.src = CONFIG.hairOilVideoUrl;
    if (CONFIG.hairOilPosterUrl) hairOilVideo.poster = CONFIG.hairOilPosterUrl;
  }

  const energyDrinkVideo = document.getElementById("video-energy-drink");
  if (energyDrinkVideo && CONFIG.energyDrinkVideoUrl) {
    energyDrinkVideo.src = CONFIG.energyDrinkVideoUrl;
    if (CONFIG.energyDrinkPosterUrl) energyDrinkVideo.poster = CONFIG.energyDrinkPosterUrl;
  }

  const coffeeBrandVideo = document.getElementById("video-coffee-brand");
  if (coffeeBrandVideo && CONFIG.coffeeBrandVideoUrl) {
    coffeeBrandVideo.src = CONFIG.coffeeBrandVideoUrl;
    if (CONFIG.coffeeBrandPosterUrl) coffeeBrandVideo.poster = CONFIG.coffeeBrandPosterUrl;
  }

  // 4. Mobile Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // 5. Contact Form Handler (Formats data into 1-click WhatsApp or Mailto)
  const contactForm = document.getElementById("inquiry-form");
  const formSuccessBox = document.getElementById("form-success-box");

  if (contactForm && formSuccessBox) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("input-name")?.value || "Friend";
      const brand = document.getElementById("input-brand")?.value || "Brand";
      const email = document.getElementById("input-email")?.value || "N/A";
      const service = document.getElementById("input-service")?.value || "AI UGC Ads";
      const details = document.getElementById("input-details")?.value || "N/A";

      const formatted = `Hi Faiz, I'd like to discuss an AI UGC ad campaign!\n• Name: ${name}\n• Brand: ${brand}\n• Email/Phone: ${email}\n• Service: ${service}\n• Details: ${details}`;

      const waBtn = document.getElementById("btn-dispatch-wa");
      if (waBtn) waBtn.href = getWhatsAppUrl(formatted);

      const emailBtn = document.getElementById("btn-dispatch-email");
      if (emailBtn) emailBtn.href = getMailtoUrl(`Ad Inquiry: ${brand} (${service})`, formatted);

      contactForm.classList.add("hidden");
      formSuccessBox.classList.remove("hidden");
    });
  }
});
