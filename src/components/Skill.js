import React from 'react';
import "../components/Skill.css";
import SkillTopLogo from '../assets/skillSetHeadLogo.png';
import ThreeStar from '../assets/SkillStars/3-Star-Type-2.png'
import FourStar from '../assets/SkillStars/4-Star-Type-2.png';
import FiveStar from '../assets/SkillStars/5-Star-Type-2.png';
import JavaScript from '../assets/SkillLogos/JavaScriptLogo.png';
import ReactLogo from '../assets/SkillLogos/ReactLogo.png';
import HTML from '../assets/SkillLogos/HTMLLogo.png';
import CSS from '../assets/SkillLogos/CSSLogo.png';
import Bootstrap from '../assets/SkillLogos/BootstrapLogo.png';
import JASON from '../assets/SkillLogos/JsonLogo.png';
import RestApi from '../assets/SkillLogos/RestApiLogo.png';
import SQL from '../assets/SkillLogos/sqlLogo.png'
import GitHub from '../assets/SkillLogos/GitLogo.png'

function Skill() {
    let skillSetHold = [{
        skillName: "React",
        skillRate: FourStar,
        skillLogo: ReactLogo
    },
    {
        skillName: "JavaScript",
        skillRate: FourStar,
        skillLogo: JavaScript
    },
    {
        skillName: "HTML",
        skillRate: FiveStar,
        skillLogo: HTML
    },
    {
        skillName: "CSS",
        skillRate: FiveStar,
        skillLogo: CSS
     },
    {
        skillName: "Bootstrap",
        skillRate: FiveStar,
        skillLogo: Bootstrap
    },
    {
        skillName: "JASON",
        skillRate: FourStar,
        skillLogo: JASON
    },
    {
        skillName: "REST Api",
        skillRate: FourStar,
        skillLogo: RestApi
    },
    {
        skillName: "SQL",
        skillRate: ThreeStar,
        skillLogo: SQL
    },
    {
        skillName: "GitHub",
        skillRate: FourStar,
        skillLogo: GitHub
        },
    
    ]
  return (
      <>
          <div className='skillParentSecCls'>
              <div className='skillTitleHeadCls'>
                  Skill Repertoire<span className='skillTitleLogoCls'><img className='skillTopicLocCls' src={SkillTopLogo} alt="Skill Set Head Topic Logo"></img></span>
              </div>
              <div className='skillSetHeadCls'>
                  {skillSetHold.map((item) => (
                      <div  className='skillSetCardHeadCls'>
                            <div className='skillSetDets'>
                              <div className='skillSetTitle'>{item.skillName}</div> 
                              <div className='skillSetRating'><img className='skillSetRatingLogoCls' src={item.skillRate} alt="Skill Set Head Topic Loo"></img></div>
                          </div>
                          <div className='skillSetLogo'><img className='skillSetLogoCls' src={item.skillLogo} alt="Skill Set Head Topic Logo New"></img></div>
                        </div>
                  ))}
                  
              </div>
            </div>
      </>
  )
}

export default Skill
