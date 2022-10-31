import React from 'react'
import classes from '../styles/App.module.css'
import { FiGithub } from 'react-icons/fi'
import { GrLinkedin, GrGithub } from 'react-icons/gr'

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className="d-flex flex-row justify-content-center">
                <div className={classes.social}>
                    <a href="https://github.com/mrhrifat" target="_blank" rel="noopener noreferrer">
                        <GrGithub />
                    </a>
                </div>
                <div className={classes.social}>
                    <a href="https://www.linkedin.com/in/mrhrifat" target="_blank" rel="noopener noreferrer">
                        <GrLinkedin />
                    </a>
                </div>
            </div>
            <div className={classes.copyright}>
                <small>
                    Copyright 2022 by Mrh Rifat | All Rights & Licensed Reserved
                </small>
            </div>
        </div>
    )
}

export default Footer