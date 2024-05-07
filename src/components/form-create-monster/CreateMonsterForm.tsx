import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TextField } from '@mui/material';
import { Monster } from '../../models/interfaces/monster.interface';
import { CreateMonsterBox, CustomAlert } from './CreateMonsterForm.styled';
import { CreateMonsterButton } from '../../pages/create-monsters/CreateMonsters.styled';
import { MonstersList } from '../monsters-list/MonstersList';
import { monsters } from '../../data/monsters';
import { CreatedMonsterFormTestIds } from '../../constants/data-testids';

export type MonsterProps = {
  monster?: Monster | null;
  title?: string;
  getMonsterInfo: Function;
};

export const CreateMonsterForm: React.FC<MonsterProps> = ({
  getMonsterInfo,
}) => {
  const [error, setError] = useState({
    empty: false,
    invalid: false,
  });

  const [monsterImg, setMonsterImg] = useState('');

  const initialMonster = {
    id: '',
    name: '',
    attack: 0,
    defense: 0,
    hp: 0,
    speed: 0,
    imageUrl: '',
  };

  const [monsterInfo, setMonsterInfo] = useState<Monster>(() => ({
    ...initialMonster,
  }));

  const getMonsterImg = (monsterImg: string) => {
    setMonsterImg(monsterImg);
  };

  const handdleInputChange = (event: any) => {
    const name = event.target.name;
    setError({ empty: false, invalid: false });

    if (
      name === 'hp' ||
      name === 'speed' ||
      name === 'defense' ||
      name === 'attack'
    ) {
      if (
        !/^\d+$/.test(event.target.value) ||
        Number(event.target.value) > 100 ||
        Number(event.target.value) <= 0
      ) {
        setError({ ...error, invalid: true });
      } else {
        setMonsterInfo({
          ...monsterInfo,
          [name]: Number(event.target.value),
        });
      }
    } else {
      setMonsterInfo({
        ...monsterInfo,
        [name]: event.target.value,
      });
    }
  };

  const handleCreateMonsterClick = (event: any) => {
    event.preventDefault();
    monsterInfo.id = uuidv4();
    monsterInfo.imageUrl = monsterImg;

    if (
      !monsterInfo.name ||
      !monsterInfo.hp ||
      !monsterInfo.attack ||
      !monsterInfo.defense ||
      !monsterInfo.speed
    ) {
      setError({ ...error, empty: true });
      return;
    }

    setError({ ...error, empty: false });
    getMonsterInfo(monsterInfo);
    setMonsterInfo(initialMonster);
  };

  return (
    <CreateMonsterBox>
      <MonstersList monsters={monsters} getMonsterImg={getMonsterImg} />

      {error.empty ? (
        <CustomAlert
          data-testid={CreatedMonsterFormTestIds.alert}
          severity="error">
          All fields are required
        </CustomAlert>
      ) : null}

      {error.invalid ? (
        <CustomAlert
          data-testid={CreatedMonsterFormTestIds.alert}
          severity="error">
          Please enter a valid number
        </CustomAlert>
      ) : null}

      <TextField
        fullWidth
        required
        sx={{ m: 1 }}
        data-testid={CreatedMonsterFormTestIds.name}
        id="outlined-required"
        label="Name"
        name="name"
        value={monsterInfo?.name}
        onChange={handdleInputChange}
      />
      <TextField
        required
        sx={{ m: 1, width: '48%' }}
        data-testid={CreatedMonsterFormTestIds.hp}
        id="outlined-required"
        label="HP (1-100)"
        name="hp"
        value={monsterInfo?.hp}
        onChange={handdleInputChange}
      />
      <TextField
        required
        sx={{ m: 1, width: '48%' }}
        data-testid={CreatedMonsterFormTestIds.attack}
        id="outlined-required"
        label="Attack (1-100)"
        name="attack"
        value={monsterInfo?.attack}
        onChange={handdleInputChange}
      />
      <TextField
        required
        sx={{ m: 1, width: '48%' }}
        data-testid={CreatedMonsterFormTestIds.defense}
        id="outlined-required"
        label="Defense (1-100)"
        name="defense"
        value={monsterInfo?.defense}
        onChange={handdleInputChange}
      />
      <TextField
        required
        sx={{ m: 1, width: '48%' }}
        data-testid={CreatedMonsterFormTestIds.speed}
        id="outlined-required"
        label="Speed (1-100)"
        name="speed"
        value={monsterInfo?.speed}
        onChange={handdleInputChange}
      />

      <CreateMonsterButton
        disabled={error.empty || error.invalid}
        data-testid={CreatedMonsterFormTestIds.createMonsterBtn}
        onClick={handleCreateMonsterClick}>
        Create Monster
      </CreateMonsterButton>
    </CreateMonsterBox>
  );
};
