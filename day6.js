a = document.getElementById('txt1')
add = document.getElementById('btn1');
list = document.getElementById('container');
save = document.getElementById('btn2')



add.addEventListener('click', function(){ 
    task = a.value
    localStorage.setItem('Name',task)
    a.value = ""
})

save.addEventListener('click', function(){
    var para = document.createElement('p')
    para.classList.add('para')
    para.innerText = JSON.stringify(localStorage.getItem("Name"))
    list.appendChild(para)

    para.addEventListener('click', function(){
        para.style.textDecoration = 'line-through';

        para.addEventListener('click', function(){
            para.style.textDecoration = ""

        }) 
    })

          
    para.addEventListener('dblclick', function(){
         list.removeChild(para);     
    })         
            
})
           
        
    



    //para.addEventListener('click', function(){If(para.style.textDecoration = "")
   // {
    // para.style.textDecoration = 'line-through'
    //}
    //Else 
    //{
    // para.style.textDecoration = ""
   // }
   // }) 

   


  






