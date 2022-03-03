import { Title, Divider, Space, Group, Badge } from '@mantine/core';

function SkillsPage() {
    const skills = [
        "Software development", "Natural language processing", "Database management (SQL, NoSQL)",
        "Big Data", "Feature engineering", "Machine learning", "Deep learning", "Data Visualization",
        "Applied mathematics", "Statistics", "Cloud"
    ];

    return (
        <div>
            <Title order={2}>Skills</Title>
            <Divider size="sm" color="dark" />
            <Space h="xs" />
            <Group spacing="xs">
                {skills.map(skill => (
                    <Badge variant="gradient" gradient={{ from: 'indigo', to: 'blue' }}>{skill}</Badge>
                ))}
            </Group>
            <Space h="xl" />
        </div>
    );
}

export default SkillsPage;
