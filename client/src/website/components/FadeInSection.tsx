import { useEffect, useState, useRef } from 'react'
import { css } from 'twin.macro'


const FadeInSection = (props: any) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<any>();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });
    observer.observe(domRef.current);
  }, []);

  const fadeIn = css`  
  opacity: 0;
  transform: translateY(20vh);
  visibility: hidden;
  transition: opacity 0.3s ease-out, transform 0.6s ease-out;
  will-change: opacity, visibility;`

  const fadeInIsVisible = css`
    opacity: 1;
  transform: none;
  visibility: visible;
`

  const fullyFadeIn = [
    fadeIn,
    isVisible && fadeInIsVisible
  ]


  return (
    <div
      css={fullyFadeIn}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default FadeInSection;