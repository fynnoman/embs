/**
 * Unsplash photo references. Format: `photo-{id}`.
 * Resolved via makeUnsplashUrl() to the images.unsplash.com CDN.
 * Swap any ID for a different photo as needed.
 */
export const IMG = {
  // Hero / brand
  heroCraftsman: "photo-1504148455328-c376907d081c",
  heroWorkshop: "photo-1621905252507-b35492cc74b4",
  materialGrain: "photo-1452860606245-08befc0ff44b",
  portrait: "photo-1507003211169-0a1dd7228f2d",
  workshopBench: "photo-1565372195458-9de0b320ef04",

  // Bereich images (ordered by slug)
  innenausbau: "photo-1540518614846-7eded433c457",
  kuechen: "photo-1556909114-f6e7ad7d3136",
  moebel: "photo-1618220179428-22790b461013",
  badmoebel: "photo-1552321554-5fefe8c9ef14",
  buero: "photo-1497366216548-37526070297c",
  ladenbau: "photo-1441984904996-e0b6ba687e04",
  schlafzimmer: "photo-1505691938895-1758d7feb511",
  tische: "photo-1555041469-a586c61ea9bc",
} as const;

export function unsplashSrc(
  id: string,
  { w = 1600, h, q = 80 }: { w?: number; h?: number; q?: number } = {}
): string {
  const params = new URLSearchParams({
    auto: "format",
    fit: "crop",
    w: String(w),
    q: String(q),
  });
  if (h) params.set("h", String(h));
  return `https://images.unsplash.com/${id}?${params.toString()}`;
}

export function bereichImage(slug: string): string {
  const map: Record<string, string> = {
    innenausbau: IMG.innenausbau,
    kuechen: IMG.kuechen,
    moebel: IMG.moebel,
    badmoebel: IMG.badmoebel,
    buero: IMG.buero,
    ladenbau: IMG.ladenbau,
    schlafzimmer: IMG.schlafzimmer,
    tische: IMG.tische,
  };
  return map[slug] ?? IMG.materialGrain;
}
