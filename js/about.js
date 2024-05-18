// Get the review container and buttons
const reviewContainer = document.getElementById('review-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Define the reviews array
const reviews = [
  'I have good experience with hunk gym. Gym trainer,gym equipment and gym staff all are good also gym area and cleanliness at its best.When i was joined gym for first time no idea for gym workout so gym gym trainer personally trained me how to do workout and about diet plan.- TEJAS',
  'Well-maintained and supportive for beginners. Gym plans are affordable best in the city.! - Sagar',
  'Hunk gym ensures a clean and organized environment, perfect for beginners. Here, trainers are here to guide you every step of the way.! - Aachal',
  'Hunk Gym and nutrition is my go-to gym. It’s clean, well-organized, and the trainers genuinely care about helping beginners. Plus, the affordable membership options make it a win-win! - Arya',
  'Hunk Gym and Nutrition is a gem for beginners. The 24/7 access fits my busy schedule, and the supportive staff ensures I feel comfortable during my workouts.! - Sarthak',
  'Hunk Gym and Nutrition transformed my health. The clean facilities, personal training options, and supportive environment helped me stay motivated.! - Om',
  // Add more reviews as needed
];

// Define the current review index
let currentIndex = 0;

// Function to show the next reviews
function showNextReviews() {
  // Clear the review container
  reviewContainer.innerHTML = '';
  // Show the next 3 reviews
  for (let i = 0; i < 3; i++) {
    const review = reviews[currentIndex + i];
    const reviewElement = document.createElement('div');
    reviewElement.className = 'eview';
    reviewElement.textContent = review;
    reviewContainer.appendChild(reviewElement);
  }
  // Add the buttons to the review container
  reviewContainer.appendChild(prevBtn);
  reviewContainer.appendChild(nextBtn);
  // Update the current index
  currentIndex += 3;
  // Check if we've reached the end of the reviews
  if (currentIndex >= reviews.length) {
    nextBtn.disabled = true;
  }
  // Enable the previous button
  prevBtn.disabled = false;
}

// Function to show the previous reviews
function showPrevReviews() {
  // Clear the review container
  reviewContainer.innerHTML = '';
  // Show the previous 3 reviews
  for (let i = 0; i < 3; i++) {
    const review = reviews[currentIndex - 3 + i];
    const reviewElement = document.createElement('div');
    reviewElement.className = 'eview';
    reviewElement.textContent = review;
    reviewContainer.appendChild(reviewElement);
  }
  // Add the buttons to the review container
  reviewContainer.appendChild(prevBtn);
  reviewContainer.appendChild(nextBtn);
  // Update the current index
  currentIndex -= 3;
  // Check if we've reached the beginning of the reviews
  if (currentIndex <= 0) {
    prevBtn.disabled = true;
  }
  // Enable the next button
  nextBtn.disabled = false;
}

nextBtn.addEventListener('click', showNextReviews);
prevBtn.addEventListener('click', showPrevReviews);
showNextReviews();



function loadMore1() {
  var contentDiv = document.getElementById("content1");
  var loadMoreBtn = document.getElementById("loadMoreBtn1");

  if (contentDiv.style.display === "none") {
    contentDiv.style.display = "block";
    loadMoreBtn.textContent = "Show Less";
  } else {
    contentDiv.style.display = "none";
    loadMoreBtn.textContent = "Know More";
  }
}