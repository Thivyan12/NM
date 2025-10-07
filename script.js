document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('history-sidebar');
    const toggleButton = document.getElementById('sidebar-toggle');

    // This only runs if we are on the chat page (where the button exists)
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            sidebar.classList.toggle('closed');
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('history-sidebar');
    const toggleButton = document.getElementById('sidebar-toggle');

    // This code will only run on the chat page because that's the only page with a toggle button
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            sidebar.classList.toggle('closed');
        });
    }
});