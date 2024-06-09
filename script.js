document.getElementById('submit').addEventListener('click', function () {
  const predictionInput = document.getElementById('prediction')
  const prediction = predictionInput.value.toUpperCase()
  const validPredictions = ['HEADS', 'TAILS']

  if (!validPredictions.includes(prediction)) {
    alert('Please enter a valid prediction (Heads or Tails)')
    predictionInput.value = '' // Clear the invalid input
    return
  }

  const outcomes = ['HEADS', 'TAILS']
  const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)]

  // Clear the last displayed message
  const resultDiv = document.getElementById('result')
  resultDiv.innerHTML = '' // Use innerHTML instead of innerText
  resultDiv.className = ''

  // Trigger coin flip animation
  const coin = document.getElementById('coin')
  coin.style.animation = 'none' // Reset animation
  void coin.offsetWidth // Trigger reflow to restart the animation
  coin.style.animation = 'flip 1.5s linear'

  // Display result after the animation ends (1.5s)
  setTimeout(() => {
    if (prediction === randomOutcome) {
      resultDiv.innerHTML = `Congratulations! 🎉 Your prediction was spot on!<br>Outcome: ${randomOutcome}`
      resultDiv.className = 'win'
    } else {
      resultDiv.innerHTML = `Oops! ☹️ Better luck next time!<br>Outcome: ${randomOutcome}`
      resultDiv.className = 'lose'
    }
  }, 1500) // 1.5 seconds for the coin flip animation to complete
})
