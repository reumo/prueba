import React, { ReactElement } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";

import { appStoreImplementation } from "../data/appStoreImplementation";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import UserView from '../../user/view/UserView';
import UsersView from '../../users/view/UsersView';


export type RequireAuthProps = {
  children: ReactElement;
  redirectTo: string;
}

export const RequireAuth = ({ children, redirectTo }: RequireAuthProps): ReactElement | null => {
  return !!sessionStorage.getItem('userToken') ? children : <Navigate to={redirectTo} />;
}

export const RedirectAuth = ({ children, redirectTo }: RequireAuthProps): ReactElement | null => {
  return !sessionStorage.getItem('userToken') ? children : <Navigate to={redirectTo} />;
}

function AppView() {

  return (
    <Provider store={appStoreImplementation}>
      <BrowserRouter>
        <Routes>
          <Route path="/"
            element={
              <RedirectAuth redirectTo="/users">
                <UserView />
              </RedirectAuth>
            }
          />
          <Route path='/users'
            element={
              <RequireAuth redirectTo="/">
                <UsersView />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default AppView;
