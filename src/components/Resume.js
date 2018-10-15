import React from "react";
import ImgResume from '../assets/resume.png';


const Resume = props => {

    return (
        <React.Fragment>
            <div className="container-fluid text-center">


                <div className="col-12">
                    <form action="https://drive.google.com/file/d/1C_nNhOgam0VvFhV3md4K8haYbgITeFWY/view?usp=sharing" target="_blank" rel="noopener noreferrer">

                        {/* button-link to gdocs/resume */}
                        <input type="submit" className="btn btn-lg btn-outline-success" value="View & Save PDF" />
                    </form>
                </div>

                <div className="col-12 resume-img">
                    {/* img also links to gdocs/resume */}
                    <a href="https://drive.google.com/file/d/1C_nNhOgam0VvFhV3md4K8haYbgITeFWY/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <img className="resume-thumbnail" src={ImgResume} alt="John Ahn's Resume" />
                    </a>

                </div>

            </div>
        </React.Fragment>
    );

};

export default Resume;