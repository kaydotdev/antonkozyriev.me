import { Space, Title, Divider, Grid } from '@mantine/core';
import WorkProjects from './WorkProjects';

import PostelloLogo from './static/postello_logo.jpg';
import NRFULogo from './static/nrfu_logo.jpg';
import WKLogo from './static/wk_logo.png';
import GithubLogo from './static/github_logo.png';

function WorkExperiencePage() {
    const gridSpan = 4;

    return (
        <div>
            <Title order={3}>Work experience</Title>
            <Divider size="sm" color="dark" />
            <Space h="xs" />
            <Grid gutter="xl">
                <Grid.Col span={gridSpan}>
                    <WorkProjects
                        imagePath={PostelloLogo}
                        href="https://app.postello.ai/"
                        name="CHIEF DATA SCIENCE OFFICER – Postello AI"
                        dateCaption="NOV 2021 – PRESENT"
                        badges={["Social media", "AI", "Web app"]}
                        description="Developed and maintained postello.ai application for generating articles and posts for popular social media platforms using natural language processing toolkit. Designed and implemented architecture for RDS."
                    />
                </Grid.Col>
                <Grid.Col span={gridSpan}>
                    <WorkProjects
                        imagePath={NRFULogo}
                        href="https://nrfu.org.ua/en/"
                        name="PROFESSOR ASSISTANT – National Research Foundation of Ukraine"
                        dateCaption="DEC 2020 – PRESENT"
                        badges={["Research", "Algorithms"]}
                        description="Assisted in research for gradient descent algorithms."
                    />
                </Grid.Col>
                <Grid.Col span={gridSpan}>
                    <WorkProjects
                        imagePath={WKLogo}
                        href="https://www.wolterskluwer.com/en/about-us/resources"
                        name="FULLSTACK WEB DEVELOPER – Wolters Kluwer: CRA Wiz SaaS"
                        dateCaption="SEP 2019 – NOV 2020"
                        badges={["Finances", "Web app"]}
                        description="Developed and maintained CRA WizNG SaaS - technology solutions to help you prepare for and ensure compliance. Designed and implemented architecture of database for a particular microservice. Implemented end-to-end functionality for regular request-response features (HTTPS) and real-time features (WebSockets)."
                    />
                </Grid.Col>
                <Grid.Col span={gridSpan}>
                    <WorkProjects
                        imagePath={GithubLogo}
                        href="https://github.com/antonAce"
                        name="OPENSOURCE CONTRIBUTOR – GitHub"
                        dateCaption="SEP 2016 – PRESENT"
                        badges={["Opensource", "Contribution"]}
                        description="Contributed to Common ML and Calculus Algorithms in TheAlgorithms/C-Sharp. Contributed to Python package freezer brentvollebregt/auto-py-to-exe. Contributed to Python GUI library ChrisKnott/Eel."
                    />
                </Grid.Col>
            </Grid>    
            <Space h="xl" />
        </div>
    );
}

export default WorkExperiencePage;
