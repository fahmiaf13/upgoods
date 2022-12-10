import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextInput from "../../atoms/TextInput";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { googleAuth } from "../../../redux/slices/authSlice";

type FormValues = {
  email: string;
  password: string;
  type: string;
};

const schema = yup.object().shape({
  email: yup.string().email().required("Email is a required field"),
  password: yup.string().required("Password is a required field").min(6, "Password must be at least 6 characters"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmitLogin = (data: FormValues) => {
    console.log(data);
  };

  const handleLoginGoogle = () => {
    dispatch(googleAuth());
  };
  return (
    <div className="w-full md:w-1/2 xl:w-1/3">
      <div className="w-full flex flex-col bg-slate-50 rounded-lg px-8 py-10">
        <form onSubmit={handleSubmit(onSubmitLogin)} className="flex flex-col gap-2">
          <div className="font-extrabold text-3xl text-center text-sun">LOGIN</div>
          <TextInput control={control} name="email" type="email" />
          <TextInput control={control} name="password" type="password" />
          <div className="flex gap-1">
            <input type="checkbox" className="accent-sun " placeholder="remember me" />
            <label className="text-[14px]">Remember Me</label>
          </div>
          <button type="submit" className="btn bg-sun w-full font-extrabold hover:border-none border-none">
            SUBMIT
          </button>
        </form>
        <div className="text-center text-sm divider font-regular">Or Login With</div>
        <div className="flex md:flex-row flex-col w-full gap-3">
          <div className="w-full">
            <button onClick={handleLoginGoogle} className="btn w-full hover:bg-transparent hover:text-darker-100 hover:border-darker-100  items-center flex gap-2 font-extrabold">
              <AiFillGoogleCircle size={24} />
              <span>Google</span>
            </button>
          </div>
          <div className="w-full">
            <button className="btn w-full hover:bg-transparent hover:text-darker-100 hover:border-darker-100 items-center flex gap-2 font-extrabold">
              <BsFacebook size={20} />
              <span>Facebook</span>
            </button>
          </div>
        </div>
        <div className="text-sm mt-10 text-center">
          Dont have an account ?{" "}
          <Link to="/register" className="text-sun">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
