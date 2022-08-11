import React from 'react'



function PaymentWithCard() {
  return (
    <div className='payment-method'>
        <h3 className='text-center'> Payment with Credit Card</h3>
        <form className='payment-method'>
            <div class="form-group">
                <input type="name" class="form-control rounded-pill" id="name" aria-describedby="name" placeholder="Name on Card"/> 
            </div>
            <div class="form-group d-flex flex-row justify-content-between"> 
                <input type="text" class="form-control rounded-pill" id="type" placeholder="Card Type"/>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">MasterCard Titanium Card Credit Card</a>
                    <a class="dropdown-item" href="#">VISA Platinum Card Credit Card</a>
                    <a class="dropdown-item" href="#">VISA Classic Local Credit Card Credit Card</a> 
                    <a class="dropdown-item" href="#">VISA Gold Local Credit Card Credit Card</a>
                </div>
                <input type="number" class="form-control rounded-pill" id="cardnumber" placeholder="Card Number"/>
            </div>
            <div class="form-group d-flex flex-row justify-content-between">
                {/* <input type="date" className="form-control rounded-pill" id="expiration_date" placeholder="Expiration month"/> */}
                <input
                    type="text"
                    className="form-control rounded-pill"
                    onFocus={
                        (e)=> {
                            e.currentTarget.type = "date";
                            e.currentTarget.placeholder = "Expiration date in dd/mm/yyyy"
                            e.currentTarget.focus();  
                        }
                    }
                    placeholder="Expiration date"
                />
                <input type="number" className="form-control rounded-pill" id="cvv" placeholder="cvv"/>               
            </div>
            <div class="form-group d-flex flex-row justify-content-between"> 
                <input type="text" className="form-control rounded-pill" id="addr1" placeholder="Address Line 1"/>
                <input type="text" className="form-control rounded-pill" id="addr2" placeholder="Address Line 2"/>               
            </div>
            <div class="form-group">
                <input type="text" class="form-control rounded-pill text-center" id="city" aria-describedby="city" placeholder="City"/> 
            </div>
            <div class="form-group">
                <input type="text" class="form-control rounded-pill text-center" id="postal_code" aria-describedby="postal_code" placeholder="Postal Code"/> 
            </div>
            <div class="form-group">
                <input type="text" class="form-control rounded-pill text-center" id="country" aria-describedby="country" placeholder="Country"/> 
            </div>
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

export default PaymentWithCard