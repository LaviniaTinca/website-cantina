
// function validateForm() {
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     var emailError = document.getElementById("emailError");
//     var passwordError = document.getElementById("passwordError");
//     const firstNameInput = document.getElementById("firstName");
//     const lastNameInput = document.getElementById("lastName");
//     const firstNameError = document.getElementById("firstNameError");
//     const lastNameError = document.getElementById("lastNameError");
    
//     var emailRegex = /^\S+@\S+\.\S+$/;
//     var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    
//     var isValid = true;

//         // Check if first name field is empty
//     if (firstNameInput.value === "") {
//         firstNameError.innerHTML = "Please enter your first name";
//         return false;
//     } else {
//         firstNameError.innerHTML = "";
//     }

//     // Check if last name field is empty
//     if (lastNameInput.value === "") {
//         lastNameError.innerHTML = "Please enter your last name";
//         return false;
//     } else {
//         lastNameError.innerHTML = "";
//     }
    
//     if (!emailRegex.test(email)) {
//       emailError.innerHTML = "Invalid email address";
//       isValid = false;
//     } else {
//       emailError.innerHTML = "";
//     }
    
//     if (!passwordRegex.test(password)) {
//       passwordError.innerHTML = "Invalid password (minimum 8 characters, at least one uppercase letter, one lowercase letter, and one number)";
//       isValid = false;
//     } else {
//       passwordError.innerHTML = "";
//     }
    
//     return isValid;
//   }


// --second variant formValidation.js--
function validateForm() {
    var firstNameInput = document.getElementById("firstName");
    var lastNameInput = document.getElementById("lastName");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var accountTypeDropdown = document.getElementById("accountType");
    var facultyDropdown = document.getElementById("faculty");
    
    var firstName = firstNameInput.value.trim();
    var lastName = lastNameInput.value.trim();
    var email = emailInput.value.trim();
    var password = passwordInput.value.trim();
    var accountType = accountTypeDropdown.value;
    var faculty = facultyDropdown.value;
  
    var firstNameError = document.getElementById("firstNameError");
    var lastNameError = document.getElementById("lastNameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var accountTypeError = document.getElementById("accountTypeError");
    var facultyError = document.getElementById("facultyError");
  
    var emailRegex = /^\S+@\S+\.\S+$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  
    // Validate first name
    if (firstName === "") {
      firstNameError.innerHTML = "Please enter your first name";
      firstNameInput.classList.remove("valid");
      firstNameInput.classList.add("error");
    } else {
      firstNameError.innerHTML = "";
      firstNameInput.classList.remove("error");
      firstNameInput.classList.add("valid");
    }
  
    // Validate last name
    if (lastName === "") {
      lastNameError.innerHTML = "Please enter your last name";
      lastNameInput.classList.remove("valid");
      lastNameInput.classList.add("error");
    } else {
      lastNameError.innerHTML = "";
      lastNameInput.classList.remove("error");
      lastNameInput.classList.add("valid");
    }
  
    // Validate email
    if (!emailRegex.test(email)) {
      emailError.innerHTML = "Invalid email address";
      emailInput.classList.remove("valid");
      emailInput.classList.add("error");
    } else {
      emailError.innerHTML = "";
      emailInput.classList.remove("error");
      emailInput.classList.add("valid");
    }
  
    // Validate password
    if (!passwordRegex.test(password)) {
      passwordError.innerHTML = "Invalid password (minimum 8 characters, at least one uppercase letter, one lowercase letter, and one number)";
      passwordInput.classList.remove("valid");
      passwordInput.classList.add("error");
    } else {
      passwordError.innerHTML = "";
      passwordInput.classList.remove("error");
      passwordInput.classList.add("valid");
    }
  
    // Validate account type
    if (accountType === "") {
      accountTypeError.innerHTML = "Please select your account type";
      accountTypeDropdown.classList.remove("valid");
      accountTypeDropdown.classList.add("error");
    } else {
      accountTypeError.innerHTML = "";
      accountTypeDropdown.classList.remove("error");
      accountTypeDropdown.classList.add("valid");
    }
  
    // Validate faculty selection for students
    if (accountType === "student" && faculty === "") {
      facultyError.innerHTML = "Please select your faculty";
      facultyDropdown.classList.remove("valid");
      facultyDropdown.classList.add("error");
    } else {
      facultyError.innerHTML = "";
      facultyDropdown.classList.remove("error");
      facultyDropdown.classList.add("valid");
    }
  
    // Check if all inputs are valid
    var inputs = [firstNameInput, lastNameInput, emailInput, passwordInput, accountTypeDropdown];
    if (accountType === "student") {
      inputs.push(facultyDropdown);
    }
    var isValid = inputs.every(input => input.classList.contains("valid"));
    
    if (isValid) {
        var data = {
          firstName: firstNameInput.value,
          lastName: lastNameInput.value,
          email: emailInput.value,
          password: passwordInput.value,
          accountType: accountType,
          faculty: facultyDropdown.value
        };
      
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/createUser", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onload = function() {
          if (xhr.status === 200) {
            alert("User account created successfully!");
          } else {
            alert("Error creating user account. Please try again later.");
          }
        };
        xhr.send(JSON.stringify(data));
      }
    }
      
    //   // Add event listeners to input fields
    //   var emailInput = document.getElementById("email");
    //   var passwordInput = document.getElementById("password");
      
    //   emailInput.addEventListener("input", validateEmail);
    //   passwordInput.addEventListener("input", validatePassword);
      
    //   function validateEmail() {
    //     var email = emailInput.value;
    //     var emailError = document.getElementById("emailError");
    //     var emailRegex = /^\S+@\S+\.\S+$/;
      
    //     if (!emailRegex.test(email)) {
    //       emailError.innerHTML = "Invalid email address";
    //       emailInput.classList.remove("valid");
    //       emailInput.classList.add("error");
    //     } else {
    //       emailError.innerHTML = "";
    //       emailInput.classList.remove("error");
    //       emailInput.classList.add("valid");
    //     }
    //   }
      
    //   function validatePassword() {
    //     var password = passwordInput.value;
    //     var passwordError = document.getElementById("passwordError");
    //     var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      
    //     if (!passwordRegex.test(password)) {
    //       passwordError.innerHTML = "Invalid password (minimum 8 characters, at least one uppercase letter, one lowercase letter, and one number)";
    //       passwordInput.classList.remove("valid");
    //       passwordInput.classList.add("error");
    //     } else {
    //       passwordError.innerHTML = "";
    //       passwordInput.classList.remove("error");
    //       passwordInput.classList.add("valid");
    //     }
    //   }

      //add event listeners to input fields
      var firstNameInput = document.getElementById("firstName");
