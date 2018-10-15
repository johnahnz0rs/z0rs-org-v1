import React from "react";
import ImgResume from '../assets/resume.png';
import Jahn from '../assets/jahn.png';


const Resume = props => {

    return (
        <React.Fragment>
            <div className="resume-component container-fluid text-center">


                <div className="col-12 resume-btn-link">
                    <form action="https://drive.google.com/file/d/1C_nNhOgam0VvFhV3md4K8haYbgITeFWY/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        {/* button-link to gdocs/resume */}
                        <input type="submit" className="btn btn-lg btn-outline-success" value="View & Save Resume" />
                        {/* picture of jahn */}
                        {/*<img className="col-5 resume-profile-img img-fluid" src={Jahn} alt="John Ahn pic"/>*/}
                    </form>
                </div>

                <div className="col-12 resume-img">
                    <a href="https://drive.google.com/file/d/1C_nNhOgam0VvFhV3md4K8haYbgITeFWY/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <img className="img-fluid resume-thumbnail" src={ImgResume} alt="John Ahn's Resume" />
                    </a>

                    {/*<a href={MyResume} rel="noopener noreferrer"><img className="img-fluid img-thumbnail" src={ImgResume} alt="John Ahn's Resume Server" /></a>*/}
                </div>

            </div>
        </React.Fragment>
    );

};

export default Resume;