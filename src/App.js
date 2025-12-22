import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/Landing";
import { useRef } from "react";

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
        <div ref={skillRef}></div>
        <div ref={experienceRef}></div>
        <div ref={projectsRef}></div>
        <div ref={contactRef}></div>
      </div>
      
    </>
  );
}

export default App;
