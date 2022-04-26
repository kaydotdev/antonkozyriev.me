import { ReactNode } from 'react';

export interface ProjectTimespanSection {
    logoSrc: string;
    timestamp: string;
    name: string;
    techBadges: ReactNode[];
    sourceCodeUrl?: string;
    demoUrl: string;
    description: string;
}

interface ProjectTimespanProps {
    sections: ProjectTimespanSection[]
}

function ProjectTimespan(props: ProjectTimespanProps) {
    return (
        <ol className="list-none border-l border-gray-300 sm:border-sky-900">
            {
                props.sections.map((section, i) => (
                    <li key={i} className="py-2">
                        <p className="ml-6 text-xs text-gray-500 print:text-xs sm:text-sm sm:text-gray-800">{section.timestamp}</p>
                        <div className="-ml-4 flex flex-row items-center">
                            <img src={section.logoSrc} className="h-8 w-8 rounded-full border-2 sm:border-sky-900 text-gray-500" alt="Pet project logo" />
                            <div className="ml-2">
                                <h4 className="text-base font-semibold text-gray-800 print:text-sm sm:text-xl mb-1">{section.name}</h4>
                                <div className="flex flex-row items-center gap-x-1">
                                  {section.techBadges.map((badge, j) => (<div key={j}>{badge}</div>))}  
                                </div>
                            </div>
                        </div>
                        <div className="ml-6 mb-2 print:mb-0">
                            <ol className="mt-2 list-none text-xs text-gray-500 print:mt-0 print:text-xs sm:text-sm sm:text-gray-800">
                                {
                                    section.sourceCodeUrl ? (
                                        <li className="mb-1 flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500 sm:text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <a className="block sm:hidden" href={section.sourceCodeUrl}><p className="text-gray-500 sm:text-gray-800 text-sm">View repository</p></a>
                                            <p className="hidden sm:block text-gray-500 sm:text-gray-800 text-xs tracking-tight break-all">{section.sourceCodeUrl}</p>
                                        </li>
                                    ) : (<></>)
                                }
                                <li className="mb-1 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500 sm:text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <a className="block sm:hidden" href={section.demoUrl}><p className="text-gray-500 sm:text-gray-800 text-sm">View demo</p></a>
                                    <p className="hidden sm:block text-gray-500 sm:text-gray-800 text-xs tracking-tight break-all">{section.demoUrl}</p>
                                </li>
                                <li className="mb-2">
                                    {section.description}
                                </li>
                            </ol>
                        </div>
                    </li>
                ))
            }
        </ol>
    );
}

export default ProjectTimespan;
