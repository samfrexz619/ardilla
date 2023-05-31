

interface BtnProp {
  children: React.ReactElement;
  className: string;
}

const Button = ({children, className}: BtnProp) => {
  return ( 
    <button className={`${className} btn`}>
      <span>{children}</span>
    </button>
   );
}
 
export default Button;