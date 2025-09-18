
let searchBtn = document.getElementById('search-btn')


let handleSearchButton = async () => {
    let firstLetter = document.getElementById('default-search').value.split("")[0];
    if (!firstLetter) return

    let url = "https://www.themealdb.com/api/json/v1/1/search.php?f=" + firstLetter
    let response = await fetch(url)
    let data = await response.json()
    if (data.meals == null) {
        alert("Invalid Search Type")
        return
    } else {
        document.getElementById('screen').innerHTML = ""
        document.getElementById('details').innerHTML = ""
        for (let i = 0; i < data.meals.length; i++) {
            let meal = data.meals[i];

            document.getElementById('screen').innerHTML += `<div class="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition">
                <a href="#">
                    <img class="rounded-t-lg w-full h-48 object-cover" src="${meal.strMealThumb}" alt="Pizza" />
                </a>
                <div class="p-5">
                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">${meal.strMeal}</h5>
                    <p class="mb-3 text-gray-700 line-clamp-3">${meal.strInstructions}</p>
                    <button onClick="showDetails(${meal.idMeal})" id="read-more" class="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 
                     rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                        Read More
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                </div>
            </div>`
        }

    }

}


searchBtn.addEventListener('click', handleSearchButton)

let showDetails = async (id) => {

    let url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
    let response = await fetch(url)
    let data = await response.json()
    let details = data.meals[0]
    console.log(details);





    document.getElementById('screen').innerHTML = ""
    document.getElementById('details').innerHTML = `<div class="bg-gray-100 min-h-screen p-6">

  <div class="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
    
    <!-- Meal Image -->
    <img src="${details.strMealThumb}" 
         alt="Teriyaki Chicken Casserole" 
         class="w-full h-80 object-cover">

    <!-- Meal Content -->
    <div class="p-6">
      <!-- Title -->
      <h1 class="text-3xl font-bold text-gray-800 mb-2">
        ${details.strMeal}
      </h1>
      
      <!-- Meta info -->
      <p class="text-gray-600 mb-4">
        <span class="font-semibold">Category:</span> ${details.strCategory} | 
        <span class="font-semibold">Area:</span> ${details.strArea}
      </p>

      <!-- Instructions -->
      <h2 class="text-xl font-semibold text-gray-800 mb-2">Instructions</h2>
      <p id="instructions" class="text-gray-700  mb-3">
       ${details.strInstructions}
      </p>

      <!-- Ingredients -->
      <h2 class="text-xl font-semibold text-gray-800 mt-6 mb-2">Ingredients</h2>
      <ul class="list-disc list-inside text-gray-700">
        <li>3/4 cup soy sauce</li>
        <li>1/2 cup water</li>
        <li>1/4 cup brown sugar</li>
        <li>1/2 teaspoon ground ginger</li>
        <li>1/2 teaspoon minced garlic</li>
        <li>4 Tablespoons cornstarch</li>
        <li>2 chicken breasts</li>
        <li>1 (12 oz.) stir-fry vegetables</li>
        <li>3 cups brown rice</li>
      </ul>

      <!-- YouTube link -->
      <div class="mt-6">
        <a href="${details.strYoutube}" target="_blank"
           class="inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
          ▶ Watch on YouTube
        </a>
      </div>
    </div>
  </div>

  <!-- Script for Read More toggle -->
  <script>
    const instructions = document.getElementById('instructions');
    const toggleBtn = document.getElementById('toggleBtn');
    let expanded = false;

    toggleBtn.addEventListener('click', () => {
      expanded = !expanded;
      if (expanded) {
        instructions.classList.remove('line-clamp-3');
        toggleBtn.textContent = "Read Less";
      } else {
        instructions.classList.add('line-clamp-3');
        toggleBtn.textContent = "Read More";
      }
    });
  </script>

</div>`

}

