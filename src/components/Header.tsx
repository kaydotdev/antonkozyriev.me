import { ReactNode } from 'react';

interface HeaderProps {
    text: string;
    children: ReactNode;
}

function Header(props: HeaderProps) {
    return (
        <>
            <div className="hidden sm:flex flex-row bg-sky-900 text-slate-100 px-4 py-2 mb-2 print:mb-1 items-center">
                <div className="h-4 w-4 mr-2 print:h-3 print:w-3">
                    {props.children}
                </div>
                <div className="uppercase font-extrabold print:text-sm">
                    {props.text}
                </div>
            </div>
            <div className="sm:hidden mb-3 font-extrabold uppercase border-b-[1px] sm:border-slate-100 border-slate-800 sm:text-slate-100 text-slate-800">{props.text}</div>
        </>
    );
}

export default Header;
