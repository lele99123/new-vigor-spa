const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "SERVICES", href: "#services" },
  { label: "ABOUT", href: "#about" },
  { label: "GALLERY", href: "#gallery" },
  { label: "CONTACT", href: "#contact" },
] as const;

const SERVICES = [
  {
    title: "Foot Reflexology",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=400&h=400&q=80",
    alt: "Foot reflexology treatment",
  },
  {
    title: "Body Massage",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=400&h=400&q=80",
    alt: "Relaxing body massage",
  },
  {
    title: "Hot Stone Therapy",
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=400&h=400&q=80",
    alt: "Hot stone therapy",
  },
  {
    title: "Aromatherapy",
    image:
      "https://images.unsplash.com/photo-1600612253971-422e7f3fa2b4?auto=format&fit=crop&w=400&h=400&q=80",
    alt: "Aromatherapy essential oils",
  },
] as const;

const SOCIAL_LINKS = [
  {
    label: "Yelp",
    href: "https://www.yelp.com/biz/vigor-foot-spa-smithtown",
  },
  {
    label: "Google",
    href: "https://share.google/CeY0Agpjwy2y9gSRy",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Vigor-Foot-Spa/100064836738289/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/newvigarfootspa/",
  },
] as const;

function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-serif text-xl tracking-wide text-white">
          New Vigor Foot Spa
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm tracking-widest text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1920&q=80"
        alt="Relaxing spa room"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h1 className="mb-6 font-serif text-5xl leading-tight text-white md:text-7xl">
          Your Escape from Stress
        </h1>
        <p className="mb-10 text-lg text-gray-300 md:text-xl">
          A peaceful place to relax and recharge.
        </p>
        <a
          href="#contact"
          className="inline-block rounded-full bg-accent px-10 py-4 text-sm font-semibold tracking-widest text-white transition-colors hover:bg-accent-hover"
        >
          BOOK YOUR TIME
        </a>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-16 text-center font-serif text-4xl text-brown-deep md:text-5xl">
          Our Services
        </h2>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div key={service.title} className="flex flex-col items-center">
              <div className="mb-6 size-48 overflow-hidden rounded-full shadow-lg">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="size-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-brown-deep">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-8 font-serif text-4xl text-brown-deep md:text-5xl">
          About Us
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
          At New Vigor Foot Spa, we believe in the healing power of touch. Our
          skilled therapists combine traditional techniques with modern wellness
          practices to provide you with an unparalleled relaxation experience.
          Step into our tranquil sanctuary and let your journey to wellness
          begin.
        </p>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="bg-bg-warm py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="mb-8 font-serif text-4xl text-brown-deep md:text-5xl">
          Gallery
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {["https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&h=400&q=80",
            "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=600&h=400&q=80",
            "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=600&h=400&q=80",
            "https://images.unsplash.com/photo-1600612253971-422e7f3fa2b4?auto=format&fit=crop&w=600&h=400&q=80"
          ].map((src, i) => (
            <div key={i} className="overflow-hidden rounded-lg">
              <img
                src={src}
                alt={`Spa gallery image ${i + 1}`}
                className="h-64 w-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-brown-deep py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center font-serif text-4xl text-white md:text-5xl">
          Get in Touch
        </h2>
        <p className="mb-12 text-center text-gray-400">
          Follow us on social media or give us a call
        </p>
        <div className="mb-16 flex flex-wrap justify-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold tracking-wider text-white transition-colors hover:bg-white/20"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="mb-2 font-serif text-lg text-white/80">
          New Vigor Foot Spa
        </p>
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} New Vigor Foot Spa. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
