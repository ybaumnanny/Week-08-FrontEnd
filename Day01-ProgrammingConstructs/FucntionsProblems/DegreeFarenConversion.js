function convertTemperature(value, conversionType) {
    switch (conversionType) {
        case 'CtoF':
            if (value < 0 || value > 100) {
                return "Error: Celsius temperature must be between 0°C and 100°C.";
            }
            return `${value}°C is ${(value * 9/5 + 32).toFixed(2)}°F`;
        
        case 'FtoC':
            if (value < 32 || value > 212) {
                return "Error: Fahrenheit temperature must be between 32°F and 212°F.";
            }
            return `${value}°F is ${((value - 32) * 5/9).toFixed(2)}°C`;
        
        default:
            return "Error: Invalid conversion type. Use 'CtoF' or 'FtoC'.";
    }
}
// Example usage:
console.log(convertTemperature(25, 'CtoF')); 
console.log(convertTemperature(77, 'FtoC'));
console.log(convertTemperature(150, 'CtoF')); 
console.log(convertTemperature(20, 'FtoC')); 