import { ReactNode } from 'react';

interface SocialMediaButtonProps {
    color: string;
    children: ReactNode;
}

function SocialMediaButton(props: SocialMediaButtonProps) {
    const buttonStyles = {
        backgroundColor: props.color
    };

    return (
        <button type="button" className="inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" style={buttonStyles}>
            {props.children}
        </button>
    );
}

export default SocialMediaButton;
