import Header from './components/header';

export default function Home() {
  return (
    <div className="bg-white">
      <main className="flex h-1/5 flex-col items-center justify-between">
        <Header /> 
      </main>
    </div> 
  );
}