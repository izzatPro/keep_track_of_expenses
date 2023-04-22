import './CostList.css'
import CostItem from './CostItem';

const CostList = (props) => {
    
    
    if(props.filter.length === 0){
      return  <h2 className='cost-list__fallback'>В этом году расходов не было !</h2> ;
    }

  return (
    <li className='cost-list'>
        {
             props.filter.map((item) => 
             <CostItem date={item.date} description={item.description} amount={item.amount} key={item.id} />) 
        }
    </li>
  )
}

export default CostList