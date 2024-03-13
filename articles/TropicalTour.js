// Inline-radio validation
var lastOption = document.getElementById("gender4");
var lastOptionContainer = lastOption.closest(".form-check-inline");

lastOption.addEventListener("invalid", () => {
  lastOptionContainer.classList.add("is-invalid");

  var options = document.querySelectorAll("#gender input[name='gender']");

  Array.from(options).forEach(option => {
    option.addEventListener("change", () => {
      lastOptionContainer.classList.remove("is-invalid");
      option.removeEventListener("change",);
    });
  });
});

// Disabling form submissions if there are invalid fields + next modal transition
var forms = document.querySelectorAll('.needs-validation')

Array.from(forms).forEach(form => {
  var formId = form.getAttribute("id")
  var nextButton = document.querySelector("[form=" + formId + "]");
  var formModalEl = form.closest(".modal");

  if (formModalEl) {
    var formModalId = formModalEl.getAttribute("id")
    var otherButtons = document.querySelectorAll("#" + formModalId + " .modal-header button, #" + formModalId + " .modal-footer button:not(.btn-success)");
    if (nextButton.hasAttribute("data-bs-target")) {
      var nextModalId = nextButton.getAttribute("data-bs-target");
      var nextModalEl = document.querySelector(nextModalId);
    };
  };

  nextButton.addEventListener('click', event => {
    form.classList.add('was-validated');

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();

      var formModal = bootstrap.Modal.getInstance(formModalEl);
      if (formModal) {
        formModal._triggerBackdropTransition();
      }
    }

    else if (nextModalEl) {
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
        lastOptionContainer.classList.remove("is-invalid");
      });
    });
  };
});


// Enable autofocus on modal elements
function autofocusOnModal(modalEl, firstFormEl) {
  modalEl.addEventListener("shown.bs.modal", () => {
  firstFormEl.focus()
  });
};

var bookModalEl = document.getElementById("bookModal");
var island = document.getElementById("island");
autofocusOnModal(bookModalEl, island);

var registerModalEl = document.getElementById("registerModal");
var newUsername = document.getElementById("newUsername");
autofocusOnModal(registerModalEl, newUsername);

// Month input shown by "I'm flexible" checkbox

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


// Phone prefix

var countryCode = document.getElementById("countryCode");
var dropdownMenu = countryCode.closest(".dropdown-menu");
var dropdown = bootstrap.Dropdown.getOrCreateInstance(dropdownMenu);
var prefix = document.getElementById("prefix");
var phoneLabel = document.querySelector("label[for='phone']")

countryCode.addEventListener("change", event => {
  prefix.innerHTML = countryCode.value;
  var buttonDimensions = document.getElementById("prefixButton").getBoundingClientRect();
  var containerDimensions = document.getElementById("prefixContainer").getBoundingClientRect();
  phoneLabel.style.left = containerDimensions.width + buttonDimensions.width+"px";
});

countryCode.addEventListener("click", () => {
  dropdown.toggle();
});


// Other input field
var checkbox = document.getElementById("culture11");
var other = document.querySelector("input[name='other']")
var otherButton = document.querySelector("label[for='culture11']")

checkbox.addEventListener("change", () => {
  if (checkbox.checked == true) {
      other.style.display = "inline-block";
      otherButton.classList.remove("rounded-end");
      other.setAttribute("required", "required");
    } else {
      other.style.display = "none";
      otherButton.classList.add("rounded-end");
      other.removeAttribute("required");
  };
});

// Submit all forms at once
function submitAllForms() {
  var bookForm = document.getElementById("bookForm");
  var preferencesForm = document.getElementById("preferencesForm");
  var registerForm = document.getElementById("registerForm");

    fetch(bookForm.action, {
        method: bookForm.method,
        headers: { "Origin": "null" },
        body: new FormData(bookForm),
    });

    fetch(preferencesForm.action, {
        method: preferencesForm.method,
        mode: 'no-cors',
        headers: { "Origin": "null" },
        body: new FormData(preferencesForm),
    });

    registerForm.submit();
};

var submitButton = document.querySelector("button[form='registerForm']");

registerForm.addEventListener("submit", event => {
  event.preventDefault();
  event.stopPropagation();
  submitAllForms();
});

