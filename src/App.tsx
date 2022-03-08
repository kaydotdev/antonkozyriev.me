import { Container } from '@mantine/core';
import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import ThemeSwitch from './components/ThemeSwitch';

import HeaderSection from './sections/HeaderSection';
import EducationSection from './sections/EducationSection';
import WorkExperienceSection from './sections/WorkExperienceSection';
import PersonalProjectsSection from './sections/PersonalProjectsSection';
import CertificationSection from './sections/CertificationSection';

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles>
        <Container>
          <ThemeSwitch />
          <HeaderSection />
          <EducationSection />
          <WorkExperienceSection />
          <PersonalProjectsSection />
          <CertificationSection />
        </Container>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
