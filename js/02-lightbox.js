import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryListRef = document.querySelector('.gallery');

const itemsList = galleryItems
    .map(({ preview, original, description }) => {
        const divEl = document.createElement('div');
        divEl.classList.add('gallery__item');

        const linkEl = document.createElement('a');
        linkEl.classList.add("gallery__link")
        linkEl.href = "#";

        const imgEl = document.createElement('img');
        imgEl.classList.add("gallery__image");
        imgEl.src = preview;
        imgEl.dataset.action  = `large-image.jpg`;
    imgEl.alt = description;

  linkEl.append(imgEl);
  divEl.append(linkEl);
  return divEl;
});
console.log(itemsList);
galleryListRef.append(...itemsList);
console.log(galleryItems);
// <----------Modal------->
let modalWindow;
const openModal = (e) => {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
    return;
    }
    modalWindow = basicLightbox.create(`
    <img src="${e.target.src}" width="800" height="600">
`, {
        onShow: (openModal) => { document.addEventListener('keydown', onEscPress) }, 
        onClose: (openModal) => { document.removeEventListener('keydown', onEscPress) }
    });
    console.log('open window');;
    modalWindow.show();    
}
galleryListRef.addEventListener('click', openModal);

const onEscPress = event => {
  console.log(event.key);
  if (event.key === 'Escape') {
      console.log('Escape close window');
      modalWindow.close();
      
  }
};