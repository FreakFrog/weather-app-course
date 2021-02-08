console.log('Client side javascript file is loaded!')
/*   document.querySelector(".main-content").querySelector('#feras').addEventListener('change',(e)=>{console.log(e)}) 
 */ 


 const getWeather=async function(address){
     
     let x=await fetch('/weather?address='+address)
     return x.json()
 }

/*  getWeather().then((x)=>{console.log(x.json().then((x)=>{console.log(x)}))}) */

const weather=document.querySelector('form')
const search=document.querySelector('input')
const messageOne=document.querySelector('#m1')
const messageTwo=document.querySelector('#m2')
messageOne.textContent=''
messageTwo.textContent=''


weather.addEventListener('submit',(e)=>{
    e.preventDefault()
    getWeather(search.value).then((x)=>{
     messageOne.textContent=x.forecast   
     messageTwo.textContent=x.location}).catch((e)=>{messageOne.textContent='How dare you enter a not location'})

    })

