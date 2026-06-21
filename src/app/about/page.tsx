import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CanopyDivider from "@/components/CanopyDivider";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-moss mb-4">
            About ForestDine
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-canopy-deep">
            Built for hosts who already live in the forest.
          </h1>
          <p className="mt-5 text-base text-canopy/70 leading-relaxed">
            ForestDine started as a way to help small, family-run homestays —
            the kind tucked into coffee estates and pine forests — get found
            by travelers without handing over a cut to a hotel chain. This
            page is a placeholder for now; the full story, host onboarding
            details, and team page land in a later week.
          </p>
        </section>
        <CanopyDivider />
      </main>
      <Footer />
    </>
  );
}
