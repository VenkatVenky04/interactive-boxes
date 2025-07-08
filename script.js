const radios = document.querySelectorAll('input[name="unit"]');
    const totalPrice = document.getElementById('totalPrice');
    const selectors = document.getElementById('selectors');

    const prices = {
      1: 10,
      2: 18,
      3: 24
    };

    radios.forEach(radio => {
      radio.addEventListener('change', () => {
        const value = radio.value;
        totalPrice.textContent = `$${prices[value]}.00 USD`;

        // Show/hide dropdowns based on unit
        if (value === "2") {
          selectors.style.display = 'grid';
        } else {
          selectors.style.display = 'none';
        }
      });
    });

    // Initial state setup
    if (document.querySelector('input[name="unit"]:checked').value !== '2') {
      selectors.style.display = 'none';
    }