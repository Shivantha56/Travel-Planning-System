window.addEventListener('load',function () {
    getAllDriverDetails();
})

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
            getAllDriverDetails();
        }
    });

}

$('#vehicleSaveBtn').on('click',function () {
    let vehicleForm = new FormData($('#vehicleSaveForm')[0]);

    $.ajax({
        method: "POST",
        data: vehicleForm,
        url: "http://localhost:8086/business/api/v1/vehicle",
        enctype: 'multipart/form-data',
        processData: false,  // Important!
        contentType: false,
        cache: false,
        // timeout: 600000
        success:function (response) {

        }
    });

})


function getAllDriverDetails() {

    $.ajax({
        method: "GET",
        // data: vehicleForm,
        url: "http://localhost:8086/business/api/v1/driver",
        // enctype: 'multipart/form-data',
        // processData: false,  // Important!
        // contentType: false,
        // cache: false,
        dataType:"json",
        // timeout: 600000
        success:function (response) {

            for (const responseKey in response) {
                let driverId = response[responseKey].driverId;
                let driverName = response[responseKey].driverName;
                let driverContactNo = response[responseKey].driverContactNo;
                let driverLicenseFront = response[responseKey].driverLicenseFront;
                let driverLicenseRear = response[responseKey].driverLicenseRear;

                $('#driverId').append(`<option value="${driverId}">${driverId} | ${driverName} | ${driverContactNo}</option>`)

            }

        }
    });

}