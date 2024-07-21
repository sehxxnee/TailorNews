import Header from './components/header/header';
import GridLayout from './components/grid/GridLayout';

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Header /> 
      <main className="p-4 flex flex-col items-center">
        <GridLayout />
      </main>
    </div>
  );
}