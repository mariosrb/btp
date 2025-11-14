import React from 'react';

const SectionHeader = ({
  badge,
  badgeClassName = '',
  title,
  highlight,
  description,
  align = 'center',
  className = '',
  titleClassName = '',
  highlightClassName = '',
  descriptionClassName = '',
}) => {
  const alignmentClass =
    align === 'left'
      ? 'text-left items-start'
      : align === 'right'
      ? 'text-right items-end'
      : 'text-center items-center';

  return (
    <div className={['flex flex-col gap-6', alignmentClass, className].join(' ')}>
      {badge && (
        <span
          className={[
            'inline-block text-sm font-bold px-3 py-1 tracking-wide',
            badgeClassName,
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {badge}
        </span>
      )}
      {(title || highlight) && (
        <h2
          className={[
            'text-4xl md:text-5xl font-black leading-tight text-slate-900',
            titleClassName,
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {title}
          {highlight && (
            <span
              className={[
                'block text-yellow-500',
                highlightClassName,
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {highlight}
            </span>
          )}
        </h2>
      )}
      {description && (
        <p
          className={[
            'text-xl text-slate-600 max-w-3xl',
            descriptionClassName,
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
