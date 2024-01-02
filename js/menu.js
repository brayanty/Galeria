(function(){
    const btnmenu = document.querySelector('.nav__menu');
    const showmenu = document.querySelector('.nav__link-menu');
    const nav__menu = document.querySelector('.nav__menu-img')

    btnmenu.addEventListener('click',()=>{
        showmenu.classList.toggle('nav__link-show');
        nav__menu.classList.toggle('nav__menu-img-blank')
        
    })
}
)();