import Container from "./Container";
import ButtonLink from "./ButtonLink";
import { site } from "@/lib/site";

const nav = [

  { label: "Isi Paket", href: "#contents" },
  { label: "FAQ", href: "#faq" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#beranda" className="font-bold tracking-tight text-zinc-900">
            <img src="/logo.svg" alt="Logo" className="h-40 w-32" />
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink href={site.lynkUrl} external variant="primary">
              Checkout
            </ButtonLink>
          </div>
        </div>
      </Container>
    </header>
  );
}