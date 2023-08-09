export const shuffleArray = (arr: Array<any>) => {
    const shuffledArr = arr.slice();  // Create a copy of the original array
    for (let i = shuffledArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));  // Generate a random index
        [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];  // Swap elements
    }
    return shuffledArr;
}