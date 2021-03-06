const targetWords = [
  "lis",
  "sex",
  "eke",
  "sal",
  "cry",
  "ait",
  "qua",
  "kef",
  "fly",
  "rub",
  "tel",
  "gal",
  "awn",
  "lid",
  "big",
  "alt",
  "wen",
  "row",
  "wee",
  "teg",
  "war",
  "hip",
  "own",
  "wye",
  "hat",
  "obi",
  "rib",
  "bar",
  "dop",
  "ras",
  "beg",
  "eel",
  "rya",
  "hep",
  "cow",
  "bra",
  "ket",
  "cue",
  "lez",
  "bus",
  "yok",
  "say",
  "mor",
  "win",
  "tej",
  "lie",
  "vum",
  "end",
  "old",
  "can",
  "wag",
  "dim",
  "mug",
  "won",
  "odd",
  "pal",
  "hit",
  "law",
  "gap",
  "bib",
  "sax",
  "act",
  "neb",
  "net",
  "pig",
  "art",
  "tex",
  "wis",
  "koi",
  "flu",
  "saw",
  "fit",
  "owl",
  "ana",
  "yad",
  "sic",
  "erg",
  "top",
  "gin",
  "met",
  "dog",
  "sac",
  "hod",
  "aim",
  "daw",
  "day",
  "van",
  "nap",
  "lac",
  "zek",
  "get",
  "wed",
  "hoy",
  "fox",
  "nut",
  "lat",
  "dup",
  "err",
  "gem",
  "air",
  "sow",
  "sit",
  "way",
  "ted",
  "dit",
  "owe",
  "rep",
  "jud",
  "vas",
  "ped",
  "nab",
  "fur",
  "kep",
  "tin",
  "bag",
  "fee",
  "joe",
  "tod",
  "few",
  "fax",
  "she",
  "rom",
  "yen",
  "het",
  "lea",
  "sin",
  "boy",
  "zip",
  "vat",
  "bat",
  "two",
  "gad",
  "lot",
  "zep",
  "ose",
  "alk",
  "ley",
  "leg",
  "ink",
  "tip",
  "ulu",
  "ens",
  "shy",
  "col",
  "mil",
  "jet",
  "mel",
  "tax",
  "fan",
  "ist",
  "six",
  "led",
  "job",
  "zho",
  "wry",
  "eat",
  "sib",
  "try",
  "sip",
  "new",
  "die",
  "sea",
  "cup",
  "ant",
  "bad",
  "sun",
  "age",
  "noo",
  "fog",
  "ton",
  "cap",
  "zoo",
  "add",
  "gun",
  "jam",
  "buy",
  "yah",
  "foy",
  "vav",
  "see",
  "ear",
  "bel",
  "wey",
  "ask",
  "egg",
  "far",
  "spy",
  "ops",
  "ova",
  "pug",
  "low",
  "use",
  "wet",
  "lip",
  "aby",
  "inn",
  "rob",
  "gen",
  "sos",
  "rid",
  "poi",
  "jeu",
  "icy",
  "fun",
  "yon",
  "yag",
  "jaw",
  "ego",
  "tap",
  "ben",
  "koa",
  "fug",
  "ash",
  "raw",
  "cat",
  "bid",
  "psi",
  "fix",
  "lum",
  "sha",
  "amp",
  "sat",
  "ort",
  "tie",
  "lar",
  "pah",
  "sum",
  "pes",
  "red",
  "hot",
  "ord",
  "ten",
  "syn",
  "pen",
  "als",
  "kex",
  "joy",
  "fat",
  "luv",
  "zoa",
  "dig",
  "pix",
  "mad",
  "nun",
  "rye",
  "ice",
  "uts",
  "now",
  "dos",
  "kit",
  "yew",
  "aid",
  "era",
  "gid",
  "dry",
  "pax",
  "arm",
  "bis",
  "run",
  "rip",
  "dot",
  "mum",
  "brr",
  "rig",
  "did",
  "wyn",
  "oba",
  "yaw",
  "cog",
  "tao",
  "hen",
  "sad",
  "ate",
  "sue",
  "zel",
  "log",
  "fer",
  "pyx",
  "pit",
  "bed",
  "fab",
  "ons",
  "car",
  "one",
  "rif",
  "hag",
  "ria",
  "tan",
  "pan",
  "aas",
  "per",
  "eye",
  "key",
  "dah",
  "hay",
  "oil",
  "pay",
  "cwm",
  "nob",
  "kip",
  "hut",
  "bet",
  "mix",
  "yam",
  "jut",
  "ill",
  "tog",
  "pat",
  "pin",
  "arb",
  "tun",
  "oak",
  "put",
  "lay",
  "kid",
  "gib",
  "ban",
  "cep",
  "tui",
  "jab",
  "mos",
  "opt",
  "due",
  "bow",
  "pop",
  "rev",
  "sox",
  "gas",
  "ism",
  "vis",
  "nod",
  "wud",
  "gie",
  "pie",
  "hes",
  "gar",
  "bay",
  "set",
  "man",
  "dip",
  "pot",
  "reb",
  "abb",
  "eft",
  "mud",
  "map",
  "god",
  "bee",
  "bum",
  "cut",
];

