/* eslint-disable no-duplicate-case */
/* eslint-disable default-case */
import React from 'react';
import './section.css';
import logo from '../../Images/logo.png';
import { HEADER_MENU } from '../AppConfig';
import { NavLink, useHistory } from 'react-router-dom';


const HeaderSection = (props) => {
    const history = useHistory();
    const [headerMenu, setHeaderMenu] = React.useState(HEADER_MENU.headerMenu_Options);
    const [activeMenu, setActiveMenu] = React.useState(0);

    const handleActive = (item, idx) => {
        setActiveMenu(idx)
        switch (item.value) {
            case "home":
                history.push('/')
                break;
            case "about":
                history.push('/about')
                break;
            case "courses":
                history.push('/')
                break;
            case "services":
                history.push('/')
                break;
            case "portfolio":
                history.push('/')
                break;
            case "career":
                history.push('/about')
                break;
        }
    }

    const menuList = headerMenu
    return (
        <div className='headerSecStart'>
            <div className='logoArea'>
                <NavLink to="/"><img src={logo} alt='logo' /></NavLink>
            </div>

            <ul className='navbarMenu'>
                {menuList.options.map((item, idx) => {
                    return (
                        <li key={idx}
                            onClick={() => handleActive(item, idx)}
                            className={'headerSingleMenu' + ' ' + (idx === activeMenu && 'headerActiveMenu')}>
                            {item.label}
                            <span className="menuarrowIcn"><img src={item.imgsc} className='arrwIcnCls'/></span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default HeaderSection