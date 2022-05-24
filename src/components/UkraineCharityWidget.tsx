import { useState } from 'react';
import MotherlandFlag from '../static/flags/motherland_flag.svg';

function UkraineCharityWidget() {
    const [hidden, setHidden] = useState(false);
    const invasionTime = (Date.now() - new Date("02/24/2022").getTime());
    const invasionDays = Math.ceil(invasionTime / (1000 * 3600 * 24));
    const widgetStyle = hidden ? { display: 'none' } : {};

    return (
        <div className="fixed bottom-3 left-3 rounded-md shadow-2xl ring-1 ring-slate-900/10 dark:ring-slate-900/50" style={widgetStyle}>
            <div className="flex space-x-2 justify-center">
                <div className="bg-white dark:bg-slate-800 shadow-lg mx-auto w-64 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block">
                    <div className=" bg-white dark:bg-slate-800 flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-slate-200 dark:border-slate-900/50 rounded-t-lg">
                        <p className="text-primary tracking-tigher"><span className="font-extrabold">{invasionDays}</span> days of invasion</p>
                        <div className="flex items-center">
                            <button onClick={() => setHidden(true)} type="button" className="box-content w-4 h-4 ml-2 text-primary border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-slate-900 hover:opacity-75 hover:no-underline">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="p-3 bg-white dark:bg-slate-800 break-words text-slate-700 border-b border-slate-200 dark:border-slate-900/50">
                        <div className="flex flex-row justify-between items-center gap-x-2">
                            <div className="flex-none">
                                <img src={MotherlandFlag} className="w-10 h-10 rounded-md object-cover" alt="Flag" />
                            </div>
                            <div className="grow">
                                <a href="https://war.ukraine.ua" className="text-medium font-extrabold uppercase underline text-primary">Support Ukraine</a>
                                <p className="text-xs tracking-tight text-primary">Stop Russian Aggression!</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 flex flex-row justify-evenly items-center gap-x-2">
                        <a href="https://war.ukraine.ua/support-ukraine" className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out underline uppercase">Support</a>
                        <a href="https://war.ukraine.ua/donate" className="text-yellow-500 hover:text-yellow-600 transition duration-300 ease-in-out underline uppercase">Donate</a>
                        <a href="https://war.ukraine.ua/arm-ukraine-now" className="text-gray-800 hover:text-gray-900 dark:text-black transition duration-300 ease-in-out underline uppercase">Arm Ukraine</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UkraineCharityWidget;
