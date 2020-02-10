const body = document.querySelector('.ham-cross')
const showMenu = document.querySelector('.ham-logo')
const closeMenu = document.querySelector('.ham-cross-logo')

showMenu.addEventListener('click',function(){
  body.className='ham-cross hamburger-open'
  document.querySelector('.list').innerHTML=
    `<ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Contact</a></li>
    </ul>`
})

closeMenu.addEventListener('click',function(){
  body.className='ham-cross'
})