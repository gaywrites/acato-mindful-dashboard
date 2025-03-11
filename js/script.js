// EWU Graduation Date ---------------------------------
const gradDay = "2025-06-23";
const daysUntilGrad = getDaysUntilEvent(gradDay);
console.log(daysUntilGrad);

// Format graduation date for display
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

// Get HTML elements
const elemDaysUntilGrad = document.querySelector(".daysUntilGraduation");
const elemGraduationDate = document.querySelector(".graduationDate");

// Set graduation days remaining
elemDaysUntilGrad.textContent = daysUntilGrad;
elemDaysUntilGrad.setAttribute("datetime", daysUntilGrad);

// Set graduation date
const formattedGradDate = formatDate(gradDay);
// elemGraduationDate.textContent = formattedGradDate;
//---------------------------------------------------------

//---------------------------------------------------------
// Streak of Days
const startDate = "2025-01-01";
const streakOfMeditation = getDayStreak(startDate);
console.log(streakOfMeditation);

// Get HTML element
const elemMeditationStreak = document.querySelector(".streakOfMeditation");
// Set to HTML element
elemMeditationStreak.textContent = streakOfMeditation;
elemMeditationStreak.setAttribute("datetime", streakOfMeditation);

//---------------------------------------------------------


//---------------------------------------------------------
// Age calculation function
function calculateAge(birthDate) {
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  
  // Adjust age if birthday hasn't occurred yet this year
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

// Function to update the age in the HTML
function updateAgeOfPerson() {
  // My birth date
  const birthDate = "1977-11-29";
  
  // Calculate the age
  const ageOfPerson = calculateAge(birthDate);
  
  // Get the time element
  const elemAgeOfPerson = document.querySelector(".ageOfPerson");
  
  // Update the text content
  if (elemAgeOfPerson) {
    elemAgeOfPerson.textContent = ageOfPerson;
    // Update the datetime attribute with the calculated age
    elemAgeOfPerson.setAttribute("datetime", ageOfPerson);
  }
}

// Call the function immediately in CodePen
updateAgeOfPerson();
//---------------------------------------------------------------

/*------------------------------------------
Nothing to see here :)
Made by @screenshake
linkedin.com/in/saranshsinha */
// https://codepen.io/gaywrites/pen/wBvrwNK
//------------------------------------------


// This script generates the random star shadows that would normally be created by SASS
document.addEventListener('DOMContentLoaded', function() {
  // Helper function to generate random number between min and max
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  
  // Helper function to generate multiple box shadows
  function generateMultipleBoxShadow(n) {
    let value = `${random(1, 2000)}px ${random(1, 2000)}px #FFF`;
    for (let i = 2; i <= n; i++) {
      value = `${value}, ${random(1, 2000)}px ${random(1, 2000)}px #FFF`;
    }
    return value;
  }
  
  // Generate shadows
  const shadowsSmall = generateMultipleBoxShadow(700);
  const shadowsMedium = generateMultipleBoxShadow(200);
  const shadowsBig = generateMultipleBoxShadow(100);
  
  // Apply shadows to elements
  const stars1 = document.getElementById('stars');
  const stars2 = document.getElementById('stars2');
  const stars3 = document.getElementById('stars3');
  
  if (stars1) {
    stars1.style.boxShadow = shadowsSmall;
    // Create the :after element programmatically since we can't style it directly with JS
    const style = document.createElement('style');
    style.innerHTML = `
      #stars:after {
        box-shadow: ${shadowsSmall};
      }
    `;
    document.head.appendChild(style);
  }
  
  if (stars2) {
    stars2.style.boxShadow = shadowsMedium;
    const style = document.createElement('style');
    style.innerHTML = `
      #stars2:after {
        box-shadow: ${shadowsMedium};
      }
    `;
    document.head.appendChild(style);
  }
  
  if (stars3) {
    stars3.style.boxShadow = shadowsBig;
    const style = document.createElement('style');
    style.innerHTML = `
      #stars3:after {
        box-shadow: ${shadowsBig};
      }
    `;
    document.head.appendChild(style);
  }
});