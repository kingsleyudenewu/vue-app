
new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function(){
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function(){
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hit monster  for ' + damage
            });
            this.monstaerAttacks();            
            
        },
        specialAttack: function(){
            this.monsterHealth -= this.calculateDamage(10, 20);
            this.monstaerAttacks(); 
        },
        heal: function(){
            if(this.playerHealth <= 90){
                this.playerHealth += 10;
            }
            else this.playerHealth = 100;            
            this.monstaerAttacks();
        },
        giveUp: function(){
            this.gameIsRunning = false;
            // this.startGame();
        },
        monstaerAttacks: function(){
            var damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hit player  for ' + damage
            });            
            this.checkWin();
        },
        calculateDamage: function(min, max){
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function(){
            if(this.monsterHealth <= 0){
                if(confirm('You won! New Game')){
                    this.startGame();
                }
                else{
                    this.gameIsRunning = false;
                    // this.turns = [];
                }                 
                return true;
            }
            else if(this.playerHealth <= 0){
                if(confirm('You lost! New Game')){
                    this.startGame();
                }
                else{
                    this.gameIsRunning = false;
                    // this.turns = [];
                }
                return true;
            }
            return false;
        }
    }
}); 