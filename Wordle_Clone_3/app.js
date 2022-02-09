const tileDisplay = document.querySelector(".tile-container");
const keyboard = document.querySelector(".key-container");
const messageDisplay = document.querySelector(".message-container");

let wordle;

const words = [
  "LIS",
  "SEX",
  "EKE",
  "SAL",
  "CRY",
  "AIT",
  "QUA",
  "KEF",
  "FLY",
  "RUB",
  "TEL",
  "GAL",
  "AWN",
  "LID",
  "BIG",
  "ALT",
  "WEN",
  "ROW",
  "WEE",
  "TEG",
  "WAR",
  "HIP",
  "OWN",
  "WYE",
  "HAT",
  "OBI",
  "RIB",
  "BAR",
  "DOP",
  "RAS",
  "BEG",
  "EEL",
  "RYA",
  "HEP",
  "COW",
  "BRA",
  "KET",
  "CUE",
  "LEZ",
  "BUS",
  "YOK",
  "SAY",
  "MOR",
  "WIN",
  "TEJ",
  "LIE",
  "VUM",
  "END",
  "OLD",
  "CAN",
  "WAG",
  "DIM",
  "MUG",
  "WON",
  "ODD",
  "PAL",
  "HIT",
  "LAW",
  "GAP",
  "BIB",
  "SAX",
  "ACT",
  "NEB",
  "NET",
  "PIG",
  "ART",
  "TEX",
  "WIS",
  "KOI",
  "FLU",
  "SAW",
  "FIT",
  "OWL",
  "ANA",
  "YAD",
  "SIC",
  "ERG",
  "TOP",
  "GIN",
  "MET",
  "DOG",
  "SAC",
  "HOD",
  "AIM",
  "DAW",
  "DAY",
  "VAN",
  "NAP",
  "LAC",
  "ZEK",
  "GET",
  "WED",
  "HOY",
  "FOX",
  "NUT",
  "LAT",
  "DUP",
  "ERR",
  "GEM",
  "AIR",
  "SOW",
  "SIT",
  "WAY",
  "TED",
  "DIT",
  "OWE",
  "REP",
  "JUD",
  "VAS",
  "PED",
  "NAB",
  "FUR",
  "KEP",
  "TIN",
  "BAG",
  "FEE",
  "JOE",
  "TOD",
  "FEW",
  "FAX",
  "SHE",
  "ROM",
  "YEN",
  "HET",
  "LEA",
  "SIN",
  "BOY",
  "ZIP",
  "VAT",
  "BAT",
  "TWO",
  "GAD",
  "LOT",
  "ZEP",
  "OSE",
  "ALK",
  "LEY",
  "LEG",
  "INK",
  "TIP",
  "ULU",
  "ENS",
  "SHY",
  "COL",
  "MIL",
  "JET",
  "MEL",
  "TAX",
  "FAN",
  "IST",
  "SIX",
  "LED",
  "JOB",
  "ZHO",
  "WRY",
  "EAT",
  "SIB",
  "TRY",
  "SIP",
  "NEW",
  "DIE",
  "SEA",
  "CUP",
  "ANT",
  "BAD",
  "SUN",
  "AGE",
  "NOO",
  "FOG",
  "TON",
  "CAP",
  "ZOO",
  "ADD",
  "GUN",
  "JAM",
  "BUY",
  "YAH",
  "FOY",
  "VAV",
  "SEE",
  "EAR",
  "BEL",
  "WEY",
  "ASK",
  "EGG",
  "FAR",
  "SPY",
  "OPS",
  "OVA",
  "PUG",
  "LOW",
  "USE",
  "WET",
  "LIP",
  "ABY",
  "INN",
  "ROB",
  "GEN",
  "SOS",
  "RID",
  "POI",
  "JEU",
  "ICY",
  "FUN",
  "YON",
  "YAG",
  "JAW",
  "EGO",
  "TAP",
  "BEN",
  "KOA",
  "FUG",
  "ASH",
  "RAW",
  "CAT",
  "BID",
  "PSI",
  "FIX",
  "LUM",
  "SHA",
  "AMP",
  "SAT",
  "ORT",
  "TIE",
  "LAR",
  "PAH",
  "SUM",
  "PES",
  "RED",
  "HOT",
  "ORD",
  "TEN",
  "SYN",
  "PEN",
  "ALS",
  "KEX",
  "JOY",
  "FAT",
  "LUV",
  "ZOA",
  "DIG",
  "PIX",
  "MAD",
  "NUN",
  "RYE",
  "ICE",
  "UTS",
  "NOW",
  "DOS",
  "KIT",
  "YEW",
  "AID",
  "ERA",
  "GID",
  "DRY",
  "PAX",
  "ARM",
  "BIS",
  "RUN",
  "RIP",
  "DOT",
  "MUM",
  "BRR",
  "RIG",
  "DID",
  "WYN",
  "OBA",
  "YAW",
  "COG",
  "TAO",
  "HEN",
  "SAD",
  "ATE",
  "SUE",
  "ZEL",
  "LOG",
  "FER",
  "PYX",
  "PIT",
  "BED",
  "FAB",
  "ONS",
  "CAR",
  "ONE",
  "RIF",
  "HAG",
  "RIA",
  "TAN",
  "PAN",
  "AAS",
  "PER",
  "EYE",
  "KEY",
  "DAH",
  "HAY",
  "OIL",
  "PAY",
  "CWM",
  "NOB",
  "KIP",
  "HUT",
  "BET",
  "MIX",
  "YAM",
  "JUT",
  "ILL",
  "TOG",
  "PAT",
  "PIN",
  "ARB",
  "TUN",
  "OAK",
  "PUT",
  "LAY",
  "KID",
  "GIB",
  "BAN",
  "CEP",
  "TUI",
  "JAB",
  "MOS",
  "OPT",
  "DUE",
  "BOW",
  "POP",
  "REV",
  "SOX",
  "GAS",
  "ISM",
  "VIS",
  "NOD",
  "WUD",
  "GIE",
  "PIE",
  "HES",
  "GAR",
  "BAY",
  "SET",
  "MAN",
  "DIP",
  "POT",
  "REB",
  "ABB",
  "EFT",
  "MUD",
  "MAP",
  "GOD",
  "BEE",
  "BUM",
  "CUT",
];

