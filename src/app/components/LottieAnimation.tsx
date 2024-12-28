'use client';

import dynamic from 'next/dynamic';

const LottieAnimation = dynamic(() => import('./LottieClientOnly'), { ssr: false });

export default LottieAnimation;