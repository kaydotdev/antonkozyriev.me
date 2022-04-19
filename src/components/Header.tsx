interface HeaderProps {
    text: string;
}

function Header(props: HeaderProps) {
    return (
        <div className="bg-sky-900 uppercase px-4 py-2 mb-2 text-slate-100 font-extrabold w-fit">
            {props.text}
        </div>
    );
}

export default Header;
