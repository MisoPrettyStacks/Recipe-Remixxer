const recipes = [
  {
    title: "Leftover Chicken Fried Rice",
    ingredients: ["cooked rice", "chicken", "carrots", "peas", "egg", "soy sauce", "green onion"],
    time: 20,
    difficulty: "Easy",
    waste: "Low Waste",
    description: "A quick skillet meal that revives rice, chicken, and vegetables into a full dinner.",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=80",
    steps: ["Chop any cooked vegetables and chicken into small pieces.", "Scramble an egg in a hot pan, then set it aside.", "Stir-fry rice with vegetables and chicken until hot.", "Add soy sauce, fold in egg, and finish with green onion."],
  },
  {
    title: "Chicken & Veggie Wrap",
    ingredients: ["chicken", "lettuce", "spinach", "tortilla", "carrots", "sour cream", "cheese"],
    time: 15,
    difficulty: "Easy",
    waste: "Low Waste",
    description: "A fresh wrap packed with leftover protein, crunchy vegetables, and creamy sauce.",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=700&q=80",
    steps: ["Warm the tortilla for a few seconds.", "Mix sour cream with salt, pepper, and any herbs you have.", "Layer chicken, vegetables, cheese, and sauce.", "Roll tightly and toast seam-side down if desired."],
  },
  {
    title: "Creamy Chicken Pasta",
    ingredients: ["chicken", "pasta", "broccoli", "sour cream", "milk", "cheese", "garlic"],
    time: 25,
    difficulty: "Medium",
    waste: "Low Waste",
    description: "A comforting pasta that turns small amounts of leftovers into a creamy meal.",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=700&q=80",
    steps: ["Boil pasta and add broccoli during the final two minutes.", "Warm chicken in a pan with garlic.", "Stir in sour cream, a splash of milk, and cheese.", "Toss with pasta and adjust seasoning."],
  },
  {
    title: "Loaded Leftover Potato Hash",
    ingredients: ["potatoes", "onion", "peppers", "egg", "cheese", "bacon", "spinach"],
    time: 22,
    difficulty: "Easy",
    waste: "Low Waste",
    description: "A crispy breakfast-for-dinner hash that accepts almost any vegetable or protein.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=700&q=80",
    steps: ["Dice cooked potatoes or microwave raw potatoes until just tender.", "Brown potatoes in oil with onion and peppers.", "Add leftover protein or greens until hot.", "Top with egg and cheese."],
  },
  {
    title: "Everything Soup",
    ingredients: ["broth", "chicken", "rice", "carrots", "celery", "beans", "greens"],
    time: 30,
    difficulty: "Easy",
    waste: "Very Low Waste",
    description: "A flexible soup made to absorb tiny leftovers before they go bad.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=700&q=80",
    steps: ["Simmer broth with sturdy vegetables until tender.", "Add cooked grains, beans, or chicken.", "Fold in delicate greens near the end.", "Season with salt, pepper, lemon, or hot sauce."],
  },
  {
    title: "Veggie Quesadilla Remix",
    ingredients: ["tortilla", "cheese", "beans", "corn", "peppers", "chicken", "sour cream"],
    time: 12,
    difficulty: "Easy",
    waste: "Low Waste",
    description: "A fast crispy quesadilla that hides leftover vegetables beautifully.",
    image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=700&q=80",
    steps: ["Chop leftovers small so they heat evenly.", "Layer cheese and leftovers onto a tortilla.", "Cook in a dry pan until golden on both sides.", "Slice and serve with sour cream or salsa."],
  },
  {
    title: "Rice Bowl Rescue",
    ingredients: ["rice", "chicken", "egg", "broccoli", "carrots", "avocado", "soy sauce"],
    time: 18,
    difficulty: "Easy",
    waste: "Low Waste",
    description: "A clean, flexible bowl with grains, protein, vegetables, and sauce.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80",
    steps: ["Warm rice and leftovers separately.", "Make a quick sauce with soy sauce, honey, and vinegar if available.", "Arrange grain, protein, vegetables, and egg in a bowl.", "Drizzle sauce and add crunchy toppings."],
  },
  {
    title: "Pasta Frittata",
    ingredients: ["pasta", "egg", "cheese", "spinach", "tomato", "chicken", "onion"],
    time: 28,
    difficulty: "Medium",
    waste: "Low Waste",
    description: "A clever way to turn extra pasta into a sliceable brunch-style meal.",
    image: "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=700&q=80",
    steps: ["Whisk eggs with cheese, salt, and pepper.", "Mix in chopped pasta and leftovers.", "Cook in an oven-safe skillet until edges set.", "Bake or cover until the center is firm."],
  }
];

