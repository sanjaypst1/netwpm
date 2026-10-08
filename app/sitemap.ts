import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/case-studies";
import { artefacts } from "@/data/artefacts";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about",
    "/experience",
    "/case-studies",
    "/data-product-lab",
    "/role-alignment",
    "/artefacts",
    "/project",
    "/contact",
    "/privacy",
    "/terms",
    "/accessibility",
    ...caseStudies.map((item) => `/case-studies/${item.slug}`),
    ...artefacts.map((item) => `/artefacts/${item.slug}`),
  ];

  return pages.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-10-08"),
  }));
}
