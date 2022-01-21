function copytxt() {
    navigator.clipboard.writeText("gainthanakrit@gmail.com");
    let myAlert = document.querySelectorAll('.toast');
    let bsAlert = new bootstrap.Toast(myAlert);
    bsAlert.show();
}
document.getElementById("cpybtn").onclick = function () {
    var myAlert = document.getElementById("Copied");
    var bsAlert = new bootstrap.Toast(myAlert);
    bsAlert.show();//show it
}
window.onload = (event) => {
    let myAlert = document.getElementById("MobileAlert");
    var bsAlert = new bootstrap.Toast(myAlert);
    bsAlert.show();//show it
};
$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
});