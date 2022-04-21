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
        <ol className="border-l border-gray-300 sm:border-sky-900">
        {
            props.sections.map(section => (
                <li>
                    <div className="flex flex-start items-center pt-3">
                        <div className="bg-gray-300 sm:bg-sky-900 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                        <p className="text-gray-500 sm:text-gray-800 sm:text-sm text-xs">{section.timestamp}</p>
                    </div>
                    <div className="ml-4 mb-2">
                        <h4 className="text-gray-800 font-semibold sm:text-xl text-base mb-1.5">{section.title}</h4>
                        <ol className="ml-5 mt-2 list-disc text-gray-500 sm:text-gray-800 sm:text-sm text-xs">
                        {
                            section.events.map(event => (<li>{event}</li>))
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
