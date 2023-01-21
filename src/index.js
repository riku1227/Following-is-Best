window.addEventListener("load", (event) => {
    const changeToFollwing = () => {
        const tabs = document.querySelectorAll(`a[href="/home"][role="tab"]`);
        if (tabs.length >= 2) {
            tabs[1].click();
            clearInterval(initInterval);
        }
    }
    const initInterval = setInterval(changeToFollwing, 100);
});