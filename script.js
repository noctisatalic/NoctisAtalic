"use strict";


/* =========================================================
   CONFIG
========================================================= */

const WHATSAPP_NUMBER = "6281318048885";


/* =========================================================
   DOM
========================================================= */

const body = document.body;

const consultModal = document.getElementById("consultModal");
const policyModal = document.getElementById("policyModal");

const consultForm = document.getElementById("consultForm");

const clientName = document.getElementById("clientName");
const clientPhone = document.getElementById("clientPhone");
const clientNeed = document.getElementById("clientNeed");
const clientMessage = document.getElementById("clientMessage");

const agreement = document.getElementById("agreement");
const submitConsult = document.getElementById("submitConsult");

const currentYear = document.getElementById("current-year");


/* =========================================================
   YEAR
========================================================= */

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}


/* =========================================================
   MODAL
========================================================= */

function openModal(modal) {
  if (!modal) return;

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");

  body.classList.add("modal-open");

  const firstInput = modal.querySelector("input, select, textarea");

  if (firstInput) {
    setTimeout(() => firstInput.focus(), 100);
  }
}


function closeModal(modal) {
  if (!modal) return;

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");

  if (
    !document.querySelector(".modal.active")
  ) {
    body.classList.remove("modal-open");
  }
}


document.querySelectorAll(".open-consult").forEach((button) => {
  button.addEventListener("click", () => {
    openModal(consultModal);
  });
});


document.querySelector(".policy-trigger")?.addEventListener("click", () => {
  openModal(policyModal);
});


document.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", () => {

    closeModal(
      element.closest(".modal")
    );

  });
});


document.querySelectorAll(".modal-close").forEach((button) => {
  button.addEventListener("click", () => {

    closeModal(
      button.closest(".modal")
    );

  });
});


document.addEventListener("keydown", (event) => {

  if (event.key !== "Escape") return;

  document
    .querySelectorAll(".modal.active")
    .forEach((modal) => {
      closeModal(modal);
    });

});


/* =========================================================
   FORM STATE
========================================================= */

function updateSubmitState() {

  if (!submitConsult) return;

  submitConsult.disabled = !agreement.checked;

}


agreement?.addEventListener(
  "change",
  updateSubmitState
);

updateSubmitState();


/* =========================================================
   PHONE FORMAT
========================================================= */

clientPhone?.addEventListener("input", () => {

  let value = clientPhone.value;

  value = value.replace(/[^\d+]/g, "");

  if (value.startsWith("+62")) {
    value = "0" + value.slice(3);
  }

  if (value.startsWith("62")) {
    value = "0" + value.slice(2);
  }

  clientPhone.value = value;

});


/* =========================================================
   WHATSAPP FORM
========================================================= */

consultForm?.addEventListener("submit", (event) => {

  event.preventDefault();

  if (!agreement.checked) {
    return;
  }


  const name = clientName.value.trim();
  const phone = clientPhone.value.trim();
  const need = clientNeed.value.trim();
  const message = clientMessage.value.trim();


  if (!name || !phone || !need || !message) {

    alert(
      "Mohon lengkapi semua informasi terlebih dahulu."
    );

    return;
  }


  const whatsappMessage =
`Halo Noctis Atalic, saya ingin berkonsultasi mengenai project website.

Nama: ${name}
WhatsApp: ${phone}
Kebutuhan: ${need}

Detail project:
${message}

Saya siap melanjutkan diskusi melalui WhatsApp.`;


  const whatsappURL =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;


  window.open(
    whatsappURL,
    "_blank",
    "noopener,noreferrer"
  );


  consultForm.reset();

  updateSubmitState();

  closeModal(consultModal);

});


/* =========================================================
   REVEAL
========================================================= */

const revealElements =
  document.querySelectorAll(".reveal");


if (
  "IntersectionObserver" in window
) {

  const revealObserver =
    new IntersectionObserver(
      (entries, observer) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );


  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });

} else {

  revealElements.forEach((element) => {
    element.classList.add("visible");
  });

}


/* =========================================================
   NAVIGATION
========================================================= */

const navigationLinks =
  document.querySelectorAll(
    ".nav-link, .mobile-nav-item"
  );


const sections = [
  document.getElementById("home"),
  document.getElementById("services"),
  document.getElementById("portfolio"),
  document.getElementById("about")
].filter(Boolean);


function setActiveNavigation(id) {

  navigationLinks.forEach((link) => {

    const href =
      link.getAttribute("href");

    if (!href) return;

    link.classList.toggle(
      "active",
      href === `#${id}`
    );

  });

}


if (
  "IntersectionObserver" in window
) {

  const navObserver =
    new IntersectionObserver(
      (entries) => {

        const visible =
          entries
            .filter(
              (entry) =>
                entry.isIntersecting
            )
            .sort(
              (a, b) =>
                b.intersectionRatio -
                a.intersectionRatio
            )[0];


        if (visible?.target?.id) {
          setActiveNavigation(
            visible.target.id
          );
        }

      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-20% 0px -55% 0px"
      }
    );


  sections.forEach((section) => {
    navObserver.observe(section);
  });

}


/* =========================================================
   SMOOTH INTERNAL LINKS
========================================================= */

document
  .querySelectorAll('a[href^="#"]')
  .forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId =
        link.getAttribute("href");

      if (
        !targetId ||
        targetId === "#"
      ) {
        return;
      }


      const target =
        document.querySelector(targetId);


      if (!target) {
        return;
      }


      event.preventDefault();


      target.scrollIntoView({
        behavior:
          window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches
            ? "auto"
            : "smooth",
        block: "start"
      });

    });

  });


/* =========================================================
   BUTTON MICRO INTERACTION
========================================================= */

document
  .querySelectorAll(
    ".button, .header-cta, .price-button, .project-link, .service-link"
  )
  .forEach((element) => {

    element.addEventListener(
      "pointerenter",
      () => {
        element.dataset.hover = "true";
      }
    );

    element.addEventListener(
      "pointerleave",
      () => {
        delete element.dataset.hover;
      }
    );

  });


/* =========================================================
   PREVENT DOUBLE SUBMISSION
========================================================= */

consultForm?.addEventListener(
  "invalid",
  () => {

    const firstInvalid =
      consultForm.querySelector(":invalid");

    firstInvalid?.focus();

  },
  true
);


/* =========================================================
   INITIAL STATE
========================================================= */

setActiveNavigation("home");

console.log(
  "Noctis Atalic portfolio initialized."
);
