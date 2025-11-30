import { Book, Epoch, LoreItem, Character, Download } from './types';

const LOREM_TEXT = "The darkness isn't just an absence of light; it's a presence. A weight that settles on your chest and demands to be acknowledged. In the realm of the veiled, we do not fear what we cannot see. We fear what sees us when our eyes are closed. The ancient runes began to glow with a faint, malevolent light, casting long, dancing shadows against the cavern walls.";

export const BOOKS: Book[] = [
  {
    id: 1,
    title: "Threads of the Forgotten",
    subtitle: "Book I",
    description: "Every world ends twice — first in memory, then in belief. A boy with eyes that saw too far, and a girl who remembered what no one dared to.",
    coverUrl: "https://picsum.photos/400/600?grayscale&blur=2",
    excerpt: "\"Every world ends twice — first in memory, then in belief.\" Before the silence took root. Before the Voice began curating truth. Before the Council traded fear for obedience… there was a boy with eyes that saw too far. Aiden Valcrest wasn’t born a savior. He was born a quiet, grieving student until her death cracked open something ancient inside him: The Dreadful Eye. He didn't become a god. He became a mirror.",
    buyUrl: "https://example.com/book1",
    chapters: [
      { id: "c1", title: "Prologue: The World Before the Rewrite", content: "\"Every world ends twice — first in memory, then in belief.\" Before the silence took root. Before the Voice began curating truth. Before the Council traded fear for obedience… there was a boy with eyes that saw too far. Aiden Valcrest wasn’t born a savior. He was born a quiet, grieving student until her death cracked open something ancient inside him: The Dreadful Eye. He didn't become a god. He became a mirror." },
      { id: "c2", title: "Veiled Awakening", content: "The shrill, synthetic chirp of his smart ceiling pierced the early silence. Aiden Cross groaned, kicking off a tangled blanket of hoodie, cables, and solder-burned jeans. His room looked like a battlefield between a RadioShack and a startup accelerator." },
      { id: "c3", title: "Council in Twilight", content: "Beneath a mountain, hidden behind holographic disguises and cloaked by thirteen layers of illusion, the Council of the White Accord assembled in a vaulted crystal dome." }
    ]
  },
  {
    id: 2,
    title: "Echoes of the Eclipsed Oath",
    subtitle: "Book II",
    description: "The world had forgotten how to dream. Verdant, a city built on prayer-coded technology, begins to glitch as a forbidden memory reawakens.",
    coverUrl: "https://picsum.photos/401/601?grayscale&blur=2",
    excerpt: "Cycle Year 312 After The Rewrite. The world had forgotten how to dream. Every night the Halo Witness shone above the clouds like a silver pupil—silent, perfect, unblinking. Inside Vault 07, Elias Kaer watched memories being harvested. Rows of sleepers floated in translucent capsules. A single entry blinked red among the blue archives: “Valcrest, Aiden — Prohibited Classification: EYE.”",
    buyUrl: "https://example.com/book2",
    chapters: [
      { id: "c1", title: "Prologue: The Memory That Never Was", content: "Cycle Year 312 After The Rewrite. The world had forgotten how to dream. Every night the Halo Witness shone above the clouds like a silver pupil—silent, perfect, unblinking. Inside Vault 07, Elias Kaer watched memories being harvested." },
      { id: "c2", title: "The Archivist of Dreams", content: "Morning in Verdant was a hymn sung by machines. Choral drones drifted between spires, broadcasting affirmations through mist that smelled faintly of citrus and copper." },
      { id: "c3", title: "The Girl Who Remembers Tomorrow", content: "The lower city dreamed in rust instead of gold. Steam hissed from the prayer vents, mixing incense with machine oil. Among the narrow alleys a girl crouched beside a cracked vending drone." }
    ]
  },
  {
    id: 3,
    title: "The Eclipsed Oath",
    subtitle: "Book III",
    description: "The sky broke before Kael heard it scream. The Veil has fallen. A story of rebellion, of love sharpened into a weapon, and of worlds rebuilt by choice.",
    coverUrl: "https://picsum.photos/402/602?grayscale&blur=2",
    excerpt: "The sky broke before Kael heard it scream. It began with a tremor—subtle as breath, yet unmistakable. The twin moons hovered unnaturally still. Then the world convulsed. Aetherion’s horizon twisted in silence. Kael staggered through the obsidian dust. He did not remember when he last slept. But he remembered this: The Veil had fallen.",
    buyUrl: "https://example.com/book3",
    chapters: [
      { id: "c1", title: "The Fracture Beneath Heaven", content: "The sky broke before Kael heard it scream. It began with a tremor—subtle as breath, yet unmistakable. The twin moons hovered unnaturally still. Then the world convulsed." },
      { id: "c2", title: "Ember and Echo", content: "The storm had retreated, but the world still hissed where the molten rain had kissed the stone. Glass puddles cooled into black mirrors." },
      { id: "c3", title: "The Ashen Citadel", content: "Dawn rose without color. The horizon glowed faintly—but not with sunlight. The pale ring of the moon-eclipse cast a gray radiance over the land." }
    ]
  }
];

