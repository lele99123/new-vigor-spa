"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    dikidi?: { domain: string };
  }
}

type Service = {
  category: "Full Body" | "Foot Reflexology" | "Combo";
  title: string;
  duration: number;
  price: number;
  widgetId: string;
};

const SERVICES: Service[] = [
  { category: "Full Body", title: "30mins Full Body Massage", duration: 30, price: 40, widgetId: "211048" },
  { category: "Full Body", title: "60mins Full Body Massage", duration: 60, price: 60, widgetId: "211049" },
  { category: "Full Body", title: "90mins Full Body Massage", duration: 90, price: 90, widgetId: "211050" },
  { category: "Full Body", title: "60mins Deep Tissue Massage", duration: 60, price: 70, widgetId: "211051" },
  { category: "Foot Reflexology", title: "30mins Foot Reflexology", duration: 30, price: 35, widgetId: "211045" },
  { category: "Foot Reflexology", title: "60mins Foot Reflexology", duration: 60, price: 50, widgetId: "211046" },
  { category: "Foot Reflexology", title: "90mins Foot Reflexology", duration: 90, price: 80, widgetId: "211047" },
  { category: "Combo", title: "Combo: 60mins Back + 30mins Foot", duration: 90, price: 90, widgetId: "211044" },
  { category: "Combo", title: "Combo: 60mins Foot + 30mins Back", duration: 90, price: 85, widgetId: "211043" },
  { category: "Combo", title: "Combo: 30mins Back + 30mins Foot", duration: 60, price: 60, widgetId: "211042" },
  { category: "Combo", title: "30mins Hands & Arms", duration: 30, price: 45, widgetId: "211041" },
  { category: "Combo", title: "30mins Skull Massage", duration: 30, price: 45, widgetId: "211040" },
];

const CATEGORIES = ["Full Body", "Foot Reflexology", "Combo"] as const;

function formatDuration(minutes: number): string {
  if (minutes === 60) return "1 hr";
  if (minutes > 60) return `${Math.floor(minutes / 60)} hr ${minutes % 60}min`;
  return `${minutes} min`;
}

export default function BookingPage() {
  const [activeTab, setActiveTab] = useState<(typeof CATEGORIES)[number]>("Full Body");

  useEffect(() => {
    window.dikidi = { domain: "dikidi.app" };
  }, []);

  const filtered = SERVICES.filter((s) => s.category === activeTab);

  return (
    <>
      {/* Dikidi widget script */}
      <Script
        src="https://dikidi.app/assets/js/widget_record/widget2.min.js?v=1773811740"
        strategy="afterInteractive"
      />

      <main className="min-h-screen bg-bg-cream">
        {/* Hero */}
        <section className="relative flex items-center justify-center overflow-hidden bg-brown-deep pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-brown-deep/90" />
          <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
            <h1 className="font-serif text-4xl text-white md:text-5xl">Book an Appointment</h1>
            <p className="mt-4 text-gray-300">
              Choose your service and pick a time that works for you.
            </p>
          </div>
        </section>

        {/* Tabs & Services */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          {/* Tabs */}
          <div className="mb-12 flex justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`rounded-full px-8 py-3 text-sm font-semibold tracking-wider transition-colors ${
                  activeTab === cat
                    ? "bg-accent text-white shadow-lg"
                    : "bg-white text-brown-deep hover:bg-accent/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((service) => (
              <div
                key={service.widgetId}
                className="group rounded-2xl bg-white p-6 shadow-md transition-shadow hover:shadow-xl"
              >
                <h3 className="font-serif text-xl text-brown-deep">{service.title}</h3>
                <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {formatDuration(service.duration)}
                  </span>
                  <span className="text-lg font-bold text-accent">${service.price}</span>
                </div>
                <a
                  href={`https://dikidi.app/#widget=${service.widgetId}`}
                  className="mt-6 block w-full rounded-full bg-accent px-6 py-3 text-center text-sm font-semibold tracking-wider text-white transition-colors hover:bg-accent-hover"
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="pb-16 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-accent"
          >
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </a>
        </div>
      </main>
    </>
  );
}
