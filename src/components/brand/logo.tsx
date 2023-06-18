export default function BrandLogo({ className }: { className?: string }) {
  const shadeColor = { fill: "black" };
  const lightColor = { fill: "white" };
  return (
    <svg
      className={className}
      viewBox="0 0 36 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.7317 2.23171V27.5244L0 22.3171L10.4146 15.9263L7.43902 12.6463L20.8293 0L25.2927 6.79656L32.7317 2.23171Z"
        {...lightColor}
      />
      <path
        d="M34.2195 29.0122L0 26.0366L35.7073 30.5V2.23171L34.2195 29.0122Z"
        {...lightColor}
      />
      <path
        d="M13.3902 14.1341L11.1585 11.9024L20.8292 3.71951L23.0609 7.43902L13.3902 14.1341Z"
        {...shadeColor}
      />
      <path
        d="M30.5 5.20732L6.69513 20.8293L25.2927 26.0366L10.4146 20.8293L29.0122 8.92683L31.2439 23.061L30.5 5.20732Z"
        {...shadeColor}
      />
      <circle cx="24.5488" cy="17.8537" r="8.18293" {...shadeColor} />
      <circle cx="25.2927" cy="18.5976" r="7.43902" {...lightColor} />
      <circle cx="26.0366" cy="19.3415" r="6.69512" {...shadeColor} />
      <circle cx="25.2927" cy="18.5976" r="5.95122" {...lightColor} />
      <circle
        cx="25.0008"
        cy="18.3056"
        r="4.91305"
        transform="rotate(170.462 25.0008 18.3056)"
        {...shadeColor}
      />
      <circle
        cx="25.7082"
        cy="18.8095"
        r="4.29892"
        transform="rotate(170.462 25.7082 18.8095)"
        {...lightColor}
      />
      <path
        d="M26.7805 0.743896L23.061 3.71951L25.2927 7.43902L29.7561 4.46341L26.7805 0.743896Z"
        {...lightColor}
      />
      <path
        d="M23.8049 4.46341L26.7805 2.2317L28.2683 4.46341L25.2927 5.95122L23.8049 4.46341Z"
        {...shadeColor}
      />
    </svg>
  );
}
