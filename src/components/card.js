import React, { useState, useEffect } from "react";

const Card = (props) => {
  // console.log(props.cardData)
  let [newCardData, setNewCard] = useState(props.cardData);

  useEffect(() => {
    setNewCard(props.cardData);
  // console.log(newCardData)
  }, [props.cardData]);
  // // let [key, newKey] = useState(props.key);
  // const deleteCard = (index) => {
  //   // let sddData = [...cardData, props.cardData]
  //   alert(index)
  //   // let sddData = newCardData;
  //   // sddData.splice(index, 1);

  //   // setNewCard(...sddData)

  // }

  // const deleteCard = () => {
  //   props.cardDelete(props.index)
  // }
  const deleteCard = (cardId) => {
    console.log(cardId)
    let sddData = props.allData;
    sddData.splice(cardId, 1);
    console.log([...sddData])
    props.setFormCard([...sddData]);
  };


  return (
    <div className="h-100 pb-4">
      <div className="card h-100">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{newCardData.title}</h5>
          <p className="card-text">{newCardData.Descp}</p>
          <button type="button"
            className="btn btn-primary" onClick={() => deleteCard(props.id)}
          >
            Delete Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
