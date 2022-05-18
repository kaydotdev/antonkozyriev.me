import { useState, useEffect } from 'react';
import { matchTheme } from '../utils/theme';

function ThemeSwitcher() {
    const [darkMode, setDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

    const changeColorScheme = () => {
        matchTheme(!darkMode);
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => setDarkMode(event.matches));
    }, []);

    return (
        <div className="fixed bottom-3 right-3 rounded-full shadow-2xl ring-2 ring-slate-900 dark:ring-sky-600">
            <button onClick={changeColorScheme} className="p-3 bg-slate-100 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-900 shadow-lg mx-auto w-12 h-12 text-sm pointer-events-auto bg-clip-padding rounded-full block transition duration-150 ease-in-out">
                {
                    darkMode ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    )
                }
            </button>
        </div>
    );
}

export default ThemeSwitcher;
