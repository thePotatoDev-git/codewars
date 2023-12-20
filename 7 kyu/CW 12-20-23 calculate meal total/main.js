// Create a function that returns the total of a meal including tip and tax. You should not tip on the tax.

// You will be given the subtotal, the tax as a percentage and the tip as a percentage. Please round your result to two decimal places.

// **Solution**

function calculate_total(subtotal, tax, tip) {
    // Change tax and tip percentages into decimal values
    // Calculate the tax and tip values separately
    // Sum all three values and return 2 decimal places
    
    const taxAmount = subtotal * (tax * 0.01);
    const tipAmount = subtotal * (tip * 0.01);
    
    return Number((subtotal + taxAmount + tipAmount).toFixed(2));
}