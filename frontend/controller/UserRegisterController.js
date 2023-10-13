import UserModel from "/model/UserModel.js";

let userModel = new UserModel();
let userName = $('#userRegName');
let userNic = $('#userRegNic');
let userEmail = $('#userRegEmail');
let userAddress = $('#userRegAddress');
let userPassword = $('#userRegPassword');
let userRegisterForm = $('#signUpForm');

//regex values
const nameRegexVal = "^[A-Za-z\\s]{1,20}$";
const nicRegex = "^[A-Za-z0-9]*$";
const emailRegex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";
const addressRegex = "^[a-zA-Z0-9\\- ]+$";
const passwordRegex = "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@#$%^&+=!]).{8,}$";

// even handling

userName.on("keyup",function () {
    let userTextValue = userName.val();
    console.log(userTextValue);
    regexCheck(userTextValue,nameRegexVal);
});
userNic.on("keyup",function () {
    let userTextValue = userNic.val();
    console.log(userTextValue);
    regexCheck(userTextValue,nicRegex);
});
userEmail.on("keyup",function () {
    let userTextValue = userEmail.val();
    console.log(userTextValue);
    regexCheck(userTextValue,emailRegex);
});
userAddress.on("keyup",function () {
    let userTextValue = userAddress.val();
    console.log(userTextValue);
    regexCheck(userTextValue,addressRegex);
});
userPassword.on("keyup",function () {
    let userTextValue = userPassword.val();
    console.log(userTextValue);
    regexCheck(userTextValue,passwordRegex);
});


$('#signUpBtn').on("click",function () {

    let user = new UserModel(userName.val(),userNic.val(),userEmail.val(),userAddress.val(),userPassword.val());
    console.log(user);

    userRegisterForm.serialize();

    $.ajax({
        url : "http://localhost:9095/business/api/v1/user/register",
        contentType : "application/x-www-form-urlencoded; charset=UTF-8",
        method : "POST",
        data:userRegisterForm.serialize()
    })





});


//Input validation check using regex
function regexCheck(textValue,regExVal) {
    const regex = new RegExp(regExVal);
    // let userNameFocus = $('#userRegName:focus-visible');
    // let focus = userName.focus();



    if (regex.test(textValue)){
        console.log("ok");
        // // userNameFocus.css("outline","2px solid black")
        // // userNameFocus.css("border","none")
        // focus.css("outline","2px solid black")
        // focus.css("border","none")
    }else {
        // userNameFocus.css("outline","2px solid red")
        // userNameFocus.css("border","none");
        // focus.css("outline","2px solid red")
        // focus.css("border","none")
        console.log("no");
    }



    // the text field has no value use the following statements
    if (!textValue){
        console.log("no value")
        // userNameFocus.css("border","2px solid #dadada");
        // userNameFocus.css("outline","2px solid black");
        // focus.css("border","2px solid #dadada");
        // focus.css("outline","2px solid black");

    }

}