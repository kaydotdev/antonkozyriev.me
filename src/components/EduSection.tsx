import { Text, List, Group, Space } from '@mantine/core';

type EduSectionProps = {
    degree: string,
    institution: string,
    institutionLink: string,
    startDate: string,
    endDate: string,
    courses: string[]
}

function EduSection(props: EduSectionProps) {
    return (
        <div>
            <Group spacing="xs">
                <Text weight={700}>{props.degree}</Text>
                <Text color="gray"> - </Text>
                <Text variant="link" component="a" href={props.institutionLink}>{props.institution}</Text>
            </Group>
            <Text size="xs" transform="uppercase">{props.startDate} - {props.endDate}</Text>
            <Space h="xs" />
            <List withPadding size="xs">
                {props.courses.map(course => (<List.Item key={course}>{course}</List.Item>))}  
            </List>
        </div>
    );
}

export default EduSection;
