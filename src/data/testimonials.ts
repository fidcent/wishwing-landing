export interface Testimonial {
  quote: string;
  author: string;
  city: string;
  color: string; // tailwind bg color for avatar
}

export const testimonials: Testimonial[] = [
  {
    quote: "I used WishWing for my birthday and for the first time, I actually got things I wanted instead of random transfers.",
    author: 'Tolu B.',
    city: 'Lagos',
    color: 'bg-purple-500',
  },
  {
    quote: "Coordinating a group gift used to be stressful. This made everything so easy.",
    author: 'David A.',
    city: 'Abuja',
    color: 'bg-blue-500',
  },
  {
    quote: "It just feels more thoughtful. Not like the usual 'happy birthday, check your account'.",
    author: 'Ifeoma N.',
    city: 'Port Harcourt',
    color: 'bg-pink-500',
  },
  {
    quote: "We used it for a wedding contribution and it saved us a lot of back and forth.",
    author: 'Kemi S.',
    city: 'Osogbo',
    color: 'bg-emerald-500',
  },
  {
    quote: "I love that I can just share a link and people know exactly what to do.",
    author: 'Samuel E.',
    city: 'Jos',
    color: 'bg-amber-500',
  },
  {
    quote: "Finally, an app that understands how Nigerians celebrate. Simple, fun, and meaningful.",
    author: 'Joshua J.',
    city: 'Kano',
    color: 'bg-cyan-500',
  },
  {
    quote: "My kids love creating their wishlists. It makes birthdays so much more exciting for them.",
    author: 'Blessing O.',
    city: 'Benin City',
    color: 'bg-rose-500',
  },
  {
    quote: "The reminders alone have saved me from forgetting my best friend's birthday twice now.",
    author: 'Chidi U.',
    city: 'Enugu',
    color: 'bg-violet-500',
  },
];
