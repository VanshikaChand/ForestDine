import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-5 sm:px-8 py-16 sm:py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-moss mb-4">
            Host Dashboard
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-canopy-deep">
            Your bookings will live here.
          </h1>
          <p className="mt-5 text-base text-canopy/70 leading-relaxed max-w-2xl">
            This is a placeholder shell for the host dashboard — booking
            requests, calendar, and payouts aren&apos;t wired up yet. That
            functionality comes in a later week once the backend and
            database are connected.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
