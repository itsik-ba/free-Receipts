import { Link } from "react-router-dom"


const Navbar = () => {



  return (
    <nav className="flex w-full font-semibold justify-evenly ">
        <Link to="contact">צור-קשר</Link>  
        <Link to="/">ראשי</Link>
        <Link to="/register">הרשמה</Link>
        
      
    </nav>
  )
}

export default Navbar