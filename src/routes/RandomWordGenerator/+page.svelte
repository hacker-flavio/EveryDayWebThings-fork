<!-- src/RandomWordGenerator.svelte -->

<head>
  <title>Random Word Generator - Everyday Web Things</title>
  <meta name="description" content="Generate random words and phrases with our online word generator. Create unique content, brainstorm ideas, and more." />
  <meta name="keywords" content="random word generator, generate words, random phrases, unique content, creative writing" />
  <!-- Add other meta tags as needed -->
</head>


<script>
  import { onMount } from 'svelte';

  let selectedCategory = 'All'; // Set the default category to 'All'
  let randomWords = [];
  let numberOfWords = 1; // Default number of words

  let categories = [
    'All',
    'Animals',
    'Fruits',
    'Colors',
    'Countries',
    'Cities',
    'Vegetables',
    'Sports',
    'Professions',
    'Transportation',
    'Weather',
    'Hobbies',
    'Music',
    'Movies',
    'Food',
    'Body Parts',
    'Emotions',
    'Clothing',
    'Technology' // Added 'Technology' category
    // Add more categories as needed
  ];

  let words = {
    'Animals': [
      'Dog', 'Cat', 'Elephant', 'Lion', 'Monkey', 'Tiger', 'Giraffe', 'Horse', 'Kangaroo',
      'Penguin', 'Zebra', 'Dolphin', 'Koala', 'Panda', 'Raccoon', 'Sloth', 'Gorilla', 'Hippopotamus', 'Polar Bear',
      'Camel', 'Ostrich', 'Chimpanzee', 'Owl', 'Gazelle', 'Lemur', 'Puma', 'Koala', 'Cheetah', 'Alpaca'
    ],
    'Fruits': [
      'Apple', 'Banana', 'Orange', 'Grapes', 'Strawberry', 'Watermelon', 'Pineapple', 'Mango', 'Kiwi', 'Pomegranate',
      'Cherry', 'Blueberry', 'Pear', 'Raspberry', 'Coconut', 'Peach', 'Lemon', 'Apricot', 'Fig', 'Grapefruit',
      'Cantaloupe', 'Plum', 'Cranberry', 'Blackberry', 'Guava', 'Passion Fruit', 'Dragon Fruit', 'Lime', 'Tangerine', 'Currant'
    ],
    'Colors': [
      'Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Pink', 'Orange', 'Brown', 'Gray', 'Black',
      'Teal', 'Magenta', 'Turquoise', 'Lavender', 'Cyan', 'Beige', 'Indigo', 'Maroon', 'Navy', 'Olive',
      'Silver', 'Gold', 'Violet', 'Salmon', 'Peach', 'Tan', 'Aqua', 'Crimson', 'Lime', 'Ivory'
    ],
    'Countries': [
      'USA', 'Canada', 'France', 'Germany', 'Australia', 'Japan', 'Italy', 'Spain', 'Brazil', 'China',
      'India', 'Mexico', 'Argentina', 'South Africa', 'Russia', 'Sweden', 'Norway', 'Netherlands', 'South Korea', 'Egypt',
      'Greece', 'Turkey', 'Chile', 'New Zealand', 'Singapore', 'Malaysia', 'Thailand', 'Vietnam', 'Philippines', 'Israel'
    ],
    'Cities': [
      'New York', 'London', 'Tokyo', 'Paris', 'Sydney', 'Los Angeles', 'Chicago', 'Berlin', 'Madrid', 'Rome',
      'Beijing', 'Mumbai', 'Mexico City', 'Toronto', 'Cairo', 'Bangkok', 'Dubai', 'Singapore', 'Hong Kong', 'Seoul',
      'Istanbul', 'Moscow', 'Rio de Janeiro', 'Buenos Aires', 'Amsterdam', 'Stockholm', 'Oslo', 'Copenhagen', 'Wellington', 'Manila'
    ],
    'Vegetables': [
      'Carrot', 'Broccoli', 'Tomato', 'Spinach', 'Potato', 'Cucumber', 'Lettuce', 'Onion', 'Bell Pepper', 'Zucchini',
      'Cabbage', 'Celery', 'Asparagus', 'Kale', 'Mushroom', 'Radish', 'Eggplant', 'Peas', 'Artichoke', 'Cauliflower',
      'Sweet Potato', 'Pumpkin', 'Green Beans', 'Turnip', 'Corn', 'Brussels Sprouts', 'Beets', 'Parsnip', 'Okra', 'Leek'
    ],
    'Sports': [
      'Soccer', 'Basketball', 'Tennis', 'Swimming', 'Golf', 'Baseball', 'Volleyball', 'Hockey', 'Cricket', 'Rugby',
      'Table Tennis', 'Badminton', 'Boxing', 'Martial Arts', 'Cycling', 'Skiing', 'Snowboarding', 'Wrestling', 'Fencing', 'Diving',
      'Gymnastics', 'Track and Field', 'Archery', 'Surfing', 'Rowing', 'Weightlifting', 'Climbing', 'Skateboarding', 'Sailing', 'Triathlon'
    ],
    'Professions': [
      'Doctor', 'Teacher', 'Engineer', 'Artist', 'Chef', 'Nurse', 'Scientist', 'Firefighter', 'Police Officer', 'Lawyer',
      'Dentist', 'Pilot', 'Journalist', 'Actor', 'Architect', 'Photographer', 'Psychologist', 'Astronaut', 'Farmer', 'Electrician',
      'Plumber', 'Barista', 'Librarian', 'Accountant', 'Designer', 'Veterinarian', 'Social Worker', 'Pharmacist', 'Mechanic', 'Hairdresser'
    ],
    'Transportation': [
      'Car', 'Bicycle', 'Train', 'Bus', 'Boat', 'Motorcycle', 'Subway', 'Truck', 'Helicopter', 'Airplane',
      'Scooter', 'Rickshaw', 'Hot Air Balloon', 'Tram', 'Ferry', 'Segway', 'Jet Ski', 'Spaceship', 'Camper Van', 'Cruise Ship',
      'Electric Scooter', 'Gondola', 'Trolleybus', 'Canoe', 'Hang Glider', 'Monorail', 'Yacht', 'Zeppelin', 'Horse and Carriage', 'Dirt Bike'
    ],
    'Weather': [
      'Sunny', 'Rainy', 'Snowy', 'Cloudy', 'Windy', 'Foggy', 'Thunderstorm', 'Tornado', 'Hurricane', 'Hail',
      'Drought', 'Heatwave', 'Blizzard', 'Mist', 'Sleet', 'Tropical Storm', 'Cyclone', 'Avalanche', 'Drizzle', 'Rainbow',
      'Sahara Desert', 'Polar Vortex', 'Monsoon', 'Tsunami', 'El Niño', 'La Niña', 'Haboob', 'Dust Devil', 'Frost'
    ],
    'Hobbies': [
      'Reading', 'Painting', 'Cooking', 'Gardening', 'Singing', 'Dancing', 'Hiking', 'Photography', 'Fishing', 'Yoga',
      'Swimming', 'Traveling', 'Playing Chess', 'Cycling', 'Collecting Stamps', 'Sculpting', 'Knitting', 'Woodworking', 'Gaming', 'Writing',
      'Bird Watching', 'Pottery', 'Skydiving', 'Rock Climbing', 'Meditation', 'Baking', 'Camping', 'Puzzle Solving', 'Volunteering', 'Skiing'
    ],
    'Music': [
      'Rock', 'Pop', 'Hip-hop', 'Classical', 'Jazz', 'Country', 'Rap', 'Electronic', 'Reggae', 'Blues',
      'Folk', 'R&B', 'Metal', 'Punk', 'Salsa', 'Funk', 'Disco', 'Techno', 'Gospel', 'Opera',
      'Indie', 'Soul', 'Alternative', 'K-pop', 'EDM', 'House', 'Trap', 'Ska', 'Ambient', 'Dubstep'
    ],
    'Movies': [
      'Action', 'Comedy', 'Drama', 'Horror', 'Science Fiction', 'Romance', 'Thriller', 'Adventure', 'Fantasy', 'Animation',
      'Musical', 'Mystery', 'Crime', 'Documentary', 'War', 'Western', 'Superhero', 'Family', 'Biography', 'Historical',
      'Film Noir', 'Sports', 'Spy', 'Alien', 'Zombie', 'Vampire', 'Werewolf', 'Time Travel', 'Post-Apocalyptic', 'Coming-of-Age'
    ],
    'Food': [
      'Pizza', 'Burger', 'Sushi', 'Pasta', 'Ice Cream', 'Chocolate', 'Steak', 'Tacos', 'Pancakes', 'Sandwich',
      'Salad', 'Curry', 'Soup', 'Rice', 'Donuts', 'Cupcakes', 'BBQ', 'Lasagna', 'Noodles', 'Cheese',
      'Bread', 'Omelette', 'Smoothie', 'Waffles', 'Fried Chicken', 'Shrimp', 'Hamburger', 'Hot Dog', 'Tofu', 'Caviar'
    ],
    'Body Parts': [
      'Head', 'Heart', 'Arm', 'Leg', 'Eye', 'Ear', 'Nose', 'Mouth', 'Hand', 'Foot',
      'Finger', 'Toe', 'Knee', 'Elbow', 'Shoulder', 'Wrist', 'Ankle', 'Neck', 'Back', 'Belly',
      'Thigh', 'Chest', 'Hip', 'Jaw', 'Chin', 'Forehead', 'Cheek', 'Tongue', 'Teeth', 'Lips'
    ],
    'Emotions': [
      'Happy', 'Sad', 'Angry', 'Excited', 'Surprised', 'Fearful', 'Calm', 'Bored', 'Confused', 'Disgusted',
      'Envious', 'Grateful', 'Hopeful', 'Jealous', 'Lonely', 'Nervous', 'Proud', 'Relieved', 'Shocked', 'Tired',
      'Content', 'Annoyed', 'Optimistic', 'Indifferent', 'Eager', 'Frustrated', 'Satisfied', 'Amused', 'Ecstatic', 'Regretful'
    ],
    'Clothing': [
      'Shirt', 'Dress', 'Jeans', 'Shoes', 'Hat', 'Socks', 'Jacket', 'Skirt', 'Pants', 'T-shirt',
      'Sweater', 'Boots', 'Tie', 'Scarf', 'Gloves', 'Hoodie', 'Bikini', 'Shorts', 'Sandals', 'Suit',
      'Raincoat', 'Blouse', 'Cardigan', 'Vest', 'Overalls', 'Tunic', 'Pajamas', 'Polo Shirt', 'Tights', 'Flip Flops'
    ],
    'Technology': [
      'Computer', 'Smartphone', 'Tablet', 'Internet', 'Robot', 'Programming', 'Software', 'Hardware', 'Algorithm', 'Database',
      'Cybersecurity', 'Artificial Intelligence', 'Virtual Reality', 'Blockchain', 'Machine Learning', 'Cloud Computing', 'Network', 'Server', 'Code', 'Website',
      'Mobile App', 'User Interface', 'Operating System', 'Browser', 'IoT', 'Encryption', 'API', 'Debugging', 'AI Chatbot', 'Social Media',
      'Augmented Reality', 'Big Data', 'DevOps', 'Firmware', 'IoT Devices', 'Responsive Design', 'Deep Learning', 'Open Source', 'SEO'
    ] 
  };

    // Function to track page view
    function trackPageView() {
    let page = '/RandomWordGenerator'; // Set the page path to '/RandomWordGenerator'
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-H2EFXSCDHN', { 'page_path': page });
  }

  function generateRandomWords() {
    if (selectedCategory === 'All') {
      const allWords = categories
        .filter(category => category !== 'All')
        .map(category => words[category])
        .flat();

      randomWords = [];
      for (let i = 0; i < numberOfWords; i++) {
        const randomIndex = Math.floor(Math.random() * allWords.length);
        randomWords.push(allWords[randomIndex]);
      }
    } else {
      let categoryWords = words[selectedCategory];

      randomWords = [];
      for (let i = 0; i < numberOfWords; i++) {
        const randomIndex = Math.floor(Math.random() * categoryWords.length);
        randomWords.push(categoryWords[randomIndex]);
      }
    }
  }

  onMount(() => {
    generateRandomWords();
    trackPageView(); // Call the tracking function when the component is mounted
  });
