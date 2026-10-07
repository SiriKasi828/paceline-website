const PRODUCTS = [
    { id:1, title:"Cloudmonster 2 — Hyper Lily", brand:"On", price:215, badge:"NEW", category:"new", tags:['new', 'men', 'women', 'footwear', 'road'], image:IMG.p1, filter:"none", fit:"cover" },
    { id:2, title:"Vaporfly 3 — Acid Ice", brand:"Nike", price:240, badge:"NEW", category:"raceday", tags:['raceday', 'men', 'footwear', 'road', 'new'], image:IMG.p2, filter:"none", fit:"cover" },
    { id:3, title:"Endorphin Pro 4 — Sunset Orange", brand:"Saucony", price:220, badge:"NEW", category:"raceday", tags:['raceday', 'women', 'footwear', 'road', 'new'], image:IMG.p3, filter:"none", fit:"cover" },
    { id:4, title:"Megablast — White / Orange Glow", brand:"Asics", price:210, badge:"SALE", category:"trail", tags:['trail', 'men', 'women', 'footwear', 'sale'], image:IMG.p4, filter:"none", fit:"cover" },
    { id:5, title:"Speedgoat 6 — Alpine", brand:"Hoka", price:165, badge:"NEW", category:"trail", tags:['trail', 'men', 'women', 'footwear', 'new'], image:IMG.p5, filter:"none", fit:"cover" },
    { id:6, title:"Ghost Max 2 — Daily Trainer", brand:"Brooks", price:150, badge:"", category:"road", tags:['road', 'men', 'women', 'footwear', 'recovery'], image:IMG.p6, filter:"none", fit:"cover" },
    { id:7, title:"Fresh Foam X 1080 — Volt", brand:"New Balance", price:175, badge:"NEW", category:"road", tags:['road', 'men', 'women', 'footwear', 'new'], image:IMG.p7, filter:"none", fit:"cover" },
    { id:8, title:"Adizero Adios Pro 4", brand:"Adidas", price:230, badge:"", category:"raceday", tags:['raceday', 'men', 'women', 'footwear', 'road'], image:IMG.p8, filter:"none", fit:"cover" },
    { id:9, title:"Genesis Trail — Storm Grey", brand:"Salomon", price:140, badge:"SALE", category:"trail", tags:['trail', 'men', 'women', 'footwear', 'sale'], image:IMG.p9, filter:"none", fit:"cover" },
    { id:10, title:"Recovery Slide — Cloud Foam", brand:"Hoka", price:60, badge:"", category:"recovery", tags:['recovery', 'men', 'women', 'footwear'], image:IMG.p10, filter:"none", fit:"cover" },
    { id:11, title:"Race Singlet — Ultralight", brand:"Nike", price:55, badge:"NEW", category:"apparel", tags:['apparel', 'men', 'raceday', 'new'], image:IMG.p11, filter:"none", fit:"cover" },
    { id:12, title:"Tempo Shorts — Reflective", brand:"Adidas", price:48, badge:"", category:"apparel", tags:['apparel', 'men', 'road'], image:IMG.p12, filter:"none", fit:"cover" },
    { id:13, title:"Thermal Half-Zip — Winter Run", brand:"Brooks", price:90, badge:"", category:"apparel", tags:['apparel', 'women', 'winter'], image:IMG.p13, filter:"none", fit:"cover" },
    { id:14, title:"Storm Shell Jacket", brand:"Salomon", price:185, badge:"NEW", category:"apparel", tags:['apparel', 'men', 'women', 'winter', 'trail', 'new'], image:IMG.p14, filter:"none", fit:"cover" },
    { id:15, title:"Forerunner 965 GPS Watch", brand:"Garmin", price:499, badge:"NEW", category:"accessories", tags:['accessories', 'men', 'women', 'raceday', 'new'], image:IMG.p15, filter:"none", fit:"cover" },
    { id:16, title:"Fenix Trail Watch — Leather", brand:"Garmin", price:649, badge:"", category:"accessories", tags:['accessories', 'men', 'women', 'trail'], image:IMG.p16, filter:"none", fit:"cover" },
    { id:17, title:"Compression Leggings", brand:"Salomon", price:120, badge:"SALE", category:"apparel", tags:['apparel', 'women', 'road', 'sale'], image:IMG.p17, filter:"none", fit:"cover" },
    { id:18, title:"Trail Running Cap", brand:"On", price:32, badge:"", category:"accessories", tags:['accessories', 'men', 'women', 'road'], image:IMG.p18, filter:"none", fit:"cover" }
];

