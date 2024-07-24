import NavBar from './NavBar';
import Logo from './logo'; 

export default function header() {
  return (
    <main className="flex h-1/5 flex-col items-center justify-between p-10">
      <Logo />
      <div className="my-4">  
        <NavBar />
      </div>
    </main>
  );
}