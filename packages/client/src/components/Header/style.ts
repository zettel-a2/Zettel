/* eslint-disable quote-props */
import {css} from '@emotion/react';

export default {
  siteHeader: css({
    position: 'relative',
    height: '60px',
    backgroundColor: '#6A5050',
    boxShadow: '0 10px 15px 0 rgba(112, 77, 56, 0.5)',
  }),
  wrapper: css({
    maxWidth: '1140px',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    marginLeft: 'auto',
    marginRight: 'auto',
  }),
  siteHeaderWrapper: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    '@media (min-width: 660px)': {
      paddingTop: 0,
      paddingBottom: 0,
    },
  }),
  brand: css({
    fontWeight: 'bold',
    fontFamily: 'Kaushan Script, cursive',
    letterSpacing: '1px',
    fontSize: '24px',
  }),
  icon: css({
    width: '28px',
    verticalAlign: 'bottom',
  }),
  brandIcon: css({
    fontWeight: 'bold',
    fontFamily: 'Kaushan Script, cursive',
    letterSpacing: '1px',
    fontSize: '24px',
  }),
  siteHeaderEnd: css({
    fontFamily: 'sans-serif',
    '@media (max-width: 659px)': {
      paddingRight: '4rem',
    },
  }),
  navWrapper: css({
    '@media (min-width: 660px)': {
      display: 'flex',
      listStyle: 'none',
    },
    '@media (max-width: 659px)': {
      position: 'absolute',
      top: '100%',
      right: 0,
      left: 0,
      zIndex: -1,
      backgroundColor: '#d9f0f7',
      visibility: 'hidden',
      opacity: 0,
      transform: 'translateY(-100%)',
      transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
    },
  }),
  navItemA: css({
    display: 'block',
    fontSize: '18px',
    fontFamily: 'Kiwi Maru, serif',
    padding: '0 5rem',
    letterSpacing: '2px',
  }),
  navToggle: css({
    display: 'none',
    '@media (max-width: 659px)': {
      display: 'block',
      position: 'absolute',
      right: '1rem',
      top: '1rem',
    },
  }),
};
