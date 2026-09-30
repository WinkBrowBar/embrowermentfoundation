export function pageMeta(title: string, description: string, image = "/images/logo.png") {
  const full = title ? `${title} — Embrowerment® Foundation` : "Embrowerment® Foundation";
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { property: "og:title", content: full },
      { property: "og:description", content: description },
      { property: "og:image", content: image },
      { name: "twitter:image", content: image },
    ],
  };
}
