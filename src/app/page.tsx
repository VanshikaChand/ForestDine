"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import CanopyDivider from "@/components/CanopyDivider";
import { Loader, Toast } from "@/components/ui";

type Stay = {
  id: string;
  title: string;
  description: string;
  tag: string;
  pricePerNight: number;
  rating: number;
  available: boolean;
};

export default function Home() {
  const [stays, setStays] = useState<Stay[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState({ open: false, message: "", variant: "error" as "error" | "info" });

  useEffect(() => {
    async function fetchStays() {
      try {
        const res = await fetch("http://localhost:5000/api/stays");
        if (!res.ok) throw new Error("Failed to fetch stays");
        const json = await res.json();
        setStays(json.data);
      } catch {
        setToast({ open: true, message: "Could not load stays — showing cached data.", variant: "info" });
        // fallback to static data if backend not running
        setStays([
          { id: "1", title: "Cafe Magic Forest", description: "A pine-shaded homestay and cafe in the Uttarakhand hills, with farm breakfasts and trail access.", tag: "Uttarakhand", pricePerNight: 3200, rating: 4.8, available: true },
          { id: "2", title: "Coorg Coffee Cottage", description: "Stay inside a working coffee estate, with evening cuppings and a view over the western ghats.", tag: "Coorg", pricePerNight: 4500, rating: 4.7, available: true },
          { id: "3", title: "Munnar Tea Hollow", description: "A two-room homestay tucked into a tea garden, run by a family who has farmed it for three generations.", tag: "Munnar", pricePerNight: 2800, rating: 4.9, available: true },
          { id: "4", title: "Spiti Stone House", description: "A traditional stone homestay at 11,000ft, with home-cooked Himachali meals and stargazing decks.", tag: "Spiti Valley", pricePerNight: 2200, rating: 4.6, available: false },
        ]);
      } finally {
        setLoading(false);
      }
    }
    fetchStays();
  }, []);

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
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-canopy-deep dark:text-parchment">
                Stays near the canopy
              </h2>
              <p className="mt-1 text-sm text-canopy/60 dark:text-parchment/50">
                Live data from the ForestDine API.
              </p>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <Loader variant="dots" size="lg" label="Loading stays…" />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {stays.map((stay) => (
                <Card
                  key={stay.id}
                  title={stay.title}
                  description={`${stay.description} · ₹${stay.pricePerNight.toLocaleString()}/night`}
                  tag={stay.tag}
                  actionLabel={stay.available ? "View stay" : "Unavailable"}
                  actionHref="/dashboard"
                />
              ))}
            </div>
          )}
        </section>

        <CanopyDivider flip />

        <section className="bg-parchment-dim dark:bg-canopy">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 grid sm:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-canopy-deep dark:text-parchment">
                Dining, not just a room.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-canopy/70 dark:text-parchment/60 max-w-md">
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

      <Toast
        open={toast.open}
        onClose={() => setToast((t) => ({ ...t, open: false }))}
        variant={toast.variant}
        message={toast.message}
      />
    </>
  );
}
