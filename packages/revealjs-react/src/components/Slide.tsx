import React from 'react';
import { Transitions, TransitionSpeed } from '../types';

export interface SlideProps {
  autoslide?: true;
  autoAnimate?: true;
  autoAnimateUnmatched?: boolean;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
  backgroundOpacity?: string;
  backgroundVideo?: string;
  backgroundVideoLoop?: true;
  backgroundVideoMuted?: true;
  backgroundIframe?: string;
  backgroundInteractive?: true;
  children: React.ReactNode;
  id?: string;
  transition?: Transitions;
  transitionSpeed?: TransitionSpeed;
  timing?: number;
  visibility?: 'uncounted' | 'hidden';
}

function Slide({
  autoslide,
  autoAnimate,
  autoAnimateUnmatched,
  backgroundColor,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  backgroundOpacity,
  backgroundVideo,
  backgroundVideoLoop,
  backgroundVideoMuted,
  backgroundIframe,
  backgroundInteractive,
  children,
  id,
  transition,
  transitionSpeed,
  visibility,
  timing,
}: SlideProps) {
  return (
    <section
      data-autoslide={autoslide}
      id={id}
      data-auto-animate={autoAnimate}
      data-auto-animate-unmatched={autoAnimateUnmatched}
      data-visibility={visibility}
      data-background-color={backgroundColor}
      data-background-image={backgroundImage}
      data-background-size={backgroundSize}
      data-background-position={backgroundPosition}
      data-background-repeat={backgroundRepeat}
      data-background-opacity={backgroundOpacity}
      data-background-video={backgroundVideo}
      data-background-video-loop={backgroundVideoLoop}
      data-background-video-muted={backgroundVideoMuted}
      data-background-iframe={backgroundIframe}
      data-background-interactive={backgroundInteractive}
      data-transition={transition}
      data-transition-speed={transitionSpeed}
      data-timing={timing}
    >
      {children}
    </section>
  );
}

export default Slide;