const dictionary = [
  "AAH",
  "AAL",
  "AAS",
  "ABA",
  "ABO",
  "ABS",
  "ABY",
  "ACE",
  "ACT",
  "ADD",
  "ADO",
  "ADS",
  "ADZ",
  "AFF",
  "AFT",
  "AGA",
  "AGE",
  "AGO",
  "AGS",
  "AHA",
  "AHI",
  "AHS",
  "AID",
  "AIL",
  "AIM",
  "AIN",
  "AIR",
  "AIS",
  "AIT",
  "ALA",
  "ALB",
  "ALE",
  "ALL",
  "ALP",
  "ALS",
  "ALT",
  "AMA",
  "AMI",
  "AMP",
  "AMU",
  "ANA",
  "AND",
  "ANE",
  "ANI",
  "ANT",
  "ANY",
  "APE",
  "APO",
  "APP",
  "APT",
  "ARB",
  "ARC",
  "ARE",
  "ARF",
  "ARK",
  "ARM",
  "ARS",
  "ART",
  "ASH",
  "ASK",
  "ASP",
  "ASS",
  "ATE",
  "ATT",
  "AUK",
  "AVA",
  "AVE",
  "AVO",
  "AWA",
  "AWE",
  "AWL",
  "AWN",
  "AXE",
  "AYE",
  "AYS",
  "AZO",
  "BAA",
  "BAD",
  "BAG",
  "BAH",
  "BAL",
  "BAM",
  "BAN",
  "BAP",
  "BAR",
  "BAS",
  "BAT",
  "BAY",
  "BED",
  "BEE",
  "BEG",
  "BEL",
  "BEN",
  "BES",
  "BET",
  "BEY",
  "BIB",
  "BID",
  "BIG",
  "BIN",
  "BIO",
  "BIS",
  "BIT",
  "BIZ",
  "BOA",
  "BOB",
  "BOD",
  "BOG",
  "BOO",
  "BOP",
  "BOS",
  "BOT",
  "BOW",
  "BOX",
  "BOY",
  "BRA",
  "BRO",
  "BRR",
  "BUB",
  "BUD",
  "BUG",
  "BUM",
  "BUN",
  "BUR",
  "BUS",
  "BUT",
  "BUY",
  "BYE",
  "BYS",
  "CAB",
  "CAD",
  "CAM",
  "CAN",
  "CAP",
  "CAR",
  "CAT",
  "CAW",
  "CAY",
  "CEE",
  "CEL",
  "CEP",
  "CHI",
  "CIG",
  "CIS",
  "COB",
  "COD",
  "COG",
  "COL",
  "CON",
  "COO",
  "COP",
  "COR",
  "COS",
  "COT",
  "COW",
  "COX",
  "COY",
  "COZ",
  "CRU",
  "CRY",
  "CUB",
  "CUD",
  "CUE",
  "CUM",
  "CUP",
  "CUR",
  "CUT",
  "CWM",
  "DAB",
  "DAD",
  "DAG",
  "DAH",
  "DAK",
  "DAL",
  "DAM",
  "DAN",
  "DAP",
  "DAW",
  "DAY",
  "DEB",
  "DEE",
  "DEF",
  "DEL",
  "DEN",
  "DEV",
  "DEW",
  "DEX",
  "DEY",
  "DIB",
  "DID",
  "DIE",
  "DIF",
  "DIG",
  "DIM",
  "DIN",
  "DIP",
  "DIS",
  "DIT",
  "DOC",
  "DOE",
  "DOG",
  "DOL",
  "DOM",
  "DON",
  "DOR",
  "DOS",
  "DOT",
  "DOW",
  "DRY",
  "DUB",
  "DUD",
  "DUE",
  "DUG",
  "DUH",
  "DUI",
  "DUN",
  "DUO",
  "DUP",
  "DYE",
  "EAR",
  "EAT",
  "EAU",
  "EBB",
  "ECU",
  "EDH",
  "EDS",
  "EEK",
  "EEL",
  "EFF",
  "EFS",
  "EFT",
  "EGG",
  "EGO",
  "EKE",
  "ELD",
  "ELF",
  "ELK",
  "ELL",
  "ELM",
  "ELS",
  "EME",
  "EMS",
  "EMU",
  "END",
  "ENG",
  "ENS",
  "EON",
  "ERA",
  "ERE",
  "ERG",
  "ERN",
  "ERR",
  "ERS",
  "ESS",
  "ETA",
  "ETH",
  "EVE",
  "EWE",
  "EYE",
  "FAB",
  "FAD",
  "FAG",
  "FAN",
  "FAR",
  "FAS",
  "FAT",
  "FAX",
  "FAY",
  "FED",
  "FEE",
  "FEH",
  "FEM",
  "FEN",
  "FER",
  "FES",
  "FET",
  "FEU",
  "FEW",
  "FEY",
  "FEZ",
  "FIB",
  "FID",
  "FIE",
  "FIG",
  "FIL",
  "FIN",
  "FIR",
  "FIT",
  "FIX",
  "FIZ",
  "FLU",
  "FLY",
  "FOB",
  "FOE",
  "FOG",
  "FOH",
  "FON",
  "FOP",
  "FOR",
  "FOU",
  "FOX",
  "FOY",
  "FRO",
  "FRY",
  "FUB",
  "FUD",
  "FUG",
  "FUN",
  "FUR",
  "GAB",
  "GAD",
  "GAE",
  "GAG",
  "GAL",
  "GAM",
  "GAN",
  "GAP",
  "GAR",
  "GAS",
  "GAT",
  "GAY",
  "GED",
  "GEE",
  "GEL",
  "GEM",
  "GEN",
  "GET",
  "GEY",
  "GHI",
  "GIB",
  "GID",
  "GIE",
  "GIG",
  "GIN",
  "GIP",
  "GIT",
  "GNU",
  "GOA",
  "GOB",
  "GOD",
  "GOO",
  "GOR",
  "GOS",
  "GOT",
  "GOX",
  "GOY",
  "GUL",
  "GUM",
  "GUN",
  "GUT",
  "GUV",
  "GUY",
  "GYM",
  "GYP",
  "HAD",
  "HAE",
  "HAG",
  "HAH",
  "HAJ",
  "HAM",
  "HAO",
  "HAP",
  "HAS",
  "HAT",
  "HAW",
  "HAY",
  "HEH",
  "HEM",
  "HEN",
  "HEP",
  "HER",
  "HES",
  "HET",
  "HEW",
  "HEX",
  "HEY",
  "HIC",
  "HID",
  "HIE",
  "HIM",
  "HIN",
  "HIP",
  "HIS",
  "HIT",
  "HMM",
  "HOB",
  "HOD",
  "HOE",
  "HOG",
  "HON",
  "HOP",
  "HOT",
  "HOW",
  "HOY",
  "HUB",
  "HUE",
  "HUG",
  "HUH",
  "HUM",
  "HUN",
  "HUP",
  "HUT",
  "HYP",
  "ICE",
  "ICH",
  "ICK",
  "ICY",
  "IDS",
  "IFF",
  "IFS",
  "IGG",
  "ILK",
  "ILL",
  "IMP",
  "INK",
  "INN",
  "INS",
  "ION",
  "IRE",
  "IRK",
  "ISM",
  "ITS",
  "IVY",
  "JAB",
  "JAG",
  "JAM",
  "JAR",
  "JAW",
  "JAY",
  "JEE",
  "JET",
  "JEU",
  "JEW",
  "JIB",
  "JIG",
  "JIN",
  "JOB",
  "JOE",
  "JOG",
  "JOT",
  "JOW",
  "JOY",
  "JUG",
  "JUN",
  "JUS",
  "JUT",
  "KAB",
  "KAE",
  "KAF",
  "KAS",
  "KAT",
  "KAY",
  "KEA",
  "KEF",
  "KEG",
  "KEN",
  "KEP",
  "KEX",
  "KEY",
  "KHI",
  "KID",
  "KIF",
  "KIN",
  "KIP",
  "KIR",
  "KIS",
  "KIT",
  "KOA",
  "KOB",
  "KOI",
  "KOP",
  "KOR",
  "KOS",
  "KUE",
  "KYE",
  "LAB",
  "LAC",
  "LAD",
  "LAG",
  "LAM",
  "LAP",
  "LAR",
  "LAS",
  "LAT",
  "LAV",
  "LAW",
  "LAX",
  "LAY",
  "LEA",
  "LED",
  "LEE",
  "LEG",
  "LEI",
  "LEK",
  "LET",
  "LEU",
  "LEV",
  "LEX",
  "LEY",
  "LEZ",
  "LIB",
  "LID",
  "LIE",
  "LIN",
  "LIP",
  "LIS",
  "LIT",
  "LOB",
  "LOG",
  "LOO",
  "LOP",
  "LOT",
  "LOW",
  "LOX",
  "LUG",
  "LUM",
  "LUV",
  "LUX",
  "LYE",
  "MAC",
  "MAD",
  "MAE",
  "MAG",
  "MAN",
  "MAP",
  "MAR",
  "MAS",
  "MAT",
  "MAW",
  "MAX",
  "MAY",
  "MED",
  "MEG",
  "MEL",
  "MEM",
  "MEN",
  "MET",
  "MEW",
  "MHO",
  "MIB",
  "MIC",
  "MID",
  "MIG",
  "MIL",
  "MIM",
  "MIR",
  "MIS",
  "MIX",
  "MOA",
  "MOB",
  "MOC",
  "MOD",
  "MOG",
  "MOL",
  "MOM",
  "MON",
  "MOO",
  "MOP",
  "MOR",
  "MOS",
  "MOT",
  "MOW",
  "MUD",
  "MUG",
  "MUM",
  "MUN",
  "MUS",
  "MUT",
  "MYC",
  "NAB",
  "NAE",
  "NAG",
  "NAH",
  "NAM",
  "NAN",
  "NAP",
  "NAW",
  "NAY",
  "NEB",
  "NEE",
  "NEG",
  "NET",
  "NEW",
  "NIB",
  "NIL",
  "NIM",
  "NIP",
  "NIT",
  "NIX",
  "NOB",
  "NOD",
  "NOG",
  "NOH",
  "NOM",
  "NOO",
  "NOR",
  "NOS",
  "NOT",
  "NOW",
  "NTH",
  "NUB",
  "NUN",
  "NUS",
  "NUT",
  "OAF",
  "OAK",
  "OAR",
  "OAT",
  "OBA",
  "OBE",
  "OBI",
  "OCA",
  "ODA",
  "ODD",
  "ODE",
  "ODS",
  "OES",
  "OFF",
  "OFT",
  "OHM",
  "OHO",
  "OHS",
  "OIL",
  "OKA",
  "OKE",
  "OLD",
  "OLE",
  "OMS",
  "ONE",
  "ONO",
  "ONS",
  "OOH",
  "OOT",
  "OPE",
  "OPS",
  "OPT",
  "ORA",
  "ORB",
  "ORC",
  "ORE",
  "ORS",
  "ORT",
  "OSE",
  "OUD",
  "OUR",
  "OUT",
  "OVA",
  "OWE",
  "OWL",
  "OWN",
  "OXO",
  "OXY",
  "PAC",
  "PAD",
  "PAH",
  "PAL",
  "PAM",
  "PAN",
  "PAP",
  "PAR",
  "PAS",
  "PAT",
  "PAW",
  "PAX",
  "PAY",
  "PEA",
  "PEC",
  "PED",
  "PEE",
  "PEG",
  "PEH",
  "PEN",
  "PEP",
  "PER",
  "PES",
  "PET",
  "PEW",
  "PHI",
  "PHT",
  "PIA",
  "PIC",
  "PIE",
  "PIG",
  "PIN",
  "PIP",
  "PIS",
  "PIT",
  "PIU",
  "PIX",
  "PLY",
  "POD",
  "POH",
  "POI",
  "POL",
  "POM",
  "POP",
  "POT",
  "POW",
  "POX",
  "PRO",
  "PRY",
  "PSI",
  "PST",
  "PUB",
  "PUD",
  "PUG",
  "PUL",
  "PUN",
  "PUP",
  "PUR",
  "PUS",
  "PUT",
  "PYA",
  "PYE",
  "PYX",
  "QAT",
  "QIS",
  "QUA",
  "RAD",
  "RAG",
  "RAH",
  "RAI",
  "RAJ",
  "RAM",
  "RAN",
  "RAP",
  "RAS",
  "RAT",
  "RAW",
  "RAX",
  "RAY",
  "REB",
  "REC",
  "RED",
  "REE",
  "REF",
  "REG",
  "REI",
  "REM",
  "REP",
  "RES",
  "RET",
  "REV",
  "REX",
  "RHO",
  "RIA",
  "RIB",
  "RID",
  "RIF",
  "RIG",
  "RIM",
  "RIN",
  "RIP",
  "ROB",
  "ROC",
  "ROD",
  "ROE",
  "ROM",
  "ROT",
  "ROW",
  "RUB",
  "RUE",
  "RUG",
  "RUM",
  "RUN",
  "RUT",
  "RYA",
  "RYE",
  "SAB",
  "SAC",
  "SAD",
  "SAE",
  "SAG",
  "SAL",
  "SAP",
  "SAT",
  "SAU",
  "SAW",
  "SAX",
  "SAY",
  "SEA",
  "SEC",
  "SEE",
  "SEG",
  "SEI",
  "SEL",
  "SEN",
  "SER",
  "SET",
  "SEW",
  "SEX",
  "SHA",
  "SHE",
  "SHH",
  "SHY",
  "SIB",
  "SIC",
  "SIM",
  "SIN",
  "SIP",
  "SIR",
  "SIS",
  "SIT",
  "SIX",
  "SKA",
  "SKI",
  "SKY",
  "SLY",
  "SOB",
  "SOD",
  "SOL",
  "SOM",
  "SON",
  "SOP",
  "SOS",
  "SOT",
  "SOU",
  "SOW",
  "SOX",
  "SOY",
  "SPA",
  "SPY",
  "SRI",
  "STY",
  "SUB",
  "SUE",
  "SUK",
  "SUM",
  "SUN",
  "SUP",
  "SUQ",
  "SYN",
  "TAB",
  "TAD",
  "TAE",
  "TAG",
  "TAJ",
  "TAM",
  "TAN",
  "TAO",
  "TAP",
  "TAR",
  "TAS",
  "TAT",
  "TAU",
  "TAV",
  "TAW",
  "TAX",
  "TEA",
  "TED",
  "TEE",
  "TEG",
  "TEL",
  "TEN",
  "TET",
  "TEW",
  "THE",
  "THO",
  "THY",
  "TIC",
  "TIE",
  "TIL",
  "TIN",
  "TIP",
  "TIS",
  "TIT",
  "TOD",
  "TOE",
  "TOG",
  "TOM",
  "TON",
  "TOO",
  "TOP",
  "TOR",
  "TOT",
  "TOW",
  "TOY",
  "TRY",
  "TSK",
  "TUB",
  "TUG",
  "TUI",
  "TUN",
  "TUP",
  "TUT",
  "TUX",
  "TWA",
  "TWO",
  "TYE",
  "UDO",
  "UGH",
  "UKE",
  "ULU",
  "UMM",
  "UMP",
  "UNS",
  "UPO",
  "UPS",
  "URB",
  "URD",
  "URN",
  "URP",
  "USE",
  "UTA",
  "UTE",
  "UTS",
  "VAC",
  "VAN",
  "VAR",
  "VAS",
  "VAT",
  "VAU",
  "VAV",
  "VAW",
  "VEE",
  "VEG",
  "VET",
  "VEX",
  "VIA",
  "VID",
  "VIE",
  "VIG",
  "VIM",
  "VIS",
  "VOE",
  "VOW",
  "VOX",
  "VUG",
  "VUM",
  "WAB",
  "WAD",
  "WAE",
  "WAG",
  "WAN",
  "WAP",
  "WAR",
  "WAS",
  "WAT",
  "WAW",
  "WAX",
  "WAY",
  "WEB",
  "WED",
  "WEE",
  "WEN",
  "WET",
  "WHA",
  "WHO",
  "WHY",
  "WIG",
  "WIN",
  "WIS",
  "WIT",
  "WIZ",
  "WOE",
  "WOG",
  "WOK",
  "WON",
  "WOO",
  "WOP",
  "WOS",
  "WOT",
  "WOW",
  "WRY",
  "WUD",
  "WYE",
  "WYN",
  "XIS",
  "YAG",
  "YAH",
  "YAK",
  "YAM",
  "YAP",
  "YAR",
  "YAW",
  "YAY",
  "YEA",
  "YEH",
  "YEN",
  "YEP",
  "YES",
  "YET",
  "YEW",
  "YID",
  "YIN",
  "YIP",
  "YOB",
  "YOD",
  "YOK",
  "YOM",
  "YON",
  "YOU",
  "YOW",
  "YUK",
  "YUM",
  "YUP",
  "ZAG",
  "ZAP",
  "ZAS",
  "ZAX",
  "ZED",
  "ZEE",
  "ZEK",
  "ZEP",
  "ZIG",
  "ZIN",
  "ZIP",
  "ZIT",
  "ZOA",
  "ZOO",
  "ZUZ",
  "ZZZ",
];

