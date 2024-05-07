export class MonsterPage {

    getTitle() {
        return cy.get('[data-testid="app-name"]');
    }

    getSelectText() {
        return cy.get('[data-testid="monster-list-title"]');
    }

    getDynamicMessage() {
        return cy.get('[data-testid="dynamic-title"]'); //This message changes based on if the list is empty or not
    }

    getMonsterCard(monsterNumber: number) {
        return cy.get(`[data-testid="monster-${monsterNumber}"]`);  //This can be used to select any monster card based on the number
    }

    getCreateButton() {
        return cy.get('[data-testid="btn-create-monster"]');
    }

    getRequiredMessage() {
        return cy.get('[data-testid="alert-required-fields"]');
    }

    getNameField() {
        return cy.get('[data-testid="monster-name"]');
    }

    getHPField() {
        return cy.get('[data-testid="hp-value"]');
    }

    getAttackField() {
        return cy.get('[data-testid="attack-value"]');
    }

    getDefenseField() {
        return cy.get('[data-testid="defense-value"]');
    }

    getSpeedField() {
        return cy.get('[data-testid="speed-value"]');
    }

    getCreatedCard() {
        return cy.get('[data-testid="monster-card"]');
    }

    getCreatedName(cardNumber: number) {
        return cy.get('[data-testid="card-monster-name"]').eq(cardNumber);
    }

    getCreatedHP(cardNumber: number) {
        return cy.get('[data-testid="card-monster-hp"]').eq(cardNumber);
    }

    getCreatedAttack(cardNumber: number) {
        return cy.get('[data-testid="card-monster-attack"]').eq(cardNumber);

    }

    getCreatedSpeed(cardNumber: number) {
        return cy.get('[data-testid="card-monster-speed"]').eq(cardNumber);

    }

    getCreatedDefense(cardNumber: number) {
        return cy.get('[data-testid="card-monster-defense"]').eq(cardNumber);

    }

    getDeleteButton(cardNumber: number){
        return cy.get('[data-testid="btn-delete"]').eq(cardNumber);
    }

    getFavouriteButton(cardNumber:number){
        return cy.get('[data-testid="favorite-btn"]').eq(cardNumber);
    }



}