import { useConfigurables } from "~/modules/configurables";

// ─── Decorative SVG petals / blobs used as background accents ────────────────

function FloralAccent({
  className,
  opacity = 0.18,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M46.4,-60.5C58.9,-50.2,67.1,-34.3,70.3,-17.5C73.5,-0.6,71.7,17.2,63.5,31.2C55.3,45.1,40.7,55.2,24.9,61.9C9.1,68.6,-8,71.9,-23.1,67.4C-38.2,62.9,-51.4,50.5,-59.4,35.5C-67.4,20.5,-70.1,2.8,-66.5,-13.2C-62.8,-29.2,-52.6,-43.4,-39.7,-53.5C-26.7,-63.5,-11,-69.5,3.5,-73.8C18,-78.2,33.9,-70.8,46.4,-60.5Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

function LeafAccent({
  className,
  opacity = 0.14,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M39.9,-52.1C51.5,-43.3,60.4,-30.3,64.5,-15.4C68.5,-0.5,67.5,16.4,60.1,30C52.6,43.6,38.7,53.9,23.1,59.7C7.6,65.5,-9.6,66.8,-24.3,61.4C-39,56,-51.1,43.9,-57.8,29.1C-64.5,14.3,-65.7,-3.2,-60.6,-18.4C-55.5,-33.6,-44.2,-46.6,-30.8,-55.3C-17.4,-64.1,-1.9,-68.5,12.7,-67.1C27.2,-65.6,28.3,-60.9,39.9,-52.1Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

// ─── Hero Section ────────────────────────────────────────────────────────────

function HeroSection() {
  const { config, loading } = useConfigurables();

  const headline = loading ? "" : config.heroHeadline ?? "Fresh Flowers, Crafted with Love";
  const tagline = loading ? "" : config.heroTagline ?? "Handpicked bouquets for every moment that matters.";
  const ctaLabel = loading ? "Visit Us" : config.heroCtaLabel ?? "Visit Us";
  const ctaHref = loading ? "#store-info" : config.heroCtaHref ?? "#store-info";
  const heroImage = loading ? "" : config.heroImage ?? "";
  const storeName = loading ? "Veroflower" : config.appName ?? "Veroflower";
  const primaryColor = loading ? "#F4C2C2" : config.brandColor?.primary ?? "#F4C2C2";
  const secondaryColor = loading ? "#A8C5A0" : config.brandColor?.secondary ?? "#A8C5A0";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#FFFAF9" }}
    >
      {/* Background image if provided */}
      {heroImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden="true"
        >
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(255,250,249,0.72)" }} />
        </div>
      )}

      {/* Decorative blobs */}
      <FloralAccent
        className="absolute -top-24 -left-24 w-96 h-96 text-rose-200 pointer-events-none select-none"
        opacity={0.35}
      />
      <LeafAccent
        className="absolute -bottom-20 -right-20 w-80 h-80 text-green-200 pointer-events-none select-none"
        opacity={0.28}
      />
      <FloralAccent
        className="absolute top-1/3 right-8 w-48 h-48 text-rose-100 pointer-events-none select-none"
        opacity={0.22}
      />

      {/* Floating petal dots */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        {[
          { top: "12%", left: "8%", size: 10, color: primaryColor },
          { top: "22%", left: "82%", size: 7, color: secondaryColor },
          { top: "65%", left: "5%", size: 8, color: secondaryColor },
          { top: "75%", left: "90%", size: 12, color: primaryColor },
          { top: "45%", left: "92%", size: 6, color: primaryColor },
          { top: "88%", left: "30%", size: 9, color: secondaryColor },
        ].map((dot, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              top: dot.top,
              left: dot.left,
              width: dot.size,
              height: dot.size,
              backgroundColor: dot.color,
              opacity: 0.45,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Store name badge */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span
            className="text-sm font-medium tracking-[0.2em] uppercase"
            style={{ color: secondaryColor, fontFamily: "'Inter', sans-serif" }}
          >
            {storeName}
          </span>
          <span
            className="block w-8 h-px"
            style={{ backgroundColor: secondaryColor }}
            aria-hidden="true"
          />
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl leading-tight font-bold mb-6"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#2D2D2D",
            letterSpacing: "-0.01em",
          }}
        >
          {headline}
        </h1>

        {/* Tagline */}
        <p
          className="text-lg sm:text-xl mb-10 leading-relaxed max-w-xl mx-auto"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#6B6B6B",
          }}
        >
          {tagline}
        </p>

        {/* CTA Button */}
        <a
          href={ctaHref}
          className="inline-block px-10 py-4 rounded-full font-semibold text-white text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-offset-2"
          style={{
            backgroundColor: primaryColor,
            fontFamily: "'Inter', sans-serif",
            boxShadow: `0 4px 24px 0 ${primaryColor}66`,
            letterSpacing: "0.12em",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#e8a8a8";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = primaryColor;
          }}
        >
          {ctaLabel}
        </a>

        {/* Scroll hint */}
        <div className="mt-16 flex flex-col items-center gap-2 opacity-40" aria-hidden="true">
          <div
            className="w-px h-10 rounded-full"
            style={{ backgroundColor: "#6B6B6B" }}
          />
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "#6B6B6B", fontFamily: "'Inter', sans-serif" }}
          >
            scroll
          </span>
        </div>
      </div>
    </section>
  );
}

