const returnFirstTwoDrivers = function() {
 return ["Antonia", "Nuru"]
}

const returnLastTwoDrivers = function() {
    return ["Amari", "Mo"]
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];


 function  createFareMultiplier(x){ 

    return function(fare){
        return fare*x
    }
    }

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers (arrayOfDrivers, returnDrivers){
    return returnDrivers( arrayOfDrivers)
}