import { memo, SVGProps } from 'react';

const Rectangle1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1201 1603' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H1201V1603H0V0Z' fill='#141812' />
  </svg>
);
const Memo = memo(Rectangle1Icon);
export { Memo as Rectangle1Icon };
