import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div>
            <h1>Página Home!</h1>
            <Link to="/vendas">Ir para Vendas</Link>
        </div>
    )
}

export default Home;