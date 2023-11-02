//alert hub
import UserModel from "/model/UserModel.js";

const alertInstance = new AlertHub({
    timeout: 300,
    animation: 'fade-in',
    closeButton: false,
    // type: "success "
})


$(document).ready(function () {

    let item = localStorage.getItem("userdata");
    let parse = JSON.parse(item);
    $('#mainUserName').text(parse.userName.toUpperCase());

    requestAllHotelDetails();
    getAllVehicleData();
    getAllGuideData();
    requestAllHotelDetailsForPackage();
    requestAllVehicleDetailsForPackage();
    requestAllGuideDetailsForPackage();
    $('.dashboardContainer').css("display", "block");
    $('.package-container').css("display", "none");
    $('.user-data-container').css("display","none");
    $('.userOrderContainer').css("display","none")

    // $('#userProfileName').text(userProfile.getUserName());
    // console.log("use "+userProfile.getUserName());
    // console.log("use "+);

});


let tableId;

let hotelName;
let hotelLocation;
let contactNoTwo;
let contactNoOne;
let hotelContactEmail;
let starRate;

let tableElement = [];
let hotelAddToCartBtn = $('.hotel-add-to-cart-btn');
let rowDetailsHotelAddToCart = $('.row-details-hotel-add-to-cart');

//hotel details table row data fetch variables

let hotelColumn1;
let hotelColumn2;
let hotelColumn3;
let hotelColumn4;
let hotelColumn5;


//get table value when click
let hotelRow = $('.table-hotels');
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
    rowDetailsHotelAddToCart.css("display", "none")


});
//get table value when click
let hotelRowPackage = $('.table-hotels-packages');
// let hotelRow = document.querySelector(".hotelDetailsBody tr")

hotelRowPackage.on('click', '.hotelDetailsBodyPackages > .hotel-package-table-data', function (event) {

    // if (selectedPackage){
    //     fi
    // }
    rowDetailsHotelAddToCart.css("display", "block")
    console.log("A");

    // console.log(event.target.parentElement.attributes);
    let attributes = event.target.parentElement.attributes;

    tableId = attributes.item(0).value;
    console.log(tableId);


    let hotelEmail = $(`#${tableId} > .hotelPackageEmail`).text();
    console.log(hotelEmail)
    getAllHotelData(hotelEmail);

    hotelDetailsModal.css("display", "flex")
    hotelDetailsModal.css("transition", "1s")


});

//get table value when click
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

let vehicleRowPackage = $('.table-vehicle-packages');
// let hotelRow = document.querySelector(".hotelDetailsBody tr")

vehicleRowPackage.on('click', '.vehicleDetailsBodyPackages > .vehicle-package-table-data', function (event) {


    // console.log(event.target.parentElement.attributes);
    let attributes = event.target.parentElement.attributes;

    tableId = attributes.item(0).value;
    console.log(tableId);


    let vehicleId = $(`#${tableId} > .vehicleColIdPackage`).text();
    console.log(vehicleId);
    console.log(vehicleId);
    getVehicleById(vehicleId);

    vehicleDetailsModal.css("display", "flex")
    vehicleDetailsModal.css("transition", "1s")


});

//get table value when click
let guideRow = $('.table-guides');
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


$('#vehicleDetails').on('click', function () {

    getAllVehicleData();

})


$('.show-hotel-details').on('click', function () {

    requestAllHotelDetails();

})

function requestAllHotelDetails() {


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

                // let tabless = document.querySelector('.hotelDetailsBody').innerHTML = setTableRow;
                //
                // // console.log(tabless);
                //
                // $('.hotelDetailsBody').append(tabless)
                //
                // // tableElement.push(setTableRow)
                $('.hotelDetailsBody').append(setTableRow);

            }

        }

    });

    // console.log(tableElement);
    // document.querySelector('.hotelDetailsBody').innerHTML = tableElement[0];

    // <td className='${btnClass}'>
    //     <button className="btn btn-primary view-hotel-Row-Data">View details and place order</button>
    // </td>

}


let guideRowPackage = $('.table-guide-packages');
// let hotelRow = document.querySelector(".hotelDetailsBody tr")

guideRowPackage.on('click', '.guideDetailsBodyPackages > .guide-package-table-data', function (event) {


    // console.log(event.target.parentElement.attributes);
    let attributes = event.target.parentElement.attributes;

    tableId = attributes.item(0).value;
    console.log(tableId);


    let guideNo = $(`#${tableId} > .guideContactNo`).text();
    getGuideDetailsByNumber(guideNo)
    requestAllGuideDetailsForPackage();

    guideDetailsModal.css("display", "flex")
    guideDetailsModal.css("transition", "1s")


});


//hotel details pop up model controller

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


