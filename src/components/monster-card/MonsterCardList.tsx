import { useState } from 'react';
import { Divider, Grid } from '@mui/material';
import { Monster } from '../../models/interfaces/monster.interface';
import {
  MonsterCard,
  MonsterTitle,
  MonsterImg,
  MonsterStats,
  ProgressBar,
  DeleteButton,
  FavIcon,
  MonsterFigure,
} from './MonsterCardList.styled';
import { MonsterCardTestIds } from '../../constants/data-testids';

type MonsterCardProps = {
  monster?: Monster | null;
  handleDelete: Function;
};

const MonsterCardList: React.FC<MonsterCardProps> = ({
  monster,
  handleDelete,
}) => {
  const [color, setColor] = useState('#00000099');

  const handleFav = (event: React.MouseEvent) => {
    event.preventDefault();

    if (color === '#00000099') {
      setColor('red');
    } else {
      setColor('#00000099');
    }
  };

  return (
    <MonsterCard data-testid="monster-card">
      <MonsterFigure>
        <FavIcon
          style={{ color: color }}
          onClick={handleFav}
          data-testid={MonsterCardTestIds.favBtn}
        />
        <MonsterImg
          src={monster?.imageUrl}
          alt={`${monster?.name} image`}
          title={`${monster?.name} image`}
          aria-label={`${monster?.name} image`}
          data-testid={MonsterCardTestIds.monsterImg}
        />
      </MonsterFigure>
      <MonsterTitle data-testid="card-monster-name">
        {monster?.name!}
      </MonsterTitle>
      <Divider />
      <MonsterStats>HP</MonsterStats>
      <ProgressBar
        variant="determinate"
        data-testid="card-monster-hp"
        value={monster?.hp}></ProgressBar>
      <MonsterStats>Attack</MonsterStats>
      <ProgressBar
        variant="determinate"
        data-testid="card-monster-attack"
        value={monster?.attack}></ProgressBar>
      <MonsterStats>Defense</MonsterStats>
      <ProgressBar
        variant="determinate"
        data-testid="card-monster-defense"
        value={monster?.defense}></ProgressBar>
      <MonsterStats>Speed</MonsterStats>
      <ProgressBar
        variant="determinate"
        data-testid="card-monster-speed"
        value={monster?.speed}></ProgressBar>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        rowSpacing={1}
        columnSpacing={2}>
        <Grid item>
          <DeleteButton
            onClick={() => handleDelete(monster?.id)}
            data-testid={MonsterCardTestIds.deleteBtn}>
            Delete
          </DeleteButton>
        </Grid>
      </Grid>
    </MonsterCard>
  );
};

export { MonsterCardList };
