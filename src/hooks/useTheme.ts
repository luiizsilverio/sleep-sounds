import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
}

export default useTheme;

// Não é mais utilizado, pois o Styled-components tem o seu próprio hook useTheme
