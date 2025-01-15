import { deletePokemon } from '../../../apps/app/src/redux/pokemonSlice';
import './list.scss';
import { useDispatch } from 'react-redux'

const Card = ({name}: {name: string}) => {
  const dispatch = useDispatch()
  return <div className='card'>
    <p>{name}</p>
    <button onClick={() => dispatch(deletePokemon(name))}>Delete</button>
  </div>
  
}

export const List = ({ list }: any) => {
  return (
    <div >
      <p>List</p>
      {list?.length > 0 && (
        <ul className="list">
          {list.map((item: any) => (
            <li className="list-item" key={item.name}><Card name={item.name} /></li>
          ))}
        </ul>
      )}
    </div>
  );
};
