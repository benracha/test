import React from "react";
import "./Menu.css";

const Menu = (props) => {
    return (
    <div className="bg-menu">
        <div className="box-menu" >
           <div className="font-menu">
            หน้าหลัก
           </div>
           <div className="font-menu">
            รายการสินค้า
           </div>
           <div className="font-menu">
            เกี่ยวกับเรา
           </div>
           <div className="font-menu">
            คำถามที่พบบ่อย
           </div>
           <div className="font-menu">
            ช่องทางการติดต่อออ
           </div>
        </div>
    </div>
    );
}

export default Menu;