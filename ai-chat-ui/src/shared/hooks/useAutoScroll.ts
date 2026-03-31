import { useEffect, useRef } from 'react';

export const useAutoScroll = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);

  const scrollToBottom = () => {
    if (!ref.current) return;
    ref.current.scrollTop = ref.current.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  });

  return { ref, scrollToBottom };
};