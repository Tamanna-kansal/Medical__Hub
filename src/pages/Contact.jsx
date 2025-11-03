import React from 'react'

const Contact = () => {
  return (
    <section>
      <div className='px-4 mx-auto max-w-screen-md'>
        <h2 className='heading text-center'>Contact Us </h2>
          <p className='mb-8 lg:mb-16 font-light text-center text_para'>
            Got a technical issue? Want to send feedback about a beta feature? Let us know.
          </p>
          <form  action="https://api.web3forms.com/submit" method="POST" className=" space-y-8">
            <div>
            <input type="hidden" name="access_key" value="e28282a6-0011-4c49-815c-5b5fbf788135"/>
            
              <label htmlFor="email" className='form_label'>Your Email</label>

              <input type='email' 
              name="email"
              id="email"
              placeholder='example@gmail.com'
              className='form_input mt-1 ' required/>
            </div>
            <div>
              <label htmlFor="subject" className='form_label' >Subject</label>
              <input type='text' 
              id="subject"
              name="subject"
              placeholder='Let us know how we can help you'
              className='form_input mt-1 ' required/>
            </div>

            <div className='sm:col-span-2'>
            <div>
              <label htmlFor="message" className='form_label'>Your Message</label>
              <textarea rows='6' 
              type="text"
              id="message"
              name="message"
              placeholder='Let us know how we can help you'
              className='form_input mt-1 '/></div>
            </div>
            <button  type="submit" className='btn rounded sm:w-fit' required>Submit</button>
          </form>
      </div>
    </section>
  )
}

export default Contact
