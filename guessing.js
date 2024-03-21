let boxid = document.getElementById('box');
let btnid = document.getElementById('btn');
let paragraphid = document.getElementById('paragraph');
let num = Math.ceil(Math.random()*100);
console.log(num);
let count = 1;
btnid.addEventListener('click',function(){
    if(num === parseInt(boxid.value)){
        paragraphid.textContent = "hurray winner in "+count+'guess';
        paragraphid.classList.add("paragraphid");

    }
    else if(num>parseInt(boxid.value)){
        paragraphid.textContent = "your text content is too low";
        paragraphid.classList.add("paragraphid1");

    }
    else{
        paragraphid.textContent="your content is too high";
        paragraphid.classList.add("paragraphid1");
    }
    count+=1
});