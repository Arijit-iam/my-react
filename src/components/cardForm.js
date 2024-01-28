import React, {useState} from "react";

const CardForm = (props) => {

  let [formTitle, setTitle] = useState("");
  let [formDesc, setDesc] = useState("");

  let formData = (event) => {
    event.preventDefault();
    let newCardData = {
      title: formTitle,
      Descp: formDesc
    }
    if(newCardData.title !=='' && newCardData.Descp !=='' ){
      setTitle('');
      setDesc('');
  
      props.newCardData(newCardData);
    }
  }

  return (
    <div className="form-wpr border bg-light p-4 mb-5">
      <form onSubmit={formData}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Title" onChange={(event) => setTitle(event.target.value)} value={formTitle}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="text" placeholder="Enter Description" onChange={(event) => setDesc(event.target.value)} value={formDesc}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add New Card
        </button>
      </form>
    </div>
  );
};

export default CardForm;
