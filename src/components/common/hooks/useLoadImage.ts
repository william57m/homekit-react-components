import { useEffect, useState } from 'react';


type UseLoadImageProps = (url: string) => { isLoading: boolean, isLoaded: boolean };

export const useLoadImage: UseLoadImageProps = (url: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    try {
      fetch(url).then(r => {
        if(r.status == 200) {
          setIsLoaded(true);
        }
        setIsLoading(false);
      });
    } catch (e) {
      setIsLoaded(false);
      setIsLoading(false);
    }
  }, [url]);

  return { isLoading, isLoaded};
};
