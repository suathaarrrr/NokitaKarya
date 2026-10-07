'use client'

import Image from 'next/image'
import { useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  ChevronDown,
  Clock3,
  Droplets,
  Flame,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Wrench,
  X,
  MessageCircle,
  Settings2,
  ClipboardCheck,
} from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/+6285103439170'

const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Dokumentasi', href: '#dokumentasi' },
  { label: 'Kontak', href: '#kontak' },
]

const services = [
  {
    number: '01',
    title: 'Instalasi Water Heater',
    description:
      'Pemasangan water heater Ariston secara rapi dan sesuai kebutuhan rumah maupun properti Anda.',
    icon: Flame,
  },
  {
    number: '02',
    title: 'Service & Perbaikan',
    description:
      'Pemeriksaan, penelusuran kendala, perawatan, dan perbaikan water heater Ariston.',
    icon: Wrench,
  },
  {
    number: '03',
    title: 'Bantuan Klaim Garansi',
    description:
      'Pendampingan informasi dan proses terkait kebutuhan garansi produk Ariston. (dibutuhkan garansi resmi dan nota pembelian produk)',
    icon: ShieldCheck,
  },
]

const steps = [
  { number: '01', title: 'Hubungi Kami', icon: MessageCircle },
  { number: '02', title: 'Sampaikan Kebutuhan', icon: ClipboardCheck },
  { number: '03', title: 'Pemeriksaan / Penjadwalan', icon: Clock3 },
  { number: '04', title: 'Service / Instalasi', icon: Wrench },
]

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-eyebrow">
      <span className="section-eyebrow-dot" />
      {children}
    </div>
  )
}

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <a aria-label="CV Nokita Karya, beranda" className="brand-mark" href="#beranda">
      <img
        alt=""
        aria-hidden="true"
        className={`brand-icon brand-logo-icon ${light ? 'brand-icon-light' : ''}`}
        src="/images/logo-nokita-icon.png"
      />
      <span className="brand-copy">
        <strong>CV NOKITA KARYA</strong>
        <span>ARISTON SERVICE CENTER</span>
      </span>
    </a>
  )
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <BrandMark />
        <nav aria-label="Navigasi utama" className="desktop-nav">
          {navLinks.map((link) => (
            <a className="nav-link" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="button button-dark header-cta" href="#kontak">
          Hubungi Kami <ArrowUpRight aria-hidden="true" size={16} />
        </a>
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
          className="mobile-menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {menuOpen && (
        <nav aria-label="Navigasi mobile" className="mobile-nav">
          {navLinks.map((link) => (
            <a href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>
              {link.label} <ArrowUpRight aria-hidden="true" size={15} />
            </a>
          ))}
          <a className="mobile-nav-cta" href="#kontak" onClick={() => setMenuOpen(false)}>
            Hubungi Kami <ArrowRight aria-hidden="true" size={16} />
          </a>
        </nav>
      )}
    </header>
  )
}

function HeroSection() {
  return (
    <section className="hero-section" id="beranda">
      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="hero-label">
            <span className="hero-label-mark"><Droplets size={14} /></span>
            ARISTON SERVICE CENTER · MALANG
          </div>
          <h1>
            Nyaman di rumah,
            <br />
            <span>dimulai dari air</span>
            <br />
            hangat yang tepat.
          </h1>
          <p className="hero-description">
            Layanan instalasi, perawatan, dan perbaikan water heater Ariston oleh CV NOKITA KARYA untuk Malang dan sekitarnya.
          </p>
          <div className="hero-actions">
            <a className="button button-dark button-large" href="#kontak">
              Hubungi Kami <ArrowUpRight aria-hidden="true" size={17} />
            </a>
            <a className="button button-quiet button-large" href="#layanan">
              Lihat Layanan <ArrowDown aria-hidden="true" size={16} />
            </a>
          </div>
          <div className="hero-note">
            <span className="hero-note-icon"><MapPin aria-hidden="true" size={16} /></span>
            <span>Melayani Malang, Kabupaten Malang & Batu</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap">
            <Image
              alt="Teknisi profesional memeriksa water heater di rumah"
              className="hero-image"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 52vw"
              src="/images/service-team.png"
            />
            <div className="hero-image-overlay" />
          </div>
          <div className="hero-floating-card">
            <span className="floating-check"><Check aria-hidden="true" size={16} /></span>
            <span><strong>Solusi lebih tenang</strong><small>Untuk water heater Anda</small></span>
          </div>
          <div className="hero-image-caption">
            <span>LAYANAN WATER HEATER</span>
            <span className="caption-line" />
            <span>MALANG, INDONESIA</span>
          </div>
          <div className="hero-image-index">01 <span>/</span> 03</div>
        </div>
      </div>
      <div className="hero-bottom container">
        <span>LAYANAN PROFESIONAL UNTUK KENYAMANAN HARIAN</span>
        <span className="hero-bottom-scroll">GULIR UNTUK MENGENAL KAMI <ChevronDown size={14} /></span>
      </div>
    </section>
  )
}

