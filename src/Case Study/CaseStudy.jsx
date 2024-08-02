import React from 'react';
import './CaseStudy.css';

const caseStudies1 = [
    {
        id: 1,
        title: 'Case Study',
        Classname: "left-case",
        imageUrl: '',
        description: 'We take privilege in publicizing that our company MetaBlock Technologies, has received the Best Game-Fi Development Company Award at the 2022 Money Expo - the biggest trading event in India.',
        additionalDescription: 'This prestigious award recognizes our commitment to creating innovative and engaging gaming experiences for our clients. We strive to provide our customers with the best gaming experience possible and are thrilled to have been recognized for our efforts.',
        awardTitle: 'BEST GAMEFI DEVELOPMENT COMPANY 2022',
    },
    {
        id: 2,
        title: 'Case Study',
        Classname: "right-case",

        imageUrl: '',
        description: 'We take privilege in publicizing that our company MetaBlock Technologies, has received the Best Game-Fi Development Company Award at the 2022 Money Expo - the biggest trading event in India.',
        additionalDescription: 'This prestigious award recognizes our commitment to creating innovative and engaging gaming experiences for our clients. We strive to provide our customers with the best gaming experience possible and are thrilled to have been recognized for our efforts.',
        awardTitle: 'BEST GAMEFI DEVELOPMENT COMPANY 2022',
    },
    {
        id: 3,
        title: 'Case Study',
        Classname: "left-case",
        imageUrl: '',
        description: 'We take privilege in publicizing that our company MetaBlock Technologies, has received the Best Game-Fi Development Company Award at the 2022 Money Expo - the biggest trading event in India.',
        additionalDescription: 'This prestigious award recognizes our commitment to creating innovative and engaging gaming experiences for our clients. We strive to provide our customers with the best gaming experience possible and are thrilled to have been recognized for our efforts.',
        awardTitle: 'BEST GAMEFI DEVELOPMENT COMPANY 2022',
    },
    {
        id: 4,
        title: 'Case Study',
        Classname: "right-case",
        imageUrl: '',
        description: 'We take privilege in publicizing that our company MetaBlock Technologies, has received the Best Game-Fi Development Company Award at the 2022 Money Expo - the biggest trading event in India.',
        additionalDescription: 'This prestigious award recognizes our commitment to creating innovative and engaging gaming experiences for our clients. We strive to provide our customers with the best gaming experience possible and are thrilled to have been recognized for our efforts.',
        awardTitle: 'BEST GAMEFI DEVELOPMENT COMPANY 2022',
    },
    // Add more case studies as needed
];




const CaseStudy = () => {
    return (
        <>
            <div>
                <section className="mnyExpoSc-1">
                    <h1 style={{ color: 'white', textAlign: 'center' }} className="Case-Study">Case <span>Study</span> </h1>
                    {caseStudies1.map((study) => (
                        <div key={study.id} className="container container-1170">
                            <div className={study.Classname} >
                                <div className="col-lg-6 ">
                                    <div className="mnyExpoScImg-1">
                                        <img
                                            src={study.imageUrl}
                                            loading="eager"
                                            className="img-fluid lazyload"
                                            alt="Awards & Recognition"
                                            title="Awards & Recognition"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div>
                                        <div className="BnrCnt OurservHdd mb-4">
                                            <h2 className="text-capitalize">
                                                {study.title}
                                                <span className="Txt8282 px-2">Recognition</span>
                                            </h2>
                                            <p style={{ textAlign: 'start' }}>{study.description}</p>
                                            <p>{study.additionalDescription}</p>
                                            <div className="mnySub">
                                                <p className="mnySubTlt">{study.awardTitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* {caseStudies2.map((study) => (

                    <section key={study.id} className="mnyExpoSc-2">
                        <div className="container container-1170">
                            <div className="row-1 align-items-center">

                                <div className="col-lg-6">
                                    <div>
                                        <div className="BnrCnt OurservHdd mb-4">
                                            <h2 className="text-capitalize">
                                                {study.title}
                                                <span className="Txt8282 px-2">Recognition</span>
                                            </h2>
                                            <p style={{ textAlign: 'start' }}>{study.description}</p>
                                            <p>{study.additionalDescription}</p>
                                            <div className="mnySub">
                                                <p className="mnySubTlt">
                                                    BEST GAMEFI DEVELOPMENT COMPANY 2022
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mnyExpoScImg-1">
                                        <img
                                            src={study.imageUrl}
                                            loading="eager"
                                            className="img-fluid lazyload"
                                            alt="Awards & Recognition"
                                            title="Awards & Recognition"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))} */}

            </div>
        </>
    );
};

export default CaseStudy;





