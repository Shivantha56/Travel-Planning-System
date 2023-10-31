let hotelTableContainer = $('.hotelTableContainer');
let vehicleTableContainer = $('.vehicleTableContainer');
let guideTableContainer = $('.guideTableContainer');
let modalCloseBtn = $('.x-mark');

modalCloseBtn.on("click",function () {
    hotelDetailsModal.css("display","none")
    vehicleDetailsModal.css("display","none")
    guideDetailsModal.css("display","none")
})

$('#tableHotelDetails').on("click",function () {

    hotelTableContainer.css("display","block");
    getHotelDetails();


});
$('#tableVehicleDetails').on("click",function () {

    vehicleTableContainer.css("display","block");
    getAllVehicleData();


});
$('#tableGuideDetails').on("click",function () {

    guideTableContainer.css("display","block");
    getAllGuideData();


});

$('#hotelContainerCloseBtn').on("click",function () {
    hotelTableContainer.css("display","none")
});
$('#vehicleContainerCloseBtn').on("click",function () {
    vehicleTableContainer.css("display","none")
});
$('#guideContainerCloseBtn').on("click",function () {
    guideTableContainer.css("display","none")
});



function getHotelDetails() {

    let count = 1;

    let tableBody = $('.hotelDetailsBody>tr');
    tableBody.empty();


    $.ajax({
        method: "GET",
        url: "http://localhost:8085/business/api/v1/hotel",
        // data:"JSON",
        success: function (response) {

            for (const i in response) {

                hotelName = response[i].hotelName;
                hotelLocation = response[i].hotelLocation;
                contactNoOne = response[i].contactNoOne;
                contactNoTwo = response[i].contactNoTwo;
                hotelContactEmail = response[i].hotelContactEmail;
                starRate = response[i].starRate;

                let btnClass = `row${count}`

                let setTableRow = `<tr id="roww${count}" class="hotel-table-data">
<td>${hotelName}</td>
<td>${hotelLocation}</td>
<td>${contactNoOne}</td>
<td>${contactNoTwo}</td>
<td class="hotelEmail">${hotelContactEmail}</td>
<td>${starRate}</td>
</tr>`;
                count++;
                $('.hotelDetailsBody').append(setTableRow);

            }

        }

    });
}


//*************************
let hotelRow = $('.table-hotels');
let hotelDetailsModal = $('.hotels-details-modal');
// let hotelRow = document.querySelector(".hotelDetailsBody tr")

hotelRow.on('click', '.hotelDetailsBody > .hotel-table-data', function (event) {


    // console.log(event.target.parentElement.attributes);
    let attributes = event.target.parentElement.attributes;

    tableId = attributes.item(0).value;
    console.log(tableId);


    let hotelEmail = $(`#${tableId} > .hotelEmail`).text();
    console.log(hotelEmail)
    getAllHotelData(hotelEmail);

    hotelDetailsModal.css("display", "flex")
    hotelDetailsModal.css("transition", "1s")
    // rowDetailsHotelAddToCart.css("display", "none")


});

let modalHotelId = $('.modalHotelId');
let modalHotelName = $('.modalHotelName');
let modalHotelLocation = $('.modalHotelLocation');
let modalHotelLocationLink = $('.modalHotelLocationLink');
let modalHotelContactEmail = $('.modalHotelContactEmail');
let modalHotelContactNo1 = $('.modalHotelContactNo1');
let modalHotelContactNo2 = $('.modalHotelContactNo2');
let modalPetAllowed = $('.modalPetAllowed');
let modalStarRate = $('.modalStarRate');
let modalHotelFeeOption1 = $('.modalHotelFeeOption1');
let modalHotelFeeOption2 = $('.modalHotelFeeOption2');
let modalHotelFeeOption3 = $('.modalHotelFeeOption3');
let modalHotelFeeOption4 = $('.modalHotelFeeOption4');
let modalHotelCancellation = $('.modalHotelCancellation');
let modalHotelRemarks = $('.modalHotelRemarks');

let hotelId;

function getAllHotelData(email) {
    $.ajax({
        url: "http://localhost:8085/business/api/v1/hotel/" + email,
        method: "GET",
        success: function (response) {

            // $('.modalHotelCancellation').val(response.cancellation);
            modalHotelCancellation.text(response.cancellation);
            modalHotelContactNo1.text(response.contactNoOne);
            modalHotelContactNo2.text(response.contactNoTwo);
            modalHotelContactEmail.text(response.hotelContactEmail);
            hotelOption1 = modalHotelFeeOption1.text(response.hotelFeeOption1);
            hotelOption2 = modalHotelFeeOption2.text(response.hotelFeeOption2);
            hotelOption3 = modalHotelFeeOption3.text(response.hotelFeeOption3);
            hotelOption4 = modalHotelFeeOption4.text(response.hotelFeeOption4);
            hotelId = modalHotelId.text(response.hotelId);
            modalHotelLocation.text(response.hotelLocation);
            modalHotelLocationLink.text(response.hotelLocationLink);
            hotelNameD = modalHotelName.text(response.hotelName);
            modalPetAllowed.text(response.petsAllowedOrNot);
            modalHotelRemarks.text(response.remarks);
            modalStarRate.text(response.starRate);

             hotelId = response.hotelId;
            //
            // console.log(resp.cancellation)

            document.querySelector('.modalHotelName').innerText = response.hotelName;


        }

    })

}



