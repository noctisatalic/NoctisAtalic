/* =====================================================
   NOCTIS ATALIC — INTERACTION ENGINE
===================================================== */

const WHATSAPP_NUMBER = "6281318048885";


/* =====================================================
   ELEMENTS
===================================================== */

const consultModal =
    document.getElementById("consultModal");

const policyModal =
    document.getElementById("policyModal");

const form =
    document.getElementById("consultForm");

const agreement =
    document.getElementById("agreement");

const whatsappButton =
    document.getElementById("whatsappButton");

const formError =
    document.getElementById("formError");

const photoWrapper =
    document.querySelector(".photo-wrapper");

const photoToggle =
    document.querySelector(".photo-toggle");


/* =====================================================
   REDUCED MOTION
===================================================== */

const prefersReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


/* =====================================================
   POLICY CONTENT
===================================================== */

const policies = {

    terms: {
        title: "Ketentuan Layanan",

        html: `
            <h3>1. Ruang Lingkup Pekerjaan</h3>

            <p>
                Ruang lingkup pekerjaan mengikuti brief,
                kebutuhan, dan kesepakatan project.
                Fitur atau pekerjaan yang berada di luar
                scope dapat dianggap sebagai pekerjaan tambahan.
            </p>

            <h3>2. Komunikasi</h3>

            <p>
                Client dan developer bertanggung jawab menjaga
                komunikasi yang jelas mengenai brief, materi,
                feedback, approval, dan perubahan kebutuhan.
            </p>

            <h3>3. Revisi</h3>

            <p>
                Jumlah dan batas revisi mengikuti paket atau
                kesepakatan project. Revisi minor dan perubahan
                konsep besar dapat diperlakukan berbeda.
            </p>

            <h3>4. Timeline</h3>

            <p>
                Timeline dimulai setelah kebutuhan, materi,
                dan pembayaran awal yang disepakati telah
                tersedia. Keterlambatan materi atau approval
                dari client dapat menggeser timeline.
            </p>

            <h3>5. Pembayaran</h3>

            <p>
                Mekanisme DP, pelunasan, milestone, dan biaya
                tambahan disepakati sebelum pekerjaan dimulai.
            </p>

            <h3>6. Perubahan Scope</h3>

            <p>
                Penambahan fitur, halaman, integrasi,
                perubahan flow, atau perubahan konsep setelah
                approval dapat dikenakan biaya dan waktu tambahan.
            </p>

            <h3>7. Pembatalan Project</h3>

            <p>
                Pembatalan mengikuti kesepakatan project dan
                memperhitungkan pekerjaan yang telah dikerjakan
                serta biaya pihak ketiga yang sudah timbul.
            </p>

            <h3>8. Maintenance</h3>

            <p>
                Maintenance setelah project selesai hanya
                termasuk apabila tercantum dalam paket atau
                kesepakatan terpisah.
            </p>

            <h3>9. Hosting & Domain</h3>

            <p>
                Hosting, domain, email, API, payment gateway,
                database hosting, dan layanan pihak ketiga
                dapat menjadi biaya terpisah kecuali disepakati lain.
            </p>

            <h3>10. Third-Party Services</h3>

            <p>
                Layanan eksternal mengikuti ketersediaan,
                harga, kebijakan, limit, dan ketentuan
                provider masing-masing.
            </p>
        `
    },


    privacy: {
        title: "Kebijakan Privasi",

        html: `
            <h3>Informasi yang Dikirim</h3>

            <p>
                Informasi seperti nama, nomor WhatsApp,
                kebutuhan project, dan pesan yang diberikan
                melalui form digunakan untuk menanggapi konsultasi
                dan memahami kebutuhan.
            </p>

            <h3>Penggunaan Data</h3>

            <p>
                Data digunakan untuk komunikasi project,
                penyusunan penawaran, dan kebutuhan layanan
                yang relevan.
            </p>

            <h3>Penyimpanan & Keamanan</h3>

            <p>
                Data diperlakukan secara wajar dan dijaga
                dari akses yang tidak semestinya.
                Tidak ada sistem yang dapat menjamin keamanan absolut.
            </p>

            <h3>Third-Party Service</h3>

            <p>
                Jika project menggunakan layanan pihak ketiga
                seperti hosting, cloud storage, analytics,
                atau API, data dapat diproses sesuai kebijakan
                provider terkait.
            </p>

            <h3>Hak Pengguna</h3>

            <p>
                Pengguna dapat meminta klarifikasi mengenai
                data yang diberikan atau meminta komunikasi
                dihentikan sejauh memungkinkan.
            </p>
        `
    },


    payment: {
        title: "Kebijakan Pembayaran",

        html: `
            <h3>Mekanisme Pembayaran</h3>

            <p>
                Pembayaran dilakukan berdasarkan milestone
                atau skema yang disepakati sebelum project dimulai.
            </p>

            <h3>DP & Pelunasan</h3>

            <p>
                Besaran DP dan pelunasan ditentukan dalam
                kesepakatan project.
            </p>

            <h3>Biaya Tambahan</h3>

            <p>
                Fitur atau pekerjaan di luar scope awal dapat
                memiliki biaya tambahan setelah mendapatkan
                persetujuan client.
            </p>
        `
    },


    revision: {
        title: "Kebijakan Revisi",

        html: `
            <h3>Revisi Minor</h3>

            <p>
                Penyesuaian teks, spacing, warna, atau detail
                visual kecil yang masih berada dalam konsep
                yang telah disepakati.
            </p>

            <h3>Revisi Major</h3>

            <p>
                Perubahan struktur, konsep visual, flow,
                fitur, atau arah project setelah approval
                dapat dianggap sebagai perubahan scope.
            </p>

            <h3>Approval</h3>

            <p>
                Client bertanggung jawab memberikan feedback
                yang terarah dan tepat waktu agar timeline
                tetap terjaga.
            </p>
        `
    },


    cancellation: {
        title: "Kebijakan Pembatalan",

        html: `
            <h3>Pembatalan oleh Client</h3>

            <p>
                Pembatalan dibahas berdasarkan status pekerjaan,
                pembayaran, dan biaya yang telah dikeluarkan.
            </p>

            <h3>Pembatalan oleh Developer</h3>

            <p>
                Developer dapat menghentikan project jika
                terdapat kondisi yang membuat pekerjaan tidak
                dapat dilanjutkan secara wajar.
            </p>

            <h3>Refund</h3>

            <p>
                Refund, apabila berlaku, mengikuti kesepakatan
                dan memperhitungkan pekerjaan yang telah
                dikerjakan serta biaya non-refundable.
            </p>
        `
    },


    ip: {
        title: "Intellectual Property",

        html: `
            <h3>Source Code</h3>

            <p>
                Kepemilikan atau lisensi source code mengikuti
                kesepakatan project dan status pembayaran.
            </p>

            <h3>Desain & Asset</h3>

            <p>
                Desain custom dan asset yang dibuat khusus
                dapat dialihkan sesuai kesepakatan.
            </p>

            <h3>Font, Image & Library</h3>

            <p>
                Font, gambar, icon, library open-source,
                template, dan asset pihak ketiga tetap
                mengikuti lisensi masing-masing.
            </p>

            <h3>Disclaimer</h3>

            <p>
                Dokumen ini merupakan informasi umum dan
                bukan pengganti nasihat hukum profesional.
                Untuk kebutuhan hukum khusus, konsultasikan
                dengan profesional hukum.
            </p>
        `
    }

};


