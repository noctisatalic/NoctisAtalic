"use strict";

/* ================= CONFIG ================= */

const WHATSAPP_NUMBER = "6281318048885";

/* ================= DOM ================= */

const header = document.querySelector(".site-header");
const modal = document.querySelector("#consultationModal");
const modalClose = document.querySelector(".modal-close");
const consultationButtons = document.querySelectorAll("[data-consultation]");
const consultationForm = document.querySelector("#consultationForm");
const agreement = document.querySelector("#agreement");
const submitButton = document.querySelector("#submitConsultation");
const portrait = document.querySelector(".portrait");

/* ================= HEADER ================= */

function updateHeader() {
  if (!header) return;

  header.classList.toggle(
    "scrolled",
    window.scrollY > 20
  );
}

window.addEventListener("scroll", updateHeader, {
  passive: true
});

updateHeader();

/* ================= MODAL ================= */

function openModal() {
  if (!modal) return;

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  const firstInput = modal.querySelector("input");

  setTimeout(() => {
    firstInput?.focus();
  }, 100);
}

function closeModal() {
  if (!modal) return;

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

consultationButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    openModal();
  });
});

modalClose?.addEventListener("click", closeModal);

modal?.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

/* ================= AGREEMENT ================= */

function updateSubmitState() {
  if (!agreement || !submitButton) return;

  submitButton.disabled = !agreement.checked;
}

agreement?.addEventListener("change", updateSubmitState);

updateSubmitState();

/* ================= WHATSAPP ================= */

function normalizePhone(value) {
  let phone = value.replace(/\D/g, "");

  if (phone.startsWith("0")) {
    phone = "62" + phone.substring(1);
  }

  if (phone.startsWith("8")) {
    phone = "62" + phone;
  }

  return phone;
}

consultationForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!agreement?.checked) {
    return;
  }

  const name =
    document.querySelector("#name")?.value.trim() || "";

  const phoneRaw =
    document.querySelector("#phone")?.value.trim() || "";

  const need =
    document.querySelector("#need")?.value.trim() || "";

  const message =
    document.querySelector("#message")?.value.trim() || "";

  if (!name || !phoneRaw || !need || !message) {
    alert("Mohon lengkapi semua data terlebih dahulu.");
    return;
  }

  const phone = normalizePhone(phoneRaw);

  const whatsappMessage = [
    "Halo Noctis Atalic, saya ingin konsultasi website.",
    "",
    `Nama: ${name}`,
    `WhatsApp: ${phone}`,
    `Kebutuhan: ${need}`,
    `Pesan: ${message}`,
    "",
    "Saya menyetujui data di atas digunakan untuk kebutuhan konsultasi."
  ].join("\n");

  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(whatsappMessage);

  window.open(url, "_blank", "noopener,noreferrer");

  consultationForm.reset();
  updateSubmitState();
  closeModal();
});

/* ================= REVEAL ================= */

const revealElements =
  document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

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

/* ================= PORTRAIT PARALLAX ================= */

const reduceMotion =
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (
  portrait &&
  !reduceMotion &&
  window.matchMedia("(min-width: 821px)").matches
) {
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;

  window.addEventListener(
    "mousemove",
    (event) => {
      const x =
        event.clientX / window.innerWidth - 0.5;

      const y =
        event.clientY / window.innerHeight - 0.5;

      targetX = x * 12;
      targetY = y * 10;
    },
    { passive: true }
  );

  function animatePortrait() {
    currentX += (targetX - currentX) * 0.06;
    currentY += (targetY - currentY) * 0.06;

    portrait.style.transform =
      `translate3d(${currentX}px, ${currentY}px, 0)`;

    requestAnimationFrame(animatePortrait);
  }

  animatePortrait();
}

/* ================= SMOOTH ANCHORS ================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    target.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start"
    });
  });
});

/* ================= ACTIVE MOBILE NAV ================= */

const sections = document.querySelectorAll(
  "main section[id]"
);

const dockLinks = document.querySelectorAll(
  ".bottom-dock a"
);

if (
  sections.length &&
  dockLinks.length &&
  "IntersectionObserver" in window
) {
  const sectionObserver =
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          dockLinks.forEach((link) => {
            link.classList.remove("active");
          });

          const activeLink =
            document.querySelector(
              `.bottom-dock a[href="#${entry.target.id}"]`
            );

          activeLink?.classList.add("active");
        });
      },
      {
        threshold: 0.45
      }
    );

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
}

/* ================= CARD MICRO INTERACTION ================= */

if (!reduceMotion) {
  document
    .querySelectorAll(".service-card, .price-card")
    .forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transition =
          "transform .25s ease, box-shadow .25s ease";
      });
    });
}

/* ================= IMAGE SAFETY ================= */

const heroImage = document.querySelector(
  '.portrait img'
);

heroImage?.addEventListener("error", () => {
  console.warn(
    "foto-asli.png tidak ditemukan. Pastikan file berada di folder yang sama dengan index.html."
  );
});

/* ================= INITIALIZATION ================= */

document.documentElement.classList.add("js-ready");

console.log("Noctis Atalic portfolio initialized.");