const randomSets = [
  "cooked rice, grilled chicken, broccoli, carrots, sour cream",
  "tortillas, cheese, beans, corn, peppers",
  "pasta, chicken, spinach, tomato, parmesan",
  "potatoes, onion, egg, leftover bacon, spinach",
  "broth, rice, carrots, celery, chicken, greens",
  "rice, egg, avocado, broccoli, soy sauce"
];

const state = {
  saved: JSON.parse(localStorage.getItem("recipeRemixrSaved") || "[]"),
  history: JSON.parse(localStorage.getItem("recipeRemixrHistory") || "[]"),
  currentRecipe: null,
  view: "home"
};

const el = {
  ingredients: document.querySelector("#ingredients"),
  charCount: document.querySelector("#charCount"),
  results: document.querySelector("#results"),
  findBtn: document.querySelector("#findBtn"),
  randomizeBtn: document.querySelector("#randomizeBtn"),
  matchCount: document.querySelector("#matchCount"),
  wasteScore: document.querySelector("#wasteScore"),
  avgTime: document.querySelector("#avgTime"),
  dialog: document.querySelector("#recipeDialog"),
  closeDialog: document.querySelector("#closeDialog"),
  dialogImage: document.querySelector("#dialogImage"),
  dialogTitle: document.querySelector("#dialogTitle"),
  dialogDescription: document.querySelector("#dialogDescription"),
  dialogTags: document.querySelector("#dialogTags"),
  dialogIngredients: document.querySelector("#dialogIngredients"),
  dialogSteps: document.querySelector("#dialogSteps"),
  saveRecipeBtn: document.querySelector("#saveRecipeBtn"),
  navItems: document.querySelectorAll(".nav-item")
};

function normalize(text) {
  return text.toLowerCase().split(/[,\n]/).map(x => x.trim()).filter(Boolean);
}

function scoreRecipe(recipe, inputItems) {
  const joined = inputItems.join(" ");
  let direct = 0;
  for (const ingredient of recipe.ingredients) {
    if (joined.includes(ingredient) || inputItems.some(item => ingredient.includes(item) || item.includes(ingredient))) direct += 1;
  }
  const score = direct / recipe.ingredients.length;
  return { ...recipe, matchScore: score, matched: direct };
}

function findRecipes() {
  const inputItems = normalize(el.ingredients.value);
  let ranked;
  if (inputItems.length === 0) {
    ranked = recipes.slice(0, 3).map(r => ({ ...r, matchScore: 0, matched: 0 }));
  } else {
    ranked = recipes
      .map(recipe => scoreRecipe(recipe, inputItems))
      .sort((a, b) => b.matchScore - a.matchScore || a.time - b.time)
      .slice(0, 5);
  }
  state.history.unshift({ date: new Date().toLocaleString(), query: el.ingredients.value, count: ranked.length });
  state.history = state.history.slice(0, 20);
  localStorage.setItem("recipeRemixrHistory", JSON.stringify(state.history));
  renderRecipes(ranked);
}

