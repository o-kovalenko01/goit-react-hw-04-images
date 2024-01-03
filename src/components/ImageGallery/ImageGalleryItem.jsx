import css from './ImageGallery.module.css';

export const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className={css.ImageGalleryItem} onClick={() => onClick(image)}>
      <img
        className={css.ImageGalleryItemImage}
        src={image.webformatURL}
        alt={image.id}
      />
    </li>
  );
};
