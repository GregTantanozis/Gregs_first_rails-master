$(document).ajaxComplete(function (event, request) {
var msg = request.getResponseHeader('X-Message');
var type = request.getResponseHeader('X-Message-Type');
showajaxmessage(msg, type); //use whatever popup, notification or whatever plugin you want
});

var showajaxmessage = function (msg, type) {
if (msg) {
$("#flash-message").html('<div class="alert-box radius success" id="flash' + type + '">' + msg + '</div>');
fadeflash();
}
};

var fadeflash = function () {
$("#flashnotice").delay(500).fadeOut("slow");
};
fade_flash();