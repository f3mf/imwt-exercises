// Disabling form submissions if there are invalid fields

(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  });
})();


// Month input shown by "I'm flexible" checkbox

window.onload = function() {

  const month = document.getElementById("month");
  const label = document.getElementById("monthLabel");
  const arrival = document.getElementById("dateFrom");
  const departure = document.getElementById("dateTo");
  var flexible = document.getElementById("flexible");

  flexible.addEventListener("click", () => {
    if (flexible.checked) {
      arrival.setAttribute("disabled", "");
      departure.setAttribute("disabled", "");
      month.style.visibility = "visible";
      month.style.display = "block";
      label.style.visibility = "visible";
      label.style.display = "inline-block";
      
      if (month.hasAttribute("disabled")) {
      month.removeAttribute("disabled");
      }
    
    }

    else {
      arrival.removeAttribute("disabled");
      departure.removeAttribute("disabled");
      month.setAttribute("disabled", "");

      if (window.innerWidth < 768) {
        month.style.display = "none";
        label.style.display = "none";
      }

      else {
        month.style.visibility = "hidden";
        label.style.visibility = "hidden";
      }

    }

  });

};

// On submit 


// Enable autofocus on modal elements
const myModal = document.getElementById("bookModal");
const myInput = document.getElementById("island");

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus()
});





// Validation of dates


/* Validation of dates

drawer.classList.remove("isOpen");


  bookForm.onsubmit = function() {
    if (this.my_checkbox[0].checked && this.input1.value=="") {
      alert("Please enter something in input 1");
      this.input1.focus();
      return false;
    }
    if (this.my_checkbox[1].checked && this.input2.value=="") {
      alert("Please enter something in input 2");
      this.input2.focus();
      return false;
    }
    return true; // allow submission
  }
  // if the checkboxes had different IDs this could have been one function
  form1.my_checkbox[0].onclick = function() {
    this.form.my_checkbox[1].checked=!this.checked;
  }
  form1.my_checkbox[1].onclick=function() {
    this.form.my_checkbox[0].checked=!this.checked;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const inputs = Array.from(
    document.querySelectorAll('input[name=telephone], input[name=mobile]')
  );

  const inputListener = e => {
    inputs
      .filter(i => i !== e.target)
      .forEach(i => (i.required = !e.target.value.length));
  };

  inputs.forEach(i => i.addEventListener('input', inputListener));
});





*/