// Routing
import { Link } from "react-router-dom";
// Mantine
import {
  ActionIcon,    
  Group,
  Header,
  MediaQuery,
  SimpleGrid,
  useMantineTheme,
} from "@mantine/core";
// Icons
import { IconSun, IconMoonStars } from "@tabler/icons";
// Global - Assets - Images
import imgBanner from "assets/img/logo-banner.png";
import imgWhite from "assets/img/name-white.png";
// Local - TypeScript Types
import { IMyHeader } from "./types";
import { User } from "./components";

const MyHeader: React.FC<IMyHeader> = ({
  colorScheme,
  opened,
  setOpened,
  toggleColorScheme,
}: IMyHeader) => {
  const theme = useMantineTheme();
  return (
    <>
      <Header
        height={75}
        p="md"
        style={{
          backgroundImage:
            "linear-gradient(238deg, rgb(59 18 141 / 3%) 23%, rgb(1 175 250 / 4%))",
        }}
        sx={{  
          '@media (max-width: 769px)': {
            height: 70,
          },
        }}
      >
        <SimpleGrid cols={3}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Group position="left">
              <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                <Link
                  style={{ cursor: "pointer", textDecoration: "none" }}
                  to="/"
                >
                  <Group position="apart">
                    <img
                      alt="Logo"
                      src={
                        theme.colorScheme === "dark"
                          ? imgWhite
                          : imgBanner
                      }
                      style={{ height: 45 }}
                    />
                  </Group>
                </Link>
              </MediaQuery>
            </Group>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                  <Group position="apart">
                    <img
                      alt="Logo"
                      src={
                        theme.colorScheme === "dark"
                          ? imgWhite
                          : imgBanner
                      }
                      style={{ height: 45 }}
                    />
                  </Group>
            </MediaQuery>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <Group position="right">
              <ActionIcon
                onClick={() => {
                  toggleColorScheme();
                }}
                size={35}
                variant="default"
              >
                {colorScheme === "dark" ? (
                  <IconSun size={16} />
                ) : (
                  <IconMoonStars size={16} />
                )}
              </ActionIcon>
              <User />
            </Group>
          </div>
        </SimpleGrid>
      </Header>
    </>
  );
};

export { MyHeader };
