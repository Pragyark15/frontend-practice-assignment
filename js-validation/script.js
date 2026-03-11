// ============================================================
//  script.js — Form Validation
//  Demonstrates: Arrow Functions, Normal Functions,
//                Reusable/Refactored logic
// ============================================================


// ──────────────────────────────────────────────
// SECTION 1: REUSABLE HELPER FUNCTIONS (Normal Functions)
// Normal functions are used here because they are hoisted
// and serve as general-purpose utilities for the whole file.
// ──────────────────────────────────────────────

// Shows an error message below a field and marks it red
function showError(inputId, errorId, message) {
  const input = document.getElementById(inputId);
  const errorEl = document.getElementById(errorId);
  input.classList.remove('valid');
  input.classList.add('error');
  errorEl.textContent = message;
}

// Clears the error and marks the field green
function showValid(inputId, errorId) {
  const input = document.getElementById(inputId);
  const errorEl = document.getElementById(errorId);
  input.classList.remove('error');
  input.classList.add('valid');
  errorEl.textContent = '';
}

// Resets a field to its default state (no color, no message)
function clearField(inputId, errorId) {
  const input = document.getElementById(inputId);
  const errorEl = document.getElementById(errorId);
  input.classList.remove('error', 'valid');
  errorEl.textContent = '';
}

// Shows the success toast for a given form
function showToast(toastId) {
  const toast = document.getElementById(toastId);
  toast.style.display = 'block';
  setTimeout(() => { toast.style.display = 'none'; }, 3000);
}


// ──────────────────────────────────────────────
// SECTION 2: VALIDATION RULES (Arrow Functions)
// Arrow functions are used here as concise, single-purpose
// validators that return true/false.
// ──────────────────────────────────────────────

// Checks that a field is not empty or only whitespace
const isRequired = (value) => value.trim() !== '';

// Validates email using a standard regex pattern
const isValidEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value.trim());
};

// Password must be:
//  - At least 8 characters
//  - At least 1 uppercase letter (A-Z)
//  - At least 1 special character (@, #, $, %, &, !, etc.)
const isValidPassword = (value) => {
  const minLength = value.length >= 8;
  const hasUppercase = /[A-Z]/.test(value);
  const hasSpecial = /[@#$%&!^*]/.test(value);
  return minLength && hasUppercase && hasSpecial;
};

// Returns a descriptive password hint message
const getPasswordError = (value) => {
  if (value.length < 8)        return 'Password must be at least 8 characters.';
  if (!/[A-Z]/.test(value))    return 'Must include at least one uppercase letter.';
  if (!/[@#$%&!^*]/.test(value)) return 'Must include at least one special character (@, #, $, %, &, !).';
  return '';
};


// ──────────────────────────────────────────────
// SECTION 3: FIELD VALIDATORS (Arrow Functions)
// Each validator checks one specific field and
// calls the reusable helpers above.
// ──────────────────────────────────────────────

const validateFirstName = () => {
  const value = document.getElementById('first-name').value;
  if (!isRequired(value)) {
    showError('first-name', 'first-name-error', 'First name is required.');
    return false;
  }
  showValid('first-name', 'first-name-error');
  return true;
};

const validateLastName = () => {
  const value = document.getElementById('last-name').value;
  if (!isRequired(value)) {
    showError('last-name', 'last-name-error', 'Last name is required.');
    return false;
  }
  showValid('last-name', 'last-name-error');
  return true;
};

const validateRegEmail = () => {
  const value = document.getElementById('reg-email').value;
  if (!isRequired(value)) {
    showError('reg-email', 'reg-email-error', 'Email is required.');
    return false;
  }
  if (!isValidEmail(value)) {
    showError('reg-email', 'reg-email-error', 'Please enter a valid email address.');
    return false;
  }
  showValid('reg-email', 'reg-email-error');
  return true;
};

const validateRegPassword = () => {
  const value = document.getElementById('reg-password').value;
  if (!isRequired(value)) {
    showError('reg-password', 'reg-password-error', 'Password is required.');
    return false;
  }
  if (!isValidPassword(value)) {
    showError('reg-password', 'reg-password-error', getPasswordError(value));
    return false;
  }
  showValid('reg-password', 'reg-password-error');
  return true;
};

const validateLoginEmail = () => {
  const value = document.getElementById('login-email').value;
  if (!isRequired(value)) {
    showError('login-email', 'login-email-error', 'Email is required.');
    return false;
  }
  if (!isValidEmail(value)) {
    showError('login-email', 'login-email-error', 'Please enter a valid email address.');
    return false;
  }
  showValid('login-email', 'login-email-error');
  return true;
};

const validateLoginPassword = () => {
  const value = document.getElementById('login-password').value;
  if (!isRequired(value)) {
    showError('login-password', 'login-password-error', 'Password is required.');
    return false;
  }
  showValid('login-password', 'login-password-error');
  return true;
};


// ──────────────────────────────────────────────
// SECTION 4: FORM SUBMIT HANDLERS (Normal Functions)
// Normal functions used here as named event handlers.
// ──────────────────────────────────────────────

function handleRegister(event) {
  event.preventDefault(); // Stop form from refreshing the page

  // Run all validators and collect results
  const results = [
    validateFirstName(),
    validateLastName(),
    validateRegEmail(),
    validateRegPassword()
  ];

  // Only show success if ALL validations pass
  const allValid = results.every(result => result === true);
  if (allValid) {
    showToast('register-toast');
    // Reset form after 3 seconds
    setTimeout(() => {
      document.getElementById('register').reset();
      ['first-name','last-name','reg-email','reg-password'].forEach(id => {
        clearField(id, id + '-error');
      });
    }, 3000);
  }
}

function handleLogin(event) {
  event.preventDefault();

  const results = [
    validateLoginEmail(),
    validateLoginPassword()
  ];

  const allValid = results.every(result => result === true);
  if (allValid) {
    showToast('login-toast');
    setTimeout(() => {
      document.getElementById('login').reset();
      ['login-email','login-password'].forEach(id => {
        clearField(id, id + '-error');
      });
    }, 3000);
  }
}


// ──────────────────────────────────────────────
// SECTION 5: TAB SWITCHER (Normal Function)
// ──────────────────────────────────────────────

function switchTab(tab, btn) {
  // Hide all form sections
  document.querySelectorAll('.form-section').forEach(f => f.classList.remove('active'));
  // Deactivate all tabs
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  // Show the selected form
  document.getElementById(tab).classList.add('active');

  // Activate the correct tab button
  if (btn) {
    btn.classList.add('active');
  } else {
    document.querySelectorAll('.tab').forEach(t => {
      if (t.textContent.toLowerCase() === tab) t.classList.add('active');
    });
  }
}


// ──────────────────────────────────────────────
// SECTION 6: REAL-TIME VALIDATION (Arrow Functions)
// Validates each field as the user types, on blur.
// ──────────────────────────────────────────────

const attachRealTimeValidation = () => {
  const fieldMap = [
    { id: 'first-name',     validator: validateFirstName },
    { id: 'last-name',      validator: validateLastName },
    { id: 'reg-email',      validator: validateRegEmail },
    { id: 'reg-password',   validator: validateRegPassword },
    { id: 'login-email',    validator: validateLoginEmail },
    { id: 'login-password', validator: validateLoginPassword },
  ];

  fieldMap.forEach(({ id, validator }) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('blur', validator);   // Validate when user leaves field
      el.addEventListener('input', validator);  // Validate as user types
    }
  });
};

// Run on page load
attachRealTimeValidation();