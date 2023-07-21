interface TopLeftCornerProps {
  height: number;
  width: number
  thickness?: number;
}

const TopLeftCorner = ({ height, width, thickness=20 }: TopLeftCornerProps) => {
  return (
    <svg 
      className='absolute top-0 left-0'
      width={width}
      height={height}
    >
      <defs>
        <linearGradient 
          id="grad1" 
          x1="0%" 
          y1="0%" 
          x2="100%" 
          y2="100%">
          <stop offset="0" className="gradient1" />
          <stop offset=".5" className="gradient2" />
          <stop offset="1" className="gradient1" />
        </linearGradient>
      </defs>
      <path 
        fill="url('#grad1')" d={`M8 0h${width - 8}l-20 ${thickness}H${thickness + 5}a5 5 0 0 0-5 5v${height - 45}L0 ${width}V8a8 8 0 0 1 8-8Z`} 
      />
    </svg>
  );
};

export default TopLeftCorner;  
