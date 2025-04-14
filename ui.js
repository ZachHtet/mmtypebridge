// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check for saved theme preference or use preferred color scheme
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const savedTheme = localStorage.getItem('theme');

// Apply saved theme or system preference on load
if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
} else {
    const systemTheme = prefersDarkScheme.matches ? 'dark' : 'light';
    html.setAttribute('data-theme', systemTheme);
    localStorage.setItem('theme', systemTheme);
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Listen for system theme changes
prefersDarkScheme.addEventListener('change', (e) => {
    // Only update if the user hasn't manually set a preference
    if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
    }
});

// Toast notification types
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    
    // Remove existing classes and hide all icons
    toast.classList.remove('success', 'warning', 'error');
    document.querySelectorAll('.toast-icon').forEach(icon => {
        icon.style.display = 'none';
    });
    
    // Add appropriate class and show correct icon
    toast.classList.add(type);
    document.querySelector(`.${type}-icon`).style.display = 'block';
    
    // Set message
    toastMessage.textContent = message;
    
    // Show toast
    toast.classList.add('show');
    
    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Copy functionality with confetti effect
function copyToClipboard(text, buttonId) {
    // Check if there's text to copy
    if (!text.trim()) {
        showToast('Nothing to copy. Please type something first.', 'warning');
        return;
    }
    
    navigator.clipboard.writeText(text).then(() => {
        // Show success notification
        showToast('Copied to clipboard!', 'success');
        
        // Create confetti effect
        createConfetti();
    }).catch(err => {
        console.error('Failed to copy: ', err);
        showToast('Failed to copy!', 'error');
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

// FAQ Accordion functionality
function initAccordion() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            // Toggle active class on the current item
            item.classList.toggle('active');
        });
    });
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
    
    // Clear all button
    document.getElementById('clear-all').addEventListener('click', () => {
        clearWithAnimation(unicodeBox);
        clearWithAnimation(zawgyiBox);
        clearWithAnimation(winBox);
    });
    
    // Initialize accordion
    initAccordion();
}); 