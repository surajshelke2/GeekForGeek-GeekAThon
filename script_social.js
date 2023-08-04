const menuItems = document.querySelectorAll('.menu-item');

// Sidebar
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
});

const toggleButton = document.getElementById('menutoggle');
const navLink = document.getElementById('menus');

toggleButton.addEventListener('click', () => {
    navLink.classList.toggle('active');
})





