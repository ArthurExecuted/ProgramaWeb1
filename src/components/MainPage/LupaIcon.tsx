import { memo, SVGProps } from 'react';

const LupaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 50 63' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={30} cy={20} r={20} stroke='#747474' strokeWidth={6} />
    <path d='M0 63L20 36' stroke='#747474' strokeWidth={6} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(LupaIcon);
export { Memo as LupaIcon };
