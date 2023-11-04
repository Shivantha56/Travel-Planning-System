// context details

let vehicleSaveContext = $('.vehicle-save-form')
let vehicleUpdateContext = $('.vehicle-update-form')
let vehicleViewContext = $('.vehicle-view-context');

//details update context input fields
let updateVehicleNo = $('#updateVehicleNo');
let updateVehicleBrand = $('#updateVehicleBrand');
let updateFuelUsage = $('#updateFuelUsage');
let updateSeatCapacity = $('#updateSeatCapacity');
let updateTransmissionType = $('#updateTransmissionType');
let updateVehicleType = $('#updateVehicleType');
let updateCategory = $('#updateCategory');
let updateFuelType = $('#updateFuelType');
let updateHybrid = $('#updateHybrid');
let updateRemarks = $('#updateRemarks');
// let updateDriverId = $('#updateDriverId');

window.addEventListener('load', function () {
    vehicleUpdateContext.css("display", "none");
    vehicleViewContext.css("display", "none")
    getAllDriverDetails();
    getAllData();
})


$('#vehicleSaveNavigation').on('click', function () {
    vehicleSaveContext.css("display", "block")
    vehicleUpdateContext.css("display", "none");
    vehicleViewContext.css("display", "none")
})

$('#updateSaveNavigation').on('click', function () {
    vehicleSaveContext.css("display", "none")
    vehicleUpdateContext.css("display", "block");
    vehicleViewContext.css("display", "none")
})

$('#vehicleViewNavigation').on('click', function () {
    vehicleSaveContext.css("display", "none")
    vehicleUpdateContext.css("display", "none");
    vehicleViewContext.css("display", "block")
})


$('#saveDriverBtn').on('click', function () {
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
        success: function (response) {
            getAllDriverDetails();
        }
    });

}

$('#vehicleSaveBtn').on('click', function () {
    let vehicleNo = $('#vehicleNo');
    let remarks = $('#remarks');

    if (!remarks.val()){
        errorNotification1("Enter the remarks");
        remarks.css("border","1px solid red");
        throw new Error("can not have null value");
    }else {
        remarks.css("border","1px solid gray");
    }


    if (!vehicleNo.val()){
        errorNotification1("vehicle no is null");
        vehicleNo.css("border","1px solid red");
        throw new Error("can not have null value");
    }else {
        vehicleNo.css("border","1px solid gray");
    }

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
        success: function (response) {
            successNotification1("vehicle save sucess")
        },
        error:function () {
            errorNotification1("Can not save vehicle")
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
        dataType: "json",
        // timeout: 600000
        success: function (response) {

            for (const responseKey in response) {
                let driverId = response[responseKey].driverId;
                let driverName = response[responseKey].driverName;
                let driverContactNo = response[responseKey].driverContactNo;
                let driverLicenseFront = response[responseKey].driverLicenseFront;
                let driverLicenseRear = response[responseKey].driverLicenseRear;

                $('.driverId').append(`<option value="${driverId}">${driverId} | ${driverName} | ${driverContactNo}</option>`)

            }

        }
    });

}


$('#searchBtn').on('click', function () {

    // getAllDriverDetails();

    $.ajax({
        dataType: "json",
        // data: vehicleForm,
        error: function (error) {
            console.log(error);
        },
        url: "http://localhost:8086/business/api/v1/vehicle/" + $('#vehicleSearchInputField').val(),
        // enctype: 'multipart/form-data',
        // processData: false,  // Important!
        // contentType: false,
        // cache: false,
        method: "GET",
        // timeout: 600000
        success: function (response) {

            // for (const responseKey in response) {

            // let driverId = response.driverId;
            // let driverName = response.driverName;
            // let driverContactNo = response[responseKey].driverContactNo;
            let vehicleId = response.vehicleId;
            let vehicleNo = response.vehicleNo;
            let vehicleBrand = response.vehicleBrand;
            let category = response.category;
            let fuelType = response.fuelType;
            let hybrid = response.hybrid;
            let fuelUsage = response.fuelUsage;
            let vehicleFrontImage = response.vehicleFrontImage;
            let vehicleRearImage = response.vehicleRearImage;
            let vehicleSideImage = response.vehicleSideImage;
            let vehicleFrontInteriorImage = response.vehicleFrontInteriorImage;
            let vehicleRearInteriorImage = response.vehicleRearInteriorImage;
            let seatCapacity = response.seatCapacity;
            let vehicleType = response.vehicleType;
            let transmissionType = response.transmissionType;
            let remarks = response.remarks;

            $('#vehicleId').val(vehicleId);

            // $("p[title|='Tomorrow']")
            // $('#driverId>option')

            updateVehicleNo.val(vehicleNo);
            updateVehicleBrand.val(vehicleBrand);
            updateFuelUsage.val(fuelUsage);
            updateSeatCapacity.val(seatCapacity);
            // updateTransmissionType.text(transmissionType);
            updateVehicleType.val(vehicleType);
            updateCategory.val(category);
            updateFuelType.val(fuelType);
            updateHybrid.val(hybrid);
            updateRemarks.val(remarks);


        },

    });

})

