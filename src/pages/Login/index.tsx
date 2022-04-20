
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

// import { Container } from './styles';
import './index.css';


const Login: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(errors)

  return (
      <div>

          <div className="image">
            {/* <img src="" alt="imagem" /> */}
          </div>

          <div className="loginPage">
            {/* <h1>Login</h1> */}
            <div className="loginText">Login</div>

            <form onSubmit={handleSubmit((data) => {
                console.log(data)
            })}>
                <input className="emailInput"
                    type="email"
                    placeholder="E-mail"
                    {...register("email", { required: true })}
                />
                <input className="passwordInput"
                    type="password"
                    placeholder="Senha"
                    {...register("paswword", { required: true })}
                />
                <button className="signInButton" type="submit">Entrar</button>
            </form>

            <div className="ouText">OU</div>

            <div className='socialButtons'>
                <button className="fbButton">
                    Cadastro com Facebook
                </button>

                <button className="googleButton">
                    Cadastro com Google
                </button>

                {/* <button className="AppleButton">
                    Cadastro com Apple
                </button> */}
                
                <Link to="/register">
                    <button className="regularButton">
                        <span>Cadastro com e-mail e senha</span>
                    </button>
                </Link>
            </div>

          </div>
          
      </div>
    
  );
}

export default Login;