"use client";

import { useEffect, useState } from "react";

type Item = { id: string; label: string };

/** Sticky section index on wide screens. Highlights the section in view. */
export default function CaseTOC({ items }: { items: readonly Item[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const line = Math.min(Math.max(window.innerHeight * 0.3, 160), 320);
      let current = items[0]?.id ?? "";
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= line) current = item.id;
      }
      const atEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8;
      if (atEnd && items.length > 0) current = items[items.length - 1].id;
      setActive(current);
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [items]);

  return (
    <aside aria-label="Case study sections" className="fixed left-6 top-28 z-40 hidden w-44 2xl:block">
      <p className="eyebrow mb-3">On this page</p>
      <ul className="border-l border-line">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={item.id === active ? "location" : undefined}
              className={`-ml-px block border-l py-1 pl-3 ${
                item.id === active ? "border-ink font-semibold" : "border-transparent text-muted hover:text-ink"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
