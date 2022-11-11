import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallaryElements = document.querySelector(".gallery");

const gallery = galleryItems
  .map(
    (img) =>
      `<div class="gallery__item"><a class="gallery__link" href="${img.original}"><img class="gallery__image" src="${img.preview}" data-source="${img.original}" alt="${img.description}"/></a></div>`
  )
  .join("");

gallaryElements.innerHTML = gallery;

gallaryElements.addEventListener("click", openImg);

let instance;

function openImg(event) {
  event.preventDefault();
  if (event.target.nodeName === "DIV") {
    return;
  }
  instance = basicLightbox.create(`
    <div class="modal">
        <img src=${event.target.dataset.source} width="80%" style="margin: auto; display: block"> 
    </div>
`);
  instance.show();
  document.addEventListener("keydown", closeModal);
}

function closeModal(event) {
  if (event.key === "Escape") {
    instance.close();
    document.removeEventListener("keydown", closeModal);
  }
}
