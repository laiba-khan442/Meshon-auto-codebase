
//Utility function to get a random integer upto 100 digits
function getRandomIntegerUpTo(max) {
        return Math.floor(Math.random() * max);}

function getTodaysDate(separator = '-'){
    const today = new Date(); 
    let dd = today.getDate(); 
    let mm = today.getMonth() + 1; 
    let yyyy = today.getFullYear(); 
    if (dd<10){dd = `0${dd}`; };
    if (mm<10){mm = `0${mm}`; };

    return `${dd}${separator}${mm}${separator}${yyyy}`;  
}

function getTomorrowsDate(separator = '-'){
     const tomorrow = new Date(); 
    tomorrow.setDate(tomorrow.getDate()+1);
    let dd = tomorrow.getDate(); 
    let mm = tomorrow.getMonth() + 1; 
    let yyyy = tomorrow.getFullYear(); 
    if (dd<10){dd = `0${dd}`; };
     if (mm<10){mm = `0${mm}`; };
     
    return `${dd}${separator}${mm}${separator}${yyyy}`; 
}




//exports the utility function: 

module.exports = {
    getRandomIntegerUpTo,
    getTodaysDate,
    getTomorrowsDate
};