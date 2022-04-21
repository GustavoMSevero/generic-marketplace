
import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { useForm } from 'react-hook-form';

// import { Container } from './styles';
import './index.css';

const Register: React.FC = () => {
  const { register, handleSubmit, getValues, watch, formState: { errors } } = useForm();
  const [typePerson, setTypePerson] = useState<"cpf" | "cnpj">("cpf");


  useEffect(() => {
    const cpf = getValues("cpf-cnpj");
    if (cpf.length <= 14) {
      setTypePerson('cpf');
    } else {
      setTypePerson('cnpj')
    }
    // console.log(typePerson)

  },[watch("cpf-cnpj")]);

  return (
    <div className="container">
      <div className="title">
        <h1>CADASTRO</h1>
      </div>
      <div className='formRegister'>

        <form onSubmit={handleSubmit((data) => {
          console.log(data)
        })}>

          <InputMask maskChar={null} mask={typePerson === "cpf" ? "999.999.999-999" : "99.999.999/9999-99"}
            className="typePerson"
            type="text"
            {...register("cpf-cnpj", { required: true } )}
          />

          <div className="person">
            {typePerson}
          </div>

          <input 
            className="inputName"
            type="text"
            placeholder="Nome"
            {...register("name", { required: true } )}
          />

          <input 
            className="inputLastName"
            type="text"
            placeholder="Sobreome"
            {...register("lastname", { required: true } )}
          />

          <input 
            className="inputEmail"
            type="email"
            placeholder="e-mail"
            {...register("email", { required: true } )}
          />

          <input 
            className="inputPassword"
            type="password"
            placeholder="*****"
            {...register("password", { required: true } )}
          />

          <button
            className="buttonRegister"
            type="submit"
          >
            CADASTRAR
          </button>
        </form>

      </div>
      
    </div>
      
  );
}

export default Register;