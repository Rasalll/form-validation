import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'
function App() {
   
  const {register,handleSubmit,formState: { errors },} = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <>
     <div className="container-fluid border border-dark-3 w-50 mt-5 rounded shadow">
      <h2 className='text-info'>Create a New Account!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label htmlFor="name">Name:</label>
          <input className='form-control w-50 border border-dark'  id="name" {...register("name", {
              required: "*Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters long",
              },
            })}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input className='form-control w-50 border border-dark' id="email" type="email"
            {...register("email", {
              required: "*Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input className='form-control w-50 border border-dark' id="password" type="password"
            {...register("password", {
              required: "*  Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
        </div>

        <button type="submit" className='btn btn-success my-3'>Submit</button>
      </form>
    </div>
    </>
  )
}

export default App
