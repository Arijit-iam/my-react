import Card from "./card";

const CardRow = () => {
  return (
    <div className="card-row-wpr py-5">
      <div className="card-row row">
        <div className="card-col col-md-4 col-lg-3">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default CardRow;
