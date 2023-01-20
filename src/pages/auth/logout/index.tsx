// Mantine
import {
  createStyles,
  Paper,
  Title,
  Button,
  Container,
  Group,
} from "@mantine/core";
// Auth0
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 26,
    fontWeight: 900,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  controls: {
    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column-reverse",
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      width: "100%",
      textAlign: "center",
    },
  },
}));

const PageAuthLogin: React.FC = () => {
  const { classes } = useStyles();
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  return (
    <Container my={300} size={460}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Log out successful!
      </Title>
      <Paper mt="xl" p={30} radius="md" shadow="md" withBorder>
        <Group className={classes.controls} position="apart">
          <Button
            fullWidth            
            onClick={() => {
              handleLogin();
            }}
          >
            Log back in
          </Button>
        </Group>
      </Paper>
    </Container>
  );
};

export default PageAuthLogin;
