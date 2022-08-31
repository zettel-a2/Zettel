/* eslint-disable quote-props */
import {css} from '@emotion/react';

export default {
  checkGenre: css({
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'inline-block',
    padding: '5px 25px',
    position: 'relative',
    width: 'auto',
    // before
    '&:before': {
      background: '#fff',
      border: '1px solid #231815',
      content: '""',
      display: 'block',
      height: '16px',
      left: '5px',
      marginTop: '-8px',
      position: 'absolute',
      top: '50%',
      width: '16px',
    },
    // after
    '&:after': {
      borderRight: '3px solid #ed7a9c',
      borderBottom: '3px solid #ed7a9c',
      content: '""',
      display: 'block',
      height: '9px',
      left: '10px',
      marginTop: '-6px',
      opacity: 0,
      position: 'absolute',
      top: '50%',
      transform: 'rotate(45deg)',
      width: '5px',
    },
  }),
};
