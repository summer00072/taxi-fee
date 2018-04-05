module.exports = function taxiFee(inputs) {
    if (!inputs || inputs.distance <= 0 || inputs.parkingTime < 0) {
    	return false;
    }
    let summary = 0;
    let distance_value = inputs.distance;
    if (distance_value <= 2) {
    	summary = 6;
    } else if (2 < distance_value && distance_value<= 8) {
    	summary = 6 + ((distance_value - 2) * 0.8);
    } else {
    	summary = 10.8 + ((distance_value - 8) * 1.2);
    }
    let parkingTime_value = inputs.parkingTime;  
    summary += (parkingTime_value * 0.25);
    return Math.round(summary);
};