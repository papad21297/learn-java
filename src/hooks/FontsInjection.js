import {useFonts} from 'expo-font';
import {useFontObject} from '../configData';

export default function FontsInjection({children}) {
  const [fontsLoaded] = useFonts(useFontObject);
  return fontsLoaded?(children):(null)
}