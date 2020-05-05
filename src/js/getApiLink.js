module.exports = function(position) {
    //Dycryption function
    // const decrypt = function(key) {
    //     var keyLen = key.length;
    //     var oLetter = "";
    //     var nPos = 0;
    //     var nLetter = "";
    //     var nKey = "";

    //     for (var i = 0; i < keyLen; i++) {
    //         oLetter = key[i];
    //         nPos = key.codePointAt(i) - 13;
    //         nLetter = String.fromCharCode(nPos);
    //         nKey = nKey + nLetter;
    //     }
    //     return nKey;
    // };

    //variables for weather data fetch
    
    const posLat = position.coords.latitude;
    const posLong = position.coords.longitude;
    const apiLink = "/weather?lat=" + posLat + "&long=" + posLong + "&exclude=alerts,flags";
    console.log('apiLink: ', apiLink);

    return apiLink;
};