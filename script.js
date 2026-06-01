(function () {
  const track = (eventName, data) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event: eventName }, data || {}));
  };

  const trackedClicks = [
    ["phone-click", "phone_click"],
    ["email-click", "email_click"],
    ["schedule-call-button", "schedule_call_click"],
    ["main-form-submit-button", "main_form_submit_click"]
  ];

  trackedClicks.forEach(([id, eventName]) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.addEventListener("click", () => {
      track(eventName, { element_id: id });
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const leadForm = document.querySelector(".lead-form");
  if (leadForm) {
    leadForm.addEventListener("submit", () => {
      track("netlify_form_submit", {
        form_name: leadForm.getAttribute("name") || "ownerfirstpm-contact"
      });
    });
  }
})();
