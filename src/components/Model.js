import React from "react";
import "./Model.css";

function Model() {
    return (
        <div className="bg-model">
            <div className="model">
                <div className="pd">
                    <div className="img-product">
                        <img />
                    </div>
                    <div className="box-productname">
                        <div className="product-name">
                            { }
                        </div>
                        <div className="boxamount-product">
                            <div className="amount-product">
                                { } {" "}
                            </div>
                            <span className="details">รายละเอียด</span>
                        </div>
                    </div>
                </div>
                <div className="box-prm">
                    <div className="prm">
                        <h5>ปริมาณ :</h5>
                    </div>
                    <div className="box-amount">
                        <div className="boxbt">
                            <button className="bt-minus"> - </button>
                        </div>
                        <div className="numamount-product">
                            2
                        </div>
                        <div className="boxbt">
                            <button className="bt-plus"> + </button>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="detail-product">

                </div>
                <div className="box-price">
                    <div className="raka">
                        <h4>ราคา :</h4>
                    </div>
                    <div className="box-rakavat">
                        <div className="price-product">

                        </div>
                        <div className="vat-product">

                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
}

export default Model;