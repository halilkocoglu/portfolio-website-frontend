import './about.css';
import { useScrollContext } from '../../../Contexts/scrollContext';

function About() {
  const {sectionRefs} = useScrollContext()
  return (
    <section ref={sectionRefs.about} >
      <div className='div'>
        <h1>About</h1>
          <p>
          <span className='intended' >
            I graduated from Necmettin Erbakan University Aviation Management.</span>
            Since 2018, I have combined my interest in the computer and software industry with determination. 
          
          </p>
          <p>
          <span className='intended'>
            After September 2022, I have devoted myself to training and developing on the software industry(especially web development). </span>
            I want to be MERN Stack Developer at first. After that I want to go for  Full-Stack Web Development. I currently live in Aydın, however I can move for work if I have to.
          
          </p>
          <p>
          <span className='intended'>
            I love reading mythological stories and books,</span> fun-sounding rhythms and musics, pets, playing (story-based) computer games. Although I am prone to group work, mostly I prefer to have fun with myself in my private and social life.
          
          </p>
          </div>
    </section>
  )
}

export default About