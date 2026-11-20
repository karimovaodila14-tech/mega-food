
// ================================
// MEGA FOOD — JAVASCRIPT
// ================================

// PRODUCTS DATABASE

const products = [
  {
    id: 1,
    name: "Classic Burger",
    category: "burger",
    price: 29000,
    rating: 4.9,
    badge: "POPULAR",
    description: "Juicy beef, fresh lettuce, tomato and special sauce.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 2,
    name: "Double Cheeseburger",
    category: "burger",
    price: 49000,
    rating: 5.0,
    badge: "BEST SELLER",
    description: "Double beef, double cheese and signature sauce.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 3,
    name: "Chicken Burger",
    category: "burger",
    price: 32000,
    rating: 4.8,
    badge: "NEW",
    description: "Crispy chicken, fresh vegetables and creamy sauce.",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 4,
    name: "BBQ Burger",
    category: "burger",
    price: 39000,
    rating: 4.7,
    badge: "",
    description: "Smoky BBQ sauce, beef and caramelized onions.",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 5,
    name: "Pepperoni Pizza",
    category: "pizza",
    price: 75000,
    rating: 4.9,
    badge: "HOT",
    description: "Pepperoni, mozzarella and rich tomato sauce.",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 6,
    name: "Margherita Pizza",
    category: "pizza",
    price: 65000,
    rating: 4.8,
    badge: "",
    description: "Tomato, mozzarella, basil and Italian sauce.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 7,
    name: "Cheese Pizza",
    category: "pizza",
    price: 70000,
    rating: 4.6,
    badge: "",
    description: "Four kinds of cheese and crispy pizza base.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 8,
    name: "Chicken Lavash",
    category: "lavash",
    price: 33000,
    rating: 4.9,
    badge: "POPULAR",
    description: "Chicken, vegetables, sauce and warm lavash.",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 9,
    name: "Mini Lavash",
    category: "lavash",
    price: 25000,
    rating: 4.6,
    badge: "",
    description: "Mini lavash with chicken and fresh sauce.",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 10,
    name: "Beef Lavash",
    category: "lavash",
    price: 39000,
    rating: 4.8,
    badge: "NEW",
    description: "Tender beef, vegetables and signature sauce.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 11,
    name: "Chicken Nuggets",
    category: "chicken",
    price: 28000,
    rating: 4.7,
    badge: "",
    description: "Crispy chicken nuggets with dipping sauce.",
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb36?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 12,
    name: "Fried Chicken",
    category: "chicken",
    price: 35000,
    rating: 4.8,
    badge: "CRISPY",
    description: "Golden crispy chicken with special seasoning.",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 13,
    name: "Chicken Wings",
    category: "chicken",
    price: 32000,
    rating: 4.7,
    badge: "",
    description: "Spicy chicken wings with crispy coating.",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 14,
    name: "French Fries",
    category: "snack",
    price: 18000,
    rating: 4.8,
    badge: "FAVORITE",
    description: "Golden potato fries with a crispy exterior.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 15,
    name: "Onion Rings",
    category: "snack",
    price: 22000,
    rating: 4.5,
    badge: "",
    description: "Crunchy onion rings with delicious sauce.",
    image: "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 16,
    name: "Cola",
    category: "drink",
    price: 10000,
    rating: 4.7,
    badge: "",
    description: "Refreshing chilled carbonated drink.",
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 17,
    name: "Orange Juice",
    category: "drink",
    price: 15000,
    rating: 4.8,
    badge: "FRESH",
    description: "Fresh orange flavored refreshing drink.",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 18,
    name: "Milkshake",
    category: "drink",
    price: 25000,
    rating: 4.9,
    badge: "",
    description: "Creamy milkshake with rich vanilla flavor.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 19,
    name: "Ice Cream",
    category: "dessert",
    price: 15000,
    rating: 4.8,
    badge: "",
    description: "Sweet and creamy vanilla ice cream.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 20,
    name: "Chocolate Cake",
    category: "dessert",
    price: 26000,
    rating: 4.9,
    badge: "SWEET",
    description: "Soft chocolate cake with rich chocolate cream.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=85"
  }
];

