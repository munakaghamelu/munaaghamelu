import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#landing">HOME</a>
                </li>

                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#about">ABOUT</a>
                </li>

                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#run">SKILLS</a>
                </li>

                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#milestones">PORTFOLIO</a>
                </li>

                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">CONTACT</a>
                </li>
            </ul>
        </div>
    );
}
