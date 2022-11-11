import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

let instance;

galleryList.insertAdjacentHTML("beforeend", galaryItem(galleryItems));

function galaryItem(item) {
  return item
    .map(
      (img) =>
        `<div class="gallery__item"><a class="gallery__link" href="${img.original}"><img class="gallery__image" src="${img.preview}" data-source="${img.original}" alt="${img.description}"/></a></div>`
    )
    .join("");
}

function imgOpen(event) {
  instance = basicLightbox.create(
    `
         <img src="${event.dataset.source}" width="800" height="600">
    `
  );

  instance.show();
}

galleryList.addEventListener("click", onElement);

function onElement(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  imgOpen(event.target);

  document.addEventListener("keydown", closeModal);
}

function closeModal(event) {
  if (event.key === "Escape") {
    instance.close();
    document.removeEventListener("keydown", closeModal);
  }
}
