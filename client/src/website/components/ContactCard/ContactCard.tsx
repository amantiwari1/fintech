// eslint-disable-next-line
import tw from "twin.macro";
import { useForm } from "react-hook-form";
import { Input, FormWrapper, TextArea } from "..";
import PulseLoader from "react-spinners/PulseLoader";

type Inputs = {
  email: string;
  name: string;
  message: string;
};

const ContactCard = () => {

  const onSubmit = (data: any) => {
    console.log(data);

  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <div tw="flex mb-3 pb-5 justify-center ">
        <h1 tw="font-bold text-2xl md:text-3xl">Contact Us</h1>
      </div>


      <Input
        isError={errors.name}
        label="Name"
        placeholder="Enter your Full Name"
        register={register("name", {
          required: "You must provide a Name.",
          minLength: {
            value: 6,
            message: "Your password must be greater than 6 ",
          },
        })}
      />
      <Input
        isError={errors.email}
        label="Email"
        placeholder="Enter your email"
        register={register("email", {
          required: "You must provide the email address!",
          pattern: {
            // eslint-disable-next-line
            value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Invalid email address",
          },
        })}
      />
      <TextArea
        isError={errors.message}
        label="Message"
        placeholder="Enter your message"
        register={register("message", {
          required: "You must provide a message.",
          minLength: {
            value: 6,
            message: "Your message must be greater than 6 ",
          },
        })}
      />



      <div tw=" flex mb-3 pb-5 justify-center ">
        <button
          type="submit"
          tw="py-3 disabled:opacity-50  focus:outline-none w-40 text-white text-center bg-indigo-600 hover:bg-indigo-500 rounded-tr-3xl rounded-bl-3xl"
        >
          {
            false ? <PulseLoader color="#fff" /> : <p  >Send</p>
          }
        </button>
      </div>
    </FormWrapper>
  );
};

export default ContactCard;