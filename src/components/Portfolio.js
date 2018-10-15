import React from "react";
import ImgPlaceholder from '../assets/640x360.png';
// import GitHub from '../assets/github.png';

const Portfolio = props => {

    return (
        <React.Fragment>

            <table className="table table-borderless portfolio-table">
                <tbody>

                    {/*whatMusic*/}
                    <tr className="align-items-center">
                        <td><img className="portfolio-screenshot" src={ImgPlaceholder} alt="placeholder for app screenshot" /></td>
                        <td>
                            <ul className="list-unstyled">
                                <li className=""><h4 className="text-underline text-bold">whatMusic</h4></li>
                                <li className="">
                                    <dl className="row">
                                        <dt className="col-sm-2">Description</dt>
                                        <dd className="col-sm-9">Listening to each other's favorite music is a fun, simple way to connect with a new friend. Skip the guessing and see <span className="text-bold">whatMusic</span> yous two have in common & get groovin'.</dd>

                                        <dt className="col-sm-2">Technologies</dt>
                                        <dd className="col-sm-9">
                                            Front End: React.js
                                            <br />Back End: Node.js, Express.js, MongoDB
                                            <br/>MERN Full Stack, JavaScript, HTML, Materialize CSS
                                            <br/>deployed on Heroku</dd>

                                        <dt className="col-sm-2">GitHub</dt>
                                        <dd className="col-sm-9"><a href="https://github.com/johnahnz0rs/what-music" target="_blank" rel="noopener noreferrer">/what-music</a></dd>

                                        <dt className="col-sm-2">Link</dt>
                                        <dd className="col-sm-9"><a href="http://whatmusic.xyz" target="_blank" rel="noopener noreferrer">www.whatMusic.xyz</a></dd>
                                    </dl>
                                </li>
                            </ul>
                        </td>
                    </tr>


                    {/*devJobs*/}
                    <tr>
                        <td><img className="portfolio-screenshot" src={ImgPlaceholder} alt="placeholder for app screenshot" /></td>
                        <td>
                            <ul className="list-unstyled">
                                <li><h4 className="text-underline text-bold">devJobs</h4></li>
                                <li>
                                    <dl className="row">
                                        <dt className="col-sm-2">Description</dt>
                                        <dd className="col-sm-9">Basic Fake LinkedIn -- upload your resume and build your profile; view and search for jobs by skills compatibility rating; post jobs; send messages.</dd>

                                        <dt className="col-sm-2">Technologies</dt>
                                        <dd className="col-sm-9">Front End - React.js;<br />Back End - Node.js, Express.js, MongoDB;<br/>MERN Full Stack; HTML; Materialize CSS;<br/>deployed on Heroku</dd>

                                        <dt className="col-sm-2">GitHub</dt>
                                        <dd className="col-sm-9"></dd>

                                        <dt className="col-sm-2">Link</dt>
                                        <dd className="col-sm-9"></dd>
                                    </dl>
                                </li>
                            </ul>
                        </td>
                    </tr>

                    {/*rBP*/}
                    <tr>
                        <td><img className="portfolio-screenshot" src={ImgPlaceholder} alt="placeholder for app screenshot" /></td>
                        <td>
                            <ul className="list-unstyled">
                                <li><h4 className="text-underline text-bold">rBP (robotButlerPal)</h4></li>
                                <li>
                                    <dl className="row">
                                        <dt className="col-sm-2">Description</dt>
                                        <dd className="col-sm-9">rBP.</dd>

                                        <dt className="col-sm-2">Technologies</dt>
                                        <dd className="col-sm-9">Front End / Client: React.js;<br />Back End: Node.js, Express.js, MongoDB; <br/>MERN Full Stack; <br/>HTML; Materialize CSS;<br/> deployed on Heroku</dd>

                                        <dt className="col-sm-2">GitHub</dt>
                                        <dd className="col-sm-9"></dd>

                                        <dt className="col-sm-2">Link</dt>
                                        <dd className="col-sm-9"></dd>
                                    </dl>
                                </li>
                            </ul>
                        </td>
                    </tr>


                    {/*<tr>*/}
                        {/*<td><img className="portfolio-screenshot" src={ImgPlaceholder} alt="placeholder for app screenshot" /></td>*/}
                        {/*<td>*/}
                            {/*<ul className="list-unstyled">*/}
                                {/*<li><h4 className="text-underline text-bold">whatMusic 2</h4></li>*/}
                                {/*<li>*/}
                                    {/*<ul>*/}
                                        {/*<li><span className="text-bold">Description:</span></li>*/}
                                        {/*<li><span className="text-bold">Technologies:</span></li>*/}
                                        {/*<li><span className="text-bold">GitHub:</span></li>*/}
                                        {/*<li><span className="text-bold">Link:</span></li>*/}
                                    {/*</ul>*/}
                                {/*</li>*/}
                            {/*</ul>*/}
                        {/*</td>*/}
                    {/*</tr>*/}


                    {/*<tr>*/}
                        {/*<td><img className="portfolio-screenshot" src={ImgPlaceholder} alt="placeholder for app screenshot" /></td>*/}
                        {/*<td>*/}
                            {/*<ul className="list-unstyled">*/}
                                {/*<li><h4 className="text-underline text-bold">whatMusic 2</h4></li>*/}
                                {/*<li>*/}
                                    {/*<ul>*/}
                                        {/*<li><span className="text-bold">Description:</span></li>*/}
                                        {/*<li><span className="text-bold">Technologies:</span></li>*/}
                                        {/*<li><span className="text-bold">GitHub:</span></li>*/}
                                        {/*<li><span className="text-bold">Link:</span></li>*/}
                                    {/*</ul>*/}
                                {/*</li>*/}
                            {/*</ul>*/}
                        {/*</td>*/}
                    {/*</tr>*/}

                </tbody>


            </table>

        </React.Fragment>
    );

};

export default Portfolio;