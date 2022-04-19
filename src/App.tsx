import Divider from './components/Divider';

import Avatar from './static/profile.png';

function App() {
  return (
    <div className="flex aspect-[9/16] w-screen flex-row">
      <div className="w-0 flex-none bg-sky-900 sm:w-72">
        <div className="flex flex-col text-mono text-slate-100 antialiased tracking-wide">
          <div className="p-8 text-center">
            <img src={Avatar} className="mx-auto mb-4 w-32 rounded-full ring-2 ring-slate-100 ring-offset-4 ring-offset-sky-900" alt="Avatar" />
            <h5 className="mb-0 text-xl font-bold leading-tight">Anton Kozyriev</h5>
            <p className="text-sm mt-1">Chief Data Science Officer</p>
          </div>
          <Divider text="Profile" />
          <div className="p-6 text-justify text-xs tracking-tight leading-tight">
            I'm a Ukrainian graduate student interested in Web technologies and Big Data. 
            Features that motivate me to develop are unique and challenging tasks, discoveries, and friendly team members. 
            My strengths are <span className="font-extrabold">creativity</span>, <span className="font-extrabold">perfectionism</span>, <span className="font-extrabold">competitiveness</span>, <span className="font-extrabold">persistence</span>, and <span className="font-extrabold">focusing on the final result</span>.
          </div>
          <Divider text="Contacts" />
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
