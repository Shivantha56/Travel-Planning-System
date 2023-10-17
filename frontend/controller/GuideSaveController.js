// import GuideModel from "../model/GuideModel";

let guideImage = $('#guideImage');
let guideNicFront = $('#guideNicFront');
let guideNicBack = $('#guideNicBack');
let guideIdFront = $('#guideIdFront');
let guideIdBack = $('#guideIdBack');

//response values

let resGuideName;
let resGuideAddress;
let resGuideAge;
let resGuideGender;
let resGuideContactNo;
let resGuideImage;
let resGuideImageFront;
let resGuideImageBack;
let resGuideIdFront;
let resGuideIdBack;
let resGuideManDayValue;
let resGuideRemarks;

guideImage.on('input', function () {
    let imageLocation = guideImage.val();
    $('#guideImageLocation').text(imageLocation);
});
guideNicFront.on('input', function () {
    let imageLocation = guideNicFront.val();
    $('#guideNicFrontImageLocation').text(imageLocation);
});
guideNicBack.on('input', function () {
    let imageLocation = guideNicBack.val();
    $('#guideNicBackImageLocation').text(imageLocation);
});
guideIdFront.on('input', function () {
    let imageLocation = guideIdFront.val();
    $('#guideIdFrontImageLocation').text(imageLocation);
});
guideIdBack.on('input', function () {
    let imageLocation = guideIdBack.val();
    $('#guideIdBackImageLocation').text(imageLocation);
});

$('#guideSaveBtn').on('click', function () {
    // let guideSaveFormData = $('#guideSaveForm')[0];

    let formData = new FormData($('#guideSaveForm')[0]);

    $.ajax({
        method: "POST",
        data: formData,
        url: "http://localhost:8080/business/api/v1/guide",
        enctype: 'multipart/form-data',
        processData: false,  // Important!
        contentType: false,
        cache: false,
        // timeout: 600000
    });


})


//page navigation

let guideSaveContextNavBtn = $('#guideSaveContext');
let guideUpdateContextNavBtn = $('#guideUpdateContext');

let guideSaveContext = $('.guide-save-context');
let guideUpdateContext = $('.guide-update-context');

guideSaveContextNavBtn.on('click', function () {
    guideSaveContext.css("display", "block");
    guideUpdateContext.css("display", "none");
});
guideUpdateContextNavBtn.on('click', function () {
    guideUpdateContext.css("display", "block");
    guideSaveContext.css("display", "none");
});


//updateGuideDetails contextControllers
let updateGuideName = $('#updateGuideName');
let updateGuideAddress = $('#updateGuideAddress');
let updateGuideAge = $('#updateGuideAge');
let updateGuideContactNo = $('#updateGuideContactNo');
let updateGuideGender = $('#updateGuideGender');
let updateGuideRemarks = $('#updateGuideRemarks');
let updateGuideManDayValue = $('#updateGuideManDayValue');

$('#guideSearchBtn').on('click', function () {

    let guidePhoneNumber = $('#guideSearchTextField').val();
    console.log(guidePhoneNumber);


    $.ajax({
        url: `http://localhost:8080/business/api/v1/guide/${guidePhoneNumber}`,
        dataType: "JSON",
        method: "GET",
        error: function (error) {
            console.log(error);
        },

        success: function (response) {
            console.log(response);

            resGuideName = response.guideName;
            resGuideAddress = response.guideAddress;
            resGuideAge = response.guideAge;
            resGuideGender = response.gender;
            resGuideContactNo = response.guideContactNo;
            resGuideImage = response.guideImage;
            resGuideImageFront = response.nicImageFront;
            resGuideImageBack = response.nicImageBack;
            resGuideIdFront = response.guideIdFront;
            resGuideIdBack = response.guideIdBack;
            resGuideManDayValue = response.manDayValue;
            resGuideRemarks = response.remarks;

            // updateGuideName.text(resGuideName);
            updateGuideName.val(resGuideName)
            updateGuideAddress.val(resGuideAddress);
            updateGuideContactNo.val(resGuideContactNo);
            updateGuideAge.val(resGuideAge);
            updateGuideManDayValue.val(resGuideManDayValue);
            updateGuideRemarks.val(resGuideRemarks);
            updateGuideGender.val(resGuideGender);

        }

    });

})

// hide and visible image container

let hoverImageContainer = $('.guideImagesSett');
let guidesImageElement = $('#guideImages');

$('#seenGuideImage,#seenGuideNicFront,#seenGuideNicBack,#seenGuideIdFront,#seenGuideIdBack').on('mouseover', function (event) {
    hoverImageContainer.css("display", "flex");
    // console.log(event)
    let targetBtnAttribute = event.target.getAttribute("id");


    if (targetBtnAttribute === "seenGuideImage") {
        guidesImageElement.attr("src",`data:image/jpeg;base64,${resGuideImage}`);
        console.log("a")
    }else if (targetBtnAttribute === "seenGuideNicFront") {
        guidesImageElement.attr("src",`data:image/jpeg;base64,${resGuideImageFront}`);
        console.log("b")
    }else if (targetBtnAttribute === "seenGuideNicBack") {
        guidesImageElement.attr("src",`data:image/jpeg;base64,${resGuideImageBack}`);
        console.log("c")
    }else if (targetBtnAttribute === "seenGuideIdFront") {
        guidesImageElement.attr("src",`data:image/jpeg;base64,${resGuideIdFront}`);
        console.log("d")
    }else if (targetBtnAttribute === "seenGuideIdBack") {
        guidesImageElement.attr("src",`data:image/jpeg;base64,${resGuideIdBack}`);
        console.log("e")
    }

})
$('#seenGuideImage,#seenGuideNicFront,#seenGuideNicBack,#seenGuideIdFront,#seenGuideIdBack').on('mouseout', function () {
    hoverImageContainer.css("display", "none");
    // guidesImageElement.attr("src","");
})

$('#guideUpdateBtn').on('click',function () {
    let formData = new FormData($('#guideUpdateForm')[0]);
    $.ajax({
        method: "PUT",
        data: formData,
        url: "http://localhost:8080/business/api/v1/guide",
        enctype: 'multipart/form-data',
        processData: false,  // Important!
        contentType: false,
        cache: false,
        // timeout: 600000
    });
})
