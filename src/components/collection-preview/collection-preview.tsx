import { FC } from 'react';

import './collection-preview.scss';

import CollectionItem from '../collection-item/collection-item';

const CollectionPreview: FC<CollectionPreviewProps> = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <div className="title">{title.toUpperCase()}</div>
      <div className="preview">
        {items
          .filter((_, index) => index < 4)
          .map((item) => (
            <CollectionItem
              key={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              price={item.price}
            />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
