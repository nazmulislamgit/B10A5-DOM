function getInputFieldById(id) {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    const inputNumber = parseFloat(inputValue)
    inputField.value = ''
    return inputNumber
}

function getInputDonationMoney(id) {
    const inputText = document.getElementById(id).innerText
    const inputValue = parseFloat(inputText)
    return inputValue
}

function inputElement(id) {
    const element = document.getElementById(id)
    return element
}

function inputElementHidden(id) {
    document.getElementById('donation-container').classList.add('hidden')
    document.getElementById('history-container').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden')
}