import React from "react";
import ImgPlaceholder from '../assets/640x360.png';
import Upwork from '../assets/upwork.png';
// import GitHub from '../assets/github.png';

const Portfolio = props => {

    return (
        <React.Fragment>

            <div className="portfolio-component container-fluid center-text">

                {/* Upwork */}
                <div className="row portfolio-item">
                    <div className="col-sm-5 text-center">
                        <a href="https://www.upwork.com/o/profiles/users/_~01c988de773d5c096f/" target="_blank" rel="noopener noreferrer">
                            <img className="img-fluid portfolio-screenshot" src={Upwork} alt="Upwork" />
                        </a>
                    </div>
                    <div className="col-sm-7">
                        <ul className="list-unstyled">
                            <li className=""><h4 className="text-underline text-bold">Upwork</h4></li>
                            <li>
                                <dl className="row">
                                    <dt className="col-sm-2">Description</dt>
                                    <dd className="col-sm-9">Freelance Web & Mobile Development job site</dd>

                                    <dt className="col-sm-2">My Upwork Rating</dt>
                                    <dd className="col-sm-9">5 Stars</dd>
                                </dl>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* whatMusic */}
                <div className="row">
                    <div className="col-sm-5 text-center">
                        <a href="http://whatmusic.xyz" target="_blank" rel="noopener noreferrer">
                            <img className="portfolio-screenshot" src={ImgPlaceholder} alt="placeholder for app screenshot" />
                        </a>
                    </div>
                    <div className="col-sm-7">
                        <ul className="list-unstyled">
                            <li className=""><h4 className="text-underline text-bold">whatMusic</h4></li>
                            <li className="">
                                <dl className="row">
                                    <dt className="col-sm-2">Description</dt>
                                    <dd className="col-sm-9">Sharing each other's favorite music is a fun, easy, and meaningful way to connect with a new friend. Skip the guessing and see <span className="text-bold">whatMusic</span> yous two have in common & get groovin'.</dd>

                                    <dt className="col-sm-2">Technologies</dt>
                                    <dd className="col-sm-9">
                                        <span className="text-underline">Front End</span>: React.js
                                        <br/><span className="text-underline">Back End</span>: Node.js, Express.js, MongoDB
                                        <br/><span className="text-underline">Other</span>: Materialize CSS, Heroku
                                    </dd>

                                    <dt className="col-sm-2">GitHub</dt>
                                    <dd className="col-sm-9"><a href="https://github.com/johnahnz0rs/what-music" target="_blank" rel="noopener noreferrer">/what-music</a></dd>

                                    <dt className="col-sm-2">Link</dt>
                                    <dd className="col-sm-9"><a href="http://whatmusic.xyz" target="_blank" rel="noopener noreferrer">www.whatMusic.xyz</a></dd>
                                </dl>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* devJobs */}
                <div className="row">
                    <div className="col-sm-5 text-center">
                        <a href="http://devjobs.pro" target="_blank" rel="noopener noreferrer">
                            <img className="portfolio-screenshot" src={ImgPlaceholder} alt="placeholder for app screenshot" />
                        </a>
                    </div>
                    <div className="col-sm-7">
                    <ul className="list-unstyled">
                        <li><h4 className="text-underline text-bold">devJobs</h4></li>
                        <li>
                            <dl className="row">
                                <dt className="col-sm-2">Description</dt>
                                <dd className="col-sm-9">Basic Fake LinkedIn -- upload your resume and build your profile; view and search for jobs by skills compatibility rating; post jobs; send messages.</dd>

                                <dt className="col-sm-2">Technologies</dt>
                                <dd className="col-sm-9">
                                    <span className="text-underline">Front End</span>: React.js
                                    <br/><span className="text-underline">Back End</span>: Node.js, Express.js, MongoDB
                                    <br/><span className="text-underline">Other</span>Twitter Bootstrap CSS, Heroku</dd>

                                <dt className="col-sm-2">GitHub</dt>
                                <dd className="col-sm-9"><a href="https://github.com/johnahnz0rs/devsOnDeck" target="_blank" rel="noopener noreferrer">/devJobs</a></dd>

                                <dt className="col-sm-2">Link</dt>
                                <dd className="col-sm-9"><a href="http://devjobs.pro" target="_blank" rel="noopener noreferrer">www.devJobs.pro</a></dd>
                            </dl>
                        </li>
                    </ul>
                </div>
                </div>


                {/* rBP */}
                <div className="row">
                    <div className="col-sm-5 text-center">
                        <a href="http://rbpal.me" target="_blank" rel="noopener noreferrer">
                            <img className="portfolio-screenshot" src={ImgPlaceholder} alt="placeholder for app screenshot" />
                        </a>
                    </div>
                    <div className="col-sm-7">
                    <ul className="list-unstyled">
                        <li><h4 className="text-underline text-bold">rBP (robotButlerPal)</h4></li>
                        <li>
                            <dl className="row">
                                <dt className="col-sm-2">Description</dt>
                                <dd className="col-sm-9">rBP.</dd>

                                <dt className="col-sm-2">Technologies</dt>
                                <dd className="col-sm-9">
                                    <span className="text-underline">Front End</span>: React.js
                                    <br/><span className="text-underline">Back End</span>: Node.js, Express.js, MongoDB
                                    <br/><span className="text-underline">Other</span>: Materialize CSS, Amazon Web Service AWS</dd>

                                <dt className="col-sm-2">GitHub</dt>
                                <dd className="col-sm-9"><a href="https://github.com/johnahnz0rs/rBP" target="_blank" rel="noopener noreferrer">/rBP</a></dd>

                                <dt className="col-sm-2">Link</dt>
                                <dd className="col-sm-9"><a href="http://rbpal.me" target="_blank" rel="noopener noreferrer">www.rBPal.me</a></dd>
                            </dl>
                        </li>
                    </ul>
                </div>
                </div>

            </div>

            {/*<table className="table table-borderless portfolio-table">*/}
                {/*<tbody>*/}

                    {/*/!*whatMusic*!/*/}
                    {/*<tr>*/}
                        {/*<td>*/}
                            {/*<a href="http://whatmusic.xyz" target="_blank" rel="noopener noreferrer"><img className="portfolio-screenshot" src={ImgPlaceholder} alt="placeholder for app screenshot" /></a>*/}
                        {/*</td>*/}
                        {/*<td>*/}
                            {/*<ul className="list-unstyled">*/}
                                {/*<li className=""><h4 className="text-underline text-bold">whatMusic</h4></li>*/}
                                {/*<li className="">*/}
                                    {/*<dl className="row">*/}
                                        {/*<dt className="col-sm-2">Description</dt>*/}
                                        {/*<dd className="col-sm-9">Listening to each other's favorite music is a fun, simple way to connect with a new friend. Skip the guessing and see <span className="text-bold">whatMusic</span> yous two have in common & get groovin'.</dd>*/}

                                        {/*<dt className="col-sm-2">Technologies</dt>*/}
                                        {/*<dd className="col-sm-9">*/}
                                            {/*<span className="text-underline">Front End</span>: React.js*/}
                                            {/*<br/><span className="text-underline">Back End</span>: Node.js, Express.js, MongoDB*/}
                                            {/*<br/><span className="text-underline">Other</span>: Materialize CSS, Heroku*/}
                                        {/*</dd>*/}

                                        {/*<dt className="col-sm-2">GitHub</dt>*/}
                                        {/*<dd className="col-sm-9"><a href="https://github.com/johnahnz0rs/what-music" target="_blank" rel="noopener noreferrer">/what-music</a></dd>*/}

                                        {/*<dt className="col-sm-2">Link</dt>*/}
                                        {/*<dd className="col-sm-9"><a href="http://whatmusic.xyz" target="_blank" rel="noopener noreferrer">www.whatMusic.xyz</a></dd>*/}
                                    {/*</dl>*/}
                                {/*</li>*/}
                            {/*</ul>*/}
                        {/*</td>*/}
                    {/*</tr>*/}



                    {/*/!*devJobs*!/*/}
                    {/*<tr>*/}
                        {/*<td>*/}
                            {/*<a href="http://devjobs.pro" target="_blank" rel="noopener noreferrer"><img className="portfolio-screenshot" src={ImgPlaceholder} alt="placeholder for app screenshot" /></a>*/}
                        {/*</td>*/}
                        {/*<td>*/}
                            {/*<ul className="list-unstyled">*/}
                                {/*<li><h4 className="text-underline text-bold">devJobs</h4></li>*/}
                                {/*<li>*/}
                                    {/*<dl className="row">*/}
                                        {/*<dt className="col-sm-2">Description</dt>*/}
                                        {/*<dd className="col-sm-9">Basic Fake LinkedIn -- upload your resume and build your profile; view and search for jobs by skills compatibility rating; post jobs; send messages.</dd>*/}

                                        {/*<dt className="col-sm-2">Technologies</dt>*/}
                                        {/*<dd className="col-sm-9">*/}
                                            {/*<span className="text-underline">Front End</span>: React.js*/}
                                            {/*<br/><span className="text-underline">Back End</span>: Node.js, Express.js, MongoDB*/}
                                            {/*<br/><span className="text-underline">Other</span>Twitter Bootstrap CSS, Heroku</dd>*/}

                                        {/*<dt className="col-sm-2">GitHub</dt>*/}
                                        {/*<dd className="col-sm-9"><a href="https://github.com/johnahnz0rs/devsOnDeck" target="_blank" rel="noopener noreferrer">/devJobs</a></dd>*/}

                                        {/*<dt className="col-sm-2">Link</dt>*/}
                                        {/*<dd className="col-sm-9"><a href="http://devjobs.pro" target="_blank" rel="noopener noreferrer">www.devJobs.pro</a></dd>*/}
                                    {/*</dl>*/}
                                {/*</li>*/}
                            {/*</ul>*/}
                        {/*</td>*/}
                    {/*</tr>*/}


                    {/*/!*rBP*!/*/}
                    {/*<tr>*/}
                        {/*<td>*/}
                            {/*<a href="http://rbpal.me" target="_blank" rel="noopener noreferrer"><img className="portfolio-screenshot" src={ImgPlaceholder} alt="placeholder for app screenshot" /></a>*/}
                        {/*</td>*/}
                        {/*<td>*/}
                            {/*<ul className="list-unstyled">*/}
                                {/*<li><h4 className="text-underline text-bold">rBP (robotButlerPal)</h4></li>*/}
                                {/*<li>*/}
                                    {/*<dl className="row">*/}
                                        {/*<dt className="col-sm-2">Description</dt>*/}
                                        {/*<dd className="col-sm-9">rBP.</dd>*/}

                                        {/*<dt className="col-sm-2">Technologies</dt>*/}
                                        {/*<dd className="col-sm-9">*/}
                                            {/*<span className="text-underline">Front End</span>: React.js*/}
                                            {/*<br/><span className="text-underline">Back End</span>: Node.js, Express.js, MongoDB*/}
                                            {/*<br/><span className="text-underline">Other</span>: Materialize CSS, Amazon Web Service AWS</dd>*/}

                                        {/*<dt className="col-sm-2">GitHub</dt>*/}
                                        {/*<dd className="col-sm-9"><a href="https://github.com/johnahnz0rs/rBP" target="_blank" rel="noopener noreferrer">/rBP</a></dd>*/}

                                        {/*<dt className="col-sm-2">Link</dt>*/}
                                        {/*<dd className="col-sm-9"><a href="http://rbpal.me" target="_blank" rel="noopener noreferrer">www.rBPal.me</a></dd>*/}
                                    {/*</dl>*/}
                                {/*</li>*/}
                            {/*</ul>*/}
                        {/*</td>*/}
                    {/*</tr>*/}


                    {/*/!*<tr>*!/*/}
                        {/*/!*<td><img className="portfolio-screenshot" src={ImgPlaceholder} alt="placeholder for app screenshot" /></td>*!/*/}
                        {/*/!*<td>*!/*/}
                            {/*/!*<ul className="list-unstyled">*!/*/}
                                {/*/!*<li><h4 className="text-underline text-bold">whatMusic 2</h4></li>*!/*/}
                                {/*/!*<li>*!/*/}
                                    {/*/!*<ul>*!/*/}
                                        {/*/!*<li><span className="text-bold">Description:</span></li>*!/*/}
                                        {/*/!*<li><span className="text-bold">Technologies:</span></li>*!/*/}
                                        {/*/!*<li><span className="text-bold">GitHub:</span></li>*!/*/}
                                        {/*/!*<li><span className="text-bold">Link:</span></li>*!/*/}
                                    {/*/!*</ul>*!/*/}
                                {/*/!*</li>*!/*/}
                            {/*/!*</ul>*!/*/}
                        {/*/!*</td>*!/*/}
                    {/*/!*</tr>*!/*/}


                    {/*/!*<tr>*!/*/}
                        {/*/!*<td><img className="portfolio-screenshot" src={ImgPlaceholder} alt="placeholder for app screenshot" /></td>*!/*/}
                        {/*/!*<td>*!/*/}
                            {/*/!*<ul className="list-unstyled">*!/*/}
                                {/*/!*<li><h4 className="text-underline text-bold">whatMusic 2</h4></li>*!/*/}
                                {/*/!*<li>*!/*/}
                                    {/*/!*<ul>*!/*/}
                                        {/*/!*<li><span className="text-bold">Description:</span></li>*!/*/}
                                        {/*/!*<li><span className="text-bold">Technologies:</span></li>*!/*/}
                                        {/*/!*<li><span className="text-bold">GitHub:</span></li>*!/*/}
                                        {/*/!*<li><span className="text-bold">Link:</span></li>*!/*/}
                                    {/*/!*</ul>*!/*/}
                                {/*/!*</li>*!/*/}
                            {/*/!*</ul>*!/*/}
                        {/*/!*</td>*!/*/}
                    {/*/!*</tr>*!/*/}

                {/*</tbody>*/}


            {/*</table>*/}

        </React.Fragment>
    );

};

export default Portfolio;