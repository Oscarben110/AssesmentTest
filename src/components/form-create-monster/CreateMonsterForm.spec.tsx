import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CreateMonsterForm } from './CreateMonsterForm';
import { CreatedMonsterFormTestIds } from '../../constants/data-testids';

describe('CreateMonsterForm', () => {
  it('renders without error', () => {
    let getMonsterInfoMock;

    getMonsterInfoMock = jest.fn();
    render(<CreateMonsterForm getMonsterInfo={getMonsterInfoMock} />);

    const elements = {
      name: screen.getByTestId(CreatedMonsterFormTestIds.name),
      hp: screen.getByTestId(CreatedMonsterFormTestIds.hp),
      attack: screen.getByTestId(CreatedMonsterFormTestIds.attack),
      defense: screen.getByTestId(CreatedMonsterFormTestIds.defense),
      speed: screen.getByTestId(CreatedMonsterFormTestIds.speed),
      btn: screen.getByTestId(CreatedMonsterFormTestIds.createMonsterBtn),
    };
    expect(elements.name).toBeInTheDocument();
    expect(elements.hp).toBeInTheDocument();
    expect(elements.attack).toBeInTheDocument();
    expect(elements.defense).toBeInTheDocument();
    expect(elements.speed).toBeInTheDocument();
    expect(elements.btn).toBeInTheDocument();
  });

  it('displays an alert and disables create monster button when there is an empty field', () => {
    let getMonsterInfoMock = jest.fn();
    render(<CreateMonsterForm getMonsterInfo={getMonsterInfoMock} />);

    userEvent.type(
      screen.getByTestId(CreatedMonsterFormTestIds.name),
      'Dead Unicorn',
    );
    fireEvent.click(
      screen.getByTestId(CreatedMonsterFormTestIds.createMonsterBtn),
    );

    const alert = screen.getByTestId(CreatedMonsterFormTestIds.alert);
    const disabledBtn = screen.getByTestId(
      CreatedMonsterFormTestIds.createMonsterBtnDisabled,
    );

    expect(alert).toBeInTheDocument();
    expect(disabledBtn).toBeInTheDocument();
  });

  it('enables create monster button if all fields are complete', () => {
    const getMonsterInfoMock = jest.fn();
    render(<CreateMonsterForm getMonsterInfo={getMonsterInfoMock} />);

    const elements = {
      name: screen.getByTestId(CreatedMonsterFormTestIds.name),
      hp: screen.getByTestId(CreatedMonsterFormTestIds.hp),
      attack: screen.getByTestId(CreatedMonsterFormTestIds.attack),
      defense: screen.getByTestId(CreatedMonsterFormTestIds.defense),
      speed: screen.getByTestId(CreatedMonsterFormTestIds.speed),
      btn: screen.getByTestId(CreatedMonsterFormTestIds.createMonsterBtn),
    };

    userEvent.type(elements.name, 'Dead Unicorn');
    userEvent.type(elements.hp, '80');
    userEvent.type(elements.attack, '75');
    userEvent.type(elements.speed, '90');
    userEvent.type(elements.defense, '100');

    fireEvent.click(elements.btn);
    expect(elements.btn).toBeInTheDocument();
  });
});
