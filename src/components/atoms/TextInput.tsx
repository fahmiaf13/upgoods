import React, { useEffect, useState } from "react";
import { FieldValues, useController } from "react-hook-form";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { pascal } from "case";

interface Props {
  name: string;
  control: any;
  type: string;
  children?: React.ReactNode;
}

const TextInput = (props: Props) => {
  const [isPassword, setIsPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [type, setType] = useState("text");
  const {
    field,
    fieldState: { error },
  } = useController<FieldValues, string>(props);

  useEffect(() => {
    if (props.type === "password") {
      setIsPassword(true);
      setType(() => {
        if (showPassword) {
          return "text";
        } else {
          return "password";
        }
      });
    } else {
      setIsPassword(false);
      setType(props.type);
    }
  }, [props.type, showPassword]);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // const capitalizedWords = (params: string | undefined) => {
  //   let capitalized = params.charAt(0).toUpperCase() + params.slice(1);
  //   console.log(capitalized);
  //   return capitalized;
  // };

  return (
    <div className="w-full">
      <div className="relative w-full h-10 flex items-center">
        <input
          {...field}
          type={type}
          placeholder=" "
          className={`${
            error
              ? "text-tomato focus:border-tomato border-b-tomato border-x-tomato disabled:bg-tomato placeholder-shown:border-tomato placeholder-shown:border-t-tomato "
              : "text-slate-800 focus:border-sun disabled:bg-cloud placeholder-shown:border-cloud placeholder-shown:border-t-cloud "
          }  peer w-full h-full bg-transparent font-sans font-normal outline outline-0 focus:outline-0 disabled:border-0 transition-all placeholder-shown:border border focus:border-2 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] `}
          autoComplete="true"
        />
        {isPassword ? (
          <i onClick={togglePassword} className={`ml-[-30px] cursor-pointer ${error ? "text-tomato" : "text-darker-100"}`}>
            {showPassword ? <BsEye /> : <BsEyeSlash />}
          </i>
        ) : (
          ""
        )}
        <label
          className={`${
            error
              ? "text-tomato peer-focus:text-tomato before:border-tomato peer-focus:before:border-tomato after:border-tomato peer-focus:after:border-tomato peer-placeholder-shown:text-tomato peer-disabled:peer-placeholder-shown:text-tomato"
              : "text-darker-100 peer-focus:text-sun before:border-blue-gray-200 peer-focus:before:border-sun after:border-blue-gray-200 peer-focus:after:border-sun peer-placeholder-shown:text-darker-100 peer-disabled:peer-placeholder-shown:text-cloud"
          } capitalize flex w-full h-full select-none pointer-events-none absolute left-0 font-normal leading-tight peer-focus:leading-tight peer-disabled:text-transparent transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] `}
        >
          {props.name}
        </label>
      </div>
      <label className="text-sm text-tomato">{error?.message}</label>
    </div>
  );
};

export default TextInput;
