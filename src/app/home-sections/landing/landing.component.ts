import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  ngOnInit() {
    // provider star animation
    (function initProviderAnimation() {
      const providerIcons = document.querySelectorAll('.provider-icon');
      let currentIndex = 0;

      function animateBestProvider() {
        // Remove active class from all
        providerIcons.forEach(icon => icon.classList.remove('active'));

        // Add to current
        if (providerIcons[currentIndex]) {
          providerIcons[currentIndex].classList.add('active');
        }

        // Move to next
        currentIndex = (currentIndex + 1) % providerIcons.length;
      }

      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (!prefersReducedMotion && providerIcons.length > 0) {
        // Start animation
        animateBestProvider();
        setInterval(animateBestProvider, 2000);
      }
    })();
  }
}