function TrustStrip() {
  const highlights = [
    { icon: BadgeCheck, title: 'Ariston Service Center', subtitle: 'ASC Malang' },
    { icon: Settings2, title: 'Layanan Profesional', subtitle: 'Instalasi & perawatan' },
    { icon: MapPin, title: 'Area Layanan Lokal', subtitle: 'Malang dan sekitarnya' },
  ]

  return (
    <section aria-label="Keunggulan layanan" className="trust-strip">
      <div className="container trust-grid">
        {highlights.map(({ icon: Icon, title, subtitle }) => (
          <div className="trust-item" key={title}>
            <span className="trust-icon"><Icon aria-hidden="true" size={20} strokeWidth={1.7} /></span>
            <span className="trust-copy"><strong>{title}</strong><small>{subtitle}</small></span>
          </div>
        ))}
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="section about-section" id="tentang">
      <div className="container about-layout">
        <div className="about-visual">
          <div className="about-image-wrap">
            <Image
              alt="Sertifikat Ariston Authorized Service Center 2025 untuk CV Nokita Karya"
              className="about-image"
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              src="/images/sertifikat-ariston.png"
            />
          </div>
          <div className="about-photo-tag"><span /> SERTIFIKAT AUTHORIZED SERVICE CENTER</div>
          <div className="about-side-label">LAYANAN SETEMPAT, PERHATIAN PERSONAL</div>
        </div>
        <div className="about-content">
          <Eyebrow>TENTANG KAMI</Eyebrow>
          <h2>Mitra layanan water heater yang hadir dekat dengan Anda.</h2>
          <p className="about-intro">
            CV NOKITA KARYA menyediakan layanan water heater dan bekerja sama dengan Ariston sebagai Ariston Service Center (ASC) di Malang.
          </p>
          <p className="body-muted">
            Kami membantu pemilik rumah, keluarga, hotel, apartemen, dan properti di Malang serta area sekitarnya melalui layanan instalasi, service, perbaikan, dan bantuan terkait garansi.
          </p>
          <div className="why-us">
            <h3>Kenapa memilih kami?</h3>
            <div className="why-list">
              <div><span className="why-check"><Check size={13} /></span><span>Fokus pada kebutuhan water heater Ariston</span></div>
              <div><span className="why-check"><Check size={13} /></span><span>Alur layanan yang jelas dan komunikatif</span></div>
              <div><span className="why-check"><Check size={13} /></span><span>Melayani Malang dan wilayah sekitarnya</span></div>
            </div>
          </div>
          <a className="text-link" href="#kontak">Kenali layanan kami <ArrowRight aria-hidden="true" size={16} /></a>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="section services-section" id="layanan">
      <div className="container">
        <div className="section-heading services-heading">
          <div>
            <Eyebrow>APA YANG KAMI KERJAKAN</Eyebrow>
            <h2>Layanan untuk setiap kebutuhan.</h2>
          </div>
          <p>Mulai dari pemasangan pertama hingga perawatan, kami siap membantu menjaga kenyamanan air hangat di rumah Anda.</p>
        </div>
        <div className="service-grid">
          {services.map(({ number, title, description, icon: Icon }) => (
            <article className="service-card" key={number}>
              <div className="service-card-top">
                <span className="service-icon"><Icon aria-hidden="true" size={22} strokeWidth={1.7} /></span>
                <span className="service-number">{number} / 03</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <a aria-label={`Konsultasikan ${title}`} className="service-link" href="#kontak">
                Konsultasi <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function AristonSection() {
  return (
    <section className="ariston-section">
      <div className="container ariston-layout">
        <div className="ariston-emblem" aria-hidden="true">
          <div className="ariston-emblem-ring"><Droplets size={32} strokeWidth={1.3} /></div>
          <span>ASC</span>
        </div>
        <div className="ariston-copy">
          <Eyebrow>KERJA SAMA LAYANAN</Eyebrow>
          <h2>Ariston Service Center <span>(ASC) Malang</span></h2>
          <p>CV NOKITA KARYA bekerja sama dengan Ariston dalam layanan water heater di Malang. Hubungi kami untuk informasi instalasi, service, perbaikan, atau bantuan terkait garansi.</p>
        </div>
        <a className="button button-outline-light" href="#kontak">Hubungi Tim Kami <ArrowUpRight aria-hidden="true" size={16} /></a>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="section process-section">
      <div className="container">
        <div className="section-heading process-heading">
          <div>
            <Eyebrow>PROSES LAYANAN</Eyebrow>
            <h2>Mudah, dari awal sampai selesai.</h2>
          </div>
          <p>Alur komunikasi yang sederhana membantu kami memahami kebutuhan Anda dengan tepat.</p>
        </div>
        <div className="process-grid">
          {steps.map(({ number, title, icon: Icon }, index) => (
            <div className="process-step" key={number}>
              <div className="process-step-top">
                <span className="process-icon"><Icon aria-hidden="true" size={19} strokeWidth={1.7} /></span>
                <span className="process-number">{number}</span>
              </div>
              <h3>{title}</h3>
              {index < steps.length - 1 && <span aria-hidden="true" className="process-connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function GallerySection() {
  const gallery = [
    {
      src: '/images/installation-detail.png',
      alt: 'Detail pemasangan water heater oleh teknisi',
      category: 'INSTALASI',
      title: 'Pemasangan yang rapi',
      className: 'gallery-large',
    },
    {
      src: '/images/technician-water-heater.png',
      alt: 'Teknisi sedang memeriksa water heater',
      category: 'SERVICE',
      title: 'Pemeriksaan di lokasi',
      className: 'gallery-tall',
    },
    {
      src: '/images/service-team.png',
      alt: 'Teknisi berdiskusi saat melakukan pekerjaan layanan',
      category: 'DOKUMENTASI TEKNISI',
      title: 'Bekerja dengan teliti',
      className: 'gallery-wide',
    },
  ]

  return (
    <section className="section gallery-section" id="dokumentasi">
      <div className="container">
        <div className="section-heading gallery-heading">
          <div>
            <Eyebrow>DOKUMENTASI</Eyebrow>
            <h2>Ruang kerja kami.</h2>
          </div>
          <p>Gambaran kegiatan instalasi dan layanan water heater. Dokumentasi dapat diperbarui sesuai pekerjaan terbaru.</p>
        </div>
        <div className="gallery-grid">
          {gallery.map((item) => (
            <article className={`gallery-card ${item.className}`} key={item.category}>
              <Image alt={item.alt} className="gallery-image" fill sizes="(max-width: 700px) 100vw, 50vw" src={item.src} />
              <div className="gallery-shade" />
              <div className="gallery-meta"><span>{item.category}</span><strong>{item.title}</strong></div>
              <span className="gallery-arrow"><ArrowUpRight aria-hidden="true" size={17} /></span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceAreaSection() {
  return (
    <section className="service-area-section" id="area-layanan">
      <div className="container area-layout">
        <div className="area-copy">
          <Eyebrow>AREA LAYANAN</Eyebrow>
          <h2>Dari Malang,<br />untuk sekitar.</h2>
          <p>Berbasis layanan di Malang, CV NOKITA KARYA melayani kebutuhan water heater di area sekitar sesuai cakupan dan jadwal layanan.</p>
          <div className="area-pills"><span>Malang</span><span>Kabupaten Malang</span><span>Batu</span></div>
        </div>
        <div className="area-card">
          <div className="area-map-art" aria-hidden="true">
            <div className="map-grid-lines" />
            <span className="map-route map-route-one" />
            <span className="map-route map-route-two" />
            <span className="map-route map-route-three" />
            <span className="map-pin map-pin-main"><MapPin size={19} fill="currentColor" /></span>
            <span className="map-pin map-pin-small map-pin-a" />
            <span className="map-pin map-pin-small map-pin-b" />
            <span className="map-pin map-pin-small map-pin-c" />
            <span className="map-label map-label-main">MALANG</span>
            <span className="map-label map-label-a">BATU</span>
            <span className="map-label map-label-b">KAB. MALANG</span>
            <span className="map-watermark">NOKITA<br />KARYA</span>
          </div>
          <div className="area-card-bottom">
            <span className="area-location-icon"><MapPin aria-hidden="true" size={18} /></span>
            <span><strong>Malang & area sekitar</strong><small>Hubungi kami untuk memastikan jangkauan layanan.</small></span>
            <a aria-label="Hubungi kami mengenai area layanan" href="#kontak"><ArrowUpRight size={17} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactCta() {
  return (
    <section className="contact-cta">
      <div className="container contact-cta-inner">
        <div className="cta-decoration" aria-hidden="true"><Droplets size={152} strokeWidth={0.6} /></div>
        <div className="cta-copy">
          <Eyebrow>SIAP MEMBANTU ANDA</Eyebrow>
          <h2>Butuh bantuan dengan<br />water heater Ariston?</h2>
          <p>Hubungi CV NOKITA KARYA untuk kebutuhan instalasi, service, atau bantuan layanan garansi.</p>
        </div>
        <a className="button button-white button-large" href={WHATSAPP_URL} rel="noreferrer" target="_blank">
          Hubungi via WhatsApp <ArrowUpRight aria-hidden="true" size={17} />
        </a>
      </div>
    </section>
  )
}

function ContactSection() {
  const contactItems = [
    { label: 'WHATSAPP', value: '085103439170', icon: MessageCircle, href: WHATSAPP_URL },
    { label: 'TELEPON', value: '085103439170', icon: Phone, href: 'tel:085103439170' },
    { label: 'EMAIL', value: 'nokita504@gmail.com', icon: ArrowUpRight, href: 'mailto:nokita504@gmail.com' },
    { label: 'LOKASI', value: 'Malang, Jawa Timur', icon: MapPin, href: '#area-layanan' },
    { label: 'JAM OPERASIONAL', value: '08.00-16.00', icon: Clock3, href: WHATSAPP_URL },
  ]

  return (
    <section className="section contact-section" id="kontak">
      <div className="container contact-layout">
        <div className="contact-intro">
          <Eyebrow>KONTAK</Eyebrow>
          <h2>Mari bicarakan<br />kebutuhan Anda.</h2>
          <p>Tim kami siap membantu menjawab pertanyaan seputar layanan water heater Ariston.</p>
          <a className="contact-whatsapp-link" href={WHATSAPP_URL} rel="noreferrer" target="_blank">
            Mulai percakapan <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
        <div className="contact-list">
          {contactItems.map(({ label, value, icon: Icon, href }) => (
            <a className="contact-row" href={href} key={label}>
              <span className="contact-row-icon"><Icon aria-hidden="true" size={18} strokeWidth={1.7} /></span>
              <span className="contact-row-copy"><small>{label}</small><strong>{value}</strong></span>
              <ArrowUpRight aria-hidden="true" className="contact-row-arrow" size={17} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-column">
          <BrandMark light />
          <p>CV NOKITA KARYA menyediakan layanan water heater Ariston sebagai ASC di Malang dan sekitarnya.</p>
          <span className="footer-location"><MapPin size={14} /> Malang, Jawa Timur</span>
        </div>
        <div className="footer-nav-column">
          <h3>NAVIGASI</h3>
          {navLinks.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
        </div>
        <div className="footer-contact-column">
          <h3>HUBUNGI KAMI</h3>
          <a href={WHATSAPP_URL} rel="noreferrer" target="_blank">[085103439170]</a>
          <a href="mailto:[Email]">[nokita504@gmail.com]</a>
          <a href="#kontak">[08.00-16.00]</a>
        </div>
        <div className="footer-asc-card">
          <span className="footer-asc-icon"><BadgeCheck size={20} /></span>
          <span><strong>Ariston Service Center</strong><small>Area Malang</small></span>
          <ArrowUpRight aria-hidden="true" size={16} />
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} CV NOKITA KARYA. Hak cipta dilindungi.</span>
        <span>Dibuat dengan perhatian untuk kenyamanan Anda.</span>
      </div>
    </footer>
  )
}

export default function CompanyProfile() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustStrip />
        <AboutSection />
        <ServicesSection />
        <AristonSection />
        <ProcessSection />
        <GallerySection />
        <ServiceAreaSection />
        <ContactCta />
        <ContactSection />
      </main>
      <SiteFooter />
      <a aria-label="Hubungi CV Nokita Karya melalui WhatsApp" className="floating-whatsapp" href={WHATSAPP_URL} rel="noreferrer" target="_blank">
        <MessageCircle aria-hidden="true" size={21} />
        <span>WhatsApp</span>
      </a>
    </>
  )
}
