import { IoMdArrowDropdown } from 'react-icons/io'
import { Children } from "../types";
import { useNavigate } from "react-router-dom";


interface DropProp {
  title: string | React.ReactElement;
  dropdownLists?: Children[];
  withIcon?: boolean;
}
const DropDown = ({title, dropdownLists, withIcon}: DropProp) => {
  const navigate = useNavigate()
 
  return ( 
    <div className="dropdown">
      <button className="dropdown__btn">
        <span>{title}</span>
        {withIcon && <IoMdArrowDropdown className='icon' />}
      </button>
      <div className="dropdown__content">
        {
          dropdownLists?.map(list => (
            <button onClick={()=>navigate(list.path)} key={list.id}>
              { list.name}
            </button>
          ))
        }
      </div>
    </div>
   );
}
 
export default DropDown;