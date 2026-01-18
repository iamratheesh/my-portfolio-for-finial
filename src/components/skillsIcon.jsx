import React, { useState, useEffect } from 'react';
import { getSkillIconImg } from '../utils/getSkillIconImg'; 


const SkillIcon = ({ 
  name, 
  className = '', 
  size = 24 
}) => {
  const [iconUrl, setIconUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!name) {
      setIsLoading(false);
      setIconUrl(null);
      return;
    }

    const formattedName = name.toLowerCase().trim();

    const loadIcon = async () => {
      setIsLoading(true);
      setHasError(false);

      try {
        const url = await getSkillIconImg(formattedName);
        if (url) {
          setIconUrl(url);
        } else {
          setHasError(true);
        }
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadIcon();
  }, [name]);

  let sizeClass = '';
  if (size <= 24) sizeClass = 'small';
  else if (size <= 32) sizeClass = 'medium';
  else sizeClass = 'large';

  if (isLoading) {
    return (
      <div
        className={`skill-icon-loading ${sizeClass} ${className}`}
        data-tooltip={name}
        style={{ width: size, height: size }}
      />
    );
  }

  if (hasError || !iconUrl) {
    return (
      <div
        className={`skill-icon-fallback ${sizeClass} ${className}`}
        title={name}
        style={{
          width: size,
          height: size,
          fontSize: size / 2,
        }}
      >
        {name.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <div
      className={`skill-icon ${sizeClass} ${className}`}
      title={name}
      style={{ width: size, height: size }}
    >
      <img
        src={iconUrl}
        alt={`${name} icon`}
        width={size}
        height={size}
        onError={() => {
          setHasError(true);
          setIconUrl(null);
        }}
      />
    </div>
  );
};

export default SkillIcon;
