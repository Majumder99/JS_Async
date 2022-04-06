//JS Callback
// function myCalc(res) {
//   document.getElementById("demo").innerHTML = res;
// }
// function calSum(a, b, myCallback) {
//   let s = a + b;
//   myCallback(s);
// }
// calSum(5, 5, myCalc);
const posts = [
  {
    title: "Post One",
    body: "This is past one",
  },
  {
    title: "Post Two",
    body: "This is past two",
  },
];
function getPosts() {
  setTimeout(() => {
    let output = "";
    // posts.forEach((post, index) => {
    //   output += "<li>${post.title}</li>";
    // });
    for (let x of posts) {
      output += x.title + " ";
    }
    document.body.innerHTML = output;
  }, 2000);
}
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}

// createPost({ title: "Post Three", body: "This is post three" })
//   .then(getPosts)
//   .catch((err) => console.log(err));

//Async / await
async function init() {
  await createPost({ title: "Post Three", body: "This is post three" });
  getPosts();
}
init();

// Promise.all
// const promise1 = Promise.resolve("Hello world");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "Goodbye")
// );
// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );
// Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
//   console.log(values)
// );
