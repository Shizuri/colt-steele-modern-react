function randomPicker(array) {
    return (
        array[Math.floor(Math.random() * array.length)]
    );
}

export { randomPicker };