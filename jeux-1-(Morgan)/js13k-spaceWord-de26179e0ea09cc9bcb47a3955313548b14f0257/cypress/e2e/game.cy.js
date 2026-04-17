describe('Tests Fonctionnels SpaceWord', () => {
  // ouvre la page du jeu
  beforeEach(() => {
    cy.visit('index.html');
  });

  it('Test 1 : Le menu principal s\'affiche avec le bouton PLAY', () => {
    cy.get('nav').first().should('be.visible');
    cy.get('#jogar-btn').should('contain', 'PLAY');
  });

  it('Test 2 : Le clic sur PLAY lance le jeu et masque le menu', () => {
    cy.get('#jogar-btn').click();

    cy.get('nav').first().should('not.be.visible');

    cy.get('canvas#canvas').should('exist');
  });

  it('Test 3 : L\'interface de jeu (Chrono, Vies, Mot) s\'affiche en jouant', () => {
    cy.get('#jogar-btn').click();

    // Vérifie que la barre de vie est bien générée par le JavaScript
    cy.get('.lifebar').should('exist');

    // Vérifie que le chronomètre tourne et n'est pas vide
    cy.get('.cronometer').should('not.be.empty');

    cy.get('.text').should('exist');
  });
});
