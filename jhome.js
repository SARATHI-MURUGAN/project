const menbtn=document.querySelector('.menubtn')
const navinks=document.querySelector('.navlinks')
menbtn.addEventListener('click',()=>{
    navinks.classlist.toggle("mobilemenu ")
})