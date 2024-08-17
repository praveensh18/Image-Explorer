import { useEffect, useState } from 'react';

export function useMouseCoordinates(defaultValues) {
  const [mouseCoordinate, setMouseCoordinate] = useState(defaultValues || { x: null, y: null });

  useEffect(() => {
    window.addEventListener('mousemove', (event) => {
      setMouseCoordinate({ x: event.x, y: event.y });
    });
  }, []);

  return mouseCoordinate;
}
