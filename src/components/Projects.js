import '../components/Projects.css'
import ProjectsTitleLogo from "../assets/ProjectsTitleLogo.png"
import GamiFy from '../assets/gallery-5.webp';
import Gsap from "../assets/SkillLogos/gsap.webp";
import React from "../assets/SkillLogos/ReactLogo.png";
import JavaScript from "../assets/SkillLogos/JavaScriptLogo.png";
import Github from "../assets/SkillLogos/GitLogo.png";
import Html from "../assets/SkillLogos/HTMLLogo.png";
import Css from "../assets/SkillLogos/CSSLogo.png";
import Bootstarp from "../assets/SkillLogos/BootstrapLogo.png"
export default function Projects() {
    const handleClick = (link) => { 
        window.open(link,"_blank")
    }
    const allProjects = [{
        projectType: "Frontend Project",
        projectName: "GamiFy",
        projectBanner: GamiFy,
        projectDes: "This web application integrates smooth animations to enhance a gamified experience. Each scroll interaction is carefully designed to deliver an advanced, immersive feel, making navigation engaging and dynamic.",
        projectTechStack: [Gsap, React, JavaScript, Html, Css, Bootstarp, Github],
        projectLiveLink: "https://cool-daifuku-fd300c.netlify.app/",
        cardBackColour: "rgb(266 186 102)",
        cardContBackColor: "#fff2d7",
        cardContTextColor: '#000',
        folderColor: '#14c04f',
        fontColor: '#fff'
    }]
    return (
        <>
            <div className='projectHeadCls'>
                <div className='projectSecParCls'>
                    <div className='projectSecCls'>
                        <div className='projectTitleHeadCls'>
                            Projects<span className='projectTitleLogoCls'><img className='projectTopicLocCls' src={ProjectsTitleLogo} alt="Project Set Head Topic Logo"/></span>
                        </div>
                        <div className='projectCardAreaCls'>
                            <div className='projectCardPCls'>
                                { 
                                    allProjects.map((item) => (
                                        <div className='proCardHeadCls'>
                                            <div className='proCardPCls' key={item.id}>
                                                <div className='proCardCatyCls' style={{backgroundColor: item.folderColor, color:item.fontColor}}>
                                                    {item.projectType}
                                                </div>
                                                <div className='proCardCCls' style={{ backgroundColor: item.cardBackColour }}>
                                                    <div className='proCardThumbCls'>
                                                        <img className='proCardThumbNailCls' src={item.projectBanner} alt="Project Card Image Thumbnail"/>
                                                    </div>
                                                    <div className='proCardContCls'>
                                                        <div className='proCardProjDetailsCls' style={{color: item.cardContTextColor}}>
                                                            <div className='proCardTitleCls'>
                                                                {item.projectName}
                                                            </div>
                                                            <div className='proCardContCls'>
                                                                {item.projectDes}
                                                            </div>
                                                        </div>
                                                        <div className='proCardLiveLinkCls'>
                                                            <button className='proCardLiveLinkBtnCls' onClick={() => handleClick( item.projectLiveLink)}>Live Link</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}