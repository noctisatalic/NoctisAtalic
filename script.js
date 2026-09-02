"use strict";


/* ================= CONFIG ================= */

const WHATSAPP_NUMBER = "6281318048885";


/* ================= ELEMENTS ================= */

const consultModal = document.getElementById("consultModal");
const policyModal = document.getElementById("policyModal");

const consultForm = document.getElementById("consultForm");
const agreement = document.getElementById("agreement");
const whatsappButton = document.getElementById("whatsappButton");
const formError = document.getElementById("formError");

const photoWrapper = document.querySelector(".photo-wrapper");
const photoToggle = document.querySelector(".photo-toggle");


/* ================= POLICY DATA ================= */

const policies = {

  terms: {
    title: "Ketentuan Layanan",
    content: `
      <p>
        Konsultasi awal dilakukan untuk memahami kebutuhan,
        scope, tujuan, dan estimasi project.
      </p>

      <h3>Scope Project</h3>
      <p>
        Detail pekerjaan akan disepakati sebelum proses development
        dimulai.
      </p>

      <h3>Komunikasi</h3>
      <p>
        Komunikasi project dilakukan melalui channel yang telah
        disepakati bersama.
      </p>
    `
  },

  privacy: {
    title: "Kebijakan Privasi",
    content: `
      <p>
        Data yang diberikan melalui form konsultasi digunakan
        untuk keperluan komunikasi terkait project.
      </p>

      <h3>Data</h3>
      <p>
        Informasi seperti nama, nomor WhatsApp, kebutuhan,
        dan pesan digunakan untuk merespons permintaan konsultasi.
      </p>
    `
  },

  payment: {
    title: "Pembayaran",
    content: `
      <p>
        Detail pembayaran, termin, dan metode pembayaran
        akan disepakati berdasarkan scope project.
      </p>

      <h3>Kesepakatan</h3>
      <p>
        Pekerjaan dimulai setelah ketentuan project dan pembayaran
        awal yang disepakati telah dipenuhi.
      </p>
    `
  },

  revision: {
    title: "Kebijakan Revisi",
    content: `
      <p>
        Revisi mengikuti scope dan kesepakatan project.
      </p>

      <h3>Perubahan Scope</h3>
      <p>
        Permintaan baru yang berada di luar scope awal
        dapat membutuhkan penyesuaian waktu dan biaya.
      </p>
    `
  },

  cancellation: {
    title: "Pembatalan Project",
    content: `
      <p>
        Pembatalan project dibahas berdasarkan tahap pengerjaan
        dan kesepakatan yang telah dibuat sebelumnya.
      </p>

      <h3>Komunikasi</h3>
      <p>
        Setiap pembatalan sebaiknya dikomunikasikan sesegera mungkin
        untuk menentukan langkah berikutnya.
      </p>
    `
  },

  ip: {
    title: "Hak Kekayaan Intelektual",
    content: `
      <p>
        Kepemilikan hasil akhir project mengikuti kesepakatan
        antara client dan Noctis Atalic.
      </p>

      <h3>Asset</h3>
      <p>
        Asset, library, font, gambar, atau layanan pihak ketiga
        tetap mengikuti lisensi masing-masing.
      </p>
    `
  }

};


/* ================= MODAL ================= */

function openModal(modal) {
  if (!modal) return;

  modal.classList.add("active");
  document.body.classList.add("modal-open");
}

function closeModal(modal) {
  if (!modal) return;

  modal.classList.remove("active");

  if (
    !consultModal?.classList.contains("active") &&
    !policyModal?.classList.contains("active")
  ) {
    document.body.classList.remove("modal-open");
  }
}


/* ================= CONSULTATION ================= */

document.querySelectorAll(".open-consult").forEach((button) => {

  button.addEventListener("click", () => {

    if (!consultModal) return;

    formError.textContent = "";

    openModal(consultModal);

    setTimeout(() => {
      document.getElementById("clientName")?.focus();
    }, 100);

  });

});


/* ================= CLOSE BUTTONS ================= */

document.querySelectorAll("[data-close]").forEach((element) => {

  element.addEventListener("click", () => {

    closeModal(consultModal);
    closeModal(policyModal);

  });

});


/* ================= ESCAPE ================= */

document.addEventListener("keydown", (event) => {

  if (event.key !== "Escape") return;

  closeModal(consultModal);
  closeModal(policyModal);

});


/* ================= POLICY ================= */

