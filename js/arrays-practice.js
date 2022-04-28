//STEP 1
// let movies = ['Back to the Future', 'Shawshank Redemption', 'Jurassic Park', 'Goodfellas', 'Indiana Jones'];
// console.log(movies[1]);
//STEP 2
// let movies = new Array(5);
// movies[0] = 'Back to the Future';
// movies[1] = 'Shawshank Redemption';
// movies[2] = 'Jurassic Park';
// movies[3] = 'Goodfellas';
// movies[4] = 'Indiana Jones';
// console.log(movies[0]);
//STEP 3
// let movies = new Array(5);
// movies[0] = 'Back to the Future';
// movies[1] = 'Shawshank Redemption';
// movies[2] = 'Saving Private Ryan';
// movies[3] = 'Jurassic Park';
// movies[4] = 'Goodfellas';
// movies[5] = 'Indiana Jones';
// console.log(movies.length);
//STEP 4
// let movies = ['Back to the Future', 'Shawshank Redemption', 'Jurassic Park', 'Goodfellas', 'Indiana Jones'];
// delete movies[0];
// console.log(movies);
//STEP 5
// let movies = ['Back to the Future', 'Shawshank Redemption', 'Jurassic Park', 'Goodfellas', 'Indiana Jones', 'Saving Private Ryan', 'Star Wars'];
// for (let i in movies){
//     console.log(movies[i]);
// }

//STEP 6
// let movies = ['Back to the Future', 'Shawshank Redemption', 'Jurassic Park', 'Goodfellas', 'Indiana Jones', 'Saving Private Ryan', 'Star Wars'];
// for (let i of movies){
//     console.log(i);
// }
//STEP 7
// let movies = ['Back to the Future', 'Shawshank Redemption', 'Jurassic Park', 'Goodfellas', 'Indiana Jones', 'Saving Private Ryan', 'Star Wars'];
// for (let i of movies){
//     console.log(i);
//     movies.sort();
// }
//STEP 8
// let movies = ['Back to the Future', 'Shawshank Redemption', 'Jurassic Park', 'Goodfellas', 'Indiana Jones', 'Saving Private Ryan', 'Star Wars'];
// let leastFavMovies = ['Indiana Jones Crystal Skull', 'Star Wars 1-3', 'The Happening'];
// console.log(`Movies I like:`);
// for (let i in movies){
//     console.log(movies[i]);
// }
// console.log(`Movies I regret watching:`);
// for (let i in leastFavMovies){
//     console.log(leastFavMovies[i]);
// }
//STEP 9
// let movies = ['Back to the Future', 'Shawshank Redemption', 'Jurassic Park', 'Goodfellas', 'Indiana Jones', 'Saving Private Ryan', 'Star Wars'];
// let leastFavMovies = ['Indiana Jones Crystal Skull', 'Star Wars 1-3', 'The Happening'];
// console.log(`Movies I like:`);
// for (let i in movies){
//     console.log(movies[i]);
// }
// console.log(`Movies I regret watching:`);
// for (let i in leastFavMovies){
//     console.log(leastFavMovies[i]);
// }
// movies = movies.concat(leastFavMovies);
// console.log(movies.reverse());
//STEP 10
// let movies = ['Back to the Future', 'Shawshank Redemption', 'Jurassic Park', 'Goodfellas', 'Indiana Jones', 'Saving Private Ryan', 'Star Wars'];
// let leastFavMovies = ['Indiana Jones Crystal Skull', 'Star Wars 1-3', 'The Happening'];
// console.log(`Movies I like:`);
// for (let i in movies){
//     console.log(movies[i]);
// }
// console.log(`Movies I regret watching:`);
// for (let i in leastFavMovies){
//     console.log(leastFavMovies[i]);
// }
// movies = movies.concat(leastFavMovies);
// console.log(movies.reverse());
// last = movies[movies.length - 1]; 
// console.log(last);
//STEP 11
// let movies = ['Back to the Future', 'Shawshank Redemption', 'Jurassic Park', 'Goodfellas', 'Indiana Jones', 'Saving Private Ryan', 'Star Wars'];
// let leastFavMovies = ['Indiana Jones Crystal Skull', 'Star Wars 1-3', 'The Happening'];
// console.log(`Movies I like:`);
// for (let i in movies){
//     console.log(movies[i]);
// }
// console.log(`Movies I regret watching:`);
// for (let i in leastFavMovies){
//     console.log(leastFavMovies[i]);
// }
// movies = movies.concat(leastFavMovies);
// console.log(movies.reverse());
// first = movies[0]; 
// console.log(first);
//STEP 12
// let movies = ['Back to the Future', 'Shawshank Redemption', 'Jurassic Park', 'Goodfellas', 'Indiana Jones', 'Saving Private Ryan', 'Star Wars'];
// let leastFavMovies = ['Indiana Jones Crystal Skull', 'Star Wars 1-3', 'The Happening'];
// console.log(`Movies I like:`);
// for (let i in movies){
//     console.log(movies[i]);
// }
// console.log(`Movies I regret watching:`);
// for (let i in leastFavMovies){
//     console.log(leastFavMovies[i]);
// }
// movies = movies.concat(leastFavMovies);
// let replaced = movies.splice(7, 3, 'Pulp Fiction',  'Dune', 'Beetlejuice');
// console.log(movies);

//STEP 13
// let movies = [['BTTF',1], ['Dune',2], ['Beetlejuice',3], ['Goodfellas',4], ['JPark',5]];
// let firstIndex = [];
// for (let i=0; i <movies.length;i++) {
//     firstIndex = movies[i][0]; 
//     console.log(firstIndex);
// }
//     let movieNames = firstIndex.filter((item) => {
//        return typeof item === 'string'; 
//     }); 

//     console.log(movieNames);


// STEP 14
// let employees = ['Joe', 'Jessica', 'Stan', 'Joed', 'Eli'];
// function showEmployee(person) {
//     for (let i =0; i < employees.length ;i++)
//         console.log(person[i]);
// }
// showEmployee(employees);
//STEP 15

//STEP 16
// let numbers = [2,4,6,8,10];
// function randNum(example){
//     let rand = example[Math.floor(Math.random()*example.length)];
//     console.log(rand);
// }
// randNum(numbers); 

//STEP 17
// let numbers = [2,4,6,8,10,55];
// function maxNum(example){
//     let max = Math.max.apply(null, example);
//     console.log(max);
// }
// maxNum(numbers);