import {
  createStyles,  
  Text,
  Paper,
  Stack
} from "@mantine/core";
import {
  IconTrophy,
  IconListSearch
} from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundImage: `linear-gradient(-60deg, ${
      theme.colorScheme === "light"
        ? theme.colors[theme.primaryColor][4]
        : theme.colors.dark[4]
    } 0%, ${
      theme.colorScheme === "light"
        ? theme.colors[theme.primaryColor][7]
        : theme.colors.dark[4]
    } 100%)`,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    display: "flex",

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  icon: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing.lg,
    color:
      theme.colorScheme === "light"
        ? theme.colors[theme.primaryColor][6]
        : theme.white,
  },

  stat: {
    minWidth: 98,
    paddingTop: theme.spacing.xl,
    minHeight: 140,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor:
      theme.colorScheme === "light" ? theme.white : theme.colors.dark[7],
  },

  label: {
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.colors.gray[6],
    lineHeight: 1.2,
  },

  value: {
    fontSize: theme.fontSizes.sm,
    fontWeight: 700,
    color: theme.colorScheme === "light" ? theme.black : theme.white,
  },

  count: {
    color: theme.colors.gray[6],
  },

  day: {
    fontSize: 44,
    fontWeight: 700,
    color: theme.white,
    lineHeight: 1,
    textAlign: "center",
    marginBottom: 5,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  month: {
    fontSize: theme.fontSizes.sm,
    color: theme.white,
    lineHeight: 1,
    textAlign: "center",
  },

  controls: {
    display: "flex",
    flexDirection: "column",
    marginRight: theme.spacing.xl * 2,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "row",
      alignItems: "center",
      marginRight: 0,
      marginBottom: theme.spacing.xl,
    },
  },

  date: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  control: {
    height: 28,
    width: "100%",
    color: theme.colors[theme.primaryColor][2],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.radius.md,
    transition: "background-color 50ms ease",

    [theme.fn.smallerThan("xs")]: {
      height: 34,
      width: 34,
    },

    "&:hover": {
      backgroundColor: theme.colors[theme.primaryColor][5],
      color: theme.white,
    },
  },

  controlIcon: {
    [theme.fn.smallerThan("xs")]: {
      transform: "rotate(-90deg)",
    },
  },
}));

const data = [
  { icon: IconTrophy, label: "Highest Rank", rank: "1st" },
  { icon: IconTrophy, label: "Lowest Rank", rank: "3rd" },
  { icon: IconListSearch, label: "Average Rank", rank: "2nd" },
  { icon: IconListSearch, label: "Average Results", rank: "2" },
];

const Stats = ( url: any) => {
  const { classes } = useStyles();

  const stats = data.map((stat) => (
    <Paper
      className={classes.stat}
      key={stat.label}
      p="xs"
      radius="md"
      shadow="md"
    >
      <stat.icon className={classes.icon} size={32} stroke={1.5} />
      <div>
        <Text className={classes.label}>{stat.label}</Text>
        <Text className={classes.count} size="xs">
          <span className={classes.value}>
            {stat.rank}
          </span>
        </Text>
      </div>
    </Paper>
  ));

  return (
    <div className={classes.root}>
      <div className={classes.controls}>
        <Stack sx={{ flex: 1 }}>{stats}</Stack>
      </div>      
    </div>
  );
};
export { Stats };
