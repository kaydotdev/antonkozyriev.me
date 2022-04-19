interface DividerProps {
    text: string;
}

function Divider(props: DividerProps) {
    return (
        <div className="uppercase ml-6 mr-6 border-b-[1px] text-slate-100">{props.text}</div>
    );
}

export default Divider;
