import {
  Container, Title, Text, Space,
  Grid, Blockquote, Image, Divider
} from '@mantine/core';
import Social from './Social';
import EducationPage from './EducationPage';
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

  return (
    <Container>
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
      <Blockquote cite="My summary">
        I'm a Ukrainian graduate student interested in the field of Web technologies and Big Data.
        Features that motivate me to develop are unique and challenging tasks, discoveries, and friendly team members.
        My strengths are <strong>ideation</strong>, <strong>perfectionism</strong>, competitiveness, persistence, and focusing on the final result.
      </Blockquote>
      <Space h="xl" />
      <EducationPage />
    </Container>
  );
}

export default App;