/* =====================================================
   MODAL
===================================================== */

function openModal(modal) {

    if (!modal) return;

    modal.classList.add("open");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add("modal-open");
}


function closeModal(modal) {

    if (!modal) return;

    modal.classList.remove("open");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    const anotherModalOpen =
        document.querySelector(
            ".modal-overlay.open"
        );

    if (!anotherModalOpen) {
        document.body.classList.remove("modal-open");
    }
}


/* =====================================================
   CONSULTATION
===================================================== */

document
    .querySelectorAll(".open-consult")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                openModal(consultModal);

                const firstInput =
                    document.getElementById("clientName");

                if (firstInput) {
                    setTimeout(() => {
                        firstInput.focus();
                    }, 120);
                }
            }
        );

    });


/* =====================================================
   CLOSE MODALS
===================================================== */

document
    .querySelectorAll("[data-close]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const modal =
                    document.getElementById(
                        button.dataset.close
                    );

                closeModal(modal);
            }
        );

    });


[consultModal, policyModal]
    .filter(Boolean)
    .forEach(modal => {

        modal.addEventListener(
            "click",
            event => {

                if (
                    event.target === modal
                ) {
                    closeModal(modal);
                }

            }
        );

    });


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeModal(consultModal);
            closeModal(policyModal);
        }

    }
);


