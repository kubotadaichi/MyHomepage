

  interface TopProps {
    bgColor: string;
    textColor: string;
}

const Top: React.FC<TopProps> = ({ bgColor, textColor }) => {

  console.log("Top bgColor: " + bgColor);
  console.log("Top textColor: " + textColor);

  return (
    <div className="grid grid-cols-2 place-content-center gap-1 h-dvh m-0" style={{ backgroundColor: bgColor }}>

      <div className="section-container top-0 left-0 right-0  z-50">
        <p className='text-9xl font-mono select-none' style={{ color : textColor }}>Hello</p>
      </div>
      <div className="section-container top-0 left-0 right-0 z-50" style={{ backgroundColor: textColor }}>
        <p className='text-9xl font-mono select-none' style={{ color : bgColor }}>World</p>
      </div>
    </div>
  )
}

export default Top;