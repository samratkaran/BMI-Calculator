let form = document.querySelector('form');

form.addEventListener('submit',(event) => {
  event.preventDefault();

  let height = parseInt (document.querySelector('#height').value);
  
  let weight = parseInt (document.querySelector('#weight').value);
  let result = document.querySelector('#result');

  if(height === '' || height <0 || height === NaN){
    result.innerHTML = `<h2> pelase Enter a Valid Number</h2>`; 
  }else if(weight === '' || weight <0 || weight === NaN){
    result.innerHTML = `<h2> pelase Enter a Valid Number </h2>`; 
  }else{
    const BMI = (weight/((height*height)/10000)).toFixed(2);
    result.innerHTML = ` your BMI is : ${BMI}`
  }
 
 





});




