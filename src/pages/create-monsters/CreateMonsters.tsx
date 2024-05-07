import { useState } from 'react';
import { Title } from '../../components/title/Title';
import { CreateMonsterForm } from '../../components/form-create-monster/CreateMonsterForm';
import { CreatedMonstersList } from '../../components/created-monsters/CreatedMonstersList';
import {
  BattleSection,
  MonstersTitle,
  PageContainer,
} from './CreateMonsters.styled';
import { Monster } from '../../models/interfaces/monster.interface';
import { CreateMonstersTestIds } from '../../constants/data-testids';

const CreateMonsters = () => {
  const [monsterInfo, setMonsterInfo] = useState<Monster | null>(null);
  const [createdMonsters, setCreatedMonsters] = useState<Monster[]>([]);

  const setMonsterData = (monsterData: Monster) => {
    setMonsterInfo(monsterData);
  };

  const addToCreatedMonsters = (monsterData: Monster) => {
    if (monsterData.name !== '') {
      setCreatedMonsters((prev) => [...prev, monsterData]);
    }
  };

  const deleteMonster = (id: string) => {
    const newMonstersList = createdMonsters.filter(
      (monster) => monster.id !== id,
    );
    setCreatedMonsters(newMonstersList);
  };

  const title =
    createdMonsters.length === 0 ? 'There are no monsters' : 'Your Monsters';

  return (
    <PageContainer>
      <Title data-testid={CreateMonstersTestIds.title}>
        Create your monster
      </Title>

      <BattleSection>
        <CreateMonsterForm
        data-testid="monster-form"
          getMonsterInfo={(monster: Monster) => {
            setMonsterData(monster);
            addToCreatedMonsters(monster);
          }}
        />
      </BattleSection>

      <MonstersTitle data-testid={CreateMonstersTestIds.monstersTitle}>
        {title}
      </MonstersTitle>
      <CreatedMonstersList
        monsters={createdMonsters}
        onDelete={deleteMonster}
      />
    </PageContainer>
  );
};

export { CreateMonsters };
