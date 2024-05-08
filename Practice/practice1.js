const a= document.getElementById('para1');
const b= document.getElementById('para2');
let count=0;
b.addEventListener('click', function(){
    count++;
    a.innerHTML= `count:${count}`;
})