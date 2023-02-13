import React from "react";
import "./ProductTwo.css"

const ProductTwo = (props) => {
    return (
        <div className="cardpro">
            <div className="promotionone">
                <div className="one">
                    <div className="apply">
                        <h4>สมัครสมาชิก</h4>
                    </div>
                    <div className="pro">
                        <h1>{props.item.promotion}</h1>
                    </div>
                    <div className="spink">สปริงเคิล 18.9ล.</div>
                    <div className="tung">
                        มัดจำถัง 3 ถัง
                    </div>
                    <div className="tab">
                        <div className="prices">
                            <h4>ถังละ 200 บาท</h4> </div>
                        <div className="rob">
                            <span>(300 บาท/ถัง)</span></div>
                    </div>
                    <div className="imgpd">
                        <div className="imgku">
                            <img className="sizeimg" src="https://www.sprinkle-th.com/assets/imgs/product/v3/bottles_v3.png" alt="18.9L"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="coupon">
                <div className="cp-t">
                    <img
                        className="couponimg"
                        src="https://www.sprinkle-th.com/assets/products/Asset 4@250x-8.png?v=202211171714" alt="coupon"></img>
                    <div>
                        <div className="pricecp">
                            x{props.item.coupon}
                        </div>
                        <div>คูปอง</div>
                    </div>
                </div>
                <div className="cp-d">
                    1 คูปอง = 1 ถัง
                </div>
                <div className="cp-d">
                    {props.item.couponDetail} {" "}
                    <span className="details">รายละเอียด</span>
                </div>
                <div className="jtf">
                    <div className="k"></div>
                    <div className="tf">
                        แถมฟรี
                    </div>
                    <div className="picja">
                        <div>
                            {/* props.item.lalamove !== "" && <img src={props.item.lalamove} alt="lalamove logo"></img> */}
                            {props.item.free !== "" && <img className="picku" src={props.item.free}></img>}
                            {/* <img className="picku" src={props.pro.free !== "" && <img src={props.pro.free}></img> } width="100%"></img> */}
                        </div>
                        {/* && คือถ้าเงื่อนไขข้างหน้าจริงจะแสดงเงื่อนไขข้างหลัง */}
                        {props.item.or !== "" && <div className="or">
                            <h4>หรือ</h4> </div>}

                        {props.item.freeTwo !== "" && <div className="pi-c">
                            <img className="p-c" src={props.item.freeTwo} width="100%"></img>
                        </div>}
                    </div>
                    <div className="tf-app">
                        <div className="text">{props.item.freeDetail}</div>
                        <div className="textt">{props.item.freeDetail2}</div>
                    </div>
                    <div>
                        <div className="boxprice">
                            <div className="price">
                                <div className="font-price">฿{props.item.productPrice}.-</div>
                                <small>ราคาไม่รวม VAT 7%</small>
                            </div>
                            <div className="button-add">
                                <button 
                                onClick={() => props.addToCart(props.item)}
                                className="button">
                                    <div className="add">เพิ่มลง</div>
                                    <img src="https://www.sprinkle-th.com/assets/imgs/ic-cart.svg" alt="invoice"></img>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default ProductTwo;