const dictionary = [
  "aah",
  "aal",
  "aas",
  "aba",
  "abo",
  "abs",
  "aby",
  "ace",
  "act",
  "add",
  "ado",
  "ads",
  "adz",
  "aff",
  "aft",
  "aga",
  "age",
  "ago",
  "ags",
  "aha",
  "ahi",
  "ahs",
  "aid",
  "ail",
  "aim",
  "ain",
  "air",
  "ais",
  "ait",
  "ala",
  "alb",
  "ale",
  "all",
  "alp",
  "als",
  "alt",
  "ama",
  "ami",
  "amp",
  "amu",
  "ana",
  "and",
  "ane",
  "ani",
  "ant",
  "any",
  "ape",
  "apo",
  "app",
  "apt",
  "arb",
  "arc",
  "are",
  "arf",
  "ark",
  "arm",
  "ars",
  "art",
  "ash",
  "ask",
  "asp",
  "ass",
  "ate",
  "att",
  "auk",
  "ava",
  "ave",
  "avo",
  "awa",
  "awe",
  "awl",
  "awn",
  "axe",
  "aye",
  "ays",
  "azo",
  "baa",
  "bad",
  "bag",
  "bah",
  "bal",
  "bam",
  "ban",
  "bap",
  "bar",
  "bas",
  "bat",
  "bay",
  "bed",
  "bee",
  "beg",
  "bel",
  "ben",
  "bes",
  "bet",
  "bey",
  "bib",
  "bid",
  "big",
  "bin",
  "bio",
  "bis",
  "bit",
  "biz",
  "boa",
  "bob",
  "bod",
  "bog",
  "boo",
  "bop",
  "bos",
  "bot",
  "bow",
  "box",
  "boy",
  "bra",
  "bro",
  "brr",
  "bub",
  "bud",
  "bug",
  "bum",
  "bun",
  "bur",
  "bus",
  "but",
  "buy",
  "bye",
  "bys",
  "cab",
  "cad",
  "cam",
  "can",
  "cap",
  "car",
  "cat",
  "caw",
  "cay",
  "cee",
  "cel",
  "cep",
  "chi",
  "cig",
  "cis",
  "cob",
  "cod",
  "cog",
  "col",
  "con",
  "coo",
  "cop",
  "cor",
  "cos",
  "cot",
  "cow",
  "cox",
  "coy",
  "coz",
  "cru",
  "cry",
  "cub",
  "cud",
  "cue",
  "cum",
  "cup",
  "cur",
  "cut",
  "cwm",
  "dab",
  "dad",
  "dag",
  "dah",
  "dak",
  "dal",
  "dam",
  "dan",
  "dap",
  "daw",
  "day",
  "deb",
  "dee",
  "def",
  "del",
  "den",
  "dev",
  "dew",
  "dex",
  "dey",
  "dib",
  "did",
  "die",
  "dif",
  "dig",
  "dim",
  "din",
  "dip",
  "dis",
  "dit",
  "doc",
  "doe",
  "dog",
  "dol",
  "dom",
  "don",
  "dor",
  "dos",
  "dot",
  "dow",
  "dry",
  "dub",
  "dud",
  "due",
  "dug",
  "duh",
  "dui",
  "dun",
  "duo",
  "dup",
  "dye",
  "ear",
  "eat",
  "eau",
  "ebb",
  "ecu",
  "edh",
  "eds",
  "eek",
  "eel",
  "eff",
  "efs",
  "eft",
  "egg",
  "ego",
  "eke",
  "eld",
  "elf",
  "elk",
  "ell",
  "elm",
  "els",
  "eme",
  "ems",
  "emu",
  "end",
  "eng",
  "ens",
  "eon",
  "era",
  "ere",
  "erg",
  "ern",
  "err",
  "ers",
  "ess",
  "eta",
  "eth",
  "eve",
  "ewe",
  "eye",
  "fab",
  "fad",
  "fag",
  "fan",
  "far",
  "fas",
  "fat",
  "fax",
  "fay",
  "fed",
  "fee",
  "feh",
  "fem",
  "fen",
  "fer",
  "fes",
  "fet",
  "feu",
  "few",
  "fey",
  "fez",
  "fib",
  "fid",
  "fie",
  "fig",
  "fil",
  "fin",
  "fir",
  "fit",
  "fix",
  "fiz",
  "flu",
  "fly",
  "fob",
  "foe",
  "fog",
  "foh",
  "fon",
  "fop",
  "for",
  "fou",
  "fox",
  "foy",
  "fro",
  "fry",
  "fub",
  "fud",
  "fug",
  "fun",
  "fur",
  "gab",
  "gad",
  "gae",
  "gag",
  "gal",
  "gam",
  "gan",
  "gap",
  "gar",
  "gas",
  "gat",
  "gay",
  "ged",
  "gee",
  "gel",
  "gem",
  "gen",
  "get",
  "gey",
  "ghi",
  "gib",
  "gid",
  "gie",
  "gig",
  "gin",
  "gip",
  "git",
  "gnu",
  "goa",
  "gob",
  "god",
  "goo",
  "gor",
  "gos",
  "got",
  "gox",
  "goy",
  "gul",
  "gum",
  "gun",
  "gut",
  "guv",
  "guy",
  "gym",
  "gyp",
  "had",
  "hae",
  "hag",
  "hah",
  "haj",
  "ham",
  "hao",
  "hap",
  "has",
  "hat",
  "haw",
  "hay",
  "heh",
  "hem",
  "hen",
  "hep",
  "her",
  "hes",
  "het",
  "hew",
  "hex",
  "hey",
  "hic",
  "hid",
  "hie",
  "him",
  "hin",
  "hip",
  "his",
  "hit",
  "hmm",
  "hob",
  "hod",
  "hoe",
  "hog",
  "hon",
  "hop",
  "hot",
  "how",
  "hoy",
  "hub",
  "hue",
  "hug",
  "huh",
  "hum",
  "hun",
  "hup",
  "hut",
  "hyp",
  "ice",
  "ich",
  "ick",
  "icy",
  "ids",
  "iff",
  "ifs",
  "igg",
  "ilk",
  "ill",
  "imp",
  "ink",
  "inn",
  "ins",
  "ion",
  "ire",
  "irk",
  "ism",
  "its",
  "ivy",
  "jab",
  "jag",
  "jam",
  "jar",
  "jaw",
  "jay",
  "jee",
  "jet",
  "jeu",
  "jew",
  "jib",
  "jig",
  "jin",
  "job",
  "joe",
  "jog",
  "jot",
  "jow",
  "joy",
  "jug",
  "jun",
  "jus",
  "jut",
  "kab",
  "kae",
  "kaf",
  "kas",
  "kat",
  "kay",
  "kea",
  "kef",
  "keg",
  "ken",
  "kep",
  "kex",
  "key",
  "khi",
  "kid",
  "kif",
  "kin",
  "kip",
  "kir",
  "kis",
  "kit",
  "koa",
  "kob",
  "koi",
  "kop",
  "kor",
  "kos",
  "kue",
  "kye",
  "lab",
  "lac",
  "lad",
  "lag",
  "lam",
  "lap",
  "lar",
  "las",
  "lat",
  "lav",
  "law",
  "lax",
  "lay",
  "lea",
  "led",
  "lee",
  "leg",
  "lei",
  "lek",
  "let",
  "leu",
  "lev",
  "lex",
  "ley",
  "lez",
  "lib",
  "lid",
  "lie",
  "lin",
  "lip",
  "lis",
  "lit",
  "lob",
  "log",
  "loo",
  "lop",
  "lot",
  "low",
  "lox",
  "lug",
  "lum",
  "luv",
  "lux",
  "lye",
  "mac",
  "mad",
  "mae",
  "mag",
  "man",
  "map",
  "mar",
  "mas",
  "mat",
  "maw",
  "max",
  "may",
  "med",
  "meg",
  "mel",
  "mem",
  "men",
  "met",
  "mew",
  "mho",
  "mib",
  "mic",
  "mid",
  "mig",
  "mil",
  "mim",
  "mir",
  "mis",
  "mix",
  "moa",
  "mob",
  "moc",
  "mod",
  "mog",
  "mol",
  "mom",
  "mon",
  "moo",
  "mop",
  "mor",
  "mos",
  "mot",
  "mow",
  "mud",
  "mug",
  "mum",
  "mun",
  "mus",
  "mut",
  "myc",
  "nab",
  "nae",
  "nag",
  "nah",
  "nam",
  "nan",
  "nap",
  "naw",
  "nay",
  "neb",
  "nee",
  "neg",
  "net",
  "new",
  "nib",
  "nil",
  "nim",
  "nip",
  "nit",
  "nix",
  "nob",
  "nod",
  "nog",
  "noh",
  "nom",
  "noo",
  "nor",
  "nos",
  "not",
  "now",
  "nth",
  "nub",
  "nun",
  "nus",
  "nut",
  "oaf",
  "oak",
  "oar",
  "oat",
  "oba",
  "obe",
  "obi",
  "oca",
  "oda",
  "odd",
  "ode",
  "ods",
  "oes",
  "off",
  "oft",
  "ohm",
  "oho",
  "ohs",
  "oil",
  "oka",
  "oke",
  "old",
  "ole",
  "oms",
  "one",
  "ono",
  "ons",
  "ooh",
  "oot",
  "ope",
  "ops",
  "opt",
  "ora",
  "orb",
  "orc",
  "ore",
  "ors",
  "ort",
  "ose",
  "oud",
  "our",
  "out",
  "ova",
  "owe",
  "owl",
  "own",
  "oxo",
  "oxy",
  "pac",
  "pad",
  "pah",
  "pal",
  "pam",
  "pan",
  "pap",
  "par",
  "pas",
  "pat",
  "paw",
  "pax",
  "pay",
  "pea",
  "pec",
  "ped",
  "pee",
  "peg",
  "peh",
  "pen",
  "pep",
  "per",
  "pes",
  "pet",
  "pew",
  "phi",
  "pht",
  "pia",
  "pic",
  "pie",
  "pig",
  "pin",
  "pip",
  "pis",
  "pit",
  "piu",
  "pix",
  "ply",
  "pod",
  "poh",
  "poi",
  "pol",
  "pom",
  "pop",
  "pot",
  "pow",
  "pox",
  "pro",
  "pry",
  "psi",
  "pst",
  "pub",
  "pud",
  "pug",
  "pul",
  "pun",
  "pup",
  "pur",
  "pus",
  "put",
  "pya",
  "pye",
  "pyx",
  "qat",
  "qis",
  "qua",
  "rad",
  "rag",
  "rah",
  "rai",
  "raj",
  "ram",
  "ran",
  "rap",
  "ras",
  "rat",
  "raw",
  "rax",
  "ray",
  "reb",
  "rec",
  "red",
  "ree",
  "ref",
  "reg",
  "rei",
  "rem",
  "rep",
  "res",
  "ret",
  "rev",
  "rex",
  "rho",
  "ria",
  "rib",
  "rid",
  "rif",
  "rig",
  "rim",
  "rin",
  "rip",
  "rob",
  "roc",
  "rod",
  "roe",
  "rom",
  "rot",
  "row",
  "rub",
  "rue",
  "rug",
  "rum",
  "run",
  "rut",
  "rya",
  "rye",
  "sab",
  "sac",
  "sad",
  "sae",
  "sag",
  "sal",
  "sap",
  "sat",
  "sau",
  "saw",
  "sax",
  "say",
  "sea",
  "sec",
  "see",
  "seg",
  "sei",
  "sel",
  "sen",
  "ser",
  "set",
  "sew",
  "sex",
  "sha",
  "she",
  "shh",
  "shy",
  "sib",
  "sic",
  "sim",
  "sin",
  "sip",
  "sir",
  "sis",
  "sit",
  "six",
  "ska",
  "ski",
  "sky",
  "sly",
  "sob",
  "sod",
  "sol",
  "som",
  "son",
  "sop",
  "sos",
  "sot",
  "sou",
  "sow",
  "sox",
  "soy",
  "spa",
  "spy",
  "sri",
  "sty",
  "sub",
  "sue",
  "suk",
  "sum",
  "sun",
  "sup",
  "suq",
  "syn",
  "tab",
  "tad",
  "tae",
  "tag",
  "taj",
  "tam",
  "tan",
  "tao",
  "tap",
  "tar",
  "tas",
  "tat",
  "tau",
  "tav",
  "taw",
  "tax",
  "tea",
  "ted",
  "tee",
  "teg",
  "tel",
  "ten",
  "tet",
  "tew",
  "the",
  "tho",
  "thy",
  "tic",
  "tie",
  "til",
  "tin",
  "tip",
  "tis",
  "tit",
  "tod",
  "toe",
  "tog",
  "tom",
  "ton",
  "too",
  "top",
  "tor",
  "tot",
  "tow",
  "toy",
  "try",
  "tsk",
  "tub",
  "tug",
  "tui",
  "tun",
  "tup",
  "tut",
  "tux",
  "twa",
  "two",
  "tye",
  "udo",
  "ugh",
  "uke",
  "ulu",
  "umm",
  "ump",
  "uns",
  "upo",
  "ups",
  "urb",
  "urd",
  "urn",
  "urp",
  "use",
  "uta",
  "ute",
  "uts",
  "vac",
  "van",
  "var",
  "vas",
  "vat",
  "vau",
  "vav",
  "vaw",
  "vee",
  "veg",
  "vet",
  "vex",
  "via",
  "vid",
  "vie",
  "vig",
  "vim",
  "vis",
  "voe",
  "vow",
  "vox",
  "vug",
  "vum",
  "wab",
  "wad",
  "wae",
  "wag",
  "wan",
  "wap",
  "war",
  "was",
  "wat",
  "waw",
  "wax",
  "way",
  "web",
  "wed",
  "wee",
  "wen",
  "wet",
  "wha",
  "who",
  "why",
  "wig",
  "win",
  "wis",
  "wit",
  "wiz",
  "woe",
  "wog",
  "wok",
  "won",
  "woo",
  "wop",
  "wos",
  "wot",
  "wow",
  "wry",
  "wud",
  "wye",
  "wyn",
  "xis",
  "yag",
  "yah",
  "yak",
  "yam",
  "yap",
  "yar",
  "yaw",
  "yay",
  "yea",
  "yeh",
  "yen",
  "yep",
  "yes",
  "yet",
  "yew",
  "yid",
  "yin",
  "yip",
  "yob",
  "yod",
  "yok",
  "yom",
  "yon",
  "you",
  "yow",
  "yuk",
  "yum",
  "yup",
  "zag",
  "zap",
  "zas",
  "zax",
  "zed",
  "zee",
  "zek",
  "zep",
  "zig",
  "zin",
  "zip",
  "zit",
  "zoa",
  "zoo",
  "zuz",
  "zzz",
];

