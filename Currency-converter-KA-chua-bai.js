function convert() {
//    Lay du lieu
    let amount = Number(document.getElementById("amount").value);
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
//    tinh toan
    if (from == "VND" && to == "USD") {
        result = amount / 23000;
    } else if (from == "USD" && to == "VND") {
        result = amount * 23000;
    } else {
        result = "Chon lai de";
    }
    document.getElementById("result").innerText = result
}

// Cach hai: khong dung dieu kien
function convert1() {
//    Lay du lieu
    let amount1 = Number(document.getElementById("amount1").value);
    let from1 = Number(document.getElementById("from1").value);
    let to1 = Number(document.getElementById("to1").value);
    let rate = to1 / from1;
    let result1 = amount1 * rate;
//    tinh toan
    document.getElementById("result1").innerText = result1
}