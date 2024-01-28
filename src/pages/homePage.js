import Card from "../components/card";
import React, { useState, useEffect } from "react";

const HomePage = (props) => {
  // const oldData = props.newCard
  let [newCardData, setNewCard] = useState(props.newCard);

  useEffect(() => {
    setNewCard(props.newCard);
    // console.log(newCardData)
  }, [props.newCard]);
//   const [data, setData] = useState(props.data);

// useEffect( () => {
//     setData(props.data);
// }, [props.data]); 
  // let sddData = [...cardData, props.newCard]

  // let [newCardData, setNewCard] = useState(props.newCard);

  // console.log(props.newCard)

  // setNewCard(props.newCard);
  // newCardData = setNewCard(props.newCard);

  // const cardDeleteHandler = (fff) => {
  //   // console.log(fff)
  //   // let sddData = newCardData;
  //   // sddData.splice(fff, 1);
  //   // // console.log(...sddData)
  //   // setNewCard([...sddData]);
  //   props.cardDelete(fff)
  // };

  return (
    <div className="card-row-wpr py-5">
      <div className="card-row row">
        {newCardData.map((x, index) => {
          return (
            <div className="card-col col-md-4 col-lg-3" key={index}>
              <Card  cardData={x} id={index} allData={props.newCard} setFormCard={props.setFormCard} /*cardDelete={cardDeleteHandler}*/ />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
