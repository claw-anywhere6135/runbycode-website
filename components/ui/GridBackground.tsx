interface GridBackgroundProps {
  variant?: 'grid' | 'dots' | 'cross';
  glowColor?: string;
  arc?: boolean;
  className?: string;
}

export default function GridBackground({
  variant = 'grid',
  glowColor = 'rgba(59,130,246,0.12)',
  arc = false,
  className = '',
}: GridBackgroundProps) {
  const gridPattern =
    variant === 'dots'
      ? `radial-gradient(${glowColor} 1.5px, transparent 1.5px)`
      : variant === 'cross'
      ? `radial-gradient(circle, ${glowColor} 1px, transparent 1px),
         linear-gradient(${glowColor} 1px, transparent 1px),
         linear-gradient(90deg, ${glowColor} 1px, transparent 1px)`
      : `linear-gradient(${glowColor} 1px, transparent 1px),
         linear-gradient(90deg, ${glowColor} 1px, transparent 1px)`;

  const bgSize =
    variant === 'dots' ? '28px 28px' : variant === 'cross' ? '28px 28px, 56px 56px, 56px 56px' : '56px 56px';

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 z-0 pointer-events-none overflow-hidden ${className}`}
    >
      {/* Grid pattern with radial fade */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: gridPattern,
          backgroundSize: bgSize,
          maskImage:
            'radial-gradient(ellipse 85% 70% at 50% 40%, black 30%, transparent 80%), linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 85% 70% at 50% 40%, black 30%, transparent 80%), linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
          maskComposite: 'intersect',
          WebkitMaskComposite: 'source-in',
        }}
      />

      {/* Decorative arc SVG — optional */}
      {arc && (
        <svg
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full opacity-[0.07]"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle
            cx="400"
            cy="400"
            r="320"
            stroke="url(#arcGrad)"
            strokeWidth="1"
            strokeDasharray="12 8"
          />
          <circle
            cx="400"
            cy="400"
            r="240"
            stroke="url(#arcGrad)"
            strokeWidth="0.5"
          />
          <path
            d="M 80 400 Q 400 60 720 400"
            stroke="url(#arcGrad)"
            strokeWidth="0.75"
            fill="none"
          />
          <defs>
            <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="40%" stopColor="#3b82f6" stopOpacity="1" />
              <stop offset="60%" stopColor="#3b82f6" stopOpacity="1" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      )}

      {/* Side glow lines */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: '10%',
          height: '80%',
          width: '1px',
          background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,0.35), transparent)',
          filter: 'blur(1px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: '10%',
          height: '80%',
          width: '1px',
          background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,0.35), transparent)',
          filter: 'blur(1px)',
        }}
      />
    </div>
  );
}
