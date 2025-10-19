//STEP 1
window.console.log("\nStep 1: ");
var x = ['Inglourious Basterds', 'Pulp Fiction', 'The Godfather', 'The Departed', 'American beauty'];
window.console.log('Second Movie: ', x[1]);
//STEP 2
window.console.log("\nStep 2: ");
var movies = new Array(5);
movies[0] = 'Inglourious Basterds';
movies[1] = 'Pulp Fiction';
movies[2] = 'The Godfather';
movies[3] = 'The Departed';
movies[4] = 'American beauty';
window.console.log('First Movie: ', movies[0]);
//STEP 3
window.console.log("\nStep 3: ");
var movies = new Array(5);
movies[0] = 'Inglourious Basterds';
movies[1] = 'Pulp Fiction';
movies[2] = 'The Godfather';
movies[3] = 'The Departed';
movies[4] = 'American beauty';
movies.splice(2, 0, 'The Dark Knight');
window.console.log('New Array Length:', movies.length);
//STEP 4
window.console.log("\nStep 4: ");
var movies = [];
movies[0] = 'Inglourious Basterds';
movies[1] = 'Pulp Fiction';
movies[2] = 'The Godfather';
movies[3] = 'The Departed';
movies[4] = 'American beauty';
delete movies[0];
window.console.log(movies);
//STEP 5
var movies = [];
var i;
movies[0] = 'Inglourious Basterds';
movies[1] = 'Pulp Fiction';
movies[2] = 'The Godfather';
movies[3] = 'The Departed';
movies[4] = 'American beauty';
movies[5] = 'The Dark Knight';
movies[6] = 'Saving Private Ryan';
window.console.log('Step 5\n');
for(i=0;i<movies.length;i++) {
    window.console.log((i+1) + '. ' + movies[i]);
}
//STEP 6
var movies = [];
var i;
movies[0] = 'Inglourious Basterds';
movies[1] = 'Pulp Fiction';
movies[2] = 'The Godfather';
movies[3] = 'The Departed';
movies[4] = 'American beauty';
movies[5] = 'The Dark Knight';
movies[6] = 'Saving Private Ryan';
window.console.log('Step 6\n');
for(i in movies) {
    window.console.log((parseInt(i)+1) + '. ' + movies[i]);
}
//STEP 7
var movies = [];
var i;
movies[0] = 'Inglourious Basterds';
movies[1] = 'Pulp Fiction';
movies[2] = 'The Godfather';
movies[3] = 'The Departed';
movies[4] = 'American beauty';
movies[5] = 'The Dark Knight';
movies[6] = 'Saving Private Ryan';
movies.sort();
window.console.log('Step 7\n');
for(i in movies) {
    window.console.log((parseInt(i)+1) + '. ' + movies[i]);
}
//STEP 8
var movies = [];
var leastFavMovies = [];
var i;
movies[0] = 'Inglourious Basterds';
movies[1] = 'Pulp Fiction';
movies[2] = 'The Godfather';
movies[3] = 'The Departed';
movies[4] = 'American beauty';
movies[5] = 'The Dark Knight';
movies[6] = 'Saving Private Ryan';
leastFavMovies[0] = 'Joker';
leastFavMovies[1] = 'Doctor Strange in the Multiverse of Madness';
leastFavMovies[2] = 'Fantastic Four';
window.console.log('Step 8\n\nMovies I like:\n\n');
for(i=0;i<movies.length;i++) {
    window.console.log((i+1) + '. ' + movies[i]);
}
window.console.log('\nMovies I regret watching:\n\n');
for(i=0;i<leastFavMovies.length;i++) {
    window.console.log((i+1) + '. ' + leastFavMovies[i]);
}
window.console.log('\n');
//STEP 9
var movies = [];
var leastFavMovies = [];
var i;
movies[0] = 'Inglourious Basterds';
movies[1] = 'Pulp Fiction';
movies[2] = 'The Godfather';
movies[3] = 'The Departed';
movies[4] = 'American beauty';
movies[5] = 'The Dark Knight';
movies[6] = 'Saving Private Ryan';
leastFavMovies[0] = 'Joker';
leastFavMovies[1] = 'Doctor Strange in the Multiverse of Madness';
leastFavMovies[2] = 'Fantastic Four';
movies = movies.concat(leastFavMovies);
window.console.log('Step 9\nMerged Array in reverse sorted order:\n\n');
movies.sort().reverse();
for(i=0;i<movies.length;i++) {
    window.console.log((i+1) + '. ' + movies[i]);
}
//STEP 10
var movies = [];
var leastFavMovies = [];
movies[0] = 'Inglourious Basterds';
movies[1] = 'Pulp Fiction';
movies[2] = 'The Godfather';
movies[3] = 'The Departed';
movies[4] = 'American beauty';
movies[5] = 'The Dark Knight';
movies[6] = 'Saving Private Ryan';
leastFavMovies[0] = 'Joker';
leastFavMovies[1] = 'Doctor Strange in the Multiverse of Madness';
leastFavMovies[2] = 'Fantastic Four';
movies = movies.concat(leastFavMovies);
movies.sort().reverse();
window.console.log("\nStep 10: ");
window.console.log('\nLast Element of the array: ',movies.slice(-1));
