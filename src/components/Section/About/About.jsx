import './about.css';
import { useScrollContext } from '../../../Contexts/scrollContext';
import  {MdDownload}  from 'react-icons/md';

function About() {
  const {sectionRefs} = useScrollContext()
  return (
    <section ref={sectionRefs.about} >
      <div>
        <div className='about-info'>
          <h1>About</h1>
          <p>
            <span className='intended' ></span>
            I graduated from Necmettin Erbakan University Aviation Management.
            Since 2018, I have combined my interest in the computer and software industry with determination. 
          </p>
          <p>
            <span className='intended'></span>
            After September 2022, I have devoted myself to training and developing on the software industry(especially web development). 
            I want to be MERN Stack Developer at first. After that I want to go for  Full-Stack Web Development. I currently live in Aydın, however I can move for work if I have to.
          </p>
          <p>
            <span className='intended'></span>
            I love reading mythological stories and books, fun-sounding rhythms and musics, pets, playing (story-based) computer games. Although I am prone to group work, mostly I prefer to have fun with myself in my private and social life.
          </p>
        </div>
        <div className='cv'>
          <button>
          <a href="" download>CV <MdDownload /></a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default About