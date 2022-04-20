import { ReactNode } from 'react';

interface SocialMediaBadgeProps {
    href: string;
    children: ReactNode;
}

function SocialMediaBadge(props: SocialMediaBadgeProps) {
    return (
        <div className="flex flex-row items-center mb-2.5">
            {props.children}
            <p className="text-xs font-base tracking-tight ml-3">{props.href}</p>
        </div>
    );
}

export default SocialMediaBadge;
