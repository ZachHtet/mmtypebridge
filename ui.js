// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');
const html = document.documentElement;

// Check for saved theme preference or use preferred color scheme
const savedTheme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

// Apply saved theme on load
if (savedTheme === 'dark') {
    html.setAttribute('data-theme', 'dark');
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Toggle icon
    if (newTheme === 'dark') {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    } else {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    }
});

// Copy functionality with confetti effect
function copyToClipboard(text, buttonId) {
    navigator.clipboard.writeText(text).then(() => {
        // Show toast notification
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toast-message');
        toastMessage.textContent = 'Copied to clipboard!';
        toast.classList.add('show');
        
        // Create confetti effect
        createConfetti();
        
        // Hide toast after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toast-message');
        toastMessage.textContent = 'Failed to copy!';
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    });
}

// Create confetti effect
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#4a6bff', '#6b85ff', '#3452cc', '#FFC107', '#FF5722'];
    
    // Create a modest amount of confetti
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Randomize confetti properties
        const size = Math.random() * 10 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const duration = Math.random() * 3 + 2;
        
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.backgroundColor = color;
        confetti.style.left = `${left}vw`;
        confetti.style.animation = `confetti-fall ${duration}s ease forwards`;
        
        confettiContainer.appendChild(confetti);
        
        // Remove confetti after animation ends
        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}

// Clear animation effect
function clearWithAnimation(element) {
    element.classList.add('clear-animate');
    element.value = '';
    
    setTimeout(() => {
        element.classList.remove('clear-animate');
    }, 300);
}

// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
    const unicodeBox = document.getElementById('unicode');
    const zawgyiBox = document.getElementById('zawgyi');
    const winBox = document.getElementById('win');
    
    // Copy buttons
    document.getElementById('copy-unicode').addEventListener('click', () => {
        copyToClipboard(unicodeBox.value, 'copy-unicode');
    });
    
    document.getElementById('copy-zawgyi').addEventListener('click', () => {
        copyToClipboard(zawgyiBox.value, 'copy-zawgyi');
    });
    
    document.getElementById('copy-win').addEventListener('click', () => {
        copyToClipboard(winBox.value, 'copy-win');
    });
    
    // Clear buttons
    document.getElementById('clear-unicode').addEventListener('click', () => {
        clearWithAnimation(unicodeBox);
    });
    
    document.getElementById('clear-zawgyi').addEventListener('click', () => {
        clearWithAnimation(zawgyiBox);
    });
    
    document.getElementById('clear-win').addEventListener('click', () => {
        clearWithAnimation(winBox);
    });
    
    // Clear all button
    document.getElementById('clear-all').addEventListener('click', () => {
        clearWithAnimation(unicodeBox);
        clearWithAnimation(zawgyiBox);
        clearWithAnimation(winBox);
    });
}); 