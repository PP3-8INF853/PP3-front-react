import {baseApi} from "./calls";
import {CustomerLoginDTO} from "../components/models/CustomerLoginDTO";
import {CustomerSignUpDTO} from "../components/models/CustomerSignUpDTO";

const loginCustomer = (loginCredentials: CustomerLoginDTO) => {
    return baseApi("authentication-service").post("customers/login", loginCredentials);
};

const signUpCustomer = (customerCredentials: CustomerSignUpDTO) => {
    return baseApi("authentication-service").post("customers/signUp", customerCredentials);
};

export {loginCustomer, signUpCustomer}