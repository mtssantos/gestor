import './index.css';

const Login = () =>{
    return(
        <div>
            <div className="uk-text-center form-login">
                <form action="">
                    <label htmlFor="femail">E-mail:</label>
                    <input className=".uk-input" type="email" id="femail" />
                    <label htmlFor="fpassword">Senha:</label>
                    <input className=".uk-input" type="password" id="fpassword"/>
                </form> 
            </div>

        </div>
    )
}

export default Login;