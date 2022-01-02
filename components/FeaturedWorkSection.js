import React from 'react';
import getStorageUrl from '../tools/firebase';

import WorkData from "../data/work.json";

import Image from 'next/image';

class FeaturedWorkSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            urls: {}
        }
    }

    componentDidMount() {
        const proms = [];
        const urls = {};
        for (const work of WorkData.work) {
            proms.push(getStorageUrl(work.imagePath).then((url) => {
                urls[work.title] = url;
            }).catch((err) => {
                console.log("Failed to load storage path " + work.imagePath);
            }))
        }
        Promise.allSettled(proms).then(() => {
            this.setState({
                urls: urls
            });
        });
    }

    render() {
        const {urls} = this.state;

        return (
            <section id="work" className="md:pt-5">
                <h3 className="text-center mb-5">Highlighted Work</h3>
                <div className="mt-5 my-md-5 grid grid-cols-1 md:grid-cols-3 grid-spacing-8">
                    {WorkData.work.map((work, i) => {
                        return (<div className="text-center mb-4 px-2" key={i}>
                            <a className={"highlightedWorkImage"} href={work.linkUrl} target="_blank" rel="noreferrer"
                            >
                                {
                                    urls[work.title] &&
                                    <Image src={urls[work.title]} width="250px" height="250px"/>
                                }
                            </a>
                            <div className="mt-3 w-3/4 mx-auto">
                                <h5><strong>{work.title}</strong></h5>
                                <p>{work.description}<br/>
                                    <a href={work.linkUrl} target="_blank" rel="noreferrer"
                                       style={{textDecoration: "none"}} className="workLinkText">{work.linkText}</a></p>
                            </div>
                        </div>)
                    })}
                </div>
            </section>)
    }
}

export default FeaturedWorkSection;