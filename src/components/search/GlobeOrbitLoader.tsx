const CX = 100;
const CY = 100;
const RX = 88;
const RY = 34;

// Mitad inferior (delante del globo) y mitad superior (detrás del globo) de la
// órbita elíptica, para poder dibujar la estela real detrás/delante de la esfera.
const FRONT_ARC = `M ${CX + RX} ${CY} A ${RX} ${RY} 0 0 1 ${CX - RX} ${CY}`;
const BACK_ARC = `M ${CX - RX} ${CY} A ${RX} ${RY} 0 0 1 ${CX + RX} ${CY}`;
const FULL_ORBIT = `${FRONT_ARC} A ${RX} ${RY} 0 0 1 ${CX + RX} ${CY}`;

export default function GlobeOrbitLoader({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="globeClip">
          <circle cx={CX} cy={CY} r={55} />
        </clipPath>
        <radialGradient id="globeGloss" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="45%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor="#020c2b" stopOpacity="0.25" />
        </radialGradient>
      </defs>

      {/* Estela trasera (detrás del globo) */}
      <path
        d={BACK_ARC}
        fill="none"
        stroke="#1E6FD9"
        strokeOpacity="0.25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1 7"
      />

      {/* Globo terráqueo */}
      <g clipPath="url(#globeClip)">
        <rect x={CX - 55} y={CY - 55} width={110} height={110} fill="#0B3D91" />
        <g className="globe-band">
          <GlobeContinents x={CX - 55} />
          <GlobeContinents x={CX - 55 + 110} />
        </g>
        <rect x={CX - 55} y={CY - 55} width={110} height={110} fill="url(#globeGloss)" />
      </g>
      <circle
        cx={CX}
        cy={CY}
        r={55}
        fill="none"
        stroke="#0B3D91"
        strokeOpacity="0.15"
        strokeWidth="1.5"
      />

      {/* Estela delantera (frente al globo) */}
      <path
        d={FRONT_ARC}
        fill="none"
        stroke="#F26522"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeDasharray="1 7"
        className="orbit-trail-flow"
      />

      {/* Avión orbitando */}
      <g
        className="orbit-plane"
        style={{
          offsetPath: `path("${FULL_ORBIT}")`,
          offsetDistance: "25%",
        }}
      >
        <Plane />
      </g>
    </svg>
  );
}

function GlobeContinents({ x }: { x: number }) {
  return (
    <g transform={`translate(${x} 45)`} fill="#5B9BF2">
      <path d="M14 18c5-4 12-3 15 1 3 3 1 7-3 8-4 1-9-1-12-3-3-2-3-4 0-6Z" />
      <path d="M40 8c6-2 14 1 16 6 2 4-2 8-8 8-5 0-11-2-13-6-2-3-1-6 5-8Z" />
      <path d="M28 40c4-2 10-1 12 2 2 3 0 6-4 7-4 1-9 0-11-3-1-2 0-4 3-6Z" />
      <path d="M62 30c5-3 12-1 14 3 2 4-1 7-6 8-4 1-9-1-11-4-1-3 0-5 3-7Z" />
      <path d="M75 55c4-2 9-1 11 2 1 2-1 5-4 6-3 1-7 0-9-2-1-2-1-4 2-6Z" />
      <path d="M8 60c3-2 8-1 9 2 1 2-1 4-3 5-3 1-6 0-7-2-1-1 0-3 1-5Z" />
    </g>
  );
}

function Plane() {
  // Avión de papel apuntando hacia +x (derecha); offset-rotate:auto lo orienta
  // automáticamente según la tangente de la trayectoria (nariz hacia adelante).
  return (
    <g transform="translate(-9 -9)">
      <path d="M18 9 2 2.5 8.2 9 2 15.5 18 9Z" fill="#F26522" />
      <path d="M18 9 8.2 9 2 15.5 18 9Z" fill="#c94d13" fillOpacity="0.35" />
    </g>
  );
}
