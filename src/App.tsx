import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import ResizableSidebar from './utils/ResizableSidebar';

function App() {
  return (
    <>
      <div className='container mx-auto'>
        <ResizableSidebar mainContent={<Home />} sizebarContent={<Sidebar />} />
      </div>
    </>
  );
}

export default App;
