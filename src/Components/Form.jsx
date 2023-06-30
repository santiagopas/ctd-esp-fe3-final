import '../assets/styles/components/Form.css'
import '../assets/styles/components/Messages.css'
const Form = ({ user, setUser, handleSubmit, errorMsg }) => {

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>Contacto</h3>
        <label htmlFor='name' className='form-label'>
          Nombre y apellido *
          <input type='text' id='name' name='name' autoComplete='off' placeholder='ej. Juan Perez' value={user.name} onChange={e => setUser({ ...user, [e.target.name]: e.target.value })} required />
          {errorMsg.name && <p className='error-msj'>Nombre debe tener almenos 5 caracteres</p>}
        </label>
        <label htmlFor='email' className='form-label'>
          Email *
          <input id='email' name='email' autoComplete='off' placeholder='ej. usuario@mail' value={user.email} onChange={e => setUser({ ...user, [e.target.name]: e.target.value })} required />
          {errorMsg.email && <p className='error-msj'>Ingresa un email valido</p>}
        </label>
        <label htmlFor='mensaje' className='form-label'>
          Mensaje (opcional)
          <input type='text' id='mensaje' name='mensaje' autoComplete='off' placeholder='Mi consulta es...' value={user.mensaje} onChange={e => setUser({ ...user, [e.target.name]: e.target.value })} />
        </label>
        <button type='submit' className='hero-btn'>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
