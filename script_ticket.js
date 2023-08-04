
const overlay = document.getElementById('overlay');


function togglePopup1(button) {
    
    const popup1 = document.getElementById('popup1');
  
    if (popup1.style.display === 'block') {
      closePopup();
    } else {
      overlay.style.display = 'block';
      popup1.style.display = 'block';
    }
  
    // Disable other buttons while the pop-up is open
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(btn => {
      if (btn !== button) {
        btn.style.pointerEvents = 'none';
      }
    });
  }

  function togglePopup2(button) {
    const popup2 = document.getElementById('popup2');
  
    if (popup2.style.display === 'block') {
      closePopup();
    } else {
      overlay.style.display = 'block';
      popup2.style.display = 'block';
    }
  
    // Disable other buttons while the pop-up is open
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(btn => {
      if (btn !== button) {
        btn.style.pointerEvents = 'none';
      }
    });
  }
  


  function togglePopup3(button) {
    const popup3 = document.getElementById('popup3');
  
    if (popup3.style.display === 'block') {
      closePopup();
    } else {
      overlay.style.display = 'block';
      popup3.style.display = 'block';
    }
  
    // Disable other buttons while the pop-up is open
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(btn => {
      if (btn !== button) {
        btn.style.pointerEvents = 'none';
      }
    });
  }
  

  function togglePopup4(button) {
    const popup4 = document.getElementById('popup4');
  
    if (popup4.style.display === 'block') {
      closePopup();
    } else {
      overlay.style.display = 'block';
      popup4.style.display = 'block';
    }
  
    // Disable other buttons while the pop-up is open
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(btn => {
      if (btn !== button) {
        btn.style.pointerEvents = 'none';
      }
    });
  }
  
  
  function closePopup1() {
    const popup1 = document.getElementById('popup1');
  
    overlay.style.display = 'none';
    popup1.style.display = 'none';
  
    // Enable all buttons when the pop-up is closed
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(btn => {
      btn.style.pointerEvents = 'auto';
    });
  }
  

  function closePopup2() {
    const popup2 = document.getElementById('popup2');
  
    overlay.style.display = 'none';
    popup2.style.display = 'none';
  
    // Enable all buttons when the pop-up is closed
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(btn => {
      btn.style.pointerEvents = 'auto';
    });
  }


  function closePopup3() {
    const popup3 = document.getElementById('popup3');
  
    overlay.style.display = 'none';
    popup3.style.display = 'none';
  
    // Enable all buttons when the pop-up is closed
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(btn => {
      btn.style.pointerEvents = 'auto';
    });
  }

  function closePopup4() {
    const popup4 = document.getElementById('popup4');
  
    overlay.style.display = 'none';
    popup4.style.display = 'none';
  
    // Enable all buttons when the pop-up is closed
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(btn => {
      btn.style.pointerEvents = 'auto';
    });
  }