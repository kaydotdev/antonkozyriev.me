import { ReactNode } from 'react';

interface SocialMediaButtonProps {
    text: string;
    color: string;
    children: ReactNode;
}

function SocialMediaButton(props: SocialMediaButtonProps) {
    const buttonStyles = {
        backgroundColor: props.color
    };

    return (
        <button type="button" className="inline-flex p-2 mb-2 text-white tracking-tight font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out items-center" style={buttonStyles}>
            <div>{props.children}</div>
            <div className="hidden sm:block mx-2 font-bold">{props.text}</div>
        </button>
    );
}

export default SocialMediaButton;
