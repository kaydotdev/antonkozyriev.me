import React from 'react';
import {
    Text, List, Group, Space
} from '@mantine/core';

type CertificationAccreditation = {
    name: string,
    href: string
}

type CertificationCardProps = {
    spec: string,
    org: string,
    dateSpan: string,
    courses: CertificationAccreditation[]
}

function CertificationCard(props: CertificationCardProps) {
    return (
        <React.Fragment>
            <Group spacing="xs">
                <Text><Text weight={700} component="span">{props.org}</Text> - {props.spec}</Text>
            </Group>
            <Text size="xs" transform="uppercase">{props.dateSpan}</Text>
            <Space h="xs" />
            <List withPadding size="xs">
                {
                    props.courses.map(course => (
                        <List.Item key={course.name}>
                            <Text variant="link" component="a" href={course.href}>{course.name}</Text>
                        </List.Item>
                    ))
                }  
            </List>
        </React.Fragment>
    );
}

export default CertificationCard;
