import { memo, SVGProps } from 'react';

const PerfilIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 120 120' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={60} cy={60} r={60} fill='#747474' />
  </svg>
);
const Memo = memo(PerfilIcon);
export { Memo as PerfilIcon };
