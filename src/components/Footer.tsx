import Container from "./Container";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-10">
      <Container>
        <div className="flex flex-col gap-2 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.brand}. All rights reserved.</p>
          <p className="text-xs">Read Anywhere • Anytime • Anywhere With Camaradery</p>
        </div>
      </Container>
    </footer>
  );
}