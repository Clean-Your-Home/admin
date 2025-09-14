export const Chart = ({ data }: { type: string; data: number[] }) => {
  const max = Math.max(...data)

  return (
    <div className='w-full h-[200px] flex items-end gap-1'>
      {data.map((value, index) => (
        <div
          key={index}
          className='flex-1 bg-primary/90 rounded-t-sm'
          style={{
            height: `${(value / max) * 100}%`,
            opacity: 0.5 + index / (data.length * 2)
          }}
        >
          <div className='sr-only'>{value}</div>
        </div>
      ))}
    </div>
  )
}
