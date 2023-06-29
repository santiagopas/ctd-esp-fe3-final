import '../assets/styles/components/Form.css'


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div className="form-container">
      <form>
      <h3>Contacto</h3>
      <label htmlFor="name">Nombre completo</label>
        <input type="text" placeholder="Juan" />
        <label htmlFor="email">Correo electronico</label>
        <input type="text" placeholder="juan@juan.com" />
        <label htmlFor="msg">Consulta</label>
        <textarea placeholder="Escribir aqui la consulta..."/>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