export const TIMELINE_EPOCHS: Epoch[] = [
  {
    id: 1,
    title: "The Rewrite",
    year: "Age I",
    description: "The world ends in memory. The Voice begins curating truth, and the silence takes root."
  },
  {
    id: 2,
    title: "Age of Reverence",
    year: "Age II",
    description: "A world built on belief. Citizens pray to the Halo Witness, forgetting the chaos of the past."
  },
  {
    id: 3,
    title: "The Fracture",
    year: "Age III",
    description: "The sky breaks. The Veil falls. Kael awakens, and the Dreadful Eye opens once more."
  },
  {
    id: 4,
    title: "The Memory War",
    year: "Age IV",
    description: "Faith becomes a battlefield. Believers of peace clash with Keepers of Truth."
  },
  {
    id: 5,
    title: "Eclipsed Dawn",
    year: "Current Era",
    description: "Centuries later. 'We are not who we remember. We are who remembers us.'"
  }
];

export const LORE_ITEMS: LoreItem[] = [
  { id: 'l1', term: 'The Veil', definition: 'A membrane between truth and memory. Once stable, now fractured, leaking forgotten realities.' },
  { id: 'l2', term: 'The Oath', definition: 'A sentient system binding all creation—now waking, remembering, rewriting.' },
  { id: 'l3', term: 'The Eclipser', definition: 'A primordial entity older than the gods. Crowned in shadow. A destroyer of memory and author of endings.' },
  { id: 'l4', term: 'Riftborn', definition: 'Creatures birthed from forgotten truths and fractured timelines. Half thought, half reflection.' },
  { id: 'l5', term: 'Mirrorseed', definition: 'Not born of Earth. A witness left behind to observe the fall of every thread. When too many lies accumulate, it blooms.' },
];

export const CHARACTERS: Character[] = [
  { id: 'ch1', name: 'Kael Vevryn', role: 'The Marked', quote: "Once erased from existence. Now marked by the Oath. Wields Veydran. Holds memories the universe tried to forget." },
  { id: 'ch2', name: 'Lyra / Lyris', role: 'The Witness', quote: "The First Witness reborn. Host of the Shard of Eidryn. Split between who she was and who the Oath needs her to become." },
  { id: 'ch3', name: 'Nyra', role: 'The Shadow', quote: "Kael’s shadow and his unchosen consequence. A fragment of the Veil given hunger and thought." },
  { id: 'ch4', name: 'Eryndor', role: 'The Architect', quote: "Kael’s former mentor—half flesh, half shadow. Bound to the Oath’s awakening." },
];

export const DOWNLOADS: Download[] = [
  { id: 'd1', title: 'Free Sample eBook', type: 'PDF', size: '2.4 MB' },
  { id: 'd2', title: 'Symbol Pack', type: 'ZIP', size: '8.5 MB' },
];

export const BIO_TEXT = "ImperialX crafts worlds where memory is weapon and silence is survival. His writing blends epic scale with emotional weight. Off the page, he studies myth structures and dream logic.";
export const BIO_QUOTE = "I don’t write about heroes. I write about people who survive when the world forgets them.";