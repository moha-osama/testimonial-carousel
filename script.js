const DUMMYDATA = [
  {
    quote:
      "Upheal has granted me time, but more importantly - energy! The quality of my work AND my life has improved significantly since incorporating Upheal and its AI technology into my practice.",
    name: "Alison Morogiello",
    title: "Licensed Professional Counselor",
    location: "USA",
    authorImg:
      "https://imageio.forbes.com/specials-images/imageserve/666b150e10794140876a9a08/William-Shakespeare-holding-a-pen-/0x0.jpg?format=jpg&crop=1488,1328,x0,y123,safe&width=960",
  },
  {
    quote:
      "Your AI is incredible! Not only does it save me time and energy completing my therapy notes, it also captures the clinical information I need. I will definitely work on enrolling more clients!",
    name: "Melissa Bartholomew",
    title: "Licensed Mental Health Counselor",
    location: "USA",
    authorImg:
      "https://imageio.forbes.com/specials-images/imageserve/666b150e10794140876a9a08/William-Shakespeare-holding-a-pen-/0x0.jpg?format=jpg&crop=1488,1328,x0,y123,safe&width=960",
  },
  {
    quote:
      "I was concerned I'd have to cut my sessions short so I wouldn’t have to stay up until midnight, doing notes. You have a brilliant thing going and it’s a must-have for many professionals like me.",
    name: "Linda Salomone",
    title: "Ph.D., LPCC",
    location: "USA",
    authorImg:
      "https://imageio.forbes.com/specials-images/imageserve/666b150e10794140876a9a08/William-Shakespeare-holding-a-pen-/0x0.jpg?format=jpg&crop=1488,1328,x0,y123,safe&width=960",
  },
  {
    quote:
      "Upheal has been a game-changer for my practice. It saves me hours every week, allowing me to focus more on my clients and less on paperwork.",
    name: "John Doe",
    title: "Clinical Psychologist",
    location: "UK",
    authorImg:
      "https://imageio.forbes.com/specials-images/imageserve/666b150e10794140876a9a08/William-Shakespeare-holding-a-pen-/0x0.jpg?format=jpg&crop=1488,1328,x0,y123,safe&width=960",
  },
  {
    quote:
      "I never knew documentation could be this easy and efficient. The AI is spot-on with capturing insights from my sessions.",
    name: "Emma Thompson",
    title: "Mental Health Therapist",
    location: "Canada",
    authorImg:
      "https://imageio.forbes.com/specials-images/imageserve/666b150e10794140876a9a08/William-Shakespeare-holding-a-pen-/0x0.jpg?format=jpg&crop=1488,1328,x0,y123,safe&width=960",
  },
  {
    quote:
      "This platform has taken the stress out of managing my daily notes. I am finally able to enjoy my evenings without the constant backlog.",
    name: "Samuel Lee",
    title: "Licensed Clinical Social Worker",
    location: "Australia",
    authorImg:
      "https://imageio.forbes.com/specials-images/imageserve/666b150e10794140876a9a08/William-Shakespeare-holding-a-pen-/0x0.jpg?format=jpg&crop=1488,1328,x0,y123,safe&width=960",
  },
  {
    quote:
      "Incredible technology that has transformed how I approach documentation. I feel more present during my sessions knowing that notes are taken care of.",
    name: "Sophia Velasquez",
    title: "Counselor",
    location: "USA",
    authorImg:
      "https://imageio.forbes.com/specials-images/imageserve/666b150e10794140876a9a08/William-Shakespeare-holding-a-pen-/0x0.jpg?format=jpg&crop=1488,1328,x0,y123,safe&width=960",
  },
  {
    quote:
      "Simplicity at its best! Upheal makes my life more manageable, and I find myself more productive throughout the day.",
    name: "Michael Chang",
    title: "Psychotherapist",
    location: "Singapore",
    authorImg:
      "https://imageio.forbes.com/specials-images/imageserve/666b150e10794140876a9a08/William-Shakespeare-holding-a-pen-/0x0.jpg?format=jpg&crop=1488,1328,x0,y123,safe&width=960",
  },
];

const testimonialsList = document.querySelector(".testimonials-list");
const testimonialDots = document.querySelector(".testimonial-dots");

let currentIndex = 0;

// rendering testimonial item structure
function renderTestimonialItem(item, index) {
  const testimonialItem = document.createElement("li");
  testimonialItem.id = `testimonial-${index + 1}`;
  testimonialItem.classList.add("testimonial-item");
  const quote = document.createElement("div");
  quote.classList.add("testimonial-quote");
  quote.innerHTML = `<p>${item.quote}</p>`;

  const infoContainer = document.createElement("div");
  infoContainer.classList.add("testimonial-info-container");

  const info = document.createElement("div");
  info.classList.add("testimonial-info");

  const authorImage = document.createElement("div");
  authorImage.classList.add("testimonial-author-image");
  authorImage.innerHTML = `<img src=${item.authorImg} alt="author" />`;

  const authorInfo = document.createElement("div");
  authorInfo.classList.add("author-info");
  authorInfo.innerHTML = `<h1>${item.name}</h1><p>${item.title}<span>, ${item.location}</span></p>`;

  info.appendChild(authorImage);
  info.appendChild(authorInfo);
  infoContainer.appendChild(info);

  testimonialItem.appendChild(quote);
  testimonialItem.appendChild(infoContainer);

  testimonialsList.appendChild(testimonialItem);

  // render control dots
  const testimonialItemDot = document.createElement("li");
  testimonialItemDot.dataset.index = index;
  if (index === 0) testimonialItemDot.classList.add("active");
  testimonialDots.appendChild(testimonialItemDot);
  testimonialItemDot.addEventListener("click", () => goToSlide(index));
}

// Handling Testimonials scroll
function updateActiveDot(index) {
  document.querySelectorAll(".testimonial-dots li").forEach((dot, idx) => {
    if (idx === index) dot.classList.add("active");
    else dot.classList.remove("active");
  });
}

function goToSlide(index) {
  const testimonialItems = document.querySelectorAll(".testimonial-item");
  let scrollDistance = 0;
  for (let i = 0; i < index; i++) {
    scrollDistance += testimonialItems[i].offsetWidth + 32; // gap between list items
  }
  testimonialsList.style.transform = `translateX(-${scrollDistance}px)`;

  currentIndex = index;
  updateActiveDot(index);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % DUMMYDATA.length;
  goToSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + DUMMYDATA.length) % DUMMYDATA.length;
  goToSlide(currentIndex);
}

document.getElementById("next-btn").addEventListener("click", nextSlide);
document.getElementById("prev-btn").addEventListener("click", prevSlide);

// Mapping dummy data
DUMMYDATA.forEach((item, index) => renderTestimonialItem(item, index));
