/* eslint-disable no-eval */
import React from 'react';
import { render } from 'react-dom';

import { RevealJS, Slide, Code, Link, Note } from '../src';

import RevealHighlight from '../plugins/highlight.esm';
import RevealNotes from '../plugins/notes.esm';
import RevealMath from '../plugins/math.esm';
import RevealSearch from '../plugins/search.esm';
import RevealZoom from '../plugins/zoom.esm';

import './theme.css';
import './monokai.css';

render(
  <RevealJS
    plugins={[
      RevealHighlight,
      RevealNotes,
      RevealMath,
      RevealSearch,
      RevealZoom,
    ]}
  >
    <Slide backgroundColor="aquamarine">
      <h1>Slide 1</h1>
      <Link slide="3">Go to Slide 3</Link>
    </Slide>
    <Slide autoAnimate>
      <Code lineNumbers id="planet-code">
        {{
          code: `
            let planets = [
              { name: 'mars', diameter: 6779 },
            ]
          `,
        }}
      </Code>

      <Note>This is some sick code.</Note>
    </Slide>
    <Slide autoAnimate>
      <Code lineNumbers id="planet-code">
        {{
          code: `
            let planets = [
              { name: 'mars', diameter: 6779 },
              { name: 'earth', diameter: 12742 },
              { name: 'jupiter', diameter: 139820 }
            ]
          `,
        }}
      </Code>
    </Slide>
    <Slide uncounted>
      <h1>Important Equation</h1>
      \[ E=mc^2 \]
    </Slide>
  </RevealJS>,
  document.querySelector('.reveal'),
);
