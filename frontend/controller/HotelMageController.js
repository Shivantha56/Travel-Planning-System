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


$('#hotelSaveBtn').on('click',function () {



    let hotelSaveForm = new FormData( $('#hotelSaveForm')[0]);


    $.ajax({
        method: "POST",
        data: hotelSaveForm,
        url: "http://localhost:8085/business/api/v1/hotel",
        enctype: 'multipart/form-data',
        processData: false,  // Important!
        contentType: false,
        cache: false,
        // timeout: 600000
    });
})