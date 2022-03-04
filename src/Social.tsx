import { useState } from 'react';
import {
    Group, ActionIcon, Dialog, Text,
    TextInput, Button, Space, Textarea
} from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook, faKaggle, faTelegram,
    faGithub, faLinkedin, faMedium
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Social() {
    const [emailSubject, setEmailSubject] = useState("");
    const [emailMessage, setEmailMessage] = useState("");
    const [mailDialogOpen, setMailDialogOpened] = useState(false);

    const sendPersonalEmail = () => {
        window.location.href = `mailto:anton.kozyriev99@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailMessage)}`;
        setMailDialogOpened(false);
    };

    return (
        <div>
           <Group position="left">
                <ActionIcon onClick={() => setMailDialogOpened((open) => !open)} variant="hover" size="xl" radius="lg" color="red"
                ><FontAwesomeIcon icon={faEnvelope} size="lg" /></ActionIcon>
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

            <Dialog opened={mailDialogOpen} withCloseButton
                onClose={() => setMailDialogOpened(false)}
                size="lg" radius="md" position={{ bottom: 20, left: 20 }}
            >
                <Text size="sm" style={{ marginBottom: 10 }} weight={500}>Send personal email</Text>
                <TextInput
                    placeholder="Your subject" value={emailSubject}
                    onChange={(event) => setEmailSubject(event.currentTarget.value)}
                />

                <Space h="lg" />
                <Textarea
                    autosize minRows={2} maxRows={8} placeholder="Your message"
                    value={emailMessage} onChange={(event) => setEmailMessage(event.currentTarget.value)}
                />
                <Space h="lg" />

                <Button variant="outline" onClick={sendPersonalEmail}>Send</Button>
            </Dialog>
        </div>
    );
}

export default Social;
