/* Custom JavaScript goes here*/
// IIFE --Immidiately Invoked Function Expression
(function (){

    function Start()
    {
        console.log('%c app Started...', 
        "font-size: 20px; color: blue; font-weight: bold");
    }

    window.addEventListener("load", Start);

})();