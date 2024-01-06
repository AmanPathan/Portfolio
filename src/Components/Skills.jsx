import React from "react";
import './Styles/Skills.css';
import python from './Images/python.svg';
import java from './Images/java.svg';
import mongodb from './Images/mongodb.svg';
import arduino from './Images/arduino.svg';
import bootstrap from './Images/bootstrap.png';
import html from './Images/html.svg';
import mysql from './Images/mysql.svg';
import javascript from './Images/javascript.png';
import nodejs from './Images/nodejs.svg';
import reactjs from './Images/reactjs.svg';
import github from './Images/github.svg';
import postman from './Images/postman.png';
import jupyter from './Images/jupyter.svg';
import vscode from './Images/vscode.png';
import git from './Images/git.svg';
import css from './Images/css.png';
import cpp from './Images/cpp.png';
import solidity from './Images/solidity.png';

const Skills = () => {
    return (
        <>
            <div id="Skills">
                <h2 data-aos="fade-down" className="prof_h2">Professional <span className="prof">Skills </span></h2>
                <div className="fulldata">
                    <div className="datadiv" data-aos="zoom-in">
                        <div className="titles">
                            <p className="title-skills">Frontend</p>
                        </div>
                        <div className="skill_icons">
                            <span title="HTML"><img alt={"HTML"} className="svg" src={html} /></span>
                            <span title="JavaScript"><img alt={"JavaScript"} className="svg" src={javascript} /></span>
                            <span title="CSS"><img alt={"CSS"} className="svg" src={css} /></span>
                            <span title="ReactJS"><img alt={"ReactJS"} className="svg" src={reactjs} /></span>
                            <span title="Bootstrap"><img alt={"Bootstrap"} className="svg" src={bootstrap} /></span>
                        </div>
                    </div>
                    <div className="datadiv" data-aos="zoom-in">
                        <div className="titles">
                            <p className="title-skills">Backend & Databases</p>
                        </div>
                        <div className="skill_icons">
                            <span title="MongoDB"><img alt={"MongoDB"} className="svg svg-mid" src={mongodb} /></span>
                            <span title="NodeJS"><img alt={"NodeJS"} className="svg svg-mid" src={nodejs} /></span>
                            <span title="MySQL"><img alt={"MySql"} className="svg svg-mid" src={mysql} /></span>
                        </div>
                    </div>
                    <div className="datadiv" data-aos="zoom-in">
                        <div className="titles">
                            <p className="title-skills">Languages & Tools</p>
                        </div>
                        <div className="skill_icons">
                            <span title="Python"><img alt={'Python'} className="svg svg1" src={python} /></span>
                            <span title="C++"><img alt={"C++"} className="svg svg1" src={cpp} /></span>
                            <span title="Java"><img alt={"Java"} className="svg svg1" src={java} /></span>
                            <span title="Solidity"><img alt={"Solidity"} className="svg svg1 sol" src={solidity} /></span>
                            <span title="VSCode"><img alt={"VS Code"} className="svg svg1" src={vscode} /></span>
                        </div>
                    </div>
                    <div className="datadiv" data-aos="zoom-in">
                        <div className="titles titles_dot">.</div>
                        <div className="skill_icons">
                            <span title="Git"><img alt={"Git"} className="svg svg1" src={git} /></span>
                            <span title="Jupyter"><img alt={"Jupyter"} className="svg svg1" src={jupyter} /></span>
                            <span title="Arduino"><img alt={"Arduino"} className="svg svg1" src={arduino} /></span>
                            <span title="GitHub"><img alt={"GitHub"} className="svg svg1" src={github} /></span>
                            <span title="Postman"><img alt={"Postman"} className="svg svg1 post" src={postman} /></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Skills;