import { Group, ActionIcon } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook, faKaggle, faTelegram,
    faGithub, faLinkedin, faMedium
} from '@fortawesome/free-brands-svg-icons';

function Social() {
    return (
        <Group position="left">
            <ActionIcon
                component="a" target="_blank" variant="hover" size="xl" radius="lg"
                rel="noopener noreferrer" href="https://www.facebook.com/anton.kozyriev" color="blue"
            ><FontAwesomeIcon icon={faFacebook} size="lg" /></ActionIcon>
            <ActionIcon
                component="a" target="_blank" variant="hover" size="xl" radius="lg"
                rel="noopener noreferrer" href="https://github.com/antonAce" color="dark"
            ><FontAwesomeIcon icon={faGithub} size="lg" /></ActionIcon>
            <ActionIcon
                component="a" target="_blank" variant="hover" size="xl" radius="lg" 
                rel="noopener noreferrer" href="https://t.me/antonace" color="blue"
            ><FontAwesomeIcon icon={faTelegram} size="lg" /></ActionIcon>
            <ActionIcon
                component="a" target="_blank" variant="hover" size="xl" radius="lg"
                rel="noopener noreferrer" href="https://linkedin.com/in/anton-kozyriev-66b272166" color="blue"
            ><FontAwesomeIcon icon={faLinkedin} size="lg" /></ActionIcon>
            <ActionIcon
                component="a" target="_blank" variant="hover" size="xl" radius="lg"
                rel="noopener noreferrer" href="https://medium.com/@tony.mnemonic" color="dark"
            ><FontAwesomeIcon icon={faMedium} size="lg" /></ActionIcon>
            <ActionIcon
                component="a" target="_blank" variant="hover" size="xl" radius="lg"
                rel="noopener noreferrer" href="https://www.kaggle.com/antonkozyriev" color="blue"
            ><FontAwesomeIcon icon={faKaggle} size="lg" /></ActionIcon>
        </Group>
    );
}

export default Social;
