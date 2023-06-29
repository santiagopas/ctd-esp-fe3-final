import '../assets/styles/components/Form.css'


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div className="form-container">
      <form>
        <input type="text" placeholder="Juan" />
        <input type="text" placeholder="juan@juan.com" />
        <input type="text" placeholder="314253647" />
        <textarea placeholder="Escribir aqui la consulta..."></textarea>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
