import React, { useState } from 'react'; import { Collapse, Navbar, NavbarToggler,
NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle,
DropdownMenu, DropdownItem, NavbarText } from 'reactstrap'; import "./header.scss";
import DropdownButton from 'react-bootstrap/DropdownButton'; import Dropdown
from 'react-bootstrap/Dropdown'; const Header = () => { const [isOpen,
setIsOpen] = useState(false); const toggle = () => setIsOpen(!isOpen);
const openNav = () => { document.getElementById('mySidenav')!.style.width
= "250px"; document.getElementById("main")!.style.marginLeft = "250px";
document.getElementById("foot")!.style.marginLeft = "250px"; document.getElementById("mySidenav")!.style.backgroundColor
= "#1E1E1E"; }; const closeNav = () => { document.getElementById("mySidenav")!.style.width
= "0"; document.getElementById("main")!.style.marginLeft = "0%"; document.getElementById("foot")!.style.marginLeft
= "0%"; }; return (
<nav id="template-i090p" className="">
    <div id="i9d5" className="gpd-navbar">
        <div id="ihgh" className="gpd-container gpd-cnt">
            <div id="ighf" className="gdp-row gpd-grid sticky">
                <div id="ik48" className="cell gpd-clm">
                    <div id="ij0o8m" className="gdp-row gpd-grid">
<span onClick={openNav} id="template-ip2hx" className="">
<div id="i8h3sg" className="cell gpd-clm">
<img id="igjp1x" src="https://cdn.grapedrop.com/uf9ef8595751c4d1f87c91168f5d51a8c/8762113d99a84fa5baf2345306d4f0c3_hamburger3.png" className=""/>
</div>
</span>

                        <div data-column="1" id="ig7k" className="cell">
                            <img src="https://cdn.grapedrop.com/u5f631954a3924f379de303e603ec8319/8d62be450a774a868eaef16b0d0054e5_group_18991.png"
                            id="i3go0t" className="" />
                        </div>
                    </div>
                    <div id="mySidenav" className="sidenav">
<a href="['javascript:void(0)']" onClick={closeNav} id="template-if7ki"
                        className="closebtn">
<div id="ibuiwl" className="cell gpd-clm">
<img id="imvflv" src="https://cdn.grapedrop.com/uf9ef8595751c4d1f87c91168f5d51a8c/cdca723990474ba9ba33337d35ef399d_close.png" className=""/>
</div>
</a>

                        <div id="MainMenu" className="">
                            <div id="i0xya-2" className="cell gpd-clm">
                                <div id="i60c7-2" className="gdp-row gpd-grid">
                                    <div id="ibuiwl" className="cell gpd-clm">
                                        <img id="imvflv" />
                                    </div>
                                    <div id="icrvgp" className="cell gpd-clm">
                                        <div id="i6vd27" className="gdp-row gpd-grid">
                                            <div id="inlo1l" className="cell gpd-clm"> <i id="iyxitk" className="fa fa-home" aria-hidden="true"></i>

                                            </div>
                                            <div id="iytw4t" className="cell gpd-clm"> <a id="i9imej" className="gpd-text" href='/home'>home</a>

                                            </div>
                                        </div>
                                    </div>
                                    <div id="icrvgp" className="cell gpd-clm">
                                        <div id="i6vd27" className="gdp-row gpd-grid">
                                            <div id="inlo1l" className="cell gpd-clm"> <i id="iyxitk" className="fa fa-user" aria-hidden="true"></i>

                                            </div>
                                            <div id="iytw4t" className="cell gpd-clm"> <a id="i9imej" className="gpd-text" href='/admin'>admin</a>

                                            </div>
                                        </div>
                                    </div>
                                    <div id="icrvgp" className="cell gpd-clm">
                                        <div id="i6vd27" className="gdp-row gpd-grid">
                                            <div id="inlo1l" className="cell gpd-clm"> <i id="iyxitk" className="fa fa-sign-out" aria-hidden="true"></i>

                                            </div>
                                            <div id="iytw4t" className="cell gpd-clm"> <a id="i9imej" className="gpd-text">logout</a>

                                            </div>
                                        </div>
                                    </div>
                                    <li>
                                        <div id="icrvgp" className="cell gpd-clm">
                                            <div id="i6vd27" className="gdp-row gpd-grid">
                                                <div id="inlo1l" className="cell gpd-clm"> <i id="iyxitk" className="fa fa-sign-in" aria-hidden="true"></i>

                                                </div>
                                                <div id="iytw4t" className="cell gpd-clm"> <a id="i9imej" className="gpd-text" href='/login'>login</a>

                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <div id="icrvgp" className="cell gpd-clm">
                                        <div id="i6vd27" className="gdp-row gpd-grid">
                                            <div id="inlo1l" className="cell gpd-clm"> <i id="iyxitk" className="fa fa-desktop" aria-hidden="true"></i>

                                            </div>
                                            <div id="iytw4t" className="cell gpd-clm"> <a id="i9imej" className="gpd-text" href='/sefscreen'>sefscreen</a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>); }; export default Header;