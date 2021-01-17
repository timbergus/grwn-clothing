import './menu-item.scss';

import { FC } from 'react';
// In functional components we can use "withRouter".
import { useHistory, useRouteMatch } from 'react-router-dom';

const MenuItem: FC<MenuItemProps> = ({ section }) => {
  const history = useHistory();
  const match = useRouteMatch();

  const handleNavigate = () => history.push(match.url + section.linkUrl);

  return (
    <div className={`menu-item ${section.size}`} onClick={handleNavigate}>
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
};

export default MenuItem;
