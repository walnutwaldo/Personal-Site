import {Row} from "react-bootstrap";
import React from "react";

export default function WritingSection() {
    return (
        <section name="writing" id="writing" className="pt-md-1">
            <Row className="mt-5 my-md-5">
                <h3 className="text-center mb-5">Recent Writing</h3>
                <div className="row">
                    <div className={"d-none d-xxl-block col-xxl-1"}></div>
                    <div className="col-lg-6 col-xxl-4 pe-lg-4 my-auto">
                        <img
                            src="https://images.bloggi.co/f517a5a3.png"
                            alt="Article Image"
                            className={"w-100 rounded-lg"}
                        />
                    </div>
                    <div className="col-lg-6 ps-lg-4 mt-4 mt-lg-0 flex-column">
                        <h3>On Technology, Inequality, Purpose, and the Fermi Paradox</h3>
                        <p>Everyone has seen the impact of software on productivity, as well as its ability to create a ton of wealth, albeit unevenly distributed. Software gives enormous economic leverage to individuals who know how to code. But I will explain why I think this massive economic leverage will also eventually be seen in every industry, including those that deal with the physical world, from farming to manufacturing, and why I think this will have disastrous consequences for economics and social stability. And by the end, I hope to accumulate all of this into a possible explanation as to why we appear to be alone in the universe.</p>
                        <a
                            href={"https://waldensthoughts.bloggi.co/on-technology-inequality-purpose-and-the-fermi-paradox"}
                            className={"primaryLink text-decoration-none"}
                        >
                            Read More
                        </a>
                    </div>
                    <div className={"d-none d-xxl-block col-xxl-1"}></div>
                </div>
            </Row>
        </section>
    )
}