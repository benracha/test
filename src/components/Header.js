import React, { useState } from "react";
import "./Header.css";
import Cart from "./Cart";
import Menu from "./Menu";

const Header = (props) => {

    const [visible, setVisible] = useState(false)
    function show() {
        if (visible === true) {
            setVisible(false);
        } else
            setVisible(true);
    }

    const [barMenu, setBarMenu] = useState(false)
    function showMenu() {
        if (barMenu === true) {
            setBarMenu(false);
        } else {
            setBarMenu(true);
        }
    }

    return (
        <div className="tabbar">
            <div className="sidebar">
                <div className="menu">
                    <div className="w3-xlarge">
                        <button
                            onClick={() => showMenu()}
                            className="bt">
                            <i className="fa fa-bars"></i>
                        </button>
                        {
                            barMenu === true && <Menu />
                        }
                    </div>
                </div>
                <div className="logo">
                    <img src="https://www.sprinkle-th.com/assets/imgs/logo.svg" alt="logo"></img>
                </div>
                <div className="right">
                    <div className="user">
                        <img src="https://www.sprinkle-th.com/assets/imgs/inc/icon-user.svg" alt="invoice"></img>
                    </div>
                    <div className="shopping">
                        <button
                            onClick={() => show()}
                            className="bt">
                            <img src="https://www.sprinkle-th.com/assets/imgs/ic-cart.svg" alt="invoice"></img>
                        </button>
                    </div>
                    <div className="language">
                        <div className="sizelanguage">TH</div>
                        <i className="caret down icon"></i>

                    </div>

                    {/* visibleถ้าเป็นจริงจะแสดงcartและถ้ามีcartจะโชว์component Cart */}
                    {
                        visible === true && props.cart && <Cart cart={props.cart} cartSummary={props.cartSummary} />

                    }

                </div>
            </div>
        </div>

    );
}

export default Header;