// ─── Store Info Section ───────────────────────────────────────────────────────

function StoreInfoSection() {
  const { config, loading } = useConfigurables();

  const heading = loading ? "Find Us" : config.storeInfoHeading ?? "Find Us";
  const address = loading ? "" : config.storeAddress ?? "";
  const phone = loading ? "" : config.storePhone ?? "";
  const email = loading ? "" : config.storeEmail ?? "";
  const hours = loading ? [] : config.businessHours ?? [];
  const footerText = loading
    ? "© 2026 Veroflower. All rights reserved."
    : config.footerText ?? "© 2026 Veroflower. All rights reserved.";
  const storeName = loading ? "Veroflower" : config.appName ?? "Veroflower";
  const primaryColor = loading ? "#F4C2C2" : config.brandColor?.primary ?? "#F4C2C2";
  const secondaryColor = loading ? "#A8C5A0" : config.brandColor?.secondary ?? "#A8C5A0";

  return (
    <section
      id="store-info"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#FFF0EE" }}
    >
      {/* Decorative top border */}
      <div
        className="w-full h-1"
        style={{
          background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor}, ${primaryColor})`,
        }}
        aria-hidden="true"
      />

      {/* Background blobs */}
      <LeafAccent
        className="absolute -top-16 -left-16 w-72 h-72 text-green-100 pointer-events-none select-none"
        opacity={0.3}
      />
      <FloralAccent
        className="absolute -bottom-20 -right-12 w-64 h-64 text-rose-100 pointer-events-none select-none"
        opacity={0.3}
      />

      <div className="relative z-10 px-6 py-20 sm:py-28 max-w-4xl mx-auto text-center">
        {/* Section eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-4" aria-hidden="true">
          <span
            className="block w-10 h-px"
            style={{ backgroundColor: primaryColor }}
          />
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            style={{ color: primaryColor }}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <span
            className="block w-10 h-px"
            style={{ backgroundColor: primaryColor }}
          />
        </div>

        {/* Heading */}
        <h2
          className="text-4xl sm:text-5xl font-bold mb-4"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#2D2D2D",
          }}
        >
          {heading}
        </h2>

        <p
          className="text-base mb-14 leading-relaxed"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#6B6B6B",
          }}
        >
          We'd love to meet you in person. Come say hello.
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {/* Address card */}
          <div
            className="rounded-2xl p-8 flex flex-col gap-4"
            style={{
              backgroundColor: "#FFFAF9",
              boxShadow: "0 2px 20px 0 rgba(244,194,194,0.18)",
            }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${primaryColor}33` }}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                style={{ color: primaryColor }}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </div>
            <div>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-2"
                style={{ fontFamily: "'Inter', sans-serif", color: secondaryColor }}
              >
                Location
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", color: "#2D2D2D" }}
              >
                {address}
              </p>
              {phone && (
                <a
                  href={`tel:${phone}`}
                  className="mt-3 inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                  style={{ fontFamily: "'Inter', sans-serif", color: "#6B6B6B" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z"
                    />
                  </svg>
                  {phone}
                </a>
              )}
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="mt-1 inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                  style={{ fontFamily: "'Inter', sans-serif", color: "#6B6B6B" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  {email}
                </a>
              )}
            </div>
          </div>

          {/* Hours card */}
          <div
            className="rounded-2xl p-8 flex flex-col gap-4"
            style={{
              backgroundColor: "#FFFAF9",
              boxShadow: "0 2px 20px 0 rgba(168,197,160,0.18)",
            }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${secondaryColor}33` }}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                style={{ color: secondaryColor }}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ fontFamily: "'Inter', sans-serif", color: secondaryColor }}
              >
                Opening Hours
              </p>
              {hours.length > 0 ? (
                <ul className="space-y-3">
                  {hours.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between gap-4"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <span className="text-sm" style={{ color: "#6B6B6B" }}>
                        {item.days}
                      </span>
                      <span
                        className="text-sm font-medium"
                        style={{ color: "#2D2D2D" }}
                      >
                        {item.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p
                  className="text-sm"
                  style={{ fontFamily: "'Inter', sans-serif", color: "#6B6B6B" }}
                >
                  Contact us for current hours.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="relative z-10 py-6 text-center"
        style={{
          borderTop: "1px solid rgba(244,194,194,0.3)",
          backgroundColor: "#FFF0EE",
        }}
      >
        <p
          className="text-xs"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#6B6B6B",
            letterSpacing: "0.05em",
          }}
        >
          {footerText}
        </p>
      </footer>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function IndexPage() {
  return (
    <main>
      <HeroSection />
      <StoreInfoSection />
    </main>
  );
}
