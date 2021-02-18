import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [classHide, setClassHide] = useState(true);
    const openBurger = () => {
        setClassHide(!classHide);
    };

    const clickOnAnyLink = (event) => {
        let link = event.target.classList;
        if(link.contains('clickLink')) {
            setClassHide(!classHide);
        }

        if(link.contains('menuToggle') && link.contains('nav-menu') && link.contains('block-menu')){
            return false;
        } else {
            setClassHide(!classHide);
        }
    };


    return (
        <div className="header bg-dark py-3">
            <nav role="navigation">
                <div id="menuToggle" className="menuToggle" onClick={clickOnAnyLink}>
                    <div onClick={openBurger} >
                        <button className="burger-btn">
                            <div className="burger-div"></div>
                            <div className="burger-div"></div>
                            <div className="burger-div"></div>
                        </button>
                    </div>
                    <div className={classHide ? 'hide' : null}>
                        <div className="block-menu">
                            <nav className="nav-menu">
                                <ul className="list-style-none align-items-center li-menu ms-5">
                                    <li className="mb-3"><NavLink exact className="link-secondary text-decoration-none clickLink" to="/">Home</NavLink></li>
                                    <li className="mb-3"><NavLink className=" link-secondary text-decoration-none clickLink" to="/about">About</NavLink></li>
                                    <li className="mb-3"><NavLink className=" link-secondary text-decoration-none clickLink" to="/create">Create</NavLink></li>
                                    <li><NavLink className=" link-secondary text-decoration-none clickLink" to="/note">Note</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container d-flex">
                <NavLink exact to="/" className="fs-5 text-light text-decoration-none header-logo">ShareNote</NavLink>
                <div className="header-nav">
                    <nav className="d-flex">
                        <ul className="list-style-none d-flex align-items-center ms-5">
                            <li><NavLink exact className="link-secondary me-3 text-decoration-none" to="/">Home</NavLink></li>
                            <li><NavLink className="link-secondary me-3 text-decoration-none" to="/about">About</NavLink></li>
                            <li><NavLink className="link-secondary me-3 text-decoration-none" to="/create">Create</NavLink></li>
                            <li><NavLink className="link-secondary text-decoration-none" to="/note">Note</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;