let cart = [];
let activeTab = 'home';

function switchTab(tabName) {
    activeTab = tabName;
    const homePage = document.getElementById('page-home');
    const aboutPage = document.getElementById('page-about');
    const navAboutLink = document.getElementById('nav-about-link');

    if (tabName === 'about') {
        homePage.classList.add('hidden');
        aboutPage.classList.remove('hidden');
        navAboutLink.classList.add('bg-[#CCFF00]', 'text-black');
        navAboutLink.classList.remove('bg-black', 'text-white');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        aboutPage.classList.add('hidden');
        homePage.classList.remove('hidden');
        navAboutLink.classList.remove('bg-[#CCFF00]', 'text-black');
        navAboutLink.classList.add('bg-black', 'text-white');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function renderProducts(filter = 'all') {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    const key = String(filter).toLowerCase();
    const filtered = (key === 'all' || key === 'brands')
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === key || p.brand.toLowerCase() === key || (p.tags || []).includes(key));

    const label = document.getElementById('active-filter');
    if (label) {
        if (key === 'all' || key === 'brands') { label.classList.add('hidden'); }
        else {
            label.classList.remove('hidden');
            label.innerHTML = 'Showing: <b>' + filter + '</b> (' + filtered.length + ') <button onclick="clearCatFilter()" class="underline font-extrabold ml-2">Clear</button>';
        }
    }
    if (filtered.length === 0) {
        grid.innerHTML = '<div class="col-span-full text-center py-16 bg-white rounded-2xl border border-[#E2DFD8]"><p class="font-display text-xl font-black uppercase">' + filter + ' — dropping soon</p><p class="text-xs text-gray-500 mt-2">Nothing in stock in this category yet.</p></div>';
        return;
    }

    grid.innerHTML = filtered.map(product => `
        <div class="bg-white rounded-2xl p-4 border border-[#E2DFD8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div class="relative bg-[#F4F1EC] rounded-xl overflow-hidden p-6 mb-4 flex items-center justify-center min-h-[200px]">
                <span class="absolute top-3 left-3 text-[9px] font-black uppercase px-2.5 py-1 rounded-md tracking-wider ${product.badge === 'SALE' ? 'bg-red-600 text-white' : 'bg-black text-white'}">
                    ${product.badge}
                </span>
                <button onclick="toggleWishlist(this)" aria-label="Favorite" class="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition">
                    <i class="fa-regular fa-heart text-base"></i>
                </button>
                <img src="${product.image}" style="filter:${product.filter}" alt="${product.title}" class="w-full h-44 sm:h-40 ${product.fit === 'cover' ? 'object-cover rounded-lg' : 'object-contain'} group-hover:scale-110 transition-transform duration-500">
            </div>

            <div class="space-y-2">
                <h3 class="font-extrabold text-xs text-black group-hover:text-gray-700 transition">${product.title}</h3>
                <div class="font-black text-sm text-black">£${product.price}</div>
                <button onclick="addToCart(${product.id})" class="w-full mt-3 bg-[#111111] hover:bg-[#CCFF00] hover:text-black text-white text-[10px] font-extrabold uppercase py-3 rounded-xl transition duration-200 flex items-center justify-center space-x-2">
                    <i class="fa-solid fa-plus text-[9px]"></i>
                    <span>ADD TO BAG</span>
                </button>
            </div>
        </div>
    `).join('');
}

function highlightChips(key) {
    document.querySelectorAll('[data-filter],[data-brand]').forEach(b => {
        const v = (b.dataset.filter || b.dataset.brand).toLowerCase();
        b.classList.toggle('on', v === key || (key === 'brands' && v === 'all'));
    });
}

function filterOnly(name) {
    highlightChips(String(name).toLowerCase());
    renderProducts(name);
}

function setActiveFilter(btn, category) { filterOnly(category); }

function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCartUI();
    showToast(`Added ${product.title} to bag!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(productId);
    } else {
        updateCartUI();
    }
}

function updateCartUI() {
    const container = document.getElementById('cart-items-container');
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    document.getElementById('cart-count-badge').innerText = totalCount;
    document.getElementById('nav-cart-badge').innerText = totalCount;
    document.getElementById('cart-subtotal').innerText = `£${subtotal}`;

    if (cart.length === 0) {
        container.innerHTML = `<p class="text-center text-gray-500 my-12 text-xs font-medium">Your shopping bag is currently empty.</p>`;
        return;
    }

    container.innerHTML = cart.map(item => `
        <div class="flex items-center space-x-3 p-3 bg-[#F4F1EC] rounded-xl border border-[#E2DFD8]">
            <img src="${item.image}" alt="${item.title}" class="w-14 h-14 object-cover rounded-lg bg-white p-1">
            <div class="flex-1">
                <h4 class="font-extrabold text-xs leading-tight">${item.title}</h4>
                <span class="text-xs text-gray-500 font-medium">£${item.price}</span>
                <div class="flex items-center space-x-2 mt-2">
                    <button onclick="updateCartQty(${item.id}, -1)" class="w-5 h-5 rounded bg-white text-xs font-bold shadow-sm flex items-center justify-center">-</button>
                    <span class="text-xs font-bold px-1">${item.qty}</span>
                    <button onclick="updateCartQty(${item.id}, 1)" class="w-5 h-5 rounded bg-white text-xs font-bold shadow-sm flex items-center justify-center">+</button>
                </div>
            </div>
            <button onclick="removeFromCart(${item.id})" class="text-gray-400 hover:text-red-600 p-2">
                <i class="fa-solid fa-trash-can text-xs"></i>
            </button>
        </div>
    `).join('');
}

function toggleCart() {
    const drawer = document.getElementById('cart-drawer');
    drawer.classList.toggle('hidden');
}

function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.toggle('hidden');
}

function openFittingModal() {
    const modal = document.getElementById('booking-modal');
    if (modal) modal.classList.remove('hidden');
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('mobile-menu-icon');
    menu.classList.toggle('hidden');
    if (menu.classList.contains('hidden')) {
        icon.className = 'fa-solid fa-bars';
    } else {
        icon.className = 'fa-solid fa-xmark';
    }
}

function handleBooking(e) {
    e.preventDefault();
    toggleModal('booking-modal');
    showToast('Fitting appointment confirmed! Details sent to email.');
}

function handleNewsletter(e) {
    e.preventDefault();
    e.target.reset();
    showToast('Subscribed! Check your inbox for 10% off.');
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    toastMsg.innerText = message;
    toast.classList.remove('translate-y-20', 'opacity-0');

    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 3000);
}

function checkout() {
    if (cart.length === 0) {
        showToast('Your bag is empty! Add items first.');
        return;
    }
    showToast('Redirecting to secure UK checkout...');
}

function toggleWishlist(btn) {
    const icon = btn.querySelector('i');
    if (icon.classList.contains('fa-regular')) {
        icon.className = 'fa-solid fa-heart text-red-500';
        showToast('Added to wishlist');
    } else {
        icon.className = 'fa-regular fa-heart text-gray-400';
    }
}

function scrollToSection(sectionId) {
    if (activeTab !== 'home') switchTab('home');
    const target = document.getElementById(sectionId);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

function filterAndScroll(categoryName) {
    if (activeTab !== 'home') switchTab('home');
    filterOnly(categoryName);
    showToast('Showing: ' + categoryName);
    setTimeout(() => scrollToSection('new-arrivals'), 60);
}

function clearCatFilter() {
    filterAndScroll('all');
}

function filterCategory(catName) {
    filterAndScroll(catName);
}

function setSearchQuery(query) {
    document.getElementById('search-input').value = query;
    filterSearchResults();
}

function filterSearchResults() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const resultsContainer = document.getElementById('search-results-list');
    if (!query.trim()) return;

    const matches = PRODUCTS.filter(p => p.title.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));

    if (matches.length === 0) {
        resultsContainer.innerHTML = `<p class="text-xs text-gray-500">No results found for "${query}"</p>`;
    } else {
        resultsContainer.innerHTML = matches.map(m => `
            <div onclick="addToCart(${m.id}); toggleModal('search-modal');" class="flex items-center justify-between p-3 hover:bg-[#F4F1EC] rounded-xl cursor-pointer border border-transparent hover:border-[#E2DFD8]">
                <div class="flex items-center space-x-3">
                    <img src="${m.image}" class="w-10 h-10 object-contain bg-white rounded-lg p-1">
                    <div>
                        <h4 class="font-extrabold text-xs">${m.title}</h4>
                        <span class="text-[10px] text-gray-500">${m.brand} · £${m.price}</span>
                    </div>
                </div>
                <span class="text-[9px] font-extrabold text-black uppercase bg-[#CCFF00] px-3 py-1 rounded-full">+ BAG</span>
            </div>
        `).join('');
    }
}

document.addEventListener('click', function(e){ const a = e.target.closest('a[href="#"]'); if (a) e.preventDefault(); });

window.onload = function() {
    renderProducts('all');
};