$('#vehicleUpdateBtn').on('click', function () {
    let vehicleForm = new FormData($('#vehicleUpdateForm')[0]);


    $.ajax({
        method: "PUT",
        data: vehicleForm,
        url: "http://localhost:8086/business/api/v1/vehicle",
        enctype: 'multipart/form-data',
        processData: false,  // Important!
        contentType: false,
        cache: false,
        // timeout: 600000
        success: function (response) {
            getAllDriverDetails();
        }
    });
})
$('#vehicleDeleteBtn').on('click', function () {

    let val = $('#vehicleId').val();

    $.ajax({
        method: "DELETE",
        // data: vehicleForm,
        url: "http://localhost:8086/business/api/v1/vehicle/" + val,
        // enctype: 'multipart/form-data',
        // processData: false,  // Important!
        // contentType: false,
        // cache: false,
        // timeout: 600000
        success: function (response) {
            // getAllDriverDetails();
        }
    });


})

function getAllData() {


    $.ajax({
        dataType: "json",
        // data: vehicleForm,
        error: function (error) {
            console.log(error);
        },
        url: "http://localhost:8086/business/api/v1/vehicle",
        // enctype: 'multipart/form-data',
        // processData: false,  // Important!
        // contentType: false,
        // cache: false,
        method: "GET",
        // timeout: 600000
        success: function (response) {

            for (const responseKey in response) {

                let driverId = response[responseKey].driverId;
                let driverName = response[responseKey].driverName;
                let driverContactNo = response[responseKey].driverContactNo;
                let vehicleId = response[responseKey].vehicleId;
                let vehicleNo = response[responseKey].vehicleNo;
                let vehicleBrand = response[responseKey].vehicleBrand;
                let category = response[responseKey].category;
                let fuelType = response[responseKey].fuelType;
                let hybrid = response[responseKey].hybrid;
                let fuelUsage = response[responseKey].fuelUsage;
                let vehicleFrontImage = response[responseKey].vehicleFrontImage;
                let vehicleRearImage = response[responseKey].vehicleRearImage;
                let vehicleSideImage = response[responseKey].vehicleSideImage;
                let vehicleFrontInteriorImage = response[responseKey].vehicleFrontInteriorImage;
                let vehicleRearInteriorImage = response[responseKey].vehicleRearInteriorImage;
                let seatCapacity = response[responseKey].seatCapacity;
                let vehicleType = response[responseKey].vehicleType;
                let transmissionType = response[responseKey].transmissionType;
                let remarks = response[responseKey].remarks;


                let vehicleTableTemplate = `<tr>
<td>${vehicleId}</td>
<td>${driverId}</td>
<td>${driverName}</td>
<td>${driverContactNo}</td>
<td>${vehicleNo}</td>
<td>${vehicleBrand}</td>
<td>${category}</td>
<td>${fuelType}</td>
<td>${seatCapacity}</td>
<td>${transmissionType}</td>
</tr>`;

            $('.vehicle-body').append(vehicleTableTemplate);

            }




            // $('#vehicleId').val(vehicleId);
            //
            // // $("p[title|='Tomorrow']")
            // // $('#driverId>option')
            //
            // updateVehicleNo.val(vehicleNo);
            // updateVehicleBrand.val(vehicleBrand);
            // updateFuelUsage.val(fuelUsage);
            // updateSeatCapacity.val(seatCapacity);
            // // updateTransmissionType.text(transmissionType);
            // updateVehicleType.val(vehicleType);
            // updateCategory.val(category);
            // updateFuelType.val(fuelType);
            // updateHybrid.val(hybrid);
            // updateRemarks.val(remarks);


        }

    });


}

const alertInstance = new AlertHub({
    timeout: 300,
    animation: 'fade-in',
    closeButton: false,
    // type: "success "
})

function successNotification1(message) {

    alertInstance.showAlert({
        type: "success",
        description: `<h2>${message}</h2>`,
        timeout: 4,
        // position: 'top-right'
    });

}

function errorNotification1(message) {

    alertInstance.showAlert({
        title: `${message}`,
        description: `${message}`,
        timeout: 4,
        type: "danger",
        // position: 'bottom-right'
    });

}