interface BottomRightCornerProps {
  height: number;
  width: number;
}

const BottomRightCorner = ({ height, width }: BottomRightCornerProps) => {
  return (
    <svg
      className='absolute bottom-0 right-0'
      width={width}
      height={height}
    >
      <defs>
        <linearGradient
          id="grad1"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0" className="gradient2" />
          <stop offset=".5" className="gradient1" />
          <stop offset="1" className="gradient2" />
        </linearGradient>
      </defs>
      <path
        fill="url('#grad1')"
        d={`M292 300H0l20-20h255a5 5 0 0 0 5-5V20l20-20v292a8 8 0 0 1-8 8Z`}
      />
    </svg>
  );
};

export default BottomRightCorner;
