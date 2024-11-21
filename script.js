const moodButtons = document.querySelectorAll('.mood-button');
const suggestionBox = document.querySelector('.suggestion-box');
const journalEntryTextarea = document.getElementById('journal-entry');
const saveButton = document.getElementById('save-btn');
const entriesList = document.getElementById('entries-list');
const songSuggestions = {
    happy: ['Happy - Pharrell Williams', 'Uptown Funk - Mark Ronson ft. Bruno Mars', 'Can’t Stop the Feeling! - Justin Timberlake'],
    sad: ['Someone Like You - Adele', 'The Night We Met - Lord Huron', 'Fix You - Coldplay'],
    anxious: ['Breathe Me - Sia', 'Weightless - Marconi Union', 'Calm Down - Busta Rhymes'],
    grateful: ['Thank You - Dido', 'Grateful - Rita Ora', 'Kind & Generous - Natalie Merchant'],
    relaxed: ['Sunflower - Post Malone', 'Stay With Me - Sam Smith', 'No Tears Left to Cry - Ariana Grande'],
    angry: ['Breaking the Habit - Linkin Park', 'Stronger - Kanye West', 'Numb - Linkin Park'],
    excited: ['Don’t Stop Me Now - Queen', 'On Top of the World - Imagine Dragons', 'Happy - Marshmello'],
    lonely: ['Lonely - Akon', 'The Sound of Silence - Simon & Garfunkel', 'I’m So Lonesome I Could Cry - Hank Williams'],
    stressed: ['Stressed Out - Twenty One Pilots', 'Weightless - Marconi Union', 'Rise Up - Andra Day'],
    confused: ['The Scientist - Coldplay', 'Complicated - Avril Lavigne', 'Lost Cause - Billie Eilish'],
    hopeful: ['Eye of the Tiger - Survivor', 'Don’t Stop Believin’ - Journey', 'Rise Up - Andra Day'],
    grief: ['Tears in Heaven - Eric Clapton', 'Yesterday - The Beatles', 'The Night We Met - Lord Huron']
};

const jokes = {
    happy: 'Why did the scarecrow win an award? Because he was outstanding in his field! 😄',
    sad: 'Why don’t skeletons fight each other? They don’t have the guts. 😔',
    anxious: 'Why did the bicycle fall over? Because it was two-tired. 😬',
    grateful: 'What do you call a grateful dinosaur? A thankfulasaurus! 🦖',
    relaxed: 'Why don’t we tell secrets on a farm? Because the potatoes have eyes! 🥔',
    angry: 'Why don’t angry bees ever take a break? Because they’re always buzzed. 😡',
    excited: 'What’s orange and sounds like a parrot? A carrot! 🥕',
    lonely: 'Why don’t lonely ghosts ever ask for help? Because they’re afraid of being “boo-ed” away! 👻',
    stressed: 'Why did the math book look sad? Because it had too many problems. 🧮',
    confused: 'Why was the computer cold? Because it left its Windows open! 💻',
    hopeful: 'Why did the rainbow go to school? To learn how to be brighter! 🌈',
    grief: 'Why did the bicycle go to therapy? Because it couldn’t handle the emotional stress. 🚲'
};

