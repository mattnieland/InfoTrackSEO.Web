// React
import { useState } from "react";
// Routing
import { Outlet } from "react-router-dom";
// Mantine
import {
  AppShell,  
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,  
} from "@mantine/core";
// Local - Components
import { MyHeader } from "./components";

const Layout: React.FC = () => {
  const [opened, setOpened] = useState(false);

  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            colorScheme: colorScheme,
            fontFamily: "'Poppins', sans-serif",
            fontFamilyMonospace: "'Space Mono', monospace",
            headings: { fontFamily: "'Poppins', sans-serif" },
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <AppShell
            asideOffsetBreakpoint="md"
            header={
              <MyHeader
                colorScheme={colorScheme}
                opened={opened}
                setOpened={setOpened}
                toggleColorScheme={() => {
                  toggleColorScheme();
                }}
              />
            }            
            navbarOffsetBreakpoint="md"
          >
            <Outlet />
          </AppShell>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};

export default Layout;
