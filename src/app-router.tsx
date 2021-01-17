import { FC, ReactElement } from 'react';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

type AppRouterProps = {
  children: ReactElement;
};

const AppRouter: FC<AppRouterProps> = ({ children }) => (
  <Router history={history}>{children}</Router>
);

export default AppRouter;
