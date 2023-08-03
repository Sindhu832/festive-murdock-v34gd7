//Team Data
const team = [
  {
    id: "anna",
    fullName: "Anna Kendrick",
    jobTitle: "Front-end Ninja",
    bio:
      "Bibliophile, loves to dive into fictional worlds, ships JS code like brownies",
    avatar: "https://avatars.dicebear.com/api/avataaars/annakendrick.svg"
  },
  {
    id: "harry",
    fullName: "Harry Fawn",
    jobTitle: "Illustrator",
    bio:
      "Creates new illustrations each week, will kill for coffee, and loves beaches",
    avatar: "https://avatars.dicebear.com/api/avataaars/harryfn.svg"
  },
  {
    id: "sofia",
    fullName: "Sofia Sultan",
    jobTitle: "Backend Engineer",
    bio:
      "Donuts over waffles. Martinis over whiskeys. Typescript over anything.",
    avatar: "https://avatars.dicebear.com/api/avataaars/sofiasul.svg"
  }
];

//Modify Code below this line

//Content Selected using ID.
const content = document.getElementById("content");

const getImageElement = (src, alt) => {
  const cardImage = document.createElement("img");
  cardImage.src = src;
  cardImage.alt = alt;
  cardImage.height = 100;
  cardImage.width = 100;

  return cardImage;
};

function generateCard(id, fullName, jobTitle, bio, avatar) {
  //1. Create a new "section" element and set the className and id
  const cardBody = document.createElement("div");
  cardBody.classList.add("team-member");
  cardBody.id = id;
  //2. Generate the image using getImageElement() function
  //Hint - Use fullname as alt for the image.
  const cardImg = getImageElement(avatar, fullName);
  cardBody.append(cardImg);
  //3. Create a div for text content
  const cardText = document.createElement("div");
  //4. Create an h2 for fullName
  const name = document.createElement("h2");
  //5. Create an h3 for jobTitle
  const job = document.createElement("h3");
  job.innerText = jobTitle;
  //6. Create a p for bio
  const bioText = document.createElement("p");
  bioText.innerText = bio;
  //7. Append the fullName, jobTitle, and bio element
  //   to the div created for text.
  cardText.append(name);
  cardText.append(job);
  cardText.append(bioText);

  cardBody.append(cardText);
  //8. Append the Image and the Text div
  //   to the new section you created in step 1
  content.append(cardBody);
  //Return the new section element created.

  return cardBody;
}

function generateCardArray(data) {
  // const cards = [];
  // //Add logic to populate `cards` array below

  // //Return cards array
  // return cards;
  for (let i = 0; i < team.length; i++) {
    let member = team[i];
    generateCard(
      member.id,
      member.fullName,
      member.jobTitle,
      member.bio,
      member.avatar
    );
  }
}

// const cardsArray = generateCardArray(team);

// //Run a loop for the cardsArray and append its elements to content.
// for (let card of cardsArray) {
//   content.append(card);
// }
// //Modify Code above this line

generateCardArray(team);
console.log(content);
