import Button from "../components/Button";
import DropDown from "../components/Dropdown";
import { uid } from "uid";

export interface List {
  name: string;
  id: string;
  path: string;
}
const Demo = () => {
  const dropdownList: List[] = [
    {
      name: 'link 1',
      id: uid(4),
      path: '/'
    },
    {
      name: 'link 2',
      id: uid(4),
      path: '/'
    },
    {
      name: 'link 3',
      id: uid(4),
      path: '/demo'
    },
  ]
  return ( 
    <main>
      <h1>demo page</h1>
      <div>
        <DropDown title='demo' dropdownLists={dropdownList} />
      </div>
      <div>
        <Button className="demo__btn">
          <span>demo</span>
        </Button>
      </div>
    </main>
   );
}
 
export default Demo;