const getWordle = () => {
  const randomWord = Math.floor(Math.random() * words.length);
  wordle = words[randomWord];
  console.log(wordle);
};

getWordle();

const keys = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "ENTER",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "«",
];

const guessRows = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let currentRow = 0;
let currentTile = 0;
let isGameOver = false;

guessRows.forEach((guessRow, guessRowIndex) => {
  const rowElement = document.createElement("div");
  rowElement.setAttribute("id", "guessRow-" + guessRowIndex);
  guessRow.forEach((guess, guessIndex) => {
    const tileElement = document.createElement("div");
    tileElement.setAttribute(
      "id",
      "guessRow-" + guessRowIndex + "-tile-" + guessIndex
    );
    tileElement.classList.add("tile");
    rowElement.append(tileElement);
  });
  tileDisplay.append(rowElement);
});

keys.forEach((key) => {
  const buttonElement = document.createElement("button");
  buttonElement.textContent = key;
  buttonElement.setAttribute("id", key);
  buttonElement.addEventListener("click", () => handleClick(key));
  keyboard.append(buttonElement);
});

const handleClick = (letter) => {
  if (!isGameOver) {
    console.log("clicked", letter);
    if (letter === "«") {
      deleteLetter();
      console.log("guessRows", guessRows);
      return;
    }
    if (letter === "ENTER") {
      checkRow();
      console.log("guessRows", guessRows);
      return;
    }
    addLetter(letter);
    console.log("guessRows", guessRows);
  }
};
const addLetter = (letter) => {
  if (currentTile < 3 && currentRow < 6) {
    const tile = document.getElementById(
      "guessRow-" + currentRow + "-tile-" + currentTile
    );
    tile.textContent = letter;
    guessRows[currentRow][currentTile] = letter;
    tile.setAttribute("data", letter);
    currentTile++;
    console.log("guessRows", guessRows);
  }
};

