import { MetadataRoute } from "next";

const SITE_URL = "https://investment-personality.vercel.app";

const RESULT_CODES = [
  "DGRN", "FMOD", "YOLO", "HODL", "ALGO", "STRE",
  "CHIK", "GHOST", "NEWS", "MATH", "PRAY", "FIRE",
  "BLUE", "SHOR", "GOLD", "FLEX"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const resultPages = RESULT_CODES.map((code) => ({
    url: `${SITE_URL}/result/${code}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3
    },
    ...resultPages
  ];
}
