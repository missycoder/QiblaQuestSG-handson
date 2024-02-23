// Open Sidebar
(function () {
  document.querySelector("#openNav").addEventListener('click', function() {
      document.querySelector(".openbtn").style.cssText = "opacity: 0";
      document.querySelector("#mySidebar").style.cssText = "width: 30%";
      document.querySelector("#main").style.cssText = "margin-left: 0";                                
      document.querySelector("#closeNav").style.cssText = "opacity: 1; transition: 2s";                       
  });
})();

// Open Sidebar Mobile 100% and Ipad width 50% JS        
(function () {
  if (window.innerWidth <= 490) {
      document.querySelector("#openNav").addEventListener('click', function() {
          document.querySelector("#mySidebar").style.cssText = "width: 100%";
          document.querySelector("#main").style.cssText = "margin-left: 0";
          document.querySelector(".openbtn").style.cssText = "opacity: 0";                
          document.querySelector("#closeNav").style.cssText = "opacity: 1; transition: 2s";               
          document.querySelector(".footer").style.cssText = "opacity: 0; transition: 2s";                                 
      });
  } else if (window.innerWidth <= 1024) {
      document.querySelector("#openNav").addEventListener('click', function() {
          document.querySelector("#mySidebar").style.cssText = "width: 50%";
          document.querySelector("#main").style.cssText = "margin-left: 0";
          document.querySelector(".openbtn").style.cssText = "opacity: 0";                
          document.querySelector("#closeNav").style.cssText = "opacity: 1; transition: 2s";               
          document.querySelector(".footer").style.cssText = "opacity: 0; transition: 2s";                                   
      });
  }
})();

// Close Sidebar
function recolheBarraLateral () {
  document.querySelector("#mySidebar").style.cssText = "width: 0";
  document.querySelector("#main").style.cssText = "margin-left: 0";
  document.querySelector(".openbtn").style.cssText = "opacity: 1";
  document.querySelector("#closeNav").style.cssText = "opacity: 0; transition: 0.3s";    
}        

// Close Accordion
(function () { 
  const myCollapseOne = document.getElementById('collapseOne');
  const myCollapseTwo = document.getElementById('collapseTwo');
  const myCollapseThree = document.getElementById('collapseThree');
  const myCollapseFour = document.getElementById('collapseFour');
  const myCollapseFive = document.getElementById('collapseFive');            
  const btnFecha = document.querySelector("#closeNav");                      
  btnFecha.addEventListener('click', function() {                                              
      recolheBarraLateral();
      
      // Collapse One
      const bsCollapseOne = new bootstrap.Collapse(myCollapseOne, {
      toggle: false 
      })
      bsCollapseOne.hide()
      
      // Collapse Two
      const bsCollapseTwo = new bootstrap.Collapse(myCollapseTwo, {
      toggle: false 
      })
      bsCollapseTwo.hide()

      // Collapse Three
      const bsCollapseThree = new bootstrap.Collapse(myCollapseThree, {
      toggle: false 
      })
      bsCollapseThree.hide()

      // Collapse Four
      const bsCollapseFour = new bootstrap.Collapse(myCollapseFour, {
      toggle: false 
      })
      bsCollapseFour.hide()

      // Collapse Five
      const bsCollapseFive = new bootstrap.Collapse(myCollapseFive, {
      toggle: false 
      })
      bsCollapseFive.hide()
  })                                  
})();

document.addEventListener("DOMContentLoaded", function() {
  const welcomeText = document.querySelector("h1");
  const button = document.querySelector("button");

  button.addEventListener("click", function() {
      welcomeText.style.opacity = 0;
      welcomeText.style.transition = "opacity 0.5s ease-in-out";

      setTimeout(() => {
          welcomeText.textContent = "Welcome to QiblaQuest SG!";
          welcomeText.style.opacity = 1;
      }, 500);
  });
});
