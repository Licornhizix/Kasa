import "../../styles/header.css"

function Header({ imageHome, welcomeHome}) {
    return (
        <div className="header"
            style = {{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${imageHome})`,
            }}
        >
            <div className="welcomeImage">{`${welcomeHome}`}
            </div>
        </div>
    )
}

export default Header;