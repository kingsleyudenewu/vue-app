
new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function(){
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function(){
            this.monsterHealth -= this.calculateDamage(3, 10);
            this.monstaerAttacks();            
            
        },
        specialAttack: function(){
            this.monsterHealth -= this.calculateDamage(10, 20);
            this.monstaerAttacks(); 
        },
        heal: function(){

        },
        giveUp: function(){

        },
        monstaerAttacks: function(){
            this.playerHealth -= this.calculateDamage(5, 12);
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
                }                 
                return true;
            }
            else if(this.playerHealth <= 0){
                if(confirm('You lost! New Game')){
                    this.startGame();
                }
                else{
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
}); 