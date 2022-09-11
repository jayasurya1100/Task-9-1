var first=document.querySelector('#first')
var span1=document.querySelector('#span1')

var last=document.querySelector('#last')
var span2=document.querySelector('#span2')

var add=document.querySelector('#add')
var span3=document.querySelector('#span3')

var pin=document.querySelector('#pin')
var span4=document.querySelector('#span4')

var gen=document.querySelector('#gen')
var span5=document.querySelector('#span5')

var state=document.querySelector('#state')
var span6=document.querySelector('#span6')

var country=document.querySelector('#country')
var span7=document.querySelector('#span7')

var button=document.querySelector('#button')

button.addEventListener('click',()=>{
span1.innerHTML=first.value
})

button.addEventListener('click',()=>{
    span2.innerHTML=last.value
    })
    
    button.addEventListener('click',()=>{
        span3.innerHTML=add.value
        })
        
        button.addEventListener('click',()=>{
            span4.innerHTML=pin.value
            })
            
            button.addEventListener('click',()=>{
                span5.innerHTML=gen.value
                })
                
                button.addEventListener('click',()=>{
                    span6.innerHTML=state.value
                    })
                    
                    button.addEventListener('click',()=>{
                        span7.innerHTML=country.value
                        })
                        