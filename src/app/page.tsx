export default function Home() {
  const menu = [
    {
      name: "Charred Peaches",
      desc: "burrata, basil oil, smoked honey",
      price: "$12",
    },
    {
      name: "Hearth Flatbread",
      desc: "rosemary, garlic confit, sea salt",
      price: "$11",
    },
    {
      name: "Embered Salmon",
      desc: "citrus glaze, fennel, roasted lemon",
      price: "$24",
    },
    {
      name: "Oak‑Fired Ribeye",
      desc: "chimichurri, crispy potatoes",
      price: "$32",
    },
    {
      name: "Wild Mushroom Risotto",
      desc: "thyme, parmesan, truffle oil",
      price: "$19",
    },
    {
      name: "Molten Chocolate Torte",
      desc: "cacao nib, vanilla crème",
      price: "$10",
    },
  ];

  const hours = [
    { d: "Mon–Thu", h: "11:30a – 9:00p" },
    { d: "Fri", h: "11:30a – 10:00p" },
    { d: "Sat", h: "10:00a – 10:00p" },
    { d: "Sun", h: "10:00a – 8:00p" },
  ];

  return (
    <div className="font-sans min-h-screen bg-[radial-gradient(1000px_600px_at_50%_-100px,rgba(255,144,54,0.25),transparent),linear-gradient(to_bottom,#0b0b0b,50%,#121212)] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href="#home" className="text-xl font-semibold tracking-wide">Ember & Thyme</a>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#menu" className="hover:text-orange-300 transition-colors">Menu</a>
            <a href="#about" className="hover:text-orange-300 transition-colors">About</a>
            <a href="#reserve" className="hover:text-orange-300 transition-colors">Reserve</a>
            <a href="#location" className="hover:text-orange-300 transition-colors">Location</a>
          </nav>
          <a
            href="#reserve"
            className="inline-flex items-center rounded-full bg-orange-500/90 hover:bg-orange-400 text-black font-medium px-4 py-2 text-sm shadow-lg shadow-orange-500/20"
            aria-label="Reserve a table"
          >
            Reserve
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[conic-gradient(at_10%_10%,#ff8c3b_0deg,#ffdd9a_120deg,#ff8c3b_240deg,#ffdd9a_360deg)] opacity-10" />
        <div className="mx-auto max-w-6xl px-4 py-24 md:py-32 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <p className="text-orange-300/90 font-medium tracking-wide">Wood‑Fired Kitchen</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight">
              Flame‑kissed flavors, seasonal ingredients.
            </h1>
            <p className="mt-4 text-white/80 max-w-prose">
              A cozy neighborhood spot for craft cocktails and dishes from our open hearth.
              Come for the glow, stay for the company.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#reserve"
                className="inline-flex items-center rounded-full bg-orange-500 hover:bg-orange-400 text-black font-medium px-6 py-3 shadow-lg shadow-orange-500/30"
              >
                Book a Table
              </a>
              <a
                href="#menu"
                className="inline-flex items-center rounded-full border border-white/20 hover:border-white/40 text-white px-6 py-3"
              >
                View Menu
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 bg-orange-500/20 blur-3xl rounded-full" />
            <div className="aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-0.5">
              <div className="h-full w-full rounded-[14px] bg-[radial-gradient(300px_200px_at_70%_20%,rgba(255,140,59,.35),transparent)] grid place-items-center">
                <div className="text-center px-6">
                  <div className="text-6xl md:text-7xl select-none">🔥</div>
                  <div className="mt-3 text-white/90">Open Hearth • Seasonal Menu • Craft Cocktails</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-semibold">Menu Highlights</h2>
          <span className="text-orange-300/80 text-sm">Seasonal • Locally Sourced</span>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menu.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition-colors"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-medium tracking-wide">{item.name}</h3>
                <span className="text-orange-300/90 font-semibold ml-4 whitespace-nowrap">
                  {item.price}
                </span>
              </div>
              <p className="mt-2 text-white/70 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Our Story</h2>
            <p className="mt-4 text-white/80">
              At Ember & Thyme, we cook with fire. Our open hearth brings a gentle
              smokiness and char to vibrant, seasonal ingredients sourced from local
              farms and fisheries. Pull up a chair and let the glow of the flames set the tone.
            </p>
            <ul className="mt-6 space-y-2 text-white/80 text-sm">
              <li>• Sustainable seafood and produce</li>
              <li>• Natural wines and craft cocktails</li>
              <li>• Weekend brunch with live acoustic sets</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-medium">Chef's Note</h3>
            <p className="mt-2 text-white/70 text-sm">
              "Fire is our favorite ingredient. It transforms, it heightens, it
              comforts. We aim to keep things simple and soulful—letting good
              products and honest technique shine."
            </p>
            <div className="mt-4 text-white/60 text-sm">— Chef Mara L.</div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section id="reserve" className="px-4">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-orange-400/30 bg-gradient-to-br from-orange-500/20 via-orange-400/10 to-transparent p-8 md:p-12">
          <div className="grid gap-6 md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-semibold">Reserve your table</h2>
              <p className="mt-2 text-white/80">
                Walk‑ins welcome. For parties of 6+ please call ahead.
              </p>
            </div>
            <div className="flex gap-3 md:justify-end">
              <a
                href="tel:+11234567890"
                className="inline-flex items-center rounded-full border border-white/20 hover:border-white/40 px-5 py-3"
              >
                Call (123) 456‑7890
              </a>
              <a
                href="mailto:reservations@emberandthyme.example"
                className="inline-flex items-center rounded-full bg-orange-500 hover:bg-orange-400 text-black font-medium px-5 py-3 shadow-lg shadow-orange-500/30"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section id="location" className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-medium">Visit Us</h3>
            <p className="mt-2 text-white/80 text-sm">
              123 Hearth Street, Suite B
              <br />
              Riverbend, OR 97000
            </p>
            <a
              href="https://maps.google.com/?q=123%20Hearth%20Street%20Riverbend%20OR"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex text-orange-300/90 hover:text-orange-300"
            >
              Open in Maps →
            </a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-medium">Hours</h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {hours.map((row) => (
                <li key={row.d} className="flex items-center justify-between text-sm">
                  <span className="text-white/70">{row.d}</span>
                  <span className="text-white/90">{row.h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-sm text-white/70">
          <div>
            © {new Date().getFullYear()} Ember & Thyme. All rights reserved.
          </div>
          <div className="flex gap-5">
            <a href="#menu" className="hover:text-white">Menu</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#reserve" className="hover:text-white">Reserve</a>
            <a href="#location" className="hover:text-white">Location</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
