import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryListRef = document.querySelector('.gallery');

const itemsList = galleryItems
    .map(({ original, preview, description }) => {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>`
    })
    .join("");
galleryListRef.insertAdjacentHTML("beforeend", itemsList);

console.log(itemsList);
console.log(galleryItems);
// <----------Modal------->
let modalWindow = new SimpleLightbox(
        '.gallery a', { captionsData: 'alt', captionDelay: 250 }
);
  

// <-----варіант 2 з append----->
// const itemsList = galleryItems
//     .map(({ preview, original, description }) => {
//         const divEl = document.createElement('div');
//         const linkEl = document.createElement('a');
//         linkEl.classList.add("gallery__item")
//         linkEl.href = original;
//         const imgEl = document.createElement('img');
//         imgEl.classList.add("gallery__image");
//         imgEl.src = preview;
//         imgEl.alt = description;

//   linkEl.append(imgEl);
//   divEl.append(linkEl);
//   return divEl;
// });
// galleryListRef.append(...itemsList);