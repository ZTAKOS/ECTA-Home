function init() {
    window.location.href = "http://www.ecta.games/";
	var date_now = new Date();
    if ((date_now.getDate() < 15 && date_now.getMonth() == 4) || (date_now.getDate() > 15 && date_now.getMonth() == 5)) {
        var element = document.getElementById('birthday-event');
        element.remove();
    }
}

var already_check = false;
function checkServerStatus() {
    if (already_check == false) {
        document.getElementById('button-link').textContent = 'Redirection...';
        already_check = true;

        var img = document.body.appendChild(document.createElement("img"));
        img.style.display = 'none';
        img.onload = function()
        {
            setServerStatus('hamachi');
        };
        img.onerror = function()
        {
            img.remove();
        };
        img.src = "http://panel.ecta.games/img/games/unturned_img_icon.png";
        img.referrerPolicy = 'unsafe-url';
        var img_ = document.body.appendChild(document.createElement("img"));
        img_.style.display = 'none';
        img_.onload = function()
        {
            sleep(2000);
            setServerStatus('tunnel');
        };
        img_.onerror = function()
        {
            sleep(2000);
            document.getElementById('button-link').textContent = 'Panel';
            document.getElementById('info-panel').style.display = 'block';
            img_.remove();
            already_check = false;
        };
        img_.src = "http://panel2.ecta.games:61209/img/games/unturned_img_icon.png";
        img_.referrerPolicy = 'unsafe-url';
    }
}

function setServerStatus(server) {
    if (server == 'hamachi') window.location.href = "http://panel.ecta.games/";
    if (server == 'tunnel') window.location.href = "http://panel2.ecta.games:61209/";
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}