export interface PersonAvatar {
  initials: string;
  color: string; // tailwind bg color
  borderColor: string; // tailwind border color
}

/** People avatars for the arc/quote section */
export const peopleAvatars: PersonAvatar[] = [
  { initials: 'AO', color: 'bg-purple-400', borderColor: 'border-purple-300' },
  { initials: 'BK', color: 'bg-blue-400', borderColor: 'border-blue-300' },
  { initials: 'CF', color: 'bg-pink-400', borderColor: 'border-pink-300' },
  { initials: 'DA', color: 'bg-emerald-400', borderColor: 'border-emerald-300' },
  { initials: 'EN', color: 'bg-amber-400', borderColor: 'border-amber-300' },
  { initials: 'FI', color: 'bg-cyan-400', borderColor: 'border-cyan-300' },
  { initials: 'GO', color: 'bg-rose-400', borderColor: 'border-rose-300' },
  { initials: 'HU', color: 'bg-violet-400', borderColor: 'border-violet-300' },
  { initials: 'IK', color: 'bg-teal-400', borderColor: 'border-teal-300' },
  { initials: 'JE', color: 'bg-orange-400', borderColor: 'border-orange-300' },
  { initials: 'KS', color: 'bg-indigo-400', borderColor: 'border-indigo-300' },
  { initials: 'LO', color: 'bg-fuchsia-400', borderColor: 'border-fuchsia-300' },
];
