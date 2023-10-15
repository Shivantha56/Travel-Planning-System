let serviceContainer = $(".service-container");
let settingContainer = $(".setting-container");


$('#serviceNavigationBtn').on("click",function () {
    serviceContainer.css("display","block");
    settingContainer.css("display","none")

})

$('#settingNavigationBtn').on("click",function () {
    serviceContainer.css("display","none");
    settingContainer.css("display","block")

})