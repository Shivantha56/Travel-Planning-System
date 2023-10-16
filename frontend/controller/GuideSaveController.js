// import GuideModel from "../model/GuideModel";

let guideImage = $('#guideImage');
let guideNicFront = $('#guideNicFront');
let guideNicBack = $('#guideNicBack');
let guideIdFront = $('#guideIdFront');
let guideIdBack = $('#guideIdBack');



guideImage.on('input',function () {
    let imageLocation = guideImage.val();
    $('#guideImageLocation').text(imageLocation);
});
guideNicFront.on('input',function () {
    let imageLocation = guideNicFront.val();
    $('#guideNicFrontImageLocation').text(imageLocation);
});
guideNicBack.on('input',function () {
    let imageLocation = guideNicBack.val();
    $('#guideNicBackImageLocation').text(imageLocation);
});
guideIdFront.on('input',function () {
    let imageLocation = guideIdFront.val();
    $('#guideIdFrontImageLocation').text(imageLocation);
});
guideIdBack.on('input',function () {
    let imageLocation = guideIdBack.val();
    $('#guideIdBackImageLocation').text(imageLocation);
});

$('#guideSaveBtn').on('click',function () {
    // let guideSaveFormData = $('#guideSaveForm')[0];

    let formData = new FormData($('#guideSaveForm')[0]);

    $.ajax({
        method: "POST",
        data: formData,
        url : "http://localhost:8080/business/api/v1/guide",
        enctype: 'multipart/form-data',
        processData: false,  // Important!
        contentType: false,
        cache: false,
        // timeout: 600000
    });


})