// get vehicle table data


function getAllVehicleData() {

    let count = 1;

    $('.vehicleDetailsBody>tr').empty();

    $.ajax({
        method: "GET",
        url: `http://localhost:8086/business/api/v1/vehicle`,
        // dataType: 'JSON',
        error: function (error) {

        },

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


                let vehicleTableTemplate = `<tr id="row${count}" class="vehicle-table-data">
<td>${vehicleId}</td>
<td>${category}</td>
<td class="vehicleColId">${vehicleNo}</td>
<td>${vehicleBrand}</td>
<td>${driverName}</td>
<td>${fuelType}</td>
<td>${seatCapacity}</td>
<td>${vehicleType}</td>
</tr>`;

                $('.vehicleDetailsBody').append(vehicleTableTemplate);

                count++;
            }
        }


    });

}

let vehicleDetailsModal = $('.vehicle-details-modal');

let vehicleRow = $('.table-vehicle');
// let hotelRow = document.querySelector(".hotelDetailsBody tr")

vehicleRow.on('click', '.vehicleDetailsBody > .vehicle-table-data', function (event) {


    // console.log(event.target.parentElement.attributes);
    let attributes = event.target.parentElement.attributes;

    tableId = attributes.item(0).value;
    console.log(tableId);


    let vehicleId = $(`#${tableId} > .vehicleColId`).text();
    console.log(vehicleId);
    console.log(vehicleId);
    getVehicleById(vehicleId);

    vehicleDetailsModal.css("display", "flex")
    vehicleDetailsModal.css("transition", "1s")


});

let vehicleIds;

function getVehicleById(vehicleId) {

    $.ajax({
        dataType: "json",
        // data: vehicleForm,
        error: function (error) {
            console.log(error);
        },
        url: "http://localhost:8086/business/api/v1/vehicle/" + vehicleId,
        // enctype: 'multipart/form-data',
        // processData: false,  // Important!
        // contentType: false,
        // cache: false,
        method: "GET",
        // timeout: 600000
        success: function (response) {

            // for (const responseKey in response) {

            let driverId = response.driverId;
            let driverName = response.driverName;
            let driverContactNo = response.driverContactNo;
            vehicleIds = response.vehicleId;
            let vehicleNo = response.vehicleNo;
            vehicleBrand = response.vehicleBrand;
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
            vehicleType = response.vehicleType;
            let transmissionType = response.transmissionType;
            let remarks = response.remarks;
            // add vehicle per day value
            vehicleFeeForDay = response.vehiclePrice;

            $('.modalVehicleId').text(vehicleIds);
            $('.modalVehicleNo').text(vehicleNo);
            $('.modalVehicleCategory').text(category);
            $('.modalVehicleFuelType').text(fuelType);
            $('.modalVehicleHybrid').text(hybrid);
            $('.modalVehicleSeatCapacity').text(seatCapacity);
            $('.modalVehicleType').text(vehicleType);
            $('.modalVehicleTransmissionType').text(transmissionType);
            $('.modalVehicleDriverId').text(driverId);
            $('.modalVehicleDriverName').text(driverName);
            $('.modalVehicleDriverContact').text(driverContactNo);
            $('.modalVehiclePrice').text(vehicleFeeForDay);

            $('.imageVehicleFrontImage').attr("src", `data:image/jpeg;base64,${vehicleFrontImage}`);
            $('.imageVehicleRearImage').attr("src", `data:image/jpeg;base64,${vehicleRearImage}`);
            $('.imageVehicleSideImage').attr("src", `data:image/jpeg;base64,${vehicleSideImage}`);

        },

    });

}

function getAllGuideData() {

    let count = 1;

    $('.guideDetailsBody>tr').empty();

    $.ajax({
        method: "GET",
        url: `http://localhost:8080/business/api/v1/guide`,
        // dataType: 'JSON',
        error: function (error) {

        },

        success: function (response) {

            for (const responseKey in response) {

                let guideId = response[responseKey].guideId;
                let guideName = response[responseKey].guideName;
                let guideAddress = response[responseKey].guideAddress;
                let guideAge = response[responseKey].guideAge;
                let gender = response[responseKey].gender;
                let guideContactNo = response[responseKey].guideContactNo;
                let guideImage = response[responseKey].guideImage;
                let nicImageFront = response[responseKey].nicImageFront;
                let guideIdBack = response[responseKey].guideIdBack;
                let manDayValue = response[responseKey].manDayValue;
                let remarks = response[responseKey].remarks;


                let vehicleTableTemplate = `<tr id="row${count}" class="guide-table-data">
<td>${guideId}</td>
<td>${guideName}</td>
<td>${guideAddress}</td>
<td>${guideAge}</td>
<td>${gender}</td>
<td class="guideContactNo">${guideContactNo}</td>
<td>${manDayValue}</td>
</tr>`;

                $('.guideDetailsBody').append(vehicleTableTemplate);

                count++;
            }
        }


    });

}


