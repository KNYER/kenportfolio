import { Cursor, useTypewriter} from 'react-simple-typewriter';
import Images from '../img/MARTINEZ_RESUME.pdf';
import Styles from '../App.module.css';
import { FaLinkedin, FaTwitter, FaFacebook,FaInstagram,FaGithub } from 'react-icons/fa';
const INFO = () => {
  

    let [text] = useTypewriter({
        words: ["</about>"],
        loop: {}
    });
    
    return ( 
        <div>
            <h1>{text} <Cursor/></h1>
            <p>
            Hello! I'm a 4th year Information Technology student at Batangas State University passionate about web development. Skilled in HTML, CSS, JavaScript, and mastering React.js for dynamic frontends. I enjoy crafting seamless user experiences and staying updated with industry trends. Let's connect and explore opportunities together!<br/>
            <a href={Images} download="resume">
            <button 
            className= {Styles.resume}>
                RESUME
            </button>
            </a>
            <div className='icons'>
            <a href='https://github.com/KNYER'><FaGithub/></a>
            <a href='https://www.linkedin.com/in/ken-martinez-b3115528a/'><FaLinkedin/></a>
            <a href='https://twitter.com/martinezken09'><FaTwitter/></a>
            <a href='https://www.facebook.com/KEN00009/'><FaFacebook/></a>
            <a href='https://www.instagram.com/nyer_09/'><FaInstagram/></a>
            </div>
            </p>
        </div>
      );
}
 
export default INFO;