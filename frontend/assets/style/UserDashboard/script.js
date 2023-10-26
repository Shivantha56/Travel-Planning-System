//alert hub

const alertInstance = new AlertHub({
    timeout: 300,
    animation: 'fade-in',
    closeButton: false,
    // type: "success "
})



$(document).ready(function () {

    requestAllHotelDetails();
    getAllVehicleData();
    getAllGuideData();
    requestAllHotelDetailsForPackage();
    requestAllVehicleDetailsForPackage();
    requestAllGuideDetailsForPackage();
    $('.dashboardContainer').css("display", "block");
    $('.package-container').css("display", "none");


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
    rowDetailsHotelAddToCart.css("display","none")


});
//get table value when click
let hotelRowPackage = $('.table-hotels-packages');
// let hotelRow = document.querySelector(".hotelDetailsBody tr")

hotelRowPackage.on('click', '.hotelDetailsBodyPackages > .hotel-package-table-data', function (event) {

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

            $('.modalVehicleId').text(vehicleId);
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

            let guideId = response.guideId;
            let guideName = response.guideName;
            let guideAddress = response.guideAddress;
            let guideAge = response.guideAge;
            let gender = response.gender;
            let guideContactNo = response.guideContactNo;
            let manDayValue = response.manDayValue;
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

})

$('.notification-nav').on('click', function () {

    $('.dashboardContainer').css("display", "none");
    $('.package-container').css("display", "block");

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

    requestAllHotelDetailsForPackage();
    addToHotelPackageContainer.css("display", "block");

});

$('#navigationPackageVehicleTable').on('click', function () {

    requestAllHotelDetailsForPackage();
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

let hotelFeeOption;

rowDetailsHotelAddToCart.on('click',function () {


    let hotelName = hotelNameD.text();
    let hotelIds = hotelId.text();


    hotelCartName.text(`Hotel Name : ${hotelName}`)
    hotelCartId.text(`HotelId : ${hotelIds}`)

    hotelFeeOption = hotelRoomType.val();

    if (hotelFeeOption === "hotelFeeOption1") {
        console.log(hotelFeeOption);
        hotelCartPackage.text(`Package : FullBoard-double`);
        hotelCartPrice.text(`Price : ${hotelOption1.text()}`);

    } else if (hotelFeeOption === "hotelFeeOption2") {
        hotelCartPackage.text(`Package : HalfBoard-double`);
        hotelCartPrice.text(`Price : ${hotelOption2.text()}`);

    } else if (hotelFeeOption === "hotelFeeOption3") {
        hotelCartPackage.text(`Package : FullBoard-triple`);
        hotelCartPrice.text(`Price : ${hotelOption3.text()}`);

    } else if (hotelFeeOption === "hotelFeeOption4") {
        hotelCartPackage.text(`Package : HalfBoard-triple`);
        hotelCartPrice.text(`Price : ${hotelOption4.text()}`);
    } else {
        errorNotification1("please select the hotel options")
        throw new Error("some thing happen");
    }

    successNotification1("Hotel add to the cart")
 // console.log(hotelNameD.text());
    // console.log();
    console.log("this sis the add to cart btn");

});

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