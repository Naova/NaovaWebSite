import React, { useState } from 'react'
import "./newsletter.css"

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

const NewsletterSubscribeDialog = () => {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const isEmailValid = !emailRegex.test(email)
  return (
    <>
	  <button className="subscribe-btn" onClick={() => setVisible(true)}>Subscribe to newsletter</button>
      {visible && <>
          <div className="backdrop" onClick={() => setVisible(false)}/>
            <div className="newsletter-dialog-container">
              <h3>Subscribe to our newsletter</h3>
              <form className="form" name="subscribe-newsletter" method="post">
                <input type="hidden" name="form-name" value="subscribe-newsletter" />
                <p>
                  <label htmlFor="email">Please enter your email</label> <br />
                  <input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
                </p>
                  <input disabled={isEmailValid} className="subscribe-form-btn" type="submit" value="Subscribe" />
              </form>
          </div>
      </>}
    
    </>
    
    
  )
}

export default NewsletterSubscribeDialog