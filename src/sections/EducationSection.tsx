import { Space, Title, Divider } from '@mantine/core';
import EducationCard from '../components/EducationCard';

function EducationSection() {
    return (<div>
      <Title order={2}>Education</Title>
      <Divider size="sm" color="dark" />
      <Space h="xs" />
      <EducationCard
        degree="BACHELOR'S DEGREE, DATA SCIENCE"
        institution="Igor Sikorsky Kyiv Polytechnic Institute"
        institutionLink="https://www.linkedin.com/school/national-technical-university-of-ukraine-'kyiv-pol/"
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
      <EducationCard
        degree="MASTER'S DEGREE, DATA SCIENCE"
        institution="Igor Sikorsky Kyiv Polytechnic Institute"
        institutionLink="https://www.linkedin.com/school/national-technical-university-of-ukraine-'kyiv-pol/"
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

export default EducationSection;
