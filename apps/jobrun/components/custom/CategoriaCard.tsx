import React from 'react';
import Image from 'next/future/image';

import RemotoIconsvgIcon from '../plasmic/job_run/icons/PlasmicIcon__RemotoIconsvg';
import { useMediaQuery } from '../../shared/utils';

function CategoriaCard({ icono, fondo, label }: { icono?: string | undefined; fondo?: string; label: string | undefined }) {
  const [isHovering, setIsHovering] = React.useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isLaptop = useMediaQuery('(max-width: 1024px)');

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      style={fondo ? withFondoStyle(fondo, isMobile, isHovering) : defaultStyle(isMobile, isHovering)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icono ? (
        <Image loading='lazy' src={`data:image/svg+xml;utf8,${icono}`} alt={label} width={25} height={25} />
      ) : (
        <RemotoIconsvgIcon color="white" width="25px" height="25px" />
      )}

      <span
        style={
          isLaptop
            ? { color: 'white', fontSize: '16px', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap' }
            : isMobile
            ? { color: 'white', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap' }
            : { color: 'white', fontSize: '18px', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap' }
        }
      >
        {label}
      </span>
    </div>
  );
}

export default CategoriaCard;

const defaultStyle = (isMobile: boolean, isHovering: boolean): React.CSSProperties => ({
  cursor: 'pointer',
  display: 'flex',
  padding: '0px 30px',
  height: '60px',
  alignItems: 'center',
  gap: '20px',
  borderRadius: isMobile ? '14px' : '20px',
  overflow: 'hidden',
  backgroundImage: `url('https://res.cloudinary.com/openbootcamp/image/upload/v1658484189/JobRun/RemotoBG_cfalnc.png')`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  filter: isHovering ? 'brightness(1.25)' : '',
  transition: 'all 0.2s ease-in-out'
});

const withFondoStyle = (fondo: string, isMobile: boolean, isHovering: boolean): React.CSSProperties => ({
  cursor: 'pointer',
  display: 'flex',
  padding: '0px 30px',
  height: '60px',
  alignItems: 'center',
  gap: '20px',
  borderRadius: isMobile ? '14px' : '20px',
  overflow: 'hidden',
  backgroundImage: `url('${fondo}')`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  filter: isHovering ? 'brightness(1.25)' : '',
  transition: 'all 0.2s ease-in-out'
});
