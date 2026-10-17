import Link from "next/link";
import { SiteFooter, SiteNav } from "@/components/SiteChrome";

export default function NotFound() {
  return (
    <>
      <SiteNav />
      <main className="wrap flex-1 py-24">
        <p className="eyebrow mb-4">404</p>
        <h1 className="display">This page does not exist.</h1>
        <Link href="/" className="btn mt-8">Go home</Link>
      </main>
      <SiteFooter />
    </>
  );
}
