import React from 'react';

const VARIANT_STYLES = {
  primary:
    'bg-yellow-500 text-slate-900 hover:bg-yellow-400 border border-yellow-500',
  secondary:
    'bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900',
  outline:
    'bg-transparent border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white',
};

const CTAButton = ({
  as: Component = 'button',
  variant = 'primary',
  className = '',
  children,
  ...props
}) => {
  const variantClasses = VARIANT_STYLES[variant] ?? VARIANT_STYLES.primary;
  const composedClassName = [
    'inline-flex items-center justify-center font-bold transition-all duration-300 px-8 py-4',
    variantClasses,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={composedClassName} {...props}>
      {children}
    </Component>
  );
};

export default CTAButton;

