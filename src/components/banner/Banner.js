import React from 'react'
import "./banner.css";

export default function Banner() {
    return (
        <>
            <div className="banner">
                <h5 className="subheading">Self Publish Your Book!</h5>
                <h1 className="heading">
                    Let Panda Publishing Handle The Complex Book Publishing Processes
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
