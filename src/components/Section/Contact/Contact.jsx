// import { useFormContext } from '../../../Contexts/formContext';
import { useScrollContext } from '../../../Contexts/scrollContext';
import './contact.css';

function Contact() {
  const {sectionRefs} = useScrollContext()
  // const {setFirstname} = useFormContext()
  return (
    <section ref={sectionRefs.contacts}>
        <h1 className='about-title'>Contact</h1>
        <div className='form-container'>
          <form id='contact_form' name='contact_form' method='POST'>
            <div className='form-body'>
              <div className='user-name'>
                <div>
                  <h5>Firstname</h5>
                  <input 
                  type="text" 
                  name='first_name' 
                  id='first_name'
                  placeholder='Your first name'
                  // onChange={(event) => setFirstname(event.target.value)}
                />
                </div>
                <div >
                <h5>Lastname</h5>
                  <input 
                  type="text" 
                  name='last_name' 
                  id='last_name'
                  placeholder='Your last name'
                  // onChange={(event) => setLastname(event.target.value)}
                  />
                </div>
              </div>
              <div className='email'>
                <div>
                  <h5>Email</h5>
                </div>
                <div>
              <input 
                type="email" 
                name='email' 
                id='email'
                placeholder='Your email address'
                // onChange={(event) => setEmail(event.target.value)}
                />
                </div>
              </div>
              <div className='message'>
                <div>
                  <h5>Message</h5>
                </div>
                <div>
                  <textarea 
                    name='message' 
                    id='message'
                    placeholder='Your messages...'
                    // onChange={(event) => setMessage(event.target.value)}
                    > 
                    </textarea>
                </div>
              </div>
              <div className='submit-btn'>
                <button type='submit' value="SEND" >SEND</button>
              </div>
            </div>
          </form>
        </div>
    </section>
  )
}

export default Contact