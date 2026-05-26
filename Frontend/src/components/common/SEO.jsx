import { useEffect } from "react";

const DEFAULT_TITLE = "Faran Academy";
const DEFAULT_DESCRIPTION =
  "Faran Academy provides primary education focused on academics, values, creativity, and student growth.";

function updateMeta(name, content, attribute = "name") {
  let tag = document.head.querySelector(`meta[${attribute}="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = "/logo192.png",
  type = "website",
}) {
  useEffect(() => {
    const fullTitle = title === DEFAULT_TITLE ? title : `${title} | ${DEFAULT_TITLE}`;

    document.title = fullTitle;
    updateMeta("description", description);
    updateMeta("og:title", fullTitle, "property");
    updateMeta("og:description", description, "property");
    updateMeta("og:image", image, "property");
    updateMeta("og:type", type, "property");
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", fullTitle);
    updateMeta("twitter:description", description);
  }, [description, image, title, type]);

  return null;
}
