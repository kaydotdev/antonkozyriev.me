export function matchTheme(matches: boolean) {
    const pageRoot = document.querySelector('html');

    if (!!pageRoot) {
        pageRoot.className = matches ? "dark" : "light";
    }
}
