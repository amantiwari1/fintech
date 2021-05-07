// eslint-disable-next-line
import tw from "twin.macro";

const ServiceCard = ({ title, price }: any) => {
  return (
    <div tw="shadow-lg rounded-tr-3xl rounded-bl-3xl space-y-5  border-t-4 bg-purple-400	border-purple-600 border-solid hover:(shadow-2xl) transition-all duration-200 ease-in-out text-center p-5 hover:(transform scale-105) ">
      <p tw="text-2xl font-bold">{title}</p>
      <p tw="max-w-xs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p tw="font-semibold">INR - {price}/Month </p>
      <button tw="w-full h-10 rounded-tr-3xl rounded-bl-3xl text-white cursor-pointer bg-purple-600 hover:bg-purple-500 outline-none border-none">
        Join
      </button>
    </div>
  );
};

export default ServiceCard;