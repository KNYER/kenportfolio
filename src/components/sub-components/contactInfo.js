import { Cursor, useTypewriter} from 'react-simple-typewriter';
import { FaLinkedin, FaTwitter, FaFacebook,FaInstagram,FaGithub } from 'react-icons/fa';

const CINFO = () => {
    
    let [text] = useTypewriter({
        words: ["<contacts />"],
        loop: {}
    });
    return ( 
        <div>
            <h1>{text} <Cursor/></h1>
            <h1>If you’re interested in reaching out please use the following:</h1>
            <h2>280 A Purok 5, Talaibon,
                Ibaan, Batangas</h2><br/><br/>
            <h2>09109182098</h2><br/><br/>
            <h2>kenmartinez11514@gmail.com</h2>
           <div className='icons'>
            <a href='https://github.com/KNYER'><FaGithub/></a>
            <a href='https://www.linkedin.com/in/ken-martinez-b3115528a/'><FaLinkedin/></a>
            <a href='https://twitter.com/martinezken09'><FaTwitter/></a>
            <a href='https://www.facebook.com/KEN00009/'><FaFacebook/></a>
            <a href='https://www.instagram.com/nyer_09/'><FaInstagram/></a>
            </div>
        </div>
     );
}
 
export default CINFO;