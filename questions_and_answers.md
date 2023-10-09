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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>A variable named "greeting" is declared but not initialized with a value. Then, a typo occurs when trying to assign an empty object to "greetign" (note the extra 'n' in the variable name). As a result, "greetign" is a new variable, and an empty object {} is assigned to it. When you log "greetign," it will display the empty object {}.</i>

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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>The sum function takes two parameters a and b and attempts to add them together using the + operator. In JavaScript, when you use the + operator with a string and a number, it performs string concatenation, not numerical addition. So, in this case, it concatenates the number 1 and the string "2" to form the string "12," resulting in the answer "12."</i>

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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>A food array is defined with four elements. Then, an info object is created with a favoriteFood property that initially references the first element of the food array, which is "🍕". Later, the info.favoriteFood property is reassigned to "🍝". However, this reassignment does not affect the original food array, so when you log food, it remains unchanged and prints ['🍕', '🍫', '🥑', '🍔'].</i>

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

<details><summary><b>SayHi, there is a parameter name, but when you call the function with sayHi(), you don't provide any argument. In JavaScript, when a function is called with missing arguments, the missing parameters are assigned the value undefined by default. Therefore, in this case, name inside the function is undefined, resulting in the string "Hi there, " being returned and printed when you log the result.</b></summary>
<p>

#### Answer: A

<i>An array nums containing four elements. The forEach method is used to iterate over each element of the array. Inside the callback function, there's a conditional check if (num) which evaluates to true for all elements in the array except for the first one.
So, the callback function increments the count variable for every element in nums except the first one. Since there are three elements (1, 2, and 3) that satisfy the condition, count is incremented three times, resulting in a final value of 3 when you log it.</i>

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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Write your explanation here</i>

</p>
</details>
