import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <section className='hero container '>
      <div className='hero-text'>
        <h1 className='hero-title'>We Ensure better education for a better world</h1>
        <p className='hero-paragraph'>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills and experiences needed to excel in the dynamic field
          of education
        </p>
        <button className='btn'>Explore more <img src={dark_arrow} alt='arrow'/></button>
      </div>
    </section>
  )
}

export default Hero
