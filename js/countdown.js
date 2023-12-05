const allInputs = document.querySelectorAll('input');

const countDown = () =>{
    const myDate = new Date(allInputs[0].value);
    const todaysDate = new Date();
    const totalSeconds = Math.floor( (myDate - todaysDate) / 1000);
    console.log(totalSeconds)
    if(totalSeconds < 0) {
        allInputs[1].value = 0
        allInputs[2].value = 0
        allInputs[3].value = 0
        allInputs[4].value = 0
        return;
    }
    allInputs[1].value = Math.floor((totalSeconds/3600/24)); //days
    allInputs[2].value = Math.floor((totalSeconds /3600) % 24) // hours
    allInputs[3].value = Math.floor((totalSeconds /60) % 60) // miniutes
    allInputs[4].value = Math.floor((totalSeconds % 60)) //seconds
    
}

document.getElementById('countdown-btn').addEventListener('click',()=>{
    
    countDown()
   const timeoutID = setInterval(() => {
        countDown()
       },1000);

  allInputs[0].addEventListener('input',()=>{
    clearInterval(timeoutID);
  })
       
})




