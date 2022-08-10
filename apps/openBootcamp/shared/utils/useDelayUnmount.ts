import { useState, useEffect } from 'react';

function useDelayUnmount(isMounted: boolean, delayTime: number): boolean {
  const [showDiv, setShowDiv] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isMounted && !showDiv) setShowDiv(true);
    else if (!isMounted && showDiv) timeoutId = setTimeout(() => setShowDiv(false), delayTime); //delay our unmount

    // Cleanup mechanism for effects , the use of setTimeout generate a sideEffect
    return () => clearTimeout(timeoutId);
  }, [isMounted, delayTime, showDiv]);

  return showDiv;
}

export { useDelayUnmount };
