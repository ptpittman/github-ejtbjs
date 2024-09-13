/** @type {import('next').NextConfig} */
import { withPigment } from '@pigment-css/nextjs-plugin';

import { createTheme } from '@mui/material';

const colors = {
  background: '#343434',
  text: '#000000',
};

const nextConfig = {};

/**
 * @type {import('@pigment-css/nextjs-plugin').PigmentOptions}
 */
const pigmentConfig = {
  transformLibraries: ['@mui/material'],
  theme: createTheme({
    palette: {
      primary: {
        main: colors.text,
      },
      background: {
        default: colors.background,
      },
      text: {
        primary: '#FFFFFF',
        inverse: '#000000',
      },
    },
  }),
};

export default withPigment(nextConfig, pigmentConfig);
