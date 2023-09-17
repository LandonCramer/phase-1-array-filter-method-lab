// Code your solution here
function findMatching(driverNameArr, name) {
    const result = driverNameArr.filter((driver) => {
        return driver.toLowerCase() === name.toLowerCase()
    })
    return result;
}

function fuzzyMatch(driverArr, name) {
      return driverArr.filter((driver) => {
            return driver.toLowerCase().startsWith(name.toLowerCase());
        })
    }

   
    function matchName(driverObjArr, name) {
           return driverObjArr.filter(driver => {
           return driver.name === name
           })
    }
