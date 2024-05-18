
const reviewContainer = document.getElementById('review-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

const reviews = [
  'I have good experience with hunk gym. Gym trainer,gym equipment and gym staff all are good also gym area and cleanliness at its best.When i was joined gym for first time no idea for gym workout so gym gym trainer personally trained me how to do workout and about diet plan.- TEJAS',
  'Well-maintained and supportive for beginners. Gym plans are affordable best in the city.! - Sagar',
  'Hunk gym ensures a clean and organized environment, perfect for beginners. Here, trainers are here to guide you every step of the way.! - Aachal',
  'Hunk Gym and nutrition is my go-to gym. It’s clean, well-organized, and the trainers genuinely care about helping beginners. Plus, the affordable membership options make it a win-win! - Arya',
  'Hunk Gym and Nutrition is a gem for beginners. The 24/7 access fits my busy schedule, and the supportive staff ensures I feel comfortable during my workouts.! - Sarthak',
  'Hunk Gym and Nutrition transformed my health. The clean facilities, personal training options, and supportive environment helped me stay motivated.! - Om',
 
];

let currentIndex = 0;

function showNextReviews() {
  reviewContainer.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    const review = reviews[currentIndex + i];
    const reviewElement = document.createElement('div');
    reviewElement.className = 'eview';
    reviewElement.textContent = review;
    reviewContainer.appendChild(reviewElement);
  } 
  reviewContainer.appendChild(prevBtn);
  reviewContainer.appendChild(nextBtn);
  
  currentIndex += 3;
  
  if (currentIndex >= reviews.length) {
    nextBtn.disabled = true;
  }
 
  prevBtn.disabled = false;
}


function showPrevReviews() {
 
  reviewContainer.innerHTML = '';
 
  for (let i = 0; i < 3; i++) {
    const review = reviews[currentIndex - 3 + i];
    const reviewElement = document.createElement('div');
    reviewElement.className = 'eview';
    reviewElement.textContent = review;
    reviewContainer.appendChild(reviewElement);
  }
  
  reviewContainer.appendChild(prevBtn);
  reviewContainer.appendChild(nextBtn);
 
  currentIndex -= 3;
 
  if (currentIndex <= 0) {
    prevBtn.disabled = true;
  }
 
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