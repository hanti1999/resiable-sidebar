import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import ResizableSidebar from './utils/ResizableSidebar';

function App() {
  return (
    <>
      <ResizableSidebar mainContent={<Home />} sizebarContent={<Sidebar />} />
    </>
  );
}

export default App;
