import { useMediaQuery } from 'react-responsive';

export const isSmall = useMediaQuery({ maxWidth: 440 });
export const isMobile = useMediaQuery({ maxWidth: 768 });
export const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
