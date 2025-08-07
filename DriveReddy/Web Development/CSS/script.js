const form = document.getElementById('add-form');
const input = document.getElementById('book-input');
const wishlist = document.getElementById('wishlist');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const title = input.value.trim();

  if (title) {
    addBookToWishlist(title);
    input.value = '';
  }
});

function addBookToWishlist(title) {
  const li = document.createElement('li');

  li.innerHTML = `
    <span class="book-title clickable">${title}</span>
    <div class="actions">
      <button class="remove-item"><i class="fas fa-trash-alt"></i> Remove</button>
    </div>
  `;

  // When user clicks the book title
  li.querySelector('.book-title').addEventListener('click', () => {
    alert(You selected the book: "${title}");
  });

  // When user clicks the remove button
  li.querySelector('.remove-item').addEventListener('click', () => {
    li.remove();
  });

  wishlist.appendChild(li);
}