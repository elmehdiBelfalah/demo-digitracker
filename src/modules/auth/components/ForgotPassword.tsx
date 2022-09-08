import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from '../../../images/logo.png' 

interface formData {
  email: string;
}

function ForgotPassword() {
  const Validation = yup.object().shape({
    email: yup.string().required("Email is required").email("email is invalid"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({ resolver: yupResolver(Validation) });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto m-5 p-10">
      <img className='w-20 m-auto'src={logo}></img>
        <div className="text-3xl font-bold text-gray-900 mt-2 mb-2 text-center">
        Forgot Password ?
        </div>
        <div className="text-center font-medium text-xl">
          Enter your Email to reset yout password
        </div>
      </div>
      <div className="max-w-md w-full mx-auto bg-white p-8 border border-gray-300">
        <form action="" className="space-y-6  " onSubmit={onSubmit}>
          <div>
            <label htmlFor="" className="text-sm font-bold text-gray-600 block">
              Email :
            </label>
            <input
              type="email"
              className={
                "w-full p-2 border border-gray-300 rounded mt-1 " +
                `form-control ${errors.email ? "is-invalid" : ""}`
              }
              {...register("email")}
              placeholder="Ex: admin@admin.com"
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>
          <div className="flex ">
            <button className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 rounded text-sm text-white mb-3 ">
              Reset
            </button>

            <Link to="/auth/Login">
              <button className="w-full py-2 px-4 bg-gray-100 text-sm text-blue-500 hover:bg-blue-700 rounded hover:text-white mb-3 ml-2   ">
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
