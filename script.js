function calculateGCD() {
    let a = parseInt(document.querySelector('.a').value);
    let b = parseInt(document.querySelector('.b').value);

    if (isNaN(a) || isNaN(b)) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid input',
            text: 'Please enter valid numbers in both fields.'
        });
        return;
    }

    let gcdResult = gcd(a, b);

    Swal.fire({
        title: 'GCD Result',
        text: `The GCD of ${a} and ${b} is ${gcdResult}`,
        icon: 'success'
    });
    document.querySelector('.a').value = '';
    document.querySelector('.b').value = '';
}

const gcd = (a, b) => {
    while (b !== 0) {
        let rem = a % b;
        a = b;
        b = rem;
    }
    return a;
}
document.getElementById('year').textContent = new Date().getFullYear();