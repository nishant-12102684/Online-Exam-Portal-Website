// seeder.js
const mongoose = require('mongoose');
const Test = require('./models/Test'); // Adjust the path if needed

// Connect to MongoDB
mongoose.connect('mongodb+srv://nishant5006k:nish5623@examportal.7d7ud.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async () => {
  console.log('Connected to MongoDB');

  // Define the questions you want to seed
  const mathsQuestions = [
    {
      questionText: "1. What is the derivative of the function f(x) = x^3 - 5x^2 + 6x?",
      options: [
        { text: "3x^2 - 10x + 6", isCorrect: true },
        { text: "3x^2 - 10x", isCorrect: false },
        { text: "x^2 - 5x + 6", isCorrect: false },
        { text: "3x^2 - 5", isCorrect: false },
      ],
    },
    {
      questionText: "2. What is the integral of the function f(x) = 4x^3?",
      options: [
        { text: "x^4 + C", isCorrect: false },
        { text: "x^4 - C", isCorrect: false },
        { text: "x^4 + C", isCorrect: true },
        { text: "4x^4 + C", isCorrect: false },
      ],
    },
    {
      questionText: "3. If a matrix A has dimensions 2x3 and matrix B has dimensions 3x4, what is the dimension of the product AB?",
      options: [
        { text: "2x4", isCorrect: true },
        { text: "3x3", isCorrect: false },
        { text: "2x3", isCorrect: false },
        { text: "3x4", isCorrect: false },
      ],
    },
    {
      questionText: "4. What is the determinant of the 2x2 matrix [[1, 2], [3, 4]]?",
      options: [
        { text: "-2", isCorrect: true },
        { text: "2", isCorrect: false },
        { text: "1", isCorrect: false },
        { text: "4", isCorrect: false },
      ],
    },
    {
      questionText: "5. In probability theory, if P(A) = 0.3 and P(B) = 0.4, what is the probability of A or B if A and B are mutually exclusive?",
      options: [
        { text: "0.7", isCorrect: true },
        { text: "0.1", isCorrect: false },
        { text: "0.12", isCorrect: false },
        { text: "0.3", isCorrect: false },
      ],
    },
    {
      questionText: "6. What is the sum of the first 10 terms of an arithmetic series with the first term 2 and common difference 5?",
      options: [
        { text: "320", isCorrect: false },
        { text: "350", isCorrect: true },
        { text: "300", isCorrect: false },
        { text: "310", isCorrect: false },
      ],
    },
    {
      questionText: "7. What is the eigenvalue of the matrix [[2, 1], [1, 2]]?",
      options: [
        { text: "3, 1", isCorrect: true },
        { text: "2, 2", isCorrect: false },
        { text: "2, 0", isCorrect: false },
        { text: "1, 1", isCorrect: false },
      ],
    },
    {
      questionText: "8. If the function f(x) = e^x, what is f''(x)?",
      options: [
        { text: "e^x", isCorrect: true },
        { text: "e^x + C", isCorrect: false },
        { text: "e^x - C", isCorrect: false },
        { text: "2e^x", isCorrect: false },
      ],
    },
    {
      questionText: "9. What is the value of log2(32)?",
      options: [
        { text: "5", isCorrect: true },
        { text: "6", isCorrect: false },
        { text: "4", isCorrect: false },
        { text: "7", isCorrect: false },
      ],
    },
    {
      questionText: "10. In a normal distribution, what percentage of data lies within one standard deviation of the mean?",
      options: [
        { text: "68%", isCorrect: true },
        { text: "95%", isCorrect: false },
        { text: "99%", isCorrect: false },
        { text: "50%", isCorrect: false },
      ],
    },
    {
      questionText: "11. What is the value of the sum of the interior angles of a hexagon?",
      options: [
        { text: "720 degrees", isCorrect: true },
        { text: "1080 degrees", isCorrect: false },
        { text: "360 degrees", isCorrect: false },
        { text: "540 degrees", isCorrect: false },
      ],
    },
    {
      questionText: "12. What is the characteristic polynomial of the matrix [[0, 1], [-1, 0]]?",
      options: [
        { text: "λ^2 + 1", isCorrect: true },
        { text: "λ^2 - 1", isCorrect: false },
        { text: "λ^2", isCorrect: false },
        { text: "λ^2 - λ", isCorrect: false },
      ],
    },
    {
      questionText: "13. What is the radius of convergence of the power series ∑(n=1 to ∞) (x^n / n^2)?",
      options: [
        { text: "1", isCorrect: true },
        { text: "0", isCorrect: false },
        { text: "∞", isCorrect: false },
        { text: "2", isCorrect: false },
      ],
    },
    {
      questionText: "14. If the roots of the quadratic equation ax^2 + bx + c = 0 are real and distinct, what is the condition for the discriminant?",
      options: [
        { text: "b^2 - 4ac > 0", isCorrect: true },
        { text: "b^2 - 4ac = 0", isCorrect: false },
        { text: "b^2 - 4ac < 0", isCorrect: false },
        { text: "b^2 - 4ac = a", isCorrect: false },
      ],
    },
    {
      questionText: "15. What is the Fourier transform of a Dirac delta function δ(t)?",
      options: [
        { text: "1", isCorrect: true },
        { text: "δ(f)", isCorrect: false },
        { text: "0", isCorrect: false },
        { text: "t", isCorrect: false },
      ],
    },
  ];
  
  
  const englishQuestions = [
    {
      questionText: "1. What is the primary theme of Shakespeare's 'Macbeth'?",
      options: [
        { text: "Ambition and its consequences", isCorrect: true },
        { text: "Love and betrayal", isCorrect: false },
        { text: "War and peace", isCorrect: false },
        { text: "Justice and morality", isCorrect: false },
      ],
    },
    {
      questionText: "2. Which literary device is used in the phrase 'The world is a stage' from Shakespeare's works?",
      options: [
        { text: "Metaphor", isCorrect: true },
        { text: "Simile", isCorrect: false },
        { text: "Personification", isCorrect: false },
        { text: "Hyperbole", isCorrect: false },
      ],
    },
    {
      questionText: "3. In George Orwell's '1984', what is the name of the oppressive regime that controls Oceania?",
      options: [
        { text: "The Party", isCorrect: true },
        { text: "Big Brother", isCorrect: false },
        { text: "The Authority", isCorrect: false },
        { text: "The Coalition", isCorrect: false },
      ],
    },
    {
      questionText: "4. What is the literary term for a comparison between two unlike things using 'like' or 'as'?",
      options: [
        { text: "Simile", isCorrect: true },
        { text: "Metaphor", isCorrect: false },
        { text: "Alliteration", isCorrect: false },
        { text: "Onomatopoeia", isCorrect: false },
      ],
    },
    {
      questionText: "5. Which novel by James Joyce is considered a masterpiece of modernist literature and is known for its stream-of-consciousness style?",
      options: [
        { text: "Ulysses", isCorrect: true },
        { text: "A Portrait of the Artist as a Young Man", isCorrect: false },
        { text: "Dubliners", isCorrect: false },
        { text: "Finnegans Wake", isCorrect: false },
      ],
    },
    {
      questionText: "6. In literature, what term describes a character who contrasts with another character, often the protagonist, to highlight particular qualities of the main character?",
      options: [
        { text: "Foil", isCorrect: true },
        { text: "Antagonist", isCorrect: false },
        { text: "Protagonist", isCorrect: false },
        { text: "Confidant", isCorrect: false },
      ],
    },
    {
      questionText: "7. In which poem by Robert Frost does the narrator reflect on the choices made in life and their consequences?",
      options: [
        { text: "The Road Not Taken", isCorrect: true },
        { text: "Stopping by Woods on a Snowy Evening", isCorrect: false },
        { text: "Mending Wall", isCorrect: false },
        { text: "Birches", isCorrect: false },
      ],
    },
    {
      questionText: "8. What is the name of the literary technique where an author includes references to other works of literature or historical events within their text?",
      options: [
        { text: "Allusion", isCorrect: true },
        { text: "Irony", isCorrect: false },
        { text: "Symbolism", isCorrect: false },
        { text: "Imagery", isCorrect: false },
      ],
    },
    {
      questionText: "9. In 'To Kill a Mockingbird', who is the lawyer defending Tom Robinson?",
      options: [
        { text: "Atticus Finch", isCorrect: true },
        { text: "Bob Ewell", isCorrect: false },
        { text: "Jem Finch", isCorrect: false },
        { text: "Dill Harris", isCorrect: false },
      ],
    },
    {
      questionText: "10. Which American author is known for their works 'The Great Gatsby' and 'Tender Is the Night'?",
      options: [
        { text: "F. Scott Fitzgerald", isCorrect: true },
        { text: "Ernest Hemingway", isCorrect: false },
        { text: "John Steinbeck", isCorrect: false },
        { text: "William Faulkner", isCorrect: false },
      ],
    },
    {
      questionText: "11. In grammar, what is the term for a word that modifies or describes a noun?",
      options: [
        { text: "Adjective", isCorrect: true },
        { text: "Adverb", isCorrect: false },
        { text: "Verb", isCorrect: false },
        { text: "Noun", isCorrect: false },
      ],
    },
    {
      questionText: "12. What is the central theme of Jane Austen's 'Pride and Prejudice'?",
      options: [
        { text: "Social class and marriage", isCorrect: true },
        { text: "Adventure and discovery", isCorrect: false },
        { text: "War and peace", isCorrect: false },
        { text: "Friendship and loyalty", isCorrect: false },
      ],
    },
    {
      questionText: "13. In which genre would you classify 'The Catcher in the Rye' by J.D. Salinger?",
      options: [
        { text: "Bildungsroman", isCorrect: true },
        { text: "Science Fiction", isCorrect: false },
        { text: "Fantasy", isCorrect: false },
        { text: "Mystery", isCorrect: false },
      ],
    },
    {
      questionText: "14. What is the term for a narrative style that uses the first-person perspective and involves the narrator's personal thoughts and experiences?",
      options: [
        { text: "First-person narration", isCorrect: true },
        { text: "Third-person limited narration", isCorrect: false },
        { text: "Second-person narration", isCorrect: false },
        { text: "Stream-of-consciousness", isCorrect: false },
      ],
    },
    {
      questionText: "15. In which play by Arthur Miller does the protagonist, Willy Loman, struggle with his own sense of worth and reality?",
      options: [
        { text: "Death of a Salesman", isCorrect: true },
        { text: "The Crucible", isCorrect: false },
        { text: "A View from the Bridge", isCorrect: false },
        { text: "All My Sons", isCorrect: false },
      ],
    },
  ];
  
  
  const geographyQuestions = [
    {
      questionText: "1. What is the longest river in the world?",
      options: [
        { text: "Amazon River", isCorrect: true },
        { text: "Nile River", isCorrect: false },
        { text: "Yangtze River", isCorrect: false },
        { text: "Mississippi River", isCorrect: false },
      ],
    },
    {
      questionText: "2. Which country has the largest land area in the world?",
      options: [
        { text: "Russia", isCorrect: true },
        { text: "Canada", isCorrect: false },
        { text: "China", isCorrect: false },
        { text: "United States", isCorrect: false },
      ],
    },
    {
      questionText: "3. What is the capital city of Australia?",
      options: [
        { text: "Canberra", isCorrect: true },
        { text: "Sydney", isCorrect: false },
        { text: "Melbourne", isCorrect: false },
        { text: "Brisbane", isCorrect: false },
      ],
    },
    {
      questionText: "4. Which desert is the largest hot desert in the world?",
      options: [
        { text: "Sahara Desert", isCorrect: true },
        { text: "Gobi Desert", isCorrect: false },
        { text: "Karakum Desert", isCorrect: false },
        { text: "Kalahari Desert", isCorrect: false },
      ],
    },
    {
      questionText: "5. Which ocean is the smallest and shallowest of the world's five oceans?",
      options: [
        { text: "Arctic Ocean", isCorrect: true },
        { text: "Indian Ocean", isCorrect: false },
        { text: "Atlantic Ocean", isCorrect: false },
        { text: "Pacific Ocean", isCorrect: false },
      ],
    },
    {
      questionText: "6. What is the name of the largest volcano in the solar system, located on Mars?",
      options: [
        { text: "Olympus Mons", isCorrect: true },
        { text: "Mauna Loa", isCorrect: false },
        { text: "Mount Fuji", isCorrect: false },
        { text: "Mount Vesuvius", isCorrect: false },
      ],
    },
    {
      questionText: "7. Which river flows through Egypt and is essential to its agriculture and economy?",
      options: [
        { text: "Nile River", isCorrect: true },
        { text: "Tigris River", isCorrect: false },
        { text: "Euphrates River", isCorrect: false },
        { text: "Jordan River", isCorrect: false },
      ],
    },
    {
      questionText: "8. Which mountain range separates Europe from Asia?",
      options: [
        { text: "Ural Mountains", isCorrect: true },
        { text: "Himalayas", isCorrect: false },
        { text: "Andes", isCorrect: false },
        { text: "Rockies", isCorrect: false },
      ],
    },
    {
      questionText: "9. What is the most populous city in the world?",
      options: [
        { text: "Tokyo", isCorrect: true },
        { text: "New York City", isCorrect: false },
        { text: "Shanghai", isCorrect: false },
        { text: "Mumbai", isCorrect: false },
      ],
    },
    {
      questionText: "10. Which continent is known for having the highest number of countries?",
      options: [
        { text: "Africa", isCorrect: true },
        { text: "Asia", isCorrect: false },
        { text: "Europe", isCorrect: false },
        { text: "South America", isCorrect: false },
      ],
    },
    {
      questionText: "11. What is the name of the tectonic plate responsible for many earthquakes in the western United States?",
      options: [
        { text: "Pacific Plate", isCorrect: true },
        { text: "North American Plate", isCorrect: false },
        { text: "Eurasian Plate", isCorrect: false },
        { text: "African Plate", isCorrect: false },
      ],
    },
    {
      questionText: "12. Which river is the longest in South America?",
      options: [
        { text: "Amazon River", isCorrect: true },
        { text: "Parana River", isCorrect: false },
        { text: "Orinoco River", isCorrect: false },
        { text: "Madeira River", isCorrect: false },
      ],
    },
    {
      questionText: "13. In which country would you find the city of Istanbul, which spans two continents?",
      options: [
        { text: "Turkey", isCorrect: true },
        { text: "Greece", isCorrect: false },
        { text: "Egypt", isCorrect: false },
        { text: "Cyprus", isCorrect: false },
      ],
    },
    {
      questionText: "14. What is the name of the large island nation located southeast of India, known for its biodiversity?",
      options: [
        { text: "Sri Lanka", isCorrect: true },
        { text: "Maldives", isCorrect: false },
        { text: "Sumatra", isCorrect: false },
        { text: "Borneo", isCorrect: false },
      ],
    },
    {
      questionText: "15. Which geographic feature is often described as a large, flat-topped mountain with steep sides?",
      options: [
        { text: "Mesa", isCorrect: true },
        { text: "Butte", isCorrect: false },
        { text: "Peak", isCorrect: false },
        { text: "Hill", isCorrect: false },
      ],
    },
  ];
  
  
  
  
  const historyQuestions = [
    {
      questionText: "1. Who was the first emperor of China, founding the Qin Dynasty?",
      options: [
        { text: "Qin Shi Huang", isCorrect: true },
        { text: "Liu Bang", isCorrect: false },
        { text: "Wudi", isCorrect: false },
        { text: "Cao Cao", isCorrect: false },
      ],
    },
    {
      questionText: "2. What event is commonly considered the start of the French Revolution?",
      options: [
        { text: "Storming of the Bastille", isCorrect: true },
        { text: "Execution of Louis XVI", isCorrect: false },
        { text: "Estates-General Meeting", isCorrect: false },
        { text: "Reign of Terror", isCorrect: false },
      ],
    },
    {
      questionText: "3. The Treaty of Versailles was signed at the end of which conflict?",
      options: [
        { text: "World War I", isCorrect: true },
        { text: "World War II", isCorrect: false },
        { text: "The Korean War", isCorrect: false },
        { text: "The Cold War", isCorrect: false },
      ],
    },
    {
      questionText: "4. Who was the leader of the Soviet Union during the Cuban Missile Crisis?",
      options: [
        { text: "Nikita Khrushchev", isCorrect: true },
        { text: "Joseph Stalin", isCorrect: false },
        { text: "Leonid Brezhnev", isCorrect: false },
        { text: "Mikhail Gorbachev", isCorrect: false },
      ],
    },
    {
      questionText: "5. The Magna Carta was signed in which year?",
      options: [
        { text: "1215", isCorrect: true },
        { text: "1066", isCorrect: false },
        { text: "1492", isCorrect: false },
        { text: "1776", isCorrect: false },
      ],
    },
    {
      questionText: "6. What empire was ruled by Genghis Khan in the 13th century?",
      options: [
        { text: "Mongol Empire", isCorrect: true },
        { text: "Ottoman Empire", isCorrect: false },
        { text: "Roman Empire", isCorrect: false },
        { text: "Byzantine Empire", isCorrect: false },
      ],
    },
    {
      questionText: "7. The American Civil War ended with the surrender at Appomattox Court House in which year?",
      options: [
        { text: "1865", isCorrect: true },
        { text: "1861", isCorrect: false },
        { text: "1877", isCorrect: false },
        { text: "1854", isCorrect: false },
      ],
    },
    {
      questionText: "8. Who was the first President of South Africa elected in a fully representative democratic election?",
      options: [
        { text: "Nelson Mandela", isCorrect: true },
        { text: "Desmond Tutu", isCorrect: false },
        { text: "Jacob Zuma", isCorrect: false },
        { text: "Thabo Mbeki", isCorrect: false },
      ],
    },
    {
      questionText: "9. The Berlin Wall fell in which year?",
      options: [
        { text: "1989", isCorrect: true },
        { text: "1961", isCorrect: false },
        { text: "1973", isCorrect: false },
        { text: "1991", isCorrect: false },
      ],
    },
    {
      questionText: "10. Who was the leader of the Indian independence movement against British rule?",
      options: [
        { text: "Mahatma Gandhi", isCorrect: true },
        { text: "Jawaharlal Nehru", isCorrect: false },
        { text: "Subhas Chandra Bose", isCorrect: false },
        { text: "Bhagat Singh", isCorrect: false },
      ],
    },
    {
      questionText: "11. Which ancient civilization is credited with the creation of the first known writing system?",
      options: [
        { text: "Sumerian", isCorrect: true },
        { text: "Egyptian", isCorrect: false },
        { text: "Indus Valley", isCorrect: false },
        { text: "Chinese", isCorrect: false },
      ],
    },
    {
      questionText: "12. What was the primary cause of the Thirty Years' War in Europe?",
      options: [
        { text: "Religious conflicts", isCorrect: true },
        { text: "Colonial expansion", isCorrect: false },
        { text: "Dynastic disputes", isCorrect: false },
        { text: "Economic trade disputes", isCorrect: false },
      ],
    },
    {
      questionText: "13. Which Roman emperor is known for initiating the persecution of Christians in the Roman Empire?",
      options: [
        { text: "Nero", isCorrect: true },
        { text: "Augustus", isCorrect: false },
        { text: "Caligula", isCorrect: false },
        { text: "Trajan", isCorrect: false },
      ],
    },
    {
      questionText: "14. The Opium Wars were fought between China and which country?",
      options: [
        { text: "United Kingdom", isCorrect: true },
        { text: "France", isCorrect: false },
        { text: "Russia", isCorrect: false },
        { text: "Germany", isCorrect: false },
      ],
    },
    {
      questionText: "15. The 'Iron Curtain' metaphor was popularized by which leader during the Cold War?",
      options: [
        { text: "Winston Churchill", isCorrect: true },
        { text: "Franklin D. Roosevelt", isCorrect: false },
        { text: "John F. Kennedy", isCorrect: false },
        { text: "Joseph Stalin", isCorrect: false },
      ],
    },
  ];
  
  
  const compScienceQuestions = [
    {
      questionText: "1.What is the time complexity of binary search in a sorted array?",
      options: [
        { text: "O(n)", isCorrect: false },
        { text: "O(log n)", isCorrect: true },
        { text: "O(n log n)", isCorrect: false },
        { text: "O(n^2)", isCorrect: false },
      ],
    },
    {
      questionText: "2.Which of the following sorting algorithms has the best average time complexity?",
      options: [
        { text: "Bubble Sort", isCorrect: false },
        { text: "Insertion Sort", isCorrect: false },
        { text: "Merge Sort", isCorrect: true },
        { text: "Selection Sort", isCorrect: false },
      ],
    },
    {
      questionText: "3.What is a deadlock in operating systems?",
      options: [
        { text: "A condition where processes are blocked, each waiting for the other to release resources.", isCorrect: true },
        { text: "A condition where all processes are executing simultaneously.", isCorrect: false },
        { text: "A situation where all processes are terminated.", isCorrect: false },
        { text: "A state where processes have unlimited resources.", isCorrect: false },
      ],
    },
    {
      questionText: "4.In which data structure is a node linked to only its successor?",
      options: [
        { text: "Doubly Linked List", isCorrect: false },
        { text: "Circular Linked List", isCorrect: false },
        { text: "Singly Linked List", isCorrect: true },
        { text: "Stack", isCorrect: false },
      ],
    },
    {
      questionText: "5.What is the main advantage of using a hash table over a binary search tree?",
      options: [
        { text: "Hash tables provide O(1) average time complexity for insertions and lookups.", isCorrect: true },
        { text: "Hash tables are more space-efficient.", isCorrect: false },
        { text: "Hash tables guarantee ordered data retrieval.", isCorrect: false },
        { text: "Hash tables always use less memory than binary search trees.", isCorrect: false },
      ],
    },
    {
      questionText: "6.Which of the following is a characteristic of a NoSQL database?",
      options: [
        { text: "Schema-less design", isCorrect: true },
        { text: "Strict ACID compliance", isCorrect: false },
        { text: "Relational structure", isCorrect: false },
        { text: "Use of SQL for queries", isCorrect: false },
      ],
    },
    {
      questionText: "7.What is the purpose of the 'volatile' keyword in Java?",
      options: [
        { text: "To ensure that a variable's value is not cached and is always read from the main memory.", isCorrect: true },
        { text: "To make a variable immutable.", isCorrect: false },
        { text: "To declare a variable as static.", isCorrect: false },
        { text: "To optimize performance by avoiding synchronization.", isCorrect: false },
      ],
    },
    {
      questionText: "8.Which design pattern provides a way to create objects without specifying the exact class of object that will be created?",
      options: [
        { text: "Singleton Pattern", isCorrect: false },
        { text: "Factory Pattern", isCorrect: true },
        { text: "Observer Pattern", isCorrect: false },
        { text: "Decorator Pattern", isCorrect: false },
      ],
    },
    {
      questionText: "9.What is the space complexity of the Quick Sort algorithm in the worst case?",
      options: [
        { text: "O(log n)", isCorrect: false },
        { text: "O(n)", isCorrect: false },
        { text: "O(n^2)", isCorrect: true },
        { text: "O(1)", isCorrect: false },
      ],
    },
    {
      questionText: "10.Which of the following is not a type of concurrency control mechanism in databases?",
      options: [
        { text: "Locking", isCorrect: false },
        { text: "Timestamp Ordering", isCorrect: false },
        { text: "Two-Phase Commit", isCorrect: false },
        { text: "Hashing", isCorrect: true },
      ],
    },
    {
      questionText: "11.What does 'Big O' notation describe in algorithm analysis?",
      options: [
        { text: "The actual time taken by an algorithm.", isCorrect: false },
        { text: "The space used by an algorithm in practice.", isCorrect: false },
        { text: "The upper bound of the growth rate of an algorithm's time complexity.", isCorrect: true },
        { text: "The exact number of steps an algorithm takes.", isCorrect: false },
      ],
    },
    {
      questionText: "12.Which of the following is not a feature of the functional programming paradigm?",
      options: [
        { text: "First-class functions", isCorrect: false },
        { text: "Immutability", isCorrect: false },
        { text: "Side-effect free functions", isCorrect: false },
        { text: "Explicit state management", isCorrect: true },
      ],
    },
    {
      questionText: "13.What is the main function of a compiler?",
      options: [
        { text: "To execute the code line by line.", isCorrect: false },
        { text: "To translate high-level code into machine code.", isCorrect: true },
        { text: "To interpret the code during runtime.", isCorrect: false },
        { text: "To provide debugging information.", isCorrect: false },
      ],
    },
    {
      questionText: "14.Which algorithm is commonly used for graph traversal?",
      options: [
        { text: "Binary Search", isCorrect: false },
        { text: "Depth-First Search", isCorrect: true },
        { text: "Quick Sort", isCorrect: false },
        { text: "Dijkstra's Algorithm", isCorrect: false },
      ],
    },
    {
      questionText: "15.What is the primary purpose of using an Abstract Data Type (ADT)?",
      options: [
        { text: "To define a set of operations on a data structure without specifying the details of implementation.", isCorrect: true },
        { text: "To provide a concrete implementation of a data structure.", isCorrect: false },
        { text: "To optimize performance by using low-level data manipulation.", isCorrect: false },
        { text: "To enforce type safety in programming languages.", isCorrect: false },
      ],
    },
    {
      questionText: "16.In the context of web development, what is CORS used for?",
      options: [
        { text: "Cross-Origin Resource Sharing", isCorrect: true },
        { text: "Content Oriented Retrieval System", isCorrect: false },
        { text: "Client-Originated Request Security", isCorrect: false },
        { text: "Custom Object Rendering Service", isCorrect: false },
      ],
    },
  ];
  const scienceQuestions = [
    {
      questionText: "1. What is the most abundant gas in the Earth's atmosphere?",
      options: [
        { text: "Nitrogen", isCorrect: true },
        { text: "Oxygen", isCorrect: false },
        { text: "Carbon Dioxide", isCorrect: false },
        { text: "Argon", isCorrect: false },
      ],
    },
    {
      questionText: "2. What is the chemical symbol for the element with atomic number 79?",
      options: [
        { text: "Au", isCorrect: true },
        { text: "Ag", isCorrect: false },
        { text: "Pb", isCorrect: false },
        { text: "Pt", isCorrect: false },
      ],
    },
    {
      questionText: "3. Which planet in our solar system has the longest day?",
      options: [
        { text: "Venus", isCorrect: true },
        { text: "Mars", isCorrect: false },
        { text: "Jupiter", isCorrect: false },
        { text: "Mercury", isCorrect: false },
      ],
    },
    {
      questionText: "4. What is the primary source of energy for the Earth's climate system?",
      options: [
        { text: "The Sun", isCorrect: true },
        { text: "The Moon", isCorrect: false },
        { text: "Geothermal Heat", isCorrect: false },
        { text: "Nuclear Energy", isCorrect: false },
      ],
    },
    {
      questionText: "5. Which fundamental force is responsible for holding the nucleus of an atom together?",
      options: [
        { text: "Strong Nuclear Force", isCorrect: true },
        { text: "Electromagnetic Force", isCorrect: false },
        { text: "Weak Nuclear Force", isCorrect: false },
        { text: "Gravitational Force", isCorrect: false },
      ],
    },
    {
      questionText: "6. The theory of relativity was developed by which physicist?",
      options: [
        { text: "Albert Einstein", isCorrect: true },
        { text: "Isaac Newton", isCorrect: false },
        { text: "Niels Bohr", isCorrect: false },
        { text: "James Clerk Maxwell", isCorrect: false },
      ],
    },
    {
      questionText: "7. What is the process by which plants convert sunlight into chemical energy?",
      options: [
        { text: "Photosynthesis", isCorrect: true },
        { text: "Respiration", isCorrect: false },
        { text: "Fermentation", isCorrect: false },
        { text: "Transpiration", isCorrect: false },
      ],
    },
    {
      questionText: "8. What is the most common type of star in the Milky Way galaxy?",
      options: [
        { text: "Red Dwarf", isCorrect: true },
        { text: "Blue Giant", isCorrect: false },
        { text: "White Dwarf", isCorrect: false },
        { text: "Supergiant", isCorrect: false },
      ],
    },
    {
      questionText: "9. What is the name of the effect where light bends as it passes near a massive object?",
      options: [
        { text: "Gravitational Lensing", isCorrect: true },
        { text: "Doppler Effect", isCorrect: false },
        { text: "Refraction", isCorrect: false },
        { text: "Diffraction", isCorrect: false },
      ],
    },
    {
      questionText: "10. Who is known as the father of modern chemistry?",
      options: [
        { text: "Antoine Lavoisier", isCorrect: true },
        { text: "Dmitri Mendeleev", isCorrect: false },
        { text: "John Dalton", isCorrect: false },
        { text: "Robert Boyle", isCorrect: false },
      ],
    },
    {
      questionText: "11. What is the primary component of the Earth's core?",
      options: [
        { text: "Iron", isCorrect: true },
        { text: "Nickel", isCorrect: false },
        { text: "Silicon", isCorrect: false },
        { text: "Aluminum", isCorrect: false },
      ],
    },
    {
      questionText: "12. The process by which cells divide to produce gametes is called what?",
      options: [
        { text: "Meiosis", isCorrect: true },
        { text: "Mitosis", isCorrect: false },
        { text: "Fission", isCorrect: false },
        { text: "Fusion", isCorrect: false },
      ],
    },
    {
      questionText: "13. Which scientist is famous for his laws of motion and universal gravitation?",
      options: [
        { text: "Isaac Newton", isCorrect: true },
        { text: "Galileo Galilei", isCorrect: false },
        { text: "Johannes Kepler", isCorrect: false },
        { text: "Nicolaus Copernicus", isCorrect: false },
      ],
    },
    {
      questionText: "14. What is the most abundant mineral in the Earth's crust?",
      options: [
        { text: "Feldspar", isCorrect: true },
        { text: "Quartz", isCorrect: false },
        { text: "Mica", isCorrect: false },
        { text: "Calcite", isCorrect: false },
      ],
    },
    {
      questionText: "15. What is the name of the phenomenon where the nucleus of an atom splits into two smaller nuclei, releasing energy?",
      options: [
        { text: "Nuclear Fission", isCorrect: true },
        { text: "Nuclear Fusion", isCorrect: false },
        { text: "Radioactive Decay", isCorrect: false },
        { text: "Beta Decay", isCorrect: false },
      ],
    },
  ];
  
  
  
  // Create multiple tests
  const testData = [
    { name: "Maths Test", questions: mathsQuestions },
    { name: "English Test", questions: englishQuestions },
    { name: "Geography Test", questions: geographyQuestions },
    { name: "History Test", questions: historyQuestions },
    { name: "Science Test", questions: scienceQuestions },
    { name: "Computer Science Test", questions: compScienceQuestions },
  ];
  
  // Example of how to use the testData in your seeding script
  
  try {
    // Clear existing data (optional)
    await Test.deleteMany({});
    console.log('Old tests deleted');

    // Seed new data
    await Test.insertMany(testData);
    console.log('Seeding completed successfully');
  } catch (err) {
    console.error('Error during seeding:', err);
  } finally {
    mongoose.connection.close();
  }
});
