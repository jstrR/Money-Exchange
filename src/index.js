// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let coinsVal = [50, 25, 10, 5, 1];
    let strings = ["H", "Q", "D", "N", "P"];
    let res = {};
    let counter = 0;
    if (currency > 10000){
        return{ 
        	error: "You are rich, my friend! We don't have so much coins for exchange"
        }
    } else if (currency < 0){
        return res;
    }
    for (let i = 0; i < coinsVal.length; i++){
            if (currency >= coinsVal[i]){
                res[strings[i]] = Math.floor(currency / coinsVal[i]);
                currency = currency % coinsVal[i];
            }
        }
    return res;
}
