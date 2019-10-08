import mgnMenu from './mgn-menu';

let menu = new mgnMenu(
    ".j-menu",
    {
        globalNav: "#gNav",
        activeName: "open",
        closePoint: 768,
        noScroll: false
    }
);

menu.Open();

setTimeout(function() {

    menu.Close();

},1000);

menu.OpenStart = function() {
    console.log("openStart")
}
menu.OpenEnd = function() {
    console.log("openEnd")
}
menu.CloseStart = function() {
    console.log("closeStart")
}
menu.CloseEnd = function() {
    console.log("closeEnd")
}
