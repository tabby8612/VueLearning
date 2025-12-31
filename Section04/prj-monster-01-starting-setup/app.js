function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

Vue.createApp({
  data: () => {
    return {
      monostorHealth: 100,
      playerHealth: 100,
      roundCount: 0,
      winner: null,
      logs: [],
    };
  },

  computed: {
    getMonosterHealthBarStyles() {
      return { width: this.monostorHealth + "%" };
    },

    getPlayerHealthBarStyles() {
      return { width: this.playerHealth + "%" };
    },
  },

  watch: {
    monostorHealth(value) {
      if (value < 0) this.monostorHealth = 0;

      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },

    playerHealth(value) {
      if (value < 0) this.playerHealth = 0;

      if (value <= 0 && this.monostorHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
  },

  methods: {
    startNewGame() {
      this.monostorHealth = 100;
      this.playerHealth = 100;
      this.roundCount = 0;
      this.winner = null;
      this.logs = [];
    },

    attackMonoster() {
      this.roundCount++;
      const randomAttack = getRandomValue(5, 12);
      this.monostorHealth -= randomAttack;
      this.attackPlayer();
      console.log(this.monostorHealth, this.playerHealth);
      this.logMessage("monster", "attack", randomAttack);
    },

    attackPlayer() {
      const randomAttack = getRandomValue(8, 18);
      this.playerHealth -= randomAttack;
      this.logMessage("player", "attack", randomAttack);
    },

    specialMonosterAttack() {
      this.roundCount++;
      const randomAttack = getRandomValue(12, 25);
      this.monostorHealth -= randomAttack;
      this.attackPlayer();
      this.logMessage("monster", "special attack", randomAttack);
    },

    healPlayer() {
      this.roundCount++;
      const randomHeal = getRandomValue(10, 20);

      if (this.playerHealth + randomHeal > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += randomHeal;
      }

      this.logMessage("player", "heal", randomHeal);
    },

    playerSurrender() {
      this.winner = "monster";
    },

    logMessage(who, what, value) {
      const actionObject = {
        actionBy: who,
        actionWhat: what,
        actionValue: value,
      };

      this.logs.unshift(actionObject);
    },
  },
}).mount("#game");
