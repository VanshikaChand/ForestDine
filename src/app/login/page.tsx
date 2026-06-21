import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Login() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-5 py-16 sm:py-24">
        <div className="w-full max-w-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-moss mb-3 text-center">
            Welcome back
          </p>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold text-canopy-deep text-center">
            Log in to ForestDine
          </h1>
          <p className="mt-2 text-sm text-canopy/60 text-center">
            This form is a placeholder shell — authentication isn&apos;t
            connected yet.
          </p>

          <form className="mt-8 flex flex-col gap-4">
            <div>
              <label
                htmlFor="email"
                className="text-xs font-medium text-canopy/70"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="mt-1.5 w-full rounded-xl border border-canopy/15 bg-white px-4 py-2.5 text-sm text-canopy-deep placeholder:text-canopy/40 outline-none focus:border-moss"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-xs font-medium text-canopy/70"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="mt-1.5 w-full rounded-xl border border-canopy/15 bg-white px-4 py-2.5 text-sm text-canopy-deep placeholder:text-canopy/40 outline-none focus:border-moss"
              />
            </div>
            <button
              type="button"
              className="mt-2 rounded-xl bg-moss px-4 py-2.5 text-sm font-semibold text-parchment transition-colors hover:bg-moss-light"
            >
              Log in
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
