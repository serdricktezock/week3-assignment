console.log("hello cookies");

 const url = "https://cookie-upgrade-api.vercel.app/api/upgrades"
 let shopupgrades = [];

 let cookiescount = 0;
 let cookiespersecond = 0;

 async function getData() {
   const url = "https://cookie-upgrade-api.vercel.app/api/upgrades.json"
   try {
     const response = await fetch(url);
     if (!response.ok) {
       throw new Error(`Response status: ${response.status}`);
     }
 
     const json = await response.json();
     console.log(json);
   }  catch (error) {
      console.error(error.message);
    }
  }
  function createarray(data) {
    for(i = 0; i < data.length; i++) {
      shopupgrades.push(data[1]);
    }
  }
 
 addEventListener("click", handlecookieclick);

 setInterval(function () {
  
 }, 1000);

 function myFunction() {
   document.getElementById("button, img, p").innerHTML = "upgradeContainer";
 }

 function createarray(data) {
    shopupgrades.length = 0;
    data.foreach(upgrades => shopupgrades.push(upgrades));
 }

 async function getdatatoshopupgrades() {
    const data = await getshopupgrades();
    updatashopupgrades(data);
    console.log(shopupgrades);
 }

 getdatatoshopupgrades();


 function renderShopUpgrades() {
  
 }