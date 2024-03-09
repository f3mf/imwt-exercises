// Disabling form submissions if there are invalid fields + next modal transition

var forms = document.querySelectorAll('.needs-validation')

Array.from(forms).forEach(form => {
  var formId = form.getAttribute("id")
  var button = document.querySelector("[form=" + formId + "]");
  var formModalEl = document.getElementById("bookModal");
  var nextModalId = button.getAttribute("data-bs-target");
  var nextModalEl = document.querySelector(nextModalId);

  button.addEventListener('click', event => {
    form.classList.add('was-validated');

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      if (formModalEl) {
        var formModal = bootstrap.Modal.getInstance(formModalEl);
        formModal._triggerBackdropTransition();
      }
    }

    else if (formModalEl) {
      var formModal = bootstrap.Modal.getInstance(formModalEl);
      var nextModal = bootstrap.Modal.getOrCreateInstance(nextModalEl);
      formModal.hide();
      nextModal.show();
    }

  }, false);

});


// Enable autofocus on modal elements
var bookModalEl = document.getElementById("bookModal");

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



*/