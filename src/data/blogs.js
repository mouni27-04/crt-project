// =============================================
// Sample Movie Blog Data — CineSpace
// =============================================

export const CATEGORIES = [
  { id: 'all', label: 'All Posts', color: '#4a7c59' },
  { id: 'reviews', label: 'Reviews', color: '#2d6a9f' },
  { id: 'classics', label: 'Classics', color: '#7b2d8b' },
  { id: 'directors', label: 'Directors', color: '#c0392b' },
  { id: 'analysis', label: 'Film Analysis', color: '#e67e22' },
  { id: 'industry', label: 'Industry', color: '#27ae60' },
];

export const BLOGS = [
  {
    id: 1,
    title: 'Oppenheimer: A Masterwork in Moral Complexity',
    excerpt: 'Christopher Nolan\'s magnum opus doesn\'t just recreate the Manhattan Project — it forces us to sit inside the conscience of a man who changed the world forever, for better and worse.',
    content: `Christopher Nolan has spent his career playing with time, memory, and perception. With Oppenheimer, he turns those tools toward history itself — and the result is the most morally serious blockbuster Hollywood has produced in decades.

**The Structure as Argument**

The film's tripartite structure — color for J. Robert Oppenheimer's subjective experience, black-and-white for the Strauss hearing — isn't just a formal flourish. It's an argument about perspective and truth. We see Oppenheimer's world as he felt it, saturated and electric. We see the political machinery that consumed him as cold, bloodless, documentary.

Cillian Murphy's performance anchors everything. He plays Oppenheimer not as a hero or villain but as a man perpetually ahead of himself — intellectually, morally, emotionally — who can never quite integrate what he knows with what he's done.

**The Bomb as Cinema**

The Trinity Test sequence is among the greatest scenes in modern cinema. Nolan shoots it without CGI, using practical effects of extraordinary scale, and crucially — he holds silence longer than any summer blockbuster dares. The absence of sound becomes its own detonation. We understand, in that suspended moment, why Oppenheimer thought of Vishnu.

**The Political Third Act**

Where some viewers lost patience, the security hearing sequences are, for this critic, the film's most essential passage. They reveal how America processed its own anxiety about what it had built — by cannibalizing the man who built it. The hearing is a psychodrama, a witch trial, and a portrait of institutional cowardice all at once.

Oppenheimer is not comfortable cinema. It is necessary cinema.`,
    category: 'reviews',
    author: 'Marcus Webb',
    authorAvatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=marcus',
    date: 'March 8, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&q=80',
    tags: ['Nolan', 'Drama', 'History', 'Review'],
    featured: true,
  },
  {
    id: 2,
    title: 'Why Citizen Kane Still Matters in 2025',
    excerpt: 'Orson Welles\' 1941 debut remains the most technically revolutionary film ever made. But what makes it endure isn\'t technique — it\'s the tragedy at its center.',
    content: `Every generation of film students is warned: Citizen Kane will disappoint you the first time. This is true. The second viewing is when it begins to astonish.

**The Technique That Changed Everything**

Welles and cinematographer Gregg Toland invented or popularized a constellation of techniques that define how movies look today: deep focus photography that keeps foreground and background simultaneously sharp; extreme low-angle shots that dwarf characters beneath ceilings; nonlinear narrative that treats chronology as a design element rather than an obligation.

But technique in service of nothing is mere cleverness. What elevates Kane is that every formal choice serves the film's central argument: that power corrupts not through grand dramatic corruption, but through the slow accumulation of isolation.

**Rosebud as Red Herring**

The famous final image — the burning sled — has been misread as a sentimental reveal. It isn't. Kane's tragedy isn't that he lost his childhood; it's that he spent his entire adult life trying to acquire replacements for something that cannot be replaced. The sled is the last object that represented a world where he was loved without conditions, before money made conditions of everything.

**What It Teaches Young Filmmakers**

Watch Kane for how it uses sound. Watch it for how Welles uses the frame to show power dynamics — who occupies space, who shrinks. Watch it for how it constructs a portrait of a man through the contradictory testimonies of people who loved and hated him.

A great film is not one that tells you what to think. It is one that gives you the tools to think more precisely.`,
    category: 'classics',
    author: 'Elena Rousseau',
    authorAvatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=elena',
    date: 'March 5, 2025',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80',
    tags: ['Classics', 'Orson Welles', 'Film History', 'Analysis'],
    featured: false,
  },
  {
    id: 3,
    title: 'The Quiet Violence of Wong Kar-wai\'s In the Mood for Love',
    excerpt: 'A film that never shows what it\'s actually about. Wong Kar-wai\'s 2000 masterpiece is a study in restraint — and what restraint costs.',
    content: `In the Mood for Love contains no sex scenes. No kiss. No explicit declaration of love. It is, nonetheless, one of the most erotically charged films ever made — and one of the saddest.

**The Language of Suppression**

Wong Kar-wai shoots desire the way pressure builds in a sealed room. Two neighbors — played by Tony Leung and Maggie Cheung — gradually realize their spouses are having an affair with each other. They grow close. They enact what their spouses have done, rehearsing confrontations. They fall in love without ever acknowledging it.

Christopher Doyle and Mark Lee Ping-bin's cinematography is a masterclass in the erotics of framing. Slow-motion shots through narrow stairwells. The rustle of a qipao. Food orders delivered in the rain. Everything peripheral to love becomes suffused with it.

**Hong Kong as Character**

The film is set in 1962 Hong Kong, a world of cramped apartments where everyone hears everything through thin walls. The physical density of that world is the film's engine: proximity without privacy, intimacy without freedom. The neighbors' relationship is shaped entirely by what cannot be said in a world where walls have ears.

**The Ending We Don't Get**

Wong shoots the ending at Angkor Wat, years later, in a whispered secret told to a crack in an ancient wall. Whatever Chow Mo-wan confesses, we don't hear it. This withholding is not frustration — it is precision. The film has earned the right to keep its secret, because we've spent ninety minutes understanding exactly how much silence costs.`,
    category: 'analysis',
    author: 'Dr. Sarah Chen',
    authorAvatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=sarah',
    date: 'February 28, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&q=80',
    tags: ['Wong Kar-wai', 'Asian Cinema', 'Romance', 'Analysis'],
    featured: false,
  },
  {
    id: 4,
    title: 'Dune: Part Two and the Future of Epic Cinema',
    excerpt: 'Denis Villeneuve\'s adaptation proved that audiences will embrace slow, cerebral, visually overwhelming spectacle — if filmmakers trust them enough to deliver it.',
    content: `Denis Villeneuve has quietly become the most important director working in mainstream cinema. Dune: Part Two is the argument for that claim, made over two hours and forty-six minutes of genuinely overwhelming scope.

**Scale Without Emptiness**

The central challenge of adapting Frank Herbert's Dune is that it is a novel of ideas dressed in the clothes of adventure. Villeneuve solves this by refusing to hide the ideas. Paul Atreides's messianic arc is not celebrated — it is interrogated. Chani's skepticism is not a subplot; it is the film's moral spine.

The sandworm ride sequence does what great epic cinema does: it makes you forget you're watching a screen. Villeneuve and cinematographer Gregg Fraser weaponize IMAX to create images that have physical weight.

**The Messiah Problem**

Herbert wrote Dune as a critique of charismatic leadership and the danger of following prophets. Most adaptations soften this. Villeneuve doesn't. Timothée Chalamet's Paul Atreides becomes genuinely frightening in the second half — not despite his heroism, but because of it.

Zendaya's Chani is the audience surrogate who refuses to be seduced by the myth. Her final decision — to ride away rather than follow — is the most politically charged moment in a summer blockbuster since the original Star Wars interrogated its own genre.

**What This Proves**

Dune: Part Two grossed over $700 million worldwide. It is not a superhero film. It is not a franchise sequel. It is a slow, dense adaptation of a 700-page political science fiction novel with subtitles and moral ambiguity. Its commercial success is proof that the audience is not the problem with mainstream cinema.`,
    category: 'reviews',
    author: 'James Okafor',
    authorAvatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=james',
    date: 'February 22, 2025',
    readTime: '13 min read',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    tags: ['Sci-Fi', 'Villeneuve', 'Epic', 'Review'],
    featured: false,
  },
  {
    id: 5,
    title: 'Stanley Kubrick: The Director Who Never Made the Same Film Twice',
    excerpt: 'From Spartacus to Eyes Wide Shut, Kubrick worked across genres with an obsessive precision that made each film feel like its own genre. What unifies them?',
    content: `Stanley Kubrick made thirteen feature films in forty-six years. No two belong to the same genre. His career spans war satire, epic, horror, science fiction, period drama, and psychological thriller. And yet every film is unmistakably, overwhelmingly Kubrick.

**The Unifying Principle**

Critics have proposed many theories: Kubrick's interest in systems and how they corrupt individuals; his distrust of optimism; his perfectionism as a formal expression of his themes. All of these are partly right. But the deepest common thread may be something simpler: Kubrick was interested in the gap between how humans rationalize their behavior and what they actually do.

In Dr. Strangelove, military logic leads rationally, step by rational step, to the end of civilization. In A Clockwork Orange, the state's attempt to cure violence produces something arguably more monstrous than the violence itself. In The Shining, a man's desperate attempt to assert himself as patriarch destroys everything he was meant to protect.

**The Technical Obsessive**

Kubrick's perfectionism is legendary, often to the point of cruelty on set. But watch the results: the one-point perspective corridors of The Shining, designed to make viewers feel subtly wrong before they know why. The centrifuge set of 2001, built to actually rotate so Keir Dullea could run inside it. The natural-light photography of Barry Lyndon, shooting by candlelight with lenses developed for NASA.

**The Final Question**

Eyes Wide Shut was released days after Kubrick died. It was widely misread on release as cold, slow, perhaps minor. It has since been reassessed as one of the richest explorations of desire, marriage, and self-deception in film history. Kubrick may have been his most vulnerable in his last film. He had fifty years of filmmaking to finally say what he meant.`,
    category: 'directors',
    author: 'Priya Nair',
    authorAvatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=priya',
    date: 'February 18, 2025',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
    tags: ['Kubrick', 'Directors', 'Film History', 'Analysis'],
    featured: false,
  },
  {
    id: 6,
    title: 'The Streaming Era\'s Effect on Film Grammar',
    excerpt: 'When movies are made for laptop screens and interrupted by notifications, does the language of cinema change? The evidence suggests yes — and not always for the worse.',
    content: `A shot in classical Hollywood cinema could hold for fifteen seconds without the audience growing restless. The average shot length in contemporary streaming films has dropped to under four seconds. This is not a neutral change.

**What We've Lost**

Extended takes are a grammar unto themselves. When Tarkovsky holds a shot of rain falling on a table for ninety seconds in Mirror, he is not being indulgent — he is asking you to shift the register of your attention, to receive the image rather than decode it. This capacity is being systematically eliminated from mainstream cinema.

The economics are revealing: streaming services measure engagement by whether viewers pause, rewind, or abandon a title. They optimize for the latter metric, which rewards stimulation over contemplation. The result is a cinema of constant micro-shock, where the fear of losing attention produces content that never gives attention anywhere to rest.

**What We've Gained**

But streaming has also funded genuinely experimental cinema that theatrical distribution would never have reached audiences. Films like The Power of the Dog, Roma, Marriage Story, and all of Alfonso Cuarón's recent work reached mass audiences through streaming after limited theatrical runs.

The long-form series format has also created narrative canvas that no two-hour film can match. The Sopranos, Mad Men, The Wire — these are novelistic achievements that cinema couldn't accommodate.

**The Question of Attention**

The debate about streaming and cinema is ultimately a debate about the kind of attention we value and what we're willing to cultivate. Film grammar will continue to evolve. The task for critics and audiences alike is to remain conscious of what's gained and lost in each evolution — and to keep making space for the slow, the quiet, and the demanding.`,
    category: 'industry',
    author: 'Aisha Mensah',
    authorAvatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=aisha',
    date: 'February 14, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&q=80',
    tags: ['Streaming', 'Industry', 'Film Theory', 'OTT'],
    featured: false,
  },
  {
    id: 7,
    title: 'Akira Kurosawa and the Grammar of Samurai Cinema',
    excerpt: 'Seven Samurai defined the grammar of the action ensemble film. Rashomon invented a new way of understanding truth. How one director changed movies globally.',
    content: `When George Lucas said Star Wars was influenced by Kurosawa, he wasn't being modest — he was being precise. The Hidden Fortress's structure maps directly onto the original Star Wars. The debt Western cinema owes to Akira Kurosawa is so vast and so absorbed that most contemporary filmmakers don't know they're working in his tradition.

**The Visual Vocabulary**

Kurosawa's most influential formal contribution was the telephoto lens used for action sequences. Where Hollywood used wide-angle lenses that made movement legible, Kurosawa compressed space, creating a different kind of chaos — figures apparently moving through thick air, crowds becoming abstracted masses, the sense that violence has weight and resistance.

His use of weather — rain in Seven Samurai's finale, wind throughout his films, fog and fire — wasn't atmospheric decoration. Weather was moral temperature. The final battle in Seven Samurai is fought in rain that turns the ground to mud, slowing every movement, making survival a physical argument against the earth itself.

**The Humanism**

What separates Kurosawa from mere action filmmakers is his insistence on the interior lives of his characters. Takashi Shimura's Kambei in Seven Samurai is one of the most fully realized characters in cinema — world-weary, competent, melancholy, aware of the futility of what he does and doing it anyway.

Rashomon remains the most formally radical of his films: four accounts of the same event, all contradictory, none definitively true. Released in 1950, it remains one of the most sophisticated treatments of subjective truth and the unreliability of testimony in the history of the medium.

**The Global Influence**

The Magnificent Seven, A Fistful of Dollars, The Lion King, Star Wars, the entire heist ensemble genre — all trace directly back to Kurosawa. To watch his films is to understand the source code of mainstream cinema.`,
    category: 'directors',
    author: 'Dr. Sarah Chen',
    authorAvatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=sarah',
    date: 'February 10, 2025',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?w=800&q=80',
    tags: ['Kurosawa', 'Japanese Cinema', 'Directors', 'History'],
    featured: false,
  },
  {
    id: 8,
    title: 'The French New Wave at 65: What It Still Teaches',
    excerpt: 'Godard, Truffaut, Varda — the Nouvelle Vague revolutionized film by rejecting the rules. Sixty-five years later, its lessons about freedom and constraint remain essential.',
    content: `The French New Wave didn't emerge from art schools or film programs. It emerged from film criticism. Godard, Truffaut, Rohmer, Chabrol, and Rivette were cinephiles before they were filmmakers — they loved cinema so completely that they understood exactly what it was refusing to do.

**What They Were Rebelling Against**

The "cinéma de qualité" they rejected wasn't bad cinema — it was proficient, elegant, technically accomplished cinema that had calcified into formula. The New Wave's rebellion was against competence in service of nothing. Their films were technically rough, sometimes accidentally rough, but alive in ways that polished studio product was not.

Truffaut's 400 Blows used real locations, natural light, and a nonprofessional child actor. Godard's Breathless was edited by jumping mid-shot, violating every rule of invisible cutting. These weren't stylistic indulgences — they were arguments that cinema could be made differently, could be personal, could think on screen rather than merely narrate.

**The Auteur Theory as Liberation**

The New Wave critics-turned-directors also gifted film culture the auteur theory — the notion that in commercial cinema, the director could be understood as the film's primary author. This has been misapplied and oversimplified, but its core insight remains: someone is responsible for a film's artistic vision, and accountability to that vision is what separates art from product.

**What Remains**

Agnes Varda outlived the movement by decades and continued making films of radical formal invention and personal humanity into her eighties. Cleo from 5 to 7, The Gleaners and I, Faces Places — her career demonstrates that the New Wave's real legacy wasn't a style but a permission: to make the film you need to make, with the resources you have, trusting the audience to meet you.`,
    category: 'classics',
    author: 'Elena Rousseau',
    authorAvatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=elena',
    date: 'February 6, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1512070679279-8988d32161be?w=800&q=80',
    tags: ['French New Wave', 'Classics', 'Godard', 'Truffaut'],
    featured: false,
  },
  {
    id: 9,
    title: 'Poor Things: Yorgos Lanthimos and the Comedy of Awakening',
    excerpt: 'Emma Stone\'s Best Actress performance anchors one of the decade\'s most formally daring films — a feminist fable shot in fish-eye lenses and Victorian surrealism.',
    content: `Yorgos Lanthimos builds films like philosophical thought experiments. What would happen if social norms were made literal and grotesque? The Lobster: people who don't find partners become animals. The Favourite: court politics as sexual warfare. Poor Things: a woman grows into herself entirely outside the social frameworks designed to contain her.

**The Bella Baxter Problem**

Bella Baxter is a grown woman with the brain of her unborn infant, raised by a scientist who created her. Her development is an accelerated bildungsroman compressed into a narrative that refuses every genre convention that would normally organize a story about a young woman's education.

She discovers sex with the enthusiasm of someone who has encountered no shame. She discovers philosophy, poverty, injustice, and heartbreak with the same unfiltered engagement. Emma Stone plays each stage of development as a genuinely different person while maintaining a throughline of will — Bella is always becoming herself more completely.

**Lanthimos's Formal World**

Robbie Ryan's cinematography uses fish-eye lenses that distort the edges of every frame, making Bella's world feel like a subjective perception rather than objective reality. The color palette shifts from desaturated grey to progressively richer saturation as Bella's consciousness expands.

**What It's Actually About**

Poor Things is a film about who gets to define a woman's experience — men who want to possess her, systems that want to exploit her, or herself. The ending is not triumphant in a conventional sense. It's stranger and more honest than that. Bella's autonomy is real precisely because it isn't legible as victory or defeat. She simply is who she is.`,
    category: 'analysis',
    author: 'Priya Nair',
    authorAvatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=priya',
    date: 'January 30, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80',
    tags: ['Lanthimos', 'Drama', 'Feminist Cinema', 'Analysis'],
    featured: false,
  },
  {
    id: 10,
    title: 'The Hollywood Strike and What It Changed',
    excerpt: 'The 2023 SAG-AFTRA and WGA strikes were not just about residuals — they were about who owns the future of storytelling in the age of AI and streaming consolidation.',
    content: `The dual strikes of 2023 halted Hollywood production for the longest combined work stoppage since the 1960s. The financial damage ran to billions. The creative damage — delayed films, reshaped release schedules, interrupted productions — rippled across the industry for more than a year.

**The AI Clause**

The most significant outcome wasn't the pay increases or streaming residuals, though those mattered. It was the AI provisions — the first contractual protections against the use of generative AI to replicate writers' styles or actors' likenesses without consent and compensation.

These provisions represent the first formal acknowledgment, in any major industry, that AI poses a genuine threat to the livelihoods and authorship rights of creative workers. The fight is far from over — the contracts expire, negotiations resume, and the technology advances faster than any contract can anticipate.

**The Streaming Residual Problem**

Streaming platforms built their dominance on a simple argument: digital distribution is different from broadcast, and the residual structures built for broadcast don't apply. Writers and actors discovered that shows with massive global audiences generated residuals that couldn't cover a month's rent.

The strike forced renegotiation of these assumptions. Not a reversal — streaming economics are genuinely different from broadcast economics — but an acknowledgment that the difference cannot simply accrue to the platform.

**What Changed**

Solidarity. The strikes demonstrated that below-the-line workers, writers, actors, and directors could maintain unified action for months despite enormous financial pressure. The entertainment industry has historically fragmented labor into competing guilds. In 2023, those guilds held.

That solidarity is the strike's most durable legacy — and the reason the industry's power structure is quietly investing in AI tools that don't require union labor.`,
    category: 'industry',
    author: 'James Okafor',
    authorAvatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=james',
    date: 'January 24, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=800&q=80',
    tags: ['Industry', 'Hollywood', 'AI', 'Labor'],
    featured: false,
  },
  {
    id: 11,
    title: 'How Sound Design Became Cinema\'s Hidden Language',
    excerpt: 'From Walter Murch\'s work on Apocalypse Now to the sonic world of Tár — the evolution of movie sound from background element to primary storytelling instrument.',
    content: `We talk about cinema as a visual medium. This is a habit of thought we should probably break. Sound occupies roughly half of the sensory experience of a film, and the greatest works in film history have used sound not as accompaniment but as meaning.

**Walter Murch and the Sound Cut**

Walter Murch is the editor and sound designer who most consciously theorized sound's narrative function. His work on Apocalypse Now, The Conversation, and the Godfather trilogy established that sound could carry psychological weight that images can't.

The most famous example: in The Conversation, Gene Hackman's surveillance expert hears an ambiguous phrase — "He'd kill us if he got the chance" — with stress on "us." By the film's end, he replays the recording and the stress has shifted to "kill." The meaning has changed, and arguably the sound has changed, and arguably only his mind has changed. Murch uses sound as subjective experience.

**The Sonic Architecture of Tár**

Todd Field's Tár (2022) is built almost entirely around the tension between what we hear and what it means. The film's protagonist is a conductor — a person who controls sound professionally — and the film's sound design reflects her absolute authority over acoustic space. Until it doesn't. Her hearing begins to fail her. Sound becomes unreliable, ominous, the first sign of a self unraveling.

**What This Requires of Audiences**

Paying attention to sound in cinema means developing a different kind of listening than we typically bring to film. Not passive reception but active interpretation: why is this sound here? What is it telling us that the image isn't? What does its absence mean?

The best film sound doesn't call attention to itself. It shapes your experience of the image so completely that you never notice — until you watch the scene with the sound off and realize what you've lost.`,
    category: 'analysis',
    author: 'Aisha Mensah',
    authorAvatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=aisha',
    date: 'January 18, 2025',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
    tags: ['Sound Design', 'Craft', 'Film Analysis', 'Murch'],
    featured: false,
  },
  {
    id: 12,
    title: 'The New Italian Horror: From Argento to Contemporary Giallo Revival',
    excerpt: 'Dario Argento\'s candy-colored nightmare cinema defined a genre. A new generation of filmmakers is revisiting Giallo aesthetics with contemporary obsessions.',
    content: `Giallo — the Italian genre that fused mystery, slasher horror, and extreme visual style — had its golden age between 1970 and 1985. Dario Argento, Mario Bava, and Lucio Fulci created films of extraordinary visual audacity that were often dismissed by serious critics and beloved by exactly the audience serious critics tend to underestimate.

**The Argento Grammar**

Argento's visual language is operatic to the point of abstraction. Suspiria (1977) is less a horror film than an extended color argument: crimson, deep green, electric blue deployed as emotional weapons. The plot is secondary to the phenomenology — the experience of moving through a world where color itself has become threatening.

His camera moves with an independence from human psychology that conventional filmmaking avoids. It explores spaces alone. It finds the beautiful in violence. Critics who call Argento exploitative miss the point: he is making the violence itself aesthetically overwhelming in order to create a specific, uncomfortable response to one's own capacity to find beauty in terrible things.

**The Contemporary Revival**

Films like Possessor, Mandy, and Saint Maud have revived Giallo aesthetics for contemporary audiences — extreme color, tactile violence, protagonists whose interiority is expressed through sensory overload. Peter Strickland's In Fabric is perhaps the most explicit homage, a film about a haunted dress that treats consumer desire as horror.

**Why Now**

The Giallo revival isn't nostalgic. It's diagnostic. These filmmakers are using the language of sensory extremity to address contemporary anxieties — late capitalism, identity dissolution, the violence implicit in everyday social structures. Argento's innovation was to make the surface overwhelming enough that you could smuggle in the terror of what's underneath. His inheritors are doing the same thing with different terrors.`,
    category: 'classics',
    author: 'Marcus Webb',
    authorAvatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=marcus',
    date: 'January 12, 2025',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&q=80',
    tags: ['Horror', 'Italian Cinema', 'Argento', 'Giallo'],
    featured: false,
  },
];
