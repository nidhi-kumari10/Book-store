
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm} from "react-hook-form";

const Signup = () => {

  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)

  const navigate = useNavigate();

  // auto-open modal
  useEffect(() => {
    document.getElementById("my_modal_3")?.showModal();
  }, []);

  return (
    <div className="font-serif flex h-screen items-center justify-center bg-black/60">

      <dialog
        id="my_modal_3"
        className="modal"
        onClose={() => navigate("/")}   // ✅ REDIRECT TO HOME
      >
        <div className="modal-box w-full max-w-lg border border-pink-500 shadow-xl shadow-pink-500/30 relative">

          {/* Close button */}
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              aria-label="Close"
            >
              ✕
            </button>
          

          <h3 className="font-bold text-2xl text-center mb-2">
            Create Your Account
          </h3>

          <p className="text-center text-gray-500 mb-6">
            Join us and start your learning journey 🚀
          </p>

          {/* Form */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full mt-1 pl-2"
                 {...register("name", { required: true })}
              />{errors.name && <span className='mb-8 text-red-500 text-sm'>This field is required</span>}
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full mt-1 pl-2"
                 {...register("email", { required: true })}
              />{errors.email && <span className='mb-8 text-red-500 text-sm'>This field is required</span>}
            </div>

            <div>
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="Create a password"
                className="input input-bordered w-full mt-1 pl-2"
                 {...register("password", { required: true })}
              />{errors.password && <span className='mb-8 text-red-500 text-sm'>This field is required</span>}
             
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-4 mt-6">
            <button className="bg-pink-500 text-white py-2 rounded-md font-semibold hover:bg-pink-600 transition">
              Signup
            </button>

            <p className="text-center text-sm">
              Already have an account?{" "}
              <button type="submit"  className="text-blue-500 underline"   onClick={() => {
    document.getElementById("my_modal_3")?.close();   
    document.getElementById("login_modal")?.showModal();
  }}>
                Login
              </button>{" "}<Login/>
            </p>
          </div></form>
        </div>
      </dialog>
    </div>
  );
};

export default Signup;



