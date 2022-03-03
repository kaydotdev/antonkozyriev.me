import {
    Card, Image, Text, Badge,
    Space, Group, Spoiler
} from '@mantine/core';

type ProjectProps = {
    imagePath: string,
    href: string,
    name: string,
    dateCaption: string,
    badges: string[],
    description: string,
}

function ProjectCard(props: ProjectProps) {
    return (
        <Card shadow="sm" padding="lg">
            <Card.Section>
                <Image src={props.imagePath} height={160} alt="thumbnail" />
            </Card.Section>

            <Space h="xs" />
            <Text variant="link" component="a" href={props.href}>{props.name}</Text>
            <Space h="xs" />

            <Group spacing="xs">
                {props.badges.map(badge => (
                    <Badge variant="gradient" gradient={{ from: 'indigo', to: 'blue' }}>{badge}</Badge>
                ))}
            </Group>

            <Space h="xs" />
            <Text size="xs" transform="uppercase">{props.dateCaption}</Text>
            <Space h="md" />
            <Text size="sm" style={{ lineHeight: 1.5, minHeight: 120 }}>
                <Spoiler maxHeight={90} showLabel="More" hideLabel="Less">
                    {props.description}
                </Spoiler>
            </Text>
        </Card>
    );
}

export default ProjectCard;