let guideRow = $('.table-guides');
let guideDetailsModal = $('.guide-details-modal');
// let hotelRow = document.querySelector(".hotelDetailsBody tr")

guideRow.on('click', '.guideDetailsBody > .guide-table-data', function (event) {


    // console.log(event.target.parentElement.attributes);
    let attributes = event.target.parentElement.attributes;

    tableId = attributes.item(0).value;
    console.log(tableId);


    let guideNo = $(`#${tableId} > .guideContactNo`).text();
    getGuideDetailsByNumber(guideNo)

    guideDetailsModal.css("display", "flex")
    guideDetailsModal.css("transition", "1s")

});

let guideId;

function getGuideDetailsByNumber(number) {

    $.ajax({
        dataType: "json",
        // data: vehicleForm,
        error: function (error) {
            console.log(error);
        },
        url: "http://localhost:8080/business/api/v1/guide/" + number,
        // enctype: 'multipart/form-data',
        // processData: false,  // Important!
        // contentType: false,
        // cache: false,
        method: "GET",
        // timeout: 600000
        success: function (response) {

            // for (const responseKey in response) {

            guideId = response.guideId;
            guideName = response.guideName;
            let guideAddress = response.guideAddress;
            guideAge = response.guideAge;
            let gender = response.gender;
            let guideContactNo = response.guideContactNo;
            manDayValue = response.manDayValue;
            let remarks = response.remarks;
            let guideImage = response.guideImage;
            let nicImageFront = response.nicImageFront;
            let nicImageBack = response.nicImageBack;
            let guideIdFront = response.guideIdFront;
            let guideIdBack = response.guideIdBack;

            $('.modalGuideId').text(guideId);
            $('.modalGuideName').text(guideName);
            $('.modalGuideAddress').text(guideAddress);
            $('.modalGuideAge').text(guideAge);
            $('.modalGuideGender').text(gender);
            $('.modalGuideContactNo').text(guideContactNo);
            $('.modalGuideManDayValue').text(manDayValue);
            $('.remarks').text(remarks);

            $('.modalGuideImage').attr("src", `data:image/jpeg;base64,${guideImage}`);
            $('.modalNicImageFront').attr("src", `data:image/jpeg;base64,${nicImageFront}`);
            $('.modalNicImageBack').attr("src", `data:image/jpeg;base64,${nicImageBack}`);
            $('.modalGuideIdFront').attr("src", `data:image/jpeg;base64,${guideIdFront}`);
            $('.modalGuideIdBack').attr("src", `data:image/jpeg;base64,${guideIdBack}`);


        },

    });

}

$('#hotelAddtoCartBtn').on("click",function () {

    $('#textHotelId').val(hotelId);
})

$('#vehicleAddtoCartBtn').on("click",function () {
    $('#textVehicleId').val(vehicleIds)
})

$('#guideAddToCartBtn').on("click",function () {
    $('#textGuideId').val(guideId)
})

$('#orderSaveBtn').on("click",function () {
    saveOrderDetails();
})



function saveOrderDetails() {

    let hotelId = $('#textHotelId').val();
    let vehicleId = $('#textVehicleId').val();
    let guideId = $('#textGuideId').val();
    let userId = $('#textUserId').val();
    let travellingArea = $('#travellingArea').val();
    let noOfAdults = $('#noOfAdults').val();
    let noOfChilds = $('#noOfChildren').val();
    let withPetsOrNot = $('#withPetOrNOt').val();
    let needGuideOrNot = $('#guideYesOrNo').val();
    let remarks = $('#remarks').val();
    let startDate = $('#startDate').val();
    let endDate = $('#endDate').val();
    let countDays = $('#countDays').val();
    let countNights = $('#countNights').val();
    let selectedPackage = 1
    let totalPrice = 0.00;

    let orderDetails = {hotelId:hotelId,guideId:guideId,vehicleId:vehicleId,
        packageCategory:selectedPackage,startDate:startDate,
        endDate:endDate,countDays:countDays,countNights:countNights,
        travelArea:travellingArea,noOfChildren:noOfChilds,noOfAdults:noOfAdults,
        withPetsOrNot:withPetsOrNot,needGuideOrNo:needGuideOrNot,
        totalValue:totalPrice,remarks:remarks,userId:userId}


    $.ajax({
        method: "POST",
        data: orderDetails,
        url: "http://localhost:8087/business/api/v1/order",

        contentType: "application/x-www-form-urlencoded",
        // processData:false,
        success:function (response) {
            // searchHotelDetails();
        }
    });

}