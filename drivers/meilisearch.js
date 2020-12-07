import MeiliSearch from "meilisearch";

const client = new MeiliSearch({ host: "http://127.0.0.1:7700" });

const DATASET = [
    {
        id: "287947",
        title: "Shazam!",
        poster:
            "https://image.tmdb.org/t/p/w1280/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
        overview:
            "A boy is given the ability to become an adult superhero in times of need with a single magic word.",
        release_date: 1553299200,
    },
    {
        id: "299537",
        title: "Captain Marvel",
        poster:
            "https://image.tmdb.org/t/p/w1280/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
        overview:
            "The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
        release_date: 1551830400,
    },
    {
        id: "522681",
        title: "Escape Room",
        poster:
            "https://image.tmdb.org/t/p/w1280/8yZAx7tlKRZIg7pJfaPhl00yHIQ.jpg",
        overview:
            "Six strangers find themselves in circumstances beyond their control, and must use their wits to survive.",
        release_date: 1546473600,
    },
    {
        id: "166428",
        title: "How to Train Your Dragon: The Hidden World",
        poster:
            "https://image.tmdb.org/t/p/w1280/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
        overview:
            "As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.",
        release_date: 1546473600,
    },
    {
        id: "450465",
        title: "Glass",
        poster:
            "https://image.tmdb.org/t/p/w1280/svIDTNUoajS8dLEo7EosxvyAsgJ.jpg",
        overview:
            "In a series of escalating encounters, security guard David Dunn uses his supernatural abilities to track Kevin Wendell Crumb, a disturbed man who has twenty-four personalities. Meanwhile, the shadowy presence of Elijah Price emerges as an orchestrator who holds secrets critical to both men.",
        release_date: 1547596800,
    },
    {
        id: "495925",
        title: "Doraemon the Movie: Nobita's Treasure Island",
        poster:
            "https://image.tmdb.org/t/p/w1280/cmJ71gdZxCqkMUvGwWgSg3MK7pC.jpg",
        overview:
            "The story is based on Robert Louis Stevenson's Treasure Island novel.",
        release_date: 1520035200,
    },
    {
        id: "329996",
        title: "Dumbo",
        poster:
            "https://image.tmdb.org/t/p/w1280/279PwJAcelI4VuBtdzrZASqDPQr.jpg",
        overview:
            "A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.",
        release_date: 1553644800,
    },
    {
        id: "299536",
        title: "Avengers: Infinity War",
        poster:
            "https://image.tmdb.org/t/p/w1280/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        overview:
            "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
        release_date: 1524618000,
    },
    {
        id: "458723",
        title: "Us",
        poster:
            "https://image.tmdb.org/t/p/w1280/ux2dU1jQ2ACIMShzB3yP93Udpzc.jpg",
        overview:
            "Husband and wife Gabe and Adelaide Wilson take their kids to their beach house expecting to unplug and unwind with friends. But as night descends, their serenity turns to tension and chaos when some shocking visitors arrive uninvited.",
        release_date: 1552521600,
    },
    {
        id: "424783",
        title: "Bumblebee",
        poster:
            "https://image.tmdb.org/t/p/w1280/fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg",
        overview:
            "On the run in the year 1987, Bumblebee finds refuge in a junkyard in a small Californian beach town. Charlie, on the cusp of turning 18 and trying to find her place in the world, discovers Bumblebee, battle-scarred and broken.  When Charlie revives him, she quickly learns this is no ordinary yellow VW bug.",
        release_date: 1544832000,
    },
    {
        id: "920",
        title: "Cars",
        poster:
            "https://image.tmdb.org/t/p/w1280/5damnMcRFKSjhCirgX3CMa88MBj.jpg",
        overview:
            "Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters.",
        release_date: 1149728400,
    },
    {
        id: "299534",
        title: "Avengers: Endgame",
        poster:
            "https://image.tmdb.org/t/p/w1280/dHjLaIUHXcMBt7YxK1TKWK1end9.jpg",
        overview:
            "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
        release_date: 1556067600,
    },
    {
        id: "324857",
        title: "Spider-Man: Into the Spider-Verse",
        poster:
            "https://image.tmdb.org/t/p/w1280/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
        overview:
            "Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson 'Kingpin' Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.",
        release_date: 1544140800,
    },
    {
        id: "157433",
        title: "Pet Sematary",
        poster:
            "https://image.tmdb.org/t/p/w1280/7SPhr7Qj39vbnfF9O2qHRYaKHAL.jpg",
        overview:
            "Louis Creed, his wife Rachel and their two children Gage and Ellie move to a rural home where they are welcomed and enlightened about the eerie 'Pet Sematary' located nearby. After the tragedy of their cat being killed by a truck, Louis resorts to burying it in the mysterious pet cemetery, which is definitely not as it seems, as it proves to the Creeds that sometimes dead is better.",
        release_date: 1554339600,
    },
    {
        id: "456740",
        title: "Hellboy",
        poster:
            "https://image.tmdb.org/t/p/w1280/nUXCJMnAiwCpNPZuJH2n6h5hGtF.jpg",
        overview:
            "Hellboy comes to England, where he must defeat Nimue, Merlin's consort and the Blood Queen. But their battle will bring about the end of the world, a fate he desperately tries to turn away.",
        release_date: 1554944400,
    },
    {
        id: "537915",
        title: "After",
        poster:
            "https://image.tmdb.org/t/p/w1280/u3B2YKUjWABcxXZ6Nm9h10hLUbh.jpg",
        overview:
            "A young woman falls for a guy with a dark secret and the two embark on a rocky relationship.",
        release_date: 1554944400,
    },
    {
        id: "485811",
        title: "Redcon-1",
        poster:
            "https://image.tmdb.org/t/p/w1280/vVPrWngVJ2cfYAncBedQty69Dlf.jpg",
        overview:
            "After a zombie apocalypse spreads from a London prison, the UK is brought to its knees. The spread of the virus is temporarily contained but, without a cure, it’s only a matter of time before it breaks its boundaries and the biggest problem of all… any zombies with combat skills are now enhanced. With the South East of England quarantined from the rest of the world using fortified borders, intelligence finds that the scientist responsible for the outbreak is alive and well in London. With his recovery being the only hope of a cure, a squad of eight Special Forces soldiers is sent on a suicide mission to the city, now ruled by the undead, with a single task: get him out alive within 72 hours by any means necessary. What emerges is an unlikely pairing on a course to save humanity against ever-rising odds.",
        release_date: 1538096400,
    },
    {
        id: "471507",
        title: "Destroyer",
        poster:
            "https://image.tmdb.org/t/p/w1280/sHw9gTdo43nJL82py0oaROkXXNr.jpg",
        overview:
            "Erin Bell is an LAPD detective who, as a young cop, was placed undercover with a gang in the California desert with tragic results. When the leader of that gang re-emerges many years later, she must work her way back through the remaining members and into her own history with them to finally reckon with the demons that destroyed her past.",
        release_date: 1545696000,
    },
    {
        id: "400650",
        title: "Mary Poppins Returns",
        poster:
            "https://image.tmdb.org/t/p/w1280/uTVGku4LibMGyKgQvjBtv3OYfAX.jpg",
        overview:
            "In Depression-era London, a now-grown Jane and Michael Banks, along with Michael's three children, are visited by the enigmatic Mary Poppins following a personal loss. Through her unique magical skills, and with the aid of her friend Jack, she helps the family rediscover the joy and wonder missing in their lives.",
        release_date: 1544659200,
    },
    {
        id: "297802",
        title: "Aquaman",
        poster:
            "https://image.tmdb.org/t/p/w1280/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg",
        overview:
            "Once home to the most advanced civilization on Earth, Atlantis is now an underwater kingdom ruled by the power-hungry King Orm. With a vast army at his disposal, Orm plans to conquer the remaining oceanic people and then the surface world. Standing in his way is Arthur Curry, Orm's half-human, half-Atlantean brother and true heir to the throne.",
        release_date: 1544140800,
    },
    {
        id: "512196",
        title: "Happy Death Day 2U",
        poster:
            "https://image.tmdb.org/t/p/w1280/4tdnePOkOOzwuGPEOAHp8UA4vqx.jpg",
        overview:
            "Collegian Tree Gelbman wakes up in horror to learn that she's stuck in a parallel universe. Her boyfriend Carter is now with someone else, and her friends and fellow students seem to be completely different versions of themselves. When Tree discovers that Carter's roommate has been altering time, she finds herself once again the target of a masked killer. When the psychopath starts to go after her inner circle, Tree soon realizes that she must die over and over again to save everyone.",
        release_date: 1550016000,
    },
    {
        id: "390634",
        title: "Fate/stay night: Heaven’s Feel II. lost butterfly",
        poster:
            "https://image.tmdb.org/t/p/w1280/4tS0iyKQBDFqVpVcH21MSJwXZdq.jpg",
        overview:
            "Theatrical-release adaptation of the visual novel 'Fate/stay night', following the third and final route. (Part 2 of a trilogy.)",
        release_date: 1547251200,
    },
    {
        id: "500682",
        title: "The Highwaymen",
        poster:
            "https://image.tmdb.org/t/p/w1280/4bRYg4l12yDuJvAfqvUOPnBrxno.jpg",
        overview:
            "In 1934, Frank Hamer and Manny Gault, two former Texas Rangers, are commissioned to put an end to the wave of vicious crimes perpetrated by Bonnie Parker and Clyde Barrow, a notorious duo of infamous robbers and cold-blooded killers who nevertheless are worshiped by the public.",
        release_date: 1552608000,
    },
    {
        id: "454294",
        title: "The Kid Who Would Be King",
        poster:
            "https://image.tmdb.org/t/p/w1280/kBuvLX6zynQP0sjyqbXV4jNaZ4E.jpg",
        overview:
            "Old-school magic meets the modern world when young Alex stumbles upon the mythical sword Excalibur. He soon unites his friends and enemies, and they become knights who join forces with the legendary wizard Merlin. Together, they must save mankind from the wicked enchantress Morgana and her army of supernatural warriors.",
        release_date: 1547596800,
    },
    {
        id: "543103",
        title: "Kamen Rider Heisei Generations FOREVER",
        poster:
            "https://image.tmdb.org/t/p/w1280/6sOFQDlkY6El1B2P5gklzJfVdsT.jpg",
        overview:
            "In the world of Sougo Tokiwa and Sento Kiryu, their 'companions' are losing their memories one after the other as they're replaced by other people. The Super Time Jacker, Tid , appears before them. He orders his powerful underlings, Another Double and Another Den-O, to pursue a young boy called Shingo. While fighting to protect Shingo, Sougo meets Ataru, a young man who loves Riders, but Ataru says that Kamen Riders aren't real. What is the meaning of those words? While the mystery deepens, the true enemy that Sougo and Sento must defeat appears in the Kuriogatake mountain...",
        release_date: 1545436800,
    },
    {
        id: "404368",
        title: "Ralph Breaks the Internet",
        poster:
            "https://image.tmdb.org/t/p/w1280/lvfIaThG5HA8THf76nghKinjjji.jpg",
        overview:
            "Video game bad guy Ralph and fellow misfit Vanellope von Schweetz must risk it all by traveling to the World Wide Web in search of a replacement part to save Vanellope's video game, 'Sugar Rush.' In way over their heads, Ralph and Vanellope rely on the citizens of the internet -- the netizens -- to help navigate their way, including an entrepreneur named Yesss, who is the head algorithm and the heart and soul of trend-making site BuzzzTube.",
        release_date: 1542672000,
    },
    {
        id: "338952",
        title: "Fantastic Beasts: The Crimes of Grindelwald",
        poster:
            "https://image.tmdb.org/t/p/w1280/fMMrl8fD9gRCFJvsx0SuFwkEOop.jpg",
        overview:
            "Gellert Grindelwald has escaped imprisonment and has begun gathering followers to his cause—elevating wizards above all non-magical beings. The only one capable of putting a stop to him is the wizard he once called his closest friend, Albus Dumbledore. However, Dumbledore will need to seek help from the wizard who had thwarted Grindelwald once before, his former student Newt Scamander, who agrees to help, unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.",
        release_date: 1542153600,
    },
    {
        id: "399579",
        title: "Alita: Battle Angel",
        poster:
            "https://image.tmdb.org/t/p/w1280/xRWht48C2V8XNfzvPehyClOvDni.jpg",
        overview:
            "When Alita awakens with no memory of who she is in a future world she does not recognize, she is taken in by Ido, a compassionate doctor who realizes that somewhere in this abandoned cyborg shell is the heart and soul of a young woman with an extraordinary past.",
        release_date: 1548892800,
    },
    {
        id: "450001",
        title: "Master Z: Ip Man Legacy",
        poster:
            "https://image.tmdb.org/t/p/w1280/nkCoAik5I4j3Gkd2upj9xv4F0QN.jpg",
        overview:
            "After being defeated by Ip Man, Cheung Tin Chi is attempting to keep a low profile. While going about his business, he gets into a fight with a foreigner by the name of Davidson, who is a big boss behind the bar district. Tin Chi fights hard with Wing Chun and earns respect.",
        release_date: 1545264000,
    },
    {
        id: "504172",
        title: "The Mule",
        poster:
            "https://image.tmdb.org/t/p/w1280/oeZh7yEz3PMnZLgBPhrafFHRbVz.jpg",
        overview:
            "Earl Stone, a man in his 80s who is broke, alone, and facing foreclosure of his business when he is offered a job that simply requires him to drive. Easy enough, but, unbeknownst to Earl, he’s just signed on as a drug courier for a Mexican cartel. He does so well that his cargo increases exponentially, and Earl hit the radar of hard-charging DEA agent Colin Bates.",
        release_date: 1544745600,
    },
];

const addDataset = async () => {
    const index = await client.getOrCreateIndex("movies");
    const documents = await index.getDocuments();
    if (documents.length === 0) {
        const { updateId } = await index.addDocuments(DATASET);
        await index.waitForPendingUpdate(updateId);
    }
};

(async () => {
    await addDataset();
    const index = await client.getIndex("movies");
    const resp = await index.search(
        "Avengers",
        {
            limit: 1,
            attributesToHighlight: ["title"],
        },
        "GET"
    );
    console.log({ resp });
    console.log({ hit: resp.hits[0] });
})();
