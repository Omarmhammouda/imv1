/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface DripDividerProps {
  fillColor: string; // The color of the actual dripping curve background
  backgroundColor?: string; // The parent background color to blend with
  reversed?: boolean; // If true, the drip faces upward or flips
  id?: string;
}

export default function DripDivider({ fillColor, backgroundColor = 'transparent', reversed = false, id }: DripDividerProps) {
  return (
    <div id={id || "drip-divider"} className="relative w-full overflow-hidden leading-none z-10" style={{ backgroundColor }}>
      <svg
        className={`relative block w-full h-[60px] md:h-[90px] ${reversed ? 'rotate-180' : ''}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Organic-looking, smooth dripping wave path */}
        <path
          d="M0,0 Q100,50 200,30 T400,60 T600,90 T800,45 T1000,75 T1200,10 L1200,120 L0,120 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
