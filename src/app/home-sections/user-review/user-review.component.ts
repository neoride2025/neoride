import { Component } from '@angular/core';

@Component({
  selector: 'app-user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.scss']
})
export class UserReviewComponent {

  userReviews: any[] = [
    {
      source: 'App Store',
      review: 'Very useful for comparing fares quickly. The interface is intuitive and loads in seconds. Recommended!',
      star: 5,
      name: 'John Doe',
    },
    {
      source: 'Play Store',
      review: 'Great concept and execution. Helps me choose the cheapest option every time. UI is clean and fast loading.',
      star: 4,
      name: 'Jane Smith',
    },
    {
      source: 'Play Store',
      review: 'Perfect for daily commuters. Saves both time and money. The best ride comparison app available in India right now.',
      star: 5,
      name: 'Alice Johnson',
    },
    {
      source: 'App Store',
      review: 'Smart solution to a common problem. I use this before every ride now. Simple and effective tool for saving money.',
      star: 4,
      name: 'Bob Williams',
    },
    {
      source: 'Google Play',
      review: 'Awesome app for budget travelers. Shows transparent pricing without any hidden charges. Five stars from me!',
      star: 4,
      name: 'Charlie Brown',
    },
    {
      source: 'Google Play',
      review: 'Best fare comparison app! Saved me ₹200 on my daily commute. Highly recommend to everyone looking to save money.',
      star: 5,
      name: 'David Lee',
    },
    {
      source: 'App Store',
      review: 'Super easy to use. Shows all prices at once. No more switching between 4 different apps every single time.',
      star: 3,
      name: 'Eva Garcia',
    },
    {
      source: 'Google Play',
      review: 'Finally! An app that actually helps save money. Real-time prices from all apps in one place. Love it!',
      star: 4,
      name: 'Franklin Turner',
    },
    {
      source: 'App Store',
      review: 'This app is a game changer! I\'ve been using it for 2 months and saved so much money. Must have for daily travelers.',
      star: 5,
      name: 'Grace Davis',
    }
  ]

}