let modalClose = $('.x-mark');
let hotelDetailsModal = $('.hotels-details-modal');
let vehicleDetailsModal = $('.vehicle-details-modal');
let guideDetailsModal = $('.guide-details-modal');
modalClose.on("click", function () {
    hotelDetailsModal.css("display", "none");
    vehicleDetailsModal.css("display", "none");
    guideDetailsModal.css("display", "none");

});

let hotelId;
let hotelNameD;
let hotelOption1;
let hotelOption2;
let hotelOption3;
let hotelOption4;

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
            //
            // console.log(resp.cancellation)

            document.querySelector('.modalHotelName').innerText = response.hotelName;


        }

    })

}


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

let vehicleIds;
let vehicleBrand;
let vehicleFeeForDay;
let vehicleType;

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

$('#guideDetailsBtn').on('click', function () {
    getAllGuideData();
});


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

let guideId;
let guideName;
let manDayValue;
let guideAge;

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

$('.dashboard-nav').on('click', function () {

    $('.dashboardContainer').css("display", "block");
    $('.package-container').css("display", "none");
    $('.user-data-container').css("display","none");
    $('.userOrderContainer').css("display","none");

})

$('.notification-nav').on('click', function () {

    $('.dashboardContainer').css("display", "none");
    $('.package-container').css("display", "block");
    $('.user-data-container').css("display","none");
    $('.userOrderContainer').css("display","none");
});

$('.inbox-nav').on("click",function () {
    $('.dashboardContainer').css("display", "none");
    $('.package-container').css("display", "none");
    $('.user-data-container').css("display","block");
    $('.userOrderContainer').css("display","none");

    let item = localStorage.getItem("userdata");
    let parse = JSON.parse(item);
    $('#userProfileName').text(parse.userName);
    $('#userProfileEmail').text(parse.email);
    $('#userProfileNic').text(parse.userNic);


});

$('.orders-nav').on('click',function () {

    $('.dashboardContainer').css("display", "none");
    $('.package-container').css("display", "none");
    $('.user-data-container').css("display","none");
    $('.userOrderContainer').css("display","block");

});


let addToHotelPackageContainer = $('.addToHotelPackageContainer');
let addToVehiclePackageContainer = $('.addToVehiclePackageContainer');
let addToGuidePackageContainer = $('.addToGuidePackageContainer');
$('.closeAddToHotelPackageContainer').on('click', function () {
    console.log("close btn");
    addToHotelPackageContainer.css("display", "none");
    addToVehiclePackageContainer.css("display", "none");
    addToGuidePackageContainer.css("display", "none");
});
$('#navigationPackageHotelTable').on('click', function () {

    if (selectedPackage) {

    } else {
        requestAllHotelDetailsForPackage();
    }

    addToHotelPackageContainer.css("display", "block");

});

$('#navigationPackageVehicleTable').on('click', function () {

    if (selectedPackage) {

    } else {
        requestAllHotelDetailsForPackage();
    }

    addToVehiclePackageContainer.css("display", "block");

});
$('#navigationPackageGuideTable').on('click', function () {

    requestAllHotelDetailsForPackage();
    addToGuidePackageContainer.css("display", "block");

});

function requestAllHotelDetailsForPackage() {


    let count = 1;

    let tableBody = $('.hotelDetailsBodyPackages>tr');
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


                let setTableRow = `<tr id="rowhotelPackage${count}" class="hotel-package-table-data">
<td>${hotelName}</td>
<td>${hotelLocation}</td>
<td>${contactNoOne}</td>
<td>${contactNoTwo}</td>
<td class="hotelPackageEmail">${hotelContactEmail}</td>
<td>${starRate}</td>
</tr>`;
                count++;

                // let tabless = document.querySelector('.hotelDetailsBody').innerHTML = setTableRow;
                //
                // // console.log(tabless);
                //
                // $('.hotelDetailsBody').append(tabless)
                //
                // // tableElement.push(setTableRow)
                $('.hotelDetailsBodyPackages').append(setTableRow);

            }

        }

    });


}


function requestAllVehicleDetailsForPackage() {

    let count = 1;

    $('.vehicleDetailsBodyPackages>tr').empty();

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


                let vehicleTableTemplate = `<tr id="rowVehiclePackage${count}" class="vehicle-package-table-data">
<td>${vehicleId}</td>
<td>${category}</td>
<td class="vehicleColIdPackage">${vehicleNo}</td>
<td>${vehicleBrand}</td>
<td>${driverName}</td>
<td>${fuelType}</td>
<td>${seatCapacity}</td>
<td>${vehicleType}</td>
</tr>`;

                $('.vehicleDetailsBodyPackages').append(vehicleTableTemplate);

                count++;
            }
        }


    });

}


