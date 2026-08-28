export interface GalleryCategory {
  slug: string;
  label: string;
  images: string[];
  videos: string[];
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  {
    slug: "stitch-braids",
    label: "Stitch Braids",
    images: [
      "Facetune_03-06-2026-01-23-39.jpeg",
      "Facetune_23-01-2026-01-29-22.jpeg",
      "Facetune_31-01-2026-00-40-56.jpeg",
    ],
    videos: [],
  },
  {
    slug: "barrel-twists",
    label: "Barrel Twists",
    images: [
      "IMG_5525.jpeg",
      "IMG_3986.jpeg",
      "Facetune_26-01-2026-20-45-17.jpeg",
      "Facetune_26-01-2026-02-41-52.jpeg",
      "IMG_3764.jpeg",
      "IMG_2965.jpeg",
      "Facetune_16-02-2026-18-28-33.jpeg",
      "Facetune_24-01-2026-02-00-00.jpeg",
      "IMG_3509.jpeg",
      "IMG_2045.jpeg",
      "IMG_3947.jpeg",
    ],
    videos: [
      "IMG_2641.mov",
      "IMG_2714.mov",
      "IMG_2966.mov",
      "IMG_2969.mov",
      "IMG_3040.mov",
      "IMG_3774.mov",
      "IMG_5405.mov",
    ],
  },
  {
    slug: "regular-retwist",
    label: "Regular Retwist",
    images: ["IMG_2913.jpeg", "Facetune_29-01-2026-13-41-30.jpeg", "IMG_3729.jpeg"],
    videos: ["IMG_3117.mov", "IMG_4757.mov"],
  },
  {
    slug: "two-strand-twists",
    label: "2 Strand Twists",
    images: [
      "IMG_2860.jpeg",
      "IMG_3733.jpeg",
      "IMG_3067.jpeg",
      "IMG_2946.jpeg",
      "IMG_2871.jpeg",
    ],
    videos: ["IMG_2861.mov", "IMG_3292.mov"],
  },
];

export const galleryImgPath = (slug: string, file: string) =>
  `/images/shawnie/gallery/${slug}/${file}`;
export const galleryVidPath = (slug: string, file: string) =>
  `/videos/shawnie/gallery/${slug}/${file}`;

/** Flat list of every photo across all categories, tagged with its category. */
export const ALL_GALLERY_PHOTOS = GALLERY_CATEGORIES.flatMap((cat) =>
  cat.images.map((file) => ({
    src: galleryImgPath(cat.slug, file),
    category: cat.label,
    slug: cat.slug,
  }))
);

/** Flat list of every video across all categories, tagged with its category. */
export const ALL_GALLERY_VIDEOS = GALLERY_CATEGORIES.flatMap((cat) =>
  cat.videos.map((file) => ({
    src: galleryVidPath(cat.slug, file),
    category: cat.label,
    slug: cat.slug,
  }))
);

/** A hand-picked, visually varied set for use in homepage highlight strips. */
export const FEATURED_WORK = [
  { type: "image" as const, src: galleryImgPath("stitch-braids", "Facetune_23-01-2026-01-29-22.jpeg"), category: "Stitch Braids" },
  { type: "video" as const, src: galleryVidPath("barrel-twists", "IMG_2966.mov"), category: "Barrel Twists" },
  { type: "image" as const, src: galleryImgPath("barrel-twists", "IMG_5525.jpeg"), category: "Barrel Twists" },
  { type: "image" as const, src: galleryImgPath("two-strand-twists", "IMG_2860.jpeg"), category: "2 Strand Twists" },
  { type: "video" as const, src: galleryVidPath("regular-retwist", "IMG_3117.mov"), category: "Regular Retwist" },
  { type: "image" as const, src: galleryImgPath("regular-retwist", "IMG_2913.jpeg"), category: "Regular Retwist" },
  { type: "image" as const, src: galleryImgPath("barrel-twists", "Facetune_26-01-2026-20-45-17.jpeg"), category: "Barrel Twists" },
  { type: "video" as const, src: galleryVidPath("two-strand-twists", "IMG_2861.mov"), category: "2 Strand Twists" },
];