/* =====================================================
   POLICY
===================================================== */

document
    .querySelectorAll("[data-policy]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const key =
                    button.dataset.policy;

                const policy =
                    policies[key];

                if (!policy) return;

                const title =
                    document.getElementById(
                        "policyTitle"
                    );

                const content =
                    document.getElementById(
                        "policyContent"
                    );

                if (title) {
                    title.textContent =
                        policy.title;
                }

                if (content) {
                    content.innerHTML =
                        policy.html;
                }

                openModal(policyModal);
            }
        );

    });


/* =====================================================
   WHATSAPP AGREEMENT
===================================================== */

if (
    agreement &&
    whatsappButton
) {

    agreement.addEventListener(
        "change",
        () => {

            whatsappButton.disabled =
                !agreement.checked;

            if (
                agreement.checked &&
                formError
            ) {
                formError.textContent = "";
            }

        }
    );

}


/* =====================================================
   WHATSAPP FORM
===================================================== */

if (form) {

    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            if (formError) {
                formError.textContent = "";
            }

            if (
                !agreement ||
                !agreement.checked
            ) {

                if (formError) {
                    formError.textContent =
                        "Centang persetujuan terlebih dahulu.";
                }

                return;
            }


            const name =
                document
                    .getElementById("clientName")
                    ?.value
                    .trim() || "";


            const phone =
                document
                    .getElementById("clientPhone")
                    ?.value
                    .trim() || "";


            const need =
                document
                    .getElementById("clientNeed")
                    ?.value || "";


            const message =
                document
                    .getElementById("clientMessage")
                    ?.value
                    .trim() || "";


            if (
                !name ||
                !phone ||
                !need ||
                !message
            ) {

                if (formError) {
                    formError.textContent =
                        "Lengkapi semua field terlebih dahulu.";
                }

                return;
            }


            const whatsappMessage =
`Halo Noctis, saya ingin berkonsultasi mengenai pembuatan website.

Nama: ${name}
Nomor WhatsApp: ${phone}
Kebutuhan: ${need}

Pesan:
${message}

Saya telah membaca dan menyetujui Ketentuan Layanan dan Kebijakan.`;


            const encodedMessage =
                encodeURIComponent(
                    whatsappMessage
                );


            const whatsappURL =
                `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;


            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );

        }
    );

}


/* =====================================================
   PHOTO — CURSOR INTERACTION
===================================================== */

if (photoWrapper) {

    /*
       Default position.
    */

    photoWrapper.style.setProperty(
        "--mx",
        "50%"
    );

    photoWrapper.style.setProperty(
        "--my",
        "50%"
    );


    /*
       Desktop cursor tracking.
    */

    photoWrapper.addEventListener(
        "pointermove",
        event => {

            if (
                prefersReducedMotion ||
                window.innerWidth <= 900
            ) {
                return;
            }

            const rect =
                photoWrapper.getBoundingClientRect();

            const x =
                ((event.clientX - rect.left) / rect.width) * 100;

            const y =
                ((event.clientY - rect.top) / rect.height) * 100;


            const clampedX =
                Math.max(
                    0,
                    Math.min(100, x)
                );

            const clampedY =
                Math.max(
                    0,
                    Math.min(100, y)
                );


            photoWrapper.style.setProperty(
                "--mx",
                `${clampedX}%`
            );

            photoWrapper.style.setProperty(
                "--my",
                `${clampedY}%`
            );


            /*
               Subtle 3D tilt.
            */

            const rotateY =
                (clampedX - 50) * .10;

            const rotateX =
                (50 - clampedY) * .07;


            photoWrapper.style.setProperty(
                "--tilt-y",
                `${rotateY}deg`
            );

            photoWrapper.style.setProperty(
                "--tilt-x",
                `${rotateX}deg`
            );

        }
    );


    /*
       Reset when cursor leaves.
    */

    photoWrapper.addEventListener(
        "pointerleave",
        () => {

            if (
                prefersReducedMotion ||
                window.innerWidth <= 900
            ) {
                return;
            }

            photoWrapper.style.setProperty(
                "--mx",
                "50%"
            );

            photoWrapper.style.setProperty(
                "--my",
                "50%"
            );

            photoWrapper.style.setProperty(
                "--tilt-x",
                "0deg"
            );

            photoWrapper.style.setProperty(
                "--tilt-y",
                "0deg"
            );

        }
    );

}


/* =====================================================
   PHOTO TOGGLE — MOBILE
===================================================== */

if (
    photoToggle &&
    photoWrapper
) {

    photoToggle.addEventListener(
        "click",
        () => {

            photoWrapper.classList.toggle(
                "masked"
            );

            const isMasked =
                photoWrapper.classList.contains(
                    "masked"
                );

            photoToggle.setAttribute(
                "aria-label",
                isMasked
                    ? "Tampilkan foto asli"
                    : "Tampilkan foto topeng"
            );

        }
    );

}


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


if (
    "IntersectionObserver" in window
) {

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: .1
            }
        );


    revealElements.forEach(
        element => {

            revealObserver.observe(
                element
            );

        }
    );

} else {

    revealElements.forEach(
        element => {

            element.classList.add(
                "visible"
            );

        }
    );

}


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const navItems =
    [
        ...document.querySelectorAll(
            ".nav-item"
        )
    ];


const trackedSections =
    [
        document.getElementById("home"),
        document.getElementById("services"),
        document.getElementById("about")
    ]
    .filter(Boolean);


if (
    "IntersectionObserver" in window &&
    trackedSections.length
) {

    const navObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            navItems.forEach(
                                item => {

                                    item.classList.toggle(
                                        "active",
                                        item.getAttribute(
                                            "href"
                                        ) ===
                                        `#${entry.target.id}`
                                    );

                                }
                            );

                        }

                    }
                );

            },
            {
                rootMargin:
                    "-45% 0px -45% 0px"
            }
        );


    trackedSections.forEach(
        section => {

            navObserver.observe(
                section
            );

        }
    );

}


