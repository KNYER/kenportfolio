import { FaHtml5, FaCss3, FaJs, FaPhp, FaPython, FaReact, FaJava   } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { Cursor, useTypewriter} from 'react-simple-typewriter';


const SKILLS = () => {

    let [text] = useTypewriter({
        words: ["</skills>", "</stack>"],
        loop: {}
    });

    return ( 
        <div className="skills">
            <h1>{text} <Cursor/></h1>
        <div className="skcontainer">
            <div className="skicons">
            <p><FaHtml5 /></p>
            <p><FaCss3 /></p>
            <p><FaJs /></p>
            <p><FaPhp /></p>
            <p><FaPython /></p>
            <p><FaReact /></p>
            <p><FaJava /></p>
            </div>
        </div>
        </div>
     );
}
 
export default SKILLS;
