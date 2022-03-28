import { useEffect, useState } from 'react';

type IgnoreType = () => any

export function useDragAndDrop(onDrop: (files:File[])=>void) {
  const [dragging, setDragging] = useState(false);

  function handleDragLeave() {
    setDragging(false);
  }

  function handleDragOver(e:DragEvent):void {
    if (!dragging) {
      setDragging(true);
    }
    e.preventDefault();
    e.stopPropagation();
  }

  function handleDrop(e:DragEvent):void {
    setDragging(false);
    const files = Array.from(e!.dataTransfer!.files!);
    onDrop(files);
    e.preventDefault();
    e.stopPropagation();
  }

  useEffect(() => {
    window.addEventListener('dragleave', handleDragLeave);
    window.addEventListener('drop', handleDrop as IgnoreType);
    window.addEventListener('dragover', handleDragOver as IgnoreType);
    return () => {
      window.removeEventListener('dragover', handleDragLeave);
      window.removeEventListener('drop', handleDrop as IgnoreType);
      window.removeEventListener('dragover', handleDragOver as IgnoreType);
    };
  });

  return { dragging };
}
