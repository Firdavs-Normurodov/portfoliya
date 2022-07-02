//bot token
var telegram_bot_id = "5510801608:AAFNcYJ_3wvcrvNDEa4hSGEbGlyvtweDWsY"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id =2081473039; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var u_name, email, message;
var ready = function() {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    Phone = document.getElementById("phone").value;
    message = document.getElementById("message").value;
    message = "Ismi: " + u_name + "\nEmail: " + email +"\nPhone:"+Phone+  "\nIzoh: " + message;
};
var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
    return false;
};