const rootElement = document.getElementById("root");
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
            if (rootElement.textContent.length > 0) {
                OnloadFunction();
            }
        }
    });
});
observer.observe(rootElement, { childList: true });