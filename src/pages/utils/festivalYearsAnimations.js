// This is an optional additional script for more complex animations
// Can be imported into the FestivalYears component if needed

export const initializeYearsPageAnimations = () => {
  // Function to check if element is in viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  // Animate elements when they enter viewport
  const animateOnScroll = () => {
    const yearCards = document.querySelectorAll('.year-card:not(.visible)');
    const emptyState = document.querySelector('.empty-state');
    
    yearCards.forEach(card => {
      if (isInViewport(card)) {
        card.classList.add('visible');
      }
    });
    
    if (emptyState && isInViewport(emptyState) && !emptyState.classList.contains('animated')) {
      emptyState.classList.add('animated');
      emptyState.style.animation = 'fadeInUp 0.8s ease forwards';
    }
  };

  // Timeline animation
  const animateTimeline = () => {
    const dots = document.querySelectorAll('.timeline-decoration span');
    dots.forEach((dot, index) => {
      setTimeout(() => {
        dot.style.transform = 'scale(1.5)';
        setTimeout(() => {
          dot.style.transform = 'scale(1)';
        }, 300);
      }, index * 200);
    });
  };

  // Initialize animations
  window.addEventListener('scroll', animateOnScroll);
  
  // Run initial animations
  setTimeout(animateOnScroll, 300);
  setTimeout(animateTimeline, 800);
  
  // Add necessary CSS for animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .timeline-decoration span {
      transition: transform 0.3s ease;
    }
    
    .empty-state {
      opacity: 0;
    }
    
    .empty-state.animated {
      opacity: 1;
    }
  `;
  document.head.appendChild(style);
  
  // Clean up event listener on component unmount
  return () => {
    window.removeEventListener('scroll', animateOnScroll);
  };
};