</script>


<main>
  <h1>Random Word Generator</h1>

  <label for="category">Select a Category:</label>
  <select id="category" bind:value="{selectedCategory}">
    {#each categories as category (category)}
      <option value="{category}">{category}</option>
    {/each}
  </select>

  <label for="numberOfWords">Number of Words:</label>
  <input type="number" id="numberOfWords" bind:value="{numberOfWords}" min="1">

  <button on:click="{generateRandomWords}">Generate Random Words</button>

  {#if randomWords.length > 0}
    <p>Random Words:</p>
    <ul>
      {#each randomWords as word (word)}
        <li>{word}</li>
      {/each}
    </ul>
  {:else}
    <p>No words generated yet.</p>
  {/if}
</main>

<style>
  /* Add your CSS styles here */
  div {
    text-align: center;
    margin: 20px;
    background-color: #f7f7f7;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  h1 {
    font-size: 28px;
    color: #333;
    margin-bottom: 10px;
  }

  label {
    font-size: 20px;
    color: #333;
    margin-right: 10px;
  }

  select, input {
    font-size: 18px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    background-color: #3498db;
    color: #fff;
    border: none;
    padding: 12px 24px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
    margin-top: 10px;
  }

  button:hover {
    background-color: #2980b9;
  }

  p {
    font-size: 20px;
    margin-top: 20px;
    color: #555;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    font-size: 20px;
    color: #555;
    margin: 5px 0;
  }
</style>



