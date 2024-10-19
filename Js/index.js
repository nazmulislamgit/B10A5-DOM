// Donation for card-1
document.getElementById('btn-donation-card-1').addEventListener('click', function () {
    const inputValue = getInputFieldById('input-field-card-1')
    const donationTk = getInputDonationMoney('card-1-donation-money')
    const totalAmount = getInputDonationMoney('total-amount')

    // Validation part
    if (inputValue <= 0 || inputValue > totalAmount || isNaN(inputValue)) {
        alert('Invalid Donation Amount !')
        return
    }
    else {
        my_modal_1.showModal()

        // Calculation Part
        const totalDonation = inputValue + donationTk
        inputElement('card-1-donation-money').innerText = totalDonation
        const totalAmountIncrease = totalAmount - inputValue
        inputElement('total-amount').innerText = totalAmountIncrease

        // history transaction
        const divContainer = document.createElement('div')
        divContainer.innerHTML = `
     <div class="border border-gray-500 shadow-lg w-11/12 m-auto p-8 rounded-md mb-5">
        <h2 class="font-semibold text-xl">${inputValue} Taka is Donated for Flood at Noakhali, Bangladesh</h2>
        <p class="font-light text-xs mt-2">Data: ${new Date()}</p>
    </div>
    `
        inputElement('history-container').prepend(divContainer)
    }
})

// Donation for card-2
document.getElementById('btn-donation-card-2').addEventListener('click', function () {
    const inputValue = getInputFieldById('input-field-card-2')
    const donationTk = getInputDonationMoney('card-2-donation-money')
    const totalAmount = getInputDonationMoney('total-amount')

    // Validation part
    if (inputValue <= 0 || inputValue > totalAmount || isNaN(inputValue)) {
        alert('Invalid Donation Amount !')
        return
    }
    else {

        my_modal_1.showModal()

        // Calculation Part
        const totalDonation = inputValue + donationTk
        inputElement('card-2-donation-money').innerText = totalDonation
        const totalAmountIncrease = totalAmount - inputValue
        inputElement('total-amount').innerText = totalAmountIncrease

        // history transaction
        const divContainer = document.createElement('div')
        divContainer.innerHTML = `
     <div class="border border-gray-500 shadow-lg w-11/12 m-auto p-8 rounded-md mb-5">
        <h2 class="font-semibold text-xl">${inputValue} Taka is Donate for Flood Relief in Feni, Bangladesh</h2>
        <p class="font-light text-xs mt-2">Data: ${new Date()}</p>
    </div>
    `
        inputElement('history-container').prepend(divContainer)
    }
})

// Donation for card-3
document.getElementById('btn-donation-card-3').addEventListener('click', function () {
    const inputValue = getInputFieldById('input-field-card-3')
    const donationTk = getInputDonationMoney('card-3-donation-money')
    const totalAmount = getInputDonationMoney('total-amount')

    // Validation part
    if (inputValue <= 0 || inputValue > totalAmount || isNaN(inputValue)) {
        alert('Invalid Donation Amount !')
        return
    }
    else {

        my_modal_1.showModal()

        // Calculation Part
        const totalDonation = inputValue + donationTk
        inputElement('card-3-donation-money').innerText = totalDonation
        const totalAmountIncrease = totalAmount - inputValue
        inputElement('total-amount').innerText = totalAmountIncrease

        // history transaction
        const divContainer = document.createElement('div')
        divContainer.innerHTML = `
     <div class="border border-gray-500 shadow-lg w-11/12 m-auto p-8 rounded-md mb-5">
        <h2 class="font-semibold text-xl">${inputValue} Taka is Aid for Injured in the Quota Movement, Bangladesh</h2>
        <p class="font-light text-xs mt-2">Data: ${new Date()}</p>
    </div>
    `
        inputElement('history-container').prepend(divContainer)
    }
})