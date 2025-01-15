import './list.scss';

const Card = ({name}: {name: string}) => {
  return <div>
    <p>{name}</p>
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
