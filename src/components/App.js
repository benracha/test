import React, { useState } from "react";
import Header from "./Header";
import Product from "./Product";
import "./App.css";
import ProductTwo from "./ProductTwo";
import CheckOut from "./CheckOut";
import Menu from "./Menu";

const App = () => {
    const [cards, setCards] = useState([{
        id: 1,
        lalamove: "",
        productImage: "https://sprinkle-th.com/assets/products/product-1.png",
        productName: "น้ำดื่มสปริงเคิล 350 มล.",
        productDetail: "10+ แพ็คจัดส่งฟรี 20+ แพ็คเหลือ ฿70/แพ็ค 18 ขวด/แพ็ค",
        productUnit: "18 ขวด/แพ็ค",
        productPrice: 75,
        productVat: "ราคาไม่รวม VAT 7%",
        productAmount: 2,
        minProductAmount: 2

    }, {
        id: 2,
        lalamove: "https://www.sprinkle-th.com/assets/imgs/product/lalamove-icon.svg?v=202211171306",
        productImage: "https://www.sprinkle-th.com/assets/products/product-2.png",
        productName: "น้ำดื่มสปริงเคิล 550 มล.",
        productDetail: "10+ แพ็คจัดส่งฟรี 20+ แพ็คเหลือ ฿65/แพ็ค 12 ขวด/แพ็ค",
        productUnit: "12 ขวด/แพ็ค",
        productPrice: 70,
        productVat: "ราคาไม่รวม VAT 7%",
        productAmount: 2,
        minProductAmount: 2

    }, {
        id: 3,
        lalamove: "https://www.sprinkle-th.com/assets/imgs/product/lalamove-icon.svg?v=202211171306",
        productImage: "https://www.sprinkle-th.com/assets/products/product-3.png",
        productName: "น้ำดื่มสปริงเคิล 1.5 ลิตร",
        productDetail: "10+ แพ็คจัดส่งฟรี 20+ แพ็คเหลือ ฿61.5/แพ็ค 6 ขวด/แพ็ค",
        productUnit: "6 ขวด/แพ็ค",
        productPrice: 66.50,
        productVat: "ราคาไม่รวม VAT 7%",
        productAmount: 2,
        minProductAmount: 2

    }, {
        id: 4,
        lalamove: "",
        productImage: "https://www.sprinkle-th.com/assets/products/product-4.png",
        productName: "น้ำดื่มสปริงเคิล 6 ลิตร.",
        productDetail: "8+ กล่องขึ้นไปเหลือ ฿139/กล่อง 4 ขวด/กล่อง",
        productUnit: "4 ขวด/กล่อง",
        productPrice: 149,
        productVat: "ราคาไม่รวม VAT 7%",
        productAmount: 2,
        minProductAmount: 2

    }

    ])

    const [box, setBox] = useState([{
        productImage: "https://www.sprinkle-th.com/assets/imgs/product/v3/bottles_v3.png",
        productName: "สปริงเคิล 18.9ล",
        promotion: "โปรโมชั่น #1",
        coupon: "24",
        productUnit: "67 บาท/คูปอง",
        free: "https://www.sprinkle-th.com/assets/imgs/product/promotion1_waterDispenser.png",
        freeTwo: "https://www.sprinkle-th.com/assets/products/Asset 3@250x-8.png",
        freeDetail: "3 คูปอง + ปั๊มน้ำ",
        freeDetail2: "5 คูปอง",
        productPrice: 2208,
        or: "หรือ"
    }, {
        productImage: "https://www.sprinkle-th.com/assets/imgs/product/v3/bottles_v3.png",
        productName: "สปริงเคิล 18.9ล",
        promotion: "โปรโมชั่น #2",
        coupon: "12",
        productUnit: "70 บาท/คูปอง",
        free: "https://www.sprinkle-th.com/assets/products/5fb228869420970eg.png",
        freeTwo: "",
        freeDetail: "เครื่องสูบน้ำอัตโนมัติ",
        freeDetail2: "",
        productPrice: 1440,
        or: ""
    }
    ])

    const [tabMenu, setTabMenu] = useState([])
   

    //ตัวแปรตะกร้า
    const [cart, setCart] = useState([])

    //ตัวแปรคำนวณค่าในตะกร้า
    const [cartSummary, setCartSummary] = useState({
        cartTotal: 0,
        cartAmount: 0
    })

    //functionคำนวณค่าในตะกร้า
    function computeCartSummary() {
        cartSummary.cartAmount = 0
        cartSummary.cartTotal = 0

        //forEachคือฟังก์ชันคล้ายmapแต่forEachจะไม่returnค่า
        cart.forEach(item => {
            cartSummary.cartAmount = cartSummary.cartAmount + item.productAmount
            cartSummary.cartTotal = cartSummary.cartTotal + (item.productPrice * item.productAmount * 1.07)
        })

        setCartSummary(cartSummary)
    }

    // เราสร้างฟังก์ชัน add ขึ้นมา เพื่อใส่ค่า +1 เข้าไปในตัวแปร plus
    function add(index) {

        // เข้าไปเปลี่ยนค่าในตัวแปรcardsโดยระบุตำแหน่งโดยใช้indexแล้วเข้าไปเปลี่ยนค่าในตัวแปรproductAmount
        // ซึ่งตั้งค่าให้มันเปลี่ยนค่าจากเดิมเป็น +1
        cards[index].productAmount = cards[index].productAmount + 1;
        //...เป็นการทำให้reactรู้ว่าเราได้เปลี่ยนค่าภายในชุดข้อมูลแล้วน้าาาใช้กับข้อมูลชนิดarray
        setCards([...cards]);
        computeCartSummary()
    }

    // เราสร้างฟังก์ชัน reduce ขึ้นมา เพื่อใส่ค่า -1 เข้าไปในตัวแปร decrease
    function reduce(index) {

        //ถ้าค่าของminProductAmountมีค่าเท่ากับค่าของproductAmountจะหยุดfunctionลง
        if (cards[index].minProductAmount === cards[index].productAmount) {
            return; //หยุดfunction
        }

        // เข้าไปเปลี่ยนค่าในตัวแปรcardsโดยระบุตำแหน่งโดยใช้indexแล้วเข้าไปเปลี่ยนค่าในตัวแปรproductAmount
        // ซึ่งตั้งค่าให้มันเปลี่ยนค่าจากเดิมเป็น -1
        cards[index].productAmount = cards[index].productAmount - 1;
        setCards([...cards]);
    }


    //functionเพิ่มของเข้าตะกร้า
    function addToCart(eachProduct) {
        //1.เช็คว่ามีeachProductอยู่ในcartมั้ย
        let cartIndex = null
        cart.forEach((eachCart , index) => {
            if(eachCart.id === eachProduct.id) {
                cartIndex = index
            } 
        })
        
        if(cartIndex !== null) {  //2.ถ้ามีของในตะกร้าเหมือนกันจะนำค่าจำนวนมารวมกัน
            cart[cartIndex].productAmount = cart[cartIndex].productAmount + eachProduct.productAmount
        } else if (cartIndex === null) { //3.ถ้าไม่มีของเหมือนกันก็จะเพิ่มของใหม่เข้ามาแทน
            cart.push(eachProduct)
        }
        setCart([...cart])

        computeCartSummary()
    }


    function addCart(index) {
        cart[index].productAmount = cart[index].productAmount + 1;
        setCart([...cart]);
        computeCartSummary()
    }

    function reduceCart(index) {
        cart[index].productAmount = cart[index].productAmount - 1;
        setCart([...cart]);
        computeCartSummary()
    }

    
    // function onDelete(index) {
    //     const deleteItem = cart.filter((itemCart, itemIndex) => itemIndex !== index)
    //     setCart([...deleteItem])
    //     computeCartSummary()
    // }

    




    return <div>

        {/* โยนค่าตัวแปรcart และ cartSummaryเข้าไปในไอคอนตะกร้า */}
        <Header cart={cart} cartSummary={cartSummary} tabMenu={tabMenu}  />
        {/* <CheckOut cart={cart} cartSummary={cartSummary} 
        addCart={addCart} reduceCart={reduceCart} /> */}
        <div className="container">
            <div className="itemproduct">
                {

                    // mapคือfunctionการLoopโดยการที่เราไม่ต้องสร้างเงื่อนไขให้มันหยุดเอง ใช้กับข้อมูลชนิดarrayเท่านั้น
                    // eachProductคือตัวแปรที่เราสร้างขึ้นมาเพื่อไว้ใช้เรียกข้อมูลภายในarrayแต่ละตัว
                    // indexคือการเข้าไปแปลงค่าในตัวแปร
                    cards.map((eachProduct, index) => {
                        // itemคือpropertyหรือคุณสมบัติที่เราไว้ใช้เปลี่ยนแปลงค่าแต่ละตัวในobject
                        // เวลาเรียกใช้ตัวแปรเราจะใช้สัญลักษณ์{}ในภาษาreact
                        // addToCartตัวสีฟ้าคือprops
                        // addToCartตัวสีเหลืองคือfunction
                        // indexคือการเข้าไปเปลี่ยนค่าในarrayนั้นๆ
                        return <Product
                            item={eachProduct}
                            addToCart={addToCart}
                            add={add}
                            reduce={reduce}
                            index={index}
                        />
                    })
                }
                {/* วิธีเข้าถึงข้อมูลของarrayแต่ละตัวแบบทั่วไป
            <Product item={cards[1]} />
            <Product item={cards[0]} /> */}
                {/* <Product />
        <Product />
        <Product />
        <Product /> */}
            </div>
            <div className="itemproduct">
                {box.map(eachBox => {
                    return <ProductTwo
                        item={eachBox}
                        addToCart={addToCart}
                    />
                })}
            </div>

        </div>
    </div>;
}

export default App;