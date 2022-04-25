const SumArray = (arr) => {
    if (!Array.isArray(arr)) return 0
    if (arr.length === 1) return arr[0]

    const pop = arr.pop();
    return SumArray(arr) + pop
}

const Sum = (n) => {
    if (n === 0) return 0
    return Sum(n - 1) + n
}

const Factorial = (n) => {
    if (n <= 1)
        return 1
    return n * Factorial(n - 1)
}

const Fibonacci = (n) => {
    if (n <= 2)
        return [1, 1]
    const acc = Fibonacci(n - 1)
    const length = acc.length;
    acc.push(acc[length - 1] + acc[length - 2])
    return acc
}

const Palindrome = (str) => {
    if (str.length <= 1) return true
    return str.endsWith(str[0]) ? Palindrome(str.slice(1, str.length - 1)) : false
}

const ReverseStr = str => {
    if (str.length <= 1) return str
    return str[str.length - 1] + ReverseStr(str.slice(0, str.length - 1))
}

const Power = (v, times) => {
    if (times === 0) return 1
    return v * Power(v, --times)
}

const GreatestCommonDivision = (x, y) => {
    if (y === 0) return x
    return GreatestCommonDivision(y, x % y)

}

module.exports = {
    Factorial, Fibonacci, SumArray, Sum,
    Palindrome, ReverseStr, Power, GreatestCommonDivision
}