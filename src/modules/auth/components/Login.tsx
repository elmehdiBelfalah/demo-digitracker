import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import {} from '@coreui/react'


interface formData {
  email: string;
  password: string;
  rememberMe: boolean;
}

function Login() {
  const Validation = yup.object().shape({
    email: yup.string().required("Email is required").email("email is invalid"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({ resolver: yupResolver(Validation) });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  const [loading, setLoading] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto m-5 p-10 ">
        <img className="w-20 m-auto" src={logo}></img>
        <div className="text-3xl font-bold text-gray-900 mt-2 mb-2 text-center">
          Welcom to DigiTracker
        </div>
        <div className="text-center font-medium text-xl">
          New Here ?
          <Link to="/auth/Registration" className=" text-blue-500 ml-3 ">
            Create your Account now !
          </Link>
        </div>
      </div>
      <div className="max-w-md w-full mx-auto bg-white p-8 border border-gray-300">
        <form action="" className="space-y-6" onSubmit={onSubmit}>
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
          <div>
            <label htmlFor="" className="text-sm font-bold text-gray-600 block">
              Password :
            </label>
            <input
              type="password"
              className={
                "w-full p-2 border border-gray-300 rounded mt-1" +
                `form-control ${errors.password ? "is-invalid" : ""}`
              }
              {...register("password")}
              placeholder="*********"
            />
            <div className="invalid-feedback">{errors.password?.message}</div>
          </div>
          <div className="flex items-center justify-center ">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 checked: bg-blue-500 rounded"
                {...register("rememberMe")}
              />
              <label className="ml-2 text-sm text-blue-500">Remember me</label>
            </div>
            <div>
              <Link
                to="/auth/ForgotPassword"
                className="font-medium text-sm text-blue-500 ml-24"
              >
                Forgot password ?
              </Link>
            </div>
          </div>
          <div>
            <button className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded text-sm text-white ">
              Submit
            </button>
            {/* <CLoadingButton
              loading={loading}
              onClick={() => setLoading(!loading)}
            >
              Submit
            </CLoadingButton> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
