import "./App.css";
import Landing from "./components/Landing";
import { useRef } from "react";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Projects from "./components/Projects"
import Contact from "./components/Contact";

function App() {
  const skillRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <div className="productParentCls">
        <Landing
          scrollToSkill={() => skillRef.current.scrollIntoView({ behavior: 'smooth' })}
          scrollToExperience={() => experienceRef.current.scrollIntoView({ behavior: 'smooth' })}
          scrollToProject={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}
          scrollToContact={() => contactRef.current.scrollIntoView({behavior:'smooth'})}
        />
        <div ref={skillRef}><Skill/></div>
        <div ref={experienceRef}><Experience/></div>
        <div ref={projectsRef}><Projects/></div>
        <div ref={contactRef}><Contact/></div>
      </div>
      
    </>
  );
}

export default App;
