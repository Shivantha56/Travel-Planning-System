let hotelTableContainer = $('.hotelTableContainer');
let modalCloseBtn = $('.x-mark');

modalCloseBtn.on("click",function () {
    hotelDetailsModal.css("display","none")
})

$('#tableHotelDetails').on("click",function () {

    hotelTableContainer.css("display","block");
    getHotelDetails();


});

$('#hotelContainerCloseBtn').on("click",function () {
    hotelTableContainer.css("display","none")
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