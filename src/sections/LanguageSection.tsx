import React from 'react';
import {
    Space, Title, Divider,
    Image, List
} from '@mantine/core';

import MotherlandFlag from '../static/motherland_flag.svg';
import NewRuFlag from '../static/new_ru_flag.svg';
import UKFlag from '../static/uk_flag.svg';

function LanguageSection() {
    const countrySize = 36;

    return (
        <React.Fragment>
            <Title order={2}>Languages</Title>
            <Divider size="sm" color="dark" />
            <Space h="xl" />
            <List
                spacing="md"
                size="md"
                center
                withPadding
            >
                <List.Item
                    icon={
                        <Image
                            radius="xl" width={countrySize}
                            height={countrySize} src={MotherlandFlag}
                        />
                    }
                >
                    Ukrainian - Native Proficiency (C2)
                </List.Item>
                <List.Item
                    icon={
                        <Image
                            radius="xl" width={countrySize}
                            height={countrySize} src={NewRuFlag}
                        />
                    }
                >
                    Russian - Bilingual Proficiency (C2)
                </List.Item>
                <List.Item
                    icon={
                        <Image
                            radius="xl" width={countrySize}
                            height={countrySize} src={UKFlag}
                        />
                    }
                >
                    English - Professional Working Proficiency (C1)
                </List.Item>
            </List>
            <Space h="xl" />
        </React.Fragment>
    );
}

export default LanguageSection;
