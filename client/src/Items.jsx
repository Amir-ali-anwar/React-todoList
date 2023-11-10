import SingleItem from './SingleItem';
import {useQuery} from '@tanstack/react-query'
import customFetch from './utils'
const Items = ({ items }) => {
const {data, isLoading} = useQuery({
  queryKey:['task'],
  queryFn:async()=>{
  const {data}= await customFetch.get('/')
  return data
  }
}) 
if(isLoading){
  return <p style={{marginTop:'1rem'}}>Loading ....</p>
}
  return (
    <div className='items'>
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
