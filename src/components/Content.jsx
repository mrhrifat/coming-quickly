import React from 'react'
import classes from '../styles/App.module.css'
import Logo from './Logo'
import Header from './Header'
import Subscribe from './Subscribe'
import Footer from './Footer'

const Content = () => {
    return (
        <div className={`row ${classes.contentContainer}`}>
            <div className={`col-12 ${classes.content}`}>
                <Logo />
                <Header />
                <Subscribe />
                <Footer />
            </div>
        </div>
    )
}

export default Content