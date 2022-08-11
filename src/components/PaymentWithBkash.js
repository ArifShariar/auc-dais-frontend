import React from 'react'

function PaymentWithBkash() {
  return (
    <div className='payment-method'>
        <h3 className='text-center'> Payment with Bkash</h3>
        <form className='payment-method'>
            <div class="form-group d-flex flex-row justify-content-between">
                <input type="number" class="form-control rounded-pill" id="phonenumber" placeholder="Phone Number"/> 
            </div>
            <div class="form-group d-flex flex-row justify-content-between"> 
                <input type="text" class="form-control rounded-pill" id="trx_id" aria-describedby="name" placeholder="Trx Number"/>  
            </div>
            <div class="form-group d-flex flex-row justify-content-between"> 
                <input type="text" class="form-control rounded-pill" id="amount" aria-describedby="name" placeholder="amount"/> 
            </div>
            <div class="form-group d-flex flex-row justify-content-between"> 
                <input type="password" class="form-control rounded-pill" id="pin" placeholder="Enter Pin"/> 
            </div>
            <hr/> 
            <hr></hr>
            <div class="message-container">
                <h4>Payment Details</h4>
                <div class="form-group d-flex flex-row justify-content-between"> 
                    <p>Account type</p> 
                    <p> account type cost</p>              
                </div>
                <hr></hr>
                <div class="form-group d-flex flex-row justify-content-between"> 
                    <p>total</p> 
                    <p>100000000000 $</p>              
                </div>
            </div>
             <div className="d-grid gap-2 col-6 mx-auto text-container" >
                <button type="submit" className="btn btn-danger">Confirm Payment</button>
            </div>
        </form>
    </div>
  )
}

export default PaymentWithBkash