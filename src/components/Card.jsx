import "./Card.css";

const Card = ({ price }) => {
  return (
    <div className="card">
      <div className="header">
        <span className="card-price font-creatoBold">{price.price}</span>
        <span className="card-title font-creatoExtrBold tracking-wider">
          {price.title}
        </span>
      </div>
      <p
        className={`desc font-creatoBold text-xl tracking-wide ${
          price.center === "TRY Fitness Box" ? "text-red-500" : "text-blue-500"
        }`}
      >
        {price.center}
      </p>
      <ul className="lists font-creatoLight text-base">
        <li className="list">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill={`${
              price.center === "TRY Fitness Box" ? "#EF4444" : "#3B82F6"
            }`}
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>{price.description[0]}</span>
        </li>
        <li className="list text-base">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill={`${
              price.center === "TRY Fitness Box" ? "#EF4444" : "#3B82F6"
            }`}
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>{price.description[1]}</span>
        </li>
        <li className="list text-base">
          {price.description[2] ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill={`${
              price.center === "TRY Fitness Box" ? "#EF4444" : "#3B82F6"
            }`}
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
          ) : null}
          <span>{price.description[2]}</span>
        </li>
      </ul>
    </div>
  );
};

export default Card;