const WORD_LENGTH = 3;
const FLIP_ANIMATION_DURATION = 500;
const DANCE_ANIMATION_DURATION = 500;
const keyboard = document.querySelector("[data-keyboard]");
const alertContainer = document.querySelector("[data-alert-container]");
const guessGrid = document.querySelector("[data-guess-grid]");
const getTargetWord = function () {
  const randomWord = Math.floor(Math.random() * targetWords.length);
  targetWord = targetWords[randomWord];
  console.log(targetWord);
};

getTargetWord();

startInteraction();

function startInteraction() {
  document.addEventListener("click", handleMouseClick);
  document.addEventListener("keydown", handleKeyPress);
}

function stopInteraction() {
  document.removeEventListener("click", handleMouseClick);
  document.removeEventListener("keydown", handleKeyPress);
}

function handleMouseClick(e) {
  if (e.target.matches("[data-key]")) {
    pressKey(e.target.dataset.key);
    return;
  }

  if (e.target.matches("[data-enter]")) {
    submitGuess();
    return;
  }

  if (e.target.matches("[data-delete]")) {
    deleteKey();
    return;
  }
}

function handleKeyPress(e) {
  if (e.key === "Enter") {
    submitGuess();
    return;
  }

  if (e.key === "Backspace" || e.key === "Delete") {
    deleteKey();
    return;
  }

  if (e.key.match(/^[a-z]$/)) {
    pressKey(e.key);
    return;
  }
}

