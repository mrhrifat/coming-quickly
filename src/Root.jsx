import React from 'react'
import Content from './components/Content'
import ParticlesBG from './components/ParticlesBG'
import Glow from './components/Glow'

const Root = () => {
    return (
        <>
            <ParticlesBG />
            <Glow />
            <Content />
        </>
    )
}

export default Root