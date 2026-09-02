@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap');

:root {
  --red: #e50914;
  --red-dark: #b80710;
  --black: #0b0b0d;
  --dark: #151518;
  --white: #ffffff;
  --soft: #f6f6f4;
  --line: #e8e8e5;
  --muted: #77777d;
  --radius: 24px;
  --container: 1180px;
  --shadow: 0 18px 55px rgba(0, 0, 0, .08);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}

body {
  font-family: "DM Sans", sans-serif;
  color: var(--black);
  background: var(--white);
  overflow-x: hidden;
}

body.modal-open {
  overflow: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea,
select {
  font: inherit;
}

button {
  border: 0;
  cursor: pointer;
}

img {
  display: block;
  max-width: 100%;
}

.container {
  width: min(var(--container), calc(100% - 48px));
  margin-inline: auto;
}

/* ================= HEADER ================= */

.site-header {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 18px 0;
  background: rgba(255,255,255,.86);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  transition: .3s ease;
}

.site-header.scrolled {
  box-shadow: 0 8px 30px rgba(0,0,0,.07);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  font-family: "Manrope", sans-serif;
  font-size: 19px;
  font-weight: 800;
  letter-spacing: -.7px;
}

.brand span {
  color: var(--red);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 34px;
}

.nav-links a {
  font-size: 14px;
  font-weight: 600;
  color: #444449;
  transition: .25s;
}

.nav-links a:hover {
  color: var(--red);
}

.nav-cta {
  padding: 12px 19px;
  border-radius: 100px;
  background: var(--black);
  color: white !important;
}

.nav-cta:hover {
  background: var(--red);
}

/* ================= HERO ================= */

.hero {
  position: relative;
  min-height: 100vh;
  padding: 150px 0 90px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: .45;
  background-image:
    linear-gradient(rgba(0,0,0,.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,0,0,.035) 1px, transparent 1px);
  background-size: 55px 55px;
  mask-image: linear-gradient(to bottom, black, transparent);
}

.hero-glow {
  position: absolute;
  width: 520px;
  height: 520px;
  right: -180px;
  top: 80px;
  border-radius: 50%;
  background: rgba(229,9,20,.09);
  filter: blur(80px);
  pointer-events: none;
}

.hero-layout {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.05fr .95fr;
  align-items: center;
  gap: 70px;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 23px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.7px;
  color: var(--red);
  text-transform: uppercase;
}

.eyebrow::before {
  content: "";
  width: 26px;
  height: 2px;
  background: var(--red);
}

.hero h1 {
  max-width: 720px;
  font-family: "Manrope", sans-serif;
  font-size: clamp(47px, 6vw, 82px);
  line-height: .98;
  letter-spacing: -4px;
  font-weight: 800;
}

.hero h1 span {
  color: var(--red);
}

.hero-copy {
  max-width: 610px;
  margin-top: 27px;
  color: var(--muted);
  font-size: 17px;
  line-height: 1.75;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
  margin-top: 34px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 0 22px;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 700;
  transition: .25s ease;
}

.btn-primary {
  background: var(--red);
  color: white;
  box-shadow: 0 12px 30px rgba(229,9,20,.2);
}

.btn-primary:hover {
  background: var(--red-dark);
  transform: translateY(-2px);
}

.btn-dark {
  background: var(--black);
  color: white;
}

.btn-dark:hover {
  transform: translateY(-2px);
}

.btn-outline {
  border: 1px solid var(--line);
  background: white;
}

.btn-outline:hover {
  border-color: var(--red);
  color: var(--red);
}

.hero-proof {
  display: flex;
  gap: 30px;
  margin-top: 42px;
}

.proof-item strong {
  display: block;
  font-family: "Manrope", sans-serif;
  font-size: 23px;
}

.proof-item small {
  color: var(--muted);
  font-size: 12px;
}

/* ================= PORTRAIT ================= */

.hero-visual {
  position: relative;
  min-height: 610px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.portrait {
  position: relative;
  width: min(430px, 90%);
  z-index: 2;
  will-change: transform;
}

.portrait img {
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  object-position: center top;
  border: 0;
  border-radius: 34px;
  box-shadow: 0 35px 80px rgba(0,0,0,.18);
}

.portrait::before {
  content: "";
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  right: -24px;
  top: 25px;
  border: 1px solid rgba(229,9,20,.25);
  border-radius: 34px;
}

.float-card {
  position: absolute;
  z-index: 4;
  padding: 15px 18px;
  border: 1px solid rgba(0,0,0,.06);
  border-radius: 18px;
  background: rgba(255,255,255,.9);
  backdrop-filter: blur(15px);
  box-shadow: var(--shadow);
}

.float-card strong {
  display: block;
  font-size: 13px;
}

.float-card span {
  display: block;
  margin-top: 3px;
  color: var(--muted);
  font-size: 11px;
}

.float-one {
  left: 2%;
  top: 23%;
}

.float-two {
  right: 0;
  bottom: 18%;
}

.red-dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-right: 5px;
  border-radius: 50%;
  background: var(--red);
}

/* ================= TICKER ================= */

.ticker {
  overflow: hidden;
  border-block: 1px solid var(--line);
  background: var(--black);
  color: white;
}

.ticker-track {
  width: max-content;
  display: flex;
  animation: ticker 28s linear infinite;
}

.ticker-item {
  padding: 18px 34px;
  font-family: "Manrope", sans-serif;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
}

.ticker-item::after {
  content: "•";
  margin-left: 68px;
  color: var(--red);
}

@keyframes ticker {
  to {
    transform: translateX(-50%);
  }
}

/* ================= SECTIONS ================= */

.section {
  padding: 120px 0;
}

.section-soft {
  background: var(--soft);
}

.section-head {
  max-width: 760px;
  margin-bottom: 55px;
}

.section-label {
  margin-bottom: 13px;
  color: var(--red);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.8px;
}

.section-title {
  font-family: "Manrope", sans-serif;
  font-size: clamp(35px, 5vw, 57px);
  line-height: 1.03;
  letter-spacing: -2.7px;
}

.section-desc {
  margin-top: 18px;
  color: var(--muted);
  line-height: 1.75;
  max-width: 650px;
}

/* ================= SERVICES ================= */

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.service-card {
  position: relative;
  min-height: 310px;
  padding: 30px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: white;
  transition: .3s ease;
}

.service-card:hover {
  transform: translateY(-7px);
  box-shadow: var(--shadow);
  border-color: rgba(229,9,20,.2);
}

.service-number {
  color: #bbb;
  font-size: 12px;
  font-weight: 800;
}

.service-icon {
  margin: 55px 0 24px;
  font-size: 28px;
  color: var(--red);
}

.service-card h3 {
  font-family: "Manrope", sans-serif;
  font-size: 22px;
  letter-spacing: -.8px;
}

.service-card p {
  margin-top: 12px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.7;
}

/* ================= PORTFOLIO ================= */

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
}

