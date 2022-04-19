import Divider from './components/Divider';

import Avatar from './static/profile.png';

function App() {
  return (
    <div className="flex aspect-[9/16] w-screen flex-row">
      <div className="w-0 flex-none bg-sky-900 sm:w-60">
        <div className="flex flex-col text-mono text-slate-100 antialiased tracking-wide">
          <div className="p-8 text-center">
            <img src={Avatar} className="mx-auto mb-4 w-32 rounded-full ring-2 ring-slate-100 ring-offset-4 ring-offset-sky-900" alt="Avatar" />
            <h5 className="mb-0 text-xl font-bold leading-tight">Anton Kozyriev</h5>
            <p className="text-sm mt-1">Chief Data Science Officer</p>
          </div>
          <Divider text="Profile" />
        </div>
      </div>
      <div className="grow bg-slate-100">
      </div>
    </div>
  );
}

export default App;
