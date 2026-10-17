import Image from "next/image";
import type { Visual } from "@/content/types";

const ratios: Record<NonNullable<Visual["ratio"]>, string> = {
  "16/9": "aspect-[16/9]",
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  "1/1": "aspect-square",
};

/**
 * An image slot. With no src it draws the wireframe cross and the title;
 * with a src it renders the image. The caption always says why it matters.
 */
export default function Placeholder({
  visual,
  caption = true,
  sizes = "(min-width: 1024px) 960px, 100vw",
}: {
  visual: Visual;
  caption?: boolean;
  sizes?: string;
}) {
  const ratio = ratios[visual.ratio ?? "16/9"];
  return (
    <figure>
      <div className={`ph ${ratio}`}>
        {visual.src ? (
          <Image src={visual.src} alt={visual.alt ?? ""} fill sizes={sizes} className="object-cover" />
        ) : (
          <>
            <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100" aria-hidden="true">
              <line x1="0" y1="0" x2="100" y2="100" stroke="var(--line)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <line x1="100" y1="0" x2="0" y2="100" stroke="var(--line)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            </svg>
            <span className="mono absolute left-3 top-3 bg-paper px-2 py-0.5 text-muted">
              IMG · {visual.ratio ?? "16/9"}
            </span>
            <span className="absolute inset-0 flex items-center justify-center p-6 text-center">
              <span className="bg-paper px-3 py-1">{visual.title}</span>
            </span>
          </>
        )}
      </div>
      {caption && <figcaption className="lede mt-3">{visual.caption}</figcaption>}
    </figure>
  );
}
