import { Book, Epoch, LoreItem, Character, Download } from './types';

export const BOOKS: Book[] = [
  {
    id: 1,
    title: "Threads of the Forgotten",
    subtitle: "Book I",
    description: "A world that erases its people. A boy erased twice.",
    coverUrl: "", 
    excerpt: "\"Every world ends twice — first in memory, then in belief.\" Before the silence took root. Before the Voice began curating truth. Before the Council traded fear for obedience… there was a boy with eyes that saw too far. Aiden Valcrest wasn’t born a savior. He was born a quiet, grieving student until her death cracked open something ancient inside him: The Dreadful Eye. He didn't become a god. He became a mirror.",
    buyUrl: "https://example.com/book1",
    chapters: []
  },
  {
    id: 2,
    title: "Echoes of the Shattered Dawn",
    subtitle: "Book II",
    description: "What breaks once remembers. What breaks twice hungers.",
    coverUrl: "",
    excerpt: "Cycle Year 312 After The Rewrite. The world had forgotten how to dream. Every night the Halo Witness shone above the clouds like a silver pupil—silent, perfect, unblinking. Inside Vault 07, Elias Kaer watched memories being harvested. Rows of sleepers floated in translucent capsules. A single entry blinked red among the blue archives: “Valcrest, Aiden — Prohibited Classification: EYE.”",
    buyUrl: "https://example.com/book2",
    chapters: []
  },
  {
    id: 3,
    title: "The Eclipsed Oath",
    subtitle: "Book III",
    description: "The Oath awakens. The Witness returns. Fate demands rebellion.",
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
    // --- BOOK 1 SEPARATOR ---
    {
      id: "sep-b1",
      title: "BOOK I",
      content: "",
      isSeparator: true
    },
    {
      id: "b1-prologue",
      title: "Prologue — The World Before the Rewrite",
      content: "\"Every world ends twice — first in memory, then in belief.\"\n\nBefore the silence took root.\n\nBefore the Voice began curating truth.\n\nBefore the Council traded fear for obedience… there was a boy with eyes that saw too far, and a girl who remembered what no one dared to.\n\nBack then, the world was chaotic. Flawed. Brutal. But it was real.\n\nAiden Valcrest wasn’t born a savior. He was born a quiet, grieving student, soldering circuit boards and avoiding eye contact. Until her death cracked open something ancient inside him — and the Dreadful Eye awoke.\n\nHe didn’t become a god. He became a mirror.\n\nAnd what the world saw in him terrified everyone. They tried to seal it. Name it. Control it. But truth can’t be polished. It can only be remembered — or rewritten.\n\nThat’s where she came in. Chloe Valcrest. His last anchor to a world slipping away. She wasn’t the strongest. Not the fastest. Not the chosen one. But she believed. In him. In memory. In the fragile thing called truth.\n\nTogether with seven Hidden Blades who never bowed, they challenged an empire of silence. Not for conquest. Not for revenge. But for the right to say: “This happened.”\n\nBecause in a world that erases pain, only those who remember it can still feel what matters.\n\nThis story is not a prophecy. It’s a rescue.\n\nIf you're reading it, maybe… just maybe… the rewrite didn’t win."
    },
    {
      id: "b1-ch1",
      title: "Chapter 1 — Veiled Awakening",
      content: "Part 1: Wake-Up Protocol Failure\n\nThe shrill, synthetic chirp of his smart ceiling pierced the early silence.\n\n“Aiden, it’s 8:30 AM. Your lab starts in 30 minutes. Current temperature: 65°F. Air quality is optimal. You are late.”\n\nAiden Cross groaned, kicking off a tangled blanket of hoodie, cables, and solder-burned jeans. His room looked like a battlefield between a RadioShack and a startup accelerator— dismantled drones, three energy drink cans stacked like a totem, a half-sketched circuit diagram on a cracked tablet.\n\nHis smartwatch vibrated violently on the side table.\n\n[Jordan]: “Bro. Get. UP. We’re in the middle of the demo pitch. I’m stalling with terrible jokes.”\n\n[Chloe]: “Tell him to teleport. Or fake a coma. Either would help.”\n\n[Eli]: “Lab doors lock at 9.03. You have 27 minutes.”\n\nAiden yawned, brushing his hair back. The face in the mirror — green-eyed, tired but focused — looked older than twenty. Under his shirt, he noticed again that faint, ever-present warmth behind his left eye socket. A pulse that didn’t feel... natural.\n\nBut he shrugged it off. There were more urgent things. Like making sure his smart-shoes didn't electrocute him again.\n\nPart 2: Class Chaos & Broken Bots\n\nRedridge’s East Tech Complex loomed like a fortress of glass and metal. Inside, lab EC-2 buzzed with caffeinated students assembling final-year prototypes for RedridgeX, the biggest intercollegiate tech fest on the West Coast.\n\nJordan Miles spotted him first.\n\n“Dead man walking!” he yelled, pushing a soldering iron into Aiden’s hand. “You’re late. You’re fixing the bot’s right leg. It keeps trying to walk sideways into walls. Like you after Red Bull.”\n\nChloe Ramirez rolled her eyes from behind a display monitor. “Nice of you to grace us with your presence. Did the AI in your pillow fail?”\n\nAiden smirked, dropping his backpack. “I overslept. Time is a construct. The bot will walk.”\n\nEli Park didn’t look up. He was in the zone, coding furiously while sipping bubble tea through a straw that blinked data updates.\n\nAiden leaned over their latest prototype — a quadruped rescue bot that used facial recognition, AI pathfinding, and carbon-fiber joints.\n\n“Power flow is good... but servo 4 is lagging,” he muttered. His hands moved on muscle memory. Wires clicked into place. Jordan passed the flux.\n\nChloe asked, “You okay though? You look pale.”\n\nAiden hesitated. “Yeah. Just... weird dreams lately.”\n\nHe didn’t tell them about the pulsing behind his eye. The sound he sometimes heard in his head like... static from another reality. That would sound crazy. Wouldn’t it?\n\nPart 3: RedridgeX – Storm Before the Spotlight\n\nThat afternoon, the RedridgeX pre-launch briefing was hosted in the central dome — a breathtaking rotunda of LED screens, hologram beams, and augmented-reality light tunnels.\n\nHundreds of student teams sat as drones flew above, capturing reels for the university’s social media. Aiden's team, \"Project Syntheon\", was ranked in the top 10.\n\nDean Carter stood on stage, booming voice amplified.\n\n“Tomorrow begins the 25th RedridgeX. Let your innovations speak. May the boldest minds win.”\n\nThe crowd roared. But Aiden barely heard it. A sharp vibration flashed behind his eye again. He blinked.\n\nFor a second—just a fraction—the entire dome glitched. The lights bent. The floor twisted like a sheet of code unraveling. No one else reacted.\n\nThen… everything returned to normal.\n\nDid I just… imagine that?"
    },
    {
      id: "b1-ch2",
      title: "Chapter 2 — Council in Twilight",
      content: "Part 1: The Dome of Mirrors\n\nBeneath a mountain, hidden behind holographic disguises and cloaked by thirteen layers of illusion, the Council of the White Accord assembled in a vaulted crystal dome.\n\nThe floor was a massive ring of rune-etched stone. In its center, a sigil pulsed: a silver circle flanked by twin swords — the seal of the Accord.\n\nSeven circular thrones surrounded the floor, each with a flame-lit pedestal behind them, symbolizing their domain.\n\nSelene Ward, Head of Strategy and Security, stood in the center. Her long white coat shimmered faintly with embedded runes, her expression unreadable.\n\n“It blinked,” she said, voice calm but taut. “The Dreadful Eye. Last night, Redridge Sector.”\n\nMurmurs flared across the room. Councilor Aren Vael, representing the High House of Hollenforth, frowned deeply.\n\n“He wasn’t supposed to awaken for years. The seal—”\n\n“Holds,” interrupted Raventhorn, stepping from behind the mirror pedestal. “But he is not a prisoner. He is a carrier. A living gate. And pain… opens gates.”\n\nSelene nodded. “He triggered a partial defense reflex. Enough to vaporize a Darkshade-class specter. No casualties. But the telemetry was seen by more than us.”\n\nAnother councilor, Tyrien Ashell, leaned forward. “The Covenant?”\n\nSelene grimaced. “Possibly. And if they confirm his location, we risk reigniting the pact war.”\n\n“So what do we do?” Tyrien asked. “Contain him?”\n\n“We watch him,” Selene replied. “But we don’t interfere unless the Eye fully opens.”\n\nA pause.\n\n“Unless,” she added, eyes narrowing, “the Covenant moves first.”\n\nPart 2: Shadows That Stir\n\nMiles away — deep within a realm invisible to satellites, beneath a forest no map acknowledged — House Nightmire’s Sanctum stood like a scar in reality.\n\nThe air here was thick with ancient power. The trees whispered screams.\n\nSylara Nightmire, Second-born of the 8th Emperor, stood atop a jagged obsidian outcropping, staring into a basin filled with memories.\n\nThe water boiled black.\n\n“He blinked,” she whispered, a twisted smile forming. “So the blood remembers.”\n\nBehind her, Varox emerged from the void — a being made of silhouettes and clawed absence.\n\n“Do we hunt him now?”\n\n“No,” she said, eyes flickering violet. “We let the world greet him first. Let him remember why he forgot.”\n\nA slow ripple passed through the trees. Elsewhere in the darkness, other emperors stirred. Watching. Waiting."
    },
    {
      id: "b1-ch3",
      title: "Chapter 3 — Ghosts of Redridge",
      content: "Part 1: The Message That Shouldn't Exist\n\nIt was 2:17 AM when Aiden’s phone buzzed.\n\nHe had just shut down his laptop after hours of debugging the bot’s AI feedback loops, trying to focus on something—anything—normal. But the pulse behind his eye had returned, stronger. Like a storm brewing in his skull.\n\nHe reached for the phone on his desk.\n\nUnknown Number\n\n“Do you still remember me, Aiden? – R.”\n\nHis blood ran cold.\n\nHe read the message again. Once. Twice. A third time.\n\nR…?\n\nThere was only one person who ever signed off with just “R.” But she was gone. Dead. Buried beneath a quiet headstone in Portland, far from this life, far from everything he had become.\n\nHis fingers trembled. He responded. “Who is this?”\n\nNo reply.\n\nInstead, the phone vibrated violently. Not once — repeatedly. Aiden stared as messages flooded in, one by one.\n\n“You promised you’d never let go.”\n\n“Why didn’t you save me?”\n\n“It’s waking, Aiden.”\n\n“The Door opens from inside.”\n\n“They’re coming.”\n\nAnd then, finally:\n\n“Use Form 2. You’ll need it tonight.”\n\nThe screen cracked spontaneously in his hand. Aiden’s reflection blinked back at him in the shattered glass — but for a split moment, his left eye was no longer human."
    },
    {
      id: "b1-ch4",
      title: "Chapter 4 — Echoes of the Past",
      content: "Part 1: Shadows in the Frame\n\nAiden sat in darkness, the light from his shattered phone flickering across the room like a dying signal.\n\nThe video was still playing on loop — grainy, half-corrupted — but the final frame burned into his vision: Rena. That gentle smile. The pendant — hers. The way her hair fell to the side. The way she tilted her head like she used to.\n\nBut she was gone. Had been gone. He had watched her go. So how the hell…?\n\n“I’m still here, Aiden. Find me.”\n\nHe ran the video through three decryption tools. Nothing. The metadata was scrubbed. The timestamp? Blank. No originating IP. No sender number traceable.\n\nExcept…\n\nAt frame 492, hidden in the corrupted data, he found a sliver of light. A ghosted geotag.\n\n“Theta Node – Archive Red 74”\n\nHe blinked. That’s not… public. Theta Nodes weren’t on the city grid. They were fragments of the Accord’s old surveillance network, long believed to be dismantled after the U.S. Familia War 18 years ago. Hidden data caches. Forbidden territory.\n\nIf something — or someone — had used Theta Archive Red 74 to send a message, it meant one thing: The Accord knew. And they’d let it happen.\n\nPart 2: Underneath It All\n\nAiden skipped classes the next day. Even Chloe’s calls went unanswered. By 4:00 PM, he was five miles off campus, in the industrial sprawl past the bio-lab research arcologies. The address pinged as a decommissioned hydroelectric control station.\n\nAbandoned. Or so the public records said. But beneath it… power flowed. His Familia pulsed as he neared the building. It was subtle, like his blood magnetized to the doorframe.\n\nInside, dust swirled — but there were no rats. No decay. Just silence. Maintained silence.\n\nHe passed down a metal stairwell into the dark. Doors opened before he touched them. And in the core of the station, he found it:\n\nARCHIVE NODE: THETA – RED 74\n\nAccess Level: Imperialx – Authorized\n\nHis heart pounded. The system scanned him automatically — a cold light dancing across his retina. A glyph circle spiraled in the air. The console lit up.\n\n“Hello, Aiden Cross,” a voice said. “It’s been a long time.”"
    },
    {
      id: "b1-ch5",
      title: "Chapter 5 — The Fractured Code",
      content: "Part 1: Signals in the Static\n\nAiden Cross wasn’t sleeping anymore. Every time he closed his eyes, he saw her — not just as a memory, but as something active, present, like a beacon lost in a storm.\n\nHe hadn’t told Chloe or Jordan about the pendant. Or the Accord. Or Null. Not even about the Covenant’s attack. He convinced himself it was safer for them that way.\n\nBut secrets come with weight. And cracks. And by Friday, the cracks were starting to show.\n\nPart 2: Noticing the Glitch\n\n“Dude,” Jordan said, handing Aiden a Red Bull. “You’ve been writing the same line of code for ten minutes.”\n\nAiden blinked at the screen. Sure enough: if (signal !== NULL) { if (signal !== NULL) { if (signal !== NULL) {\n\nHe looked down at his keyboard. The key was jammed. No — his fingers were stuck.\n\n“Sorry. Just tired,” he muttered.\n\nChloe crossed her arms. “You sure that’s it?”\n\nAiden nodded. But Chloe didn’t believe him. And she was right not to. Because just beneath the surface of Redridge’s clean concrete walls, something was humming. A quiet, almost imperceptible thrum in the frequencies — inaudible to most, but visible to someone with the Eye.\n\nPart 3: The First Code Bleed\n\nLater that night, as Aiden reviewed their bot’s logic tree, his laptop screen flickered. Then shifted. The screen split open — not physically, but visually. Like a mirrored crack, revealing something beneath the OS. Something not coded by human hands.\n\nA line of text appeared in glowing red:\n\nYOU SEE THE THREADS. DO YOU REMEMBER HOW TO FOLLOW THEM?\n\nAiden gasped. The laptop sparked — and went black."
    },
    // --- BOOK 2 SEPARATOR ---
    {
      id: "sep-b2",
      title: "BOOK II",
      content: "",
      isSeparator: true
    },
    {
      id: "b2-prologue",
      title: "Prologue — The Memory That Never Was",
      content: "Cycle Year 312 After The Rewrite | Thread Integrity Index: 82%\n\nThe world had forgotten how to dream.\n\nEvery night the Halo Witness shone above the clouds like a silver pupil—silent, perfect, unblinking. Its orbit cut a thin line across the dusk, a scar of light reminding humankind that belief was safer than truth.\n\nInside Vault 07, Elias Kaer watched memories being harvested.\n\nRows of sleepers floated in translucent capsules; faint auroras of thought curled from their temples into the Harmony Engine’s glass spine. Each dream distilled into data, catalogued, softened, and filed beneath a single axiom:\n\nPAIN IS NO LONGER REQUIRED FOR GROWTH.\n\nHe had copied the phrase a thousand times without thinking.\n\nTonight, the words bled.\n\nA single entry blinked red among the blue archives: “Valcrest, Aiden — Prohibited Classification: EYE.”\n\nHe hesitated. His training told him to flag it, delete it, forget it. Instead he opened it.\n\nThe vault lights dimmed. A sound—half heartbeat, half static—filled the room. Then a whisper, ancient and too human:\n\n“If you are reading this, the world still believes the lie.”\n\nThe capsule nearest him shattered. Dream fluid hissed across the floor, carrying the smell of ozone and rain that had not fallen in centuries.\n\nThe Harmony Engine’s console flashed a warning he had never seen.\n\nTHREAD RECURSION DETECTED — SOURCE: CHLOE VALCREST // ECLIPSED OATH.\n\nAnd far above the vault, the perfect orbit of the Halo Witness flickered—once—like a closing eye."
    },
    {
      id: "b2-ch1",
      title: "Chapter 1 — The Archivist of Dreams",
      content: "Part 1: Glass and Silence\n\nMorning in Verdant was a hymn sung by machines.\n\nChoral drones drifted between spires, broadcasting affirmations through mist that smelled faintly of citrus and copper. Citizens moved in graceful rhythm, each step guided by wrist-band pulses syncing to the Belief Codex.\n\nElias Kaer walked against the rhythm.\n\nHe carried a slate of forgotten protocols and a bruise on his palm from last night’s forbidden file. The mark glowed faintly beneath his glove, a fractal pattern spiralling outward—like an eye learning to breathe.\n\nAt the café balcony overlooking Sector IV, holographic koi swam through the air between tables. Elias sat alone, watching them glitch for a heartbeat every time the Halo Witness passed overhead.\n\n“Bad signal?” the vendor asked.\n\n“Dream lag,” Elias murmured.\n\nHe lied easily; everyone did. Verdant required serenity, not honesty.\n\nBut the bruise under his skin pulsed again—three beats, pause, three beats. Morse, ancient and obsolete. He translated out of instinct.\n\n“REMEMBER ME.”\n\nPart 2: The Girl in the Reflection\n\nThat evening, the Registry’s mirror servers recalibrated. Elias monitored their light tunnels when a face appeared inside the glass—not his, not any citizen file.\n\nA girl—pale, hair-streaked silver, eyes violet-red.\n\n“Do you dream, Archivist?” she asked from inside the reflection.\n\nHe froze. The system logged no anomaly. Cameras saw nothing.\n\n“Who are you?”\n\n“The daughter of a promise,” she said softly. “And the world’s next mistake.”\n\nStatic rippled through the glass; her image fractured into seven shards, each showing a different skyline—ancient Redridge, the burning Accord, the dark spiral of the old Echo Tree.\n\nBefore vanishing, she whispered a name he shouldn’t know. “Chloe.”\n\nEvery mirror in the Registry blacked out."
    },
    {
      id: "b2-ch2",
      title: "Chapter 2 — The Girl Who Remembers Tomorrow",
      content: "Part 1: The Girl and the Clock\n\nThe lower city dreamed in rust instead of gold.\n\nSteam hissed from the prayer vents, mixing incense with machine oil. Among the narrow alleys a girl crouched beside a cracked vending drone, prying open its panel with a spoon.\n\nHer name was Reya.\n\nInside the drone she found a music chip—ancient, half-melted—and slipped it into the pocket sewn behind her ribs. She’d grown up scavenging fragments of the world that came before belief, and she was the only one in her block who still asked questions out loud.\n\nAbove her, the Halo Witness traced its arc again.\n\nFor an instant it halted—stuttered—as if buffering reality.\n\nReya looked up and smiled. “It blinked,” she whispered. “He’s coming back.”\n\nThe street preacher nearby heard her and froze. “No one comes back,” he said, eyes wide. “That’s heresy.”\n\nBut Reya just walked away, the faint hum of a forbidden lullaby following her into the fog.\n\nPart 2: The Dream Intercept\n\nAt midnight, in the Dream Registry’s overflow grid, Elias was still replaying the mirror incident. Each frame he slowed revealed the same distortion: a child’s silhouette overlapping the girl’s face—one heartbeat out of sync.\n\nHe ran a deep-trace scan. The coordinates pointed downward, beneath Verdant’s belief network, where human dreams weren’t supposed to form. An address flickered.\n\nGRID 9 / Orphan Code R-74\n\nHe shouldn’t go. The Accord remnants patrolled the under-districts. But the pattern on his palm pulsed again—three beats, pause, three beats. Remember me."
    },
    {
      id: "b2-ch3",
      title: "Chapter 3 — The City That Prays to Machines",
      content: "Part 1: Sermon of Light\n\nMorning returned too bright, too calm. Every street screen showed the same face: Arch-Curator Voss, high priest of the Belief Codex. Her smile was perfect, her tone surgical.\n\n“Harmony is grace. Doubt is corrosion. Today, the Halo Witness re-aligns to bless Verdant with another year of certainty.”\n\nCrowds applauded.\n\nElias stood among them, Reya hidden beneath a borrowed cloak. She watched the screens like a cornered animal.\n\n“They pray to code,” she whispered.\n\nHe nodded. “And it answers.”\n\nAbove them, the Halo Witness pulsed once for every heartbeat in the city—syncing minds, calibrating emotions. People sighed in unison. Only Elias and the girl were out of rhythm.\n\nPart 2: The Broken Prayer\n\nDeep inside the Spire, the Belief Codex broadcast chamber resembled a cathedral made of circuits. Elias hacked an access terminal, his fingers trembling.\n\n“Show me the core feed.”\n\nLines of devotion scrolled faster than sight—billions of affirmations from citizens. Each belief line ended with an encryption key shaped like an eye.\n\nHe froze when one message repeated endlessly through the stream: “Forgive the Threadwalker.”\n\nHe traced its source—an unregistered node buried in the same vault he’d seen in his dream. The node ID glowed faintly: R-74. Reya’s orphan code.\n\nThe Halo Witness dimmed, as if it, too, were listening."
    },
    {
      id: "b2-ch4",
      title: "Chapter 4 — The Cracked Halo",
      content: "Part 1: When Heaven Stutters\n\nThe Halo Witness blinked again.\n\nNot the gentle pulse Verdant saw each night, but a violent flicker that carved thunder across the sky. For the first time since the Accord’s fall, people looked up in fear rather than devotion.\n\nOn every broadcast, Curator Voss’s voice trembled as she recited protocol. “Remain calm. The light is recalibrating.”\n\nBut even she could feel it—the beat was wrong. Out of rhythm. Out of control.\n\nInside the chamber, Elias stood at the base of the belief engines. Holographic prayers streamed past him like waterfalls of light. The chamber smelled of burnt ozone and sanctified oil.\n\nThe central mirror cracked. Just a hairline fracture, but the sound went through him like a scream.\n\nThrough the fracture he saw something that wasn’t reflection: a city burning in reverse, a woman of light standing before an inverted sun.\n\nAnd behind her, faint and furious, a child’s voice whispered through static: “The Halo was never the Eye. It’s the shell it left behind.”"
    },
    {
      id: "b2-ch5",
      title: "Chapter 5 — The Return of the Blades",
      content: "Part 1: The Fallen Coalescence\n\nThe plaza had always been a place of memory made benign — a sculpted intersection where curated prayers pooled like incense smoke. Tonight, it was a battlefield.\n\nShards of the Halo Witness rained between monoliths, each fragment humming with stolen light. Where a shard landed, the air changed: glass flowed like water, statues wept code, and the surface of the fountain answered in voices not sung in a century.\n\nElias and Reya emerged into that storm like two people who had been forgetful for too long. They had carte blanche to run, to hide, to vanish into the city’s underbelly — but something in the fractured sky had altered their already brittle courage. The mark on his palm throbbed like a second heart; the Crown chip nested beneath Reya’s ribs pulsed in time with it.\n\nThey were not alone.\n\nMovement at the plaza’s far rim resolved into silhouettes — vertical, precise, impossible. The enforcers that had cornered them earlier lay inert, their helmets cracked open as if something had exhaled right through their armor and left nothing but empty ritual behind. From between two carved stone saints stepped figures that looked older than Verdant itself: cloaks torn in the shapes of moons, armor etched with runes that refused to be catalogued.\n\nBlades.\n\nNot the theatrical blades of city myth — those lacquered relics kept behind plexiglass and lit like altars — but living shapes that carried the smell of iron and rain and war. They moved like memories remembering how to hurt.\n\nThe first of them stopped mid-stride, cocking her head at Elias like a hearing animal. Her hair was cropped to a hard line; a silver scar ran from brow to cheek. The metal at her wrist folded back to reveal a blade-carving that glowed the same fractal as Elias’s palm.\n\n“Elias Kaer,” she said; her voice was grain and glass. “Archivist. You have an unlicensed resonance.”"
    },
    // --- BOOK 3 SEPARATOR ---
    {
      id: "sep-b3",
      title: "BOOK III",
      content: "",
      isSeparator: true
    },
    {
      id: "b3-ch1",
      title: "Chapter 1 — The Fracture Beneath Heaven",
      content: "I. The Shattering Sky\n\nThe sky broke before Kael heard it scream.\n\nIt began with a tremor—subtle as breath, yet unmistakable, as though the heavens exhaled a memory it no longer wished to carry.\n\nThe twin moons hovered unnaturally still, their edges touching in a kiss of pale fire. Light bled between them, a cold, silver hemorrhage that rippled through the clouds until the firmament itself cracked like old glass.\n\nThen the world convulsed.\n\nAetherion’s horizon twisted in silence. Mountains sagged as if their bones had forgotten how to hold shape. Rivers boiled into vapor, lifting in strands that spiraled upward like souls seeking escape. The wind—once a familiar companion—carried whispers now, thousands of overlapping voices, each speaking a name Kael couldn’t quite hear.\n\nHe staggered through the obsidian dust, cloak shredded, boots cracked, throat dry with the taste of burnt stone.\n\nHe did not remember when he last slept. He did not remember if he had eaten. He did not remember whether the blood dried on his gauntlet was his own.\n\nBut he remembered this: The Veil had fallen.\n\nHe dragged Veydran along the fractured plain. The blade hissed where it touched the ground—its runes scorching the dust with a soft, eerie glow. It was less a weapon now and more an accusation, humming with a hunger that wasn’t entirely its own.\n\nThe land around him pulsed. Not with life. With memory.\n\nHe stopped atop a shattered ridge. Below lay Vaelcorne—once the holy citadel of dawnfire, a place where children learned their first oaths and old priests whispered the last rites. Now, it was a grave of glass.\n\nII. The Riftborn\n\nA crack groaned open in the valley floor below. Dust billowed upward in spirals, coiling like serpents. The ground shuddered. Something rose—slowly, shakily—from the depths of the fracture.\n\nAt first it resembled a person. Then it moved, and the illusion shattered. The creature’s limbs bent at angles the body should not allow. Its skin rippled in mirror-sheen waves, reflecting the world as tight, trembling fragments.\n\nA Riftborn. A thing not born from flesh. Born from what the world forgot.\n\nKael steadied his breath. His heartbeat slowed. His vision tightened into a predator’s focus."
    },
    {
      id: "b3-ch2",
      title: "Chapter 2 — Ember and Echo",
      content: "I. The Canyons of Shattered Memory\n\nThe storm had retreated, but the world still hissed where the molten rain had kissed the stone.\n\nGlass puddles cooled into black mirrors. Every rock face glistened with the residue of the sky’s wrath.\n\nKael and Miraen moved through a narrow canyon that wound like a scar through the bones of Aetherion. It was a place carved not by water or wind, but by something more violent—an ancient spell, a forgotten war, or perhaps the slow grinding of timelines against each other.\n\nKael’s boot crunched over a sheet of crystal. His reflection stared up at him—eyes too pale, face too tired. He stepped away before the reflection could speak. Here, even the ground had a voice.\n\nMiraen walked ahead, his obsidian staff gently tapping the canyon floor. With each tap, a circle of runes spread from the point of contact in faint crimson spirals. They glowed, pulsed, then faded.\n\nKael watched one of the patterns dissipate. “What are you checking for?”\n\nMiraen’s expression didn’t change. “The stability of the world.”\n\nKael snorted. “And?”\n\nMiraen stopped walking. The runes beneath his staff flared, twisted—then snapped shut like a jaw. “It’s arguing with itself,” Miraen said softly.\n\nII. The Silent Ambush\n\nThe air thickened. Heat shimmered, rippling across the canyon like invisible serpents. Kael’s hand drifted to the hilt of Veydran even before instinct kicked in.\n\nThe first arrow came without sound. Just the faint displacement of air—like a gasp. Kael reacted before thought could catch up. Veydran flashed free of its scabbard. The arrow hit the blade’s flat surface and exploded into obsidian dust that rained harmlessly to the ground.\n\nA second arrow struck the air beside Miraen, splitting into smoke. Miraen didn’t flinch. He lifted his hand. The runes along his staff flared—and a sphere of shimmering crimson enveloped both of them like a breathing barrier.\n\nMore arrows slammed into it. Each dissolved into sparks."
    },
    {
      id: "b3-ch3",
      title: "Chapter 3 — The Ashen Citadel",
      content: "I. The Road Through Ruin\n\nDawn rose without color.\n\nThe horizon glowed faintly—but not with sunlight. The pale ring of the moon-eclipse cast a gray radiance over the land, enough to distinguish shape from shadow but too weak to warm anything living.\n\nKael, Lyra, and Miraen walked across a plain that crunched underfoot like broken bone. What had once been soil was now fine ash, compacted by storms into a surface that reflected light with dull sorrow. Every few steps, Kael would catch glimpses: outlines of structures buried beneath the ash, skeletal remains of trees, the faint echo of a wall that had once guarded something sacred.\n\nLyra drifted slightly ahead, the edges of her form shimmering as if she were stitched out of moonlight. Sometimes she left no footprints. Sometimes she left too many, as though fragments of past versions of her walked beside the real one.\n\nKael tried not to stare. But he couldn’t help it.\n\n“Don’t,” Lyra murmured without turning around.\n\nKael swallowed. “Don’t what?”\n\n“Don’t look at me like I’m disappearing.”\n\n“You are disappearing.”\n\nShe smiled—soft and brief, the sort of smile people make when it hurts to speak the truth. “I’m holding on.”\n\nMiraen, walking behind them, muttered, “Barely.”\n\nAhead, the ash plain sloped upward into a ridge of jagged blackstone. And perched atop that ridge, looming like a fossilized storm—stood Velmirath. The Ashen Citadel."
    },
    {
      id: "b3-ch4",
      title: "Chapter 4 — Whispers of Sanctuary",
      content: "I. Beneath the Breathing Halls\n\nThe corridors beneath Velmirath were not built — they were grown.\n\nKael had passed through the Citadel’s upper sanctums before, when the world was younger and the Oath merely a rumor flickering across scholars’ tongues. But this — the deep, hidden belly of Velmirath — was something else entirely.\n\nHere, the architecture pulsed. Veins of molten crystal ran like arteries along the walls. The floor’s tiles rose and fell in gentle throbs, as if inhaling. Every few steps, the air thickened with the metallic scent of memory trying to take form.\n\nLyra’s footsteps left faint glimmers in the dust — afterimages delayed by a heartbeat, each imprint lagging behind her like a ghost trying to keep pace.\n\nMiraen moved with unusual wariness, palm tracing sigils into the air, letting runes orbit around his wrist like crimson planets.\n\n“Keep your mind still,” he muttered. “The Citadel listens. And it answers thoughts it finds interesting.”\n\nKael glanced sideways. “Define ‘interesting.’”\n\nMiraen shrugged. “Fears. Hopes. Secrets. Anything that hurts.”\n\nII. The Hidden Wing\n\nThe corridor narrowed into a sharp bend, then opened suddenly into a cathedral-like hall. Columns of fused bone and obsidian spiraled upward. Suspended lanterns floated in slow circles, shedding dull silver light that seemed tired of its own glow.\n\nAt the far end, a massive door lay half-open, revealing little but swirling dust and a faint hum.\n\nMiraen stopped. “This… shouldn’t be open.”"
    },
    {
      id: "b3-ch5",
      title: "Chapter 5 — The Waking Storm",
      content: "I. The Citadel Breathes Unease\n\nVelmirath did not sleep.\n\nEven after the Archive slammed shut behind them and the echo-guards’ shrieks faded into muffled silence, Kael felt the Citadel’s presence pressing against his skin like a second heartbeat.\n\nThe corridors dimmed and brightened in intervals that did not match any known rhythm. Runic veins along the walls pulsed faster each minute. The floor occasionally vibrated with a tremor not caused by movement, but by memory trying to manifest.\n\nLyra’s steps were uneven. Shards of light fell from her fingertips each time she brushed a wall.\n\nKael kept close beside her. Miraen led them down a narrow passageway carved from twisted obsidian, his staff emitting a faint crimson glow — weaker than before, as if drained by the Archive.\n\nHe whispered, “The Citadel is becoming aware.”\n\nKael frowned. “Aware of what?”\n\n“Of us,” Miraen murmured, not slowing. “Of her. Of the Shard. Of the Oath’s awakening.”\n\nA low groan echoed through the corridor — a deep, resonant sound that made the stones tremble.\n\nLyra winced. “It hurts.”\n\nKael turned sharply. “What hurts?”\n\n“The walls.” She pressed a hand to her temple. “They’re… speaking.”\n\n“What are they saying?”\n\nShe blinked, tears shimmering briefly. “My name. Over and over. But not like a greeting. More like a… warning.”"
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
