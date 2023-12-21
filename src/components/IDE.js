import { Cursor, useTypewriter} from 'react-simple-typewriter';

const IDE = () => {
    const h1 = ["HELLO, I'M", "KEN MARTINEZ",
                "I am a","<li>Web Development</li>", "<li>Front-end Development</li>","</ul>"    
            ];
   

    
    let [text2] = useTypewriter({
        words: ["WEB DEVELOPER", "FRONT-END DEVELOPER", "REACT DEVELOPER"],
        loop: {}
    });

        return ( 
        
            <h2>
               <span>{h1[0]}<br/><span className="classif">{h1[1]}</span></span> <br /><br />
               {h1[2]} <span className="classif">{text2}</span><Cursor/><br/>
            </h2>
        
     );
    
}
 
export default IDE;