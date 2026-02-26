import { site } from "@/lib/site";

export default function LynkAppFloat() {
  return (
    <a
      href={site.lynkUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-2xl bg-white border border-emerald-300 px-4 py-3 text-sm font-semibold text-emerald-700 shadow-soft transition hover:bg-emerald-50 hover:border-emerald-400"
      aria-label="Buka produk di lynk.id"
      title="Buka produk di lynk.id"
    >
      <img src="/lynkid.svg" alt="lynk.id" className="h-8 w-8" />
      <span className="hidden sm:inline">Checkout</span>
    </a>
  );
}