import { ThemeProvider } from '@/theme';
import '../global.css';

import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <ThemeProvider colorScheme='brand'>
      <Stack />
    </ThemeProvider>
  );
}
