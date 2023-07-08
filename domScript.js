const div = document.querySelector("div")
const title = document.querySelector('.title')
const text = document.querySelector('#text')

const btn = document.querySelector('.btn2')
const btn1 = document.querySelector('.btn1')

title.style.display = 'none'

btn.addEventListener('click', () => {
    title.style.display = 'block'


})
btn1.addEventListener('click', () => {
    title.style.display = 'none'
})
const btn3 = document.querySelector('.deg')

btn3.addEventListener('click', () =>{
    text.style.rotate = '2200360deg'
    text.style.transition = '60s'
    text.style.background = 'red'
    console.log('hello dom')

})
text.addEventListener('mouseleave' ,() =>{
    text.style.rotate = ''
    text.style.color = 'black'
})



//
// btn.addEventListener('mouseover', () => {
//     title.style.color = 'red'
// })
// btn1.addEventListener('mouseleave', () => {
//     title.style.color = ''
// })