var lastNameInput = document.getElementById("lastName");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

firstNameInput.addEventListener("input", validateFirstName);
lastNameInput.addEventListener("input", validateLastName);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

function validateFirstName() {
  var firstName = firstNameInput.value;
  var firstNameError = document.getElementById("firstNameError");
  var nameRegex = /^[a-zA-Z]+$/;

  if (!nameRegex.test(firstName)) {
    firstNameError.innerHTML = "Invalid first name (only alphabetic characters allowed)";
    firstNameInput.classList.remove("valid");
    firstNameInput.classList.add("error");
  } else {
    firstNameError.innerHTML = "";
    firstNameInput.classList.remove("error");
    firstNameInput.classList.add("valid");
  }
}

function validateLastName() {
  var lastName = lastNameInput.value;
  var lastNameError = document.getElementById("lastNameError");
  var nameRegex = /^[a-zA-Z]+$/;

  if (!nameRegex.test(lastName)) {
    lastNameError.innerHTML = "Invalid last name (only alphabetic characters allowed)";
    lastNameInput.classList.remove("valid");
    lastNameInput.classList.add("error");
  } else {
    lastNameError.innerHTML = "";
    lastNameInput.classList.remove("error");
    lastNameInput.classList.add("valid");
  }
}

function validateEmail() {
  var email = emailInput.value;
  var emailError = document.getElementById("emailError");
  var emailRegex = /^\S+@\S+\.\S+$/;

  if (!emailRegex.test(email)) {
    emailError.innerHTML = "Invalid email address";
    emailInput.classList.remove("valid");
    emailInput.classList.add("error");
  } else {
    emailError.innerHTML = "";
    emailInput.classList.remove("error");
    emailInput.classList.add("valid");
  }
}

function validatePassword() {
  var password = passwordInput.value;
  var passwordError = document.getElementById("passwordError");
  var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (!passwordRegex.test(password)) {
    passwordError.innerHTML = "Invalid password (minimum 8 characters, at least one uppercase letter, one lowercase letter, and one number)";
    passwordInput.classList.remove("valid");
    passwordInput.classList.add("error");
} else {
    passwordError.innerHTML = "";
    passwordInput.classList.remove("error");
    passwordInput.classList.add("valid");
  }
}
   