// ================================
// STATE
// ================================

let cart = JSON.parse(localStorage.getItem("megaCart")) || [];
let favorites = JSON.parse(localStorage.getItem("megaFavorites")) || [];
let currentCategory = "all";
let searchQuery = "";
let showAllProducts = false;
let favoriteMode = false;
let authMode = "login";
let currentUser = JSON.parse(localStorage.getItem("megaUser")) || null;

// ================================
// ELEMENTS
// ================================

const productsGrid = document.getElementById("productsGrid");
const popularGrid = document.getElementById("popularGrid");
const categoryList = document.getElementById("categoryList");

const cartDrawer = document.getElementById("cartDrawer");
const overlay = document.getElementById("overlay");
const cartItems = document.getElementById("cartItems");

const cartCount = document.getElementById("cartCount");
const drawerCount = document.getElementById("drawerCount");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartTotal = document.getElementById("cartTotal");

const authModal = document.getElementById("authModal");
const checkoutModal = document.getElementById("checkoutModal");
const successModal = document.getElementById("successModal");

const searchPanel = document.getElementById("searchPanel");
const searchInput = document.getElementById("searchInput");

const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");

// ================================
// HELPERS
// ================================

function money(amount) {
  return amount.toLocaleString("uz-UZ") + " so'm";
}

function saveCart() {
  localStorage.setItem("megaCart", JSON.stringify(cart));
}

function saveFavorites() {
  localStorage.setItem("megaFavorites", JSON.stringify(favorites));
}

function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);

  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

function findProduct(id) {
  return products.find(product => product.id === Number(id));
}

// ================================
// PRODUCT CARD
// ================================

function createProductCard(product) {
  const isFavorite = favorites.includes(product.id);

  return `
    <article class="product-card">
      <div class="product-image">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.src='https://placehold.co/600x400?text=MEGA+FOOD'"
        >

        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}

        <button
          class="product-favorite ${isFavorite ? "active" : ""}"
          data-favorite="${product.id}"
          aria-label="Favorite"
        >
          <i class="${isFavorite ? "fa-solid" : "fa-regular"} fa-heart"></i>
        </button>
      </div>

      <div class="product-content">
        <div class="product-rating">
          <i class="fa-solid fa-star"></i>
          ${product.rating}
          <span>(120+)</span>
        </div>

        <h3>${product.name}</h3>
        <p>${product.description}</p>

        <div class="product-bottom">
          <span class="product-price">${money(product.price)}</span>

          <button class="add-btn" data-add="${product.id}" title="Add to cart">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </article>
  `;
}

// ================================
// RENDER PRODUCTS
// ================================

function renderProducts() {
  let filtered = products.filter(product => {
    const categoryMatch =
      currentCategory === "all" || product.category === currentCategory;

    const searchMatch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    const favoriteMatch =
      !favoriteMode || favorites.includes(product.id);

    return categoryMatch && searchMatch && favoriteMatch;
  });

  const visibleProducts = showAllProducts ? filtered : filtered.slice(0, 8);

  productsGrid.innerHTML = visibleProducts.length
    ? visibleProducts.map(createProductCard).join("")
    : `
      <div class="empty-cart" style="grid-column:1/-1">
        <i class="fa-solid fa-face-sad-tear"></i>
        <h3>Mahsulot topilmadi</h3>
        <p>Boshqa mahsulot qidirib ko'ring.</p>
      </div>
    `;

  document.getElementById("loadMore").style.display =
    filtered.length > 8 ? "inline-flex" : "none";

  document.getElementById("loadMore").innerHTML =
    showAllProducts
      ? 'Show Less <i class="fa-solid fa-arrow-up"></i>'
      : 'View All Menu <i class="fa-solid fa-arrow-down"></i>';

  renderPopular();
}

// ================================
// POPULAR PRODUCTS
// ================================

function renderPopular() {
  const popular = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  popularGrid.innerHTML = popular.map(createProductCard).join("");
}

// ================================
// CATEGORY FILTER
// ================================

