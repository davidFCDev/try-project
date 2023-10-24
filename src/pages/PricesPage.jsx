import Card from "../components/Card";
import { PRICES } from "../constants/prices";

const PricesPage = () => {
  return (
    <div className="w-full min-h-screen py-28 px-10 gap-10 justify-center flex flex-col items-center screen-contact">
      <h2 className="font-creatoExtrBold text-5xl uppercase tracking-wider text-white">
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
