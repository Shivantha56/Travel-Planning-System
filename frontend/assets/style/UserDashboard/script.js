// let dataTable;
//
$(document).ready(function () {

    requestAllHotelDetails();
    getAllVehicleData();

});

let tableId;

let hotelName;
let hotelLocation;
let contactNoTwo;
let contactNoOne;
let hotelContactEmail;
let starRate;

let tableElement = [];

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

$('#vehicleDetails').on('click',function () {

    getAllVehicleData();

})

// function getRequestedHotelDataData(){
//
//
//
//
// }
//


// function countTableRowId(){
//     console.log($('.hotel-table-data').attr("id"))
// }


//
// hotelRow.addEventListener('click', .hotelDetailsBody tr,function () {
//     console.log("a");
// })


// Attach a click event listener to the table
// table.addEventListener("click", function(event) {
//     // Check if the clicked element is a table cell (td)
//     // if (event.target.tagName === "TD") {
//         // // Get the clicked cell's content
//         // var cellData = event.target.textContent;
//         // console.log("Clicked cell data: " + cellData);
//
//         if (event.target.tagName === "TR") {
//             // Get the clicked row's data
//             var rowData = [];
//             var cells = event.target.querySelectorAll("td");
//             cells.forEach(function(cell) {
//                 rowData.push(cell.textContent);
//             });
//             console.log("Clicked row data: " + rowData.join(", "));
//         }
//     // }
// });


// $('.table-hotels .hotelDetailsBody').on( 'click', 'tr', function () {
//     console.log( dataTable.row( this ).data() );
// } );

// function getHotelTableRowData(){
//
//         hotelColumn1 =$('.dataColumn1').text();
//         hotelColumn2 =$('.dataColumn2').text();
//         hotelColumn3 =$('.dataColumn3').text();
//         hotelColumn4 =$('.dataColumn4').text();
//         hotelColumn5 =$('.dataColumn5').text();
//
//         console.log(hotelColumn1);
//         console.log(hotelColumn2);
//
//
// }


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
modalClose.on("click", function () {
    hotelDetailsModal.css("display", "none");
    vehicleDetailsModal.css("display", "none");

});


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
            modalHotelFeeOption1.text(response.hotelFeeOption1);
            modalHotelFeeOption2.text(response.hotelFeeOption2);
            modalHotelFeeOption3.text(response.hotelFeeOption3);
            modalHotelFeeOption4.text(response.hotelFeeOption4);
            modalHotelId.text(response.hotelId);
            modalHotelLocation.text(response.hotelLocation);
            modalHotelLocationLink.text(response.hotelLocationLink);
            modalHotelName.text(response.hotelName);
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
        url: "http://localhost:8086/business/api/v1/vehicle/" +vehicleId,
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

            $('.imageVehicleFrontImage').attr("src",`data:image/jpeg;base64,${vehicleFrontImage}`);
            $('.imageVehicleRearImage').attr("src",`data:image/jpeg;base64,${vehicleRearImage}`);
            $('.imageVehicleSideImage').attr("src",`data:image/jpeg;base64,${vehicleSideImage}`);

        },

    });

}




















