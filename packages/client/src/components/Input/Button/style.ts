/* eslint-disable quote-props */
import {css} from '@emotion/react';

export default css({
  margin: '20px 10%',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  padding: '1em 2em',
  width: '100px',
  color: '#6a5050',
  fontSize: '10px',
  border: 'solid 1px #6a5050',
  fontWeight: '700',
  backgroundColor: '#fefff1',
  transition: '0.8s',
  '&:hover': {
    textDecoration: 'none',
    color: '#fefff1',
    backgroundColor: '#6a5050',
    border: 'solid 1px #6a5050',
  },
});
