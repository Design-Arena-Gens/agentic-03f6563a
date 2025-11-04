import { MapPin, Search, Settings2, Sparkles, Star, Timer } from "lucide-react";

const quickActions = [
  {
    icon: "🛵",
    title: "Order delivery",
    description: "Signature dishes in 25 minutes",
    gradient: "from-amber-400/90 to-orange-500/90",
  },
  {
    icon: "🍽️",
    title: "Book a table",
    description: "Prime seating at coveted spots",
    gradient: "from-rose-400/90 to-amber-500/90",
  },
  {
    icon: "👨‍🍳",
    title: "Chef experiences",
    description: "Exclusive multi-course tastings",
    gradient: "from-emerald-400/90 to-teal-500/90",
  },
  {
    icon: "🧋",
    title: "Grab & go",
    description: "Ready when you arrive",
    gradient: "from-indigo-400/90 to-sky-500/90",
  },
];

const curatedExperiences = [
  {
    name: "Midnight Ramen Run",
    location: "Neo Tokyo District",
    eta: "Delivery in 20 min",
    distance: "1.2 km",
    rating: 4.9,
    tags: ["Lightning fast", "Late night"],
    accent: "from-slate-900 via-slate-800 to-slate-950",
    highlight: "Spicy miso torch charred pork",
    action: "Order",
  },
  {
    name: "Coastal Ember",
    location: "Pacifica Waterfront",
    eta: "Book for tonight",
    distance: "Chef's counter",
    rating: 4.8,
    tags: ["Wood-fired", "Tasting"],
    accent: "from-sky-800 via-slate-900 to-slate-950",
    highlight: "Seven-course ocean smoke journey",
    action: "Reserve",
  },
  {
    name: "Verdant + Bloom",
    location: "Greenwich District",
    eta: "Pickup in 15 min",
    distance: "0.6 km",
    rating: 4.7,
    tags: ["Plant-forward", "Seasonal"],
    accent: "from-emerald-700 via-teal-800 to-slate-950",
    highlight: "Citrus miso-glazed king trumpet",
    action: "Schedule",
  },
];

const featuredCollections = [
  {
    title: "Chef-curated sprints",
    description: "Menus engineered for peak flavor under 30 minutes.",
    pill: "Fast decisions",
  },
  {
    title: "Friday reservation radar",
    description: "Instant table drops from sought-after rooms.",
    pill: "Booking",
  },
  {
    title: "Late-night comforts",
    description: "The city’s best after-hours comfort plates.",
    pill: "Nightlife",
  },
];

const savedFavorites = [
  {
    name: "Silver Finch",
    detail: "Chef’s counter · Seasonal tasting",
    nextDrop: "Next release: 8:30 PM seating",
    tone: "from-slate-900 to-slate-950",
  },
  {
    name: "Bao Society",
    detail: "Delivery · Modern Taiwanese",
    nextDrop: "Your reorder: Crispy chili tofu bao",
    tone: "from-amber-500/90 to-orange-500/90",
  },
  {
    name: "Poolhouse",
    detail: "Pool bar · Sunset cocktails",
    nextDrop: "Saves you 12 min wait",
    tone: "from-sky-500/90 to-indigo-500/90",
  },
];

