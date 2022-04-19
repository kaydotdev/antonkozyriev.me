interface DividerProps {
    text: string;
}

function Divider(props: DividerProps) {
    return (
        <div className="uppercase ml-4 mr-4 border-b-[1px] text-slate-100">{props.text}</div>
    );
}

export default Divider;
