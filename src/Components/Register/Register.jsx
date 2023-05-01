import React, { useState } from "react";
import img1 from "../../Images/undraw_login_re_4vu2.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Joi from "joi";

function Register() {
  let navigate = useNavigate();
  const [errorList, setErrorList] = useState([]);
  const [loading, isLoading] = useState(false);
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState();

  function getUserData(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    // console.log(user);
  }

  async function sendRegisterData() {
    let { data } = await axios.post(
      `https://userapi-5mf0.onrender.com/user/sign-up`,
      user
    );
    console.log(data);
    if (data.message === "success") {
      isLoading(false);
      navigate("/login");
    } else {
      isLoading(false);
      setError(data.message);
    }
  }

  function submitRegisterForm(e) {
    isLoading(true);
    e.preventDefault();

    let validation = ValidateRegisterForm();
    if (validation.error) {
      isLoading(false);
      setErrorList(validation.error.details);
    } else {
      sendRegisterData();
      navigate("/login");
    }
  }

  function ValidateRegisterForm() {
    let schema = Joi.object({
      userName: Joi.string().min(2).max(10).required().messages({
        "string.min": "Name length must be at least 3 characters long",
        "string.max":
          "Namelength must be less than or equal to 10 characters long",
      }),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      password: Joi.string()
        .pattern(/^[A-Z][a-z]{8,10}/)
        .messages({
          "string.pattern.base":
            "password must start with capital Letter and at least 8 or more characters",
        }),
    });
    console.log(schema.validate(user));
    return schema.validate(user, { abortEarly: false });
  }
  return (
    <>
      <section id="register" className="py-5">
        <div className="container pt-5 ">
          <div className="row g-3">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div className="form-box d-flex justify-content-center py-4  ">
                <form className="text-center" onSubmit={submitRegisterForm}>
                  <h3 className="pb-4">REGISTER</h3>
                  <div className="mb-2 p-1">
                    {" "}
                    <input
                      onChange={getUserData}
                      type="text"
                      placeholder="UserName"
                      className="pe-5"
                      name="userName"
                    />
                    {errorList.filter(
                      (err) => err.context.label === "userName"
                    )[0] ? (
                      <p className="text-danger mb-0">
                        {
                          errorList.filter(
                            (err) => err.context.label === "userName"
                          )[0]?.message
                        }
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="mb-2 p-1">
                    {" "}
                    <input
                      onChange={getUserData}
                      type="email"
                      placeholder="Email"
                      className="pe-5"
                      name="email"
                    />
                    {errorList.filter(
                      (err) => err.context.label === "email"
                    )[0] ? (
                      <p className="text-danger mb-0">
                        {
                          errorList.filter(
                            (err) => err.context.label === "email"
                          )[0]?.message
                        }
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="mb-5 p-1">
                    {" "}
                    <input
                      onChange={getUserData}
                      type="password"
                      placeholder="Password"
                      className="pe-5"
                      name="password"
                    />
                    {errorList.filter(
                      (err) => err.context.label === "password"
                    )[0] ? (
                      <p className="text-danger mb-0">
                        {
                          errorList.filter(
                            (err) => err.context.label === "password"
                          )[0]?.message
                        }
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="w-100">
                    <button className="btn w-75" type="submit">
                      {loading === true ? (
                        <i className="fas  fa-spinner fa-spin"></i>
                      ) : (
                        "Sign Up"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <img src={img1} alt="" className="w-100" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
