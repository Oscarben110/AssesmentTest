import { act, render, screen } from '@testing-library/react';
import { MonstersList } from './MonstersList';
import { monsters } from '../../data/monsters';

const monstersListFactory = (data = monsters, getMonsterImg: Function) => {
  render(<MonstersList monsters={data} getMonsterImg={getMonsterImg} />);
};

describe('MonstersList', () => {
  it('should render the monsters list', () => {
    const getMonsterInfoMock = jest.fn();
    monstersListFactory(monsters, getMonsterInfoMock);
    const monsterItemsCount = screen.getByTestId('monsters-list-section')
      .childNodes.length;
    expect(monsterItemsCount).toBe(monsters.length);
  });

  it('should render the no monsters available message', () => {
    const getMonsterInfoMock = jest.fn();
    monstersListFactory([], getMonsterInfoMock);
    const noMonstersTitle = screen.getByText(/No available monsters/i);
    expect(noMonstersTitle).toBeInTheDocument();
  });

  it('should click on the first monster card', () => {
    const getMonsterInfoMock = jest.fn();
    monstersListFactory(monsters, getMonsterInfoMock);
    expect(screen.getByTestId('monster-1')).toBeInTheDocument();
    act(() => screen.getByTestId('monster-1').click());
    expect(screen.getByTestId('monster-1')).toHaveStyle(
      'border: 1px solid #000000;',
    );
    act(() => screen.getByTestId('monster-1').click());
    expect(screen.getByTestId('monster-1')).toHaveStyle('border: none;');
  });
});
