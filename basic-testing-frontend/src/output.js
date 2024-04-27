export function generateResultText(calculateionResult)
{
    let resultText = '';

    if (calculateionResult === 'invalid') {
      resultText = 'Invalid input. You must enter valid numbers.';
    } else if (calculateionResult !== 'no-calc') {
      resultText = 'Result: ' + calculateionResult;
    }

    return resultText;
}

export function outputResult(resultText)
{
    const output = document.getElementById('result');
    output.textContent = resultText;
}