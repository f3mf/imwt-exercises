// Disabling form submissions if there are invalid fields

var forms = document.querySelectorAll('.needs-validation')

Array.from(forms).forEach(form => {
  var formId = form.getAttribute("id")
  let button = document.querySelector("[form=" + formId + "]");

  button.addEventListener('click', event => {
    form.classList.add('was-validated');

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

  }, false);

});


// Enable autofocus on modal elements

bookModalEl.addEventListener("shown.bs.modal", () => {
  island.focus()
});

// Month input shown by "I'm flexible" checkbox

window.onload = function() {

  var month = document.getElementById("month");
  var label = document.getElementById("monthLabel");
  var arrival = document.getElementById("dateFrom");
  var departure = document.getElementById("dateTo");
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

// Validation of dates


/* Draft

var bookForm = document.getElementById("bookForm");
var bookModalEl = document.getElementById("bookModal");
var island = document.getElementById("island");
var nextButton = document.getElementById("nextButton");
var registrationEl = document.getElementById("registration");

if (bookModalEl) {

    bookModalEl.addEventListener("toggle.bs.modal", event => {

      if (!bookForm.checkValidity()) {
        event.preventDefault();
        event.stopImmediatePropagation();
        };

    });

};



registrationEl.addEventListener("show.bs.modal", event => {

    if (!bookForm.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

  });

          var formModalEl =form.closest(".modal");
          var formModal = bootstrap.Modal.getInstance(formModalEl); 
          var nextModalId = button.getAttribute("data-bs-target");
          var nextModalEl = document.querySelector("'" + nextModalId + "'");
          var nextModal = bootstrap.Modal.getInstance(nextModalEl);

          formModalEL.hide.bs.modal.preventDefault();
          nextModalEl.show.bs.modal.preventDefault();





      else {

        var formModal = form.closest(".modal");
        var button = document.formModal.querySelectorAll('[type="submit"]');

        if (button[0].hasAttribute("data-bs-target")) {

          var nextModal = buttons[0].getAttribute("data-bs-target");

          formModal.modal("hide");
          nextModal.modal("toggle");

        }

        else {
          formModal.modal("hide");
        }
      }





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