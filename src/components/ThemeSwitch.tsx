import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import useScrollPosition from '../hooks/useScrollPosition';

function ThemeSwitch() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const scrollPosition = useScrollPosition();
    const dark = colorScheme === 'dark';
    const styles = {
        wrapper: {
            position: "absolute",
            top: 20 + scrollPosition, right: 20,
            width: 30, height: 30
        }
    };

    return (
        <div style={styles.wrapper as React.CSSProperties}>
            <ActionIcon
                variant="outline"
                color={dark ? 'yellow' : 'blue'}
                onClick={() => toggleColorScheme()}
                title="Toggle light/dark mode"
            >
                {dark ? (
                    <FontAwesomeIcon icon={faSun} size="lg" />
                ) : (
                    <FontAwesomeIcon icon={faMoon} size="lg" />
                )}
            </ActionIcon>
        </div>
        
    );
}

export default ThemeSwitch;
