import Navbar from './components/navbar';
import IDE from './components/IDE';
import IMAGE from './components/imgken';
import INFO from './components/info';
import MAP from './components/map';
import SKILLS from './components/skills';
// import GRAPH from './components/graph';
import CONTACTS from './components/Contacts';
import Styles from './App.module.css';
import  './App.css';
import PRJSLD from './components/ProjSlider';
import { useRef, useEffect,useState } from 'react';
import Images from './img';

function App() {
  const myRef = useRef();
  const mapRef = useRef();
  const skillRef = useRef();  
  const [myElementIsVisible, setMyElementIsVisible] = useState();
  const [mapElementIsVisible, setMapElementIsVisible] = useState();
  const [skillElementIsVisible, setSkillElementIsVisible] = useState();
  useEffect(()=>{
    const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setMyElementIsVisible(entry.isIntersecting)
    })
    const observer2 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMapElementIsVisible(entry.isIntersecting)
    })
      const observer3 = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setSkillElementIsVisible(entry.isIntersecting)
    })
    observer.observe(myRef.current);
    observer2.observe(mapRef.current);
    observer3.observe(skillRef.current);
  },[])
  return (
    <div className={Styles.App}>
      <Navbar></Navbar>
      <section className={Styles.home} id='home'>
    
      <div className={Styles.ide}>
        <IDE/>
      </div>
      
      <div className={Styles.img}>
        <IMAGE/>
      </div>
      <div className='tml'>
      </div>
    </section>
    <section className={Styles.about} id='about'>
      <div ref={myRef} className={`${Styles.info} ${myElementIsVisible ? Styles.animatetoright : ''}`}>
        <INFO/>
      </div>
      <div ref={mapRef} className={`${Styles.map} ${mapElementIsVisible ? Styles.animatetoright : ''}`}>
        <MAP/>
      </div>
      <div ref={skillRef} className={`${Styles.skills} ${skillElementIsVisible ? Styles.animatetorleft : ''}`}>
        <SKILLS />
      </div>

    </section>
    <section className={Styles.projects} id='projects'>
      <PRJSLD/>
    </section>
    <section className={Styles.contacts} id='contacts'>
      <CONTACTS/>
    </section>
    </div>
    
  );
}

export default App;
