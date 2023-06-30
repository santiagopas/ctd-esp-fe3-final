import { useState } from 'react';
import Form from '../Components/Form';
import '../assets/styles/Routes/Contact.css';
import SuccessMsg from '../Components/SuccessMsg';

const Contact = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    mensaje: ''
  });

  const [show, setShow] = useState(null);
  const [errorMsg, setErrorMsg] = useState({
    name: false,
    email: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.name.trim().length <= 5 || !validateEmail(user.email.trim())) {
      console.log('Datos incompletos:', user);
      setErrorMsg({
        name: user.name.trim().length <= 5 ? true : false,
        email: !validateEmail(user.email.trim()) ? true : false
      });
    } else {
      setShow(true);
      console.log('Datos enviados:', user);
    }
  };


  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  return (
    <main className='contact-container'>
      {show === null ? <Form user={user} setUser={setUser} handleSubmit={handleSubmit} errorMsg={errorMsg} setErrorMsg={setErrorMsg} /> : null}
      {show === true && <SuccessMsg user={user} />}
    </main>
  );
};

export default Contact;
