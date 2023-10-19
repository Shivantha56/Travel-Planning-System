window.addEventListener('load',function () {

    $('.hotel-update-context').css("display","none")

});

$('#updateSaveNavigation').on('click',function () {

    $('.hotel-update-context').css("display","block");
    $('.hotel-save-context').css("display","none");


});
$('#hotelSaveNavigation').on('click',function () {

    $('.hotel-update-context').css("display","none");
    $('.hotel-save-context').css("display","block");


});

function formRequest(type,formId) {
    let hotelSaveForm = new FormData( $(formId)[0]);


    $.ajax({
        method: type,
        data: hotelSaveForm,
        url: "http://localhost:8085/business/api/v1/hotel",
        enctype: 'multipart/form-data',
        processData: false,  // Important!
        contentType: false,
        cache: false,
        // timeout: 600000
    });

}

$('#hotelSaveBtn').on('click',function () {

    formRequest("POST","#hotelSaveForm");

    // let hotelSaveForm = new FormData( $('#hotelSaveForm')[0]);
    //
    //
    // $.ajax({
    //     method: "POST",
    //     data: hotelSaveForm,
    //     url: "http://localhost:8085/business/api/v1/hotel",
    //     enctype: 'multipart/form-data',
    //     processData: false,  // Important!
    //     contentType: false,
    //     cache: false,
    //     // timeout: 600000
    // });
});


//hotel search function. using the hotel email address





function searchHotelDetails(hotelEmail) {


    $.ajax({
        method: "GET",
        // data: hotelSaveForm,
        url: `http://localhost:8085/business/api/v1/hotel/${hotelEmail}`,
        dataType:'Json',
        error:function (error) {

        },

        success:function (response) {


            $('#hotelName').val(response.hotelName);
            $('#hotelLocation').val(response.hotelLocation);
            $('#hotelEmail').val(response.hotelContactEmail);
            $('#hotelLocationLink').val(response.hotelLocationLink);
            $('#hotelOption1').val(response.hotelFeeOption1);
            $('#hotelOption2').val(response.hotelFeeOption2);
            $('#hotelOption3').val(response.hotelFeeOption3);
            $('#hotelOption4').val(response.hotelFeeOption4);
            $('#contactNo1').val(response.contactNoOne);
            $('#contactNo2').val(response.contactNoTwo);
            $('#petsAllowedOrNot').val(response.petsAllowedOrNot);
            $('#cancellationCriteria').val(response.cancellation);
            $('#u5').val(response.starRate);

            //check star rate value and set to the radio btn

            // radio btn value
            let starLabel5 = $("label[for='u5']");
            if (response.starRate === 1){
                // $('u5').checked = true;
                //
                // console.log($('u5').val());

            }else if (response.starRate === 2){


            }else if (response.starRate === 3){


            }else if (response.starRate === 4){


            }else if (response.starRate === 5){

            }

            $('#remarks').val(response.remarks);




        }


    });


}


$('#searchBtn').on('click',function () {
    let hotelSearchValue = $('#hotelSearchInputField').val();
    searchHotelDetails(hotelSearchValue);
});


$('#hotelUpdateBtn').on('click',function () {
    formRequest("PUT","#hotelUpdateForm");
})

$('#hotelDeleteBtn').on('click',function () {

})























