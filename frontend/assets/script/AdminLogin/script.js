$('#adminLoginBtn').on("click",function () {



    let statusMessage = $('.status');

    let adminEmail = $('#adminEmailAddress').val();
    let adminPassword = $('#adminPassword').val();

    if (!adminEmail){
        statusMessage.text("Fields are empty")
        statusMessage.css("display","block");
        throw new Error("please enter the data");
    }else if (!adminPassword) {
        statusMessage.text("Fields are empty")
        statusMessage.css("display","block");
        throw new Error("please enter the data");
    }

    if (adminEmail === "admin@guide.com" && adminPassword === "1234"){
        $('#navigateAdminGuide')[0].click();
    }else if(adminEmail === "admin@hotel.com" && adminPassword === "1234"){
        $('#navigateAdminHotel')[0].click();
    }else if(adminEmail === "admin@hotel.com" && adminPassword === "1234"){
        $('#navigateAdminHotel')[0].click();
    }else if(adminEmail === "admin@hotel.com" && adminPassword === "1234"){
        $('#navigateAdminHotel')[0].click();
    }else{
        statusMessage.text("Please enter correct email and password")
        statusMessage.css("display","block");
    }


})