function renderRecipes(list) {
  el.results.innerHTML = "";
  if (!list.length) {
    el.results.innerHTML = `<div class="empty">No recipes found yet. Add leftovers like rice, chicken, pasta, vegetables, eggs, cheese, or tortillas.</div>`;
    updateStats([]);
    return;
  }

  list.forEach(recipe => {
    const card = document.createElement("article");
    card.className = "recipe-card";
    card.tabIndex = 0;
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
      <div class="recipe-content">
        <h3>${recipe.title}</h3>
        <p>${recipe.description}</p>
        <div class="tags">
          <span class="tag">${recipe.time} min</span>
          <span class="tag">${recipe.difficulty}</span>
          <span class="tag">${recipe.waste}</span>
        </div>
      </div>
      <div class="chevron">›</div>
    `;
    card.addEventListener("click", () => openRecipe(recipe));
    card.addEventListener("keydown", e => { if (e.key === "Enter") openRecipe(recipe); });
    el.results.appendChild(card);
  });
  updateStats(list);
}

function updateStats(list) {
  el.matchCount.textContent = list.length;
  if (!list.length) {
    el.wasteScore.textContent = "0%";
    el.avgTime.textContent = "—";
    return;
  }
  const avgScore = Math.round((list.reduce((sum, r) => sum + (r.matchScore || .55), 0) / list.length) * 100);
  const avgTime = Math.round(list.reduce((sum, r) => sum + r.time, 0) / list.length);
  el.wasteScore.textContent = `${Math.max(42, avgScore)}%`;
  el.avgTime.textContent = `${avgTime}m`;
}

function openRecipe(recipe) {
  state.currentRecipe = recipe;
  el.dialogImage.src = recipe.image;
  el.dialogImage.alt = recipe.title;
  el.dialogTitle.textContent = recipe.title;
  el.dialogDescription.textContent = recipe.description;
  el.dialogTags.innerHTML = [`${recipe.time} min`, recipe.difficulty, recipe.waste, `${Math.round((recipe.matchScore || .65) * 100)}% ingredient fit`]
    .map(tag => `<span class="tag">${tag}</span>`).join("");
  el.dialogIngredients.innerHTML = recipe.ingredients.map(i => `<li>${i}</li>`).join("");
  el.dialogSteps.innerHTML = recipe.steps.map(s => `<li>${s}</li>`).join("");
  const saved = state.saved.some(r => r.title === recipe.title);
  el.saveRecipeBtn.textContent = saved ? "♥ Saved" : "♡ Save Recipe";
  el.dialog.showModal();
}

function saveCurrentRecipe() {
  if (!state.currentRecipe) return;
  const exists = state.saved.some(r => r.title === state.currentRecipe.title);
  if (!exists) {
    state.saved.unshift(state.currentRecipe);
    localStorage.setItem("recipeRemixrSaved", JSON.stringify(state.saved));
  }
  el.saveRecipeBtn.textContent = "♥ Saved";
}

function renderSaved() {
  const saved = state.saved.map(r => ({ ...r, matchScore: .9 }));
  renderRecipes(saved);
  if (!saved.length) el.results.innerHTML = `<div class="empty">No saved recipes yet. Open any recipe and tap “Save Recipe.”</div>`;
}

function renderHistory() {
  el.results.innerHTML = state.history.length
    ? state.history.map(item => `<div class="empty"><strong>${item.date}</strong><br>${item.query || "Default recipe browse"}<br>${item.count} recipe ideas generated.</div>`).join("")
    : `<div class="empty">No history yet. Search for recipes to start tracking your remix sessions.</div>`;
  updateStats([]);
}

function changeView(view) {
  state.view = view;
  el.navItems.forEach(btn => btn.classList.toggle("active", btn.dataset.view === view));
  if (view === "home") findRecipes();
  if (view === "saved" || view === "favorites") renderSaved();
  if (view === "history") renderHistory();
}

el.ingredients.addEventListener("input", () => { el.charCount.textContent = el.ingredients.value.length; });
el.findBtn.addEventListener("click", findRecipes);
el.randomizeBtn.addEventListener("click", () => {
  el.ingredients.value = randomSets[Math.floor(Math.random() * randomSets.length)];
  el.charCount.textContent = el.ingredients.value.length;
  findRecipes();
});
el.closeDialog.addEventListener("click", () => el.dialog.close());
el.saveRecipeBtn.addEventListener("click", saveCurrentRecipe);
el.navItems.forEach(btn => btn.addEventListener("click", () => changeView(btn.dataset.view)));
document.querySelector("#settingsBtn").addEventListener("click", () => alert("Recipe Remixr stores saved recipes and history in your browser only."));

renderRecipes(recipes.slice(0, 3).map(r => ({ ...r, matchScore: .62 })));
