const quizData = {
  1: {
    level: 1,
    title: "Grunnleggende KI",
    questions: [
      {
        question: "Hva står KI for?",
        options: [
          "Kognitiv interaksjon",
          "Kontrollert intelligens",
          "Kunstig intelligens",
          "Kunstig informasjon"
        ],
        correctAnswer: "Kunstig intelligens"
      },
      {
        question: "Hva brukes KI ofte til?",
        options: [
          "Å lære av data",
          "Å følge faste instrukser",
          "Å behandle informasjon manuelt",
          "Å lagre store mengder data"
        ],
        correctAnswer: "Å lære av data"
      },
      {
        question: "Hvilket av disse er et eksempel på KI?",
        options: [
          "En søkemotor",
          "Et operativsystem",
          "En chatbot",
          "En database"
        ],
        correctAnswer: "En chatbot"
      }
    ]
  },

  2: {
    level: 2,
    title: "Språkmodeller",
    questions: [
      {
        question: "Hva er en språkmodell trent på?",
        options: [
          "Kun tall og regnestykker",
          "Store mengder tekst",
          "Bare bilder"
        ],
        correctAnswer: "Store mengder tekst"
      },
      {
        question: "Hva gjør en prompt i en språkmodell?",
        options: [
          "Slår av modellen",
          "Sletter treningsdata",
          "Gir modellen en beskjed eller instruksjon"
        ],
        correctAnswer: "Gir modellen en beskjed eller instruksjon"
      },
      {
        question: "Hva kan en språkmodell hjelpe med?",
        options: [
          "Å oppsummere tekst og svare på spørsmål",
          "Å lade mobilen",
          "Å vaske klær"
        ],
        correctAnswer: "Å oppsummere tekst og svare på spørsmål"
      }
    ]
  },

  3: {
    level: 3,
    title: "Hvordan språkmodeller svarer",
    questions: [
      {
        question: "Hva betyr hallusinasjon i en språkmodell?",
        options: [
          "At modellen nekter å svare",
          "At modellen finner på noe som høres riktig ut, men som er feil",
          "At modellen svarer veldig raskt"
        ],
        correctAnswer: "At modellen finner på noe som høres riktig ut, men som er feil"
      },
      {
        question: "Hvorfor kan en språkmodell gi feil svar?",
        options: [
          "Fordi den gjetter ut fra mønstre i tekst og ikke alltid vet fakta sikkert",
          "Fordi den alltid søker på internett først",
          "Fordi den bare kan svare med ett ord"
        ],
        correctAnswer: "Fordi den gjetter ut fra mønstre i tekst og ikke alltid vet fakta sikkert"
      },
      {
        question: "Hva lærer en språkmodell av når den trenes?",
        options: [
          "Hvordan man bygger datamaskiner",
          "Mønstre i språk og tekst",
          "Hvordan man printer dokumenter"
        ],
        correctAnswer: "Mønstre i språk og tekst"
      }
    ]
  },

  4: {
    level: 4,
    title: "Prompts og kontekst",
    questions: [
      {
        question: "Hvorfor er kontekst viktig i en prompt?",
        options: [
          "Fordi svaret alltid blir kortere",
          "Fordi modellen slutter helt å gjøre feil",
          "Fordi modellen lettere forstår mål, rolle og ønsket svar"
        ],
        correctAnswer: "Fordi modellen lettere forstår mål, rolle og ønsket svar"
      },
      {
        question: "Hvilken prompt gir vanligvis det mest presise svaret?",
        options: [
          "En tydelig prompt med konkret oppgave og ønsket format",
          "Et tilfeldig nøkkelord",
          "En veldig kort prompt uten detaljer"
        ],
        correctAnswer: "En tydelig prompt med konkret oppgave og ønsket format"
      },
      {
        question: "Hva er en vanlig svakhet ved en dårlig prompt?",
        options: [
          "Den gjør datamaskinen tyngre",
          "Den mangler mål, kontekst eller formatkrav",
          "Den sletter automatisk teksten"
        ],
        correctAnswer: "Den mangler mål, kontekst eller formatkrav"
      }
    ]
  },

  5: {
    level: 5,
    title: "Prompting",
    questions: [
      {
        question: "Hva er en prompt?",
        options: [
          "En type maskinvare i datamaskinen",
          "En beskjed eller instruksjon til modellen",
          "Et program som sletter data"
        ],
        correctAnswer: "En beskjed eller instruksjon til modellen"
      },
      {
        question: "Hva betyr zero-shot prompting?",
        options: [
          "At modellen ikke får noen tekst å lese",
          "At modellen svarer med null ord",
          "At modellen får en oppgave uten eksempler"
        ],
        correctAnswer: "At modellen får en oppgave uten eksempler"
      },
      {
        question: "Når er few-shot prompting nyttig?",
        options: [
          "Når du vil vise eksempler på hvordan svaret skal se ut",
          "Når du vil slå av modellen",
          "Når du bare vil skrive ett tilfeldig ord"
        ],
        correctAnswer: "Når du vil vise eksempler på hvordan svaret skal se ut"
      }
    ]
  },

  6: {
    level: 6,
    title: "Prompting-teknikker",
    questions: [
      {
        question: "Hva er hovedideen bak iterativ prompting?",
        options: [
          "Å bruke nøyaktig samme prompt hver gang uten endringer",
          "Å forbedre prompten steg for steg for å få et bedre svar",
          "Å alltid gjøre prompten så kort som mulig"
        ],
        correctAnswer: "Å forbedre prompten steg for steg for å få et bedre svar"
      },
      {
        question: "Hvorfor kan eksempler i en prompt være nyttige?",
        options: [
          "De gjør at modellen aldri kan ta feil",
          "De gjør datamaskinen raskere",
          "De viser modellen ønsket struktur eller type svar"
        ],
        correctAnswer: "De viser modellen ønsket struktur eller type svar"
      },
      {
        question: "Hva bør du ofte gjøre hvis første svar ikke er helt riktig?",
        options: [
          "Presisere eller forbedre prompten og prøve igjen",
          "Skrive et helt tilfeldig nytt spørsmål",
          "Slutte å bruke modellen med en gang"
        ],
        correctAnswer: "Presisere eller forbedre prompten og prøve igjen"
      }
    ]
  },

  7: {
    level: 7,
    title: "Etikk i KI",
    questions: [
      {
        question: "Hvorfor er etikk viktig i KI?",
        options: [
          "For å få raskere internett",
          "For å bruke KI på en rettferdig måte",
          "For å gjøre skjermen større"
        ],
        correctAnswer: "For å bruke KI på en rettferdig måte"
      },
      {
        question: "Hva er en risiko med KI?",
        options: [
          "Bias eller skjevhet",
          "At papir blir vått",
          "At tastaturet blir mykt"
        ],
        correctAnswer: "Bias eller skjevhet"
      },
      {
        question: "Hva bør man tenke på når man lager KI?",
        options: [
          "Bare fargevalg",
          "Personvern og rettferdighet",
          "Kun lydnivå"
        ],
        correctAnswer: "Personvern og rettferdighet"
      }
    ]
  },

  8: {
    level: 8,
    title: "Velg beste prompt",
    questions: [
      {
        question: "Du vil ha et sammendrag av en tekst på en enkel måte. Hvilken prompt er best?",
        options: [
          "Oppsummer denne teksten",
          "Oppsummer teksten i 3 enkle punkter for en elev på videregående",
          "Lag et kort sammendrag av teksten"
        ],
        correctAnswer: "Oppsummer teksten i 3 enkle punkter for en elev på videregående"
      },
      {
        question: "Du vil ha hjelp til å lage ideer til en presentasjon om miljø. Hvilken prompt er best?",
        options: [
          "Gi meg 5 konkrete ideer til en presentasjon om miljø for skolebruk, med korte forklaringer",
          "Lag 5 ideer til en presentasjon om miljø",
          "Gi meg ideer"
        ],
        correctAnswer: "Gi meg 5 konkrete ideer til en presentasjon om miljø for skolebruk, med korte forklaringer"
      },
      {
        question: "Du vil ha en forklaring på et vanskelig begrep. Hvilken prompt er best?",
        options: [
          "Forklar begrepet demokrati",
          "Forklar demokrati enkelt",
          "Forklar begrepet demokrati med enkelt språk, i 2–3 setninger, med ett hverdagslig eksempel"
        ],
        correctAnswer: "Forklar begrepet demokrati med enkelt språk, i 2–3 setninger, med ett hverdagslig eksempel"
      }
    ]
  },

  9: {
    level: 9,
    title: "Bedre prompting",
    questions: [
      {
        question: "Du vil ha hjelp til å lage en arbeidsplan for uka. Hvilken prompt er best?",
        options: [
          "Lag en enkel arbeidsplan for 5 dager med skolearbeid og pauser, satt opp som en punktliste",
          "Lag en plan for meg",
          "Lag en arbeidsplan for uka"
        ],
        correctAnswer: "Lag en enkel arbeidsplan for 5 dager med skolearbeid og pauser, satt opp som en punktliste"
      },
      {
        question: "Du vil ha spørsmål til øving før en prøve i naturfag. Hvilken prompt er best?",
        options: [
          "Lag noen spørsmål om naturfag",
          "Lag 5 enkle øvingsspørsmål i naturfag om kropp og helse, med fasit etter hvert spørsmål",
          "Lag 5 spørsmål til en prøve"
        ],
        correctAnswer: "Lag 5 enkle øvingsspørsmål i naturfag om kropp og helse, med fasit etter hvert spørsmål"
      },
      {
        question: "Du vil forbedre en tekst du har skrevet. Hvilken prompt er best?",
        options: [
          "Forbedre teksten min ved å rette språkfeil og gjøre språket tydeligere, men behold meningen",
          "Gjør teksten bedre",
          "Rett teksten min"
        ],
        correctAnswer: "Forbedre teksten min ved å rette språkfeil og gjøre språket tydeligere, men behold meningen"
      }
    ]
  }
};

export default quizData;