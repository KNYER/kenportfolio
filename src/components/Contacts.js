import Images from "../img";
import CINFO from "./sub-components/contactInfo";
const CONTACTS = () => {
    return ( 
        <div className="contacts">
            <div className="imgC">
            <img src={Images.imgKenR} className= "imgknR"/>
            </div>
            <div className="Cinfo">
                <CINFO/>
            </div>
            <div className="links">

            </div>
       </div>
     );
}
 
export default CONTACTS;