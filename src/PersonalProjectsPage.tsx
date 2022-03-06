import { Space, Title, Divider, Grid } from '@mantine/core';
import ProjectCard, { ProjectProps } from './ProjectCard';

import GithubLogo from './static/github_logo.png';
import BlogLogo from './static/coolengineer_logo.jpg';
import InAWordLogo from './static/in_a_word_logo.jpg';
import GradientDescent from './static/gradient_descent.png';
import DashboardLogo from './static/dashboard_logo.png';

function PersonalProjectsPage() {
    const gridSpan = 4;
    const personalProjectsList: ProjectProps[] = [
        {
            imagePath: GithubLogo,
            href: "https://github.com/antonAce",
            name: "OPENSOURCE CONTRIBUTOR – GitHub",
            dateCaption: "SEP 2016 – PRESENT",
            badges: ["Opensource", "Contribution"],
            description: "Contributed to Common ML and Calculus Algorithms in TheAlgorithms/C-Sharp. Contributed to Python package freezer brentvollebregt/auto-py-to-exe. Contributed to Python GUI library ChrisKnott/Eel.",
        },
        {
            imagePath: BlogLogo,
            href: "https://t.me/coolengineer",
            demoHref: "https://t.me/coolengineer",
            name: "PRACTICAL ENGINEERING – Open Telegram Blog",
            dateCaption: "DEC 2017 – JUL 2018",
            badges: ["Telegram", "Blog maintaining"],
            description: "Developed and maintained a personal blog in Telegram, with the primary topics of Innovations, IoT, AI, and Machine Learning. Wrote articles about IoT, differential equations, and Machine Learning.",
        },
        {
            imagePath: GradientDescent,
            href: "https://github.com/antonAce/adaptive-gradient-descent",
            demoHref: "https://colab.research.google.com/github/antonAce/adaptive-gradient-descent/blob/master/gradient_descent.ipynb",
            name: "ADAPTIVE STOCHASTIC GRADIENT DESCENT – Research paper",
            dateCaption: "OCT 2020 – DEC 2020",
            badges: ["Research", "Scientific paper"],
            description: "Made research is to compare the efficiency of modern optimization methods on common minimization problems (neural networks, logistic regression). Compared efficiency of standard gradient descent algorithms (Batch GD, Stochastic GD, Mini-batch GD, Momentum, Nesterov GD, ADAGRAD, RMSPROP, ADAM) on applied tasks of ML (TensorFlow, Numpy, Jupyter Notebook, Jupyter Lab, Conda).",
        },
        {
            imagePath: InAWordLogo,
            href: "https://github.com/antonAce/in-a-word-bot",
            demoHref: "https://t.me/in_a_word_bot",
            name: "IN A WORD BOT – Telegram bot summary generator",
            dateCaption: "FEB 2021 – PRESENT",
            badges: ["Telegram bot", "AI", "Summary"],
            description: "Developed and maintained a simple Telegram bot for processing articles and massive texts (as a plain text, file, or URL) and generating summary using TF-IDF algorithm and Poiner-Generator Deep Learning model (Python, MongoDB, Redis, Numpy, PyTorch, AIOHTTP/AIOGRAM). Deployed application to MS Azure Cloud service (Azure Functions, Azure Insights, Blob Storage, Queue Storage, Table Storage, Azure Cosmos DB).",
        },
        {
            imagePath: DashboardLogo,
            href: "https://github.com/antonAce/data-science-courses",
            demoHref: "https://data-science-courses.herokuapp.com",
            name: "DATA SCIENCE COURSES INSIGHTS – Interactive dashboard",
            dateCaption: "OCT 2021 – NOV 2021",
            badges: ["Dashboard", "Analytics"],
            description: "Collected data via web scraping from popular online platforms: Coursera, Stepik, Udemy, edX, Pluralsight, Alison, FutureLearn, and Skillshare. Developed web crawling bots (Python, Selenium, Zyte.com, Scrapy, Splash). Built map-reduce data processing pipelines (Conda, Jupyter, Apache Spark). Created interactive dashboard for data visualization and reporting (Streamlit, Plotly, Pandas).",
        }
    ];

    return (
        <div>
            <Title order={2}>Personal projects</Title>
            <Divider size="sm" color="dark" />
            <Space h="xs" />
            <Grid gutter="xl">
                {
                    personalProjectsList.map(
                        prj => (<Grid.Col span={gridSpan}><ProjectCard {...prj} /></Grid.Col>)
                    )
                }
            </Grid>  
            <Space h="xl" />
        </div>
    );
}

export default PersonalProjectsPage;
