"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button, Input, Modal, Toast, Loader } from "@/components/ui";

export default function Showcase() {
  const [modalOpen, setModalOpen] = useState(false);
  const [toast, setToast] = useState<{
    open: boolean;
    variant: "success" | "error" | "warning" | "info";
    message: string;
  }>({ open: false, variant: "success", message: "" });

  function showToast(variant: typeof toast.variant, message: string) {
    setToast({ open: true, variant, message });
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 mx-auto max-w-4xl px-5 sm:px-8 py-14 space-y-16">
        <div>
          <h1 className="font-display text-3xl font-semibold text-canopy-deep dark:text-parchment">
            Component Showcase
          </h1>
          <p className="mt-2 text-sm text-canopy/60 dark:text-parchment/50">
            All 5 UI library components — Button, Input, Modal, Toast, Loader.
          </p>
        </div>

        {/* BUTTON */}
        <section>
          <h2 className="font-display text-xl font-semibold mb-5 text-canopy-deep dark:text-parchment">
            Button
          </h2>
          <div className="flex flex-wrap gap-3 items-center">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="primary" loading>
              Loading
            </Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
            <Button variant="primary" size="sm">
              Small
            </Button>
            <Button variant="primary" size="lg">
              Large
            </Button>
          </div>
        </section>

        {/* INPUT */}
        <section>
          <h2 className="font-display text-xl font-semibold mb-5 text-canopy-deep dark:text-parchment">
            Input
          </h2>
          <div className="grid sm:grid-cols-2 gap-5 max-w-xl">
            <Input label="Destination" placeholder="Coorg, Munnar…" />
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              helperText="We won't spam you."
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              error="Password must be at least 8 characters."
            />
            <Input
              label="Search"
              placeholder="Search stays…"
              leftIcon={
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                  <circle
                    cx="11"
                    cy="11"
                    r="7"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    d="M16.5 16.5l4 4"
                  />
                </svg>
              }
            />
          </div>
        </section>

        {/* MODAL */}
        <section>
          <h2 className="font-display text-xl font-semibold mb-5 text-canopy-deep dark:text-parchment">
            Modal
          </h2>
          <Button variant="secondary" onClick={() => setModalOpen(true)}>
            Open Modal
          </Button>
          <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Book this stay"
            footer={
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    setModalOpen(false);
                    showToast("success", "Booking request sent!");
                  }}
                >
                  Confirm booking
                </Button>
              </>
            }
          >
            <p>
              You&apos;re about to request a booking at Cafe Magic Forest for
              2 nights. The host will confirm within 24 hours.
            </p>
          </Modal>
        </section>

        {/* TOAST */}
        <section>
          <h2 className="font-display text-xl font-semibold mb-5 text-canopy-deep dark:text-parchment">
            Toast
          </h2>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={() => showToast("success", "Booking confirmed!")}
            >
              Success toast
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => showToast("error", "Something went wrong.")}
            >
              Error toast
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => showToast("warning", "Check-in date is almost full.")}
            >
              Warning toast
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => showToast("info", "New stays added in Spiti Valley.")}
            >
              Info toast
            </Button>
          </div>
          <Toast
            open={toast.open}
            onClose={() => setToast((t) => ({ ...t, open: false }))}
            variant={toast.variant}
            message={toast.message}
          />
        </section>

        {/* LOADER */}
        <section>
          <h2 className="font-display text-xl font-semibold mb-5 text-canopy-deep dark:text-parchment">
            Loader
          </h2>
          <div className="flex flex-wrap items-center gap-10">
            <div className="flex flex-col items-center gap-2">
              <Loader variant="spinner" size="md" />
              <span className="text-xs text-canopy/50 dark:text-parchment/40">
                Spinner
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Loader variant="dots" size="md" />
              <span className="text-xs text-canopy/50 dark:text-parchment/40">
                Dots
              </span>
            </div>
            <div className="w-56 flex flex-col gap-2">
              <Loader variant="skeleton" lines={3} />
              <span className="text-xs text-canopy/50 dark:text-parchment/40">
                Skeleton
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
