import React from "react";

import SocialLogos from "./SocialLogos";

function year() {
    return new Date().getFullYear();
}

class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {logoUrls} = this.props;

        return (
            <div className="footer py-2 py-md-4">
                <div className={"container mx-auto px-2"}>
                    <div className="text-center grid grid-cols-1 md:grid-cols-3 grid-flow-row md:grid-flow-col gap-2">
                        <div className={"flex items-center justify-center text-center md:text-left md:justify-start " +
                        "align-middle d-flex flex-column"}>
                            <span className="my-auto"><strong>Copyright {year()}</strong></span>
                        </div>
                        <div className="flex items-center text-center justify-center">
                            <SocialLogos logoUrls={logoUrls} darkMode={true}/>
                        </div>
                        <div className="flex items-center text-center justify-center md:text-right md:justify-end">
                            <p>
                                <strong>Made by Walden Yan</strong>
                                <br/>waldenyan20@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;