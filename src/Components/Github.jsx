import React from 'react'
import './Styles/Github.css';

const Github = () => {
    return (
        <>
            <div className='github_div' data-aos="fade-up">
                <h2 className='github_title'> Github Contributions<span className='prof'> in 2023</span></h2>
                <img src="http://ghchart.rshah.org/006501/AmanPathan" className='github_img' alt="2016rshah's Github chart" />
                <p className='github_total'>229 contributions in the last year</p>
            </div>
        </>
    )
}

export default Github