module.exports = function reverse(n) {
    const int = n.toString().split("");

    if (int[0] === "-") {
        int.shift();
    } else if (int[int.legth - 1] === 0) {
        int.pop();
    }

    return +int.reverse().join("");
};
