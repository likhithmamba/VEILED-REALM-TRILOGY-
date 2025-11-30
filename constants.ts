import { Book, Epoch, LoreItem, Character, Download } from './types';

export const BOOKS: Book[] = [
  {
    id: 1,
    title: "Threads of the Forgotten",
    subtitle: "Book I",
    description: "Every world ends twice — first in memory, then in belief. A boy with eyes that saw too far, and a girl who remembered what no one dared to.",
    coverUrl: "", 
    excerpt: "\"Every world ends twice — first in memory, then in belief.\" Before the silence took root. Before the Voice began curating truth. Before the Council traded fear for obedience… there was a boy with eyes that saw too far. Aiden Valcrest wasn’t born a savior. He was born a quiet, grieving student until her death cracked open something ancient inside him: The Dreadful Eye. He didn't become a god. He became a mirror.",
    buyUrl: "https://example.com/book1",
    chapters: []
  },
  {
    id: 2,
    title: "Echoes of the Eclipsed Oath",
    subtitle: "Book II",
    description: "The world had forgotten how to dream. Verdant, a city built on prayer-coded technology, begins to glitch as a forbidden memory reawakens.",
    coverUrl: "",
    excerpt: "Cycle Year 312 After The Rewrite. The world had forgotten how to dream. Every night the Halo Witness shone above the clouds like a silver pupil—silent, perfect, unblinking. Inside Vault 07, Elias Kaer watched memories being harvested. Rows of sleepers floated in translucent capsules. A single entry blinked red among the blue archives: “Valcrest, Aiden — Prohibited Classification: EYE.”",
    buyUrl: "https://example.com/book2",
    chapters: []
  },
  {
    id: 3,
    title: "The Eclipsed Oath",
    subtitle: "Book III",
    description: "The sky broke before Kael heard it scream. The Veil has fallen. A story of rebellion, of love sharpened into a weapon, and of worlds rebuilt by choice.",
    coverUrl: "",
    excerpt: "The sky broke before Kael heard it scream. It began with a tremor—subtle as breath, yet unmistakable. The twin moons hovered unnaturally still. Then the world convulsed. Aetherion’s horizon twisted in silence. Kael staggered through the obsidian dust. He did not remember when he last slept. But he remembered this: The Veil had fallen.",
    buyUrl: "https://example.com/book3",
    chapters: []
  }
];

