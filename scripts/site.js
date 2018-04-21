window.onload = function () {
    var content = document.getElementById("content");
    var leftMenu = document.getElementsByClassName("leftMenu");
    var pageContent = document.getElementsByClassName("pageContent");
    content.style.height = (document.documentElement.clientHeight - 100) + "px";
    leftMenu[0].style.height = content.style.height;
    pageContent[0].style.height = content.style.height;
}