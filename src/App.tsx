import {
  Container, Title, Text, Space,
  Grid, Blockquote, Image, Divider,
  Group, Badge
} from '@mantine/core';
import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import Social from './Social';
import EducationPage from './EducationPage';
import WorkExperiencePage from './WorkExperiencePage';
import PersonalProjectsPage from './PersonalProjectsPage';
import ThemeSwitch from './ThemeSwitch';

import profile from './static/profile.png';

function App() {
  const styles = {
    profilePicWrapper: {
      position: "relative"
    },
    profilePic: {
      width: 160, margin: "auto",
      position: "absolute", right: "1.5rem"
    },
    header: {
      padding: "1.5rem", display: "flex",
      alignItems: "center", flexDirection: "column"
    }
  }

  const skills = [
    "Software development", "Natural language processing", "Database management (SQL, NoSQL)",
    "Big Data", "Feature engineering", "Machine learning", "Deep learning", "Data Visualization",
    "Applied mathematics", "Statistics", "Cloud"
  ];

  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles>
        <Container>
          <ThemeSwitch />
          <Divider size={10} color="dark" />
          <Space h="xl" />
          <Grid columns={24}>
            <Grid.Col span={12} style={styles.header as React.CSSProperties}>
              <Title order={1}>Anton Kozyriev</Title>
              <Text transform="uppercase">Chief Data Science Officer @ Postello.ai</Text>
              <Space h="md" />
              <Social />
            </Grid.Col>
            <Grid.Col span={12} style={styles.profilePicWrapper as React.CSSProperties}>
              <div style={styles.profilePic as React.CSSProperties}>
                <Image radius="xl" src={profile} alt="profile photo" />
              </div>
            </Grid.Col>
          </Grid>
          <Space h="xs" />
          <Group spacing="xs">
              {skills.map(skill => (
                  <Badge variant="gradient" gradient={{ from: 'indigo', to: 'blue' }}>{skill}</Badge>
              ))}
          </Group>
          <Space h="xs" />
          <Blockquote cite="My summary">
            I'm a Ukrainian graduate student interested in Web technologies and Big Data.
            Features that motivate me to develop are unique and challenging tasks, discoveries, and friendly team members.
            My strengths are <strong>creativity</strong>, <strong>perfectionism</strong>, <strong>competitiveness</strong>, <strong>persistence</strong>, and <strong>focusing on the final result</strong>.
          </Blockquote>
          <Space h="xl" />
          <EducationPage />
          <WorkExperiencePage />
          <PersonalProjectsPage />
        </Container>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
