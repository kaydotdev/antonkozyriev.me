export interface CertificationBadgeHref {
    name: string;
    href: string;
}

export interface CertificationBadgeProps {
    logoSrc: string;
    name: string;
    institution: string;
    timestamp: string;
    hrefs: CertificationBadgeHref[];
}

function CertificationBadge(props: CertificationBadgeProps) {
    return (
        <div className="border-l border-gray-300 sm:border-none sm:border-sky-900">
            <div className="p-2">
                <div className="flex flex-row items-center">
                    <img src={props.logoSrc} className="w-10 h-10 rounded-lg" alt="Certification platform logo" />
                    <div className="ml-2">
                        <h4 className="flex flex-row items-center text-gray-800 font-semibold sm:text-base text-sm mb-0">{props.institution}</h4>
                        <p className="text-gray-500 sm:text-gray-800 sm:text-sm text-xs">{props.name}</p>
                    </div>
                </div>
                <div className="flex flex-row items-center mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500 sm:text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-500 sm:text-gray-800 sm:text-sm text-xs">{props.timestamp}</p>
                </div>
                <div>
                    <ol className="ml-5 mt-2 list-none text-gray-500 sm:text-gray-800 text-xs">
                    {
                        props.hrefs.map(href => (
                            <li>
                                <div className="flex flex-row items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500 sm:text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                    </svg>
                                    <div className="ml-2">
                                        <p className="text-gray-800 font-semibold text-sm mb-0">{href.name}</p>
                                        <p className="text-gray-500 sm:text-gray-800 text-xs">{href.href}</p>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default CertificationBadge;