function pressKey(key) {
  const activeTiles = getActiveTiles();
  if (activeTiles.length >= WORD_LENGTH) return;
  const nextTile = guessGrid.querySelector(":not([data-letter])");
  nextTile.dataset.letter = key.toLowerCase();
  nextTile.textContent = key;
  nextTile.dataset.state = "active";
}

function deleteKey() {
  const activeTiles = getActiveTiles();
  const lastTile = activeTiles[activeTiles.length - 1];
  if (lastTile == null) return;
  lastTile.textContent = "";
  delete lastTile.dataset.state;
  delete lastTile.dataset.letter;
}

function submitGuess() {
  const activeTiles = [...getActiveTiles()];
  if (activeTiles.length !== WORD_LENGTH) {
    showAlert("Not enough letters");
    shakeTiles(activeTiles);
    return;
  }

  const guess = activeTiles.reduce((word, tile) => {
    return word + tile.dataset.letter;
  }, "");

  if (!dictionary.includes(guess)) {
    showAlert("Not in word list");
    shakeTiles(activeTiles);
    return;
  }

  stopInteraction();
  activeTiles.forEach((...params) => flipTile(...params, guess));
}

function flipTile(tile, index, array, guess) {
  const letter = tile.dataset.letter;
  const key = keyboard.querySelector(`[data-key="${letter}"i]`);
  setTimeout(() => {
    tile.classList.add("flip");
  }, (index * FLIP_ANIMATION_DURATION) / 2);

  tile.addEventListener(
    "transitionend",
    () => {
      tile.classList.remove("flip");
      if (targetWord[index] === letter) {
        tile.dataset.state = "correct";
        key.classList.add("correct");
      } else if (targetWord.includes(letter)) {
        tile.dataset.state = "wrong-location";
        key.classList.add("wrong-location");
      } else {
        tile.dataset.state = "wrong";
        key.classList.add("wrong");
      }

      if (index === array.length - 1) {
        tile.addEventListener(
          "transitionend",
          () => {
            startInteraction();
            checkWinLose(guess, array);
          },
          { once: true }
        );
      }
    },
    { once: true }
  );
}

