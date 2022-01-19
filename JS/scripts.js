function copytxt() {
    navigator.clipboard.writeText("gainthanakrit@gmail.com");
    let myAlert = document.querySelectorAll('.toast');
    let bsAlert = new bootstrap.Toast(myAlert);
    bsAlert.show();
}