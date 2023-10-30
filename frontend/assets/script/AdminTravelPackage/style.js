let hotelTableContainer = $('.hotelTableContainer');

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