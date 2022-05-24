export interface TimespanSection {
    timestamp: string;
    title: string;
    events: string[];
}

interface TimespanProps {
    sections: TimespanSection[];
}

function Timespan(props: TimespanProps) {
    return (
        <ol className="border-l border-primary">
        {
            props.sections.map((section, i) => (
                <li key={i}>
                    <div className="flex flex-start items-center pt-3">
                        <div className="bg-slate-300 dark:bg-slate-500 sm:bg-sky-900 dark:sm:bg-slate-900 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                        <p className="text-secondary sm:text-sm print:text-xs text-xs">{section.timestamp}</p>
                    </div>
                    <div className="ml-4 mb-2 print:mb-0">
                        <h4 className="text-primary font-semibold sm:text-xl print:text-sm text-base mb-1.5 print:mb-0">{section.title}</h4>
                        <ol className="ml-5 mt-2 print:mt-0 list-disc text-secondary sm:text-sm print:text-xs text-xs">
                        {
                            section.events.map((event, j) => (<li key={j}>{event}</li>))
                        }
                        </ol>
                    </div>
                </li>
            ))
        }
        </ol>
    );
}

export default Timespan;
