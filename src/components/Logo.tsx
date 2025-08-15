export default function Logo({ className = "w-48 h-12" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 192 48" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Naranja estilizada */}
      <circle cx="24" cy="28" r="18" fill="#FF6B35" stroke="#000" strokeWidth="1"/>
      
      {/* Gajo cortado triangular */}
      <path 
        d="M24 10 L36 24 L24 38 L12 24 Z" 
        fill="#FF6B35" 
        stroke="#000" 
        strokeWidth="1"
      />
      
      {/* Hojas verdes */}
      <ellipse cx="20" cy="12" rx="4" ry="6" fill="#2D5016" transform="rotate(-15 20 12)"/>
      <ellipse cx="28" cy="10" rx="3" ry="5" fill="#2D5016" transform="rotate(15 28 10)"/>
      
      {/* Texto "LaNaranja" en naranja */}
      <text x="50" y="32" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#FF6B35">
        LaNaranja
      </text>
      
      {/* Texto "Digna" en verde */}
      <text x="140" y="32" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#2D5016">
        Digna
      </text>
    </svg>
  )
} 