import './menu-item.scss';

import { FC } from 'react';

const MenuItem: FC<MenuItemProps> = ({ section }) => (
  <div className={`menu-item ${section.size}`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${section.imageUrl})`,
      }}
    ></div>
    <div className="content">
      <div className="title">{section.title.toUpperCase()}</div>
      <div className="subtitle">SHOP NOW</div>
    </div>
  </div>
);

export default MenuItem;
