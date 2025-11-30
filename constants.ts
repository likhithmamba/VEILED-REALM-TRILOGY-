import { Book, Epoch, LoreItem, Character, Download } from './types';

const LOREM_TEXT = "The darkness isn't just an absence of light; it's a presence. A weight that settles on your chest and demands to be acknowledged. In the realm of the veiled, we do not fear what we cannot see. We fear what sees us when our eyes are closed. The ancient runes began to glow with a faint, malevolent light, casting long, dancing shadows against the cavern walls.";

export const BOOKS: Book[] = [
  {
    id: 1,
    title: "Threads of the Forgotten",
    subtitle: "Book I",
    description: "An ancient pact is broken. As the veil thins, a lone weaver discovers that reality is merely a tapestry of lies waiting to be unraveled.",
    coverUrl: "https://picsum.photos/400/600?grayscale&blur=2",
    excerpt: "The needle felt heavy in her hand, heavier than steel should. It wasn't just metal; it was a conduit. When she pierced the fabric, she didn't just mend a tear—she saw the void beyond.",
    buyUrl: "https://example.com/book1",
    chapters: [
      { id: "c1", title: "The Weaver's Knot", content: "The needle felt heavy in her hand, heavier than steel should. " + LOREM_TEXT },
      { id: "c2", title: "Whispers in Silk", content: "Silk should not scream. That was the first lesson Elara learned when the Loom accepted her blood offering. " + LOREM_TEXT },
      { id: "c3", title: "The Unraveling", content: "They came at night, shifting through the door cracks like smoke. " + LOREM_TEXT }
    ]
  },
  {
    id: 2,
    title: "Echoes of the Eclipsed Oath",
    subtitle: "Book II",
    description: "Driven into the darkness, the survivors must navigate a realm where sound creates reality and silence brings death.",
    coverUrl: "https://picsum.photos/401/601?grayscale&blur=2",
    excerpt: "Silence was not empty here. It was a predator. Kaelen held his breath, his heartbeat thundering like a war drum in his own ears. The Abyss did not tolerate noise.",
    buyUrl: "https://example.com/book2",
    chapters: [
      { id: "c1", title: "The Sound of Fear", content: "Silence was not empty here. It was a predator. Kaelen held his breath. " + LOREM_TEXT },
      { id: "c2", title: "Resonance", content: "Every vibration carried a message. The ground hummed with the history of the fallen. " + LOREM_TEXT },
      { id: "c3", title: "Shattered Glass", content: "The obsidian plains stretched endlessly, reflecting a sky that had no stars. " + LOREM_TEXT }
    ]
  },
  {
    id: 3,
    title: "The Dawn No One Predicted",
    subtitle: "Book III",
    description: "The final convergence. Light and Dark collide as the entity behind the veil reveals its true face.",
    coverUrl: "https://picsum.photos/402/602?grayscale&blur=2",
    excerpt: "It ended where it began: in the absolute dark. The Shadow did not fight with swords or spells; it fought with truth. The terrible, maddening truth that the light they had worshiped was merely the Shadow's reflection.",
    buyUrl: "https://example.com/book3",
    chapters: [
      { id: "c1", title: "Absolute Dark", content: "It ended where it began: in the absolute dark. The Shadow did not fight with swords or spells. " + LOREM_TEXT },
      { id: "c2", title: "Eclipse", content: "The sun turned black, a hole in the fabric of the sky. " + LOREM_TEXT },
      { id: "c3", title: "Crimson Tears", content: "Blood rain fell, warm and metallic, staining the white stone of the sanctuary. " + LOREM_TEXT }
    ]
  }
];

export const TIMELINE_EPOCHS: Epoch[] = [
  {
    id: 1,
    title: "Dawnfire",
    year: "Age I",
    description: "The world is born in flames. Gods walk among mortals, but their gifts come with a terrible price."
  },
  {
    id: 2,
    title: "Silence",
    year: "Age II",
    description: "The gods retreat, leaving behind only echoes. Magic becomes scarce, and memory begins to fade."
  },
  {
    id: 3,
    title: "Shattered Age",
    year: "Age III",
    description: "The Great Division. The Veil is constructed, separating the waking world from the Void."
  },
  {
    id: 4,
    title: "Threaded Age",
    year: "Age IV",
    description: "The weavers rise. Reality is stitched together to hide the cracks in the sky."
  },
  {
    id: 5,
    title: "Eclipse Age",
    year: "Current Era",
    description: "The Veil thins. The Forgotten return. The cycle nears its violent conclusion."
  }
];

export const LORE_ITEMS: LoreItem[] = [
  { id: 'l1', term: 'The Veil', definition: 'A metaphysical barrier separating the material plane from the Void. It consumes the memories of those who touch it.' },
  { id: 'l2', term: 'The Oath', definition: 'The forbidden pact made by the First Weaver to bind the shadows. The price was their name.' },
  { id: 'l3', term: 'The Eclipser', definition: 'An entity that does not exist in time. It is the silence between heartbeats.' },
  { id: 'l4', term: 'The Shard of Eidryn', definition: 'A fragment of a dead star, capable of piercing the Veil but driving the wielder to madness.' },
];

export const CHARACTERS: Character[] = [
  { id: 'ch1', name: 'Kael Vevran', role: 'The Weaver', quote: "I stitch the world together, but I am coming apart at the seams." },
  { id: 'ch2', name: 'Lyra', role: 'The Memory Thief', quote: "Your past is heavy. Let me carry it for a price." },
  { id: 'ch3', name: 'Eryndor', role: 'The Last Sentinel', quote: "Duty is just a cage we build for ourselves." },
  { id: 'ch4', name: 'The Eclipser', role: 'Antagonist', quote: "Light is a lie told by a dying sun." },
];

export const DOWNLOADS: Download[] = [
  { id: 'd1', title: 'Free Sample eBook', type: 'PDF', size: '2.4 MB' },
  { id: 'd2', title: 'Wallpaper Pack', type: 'ZIP', size: '150 MB' },
  { id: 'd3', title: 'Realm Map', type: 'JPG', size: '8.1 MB' },
];

export const BIO_TEXT = "ImperialX crafts worlds where memory is weapon and silence is survival. His writing blends epic scale with emotional weight. Off the page, he studies myth structures and dream logic.";
export const BIO_QUOTE = "I don’t write about heroes. I write about people who survive when the world forgets them.";