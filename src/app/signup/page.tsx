import Logo from '../../components/header/logo';
import Signup from '../../components/auth/signup';

export default function login() { 

  return (
    <div className="flex h-1/5 flex-col items-center justify-between p-10 bg-white  ">
      <Logo /> 
      <Signup/>
    </div>
  );
     
}