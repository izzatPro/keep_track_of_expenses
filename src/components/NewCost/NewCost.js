import CostForm from './CostForm';
import './NewCost.css'

const NewCost = (props) => {

  const upDateCost = (submitInfo) => {
    props.upDateCost(submitInfo)
  }
 
  return (
    <div className='new-cost'>
        <CostForm upDateCost={upDateCost}/>
    </div>
  )
}

export default NewCost