categoryList.addEventListener("click", (e) => {
  const button = e.target.closest(".category-btn");
  if (!button) return;

  favoriteMode = false;

  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  button.classList.add("active");

  currentCategory = button.dataset.category;
  showAllProducts = false;

  renderProducts();
});

// ================================
// ADD TO CART
// ================================

function addToCart(id) {
  const product = findProduct(id);
  if (!product) return;

  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      id: product.id,
      quantity: 1
    });
  }

  saveCart();
  renderCart();

  showToast(`${product.name} savatchaga qo'shildi!`);
}

document.addEventListener("click", (e) => {
  const addButton = e.target.closest("[data-add]");

  if (addButton) {
    addToCart(addButton.dataset.add);
  }
});

// ================================
// FAVORITES
// ================================

function toggleFavorite(id) {
  id = Number(id);

  if (favorites.includes(id)) {
    favorites = favorites.filter(item => item !== id);
    showToast("Sevimlilardan olib tashlandi");
  } else {
    favorites.push(id);
    showToast("Sevimlilarga qo'shildi!");
  }

  saveFavorites();
  renderProducts();
}

document.addEventListener("click", (e) => {
  const button = e.target.closest("[data-favorite]");
  if (button) {
    toggleFavorite(button.dataset.favorite);
  }
});

// FAVORITES BUTTON

document.getElementById("favoritesBtn").addEventListener("click", () => {
  favoriteMode = !favoriteMode;
  currentCategory = "all";
  searchQuery = "";
  searchInput.value = "";
  showAllProducts = true;

  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  document.querySelector('[data-category="all"]').classList.add("active");

  renderProducts();

  document.getElementById("categories").scrollIntoView({
    behavior: "smooth"
  });

  if (favoriteMode) {
    showToast("Sevimli mahsulotlaringiz");
  } else {
    showToast("Barcha mahsulotlar");
  }
});

// ================================
// CART RENDER
// ================================

