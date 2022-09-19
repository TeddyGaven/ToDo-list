a = document.getElementById('txt1')
add = document.getElementById('btn1');
list = document.getElementById('container');



add.addEventListener('click', function(){ 
    var para = document.createElement('p')
    para.classList.add('para')
    para.innerText = a.value;
    list.appendChild(para);
    a.value = "";


    para.addEventListener('click', function(){
        para.style.textDecoration = 'line-through';

        para.addEventListener('click', function(){
            para.style.textDecoration = ""
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

    para.addEventListener('dblclick', function(){
       list.removeChild(para);     
    })


})
  






