import { ReactNode } from 'react';

interface HeaderProps {
    text: string;
    children: ReactNode;
}

function Header(props: HeaderProps) {
    return (
        <div className="flex flex-row bg-sky-900 text-slate-100 px-4 py-2 mb-2 w-fit items-center">
            <div className="h-4 w-4 mr-2">
                {props.children}
            </div>
            <div className="uppercase font-extrabold">
                {props.text}
            </div>
        </div>
    );
}

export default Header;
