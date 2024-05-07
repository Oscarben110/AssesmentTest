import { Grid } from "@mui/material";
import { MonsterCardList } from "../monster-card/MonsterCardList";
import { Monster } from "../../models/interfaces/monster.interface";

interface MonstersListProps {
    monsters: Monster[];
    onDelete: (id: string) => void;
  }

export const CreatedMonstersList = ({ monsters, onDelete }: MonstersListProps) => {
    return (
      <Grid container rowSpacing={2} columnSpacing={2} data-testid='cards-container'>
        {monsters.map((monster: Monster) => (
          <Grid item>
            <MonsterCardList
              key={monster.id}
              monster={monster}
              handleDelete={onDelete}
            />
          </Grid>
        ))}
      </Grid>
    );
  };