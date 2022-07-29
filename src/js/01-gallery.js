import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

function addImagesToGallery(images) {
  const galleryList = document.querySelector('.gallery');
  const galleryItems = images.map(image => {
    const {preview, original, description} = image;
    const galleryItem = document.createElement('a');
    galleryItem.className = 'gallery__item';
    galleryItem.href = original;
    galleryItem.insertAdjacentHTML('beforeend',
      `
                        <img
                          class="gallery__image"
                          src="${preview}"
                          data-source="${original}"
                          alt="${description}"
                        />
       `);

    return galleryItem;
  });

  galleryList.append(...galleryItems);

  return galleryList;
}

function configSimpleLightBox(imagesList) {
  const lightbox = new SimpleLightbox('.gallery .gallery__item', {
    'captionsData': 'alt',
    'captionDelay': 250,
  });

  for (const imagesListElement of imagesList) {
    imagesListElement.addEventListener('click', event => {
      event.preventDefault();

      lightbox.open();
    });
  }

  imagesList.addEventListener('click', event => {
    event.preventDefault();

    lightbox.open();
  });

}

configSimpleLightBox(addImagesToGallery(galleryItems));
