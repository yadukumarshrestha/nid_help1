import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NID Help Nepal",
    short_name: "NID Help",
    description: "An independent guide to Nepal's National Identity Card process.",
    start_url: "/ne",
    display: "standalone",
    background_color: "#f5f6f1",
    theme_color: "#123d3a",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }]
  };
}