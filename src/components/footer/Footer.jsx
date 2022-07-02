import "./footer.scss";

export default function Footer() {
    return (
        <div className="footer" id="footer">
            <div className="wrapper">
                <div className="socials">
                    <a href="https://www.youtube.com/channel/UC_hGF64jMBIiuksUAv8w0hw" target="_blank" className="youtube">
                        <img src="assets/youtube_icon.png"/>
                    </a>
                    <a href="https://www.linkedin.com/in/muna-aghamelu-310792178/" target="_blank" className="linkedin">
                        <img src="assets/linkedin_icon.png"/>
                    </a>
                    <a href="https://github.com/munakaghamelu" target="_blank" className="github">
                        <img src="assets/git_icon.png"/>
                    </a>
                </div>
            </div>
        </div>
    );
}