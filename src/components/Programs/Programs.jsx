import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <section className='programs'>
      <div className='program'>
        <div className='program-img'>
          <img src={program_1} alt='program-img-1' />
        </div>
        <div className='caption'>
          <img
            className='caption-icon'
            src={program_icon_1}
            alt='program-icon-1'
          />
          <p className='caption-text'>Graduation Degree</p>
        </div>
      </div>
      <div className='program'>
        <div className='program-img'>
          <img src={program_2} alt='program-img-2' />
        </div>
        <div className='caption'>
          <img
            className='caption-icon'
            src={program_icon_2}
            alt='program-icon-2'
          />
          <p className='caption-text'>Masters Degree</p>
        </div>
      </div>
      <div className='program'>
        <div className='program-img'>
          <img src={program_3} alt='program-img-3' />
        </div>
        <div className='caption'>
          <img
            className='caption-icon'
            src={program_icon_3}
            alt='program-icon-3'
          />
          <p className='caption-text'>Post Graduation</p>
        </div>
      </div>
    </section>
  )
}

export default Programs
