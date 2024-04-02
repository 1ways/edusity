import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import { useRef } from 'react'

const Testimonials = () => {
  const slider = useRef()
  let tx = 0

  const slideForward = () => {
    if (window.innerWidth > 600) {
      if (tx > -50) {
        tx -= 25
      }
    } else {
      if (tx > -75) {
        tx -= 25
      }
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  return (
    <section className='testimonials'>
      <img
        className='next-btn'
        src={next_icon}
        alt='next'
        onClick={slideForward}
      />
      <img
        className='back-btn'
        src={back_icon}
        alt='back'
        onClick={slideBackward}
      />
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_1} alt='user-1' />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities and commitent to academic excellence
                have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_2} alt='user-1' />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities and commitent to academic excellence
                have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_3} alt='user-1' />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities and commitent to academic excellence
                have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_4} alt='user-1' />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities and commitent to academic excellence
                have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Testimonials
