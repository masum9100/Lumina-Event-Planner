<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>A</b></summary>
<p>

#### Answer: A: `{}`

<i>A is correct because after fixing the typo in the code, it declares a variable greeting using let, and then assigns an empty object {} to it.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>A</b></summary>
<p>

#### Answer: A: `NaN`

<i>In the given code, the function sum takes two arguments a and b and returns their sum.

When you call sum(1, "2"), JavaScript tries to add a number (1) to a string ("2"). In this situation, JavaScript attempts to perform type coercion to make the operation work. It converts the number 1 to a string and concatenates it with "2", resulting in the string "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>A: ['🍕', '🍫', '🥑', '🍔']</b></summary>
<p>

#### Answer: A: ['🍕', '🍫', '🥑', '🍔']

<i>const food = ["🍕", "🍫", "🥑", "🍔"];: This line initializes an array food containing four elements.

const info = { favoriteFood: food[0] };: This line creates an object info with a property favoriteFood which is set to the first element of the food array, which is "🍕".

info.favoriteFood = "🍝";: This line changes the value of the favoriteFood property in the info object to "🍝".

console.log(food);: This prints out the food array.

</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>B: Hi there, undefined</b></summary>
<p>

#### Answer: B: Hi there, undefined

<i>In the function sayHi, there is a parameter name. When you call sayHi() without passing any arguments, name is not provided a value. In JavaScript, when a parameter is not provided a value, it takes the value of undefined by default.

So, the function call sayHi() results in the string "Hi there, undefined" being returned. This is why option B is the correct answer.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>B: 2</b></summary>
<p>

#### Answer: B: 2

<i>In this code snippet, count is initialized to 0 and nums is an array [0, 1, 2, 3].

The forEach method iterates over each element of the array nums and applies the provided function (an arrow function in this case) to each element.

In JavaScript, 0 is considered as a "falsy" value in a boolean context, meaning it is treated as false. The condition if (num) checks if the current num is truthy (i.e., not 0).

Since only 1, 2, and 3 are considered truthy, the function inside the forEach will only increment count for these values.

As a result, count will be incremented by 1 for each of these three values. So, count will be 3 by the end of the loop, and that's what will be printed by console.log(count)</i>

</p>
</details>