const foodSuggestions = {
    happy: ['Pizza 🍕', 'Ice Cream 🍦', 'Sushi 🍣'],
    sad: ['Comfort Food 🍲', 'Hot Chocolate 🍫', 'Soup 🍜'],
    anxious: ['Herbal Tea 🍵', 'Smoothie 🥤', 'Fruit Salad 🍓'],
    grateful: ['Home-cooked Meal 🍳', 'Fresh Bread 🍞', 'Salad 🥗'],
    relaxed: ['Yogurt Parfait 🍯', 'Fruit Bowl 🍇', 'Avocado Toast 🥑'],
    angry: ['Spicy Wings 🍗', 'Hot Sauce on Everything 🌶', 'Chili 🌶'],
    excited: ['Energy Bar 🍫', 'Bananas 🍌', 'Granola 🥣'],
    lonely: ['Comforting Soup 🍲', 'Tea and Biscuits 🍪', 'Pasta 🍝'],
    stressed: ['Chocolate Cake 🍰', 'Mac and Cheese 🍝', 'Comfort Food 🍔'],
    confused: ['Sushi 🍣', 'Pasta 🍝', 'Smoothie Bowl 🥣'],
    hopeful: ['Fruit Salad 🍓', 'Avocado Toast 🥑', 'Nuts and Berries 🥜'],
    grief: ['Soup 🍜', 'Tea and Sandwich 🍞', 'Ice Cream 🍦']
};
function showSuggestions(mood) {
    const suggestionList = suggestionBox.querySelector('ul');
    suggestionList.innerHTML = ''; 
    const songList = document.getElementById('song-list');
    const jokeText = document.getElementById('joke');
    const foodList = document.getElementById('food-list');
    let suggestions = [];
    switch (mood) {
        case 'happy':
            suggestions = ['Enjoy the moment!', 'Spread positivity around you! 😄', 'Laugh out loud! 😆'];
            break;
        case 'sad':
            suggestions = ['It’s okay to feel sad, take it easy. 💙', 'Talk to someone you trust. 🗣', 'Try some self-care. 🌿'];
            break;
        case 'anxious':
            suggestions = ['Take a few deep breaths. 🌬', 'Write down what’s on your mind. ✍', 'Focus on the present moment. 🧘‍♂'];
            break;
        case 'grateful':
            suggestions = ['Think of things you are thankful for. 🙏', 'Express your gratitude to someone. 🌸'];
            break;
        case 'relaxed':
            suggestions = ['Relax and let go of stress. 🧘‍♀', 'Take a walk outside. 🚶‍♀', 'Enjoy some quiet time. 🌙'];
            break;
        case 'angry':
            suggestions = ['Take a deep breath. 🌬', 'Try some meditation. 🧘‍♂', 'Express your feelings calmly. 💬'];
            break;
        case 'excited':
            suggestions = ['Channel your energy into a new project. ⚡', 'Enjoy your excitement and share it with others. 🎉'];
            break;
        case 'lonely':
            suggestions = ['Reach out to a friend or family member. 📞', 'Try a new hobby. 🎨', 'Remember you are not alone. 🤗'];
            break;
        case 'stressed':
            suggestions = ['Take a break and relax. 🌿', 'Focus on what you can control. 🎯', 'Talk about what’s stressing you. 🗣'];
            break;
        case 'confused':
            suggestions = ['Take it step by step. 🐾', 'Ask for advice from someone you trust. 👂'];
            break;
        case 'hopeful':
            suggestions = ['Keep moving forward. 🚶‍♀', 'Stay positive, the future is bright! ✨'];
            break;
        case 'grief':
            suggestions = ['Give yourself time to grieve. 💔', 'Talk to someone who can support you. 🧑‍🤝‍🧑'];
            break;
    }
    suggestions.forEach(suggestion => {
        const li = document.createElement('li');
        li.textContent = suggestion;
        suggestionList.appendChild(li);
    });
    songSuggestions[mood].forEach(song => {
        const li = document.createElement('li');
        li.textContent = song;
        songList.appendChild(li);
    });
    jokeText.textContent = jokes[mood];
    foodSuggestions[mood].forEach(food => {
        const li = document.createElement('li');
        li.textContent = food;
        foodList.appendChild(li);
    });
}
moodButtons.forEach(button => {
    button.addEventListener('click', () => {
        const mood = button.dataset.mood;
        showSuggestions(mood);
    });
});
function showSuggestions(mood) {
    const suggestionList = suggestionBox.querySelector('ul');
    const songList = document.getElementById('song-list');
    const jokeText = document.getElementById('joke');
    const foodList = document.getElementById('food-list');
    suggestionList.innerHTML = ''; 
    songList.innerHTML = ''; 
    jokeText.textContent = ''; 
    foodList.innerHTML = '';

    let suggestions = [];
    switch (mood) {
        case 'happy':
            suggestions = ['Enjoy the moment!', 'Spread positivity around you! 😄', 'Laugh out loud! 😆'];
            break;
        case 'sad':
            suggestions = ['It’s okay to feel sad, take it easy. 💙', 'Talk to someone you trust. 🗣', 'Try some self-care. 🌿'];
            break;
        case 'anxious':
            suggestions = ['Take a few deep breaths. 🌬', 'Write down what’s on your mind. ✍', 'Focus on the present moment. 🧘‍♂'];
            break;
        }
    suggestions.forEach(suggestion => {
        const li = document.createElement('li');
        li.textContent = suggestion;
        suggestionList.appendChild(li);
    });
    songSuggestions[mood].forEach(song => {
        const li = document.createElement('li');
        li.textContent = song;
        songList.appendChild(li);
    });
    jokeText.textContent = jokes[mood];
    foodSuggestions[mood].forEach(food => {
        const li = document.createElement('li');
        li.textContent = food;
        foodList.appendChild(li);
    });
}
function saveEntry() {
    const entryText = journalEntryTextarea.value.trim();
    if (entryText) {
        const currentDate = new Date().toLocaleDateString();
        const entryWithDate = { date: currentDate, text: entryText };
        let entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
        entries.push(entryWithDate);
        localStorage.setItem('journalEntries', JSON.stringify(entries));

        journalEntryTextarea.value = '';
        displayEntries();
    }
}
function displayEntries() {
    const entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    const groupedEntries = groupEntriesByDate(entries);
    entriesList.innerHTML = '';
    for (const date in groupedEntries) {
        const dateHeader = document.createElement('h3');
        dateHeader.textContent = date;
        entriesList.appendChild(dateHeader);

        const ul = document.createElement('ul');
        groupedEntries[date].forEach(entry => {
            const li = document.createElement('li');
            li.textContent = entry.text;
            ul.appendChild(li);
        });
        entriesList.appendChild(ul);
    }
}
function groupEntriesByDate(entries) {
    return entries.reduce((acc, entry) => {
        if (!acc[entry.date]) {
            acc[entry.date] = [];
        }
        acc[entry.date].push(entry);
        return acc;
    }, {});
}
saveButton.addEventListener('click', saveEntry);
document.addEventListener('DOMContentLoaded', displayEntries);
function displayEntries() {
    const entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    const groupedEntries = groupEntriesByDate(entries);
    entriesList.innerHTML = '';

    for (const date in groupedEntries) {
        const dateHeader = document.createElement('h3');
        dateHeader.textContent = date;
        entriesList.appendChild(dateHeader);

        const ul = document.createElement('ul');
        groupedEntries[date].forEach((entry, index) => {
            const li = document.createElement('li');
            li.textContent = entry.text;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-btn');
            deleteButton.addEventListener('click', () => deleteEntry(date, index));

            li.appendChild(deleteButton);
            ul.appendChild(li);
        });
        entriesList.appendChild(ul);
    }
}

function deleteEntry(date, index) {
    let entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    const groupedEntries = groupEntriesByDate(entries);
    groupedEntries[date].splice(index, 1);
    if (groupedEntries[date].length === 0) {
        delete groupedEntries[date];
    }
    const updatedEntries = [];
    for (const date in groupedEntries) {
        groupedEntries[date].forEach(entry => updatedEntries.push({ date, text: entry.text }));
    }
    localStorage.setItem('journalEntries', JSON.stringify(updatedEntries));
    displayEntries();
}