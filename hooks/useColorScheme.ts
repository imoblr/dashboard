import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { Platform } from 'react-native';

import { type ColorScheme as ColorSchemeType, colorSchemes } from '../theme/colorSchemes';

export const useCurrentColorScheme = () => {
  // const brandScheme = brand.light;

  // console.log(brandScheme['--color-primary-600']);
  const [colorScheme, setColorScheme] = useState<string | null>('brand'); 
  const { getItem: getNativeItem, setItem: setNativeItem } = useAsyncStorage('@colorScheme');

  const getWebItem = () => {
    return window.localStorage.getItem('@colorScheme');
  }
  const setWebItem = (value : string) => {
    window.localStorage.setItem('@colorScheme', value);
  }
  

  // const readColorSchemeFromStorage = async () => {
  //   const value = await getItem();
  //   if(value) {
  //     setColorScheme(value);
  //   }
  // };

  useState(async () => {
    if(Platform.OS === 'web' && typeof window !== 'undefined') {
      const value = getWebItem();
      if(value) {
        setColorScheme(value);
      }
    } else {
      if(typeof window === 'undefined') return;
      const value = await getNativeItem();
      if(value) {
        setColorScheme(value);
      }
    }
  }, []);

  return {colorScheme: colorSchemes[colorScheme as ColorSchemeType].light}
}