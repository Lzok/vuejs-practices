new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        enemyHealth: 100,
        gameIsRunning: false,
        turns: [],
        currentTurn: 1 //First turn
    },
    methods: {
        startGame() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.enemyHealth = 100;
            this.turns = [];
        },
        attack() {
            const damage = this.calculateDamage(3, 10);
            this.enemyHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: `Player hits Enemy for ${damage}`,
                id: this.currentTurn
            });
            this.currentTurn++;

            if (this.checkWin()) {
                return;
            }

            this.enemyAttacks();
        },
        specialAttack() {
            const damage = this.calculateDamage(10, 20);
            this.enemyHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: `Player hits Enemy hard for ${damage}`,
                id: this.currentTurn
            });
            this.currentTurn++;
            if (this.checkWin()) {
                return;
            }
            this.enemyAttacks();
        },
        heal() {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for 10',
                id: this.currentTurn
            });
            this.currentTurn++;
            this.enemyAttacks();
        },
        giveUp() {
            this.gameIsRunning = false;
        },
        enemyAttacks() {
            const damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.checkWin();
            this.turns.unshift({
                isPlayer: false,
                text: `Enemy hits Player for ${damage}`,
                id: this.currentTurn
            });
            this.currentTurn++;
        },
        calculateDamage(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin() {
            if (this.enemyHealth <= 0) {
                confirm('You won! New Game?') ? this.startGame() : this.gameIsRunning = false;

                return true;
            } else if (this.playerHealth <= 0) {
                confirm('You lost! New Game?') ? this.startGame() : this.gameIsRunning = false;

                return true;
            }
            return false;
        }
    }
});