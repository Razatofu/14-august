



let currentYear = new Date().getFullYear();


for (let year = currentYear; year < currentYear + 50; year++) {
  let AugInd = new Date(year, 7, 14); 
  
  
  if (AugInd.getDay() === 0) {
    console.log(`14 August Day on Sunday in ${year}: ${AugInd.toDateString()}`);
  }
}

