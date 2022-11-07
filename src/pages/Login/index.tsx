import './index.css';
import logo from '/assets/logo.svg';

const Login = () =>{
    return(
        <div id="page-login">
            <div className="content container">
                <div className="mt-4">
                    <img src={logo} alt="Logo Atend" className="ounded mx-auto d-block pt-4" />
                </div>
                <div className="form-login">
                    <form action="">
                        <div className="mb-3">
                            <label htmlFor="femail">CNPJ:</label>
                            <input className="form-control" type="text" id="femail" />       
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fpassword">Senha:</label> 
                            <input className="form-control" type="password" id="fpassword"/>
                        </div>
                        <div id="button-confirm">
                            <button className="btn btn-primary">Entrar</button>
                        </div>                        
                    </form> 
                </div>
            </div>
        </div>
    )
}

export default Login;