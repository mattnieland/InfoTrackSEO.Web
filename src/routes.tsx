// Routing
import { Route, Routes } from "react-router-dom";
// Auth0
import { useAuth0 } from "@auth0/auth0-react";
// Layout
import Layout from "layout";
// Pages
import PageHome from "pages/home";
import Page404 from "pages/404";
import PageAuthLogin from "pages/auth/login";
import PageAuthLogout from "pages/auth/logout";

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route element={<Layout />}>
              <Route element={<PageHome />} index />                          
              <Route element={<Page404 />} path="*" />
            </Route>
          </>
       ) : (
          <>            
            <Route element={<PageAuthLogin />} path="/auth/login" />
            <Route element={<PageAuthLogout />} path="/auth/logout" />                       
            <Route element={<PageAuthLogin />} path="*" />
          </>
        )}
      </Routes>
    </>
  );
};

export default AppRoutes;
