// History Button Click

document.getElementById('btn-history').addEventListener('click', function () {
    // History Button
    const historyButton = inputElement('btn-history')
    historyButton.classList.remove('text-gray-500', 'border', 'border-gray-400')
    historyButton.classList.add('bg-[#B4F461]', 'text-black');
    inputElementHidden('history-container')

    // Donation Button
    const donationButton = inputElement('btn-donation');
    donationButton.classList.remove('bg-[#B4F461]', 'text-black');
    donationButton.classList.add('text-gray-500', 'border', 'border-gray-400')
})

// Donation Button Click

document.getElementById('btn-donation').addEventListener('click', function () {
    // Donation Button
    const donationButton = inputElement('btn-donation');
    donationButton.classList.add('bg-[#B4F461]', 'text-black')
    donationButton.classList.remove('text-gray-500', 'border', 'border-gray-400')
    inputElementHidden('donation-container')

    // History Button
    const historyButton = inputElement('btn-history');
    historyButton.classList.remove('bg-[#B4F461]', 'text-black');
    historyButton.classList.add('text-gray-500', 'border', 'border-gray-400')
})