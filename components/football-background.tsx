"use client"

export function FootballBackground() {
  return (
    <div className="fixed inset-0 z-0 opacity-5 dark:opacity-3 pointer-events-none">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 800"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Football Field Lines */}
        <defs>
          <pattern id="fieldPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#fieldPattern)" />

        {/* Center Circle */}
        <circle cx="600" cy="400" r="80" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" />
        <circle cx="600" cy="400" r="3" fill="currentColor" opacity="0.6" />

        {/* Penalty Areas */}
        <rect x="50" y="280" width="120" height="240" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" />
        <rect
          x="1030"
          y="280"
          width="120"
          height="240"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.4"
        />

        {/* Goal Areas */}
        <rect x="50" y="340" width="60" height="120" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" />
        <rect
          x="1090"
          y="340"
          width="60"
          height="120"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.4"
        />

        {/* Tactical Formation - 4-3-3 */}
        {/* Goalkeeper */}
        <circle cx="100" cy="400" r="8" fill="currentColor" opacity="0.6" />
        <text x="100" y="405" textAnchor="middle" className="text-xs font-bold" fill="currentColor" opacity="0.8">
          GK
        </text>

        {/* Defense */}
        <circle cx="250" cy="300" r="8" fill="currentColor" opacity="0.6" />
        <text x="250" y="305" textAnchor="middle" className="text-xs font-bold" fill="currentColor" opacity="0.8">
          CB
        </text>
        <circle cx="250" cy="380" r="8" fill="currentColor" opacity="0.6" />
        <text x="250" y="385" textAnchor="middle" className="text-xs font-bold" fill="currentColor" opacity="0.8">
          CB
        </text>
        <circle cx="250" cy="460" r="8" fill="currentColor" opacity="0.6" />
        <text x="250" y="465" textAnchor="middle" className="text-xs font-bold" fill="currentColor" opacity="0.8">
          LB
        </text>
        <circle cx="250" cy="520" r="8" fill="currentColor" opacity="0.6" />
        <text x="250" y="525" textAnchor="middle" className="text-xs font-bold" fill="currentColor" opacity="0.8">
          RB
        </text>

        {/* Midfield */}
        <circle cx="400" cy="320" r="8" fill="currentColor" opacity="0.6" />
        <text x="400" y="325" textAnchor="middle" className="text-xs font-bold" fill="currentColor" opacity="0.8">
          CM
        </text>
        <circle cx="400" cy="400" r="8" fill="currentColor" opacity="0.6" />
        <text x="400" y="405" textAnchor="middle" className="text-xs font-bold" fill="currentColor" opacity="0.8">
          CM
        </text>
        <circle cx="400" cy="480" r="8" fill="currentColor" opacity="0.6" />
        <text x="400" y="485" textAnchor="middle" className="text-xs font-bold" fill="currentColor" opacity="0.8">
          CM
        </text>

        {/* Attack */}
        <circle cx="550" cy="280" r="8" fill="currentColor" opacity="0.6" />
        <text x="550" y="285" textAnchor="middle" className="text-xs font-bold" fill="currentColor" opacity="0.8">
          LW
        </text>
        <circle cx="550" cy="400" r="8" fill="currentColor" opacity="0.6" />
        <text x="550" y="405" textAnchor="middle" className="text-xs font-bold" fill="currentColor" opacity="0.8">
          ST
        </text>
        <circle cx="550" cy="520" r="8" fill="currentColor" opacity="0.6" />
        <text x="550" y="525" textAnchor="middle" className="text-xs font-bold" fill="currentColor" opacity="0.8">
          RW
        </text>

        {/* Tactical Arrows */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" opacity="0.5" />
          </marker>
        </defs>

        {/* Attack arrows */}
        <line
          x1="250"
          y1="300"
          x2="350"
          y2="280"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.4"
          markerEnd="url(#arrowhead)"
        />
        <line
          x1="400"
          y1="400"
          x2="500"
          y2="380"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.4"
          markerEnd="url(#arrowhead)"
        />
        <line
          x1="250"
          y1="520"
          x2="350"
          y2="500"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.4"
          markerEnd="url(#arrowhead)"
        />

        {/* Passing arrows */}
        <line
          x1="400"
          y1="320"
          x2="520"
          y2="290"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.3"
          markerEnd="url(#arrowhead)"
          strokeDasharray="5,5"
        />
        <line
          x1="400"
          y1="480"
          x2="520"
          y2="510"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.3"
          markerEnd="url(#arrowhead)"
          strokeDasharray="5,5"
        />

        {/* X marks for defensive positions */}
        <g opacity="0.4">
          <line x1="700" y1="350" x2="710" y2="360" stroke="currentColor" strokeWidth="3" />
          <line x1="710" y1="350" x2="700" y2="360" stroke="currentColor" strokeWidth="3" />
        </g>
        <g opacity="0.4">
          <line x1="750" y1="420" x2="760" y2="430" stroke="currentColor" strokeWidth="3" />
          <line x1="760" y1="420" x2="750" y2="430" stroke="currentColor" strokeWidth="3" />
        </g>
        <g opacity="0.4">
          <line x1="800" y1="300" x2="810" y2="310" stroke="currentColor" strokeWidth="3" />
          <line x1="810" y1="300" x2="800" y2="310" stroke="currentColor" strokeWidth="3" />
        </g>

        {/* Additional tactical elements */}
        <circle cx="320" cy="200" r="4" fill="currentColor" opacity="0.3" />
        <circle cx="480" cy="150" r="4" fill="currentColor" opacity="0.3" />
        <circle cx="680" cy="180" r="4" fill="currentColor" opacity="0.3" />
        <circle cx="320" cy="600" r="4" fill="currentColor" opacity="0.3" />
        <circle cx="480" cy="650" r="4" fill="currentColor" opacity="0.3" />
        <circle cx="680" cy="620" r="4" fill="currentColor" opacity="0.3" />

        {/* Movement patterns */}
        <path
          d="M 150 200 Q 200 150 280 180"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.3"
          strokeDasharray="3,3"
        />
        <path
          d="M 150 600 Q 200 650 280 620"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.3"
          strokeDasharray="3,3"
        />
        <path
          d="M 900 300 Q 950 250 1000 280"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.3"
          strokeDasharray="3,3"
        />
        <path
          d="M 900 500 Q 950 550 1000 520"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.3"
          strokeDasharray="3,3"
        />
      </svg>
    </div>
  )
}