function getActiveTiles() {
  return guessGrid.querySelectorAll('[data-state="active"]');
}

function showAlert(message, duration = 1000) {
  const alert = document.createElement("div");
  alert.textContent = message;
  alert.classList.add("alert");
  alertContainer.prepend(alert);
  if (duration == null) return;

  setTimeout(() => {
    alert.classList.add("hide");
    alert.addEventListener("transitionend", () => {
      alert.remove();
    });
  }, duration);
}

function shakeTiles(tiles) {
  tiles.forEach((tile) => {
    tile.classList.add("shake");
    tile.addEventListener(
      "animationend",
      () => {
        tile.classList.remove("shake");
      },
      { once: true }
    );
  });
}

function checkWinLose(guess, tiles) {
  if (guess === targetWord) {
    showAlert("You Win", 5000);
    danceTiles(tiles);
    stopInteraction();
    return;
  }

  const remainingTiles = guessGrid.querySelectorAll(":not([data-letter])");
  if (remainingTiles.length === 0) {
    showAlert(targetWord.toUpperCase(), null);
    stopInteraction();
  }
}

function danceTiles(tiles) {
  tiles.forEach((tile, index) => {
    setTimeout(() => {
      tile.classList.add("dance");
      tile.addEventListener(
        "animationend",
        () => {
          tile.classList.remove("dance");
        },
        { once: true }
      );
    }, (index * DANCE_ANIMATION_DURATION) / 5);
  });
}
