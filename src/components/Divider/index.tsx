import { useTheme } from 'styled-components/native';
import * as S from './styles';

interface Props {
  color?: string;
}
export default function Divider({ color }: Props) {
  const theme = useTheme();

  return (
    <S.Container color={color || theme.colors.separator} />
  )
}