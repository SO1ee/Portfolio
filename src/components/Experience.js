import React from 'react';
import '../components/Experience.css';
import CogniLogo from '../assets/Experience/ctsLogo.png';
import ReactLogo from '../assets/SkillLogos/ReactLogo.png';
import JavaScript from '../assets/SkillLogos/JavaScriptLogo.png';
import HTML from '../assets/SkillLogos/HTMLLogo.png';
import CSS from '../assets/SkillLogos/CSSLogo.png';
import Json from '../assets/SkillLogos/JsonLogo.png';
import GitHub from "../assets/SkillLogos/GitLogo.png"
import Bootstrap from '../assets/SkillLogos/BootstrapLogo.png'
import ExperienceTitleLogo from '../assets/experienceIconV2.png';
import ExperienceTitleBannerLogo from '../assets/expiBannerImage.jpg'

function Experience() {
  const startDate = new Date('2023-9-14');
  const currentDate = new Date();
  const yearsDiff = (currentDate - startDate) / (1000 * 60 * 60 * 24 * 365);
  const yearsOfExperience =  yearsDiff.toFixed(1)
  let expSpan = yearsOfExperience + "years";
  const juniorSofstart = new Date('2024-9-14');
  const juniorSoftexp = ((currentDate - juniorSofstart) / (1000 * 60 * 60 * 24 * 365)).toFixed(1)+' years'
  console.log("juniorSoftexp", juniorSoftexp);
  let experienceLog = [{
    company: 'Cognizant',
    companyLogo: CogniLogo,
    role: 'Junior Software Engineer',
    roleDes: "Collaborated with clients to meet tailored project requirements, ensuring timely, defect-free deliveries aligned with functional and stylistic standards.",
    roleExp: juniorSoftexp,
    rolePeriod: 'September 2024 - Present',
    techStack : [ReactLogo,JavaScript,HTML,CSS,Bootstrap,Json,GitHub]
  },
    {
    company: 'Cognizant',
    companyLogo: CogniLogo,
    role: 'Programmer Analyst Trainee',
    roleDes: "Developed a strong grasp of project architecture, efficiently managed codebases, and resolved bugs to enhance application reliability.",
    roleExp: '1 Year',
    rolePeriod: 'September 2023-September 2024',
    techStack : [ReactLogo,JavaScript,HTML,CSS,Bootstrap,Json,GitHub]
    },
    {
    company: 'Cognizant',
    companyLogo: CogniLogo,
    role: 'Trainee - Intern',
    roleDes: "Gained comprehensive exposure to IT development through hands-on projects and assessments, building foundational skills across diverse technologies.",
    roleExp: '6 Months',
    rolePeriod: 'February 2023-July 2023',
    techStack : [JavaScript,HTML,CSS,Bootstrap]
  }
  ]
  return (
    <div className='expeParentClass'>
          <div className='experienceSecTitleCls'>
              Experience<span><img className='experienceTitleHeadIconCls' src={ExperienceTitleLogo} alt="Skill Set Head Topic Logo"></img></span>
          </div>
          <div className='experienceSumContentCls'>
            <div className='experienceSumTextCls'>
                <div className='expSumPointHeadPCls'>
                      <div className='expSumPointHeadCls'>
                            <div>I have <span className='expSumTimeCls'>{expSpan} </span>of extensive experience in development, specializing in <span className='expSumTechCls'>front-end techmologies</span></div>
                      </div>
                      <div className='expSumPointHeadCls'>I've developed a strong understanding of projects architecture, client-specific requirements, and defect managemnet.</div>
                      <div className='expSumPointHeadCls'>I'm passionate about learning new technologies and dedicated to driving innovation in my work.</div>
                </div>
                <div className='expSumImageHeadPCls'>
                  <img className='experienceTitleBannerImgCls' src={ExperienceTitleBannerLogo} alt="Skill Set Head Topic Logo"></img>
                </div>
            </div>
        
          </div>
          <div className='expSetItemCls'>
            {
              experienceLog.map((item, index) => {
                return (
                  <div className={(index % 2 === 0) ? 'indiExpSecLeftCls' : 'indiExpSecRightCls'}>
                    <div className='indiExpPCls'>
                      <div className='indiExpTimeLogPCls'>
                        <div className='indiExpTimePeriodCls'>{item.rolePeriod}</div>
                        <div className='indiExpTimeLenthCls'>{item.roleExp}</div>
                      </div>
                      <div className='indiExpDesPCls'>
                        <div className='indiExpRoleContOneCls'>
                            <div className='indiExpRoleCompLogoCls'>
                                <img className='indiExpCompLogoCls' src={item.companyLogo} alt="Individual Experience Company Logo" />
                            </div>
                            <span className='indiExpoCompNameCls'>{item.company}</span>
                        </div>
                        <div className='indiExpRoleContTwoCls'>
                          <div className='indiExpRoleDescriptionCls'>
                            <div className='indiExpRolePosCls'>{item.role}</div>
                            <div className='indiExpRolePosMobPCls'>
                              <div className='indiExpRolePosMobChCls'>
                                <div className='indiExpRolePosMobCls'>
                                  <img className='indiExpCompLogoMobCls' src={item.companyLogo} alt="Individual Experience Company Logo"/>
                                </div> 
                                <span className='indiExpoCompNameCls'>{item.company}</span>
                              </div>
                              <div className='indiExpTimePeriodMobCls'>
                                <div className='indiExpRolePosMobCls'>{item.role}</div>
                                <div className='indiExpTimePeriodMobCls'>
                                  <div className='indiExpTimePeriodLineMobCls'>{item.rolePeriod}</div>
                                  <div className='indiExpTimePeriodCountMobCls'>{item.roleExp}</div>
                                </div>
                              </div>
                            </div>
                            <div className='indiExpRoleDesCls'>{item.roleDes}</div>
                            <div className='indiExpTechStackCls'>
                              <span className='expIndiCardTechStackTitleCls'>Tech Stack:</span>
                              <div className='indiExpCompTechStackLogoCollectionCls'>
                                { 
                                  item.techStack.map((step) => { 
                                    return (
                                      <img className='indiExpCompTechStackLogo' src={step} alt="Individual Experience Company Tech Stack"/>
                                    );
                                  })
                                }
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) 
              })
            }
          </div>
    </div>
  )
}

export default Experience
