import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

function Home(){
    const { logout } = useContext(AuthContext)

    return(
    <>
        <p>Pagina Home</p>
        <button onClick={logout}>Logout</button>
    </>
    )
}
export default Home;