export const STARTER_PACK: Book = {
  id: 99,
  title: "Veiled Realm: The Starter Pack",
  subtitle: "The Complete Collection Preview",
  description: "Experience the beginning of the end. Contains the Prologues and first 5 Chapters of all three books in the Veiled Realm trilogy.",
  coverUrl: "",
  excerpt: "Three eras. One truth. Read the saga that redefines dark fantasy.",
  buyUrl: "https://imperialx.com/bundle",
  chapters: [
    // --- BOOK 1 ---
    {
      id: "b1-prologue",
      title: "Book I: Prologue — The World Before the Rewrite",
      content: "\"Every world ends twice — first in memory, then in belief.\" Before the silence took root. Before the Voice began curating truth. Before the Council traded fear for obedience… there was a boy with eyes that saw too far, and a girl who remembered what no one dared to. Back then, the world was chaotic. Flawed. Brutal. But it was real. Aiden Valcrest wasn’t born a savior. He was born a quiet, grieving student, soldering circuit boards and avoiding eye contact. Until her death cracked open something ancient inside him — and the Dreadful Eye awoke. He didn’t become a god. He became a mirror."
    },
    {
      id: "b1-ch1",
      title: "Book I: Chapter 1 — Veiled Awakening",
      content: "The shrill, synthetic chirp of his smart ceiling pierced the early silence. “Aiden, it’s 8:30 AM. Your lab starts in 30 minutes. Current temperature: 65°F. Air quality is optimal. You are late.” Aiden Cross groaned, kicking off a tangled blanket of hoodie, cables, and solder-burned jeans. His room looked like a battlefield between a RadioShack and a startup accelerator— dismantled drones, three energy drink cans stacked like a totem, a half-sketched circuit diagram on a cracked tablet."
    },
    {
      id: "b1-ch2",
      title: "Book I: Chapter 2 — Council in Twilight",
      content: "Beneath a mountain, hidden behind holographic disguises and cloaked by thirteen layers of illusion, the Council of the White Accord assembled in a vaulted crystal dome. The floor was a massive ring of rune-etched stone. In its center, a sigil pulsed: a silver circle flanked by twin swords — the seal of the Accord. Selene Ward, Head of Strategy and Security, stood in the center. “It blinked,” she said, voice calm but taut. “The Dreadful Eye. Last night, Redridge Sector.”"
    },
    {
      id: "b1-ch3",
      title: "Book I: Chapter 3 — Ghosts of Redridge",
      content: "It was 2:17 AM when Aiden’s phone buzzed. He had just shut down his laptop after hours of debugging the bot’s AI feedback loops. But the pulse behind his eye had returned, stronger. Like a storm brewing in his skull. He reached for the phone. Unknown Number: “Do you still remember me, Aiden? – R.” His blood ran cold. There was only one person who ever signed off with just “R.” But she was gone."
    },
    {
      id: "b1-ch4",
      title: "Book I: Chapter 4 — Echoes of the Past",
      content: "Aiden sat in darkness, the light from his shattered phone flickering across the room like a dying signal. The video was still playing on loop — grainy, half-corrupted — but the final frame burned into his vision: Rena. That gentle smile. The pendant — hers. But she was gone. Had been gone. He had watched her go. So how the hell…? “I’m still here, Aiden. Find me.”"
    },
    {
      id: "b1-ch5",
      title: "Book I: Chapter 5 — The Fractured Code",
      content: "Aiden Cross wasn’t sleeping anymore. Every time he closed his eyes, he saw her — not just as a memory, but as something active, present, like a beacon lost in a storm. He hadn’t told Chloe or Jordan about the pendant. Or the Accord. Or Null. But secrets come with weight. And cracks. And by Friday, the cracks were starting to show."
    },
    // --- BOOK 2 ---
    {
      id: "b2-prologue",
      title: "Book II: Prologue — The Memory That Never Was",
      content: "Cycle Year 312 After The Rewrite. The world had forgotten how to dream. Every night the Halo Witness shone above the clouds like a silver pupil—silent, perfect, unblinking. Inside Vault 07, Elias Kaer watched memories being harvested. Rows of sleepers floated in translucent capsules; faint auroras of thought curled from their temples into the Harmony Engine’s glass spine. Each dream distilled into data, catalogued, softened, and filed beneath a single axiom: PAIN IS NO LONGER REQUIRED FOR GROWTH."
    },
    {
      id: "b2-ch1",
      title: "Book II: Chapter 1 — The Archivist of Dreams",
      content: "Morning in Verdant was a hymn sung by machines. Choral drones drifted between spires, broadcasting affirmations through mist that smelled faintly of citrus and copper. Citizens moved in graceful rhythm, each step guided by wrist-band pulses syncing to the Belief Codex. Elias Kaer walked against the rhythm. He carried a slate of forgotten protocols and a bruise on his palm from last night’s forbidden file. The mark glowed faintly beneath his glove, a fractal pattern spiralling outward—like an eye learning to breathe."
    },
    {
      id: "b2-ch2",
      title: "Book II: Chapter 2 — The Girl Who Remembers Tomorrow",
      content: "The lower city dreamed in rust instead of gold. Steam hissed from the prayer vents, mixing incense with machine oil. Among the narrow alleys a girl crouched beside a cracked vending drone, prying open its panel with a spoon. Her name was Reya. Inside the drone she found a music chip—ancient, half-melted—and slipped it into the pocket sewn behind her ribs."
    },
    {
      id: "b2-ch3",
      title: "Book II: Chapter 3 — The City That Prays to Machines",
      content: "Morning returned too bright, too calm. Every street screen showed the same face: Arch-Curator Voss, high priest of the Belief Codex. Her smile was perfect, her tone surgical. “Harmony is grace. Doubt is corrosion. Today, the Halo Witness re-aligns to bless Verdant with another year of certainty.” Crowds applauded. Elias stood among them, Reya hidden beneath a borrowed cloak."
    },
    {
      id: "b2-ch4",
      title: "Book II: Chapter 4 — The Cracked Halo",
      content: "The Halo Witness blinked again. Not the gentle pulse Verdant saw each night, but a violent flicker that carved thunder across the sky. For the first time since the Accord’s fall, people looked up in fear rather than devotion. On every broadcast, Curator Voss’s voice trembled as she recited protocol. “Remain calm. The light is recalibrating.”"
    },
    {
      id: "b2-ch5",
      title: "Book II: Chapter 5 — The Return of the Blades",
      content: "The plaza had always been a place of memory made benign — a sculpted intersection where curated prayers pooled like incense smoke. Tonight, it was a battlefield. Shards of the Halo Witness rained between monoliths, each fragment humming with stolen light. Where a shard landed, the air changed: glass flowed like water, statues wept code, and the surface of the fountain answered in voices not sung in a century."
    },
    // --- BOOK 3 ---
    {
      id: "b3-ch1",
      title: "Book III: Chapter 1 — The Fracture Beneath Heaven",
      content: "The sky broke before Kael heard it scream. It began with a tremor—subtle as breath, yet unmistakable, as though the heavens exhaled a memory it no longer wished to carry. The twin moons hovered unnaturally still, their edges touching in a kiss of pale fire. Light bled between them, a cold, silver hemorrhage that rippled through the clouds until the firmament itself cracked like old glass. Then the world convulsed."
    },
    {
      id: "b3-ch2",
      title: "Book III: Chapter 2 — Ember and Echo",
      content: "The storm had retreated, but the world still hissed where the molten rain had kissed the stone. Glass puddles cooled into black mirrors. Every rock face glistened with the residue of the sky’s wrath. Kael and Miraen moved through a narrow canyon that wound like a scar through the bones of Aetherion. It was a place carved not by water or wind, but by something more violent—an ancient spell, a forgotten war."
    },
    {
      id: "b3-ch3",
      title: "Book III: Chapter 3 — The Ashen Citadel",
      content: "Dawn rose without color. The horizon glowed faintly—but not with sunlight. The pale ring of the moon-eclipse cast a gray radiance over the land, enough to distinguish shape from shadow but too weak to warm anything living. Kael, Lyra, and Miraen walked across a plain that crunched underfoot like broken bone. What had once been soil was now fine ash, compacted by storms into a surface that reflected light with dull sorrow."
    },
    {
      id: "b3-ch4",
      title: "Book III: Chapter 4 — Whispers of Sanctuary",
      content: "The corridors beneath Velmirath were not built — they were grown. Kael had passed through the Citadel’s upper sanctums before, when the world was younger and the Oath merely a rumor flickering across scholars’ tongues. But this — the deep, hidden belly of Velmirath — was something else entirely. Here, the architecture pulsed. Veins of molten crystal ran like arteries along the walls."
    },
    {
      id: "b3-ch5",
      title: "Book III: Chapter 5 — The Waking Storm",
      content: "Velmirath did not sleep. Even after the Archive slammed shut behind them and the echo-guards’ shrieks faded into muffled silence, Kael felt the Citadel’s presence pressing against his skin like a second heartbeat. The corridors dimmed and brightened in intervals that did not match any known rhythm. Runic veins along the walls pulsed faster each minute. The floor occasionally vibrated with a tremor not caused by movement, but by memory trying to manifest."
    }
  ]
};

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
