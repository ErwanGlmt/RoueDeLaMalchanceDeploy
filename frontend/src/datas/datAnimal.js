import pandaRoux from "../assets/pandaRoux.jpg";
import UICNpandaRoux from "../assets/UICNpandaRoux.png";

import raieManta from "../assets/raieManta.jpg";
import UICNraieManta from "../assets/UICNraieManta.png";

import tortueLuth from "../assets/tortueLuth.jpg";
import UICNtortueLuth from "../assets/UICNtortueLuth.png";

import laBaleineBleue from "../assets/laBaleineBleue.jpg";
import UICNlaBaleineBleue from "../assets/UICNlaBaleineBleue.png";

import oursPolaire from "../assets/oursPolaire.jpg";
import UICNoursPolaire from "../assets/UICNoursPolaire.png";

import Tigre from "../assets/tigre.jpg";
import UICNTigre from "../assets/UICNTigre.png";

import hippocampe from "../assets/hippocampe.jpg";
import UICNhippocampe from "../assets/UICNhippocampe.png";

import harfangDesNeiges from "../assets/harfangDesNeiges.jpg";
import UICNharfangDesNeiges from "../assets/UICNharfangDesNeiges.png";

import aigleImperial from "../assets/aigleImperial.jpg";
import UICNaigleImperial from "../assets/UICNaigleImperial.png";

import orangOutan from "../assets/orangOutan.jpg";
import UICNorangOutan from "../assets/UICNorangOutan.png";

