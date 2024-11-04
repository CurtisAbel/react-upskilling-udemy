import { useState } from "react";
import Modal from './Modal'
import Backdrop  from "./Backdrop";

function Todo({text,onConfirm}) {
  const [showModal, setModel] = useState(false);

  const deleteHandler = () => {
    setModel(true);
  }

  const closeModelHandler = () => {
    setModel(false);
  }

  const confirmAndCloseModalHandler = () => {

onConfirm();
setModel(false);

  }

  return (
    <div className="card">
      <h2>{text} </h2>
      <div className="actions">
          <span>A span</span>
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {showModal && <Modal onConfirm={confirmAndCloseModalHandler} onCancel={closeModelHandler} /> }
       {showModal && <Backdrop onClick = {closeModelHandler} />}
      </div>
  );
}

export default Todo;
