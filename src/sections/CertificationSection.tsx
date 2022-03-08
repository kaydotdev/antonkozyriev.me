import React from 'react';
import {
    Space, Title, Divider
} from '@mantine/core';

import CertificationCard from '../components/CertificationCard';

function CertificationSection() {
    return (
        <React.Fragment>
            <Title order={2}>Certification</Title>
            <Divider size="sm" color="dark" />
            <Space h="xs" />
                <CertificationCard
                    org="IMPERIAL COLLEGE LONDON"
                    spec="Mathematics for Machine Learning Specialization"
                    dateSpan="JUN 2020 - OCT 2020"
                    courses={[
                        {
                            name: "Linear algebra",
                            href: "https://coursera.org/share/188f68d6ad88ff3eef98961e9086a861"
                        },
                        {
                            name: "Multivariate calculus",
                            href: "https://coursera.org/share/06f5f2576a99d093d6ebf16d66182032"
                        },
                        {
                            name: "PCA",
                            href: "https://coursera.org/share/c673eb14edd71538e7b9b6eaaad38fea"
                        },
                        {
                            name: "Machine learning",
                            href: "https://coursera.org/share/22d0fb5678b04bdcdf2fc6bb1f62a23e"
                        }
                    ]}
                />
                <Space h="md" />
                <CertificationCard
                    org="DEEPLEARNING.AI"
                    spec="Neural networks and Deep Learning"
                    dateSpan="MAR 2020 - MAY 2020"
                    courses={[
                        {
                            name: "Neural networks",
                            href: "https://coursera.org/share/a98baf2ac0434d6efcdeb50084643a07"
                        }
                    ]}
                />
                <Space h="md" />
                <CertificationCard
                    org="ISB"
                    spec="Leadership and Emotional Intelligence"
                    dateSpan="NOV 2020 - DEC 2020"
                    courses={[
                        {
                            name: "Emotional Competence",
                            href: "https://coursera.org/share/844a3c5041000ece5bf36392384db7d0"
                        }
                    ]}
                />
                <Space h="md" />
                <CertificationCard
                    org="HSE"
                    spec="Advanced Machine Learning"
                    dateSpan="NOV 2020 - DEC 2020"
                    courses={[
                        {
                            name: "Natural Language Processing",
                            href: "https://coursera.org/share/2c30c71a381dc146b511a33309642b10"
                        }
                    ]}
                />
            <Space h="xl" />
        </React.Fragment>
    );
}

export default CertificationSection;
