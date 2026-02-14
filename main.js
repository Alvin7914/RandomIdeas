document.addEventListener('DOMContentLoaded', () => {
   function sumTime(timesArr) {
      let totalDays = 0;
      let totalHours = 0;
      let totalMinutes = 0;

      arr.forEach(el => {
         let days = el.split('d');
         totalDays += parseInt(days[0]);

         let hours = days[1].split('h');
         totalHours += parseInt(hours[0]);

         let minutes = hours[1].split('m')
         totalMinutes += parseInt(minutes[0]);
      })

      totalHours += totalMinutes / 60;
      totalDays += totalHours / 24

      return totalDays;
   }
   
   const counterModule = (function () {
      const counterDisplay = document.querySelector('.counter');
      const btnAdd = document.querySelector('#add1');
      const btnCount = document.getElementById('btnCount');
      let counter = 0;

      const primeNumbersDOM = document.getElementById('primeNumbers');

      function addOne() {
         counter++;
         updateDisplay();
      }

      function updateDisplay() {
         counterDisplay.textContent = counter;
      }

      function findPrimes() {
         const n = parseInt(document.getElementById('howManyPrimes').value);
         let primesArray = [];

         for (let i = 2; i <= n; i++) {
            let tempPrime = true;
            for (let j = 2; j < i; j++) {
               if (i % j === 0) {
                  tempPrime = false;
                  break;
               }
            }

            if (tempPrime === true) {
               primesArray.push(i);
            }
         }

         primeNumbersDOM.textContent = `Wszystkie liczby pierwsze niewiększe niż ${n}: ${primesArray}`;
      }

      return {
         init: function () {
            btnAdd.addEventListener('click', addOne);
            updateDisplay();
         },
         updatePrimes: function () {
            btnCount.addEventListener('click', findPrimes);
         },
         initCalendarPicker: function () {
            $('#myInput').calendarsPicker({
               calendar: $.calendars.instance('gregorian'), // lub np. 'islamic'
               dateFormat: 'yyyy-mm-dd',
               onSelect: function (dates) {
                  // dates to tablica (CDate[]) — możesz pobrać .formatDate()
                  console.log('Wybrano:', dates[0].formatDate());
               },
            });
         },
      };
   })();
   counterModule.initCalendarPicker();
   counterModule.init();
   counterModule.updatePrimes();
});
