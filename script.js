function compute(e) {
    e.preventDefault()

    const principal = document.getElementById("principal")
    const result = document.getElementById('result')

    const amount = principal.value
    const rate = document.getElementById("rate").value
    const years = document.getElementById("years").value

    // Amount Validation
    if(amount <= 0) {
        alert('Enter a positive number')
        principal.focus()
        return
    }
    
    // Get intenres
    let interest = amount * years * rate / 100
    let year = new Date().getFullYear() + parseInt(years)

    // Show output
    result.innerHTML = `
        If you deposit <span>${amount}</span>, <br>
        at an interest rate of <span>${rate}%</span>. <br>
        You will receive an amount of <span>${interest}</span>, <br>
        in the year <span>${year}</span>
    `
}

function updateRate() {
    const rate = document.getElementById('rate').value
    document.getElementById('rate-val').innerHTML = rate + '%'
}


// Events
document.getElementById('rate').addEventListener('input', updateRate)
document.getElementById('compute-btn').addEventListener('click', compute)