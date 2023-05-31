import { useState } from 'react'
import { GrMailOption } from 'react-icons/gr'
import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import { AiFillLock } from 'react-icons/ai'
import { AiFillUnlock } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'

interface Props {
  placeholder: string;
  type: string;
  name: string;
  value: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const TextInput = ({placeholder, className, type, name, value, handleInput}: Props) => {

  const [hidePassword, setHidePassword] = useState({
    type: type,
    showPassword: false
  })

  const togglePassword =()=> {
    setHidePassword(prevPassword => ({...prevPassword, showPassword: !hidePassword.showPassword}))
  }

  return ( 
    <div className={`text-input ${className}`}>
      { hidePassword.type === "password" ? 
        <span>
          { hidePassword.showPassword ?
            <AiFillUnlock className='icon'/> :
            <AiFillLock className='icon'/>
          }
        </span> : 
        null 
      }
      <input 
        type={
          (hidePassword.type === 'password')
          ? (hidePassword.showPassword ? 'text' : hidePassword.type)
          : hidePassword.type
        }
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleInput}
      />
      { hidePassword.type === "email" ? <GrMailOption className='icon'/> : null }
      <span onClick={togglePassword} className="input__btn">
        { hidePassword.type === "password" ?
            <span>
              {
                hidePassword.showPassword ? 
                <AiOutlineEye className='icon' /> : 
                <AiOutlineEyeInvisible className='icon' />
              }
            </span> 
          : 
            ''
        }
      </span>
      {hidePassword.type === 'text' ? <FaUserAlt /> : null}
    </div>
   );
}
 
export default TextInput;