const deleteLetter = () => {
  if (currentTile > 0) {
    currentTile--;
    const tile = document.getElementById(
      "guessRow-" + currentRow + "-tile-" + currentTile
    );
    tile.textContent = "";
    guessRows[currentRow][currentRow] = "";
    tile.setAttribute("data", "");
  }
};

const checkRow = () => {
  const guess = guessRows[currentRow].join("");
  console.log("guess", guess);
  if (!dictionary.includes(guess)) {
    showMessage("Word not in list.");
    return;
  }
  if (currentTile > 2) {
    console.log("guess is " + guess, "wordle is " + wordle);
    flipTile();
    if (wordle == guess) {
      showMessage2("Magnificent!");
      isGameOver = true;
      return;
    } else {
      if (currentRow >= 5) {
        isGameOver = true;
        showMessage3(`The word was ${wordle}.`);
        return;
      }
      if (currentRow < 5) {
        currentRow++;
        currentTile = 0;
      }
    }
  }
};

const showMessage = (message) => {
  const messageElement = document.createElement("p");
  messageElement.textContent = message;
  messageDisplay.append(messageElement);
  setTimeout(() => messageDisplay.removeChild(messageElement), 2000);
};

const showMessage2 = (message) => {
  const messageElement = document.createElement("p");
  messageElement.textContent = message;
  messageDisplay.append(messageElement);
  setTimeout(() => messageDisplay.removeChild(messageElement), 4000);
};

