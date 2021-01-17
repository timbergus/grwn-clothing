import './collection-item.scss';

import { FC } from 'react';

const CollectionItem: FC<Item> = ({ name, imageUrl, price }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{`$${price}`}</span>
    </div>
  </div>
);

export default CollectionItem;
