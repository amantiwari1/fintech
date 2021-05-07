// eslint-disable-next-line
import tw from "twin.macro";
import ServiceCard from "../ServiceCard/ServiceCard";

const EnterpriseData = [
  {
    title: "Lorem ipsum",
    price: "3,000",
  },
  {
    title: "Lorem ipsum",
    price: "5,000",
  },
  {
    title: "Lorem ipsum",
    price: "11,000",
  },
  {
    title: "CLorem ipsum",
    price: "8,000",
  },
];

const PriceSection = () => {
  return (
    <div tw="flex flex-col justify-center items-center  space-y-20 min-h-screen p-6">
      <div>
        <h1 tw="text-4xl font-bold">Pricing</h1>
      </div>

      <div tw="grid md:grid-cols-2 lg:grid-cols-4  gap-10">
        {EnterpriseData.map((CardName, i) => (
          <ServiceCard key={i} {...CardName} />
        ))}
      </div>
    </div>
  );
};

export default PriceSection;