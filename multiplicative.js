function multiplicativePersistence(number) {
    let numArr = number.toString()
        .split("");

    let product = 1;

    for (let i = 0; i < numArr.length; i++) {
        product *= Number(numArr[i]);
    }

    let numStr = number.toString();

    if (numStr.length === 1) {
        return 0;
    } else {
        return 1 + multiplicativePersistence(product);
    }
}

console.log(multiplicativePersistence(932)); // 932 => 54 => 20 => 0