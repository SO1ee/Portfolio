import "../components/Contact.css";
import LinkedIn from "../assets/Contact/LinkedInContLogo.png";
import GitHub from "../assets/Contact/gitHubContLogo.png";
import Naukri from "../assets/Contact/naukriContLogo.png";
// import Gmail from "../assets/Contact/gmailContLogo.png";
import ContactBanner from "../assets/contactBanner.avif";

export default function Contact() {
    const socialLinks = [{
        name: "LinkedIn",
        logo: LinkedIn,
        link: "https://www.linkedin.com/in/soma-4halder/"
    }, {
        name: "GitHub",
        logo: GitHub,
        link: "https://github.com/SO1ee"
    }, {
        name: "Naukri",
        logo: Naukri,
        link: "https://www.google.com/"
    }]

    return (
        <>
            <div className="contactSecHeadCls">
                <div className="contactSecTitleCls">
                    Contact<span className="contactTitleHeadIconCls"></span>
                </div>
                <div className="contactPagePCls">
                    <div className="contactParentCls">
                        <div className="textAreaPCls">
                            <div className="contactTextOneCls">Reach out to me!</div>
                            <div className="contactTextTwoCls">Open to collaborations, conversations, or simply a hello — my inbox is always welcoming</div>
                            <div className="contactTextThreeCls">Open for opportunities : Yes</div>
                            <div className="contactSocialSecCls">Email : somahalder171@gmail.com
                            </div>
                        </div>
                        <div className="mailDropContCls">
                            {socialLinks.map((item, index) => (
                                <button><img className="socialHandleLogoCls" src={item.logo} alt="social logos in the contact page" onClick={() => window.open(item.link)}></img></button>
                            ))}
                        </div>
                    </div>
                    <div className="contactMailParentCls">
                        <img className="ContactLocCls" src={ContactBanner} alt="bannerContactPage"></img>
                    </div>
                </div>
            </div>
        </>
    );
}