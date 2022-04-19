import Divider from './components/Divider';
import LanguageBadge from './components/LanguageBadge';

import Avatar from './static/profile.png';
import MotherlandFlag from './static/motherland_flag.svg';
import NewRuFlag from './static/new_ru_flag.svg';
import UKFlag from './static/uk_flag.svg';

function App() {
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
          <div className="p-6">
            <LanguageBadge iconSrc={MotherlandFlag} name="Ukrainian" proficiency="Native speaker (C2)" rate={5} />
            <LanguageBadge iconSrc={NewRuFlag} name="Russian" proficiency="Bilingual (C2)" rate={5} />
            <LanguageBadge iconSrc={UKFlag} name="English" proficiency="Advanced (C1)" rate={4} />
          </div>
          <Divider text="Skills" />
          <div className="p-6">

          </div>
        </div>
      </div>
      <div className="grow bg-slate-100">
      </div>
    </div>
  );
}

export default App;
