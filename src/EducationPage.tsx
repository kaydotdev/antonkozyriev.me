import { Space, Title, Divider } from '@mantine/core';
import EduSection from './EduSection';

function EducationPage() {
    return (<div>
      <Title order={3}>Education</Title>
      <Divider size="sm" color="dark" />
      <Space h="xs" />
      <EduSection
        degree="BACHELOR'S DEGREE, DATA SCIENCE"
        institution="Igor Sikorsky Kyiv Polytechnic Institute"
        startDate="SEP 2016"
        endDate="JUN 2020"
        courses={
          [
            "Probability theory and statistics",
            "Discrete mathematics",
            "Linear algebra and analytical geometry",
            "Control theory",
            "Calculus",
            "Numerical methods",
            "Deep learning",
            "Object-oriented programming"
          ]
        } />
      <Space h="md" />
      <EduSection
        degree="MASTER'S DEGREE, DATA SCIENCE"
        institution="Igor Sikorsky Kyiv Polytechnic Institute"
        startDate="SEP 2020"
        endDate="JUN 2022"
        courses={
          [
            "Fuzzy Mathematics",
            "Risk theory",
            "Data mining",
            "Machine learning",
            "Numerical Physics",
            "Big Data & Cloud"
          ]
        } />
        <Space h="xl" />
    </div>);
}

export default EducationPage;
