
function login() {

    let userEmail = $('#userEmail').val();
    let userPassword = $('#userPassword').val();

    let userLogInData = {userEmail:userEmail,userPassword:userPassword}

    // let login = JSON.stringify(userLogInData);

    console.log(JSON.stringify(userLogInData))


    $.ajax({

        method: "GET",
        data: userLogInData,
        url: "http://localhost:9095/business/api/v1/user/login",
        contentType: "application/json",
        dataType: "json",
        success:function (response) {

            $('#navigateToLogin')[0].click();

        },

        error:function(){
            alert("Enter valid data");
            console.log("Enter valid data");
        }


    })


}


$('#loginBtn').on("click",function () {
    login()
})