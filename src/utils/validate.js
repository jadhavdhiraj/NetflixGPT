export const checkValidData = (email,password) =>{

const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

// const isValidName = /^[A-Za-z][A-Za-z]{7,29}$/.test(name);

if(!isValidEmail) return "Email Id is not valid"
if(!isValidPassword) return "Password is not valid"
// if(!isValidName) return "Enter your Name";

return null


}
