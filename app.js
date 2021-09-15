const fs = require('fs');
const geneatePage = require("./src/page-template.js");

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;



fs.writeFileSync('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete!  Check out index.html to see the output!');
});
  
