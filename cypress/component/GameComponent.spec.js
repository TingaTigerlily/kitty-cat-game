import React from 'react';
import { mount } from '@cypress/react';
import App from '../../wwwroot/js/App';  // Adjust the path to your actual component

describe('App Component', () => {
    it('renders the game correctly', () => {
        mount(<App />);
        cy.get('h1').contains('Kitty Cat Game'); // Example assertion
    });

    it('starts the game when the button is clicked', () => {
        mount(<App />);
        cy.get('#start-btn').click();
        cy.get('#timer').should('contain', '30');
    });

    it('increments the score when the cat is clicked', () => {
        mount(<App />);
        cy.get('#start-btn').click();
        cy.get('#cat').click();
        cy.get('#score').should('contain', '1');
    });
});
