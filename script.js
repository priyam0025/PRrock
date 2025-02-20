let score = JSON.parse(localStorage.getItem('score'));
    if (score === null) {                  //setting a default score . we can also use OR operator '||{wins:... }' //
      score = {
        wins: 0,
        loses: 0,
        ties: 0
      }
    }

    updateScore();          //important refer DOM -to show the score in Html js_linkage with html <p> tag

    function playGame(playerMove) {
      const computerMove = pickComputermove();
      let result = '';
      if (playerMove === `scissors`) {
        if (computerMove === `rock`) {
          result = 'You Lose';
        }
        else if (computerMove === 'paper') {
          result = 'You Win';
        }
        else if (computerMove === 'scissors') {
          result = 'Tie';
        }
      }
      else if (playerMove === `paper`) {

        if (computerMove === `rock`) {
          result = 'You Win';
        }
        else if (computerMove === 'paper') {
          result = 'Tie';
        }
        else if (computerMove === 'scissors') {
          result = 'You Lose';
        }
      }
      else if (playerMove === `rock`) {

        if (computerMove === `rock`) {
          result = 'Tie';
        }
        else if (computerMove === 'paper') {
          result = 'You Lose';
        }
        else if (computerMove === 'scissors') {
          result = 'You Win';
        }
      }


      if (result === 'You Win') {
        score.wins += 1;
      }
      else if (result === 'You Lose') {
        score.loses += 1;
      }
      else if (result === 'Tie') {
        score.ties += 1;
      }
      localStorage.setItem('score', JSON.stringify(score)); //to add something inside localstorage we use the function .setItem 

      updateScore();     //to ensure that the result keep on updating on

      document.querySelector('.js-result')
        .innerHTML = result

      document.querySelector('.js-moves')
        .innerHTML = `You <img src="images/${playerMove}-emoji.png">  <img src="images/${computerMove}-emoji.png"> Computer` ;

      /* alert(`You picked ${playerMove}.Gajju picked ${computerMove}.${result}
  Wins:${score.wins} ,Loses:${score.loses} ,Ties:${score.ties}`)*/

    }


    function updateScore() {
      document.querySelector('.js-score')
        .innerHTML = `Wins:${score.wins} ,Loses:${score.loses} ,Ties:${score.ties}`;
    }

    function pickComputermove() {
      const randomNumber = Math.random();
      let computerMove = '';                        //now this computerMove move is inside{} so it is different from the above ones

      if (randomNumber < 1 / 3) {
        computerMove = `rock`;
      }
      else if (randomNumber < 2 / 3) {
        computerMove = 'paper';
      }
      else {
        computerMove = 'scissors';
      }
      return computerMove;
    }
