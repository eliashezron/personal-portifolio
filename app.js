const hambuger =
document.querySelector('.hambuger');
// console.log(hambuger)

const mobile_menu = document.querySelector('.nav-list ul')

const menu_items = document.querySelectorAll('.nav-list ul li a')
// console.log(mobile_menu)

const header = document.querySelector('.header.container')

    hambuger.addEventListener('click', ()=>{
        hambuger.classList.toggle('active')
        mobile_menu.classList.toggle('active')
})
document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position>100){
        header.style.backgroundColor="#29323c"
    }else{
        header.style.backgroundColor="transparent"
    }
})

menu_items.forEach( (menu_item)=>{
    menu_item.addEventListener('click', ()=>{
        hambuger.classList.toggle('active')
        mobile_menu.classList.toggle('active')
    })
})


// hambuger.forEach(x=>{
//     x.addEventListener('click',()=>{
//         x.classList.toggle('active')
//     })
// })
// mobile_menu.forEach(x=>{
//     x.addEventListener('click',()=>{
//         // x.childNodes[0].classList.toggle('active')
//         console.log(x)
//     })
// })
