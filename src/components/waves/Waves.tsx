import React from 'react'
import './style.css'
interface WavesProps {
  readonly customStyle?: React.CSSProperties;
  readonly bg?: string;
  readonly showSecondWave?: boolean;
}
export default function Waves({ customStyle, bg, showSecondWave }: WavesProps) {
  return (
    <div className="waves_container" style={customStyle}>
    <div>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="waves"
        preserveAspectRatio="none"
        viewBox="0 24 150 28"
        >
        <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z" ></path>
        </defs>
        <g className="parallax">
           {showSecondWave && <use x="48" y="3" fill={"rgb(220, 237, 235)"} xlinkHref="#gentle-wave" ></use> }
            <use x="48" y="6" fill={bg ?? "rgb(220, 237, 235)"} xlinkHref="#gentle-wave" ></use> 
        </g>
        </svg>
    </div>
</div>
  )
}