function renderCart() {
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  cartCount.textContent = totalQuantity;
  drawerCount.textContent = `(${totalQuantity})`;

  if (!cart.length) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <i class="fa-solid fa-bag-shopping"></i>
        <h3>Your cart is empty</h3>
        <p>Sevimli taomingizni tanlang!</p>
      </div>
    `;
  } else {
    cartItems.innerHTML = cart.map(item => {
      const product = findProduct(item.id);
      if (!product) return "";

      return `
        <div class="cart-item">
          <img src="${product.image}" alt="${product.name}">

          <div class="cart-item-info">
            <h3>${product.name}</h3>
            <strong>${money(product.price * item.quantity)}</strong>

            <div class="quantity-control">
              <button data-minus="${product.id}">−</button>
              <span>${item.quantity}</span>
              <button data-plus="${product.id}">+</button>
            </div>
          </div>

          <button class="cart-remove" data-remove="${product.id}">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      `;
    }).join("");
  }

  const subtotal = cart.reduce((sum, item) => {
    const product = findProduct(item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  const delivery = subtotal > 0 ? 10000 : 0;
  const total = subtotal + delivery;

  cartSubtotal.textContent = money(subtotal);
  cartTotal.textContent = money(total);
  document.getElementById("deliveryPrice").textContent = money(delivery);
  document.getElementById("checkoutTotal").textContent = money(total);

  saveCart();
}

// CART QUANTITY BUTTONS

cartItems.addEventListener("click", (e) => {
  const plus = e.target.closest("[data-plus]");
  const minus = e.target.closest("[data-minus]");
  const remove = e.target.closest("[data-remove]");

  if (plus) {
    const item = cart.find(x => x.id === Number(plus.dataset.plus));
    if (item) item.quantity++;
    renderCart();
  }

  if (minus) {
    const item = cart.find(x => x.id === Number(minus.dataset.minus));
    if (item) item.quantity--;

    cart = cart.filter(x => x.quantity > 0);
    renderCart();
  }

  if (remove) {
    cart = cart.filter(x => x.id !== Number(remove.dataset.remove));
    renderCart();
    showToast("Mahsulot o'chirildi");
  }
});

// ================================
// CART OPEN / CLOSE
// ================================

function openCart() {
  cartDrawer.classList.add("open");
  overlay.classList.add("show");
}

function closeCart() {
  cartDrawer.classList.remove("open");
  overlay.classList.remove("show");
}

document.getElementById("cartBtn").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

// ================================
// CHECKOUT
// ================================

document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (!cart.length) {
    showToast("Savatchangiz bo'sh!");
    return;
  }

  closeCart();
  checkoutModal.classList.add("show");
});

document.getElementById("closeCheckout").addEventListener("click", () => {
  checkoutModal.classList.remove("show");
});

document.getElementById("checkoutForm").addEventListener("submit", (e) => {
  e.preventDefault();

  if (!cart.length) {
    showToast("Savatchangiz bo'sh!");
    checkoutModal.classList.remove("show");
    return;
  }

  const orderId = "MF-" + Math.floor(100000 + Math.random() * 900000);

  const order = {
    orderId,
    name: document.getElementById("checkoutName").value,
    phone: document.getElementById("checkoutPhone").value,
    address: document.getElementById("checkoutAddress").value,
    payment: document.getElementById("paymentMethod").value,
    note: document.getElementById("checkoutNote").value,
    items: [...cart],
    total: cart.reduce((sum, item) => {
      const product = findProduct(item.id);
      return sum + (product ? product.price * item.quantity : 0);
    }, 0) + 10000,
    date: new Date().toISOString()
  };

  const orders = JSON.parse(localStorage.getItem("megaOrders")) || [];
  orders.push(order);
  localStorage.setItem("megaOrders", JSON.stringify(orders));

  cart = [];
  saveCart();
  renderCart();

  checkoutModal.classList.remove("show");

  document.getElementById("orderNumber").textContent =
    "Order ID: " + orderId;

  successModal.classList.add("show");
  document.getElementById("checkoutForm").reset();
});

document.getElementById("successClose").addEventListener("click", () => {
  successModal.classList.remove("show");
  showToast("MEGA FOOD'ni tanlaganingiz uchun rahmat!");
});

// ================================
// AUTH MODAL
// ================================

function openAuth() {
  authModal.classList.add("show");
}

function closeAuth() {
  authModal.classList.remove("show");
}

document.getElementById("userBtn").addEventListener("click", () => {
  if (currentUser) {
    const logout = confirm(
      `Salom, ${currentUser.name || currentUser.email}!\nHisobdan chiqmoqchimisiz?`
    );

    if (logout) {
      currentUser = null;
      localStorage.removeItem("megaUser");
      showToast("Hisobdan chiqdingiz");
    }
  } else {
    openAuth();
  }
});

document.getElementById("closeAuth").addEventListener("click", closeAuth);

// AUTH TABS

document.querySelectorAll(".auth-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    authMode = tab.dataset.auth;

    document.querySelectorAll(".auth-tab").forEach(t => {
      t.classList.remove("active");
    });

    tab.classList.add("active");

    const register = authMode === "register";

    document.getElementById("nameGroup").style.display =
      register ? "block" : "none";

    document.getElementById("loginExtra").style.display =
      register ? "none" : "flex";

    document.getElementById("authSubmit").innerHTML =
      register
        ? 'Create Account <i class="fa-solid fa-arrow-right"></i>'
        : 'Login <i class="fa-solid fa-arrow-right"></i>';

    document.getElementById("authName").required = register;
  });
});

// PASSWORD SHOW / HIDE

document.getElementById("togglePassword").addEventListener("click", () => {
  const input = document.getElementById("authPassword");
  const icon = document.querySelector("#togglePassword i");

  if (input.type === "password") {
    input.type = "text";
    icon.className = "fa-regular fa-eye-slash";
  } else {
    input.type = "password";
    icon.className = "fa-regular fa-eye";
  }
});

// AUTH SUBMIT

document.getElementById("authForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("authName").value.trim();
  const email = document.getElementById("authEmail").value.trim();
  const password = document.getElementById("authPassword").value;

  if (authMode === "register") {
    if (name.length < 2) {
      showToast("Ismingizni to'g'ri kiriting");
      return;
    }

    if (password.length < 6) {
      showToast("Parol kamida 6 belgidan iborat bo'lishi kerak");
      return;
    }

    // Demo registration. Password is not stored.
    const users = JSON.parse(localStorage.getItem("megaUsers")) || [];

    if (users.some(user => user.email === email)) {
      showToast("Bu email oldin ro'yxatdan o'tgan");
      return;
    }

    users.push({
      name,
      email
    });

    localStorage.setItem("megaUsers", JSON.stringify(users));

    currentUser = { name, email };
    localStorage.setItem("megaUser", JSON.stringify(currentUser));

    closeAuth();
    showToast("Ro'yxatdan o'tish muvaffaqiyatli!");

    document.getElementById("authForm").reset();
  } else {
    const users = JSON.parse(localStorage.getItem("megaUsers")) || [];
    const user = users.find(user => user.email === email);

    if (!user) {
      showToast("Email topilmadi. Register qiling.");
      return;
    }

    // This is a frontend demo, not secure authentication.
    currentUser = user;
    localStorage.setItem("megaUser", JSON.stringify(user));

    closeAuth();
    showToast(`Xush kelibsiz, ${user.name}!`);

    document.getElementById("authForm").reset();
  }
});

// FORGOT PASSWORD DEMO

document.getElementById("forgotPassword").addEventListener("click", (e) => {
  e.preventDefault();
  showToast("Parolni tiklash uchun administrator bilan bog'laning");
});

// ================================
// SEARCH
// ================================

document.getElementById("searchBtn").addEventListener("click", () => {
  searchPanel.classList.toggle("show");

  if (searchPanel.classList.contains("show")) {
    searchInput.focus();
  }
});

document.getElementById("closeSearch").addEventListener("click", () => {
  searchPanel.classList.remove("show");
  searchInput.value = "";
  searchQuery = "";
  renderProducts();
});

searchInput.addEventListener("input", () => {
  searchQuery = searchInput.value.trim();
  showAllProducts = true;
  favoriteMode = false;
  renderProducts();

  document.getElementById("categories").scrollIntoView({
    behavior: "smooth"
  });
});

// ================================
// LOAD MORE
// ================================

document.getElementById("loadMore").addEventListener("click", () => {
  showAllProducts = !showAllProducts;
  renderProducts();
});

// ================================
// DARK MODE
// ================================

const themeBtn = document.getElementById("themeBtn");

function setTheme(dark) {
  document.body.classList.toggle("dark", dark);

  themeBtn.innerHTML = dark
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';

  localStorage.setItem("megaTheme", dark ? "dark" : "light");
}

themeBtn.addEventListener("click", () => {
  setTheme(!document.body.classList.contains("dark"));
});

if (localStorage.getItem("megaTheme") === "dark") {
  setTheme(true);
}

// ================================
// MOBILE NAV
// ================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  menuToggle.innerHTML = navLinks.classList.contains("show")
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

// ================================
// OFFER BUTTON
// ================================

document.getElementById("offerBtn").addEventListener("click", () => {
  document.getElementById("categories").scrollIntoView({
    behavior: "smooth"
  });

  showToast("MEGA20 — promo kodini checkoutda eslang!");
});

// ================================
// NEWSLETTER
// ================================

document.getElementById("newsletterForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = e.target.querySelector("input").value.trim();

  if (!email) return;

  const subscribers =
    JSON.parse(localStorage.getItem("megaSubscribers")) || [];

  if (subscribers.includes(email)) {
    showToast("Siz allaqachon obuna bo'lgansiz!");
    return;
  }

  subscribers.push(email);
  localStorage.setItem("megaSubscribers", JSON.stringify(subscribers));

  e.target.reset();
  showToast("Obuna muvaffaqiyatli!");
});

// ================================
// HEADER SCROLL
// ================================

window.addEventListener("scroll", () => {
  const header = document.getElementById("header");

  if (window.scrollY > 50) {
    header.style.boxShadow = "0 5px 25px rgba(0,0,0,.05)";
  } else {
    header.style.boxShadow = "none";
  }
});

// ================================
// LOADER
// ================================

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hide");
  }, 500);
});

// ================================
// INITIALIZE
// ================================

renderProducts();
renderCart();
