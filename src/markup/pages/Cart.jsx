import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import * as getCourses from "../../store/Action/CoursesAction";

import $ from "jquery";

import Header from "../layout/header/header1";
import Footer from "../layout/footer/footer1";
import DeleteIcon from "@material-ui/icons/Delete";
function Cart(props) {
  const [array, setArray] = useState();
  const [loading, setLoading] = useState(false);

  const data = useSelector((state) => state.Course.getCourses);

  // data.map(())

  const dispatcher = useDispatch();

  useEffect(() => {
    getCoursesMethod();
  }, []);

  const getCoursesMethod = async () => {
    setLoading(true);
    await dispatcher(getCourses.getCoursesData());
    setLoading(false);
  };

  console.log("data====> ", data);

  /* Set values + misc */
  var promoCode;
  var promoPrice;
  var fadeTime = 300;

  /* Assign actions */
  // $(".quantity input").change(function () {
  //   updateQuantity(this);
  // });

  console.log(document.getElementsByClassName("remove"));

  function removeItemFromBasket(itemId) {
    data.filter((item) => item.id !== itemId);
    // setArray(items);
  }

  // $(".remove").click(function () {
  //   removeItem(this);
  // });

  // $(document).ready(function () {
  //   updateSumItems();
  // });

  // $(".promo-code-cta").click(() => {
  //   promoCode = $("#promo-code").val();

  //   if (promoCode == "10off" || promoCode == "10OFF") {
  //     //If promoPrice has no value, set it as 10 for the 10OFF promocode
  //     if (!promoPrice) {
  //       promoPrice = 10;
  //     } else if (promoCode) {
  //       promoPrice = promoPrice * 1;
  //     }
  //   } else if (promoCode != "") {
  //     alert("Invalid Promo Code");
  //     promoPrice = 0;
  //   }
  //   //If there is a promoPrice that has been set (it means there is a valid promoCode input) show promo
  //   if (promoPrice) {
  //     $(".summary-promo").removeClass("hide");
  //     $(".promo-value").text(promoPrice.toFixed(2));
  //     recalculateCart(true);
  //   }
  // });

  /* Recalculate cart */
  // function recalculateCart(onlyTotal) {
  //   var subtotal = 0;

  //   /* Sum up row totals */
  //   $(".basket-product").each(function () {
  //     subtotal += parseFloat($(this).children(".subtotal").text());
  //   });

  //   /* Calculate totals */
  //   var total = subtotal;

  //   //If there is a valid promoCode, and subtotal < 10 subtract from total
  //   var promoPrice = parseFloat($(".promo-value").text());
  //   if (promoPrice) {
  //     if (subtotal >= 10) {
  //       total -= promoPrice;
  //     } else {
  //       alert("Order must be more than £10 for Promo code to apply.");
  //       $(".summary-promo").addClass("hide");
  //     }
  //   }

  //   /*If switch for update only total, update only total display*/
  //   if (onlyTotal) {
  //     /* Update total display */
  //     $(".total-value").fadeOut(fadeTime, function () {
  //       $("#basket-total").html(total.toFixed(2));
  //       $(".total-value").fadeIn(fadeTime);
  //     });
  //   } else {
  //     /* Update summary display. */
  //     $(".final-value").fadeOut(fadeTime, function () {
  //       $("#basket-subtotal").html(subtotal.toFixed(2));
  //       $("#basket-total").html(total.toFixed(2));
  //       if (total == 0) {
  //         $(".checkout-cta").fadeOut(fadeTime);
  //       } else {
  //         $(".checkout-cta").fadeIn(fadeTime);
  //       }
  //       $(".final-value").fadeIn(fadeTime);
  //     });
  //   }
  // }

  /* Update quantity */
  // function updateQuantity(quantityInput) {
  //   /* Calculate line price */
  //   var productRow = $(quantityInput).parent().parent();
  //   var price = parseFloat(productRow.children(".price").text());
  //   var quantity = $(quantityInput).val();
  //   var linePrice = price * quantity;

  //   /* Update line price display and recalc cart totals */
  //   productRow.children(".subtotal").each(function () {
  //     $(this).fadeOut(fadeTime, function () {
  //       $(this).text(linePrice.toFixed(2));
  //       recalculateCart();
  //       $(this).fadeIn(fadeTime);
  //     });
  //   });

  //   productRow.find(".item-quantity").text(quantity);
  //   updateSumItems();
  // }

  // function updateSumItems() {
  //   var sumItems = 0;
  //   $(".quantity input").each(function () {
  //     sumItems += parseInt($(this).val());
  //   });
  //   $(".total-items").text(sumItems);
  // }

  /* Remove item from cart */
  // function removeItem(removeButton) {
  //   /* Remove row from DOM and recalc cart total */
  //   var productRow = $(removeButton).parent().parent();
  //   productRow.slideUp(fadeTime, function (id) {
  //     productRow.remove(id);
  //     recalculateCart();
  //     updateSumItems();
  //   });
  // }
  return (
    <>
      <Header {...props} />
      <main>
        <div className="basket">
          <div className="basket-module">
            <label htmlFor="promo-code">Enter a promotional code</label>
            <input
              id="promo-code"
              type="text"
              name="promo-code"
              maxLength={5}
              className="promo-code-field"
            />
            <button
              name="submit"
              value="Submit"
              type="submit"
              className="btn promo-code-cta"
              onClick={(e) => e.preventDefault()}
            >
              Apply
            </button>
          </div>
          <div className="basket-labels">
            <ul>
              <li className="item item-heading">Item</li>
              <li className="price">Price</li>
            </ul>
          </div>
          {data.map((item) => (
            <div className="basket-product">
              <div className="item">
                <div className="product-image">
                  <img
                    src="http://placehold.it/120x166"
                    alt="Placholder Image 2"
                    className="product-frame"
                  />
                </div>
                <div className="product-details">
                  <h4>
                    <strong>{item.Title}</strong>{" "}
                  </h4>
                  <p>
                    <strong>Navy, Size 18</strong>
                  </p>
                  <p>Class id - 232321939</p>
                </div>
              </div>
              <div className="price">26.00</div>

              <div className="remove button noselect">
                <button
                  style={{ textDecoration: "none" }}
                  className="button noselect"
                  onClick={() => removeItemFromBasket(item.id)}
                >
                  <span className="text">Remove</span>
                  <span className="icon">
                    <DeleteIcon fontSize="large" />
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                    </svg> */}
                  </span>
                </button>
              </div>
            </div>
          ))}
          {/* <div className="basket-product">
            <div className="item">
              <div className="product-image">
                <img
                  src="http://placehold.it/120x166"
                  alt="Placholder Image 2"
                  className="product-frame"
                />
              </div>
              <div className="product-details">
                <h1>
                  <strong>
                    <span className="item-quantity">1</span> x Whistles
                  </strong>{" "}
                  Amella Lace Midi Dress
                </h1>
                <p>
                  <strong>Navy, Size 10</strong>
                </p>
                <p>Product Code - 232321939</p>
              </div>
            </div>
            <div className="price">26.00</div>
            <div className="quantity">
              <input
                type="number"
                defaultValue={1}
                min={1}
                className="quantity-field"
              />
            </div>
            <div className="subtotal">26.00</div>
            <div className="remove">
              <button>Remove</button>
            </div>
          </div> */}
        </div>
        <aside>
          <div className="summary">
            <div className="summary-total-items">
              <span className="total-items" /> Items in your Cart
            </div>
            <div className="summary-subtotal">
              <div className="subtotal-title">Subtotal</div>
              <div className="subtotal-value final-value" id="basket-subtotal">
                130.00
              </div>
              <div className="summary-promo hide">
                <div className="promo-title">Promotion</div>
                <div className="promo-value final-value" id="basket-promo" />
              </div>
            </div>
            <div className="summary-delivery">
              <select
                name="delivery-collection"
                className="summary-delivery-selection"
              >
                <option value={0} selected="selected">
                  Select Collection or Delivery
                </option>
                <option value="collection">Collection</option>
                <option value="first-class">Royal Mail 1st Class</option>
                <option value="second-class">Royal Mail 2nd Class</option>
                <option value="signed-for">Royal Mail Special Delivery</option>
              </select>
            </div>
            <div className="summary-total">
              <div className="total-title">Total</div>
              <div className="total-value final-value" id="basket-total">
                130.00
              </div>
            </div>
            <div className="summary-checkout">
              <button className="checkout-cta btn">
                Go to Secure Checkout
              </button>
            </div>
          </div>
        </aside>
      </main>

      <Footer />
    </>
  );
}

export default Cart;
