import { FaHtml5, FaCss3, FaJs, FaPhp, FaPython, FaReact, FaJava   } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { Cursor, useTypewriter} from 'react-simple-typewriter';


const SKILLS = () => {

    let [text] = useTypewriter({
        words: ["<skills />", "<stack />"],
        loop: {}
    });

    return ( 
        
        <div className="skills">
            <h1>{text} <Cursor/></h1>
        <div className="skcontainer">
            <div className="skicons">
            <p><FaHtml5 /><span className="sktitle"><h2>HTML5</h2></span></p>
            <p><FaCss3 /><span className="sktitle"><h2>CSS3</h2></span></p>
            <p><FaJs /><span className="sktitle"><h2>JavaScript</h2></span></p>
            <p><FaReact /><span className="sktitle"><h2>React.js</h2></span></p>
            <p><FaPhp /><span className="sktitle"><h2>PHP</h2></span></p>
            <p><FaPython /><span className="sktitle"><h2>Python</h2></span></p>
            <p><DiMysql /><span className="sktitle"><h2>MySQL</h2></span></p>
            <p><FaJava /><span className="sktitle"><h2>Java</h2></span></p>
            </div>
        </div>
        </div>
     );
}
 
export default SKILLS;