/* =====================================================
   SMOOTH INTERNAL NAVIGATION
===================================================== */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetID =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !targetID ||
                    targetID === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetID
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior:
                        prefersReducedMotion
                            ? "auto"
                            : "smooth",

                    block: "start"
                });

            }
        );

    });


/* =====================================================
   BUTTON CURSOR LIGHT
===================================================== */

document
    .querySelectorAll(".btn")
    .forEach(button => {

        button.addEventListener(
            "pointermove",
            event => {

                if (
                    prefersReducedMotion
                ) {
                    return;
                }

                const rect =
                    button.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;


                button.style.setProperty(
                    "--btn-x",
                    `${x}px`
                );

                button.style.setProperty(
                    "--btn-y",
                    `${y}px`
                );

            }
        );

    });


/* =====================================================
   HERO MICRO PARALLAX
===================================================== */

const hero =
    document.querySelector(".hero");


if (
    hero &&
    !prefersReducedMotion
) {

    window.addEventListener(
        "scroll",
        () => {

            if (
                window.innerWidth <= 900
            ) {
                return;
            }

            const scroll =
                window.scrollY;

            const photo =
                document.querySelector(
                    ".photo-wrapper"
                );

            if (
                photo &&
                scroll < window.innerHeight
            ) {

                const amount =
                    Math.min(
                        scroll * .035,
                        24
                    );

                photo.style.marginTop =
                    `${amount}px`;

            }

        },
        {
            passive: true
        }
    );

}


/* =====================================================
   INITIAL FORM STATE
===================================================== */

if (
    agreement &&
    whatsappButton
) {

    whatsappButton.disabled =
        !agreement.checked;

}


/* =====================================================
   END
===================================================== */