function requestAllGuideDetailsForPackage() {

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


                let vehicleTableTemplate = `<tr id="rowGuidePackage${count}" class="guide-package-table-data">
<td>${guideId}</td>
<td>${guideName}</td>
<td>${guideAddress}</td>
<td>${guideAge}</td>
<td>${gender}</td>
<td class="guideContactNo">${guideContactNo}</td>
<td>${manDayValue}</td>
</tr>`;

                $('.guideDetailsBodyPackages').append(vehicleTableTemplate);

                count++;
            }
        }


    });

}

let hotelCartName = $('#hotelNameCart');
let hotelCartId = $('#hotelIdCart');
let hotelCartPrice = $('#hotelPriceCart');
let hotelCartPackage = $('#hotelPackageCart');
let hotelRoomType = $('.hotelRoomType');
let totalPriceCal = $('.totalPriceCal');


let hotelFeeOption;

let totalPrice = 0.00;

let hotelPrice;
let vehiclePrice;
let guidePrice;

rowDetailsHotelAddToCart.on('click', function () {

    // if (hotelPrice !== 0){
    //     totalPrice = totalPrice-hotelPrice
    // }

    if (hotelPrice) {
        totalPrice = totalPrice - hotelPrice
    }

    hotelPrice = 0.00
    console.log(hotelPrice);

    let hotelName = hotelNameD.text();
    let hotelIds = hotelId.text();


    hotelCartName.text(`${hotelName}`)
    hotelCartId.text(`${hotelIds}`)

    hotelFeeOption = hotelRoomType.val();

    if (hotelFeeOption === "hotelFeeOption1") {
        // console.log(hotelFeeOption);
        hotelCartPackage.text(`FullBoard-double`);

        hotelCartPrice.text(`${hotelOption1.text()}`);
        hotelPrice = hotelCartPrice.text();
        console.log("a");
        console.log(hotelPrice);

        // totalPrice = totalPrice+hotelPrice;

    } else if (hotelFeeOption === "hotelFeeOption2") {
        hotelCartPackage.text(`HalfBoard-double`);
        hotelCartPrice.text(`${hotelOption2.text()}`);

        hotelPrice = hotelCartPrice.text();
        console.log(hotelPrice);

        // totalPrice = totalPrice+hotelOption1.text();

    } else if (hotelFeeOption === "hotelFeeOption3") {
        hotelCartPackage.text(`FullBoard-triple`);
        hotelCartPrice.text(`${hotelOption3.text()}`);

        hotelPrice = hotelCartPrice.text();
        console.log(hotelPrice);

        // totalPrice = totalPrice+hotelOption1.text();

    } else if (hotelFeeOption === "hotelFeeOption4") {
        hotelCartPackage.text(`HalfBoard-triple`);
        hotelCartPrice.text(`${hotelOption4.text()}`);

        hotelPrice = hotelCartPrice.text();
        console.log(hotelPrice);

        // totalPrice = totalPrice+hotelOption1.text();
    } else {
        errorNotification1("please select the hotel options")
        throw new Error("some thing happen");
    }


    successNotification1("Hotel add to the cart");
    // totalPriceCal.text().remove();

    let hotelPriceIntConverter = Number(hotelPrice);

    totalPriceCal.text(totalPrice += hotelPriceIntConverter);
    console.log("total" + totalPrice);

    // // console.log(hotelNameD.text());
    //    // console.log();
    //    console.log("this sis the add to cart btn");

});


let rowDetailsVehicleAddToCart = $('.row-details-vehicle-add-to-cart');
let vehicleIdCart = $('.vehicleIdCart');
let vehicleBrandCart = $('.vehicleBrandCart');
let vehiclePriceCart = $('.vehiclePriceCart');
let vehicleTypeCart = $('.vehicleTypeCart');

rowDetailsVehicleAddToCart.on('click', function () {

    if (vehiclePrice) {
        totalPrice = totalPrice - vehiclePrice;
    }

    vehiclePrice = 0.00

    vehicleIdCart.text(`${vehicleIds}`);
    vehicleBrandCart.text(`${vehicleBrand}`);
    vehiclePriceCart.text(`${vehicleFeeForDay}`);
    vehicleTypeCart.text(`${vehicleType}`);

    // totalPrice = totalPrice+vehicleFeeForDay;

    vehiclePrice = vehiclePriceCart.text();
    let convertVehiclePriceToInt = Number(vehiclePrice)


    totalPriceCal.text(totalPrice += convertVehiclePriceToInt);

    successNotification1("You added vehicle to the package")

})

