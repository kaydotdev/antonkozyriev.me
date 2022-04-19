import Divider from './components/Divider';
import LanguageBadge from './components/LanguageBadge';
import SkillBadge from './components/SkillBadge';
import Timespan, { TimespanSection } from './components/Timespan';

import Avatar from './static/profile.png';
import MotherlandFlag from './static/motherland_flag.svg';
import NewRuFlag from './static/new_ru_flag.svg';
import UKFlag from './static/uk_flag.svg';

function App() {
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
      title: "Professor assistant - National Research Foundation of Ukraine",
      events: [
        "Assisted in research for gradient descent algorithms;",
        "Participated as a co-author of a paper on comparing gradient descent algorithms convergence speed."
      ]
    },
    {
      timestamp: "September 2019 - November 2020",
      title: "Fullstack web developer - Wolters Kluwer: CRA Wiz SaaS",
      events: [
        "Developed and maintained CRA WizNG SaaS - technology solutions to help you prepare for and ensure compliance;",
        "Designed and implemented architecture of database for a particular microservice;",
        "Implemented end-to-end functionality for regular request-response features (HTTPS) and real-time features (WebSockets)."
      ]
    }
  ];

  return (
    <div className="flex aspect-[1/1.4142] w-screen flex-row">
      <div className="w-0 flex-none bg-sky-900 sm:w-72">
        <div className="flex flex-col text-mono text-slate-100 antialiased tracking-wide">
          <div className="p-8 text-center">
            <img src={Avatar} className="mx-auto mb-4 w-32 rounded-full ring-2 ring-slate-100 ring-offset-4 ring-offset-sky-900" alt="Avatar" />
            <h5 className="mb-0 text-xl font-bold leading-tight">Anton Kozyriev</h5>
            <p className="text-sm mt-1">Chief Data Science Officer</p>
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
      <div className="grow bg-slate-100">
        <div className="flex flex-col p-6">
          <Timespan sections={workExperienceSection} />
        </div>
      </div>
    </div>
  );
}

export default App;
