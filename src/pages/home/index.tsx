import { useState } from "react";
// Mantine
import { Space, Flex, Group, Grid, Select } from "@mantine/core";
// Local - Components
import { Keywords, Search, ResultsTable, Stats } from "./components";

const PageHome: React.FC = () => {
  const [url, setUrl] = useState<string | null>(null);
  // const PRIMARY_COL_HEIGHT = 300;
  // const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

  return (
    <>
      <Grid columns={12}>        
        <Grid.Col md={4}>
          
        </Grid.Col>
        <Grid.Col md={4}>
          <Flex>
            <Keywords />
            <Space w="sm" />
            <Search />
          </Flex>
        </Grid.Col>
        <Grid.Col md={4}>
        <Group position="right">
          <Select
            data={[
              { value: '1', label: 'https://www.infotrack.com' },
              { value: '2', label: 'https://www.onelegal.com' },
            ]}
            label="Tracked Urls"
            onChange={setUrl}
            placeholder="Pick one"
          />
        </Group>
        </Grid.Col>
      </Grid>
      <br />
      <Grid columns={12}>
        <Grid.Col md={1} sm={1}>
          <Stats url={url} />
        </Grid.Col>
        <Grid.Col md={10} sm={1}>
          <Grid>
            <Grid.Col>
              <ResultsTable url={url} />
            </Grid.Col>
          </Grid>                    
        </Grid.Col>
      </Grid>
    </>
  );
};

export default PageHome;