let rowDetailsGuideAddToCart = $('.row-details-guide-add-to-cart');
let guideIdCart = $('.guideIdCart');
let guideNameCart = $('.guideNameCart');
let manDayValueCart = $('.manDayValueCart');
let guideAgeCart = $('.guideAgeCart');
rowDetailsGuideAddToCart.on('click', function () {

    if (guidePrice) {
        totalPrice = totalPrice - guidePrice;
    }

    guidePrice = 0.00

    guideIdCart.text(`Guide id : ${guideId}`);
    guideNameCart.text(`Guide name : ${guideName}`);
    manDayValueCart.text(`${manDayValue}`);
    guideAgeCart.text(`Guide age cart : ${guideAge}`);

    guidePrice = manDayValueCart.text();

    let guidePriceIntConverter = Number(guidePrice);
    let totalPriceConvertToNumber = Number(totalPrice);

    // totalPriceCal.clear();
    totalPriceCal.text(totalPrice += guidePriceIntConverter);
    console.log("total = " + totalPrice);

    successNotification1("Guide added to the package")
});

let selectedPackage;

let packageCategory = $('.packageCategory').on("click", function () {

    selectedPackage = 0
    selectedPackage = packageCategory.val();
    filterPackage(selectedPackage)

});

function filterPackage(category) {

    filterHotelData(category);
    filterVehicleData(category);


}

function filterHotelData(category) {


    let count = 1;

    let tableBody = $('.hotelDetailsBodyPackages>tr');
    tableBody.empty();


    $.ajax({
        method: "GET",
        url: "http://localhost:8085/business/api/v1/hotel/filter/" + category,
        // data:"JSON",
        success: function (response) {

            for (const i in response) {

                hotelName = response[i].hotelName;
                hotelLocation = response[i].hotelLocation;
                contactNoOne = response[i].contactNoOne;
                contactNoTwo = response[i].contactNoTwo;
                hotelContactEmail = response[i].hotelContactEmail;
                starRate = response[i].starRate;


                let setTableRow = `<tr id="rowhotelPackage${count}" class="hotel-package-table-data">
<td>${hotelName}</td>
<td>${hotelLocation}</td>
<td>${contactNoOne}</td>
<td>${contactNoTwo}</td>
<td class="hotelPackageEmail">${hotelContactEmail}</td>
<td>${starRate}</td>
</tr>`;
                count++;

                $('.hotelDetailsBodyPackages').append(setTableRow);

            }

        }

    });

}

function filterVehicleData(category) {

    let count = 1;

    $('.vehicleDetailsBodyPackages>tr').empty();

    $.ajax({
        method: "GET",
        url: `http://localhost:8086/business/api/v1/vehicle/filter/`+category,
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


                let vehicleTableTemplate = `<tr id="rowVehiclePackage${count}" class="vehicle-package-table-data">
<td>${vehicleId}</td>
<td>${category}</td>
<td class="vehicleColIdPackage">${vehicleNo}</td>
<td>${vehicleBrand}</td>
<td>${driverName}</td>
<td>${fuelType}</td>
<td>${seatCapacity}</td>
<td>${vehicleType}</td>
</tr>`;

                $('.vehicleDetailsBodyPackages').append(vehicleTableTemplate);

                count++;
            }
        }
    });
}



$('#bookingBtn').on("click",function () {
    // let serialize = $('#saveOrderDetails').serialize();
    // console.log(serialize);

    let hotelId = hotelCartId.text();
    let guideId = guideIdCart.text();
    let vehicleId = vehicleIdCart.text();
    let startDate = $('#startDate').val();
    let endDate = $('#endDate').val();
    let countDays = $('#countDays').val();
    let countNights = $('#countNights').val();
    let travellingArea = $('#travellingArea').val();
    let noOfAdults = $("#noOfAdults").val();
    let noOfChilds = $("#noOfChilds").val();
    let withPetsOrNot = $('#withPetOrNOt').val();
    let needGuideOrNot = $('#guideYesOrNo').val();
    let remarks = $('#floatingTextarea2').val();

    let item = localStorage.getItem("userdata");
    let parse = JSON.parse(item);


    let orderDetails = {hotelId:hotelId,guideId:guideId,vehicleId:vehicleId,
                            packageCategory:selectedPackage,startDate:startDate,
                            endDate:endDate,countDays:countDays,countNights:countNights,
                            travelArea:travellingArea,noOfChildren:noOfChilds,noOfAdults:noOfAdults,
                            withPetsOrNot:withPetsOrNot,needGuideOrNo:needGuideOrNot,
                            totalValue:totalPrice,remarks:remarks,userId:parse.userId}
    console.log(orderDetails);



    $.ajax({
        method: "POST",
        data: orderDetails,
        url: "http://localhost:8087/business/api/v1/order",

        contentType: "application/x-www-form-urlencoded",
        success:function (response) {
            // searchHotelDetails();
            $('.triggerBtns')[0].click();
        },
        error:function () {

        }
    });


})


//add user details


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