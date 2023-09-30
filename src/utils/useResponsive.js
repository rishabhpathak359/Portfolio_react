import { useState,useEffect } from "react";
const useResponsive = () => {
  const [width, setWidth] = useState('');
    useEffect(() => {
        const handleResize = () => {
          if (window.outerWidth >= 700) {
            setWidth('max');
          } else {
            setWidth('minimum');
          }
        };
    
        window.addEventListener('resize', handleResize);
        handleResize();
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
  return (
    width
  )
}

export default useResponsive