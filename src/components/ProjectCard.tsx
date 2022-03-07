import React from 'react';
import {
    Card, Image, Text, Badge,
    Space, Group, Spoiler, List
} from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';

export type ProjectProps = {
    imagePath: string,
    href: string,
    demoHref?: string;
    name: string,
    dateCaption: string,
    badges: string[],
    description: string[],
}

function ProjectCard(props: ProjectProps) {
    return (
        <Card shadow="sm" padding="lg" style={{ minHeight: "27rem" }}>
            <Card.Section>
                <Image src={props.imagePath} height={160} alt="thumbnail" />
            </Card.Section>

            <Space h="xs" />
            <Text variant="link" component="a" href={props.href}>{props.name}</Text>
            <Space h="xs" />

            <Group spacing="xs">
                {props.badges.map(badge => (
                    <Badge key={badge} variant="gradient" gradient={{ from: 'indigo', to: 'blue' }}>{badge}</Badge>
                ))}
            </Group>

            <Space h="xs" />
            <Group position="apart">
                <Text size="xs" transform="uppercase">{props.dateCaption}</Text>
                {
                    !!props.demoHref ? (
                        <Text variant="link" component="a" size="xs" href={props.demoHref}>LIVE DEMO</Text>
                    ) : (<React.Fragment></React.Fragment>)
                }
            </Group>
            
            <Space h="md" />

            <Text size="sm" style={{ lineHeight: 1.5, minHeight: "2rem" }}>
                <Spoiler maxHeight={90} showLabel="More" hideLabel="Less">
                    <List
                        spacing="xs"
                        size="sm"
                        icon={<FontAwesomeIcon icon={faHashtag}></FontAwesomeIcon>}
                    >
                        {
                            props.description.map(d => (<List.Item key={d}>{d}</List.Item>))
                        }
                    </List>
                </Spoiler>
            </Text>
        </Card>
    );
}

export default ProjectCard;
