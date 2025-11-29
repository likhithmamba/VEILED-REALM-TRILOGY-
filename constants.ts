import { Book, Epoch } from './types';

const LOREM_TEXT = "The darkness isn't just an absence of light; it's a presence. A weight that settles on your chest and demands to be acknowledged. In the realm of the veiled, we do not fear what we cannot see. We fear what sees us when our eyes are closed. The ancient runes began to glow with a faint, malevolent light, casting long, dancing shadows against the cavern walls. Every breath felt like inhaling ice, the cold seeping deep into their bones, whispering of forgotten pacts and broken oaths.";

export const BOOKS: Book[] = [
  {
    id: 1,
    title: "Threads of the Forgotten",
    subtitle: "Book I",
    description: "An ancient pact is broken. As the veil thins, a lone weaver discovers that reality is merely a tapestry of lies waiting to be unraveled.",
    coverUrl: "https://picsum.photos/400/600?grayscale&blur=2",
    excerpt: "The needle felt heavy in her hand, heavier than steel should. It wasn't just metal; it was a conduit. When she pierced the fabric, she didn't just mend a tear—she saw the void beyond. The whispers started then, soft as silk, sharp as a dagger. They told her of a world beneath the skin of this one, a place where shadows breathed and memories were currency. She realized, with a cold dread settling in her marrow, that she had never truly been alone in the workshop.",
    buyUrl: "https://example.com/book1",
    chapters: [
      { id: "c1", title: "The Weaver's Knot", content: "The needle felt heavy in her hand, heavier than steel should. It wasn't just metal; it was a conduit. When she pierced the fabric, she didn't just mend a tear—she saw the void beyond. " + LOREM_TEXT },
      { id: "c2", title: "Whispers in Silk", content: "Silk should not scream. That was the first lesson Elara learned when the Loom accepted her blood offering. " + LOREM_TEXT },
      { id: "c3", title: "The Unraveling", content: "They came at night, shifting through the door cracks like smoke. " + LOREM_TEXT },
      { id: "c4", title: "Void Stitched", content: "To stitch the void is to lose a part of one's soul. " + LOREM_TEXT }
    ]
  },
  {
    id: 2,
    title: "Echoes of the Abyss",
    subtitle: "Book II",
    description: "Driven into the darkness, the survivors must navigate a realm where sound creates reality and silence brings death.",
    coverUrl: "https://picsum.photos/401/601?grayscale&blur=2",
    excerpt: "Silence was not empty here. It was a predator. Kaelen held his breath, his heartbeat thundering like a war drum in his own ears. The Abyss did not tolerate noise. A single footfall on the obsidian glass could shatter the fragile peace, summoning the Echoes. They were formless horrors, vibrations of malice that tore the soul from the body. He looked at Elara, her eyes wide with the same realization. They had to move, but to move was to speak, and to speak was to die.",
    buyUrl: "https://example.com/book2",
    chapters: [
      { id: "c1", title: "The Sound of Fear", content: "Silence was not empty here. It was a predator. Kaelen held his breath, his heartbeat thundering like a war drum in his own ears. " + LOREM_TEXT },
      { id: "c2", title: "Resonance", content: "Every vibration carried a message. The ground hummed with the history of the fallen. " + LOREM_TEXT },
      { id: "c3", title: "Shattered Glass", content: "The obsidian plains stretched endlessly, reflecting a sky that had no stars. " + LOREM_TEXT },
      { id: "c4", title: "The Silent Scream", content: "He tried to scream, but the air refused to carry the sound. " + LOREM_TEXT }
    ]
  },
  {
    id: 3,
    title: "The Shadow’s Embrace",
    subtitle: "Book III",
    description: "The final convergence. Light and Dark collide as the entity behind the veil reveals its true face.",
    coverUrl: "https://picsum.photos/402/602?grayscale&blur=2",
    excerpt: "It ended where it began: in the absolute dark. The Shadow did not fight with swords or spells; it fought with truth. The terrible, maddening truth that the light they had worshiped was merely the Shadow's reflection. As the eclipse reached its zenith, the world dissolved. Gravity inverted. The sky bled crimson, weeping for a god that had never existed. And in the center of the chaos, he stood, offering not salvation, but an embrace eternal and cold.",
    buyUrl: "https://example.com/book3",
    chapters: [
      { id: "c1", title: "Absolute Dark", content: "It ended where it began: in the absolute dark. The Shadow did not fight with swords or spells; it fought with truth. " + LOREM_TEXT },
      { id: "c2", title: "Eclipse", content: "The sun turned black, a hole in the fabric of the sky. " + LOREM_TEXT },
      { id: "c3", title: "Crimson Tears", content: "Blood rain fell, warm and metallic, staining the white stone of the sanctuary. " + LOREM_TEXT },
      { id: "c4", title: "Eternal Night", content: "Time meant nothing now. There was only the Embrace. " + LOREM_TEXT }
    ]
  }
];

export const TIMELINE_EPOCHS: Epoch[] = [
  {
    id: 1,
    title: "The First Memory",
    year: "Era of Silence",
    description: "Before time was measured, the Ancients drifted in the Void. Consciousness was shared, and the Realm was whole."
  },
  {
    id: 2,
    title: "Rise of the Shadow",
    year: "Year 1042",
    description: "The first fracture appears. The entity known as Malakor separates from the collective, birthing the concept of self and greed."
  },
  {
    id: 3,
    title: "The Great Division",
    year: "Year 2500",
    description: "War tears the realm asunder. The veil is constructed to separate the Waking World from the Void to protect humanity."
  },
  {
    id: 4,
    title: "The Current Age",
    year: "Present Day",
    description: "The veil weakens. Old magics resurface, and the Forgotten begin to whisper to those who will listen."
  }
];