function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   function onClick() {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let object = {};
      let totalSum = 0;
      let avgSalary = 0;
      let currAvg = 0;
      let bestName = '';
      for (const restaurant of input) {
         let [restaurantName, workersInfo] = restaurant.split(" - ");
         let workers = workersInfo.split(", ");
         for (const worker of workers) {
            let [name, salary] = worker.split(" ")
            if (!object.hasOwnProperty(restaurantName)) {
               object[restaurantName] = {};
            }
            if (object.hasOwnProperty(restaurantName)) {
               object[restaurantName][name] = Number(salary);
            }
         }
      }
      let entries = Object.entries(object);
      for (const entry of entries) {
         let key = entry[0];
         let entriies = Object.entries(entry[1]);
         for (const entri of entriies) {
            totalSum += Number(entri[1]);
         }
         currAvg = totalSum / entriies.length;
         if (currAvg > avgSalary) {
            avgSalary = currAvg;
            bestName = key;
         }
         totalSum = 0;
      }
      let bestEntries = Object.entries(object[bestName])
         .sort((a, b) => b[1] - a[1]);
         let first=document.querySelector('#bestRestaurant p').textContent
         =`Name: ${bestName} Average Salary: ${avgSalary.toFixed(2)} Best Salary: ${(bestEntries[0][1]).toFixed(2)}`
         let res="";
         for (const entro of bestEntries) {
            res+=`Name: ${entro[0]} With Salary: ${Number(entro[1])} `
         }
         document.querySelector('#workers p').textContent=res;
   }
}