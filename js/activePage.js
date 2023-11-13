const activePage = window.location.pathname;
const navlink = document.querySelectorAll('.navlink').forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classlist.add('active');
    }
})

