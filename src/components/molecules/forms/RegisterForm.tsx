import * as yup from "yup";
import { useForm } from "react-hook-form";
import TextInput from "../../atoms/TextInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { emailPassAuthRegister } from "../../../redux/slices/authSlice";
import { useDispatch } from "react-redux";

type FormValues = {
  email: string;
  password: string;
  name: string;
  type: string;
};

const schema = yup.object().shape({
  email: yup.string().email().required("Email is a required field"),
  password: yup.string().required("Password is a required field").min(6, "Password must be at least 6 characters"),
  name: yup.string().required("Name is a required field"),
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmitRegister = (data: FormValues) => {
    dispatch(emailPassAuthRegister(data));
  };

  return (
    <div className="w-full md:w-1/2 xl:w-1/3">
      <div>
        <form onSubmit={handleSubmit(onSubmitRegister)} className="bg-slate-50 rounded-lg flex flex-col gap-2 p-7">
          <div className="font-extrabold text-3xl text-center text-sun">REGISTER</div>
          <TextInput control={control} name="name" type="text" />
          <TextInput control={control} name="email" type="email" />
          <TextInput control={control} name="password" type="password" />
          <button type="submit" className="btn bg-sun w-full font-extrabold hover:border-none border-none">
            SUBMIT
          </button>
          <div className="text-sm mt-5 text-center">
            Already have an account ?{" "}
            <Link to="/login" className="text-sun">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
