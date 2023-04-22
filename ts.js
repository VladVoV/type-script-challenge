"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const container = document.querySelector('.container');
const firstTaskButton = document.querySelector('.button-1-task');
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = yield response.json();
        for (const post of posts) {
            const postNode = document.createElement('div');
            postNode.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            `;
            container === null || container === void 0 ? void 0 : container.appendChild(postNode);
        }
        return posts;
    }
    catch (error) {
        if (error instanceof Error) {
            return error.message;
        }
        return "Something went wrong, please try again later";
    }
});
function updateObjectInArray(initialArray, key, value, patch) {
    const newArray = [...initialArray];
    const index = newArray.findIndex((obj) => obj[key] === value);
    if (index === -1) {
        return newArray;
    }
    const updatedObject = Object.assign(Object.assign({}, newArray[index]), patch);
    newArray[index] = updatedObject;
    return newArray;
}
const people = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
];
const updatedPeople = updateObjectInArray(people, 'id', 2, {
    age: 31,
    name: 'Alex'
});
console.log(updatedPeople);
firstTaskButton === null || firstTaskButton === void 0 ? void 0 : firstTaskButton.addEventListener('click', fetchData);
