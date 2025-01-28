import React from 'react'
import "./banner.css";

export default function Banner() {
    return (
        <>
            <div className="banner">
                <h5 className="subheading">Professional Non-Fiction Book Writing Services!</h5>
                <h1 className="heading" style={{color:"white"} }>
                    Hire The Best Nonfiction Writers
                </h1>
                <div className="button-group">
                    <button className="btn btn-primary">Get A Quote</button>
                    <button className="btn btn-secondary">Live Chat</button>
                    <button className="btn btn-tertiary">Toll Free +1 877-633-0753</button>
                </div>
            </div>
        </>
    )
}
