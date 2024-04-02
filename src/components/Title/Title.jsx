import './Title.css'

const Title = ({title, subTitle}) => {
  return (
    <div className='title'>
      <p>{subTitle}</p>
      <h3>{title}</h3>
    </div>
  )
}

export default Title