.project-card {
  position: relative;
  overflow: hidden;
  min-height: 390px;
  padding: 32px;
  border-radius: 28px;
  background: var(--black);
  color: white;
  transition: .35s ease;
}

.project-card:hover {
  transform: translateY(-6px);
}

.project-card.red {
  background: var(--red);
}

.project-meta {
  display: flex;
  justify-content: space-between;
  color: rgba(255,255,255,.62);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
}

.project-card h3 {
  position: absolute;
  left: 32px;
  bottom: 82px;
  font-family: "Manrope", sans-serif;
  font-size: clamp(30px, 4vw, 47px);
  letter-spacing: -2px;
}

.project-card p {
  position: absolute;
  left: 32px;
  bottom: 35px;
  color: rgba(255,255,255,.7);
  font-size: 13px;
}

.project-arrow {
  position: absolute;
  right: 28px;
  bottom: 27px;
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(255,255,255,.12);
  font-size: 20px;
}

/* ================= PROCESS ================= */

.process-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--line);
}

.process-item {
  padding: 30px 24px 20px 0;
  border-right: 1px solid var(--line);
}

.process-item:not(:first-child) {
  padding-left: 24px;
}

.process-item:last-child {
  border-right: 0;
}

.process-num {
  color: var(--red);
  font-size: 12px;
  font-weight: 800;
}

.process-item h3 {
  margin-top: 45px;
  font-family: "Manrope", sans-serif;
  font-size: 21px;
}

.process-item p {
  margin-top: 11px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.7;
}

/* ================= PRICING ================= */

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.price-card {
  padding: 30px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: white;
}

.price-card.featured {
  border-color: var(--red);
  box-shadow: 0 20px 60px rgba(229,9,20,.12);
}

.price-tag {
  color: var(--muted);
  font-size: 12px;
  font-weight: 700;
}

.price-card h3 {
  margin-top: 16px;
  font-family: "Manrope", sans-serif;
  font-size: 26px;
}

.price {
  margin-top: 13px;
  font-family: "Manrope", sans-serif;
  font-size: 27px;
  font-weight: 800;
}

.price-card ul {
  list-style: none;
  margin: 27px 0;
}

.price-card li {
  padding: 11px 0;
  border-bottom: 1px solid var(--line);
  font-size: 13px;
}

.price-card li::before {
  content: "✓";
  margin-right: 9px;
  color: var(--red);
  font-weight: 800;
}

/* ================= ABOUT ================= */

.about-grid {
  display: grid;
  grid-template-columns: .8fr 1.2fr;
  gap: 90px;
  align-items: start;
}

.about-statement {
  font-family: "Manrope", sans-serif;
  font-size: clamp(31px, 4vw, 48px);
  line-height: 1.12;
  letter-spacing: -2px;
}

.about-statement span {
  color: var(--red);
}

.about-text {
  color: var(--muted);
  line-height: 1.85;
  font-size: 15px;
}

.about-text + .about-text {
  margin-top: 18px;
}

.facts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  margin-top: 40px;
  background: var(--line);
  border: 1px solid var(--line);
}

.fact {
  padding: 22px;
  background: white;
}

.fact strong {
  display: block;
  font-family: "Manrope", sans-serif;
  font-size: 21px;
}

