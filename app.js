
document.addEventListener("DOMContentLoaded", () => {
    const trafficLight = document.querySelector('.traffic-light');
    const lights = trafficLight.querySelectorAll('.light');
    let currentLight = 0;
  
    const switchLights = () => {
      //console.log("light switching");
      lights[currentLight].classList.remove('active');
      currentLight = (currentLight + 1) % lights.length;
      lights[currentLight].classList.add('active');
    };
  
    setInterval(switchLights, 2000); // Change lights every 2 seconds
  });





// document.addEventListener("DOMContentLoaded", function() {
//     const trafficLight = document.querySelector('.traffic-light');
//     const lights = trafficLight.querySelectorAll('.light');
//     let currentLight = 0;
  
//     function switchLights() {
//       lights[currentLight].classList.remove('active');
//       currentLight = (currentLight + 1) % lights.length;
//       lights[currentLight].classList.add('active');
//     }
  
//     setInterval(switchLights, 2000); // Change lights every 2 seconds
//   });
  