import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  rounded = false,
  small = false,
  large = false,
  disabled = false,
  children,
  onClick,
  className,
  leftIcon,
  rightIcon,
  ...passProps
}) => {
  let Comp = 'button';
  const props = {
    onClick,
  };

  // Remove event listener when disabled class exists
  // C1:
  // if (disabled) {
  //   delete props.onClick;
  // }

  // C2:
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    text,
    rounded,
    small,
    large,
    disabled,
  });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
};

Button.prototype = {
  children: PropTypes.node,
};

export default Button;
