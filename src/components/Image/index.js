import classNames from 'classnames';
import { forwardRef, useState } from 'react';

import images from '~/assets/images';
import styles from './Image.module.scss';

function Image(
  { src, alt, className, fallback: customFallback = images.noImage, ...props },
  ref,
) {
  const [fallback, setFallback] = useState('');

  const handleError = () => {
    setFallback(customFallback);
  };

  return (
    <img
      src={fallback || src}
      alt={alt}
      className={classNames(styles.wrapper, className)}
      ref={ref}
      {...props}
      onError={handleError}
    />
  );
}

export default forwardRef(Image);
