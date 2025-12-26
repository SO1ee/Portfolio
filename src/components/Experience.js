import React from 'react';
import '../components/Experience.css';
import CogniLogo from '../assets/Experience/ctsLogo.png';
import ExperienceTitleLogo from '../assets/experienceIconV2.png';
import ExperienceTitleBannerLogo from '../assets/expiBannerImage.jpg'

function Experience() {
  const startDate = new Date('2023-9-14');
  const currentDate = new Date();
  const yearsDiff = (currentDate - startDate) / (1000 * 60 * 60 * 24 * 365);
  const yearsOfExperience =  yearsDiff.toFixed(1)
  let expSpan = yearsOfExperience + "years";
  const juniorSofstart = new Date('2024-9-14');
  const juniorSoftexp = ((currentDate - juniorSofstart) / (1000 * 60 * 60 * 24 * 365)).toFixed(1)
  console.log("juniorSoftexp", juniorSoftexp);
  let experienceLog = [{
    company: 'Cognizant',
    companyLogo: CogniLogo,
    role: 'Junior Software Engineer',
    roleDes: "Collaborated with clients to meet tailored project requirements, ensuring timely, defect-free deliveries aligned with functional and stylistic standards.",
    roleExp: {juniorSoftexp},
    rolePeriod: 'September 2024 - Present',
    techStack : []
  }]
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
              
            }
          </div>
    </div>
  )
}

export default Experience
