import { Link } from "react-router-dom"
import { MdAccountCircle } from "react-icons/md";
import { MdOutlineContactPhone } from "react-icons/md";
import { MdImportContacts } from "react-icons/md";


const Navbar = () => {

return (
    <nav className="flex w-full font-semibold justify-evenly py-6 sticky  bg-customNav text-white px-4 border-b-2 border-solid border-white font-tauri text-xl">
        <div className="flex items-center">
        <Link to="contact" className="mr-2">צור-קשר</Link>
        <MdOutlineContactPhone className="w-6 h-6" />
        </div>
      
          <div className="flex items-center">
          <Link to="/" className="mr-2">אודות</Link>
          <MdImportContacts className="w-6 h-6" />
          </div>  
        
        <div className="flex items-center">
        <Link to="/register" className="mr-2">הרשמה</Link>
        <MdAccountCircle className="w-6 h-6"/>
        </div>
      
        
      
    </nav>
  )
}

export default Navbar