interface DividerProps {
    text: string;
}

function Divider(props: DividerProps) {
    return (
        <div className="font-extrabold uppercase ml-6 mr-6 border-b-[1px] sm:border-slate-100 border-slate-800
                                                                          sm:text-slate-100 text-slate-800
                                                                          dark:border-slate-100 dark:text-slate-100">{props.text}</div>
    );
}

export default Divider;
