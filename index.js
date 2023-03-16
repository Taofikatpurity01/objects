// question
// here is example of how to create an instagram post constructor function that takes the specified properties as argument using javascript
function instagramPost(authorHandle, content, imageLink, views, likes){
    this.authorHandle= authorHandle;
    this.content=content;
    this.imageLink=imageLink;
    this.views=views;
    this.likes=likes;
}
// this constructor function takes five arguments: authorHandle,content,imageLink,views and likes. when you create a new instagramPost Object, you can pass in the value for this properties like this:
const post1 = new instagramPost("john_doe", "check out my new ride!", "https://example.com/car.jpg", 5000, 200);
console.log(post1.authorHandle);//"john_doe"
console.log(post1.content);//"chect out my new ride!"
console.log(post1.imageLink);//"https://example.com/car.jpg"
console.log(post1.views);//"5000"
console.log(post1.likes);//"200"


// question 2
// create two instagrampost object using the constructor function
const post1= new instagramPost('john_doe', 'had a great time at the concert last night', 'https://example.com/concert.jpg',8000, 400);
const post2= new instagramPost('jane_smith', 'just anoter day at the beach', 'https://example.com/beach.jpg',10000, 500)

console.log(post1.authorHandle);//'jane_smith'
console.log(post1.content);//'just anoter day at the beach'
console.log(post1.imageLink);//"https://example.com/beach.jpg"
console.log(post1.views);//"10000"
console.log(post1.likes);//"500"

console.log(post1.authorHandle);//'john_doe'
console.log(post1.content);//'had a great time at the concert last night
console.log(post1.imageLink);//"https://example.com/concert.jpg"
console.log(post1.views);//"8000"
console.log(post1.likes);//"400"

// question 3
// factory function that create a person object
function createPerson(eng, govt, lit, crk){
  return{
    name,
    age,
    location
  }
} 
// factory function that create a jamb score object
function createJambScores(name, age, location){
    return{
        ENG:eng,
        GOVT:govt,
        LIT:lit,
        CRK:crk
    };
}
const musa=createPerson('Musa Dawodu', 19, 'lekki, lagos state');
const musajambscore=createJambScores(70,85,82, 94)
console.log(musa.name);//'Musa Dawodu'
console.log(musa.age);//19
console.log(musa.location);//'lekki, lagos state'

console.log(musa.jambScore.ENG);//70
console.log(musa.jambScore.GOVT);//85
console.log(musa.jambScore.LIT);//82
console.log(musa.jambScore.CRK);//94

// question 4
// spread operator:this is a newer way to creat a shallo

// question 5
const presidentialCandidates={
    AAC:'Omoyele sowore',
    ACCORD:'Chriatopha imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP:'Peter obi',
    NNPP: 'Rabiu Kwakwanso',
    PDP: 'Atiku Abubakar',
};
for(const party in presidentialCandidate){
    console.log('${presidentialCandidates[party]} is the presidentialCandidates of $ [party']);
}