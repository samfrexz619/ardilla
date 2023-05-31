import { useState } from "react";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

const Signin = () => {
  const [errMsg, setErrMsg] = useState('')

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

  const handleSubmit =(e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault()
    const {password, email, text} = input
    if(text.trim() === '' || email.trim() === '' || password.trim() === ''){
      setErrMsg('All fields are required')
      return;
    } else if(!email.trim().match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      setErrMsg('Kindly enter a valid email address')
      return;
    }
    else if (!password.trim().match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)){
      setErrMsg('Password should be at least 6 characters long and contain number,and both forms of letter');
      return
    }
    window.alert(`Welcome ${text}! Your email is: ${email} and password is: ${password}`)
    // console.log(password, email, text)
    setInput({
      text: '',
      password: '',
      email: ''
    })
    setErrMsg('')
  }

  return ( 
    <main className="form">
        {errMsg && <span className="form__err">{ errMsg }</span>}
      <form onSubmit={handleSubmit}>
        <div className="form__field">
          <p>Name:</p>
          <TextInput
            placeholder="name"
            type="text"
            name="text"
            value={input.text}
            handleInput={handleInput}
            className="input"
          />
        </div>
        <div className="form__field">
          <p>Email:</p>
          <TextInput
            placeholder="Email"
            type="email"
            name="email"
            value={input.email}
            handleInput={handleInput}
            className="input"
          />
        </div>
        <div className="form__field">
          <p>Password:</p>
          <TextInput
            placeholder="Password"
            type="password"
            name="password"
            value={input.password}
            handleInput={handleInput}
            className="input"
          />
        </div>
        <span>
          <Button className="form__btn">
            <span>Send</span>
          </Button>
        </span>
      </form>
    </main>
   );
}
 
export default Signin;