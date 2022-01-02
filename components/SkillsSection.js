import React from 'react';
import getStorageUrl from '../tools/firebase';
import InteractiveImage from './InteractiveImage';

import SkillsData from "../data/skills.json";

class SkillsSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            urls: {}
        }
    }

    componentDidMount() {
        const proms = [];
        const urls = {};
        for (const skill of SkillsData.skills) {
            proms.push(getStorageUrl(skill.imagePath).then((url) => {
                urls[skill.title] = url;
            }).catch((err) => {
                console.log("Failed to load storage path " + skill.imagePath);
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

        return (<section name="skills" id="skills" className="md:pt-5">
            {SkillsData.skills.map((skill, i) => {
                const notableWork = (
                    <>
                        <h2 className="text-gray-700 font-semibold text-lg">Notable Work</h2>
                        <ul>
                            {skill.notableWork.map((work, j) => {
                                return <li className={
                                    "transition hover:translate-x-2 hover:cursor-pointer border-t py-1"
                                } key={j}>
                                    {work}
                                </li>
                            })}
                        </ul>
                    </>
                )
                return (
                    <div className="skill mt-5 grid grid-cols-1 md:grid-cols-2 gap-4" key={i}>
                        <div className={"flex flex-col order-2 md:order-1 mx-2 md:mx-0" + (i % 2 === 0 ? "" : " lg:order-2")}>
                            <h1 className="mt-3 text-3xl"><strong>{skill.title}</strong></h1>
                            <p className="mt-2 text-md align-justify">
                                {skill.description}
                            </p>
                            <div className="mt-3 block md:hidden lg:block">{notableWork}</div>
                        </div>
                        <div
                            className={"order-1 md:order-2 mt-0 md:my-auto" + (i % 2 === 0 ? "" : " lg:order-1")}>
                            {
                                urls[skill.title] &&
                                <InteractiveImage src={urls[skill.title]}/>
                            }
                        </div>
                        <div className="hidden md:block lg:hidden order-3 pt-4 col-span-2">{notableWork}</div>
                    </div>
                )
            })}
        </section>)
    }
}

export default SkillsSection;