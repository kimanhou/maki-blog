// --color-super-light-green: rgb(204,236,236);
// --color-dark-green: rgb(47,79,79);
const calculateValueOfBackgroundColor = (from : number, to : number, distance : number, distanceTotale : number) => {
    return from + (to - from) * (distance / distanceTotale);
}

const getBackgroundColor = (distance : number, distanceTotale : number) => {
    if (distanceTotale == 0) {
        return `rgb(204,236,236)`;
    }
    return `rgb(${calculateValueOfBackgroundColor(204, 47, distance, distanceTotale)}, ${calculateValueOfBackgroundColor(236, 79, distance, distanceTotale)}, ${calculateValueOfBackgroundColor(236, 79, distance, distanceTotale)})`;
}

export default getBackgroundColor;