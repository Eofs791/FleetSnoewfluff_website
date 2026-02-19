export function initSidebar() {
    const buttons = document.querySelectorAll(".aside-btn");
    const sidebar = document.getElementById("sidebar");

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            sidebar.classList.toggle("active");
        })
    });
}