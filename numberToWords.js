// Please refer to the IronSnippets ReadMe for information on these functions
// This file is part of IronSnippets by Mark J. Keeble
// https://github.com/mjkeeble/IronSnippets

function float2Words(num) {
    let floatInText = "";
    let decimal = num.toString().split(".")[1];
    if (Math.floor(num) == 0) {
        floatInText = "Zero point"
    } else {
        floatInText = integer2Words(Math.floor(num)) + " point";
    } // End if
    console.log(decimal);
    for (let i = 0; i < decimal.length; i++) {
        floatInText += " " + integer2Words(decimal.charAt(i));
    } // end for loop
    return floatInText.trim();
} //End float2Words

function currency2Words(value, currency) {
    let currencyInText = integer2Words(Math.floor(value), "us");
    const currencies = {
        //["Currency code", "currency unit", "subdivision plural", "subdivision singular"]
        "USD": ["dollar", "cents", "cent"],
        "EUR": ["euros", "cents", "cent"],
        "GBP": ["pounds", "pence", "pence"]
    };
    console.log(currency);
    console.log(Math.floor((value % 1) * 100));
    

    let unit = currencies[currency.toUpperCase()][0];
    let subunit = Math.floor((value % 1) * 100) < 2 ? currencies[currency.toUpperCase()][2] : currencies[currency.toUpperCase()][1];
    if (Math.floor(value) >= 1) currencyInText += " " + unit
    if (Math.floor(value) != value) {
        if (Math.floor(value) > 1) currencyInText += " and "
        currencyInText += integer2Words(Math.floor((value % 1) * 100))
            + " "
            + subunit;
    } // end if
    return (currencyInText.charAt(0).toUpperCase() + currencyInText.slice(1)).trim()
} // End currency2Words

function integer2Words(num, sys = "") {
    let numInText = ""
    console.log(num);
    
    num = parseInt(num);
    const thousands = ["", "thousand", "million", "thousand", "billion", "thousand", "trillion", "quadrillion", "quintillion", "sextillion"];

    if (sys.toLowerCase() == "us") {
        thousands.splice(5, 1);
        thousands.splice(3, 1);
    } // end if
    num = num.toString();
    let i = 1;
    while (i < (num.length / 3)) {
        numInText = (hundreds2Words(num.substring(num.length - (i * 3), num.length - (i - 1) * 3)))
            + " "
            + thousands[i - 1]
            + " "
            + numInText;
        i++
    } //end while
    numInText = (hundreds2Words((num.substring(0, num.length - ((i - 1) * 3)))))
        + " "
        + thousands[i - 1]
        + " "
        + numInText;
    console.log(numInText);

    return (numInText.charAt(0).toUpperCase() + numInText.slice(1)).trim();

} // End integer2Words

function hundreds2Words(num) {
    const zero2Nineteen = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let txt = "";
    if (num.length == 3) {
        txt += zero2Nineteen[num.charAt(0)] + " hundred";
        num = num.substring(1)
        if (num > 0) {
            txt += " and"
        } else {
            return txt;
        } // End if
    } // End if
    if (num < 20) {
        txt += " " + zero2Nineteen[parseInt(num)];
    } else {
        txt += " " + tens[Math.floor(parseInt(num) / 10)];
        if (parseInt(num) % 10 > 0) txt += "-";
        txt += zero2Nineteen[Math.floor(parseInt(num) % 10)];
    } // End if
    return txt;
} // End hundreds2Words


// tests
console.log(currency2Words(65.02, "eur"))
console.log(integer2Words(73628483723));
array.forEach(element => {
    
});