'use client';

import { useState } from 'react';

type ProductImage = {
  src: string;
  alt: string;
};

export default function ProductGallery({
  images,
  productName,
}: {
  images: ProductImage[];
  productName: string;
}) {
  const [selected, setSelected] = useState(0);
  const image = images[selected] ?? images[0];

  return (
    <div className="product-detail-gallery">
      <div className="product-detail-stage">
        <span>{String(selected + 1).padStart(2, '0')} / PRODUCT VIEW</span>
        <img src={image.src} alt={image.alt} fetchPriority="high" />
      </div>
      {images.length > 1 && (
        <div className="product-detail-thumbnails" aria-label="Product views">
          {images.map((item, index) => (
            <button
              type="button"
              key={item.src}
              aria-label={`Show ${productName} view ${index + 1}`}
              aria-pressed={selected === index}
              onClick={() => setSelected(index)}
            >
              <img src={item.src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