const showMessage3 = (message) => {
  const messageElement = document.createElement("p");
  messageElement.textContent = message;
  messageDisplay.append(messageElement);
  setTimeout(() => messageDisplay.removeChild(messageElement), 6000);
};

const addColorToKey = (keyLetter, color) => {
  const key = document.getElementById(keyLetter);
  key.classList.add(color);
};

const flipTile = () => {
  const rowTiles = document.querySelector("#guessRow-" + currentRow).childNodes;
  let checkWordle = wordle;
  const guess = [];

  rowTiles.forEach((tile) => {
    guess.push({ letter: tile.getAttribute("data"), color: "grey-overlay" });
  });

  guess.forEach((guess, index) => {
    if (guess.letter == wordle[index]) {
      guess.color = "green-overlay";
      checkWordle = checkWordle.replace(guess.letter, "");
    }
  });

  guess.forEach((guess) => {
    if (checkWordle.includes(guess.letter)) {
      guess.color = "yellow-overlay";
      checkWordle = checkWordle.replace(guess.letter, "");
    }
  });

  rowTiles.forEach((tile, index) => {
    setTimeout(() => {
      tile.classList.add("flip");
      tile.classList.add(guess[index].color);
      addColorToKey(guess[index].letter, guess[index].color);
    }, 500 * index);
  });
};