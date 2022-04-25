const {Factorial, Fibonacci, Sum, SumArray, Palindrome, ReverseStr, Power, GreatestCommonDivision} = require("./recursion.js");


test('getting Factorial', async () => {
    expect(Factorial( 5)).toStrictEqual(120)
    expect(Factorial( 6)).not.toStrictEqual(120)
})

test('getting Fibonacci', async () => {
    expect(Fibonacci( 5)).toStrictEqual([1,1,2,3,5])
    expect(Fibonacci( 6)).not.toStrictEqual([1,1,2,3,5])
})

test('getting SumArray', async () => {
    expect(SumArray( 10)).toStrictEqual(0)
    expect(SumArray( [1,2,3])).toStrictEqual(6)
    expect(SumArray( [2,2,2,2])).toStrictEqual(8)
})

test('getting Sum', async () => {
    expect(Sum( 0)).toStrictEqual(0)
    expect(Sum( 1)).toStrictEqual(1)
    expect(Sum( 3)).toStrictEqual(6)
})

test('getting Palindrome', async () => {
    expect(Palindrome( "")).toBeTruthy()
    expect(Palindrome( "a")).toBeTruthy()
    expect(Palindrome( "aa")).toBeTruthy()
    expect(Palindrome( "aba")).toBeTruthy()
    expect(Palindrome( "abba")).toBeTruthy()
    expect(Palindrome( "abab")).toBeFalsy()
    expect(Palindrome( "abb")).toBeFalsy()
    expect(Palindrome( "ab")).toBeFalsy()
})

test('getting ReverseStr', async () => {
    expect(ReverseStr( "")).toStrictEqual("")
    expect(ReverseStr( "a")).toStrictEqual("a")
    expect(ReverseStr( "ab")).toStrictEqual("ba")
    expect(ReverseStr( "abc")).toStrictEqual("cba")
})


test('getting ReverseStr', async () => {
    expect(Power(2, 0)).toStrictEqual(1)
    expect(Power(2, 1)).toStrictEqual(2)
    expect(Power(2, 2)).toStrictEqual(4)
    expect(Power(2, 3)).toStrictEqual(8)
})

test('getting GreatestCommonDivision', async () => {
    expect(GreatestCommonDivision(4, 0)).toStrictEqual(4)
    expect(GreatestCommonDivision(4, 2)).toStrictEqual(2)
    expect(GreatestCommonDivision(54, 24)).toStrictEqual(6)
})