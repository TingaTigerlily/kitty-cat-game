describe('Kitty Cat Game Enhanced Tests', () => {
    beforeEach(() => {
        cy.visit('https://tingatigerlily.github.io/kitty-cat-game/')
    })

    it('should load the game page', () => {
        cy.url().should('include', 'kitty-cat-game')
        cy.get('h1').should('contain', 'Kitty Cat Game')
    })

    it('should start the game and display the timer and score', () => {
        cy.get('#start-btn').click()
        cy.get('#timer').should('contain', '30')
        cy.get('#score').should('contain', '0')
    })

    it('should update the score when the cat is clicked', () => {
        cy.get('#start-btn').click()
        cy.get('#cat').click()
        cy.get('#score').should('contain', '1')
    })

    it('should display game over message when time runs out', () => {
        cy.get('#start-btn').click()
        cy.wait(31000) // Wait for 31 seconds to ensure the timer has run out
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Game Over!')
        })
    })

    it('should reset the game', () => {
        cy.get('#start-btn').click()
        cy.get('#cat').click()
        cy.get('#score').should('contain', '1')
        cy.get('#reset-btn').click()
        cy.get('#timer').should('contain', '30')
        cy.get('#score').should('contain', '0')
    })

    it('should move the cat to a new position after being clicked', () => {
        cy.get('#start-btn').click()
        cy.get('#cat').then($cat => {
            const initialPosition = $cat.position()
            cy.get('#cat').click()
            cy.get('#cat').should($newCat => {
                const newPosition = $newCat.position()
                expect(newPosition.top).not.to.eq(initialPosition.top)
                expect(newPosition.left).not.to.eq(initialPosition.left)
            })
        })
    })
})

