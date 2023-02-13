import React from "react";
import "./CheckOut.css";

const CheckOut = (props) => {
    return (
        <div className="checkout">
            <div className="b-co">
                <div className="co">
                    <h2>ชำระเงิน :</h2>
                </div>

                {
                    props.cart.map((item, index) => {
                        return (
                            <div className="pd-co">
                                <div className="dt-co">
                                    <div className="box-im">
                                        <div>
                                            <img className="im-co" src={item.productImage} />
                                        </div>
                                    </div>
                                    <div className="dt-prod">
                                        <div className="name-p">
                                            {item.productName}
                                        </div>
                                        <div className="detail-p">
                                            {item.productDetail}{" "}
                                            <span className="details">รายละเอียด</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="am-pd">
                                    <div>
                                    <button 
                                    onClick={() => props.reduceCart(index)}
                                    className="lob"
                                    >
                                    <i className="grey minus icon"></i>
                                    </button>
                                    </div>
                                    <div className="amount-pro">
                                    {item.productAmount}
                                    </div>
                                    <div>
                                    <button 
                                    onClick={() => props.addCart(index)}
                                    className="bauk">
                                    <i className="grey plus icon"></i>
                                    </button>
                                    </div>
                                </div>
                                <div className="pri-pd">
                                    <div className="price-co">
                                        ฿{item.productPrice}.-
                                    </div>
                                    <div className="v">
                                        {item.productVat}
                                    </div>
                                </div>
                            </div>)
                    })
                }
                <div className="am-co">
                    <div className="num-pro">
                        <div className="num-b">
                            <div className="num">
                                {props.cartSummary.cartAmount}
                            </div>
                        </div>
                        <div className="dt-num">
                            <div>สินค้า</div>
                            <div>
                                <h4>ในรายการสั่งซื้อ</h4>
                            </div>
                        </div>
                    </div>
                    <div className="pri-sum">
                        <div className="p-s">
                            ฿{props.cartSummary.cartTotal}
                        </div>
                        <div className="text-v">
                            ราคารวม vat 7%
                        </div>
                    </div>
                </div>
            </div>
            <div className="b-co2">
                <div className="b-call">
                    <div className="call">
                        <div className="num-call">
                            เบอร์มือถือ*
                        </div>
                        <input
                            className="input"
                            //maxLengthคือพิมพ์ได้กี่ตัว
                            //placeholderคือค่าตั้งต้นภายในinput
                            maxLength={10} placeholder="0899999999"></input>
                    </div>
                    <hr className="hr" />
                    <div className="bt-call">
                        <div className="bt-back">
                            <button className="back">
                                <h3>ย้อนกลับ</h3>
                            </button>
                        </div>
                        <div className="bt-back">
                            <button className="next">
                                <h3 style={{ color: "white" }}>ถัดไป</h3>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckOut;