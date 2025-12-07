import React from 'react'

function CouponApply() {

    const[couponCode,setCouponCode]=useState("")
    const dispatch=useDispatch()

    const applyCoupon=()=>{
        dispatch(applyCouponDiscount(couponCode))
    }
  return (
    <>
      <input type="text" placeholder='Enter Coupon Code' value={couponCode} onChange={(e)=>setCouponCode(e.target.value)}/>
      <button onClick={applyCoupon}>Apply Coupon</button>


    </>
  )
}
export default CouponApply