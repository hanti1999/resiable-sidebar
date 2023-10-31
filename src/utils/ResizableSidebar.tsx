import { useState, useEffect, useRef, useCallback } from 'react';
import '../styles/resizeableSidebar.css';

interface SizeBarProps {
  mainContent: React.ReactNode;
  sizebarContent: React.ReactNode;
}

const SizeBar: React.FC<SizeBarProps> = ({ mainContent, sizebarContent }) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(268);

  const startResizing = useCallback((mouseDownEvent: MouseEvent) => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (mouseMoveEvent: MouseEvent) => {
      if (isResizing && sidebarRef.current) {
        setSidebarWidth(
          mouseMoveEvent.clientX -
            sidebarRef.current.getBoundingClientRect().left
        );
      }
    },
    [isResizing]
  );

  useEffect(() => {
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResizing);
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <div className='app-container'>
      <div
        ref={sidebarRef}
        className='app-sidebar'
        style={{ width: sidebarWidth }}
        onMouseDown={(e) => e.preventDefault()}
      >
        <div className='app-sidebar-content'>{sizebarContent}</div>
        <div className='app-sidebar-resizer' onMouseDown={startResizing} />
      </div>
      <div className='app-frame'>{mainContent}</div>
    </div>
  );
};

export default SizeBar;