import Card from "../components/Card";
import { PRICES } from "../constants/prices";

const PricesPage = () => {
  return (
    <div className="w-full min-h-screen py-28 px-10 gap-10 justify-center flex flex-col items-center bg-dark">
      <h2 className="font-creatoExtrBold text-4xl sm:text-5xl uppercase tracking-wider text-white text-center sm:text-left">
        Nuestras tarifas
      </h2>
      <div className="flex flex-wrap gap-12">
        {PRICES.box.map((price) => (
          <Card key={price.id} price={price} />
        ))}
      </div>
      <div className="flex flex-wrap gap-12">
        {PRICES.zenter.map((price) => (
          <Card key={price.id} price={price} />
        ))}
      </div>
    </div>
  );
};

export default PricesPage;
