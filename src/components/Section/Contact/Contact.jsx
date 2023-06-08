import { useEffect, useState } from 'react';
import { useScrollContext } from '../../../Contexts/scrollContext';
import './contact.css';

function Contact() {
  const {sectionRefs} = useScrollContext()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errMessage, setErrMessage] = useState("")
  const [formData, setFormData] = useState({
    firstname: '',
    lastname:'',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  };

  const handleSubmit =  async (event) => {
    event.preventDefault();
    setErrMessage("")
    await fetch("https://portfolio-backendserver.herokuapp.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      setErrMessage("Message sent successfully")
      console.log("İstek yanıtı:", data);
      // İstek başarılıysa başarı mesajı gösterin veya diğer işlemleri yapın
    })
    .catch((error) => {
      setErrMessage(`Something wents wrong: ${error.message}`)
      console.log("İstek hatası:", error.message);
      // İstek başarısızsa hata mesajı gösterin veya diğer işlemleri yapın
    });
    
    setIsSubmitted(true)
    setFormData({
      firstname: '',
      lastname:'',
      email: '',
      message: '',
    })
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  },[isSubmitted])

  return (
    <section ref={sectionRefs.contacts}>
        <h1 className='about-title'>Contact</h1>
        <div className='form-container'>
          <form id='contact_form' name='contact_form' onSubmit={handleSubmit} method='POST'>
            <div className='form-body'>
              <div className='user-name'>
                <div>
                  <h5>Firstname</h5>
                  <input 
                  type="text" 
                  name='firstname' 
                  id='firstname'
                  value={formData.firstname}
                  placeholder='Your first name'
                  onChange={handleChange}
                />
                </div>
                <div >
                <h5>Lastname</h5>
                  <input 
                  type="text" 
                  name='lastname' 
                  id='lastname'
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder='Your last name'
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
                value={formData.email}
                onChange={handleChange}
                placeholder='Your email address'
                />
                </div>
              </div>
              <div className='message'>
                <div>
                  <h5>Message</h5>
                </div>
                <div className={`response-message ${!isSubmitted&&"d-none"}`}>
                  {errMessage}
                </div>
                <div>
                  <textarea 
                    name='message' 
                    id='message'
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Your messages...'
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