export const datAnimal = [
  {
    id: 0,
    code: "pandaRoux",
    name: "Panda roux",
    img: { pandaRoux },
    desc: "Malgré son nom, le panda roux, ou renard de feu, n&apos; est pas un cousin du panda géant avec lequel il partage tout de même un fort penchant pour le bambou. Sa fourrure rousse, sa taille et sa manière de se déplacer le rapprochent plutôt du chat, du raton-laveur et même de l&apos;ours. Solitaire et principalement actif la nuit, c&apos;est dans les forêts de montagne d&apos;Asie que le petit mammifère a élu domicile. La déforestation massive, la fragmentation progressive de son habitat et le braconnage ont désormais fait passer l&post;espèce sous la barre des 10 000 individus, en dépit des différents programmes mis en place",
    apparence: "fourrure rousse",
    longueurCorps: "de 50 à 64 cm",
    longueurdelaqueue: "de 28 à 59 cm",
    hauteurGarrot: "de 26 à 28 cm",
    poids: "de 3 à 6,2 kg",
    longévité: "environ 15 ans",
    distribution: "Chine, Népal, Birmanie, Bhoutan, Inde",
    regimeAlimentaire:
      "bambou, baies, fleurs, œufs, oiseaux, petits mammifères",

    imgUICN: { UICNpandaRoux },
    ext: "Destruction de son aire de répartition initiale, Braconnage et commerce illégal, Sensibilité aux perturbations",
    conseil: "",
  },

  {
    id: 1,
    code: "raieManta",
    name: "Raie manta",
    img: { raieManta },
    desc: "Très proche des requins, la raie manta est un poisson cartilagineux qui englobe deux sous-espèces : la raie manta alfredi et la raie manta géante. Dotée du plus gros cerveau de tous les poissons du monde, ses larges nageoires semblables à des ailes l&post;aident à propulser l&apos;eau vers l&apost;arrière tandis qu&apos;elle parcourt les eaux tempérées et tropicales à la recherche du plancton dont elle se nourrit. Depuis 2011, la Convention sur la conservation des espèces migratrices appartenant à la faune sauvage protège les espèces de raies manta dans les eaux internationales. Et cependant, la pollution marine, la pêche et les filets fantôme continuent de faire peser de lourdes menaces sur un poisson au rythme de reproduction déjà particulièrement lent.",
    apparence:
      "corps aplati, dos sombre, ventre clair, larges nageoires latérales",
    envergureCorps: "de 5 à 8 mètres",
    poids: "de 1 à 2 tonnes",
    longévité: "50 ans minimum ",
    distribution: "eaux tempérées, tropicales et subtropicales",
    regimeAlimentaire: "crevettes, krill et crabes planctoniques",

    img: { UICNraieManta },
    ext: "La surpêche, Les prises accidentelles, La pollution marine, Le changement climatique, Le tourisme",
    conseil: "",
  },

  {
    id: 2,
    code: "tortueLuth",
    name: "Tortue luth",
    img: { tortueLuth },
    desc: "Très proche des requins, la raie manta est un poisson cartilagineux qui englobe deux sous-espèces : la raie manta alfredi et la raie manta géante. Dotée du plus gros cerveau de tous les poissons du monde, ses larges nageoires semblables à des ailes l&apos;aident à propulser l&apos;eau vers l&apos;arrière tandis qu&apos;elle parcourt les eaux tempérées et tropicales à la recherche du plancton dont elle se nourrit. Depuis 2011, la Convention sur la conservation des espèces migratrices appartenant à la faune sauvage protège les espèces de raies manta dans les eaux internationales. Et cependant, la pollution marine, la pêche et les filets fantôme continuent de faire peser de lourdes menaces sur un poisson au rythme de reproduction déjà particulièrement lent",
    apparence:
      "corps aplati, dos sombre, ventre clair, larges nageoires latérales",
    envergureCorps: "de 5 à 8 mètres",
    poids: "de 1 à 2 tonnes",
    longévité: "50 ans minimum",
    distribution: "eaux tempérées, tropicales et subtropicales",
    regimeAlimentaire: "crevettes, krill et crabes planctoniques",

    img: { UICNtortueLuth },
    ext: "La surpêche, Les prises accidentelles, La pollution marine, Le changement climatique, Le tourisme",
    conseil: "",
  },

  {
    id: 3,
    code: "baleineBleue",
    name: "La baleine bleue",
    img: { laBaleineBleue },
    desc: "Reconnaissable aux sillons caractéristiques courants le long de sa gorge et à ses vocalises semblables à un chant, la baleine bleue ou rorqual bleu est le plus gros animal ayant jamais vécu sur Terre. Si elle se rencontre parfois en groupe d&apos;une poignée d&apos;individus, c&apos;est en solitaire ou en duo qu&apos;elle effectue ses migrations autour de la planète, au rythme des déplacements du krill dont elle se nourrit. Loin d&apos;être un superprédateur malgré ses dimensions, elle est plutôt une proie de choix pour l&apos;Homme depuis le siècle dernier. En cause principalement, la chasse qui a fait passer ses populations de 250 000 à 5000 individus en l&apos;espace d&apos;une centaine d&apos;années seulement.",
    apparence: "long corps effilé, peau lisse",
    longueurCorps: "de 21 à 30 m",
    poids: "de 82 à 200 tonnes",
    longévité: "80 à 90 ans",
    distribution:
      "pratiquement toutes les mers et tous les océans du monde, avec une préférence pour les eaux froides",
    regimeAlimentaire: "krill, céphalopodes et petits poissons.",

    img: { UICNlaBaleineBleue },
    ext: "La chasse, Le réchauffement climatique, La pêche industrielle, La pollution marine, Les collisions avec les bateaux",
    conseil: "",
  },

  {
    id: 4,
    code: "oursPolaire",
    name: "Ours Polaire",
    img: { oursPolaire },
    desc: "Considéré comme un mammifère marin, l&apos;ours polaire, ou ours blanc, est le plus grand carnivore terrestre de notre planète. Avec sa fourrure dense, sa peau noire et ses pattes légèrement palmées, il se révèle aussi à l&apos;aise sur la glace que dans l&apos;eau, et s&apos;est parfaitement adapté à la vie sur la banquise répartie autour du Pôle Nord. Une spécialisation qui joue contre lui aujourd&apos;hui, car le réchauffement climatique est plus rapide aux pôles que partout ailleurs sur la Terre. Lourdement menacé par la fonte des glaces, l&apos;ours polaire pourrait avoir totalement disparu d&apos;ici une centaine d&apos;années.",
    apparence: "fourrure blanche, corps massif",
    longueurCorps: "de 200 à 250 cm",
    hauteurGarrot: "de 100 à 150 cm",
    poids: "de 300 à 500 kg",
    longévité: "environ 25 ans",
    distribution: "Canada, Russie, Danemark, Norvège, États-Unis",
    regimeAlimentaire: "phoques, poissons, renards, oiseaux",

    img: { UICNoursPolaire },
    ext: "La fonte des glaces dûe au réchauffement climatique, La pollution chimique, L&apos;exploitation de ressources naturelles",
    conseil: "",
  },

  {
    id: 5,
    code: "tigre",
    name: "Tigre",
    img: { Tigre },
    desc: "Reconnaissable à sa fourrure rousse rayée de noir, le tigre a de tous temps été un symbole de force et de puissance. Ses techniques de chasse crépusculaires et ses sens développés en ont fait un super-prédateur et l&apos;un des plus redoutables carnivores terrestres. Pourtant, s&apos;il est reconnu comme le plus grand félin sauvage, le tigre est aussi l&apos;un des plus menacés. La perte de son habitat et le braconnage qui ont poussé l&apos;espèce au bord de l&apos;extinction au siècle dernier se poursuivent encore, l&apos;empêchant de quitter la liste rouge des espèces en danger malgré les mesures de protection prises depuis dix ans.",

    apparence: "fourrure rousse rayée de noir",
    longueurCorps: "de 150 à 280 cm",
    longueurQueue: "de 60 à 95 cm",
    hauteurGarrot: "de 60 à 80 cm",
    poids: "de 100 à 150 kg",
    longévité: "10 à 15 ans",
    distribution: "Inde, Népal, Bangladesh, Birmanie, Bhoutan, Chine",
    regimeAlimentaire: "sangliers, cervidés, oiseaux, poissons",

    img: { UICNTigre },
    ext: "Braconnage et commerce illégal, Perte de son habitat naturel, Conflits entre l&apos;Homme et l&apos;animal",
    conseil: "",
  },

  {
    id: 6,
    code: "hippocampe",
    name: "Hippocampe",
    img: { hippocampe },
    desc: "L&apos;hippocampe, ou cheval de mer, est une espèce de poisson dépourvu d&apos;écailles dont l&apos;aspect particulier et le mode de reproduction ne cessent d&apos;étonner. Au terme d&apos;une gestation de deux à trois semaines, c&apos;est le mâle qui donnera naissance à quelques centaines de petits déjà complètement formés. En dépit d&apos;excellentes techniques de camouflage, l&apos;animal est forcé de fournir de gros efforts pour se déplacer et subit de plein fouet la dégradation de son habitat et la surpêche, dans les eaux tempérées et tropicales du globe.",
    apparence:
      "anneaux osseux répartis le long du dos, nage à la verticale grâce à une nageoire dorsale, couleurs variables",
    longueurCorps: "de 22 mm à 36 cm",
    poids: "de 10 à 15 grammes",
    longévité: "de 2 à 4 ans",
    distribution:
      "en mer ou près des côtes, dans les eaux tropicales à tempérées jusqu&apos;à 30 mètres de profondeur",
    regimeAlimentaire: "krill, crevettes et petits crustacés",

    img: { UICNhippocampe },
    ext: "Dégradation des habitats naturels, Braconnage et commerce illégal, Pêche accidentelle, Perturbations humaines",
    conseil: "",
  },

  {
    id: 7,
    code: "harfangDesNeiges",
    name: "Harfang des Neiges",
    img: `url(${harfangDesNeiges})`,
    desc: "Originaire de la toundra arctique, le harfang des neiges s&apos;est doté d&apos;un épais duvet et d&apos;un plumage clair qui lui permet de se fondre à merveille dans les milieux hostiles qui constituent son environnement. Après une envergure de près de 1,5 mètres les ailes déployées, il est aussi l&apos;un des plus gros hiboux du monde et un redoutable chasseur de surcroît grâce à son ouïe remarquable par laquelle il débusque campagnols et lemmings à plusieurs dizaines de mètres de distances. Pourtant, face au réchauffement climatique, le lemming se fait rare. Et s&apos;il n&apos;est pas directement menacé par l&apos;Homme, l&apos;avenir du harfang des neiges n&apos;en reste pas moins incertain sur le long terme.",
    apparence: "plumage blanc pour les mâles, strié de noir pour les femelles",
    longueurCorps: "de 63 à 73 cm",
    poids: "environ 2 kg",
    longévité: " 9 ans",
    distribution: "États-Unis, Canada, Norvège, Russie",
    regimeAlimentaire:
      "rongeurs (lemmings, campagnols…), oiseaux, poissons, insectes",

    img: { UICNharfangDesNeiges },
    ext: "Le réchauffement climatique, La proximité des populations humaines",
    conseil: "",
  },

  {
    id: 8,
    code: "aigleImperial",
    name: "Aigle impérial",
    img: { aigleImperial },
    desc: "Pas si facile d&apos;approcher l&apos;aigle impérial, mais il n&apos;est pas rare de l&apos;apercevoir tournoyant haut dans le ciel, profitant de ses larges ailes et des courants d&apos;air chaud ascendant pour planer sans épuiser ses réserves d&apos;énergie. Lorsqu&apos;il se pose enfin, c&apos;est également en altitude dans les arbres ou les falaises notamment, là où il installera son nid. Reconnaissable à sa nuque jaune pâle sur un plumage brun-noir, l&apos;aigle royal se divise en plusieurs sous-espèces migratrices ou sédentaires, toutes menacées par la dégradation de leur habitat naturel et les effets du changement climatique.",
    apparence: "plumage brun, queue grise, nuque jaune crème",
    longueurCorps: "environ 84 cm",
    envergure: "de 180 à 215 cm",
    poids: "de 2,4 à 4,5 kg",
    longévité: "45 ans",
    distribution:
      "Europe centrale et de l&apos;Est jusqu&apos;au lac Baïkal, Asie",
    regimeAlimentaire: "petits mammifères, oiseaux, charognes",

    img: { UICNaigleImperial },
    ext: "L&apos;aménagement des territoires, Le changement climatique, La chasse, Des cas d&apos;empoisonnement",
    conseil: "",
  },

  {
    id: 9,
    code: "orangOutan",
    name: "Orang-Outan",
    img: { orangOutan },
    desc: "Reconnaissable à son pelage rougeâtre et à ses bras étonnamment longs, l&apos;orang-outan de Bornéo est l&apos;une des trois espèces restantes d&apos;orang-outans dans le monde. Comme la plupart des grands singes, il se révèle essentiellement arboricole, préférant de loin la cime des arbres au sol des forêts tropicales pour ses déplacements quotidiens. Ses facultés cognitives remarquables, telles que la capacité à fabriquer des outils ou à se reconnaître dans un miroir font de l&apos;orang-outan de Bornéo un sujet d&apos;étude privilégié. Mais la déforestation et l&apos;exploitation des ressources naturelles sur l&apos;île de Bornéo continuent de causer un véritable effondrement de ses populations. L&apos;espèce est désormais considérée comme en danger critique d&apos;extinction.",
    apparence: "fourrure hirsute, rougeâtre à brune",
    taille: "de 78 à 97 cm",
    poids: "de 37 à 87 kg",
    longévité: "de 35 à 45 ans",
    distribution: "Malaisie, Indonésie",
    regimeAlimentaire:
      "fruits, feuilles, fleurs, écorces, champignons, insectes",

    img: { UICNorangOutan },
    ext: "La déforestation, La chasse, Les changements climatiques",
    conseil: "",
  },
];
