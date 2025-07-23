const menuIcon = document.getElementById('menuIcon');
    const sidebar  = document.getElementById('sidebar');
    const overlay  = document.getElementById('overlay');

    function toggleSidebar() {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('show');
    }

    menuIcon?.addEventListener('click', toggleSidebar);
    overlay?.addEventListener('click', toggleSidebar);

window.onload = function(){
    loadpage('dashboard')
}




