import { Cinzel } from '@next/font/google';

/** This is a variable font so no weight required. And `swap` is needed to enforce this font, otherwise the system is showing Times New Roman immediately after page load and not changing it. */
const cinzel = Cinzel({ subsets: ['latin'], display: 'swap' });

export default cinzel.style.fontFamily;
