// Enhanced simple script to replace placeholder text with attractive SVG images
(function() {
  // Get all elements that might contain placeholder text
  const placeholders = document.querySelectorAll('.post-image, .profile-avatar, .business-logo, .reward-image, .map-container, .achievement-badge, .gallery-image');
  
  // Process each element
  placeholders.forEach(placeholder => {
    const text = placeholder.textContent.trim();
    let svgHtml = '';
    
    // Choose SVG based on content
    if (text.includes('News') || text.includes('Article')) {
      svgHtml = createNewsSvg(text);
    } else if (text.includes('Event')) {
      svgHtml = createEventSvg(text);
    } else if (text.includes('Coffee') || text.includes('Cafe')) {
      svgHtml = createCoffeeSvg(text);
    } else if (text.includes('Movie') || text.includes('Cinema')) {
      svgHtml = createMovieSvg(text);
    } else if (text.includes('Craft') || text.includes('Store')) {
      svgHtml = createStoreSvg(text);
    } else if (text.includes('Ice Cream') || text.includes('Scoops')) {
      svgHtml = createIceCreamSvg(text);
    } else if (text.includes('Map')) {
      svgHtml = createMapSvg(text);
    } else if (text.includes('Avatar')) {
      svgHtml = createAvatarSvg();
    } else if (text.includes('Car Wash')) {
      svgHtml = createCarWashSvg(text);
    } else if (text.includes('Pastry')) {
      svgHtml = createPastrySvg(text);
    } else if (text.includes('Bundle')) {
      svgHtml = createBundleSvg(text);
    } else if (text.includes('Book')) {
      svgHtml = createBookSvg(text);
    } else if (text.match(/🔍|📰|💬|👍|📅/)) {
      svgHtml = createBadgeSvg(text);
    } else {
      svgHtml = createGenericSvg(text);
    }
    
    // Replace the content
    placeholder.innerHTML = svgHtml;
  });
  
  console.log('✅ Placeholders replaced with enhanced SVG graphics!');
  
  // SVG Creation Functions
  function createGenericSvg(text) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
        <rect width="100%" height="100%" fill="#f1f2f6" rx="4" ry="4"/>
        <rect x="25" y="20" width="50" height="40" fill="#3742fa" opacity="0.1" rx="2" ry="2"/>
        <line x1="30" y1="30" x2="70" y2="30" stroke="#3742fa" stroke-width="2" opacity="0.5"/>
        <line x1="30" y1="40" x2="70" y2="40" stroke="#3742fa" stroke-width="2" opacity="0.5"/>
        <line x1="30" y1="50" x2="50" y2="50" stroke="#3742fa" stroke-width="2" opacity="0.5"/>
        <text x="50" y="75" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#2f3542">${getShortText(text)}</text>
      </svg>
    `;
  }
  
  function createNewsSvg(text) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
        <rect width="100%" height="100%" fill="#f1f2f6" rx="4" ry="4"/>
        <rect x="20" y="15" width="60" height="50" fill="white" stroke="#3742fa" stroke-width="1"/>
        <rect x="25" y="20" width="25" height="10" fill="#3742fa" opacity="0.3"/>
        <line x1="25" y1="35" x2="75" y2="35" stroke="#3742fa" stroke-width="1" opacity="0.5"/>
        <line x1="25" y1="40" x2="75" y2="40" stroke="#3742fa" stroke-width="1" opacity="0.5"/>
        <line x1="25" y1="45" x2="75" y2="45" stroke="#3742fa" stroke-width="1" opacity="0.5"/>
        <line x1="25" y1="50" x2="60" y2="50" stroke="#3742fa" stroke-width="1" opacity="0.5"/>
        <line x1="25" y1="55" x2="75" y2="55" stroke="#3742fa" stroke-width="1" opacity="0.5"/>
        <text x="50" y="75" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#2f3542">${getShortText(text)}</text>
      </svg>
    `;
  }
  
  function createEventSvg(text) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
        <rect width="100%" height="100%" fill="#f1f2f6" rx="4" ry="4"/>
        <rect x="25" y="20" width="50" height="40" fill="white" stroke="#3742fa" stroke-width="1" rx="2" ry="2"/>
        <rect x="25" y="20" width="50" height="10" fill="#3742fa" opacity="0.3" rx="2" ry="2"/>
        <line x1="35" y1="30" x2="35" y2="55" stroke="#3742fa" stroke-width="0.5" opacity="0.5"/>
        <line x1="50" y1="30" x2="50" y2="55" stroke="#3742fa" stroke-width="0.5" opacity="0.5"/>
        <line x1="65" y1="30" x2="65" y2="55" stroke="#3742fa" stroke-width="0.5" opacity="0.5"/>
        <line x1="30" y1="40" x2="70" y2="40" stroke="#3742fa" stroke-width="0.5" opacity="0.5"/>
        <circle cx="50" cy="45" r="8" fill="#ff6b6b" opacity="0.7"/>
        <text x="50" y="48" font-family="sans-serif" font-size="8" text-anchor="middle" fill="white">15</text>
        <text x="50" y="75" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#2f3542">${getShortText(text)}</text>
      </svg>
    `;
  }
  
  function createCoffeeSvg(text) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
        <rect width="100%" height="100%" fill="#f1f2f6" rx="4" ry="4"/>
        <path d="M35,30 L40,65 L60,65 L65,30 Z" fill="white" stroke="#8D6E63" stroke-width="1"/>
        <path d="M35,30 L40,35 L60,35 L65,30 Z" fill="#8D6E63" opacity="0.3"/>
        <path d="M38,45 L62,45 L64,65 L36,65 Z" fill="#8D6E63" opacity="0.2"/>
        <path d="M45,25 C45,22 50,22 50,25" stroke="white" stroke-width="1"/>
        <path d="M55,25 C55,22 60,22 60,25" stroke="white" stroke-width="1"/>
        <text x="50" y="75" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#2f3542">${getShortText(text)}</text>
      </svg>
    `;
  }
  
  function createMovieSvg(text) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
        <rect width="100%" height="100%" fill="#f1f2f6" rx="4" ry="4"/>
        <rect x="25" y="25" width="50" height="35" rx="3" ry="3" fill="#2f3542"/>
        <rect x="30" y="30" width="40" height="25" fill="white"/>
        <path d="M35,35 L35,50 L45,42.5 Z" fill="#3742fa" opacity="0.5"/>
        <path d="M60,25 L70,25 L70,35 L60,35 Z" fill="#ffa502" opacity="0.3"/>
        <text x="50" y="75" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#2f3542">${getShortText(text)}</text>
      </svg>
    `;
  }
  
  function createStoreSvg(text) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
        <rect width="100%" height="100%" fill="#f1f2f6" rx="4" ry="4"/>
        <rect x="25" y="30" width="50" height="35" fill="white" stroke="#e4e4e4" stroke-width="1"/>
        <path d="M25,30 L50,15 L75,30" fill="none" stroke="#3742fa" stroke-width="1"/>
        <rect x="40" y="45" width="20" height="20" fill="#3742fa" opacity="0.1"/>
        <rect x="30" y="35" width="10" height="5" fill="#ff6b6b" opacity="0.3"/>
        <rect x="60" y="35" width="10" height="5" fill="#ff6b6b" opacity="0.3"/>
        <text x="50" y="75" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#2f3542">${getShortText(text)}</text>
      </svg>
    `;
  }
  
  function createIceCreamSvg(text) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
        <rect width="100%" height="100%" fill="#f1f2f6" rx="4" ry="4"/>
        <path d="M45,60 L55,60 L57,35 L43,35 Z" fill="#d7ccc8"/>
        <path d="M43,35 A7,5 0 0 1 57,35 Z" fill="#f8bbd0"/>
        <circle cx="45" cy="30" r="4" fill="#81d4fa"/>
        <circle cx="50" cy="27" r="4" fill="#a5d6a7"/>
        <circle cx="55" cy="30" r="4" fill="#ffcc80"/>
        <text x="50" y="75" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#2f3542">${getShortText(text)}</text>
      </svg>
    `;
  }
  
  function createMapSvg(text) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
        <rect width="100%" height="100%" fill="#f1f2f6" rx="4" ry="4"/>
        <path d="M20,20 L40,25 L60,20 L80,25 L80,60 L60,55 L40,60 L20,55 Z" fill="#e4e9f2"/>
        <path d="M60,20 L80,25 L80,60 L60,55 Z" fill="#d6e0f0"/>
        <line x1="20" y1="35" x2="80" y2="35" stroke="white" stroke-width="2"/>
        <line x1="20" y1="45" x2="80" y2="45" stroke="white" stroke-width="2"/>
        <line x1="40" y1="20" x2="40" y2="60" stroke="white" stroke-width="2"/>
        <line x1="60" y1="20" x2="60" y2="60" stroke="white" stroke-width="2"/>
        <circle cx="35" cy="30" r="3" fill="#ff6b6b"/>
        <circle cx="65" cy="40" r="3" fill="#ff6b6b"/>
        <circle cx="50" cy="50" r="3" fill="#ff6b6b"/>
        <text x="50" y="75" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#2f3542">${getShortText(text)}</text>
      </svg>
    `;
  }
  
  function createAvatarSvg() {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
        <circle cx="50" cy="50" r="50" fill="#f1f2f6"/>
        <circle cx="50" cy="40" r="15" fill="#3742fa" opacity="0.2"/>
        <path d="M30,85 L30,65 C30,55 70,55 70,65 L70,85" fill="#3742fa" opacity="0.2"/>
      </svg>
    `;
  }
  
  function createCarWashSvg(text) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
        <rect width="100%" height="100%" fill="#f1f2f6" rx="4" ry="4"/>
        <path d="M30,45 L35,30 L65,30 L70,45 Z" fill="#90caf9"/>
        <rect x="30" y="45" width="40" height="10" rx="2" ry="2" fill="#90caf9"/>
        <circle cx="35" cy="55" r="3" fill="#424242"/>
        <circle cx="65" cy="55" r="3" fill="#424242"/>
        <rect x="40" y="35" width="20" height="8" fill="#bbdefb"/>
        <path d="M25,40 C20,35 20,30 25,25" stroke="#81d4fa" stroke-width="1"/>
        <path d="M75,40 C80,35 80,30 75,25" stroke="#81d4fa" stroke-width="1"/>
        <path d="M35,25 C45,20 55,20 65,25" stroke="#81d4fa" stroke-width="1"/>
        <text x="50" y="75" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#2f3542">${getShortText(text)}</text>
      </svg>
    `;
  }
  
  function createPastrySvg(text) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
        <rect width="100%" height="100%" fill="#f1f2f6" rx="4" ry="4"/>
        <path d="M25,45 L30,30 L40,30 L45,45 Z" fill="white" stroke="#8D6E63" stroke-width="0.5"/>
        <path d="M30,30 L40,30 L38,27 L32,27 Z" fill="#8D6E63" opacity="0.3"/>
        <path d="M28,40 L42,40 L45,45 L25,45 Z" fill="#8D6E63" opacity="0.2"/>
        <path d="M55,30 C65,20 75,25 80,35 C85,45 80,50 70,50 C60,50 50,45 55,30 Z" fill="#FFB74D"/>
        <ellipse cx="65" cy="45" rx="15" ry="3" fill="white" stroke="#e4e4e4" stroke-width="0.5"/>
        <text x="50" y="75" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#2f3542">${getShortText(text)}</text>
      </svg>
    `;
  }
  
  function createBundleSvg(text) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
        <rect width="100%" height="100%" fill="#f1f2f6" rx="4" ry="4"/>
        <path d="M35,25 L65,25 L70,55 C70,65 30,65 30,55 Z" fill="#D7CCC8"/>
        <path d="M35,25 L65,25 L62,20 L38,20 Z" fill="#8D6E63"/>
        <rect x="40" y="30" width="20" height="15" rx="1" ry="1" fill="white"/>
        <ellipse cx="45" cy="37" rx="3" ry="2" fill="#5D4037" transform="rotate(-15)"/>
        <ellipse cx="50" cy="37" rx="3" ry="2" fill="#5D4037"/>
        <ellipse cx="55" cy="37" rx="3" ry="2" fill="#5D4037" transform="rotate(15)"/>
        <rect x="35" y="50" width="30" height="5" fill="#3742fa" opacity="0.2"/>
        <text x="50" y="54" font-family="sans-serif" font-size="3" text-anchor="middle" fill="#3742fa">WILSON BLEND</text>
        <text x="50" y="75" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#2f3542">${getShortText(text)}</text>
      </svg>
    `;
  }
  
  function createBookSvg(text) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
        <rect width="100%" height="100%" fill="#f1f2f6" rx="4" ry="4"/>
        <rect x="35" y="25" width="30" height="40" fill="white" stroke="#e4e4e4" stroke-width="1"/>
        <rect x="37" y="27" width="26" height="36" fill="#f1f2f6" stroke="#e4e4e4" stroke-width="0.5"/>
        <rect x="40" y="30" width="3" height="30" fill="#8D6E63" opacity="0.7"/>
        <rect x="45" y="30" width="3" height="30" fill="#3742fa" opacity="0.4"/>
        <rect x="50" y="30" width="3" height="30" fill="#1dd1a1" opacity="0.4"/>
        <rect x="55" y="30" width="3" height="30" fill="#ffa502" opacity="0.5"/>
        <line x1="39" y1="45" x2="60" y2="45" stroke="#e4e4e4" stroke-width="1"/>
        <text x="50" y="75" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#2f3542">${getShortText(text)}</text>
      </svg>
    `;
  }
  
  function createBadgeSvg(text) {
    let iconPath = '';
    let iconColor = '#3742fa';
    
    if (text.includes('🔍')) {
      // Magnifier
      iconPath = 'M45,40 a10,10 0 1,0 10,10 Z M55,55 L60,60';
    } else if (text.includes('💬')) {
      // Comment
      iconPath = 'M35,35 a20,15 0 0,1 30,0 a20,15 0 0,1 0,20 L55,55 L50,65 L45,55 L35,55 a20,15 0 0,1 0,-20 Z';
    } else if (text.includes('👍')) {
      // Like
      iconPath = 'M45,60 L45,40 L40,40 L40,60 Z M45,40 C45,40 45,30 50,30 C55,30 55,30 57,35 C60,40 57,40 57,40 L50,40 C50,40 50,45 47,50 C45,55 45,60 45,60 Z';
      iconColor = '#ff6b6b';
    } else if (text.includes('📰')) {
      // News
      iconPath = 'M35,30 L65,30 L65,60 L35,60 Z M40,35 L60,35 M40,40 L60,40 M40,45 L60,45 M40,50 L60,50 M40,55 L60,55';
    } else if (text.includes('📅')) {
      // Calendar
      iconPath = 'M35,30 L65,30 L65,60 L35,60 Z M35,40 L65,40 M45,30 L45,40 M55,30 L55,40';
      iconColor = '#ff6b6b';
    } else if (text.includes('🔒')) {
      // Lock
      iconPath = 'M40,45 L60,45 L60,60 L40,60 Z M45,45 L45,35 a5,5 0 0,1 10,0 L55,45';
      iconColor = '#777';
    } else {
      // Star
      iconPath = 'M50,30 L54,42 L67,42 L56,50 L60,62 L50,55 L40,62 L44,50 L33,42 L46,42 Z';
      iconColor = '#ffa502';
    }
    
    return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
        <circle cx="50" cy="50" r="40" fill="#f1f2f6" stroke="${iconColor}" stroke-width="1"/>
        <circle cx="50" cy="50" r="35" fill="${iconColor}" opacity="0.1"/>
        <path d="${iconPath}" fill="none" stroke="${iconColor}" stroke-width="2"/>
      </svg>
    `;
  }
  
  // Helper function to shorten text for display
  function getShortText(text) {
    if (!text) return '';
    // Limit to 20 characters
    if (text.length > 20) {
      return text.substring(0, 17) + '...';
    }
    return text;
  }
})();