document.querySelectorAll("[data-policy]").forEach((button) => {

  button.addEventListener("click", () => {

    const type = button.dataset.policy;
    const policy = policies[type];

    if (!policy) return;

    const content = document.getElementById("policyContent");

    if (!content) return;

    content.innerHTML = `
      <div class="section-label">
        NOCTIS ATALIC
      </div>

      <h2>${policy.title}</h2>

      ${policy.content}
    `;

    openModal(policyModal);

  });

});


/* ================= AGREEMENT ================= */

if (agreement && whatsappButton) {

  agreement.addEventListener("change", () => {

    whatsappButton.disabled = !agreement.checked;

  });

}


/* ================= WHATSAPP FORM ================= */

if (consultForm) {

  consultForm.addEventListener("submit", (event) => {

    event.preventDefault();

    if (!agreement?.checked) {

      formError.textContent =
        "Centang persetujuan terlebih dahulu.";

      return;

    }

    const name =
      document.getElementById("clientName")?.value.trim() || "";

    const phone =
      document.getElementById("clientPhone")?.value.trim() || "";

    const need =
      document.getElementById("clientNeed")?.value.trim() || "";

    const message =
      document.getElementById("clientMessage")?.value.trim() || "";


    if (!name || !phone || !need || !message) {

      formError.textContent =
        "Lengkapi semua data terlebih dahulu.";

      return;

    }


    const text = `
Halo Noctis Atalic,

Saya ingin berkonsultasi mengenai project website.

Nama: ${name}
WhatsApp: ${phone}
Kebutuhan: ${need}

Pesan:
${message}

Saya memahami bahwa konsultasi awal dilakukan melalui WhatsApp.
    `.trim();


    const whatsappURL =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;


    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );


    consultForm.reset();

    if (whatsappButton) {
      whatsappButton.disabled = true;
    }

    closeModal(consultModal);

  });

}


/* ================= PHOTO INTERACTION ================= */

/*
  Desktop:
  Mask photo mengikuti posisi cursor.

  Mobile:
  Tap tombol untuk berganti mode.
*/

if (photoWrapper) {

  photoWrapper.addEventListener("pointermove", (event) => {

    if (event.pointerType === "touch") return;

    const rect = photoWrapper.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width) * 100;

    const y =
      ((event.clientY - rect.top) / rect.height) * 100;

    photoWrapper.style.setProperty(
      "--mouse-x",
      `${x}%`
    );

    photoWrapper.style.setProperty(
      "--mouse-y",
      `${y}%`
    );

  });


  photoWrapper.addEventListener("pointerleave", () => {

    photoWrapper.style.setProperty(
      "--mouse-x",
      "50%"
    );

    photoWrapper.style.setProperty(
      "--mouse-y",
      "50%"
    );

  });

}


/* ================= PHOTO TOGGLE ================= */

if (photoToggle && photoWrapper) {

  photoToggle.addEventListener("click", (event) => {

    event.stopPropagation();

    photoWrapper.classList.toggle("masked");

  });

}


/* ================= REVEAL ================= */

const revealElements =
  document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

  const revealObserver =
    new IntersectionObserver(
      (entries, observer) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) return;

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -30px 0px"
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


/* ================= ACTIVE NAV ================= */

const sections = [
  document.getElementById("home"),
  document.getElementById("services"),
  document.getElementById("about")
].filter(Boolean);

const bottomLinks =
  document.querySelectorAll(".bottom-nav a");


if ("IntersectionObserver" in window && sections.length) {

  const navObserver =
    new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) return;

          const id = entry.target.id;

          bottomLinks.forEach((link) => {

            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${id}`
            );

          });

        });

      },
      {
        threshold: 0.45
      }
    );


  sections.forEach((section) => {

    navObserver.observe(section);

  });

}


/* ================= INTERNAL NAV ================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

  link.addEventListener("click", (event) => {

    const targetID =
      link.getAttribute("href");

    if (!targetID || targetID === "#") return;

    const target =
      document.querySelector(targetID);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


/* ================= PHONE CLEANUP ================= */

const phoneInput =
  document.getElementById("clientPhone");


if (phoneInput) {

  phoneInput.addEventListener("input", () => {

    phoneInput.value =
      phoneInput.value.replace(/[^\d+\-\s]/g, "");

  });

}


/* ================= INITIAL PHOTO STATE ================= */

if (photoWrapper) {

  photoWrapper.style.setProperty(
    "--mouse-x",
    "50%"
  );

  photoWrapper.style.setProperty(
    "--mouse-y",
    "50%"
  );

}
