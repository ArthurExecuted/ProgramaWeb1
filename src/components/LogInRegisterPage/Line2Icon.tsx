import { memo, SVGProps } from 'react';

const Line2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 492 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0L492 -5.44632e-08' stroke='#C4C5C4' strokeWidth={4} strokeLinecap='round' strokeDasharray='10 10' />
  </svg>
);
const Memo = memo(Line2Icon);
export { Memo as Line2Icon };
