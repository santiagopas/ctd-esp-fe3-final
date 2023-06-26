import React from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form>
        <input type="text" placeholder="Npmbre" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Tel" />
        <textarea placeholder="Mensaje"></textarea>
        <button>Send</button>
      </form>
    </div>
  );
};

export default Form;
