const decrement = document.querySelector('.decrement');
const increment = document.querySelector('.increment');
const count = document.querySelector('.count');
const changeBy = document.querySelector('.portion-input');
const resetbtn = document.querySelector('.reset-btn');



decrement.addEventListener('click', ()=>{
    const countValue = parseInt(count.innerText);
    const changeByVal = parseInt(changeBy.value) || 1;
    count.innerText = countValue - changeByVal;
    
});
increment.addEventListener('click', ()=>{
    const countValue = parseInt(count.innerText);
    const changeByVal = parseInt(changeBy.value) || 1;
    count.innerText = countValue + changeByVal;

});

resetbtn.addEventListener('click', ()=>{
    count.innerText = 0;
});
