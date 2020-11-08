function float2Words(num) {
    let floatInText = "";
    let decimal = num.toString().split(".")[1];
    if (Math.floor(num) == 0) {
        floatInText = "Zero point"
    } else {
        console.log(`>0`);
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
    const currencies = [
        ["USD", "dollar", "cents"],
        ["EUR", "euros", "cents"],
        ["GBP", "pounds", "pence"]
    ];
    let unit = "";
    let subunit = "";
    for (let i = 0; i < currencies.length; i++) {
        if (currencies[i][0] == currency.toUpperCase()) {
            unit = currencies[i][1];
            subunit = currencies[i][2];
            break;
        }; // end if;
    } // end for loop
    currencyInText += " " + unit;
    if (Math.floor(value) != value) {
        currencyInText += " and "
            + integer2Words(Math.floor((value % 1) * 100))
            + " "
            + subunit;
    } // end if
    return currencyInText.trim()
} // End currency2Words

function integer2Words(num, sys) {
    let numInText = ""
    num = parseInt(num);
    const thousands = ["", "thousand", "million", "milliard", "billion", "billiard", "trillion", "quadrillion", "quintillion", "sextillion"];

    if (sys == "us") {
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
    return numInText.trim();
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
