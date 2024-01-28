// import logo from './logo.svg';
import React, {useState} from "react";
import "./App.css";
// import ExpenseCard from "./components/ExpenseCard";
import CardForm from "./components/cardForm";
// import CardRow from "./components/cardRow";
// import CardRow from "./components/card";
import Footer from "./components/foter";
import Header from "./components/header";
import HomePage from "./pages/homePage";

let cardData = [
  {
    title: "Title 1",
    Descp:
      "Some quick example text to build on the card title and make up the bulk of the card content.",
  },
  {
    title: "Title 2",
    Descp:
      "Some quick example text to build on the card title and make up the bulk of the card content.",
  },
  {
    title: "Title 3",
    Descp:
      "Some quick example text to build on the card title and make up the bulk of the card content.",
  },
  {
    title: "Title 4",
    Descp:
      "Some quick example text to build on the card title and make up the bulk of the card content.",
  },
];

function App(props) {

  let [formCrad, setFormCard] = useState(cardData)

  let cardDataHandler = (newCard) => {
    let combineData = [newCard, ...formCrad];
    setFormCard(combineData)
    // console.log([newCard, ...formCrad])
  }

  // const cardDeleteHandler = (fff) => {
  //   // console.log(fff)
  //   let sddData = formCrad;
  //   sddData.splice(fff, 1);
  //   // console.log(...sddData)
  //   setFormCard([...sddData]);
  // };

  // props.newCardData(formCrad);
  // let newCardData = (newData) => {
  //   // let newData = [...x,y];
  //   setFormCard([newData, ...formCrad])
  //   console.log(formCrad);
  // }

  return (
    <div className="App">
      <Header />
      <div className="main-body">
        <div className="container">
          <CardForm newCardData = {cardDataHandler} />
          <HomePage newCard={formCrad} /*cardDelete={cardDeleteHandler}*/ setFormCard={setFormCard} />
          {/* <ExpenseCard /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
