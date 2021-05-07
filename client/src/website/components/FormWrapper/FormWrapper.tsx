// eslint-disable-next-line
import tw from "twin.macro";

interface FormWrapperInterface {
  onSubmit: any;
  children: React.ReactNode;
}

const FormWrapper = ({ onSubmit, children }: FormWrapperInterface) => {
  return (
    <div tw="flex my-5!  md:(min-h-full h-90v) justify-center items-center m-0">
      <div tw="max-w-md mx-3 w-full rounded-tr-3xl rounded-bl-3xl border-t-4 border-b-4  border-purple-600 border-solid bg-purple-400 dark:(bg-purple-400) overflow-hidden  shadow-2xl">
        <form tw="max-w-full  mx-auto py-5 px-10" onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
};

export default FormWrapper;