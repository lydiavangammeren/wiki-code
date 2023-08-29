export const validations = {
  handleFormValidation,
};

const nameRegex = new RegExp("[a-zA-Z]");
const emailRegex = new RegExp(/^[^\s@]+@[^@\s\.]+\.[^\s@]{2,}$/, "i");
const passwordRegex = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm
);

function handleFormValidation(e, setToUserInput, setValid, type) {
  //set value to user input
  setToUserInput(e.target.value);
  let regex = new RegExp(".*");

  switch (type) {
    case "name":
      regex = nameRegex;
      break;
    case "email":
      regex = emailRegex;
      break;
    case "password":
      regex = passwordRegex;
      break;
  }

  //test whether input is valid
  setValid(regex.test(e.target.value));
}


