function convert() {
    let amount = Number(document.getElementById("amount").value);
    let from = Number(document.getElementById("fromCurrency").value);
    let to = Number(document.getElementById("toCurrency").value);
    let rate = to / from;
    let result = amount * rate;
    document.getElementById("result").innerText = "result= " + result;
}