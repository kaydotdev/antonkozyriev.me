import { Space, Title, Divider, Grid } from '@mantine/core';
import ProjectCard from '../components/ProjectCard';

import PostelloLogo from '../static/postello_logo.jpg';
import NRFULogo from '../static/nrfu_logo.jpg';
import WKLogo from '../static/wk_logo.png';

function WorkExperienceSection() {
    const gridSpan = 4;

    return (
        <div>
            <Title order={2}>Work experience</Title>
            <Divider size="sm" color="dark" />
            <Space h="xs" />
            <Grid gutter="xl">
                <Grid.Col span={gridSpan}>
                    <ProjectCard
                        imagePath={PostelloLogo}
                        href="https://app.postello.ai/"
                        name="CHIEF DATA SCIENCE OFFICER – Postello AI"
                        dateCaption="NOV 2021 – PRESENT"
                        badges={["Social media", "AI", "Web app"]}
                        description={[
                            "Developed and maintained postello.ai application for generating articles and posts for popular social media platforms using natural language processing toolkit.",
                            "Designed and implemented architecture for RDS."
                        ]}
                    />
                </Grid.Col>
                <Grid.Col span={gridSpan}>
                    <ProjectCard
                        imagePath={NRFULogo}
                        href="https://nrfu.org.ua/en/"
                        name="PROFESSOR ASSISTANT – National Research Foundation of Ukraine"
                        dateCaption="DEC 2020 – PRESENT"
                        badges={["Research", "Algorithms"]}
                        description={[
                            "Assisted in research for gradient descent algorithms.",
                            "Participated as a co-author of a paper on comparing gradient descent algorithms convergence speed."
                        ]}
                    />
                </Grid.Col>
                <Grid.Col span={gridSpan}>
                    <ProjectCard
                        imagePath={WKLogo}
                        href="https://www.wolterskluwer.com/en/about-us/resources"
                        name="FULLSTACK WEB DEVELOPER – Wolters Kluwer: CRA Wiz SaaS"
                        dateCaption="SEP 2019 – NOV 2020"
                        badges={["Finances", "Web app"]}
                        description={[
                            "Developed and maintained CRA WizNG SaaS - technology solutions to help you prepare for and ensure compliance.",
                            "Designed and implemented architecture of database for a particular microservice.",
                            "Implemented end-to-end functionality for regular request-response features (HTTPS) and real-time features (WebSockets)."
                        ]}
                    />
                </Grid.Col>
            </Grid>    
            <Space h="xl" />
        </div>
    );
}

export default WorkExperienceSection;
