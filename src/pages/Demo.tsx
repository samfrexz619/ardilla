import { useState } from "react";
import Button from "../components/Button";
import DropDown from "../components/Dropdown";
import { uid } from "uid";
import TextInput from "../components/TextInput";



export interface List {
  name: string;
  id: string;
  path: string;
}
const Demo = () => {
  const [input, setInput] = useState({
    password: '',
    email: '',
    text: ''
  })

  const handleInput =(e: React.ChangeEvent<HTMLInputElement>)=> {
    const name = (e.target as HTMLInputElement).name
    const value = (e.target as HTMLInputElement).value
    setInput(prevInput => ({...prevInput, [name]: value}))
  }

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
      <div>
        <TextInput
          placeholder="enter first name"
          type="text"
          name="text"
          value={input.text}
          handleInput={handleInput}
        />
      </div>
    </main>
   );
}
 
export default Demo;