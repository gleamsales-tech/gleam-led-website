interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  caption?: string;
  align?: 'center' | 'left' | 'right';
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  caption,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignClasses = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right',
  };

  return (
    <div className={`mb-12 md:mb-16 ${alignClasses[align]} ${className}`}>
      {caption && (
        <p className="text-sm text-sky-600 uppercase tracking-wider font-medium mb-3">
          {caption}
        </p>
      )}
      <h2 className="font-manrope text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg text-slate-600 leading-relaxed ${align === 'center' ? 'max-w-2xl mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
