var form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Ngăn chặn sự kiện mặc định của form
  validateAllFields();

  console.log(validateAllFields());
  var isRegister = validateAllFields().every((element) => {
    return element === true;
  });
  if (isRegister) {
    alert("dang nhap thanh cong");
  } else {
    alert("dang nhap khong thanh cong");
  }
});

var formGroup = document.querySelectorAll(".form-group");
formGroup.forEach((form, index) => {
  var input = form.querySelector("input");
  var message = form.querySelector(".form-message");
  input.addEventListener("blur", (e) => {
    validateForm(input, message);
  });
});

function validateAllFields() {
  var isValidForm = Array.from(formGroup).map((form) => {
    var input = form.querySelector("input");
    var message = form.querySelector(".form-message");
    return validateForm(input, message);
  });
  return isValidForm;
}

function validateForm(input, message) {
  switch (input.name) {
    case "fullname":
      if (input.value.trim() == "") {
        showError(input, message, "Vui lòng nhập tên đầy đủ của bạn");
        return false;
      } else {
        validForm(input, message);
        return true;
      }
      break;
    case "email":
      if (!checkEmail(input)) {
        showError(input, message, "Trường này phải là email");
        return false;
      } else {
        validForm(input, message);
        return true;
      }
      break;
    case "password":
      if (!checkPassword(input)) {
        showError(input, message, "Vui lòng nhập tối thiểu 6 kí tự");
        return false;
      } else {
        validForm(input, message);
        return true;
      }
      break;
    case "password_confirmation":
      if (input.value.trim() == "") {
        showError(input, message, "Vui lòng nhập trường này");
        return false;
      } else {
        if (!checkPasswordConfimartion(input)) {
          showError(input, message, "Mật khẩu nhập lại không chính xác");
          return false;
        } else {
          validForm(input, message);
          return true;
        }
      }
      break;

    default:
      break;
  }
}
function checkEmail(input) {
  var filter = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return filter.test(input.value);
}
function checkPassword(input) {
  return input.value.length >= 6;
}
function checkPasswordConfimartion(input) {
  var password = document.querySelector("#password");
  return password.value == input.value;
}

function showError(input, message, value) {
  input.style.border = "1px solid rgb(253, 68, 68)";
  message.innerText = value;
}

function validForm(input, message) {
  input.style.border = "1px solid #b3b3b3";
  message.innerText = "";
}
