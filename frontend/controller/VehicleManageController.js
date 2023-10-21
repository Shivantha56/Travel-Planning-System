

$('#saveDriverBtn').on('click',function () {
    saveDriver();
})



function saveDriver() {


    let driverSaveForm = new FormData($('#driverSaveForm')[0]);


    $.ajax({
        method: "POST",
        data: driverSaveForm,
        url: "http://localhost:8086/business/api/v1/driver",
        enctype: 'multipart/form-data',
        processData: false,  // Important!
        contentType: false,
        cache: false,
        // timeout: 600000
        success:function (response) {

        }
    });

}