.fact span {
  display: block;
  margin-top: 5px;
  color: var(--muted);
  font-size: 12px;
}

/* ================= CTA ================= */

.final-cta {
  position: relative;
  overflow: hidden;
  padding: 100px 0;
  background: var(--red);
  color: white;
}

.final-cta::after {
  content: "";
  position: absolute;
  width: 450px;
  height: 450px;
  right: -160px;
  top: -160px;
  border: 80px solid rgba(255,255,255,.08);
  border-radius: 50%;
}

.final-inner {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
}

.final-cta h2 {
  max-width: 700px;
  font-family: "Manrope", sans-serif;
  font-size: clamp(38px, 5vw, 64px);
  line-height: 1;
  letter-spacing: -3px;
}

.final-cta p {
  margin-top: 17px;
  color: rgba(255,255,255,.78);
}

.final-cta .btn {
  flex-shrink: 0;
  background: white;
  color: var(--black);
}

.final-cta .btn:hover {
  transform: translateY(-3px);
}

/* ================= FOOTER ================= */

footer {
  padding: 45px 0 110px;
  background: var(--black);
  color: white;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

.footer-brand {
  font-family: "Manrope", sans-serif;
  font-size: 21px;
  font-weight: 800;
}

.footer-brand span {
  color: var(--red);
}

.footer-copy {
  max-width: 380px;
  margin-top: 13px;
  color: #85858a;
  font-size: 13px;
  line-height: 1.7;
}

.footer-links {
  display: flex;
  gap: 25px;
}

.footer-links a {
  color: #aaa;
  font-size: 13px;
}

.footer-links a:hover {
  color: white;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  padding-top: 22px;
  border-top: 1px solid #27272b;
  color: #66666c;
  font-size: 11px;
}

/* ================= BOTTOM DOCK ================= */

.bottom-dock {
  display: none;
}

/* ================= MODAL ================= */

.modal {
  position: fixed;
  z-index: 300;
  inset: 0;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(0,0,0,.58);
  backdrop-filter: blur(8px);
}

.modal.active {
  display: flex;
}

.modal-box {
  position: relative;
  width: min(520px, 100%);
  max-height: 92vh;
  overflow-y: auto;
  padding: 34px;
  border-radius: 27px;
  background: white;
  box-shadow: 0 30px 100px rgba(0,0,0,.25);
}

.modal-close {
  position: absolute;
  top: 17px;
  right: 17px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #f2f2f2;
}

.modal-box h2 {
  font-family: "Manrope", sans-serif;
  font-size: 29px;
  letter-spacing: -1px;
}

.modal-box > p {
  margin-top: 8px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.6;
}

.form-group {
  margin-top: 18px;
}

.form-group label {
  display: block;
  margin-bottom: 7px;
  font-size: 12px;
  font-weight: 700;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 13px 14px;
  border: 1px solid var(--line);
  outline: none;
  border-radius: 13px;
  background: #fafafa;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  border-color: var(--red);
  background: white;
}

.form-group textarea {
  min-height: 110px;
  resize: vertical;
}

.agreement {
  display: flex;
  gap: 9px;
  align-items: flex-start;
  margin-top: 18px;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.5;
}

.agreement input {
  margin-top: 2px;
  accent-color: var(--red);
}

.modal-submit {
  width: 100%;
  margin-top: 20px;
}

.modal-submit:disabled {
  opacity: .4;
  cursor: not-allowed;
}

/* ================= REVEAL ================= */

.reveal {
  opacity: 0;
  transform: translateY(25px);
  transition: opacity .7s ease, transform .7s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ================= RESPONSIVE ================= */

@media (max-width: 1050px) {
  .hero-layout {
    gap: 35px;
  }

  .hero h1 {
    font-size: clamp(44px, 6vw, 66px);
  }

  .hero-visual {
    min-height: 520px;
  }

  .services-grid,
  .pricing-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .services-grid .service-card:last-child,
  .pricing-grid .price-card:last-child {
    grid-column: 1 / -1;
  }
}

@media (max-width: 820px) {
  .site-header {
    padding: 15px 0;
  }

  .nav-links {
    display: none;
  }

  .container {
    width: min(var(--container), calc(100% - 34px));
  }

  .hero {
    min-height: auto;
    padding: 125px 0 70px;
  }

  .hero-layout {
    grid-template-columns: 1fr;
  }

  .hero h1 {
    max-width: 650px;
    font-size: clamp(44px, 11vw, 65px);
    letter-spacing: -3px;
  }

  .hero-visual {
    min-height: 520px;
    margin-top: 15px;
  }

  .portrait {
    width: min(390px, 78vw);
  }

  .float-one {
    left: 0;
  }

  .float-two {
    right: 0;
  }

  .section {
    padding: 85px 0;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 45px;
  }

  .process-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .process-item:nth-child(2) {
    border-right: 0;
  }

  .process-item:nth-child(3),
  .process-item:nth-child(4) {
    border-top: 1px solid var(--line);
  }

  .final-inner {
    display: block;
  }

  .final-cta .btn {
    margin-top: 30px;
  }

  footer {
    padding-bottom: 100px;
  }
}

@media (max-width:
