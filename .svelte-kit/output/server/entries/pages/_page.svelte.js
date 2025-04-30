import "clsx";
import { e as ensure_array_like } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/escaping.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean) return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function ImageGallery($$payload) {
  let images = [
    {
      src: "gallery-images/image01.jpg",
      alt: "Image 1"
    },
    {
      src: "gallery-images/image02.jpg",
      alt: "Image 2"
    },
    {
      src: "gallery-images/image03.jpg",
      alt: "Image 3"
    }
    // Add more images as needed
  ];
  const each_array = ensure_array_like(images);
  $$payload.out += `<div class="gallery svelte-1bn3be1"><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let image = each_array[index];
    $$payload.out += `<img${attr("src", image.src)}${attr("alt", image.alt)} class="svelte-1bn3be1">`;
  }
  $$payload.out += `<!--]--></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
}
function _page($$payload) {
  $$payload.out += `<main>`;
  ImageGallery($$payload);
  $$payload.out += `<!----></main>`;
}
export {
  _page as default
};
