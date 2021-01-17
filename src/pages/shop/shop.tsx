import './shop.scss';

import { SHOP_DATA } from './data';

import CollectionPreview from '../../components/collection-preview/collection-preview';

const Shop = () => (
  <div className="shop">
    {SHOP_DATA.map((collection) => (
      <CollectionPreview
        key={collection.id}
        title={collection.title}
        items={collection.items}
      />
    ))}
  </div>
);

export default Shop;
