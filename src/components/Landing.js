import React, { useState } from "react";
import "../components/Landing.css";
import LandingBanner from "../assets/landPicProp2.jpg"
import nameLogo from "../assets/MobileHeader/NameLogo1.png";
import ContactMainBtnIcon from "../assets/contactIcon.png";
import DresMainBtnIcon from "../assets/downloadResumeIcon.png"
import HifiHands from "../assets/hnadIcon.png"

export default function Landing() {
  const [mobHeaderExpanded, setmobHeaderExpanded] = useState(false);
  return (
    <>
      <div className="LandinParentSecCls">
            <div className="LandingNavSecMobCls">
              <div className="LandingNavContMobcls">
                <div className="mobHeaderBurgPCls">
                  <div className="mobViewHeadTitle">
                    <img src={nameLogo} className="mobHeaderNameLogoCls"></img>
                  </div>
                    {mobHeaderExpanded ? (
                      <button className="MobileHeadCtrlBtnBurgCls mobHeaderBurgIconActChCls" onClick={() => setmobHeaderExpanded(!mobHeaderExpanded)}></button>
                    ) : (
                      <button className="MobileHeadCtrlBtnBurgCls mobHeaderBurgIconChCls" onClick={() => setmobHeaderExpanded(!mobHeaderExpanded)}></button>
                    ) }
                </div>
                    {
                       mobHeaderExpanded ? (
                             <div className="landinMobViewConteadCls">
                                  <div className="MobileHeadCtrlBtnDivCls">
                                      <button className="MobileHeadCtrlBtnCls" id="landNavSkillsBtnMob">Skills<span className="skillsNavIconCls mobNavTabComStyles"></span></button>
                                  </div>
                                  <div className="MobileHeadCtrlBtnDivCls">
                                      <button className="MobileHeadCtrlBtnCls" id="landNavExpBtnMob" >Experience<span className="experienceNavIconCls mobNavTabComStyles"></span></button>
                                  </div>
                                  <div className="MobileHeadCtrlBtnDivCls">
                                      <button className="MobileHeadCtrlBtnCls" id="landNavProjectsBtnMob" >Projects<span className="projectsNavIconCls mobNavTabComStyles"></span></button>
                                  </div>
                                  <div className="MobileHeadCtrlBtnDivCls">
                                      <button className="MobileHeadCtrlBtnCls" id="landNavContactBtnMob" >Contact<span className="contactNavIconCls mobNavTabComStyles"></span></button>
                                  </div>
                            </div>
                        ) : null
              
                    }
                    
              </div>
            </div>
            <div className="LandingNavSecCls">
              <div className="LandingNavContCls">
                <button className="landNavContBtnCls" name="landNavSkillsBtn" id="landNavSkillsBtn">Skills</button>
                <button className="landNavContBtnCls" name="landNavExpBtn" id="landNavExpBtn">Experience</button>
                <button className="landNavContBtnCls" name="landNavProjectsBtn" id="landNavProjectsBtn">Projects</button>
                <button className="landNavContBtnCls" name="landNavContactBtn" id="landNavContactBtn">Contact</button>
              </div>
            </div>
            <div className="LandingContentSecCls">
             <div className="landSecLeftPartCls">
                <div className="landSecNaming">
                  <div className="landSecNamingMineCls"> Hi, I'm Soma <span className="landHifiHandCls"><img className="hifiHandsLocCls" src={HifiHands} alt='hifiHandLandinPage'></img></span></div>
                  <div className="landSecDescriptionMineCls">
                  A passionate developer having experience of building web application with JavaScript / ReactJS 
                </div>
                </div>
                <div className="landMainFuncBtn">
                    <button className="landingMainBtnHeadcls"  name="landNavMainBtnContactMe" id="landNavMainBtnContactMe">Contact Me<span className="landBtnMainContCls landBtnMainContComCls"><img className="hifiHandsLandLocCls" src={ContactMainBtnIcon} alt="contactIcon"></img></span></button>
                    <button className="landingMainBtnHeadcls" name="landNavMainBtnDRes" id="landNavMainBtnDRes">Download Resume<span className="landBtnMainDresCls landBtnMainContComCls"><img className="hifiHandsLandLocCls" src={ DresMainBtnIcon} alt="downloadIcon"></img></span></button>
                </div>
             </div>
             <div className="landSecRightPartCls">
                <img className="bannerLandLocCls" src={LandingBanner}alt="bannerLandingPage"></img>
             </div>
            </div> 
      </div>
    </>
  );
}
