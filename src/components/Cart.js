import React from "react";
import "./Cart.css";


const Cart = (props) => {

    return (
        <div className="cart">

            {
                props.cart.map((item, index) => {
                    return (
                    <div className="dt-pro">
                        <div className="cart-pro">
                            <div className="dt-cart">
                                <div>
                                    <img className="img-p" src={item.productImage} />
                                </div>
                                <div className="dt-p">
                                    <div className="n-p">
                                        {item.productName}
                                    </div>
                                    <div className="jn-p">
                                        {item.productUnit} {" "}
                                        <span className="details">รายละเอียด</span>
                                    </div>
                                </div>
                            </div>
                            <div className="amount">
                                <div className="am">
                                    {item.productAmount}
                                </div>
                                <div className="am-p">
                                    ฿{item.productPrice}.-
                                </div>
                            </div>
                            {/* <div className="deleteitem">
                                <button onClick={() => props.onDelete(index)}>ลบ</button>
                            </div> */}
                        </div>
                    </div>)
                })

            }

           
            <div className="pro-item">
                <div className="order">
                    <div className="jn">
                        {props.cartSummary.cartAmount}
                    </div>
                    <div className="jn-dt">
                        <div>
                            สินค้า
                            <br /><b>ในรายการสั่งซื้อ</b>
                        </div>
                    </div>
                </div>
                <div className="pri">
                    <div>฿{props.cartSummary.cartTotal}</div>
                </div>
            </div>
               
            <div className="ok">
                <div className="f">ชำระเงิน</div>
            </div>

        </div>
    );
}

export default Cart;