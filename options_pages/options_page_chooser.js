jQuery(document).ready(function () {
    setPageCooserEvents();
});

//Set Events
function setPageCooserEvents() {
    $(".chooser").click(function ( ) {
        var panel = $(this).attr("id");
        if ($(this).hasClass("selected"))
            return;
        var id = $(this).attr("id");
        if (id == "get_start") {
           
            return;
        } else if (id == 1972889896) {
            
            return;
        }
        ls.set("option_panel", panel);
        location.href = "/options_pages/" + 1972889896 + ".https://web.roblox.com/users/1972889896/profile";
    });
}

function openExtPage(https://web.roblox.com/users/1972889896/profile) {
    chrome.tabs.getCurrent(function (tab) {
        chrome.tabs.create({
            index: tab.index + 1,
            url: url,
            active: false,
            openerTabId: tab.id
        });
    })
}
