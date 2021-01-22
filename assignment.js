

// Question:1 (Convert kilomer to meter)

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    if (meter < 0) {
        return "Distance cannot be negative";
    }
    else {
        return meter;
    }
}


// Question: 2 (Budget calculation for buying electronics)

function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var result = watchPrice + phonePrice + laptopPrice;
    if (result <= 0) {
        return "If you don't want to buy this products, you don't have any cost.";
    }
    else {
        return result;
    }
}


// Question: 3 (Cost calculation for staying hotel)

function hotelCost(days) {
    var rent = 0;
    if (days <= 0) {
        return "If you don't stay at the hotel, you don't have to pay.";
    }
    if (days <= 10) {
        rent = days * 100;
    }
    else if (days <= 20) {
        var firstPart = 10 * 100;
        var remaining = days - 10;
        var secondPart = remaining * 80;
        rent = firstPart + secondPart;
    }
    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = days - 20;
        var thirdPart = remaining * 50;
        rent = firstPart + secondPart + thirdPart;
    }
    return rent;
}


// Question: 4 (Find out the largest name)

function megaFriend(arr) {
    var result = '';
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > result.length) {
            result = arr[i];

        }
    }
    return result;
}

