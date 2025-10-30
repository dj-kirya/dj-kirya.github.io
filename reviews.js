fetch("reviews.json")
  .then(response => response.json())
  .then(reviews => {
    const container = document.querySelector(".reviews-container");
    container.innerHTML = reviews
      .map(
        review => `
        <div class="review-card">
          <p class="review-text">“${review.text}”</p>
          <p class="review-author">— ${review.name} ${review.emoji}</p>
        </div>
      `
      )
      .join("");
  });
