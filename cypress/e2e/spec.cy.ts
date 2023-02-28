describe('Home page', () => {
	it('Should load list of quests', () => {
		cy.visit('/');

		cy.get('li').should('have.length', 10).first().as('firstCard');

		cy.get('@firstCard').contains('iPhone 9', { matchCase: false });
		cy.get('@firstCard').contains('Skill Tree', { matchCase: false });
		cy.get('@firstCard').contains('Smartphones', { matchCase: false });
		cy.get('@firstCard').contains('Apple', { matchCase: false });
		cy.get('@firstCard').contains('Experience', { matchCase: false });
		cy.get('@firstCard').contains('9400');
		cy.get('@firstCard').contains('Gold', { matchCase: false });
		cy.get('@firstCard').contains('549');
	});

	it('Should connect to individual quest pages', () => {
		cy.visit('/');

		cy.get('ul')
			.find('a')
			.should('have.length', 10)
			.each(($link: JQuery<HTMLAnchorElement>, index) => {
				expect($link[0].href).to.eq(Cypress.config().baseUrl + '/quests/' + (index + 1));
			});
	});
});

describe('SingleQuest page', () => {
	it('Should load list of quests', () => {
		cy.visit('/quests/1');

		cy.contains('iPhone 9', { matchCase: false });
		cy.contains('Skill Tree', { matchCase: false });
		cy.contains('Smartphones', { matchCase: false });
		cy.contains('Apple', { matchCase: false });

		cy.contains('Go back').click();
		cy.url().should('not.include', 'quests');
	});
});
