import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import CanopyDivider from "@/components/CanopyDivider";

const STAYS = [
  {
    title: "Cafe Magic Forest",
    description:
      "A pine-shaded homestay and cafe in the Uttarakhand hills, with farm breakfasts and trail access.",
    tag: "Uttarakhand",
  },
  {
    title: "Coorg Coffee Cottage",
    description:
      "Stay inside a working coffee estate, with evening cuppings and a view over the western ghats.",
    tag: "Coorg",
  },
  {
    title: "Munnar Tea Hollow",
    description:
      "A two-room homestay tucked into a tea garden, run by a family who's farmed it for three generations.",
    tag: "Munnar",
  },
  {
    title: "Spiti Stone House",
    description:
      "A traditional stone homestay at 11,000ft, with home-cooked Himachali meals and stargazing decks.",
    tag: "Spiti Valley",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero
          eyebrow="Homestays & forest dining"
          headline="Stay where the trees do the talking."
          subheadline="Book eco-homestays and farm-to-table dining experiences hosted by the people who actually live there — not a hotel chain."
        />

        <CanopyDivider />

        <section id="listings" className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-canopy-deep">
                Stays near the canopy
              </h2>
              <p className="mt-1 text-sm text-canopy/60">
                A first look — full search and filtering land in Week 3.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STAYS.map((stay) => (
              <Card
                key={stay.title}
                title={stay.title}
                description={stay.description}
                tag={stay.tag}
                actionLabel="View stay"
                actionHref="/dashboard"
              />
            ))}
          </div>
        </section>

        <CanopyDivider flip />

        <section className="bg-parchment-dim">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 grid sm:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-canopy-deep">
                Dining, not just a room.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-canopy/70 max-w-md">
                Most ForestDine hosts cook with what&apos;s grown on-site that week. You&apos;ll see the dinner menu before you book the room, not after.
              </p>
            </div>
            <Card
              title="Tonight at Cafe Magic Forest"
              description="Foraged greens, wood-fired trout, and a pine-needle cordial — served at one long table with the other guests."
              tag="Sample menu"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
