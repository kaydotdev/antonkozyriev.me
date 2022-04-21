import Header from './components/Header';
import Divider from './components/Divider';
import LanguageBadge from './components/LanguageBadge';
import SkillBadge from './components/SkillBadge';
import SocialMediaButton from './components/SocialMediaButton';
import SocialMediaBadge from './components/SocialMediaBadge';
import CertificationBadge, { CertificationBadgeProps } from './components/CertificationBadge';
import Timespan, { TimespanSection } from './components/Timespan';

import Avatar from './static/profile.png';
import MotherlandFlag from './static/motherland_flag.svg';
import NewRuFlag from './static/new_ru_flag.svg';
import UKFlag from './static/uk_flag.svg';

import CourseraLogo from './static/coursera_logo.jpg';

function App() {
  const educationSection: TimespanSection[] = [
    {
      timestamp: "September 2020 - Present",
      title: "Master's degree in Data Science - Igor Sikorsky Kyiv Polytechnic Institute",
      events: [
        "Took the courses on the following topics: 'Fuzzy Mathematics', 'Risk theory', 'Data mining', 'Machine learning', 'Numerical Physics' and 'Big Data & Cloud';",
        "Wrote and presented a scientific paper on 'Investigation of the convergence rate of the stochastic finite-different method of optimization'."
      ]
    },
    {
      timestamp: "September 2016 - June 2020",
      title: "Bachelor's degree in Data Science - Igor Sikorsky Kyiv Polytechnic Institute",
      events: [
        "Took the courses on the following topics: 'Probability theory and statistics', 'Discrete mathematics', 'Linear algebra and analytical geometry', 'Control theory', 'Calculus', 'Numerical methods', 'Deep learning' and 'Object-oriented programming';",
        "Wrote and presented a thesis on 'Mathematical and software system for creating musical polyphonic compositions'."
      ]
    }
  ]

  const workExperienceSection: TimespanSection[] = [
    {
      timestamp: "November 2021 - Present",
      title: "Chief Data Science Officer - Postello.ai",
      events: [
        "Developed and maintained postello.ai application for generating articles and posts for popular social media platforms using natural language processing toolkit;",
        "Designed and implemented architecture for RDS."
      ]
    },
    {
      timestamp: "December 2020 - October 2021",
      title: "Professor Assistant - National Research Foundation of Ukraine",
      events: [
        "Assisted in research for gradient descent algorithms;",
        "Participated as a co-author of a paper on comparing gradient descent algorithms convergence speed."
      ]
    },
    {
      timestamp: "September 2019 - November 2020",
      title: "Fullstack Web Developer - Wolters Kluwer: CRA Wiz SaaS",
      events: [
        "Developed and maintained CRA WizNG SaaS - technology solutions to help you prepare for and ensure compliance;",
        "Designed and implemented architecture of database for a particular microservice;",
        "Implemented end-to-end functionality for regular request-response features (HTTPS) and real-time features (WebSockets)."
      ]
    }
  ];

  const certificationSection: CertificationBadgeProps[] = [
    {
      logoSrc: CourseraLogo,
      name: "Neural networks and Deep Learning",
      institution: "Deeplearning.ai",
      timestamp: "March 2020 - May 2020",
      href: "https://coursera.org/share/a98baf2ac0434d6efcdeb50084643a07"
    },
    {
      logoSrc: CourseraLogo,
      name: "Leadership and Emotional Intelligence",
      institution: "ISB",
      timestamp: "November 2020 - December 2020",
      href: "https://coursera.org/share/844a3c5041000ece5bf36392384db7d0"
    },
    {
      logoSrc: CourseraLogo,
      name: "Advanced Machine Learning",
      institution: "HSE",
      timestamp: "November 2020 - December 2020",
      href: "https://coursera.org/share/2c30c71a381dc146b511a33309642b10"
    },
    {
      logoSrc: CourseraLogo,
      name: "Linear algebra",
      institution: "Imperial College London",
      timestamp: "June 2020 - October 2020",
      href: "https://coursera.org/share/188f68d6ad88ff3eef98961e9086a861"
    },
    {
      logoSrc: CourseraLogo,
      name: "Multivariate calculus",
      institution: "Imperial College London",
      timestamp: "June 2020 - October 2020",
      href: "https://coursera.org/share/06f5f2576a99d093d6ebf16d66182032"
    },
    {
      logoSrc: CourseraLogo,
      name: "Principal component analysis",
      institution: "Imperial College London",
      timestamp: "June 2020 - October 2020",
      href: "https://coursera.org/share/c673eb14edd71538e7b9b6eaaad38fea"
    },
    {
      logoSrc: CourseraLogo,
      name: "Machine learning",
      institution: "Imperial College London",
      timestamp: "June 2020 - October 2020",
      href: "https://coursera.org/share/22d0fb5678b04bdcdf2fc6bb1f62a23e"
    }
  ];

  return (
    <div className="flex print:aspect-[1/1.4142] w-screen h-fit sm:flex-row flex-col">
      <div className="sm:w-72 w-screen flex-none sm:bg-sky-900 bg-slate-100">
        <div className="flex flex-col text-mono sm:text-slate-100 text-gray-800 antialiased tracking-wide">
          <div className="p-8 text-center">
            <img src={Avatar} className="mx-auto mb-4 w-32 rounded-full ring-2 sm:ring-slate-100 ring-sky-900 ring-offset-4 sm:ring-offset-sky-900 ring-offset-slate-100" alt="Avatar" />
            <h5 className="mb-0 text-xl font-bold leading-tight">Anton Kozyriev</h5>
            <p className="text-sm mt-1">Chief Data Science Officer</p>
            <div className="sm:hidden flex pt-2 flex-row flex-wrap justify-evenly sm:justify-center justify-items-stretch sm:gap-x-2 mt-6">
              <SocialMediaButton href="https://www.facebook.com/anton.kozyriev" color="#1877f2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-6 h-6"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
              </SocialMediaButton>
              <SocialMediaButton href="https://github.com/antonAce" color="#333">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-6 h-6"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
              </SocialMediaButton>
              <SocialMediaButton href="https://t.me/antonace" color="#0088cc">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-6 h-6"><path fill="currentColor" d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" /></svg>
              </SocialMediaButton>
              <SocialMediaButton href="https://linkedin.com/in/anton-kozyriev-66b272166" color="#0077b5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
              </SocialMediaButton>
              <SocialMediaButton href="https://www.instagram.com/tony.mnemonic" color="#c13584">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
              </SocialMediaButton>
            </div>
          </div>
          <div className="hidden sm:block">
            <Divider text="Contacts" />
            <div className="px-6 py-3">
              <SocialMediaBadge href="https://www.facebook.com/anton.kozyriev">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 text-slate-100"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
              </SocialMediaBadge>
              <SocialMediaBadge href="https://github.com/antonAce">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-4 h-4 text-slate-100"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
              </SocialMediaBadge>
              <SocialMediaBadge href="https://t.me/antonace">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-4 h-4 text-slate-100"><path fill="currentColor" d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" /></svg>
              </SocialMediaBadge>
              <SocialMediaBadge href="https://linkedin.com/in/anton-kozyriev-66b272166">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-slate-100"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
              </SocialMediaBadge>
              <SocialMediaBadge href="https://www.instagram.com/tony.mnemonic">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-slate-100"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
              </SocialMediaBadge>
            </div>
          </div>
          <Divider text="Profile" />
          <div className="p-6 text-justify text-sm tracking-tight leading-tight">
            I'm a Ukrainian graduate student interested in Web technologies and Big Data.
            Features that motivate me to develop are unique and challenging tasks, discoveries, and friendly team members.
            My strengths are <span className="font-extrabold">creativity</span>, <span className="font-extrabold">perfectionism</span>, <span className="font-extrabold">competitiveness</span>, <span className="font-extrabold">persistence</span>, and <span className="font-extrabold">focusing on the final result</span>.
          </div>
          <Divider text="Languages" />
          <div className="px-6 py-3">
            <LanguageBadge iconSrc={MotherlandFlag} name="Ukrainian" proficiency="Native speaker (C2)" rate={5} />
            <LanguageBadge iconSrc={NewRuFlag} name="Russian" proficiency="Bilingual (C2)" rate={5} />
            <LanguageBadge iconSrc={UKFlag} name="English" proficiency="Advanced (C1)" rate={4} />
          </div>
          <Divider text="Skills" />
          <div className="px-6 py-3 flex flex-wrap">
            <SkillBadge name="Software development" />
            <SkillBadge name="NLP" />
            <SkillBadge name="Databases" />
            <SkillBadge name="Feature engineering" />
            <SkillBadge name="AI/ML" />
            <SkillBadge name="Big Data" />
            <SkillBadge name="Deep learning" />
            <SkillBadge name="Data Visualization" />
            <SkillBadge name="Applied mathematics" />
            <SkillBadge name="Statistics" />
            <SkillBadge name="Cloud" />
          </div>
        </div>
      </div>
      <div className="sm:grow bg-slate-100">
        <div className="flex flex-col p-6">
          <Header text="Education">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </Header>
          <Timespan sections={educationSection} />

          <div className="mt-2"></div>

          <Header text="Work experience">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </Header>
          <Timespan sections={workExperienceSection} />

          <div className="mt-2"></div>

          <Header text="Certification">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </Header>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-stretch gap-x-4">
          {
            certificationSection.map(certificate => (<div><CertificationBadge {...certificate} /></div>))
          }
          </div>

          <div className="mt-2"></div>

          <Header text="Personal projects">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
          </Header>
        </div>
      </div>
    </div>
  );
}

export default App;
