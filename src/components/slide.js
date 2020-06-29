import React from 'react';

function Slide({
  autoslide = undefined,
  autoAnimate = undefined,
  backgroundColor = undefined,
  backgroundImage = undefined,
  backgroundSize = undefined,
  backgroundPosition = undefined,
  backgroundRepeat = undefined,
  backgroundOpacity = undefined,
  backgroundVideo = undefined,
  backgroundVideoLoop = undefined,
  backgroundVideoMuted = undefined,
  backgroundIframe = undefined,
  backgroundInteractive = undefined,
  children,
  id = undefined,
  transition = undefined,
  transitionSpeed = undefined,
  uncounted = undefined,
}) {
  return (
    <section
      data-autoslide={autoslide}
      id={id}
      data-auto-animate={autoAnimate}
      data-visibility={uncounted ? 'uncounted' : undefined}
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
    >
      {children}
    </section>
  );
}

export default Slide;
