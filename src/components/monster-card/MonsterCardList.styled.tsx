import styled from '@emotion/styled';
import {
  Card,
  LinearProgress,
  linearProgressClasses,
  Typography,
  Button
} from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { colors } from '../../constants/colors';

export const MonsterCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'centralized',
})<{ centralized?: boolean }>(({ centralized }) => ({
  padding: '13px 11px',
  marginBottom: '30px',
  width: 'calc(257px - 22px)',
  height: '385px',
  background: colors.white,
  boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.25)',
  borderRadius: '7px',
  display: centralized ? 'flex' : 'auto',
  alignItems: centralized ? 'center' : 'auto',
  justifyContent: centralized ? 'center' : 'auto',
  flexDirection: 'column'
}));

export const MonsterTitle = styled(Typography)(() => ({
  display:'flex',
  alignItems: 'center',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '18px',
  lineHeight: '22px',
  color: colors.black,
  marginBottom: '6px',
}));

export const ProgressBar = styled(LinearProgress)(() => ({
  height: 8,
  borderRadius: 15,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: colors.progressBarBackground,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 15,
    backgroundColor: colors.progressColor,
  },
}));

export const MonsterImg = styled.img(() => ({
  borderRadius: '7px',
  width: '100%',
  height: 'auto',
  marginBottom: '8px',
}));

export const MonsterStats = styled(Typography)(() => ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '14px',
    color: colors.black,
    margin: '8px 0px',
  }));

export const DeleteButton = styled(Button, )(() => ({
  background: colors.deleteButton,
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '5px',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '14px',
  color: `${colors.white} !important`,
  padding: '7px 16px',
  // margin: '13px 8px',
  marginTop: '10px',
  textTransform: 'capitalize',
  '&:hover': {
    background: colors.deleteButtonDark
  }
}))

export const FavIcon = styled(FavoriteRoundedIcon)(() => ({
  position: 'absolute',
  zIndex: '2',
  cursor: 'pointer',
  top: '1%',
  right: '1%'
}))

export const MonsterFigure = styled.figure(() => ({
  width: '100%',
  maxWidth: '375px',
  position: 'relative',
}))