const dateOfBirth = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-number");
const calculate = document.querySelector("#check");
const display = document.querySelector("#result");
const gif = document.querySelector("#graphics");

const sumOfDate = () =>{
    var dateValue = (dateOfBirth.value).replaceAll("-","");
    var sumValue = 0 ;

    for (let i =0;i<dateValue.length;i++) {
        sumValue = sumValue + Number(dateValue.charAt(i));
    }

    return sumValue;
}

const imageReset = () =>{
    gif.src = "";
    gif.style.display = "none";
}

const checkLuckiness=()=>{

    if(dateOfBirth.value =="" && luckyNumber.value==""){
        display.innerHTML = "Please pick a date and enter a valid lucky number 🧙🏽‍♀️";
        imageReset();
    }
    else if(luckyNumber.value==""){
        display.innerHTML = "Please enter valid lucky number ☝🏽";
        imageReset();
    }
    else if(dateOfBirth.value==""){
        display.innerHTML = "Please pick a date 📅";
        imageReset();
    }
    else{
        var sumValue = sumOfDate();
        var result = sumValue % luckyNumber.value ;

        if (result==0){
            display.innerHTML = "Your birthday is lucky 🎉";
            gif.src = "lucky.webp";
            gif.style.display = "block";
        }else{
            display.innerHTML = "Your birthday may not be lucky, but you are awesome 🤗";
            gif.src = "notlucky.webp";
            gif.style.display = "block";
        }
    }
}

calculate.addEventListener('click',checkLuckiness);
