interface SkillBadgeProps {
    name: string;
}

function SkillBadge(props: SkillBadgeProps) {
    return (
        <div className="flex flex-row ml-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="ml-0.5 font-medium">{props.name}</span>
        </div>
    );
}

export default SkillBadge;
