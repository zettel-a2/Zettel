/* eslint-disable quote-props */
import {css} from '@emotion/react';

export default {
  mainTitle: css({
    color: '#6A5050',
    margin: '60px auto',
    textAlign: 'center',
    width: '60%',
  }),
  genre: css({
    float: 'left',
    marginLeft: '2%',
  }),
  accountInput: css({
    display: 'block',
    marginLeft: '5%',
  }),
  accountMenu: css({
    width: ' 70%',
    display: 'block',
    margin: '2em auto',
    listStyle: 'none',
  }),
  search: css({
    width: '100%',
    height: 'auto',
    padding: '1.5em 1em 2.5em',
    margin: '2em auto',
    color: '#6a5050',
    border: 'dashed 2px #573333b3', /* 点線*/
    background: 'rgb(255, 255, 255)',
    /* box-shadow: 0 2px 5px rgba(81, 51, 30, 0.689); */
    textAlign: 'center',
  }),
};
