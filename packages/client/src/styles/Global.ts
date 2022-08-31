import {css} from '@emotion/react';
export default css({
  'a': {
    textDecoration: 'none',
    fontSize: '16px',
    color: '#fff',
  },
  'body': {
    margin: 0,
    backgroundColor: '#FEFFF1',
    fontFamily: 'Kaushan Script, cursive, Kiwi Maru, serif',
  },
  'h2': {
    margin: '50px 0 10px',
    fontSize: '16px',
    textAlign: 'center',
  },
  'h3': {
    fontSize: '15px',
    fontWeight: 'lighter',
    fontFamily: 'Kiwi Maru, serif',
  },
  'h4': {
    fontSize: '30px',
    fontWeight: 'bolder',
    fontFamily: 'Kiwi Maru, serif',
  },
  'html': {
    'WebkitFontSmoothing': 'antialiased',
    'MozOsxFontSmoothing': 'grayscale',
  },
  'input[type=checkbox]': {
    display: 'none',
  },
  'input[type=checkbox]:checked + .checkGenre::after': {
    opacity: 1,
  },
  'input[type=radio]:checked + .colorGenre::after': {
    opacity: 1,
  },
  'input[type=radio]': {
    display: 'none',
  },
});
