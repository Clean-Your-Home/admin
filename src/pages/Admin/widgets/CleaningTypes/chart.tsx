export const CircleChart = ({ percentage }: { percentage: number }) => {
  const circumference = 2 * Math.PI * 45
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className='relative w-40 h-40 mx-auto'>
      <svg className='w-full h-full' viewBox='0 0 100 100'>
        <circle
          className='text-muted stroke-current'
          strokeWidth='10'
          stroke='currentColor'
          fill='transparent'
          r='45'
          cx='50'
          cy='50'
        />
        <circle
          className='text-primary stroke-current'
          strokeWidth='10'
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap='round'
          stroke='currentColor'
          fill='transparent'
          r='45'
          cx='50'
          cy='50'
          transform='rotate(-90 50 50)'
        />
        <text
          x='50'
          y='50'
          textAnchor='middle'
          dominantBaseline='central'
          className='text-2xl font-bold fill-foreground'
        >
          {percentage}%
        </text>
      </svg>
    </div>
  )
}
