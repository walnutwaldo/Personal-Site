import urls from "../data/urls.json";
import Image from "next/image";
import React from "react";

class SocialLogos extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {logoUrls, darkMode} = this.props;

        return (<>
            <a href={urls['LinkedIn']} target="_blank" rel="noreferrer"
               className={`ml-1 transition ${darkMode ? "hover:brightness-200" : "hover:brightness-0"} image-align-middle-wrapper`}>
                {
                    logoUrls['linkedInSocialLogo'] &&
                    <Image src={logoUrls['linkedInSocialLogo']} width="38px" height="38px"/>
                }
            </a>
            <a href={urls['GitHub']} target="_blank" rel="noreferrer"
               className={`ml-1 transition ${darkMode ? "hover:brightness-200" : "hover:brightness-0"} image-align-middle-wrapper`}>
                {
                    logoUrls['githubSocialLogo'] &&
                    <Image src={logoUrls['githubSocialLogo']} width="38px" height="38px"/>
                }
            </a>
        </>);
    }

}

export default SocialLogos;