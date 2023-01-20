import "./index.css";
// Global - App Context
import { AppContext } from "context";
// Mantine
import { NavigationProgress } from "@mantine/nprogress";
// Auth0
import { Auth0Provider, CacheLocation } from "@auth0/auth0-react";
import AppRoutes from "routes";
import { useState } from "react";

const AppBase: React.FC = () => {
  const [language, setLanguage] = useState<string>("en");
  const contextValue = {
    language,
    setLanguage,
  };

  const providerConfig = {
    domain: process.env.REACT_APP_AUTH0_DOMAIN || "",
    clientId: process.env.REACT_APP_AUTH0_CLIENT_ID || "",
    cacheLocation: "localstorage" as CacheLocation,
    redirectUri: window.location.origin,
  };

  return (
    <>
      <Auth0Provider {...providerConfig}>
          <AppContext.Provider value={contextValue}>
            <NavigationProgress />
            <AppRoutes />
          </AppContext.Provider>
        </Auth0Provider>
    </>
  );
};

export default AppBase;
