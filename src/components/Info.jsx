function EmailBtn() {
    
}

export default function Info() {
    return (
        <div className="info">
            <img className="info--pic" src="src/imgs/Rectangle 90.png"/>
            <div className="info--text-container">
                <h2 className="info--name">Laura Smith</h2>
                <h3 className="info--occupation">Frontend Developer</h3>
                <h4 className="info--weblink">Website link</h4>
            </div>
            <div className="info--button-container">
                <a href="https://gmail.com" target="_blank" className="email-anchor">
                    <button className="email-btn"><img className="btn-img" src="src/imgs/Mail.png"/>Email</button>
                </a>
                <a href="https://linkedin.com" target="_blank" className="linkedin-anchor">
                    <button className="linkedin-btn"><img className="btn-img" src="src/imgs/vector.png"/>LinkedIn</button>
                </a>
            </div>
        </div>

    )
}
