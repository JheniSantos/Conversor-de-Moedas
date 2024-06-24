const exchangeRates = {
    "USD": {
        "USD": 1.0,
        "BRL": 5.09,
        "EUR": 0.92,
        "GBP": 0.80,
        "ARS": 350.0
    },
    "BRL": {
        "USD": 0.196,
        "BRL": 1.0,
        "EUR": 0.18,
        "GBP": 0.16,
        "ARS": 68.76
    },
    "EUR": {
        "USD": 1.09,
        "BRL": 5.56,
        "EUR": 1.0,
        "GBP": 0.87,
        "ARS": 380.43
    },
    "GBP": {
        "USD": 1.25,
        "BRL": 6.36,
        "EUR": 1.15,
        "GBP": 1.0,
        "ARS": 437.5
    },
    "ARS": {
        "USD": 0.0029,
        "BRL": 0.015,
        "EUR": 0.0026,
        "GBP": 0.0023,
        "ARS": 1.0
    }
};

function convertCurrency() {
    let fromCurrency = document.getElementById('fromCurrency').value;
    let toCurrency = document.getElementById('toCurrency').value;
    let amount = parseFloat(document.getElementById('amount').value);
    let result = 0;
    if (!isNaN(amount)) {
        result = amount * exchangeRates[fromCurrency][toCurrency];
    }
    document.getElementById('result').innerText = formatCurrency(result, toCurrency);
}

function formatCurrency(value, currencyCode) {
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: currencyCode,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}