import { render, screen } from '@testing-library/react';
import { CreateMonsters } from './CreateMonsters';
import { CreateMonstersTestIds } from '../../constants/data-testids';

describe('Create Monsters', () => {
  it('should render the page container', async () => {
    render(<CreateMonsters />);
    expect(screen.getByText(/Create your monster/i)).toBeInTheDocument();
    expect(screen.getByTestId(CreateMonstersTestIds.title)).toBeInTheDocument();
    expect(
      screen.getByTestId(CreateMonstersTestIds.monstersTitle),
    ).toBeInTheDocument();
    expect(screen.getByTestId('monster-name')).toBeInTheDocument();
    expect(screen.getByText(/There are no monsters/)).toBeInTheDocument();
  });
});