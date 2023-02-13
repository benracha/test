import React from "react";
import "./Product.css";

//         productImage: "https://www.sprinkle-th.com/assets/products/product-3.png",
//         productName: "น้ำดื่มสปริงเคิล 550 มล.",
//         productDetail: "10+ แพ็คจัดส่งฟรี 20+ แพ็คเหลือ ฿65/แพ็ค 12 ขวด/แพ็ค",
//         productPrice: "70"

//propsคือการแสดงค่าตัวแปรนั้นๆที่อยู่ภายในobject
const Product = (props) => {

    // if(props.item.lalamove !== "" ) {
    //     return <img src={props.item.lalamove} alt="lalamove logo"></img> 
    // } else {
    //     return <div>no image</div>
    // }



    return (
        <div className="card">
            <div className="lalamove">
                {/* altคือการตั้งชื่อรูปภาพที่เราได้ทำการแทรกไว้ เมื่อถ้ารูปภาพเกิดerrorมันจะแสดงชื่อรูปภาพขึ้นมาแทน */}
                {
                    // props.item.lalamove !== "" && <img src={props.item.lalamove} alt="lalamove logo"></img>
                    props.item.lalamove !== "" 
                    ? <img src={props.item.lalamove} alt="lalamove logo"></img> 
                    : <div></div>
                }
                {/* <img src={props.item.lalamove} alt="lalamove logo"></img> */}
            </div>
            <div className="product">
                <img src={props.item.productImage} alt="product"></img>
            </div>
            <div className="name-product">
                <h3>{props.item.productName}</h3>
            </div>
            <div className="detail">
                <p>{props.item.productDetail}{" "}
                    <span className="details">รายละเอียด</span>
                </p>
            </div>
            <div className="number">
                <button 
                //disabledคือการปิดปุ่มคือทำให้ผู้ใช้รู้ว่าสุดแค่เท่านี้ไม่สามารถกดได้แล้วน้าา
                disabled={props.item.minProductAmount === props.item.productAmount}
                onClick={() => props.reduce(props.index)}
                className="btn">
                    <i className="grey minus icon"></i>
                </button>
                <div className="two">{props.item.productAmount}
                    </div>
                <button 
                onClick={() => props.add(props.index)}
                className="btn">
                    <i className="grey plus icon"></i>
                </button>
            </div>
            <div className="boxprice">
                <div className="price">
                    <div className="font-price">฿{props.item.productPrice}.-</div>
                    <small>{props.item.productVat}</small>
                </div>
                <div className="button-add">
                    <button 
                    onClick={() => props.addToCart({...props.item})}
                    className="button">
                        <div className="add">เพิ่มลง</div>
                        <img src="https://www.sprinkle-th.com/assets/imgs/ic-cart.svg" alt="invoice"></img>
                    </button>
                </div>
            </div>
        </div>
        
    );
}

export default Product;