const liveTracking = [
  {
    title: "Ritual Coffee Lab",
    status: "Barista crafting your order",
    eta: "Ready for pickup in 6 min",
    stage: ["Order placed", "Beans grinding", "Pouring"],
  },
  {
    title: "Club Saffron",
    status: "Table confirmed • Host check-in at 7:50 PM",
    eta: "Tonight",
    stage: ["Waitlist joined", "Table released", "Confirmed"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-100 via-white to-white text-slate-900">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 pb-28 pt-8 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 shadow-sm ring-1 ring-slate-200">
                <MapPin className="h-4 w-4" /> Downtown East
              </span>
              <span className="hidden items-center gap-1 rounded-full bg-white/60 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-500 ring-1 ring-slate-200 sm:inline-flex">
                <Sparkles className="h-3.5 w-3.5" /> Curated for you
              </span>
            </div>
            <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <Settings2 className="h-5 w-5" />
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Tonight’s dining intelligence, crafted for fast moves.
            </h1>
            <p className="text-base text-slate-600 sm:text-lg">
              Filter by speed, mood, or chef to order, book, or save the right
              experience in seconds.
            </p>

            <label className="relative mt-2 flex items-center gap-3 rounded-3xl bg-white p-0.5 pr-2 shadow-sm ring-1 ring-slate-200 focus-within:ring-slate-400">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-slate-900 text-white">
                <Search className="h-5 w-5" />
              </span>
              <input
                className="flex-1 bg-transparent text-sm font-medium outline-none placeholder:text-slate-400 sm:text-base"
                placeholder="Search cuisines, chefs, moods, or dietary needs"
              />
              <button className="hidden rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white sm:block">
                Explore
              </button>
            </label>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 text-sm font-medium text-slate-600">
            {["Trending", "5 km", "Fastest", "Chef-led", "Groups", "Vegan", "Cocktails"].map(
              (filter) => (
                <button
                  key={filter}
                  className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-3.5 py-1.5 transition hover:border-slate-300 hover:text-slate-900"
                >
                  {filter}
                </button>
              ),
            )}
          </div>
        </header>

        <section className="flex gap-4 overflow-x-auto pb-1">
          {quickActions.map((action) => (
            <article
              key={action.title}
              className="min-w-[14rem] flex-1 rounded-3xl bg-white p-0.5 shadow-sm ring-1 ring-slate-200"
            >
              <div
                className={`flex h-full flex-col gap-3 rounded-[1.45rem] bg-gradient-to-br ${action.gradient} p-5 text-white`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{action.icon}</span>
                  <Timer className="h-5 w-5 opacity-80" />
                </div>
                <div className="space-y-1">
                  <h2 className="text-lg font-semibold">{action.title}</h2>
                  <p className="text-sm text-white/80">{action.description}</p>
                </div>
                <button className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide">
                  Start now
                  <span className="text-lg leading-none">›</span>
                </button>
              </div>
            </article>
          ))}
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold sm:text-2xl">Curated for right now</h2>
            <button className="text-sm font-semibold text-slate-500 hover:text-slate-900">
              View all
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {curatedExperiences.map((experience) => (
              <article
                key={experience.name}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-0.5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`flex h-full flex-col justify-between rounded-[1.45rem] bg-gradient-to-br ${experience.accent} p-5 text-white`}
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80">
                        {experience.distance}
                      </span>
                      <h3 className="text-lg font-semibold leading-tight sm:text-xl">
                        {experience.name}
                      </h3>
                      <p className="text-sm text-white/70">{experience.location}</p>
                    </div>
                    <div className="flex items-center gap-1 rounded-2xl bg-white/10 px-3 py-1 text-sm font-semibold">
                      <Star className="h-4 w-4 fill-white/90 text-white/90" />
                      {experience.rating}
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <p className="text-sm font-medium text-white/80">
                      {experience.highlight}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experience.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/12 px-3 py-1 text-xs font-semibold text-white/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm text-white/80">
                      <span className="inline-flex items-center gap-2 font-semibold">
                        <Timer className="h-4 w-4" />
                        {experience.eta}
                      </span>
                      <button className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-900 shadow-sm">
                        {experience.action}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold sm:text-2xl">Focus collections</h2>
            <button className="text-sm font-semibold text-slate-500 hover:text-slate-900">
              See schedules
            </button>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2">
            {featuredCollections.map((collection) => (
              <article
                key={collection.title}
                className="min-w-[16rem] flex-1 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="mb-3 inline-flex w-fit items-center gap-1 rounded-full bg-slate-900/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90">
                  {collection.pill}
                </span>
                <h3 className="text-lg font-semibold leading-tight text-slate-900">
                  {collection.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {collection.description}
                </p>
                <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                  Open spotlight
                  <span className="text-lg leading-none">›</span>
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold sm:text-2xl">Saved favorites</h2>
            <button className="text-sm font-semibold text-slate-500 hover:text-slate-900">
              Manage
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {savedFavorites.map((favorite) => (
              <article
                key={favorite.name}
                className="rounded-3xl border border-slate-200 bg-white p-0.5 shadow-sm"
              >
                <div
                  className={`flex h-full flex-col justify-between rounded-[1.45rem] bg-gradient-to-br ${favorite.tone} p-5 text-white`}
                >
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">{favorite.name}</h3>
                    <p className="text-sm text-white/80">{favorite.detail}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-white/75">
                    <span>{favorite.nextDrop}</span>
                    <span>★</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold sm:text-2xl">Live tracking</h2>
            <button className="text-sm font-semibold text-slate-500 hover:text-slate-900">
              Timeline
            </button>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {liveTracking.map((item) => (
              <article
                key={item.title}
                className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500">{item.status}</p>
                  </div>
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    {item.eta}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {item.stage.map((stage, index) => (
                    <div key={stage} className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                      <div
                        className={`grid h-9 w-9 place-items-center rounded-2xl text-sm ${
                          index === item.stage.length - 1
                            ? "bg-slate-900 text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <span className="min-w-[5rem] text-[0.7rem] uppercase tracking-wide">
                        {stage}
                      </span>
                      {index !== item.stage.length - 1 && (
                        <div className="h-px flex-1 bg-slate-200" />
                      )}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <nav className="fixed inset-x-0 bottom-4 z-40 mx-auto flex w-[90%] max-w-md items-center justify-between rounded-3xl border border-slate-200 bg-white px-6 py-3 shadow-lg">
        {[
          { label: "Discover", icon: "✨" },
          { label: "Orders", icon: "🧾" },
          { label: "Book", icon: "📅" },
          { label: "Saved", icon: "⭐" },
          { label: "Profile", icon: "👤" },
        ].map((item, index) => (
          <button
            key={item.label}
            className={`flex flex-col items-center text-xs font-semibold transition ${
              index === 0 ? "text-slate-900" : "text-slate-400 hover:text-slate-900"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
