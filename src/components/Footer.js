import React from 'react'
import { AiFillInstagram , AiFillFacebook , AiFillTwitterCircle } from 'react-icons/ai'

 const Footer = () => {
  return (
    <div className='main-footer'>
        <div className='container'>
            <div className='row'>
               {/*coloum 1*/}
               <div className='col'>
                <h4>SHOPY_HAPPY</h4>
                <ul className='list-unstyled'>
                   <li>8056511207</li>
                   <li>34\4 south street north nagar</li>
                   <li>TamilNadu India</li>
                </ul>
               </div>
               {/*coloum 2*/}
               <div className='col'>
                <h4>Help And Support</h4>
                <ul className='list-unstyled'>
                   <li>Return</li>
                   <li>Refund</li>
                   <li>Report</li>
                </ul>
                </div>
               {/*coloum 3*/}
               <div className='col'>
                <h4>About Us</h4>
                <ul className='list-unstyled'>
                   <li>Terms And Condition</li>
                   <li>Feedback</li>
                   <li>Policy</li>
                </ul>
                </div>
                <div className='col'>
                  <h4>Follow Us on</h4>
                  <ul className='list-unstyled'>
                     <li> <AiFillInstagram fontSize="30px"/> </li>
                     <li> <AiFillFacebook fontSize="30px"/> </li>
                     <li> <AiFillTwitterCircle fontSize="30px"/> </li>
                  </ul>
                </div>
            </div>
            <hr />
            <div className='row'>
               <p className='col-sm'>
                  &copy;{new Date().getFullYear()} SHOPY-HAPPYI | All Rights Reserved | Privacy
               </p>
            </div>
        </div>
    </div>
  )
}
export default Footer
