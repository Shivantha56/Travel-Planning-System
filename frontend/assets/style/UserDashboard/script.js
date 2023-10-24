// let dataTable;
//
$(document).ready( function () {

    requestAllHotelDetails();

} );

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

hotelRow.on('click', '.hotelDetailsBody > .hotel-table-data',function (event) {


    // console.log(event.target.parentElement.attributes);
    let attributes = event.target.parentElement.attributes;

    tableId = attributes.item(0).value;
    console.log(tableId);




    let hotelEmail = $(`#${tableId}>.hotelEmail`).text();
    console.log(hotelEmail)
    getAllHotelData(hotelEmail);

    hotelDetailsModal.css("display","flex")
    hotelDetailsModal.css("transition","1s")


})


function getRequestedHotelDataData(){

    


}











function countTableRowId(){
    console.log($('.hotel-table-data').attr("id"))
}



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
    
    let tableBody =  $('.hotelDetailsBody>tr');
    tableBody.empty();




    $.ajax({
        method:"GET",
        url:"http://localhost:8085/business/api/v1/hotel",
        // data:"JSON",
        success:function (response) {

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
</tr>` ;
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
modalClose.on("click",function () {
    hotelDetailsModal.css("display","none");

});


function getAllHotelData(email){
    $.ajax({
        url: "http://localhost:8085/business/api/v1/hotel/"+email,
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























