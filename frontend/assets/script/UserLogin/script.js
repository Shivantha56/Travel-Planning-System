import UserModel from "/model/UserModel.js";


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


            let userModal = new UserModel();
            userModal.setUserId(response.userId);
            userModal.setUserName(response.userName);
            userModal.setUserNic(response.userNic);
            userModal.setUserEmail(response.userEmail);
            // userModal.setUserProfilePic()

            let logUserData = {userId:response.userId,
                userName:response.userName,userNic:response.userNic,email:response.userEmail}

            let user = JSON.stringify(logUserData);


            console.log("this is the user modal"+userModal.getUserName());

            localStorage.setItem("userdata",user);

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