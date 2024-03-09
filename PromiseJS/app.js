function getData(data) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {

            if (typeof data === "string") {
                resolve(data);
            } else {
                reject("Lütfen String Bir Değer Girin")
            }

        }, 5000)
    })
}

// getData("Merhaba").then(function(response){
//     console.log("Gelen Değer " + response);
// }).catch(function(err){
//     consol

getData(24)
    .then(response => console.log("Gelen Değer " + response))
    .catch(err => console.log(err));