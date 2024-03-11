// Disabling form submissions if there are invalid fields + next modal transition

var forms = document.querySelectorAll('.needs-validation')

Array.from(forms).forEach(form => {
  var formId = form.getAttribute("id")
  var submitButton = document.querySelector("[form=" + formId + "]");
  var formModalEl = form.closest(".modal");

  if (formModalEl) {
    var formModalId = formModalEl.getAttribute("id")
    var otherButtons = document.querySelectorAll("#" + formModalId + " .modal-header button, #" + formModalId + " .modal-footer button:not(.btn-success)");
    if (submitButton.hasAttribute("data-bs-target")) {
      var nextModalId = submitButton.getAttribute("data-bs-target");
      var nextModalEl = document.querySelector(nextModalId);
    };
  };

  submitButton.addEventListener('click', event => {
    form.classList.add('was-validated');

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();

      var formModal = bootstrap.Modal.getInstance(formModalEl);
      if (formModal) {
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

  if (otherButtons) {
    Array.from(otherButtons).forEach(button => {
      button.addEventListener("click", () => {
        form.classList.remove('was-validated');
      });
    });
  };
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
  var period = document.getElementById("period");
  var periodLabel = document.getElementById("periodLabel");
  var now = new Date()
  var today = now.toISOString().split('T')[0];
  var thisMonth = today.slice(0, 7);

  flexible.addEventListener("click", () => {
    if (flexible.checked) {
      arrival.setAttribute("disabled", "");
      departure.setAttribute("disabled", "");
      month.style.visibility = "visible";
      month.style.display = "block";
      label.style.visibility = "visible";
      label.style.display = "inline-block";
      period.style.visibility = "visible";
      period.style.display = "block";
      periodLabel.style.visibility = "visible";
      periodLabel.style.display = "inline-block";
      month.removeAttribute("disabled");
      period.removeAttribute("disabled");  
    }

    else {
      arrival.removeAttribute("disabled");
      departure.removeAttribute("disabled");
      month.setAttribute("disabled", "");
      period.setAttribute("disabled", "");

      if (window.innerWidth < 768) {
        month.style.display = "none";
        label.style.display = "none";
        period.style.display = "none";
        periodLabel.style.display = "none";
      }

      else {
        month.style.visibility = "hidden";
        label.style.visibility = "hidden";
        period.style.visibility = "hidden";
        periodLabel.style.visibility = "hidden";
      }

    }

  });

  // Validation of dates

  arrival.setAttribute("min", today);
  month.setAttribute("min", thisMonth);

  departure.addDays = function(arrival, d) {
    if (arrival.value) {
      var departureDate = new Date(arrival.value);
    } else {
      var departureDate = now;
    };

    var t = departureDate.getTime();
    t = t + (d * 24 * 60 * 60 * 1000);
    departureDate.setTime(t);
    departureDate = departureDate.toISOString().split('T')[0];
    this.setAttribute("min", departureDate);
  };

  departure.addDays(arrival, 7);

  arrival.addEventListener("change", () => {
    departure.addDays(arrival, 7);
  });

};

// Hide invalid tooltip on click outside

var invalidTooltips = document.querySelectorAll('.invalid-tooltip')
var body = document.querySelector("body");

Array.from(invalidTooltips).forEach(tooltipEl => {
  var tooltipForm = tooltipEl.closest("form")

  body.addEventListener("click", () => {
      tooltipForm.classList.remove("was-validated");
  });
});

// Check for username availability

var usernameClaim = document.getElementById("usernameClaim");
var usernameGroup = usernameClaim.closest(".input-group");

usernameClaim.addEventListener('click', () => {
  if (usernameGroup.classList.contains("was-validated")) {
    usernameGroup.classList.remove("was-validated");
  } else {
    usernameGroup.classList.add("was-validated");
  }
});

// Toggle password visibility

var togglePasswordVisibility = document.getElementById("togglePasswordVisibility");
var eyeSlash = document.querySelector(".bi-eye-slash");
var eye = document.querySelector(".bi-eye");
var password = document.getElementById("newPassword");

togglePasswordVisibility.addEventListener('click', () => {
  password.type = password.type === "password" ? "text" : "password";
  eye.style.display = eye.style.display === "none" ? "inline-block" : "none";
  eyeSlash.style.display = eyeSlash.style.display === "inline-block" ? "none" : "inline-block";
  });




/* Draft
// Submit both forms
function submitBothForms() {
    const { updateDB, payPal } = document.forms;
    fetch(updateDB.action, {
        method: updateDB.method,
        headers: { "content-type": updateDB.enctype },
        body: new FormData(updateDB),
    });

    payPal.submit();
}


*/