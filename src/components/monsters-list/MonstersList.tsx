import { useState } from 'react';
import { Monster } from '../../models/interfaces/monster.interface';
import {
  Image,
  ListTitle,
  MonsterCard,
  MonstersSection,
} from './MonstersList.styled';
import { MonstersListTestIds } from '../../constants/data-testids';

type MonstersListProps = {
  monsters: Monster[];
  getMonsterImg: Function;
};

const MonstersList: React.FC<MonstersListProps> = ({
  monsters,
  getMonsterImg,
}) => {
  const [selectedMonsterImg, setSelectedMonsterImg] = useState<string | null>(
    null,
  );

  const handleMonsterClick = (monster: Monster) => {
    const value =
      selectedMonsterImg === monster.imageUrl ? null : monster.imageUrl;
    setSelectedMonsterImg(value);

    getMonsterImg(value);
  };

  return (
    <div>
      <ListTitle data-testid={MonstersListTestIds.listTitle}>
        {monsters.length > 0
          ? "Select your monster's image"
          : 'No available monsters'}
      </ListTitle>

      <MonstersSection data-testid={MonstersListTestIds.section}>
        {monsters.map((monster) => (
          <MonsterCard
            key={monster.id}
            onClick={() => handleMonsterClick(monster)}
            selected={monster.imageUrl === selectedMonsterImg}
            data-testid={monster.id}>
            <Image src={monster.imageUrl} />
          </MonsterCard>
        ))}
      </MonstersSection>
    </div>
  );
};

export { MonstersList };
