import { MonsterPage } from "../support/pageObjects/monster-page";

const monsterPage = new MonsterPage();

describe('template spec', () => {

  beforeEach(() => {

    cy.visit('/');
    cy.url().should('contain', 'http://localhost:3000/');

  })

  it('Check page title', () => {
    monsterPage.getTitle().invoke('text').should('contain', 'Create your monster');
    monsterPage.getSelectText().invoke('text').should('contain', 'Select your monster\'s image');
  })

  it('Check the monster list is empty', () => {
    monsterPage.getDynamicMessage().invoke('text').should('contain', 'There are no monsters');
  })

  it('Check all cards can be selected', () => {
    monsterPage.getMonsterCard(1).click();
    monsterPage.getMonsterCard(1).should('be.selected');
    monsterPage.getMonsterCard(2).click();
    monsterPage.getMonsterCard(2).should('be.selected');
    monsterPage.getMonsterCard(3).click();
    monsterPage.getMonsterCard(3).should('be.selected');
    monsterPage.getMonsterCard(4).click();
    monsterPage.getMonsterCard(4).should('be.selected');
    monsterPage.getMonsterCard(5).click();
    monsterPage.getMonsterCard(5).should('be.selected');

  })

  it('Try to create monster with empty fields', () => {
    monsterPage.getCreateButton().click();
    monsterPage.getRequiredMessage().invoke('text').should('contain', 'All fields are required');
    monsterPage.getCreateButton().should('be.disabled');
  })


  it('Try to add values over the value threshold on the stat fields', () => {
    monsterPage.getAttackField().type('900');
    monsterPage.getRequiredMessage().invoke('text').should('contain', 'Please enter a valid number');
    monsterPage.getDefenseField().type('0');
    monsterPage.getRequiredMessage().invoke('text').should('contain', 'Please enter a valid number');
    monsterPage.getHPField().type('101');
    monsterPage.getRequiredMessage().invoke('text').should('contain', 'Please enter a valid number');
    monsterPage.getSpeedField().type('1000');
    monsterPage.getRequiredMessage().invoke('text').should('contain', 'Please enter a valid number');
  })


  it('Create a monster', () => {
    monsterPage.getMonsterCard(5).click();
    monsterPage.getNameField().type('Chutulhu#10');
    monsterPage.getHPField().type('100');
    monsterPage.getAttackField().type('99');
    monsterPage.getDefenseField().type('50');
    monsterPage.getSpeedField().type('10');
    monsterPage.getCreateButton().click();
    monsterPage.getDynamicMessage().invoke('text').should('contain', 'Your Monsters');
    monsterPage.getCreatedCard().should('be.visible');
    monsterPage.getCreatedName(0).should('contain', 'Chutulhu#10');
    monsterPage.getCreatedHP(0).should('have.attr', 'aria-valuenow', '100');
    monsterPage.getCreatedAttack(0).should('have.attr', 'aria-valuenow', '99');
    monsterPage.getCreatedDefense(0).should('have.attr', 'aria-valuenow', '50');
    monsterPage.getCreatedSpeed(0).should('have.attr', 'aria-valuenow', '10');

  })

  it('Create two monsters and check value for monster #2', () => {
    monsterPage.getMonsterCard(5).click();
    monsterPage.getNameField().type('Chutulhu#10');
    monsterPage.getHPField().type('10');
    monsterPage.getAttackField().type('9');
    monsterPage.getDefenseField().type('6');
    monsterPage.getSpeedField().type('10');
    monsterPage.getCreateButton().click();

    monsterPage.getMonsterCard(2).click();
    monsterPage.getNameField().type('Juan@10');
    monsterPage.getHPField().type('100');
    monsterPage.getAttackField().type('99');
    monsterPage.getDefenseField().type('50');
    monsterPage.getSpeedField().type('10');
    monsterPage.getCreateButton().click();

    monsterPage.getDynamicMessage().invoke('text').should('contain', 'Your Monsters');
    monsterPage.getCreatedCard().should('be.visible');
    monsterPage.getCreatedName(1).should('contain', 'Juan@10');
    monsterPage.getCreatedHP(1).should('have.attr', 'aria-valuenow', '100');
    monsterPage.getCreatedAttack(1).should('have.attr', 'aria-valuenow', '99');
    monsterPage.getCreatedDefense(1).should('have.attr', 'aria-valuenow', '50');
    monsterPage.getCreatedSpeed(1).should('have.attr', 'aria-valuenow', '10');

  })

  it('Delete monster', () => {
    monsterPage.getMonsterCard(5).click();
    monsterPage.getNameField().type('Chutulhu#10');
    monsterPage.getHPField().type('100');
    monsterPage.getAttackField().type('99');
    monsterPage.getDefenseField().type('50');
    monsterPage.getSpeedField().type('10');
    monsterPage.getCreateButton().click();
    monsterPage.getDynamicMessage().invoke('text').should('contain', 'Your Monsters');
    monsterPage.getDeleteButton(0).click();
    monsterPage.getDynamicMessage().invoke('text').should('contain', 'There are no monsters');

  })

  it('Favorite a monster', () => {
    monsterPage.getMonsterCard(5).click();
    monsterPage.getNameField().type('Chutulhu#10');
    monsterPage.getHPField().type('100');
    monsterPage.getAttackField().type('99');
    monsterPage.getDefenseField().type('50');
    monsterPage.getSpeedField().type('10');
    monsterPage.getCreateButton().click();
    monsterPage.getDynamicMessage().invoke('text').should('contain', 'Your Monsters');
    monsterPage.getFavouriteButton(0).click();
    monsterPage.getFavouriteButton(0).should('have.attr', 'style', 'color: red;')

  })

  it('Unfavourite a monster', () => {
    monsterPage.getMonsterCard(5).click();
    monsterPage.getNameField().type('Chutulhu#10');
    monsterPage.getHPField().type('100');
    monsterPage.getAttackField().type('99');
    monsterPage.getDefenseField().type('50');
    monsterPage.getSpeedField().type('10');
    monsterPage.getCreateButton().click();
    monsterPage.getDynamicMessage().invoke('text').should('contain', 'Your Monsters');
    monsterPage.getFavouriteButton(0).click();
    monsterPage.getFavouriteButton(0).should('have.attr', 'style', 'color: red;')
    monsterPage.getFavouriteButton(0).click();
    monsterPage.getFavouriteButton(0).should('have.attr', 'style', 'color: rgba(0, 0, 0, 0.6);')

  })


  it('Favorite a monster and delete it', () => {
    monsterPage.getMonsterCard(5).click();
    monsterPage.getNameField().type('Chutulhu#10');
    monsterPage.getHPField().type('100');
    monsterPage.getAttackField().type('99');
    monsterPage.getDefenseField().type('50');
    monsterPage.getSpeedField().type('10');
    monsterPage.getCreateButton().click();
    monsterPage.getDynamicMessage().invoke('text').should('contain', 'Your Monsters');
    monsterPage.getFavouriteButton(0).click();
    monsterPage.getFavouriteButton(0).should('have.attr', 'style', 'color: red;')
    monsterPage.getDeleteButton(0).click();
    monsterPage.getDynamicMessage().invoke('text').should('contain', 'There are no monsters');

  })

  it('Reload page and check values are still displayed', () => {
    monsterPage.getMonsterCard(5).click();
    monsterPage.getNameField().type('Chutulhu#10');
    monsterPage.getHPField().type('100');
    monsterPage.getAttackField().type('99');
    monsterPage.getDefenseField().type('50');
    monsterPage.getSpeedField().type('10');
    monsterPage.getCreateButton().click();
    monsterPage.getDynamicMessage().invoke('text').should('contain', 'Your Monsters');
    cy.reload();
    monsterPage.getDynamicMessage().invoke('text').should('contain', 'Your Monsters');

  })

  it('Create a monster without selecting image', () => {
    monsterPage.getNameField().type('Chutulhu#10');
    monsterPage.getHPField().type('100');
    monsterPage.getAttackField().type('99');
    monsterPage.getDefenseField().type('50');
    monsterPage.getSpeedField().type('10');
    monsterPage.getCreateButton().click();
    monsterPage.getRequiredMessage().invoke('text').should('contain', 'All fields are required');

  })




})