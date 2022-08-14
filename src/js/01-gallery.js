import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

function addImagesToGallery(images) {
  const galleryList = document.querySelector('.gallery');
  const galleryItems = images.map(image => {
    const {preview, original, description} = image;
    return (
      `
                <a class="gallery__item" href="${original}">
                    <img
                      class="gallery__image"
                      src="${preview}"
                      alt="${description}"
                    />
                </a>

       `);
  }).join('');

  galleryList.insertAdjacentHTML('beforeend', galleryItems);

  return galleryList;
}

function configSimpleLightBox(imagesList) {
  const lightbox = new SimpleLightbox('.gallery .gallery__item', {
    'captionsData': 'alt',
    'captionDelay': 250,
  });
  const galleryImages = [...imagesList.querySelectorAll('.gallery__image')];

  galleryImages.forEach(image => {
    image.addEventListener('click', event => {
      event.preventDefault();

      lightbox.open(event.target);
    });
  });

}

configSimpleLightBox(addImagesToGallery(galleryItems));
