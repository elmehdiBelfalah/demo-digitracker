import React from 'react'
import * as yup from 'yup' ;
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {Link , NavLink} from 'react-router-dom'
import Login from './Login';

interface formData {
    first_name : string,
    last_name : string,
    email : string,
    password : string,
    Cpassword :string
    acceptTerms : boolean
}

function Registration() {
  
    const Validation =yup.object().shape({
        first_name :yup.string().required('First name is required'),
        Last_name :yup.string().required('Last name is required'),
        email : yup.string().required('Email is required').email('email is invalid'),
        password : yup.string().required('Password is required'),
        Cpassword : yup.string().required('The confirmation password is required')
        .oneOf([yup.ref('password'),null],'Confirm Password does not match'),
        acceptTerms : yup.bool().oneOf([true], 'Accept Terms is required')

      })
    
        const  {register,handleSubmit,formState:{errors}}=useForm<formData>({resolver : yupResolver(Validation)});
        const onSubmit= handleSubmit((data)=>{
          console.log(data)
        })
      return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
          <div className="max-w-md w-full mx-auto m-10 p-10">
            <div className="text-3xl font-bold text-gray-900 mt-2 text-center">
              Create an Account
            </div>
            <div className="text-center font-medium text-xl text-gray-600">
             <Link to='/auth/Login' >Already have an anccount ?  </Link>
             <Link to="/auth/ForgotPassword" className=" text-violet-600 ml-3 " >
                Forgot Password?
              </Link>
            </div>
          </div>
          <div className="max-w-md w-full mx-auto bg-white p-8 border border-gray-300">
            <form action="" className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label htmlFor="" className="text-sm font-bold text-gray-600 block">
                  First name  :
                </label>
                <input
                  type="text"
                  className={"w-full p-2 border border-gray-300 rounded mt-1 "+`form-control ${errors.first_name ? 'is-invalid' : ''}`}
                  {...register("first_name")}
                  placeholder="Fisrt name"
                />
                <div className={"text-red-500 "+`invalid-feedback"`}>{errors.first_name?.message} </div>
              </div>
              <div>
                <label htmlFor="" className="text-sm font-bold text-gray-600 block">
                  Last name :
                </label>
                <input
                  type="text"
                  className={"w-full p-2 border border-gray-300 rounded mt-1"+`form-control ${errors.last_name ? 'is-invalid' : ''}`}
                  {...register('last_name')} 
                  placeholder="Last name"
                />
                <div className={"text-red-500 "+`invalid-feedback"`}>{errors.last_name ?.message}</div>
              </div>
              <div>
                <label htmlFor="" className="text-sm font-bold text-gray-600 block">
                  Email :
                </label>
                <input
                  type="email"
                  className={"w-full p-2 border border-gray-300 rounded mt-1 "+`form-control ${errors.email ? 'is-invalid' : ''}`}
                  {...register("email")}
                  placeholder="Ex: admin@admin.com"
                />
                <div className={"text-red-500 "+`invalid-feedback"`}>{errors.email?.message}</div>
              </div>
              <div>
                <label htmlFor="" className="text-sm font-bold text-gray-600 block">
                  Password :
                </label>
                <input
                  type="Password"
                  className={"w-full p-2 border border-gray-300 rounded mt-1 "+`form-control ${errors.password ? 'is-invalid' : ''}`}
                  {...register("password")}
                  placeholder="***************"
                />
                <div className={"text-red-500 "+`invalid-feedback"`}>{errors.password?.message}</div>
              </div>
              <div>
                <label htmlFor="" className="text-sm font-bold text-gray-600 block">
                  Confirm Password :
                </label>
                <input
                  type="password"
                  className={"w-full p-2 border border-gray-300 rounded mt-1 "+`form-control ${errors.Cpassword ? 'is-invalid' : ''}`}
                  {...register("Cpassword")}
                  placeholder="***************"
                />
                <div className={"text-red-500 "+`invalid-feedback"`}>{errors.Cpassword ?.message}</div>
              </div>
              <div className="flex items-center justify-center ">
            <div className="flex items-center">
              <input
                type="checkbox"
                className={"h-4 w-4 checked: bg-violet-500 rounded" +`form-control ${errors.acceptTerms ? 'is-invalid' : ''}`}
                {...register("acceptTerms")}
              />
              <label  className="ml-2 text-sm text-gray-600">
               I agree the terms and conditions
              </label>
            </div>
            <div className={"text-red-500 "+`invalid-feedback"`}>{errors.acceptTerms ?.message}</div>
            </div>
              <div >
                <button className="w-full py-2 px-4 bg-violet-600 hover:bg-violet-700 rounded text-sm text-white mb-3 ">
                  Create
                </button>
               
               <NavLink to='/auth/Login'>
               <button className="w-full py-2 px-4 bg-gray-100 text-sm text-violet-600 hover:bg-violet-600 rounded hover:text-white  ">
                  Cancel
                </button>
               </NavLink>
             
              </div>
            </form>
          </div>
        </div>
  )
}

export default Registration