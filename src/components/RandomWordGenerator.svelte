<script>
  let randomWord = '';

  const generateRandomWord = () => {
    // You can replace this array with your own set of words.
    const words = [
       ['apple', 'banana', 'cherry', 'date', 'elderberry'],
      ['dog', 'cat', 'rabbit', 'hamster', 'parrot'],
      ['ocean', 'forest', 'desert', 'mountain', 'river'],
      ['car', 'bicycle', 'bus', 'train', 'airplane'],
      ['book', 'movie', 'music', 'painting', 'sculpture'],
      ['computer', 'smartphone', 'tablet', 'laptop', 'gaming console'],
      ['pizza', 'sushi', 'burger', 'pasta', 'salad'],
      ['sunglasses', 'hat', 'scarf', 'gloves', 'umbrella'],
      ['guitar', 'piano', 'drums', 'violin', 'flute'],
      ['sunflower', 'rose', 'tulip', 'daisy', 'lily'],
      ['coffee', 'tea', 'juice', 'soda', 'water'],
      ['beach', 'park', 'museum', 'library', 'zoo'],
      ['chair', 'table', 'sofa', 'lamp', 'clock'],
      ['shoes', 'socks', 'shirt', 'pants', 'hat'],
      ['teacher', 'student', 'doctor', 'engineer', 'artist'],
      ['pen', 'pencil', 'notebook', 'marker', 'eraser'],
      ['football', 'basketball', 'soccer', 'tennis', 'golf'],
      ['oxygen', 'hydrogen', 'nitrogen', 'carbon', 'helium'],
      ['science', 'history', 'math', 'language', 'art'],
      ['vacation', 'holiday', 'trip', 'journey', 'adventure'],
      ['camera', 'photo', 'video', 'film', 'lens'],
      ['swimming', 'running', 'cycling', 'hiking', 'yoga'],
      ['cookie', 'cake', 'ice cream', 'candy', 'chocolate'],
      ['sunset', 'sunrise', 'moonlight', 'star', 'cloud'],
      ['keyboard', 'mouse', 'monitor', 'printer', 'scanner'],
      ['globe', 'map', 'compass', 'gps', 'destination'],
      ['gym', 'exercise', 'workout', 'fitness', 'muscle'],
      ['mirror', 'brush', 'comb', 'shampoo', 'perfume'],
      ['phone', 'email', 'message', 'chat', 'social media'],
      ['swimming pool', 'hot tub', 'sauna', 'steam room', 'locker'],
      ['sailing', 'surfing', 'kayaking', 'canoeing', 'rafting'],
      ['jazz', 'rock', 'pop', 'classical', 'blues'],
      ['penguin', 'lion', 'elephant', 'giraffe', 'kangaroo'],
      ['hamburger', 'fries', 'hotdog', 'sandwich', 'taco'],
      ['rainbow', 'thunderstorm', 'tornado', 'hurricane', 'blizzard'],
      ['diamond', 'sapphire', 'emerald', 'ruby', 'pearl'],
      ['chess', 'checkers', 'dominoes', 'cards', 'board games'],
      ['volcano', 'earthquake', 'tsunami', 'tornado', 'hailstorm'],
      ['dragon', 'unicorn', 'phoenix', 'griffin', 'mermaid'],
      ['whale', 'dolphin', 'shark', 'jellyfish', 'seahorse'],
      ['firefighter', 'police', 'paramedic', 'pilot', 'astronaut'],
      ['ballet', 'salsa', 'hip-hop', 'tango', 'breakdance'],
      ['butterfly', 'dragonfly', 'ladybug', 'beetle', 'caterpillar'],
      ['submarine', 'cruise ship', 'yacht', 'sailboat', 'canoe'],
      ['spider', 'scorpion', 'centipede', 'tarantula', 'ant'],
      ['treasure', 'map', 'chest', 'pirate', 'island'],
      ['squirrel', 'chipmunk', 'rat', 'beaver', 'porcupine'],
      ['castle', 'fortress', 'palace', 'cottage', 'manor'],
      ['waterfall', 'geyser', 'spring', 'brook', 'creek'],
      ['mercedes', 'bmw', 'audi', 'volkswagen', 'porsche'],
      ['robot', 'android', 'cyborg', 'nanobot', 'droid'],
      ['detective', 'spy', 'agent', 'investigator', 'sleuth'],
      ['telescope', 'microscope', 'binoculars', 'magnifier', 'periscope'],
      ['phoenix', 'griffin', 'hydra', 'sphinx', 'minotaur'],
      ['magic', 'wizard', 'sorcerer', 'enchantment', 'spell'],
      ['comet', 'meteor', 'asteroid', 'galaxy', 'nebula'],
      ['candle', 'lantern', 'torch', 'lamp', 'bonfire'],
      ['mirror', 'telescope', 'microscope', 'binoculars', 'magnifier'],
      ['thunder', 'lightning', 'hail', 'rain', 'sleet'],
      ['toothbrush', 'toothpaste', 'floss', 'mouthwash', 'dentist'],
      ['knight', 'queen', 'king', 'bishop', 'rook'],
      ['dolphin', 'shark', 'whale', 'jellyfish', 'seahorse'],
      ['unicorn', 'pegasus', 'griffin', 'hydra', 'sphinx'],
      ['sushi', 'sashimi', 'tempura', 'ramen', 'nigiri'],
      ['chocolate', 'vanilla', 'strawberry', 'mint', 'caramel'],
      ['scarf', 'mittens', 'beanie', 'earmuffs', 'snood'],
      ['desert', 'oasis', 'cactus', 'sand dune', 'camel'],
      ['alien', 'spaceship', 'astronaut', 'planet', 'galaxy'],
      ['museum', 'artifacts', 'exhibition', 'painting', 'sculpture'],
      ['marathon', 'sprint', 'relay', 'long jump', 'shot put'],
      ['sword', 'shield', 'armor', 'helm', 'spear'],
      ['globe', 'map', 'compass', 'gps', 'destination'],
      ['beach', 'ocean', 'sunbathing', 'sandcastle', 'surfing'],
      ['tiger', 'lion', 'cheetah', 'leopard', 'panther'],
      ['tornado', 'hurricane', 'typhoon', 'cyclone', 'whirlwind'],
      ['treasure', 'map', 'chest', 'pirate', 'island'],
      ['rainbow', 'thunderstorm', 'lightning', 'clouds', 'rain'],
      ['parachute', 'skydiving', 'base jump', 'wingsuit', 'glider'],
      ['watermelon', 'grape', 'kiwi', 'pear', 'pomegranate'],
      ['umbrella', 'raincoat', 'rubber boots', 'puddle', 'storm'],
      ['dragon', 'unicorn', 'griffin', 'centaur', 'phoenix'],
      ['pluto', 'neptune', 'saturn', 'uranus', 'mercury'],
      ['hiking', 'camping', 'backpacking', 'adventure', 'exploration'],
      ['bamboo', 'maple', 'pine', 'oak', 'willow'],
      ['panda', 'koala', 'sloth', 'lemur', 'red panda'],
      ['swimming pool', 'hot tub', 'sauna', 'steam room', 'locker'],
      ['paris', 'london', 'new york', 'tokyo', 'rome'],
      ['coconut', 'pineapple', 'mango', 'guava', 'papaya'],
      ['swan', 'pelican', 'flamingo', 'stork', 'heron'],
      ['skiing', 'snowboarding', 'ice skating', 'bobsled', 'sledding'],
      ['penguin', 'seagull', 'albatross', 'osprey', 'condor'],
      ['telescope', 'microscope', 'binoculars', 'magnifier', 'periscope'],
      ['sunflower', 'rose', 'tulip', 'daisy', 'lily'],
      ['submarine', 'cruise ship', 'yacht', 'sailboat', 'canoe'],
      ['zebra', 'gazelle', 'wildebeest', 'antelope', 'kudu'],
      ['scissors', 'tape', 'glue', 'ruler', 'stapler'],
      ['honey', 'jam', 'marmalade', 'syrup', 'nutella'],
      ['mercedes', 'bmw', 'audi', 'volkswagen', 'porsche'],
      ['violin', 'cello', 'flute', 'trumpet', 'clarinet'],
      ['magic', 'wizard', 'sorcerer', 'enchantment', 'spell'],
      ['firefighter', 'police', 'paramedic', 'pilot', 'astronaut'],
      ['butterfly', 'dragonfly', 'ladybug', 'beetle', 'caterpillar'],
      ['swan', 'peacock', 'heron', 'crane', 'egret'],
      ['lemon', 'lime', 'orange', 'grapefruit', 'tangerine'],
      ['kangaroo', 'wallaby', 'koala', 'wombat', 'possum'],
      ['carousel', 'roller coaster', 'ferris wheel', 'bumper cars', 'water slide'],
      ['eagle', 'hawk', 'falcon', 'vulture', 'osprey'],
      ['chocolate', 'vanilla', 'strawberry', 'mint', 'caramel'],
      ['snowflake', 'icicle', 'frost', 'blizzard', 'avalanche'],
      ['lighthouse', 'buoy', 'anchor', 'sail', 'seashell'],
      ['saxophone', 'trumpet', 'trombone', 'clarinet', 'flute'],
      ['fireplace', 'chimney', 'mantel', 'logs', 'hearth'],
      ['shark', 'dolphin', 'whale', 'octopus', 'seahorse'],
      ['waterfall', 'stream', 'rapids', 'watermill', 'fountain'],
      ['kite', 'frisbee', 'yo-yo', 'hacky sack', 'boomerang'],
      ['skyscraper', 'apartment', 'penthouse', 'balcony', 'elevator'],
      ['palm tree', 'coconut', 'tropical island', 'sunshine', 'hammock'],
      ['sunflower', 'tulip', 'daisy', 'lily', 'rose'],
      ['robot', 'android', 'cyborg', 'nanobot', 'droid'],
      ['detective', 'spy', 'agent', 'investigator', 'sleuth'],
      ['giraffe', 'zebra', 'rhinoceros', 'elephant', 'lion'],
      ['rainbow', 'thunderstorm', 'tornado', 'hurricane', 'blizzard'],
      ['moon', 'mars', 'jupiter', 'venus', 'saturn'],
      ['piano', 'violin', 'guitar', 'flute', 'drums'],
      ['stethoscope', 'thermometer', 'syringe', 'bandage', 'crutches'],
      ['iceberg', 'glacier', 'arctic', 'antarctica', 'polar bear'],
      ['castle', 'fortress', 'palace', 'cottage', 'manor'],
      ['caterpillar', 'butterfly', 'moth', 'ladybug', 'spider'],
      ['carousel', 'roller coaster', 'ferris wheel', 'bumper cars', 'merry-go-round'],
      ['toucan', 'parrot', 'cockatoo', 'lorikeet', 'macaw'],
      ['guitar', 'piano', 'drums', 'saxophone', 'trumpet'],
      ['skateboard', 'scooter', 'hoverboard', 'roller skates', 'bicycle'],
      ['compass', 'map', 'gps', 'road atlas', 'navigation'],
      ['volcano', 'earthquake', 'tsunami', 'avalanche', 'lava'],
      ['coffee', 'tea', 'cappuccino', 'espresso', 'latte'],
      ['kangaroo', 'koala', 'wombat', 'wallaby', 'tasmanian devil'],
      ['candle', 'incense', 'potpourri', 'fragrance', 'scent'],
      ['eagle', 'hawk', 'falcon', 'vulture', 'osprey'],
      ['comet', 'asteroid', 'meteorite', 'meteor', 'shooting star'],
      ['jigsaw puzzle', 'crossword', 'sudoku', 'word search', 'riddle'],
      ['tiger', 'leopard', 'cheetah', 'jaguar', 'lynx'],
      ['ballet', 'salsa', 'hip-hop', 'tango', 'flamenco'],
      ['robot', 'android', 'cyborg', 'nanobot', 'droid'],
      ['bicycle', 'tricycle', 'unicycle', 'tandem', 'mountain bike'],
      ['butterfly', 'dragonfly', 'firefly', 'ladybug', 'caterpillar'],
      ['submarine', 'cruise ship', 'yacht', 'sailboat', 'speedboat'],
      ['mermaid', 'siren', 'nymph', 'sea witch', 'triton'],
      ['sunflower', 'tulip', 'daisy', 'rose', 'orchid'],
      ['chameleon', 'iguana', 'gecko', 'komodo dragon', 'basilisk'],
      ['thunder', 'lightning', 'hail', 'rain', 'sleet'],
      ['seashell', 'starfish', 'coral', 'seahorse', 'anemone'],
      ['library', 'bookstore', 'study', 'reading nook', 'bookshelf'],
      ['guitar', 'piano', 'violin', 'flute', 'cello'],
      ['frisbee', 'kite', 'yoyo', 'boomerang', 'juggling balls'],
      ['paris', 'london', 'new york', 'tokyo', 'sydney'],
      ['lemon', 'lime', 'orange', 'grapefruit', 'mandarin'],
      ['hedgehog', 'porcupine', 'echidna', 'shrew', 'mole'],
      ['lighthouse', 'buoy', 'anchor', 'pier', 'lifeguard'],
      ['chocolate', 'vanilla', 'strawberry', 'caramel', 'butterscotch'],
      ['sunrise', 'sunset', 'twilight', 'dawn', 'dusk'],
      ['watermelon', 'cantaloupe', 'honeydew', 'kiwi', 'pomegranate'],
      ['golf', 'tennis', 'badminton', 'table tennis', 'squash'],
      ['crescent moon', 'full moon', 'half moon', 'new moon', 'gibbous moon'],
      ['trampoline', 'bouncy castle', 'jump rope', 'hopscotch', 'swing'],
      ['tornado', 'hurricane', 'cyclone', 'typhoon', 'whirlwind'],
      ['monopoly', 'scrabble', 'chess', 'checkers', 'pictionary'],
      ['starry night', 'mona lisa', 'the scream', 'guernica', 'starry night'],
      ['gazelle', 'kangaroo', 'impala', 'springbok', 'oryx'],
      ['feather', 'beak', 'talons', 'wingspan', 'preen'],
      ['dolphin', 'whale', 'shark', 'seal', 'walrus'],
      ['baseball', 'soccer', 'basketball', 'football', 'hockey'],
      ['toothbrush', 'toothpaste', 'floss', 'mouthwash', 'dentist'],
      ['sunflower', 'daisy', 'rose', 'tulip', 'lily'],
      ['tea', 'coffee', 'hot chocolate', 'chai', 'cappuccino'],
      ['palm tree', 'coconut', 'beach', 'ocean', 'sunset'],
      ['globe', 'map', 'compass', 'gps', 'exploration'],
      ['polar bear', 'penguin', 'seal', 'arctic fox', 'narwhal'],
      ['puzzle', 'maze', 'brainteaser', 'riddle', 'sudoku'],
      ['kangaroo', 'wallaby', 'koala', 'wombat', 'tasmanian devil'],
      ['candle', 'incense', 'aroma', 'fragrance', 'scent'],
      ['eagle', 'hawk', 'falcon', 'vulture', 'osprey'],
      ['comet', 'asteroid', 'meteorite', 'meteor', 'shooting star'],
      ['jigsaw puzzle', 'crossword', 'sudoku', 'word search', 'riddle'],
      ['tiger', 'leopard', 'cheetah', 'jaguar', 'lynx'],
      ['ballet', 'salsa', 'hip-hop', 'tango', 'flamenco'],
      ['robot', 'android', 'cyborg', 'nanobot', 'droid'],
      ['bicycle', 'tricycle', 'unicycle', 'tandem', 'mountain bike'],
      ['butterfly', 'dragonfly', 'firefly', 'ladybug', 'caterpillar'],
      ['submarine', 'cruise ship', 'yacht', 'sailboat', 'speedboat'],
      ['mermaid', 'siren', 'nymph', 'sea witch', 'triton'],
      ['sunflower', 'tulip', 'daisy', 'rose', 'orchid'],
      ['chameleon', 'iguana', 'gecko', 'komodo dragon', 'basilisk'],
      ['thunder', 'lightning', 'hail', 'rain', 'sleet'],
      ['seashell', 'starfish', 'coral', 'seahorse', 'anemone'],
      ['library', 'bookstore', 'study', 'reading nook', 'bookshelf'],
      ['guitar', 'piano', 'violin', 'flute', 'cello'],
      ['frisbee', 'kite', 'yoyo', 'boomerang', 'juggling balls'],
      ['paris', 'london', 'new york', 'tokyo', 'sydney'],
      ['lemon', 'lime', 'orange', 'grapefruit', 'mandarin'],
      ['hedgehog', 'porcupine', 'echidna', 'shrew', 'mole'],
      ['lighthouse', 'buoy', 'anchor', 'pier', 'lifeguard'],
      ['chocolate', 'vanilla', 'strawberry', 'caramel', 'butterscotch'],
      ['sunrise', 'sunset', 'twilight', 'dawn', 'dusk'],
      ['watermelon', 'cantaloupe', 'honeydew', 'kiwi', 'pomegranate'],
      ['golf', 'tennis', 'badminton', 'table tennis', 'squash'],
      ['crescent moon', 'full moon', 'half moon', 'new moon', 'gibbous moon'],
      ['trampoline', 'bouncy castle', 'jump rope', 'hopscotch', 'swing'],
      ['tornado', 'hurricane', 'cyclone', 'typhoon', 'whirlwind'],
      ['monopoly', 'scrabble', 'chess', 'checkers', 'pictionary'],
      ['starry night', 'mona lisa', 'the scream', 'guernica', 'starry night'],
      ['gazelle', 'kangaroo', 'impala', 'springbok', 'oryx'],
      ['feather', 'beak', 'talons', 'wingspan', 'preen'],
      ['dolphin', 'whale', 'shark', 'seal', 'walrus'],
      ['baseball', 'soccer', 'basketball', 'football', 'hockey'],
      ['toothbrush', 'toothpaste', 'floss', 'mouthwash', 'dentist'],
      ['sunflower', 'daisy', 'rose', 'tulip', 'lily'],
      ['tea', 'coffee', 'hot chocolate', 'chai', 'cappuccino'],
      ['palm tree', 'coconut', 'beach', 'ocean', 'sunset'],
      ['globe', 'map', 'compass', 'gps', 'exploration'],
      ['polar bear', 'penguin', 'seal', 'arctic fox', 'narwhal'],
      ['puzzle', 'maze', 'brainteaser', 'riddle', 'sudoku'],
      ['kangaroo', 'wallaby', 'koala', 'wombat', 'tasmanian devil'],
      ['candle', 'incense', 'aroma', 'fragrance', 'scent'],
      ['eagle', 'hawk', 'falcon', 'vulture', 'osprey'],
      ['comet', 'asteroid', 'meteorite', 'meteor', 'shooting star'],
      ['jigsaw puzzle', 'crossword', 'sudoku', 'word search', 'riddle'],
      ['tiger', 'leopard', 'cheetah', 'jaguar', 'lynx'],
      ['ballet', 'salsa', 'hip-hop', 'tango', 'flamenco'],
      ['robot', 'android', 'cyborg', 'nanobot', 'droid'],
      ['bicycle', 'tricycle', 'unicycle', 'tandem', 'mountain bike'],
      ['butterfly', 'dragonfly', 'firefly', 'ladybug', 'caterpillar'],
      ['submarine', 'cruise ship', 'yacht', 'sailboat', 'speedboat'],
    const randomIndex = Math.floor(Math.random() * words.length);
    randomWord = words[randomIndex];
  };
</script>

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

  h2 {
    font-size: 28px;
    color: #333;
    margin-bottom: 10px;
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
  }

  button:hover {
    background-color: #2980b9;
  }

  p {
    font-size: 20px;
    margin-top: 20px;
    color: #555;
  }
</style>

<div>
  <h2>Random Word Generator</h2>
  <button on:click="{generateRandomWord}">Generate Random Word</button>
  {#if randomWord}
    <p>The random word is: {randomWord}</p>
  {/if}
</div>









