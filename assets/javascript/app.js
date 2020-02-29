$(document).ready(function () {

var answers={
    questionOne:true,
    questionTwo:false
}
var correct=0
var incorrect=0


    $("#Submit").click(function () {
    
        var radioValue1 = $("input[name='question1']:checked").val();
        var radioValue2 = $("input[name='question2']:checked").val();
if (radioValue1 === "true"){
correct+=1
}
if (radioValue2 === "false"){
    correct+=1
}


        console.log(radioValue)
    })



})

// var radioValue = $("input[name='gender']:checked").val();
