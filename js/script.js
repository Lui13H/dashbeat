const DEFAULT_RAW = [[1,"One","Metallica","...And Justice for All",447,"1988-08-25"],[2,"For Whom The Bell Tolls - Remastered","Metallica","Ride the Lightning",309,"1984-07-27"],[3,"Master Of Puppets","Metallica","Master of Puppets",515,"1986-03-03"],[4,"Sad But True","Metallica","Metallica",323,"1991-08-12"],[5,"Wherever I May Roam","Metallica","Metallica",403,"1991-08-12"],[6,"Enter Sandman","Metallica","Metallica",331,"1991-08-12"],[7,"The Unforgiven","Metallica","Metallica",386,"1991-08-12"],[8,"Battery","Metallica","Master of Puppets",312,"1986-03-03"],[9,"Welcome Home (Sanitarium)","Metallica","Master of Puppets",387,"1986-03-03"],[10,"Fade To Black - Remastered","Metallica","Ride the Lightning",417,"1984-07-27"],[11,"Blackened","Metallica","...And Justice for All",400,"1988-08-25"],[12,"The Shortest Straw","Metallica","...And Justice for All",395,"1988-08-25"],[13,"All Nightmare Long","Metallica","Death Magnetic",477,"2008-01-01"],[14,"Don't Tread On Me","Metallica","Metallica",240,"1991-08-12"],[15,"The Thing That Should Not Be","Metallica","Master of Puppets",396,"1986-03-03"],[16,"Murder One","Metallica","Hardwired... to Self-Destruct",345,"2016-11-18"],[17,"...And Justice For All","Metallica","...And Justice for All",586,"1988-08-25"],[18,"Eye Of The Beholder","Metallica","...And Justice for All",390,"1988-08-25"],[19,"Sarcastrophe","Slipknot",".5: The Gray Chapter",306,"2014-10-15"],[20,"A.V.I.","Slipknot",".5: The Gray Chapter",332,"2014-10-15"],[21,"The Devil in I","Slipknot",".5: The Gray Chapter",342,"2014-10-15"],[22,"Lech","Slipknot",".5: The Gray Chapter",290,"2014-10-15"],[23,"The Negative One","Slipknot",".5: The Gray Chapter",325,"2014-10-15"],[24,"All Out Life","Slipknot","All Out Life",340,"2018-10-31"],[25,"People = Shit","Slipknot","Iowa",215,"2001-01-01"],[26,"Disasterpiece","Slipknot","Iowa",308,"2001-01-01"],[27,"Everything Ends","Slipknot","Iowa",254,"2001-01-01"],[28,"The Heretic Anthem","Slipknot","Iowa",254,"2001-01-01"],[29,"Left Behind","Slipknot","Iowa",241,"2001-01-01"],[30,"Spit It Out - Hyper Version","Slipknot","Antennas to Hell",144,"2009-09-09"],[31,"The Blister Exists","Slipknot","Vol. 3: (The Subliminal Verses)",319,"2004-01-01"],[32,"Three Nil","Slipknot","Vol. 3: (The Subliminal Verses)",288,"2004-01-01"],[33,"Duality","Slipknot","Vol. 3: (The Subliminal Verses)",252,"2004-01-01"],[34,"Before I Forget","Slipknot","Vol. 3: (The Subliminal Verses)",278,"2004-01-01"],[35,"Scream","Slipknot","Vol. 3: (The Subliminal Verses)",271,"2004-01-01"],[36,"Unsainted","Slipknot","We Are Not Your Kind",260,"2019-08-09"],[37,"Birth Of The Cruel","Slipknot","We Are Not Your Kind",275,"2019-08-09"],[38,"Nero Forte","Slipknot","We Are Not Your Kind",315,"2019-08-09"],[39,"Critical Darling","Slipknot","We Are Not Your Kind",385,"2019-08-09"],[40,"Red Flag","Slipknot","We Are Not Your Kind",251,"2019-08-09"],[41,"Orphan","Slipknot","We Are Not Your Kind",361,"2019-08-09"],[42,"Solway Firth","Slipknot","We Are Not Your Kind",355,"2019-08-09"],[43,"B.Y.O.B.","System Of A Down","Mezmerize",255,"2005-05-17"],[44,"I-E-A-I-A-I-O","System Of A Down","Steal This Album!",188,"2002-11-26"],[45,"Sugar","System Of A Down","System Of A Down",153,"1998-01-01"],[46,"Spiders","System Of A Down","System Of A Down",215,"1998-01-01"],[47,"Toxicity","System Of A Down","Toxicity",218,"2001-09-04"],[48,"Aerials","System Of A Down","Toxicity",235,"2001-09-04"],[49,"Walk","Pantera","Vulgar Display of Power",315,"1992-01-01"],[50,"We’ll Be Back","Megadeth","The Sick, the Dying... and the Dead!",269,"2022-09-02"],[51,"The Trooper - 2015 Remaster","Iron Maiden","Piece of Mind",252,"1983-01-01"],[52,"Nightmare","Avenged Sevenfold","Nightmare",374,"2010-07-25"],[53,"Buried Alive","Avenged Sevenfold","Nightmare",404,"2010-07-25"],[54,"Walk","Avenged Sevenfold","Diamonds in the Rough",321,"2007-07-10"],[55,"This Means War","Avenged Sevenfold","Hail to the King",369,"2013-08-20"],[56,"Hail to the King","Avenged Sevenfold","Hail to the King",305,"2013-08-20"],[57,"Roots Bloody Roots","Sepultura","Roots",212,"1996-02-20"],[58,"Refuse / Resist","Sepultura","Chaos A.D.",199,"1993-09-02"],[59,"Ratamahatta","Sepultura","Roots",270,"1996-02-20"],[60,"The Number of the Beast - 2015 Remaster","Iron Maiden","The Number of the Beast",290,"1982-01-01"],[61,"2 Minutes to Midnight - 2015 Remaster","Iron Maiden","Powerslave",363,"1984-01-01"],[62,"Teutonic Terror","Accept","Blood of the Nations",313,"2010-08-20"],[63,"Delusions of Saviour","Slayer","Repentless",115,"2015-09-11"],[64,"Painkiller","Judas Priest","Painkiller",365,"1990-09-26"],[65,"Territory","Sepultura","Chaos A.D.",287,"1993-09-02"],[66,"The Beautiful People","Marilyn Manson","Antichrist Superstar",218,"1996-01-01"],[67,"Just One Fix","Sepultura","Kairos",211,"2011-06-24"],[68,"Breed Apart","Sepultura","Roots",241,"1996-02-20"],[69,"Skeletons Of Society","Slayer","Seasons in the Abyss",280,"1990-10-09"],[70,"Memento Mori","Lamb of God","Omens",348,"2020-06-19"],[71,"Voice of the Soul","Death","The Sound of Perseverance",223,"1998-01-01"],[72,"Suite-Pee","System Of A Down","System Of A Down",151,"1998-01-01"],[73,"Pulse of the Maggots","Slipknot","Vol. 3: (The Subliminal Verses)",259,"2004-01-01"],[74,"Bounce","System Of A Down","Toxicity",114,"2001-09-04"],[75,"Custer","Slipknot",".5: The Gray Chapter",254,"2014-10-15"],[76,"Purity","Slipknot","Slipknot",265,"2009-09-09"],[77,"All Hope Is Gone","Slipknot","All Hope Is Gone",284,"2008-08-22"],[78,"Interloper - Demo","Slipknot","Slipknot (10th Anniversary Edition)",139,"2009-09-09"],[79,"Vermilion","Slipknot","Vol. 3: (The Subliminal Verses)",316,"2004-01-01"],[80,"Hive Mind","Slipknot","The End, So Far",315,"2022-09-30"],[81,"Falling Away from Me","Korn","Issues",270,"1999-11-09"],[82,"Got the Life","Korn","Follow the Leader",225,"1998-08-18"],[83,"Warranty","Slipknot","The End, So Far",231,"2022-09-30"],[84,"Spectrum","Sepultura","Kairos",241,"2011-06-24"],[85,"Orgasmatron","Sepultura","Arise (Remastered)",254,"1991-03-20"],[86,"Arise","Sepultura","Arise",198,"1991-03-20"],[87,"Kairos","Sepultura","Kairos",215,"2011-06-24"],[88,"Born Strong","Sepultura","Kairos",278,"2011-06-24"],[89,"Structure Violence Azzes","Sepultura","Kairos",337,"2011-06-24"],[90,"Machine Messiah","Sepultura","Machine Messiah",354,"2017-01-13"],[91,"Fear of the Dark - 2015 Remaster","Iron Maiden","Fear of the Dark",438,"1992-01-01"],[92,"Spit","Sepultura","Roots",165,"1996-02-20"],[93,"Dictatorshit","Sepultura","Roots",84,"1996-02-20"],[94,"Carry On","Avenged Sevenfold","Black Ops II (Soundtrack)",255,"2012-09-24"],[95,"Diluted","Slipknot","Slipknot",203,"1999-01-01"],[96,"Liberate","Slipknot","Slipknot",184,"1999-01-01"],[97,"Aces High - 2015 Remaster","Iron Maiden","Powerslave",271,"1984-01-01"],[98,"Alexander the Great (356-323 B.C.) - 2015 Remaster","Iron Maiden","Somewhere in Time",517,"1986-01-01"],[99,"Children of the Damned - 2015 Remaster","Iron Maiden","The Number of the Beast",275,"1982-01-01"],[100,"Rime of the Ancient Mariner - 2015 Remaster","Iron Maiden","Powerslave",818,"1984-01-01"],[101,"The Evil That Men Do - 2015 Remaster","Iron Maiden","Seventh Son of a Seventh Son",274,"1988-01-01"],[102,"Opium of the People","Slipknot","Vol. 3: (The Subliminal Verses)",192,"2004-01-01"],[103,"Dusted","Sepultura","Roots",243,"1996-02-20"],[104,"The Clairvoyant - 2015 Remaster","Iron Maiden","Seventh Son of a Seventh Son",267,"1988-01-01"],[105,"Hallowed Be Thy Name - 2015 Remaster","Iron Maiden","The Number of the Beast",431,"1982-01-01"],[106,"Tornado Of Souls - 2004 Remix","Megadeth","Rust in Peace",319,"1990-10-04"],[107,"Silent Scream","Slayer","South of Heaven",186,"1988-01-01"],[108,"Spit Out The Bone","Metallica","Hardwired... to Self-Destruct",429,"2016-11-18"],[109,"Hangar 18 - 2004 Remix","Megadeth","Rust in Peace",311,"1990-10-04"],[110,"Surfacing","Slipknot","Slipknot",218,"1999-01-01"],[111,"No Life","Slipknot","Slipknot",167,"1999-01-01"],[112,"Inherit the Earth","Burn The Priest","Burn the Priest",209,"2018-05-18"],[113,"Honey Bucket","Burn The Priest","Burn the Priest",163,"2018-05-18"],[114,"Jesus Built My Hotrod","Burn The Priest","Burn the Priest",373,"2018-05-18"],[115,"We Gotta Know","Burn The Priest","Burn the Priest",207,"2018-05-18"],[116,"Laid to Rest","Lamb of God","Ashes of the Wake",230,"2004-08-26"],[117,"Kerosene","Burn The Priest","Burn the Priest",372,"2018-05-18"],[118,"Sphinx","Gojira","Fortitude",240,"2021-04-30"],[119,"Filth Upon Filth","Soulfly","Totem",173,"2022-08-05"],[120,"Flying Whales","Gojira","From Mars to Sirius",464,"2005-09-27"],[121,"If You Want Peace... Prepare For War","Children Of Bodom","Are You Dead Yet?",237,"2005-01-01"],[122,"Bastards Of Bodom","Children Of Bodom","Are You Dead Yet?",207,"2005-01-01"],[123,"Needled 24 / 7","Children Of Bodom","Hate Crew Deathroll",248,"2004-01-01"],[124,"Under Grass and Clover","Children Of Bodom","Hexed",213,"2019-03-08"],[125,"The Nameless","Slipknot","Vol. 3: (The Subliminal Verses)",268,"2004-01-01"],[126,"Gematria (The Killing Name)","Slipknot","All Hope Is Gone",361,"2008-08-22"],[127,"Sulfur","Slipknot","All Hope Is Gone",277,"2008-08-22"],[128,"Vendetta","Slipknot","All Hope Is Gone",315,"2008-08-22"],[129,"This Cold Black","Slipknot","All Hope Is Gone",280,"2008-08-22"],[130,"Psychosocial","Slipknot","All Hope Is Gone",283,"2008-08-22"],[131,"Unstable","Adema","Unstable",192,"2003-06-11"],[132,"Hallowed Be Thy Name","Machine Head","The Blackening",447,"2007-03-27"],[133,"Animal I Have Become","Three Days Grace","One-X",231,"2006-06-25"],[134,"Nomad","Sepultura","Chaos A.D.",299,"1993-09-02"],[135,"Freak On a Leash","Korn","Follow the Leader",255,"1998-08-18"],[136,"512","Lamb of God","VII: Sturm und Drang",284,"2015-07-24"],[137,"Altered State","Sepultura","Arise",394,"1991-03-20"],[138,"Harvester Of Sorrow","Metallica","...And Justice for All",345,"1988-08-25"],[139,"Under the Waste Command","Municipal Waste","Slime and Punishment",110,"2017-06-23"],[140,"Thrasher's Abattoir","Carcass","Surgical Steel",110,"2013-09-13"],[141,"Blind","Korn","Korn",258,"1994-10-11"],[142,"Snuff","Slipknot","All Hope Is Gone",276,"2008-08-22"],[143,"Halo","Machine Head","The Blackening",543,"2007-03-27"],[144,"Amazonia","Gojira","Fortitude",300,"2021-04-30"],[145,"1985","Carcass","Surgical Steel",75,"2013-09-13"],[146,"Let Go","Illdisposed","The Prestige",68,"2008-03-28"],[147,"The Heaviest Matter of the Universe","Gojira","From Mars to Sirius",237,"2005-09-27"],[148,"(sic)","Slipknot","Slipknot",199,"1999-01-01"],[149,"Eyeless","Slipknot","Slipknot",236,"1999-01-01"],[150,"Wait and Bleed","Slipknot","Slipknot",147,"1999-01-01"],[151,"Silvera","Gojira","Magma",212,"2016-06-17"],[152,"L'enfant sauvage","Gojira","L'Enfant Sauvage",257,"2012-06-26"],[153,"Born in Winter","Gojira","L'Enfant Sauvage",231,"2012-06-26"],[154,"Another World","Gojira","Another World",264,"2021-04-30"],[155,"Oroborus","Gojira","The Way of All Flesh",321,"2008-10-06"],[156,"Born For One Thing","Gojira","Fortitude",260,"2021-04-30"],[157,"Holy Wars...The Punishment Due - 2004 Remix","Megadeth","Rust in Peace",392,"1990-10-04"],[158,"Not Ready to Die - From \"Call of the Dead\"","Avenged Sevenfold","Not Ready to Die",425,"2011-05-02"],[159,"Bloodline","Slayer","God Hates Us All",216,"2001-01-01"],[160,"Born Stubborn","Sepultura","Roots",247,"1996-02-20"],[161,"Losfer Words (Big 'Orra) - 2015 Remaster","Iron Maiden","Powerslave",255,"1984-01-01"],[162,"The Shooting Star","Gojira","Magma",342,"2016-06-17"],[163,"Prison Song","System Of A Down","Toxicity",201,"2001-09-04"],[164,"Cowboys from Hell","Pantera","Cowboys from Hell",243,"1990-07-20"],[165,"Nookie","Limp Bizkit","Significant Other",289,"1999-01-01"],[166,"Vandals Nest","Sepultura","Machine Messiah",167,"2017-01-13"],[167,"Redneck","Lamb of God","Sacrament",220,"2006-08-22"],[168,"Zero Tolerance","Death","Symbolic",288,"1995-03-19"],[169,"Biotech Is Godzilla","Sepultura","Chaos A.D.",112,"1993-09-02"],[170,"This Love","Pantera","Vulgar Display of Power",393,"1992-01-01"],[171,"Sympathy","Pissing Razors","Where Death Lives",203,"1999-04-20"],[172,"Domination","Pantera","Cowboys from Hell",305,"1990-07-20"],[173,"Axis Rot","Burn The Priest","Burn the Priest",184,"2018-05-18"],[174,"Mouth for War","Pantera","Vulgar Display of Power",237,"1992-01-01"],[175,"Sun Doesn't Rise","Mushroomhead","XIII",193,"2003-01-01"],[176,"Straighthate","Sepultura","Roots",321,"1996-02-20"],[177,"The Day That Never Comes","Metallica","Death Magnetic",476,"2008-01-01"],[178,"Shepherd of Fire","Avenged Sevenfold","Hail to the King",323,"2013-08-20"],[179,"Creeping Death - Remastered","Metallica","Ride the Lightning",395,"1984-07-27"],[180,"Dystopia","Megadeth","Dystopia",299,"2016-01-22"],[181,"Down for Life","Testament","The Gathering",203,"1999-06-08"],[182,"Repentless","Slayer","Repentless",199,"2015-09-11"],[183,"Dead Embryonic Cells","Sepultura","Arise",292,"1991-03-20"],[184,"Dig","Mudvayne","L.D. 50",162,"2000-08-13"],[185,"Orion","Metallica","Master of Puppets",507,"1986-03-03"],[186,"Disposable Heroes","Metallica","Master of Puppets",496,"1986-03-03"],[187,"Ride The Lightning - Remastered","Metallica","Ride the Lightning",396,"1984-07-27"],[188,"Welcome","Slipknot","Vol. 3: (The Subliminal Verses)",195,"2004-01-01"],[189,"Slaughtered","Pantera","Far Beyond Driven",237,"1994-01-01"],[190,"Blacklist","Exodus","Tempo of the Damned",376,"2004-02-02"],[191,"I'm Broken","Pantera","Far Beyond Driven",264,"1994-01-01"],[192,"Brotherhood of the Snake","Testament","Brotherhood of the Snake",253,"2016-10-28"],[193,"Get This","Slipknot","Slipknot",123,"2009-09-09"],[194,"Ten Ton Hammer","Machine Head","The More Things Change...",254,"1997-01-01"],[195,"A New Level - 2012 Remaster","Pantera","Vulgar Display of Power",237,"1992-01-01"],[196,"Backbone","Gojira","From Mars to Sirius",258,"2005-09-27"],[197,"Descending","Lamb of God","Sacrament",215,"2006-08-22"],[198,"The Pale King","Testament","Brotherhood of the Snake",291,"2016-10-28"],[199,"Hourglass","Lamb of God","Ashes of the Wake",240,"2004-08-26"],[200,"Bat Country","Avenged Sevenfold","City of Evil",311,"2005-06-06"],[201,"Forget to Remember - From Saw II - Original Soundtrack","Mudvayne","Lost and Found",215,"2005-01-01"],[202,"Strife","Trivium","Vengeance Falls",269,"2013-10-08"],[203,"Caught Somewhere in Time - 2015 Remaster","Iron Maiden","Somewhere in Time",447,"1986-01-01"],[204,"Stranger in a Strange Land - 2015 Remaster","Iron Maiden","Somewhere in Time",346,"1986-01-01"],[205,"Given Up","Linkin Park","Minutes to Midnight",189,"2007-05-14"],[206,"Symbolic","Death","Symbolic",392,"1995-03-19"],[207,"Spirit Crusher","Death","The Sound of Perseverance",407,"1998-01-01"],[208,"Flesh and the Power It Holds","Death","The Sound of Perseverance",506,"1998-01-01"],[209,"Lack of Comprehension","Death","Human",223,"2011-06-21"],[210,"Trapped In A Corner","Death","Individual Thought Patterns",254,"2011-10-25"],[211,"Crystal Mountain","Death","Symbolic",307,"1995-03-19"],[212,"Almost Easy","Avenged Sevenfold","Avenged Sevenfold",234,"2007-10-26"],[213,"Fight Fire With Fire - Remastered","Metallica","Ride the Lightning",284,"1984-07-27"],[214,"Walk with Me In Hell","Lamb of God","Sacrament",311,"2006-08-22"],[215,"Dead Memories","Slipknot","All Hope Is Gone",268,"2008-08-22"],[216,"Only One","Slipknot","Slipknot",144,"2009-09-09"],[217,"5 Minutes Alone","Pantera","Far Beyond Driven",347,"1994-01-01"],[218,"Propaganda","Sepultura","Chaos A.D.",213,"1993-09-02"],[219,"Demonic Refusal","Testament","Demonic",321,"1997-06-09"],[220,"Skeptic","Slipknot",".5: The Gray Chapter",286,"2014-10-15"],[221,"Nomadic","Slipknot",".5: The Gray Chapter",258,"2014-10-15"],[222,"Love","Gojira","Terra Incognita",259,"2001-03-19"],[223,"Remembrance","Gojira","The Link",275,"2003-04-18"],[224,"Mouth of Kala","Gojira","L'Enfant Sauvage",351,"2012-06-26"],[225,"The art of dying","Gojira","The Way of All Flesh",594,"2008-10-13"],[226,"My Own Summer (Shove It)","Deftones","Around the Fur",214,"1997-10-27"],[227,"Grace","Lamb of God","Wrath",236,"2009-02-23"],[228,"Be Still and Know","Machine Head","Unto the Locust",343,"2011-09-21"],[229,"Stranded","Gojira","Magma",269,"2016-06-17"],[230,"Davidian","Machine Head","Burn My Eyes",296,"1994-08-08"],[231,"Set To Fail","Lamb of God","Wrath",226,"2009-02-23"],[232,"Amen","Sepultura","Chaos A.D.",267,"1993-09-02"],[233,"Kaiowas","Sepultura","Chaos A.D.",223,"1993-09-02"],[234,"Manifest","Sepultura","Chaos A.D.",289,"1993-09-02"],[235,"Murder","Sepultura","Arise",206,"1991-03-20"],[236,"Under Siege (Regnum Irae)","Sepultura","Arise",294,"1991-03-20"],[237,"Natural Born Killer","Avenged Sevenfold","Nightmare",315,"2010-07-25"],[238,"Contractor","Lamb of God","Wrath",202,"2009-02-23"],[239,"Deathamphetamine","Exodus","Shovel Headed Kill Machine",511,"2005-10-04"],[240,"Empty Words","Death","Symbolic",382,"1995-03-19"],[241,"Funeral Hymn","Exodus","The Atrocity Exhibition... Exhibit A",517,"2007-10-26"],[242,"Salt the Wound","Exodus","Blood In, Blood Out",264,"2014-10-10"],[243,"Riot Act","Exodus","The Atrocity Exhibition... Exhibit A",217,"2007-10-26"],[244,"Persona Non Grata","Exodus","Persona Non Grata",450,"2021-11-19"],[245,"The Beatings Will Continue (Until Morale Improves)","Exodus","Persona Non Grata",181,"2021-11-19"],[246,"Blood in Blood Out","Exodus","Blood In, Blood Out",222,"2014-10-10"],[247,"Save Me","Avenged Sevenfold","Nightmare",656,"2010-07-25"],[248,"Bedlam 1-2-3","Exodus","The Atrocity Exhibition... Exhibit A",479,"2007-10-26"],[249,"Culling the Herd","Exodus","Tempo of the Damned",367,"2004-02-02"],[250,"Impaler","Exodus","Tempo of the Damned",324,"2004-02-02"],[251,"My Last Nerve","Exodus","Blood In, Blood Out",370,"2014-10-10"],[252,"Forward March","Exodus","Tempo of the Damned",458,"2004-02-02"],[253,"War Is My Shepherd","Exodus","Tempo of the Damned",267,"2004-02-02"],[254,"Esoteric Surgery","Gojira","The Way of All Flesh",344,"2008-10-06"],[255,"Scavenger of Human Sorrow","Death","The Sound of Perseverance",416,"1998-01-01"],[256,"Painkiller","Death","The Sound of Perseverance",362,"1998-01-01"],[257,"Food for the Worms","Exodus","Blood In, Blood Out",382,"2014-10-10"],[258,"Psycho Holiday","Pantera","Cowboys from Hell",319,"1990-07-20"],[259,"In Human Form","Death","Individual Thought Patterns",237,"2011-10-25"],[260,"Wrapped in the Arms of Rage","Exodus","Blood In, Blood Out",270,"2014-10-10"],[261,"Honor Killings","Exodus","Blood In, Blood Out",342,"2014-10-10"],[262,"Clone","Gojira","The Link",297,"2009-01-01"],[263,"March of the Sycophants","Exodus","Exhibit B: The Human Condition",405,"2010-05-07"],[264,"The Cell","Gojira","Magma",197,"2016-06-17"],[265,"Children of a Worthless God","Exodus","The Atrocity Exhibition... Exhibit A",504,"2007-10-26"],[266,"Love?","Strapping Young Lad","Alien",293,"2005-01-01"],[267,"Jealousy","Death","Individual Thought Patterns",221,"2011-10-25"],[268,"44 Magnum Opus","Exodus","Shovel Headed Kill Machine",416,"2005-10-04"],[269,"As It Was, as It Soon Shall Be","Exodus","The Atrocity Exhibition... Exhibit A",315,"2007-10-26"],[270,"Low Lands","Gojira","Magma",363,"2016-06-17"],[271,"Explosia","Gojira","L'Enfant Sauvage",399,"2012-06-26"],[272,"Creeping Death","Stone Sour","Straight Outta Burbank...",395,"2015-04-28"],[273,"Tempo of the Damned","Exodus","Tempo of the Damned",261,"2004-02-02"],[274,"I Am Abomination","Exodus","Shovel Headed Kill Machine",204,"2005-10-04"],[275,"Space Time","Gojira","The Link",320,"2009-01-01"],[276,"Shroud of Urine","Exodus","Tempo of the Damned",291,"2004-02-02"],[277,"Afterlife","Avenged Sevenfold","Avenged Sevenfold",352,"2007-10-26"],[278,"Burn, Hollywood, Burn","Exodus","Exhibit B: The Human Condition",245,"2010-05-07"],[279,"Bite the Pain","Death","The Sound of Perseverance",269,"1998-01-01"],[280,"Ruin","Lamb of God","As the Palaces Burn",234,"2003-05-05"],[281,"Downfall","Exodus","Exhibit B: The Human Condition",381,"2010-05-07"],[282,"Unholy Confessions","Avenged Sevenfold","Waking the Fallen",283,"2003-08-26"],[283,"Beast and the Harlot","Avenged Sevenfold","City of Evil",343,"2005-06-06"],[284,"Burn It Down","Avenged Sevenfold","City of Evil",298,"2005-06-06"],[285,"Blinded in Chains","Avenged Sevenfold","City of Evil",394,"2005-06-06"],[286,"Trashed and Scattered","Avenged Sevenfold","City of Evil",351,"2005-06-06"],[287,"I Won't See You Tonight Part 2","Avenged Sevenfold","Waking the Fallen",284,"2003-08-26"],[288,"Toxic Garbage Island","Gojira","The Way of All Flesh",246,"2008-10-13"],[289,"Vacuity","Gojira","The Way of All Flesh",291,"2008-10-13"],[290,"Lizard Skin","Gojira","Terra Incognita",270,"2001-03-19"],[291,"Imperium","Machine Head","Through the Ashes of Empires",401,"2003-12-16"],[292,"Now You've Got Something to Die For","Lamb of God","Ashes of the Wake",219,"2004-08-26"],[293,"Omertá","Lamb of God","Ashes of the Wake",286,"2004-08-26"],[294,"Nothing Remains","Chimaira","Chimaira",336,"2005-08-01"],[295,"Locust","Machine Head","Unto the Locust",456,"2011-09-21"],[296,"Power Trip","Chimaira","The Impossibility of Reason",166,"2003-05-05"],[297,"11th Hour","Lamb of God","As the Palaces Burn",224,"2003-05-06"],[298,"A Devil In God's Country","Lamb of God","As the Palaces Burn",194,"2003-05-06"],[299,"In Defense Of Our Good Name","Lamb of God","As the Palaces Burn",250,"2003-05-06"],[300,"Vigil","Lamb of God","As the Palaces Burn",283,"2003-05-06"],[301,"The Faded Line","Lamb of God","Ashes of the Wake",278,"2004-08-26"],[302,"Blood Of The Scribe","Lamb of God","Ashes of the Wake",263,"2004-08-26"],[303,"One Gun","Lamb of God","Ashes of the Wake",239,"2004-08-26"],[304,"Break You","Lamb of God","Ashes of the Wake",215,"2004-08-26"],[305,"What I've Become","Lamb of God","Ashes of the Wake",208,"2004-08-26"],[306,"Ashes of the Wake","Lamb of God","Ashes of the Wake",345,"2004-08-26"],[307,"Remorse Is for the Dead","Lamb of God","Ashes of the Wake",340,"2004-08-26"],[308,"Pathetic","Lamb of God","Sacrament",271,"2006-08-22"],[309,"Foot to the Throat","Lamb of God","Sacrament",193,"2006-08-22"],[310,"Blacken the Cursed Sun","Lamb of God","Sacrament",328,"2006-08-22"],[311,"Forgotten (Lost Angels)","Lamb of God","Sacrament",185,"2006-08-22"],[312,"Requiem","Lamb of God","Sacrament",251,"2006-08-22"],[313,"More Time to Kill","Lamb of God","Sacrament",217,"2006-08-22"],[314,"Beating On Death's Door","Lamb of God","Sacrament",307,"2006-08-22"],[315,"The Passing","Lamb of God","Wrath",120,"2009-02-23"],[316,"In Your Words","Lamb of God","Wrath",324,"2009-02-23"],[317,"Without Judgement","Death","Symbolic",328,"1995-03-19"],[318,"The Garden of Bleeding","Exodus","The Atrocity Exhibition... Exhibit A",349,"2007-10-26"],[319,"R.E.M.F.","Exodus","Persona Non Grata",262,"2021-11-19"],[320,"Iconoclasm","Exodus","The Atrocity Exhibition... Exhibit A",474,"2007-10-26"],[321,"Collateral Damage","Exodus","Blood In, Blood Out",327,"2014-10-10"],[322,"Condemn The Hive","Lamb of God","Wrath",221,"2009-02-23"],[323,"Shoulder Of Your God - Bonus Track","Lamb of God","Wrath",355,"2009-02-23"],[324,"We Die Alone - Bonus Track","Lamb of God","Wrath",278,"2009-02-23"],[325,"Reclamation","Lamb of God","Wrath",426,"2009-02-23"],[326,"Choke Sermon","Lamb of God","Wrath",200,"2009-02-23"],[327,"Everything To Nothing","Lamb of God","Wrath",230,"2009-02-23"],[328,"Dead Seeds","Lamb of God","Wrath",221,"2009-02-23"],[329,"Broken Hands","Lamb of God","Wrath",233,"2009-02-23"],[330,"Desolation","Lamb of God","Resolution",234,"2012-01-24"],[331,"Scar Spangled Banner","Exodus","Tempo of the Damned",401,"2004-02-02"],[332,"Liquid Fire","Gojira","L'Enfant Sauvage",257,"2012-06-26"],[333,"Pure Hatred","Chimaira","The Impossibility of Reason",256,"2003-05-05"],[334,"Resurrection","Chimaira","Resurrection",277,"2007-03-02"],[335,"Salvation","Chimaira","Chimaira",320,"2005-08-01"],[336,"Cleansation","Chimaira","The Impossibility of Reason",247,"2003-05-05"],[337,"Sacred Serenity","Death","Symbolic",267,"1995-03-19"],[338,"Fucking Hostile","Pantera","Vulgar Display of Power",168,"1992-01-01"],[339,"Rise","Pantera","Vulgar Display of Power",276,"1992-01-01"],[340,"No Good (Attack the Radical)","Pantera","Vulgar Display of Power",289,"1992-01-01"],[341,"Scene Two: I. Overture 1928","Dream Theater","Metropolis Pt. 2: Scenes from a Memory",217,"1999-01-01"],[342,"Slipping Into Madness","Exodus","Persona Non Grata",333,"2021-11-19"],[343,"Heresy","Pantera","Cowboys from Hell",286,"1990-07-20"],[344,"Critical Acclaim","Avenged Sevenfold","Avenged Sevenfold",315,"2007-10-26"],[345,"Misanthrope","Death","Symbolic",303,"1995-03-19"],[346,"The Mirror","Dream Theater","Awake",405,"1994-10-03"],[347,"Resurrection Man","Lamb of God","Omens",299,"2020-06-19"],[348,"More Than Meets the Eye","Testament","The Formation of Damnation",273,"2008-04-25"],[349,"Death Blooms","Mudvayne","L.D. 50",291,"2000-08-13"],[350,"I Will Be Heard","Hatebreed","Perseverance",178,"2002-01-01"],[351,"Still Echoes","Lamb of God","VII: Sturm und Drang",262,"2015-07-24"],[352,"Ghost Walking","Lamb of God","Resolution",270,"2012-01-24"],[353,"The Killing Floor","Lamb of God","Omens",256,"2026-03-13"],[354,"Ditch","Lamb of God","Omens",217,"2022-10-07"],[355,"Poison Dream","Lamb of God, Jamey Jasta","Omens",297,"2020-06-19"],[356,"Hit The Wall","Lamb of God","Resolution",219,"2012-01-24"],[357,"COLD BLOOD","HEALTH, Lamb of God","DISCO4 :: PART II",326,"2022-04-08"],[358,"Blunt Force Blues","Lamb of God","Omens",251,"2026-03-13"]];
/* ---------------- data layer: the list lives in the browser, so imports/edits survive reloads ---------------- */
const STORE_KEY = "catalogo-musical:v1";
function readStore(){
  let s = null;
  try { s = JSON.parse(localStorage.getItem(STORE_KEY) || "null"); } catch (e) {}
  if (!s){ try { const w = JSON.parse(window.name || "null"); if (w && w.k === STORE_KEY) s = w.v; } catch (e) {} }
  return s && Array.isArray(s.rows) && s.rows.length ? s : null;
}
function writeStore(obj){
  let ok = false;
  try { localStorage.setItem(STORE_KEY, JSON.stringify(obj)); ok = true; } catch (e) {}
  try { window.name = JSON.stringify({k: STORE_KEY, v: obj}); ok = true; } catch (e) {}
  return ok;
}
function clearStore(){ try { localStorage.removeItem(STORE_KEY); } catch (e) {} try { window.name = ""; } catch (e) {} }
function setFlash(msg){ try { sessionStorage.setItem(STORE_KEY + ":flash", msg); } catch (e) {} }
function takeFlash(){ try { const m = sessionStorage.getItem(STORE_KEY + ":flash"); sessionStorage.removeItem(STORE_KEY + ":flash"); return m; } catch (e) { return null; } }
const STORE = readStore();
const RAW = STORE ? STORE.rows : DEFAULT_RAW;
const NI = "Não identificado";
const coll = new Intl.Collator("pt-BR", {sensitivity: "base", numeric: true});
/* numa faixa com vários artistas (feat., parceria) só o primeiro — o principal — conta nas estatísticas;
   splitArtistsAll devolve todos, só pra saber se a faixa é uma parceria */
const ARTIST_SEP = /\s*(?:,|&|\/|\bfeat\.?(?=\s)|\bft\.?(?=\s))\s*/i;
const splitArtistsAll = s => s.split(ARTIST_SEP).map(x => x.trim()).filter(Boolean);
const splitArtists = s => splitArtistsAll(s.toLowerCase()).slice(0, 1);
const splitArtistsRaw = s => splitArtistsAll(s).slice(0, 1);
/* gênero é do artista (não da faixa) no Spotify: um mapa nome-do-artista (minúsculo) → gêneros,
   guardado à parte da playlist porque vale pra qualquer lista. [] = pesquisado e sem gênero */
const GENRE_KEY = "catalogo-musical:genres";
const GENRES = (() => { try { return JSON.parse(localStorage.getItem(GENRE_KEY) || "null") || {}; } catch (e) { return {}; } })();
const saveGenres = () => { try { localStorage.setItem(GENRE_KEY, JSON.stringify(GENRES)); } catch (e) {} };
const hasGenre = k => Object.prototype.hasOwnProperty.call(GENRES, k) && Array.isArray(GENRES[k]);
function genresOf(artist){
  if (artist === NI) return [];
  const parts = splitArtists(artist), out = new Set();
  for (const p of parts){ if (!hasGenre(p)) return null; GENRES[p].forEach(g => out.add(g)); }   // null = falta pesquisar algum artista da faixa
  return [...out];
}
/* gênero "de reserva" da Apple (sem login, não gasta o limite do Spotify). Só pra exibir e calcular:
   a música continua "sem gênero" (t.gs) até buscar no Spotify — o gênero de lá é mais detalhado */
const AGENRE_KEY = "catalogo-musical:genres-apple";
const AGENRES = (() => { try { return JSON.parse(localStorage.getItem(AGENRE_KEY) || "null") || {}; } catch (e) { return {}; } })();
const saveAGenres = () => { try { localStorage.setItem(AGENRE_KEY, JSON.stringify(AGENRES)); } catch (e) {} };
const spotifyHas = p => hasGenre(p) && GENRES[p].length > 0;
// gênero que aparece: o do Spotify quando existe, senão o da Apple (por artista da faixa)
function shownGenres(artist){
  if (artist === NI) return [];
  const out = new Set(); let any = false;
  for (const p of splitArtists(artist)){
    const g = spotifyHas(p) ? GENRES[p] : Array.isArray(AGENRES[p]) ? AGENRES[p] : null;
    if (g){ any = true; g.forEach(x => out.add(x)); }
  }
  return any ? [...out] : null;
}
/* coluna 7 (opcional): dados extras que vêm de graça na resposta do Spotify —
   x explícita (0/1) · ty tipo do lançamento (album/single/compilation) · tn nº da faixa no álbum ·
   tt total de faixas do álbum · p popularidade 0–100 · aid IDs dos artistas */
const TYPE_PT = {album: "Álbum", single: "Single/EP", compilation: "Coletânea"};
// campos planos (pra tabelas e ordenação); null/"" = dado que não existe pra essa música
function extraProps(m, gs){
  const ok = !!(m && m.x !== undefined);
  return {genre: gs && gs.length ? gs.join(", ") : "", pop: ok && typeof m.p === "number" ? m.p : null, ex: ok ? m.x : null,
    ty: ok && m.ty || ""};
}
const T = RAW.map(([n, title, artist, album, sec, date, meta]) => {
  const a = (artist || "").trim() || NI, m = meta && typeof meta === "object" ? meta : null, gs = genresOf(a), ge = shownGenres(a);
  // gs = gênero do Spotify (null = falta buscar) · ge = gênero exibido/calculado (Spotify ou, na falta, Apple)
  return {n, title, artist: a, album: (album || "").trim() || NI,
    sec: sec, date: date || "", year: date ? +date.slice(0, 4) : NI, m, gs, ge, ...extraProps(m, ge)};
});
const ALL_BANDS = [...new Set(T.map(t => t.artist))].sort(niLast);
const ALL_ALBUMS = [...new Set(T.map(t => t.album))].sort(niLast);
const ALL_YEARS = [...new Set(T.map(t => t.year))].sort((a, b) => a === NI ? 1 : b === NI ? -1 : a - b);
function niLast(a, b){ return a === NI ? 1 : b === NI ? -1 : coll.compare(a, b); }
const bandAlbums = new Map(), albumBands = new Map();
for (const t of T){
  (bandAlbums.get(t.artist) || bandAlbums.set(t.artist, new Set()).get(t.artist)).add(t.album);
  (albumBands.get(t.album) || albumBands.set(t.album, new Set()).get(t.album)).add(t.artist);
}
const state = {bands: new Set(), albums: new Set(), genres: new Set()};
let spotifyUserDisplay = null;  // nome do usuário logado no Spotify (preenchido ao obter token)
const $ = s => document.querySelector(s);
const fmtInt = n => n.toLocaleString("pt-BR");
const pct = (a, b, d = 1) => (b ? (100 * a / b) : 0).toLocaleString("pt-BR", {minimumFractionDigits: d, maximumFractionDigits: d}) + "%";
function fmtDur(s){
  s = Math.round(s);
  const h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), x = s % 60;
  return h ? `${h}:${String(m).padStart(2, "0")}:${String(x).padStart(2, "0")}` : `${String(m).padStart(2, "0")}:${String(x).padStart(2, "0")}`;
}
function fmtLong(s){ const h = Math.floor(s / 3600), m = Math.round(s % 3600 / 60); return h ? `${h}h ${String(m).padStart(2, "0")}min` : `${m}min`; }
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"}[c]));
function groupBy(rows, key){ const m = new Map(); for (const r of rows){ const k = r[key]; (m.get(k) || m.set(k, []).get(k)).push(r); } return m; }
const sum = (a, f) => a.reduce((s, x) => s + f(x), 0);

function rows(useBand = true, useAlbum = true, useGenre = true){
  return T.filter(t => (!useBand || !state.bands.size || state.bands.has(t.artist)) &&
                       (!useAlbum || !state.albums.size || state.albums.has(t.album)) &&
                       (!useGenre || !state.genres.size || (t.ge && t.ge.some(g => state.genres.has(g)))));
}
const bandEnabled = b => !state.albums.size || [...bandAlbums.get(b)].some(a => state.albums.has(a));
const albumEnabled = a => !state.bands.size || [...albumBands.get(a)].some(b => state.bands.has(b));

$("#srcline").textContent = `${fmtInt(T.length)} faixas · ${ALL_BANDS.length} artistas · ${ALL_ALBUMS.length} álbuns`;

/* ---------------- tween numbers ---------------- */
const tweens = new WeakMap();
function tween(el, to, fmt, dur = 900){
  const from = tweens.has(el) ? tweens.get(el) : 0;
  tweens.set(el, to);
  if (matchMedia("(prefers-reduced-motion: reduce)").matches || from === to || document.hidden){ el.textContent = fmt(to); return; }
  const t0 = performance.now();
  const step = now => {
    const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 4);
    el.textContent = fmt(from + (to - from) * e);
    if (k < 1 && tweens.get(el) === to) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
  setTimeout(() => { if (tweens.get(el) === to) el.textContent = fmt(to); }, dur + 400);   // guarantees the final value even if frames are throttled
}

/* ---------------- tooltip ---------------- */
const tip = $("#tip");
function showTip(html, ev){ tip.innerHTML = html; tip.classList.add("on"); moveTip(ev); }
function moveTip(ev){
  const pad = 14, w = tip.offsetWidth, h = tip.offsetHeight;
  let x = ev.clientX + 16, y = ev.clientY + 16;
  if (x + w > innerWidth - pad) x = ev.clientX - w - 16;
  if (x < pad) x = pad;
  if (y + h > innerHeight - pad) y = ev.clientY - h - 16;
  if (y < pad) y = pad;
  tip.style.transform = ""; tip.style.left = x + "px"; tip.style.top = y + "px";
}
function hideTip(){ tip.classList.remove("on"); }
function bindTip(el, build){
  el.addEventListener("pointerenter", e => showTip(build(), e));
  el.addEventListener("pointermove", moveTip);
  el.addEventListener("pointerleave", hideTip);
}
const sbars = items => items.map(([label, right, frac]) =>
  `<div class="sb"><div class="l"><span>${esc(label)}</span><em>${right}</em></div><div class="bar"><i style="width:${Math.max(3, frac * 100)}%"></i></div></div>`).join("");

/* ---------------- toast ---------------- */
let toastT;
function toast(msg){ const t = $("#toast"); t.textContent = msg; t.classList.add("on"); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("on"), 3200); }

/* ---------------- multi-select filters ---------------- */
const chev = '<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
function buildMS(root, label, all, kind){
  root.innerHTML = `<button class="ms-btn" aria-haspopup="listbox" aria-expanded="false"><span>${label}</span><span class="cnt"></span>${chev}</button>
    <div class="pop" role="listbox" aria-multiselectable="true" aria-label="${label}">
      <div class="search"><input type="search" placeholder="Buscar ${label.toLowerCase()}…" aria-label="Buscar"></div>
      <div class="opts"></div><div class="foot"></div></div>`;
  const btn = root.querySelector(".ms-btn"), opts = root.querySelector(".opts"), input = root.querySelector("input");
  const els = new Map();
  for (const v of all){
    const b = document.createElement("button");
    b.className = "opt"; b.type = "button"; b.setAttribute("role", "option");
    b.innerHTML = `<span class="box"></span><span class="nm">${esc(v)}</span><span class="n"></span>`;
    b.addEventListener("click", () => toggle(kind, v));
    opts.appendChild(b); els.set(v, b);
  }
  btn.addEventListener("click", e => {
    e.stopPropagation();
    const open = !root.classList.contains("open");
    document.querySelectorAll(".ms.open").forEach(m => { m.classList.remove("open"); m.querySelector(".ms-btn").setAttribute("aria-expanded", "false"); });
    if (open){ root.classList.add("open"); btn.setAttribute("aria-expanded", "true"); setTimeout(() => input.focus({preventScroll: true}), 60); }
  });
  root.querySelector(".pop").addEventListener("click", e => e.stopPropagation());
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    for (const [v, b] of els) b.style.display = !q || v.toLowerCase().includes(q) ? "" : "none";
  });
  return {root, btn, els, foot: root.querySelector(".foot")};
}
document.addEventListener("click", () => document.querySelectorAll(".ms.open").forEach(m => { m.classList.remove("open"); m.querySelector(".ms-btn").setAttribute("aria-expanded", "false"); }));
document.addEventListener("keydown", e => { if (e.key === "Escape"){ document.body.click(); hideTip(); } });
const MS = {band: buildMS($("#ms-band"), "Banda/Artista", ALL_BANDS, "band"), album: buildMS($("#ms-album"), "Álbum", ALL_ALBUMS, "album")};

function toggle(kind, v){
  if (kind === "genre"){
    if (state.genres.has(v)) state.genres.delete(v); else state.genres.add(v);
    if (!rows().length){ state.genres.delete(v); toast("Nenhuma faixa desse gênero no recorte atual"); }
    render(); return;
  }
  const set = kind === "band" ? state.bands : state.albums;
  const enabled = kind === "band" ? bandEnabled(v) : albumEnabled(v);
  if (set.has(v)) set.delete(v);
  else if (enabled) set.add(v);
  else return;
  // never land on an empty screen: if a removal leaves no tracks, drop the now-orphaned picks of the other filter
  if (!rows().length){
    const other = kind === "band" ? state.albums : state.bands;
    const gone = [...other]; other.clear();
    const what = gone.length <= 2 ? gone.join(" e ") : `${gone.length} ${kind === "band" ? "álbuns" : "artistas"}`;
    toast(`${what} saí${gone.length > 1 ? "ram" : "u"} do filtro: sem faixas no novo recorte`);
  }
  render();
}
function clearAll(){ state.bands.clear(); state.albums.clear(); state.genres.clear(); render(); }
$("#clear").addEventListener("click", clearAll);
$("#empty-clear").addEventListener("click", clearAll);

function renderFilters(){
  const byAlbumOnly = groupBy(rows(false, true), "artist");
  const byBandOnly = groupBy(rows(true, false), "album");
  for (const [kind, ms, set, enabledFn, counts] of [["band", MS.band, state.bands, bandEnabled, byAlbumOnly], ["album", MS.album, state.albums, albumEnabled, byBandOnly]]){
    let avail = 0;
    for (const [v, b] of ms.els){
      const on = set.has(v), en = enabledFn(v);
      b.setAttribute("aria-checked", on); b.disabled = !on && !en;
      b.title = !on && !en ? (kind === "band" ? "Sem faixas nos álbuns escolhidos" : "Sem faixas das bandas escolhidas") : "";
      const c = (counts.get(v) || []).length;
      b.querySelector(".n").textContent = en || on ? c : "";
      b.style.order = on ? 0 : en ? 1 : 2;
      if (en) avail++;
    }
    const cnt = ms.btn.querySelector(".cnt"); cnt.textContent = set.size; cnt.classList.toggle("on", set.size > 0);
    ms.foot.textContent = `${avail} de ${ms.els.size} disponíveis${set.size ? ` · ${set.size} selecionado${set.size > 1 ? "s" : ""}` : ""}`;
  }
  const chips = $("#chips"); chips.innerHTML = "";
  for (const [kind, set, tag] of [["band", state.bands, "Banda"], ["album", state.albums, "Álbum"], ["genre", state.genres, "Gênero"]]){
    for (const v of set){
      const c = document.createElement("button");
      c.className = "chip"; c.type = "button"; c.setAttribute("aria-label", `Remover ${v}`);
      c.innerHTML = `<b>${tag}</b><span>${esc(v)}</span><span class="x">×</span>`;
      c.addEventListener("click", () => toggle(kind, v));
      chips.appendChild(c);
    }
  }
  $("#clear").classList.toggle("on", state.bands.size + state.albums.size + state.genres.size > 0);
}

/* ---------------- text fitting (never break inside a word) ---------------- */
const measurer = document.createElement("div");
measurer.style.cssText = "position:absolute;left:-9999px;top:0;visibility:hidden;word-break:normal;overflow-wrap:normal;hyphens:manual;line-height:1.05";
document.body.appendChild(measurer);
function fitsAt(text, size, font, weight, width, maxLines, ls = "-.03em"){
  measurer.style.font = `${weight} ${size}px ${font}`; measurer.style.width = width + "px"; measurer.style.letterSpacing = ls;
  measurer.textContent = text;
  return measurer.scrollWidth <= width + .5 && measurer.offsetHeight <= size * 1.05 * maxLines + 1;
}
function fitsOneLine(text, size, font, weight, width, ls){
  measurer.style.font = `${weight} ${size}px ${font}`; measurer.style.letterSpacing = ls;
  measurer.style.width = "auto"; measurer.style.whiteSpace = "nowrap";
  measurer.textContent = text;
  const ok = measurer.scrollWidth <= width + .5;
  measurer.style.whiteSpace = "";
  return ok;
}
function fitKpiText(el, text){
  const w = el.clientWidth, cs = getComputedStyle(el);
  const max = parseFloat(getComputedStyle(document.querySelector("#k-art")).fontSize);
  let size = max;
  while (size > 14 && !fitsAt(text, size, cs.fontFamily, cs.fontWeight, w, 2)) size -= 1;
  el.style.fontSize = size + "px"; el.textContent = text;
}

/* ---------------- KPIs ---------------- */
function modeOf(rows, key){
  const g = groupBy(rows.filter(r => r[key] !== NI), key);
  let best = null, max = -1, ties = 0;
  const keys = [...g.keys()].sort((a, b) => typeof a === "number" ? a - b : coll.compare(a, b));
  for (const k of keys){ const c = g.get(k).length; if (c > max){ max = c; best = k; ties = 0; } else if (c === max) ties++; }
  return {best, max, ties};
}
function renderKPIs(R){
  const total = R.length, secs = sum(R, r => r.sec);
  tween($("#k-total"), total, v => fmtInt(Math.round(v)));
  $("#k-total-sub").innerHTML = `<strong>${fmtLong(secs)}</strong> de música${state.bands.size + state.albums.size ? ` · ${pct(total, T.length)} do catálogo` : " em sequência"}`;
  const arts = new Set(R.filter(r => r.artist !== NI).map(r => r.artist)).size;
  tween($("#k-art"), arts, v => fmtInt(Math.round(v)));
  const albs = new Set(R.map(r => r.album)).size;
  $("#k-art-sub").textContent = `em ${albs} álbu${albs === 1 ? "m" : "ns"}`;
  const timed = R.filter(r => r.sec > 0);
  tween($("#k-avg"), timed.length ? sum(timed, r => r.sec) / timed.length : 0, fmtDur);
  const y = modeOf(R, "year");
  tween($("#k-year"), y.best || 0, v => y.best ? String(Math.round(v)) : "—");
  $("#k-year-sub").textContent = y.best ? `${y.max} faixa${y.max > 1 ? "s" : ""}${y.ties ? ` · empate com +${y.ties}` : ""}` : "";
  const a = modeOf(R, "artist");
  fitKpiText($("#k-top"), a.best || "—");
  $("#k-top-sub").textContent = a.best ? `${a.max} faixa${a.max > 1 ? "s" : ""} · ${pct(a.max, total)} do recorte${a.ties ? ` · empate com +${a.ties}` : ""}` : "";
}

/* ---------------- wave (surprise: every track as a stroke) ---------------- */
const BY_RELEASE = [...T].sort((a, b) => (a.date || "9999").localeCompare(b.date || "9999") || a.n - b.n);
const BY_PLAYLIST = [...T].sort((a, b) => a.n - b.n);
let WAVE = BY_PLAYLIST, waveMode = "playlist";
const wave = $("#wave");
(function buildWave(){
  const W = T.length, maxS = Math.max(...T.map(t => t.sec));
  wave.setAttribute("viewBox", `0 0 ${W} 100`);
  const ns = "http://www.w3.org/2000/svg";
  WAVE.forEach((t, i) => {
    const r = document.createElementNS(ns, "rect");
    const h = Math.max(6, 100 * t.sec / maxS);
    r.setAttribute("x", i + .18); r.setAttribute("width", .64); r.setAttribute("y", 100 - h); r.setAttribute("height", h); r.setAttribute("rx", .3);
    r.setAttribute("fill", `hsl(${158 - 10 * (t.sec / maxS)}, 70%, ${38 + 34 * (t.sec / maxS)}%)`);
    r.style.transform = "scaleY(0)"; r.style.transitionDelay = (i * 2.2) + "ms";
    wave.appendChild(r); t._w = r;
  });
  requestAnimationFrame(() => requestAnimationFrame(() => WAVE.forEach(t => t._w.style.transform = "")));
  setTimeout(() => WAVE.forEach(t => t._w.style.transitionDelay = ""), 2200);
  const yrs = T.filter(t => t.year !== NI).map(t => t.year);
  const setCaps = () => {
    $("#wave-cap").textContent = waveMode === "playlist" ? "A onda da playlist · cada traço é uma faixa, na ordem em que entrou" : "A onda do catálogo · cada traço é uma faixa, por data de lançamento";
    $("#wave-l").textContent = waveMode === "playlist" ? "#1 · primeira adição" : String(Math.min(...yrs));
    $("#wave-r").textContent = waveMode === "playlist" ? `#${T.length} · mais recente` : String(Math.max(...yrs));
  };
  setCaps();
  document.querySelectorAll(".wave-mode button").forEach(b => b.addEventListener("click", () => {
    waveMode = b.dataset.m;
    document.querySelectorAll(".wave-mode button").forEach(x => x.setAttribute("aria-pressed", x === b));
    WAVE = waveMode === "playlist" ? BY_PLAYLIST : BY_RELEASE;
    WAVE.forEach((t, i) => { t._w.style.x = (i + .18) + "px"; t._w.setAttribute("x", i + .18); });
    setCaps();
  }));
  let hot = null;
  const pick = e => {
    const b = wave.getBoundingClientRect();
    const i = Math.min(W - 1, Math.max(0, Math.floor((e.clientX - b.left) / b.width * W)));
    const t = WAVE[i];
    if (hot !== t){ hot && hot._w.classList.remove("hot"); t._w.classList.add("hot"); hot = t; }
    const mine = T.filter(x => x.artist === t.artist);
    showTip(`<div class="eyebrow">#${t.n} na playlist · lançada em ${t.date || NI}</div><div class="t">${esc(t.title)}</div>
      <div class="k"><span>${esc(t.artist)}</span></div><div class="k"><span>${esc(t.album)}</span></div><hr>
      <div class="k"><span>Duração</span><b>${fmtDur(t.sec)}</b></div>
      <div class="k"><span>Vs. média do catálogo</span><b>${t.sec >= AVG_ALL ? "+" : "−"}${fmtDur(Math.abs(t.sec - AVG_ALL))}</b></div>
      <div class="k"><span>Faixa do artista na playlist</span><b>${mine.filter(x => x.n <= t.n).length}ª de ${mine.length}</b></div>`, e);
  };
  wave.addEventListener("pointermove", pick);
  wave.addEventListener("pointerleave", () => { hot && hot._w.classList.remove("hot"); hot = null; hideTip(); });
})();
const AVG_ALL = sum(T, t => t.sec) / T.length;
function renderWave(R){
  const on = new Set(R);
  const all = state.bands.size + state.albums.size === 0;
  for (const t of T) t._w.classList.toggle("off", !all && !on.has(t));
}

/* ---------------- chart 1: years ---------------- */
const yearsEl = $("#years");
const YC = new Map();
for (const y of ALL_YEARS){
  const c = document.createElement("div");
  c.className = "yc";
  c.innerHTML = `<span class="v"></span><span class="b"></span><span class="y"></span>`;
  c.querySelector(".y").textContent = y === NI ? "n/i" : "’" + String(y).slice(2);
  bindTip(c, () => yearTip(y));
  yearsEl.appendChild(c); YC.set(y, c);
}
function yearTip(y){
  const R = rows().filter(r => r.year === y);
  if (!R.length) return `<div class="eyebrow">${y}</div><div class="t">Sem faixas neste recorte</div>`;
  const albs = [...groupBy(R, "album")].map(([a, rs]) => [a, rs.length, rs[0].artist]).sort((a, b) => b[1] - a[1] || coll.compare(a[0], b[0]));
  const top = albs.slice(0, 4);
  const rest = albs.length - top.length;
  return `<div class="eyebrow">${y === NI ? "Ano não identificado" : y}</div><div class="t">${R.length} faixa${R.length > 1 ? "s" : ""} · ${fmtLong(sum(R, r => r.sec))}</div>
    <div class="k"><span>${(na => `${na} artista${na > 1 ? "s" : ""}`)(new Set(R.map(r => r.artist)).size)} · ${albs.length} álbu${albs.length > 1 ? "ns" : "m"}</span></div><hr>
    <div class="eyebrow">Principais álbuns e peso no ano</div>
    ${sbars(top.map(([a, c, art]) => [a + " — " + art, `${c} · ${pct(c, R.length, 0)}`, c / R.length]))}
    ${rest > 0 ? `<div class="k" style="margin-top:8px"><span>+ ${rest} outro${rest > 1 ? "s" : ""} álbu${rest > 1 ? "ns" : "m"}</span></div>` : ""}`;
}
function renderYears(R){
  const g = groupBy(R, "year");
  const counts = ALL_YEARS.map(y => (g.get(y) || []).length);
  const max = Math.max(1, ...counts);
  const peak = Math.max(...counts);
  const H = Math.max(40, yearsEl.clientHeight - 22 - 46);   // room left for value + year labels
  ALL_YEARS.forEach((y, i) => {
    const c = YC.get(y), n = counts[i];
    c.classList.toggle("zero", !n);
    c.classList.toggle("peak", n === peak && n > 0);
    c.querySelector(".v").textContent = n || "";
    c.querySelector(".b").style.height = n ? `${Math.max(3, (n / max) * H)}px` : "";
  });
  layoutYears();
}
function layoutYears(){
  const colW = yearsEl.clientWidth / ALL_YEARS.length;
  yearsEl.classList.toggle("tight", colW < 12);
  // greedy: keep a year label only if there is room since the last one shown (labels never overlap)
  const need = Math.ceil(26 / Math.max(colW, 1));
  let last = -Infinity;
  ALL_YEARS.forEach((y, i) => {
    const lab = YC.get(y).querySelector(".y");
    const show = i - last >= need && (i + need <= ALL_YEARS.length - 1 || i === ALL_YEARS.length - 1 || need === 1);
    lab.style.visibility = show ? "visible" : "hidden";
    if (show) last = i;
  });
}

/* ---------------- chart 2: treemap ---------------- */
const treeEl = $("#tree");
const TILES = new Map();
/* o squarify clássico decide linha por linha e às vezes estica um bloco grande pra poupar os pequenos.
   Aqui testamos todos os jeitos de montar as 3 primeiras linhas (1 a 6 blocos cada, o resto no clássico)
   e ficamos com o que deixa os MAIORES mais quadrados (peso = área²). 216 tentativas, ~3ms. */
function squarify(items, W, H){
  if (!items.length || !W || !H) return squarifyRows(items, W, H, []);
  const asp = d => d.w && d.h ? Math.max(d.w / d.h, d.h / d.w) : 1;
  let best = null, bc = Infinity;
  for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) for (let c = 1; c <= 6; c++){
    const L = squarifyRows(items, W, H, [a, b, c]), k = sum(L, d => d.area * d.area * (asp(d) - 1));
    if (k < bc){ bc = k; best = L; }
    if (items.length <= a + b) break;   // as outras combinações dariam o mesmo resultado
  }
  return best;
}
function squarifyRows(items, W, H, forced){
  const total = sum(items, d => d.value), out = [];
  if (!total) return out;
  const scale = W * H / total;
  const list = items.map(d => ({...d, area: d.value * scale}));
  let rect = {x: 0, y: 0, w: W, h: H}, row = [], i = 0;
  const worst = (r, len) => { if (!r.length) return Infinity; const s = sum(r, d => d.area); let mx = 0, mn = Infinity; for (const d of r){ mx = Math.max(mx, d.area); mn = Math.min(mn, d.area); } return Math.max(len * len * mx / (s * s), s * s / (len * len * mn)); };
  const lay = r => {
    const s = sum(r, d => d.area);
    if (rect.w >= rect.h){ const cw = s / rect.h; let y = rect.y; for (const d of r){ const h = d.area / cw; out.push({...d, x: rect.x, y, w: cw, h}); y += h; } rect.x += cw; rect.w -= cw; }
    else { const rh = s / rect.w; let x = rect.x; for (const d of r){ const w = d.area / rh; out.push({...d, x, y: rect.y, w, h: rh}); x += w; } rect.y += rh; rect.h -= rh; }
  };
  for (const n of forced){ if (i >= list.length) break; lay(list.slice(i, i + n)); i += n; }
  while (i < list.length){
    const len = Math.min(rect.w, rect.h);
    if (!row.length || worst([...row, list[i]], len) <= worst(row, len)){ row.push(list[i]); i++; }
    else { lay(row); row = []; }
  }
  if (row.length) lay(row);
  return out;
}
function tileTip(b){
  const R = rows(false, true).filter(r => r.artist === b);
  const all = rows(false, true);
  const albs = [...groupBy(R, "album")].map(([a, rs]) => [a, rs.length]).sort((x, y) => y[1] - x[1]);
  const yrs = R.map(r => r.year).filter(y => y !== NI);
  return `<div class="eyebrow">Banda/artista</div><div class="t">${esc(b)}</div>
    <div class="k"><span>Faixas</span><b>${R.length} · ${pct(R.length, all.length)}</b></div>
    <div class="k"><span>Tempo somado</span><b>${fmtLong(sum(R, r => r.sec))}</b></div>
    <div class="k"><span>Na playlist</span><b>#${Math.min(...R.map(r => r.n))} → #${Math.max(...R.map(r => r.n))}</b></div>
    <div class="k"><span>Período</span><b>${yrs.length ? Math.min(...yrs) + (Math.max(...yrs) !== Math.min(...yrs) ? "–" + Math.max(...yrs) : "") : NI}</b></div><hr>
    <div class="eyebrow">Álbuns que mais contribuem</div>
    ${sbars(albs.slice(0, 3).map(([a, c]) => [a, `${c} faixa${c > 1 ? "s" : ""}`, c / R.length]))}`;
}
/* capas via iTunes Search (público, sem login). A Apple aceita ~20 pedidos/min, então a fila
   vai devagar e tudo fica guardado no navegador — inclusive "sem capa" (null), pra não repetir */
const COVER_KEY = "catalogo-musical:covers:v2";   // v2 descarta os "sem capa" gravados antes de existir o fallback por discografia
const COVER_MISS_TTL = 7 * 24 * 3600 * 1000;       // "sem capa" expira: a Apple pode passar a ter o álbum
const COVERS = (() => {
  try { localStorage.removeItem("catalogo-musical:covers"); } catch (e) {}
  let c = {}; try { c = JSON.parse(localStorage.getItem(COVER_KEY) || "null") || {}; } catch (e) {}
  for (const k in c) if (c[k] && typeof c[k] === "object" && Date.now() - c[k].miss > COVER_MISS_TTL) delete c[k];
  return c;
})();
const coverOf = k => typeof COVERS[k] === "string" ? COVERS[k] : null;
const saveCovers = () => { try { localStorage.setItem(COVER_KEY, JSON.stringify(COVERS)); } catch (e) {} };
const spotifyCover = imgs => { const u = imgs && imgs[0] && imgs[0].url; return u && /^https:\/\/[^"'()\s]+$/.test(u) ? u : null; };   // [0] é a maior (640px)
/* a capa do Spotify é exatamente a edição que a pessoa tem na playlist (a Apple às vezes só
   tem outra edição, com outra arte) — então ela sempre vence a da Apple */
function rememberSpotifyCovers(rows){
  let changed = false;
  for (const r of rows){
    if (!r.cover) continue;
    const key = ((r.artist || "").trim() || NI) + "|" + ((r.album || "").trim() || NI);
    if (COVERS[key] !== r.cover){ COVERS[key] = r.cover; changed = true; }
  }
  if (changed) saveCovers();
}
const coverQueue = [], coverWaiting = new Map();
let coverBusy = false;
const normC = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s*[([].*?[)\]]/g, "").replace(/\s+-\s+.*$/, "").replace(/[^a-z0-9]+/g, " ").trim();
function pickCover(results, artist, album){
  const a = normC(artist), al = normC(album);
  const sameArtist = results.filter(r => { const ra = normC(r.artistName || ""); return ra && (ra.includes(a) || a.includes(ra)); });
  const score = r => { const c = normC(r.collectionName || ""); return c === al ? 3 : c.includes(al) || al.includes(c) ? 2 : 0; };
  const best = sameArtist.map(r => [r, score(r)]).filter(x => x[1]).sort((x, y) => y[1] - x[1])[0];
  return best ? artUrl(best[0]) : null;
}
function artUrl(r){
  const url = r && r.artworkUrl100 ? r.artworkUrl100.replace(/\/\d+x\d+bb\./, "/600x600bb.") : null;
  return url && /^https:\/\/[^"'()\s]+$/.test(url) ? url : null;
}
const coverSleep = ms => new Promise(res => setTimeout(res, ms));
async function itunes(path){
  const r = await fetch("https://itunes.apple.com/" + path);
  if (!r.ok) throw new Error("itunes " + r.status);
  return (await r.json()).results || [];
}
/* 1) álbum exato; 2) álbum na discografia do artista (a busca simples não acha alguns álbuns
   que o lookup por artista acha); 3) o álbum mais popular dele — o lookup vem por popularidade,
   e pulamos coletâneas/ao vivo/singles pra cair num disco "de verdade" */
async function fetchCover(artist, album){
  const main = splitArtistsRaw(artist)[0];
  let url = pickCover(await itunes(`search?entity=album&limit=10&term=${encodeURIComponent(main + " " + album)}`), main, album);
  if (url) return url;
  await coverSleep(3200);
  const who = (await itunes(`search?entity=musicArtist&limit=5&term=${encodeURIComponent(main)}`)).find(r => normC(r.artistName || "") === normC(main));
  if (!who) return null;
  await coverSleep(3200);
  const albums = (await itunes(`lookup?id=${who.artistId}&entity=album&limit=50`)).filter(r => r.wrapperType === "collection");
  url = pickCover(albums, main, album);
  if (url) return url;
  const skip = /\b(best of|greatest|hits|collection|anthology|live|ao vivo|essentials?)\b|- (single|ep)$/i;
  return artUrl(albums.find(r => !skip.test(r.collectionName || "")) || albums[0]);
}
function getCover(artist, album, cb){
  const key = artist + "|" + album;
  if (key in COVERS){ cb(coverOf(key)); return; }
  if (!coverWaiting.has(key)){ coverWaiting.set(key, []); coverQueue.push([key, artist, album]); }
  coverWaiting.get(key).push(cb);
  pumpCovers();
}
/* gênero de reserva: 1 busca na Apple por artista que o Spotify ainda não classificou.
   Entra na mesma fila das capas (a Apple limita as duas juntas), depois delas */
function queueAppleGenres(){
  const need = new Map();
  for (const t of T){
    if (t.artist === NI) continue;
    const raw = splitArtistsRaw(t.artist);
    splitArtists(t.artist).forEach((p, i) => { if (!spotifyHas(p) && !Array.isArray(AGENRES[p]) && !need.has(p)) need.set(p, raw[i] || p); });
  }
  for (const [p, name] of need) coverQueue.push({job: async () => {
    const r = (await itunes(`search?entity=musicArtist&limit=5&term=${encodeURIComponent(name)}`)).find(x => normC(x.artistName || "") === normC(name));
    AGENRES[p] = r && r.primaryGenreName ? [r.primaryGenreName.toLowerCase()] : [];
    saveAGenres(); refreshShownGenres();
  }});
  if (need.size) pumpCovers();
}
let rgT;
function refreshShownGenres(){
  clearTimeout(rgT);
  rgT = setTimeout(() => { for (const t of T){ t.ge = shownGenres(t.artist); t.genre = t.ge && t.ge.length ? t.ge.join(", ") : ""; } render(); }, 1500);
}
async function pumpCovers(){
  if (coverBusy) return;
  coverBusy = true;
  let fails = 0;
  while (coverQueue.length){
    const item = coverQueue[0];
    if (item.job){
      try { await item.job(); } catch (e){ fails++; await coverSleep(Math.min(120000, 20000 * fails)); continue; }
      fails = 0; coverQueue.shift(); await coverSleep(3200); continue;
    }
    const [key, artist, album] = item;
    let url = null;
    try { url = await fetchCover(artist, album); }
    catch (e){
      /* quase sempre é o limite da Apple: não desiste do artista — espera cada vez mais e tenta de novo */
      fails++;
      await coverSleep(Math.min(120000, 20000 * fails));
      continue;
    }
    fails = 0;
    coverQueue.shift();
    if (!coverOf(key)){ COVERS[key] = url || {miss: Date.now()}; saveCovers(); }   // não sobrescreve uma capa do Spotify que chegou enquanto buscava
    (coverWaiting.get(key) || []).forEach(cb => cb(url));
    coverWaiting.delete(key);
    await coverSleep(3200);
  }
  coverBusy = false;
}
function topAlbumOf(rs){
  const c = new Map();
  for (const t of rs) if (t.album !== NI) c.set(t.album, (c.get(t.album) || 0) + 1);
  return [...c].sort((a, b) => b[1] - a[1])[0]?.[0] || null;
}

function renderTree(){
  const base = rows(false, true);
  const g = groupBy(base, "artist");
  const items = [...g].map(([k, rs]) => ({k, value: rs.length})).sort((a, b) => b.value - a.value || coll.compare(a.k, b.k));
  const W = treeEl.clientWidth, H = treeEl.clientHeight;
  const laid = squarify(items, W, H);
  const max = items.length ? items[0].value : 1;
  const hasSel = state.bands.size > 0;
  const seen = new Set();
  // largest font where the whole name fits on one line (0 = only the cover)
  const sizes = [17, 15, 13.5, 12, 11, 10];
  const labelSize = (name, w, h) => {
    for (const s of sizes){
      const roomForLine = h - 18 - Math.max(10, s - 2) * 1.2 - 4 >= s * 1.05;   // one name line above the count
      if (w - 20 > 0 && roomForLine && fitsOneLine(name, s, "Sora, sans-serif", 600, w - 20, "-.01em")) return s;
    }
    return 0;
  };
  const labelSizes = new Map(laid.map(d => [d.k, labelSize(d.k, Math.max(0, d.w - 4), Math.max(0, d.h - 4))]));
  // once a band loses its name, every band with the same or fewer songs loses it too (no labels "skipping" around)
  const hiddenMax = Math.max(0, ...laid.filter(d => !labelSizes.get(d.k)).map(d => d.value));
  for (const d of laid){
    seen.add(d.k);
    let el = TILES.get(d.k);
    const fresh = !el;
    if (fresh){
      el = document.createElement("div"); el.className = "tile";
      el.innerHTML = `<i class="cov"></i><div class="lbl"><strong></strong><span></span></div>`;
      el.querySelector("strong").textContent = d.k;
      el.addEventListener("click", () => { if (!treeEl.closest(".tree-big")) toggle("band", d.k); });   // em tela cheia é só pra ver
      bindTip(el, () => tileTip(d.k));
      el.style.opacity = "0";
      el.style.left = (d.x + d.w / 2) + "px"; el.style.top = (d.y + d.h / 2) + "px"; el.style.width = "0px"; el.style.height = "0px";
      treeEl.appendChild(el); TILES.set(d.k, el);
    }
    el.classList.remove("leaving");
    const g2 = treeEl.classList.contains("flush") ? 0 : 2, x = d.x + g2, y = d.y + g2, w = Math.max(0, d.w - 2 * g2), h = Math.max(0, d.h - 2 * g2);
    const k = Math.sqrt(d.value / max);
    const sel = state.bands.has(d.k);
    el.classList.toggle("sel", sel);
    el.classList.toggle("dim", hasSel && !sel);
    el.style.background = sel ? "linear-gradient(150deg,rgba(209,250,229,.4),rgba(52,211,153,.3))" :
      `linear-gradient(150deg, hsl(156,62%,${16 + 26 * k}%), hsl(162,70%,${10 + 18 * k}%))`;
    const lbl = el.querySelector(".lbl");
    lbl.style.color = sel ? "#ECFDF5" : "#ECFDF5";
    el.querySelector("span").textContent = d.value;
    const album = topAlbumOf(g.get(d.k));
    const covKey = album ? d.k + "|" + album : "";
    if (el.dataset.cov !== covKey){ el.dataset.cov = covKey; el.classList.remove("hascov"); }
    if (album) getCover(d.k, album, url => {
      if (el.dataset.cov !== covKey || !url) return;
      el.querySelector(".cov").style.backgroundImage = `url("${url}")`;
      el.classList.add("hascov");
    });
    const size = d.value > hiddenMax ? labelSizes.get(d.k) : 0;
    lbl.style.opacity = size ? 1 : 0;
    el.style.borderRadius = Math.max(3, Math.min(10, w / 4, h / 4)) + "px";
    const strongEl = lbl.querySelector("strong");
    strongEl.style.fontSize = size + "px";
    lbl.querySelector("span").style.fontSize = Math.max(10, size - 2) + "px";
    const apply = () => { el.style.opacity = ""; el.style.left = x + "px"; el.style.top = y + "px"; el.style.width = w + "px"; el.style.height = h + "px"; };
    fresh ? requestAnimationFrame(() => requestAnimationFrame(apply)) : apply();
  }
  for (const [k, el] of TILES) if (!seen.has(k)){ el.classList.add("leaving"); el.style.pointerEvents = "none"; }
  for (const [k, el] of TILES) if (seen.has(k)) el.style.pointerEvents = "";
}

/* o mesmo gráfico (não uma cópia) vai pro modal e volta ao fechar: capas, filtro e tooltip continuam valendo */
// ao trocar de lugar os blocos pulam direto pro tamanho novo (sem a transição, que ficava "voando" pela tela)
function moveTree(to){
  treeEl.classList.add("notrans");
  to.appendChild(treeEl);
  setTimeout(() => { renderTree(); setTimeout(() => treeEl.classList.remove("notrans"), 60); }, 30);
}
function openTreeBig(){
  const home = treeEl.parentElement;
  const body = document.createElement("div"); body.className = "tree-big";
  const md = openModal({title: "", body, size: "full",
    headerExtra: `<label class="chk"><input type="checkbox" class="tree-nonames"${treeEl.classList.contains("nolabels") ? " checked" : ""}><span>Esconder nomes</span></label>
      <label class="chk"><input type="checkbox" id="tree-flush"><span>Sem bordas</span></label>
      ${document.fullscreenEnabled ? `<button class="gbtn tree-exp" type="button" id="tree-super">Tela super cheia</button>` : ""}`,
    onClose: () => { hideTip(); treeEl.classList.remove("flush"); moveTree(home); }});   // "sem bordas" é só da tela cheia
  md.m.setAttribute("aria-label", "Músicas por banda/artista em tela cheia");
  md.q("#tree-flush").addEventListener("change", e => {
    treeEl.classList.add("notrans"); treeEl.classList.toggle("flush", e.target.checked); renderTree();
    setTimeout(() => treeEl.classList.remove("notrans"), 60);
  });
  /* "tela super cheia" = tela cheia do navegador (igual F11) só com o gráfico. Esc o próprio navegador
     trata; clicar em qualquer lugar também sai */
  const sup = md.q("#tree-super");
  if (sup) sup.addEventListener("click", () => { hideTip(); body.requestFullscreen().catch(() => toast("O navegador não deixou entrar em tela cheia.")); });
  body.addEventListener("click", () => { if (document.fullscreenElement === body) document.exitFullscreen(); });
  moveTree(body);
}
document.addEventListener("fullscreenchange", () => {
  if (!treeEl.closest(".tree-big")) return;
  hideTip(); moveTree(treeEl.parentElement);   // mesmo lugar, só recalcula pro tamanho novo (sem animação)
});
$("#tree-expand").addEventListener("click", openTreeBig);
// uma opção só pro card e pra tela cheia: marcar em um marca no outro — e fica salva (vale depois do F5)
const NONAMES_KEY = "catalogo-musical:tree-nonames";
try { if (localStorage.getItem(NONAMES_KEY) === "1"){ treeEl.classList.add("nolabels"); document.querySelectorAll(".tree-nonames").forEach(cb => { cb.checked = true; }); } } catch (e) {}
document.addEventListener("change", e => {
  if (!e.target.classList.contains("tree-nonames")) return;
  try { localStorage.setItem(NONAMES_KEY, e.target.checked ? "1" : "0"); } catch (e2) {}
  treeEl.classList.toggle("nolabels", e.target.checked);
  document.querySelectorAll(".tree-nonames").forEach(cb => { cb.checked = e.target.checked; });
});

/* ---------------- ranked lists (albums & ranking) with FLIP reordering ---------------- */
function renderList(container, items, opts){
  const before = new Map();
  for (const el of container.children) before.set(el.dataset.k, el.getBoundingClientRect().top);
  const keep = new Map([...container.children].map(el => [el.dataset.k, el]));
  const frag = document.createDocumentFragment();
  const max = items.length ? Math.max(...items.map(d => d.value)) : 1;
  const hasSel = opts.selected.size > 0;
  items.forEach((d, i) => {
    let el = keep.get(d.k);
    if (!el){
      el = document.createElement("div"); el.className = "row"; el.dataset.k = d.k;
      el.innerHTML = (opts.rank ? `<span class="rk"></span>` : "") + `<span class="nm"></span><span class="vl"></span><div class="tr"><div class="fl"></div></div>`;
      el.querySelector(".nm").textContent = d.k;
      el.addEventListener("click", () => toggle(opts.kind, d.k));
      bindTip(el, () => opts.tip(d.k));
      el._new = true;
    }
    keep.delete(d.k);
    if (opts.rank) el.querySelector(".rk").textContent = String(i + 1).padStart(2, "0");
    el.classList.toggle("top3", i < 3);
    el.querySelector(".vl").innerHTML = opts.label(d);
    const sel = opts.selected.has(d.k);
    el.classList.toggle("sel", sel); el.classList.toggle("dim", hasSel && !sel);
    el._w = (d.value / max) * 100;
    frag.appendChild(el);
  });
  for (const el of keep.values()) el.remove();
  container.appendChild(frag);
  const rm = matchMedia("(prefers-reduced-motion: reduce)").matches;
  for (const el of container.children){
    const fl = el.querySelector(".fl");
    if (el._new){
      el._new = false;
      if (!rm) el.animate([{opacity: 0, transform: "translateY(8px)"}, {opacity: 1, transform: "none"}], {duration: 450, easing: "cubic-bezier(.2,.75,.15,1)"});
      requestAnimationFrame(() => requestAnimationFrame(() => fl.style.width = el._w + "%"));
    } else {
      fl.style.width = el._w + "%";
      const old = before.get(el.dataset.k);
      const dy = old - el.getBoundingClientRect().top;
      if (dy && !rm) el.animate([{transform: `translateY(${dy}px)`}, {transform: "none"}], {duration: 650, easing: "cubic-bezier(.2,.75,.15,1)"});
    }
  }
  if (hasSel){
    const first = [...container.children].find(el => el.classList.contains("sel"));
    if (first && opts.scrollToSel){
      const top = first.offsetTop - 8;
      if (top < container.scrollTop || top > container.scrollTop + container.clientHeight - 60) container.scrollTo({top, behavior: rm ? "auto" : "smooth"});
    }
  }
}
function albumTip(a){
  const R = rows(true, false).filter(r => r.album === a);
  const longest = R.reduce((m, r) => r.sec > m.sec ? r : m, R[0]);
  const arts = [...new Set(R.map(r => r.artist))];
  const yrs = [...new Set(R.map(r => r.year))].sort();
  return `<div class="eyebrow">Álbum · ${yrs.join(", ")}</div><div class="t">${esc(a)}</div>
    <div class="k"><span>${esc(arts.join(" · "))}</span></div><hr>
    <div class="k"><span>Duração somada</span><b>${fmtDur(sum(R, r => r.sec))}</b></div>
    <div class="k"><span>Faixas no catálogo</span><b>${R.length}</b></div>
    <div class="k"><span>Média por faixa</span><b>${fmtDur(sum(R, r => r.sec) / R.length)}</b></div>
    <div class="k"><span>Entrou na playlist</span><b>${(lo => lo.length > 1 ? `#${lo[0]} a #${lo[lo.length - 1]}` : `#${lo[0]}`)(R.map(r => r.n).sort((x, y) => x - y))}</b></div><hr>
    <div class="eyebrow">Faixa mais longa</div>
    <div class="k"><span style="color:var(--ink)">${esc(longest.title)}</span><b>${fmtDur(longest.sec)}</b></div>`;
}
function renderAlbums(){
  const g = groupBy(rows(true, false), "album");
  const items = [...g].map(([k, rs]) => ({k, value: sum(rs, r => r.sec), n: rs.length})).sort((a, b) => b.value - a.value || coll.compare(a.k, b.k));
  renderList($("#albums"), items, {kind: "album", selected: state.albums, tip: albumTip, scrollToSel: true,
    label: d => `${fmtDur(d.value)}<small>${d.n} faixa${d.n > 1 ? "s" : ""}</small>`});
  $("#alb-hint").textContent = state.bands.size ? `${items.length} álbu${items.length > 1 ? "ns" : "m"} no recorte · clique para filtrar` : `${items.length} álbuns · clique para filtrar`;
}
function rankTip(b){
  const base = rows(false, true);
  const g = [...groupBy(base, "artist")].map(([k, rs]) => [k, rs.length]).sort((x, y) => y[1] - x[1] || coll.compare(x[0], y[0]));
  const i = g.findIndex(([k]) => k === b), n = g[i][1];
  const cum = sum(g.slice(0, i + 1), x => x[1]);
  const R = base.filter(r => r.artist === b);
  const by = modeOf(R, "year");
  const next = g[i - 1];
  return `<div class="eyebrow">Posição ${i + 1} de ${g.length}</div><div class="t">${esc(b)}</div>
    <div class="k"><span>Faixas</span><b>${n}</b></div>
    <div class="k"><span>Participação</span><b>${pct(n, base.length)}</b></div>
    <div class="k"><span>Top ${i + 1} somado</span><b>${pct(cum, base.length)}</b></div>
    <div class="k"><span>Ano mais forte</span><b>${by.best ?? NI} (${by.max})</b></div>
    <div class="k"><span>Primeira e última adição</span><b>#${Math.min(...R.map(r => r.n))} · #${Math.max(...R.map(r => r.n))}</b></div>
    ${next ? `<hr><div class="k"><span>Para alcançar ${esc(next[0])}</span><b>+${next[1] - n} faixa${next[1] - n === 1 ? "" : "s"}</b></div>` : `<hr><div class="k"><span>Liderança</span><b>${g[1] ? "+" + (n - g[1][1]) + " sobre o 2º" : "—"}</b></div>`}`;
}
function renderRank(){
  const base = rows(false, true);
  const items = [...groupBy(base, "artist")].map(([k, rs]) => ({k, value: rs.length})).sort((a, b) => b.value - a.value || coll.compare(a.k, b.k));
  renderList($("#rank"), items, {kind: "band", rank: true, selected: state.bands, tip: rankTip, scrollToSel: true,
    label: d => `${d.value}<small>${pct(d.value, base.length)}</small>`});
}

/* ---------------- chart 5: genres · chart 6: track profile ---------------- */
const capFirst = s => s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
function genreTip(g){
  const R = rows(true, true, false).filter(t => t.ge && t.ge.includes(g));
  const arts = [...groupBy(R, "artist")].map(([k, rs]) => [k, rs.length]).sort((a, b) => b[1] - a[1] || coll.compare(a[0], b[0]));
  return `<div class="eyebrow">Gênero</div><div class="t">${esc(capFirst(g))}</div>
    <div class="k"><span>Faixas</span><b>${R.length}</b></div><hr><div class="eyebrow">Artistas</div>
    ${arts.slice(0, 5).map(([a, n]) => `<div class="k"><span>${esc(a)}</span><b>${n}</b></div>`).join("")}${arts.length > 5 ? `<div class="k"><span>+ ${arts.length - 5} artistas</span></div>` : ""}`;
}
function renderGenres(){
  const base = rows(true, true, false), el = $("#genres");
  const counts = new Map();
  for (const t of base) for (const g of t.ge || []) counts.set(g, (counts.get(g) || 0) + 1);
  // na playlist de exemplo não tem "Atualizar dados" (o botão do topo também some)
  const missing = STORE ? base.filter(t => !t.gs).length : 0;
  const upd = missing ? ` · <button type="button" class="lnk" data-upd style="padding:0">buscar gênero de ${faixas(missing)}</button>` : "";
  if (!counts.size){
    el.innerHTML = `<div class="empty-in"><p>${!STORE ? "Os gêneros aparecem aqui assim que forem encontrados." : missing ? "Nenhuma música tem gênero ainda." : "O Spotify não informa gênero para os artistas dessa seleção."}</p>${missing ? `<button class="pbtn" type="button" data-upd>Atualizar dados</button><p class="muted">Gasta 1 busca no Spotify por artista, não por música.</p>` : ""}</div>`;
    $("#gen-hint").innerHTML = "";
    return;
  }
  if (el.querySelector(".empty-in")) el.innerHTML = "";
  const items = [...counts].map(([k, value]) => ({k, value})).sort((a, b) => b.value - a.value || coll.compare(a.k, b.k));
  const withG = base.filter(t => t.ge && t.ge.length).length;
  renderList(el, items, {kind: "genre", rank: true, selected: state.genres, tip: genreTip, scrollToSel: true,
    label: d => `${d.value}<small>${pct(d.value, withG)}</small>`});
  $("#gen-hint").innerHTML = `${items.length} gêneros · uma música conta em cada gênero do artista${upd}`;
}
function profStack(title, big, segs, total){
  const on = segs.filter(s => s[0] > 0);
  return `<div class="pf"><div class="pf-h"><span>${title}</span><b>${big}</b></div>
    <div class="stack pf-bar">${on.map(([n, c]) => `<i style="background:${c};flex:${n}"></i>`).join("")}</div>
    <div class="legend">${on.map(([n, c, l]) => `<span><i style="background:${c}"></i>${l} · ${n} (${pct(n, total, 0)})</span>`).join("")}</div></div>`;
}
function renderProfile(R){
  const M = R.filter(hasMeta), el = $("#profile");
  const missing = STORE ? R.filter(t => !t.m).length : 0;
  $("#prof-hint").innerHTML = M.length ? `${M.length === R.length ? `todas as ${faixas(M.length)}` : `${nf(M.length)} de ${faixas(R.length)}`} com esses dados${missing ? ` · <button type="button" class="lnk" data-upd style="padding:0">completar ${missing}</button>` : ""}` : "";
  if (!M.length){
    el.innerHTML = `<div class="empty-in"><p>Explícitas, singles e popularidade aparecem aqui para músicas importadas por <strong>link do Spotify</strong>.</p>${missing ? `<button class="pbtn" type="button" data-upd>Atualizar dados</button><p class="muted">Procura as músicas que já estão na playlist: 1 busca por música.</p>` : ""}</div>`;
    return;
  }
  const ex = M.filter(t => t.m.x).length;
  const ty = {album: 0, single: 0, compilation: 0}; M.forEach(t => { if (t.m.ty in ty) ty[t.m.ty]++; });
  const tyN = ty.album + ty.single + ty.compilation;
  const P = M.filter(t => typeof t.m.p === "number"), hist = [0, 0, 0, 0, 0];
  P.forEach(t => hist[Math.min(4, Math.floor(t.m.p / 20))]++);
  const hi = P.length ? P.reduce((a, b) => b.m.p > a.m.p ? b : a) : null, lo = P.length ? P.reduce((a, b) => b.m.p < a.m.p ? b : a) : null;
  let html = tyN ? profStack("De onde vêm", pct(ty.album, tyN, 0) + " de álbuns", [[ty.album, "#34D399", "Álbum"], [ty.single, "#A3E635", "Single/EP"], [ty.compilation, "#047857", "Coletânea"]], tyN) : "";
  html += profStack("Explícitas", pct(ex, M.length, 0), [[ex, "#F0FDF7", "Explícitas"], [M.length - ex, "#047857", "Sem palavrão"]], M.length);
  if (P.length){
    const avg = Math.round(sum(P, t => t.m.p) / P.length), pm = Math.max(1, ...hist);
    html += `<div class="pf"><div class="pf-h"><span>Popularidade no Spotify</span><b>média ${avg}</b></div>
      <div class="mbars pf-pop">${hist.map((v, i) => `<div><b>${v}</b><i style="height:${Math.max(3, v / pm * 44)}px"></i><span>${i * 20}–${i === 4 ? 100 : i * 20 + 19}</span></div>`).join("")}</div>
      <div class="legend"><span>Mais popular: <strong>${esc(cleanTitle(hi.title))}</strong> (${hi.m.p})</span><span>Mais lado B: <strong>${esc(cleanTitle(lo.title))}</strong> (${lo.m.p})</span></div></div>`;
  }
  // sem popularidade (o Spotify nem sempre manda) o card ficaria com buraco: entra o ranking de explícitas por artista
  if (!P.length && ex){
    const arts = [...groupBy(M, "artist")].map(([k, rs]) => ({k, n: rs.length, e: rs.filter(t => t.m.x).length}))
      .filter(a => a.n >= 3 && a.e).sort((a, b) => b.e / b.n - a.e / a.n || b.e - a.e).slice(0, 4);
    if (arts.length) html += `<div class="pf"><div class="pf-h"><span>Artistas mais explícitos</span><b>% das faixas</b></div>
      ${arts.map(a => `<div class="hrow"><div class="hl"><span>${esc(a.k)} <em>${a.e} de ${a.n}</em></span><b>${pct(a.e, a.n, 0)}</b></div><div class="ht"><i style="width:${Math.max(2, a.e / a.n * 100)}%"></i></div></div>`).join("")}</div>`;
  }
  el.innerHTML = html;
}
document.addEventListener("click", e => { if (e.target.closest("[data-upd]")) openDataUpdate(); });

/* ---------------- song tables: same columns, by importance, everywhere ---------------- */
const ND = `<span class="nd">—</span>`;
const SONG_COLS = [
  {k: "n", l: "#", num: true, cell: t => t.n ?? ""},
  {k: "title", l: "Música", cls: "tt", cell: t => esc(t.title)},
  {k: "artist", l: "Artista", cell: t => esc(t.artist)},
  {k: "album", l: "Álbum", cell: t => esc(t.album)},
  {k: "genre", l: "Gênero", cls: "gn", cell: t => t.genre ? esc(t.genre) : ND},
  {k: "date", l: "Lançamento", cell: t => t.date ? esc(t.date) : ND},
  {k: "sec", l: "Duração", num: true, cell: t => t.sec ? durTxt(t.sec) : ND},
  {k: "pop", l: "Popularidade", num: true, cell: t => t.pop ?? ND},
  {k: "ex", l: "Explícita", cell: t => t.ex === null ? ND : t.ex ? "Sim" : "Não"},
  {k: "ty", l: "Tipo", cell: t => TYPE_PT[t.ty] || ND}
];
const songHead = (sortable = true) => SONG_COLS.map(c => `<th${sortable ? ` data-k="${c.k}" tabindex="0"` : ""} class="${c.num ? "num" : ""}">${c.l}${sortable ? "<i></i>" : ""}</th>`).join("");
const songCells = (t, first) => SONG_COLS.map((c, i) => `<td class="${[c.num ? "num" : "", c.cls || ""].join(" ").trim()}">${i === 0 && first !== undefined ? first : c.cell(t)}</td>`).join("");
// sem dado vai sempre pro fim, nas duas direções
const cmpSong = (k, dir) => (a, b) => {
  const x = a[k], y = b[k], mx = x === null || x === undefined || x === "", my = y === null || y === undefined || y === "";
  if (mx || my) return mx === my ? a.n - b.n : mx ? 1 : -1;
  return (typeof x === "number" && typeof y === "number" ? x - y : coll.compare(String(x), String(y))) * dir || a.n - b.n;
};
// linha importada/colada (ainda não está na playlist) no mesmo formato das faixas do painel
const songView = r => { const a = (r.artist || "").trim() || NI; return {n: r.n, title: r.title, artist: a, album: (r.album || "").trim() || NI, sec: r.sec, date: r.date || "", ...extraProps(r.meta, shownGenres(a))}; };
const songTable = list => `<div class="ptab"><table><thead><tr>${songHead(false)}</tr></thead><tbody>${list.map(t => `<tr>${songCells(t)}</tr>`).join("")}</tbody></table></div>`;

/* ---------------- render ---------------- */
$("#filtered-list-card thead tr").innerHTML = songHead();
let flSortK = "n", flSortDir = 1;
function renderFilteredList(R){
  const card = $("#filtered-list-card");
  const active = state.bands.size + state.albums.size + state.genres.size > 0;
  card.style.display = active ? "" : "none";
  if (!active) return;
  const list = [...R].sort(cmpSong(flSortK, flSortDir));
  $("#filtered-list-body").innerHTML = list.map((t, i) => `<tr title="Posição original na playlist: #${t.n}">${songCells(t, i + 1)}</tr>`).join("");
  $("#filtered-list-hint").textContent = `${faixas(list.length)} no filtro atual`;
  card.querySelectorAll("th[data-k]").forEach(th => th.setAttribute("aria-sort", th.dataset.k === flSortK ? (flSortDir > 0 ? "ascending" : "descending") : "none"));
}
$("#filtered-list-card").querySelectorAll("th[data-k]").forEach(th => {
  const go = () => { if (flSortK === th.dataset.k) flSortDir *= -1; else { flSortK = th.dataset.k; flSortDir = 1; } render(); };
  th.addEventListener("click", go);
  th.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " "){ e.preventDefault(); go(); } });
});
function render(){
  renderFilters();
  const R = rows();
  const empty = !R.length;
  $("#content").style.display = empty ? "none" : "";
  $("#empty").classList.toggle("on", empty);
  if (empty){ hideTip(); return; }
  renderKPIs(R); renderWave(R); renderYears(R); renderTree(); renderAlbums(); renderRank(); renderGenres(); renderProfile(R); renderEvolution(R);
  renderFilteredList(R);
}

/* ---------------- chart 7: evolução por banda/gênero (linhas acumuladas pela ordem de adição; banda = artista principal) ---------------- */
// as 8 primeiras linhas usam as cores categóricas validadas (versão escura), em ordem fixa; da 9ª em diante
// (dá pra marcar todas) as cores são geradas espalhando o matiz. Cada linha mantém a cor enquanto está marcada
const EVO_COLORS = ["#3987e5", "#d95926", "#199e70", "#c98500", "#d55181", "#008300", "#9085e9", "#e66767"];
const EVO_DEFAULT = 8, EVO_TOPS = [1, 3, 5, 8, 10, 25, 50, 100, 250, 500, 750, 1000];
const evoCol = s => s < EVO_COLORS.length ? EVO_COLORS[s] : `hsl(${Math.round(((s - EVO_COLORS.length) * 137.5 + 20) % 360)}, 62%, 62%)`;
const evo = {mode: "band", sel: {band: null, genre: null}, slot: {band: new Map(), genre: new Map()}, list: [], map: new Map(), R: [], N: 0};
const evoName = k => evo.mode === "genre" ? capFirst(k) : k;
function evoBuild(R){
  const sorted = [...R].sort((a, b) => a.n - b.n), idx = new Map();
  sorted.forEach((t, i) => {
    const keys = evo.mode === "band" ? (t.artist === NI ? [] : [splitArtistsRaw(t.artist)[0] || t.artist]) : (t.ge || []);
    for (const k of keys) (idx.get(k) || idx.set(k, []).get(k)).push(i);
  });
  evo.R = sorted; evo.N = sorted.length;
  evo.list = [...idx].map(([k, ix]) => ({k, ix, c: ix.length})).sort((a, b) => b.c - a.c || coll.compare(a.k, b.k));
  evo.map = new Map(evo.list.map(s => [s.k, s]));
}
function evoAdd(k){
  const m = evo.mode, used = new Set();
  for (const [kk, s] of evo.slot[m]) if (evo.map.has(kk)) used.add(s);
  let s = 0; while (used.has(s)) s++;
  evo.sel[m].add(k); evo.slot[m].set(k, s); return true;
}
function evoDel(k){ evo.sel[evo.mode].delete(k); evo.slot[evo.mode].delete(k); }
function evoTop(n){ const m = evo.mode; evo.sel[m] = new Set(); evo.slot[m] = new Map(); evo.list.slice(0, n).forEach(s => evoAdd(s.k)); }
function evoReset(){ evoTop(EVO_DEFAULT); }
function evoSel(){ if (!evo.sel[evo.mode]) evoReset(); return evo.sel[evo.mode]; }
const evoColor = k => evoCol(evo.slot[evo.mode].get(k));
const EVO_SPLIT = 25;
const evoOptHtml = s => { const on = evoSel().has(s.k); return `<button type="button" class="evo-opt${on ? " on" : ""}" data-k="${esc(s.k)}" aria-pressed="${on}"${on ? ` style="--sc:${evoColor(s.k)}"` : ""}>${on ? "<i></i>" : ""}${esc(evoName(s.k))}<em>${s.c}</em></button>`; };
function openEvoSingles(){
  const body = document.createElement("div");
  body.innerHTML = `<p class="mdesc">${evo.mode === "band" ? "Artistas" : "Gêneros"} com <strong>só 1 faixa</strong> na playlist. Uma linha de 1 faixa é só um degrau no gráfico, por isso ficam escondidos da lista principal. Clique para ligar ou desligar a linha.</p>
    <input type="search" id="evs-q" placeholder="Buscar…" aria-label="Buscar" style="width:100%;max-width:340px;border:1px solid var(--line-2);background:rgba(8,26,20,.8);color:var(--ink);font:500 13px var(--body);padding:9px 12px;border-radius:12px;outline:none">
    <div class="evo-opts big" id="evs-list"></div>`;
  const md = openModal({title: `${evo.mode === "band" ? "Artistas" : "Gêneros"} com 1 faixa`, body, size: "md"});
  const list = md.m.querySelector("#evs-list"), inp = md.m.querySelector("#evs-q");
  const draw = () => {
    const q = inp.value.trim().toLowerCase();
    list.innerHTML = evo.list.filter(s => s.c === 1 && (!q || evoName(s.k).toLowerCase().includes(q))).map(evoOptHtml).join("") || `<span class="muted" style="font-size:12.5px">Nada encontrado.</span>`;
  };
  list.addEventListener("click", e => { const b = e.target.closest(".evo-opt"); if (b){ evoToggle(b.dataset.k); draw(); } });
  inp.addEventListener("input", draw);
  draw();
}
function evoPanels(){
  const sel = evoSel();
  const q = $("#evo-q").value.trim().toLowerCase();
  // com mais de 25 bandas/gêneros, os de 1 faixa só saem da lista (ficam atrás do botão/modal) enquanto não há busca
  const split = evo.list.length > EVO_SPLIT, singles = split ? evo.list.filter(s => s.c === 1) : [];
  const opts = evo.list.filter(s => q ? evoName(s.k).toLowerCase().includes(q) : !split || s.c > 1);
  $("#evo-opts").innerHTML = opts.map(evoOptHtml).join("") || `<span class="muted" style="font-size:12.5px">Nada encontrado.</span>`;
  const sb = $("#evo-singles");
  $("#evo-singles-row").style.display = singles.length ? "" : "none";
  const on1 = singles.filter(s => sel.has(s.k)).length;
  $("#evo-singles-x").style.display = on1 ? "inline-flex" : "none";
  sb.textContent = `Ver os ${singles.length} ${evo.mode === "band" ? "artistas" : "gêneros"} com só 1 faixa${on1 ? ` · ${on1} no gráfico` : ""}`;
  $("#evo-what").textContent = evo.mode === "band" ? "banda" : "gênero";
  $("#evo-hint").textContent = `${evo.list.length} ${evo.mode === "band" ? "bandas/artistas" : "gêneros"} · acumulado de faixas pela ordem de adição`;
  document.querySelectorAll("#evo-mode button").forEach(b => b.setAttribute("aria-pressed", b.dataset.m === evo.mode));
  // atalhos "Top N": só os que cabem nesta playlist (N menor que o total de bandas/gêneros); "Todas" mostra o total.
  // O atalho fica marcado quando as linhas escolhidas são exatamente as N maiores
  const total = evo.list.length, cur = [...sel].filter(k => evo.map.has(k));
  const isTop = n => cur.length === Math.min(n, total) && evo.list.slice(0, n).every(s => sel.has(s.k));
  $("#evo-tops").innerHTML = [...EVO_TOPS.filter(n => n < total).map(n => `<button type="button" data-n="${n}" aria-pressed="${isTop(n)}">Top ${n}</button>`),
    ...(total ? [`<button type="button" data-n="all" aria-pressed="${isTop(total)}">Todas · ${total}</button>`] : [])].join("");
}
function evoToggle(k){
  if (evoSel().has(k)) evoDel(k);
  else evoAdd(k);
  evoPanels(); drawEvo();
}
function drawEvo(){
  const box = $("#evo"); if (!box) return;
  const W = box.clientWidth, N = evo.N;
  if (!evo.list.length){ box.innerHTML = `<p class="none">${evo.mode === "genre" ? "Ainda não há gêneros para mostrar. Use \"Atualizar dados\" para buscá-los." : "Sem dados para este recorte."}</p>`; return; }
  if (!W) return;
  const shown = [...evoSel()].filter(k => evo.map.has(k)).sort((a, b) => evo.slot[evo.mode].get(a) - evo.slot[evo.mode].get(b));
  const H = 300, L = 38, Rm = 16, Tp = 14, Bt = 26;
  const X = i => L + (N <= 1 ? 0 : i / (N - 1)) * (W - L - Rm);
  const cum = shown.map(k => { const ix = evo.map.get(k).ix, a = new Int32Array(N); let p = 0, c = 0; for (let i = 0; i < N; i++){ if (p < ix.length && ix[p] === i){ c++; p++; } a[i] = c; } return a; });
  const mx = Math.max(1, ...cum.map(a => a[N - 1]));
  const raw = mx / 4, pow = Math.pow(10, Math.floor(Math.log10(raw))), step = Math.max(1, [1, 2, 5, 10].map(m => m * pow).find(s => s >= raw));
  const top = Math.ceil(mx / step) * step;
  const Y = v => Tp + (1 - v / top) * (H - Tp - Bt);
  let svg = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Evolução acumulada de faixas por ${evo.mode === "band" ? "banda" : "gênero"}, pela ordem de adição">`;
  for (let v = 0; v <= top; v += step) svg += `<line x1="${L}" x2="${W - Rm}" y1="${Y(v)}" y2="${Y(v)}" stroke="rgba(110,231,183,.08)" stroke-dasharray="2 4"/><text x="${L - 8}" y="${Y(v) + 4}" text-anchor="end">${v}</text>`;
  [0, .25, .5, .75, 1].forEach((f, j, arr) => { const i = Math.round(f * (N - 1)); svg += `<text x="${X(i)}" y="${H - 6}" text-anchor="${j === 0 ? "start" : j === arr.length - 1 ? "end" : "middle"}">#${evo.R[i].n}</text>`; });
  const every = Math.max(1, Math.ceil(N / 500));
  cum.forEach((a, j) => {
    const pts = []; for (let i = 0; i < N; i += every) pts.push(i); if (pts[pts.length - 1] !== N - 1) pts.push(N - 1);
    const col = evoCol(evo.slot[evo.mode].get(shown[j]));
    svg += `<path d="M${pts.map(i => `${X(i).toFixed(1)},${Y(a[i]).toFixed(1)}`).join("L")}" fill="none" stroke="${col}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>`;
    svg += `<circle cx="${X(N - 1)}" cy="${Y(a[N - 1])}" r="4" fill="${col}" stroke="#071a14" stroke-width="2"/>`;
  });
  svg += `<g id="evo-hot" style="display:none"><line y1="${Tp}" y2="${H - Bt}" stroke="rgba(240,253,247,.35)" stroke-dasharray="3 3"/>${cum.map((a, j) => `<circle r="4.5" fill="${evoCol(evo.slot[evo.mode].get(shown[j]))}" stroke="#071a14" stroke-width="2"/>`).join("")}</g>`;
  svg += `<rect id="evo-hit" x="${L}" y="0" width="${W - L - Rm}" height="${H - Bt}" fill="transparent"/></svg>`;
  box.innerHTML = svg;
  const s = box.querySelector("svg"), hot = s.querySelector("#evo-hot"), line = hot.querySelector("line"), dots = [...hot.querySelectorAll("circle")];
  const at = e => {
    const b = s.getBoundingClientRect(), x = (e.clientX - b.left) / b.width * W;
    const i = Math.min(N - 1, Math.max(0, Math.round((x - L) / (W - L - Rm) * (N - 1))));
    hot.style.display = "";
    line.setAttribute("x1", X(i)); line.setAttribute("x2", X(i));
    dots.forEach((d, j) => { d.setAttribute("cx", X(i)); d.setAttribute("cy", Y(cum[j][i])); });
    const t = evo.R[i];
    const rows = shown.map((k, j) => [k, cum[j][i], evoCol(evo.slot[evo.mode].get(k))]).sort((p, q) => q[1] - p[1]);
    showTip(`<div class="eyebrow">Adição #${t.n}</div><div class="t">${esc(t.title)}</div><div class="k"><span>${esc(t.artist)}</span></div>${rows.length ? "<hr>" : ""}
      ${rows.slice(0, 12).map(([k, v, col]) => `<div class="k"><span><i style="display:inline-block;width:10px;height:3px;border-radius:2px;margin-right:7px;vertical-align:middle;background:${col}"></i>${esc(evoName(k))}</span><b>${v}</b></div>`).join("")}${rows.length > 12 ? `<div class="k"><span>+ ${rows.length - 12} linhas</span></div>` : ""}`, e);
  };
  s.addEventListener("pointermove", at);
  s.addEventListener("pointerleave", () => { hot.style.display = "none"; hideTip(); });
}
function renderEvolution(R){ evoBuild(R); evoPanels(); drawEvo(); }
$("#evo-mode").addEventListener("click", e => { const b = e.target.closest("button"); if (!b || b.dataset.m === evo.mode) return; evo.mode = b.dataset.m; evoBuild(rows()); evoPanels(); drawEvo(); });
$("#evo-tops").addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; evoTop(b.dataset.n === "all" ? evo.list.length : +b.dataset.n); evoPanels(); drawEvo(); });
$("#evo-none").addEventListener("click", () => { evo.sel[evo.mode] = new Set(); evo.slot[evo.mode] = new Map(); evoPanels(); drawEvo(); });
$("#evo-opts").addEventListener("click", e => { const b = e.target.closest(".evo-opt"); if (b) evoToggle(b.dataset.k); });
$("#evo-q").addEventListener("input", evoPanels);
$("#evo-singles").addEventListener("click", openEvoSingles);
$("#evo-singles-x").addEventListener("click", () => { evo.list.filter(s => s.c === 1).forEach(s => { if (evoSel().has(s.k)) evoDel(s.k); }); evoPanels(); drawEvo(); });

/* ---------------- tabs ---------------- */
const tabs = [...document.querySelectorAll(".tabs button")];
function placePill(){ const on = tabs.find(t => t.getAttribute("aria-selected") === "true"); const p = $(".tabs .pill"); p.style.left = on.offsetLeft + "px"; p.style.width = on.offsetWidth + "px"; }
function showTab(id){
  tabs.forEach(t => t.setAttribute("aria-selected", t.getAttribute("aria-controls") === id));
  document.querySelectorAll(".tabpanel").forEach(p => p.classList.toggle("on", p.id === id));
  placePill(); hideTip();
  try { history.replaceState(null, "", id === "insights" ? "#insights" : "#"); } catch (e) {}
  if (id === "insights") animateInsights(); else requestAnimationFrame(() => { renderTree(); renderYears(rows()); drawEvo(); });
}
tabs.forEach(t => t.addEventListener("click", () => showTab(t.getAttribute("aria-controls"))));
addEventListener("hashchange", () => showTab(location.hash === "#insights" ? "insights" : "painel"));

/* ================= INSIGHTS ENGINE =================
   Every sentence on the Insights tab is written here from rules over the current list,
   so a new or edited playlist produces a different reading. Numbers are always computed. */
const NN = BY_PLAYLIST.length;
function median(a){ if (!a.length) return NaN; const s = [...a].sort((x, y) => x - y), m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; }
function blocks(k){ k = Math.max(1, Math.min(k, NN)); const out = []; for (let i = 0; i < k; i++){ const a = Math.floor(i * NN / k), b = Math.floor((i + 1) * NN / k); out.push(BY_PLAYLIST.slice(a, b)); } return out; }
const seedOf = s => { let h = 2166136261; for (const ch of String(s)) h = Math.imul(h ^ ch.charCodeAt(0), 16777619); return h >>> 0; };
const pickV = (key, arr) => arr[seedOf(key + "|" + NN + "|" + (IS_TOP || "")) % arr.length];
let IS_TOP = "";
const B = s => `<strong>${esc(s)}</strong>`;
const nf = n => fmtInt(n);
const pc0 = (a, b) => pct(a, b, 0), pc1 = (a, b) => pct(a, b, 1);
const decLabel = d => d >= 2000 ? `anos ${d}` : `anos ${String(d).slice(2)}`;
const listPt = arr => arr.length <= 1 ? (arr[0] || "") : arr.slice(0, -1).join(", ") + " e " + arr[arr.length - 1];
const fracWord = f => f >= .45 ? "quase metade" : f >= .3 ? "um terço" : f >= .2 ? "um quarto" : `${Math.round(f * 100)}%`;
const faixas = n => `${nf(n)} faixa${n === 1 ? "" : "s"}`;
const yearsSpan = rs => { const ys = rs.map(r => r.year).filter(y => y !== NI); return ys.length ? [Math.min(...ys), Math.max(...ys)] : [null, null]; };

/* ---------- statistics shared by all rules ---------- */
const NOW_Y = new Date().getFullYear();
const IS = (() => {
  const S = {N: NN};
  S.art = (() => {
    /* uma faixa com vários artistas (ex.: "A, B") conta só para o principal (A) — splitArtists
       já devolve só o primeiro nome —, guardando a grafia mais comum para exibição */
    const m = new Map();
    for (const t of T){
      const parts = splitArtists(t.artist), raw = splitArtistsRaw(t.artist);
      parts.forEach((p, i) => {
        if (!m.has(p)) m.set(p, {rs: [], names: new Map()});
        const e = m.get(p);
        e.rs.push(t);
        const disp = raw[i] || t.artist;
        e.names.set(disp, (e.names.get(disp) || 0) + 1);
      });
    }
    return [...m.values()].map(e => ({k: [...e.names].sort((a, b) => b[1] - a[1])[0][0], rs: [...e.rs].sort((a, b) => a.n - b.n), c: e.rs.length}))
      .sort((a, b) => b.c - a.c || coll.compare(a.k, b.k));
  })();
  S.artMap = new Map(S.art.map(a => [a.k, a]));
  S.alb = [...groupBy(T, "album")].map(([k, rs]) => ({k, rs, c: rs.length, sec: sum(rs, r => r.sec), artist: modeOf(rs, "artist").best || rs[0].artist})).sort((a, b) => b.c - a.c || coll.compare(a.k, b.k));
  S.dated = T.filter(t => t.year !== NI);
  S.years = [...groupBy(S.dated, "year")].map(([y, rs]) => ({y, rs, c: rs.length})).sort((a, b) => b.c - a.c || a.y - b.y);
  S.minY = S.dated.length ? Math.min(...S.dated.map(t => t.year)) : null;
  S.maxY = S.dated.length ? Math.max(...S.dated.map(t => t.year)) : null;
  const dm = new Map(); for (const t of S.dated){ const d = Math.floor(t.year / 10) * 10; dm.set(d, (dm.get(d) || 0) + 1); }
  S.dec = [...dm].map(([d, c]) => ({d, c})).sort((a, b) => a.d - b.d);
  S.runs = []; S.albRuns = [];
  if (NN){
    let cur = [BY_PLAYLIST[0]], ca = [BY_PLAYLIST[0]];
    for (const t of BY_PLAYLIST.slice(1)){
      if (t.artist === cur[cur.length - 1].artist) cur.push(t); else { S.runs.push(cur); cur = [t]; }
      const p = ca[ca.length - 1];
      if (t.album === p.album && t.artist === p.artist && t.album !== NI) ca.push(t); else { S.albRuns.push(ca); ca = [t]; }
    }
    S.runs.push(cur); S.albRuns.push(ca);
  }
  S.runsSorted = [...S.runs].sort((a, b) => b.length - a.length || a[0].n - b[0].n);
  S.collabsOf = name => {
    /* cada faixa conta só pro artista principal (ver S.art acima); "colaborador" é quem aparece
       como convidado numa faixa em que este artista é o principal */
    const nameLC = name.toLowerCase(), others = new Set();
    for (const t of T){ const parts = splitArtistsAll(t.artist.toLowerCase()); if (parts.length > 1 && parts[0] === nameLC) parts.slice(1).forEach(p => others.add(p)); }
    return S.art.filter(a => others.has(a.k.toLowerCase()));
  };
  S.journey = NN >= 30;
  S.chap = S.journey ? blocks(6) : [];
  return S;
})();
IS_TOP = IS.art.length ? IS.art[0].k : "";

/* ---------- chapters with names chosen by what happened in each ---------- */
const CHI = (() => {
  const seen = new Set();
  const ch = IS.chap.map((seg, i) => {
    const g = [...groupBy(seg, "artist")].map(([k, rs]) => [k, rs.length]).sort((a, b) => b[1] - a[1] || coll.compare(a[0], b[0]));
    const fresh = new Set(seg.map(r => r.artist).filter(a => !seen.has(a))); seg.forEach(r => seen.add(r.artist));
    return {i, seg, g, top: g[0], share: g[0][1] / seg.length, arts: g.length, fresh: fresh.size, yr: median(seg.filter(r => r.year !== NI).map(r => r.year))};
  });
  const maxArts = Math.max(0, ...ch.map(c => c.arts)), used = new Set();
  ch.forEach((c, i) => {
    let name;
    if (i === 0) name = "A porta de entrada";
    else if (i === ch.length - 1 && c.share >= .3) name = `Era ${c.top[0]}`;
    else if (c.share >= .35) name = `A febre ${c.top[0]}`;
    else if (i === 1 && c.arts >= ch[0].arts * 1.5) name = "A expansão";
    else if (c.arts === maxArts) name = "Exploração máxima";
    else if (c.share < .2) name = "Transição";
    else if (i === ch.length - 1) name = "O agora";
    else name = `${c.top[0]} em alta`;
    if (used.has(name)) name = ["Novos ares", "A virada", "Mistura", "Respiro"][i % 4];
    used.add(name); c.name = name;
  });
  return ch;
})();

/* ---------- small visual builders (HTML strings) ---------- */
const V = {
  decades(){
    if (!IS.dec.length) return "";
    const mx = Math.max(...IS.dec.map(d => d.c));
    return `<div class="viz decades">${IS.dec.map(({d, c}) => `<div><b>${c}</b><i data-h="${(c / mx) * 100}" class="${c === mx ? "pk" : ""}"></i><span>${String(d).slice(2)}s</span></div>`).join("")}</div>`;
  },
  topAlb(list){
    const mx = list[0].c;
    return list.map(a => `<div class="sb" style="margin:8px 0"><div class="l" style="display:flex;justify-content:space-between;gap:12px;font-size:13px"><span>${esc(a.k)} <span style="color:var(--ink-3)">· ${esc(a.artist)}</span></span><em style="font-style:normal;color:var(--ink-2);white-space:nowrap">${faixas(a.c)}</em></div>
      <div style="height:6px;border-radius:6px;background:rgba(110,231,183,.08);margin-top:5px;overflow:hidden"><i data-w="${(a.c / mx) * 100}" style="display:block;height:100%;width:0;border-radius:6px;background:linear-gradient(90deg,#047857,#6EE7B7);transition:width 1.1s cubic-bezier(.2,.75,.15,1)"></i></div></div>`).join("");
  },
  stack(seg, tot = NN){
    return `<div class="stack">${seg.filter(s => s[0] > 0).map(([n, c]) => `<i style="background:${c};flex-grow:0" data-g="${n}"></i>`).join("")}</div>
      <div class="legend">${seg.filter(s => s[0] > 0).map(([n, c, l]) => `<span><i style="background:${c}"></i>${l} · ${n} (${pc1(n, tot)})</span>`).join("")}</div>`;
  },
  bars(rows, max){
    return rows.map(([label, sub, v]) => `<div class="hrow"><div class="hl"><span>${esc(label)} <em>${esc(sub)}</em></span><b>${v}</b></div><div class="ht"><i style="width:${Math.max(2, v / max * 100)}%"></i></div></div>`).join("");
  },
  decComp(arts){
    const decs = IS.dec.map(d => d.d).slice(-5), shade = ["#065F46", "#047857", "#10B981", "#6EE7B7", "#D1FAE5"].slice(-decs.length);
    return arts.map(a => {
      const rs = a.rs.filter(t => t.year !== NI);
      const seg = decs.map(d => rs.filter(t => Math.floor(t.year / 10) * 10 === d).length);
      return `<div class="drow"><span class="dn">${esc(a.k)}</span><div class="dbar">${seg.map((v, i) => v ? `<i style="flex:${v};background:${shade[i]};color:${i >= decs.length - 2 ? "#022C22" : "#ECFDF5"}" title="${decs[i]}s: ${v}">${rs.length && v / rs.length >= .14 ? v : ""}</i>` : "").join("")}</div></div>`;
    }).join("") + `<div class="lg">${decs.map((d, i) => `<span><i style="background:${shade[i]}"></i>${String(d).slice(2)}s</span>`).join("")}<span class="r">faixas por década de lançamento</span></div>`;
  },
  strips(names){
    const bounds = IS.chap.slice(1).map(seg => seg[0].n - 1);
    return names.map(nm => {
      const a = IS.artMap.get(nm); if (!a) return "";
      const ticks = a.rs.map(t => `<rect x="${t.n - 1}" y="0" width="1" height="14" fill="#6EE7B7"/>`).join("");
      const seps = bounds.map(x => `<rect x="${x}" y="0" width=".6" height="14" fill="rgba(240,253,247,.18)"/>`).join("");
      return `<div class="strip"><div class="sl"><span>${esc(nm)}</span><em>#${a.rs[0].n} → #${a.rs[a.rs.length - 1].n} · ${faixas(a.c)}</em></div>
        <svg viewBox="0 0 ${NN} 14" preserveAspectRatio="none" class="strip-svg" aria-hidden="true"><rect width="${NN}" height="14" rx="3" fill="rgba(110,231,183,.06)"/>${seps}${ticks}</svg></div>`;
    }).join("") + `<div class="sx"><span>#1</span><span>capítulos 1–${IS.chap.length || 1}</span><span>#${NN}</span></div>`;
  },
  cells(win, a1, a2){
    const col = t => t.artist === a1 ? "#F0FDF7" : t.artist === a2 ? "#10B981" : "rgba(110,231,183,.14)";
    return `<div class="cells">${win.map(t => `<i style="background:${col(t)}" title="#${t.n} ${esc(t.title)} — ${esc(t.artist)}"></i>`).join("")}</div>
      <div class="lg"><span><i style="background:#F0FDF7"></i>${esc(a1)}</span>${a2 ? `<span><i style="background:#10B981"></i>${esc(a2)}</span>` : ""}<span><i style="background:rgba(110,231,183,.14)"></i>outros</span><span class="r">primeiras ${win.length} adições</span></div>`;
  },
  mbars(vals, labels, cap){
    const pm = Math.max(1, ...vals);
    return `<div class="mbars">${vals.map((v, i) => `<div><b>${v}</b><i style="height:${Math.max(3, v / pm * 56)}px"></i><span>${labels[i]}</span></div>`).join("")}</div><div class="cap2">${cap}</div>`;
  },
  runs(list, cap){
    const rm = list[0].length;
    return list.map(r => `<div class="hrow"><div class="hl"><span>${esc(r[0].artist)} <em>#${r[0].n}–${r[r.length - 1].n}</em></span><b>${r.length}</b></div><div class="ht"><i style="width:${r.length / rm * 100}%"></i></div></div>`).join("") + `<div class="cap2">${cap}</div>`;
  },
  dur(rows, max){
    return rows.map(([label, sub, v]) => `<div class="hrow"><div class="hl"><span>${esc(label)} <em>${esc(sub)}</em></span><b>${fmtDur(v)}</b></div><div class="ht"><i style="width:${Math.max(2, v / max * 100)}%"></i></div></div>`).join("");
  },
  pairs(list){
    return `<div class="pairs">${list.map(p => `<div class="pair"><b>${esc(p.title)}</b><span>${esc(p.a.artist)} <em>#${p.a.n}</em></span><i>→</i><span>${esc(p.b.artist)} <em>#${p.b.n}</em></span></div>`).join("")}</div>`;
  },
  disc(){ return `<div id="disc"></div>`; }
};
const cleanTitle = s => s.replace(/\s+-\s+(\d{4}\s+)?(remaster(ed)?|remix|live|ao vivo|demo|bonus track|single version|radio edit|mono|stereo).*$/i, "").replace(/\s+\((\d{4}\s+)?(remaster(ed)?|live|ao vivo)[^)]*\)$/i, "").trim();

/* ---------- rules ---------- */
const RULES = [];
const rule = fn => RULES.push(fn);

// CATÁLOGO · peak year explained by whole albums
rule(() => {
  if (IS.years.length < 3 || IS.years[0].c < 5) return null;
  const pk = IS.years[0], albs = [...groupBy(pk.rs, "album")].map(([k, rs]) => [k, rs.length]).sort((a, b) => b[1] - a[1]);
  const top = albs.slice(0, 3), topSum = sum(top, x => x[1]), conc = topSum / pk.c;
  const li = [`<li>${B(`${pk.y} é o pico, com ${faixas(pk.c)}`)}: ${conc >= .6 ? `${nf(topSum)} delas vêm de ${top.length === 1 ? "um único álbum" : `só ${top.length} álbuns`} (${top.map(([a, n]) => `${esc(a)} ${n}`).join(", ")}).` : `distribuídas em ${albs.length} álbuns diferentes, sem um dominante.`}</li>`];
  const p2 = IS.years[1];
  if (p2){
    const a2 = [...groupBy(p2.rs, "album")].map(([k, rs]) => [k, rs.length]).sort((a, b) => b[1] - a[1])[0];
    li.push(`<li>${B(`${p2.y} é o segundo pico (${p2.c})`)}${a2[1] / p2.c >= .4 ? `, e ${esc(a2[0])} sozinho responde por ${a2[1]} dessas faixas.` : `, espalhado por vários álbuns.`}</li>`);
  }
  const pd = [...IS.dec].sort((a, b) => b.c - a.c)[0], after = IS.dec.filter(d => d.d > pd.d);
  if (after.length) li.push(after.every(d => d.c < pd.c)
    ? `<li>Depois dos ${decLabel(pd.d)} o volume cai: ${after.map((d, i) => `${B(`${faixas(d.c)} nos ${decLabel(d.d)}`)}`).join(" e ")}.</li>`
    : `<li>O volume se mantém depois dos ${decLabel(pd.d)}: ${after.map(d => `${faixas(d.c)} nos ${decLabel(d.d)}`).join(" e ")}.</li>`);
  return {kind: "cat", theme: 0, score: 90, wide: true,
    title: conc >= .6 ? pickV("peak", ["Os picos de lançamento vêm de álbuns inteiros, não de volume espalhado", "Um ano-pico construído por poucos álbuns"]) : "O ano-pico é espalhado, sem um álbum dominante",
    body: `<ul>${li.join("")}</ul>`, viz: V.decades(), kick: [nf(pk.c), `faixas lançadas em ${pk.y}, o ano-pico do catálogo`]};
});

// CATÁLOGO · who carries the catalogue and who lost strength
rule(() => {
  if (IS.art.length < 3 || !IS.dec.length) return null;
  const [a1, a2] = IS.art, top2 = a1.c + a2.c;
  const lostCut = IS.maxY - 20;
  const lost = IS.art.slice(0, 12).filter(a => a.c >= 5 && a !== a1 && a !== a2).map(a => {
    const [, mx] = yearsSpan(a.rs); const dg = [...groupBy(a.rs.filter(t => t.year !== NI).map(t => ({d: Math.floor(t.year / 10) * 10})), "d")].map(([d, rs]) => [d, rs.length]).sort((x, y) => y[1] - x[1])[0];
    return {a, mx, dg};
  }).filter(x => x.mx !== null && x.mx <= lostCut).slice(0, 3);
  const [lo1, hi1] = yearsSpan(a1.rs), decs1 = new Set(a1.rs.filter(t => t.year !== NI).map(t => Math.floor(t.year / 10)));
  const newest = IS.dated.reduce((m, t) => (t.date > m.date ? t : m), IS.dated[0]);
  const col2 = IS.collabsOf(a2.k);
  const li = [`<li>${B(`${a1.k} lidera com ${faixas(a1.c)} (${pc1(a1.c, NN)})`)}${decs1.size >= 3 ? ` e é o único grande nome com lançamentos em ${decs1.size} décadas (${lo1} a ${hi1}).` : `.`}</li>`,
    `<li>${B(`${a2.k} tem ${a2.c}`)}${newest && newest.artist === a2.k ? `, as faixas mais recentes do catálogo (${newest.year})` : ""}${col2.length ? ` e mais ${col2.length} parceria${col2.length > 1 ? "s" : ""}` : ""}.</li>`];
  if (lost.length) li.push(`<li>${B("Perderam força:")} ${lost.map(({a, mx, dg}) => dg && dg[1] / a.c >= .6 ? `${esc(a.k)} tem ${dg[1]} de ${a.c} faixas nos ${decLabel(dg[0])}` : `${esc(a.k)} para em ${mx}`).join("; ")}.</li>`);
  return {kind: "cat", theme: 1, score: 85, wide: true,
    title: `${a1.k} e ${a2.k} ${top2 / NN >= .2 ? "carregam" : "lideram"} o catálogo${lost.length ? "; os clássicos ficaram no passado" : ""}`,
    body: `<ul>${li.join("")}</ul>`, viz: V.decComp(IS.art.filter(a => a.c >= 3).slice(0, 6)), kick: [nf(top2), `faixas somadas de ${a1.k} e ${a2.k}, ${pc1(top2, NN)} do catálogo`]};
});

// CATÁLOGO · albums that hold the repertoire
rule(() => {
  if (IS.alb.length < 6) return null;
  const k = Math.min(10, IS.alb.length), topK = IS.alb.slice(0, k), s = sum(topK, a => a.c), f = s / NN;
  const top5 = IS.alb.slice(0, 5), own = [...groupBy(top5, "artist")].sort((a, b) => b[1].length - a[1].length)[0];
  const longest = [...IS.alb].filter(a => a.k !== NI).sort((a, b) => b.sec - a.sec)[0];
  const singles = IS.alb.filter(a => a.c === 1).length;
  const li = [];
  if (own && own[1].length >= 2) li.push(`<li>${B(`${own[0]} tem ${own[1].length} dos 5 maiores álbuns`)} (${listPt(own[1].map(a => esc(a.k)))}).</li>`);
  if (longest) li.push(`<li>${B(`${longest.k} é o álbum mais longo`)}: ${faixas(longest.c)} e ${fmtDur(longest.sec)} de duração somada.</li>`);
  if (singles / IS.alb.length >= .2) li.push(`<li>Na outra ponta, ${B(`${singles} dos ${IS.alb.length} álbuns aparecem com uma única faixa`)}: uma cauda longa de singles avulsos.</li>`);
  return {kind: "cat", theme: 3, score: 75, wide: true,
    title: `${k === 10 ? "Dez" : nf(k)} álbuns seguram ${fracWord(f)} do repertório`,
    body: `<ul>${li.join("")}</ul>`, viz: V.topAlb(top5), kick: [pc1(s, NN), `das faixas estão nos ${k} maiores álbuns (${nf(s)} de ${nf(NN)})`]};
});

// CATÁLOGO · concentration
rule(() => {
  if (IS.art.length < 6) return null;
  const c = IS.art.map(a => a.c), top = n => sum(c.slice(0, n), x => x);
  const t5 = top(5), singles = IS.art.filter(a => a.c === 1).length, hhi = sum(c, x => (x / NN) ** 2);
  const seg = [[c[0], "#F0FDF7", "Líder"], [t5 - c[0], "#34D399", "2º ao 5º"], [top(10) - t5, "#047857", "6º ao 10º"], [NN - top(10), "rgba(110,231,183,.16)", `Demais ${Math.max(0, IS.art.length - 10)}`]];
  const f5 = t5 / NN;
  return {tech: true, kind: "cat", theme: 4, score: 70, wide: true,
    title: f5 >= .5 ? "Metade do catálogo está em cinco artistas" : f5 >= .35 ? "Cinco artistas respondem por mais de um terço do catálogo" : "Um catálogo pulverizado entre muitos artistas",
    body: `<ul><li>${B(`Top 1 = ${pc1(top(1), NN)} · Top 3 = ${pc1(top(3), NN)}${IS.art.length >= 10 ? ` · Top 10 = ${pc1(top(10), NN)}` : ""}`)} das faixas.</li>
      ${singles ? `<li>${B(`${singles} dos ${IS.art.length} artistas têm uma faixa só.`)} Na prática, o peso do catálogo equivale a cerca de ${Math.round(1 / hhi)} artistas de mesmo tamanho (índice de concentração de ${Math.round(hhi * 10000)} pontos).</li>` : ""}</ul>`,
    viz: V.stack(seg), kick: [pc1(t5, NN), `das faixas estão nos 5 maiores artistas (${nf(t5)} de ${nf(NN)})`]};
});

// CATÁLOGO · how recent the catalogue is
rule(() => {
  if (!IS.dated.length || IS.maxY - IS.minY < 8) return null;
  const thr = Math.min(IS.maxY, NOW_Y) - 6, rec = IS.dated.filter(t => t.year >= thr), f = rec.length / NN;
  const who = [...groupBy(rec, "artist")].map(([k, rs]) => [k, rs.length]).sort((a, b) => b[1] - a[1]).slice(0, 3);
  const ys = []; for (let y = thr; y <= Math.min(IS.maxY, NOW_Y); y++) ys.push(y);
  return {kind: "cat", theme: 0, score: f < .1 || f > .3 ? 62 : 45,
    title: f < .1 ? "Pouca renovação: o catálogo vive de lançamentos antigos" : f > .3 ? "Um catálogo atualizado, cheio de lançamentos recentes" : "Renovação moderada de lançamentos",
    body: `<p>${f < .1 ? "Só" : ""} ${B(faixas(rec.length))} (${pc0(rec.length, NN)}) foram lançadas de ${thr} em diante${who.length ? `, puxadas por ${listPt(who.map(([k, n]) => `${esc(k)} (${n})`))}` : ""}.</p>`,
    viz: V.mbars(ys.map(y => rec.filter(t => t.year === y).length), ys.map(y => "’" + String(y).slice(2)), `faixas por ano de lançamento desde ${thr}`),
    kick: [pc0(rec.length, NN), `das faixas foram lançadas de ${thr} em diante`]};
});

// CATÁLOGO + PLAYLIST · duration extremes vs. order
rule(() => {
  const withDur = T.filter(t => t.sec > 0); if (withDur.length < 10) return null;
  const lo = withDur.reduce((m, t) => t.sec < m.sec ? t : m), hi = withDur.reduce((m, t) => t.sec > m.sec ? t : m), avg = sum(withDur, t => t.sec) / withDur.length;
  const xs = withDur.map(t => t.n), ys = withDur.map(t => t.sec), mx = sum(xs, x => x) / xs.length, my = avg;
  const r = sum(xs.map((x, i) => (x - mx) * (ys[i] - my)), v => v) / Math.sqrt(sum(xs, x => (x - mx) ** 2) * sum(ys, y => (y - my) ** 2) || 1);
  const ratio = hi.sec / lo.sec, rs = r.toLocaleString("pt-BR", {maximumFractionDigits: 2, minimumFractionDigits: 2});
  return {tech: true, kind: "both", theme: 5, score: 50,
    title: Math.abs(r) < .1 ? "O gosto mudou de banda, não de formato" : r > 0 ? "As faixas ficaram mais longas com o tempo" : "As faixas ficaram mais curtas com o tempo",
    body: `<p>${Math.abs(r) < .1 ? `Os extremos são distantes, mas a duração média não acompanha a ordem de entrada (correlação de ${rs}).` : `A duração acompanha a ordem de entrada (correlação de ${rs}): as adições ${r > 0 ? "recentes são mais longas" : "recentes são mais curtas"}.`}</p>`,
    viz: V.dur([[cleanTitle(hi.title), hi.artist, hi.sec], ["Média do catálogo", faixas(withDur.length), avg], [cleanTitle(lo.title), lo.artist, lo.sec]], hi.sec),
    kick: [`${Math.round(ratio)}×`, `a faixa mais longa dura ${Math.round(ratio)} vezes a mais curta`]};
});

// PLAYLIST · who opened the playlist
rule(() => {
  if (!IS.journey) return null;
  const run = IS.runs[0], a0 = run[0].artist, k = run.length, art = IS.artMap.get(a0);
  const later = art.c - k, last = art.rs[art.rs.length - 1].n;
  const win = BY_PLAYLIST.slice(0, Math.min(60, NN));
  const g = [...groupBy(win, "artist")].map(([x, rs]) => [x, rs.length]).sort((a, b) => b[1] - a[1]);
  const second = (g.find(([x]) => x !== a0) || [])[0];
  if (k < 4){
    const w20 = BY_PLAYLIST.slice(0, 20), na = new Set(w20.map(t => t.artist)).size;
    return {kind: "pl", theme: 1, score: 55, title: "A playlist começou plural", body: `<p>As primeiras ${w20.length} faixas já reuniam ${B(`${na} artistas`)}, sem um dono da abertura.</p>`, viz: V.cells(win, g[0][0], g[1] && g[1][0]), kick: [nf(na), `artistas nas primeiras ${w20.length} adições`]};
  }
  const gone = later <= k / 2;
  return {kind: "pl", theme: 1, score: 80,
    title: gone ? `${a0} abriu a playlist e saiu de cena` : `${a0} abriu a playlist e nunca saiu`,
    body: `<p>${gone ? `Depois da abertura, vieram só ${B(faixas(later))} de ${esc(a0)} em ${nf(NN - k)} adições; a última foi a #${last}.` : `Depois da abertura, ${esc(a0)} seguiu presente: ${B(faixas(later))} a mais, até a #${last}.`}</p>`,
    viz: V.cells(win, a0, second), kick: [`${k}/${k}`, `primeiras faixas da playlist são de ${a0}`]};
});

// PLAYLIST · the catalogue leader that stopped (or that still rules)
rule(() => {
  if (!IS.journey) return null;
  const a1 = IS.art[0], last = a1.rs[a1.rs.length - 1].n, tail = NN - last;
  const myRun = IS.runsSorted.find(r => r[0].artist === a1.k), isBiggest = myRun && IS.runsSorted[0] === myRun;
  if (tail >= Math.max(15, NN * .15)){
    return {kind: "pl", theme: 1, score: 82,
      title: pickV("faded", ["O líder do catálogo é passado na playlist", "O maior artista do catálogo parou de crescer"]),
      body: `<p>${myRun && myRun.length >= 5 ? `${esc(a1.k)} tem ${isBiggest ? "a maior maratona da lista" : `uma maratona de ${myRun.length}`} (${B(`${myRun.length} seguidas, #${myRun[0].n} a #${myRun[myRun.length - 1].n}`)}) e depois some.` : `${esc(a1.k)} lidera o total, mas a última faixa entrou na ${B("#" + last)}.`}</p>`,
      viz: V.strips([a1.k]), kick: ["0", `faixas de ${a1.k} nas últimas ${nf(tail)} adições`]};
  }
  const lastCh = CHI[CHI.length - 1], x = lastCh.seg.filter(t => t.artist === a1.k).length;
  if (lastCh.top[0] === a1.k) return {kind: "pl", theme: 1, score: 78, title: `${a1.k} lidera o catálogo e também o agora`,
    body: `<p>O maior artista do catálogo continua dominando as adições recentes: é o artista mais presente no último capítulo.</p>`, viz: V.strips([a1.k]), kick: [nf(x), `das últimas ${lastCh.seg.length} adições são de ${a1.k}`]};
  return null;
});

// PLAYLIST · slow burner
let SLOW = null;
rule(() => {
  if (!IS.journey) return null;
  const cut = Math.round(NN * .78);
  const cands = IS.art.filter(a => a.c >= 8).map(a => {
    const early = a.rs.filter(t => t.n <= cut).length, late = a.c - early;
    return {a, early, late, first: a.rs[0].n};
  }).filter(x => x.first <= NN * .5 && x.late / x.a.c >= .6).sort((x, y) => (y.late - y.early) - (x.late - x.early));
  const c = cands[0]; if (!c) return null;
  SLOW = c.a.k;
  const turn = c.a.rs[c.early] ? c.a.rs[c.early].n : cut;
  const wait = turn - c.first, waitTxt = wait >= 50 ? `mais de ${Math.floor(wait / 50) * 50}` : nf(wait);
  const run = IS.runsSorted.find(r => r[0].artist === c.a.k && r[0].n > cut * .9);
  const col = IS.collabsOf(c.a.k).flatMap(x => x.rs).filter(t => t.n > cut).map(t => "#" + t.n);
  return {kind: "pl", theme: 2, score: 76,
    title: `${c.a.k} levou ${waitTxt} adições para engrenar`,
    body: `<p>Chegou na #${c.first}, mas teve só ${B(faixas(c.early))} nas primeiras ${nf(cut)} adições${run && run.length >= 5 ? `; depois explodiu, com maratona de ${run.length} (#${run[0].n} a #${run[run.length - 1].n})` : ""}${col.length ? ` e a playlist seguiu a banda até as parcerias (${listPt(col.slice(0, 3))})` : ""}. ${pickV("slow" + c.a.k, ["Foi conversão lenta, não amor à primeira vista.", "Um gosto adquirido, não instantâneo.", ""])}</p>`,
    viz: V.strips([c.a.k]), kick: [`${c.early} → ${c.late}`, `faixas nas primeiras ${nf(cut)} vs. nas últimas ${nf(NN - cut)} adições`]};
});

// PLAYLIST · passions in waves
rule(() => {
  if (!IS.journey) return null;
  const skip = new Set([IS.art[0].k, SLOW]);
  const cands = IS.art.filter(a => a.c >= 8 && !skip.has(a.k)).map(a => {
    const need = Math.max(2, a.c - 1); let best = null;
    for (let i = 0; i + need - 1 < a.rs.length; i++){ const w = a.rs[i + need - 1].n - a.rs[i].n + 1; if (!best || w < best.w) best = {w, from: a.rs[i].n, to: a.rs[i + need - 1].n}; }
    return {a, need, ...best};
  }).filter(x => x.w <= NN * .35).sort((x, y) => (y.need / y.w) - (x.need / x.w));
  const c = cands[0]; if (!c) return null;
  const stopped = IS.art.filter(a => a.c >= 6 && !skip.has(a.k) && a.k !== c.a.k && a.rs[a.rs.length - 1].n <= NN * .7).slice(0, 3);
  return {tech: true, kind: "pl", theme: 2, score: 72,
    title: stopped.length >= 2 ? pickV("waves", ["Cada fase teve um dono, e as ondas não voltam", "Paixões em ondas: intensas e passageiras"]) : `${c.a.k} foi uma febre concentrada`,
    body: `<p>${esc(c.a.k)} ${pickV("wv" + c.a.k, ["foi uma febre concentrada.", "chegou como uma onda."])}${stopped.length ? ` ${stopped.map((a, i) => `${esc(a.k)} parou na #${a.rs[a.rs.length - 1].n}`).join(", ")}.` : ""}</p>`,
    viz: V.strips([c.a.k]), kick: [`${c.need}/${c.a.c}`, `faixas de ${c.a.k} entraram entre #${c.from} e #${c.to}`]};
});

// PLAYLIST · the loyal ones
rule(() => {
  if (NN < 36) return null;
  const bl = blocks(12);
  const cands = IS.art.filter(a => a.c >= 6).map(a => {
    const cov = bl.filter(seg => seg.some(t => t.artist === a.k)).length, span = a.rs[a.rs.length - 1].n - a.rs[0].n;
    let gap = 0, gi = 0; for (let i = 1; i < a.rs.length; i++){ const g = a.rs[i].n - a.rs[i - 1].n; if (g > gap){ gap = g; gi = i; } }
    return {a, cov, span, gap, back: a.rs.slice(gi).length};
  }).filter(x => x.span >= NN * .6).sort((x, y) => y.cov - x.cov || y.span - x.span).slice(0, 3);
  if (cands.length < 2) return null;
  const arc = [...cands].sort((x, y) => y.span - x.span)[0];
  const ret = [...cands].sort((x, y) => y.gap - x.gap)[0];
  const lastW = NN - (ret.a.rs[ret.a.rs.length - ret.back].n) + 1;
  return {kind: "pl", theme: 2, score: 74,
    title: `${cands.length === 3 ? "Três" : "Duas"} bandas atravessam a playlist inteira`,
    body: `<p>${esc(cands[0].a.k)} aparece em ${cands[0].cov} dos 12 trechos${ret.gap >= NN * .2 ? `; ${esc(ret.a.k)} sumiu por ${ret.gap} posições e voltou com ${faixas(ret.back)} nas últimas ${nf(lastW)}` : ""}.</p>`,
    viz: V.strips(cands.map(x => x.a.k)), kick: [nf(arc.span), `posições de arco de ${arc.a.k}, do #${arc.a.rs[0].n} ao #${arc.a.rs[arc.a.rs.length - 1].n}`]};
});

// PLAYLIST · does the taste get newer or older?
rule(() => {
  if (!IS.journey || IS.dated.length < 30) return null;
  const decs = IS.dec.map(d => d.d);
  const pivot = decs.find(d => { const b = IS.dated.filter(t => t.year < d).length / IS.dated.length; return b >= .15 && b <= .85; }) ?? Math.round(median(IS.dated.map(t => t.year)) / 10) * 10;
  const pre = CHI.map(c => c.seg.filter(t => t.year !== NI && t.year < pivot).length);
  const w = Math.min(60, Math.floor(NN / 6));
  const mf = Math.round(median(BY_PLAYLIST.slice(0, w).filter(t => t.year !== NI).map(t => t.year)));
  const ml = Math.round(median(BY_PLAYLIST.slice(-w).filter(t => t.year !== NI).map(t => t.year)));
  const back = pre[pre.length - 1] > pre[pre.length - 2];
  const oldLbl = decLabel(pivot - 10);
  const title = ml > mf + 1 ? (back ? `Menos ${oldLbl} com o tempo, até o passado voltar` : "O gosto ficou mais novo com o tempo") : ml < mf - 1 ? "A playlist foi ficando mais nostálgica" : "O gosto mudou de artista, não de época";
  const backers = back ? [...groupBy(CHI[CHI.length - 1].seg.filter(t => t.year !== NI && t.year < pivot), "artist")].sort((a, b) => b[1].length - a[1].length).slice(0, 3).map(x => esc(x[0])) : [];
  return {kind: "pl", theme: 0, score: 78, title,
    body: `<p>${ml > mf + 1 ? "A mediana do ano de lançamento sobe ao longo da playlist" : ml < mf - 1 ? "A mediana do ano de lançamento cai ao longo da playlist" : "A mediana do ano de lançamento quase não muda"}${backers.length ? `, mas o último capítulo resgata ${listPt(backers)}` : ""}.</p>`,
    viz: V.mbars(pre, CHI.map((c, i) => `cap. ${i + 1}`), `faixas lançadas antes de ${pivot}, por capítulo`),
    kick: [`${mf} → ${ml}`, `ano mediano de lançamento: primeiras ${w} vs. últimas ${w} adições`]};
});

// PLAYLIST · binge adding
rule(() => {
  if (!IS.journey) return null;
  const big = IS.runs.filter(r => r.length >= 5), inBig = sum(big, r => r.length), f = inBig / NN;
  const ar = [...IS.albRuns].filter(r => r.length >= 5).sort((a, b) => b.length - a.length).slice(0, 4);
  const albTxt = ar.length ? (() => { const g = []; for (const r of ar){ const last = g[g.length - 1]; if (last && last.n === r.length) last.names.push(r[0].album); else g.push({n: r.length, names: [r[0].album]}); } return g.map(x => `${listPt(x.names.map(esc))} (${x.n}${x.names.length > 1 ? " cada" : " seguidas"})`).join(", "); })() : "";
  const top = IS.runsSorted.slice(0, 5); if (!top.length || top[0].length < 3) return null;
  return {tech: true, kind: "pl", theme: 3, score: f >= .25 ? 68 : 48,
    title: f >= .3 ? "Você adiciona em blocos, não em singles" : f >= .15 ? "Maratonas pontuais no meio de faixas soltas" : "Você monta a playlist música a música",
    body: `<p>${ar.length ? `Álbuns entram quase inteiros de uma vez: ${albTxt}.` : `As maiores sequências seguidas são curtas: ${top[0].length} faixas no máximo.`}</p>`,
    viz: V.runs(top, "maiores sequências seguidas do mesmo artista"), kick: [pc0(inBig, NN), `das faixas entraram em sequências de 5+ do mesmo artista`]};
});

// PLAYLIST · discovery pace
rule(() => {
  if (!IS.journey) return null;
  const seen = new Set(), firstAt = []; for (const t of BY_PLAYLIST){ if (!seen.has(t.artist)){ seen.add(t.artist); firstAt.push(t); } }
  const total = seen.size, half = firstAt[Math.ceil(total / 2) - 1], cut = Math.round(NN * 2 / 3);
  const fresh = firstAt.filter(t => t.n > cut), col = fresh.filter(t => splitArtistsAll(t.artist).length > 1);
  const best = [...CHI].sort((a, b) => b.arts - a.arts)[0], slow = fresh.length <= Math.max(2, total * .2);
  const colOwner = col.length ? (splitArtists(col[0].artist).map(p => IS.art.find(a => a.k.toLowerCase() === p)).find(Boolean) || {}).k : null;
  return {tech: true, kind: "pl", theme: 4, score: 66,
    title: slow ? "A descoberta desacelerou" : "A playlist segue descobrindo artistas",
    body: `<p>Metade dos ${total} artistas já tinha aparecido até a #${half.n}. O capítulo ${best.i + 1} reuniu ${best.arts} artistas em ${best.seg.length} faixas.</p>`,
    viz: V.disc(), mvClass: "disc",
    kick: [nf(fresh.length), `artista${fresh.length === 1 ? "" : "s"} novo${fresh.length === 1 ? "" : "s"} nas últimas ${nf(NN - cut)} adições${col.length ? `, ${col.length} ${col.length > 1 ? "deles parcerias" : "deles parceria"}${colOwner ? ` de ${colOwner}` : ""}` : ""}`]};
});

// PLAYLIST · same title recorded by different artists
rule(() => {
  if (!IS.journey) return null;
  const g = groupBy(T.map(t => ({...t, key: cleanTitle(t.title).toLowerCase()})).filter(t => t.key.length > 2), "key");
  const pairs = [...g.values()].filter(rs => new Set(rs.map(r => r.artist)).size > 1).map(rs => {
    const s = [...rs].sort((a, b) => a.n - b.n), a = s[0], b = s.find(x => x.artist !== a.artist);
    return {title: cleanTitle(a.title), a, b, older: a.year !== NI && b.year !== NI && a.year <= b.year};
  });
  if (!pairs.length) return null;
  const k = pairs.filter(p => p.older).length, m = pairs.length;
  return {tech: true, kind: "pl", theme: 5, score: 58 + Math.min(m, 4) * 3,
    title: k === m ? "A versão mais antiga sempre chega primeiro" : k === 0 ? "A gravação mais nova sempre chegou primeiro" : "Títulos repetidos, ordens diferentes",
    body: `<p>${m === 1 ? "Um título aparece" : `${m} títulos aparecem`} gravado${m > 1 ? "s" : ""} por dois artistas, e ${k === m ? "a gravação mais antiga sempre entrou antes" : k === 0 ? "a gravação mais recente entrou antes" : `em ${k} de ${m} casos a gravação mais antiga entrou antes`}.</p>`,
    viz: V.pairs(pairs.slice(0, 4)), kick: [`${k} de ${m}`, `versões mais antigas entraram primeiro na playlist`]};
});

/* ---------- rules from the extra Spotify data (only when enough tracks have it) ---------- */
const MT = T.filter(t => t.m && t.m.x !== undefined);
const covNote = M => M.length < NN ? `<p class="muted" style="margin-top:10px">Com base nas ${nf(M.length)} faixas que têm esse dado (importadas por link ou atualizadas).</p>` : "";

// CATÁLOGO · explicit lyrics
rule(() => {
  if (MT.length < 20) return null;
  const ex = MT.filter(t => t.m.x).length, f = ex / MT.length;
  const by = IS.art.map(a => { const mm = a.rs.filter(t => t.m && t.m.x !== undefined); return {a, n: mm.length, e: mm.filter(t => t.m.x).length}; })
    .filter(x => x.n >= 5).map(x => ({...x, f: x.e / x.n})).sort((p, q) => q.f - p.f || q.e - p.e);
  const top = by[0], clean = by.filter(x => x.e === 0).sort((p, q) => q.n - p.n)[0];
  const li = [];
  if (top && top.e) li.push(`<li>${B(`${top.a.k} é o mais "boca suja"`)}: ${top.e} de ${top.n} faixas explícitas (${pc0(top.e, top.n)}).</li>`);
  if (clean) li.push(`<li>${B(`${clean.a.k} não tem nenhuma explícita`)} em ${faixas(clean.n)}.</li>`);
  if (!li.length) li.push(`<li>${B(`${faixas(ex)} explícitas`)} de ${nf(MT.length)}.</li>`);
  return {extra: true, kind: "cat", theme: 5, score: f >= .4 || f <= .05 ? 64 : 50,
    title: f >= .5 ? "Mais da metade da playlist tem palavrão" : f >= .25 ? "Uma playlist de linguagem pesada" : f <= .05 ? "Uma playlist quase sem palavrão" : "Explícitas são minoria",
    body: `<ul>${li.join("")}</ul>${covNote(MT)}`,
    viz: V.stack([[ex, "#F0FDF7", "Explícitas"], [MT.length - ex, "#047857", "Sem palavrão"]], MT.length),
    kick: [pc0(ex, MT.length), "das faixas são marcadas como explícitas no Spotify"]};
});

// CATÁLOGO · album person or single person
rule(() => {
  const M = MT.filter(t => t.m.ty); if (M.length < 20) return null;
  const c = {album: 0, single: 0, compilation: 0}; M.forEach(t => { if (t.m.ty in c) c[t.m.ty]++; });
  const fs = c.single / M.length;
  const singArt = [...groupBy(M.filter(t => t.m.ty === "single"), "artist")].map(([k, rs]) => [k, rs.length]).sort((a, b) => b[1] - a[1])[0];
  const li = [];
  if (singArt && singArt[1] >= 2) li.push(`<li>${B(`${singArt[0]} é quem mais aparece em single`)}: ${faixas(singArt[1])}.</li>`);
  if (c.compilation) li.push(`<li>${B(`${faixas(c.compilation)} vieram de coletâneas`)} (greatest hits, trilhas sonoras…).</li>`);
  li.push(`<li>${B(`${faixas(c.album)} vêm de álbuns de estúdio`)}.</li>`);
  return {extra: true, kind: "cat", theme: 3, score: fs >= .35 || fs <= .08 ? 63 : 49,
    title: fs >= .35 ? "Você é de single, não de álbum" : fs <= .08 ? "Você é de álbum: quase nada vem de single solto" : "Álbuns na base, singles no tempero",
    body: `<ul>${li.join("")}</ul>${covNote(M)}`,
    viz: V.stack([[c.album, "#34D399", "Álbum"], [c.single, "#A3E635", "Single/EP"], [c.compilation, "#047857", "Coletânea"]], M.length),
    kick: [pc0(c.single, M.length), "das faixas vieram de singles ou EPs"]};
});

// CATÁLOGO · mainstream or deep cuts (only if Spotify still sends popularity)
rule(() => {
  const P = MT.filter(t => typeof t.m.p === "number"); if (P.length < 20) return null;
  const avg = sum(P, t => t.m.p) / P.length, srt = [...P].sort((a, b) => b.m.p - a.m.p);
  const hits = P.filter(t => t.m.p >= 60).length, deep = P.filter(t => t.m.p < 30).length;
  const byArt = IS.art.map(a => { const pp = a.rs.filter(t => t.m && typeof t.m.p === "number"); return {a, n: pp.length, avg: pp.length ? sum(pp, t => t.m.p) / pp.length : 0}; }).filter(x => x.n >= 4).sort((x, y) => x.avg - y.avg);
  const under = byArt[0];
  return {extra: true, kind: "cat", theme: 4, score: avg >= 60 || avg < 35 ? 67 : 55,
    title: avg >= 60 ? "Uma playlist de hits" : avg < 35 ? "Você garimpa o lado B" : "Entre os hits e o lado B",
    body: `<ul><li>${B(`${faixas(hits)} são hits`)} (popularidade 60+) e ${B(`${faixas(deep)} são lado B`)} (abaixo de 30).</li>
      ${under ? `<li>${B(`${under.a.k} é o seu artista mais "underground"`)}: popularidade média ${Math.round(under.avg)} nas suas faixas.</li>` : ""}</ul>${covNote(P)}`,
    viz: V.bars([[cleanTitle(srt[0].title), srt[0].artist, srt[0].m.p], ["Média da playlist", faixas(P.length), Math.round(avg)], [cleanTitle(srt[srt.length - 1].title), srt[srt.length - 1].artist, srt[srt.length - 1].m.p]], 100),
    kick: [String(Math.round(avg)), "de popularidade média no Spotify (0 a 100)"]};
});

// CATÁLOGO · genre profile
const GT = T.filter(t => t.ge && t.ge.length);
const GCOUNT = (() => { const m = new Map(); for (const t of GT) for (const g of t.ge) m.set(g, (m.get(g) || 0) + 1); return [...m].sort((a, b) => b[1] - a[1]); })();
rule(() => {
  if (GT.length < 20 || GCOUNT.length < 2) return null;
  const [g1, n1] = GCOUNT[0], f1 = n1 / GT.length;
  const top = GCOUNT.slice(0, 5).map(([k, c]) => {
    const art = [...groupBy(GT.filter(t => t.ge.includes(k)), "artist")].sort((a, b) => b[1].length - a[1].length)[0];
    return {k: capFirst(k), c, artist: art ? art[0] : ""};
  });
  const solo = GCOUNT.filter(([, c]) => c === 1).length;
  return {extra: true, kind: "cat", theme: 4, score: 80, wide: true,
    title: f1 >= .4 ? `${capFirst(g1)} domina a playlist` : f1 >= .2 ? `${capFirst(g1)} lidera, mas tem companhia` : `${nf(GCOUNT.length)} gêneros e nenhum dominante`,
    body: `<ul><li>${B(`${capFirst(g1)} aparece em ${pc0(n1, GT.length)} das faixas`)} com gênero conhecido.</li>
      <li>${B(`${nf(GCOUNT.length)} gêneros diferentes`)} no total${solo ? `, ${solo} deles com uma faixa só` : ""}.</li></ul>
      <p class="muted" style="margin-top:10px">O Spotify dá gênero ao artista, não à música: cada faixa conta em todos os gêneros do artista.${GT.length < NN ? ` Base: ${nf(GT.length)} faixas com gênero.` : ""}</p>`,
    viz: V.topAlb(top), kick: [nf(GCOUNT.length), "gêneros diferentes na playlist"]};
});

// PLAYLIST · the genre that grew over time
rule(() => {
  if (!IS.journey || GT.length < 40) return null;
  const G = BY_PLAYLIST.filter(t => t.ge && t.ge.length), half = Math.floor(G.length / 2);
  const share = (rs, g) => rs.filter(t => t.ge.includes(g)).length / rs.length;
  const a = G.slice(0, half), b = G.slice(half);
  const deltas = GCOUNT.filter(([, c]) => c >= 8).map(([g]) => ({g, from: share(a, g), to: share(b, g)})).map(x => ({...x, d: x.to - x.from})).sort((x, y) => y.d - x.d);
  if (!deltas.length) return null;
  const up = deltas[0], down = deltas[deltas.length - 1];
  if (up.d < .08) return null;
  const perCh = CHI.map(c => c.seg.filter(t => t.ge && t.ge.includes(up.g)).length);
  return {extra: true, kind: "pl", theme: 0, score: 77,
    title: `${capFirst(up.g)} ganhou espaço com o tempo`,
    body: `<p>Na primeira metade da playlist, ${esc(up.g)} estava em ${B(pc0(up.from, 1))} das faixas; na segunda, em ${B(pc0(up.to, 1))}.${down.d <= -.08 ? ` No caminho contrário, ${esc(down.g)} caiu de ${pc0(down.from, 1)} para ${pc0(down.to, 1)}.` : ""}</p>`,
    viz: V.mbars(perCh, CHI.map((c, i) => `cap. ${i + 1}`), `faixas de ${up.g} por capítulo da playlist`),
    kick: [`${pc0(up.from, 1)} → ${pc0(up.to, 1)}`, `das faixas com ${up.g}: primeira vs. segunda metade`]};
});

/* ---------- selection, ordering and row packing ---------- */
/* a aba Insights tem duas visões: simples (resumo e cards principais) e técnica (jornada,
   cards avançados, metodologia). Cada bloco leva data-ins="simple|tech" no HTML, cada card leva tech: true;
   o botão do topo alterna e a escolha fica salva neste navegador */
const TECH_KEY = "catalogo-musical:tech-insights";
let techOn = false; try { techOn = localStorage.getItem(TECH_KEY) === "1"; } catch (e) {}
let techCount = 0;
function buildCards(){
  let cards = RULES.map(fn => { try { return fn(); } catch (e) { console.warn("regra ignorada", e); return null; } }).filter(Boolean);
  techCount = cards.filter(c => c.tech).length;
  cards = cards.filter(c => !!c.tech === techOn);
  // os cards dos dados extras (gênero, explícita…) sempre entram, por cima dos 14 clássicos de maior nota
  cards.sort((a, b) => b.score - a.score);
  cards = [...cards.filter(c => !c.extra).slice(0, 14), ...cards.filter(c => c.extra)];
  // interleave: by theme, catalogue first then playlist, so related readings sit side by side
  cards.sort((a, b) => a.theme - b.theme || (a.kind === "cat" ? 0 : 1) - (b.kind === "cat" ? 0 : 1) || b.score - a.score);
  const rows = [];
  for (const c of cards){ const w = c.wide ? 2 : 1; let r = rows.find(r => r.free >= w); if (!r){ r = {items: [], free: 3}; rows.push(r); } r.items.push(c); r.free -= w; }
  const last = rows[rows.length - 1];
  if (last && last.free){
    const normal = last.items.find(c => !c.wide);
    if (last.free === 1 && normal) normal.wide = true; else last.items[0].full = true;
  }
  return rows.flatMap(r => r.items);
}
function renderCards(){
  const cards = buildCards();
  const tag = k => k === "cat" ? `<span class="tag">Catálogo</span>` : k === "pl" ? `<span class="tag pl">Playlist</span>` : `<span class="tag">Catálogo</span> <span class="tag pl">Playlist</span>`;
  $("#mix").innerHTML = cards.map((c, i) => {
    const wide = c.wide || c.full;
    return `<article class="card ic${wide ? " wide" : ""}${c.full ? " full" : ""} rise" style="--d:${i + 3}">
      <div class="num">${String(i + 1).padStart(2, "0")} ${tag(c.kind)}</div><h3>${esc(c.title)}</h3>
      ${wide ? `<div class="split"><div class="mv${c.mvClass ? " " + c.mvClass : ""}">${c.viz}</div>${c.body}</div>` : `${c.body}<div class="mv${c.mvClass ? " " + c.mvClass : ""}">${c.viz}</div>`}
      <div class="kick"><b>${esc(c.kick[0])}</b><span>${esc(c.kick[1])}</span></div></article>`;
  }).join("");
  return cards;
}

/* ---------- hero ---------- */
function renderHero(){
  const N = NN, a0run = IS.runs[0] || [], a0 = a0run.length ? a0run[0].artist : "";
  const pd = [...IS.dec].sort((a, b) => b.c - a.c)[0];
  const c5 = sum(IS.art.slice(0, 5), a => a.c), f5 = c5 / N;
  const conc = f5 >= .5 ? "concentrado em poucos artistas" : f5 >= .35 ? "puxado por um grupo de artistas" : "espalhado por muitos artistas";
  const lastCh = CHI[CHI.length - 1], opener = a0run.length >= 3 ? a0 : (CHI[0] ? CHI[0].top[0] : a0), current = lastCh ? lastCh.top[0] : "";
  let h2 = `Um catálogo ${pd ? `forte nos <em>${decLabel(pd.d)}</em>, ` : ""}${conc}`;
  if (IS.journey) h2 += opener === current ? `, fiel a <em>${esc(opener)}</em> do começo ao fim.` : `, que começou com <em>${esc(opener)}</em> e hoje respira <em>${esc(current)}</em>.`;
  else h2 += ".";
  const tot = sum(T, t => t.sec);
  const facts = [];
  const add = (lbl, n, d) => facts.push(`<div class="fact"><div class="eyebrow">${esc(lbl)}</div><div class="n">${esc(n)}</div><div class="d">${esc(d)}</div></div>`);
  const cat = [], pl = [];
  if (pd) cat.push([`Faixas dos ${decLabel(pd.d)}`, pc0(pd.c, N), `${nf(pd.c)} de ${nf(N)}`]);
  if (IS.art.length >= 5) cat.push(["Top 5 artistas", pc0(c5, N), `${nf(c5)} de ${nf(N)} faixas`]);
  if (IS.dated.length && IS.maxY - IS.minY >= 8){ const thr = Math.min(IS.maxY, NOW_Y) - 6, r = IS.dated.filter(t => t.year >= thr).length; cat.push([`Lançadas desde ${thr}`, pc0(r, N), `${nf(r)} de ${nf(N)}`]); }
  const sAlb = IS.alb.filter(a => a.c === 1).length; if (IS.alb.length >= 6) cat.push(["Álbuns com 1 faixa", nf(sAlb), `de ${nf(IS.alb.length)} álbuns`]);
  cat.push(["Artistas únicos", nf(IS.art.length), `em ${nf(IS.alb.length)} álbuns`], ["Tempo de música", fmtLong(tot), `${nf(N)} faixas`]);
  if (IS.journey){
    if (a0run.length >= 3) pl.push([`Primeiras ${a0run.length} faixas`, `${a0run.length}/${a0run.length}`, `todas de ${a0}`]);
    const a1 = IS.art[0], tail = N - a1.rs[a1.rs.length - 1].n;
    if (tail >= Math.max(15, N * .15)) pl.push([`${a1.k} nas últimas ${nf(tail)}`, "0", `o líder parou em #${a1.rs[a1.rs.length - 1].n}`]);
    if (SLOW){ const cut = Math.round(N * .78), late = IS.artMap.get(SLOW).rs.filter(t => t.n > cut).length; pl.push([`${SLOW} nas últimas ${nf(N - cut)}`, nf(late), `${pc0(late, N - cut)} das adições recentes`]); }
    const big = sum(IS.runs.filter(r => r.length >= 5), r => r.length); if (big) pl.push(["Entraram em maratonas", pc0(big, N), `${nf(big)} faixas em sequências de 5+`]);
    if (lastCh) pl.push([`Dono do último capítulo`, lastCh.top[0], `${lastCh.top[1]} de ${lastCh.seg.length} adições`]);
  }
  for (let i = 0; facts.length < 8 && (i < cat.length || i < pl.length); i++){ if (cat[i]) add(...cat[i]); if (pl[i] && facts.length < 8) add(...pl[i]); }
  $("#ins-hero").innerHTML = `<div class="eyebrow">Leitura executiva · catálogo${IS.journey ? " e playlist" : ""}</div><h2>${h2}</h2>
    <p>${nf(N)} faixas, ${nf(IS.art.length)} artistas e ${nf(IS.alb.length)} álbuns, somando ${fmtLong(tot)} de música.${IS.journey ? ` A coluna "número" é a ordem de entrada na playlist: a #1 foi a primeira faixa adicionada e a #${nf(N)}, a mais recente.` : ""} Todos os números vêm exclusivamente da lista.</p>
    <div class="facts">${facts.join("")}</div>`;
}

/* ---------- journey visuals ---------- */
function renderJourney(){
  $("#journey").style.display = IS.journey ? "" : "none";
  if (!IS.journey) return;
  $("#chapters").innerHTML = CHI.map(c => `<div class="chap" style="--o:${(.25 + .75 * c.share / Math.max(...CHI.map(x => x.share))).toFixed(2)}" data-i="${c.i}">
      <div class="cn">CAP. ${c.i + 1}</div><div class="ct">${esc(c.name)}</div><div class="cr">#${c.seg[0].n} → #${c.seg[c.seg.length - 1].n}</div>
      <div class="cw"><b>${esc(c.top[0])}</b>${c.top[1]} de ${c.seg.length} faixas${c.g[1] ? ` · depois ${esc(c.g[1][0])} (${c.g[1][1]})` : ""}</div>
      <div class="cs"><span><b>${c.arts}</b> artistas</span><span><b>${c.fresh}</b> novos</span>${isNaN(c.yr) ? "" : `<span>lanç. mediano <b>${Math.round(c.yr)}</b></span>`}</div></div>`).join("");
  document.querySelectorAll(".chap").forEach(el => bindTip(el, () => {
    const c = CHI[+el.dataset.i];
    return `<div class="eyebrow">Capítulo ${c.i + 1} · #${c.seg[0].n} a #${c.seg[c.seg.length - 1].n}</div><div class="t">${esc(c.name)}</div>
      <div class="k"><span>Tempo adicionado</span><b>${fmtLong(sum(c.seg, r => r.sec))}</b></div><hr>
      <div class="eyebrow">Quem mais entrou</div>${sbars(c.g.slice(0, 4).map(([a, n]) => [a, `${n} · ${pc0(n, c.seg.length)}`, n / c.seg.length]))}`;
  }));
  const BL = blocks(NN >= 36 ? 12 : 6);
  const top = IS.art.slice(0, 10).map(a => a.k);
  const grid = top.map(a => BL.map(seg => seg.filter(r => r.artist === a)));
  const mx = Math.max(1, ...grid.flat().map(x => x.length));
  let html = "";
  top.forEach((a, ai) => {
    html += `<div class="hn">${esc(a)}</div>`;
    grid[ai].forEach((rs, bi) => { const k = rs.length / mx; const bg = rs.length ? `hsla(156, 70%, ${18 + 50 * k}%, ${.35 + .65 * k})` : "rgba(110,231,183,.04)";
      html += `<div class="hc" data-a="${ai}" data-b="${bi}" data-bg="${bg}" style="background:rgba(110,231,183,.04);color:${k > .55 ? "#022C22" : "var(--ink)"}">${rs.length || ""}</div>`; });
  });
  html += `<div></div>` + BL.map((seg, i) => `<div class="hx">${i % 3 === 0 ? "#" + seg[0].n : ""}</div>`).join("");
  const heat = $("#heat"); heat.style.gridTemplateColumns = `auto repeat(${BL.length},minmax(0,1fr))`; heat.innerHTML = html;
  $("#heat-hint").textContent = `cada coluna = ~${Math.round(NN / BL.length)} adições · passe o mouse`;
  heat.querySelectorAll(".hc").forEach(el => bindTip(el, () => {
    const a = top[+el.dataset.a], seg = BL[+el.dataset.b], rs = grid[+el.dataset.a][+el.dataset.b];
    return `<div class="eyebrow">Adições #${seg[0].n} a #${seg[seg.length - 1].n}</div><div class="t">${esc(a)}</div>
      <div class="k"><span>Faixas neste trecho</span><b>${rs.length} de ${seg.length} · ${pc0(rs.length, seg.length)}</b></div>
      ${rs.length ? `<hr><div class="eyebrow">Entraram aqui</div>${rs.slice(0, 4).map(r => `<div class="k"><span style="color:var(--ink)">#${r.n} ${esc(r.title)}</span></div>`).join("")}${rs.length > 4 ? `<div class="k"><span>+ ${rs.length - 4} faixas</span></div>` : ""}` : `<hr><div class="k"><span>Nenhuma faixa neste trecho</span></div>`}`;
  }));
}
function drawScatter(){
  const box = $("#scatter"); if (!box || !IS.journey) return;
  const W = box.clientWidth, H = box.clientHeight; if (!W) return;
  const pts = BY_PLAYLIST.filter(t => t.year !== NI);
  if (pts.length < 10){ box.innerHTML = `<p style="color:var(--ink-3);font-size:13px">Poucas faixas com data de lançamento para este gráfico.</p>`; return; }
  const y0 = Math.floor(Math.min(...pts.map(t => t.year)) / 10) * 10, y1 = Math.ceil((Math.max(...pts.map(t => t.year)) + 1) / 10) * 10;
  const L = 36, R = 8, Tp = 20, Bt = 22;
  const X = n => L + (n - 1) / Math.max(1, NN - 1) * (W - L - R);
  const Y = y => Tp + (1 - (y - y0) / (y1 - y0)) * (H - Tp - Bt);
  let svg = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Ano de lançamento de cada faixa pela ordem de entrada na playlist">`;
  CHI.forEach((c, i) => { const xa = X(c.seg[0].n), xb = X(c.seg[c.seg.length - 1].n);
    if (i % 2) svg += `<rect x="${xa}" y="${Tp - 16}" width="${xb - xa}" height="${H - Tp - Bt + 16}" fill="rgba(110,231,183,.04)" rx="6"/>`;
    svg += `<text x="${(xa + xb) / 2}" y="${Tp - 6}" text-anchor="middle">cap. ${i + 1}</text>`; });
  const step = (y1 - y0) > 60 ? 20 : 10;
  for (let y = y0; y <= y1; y += step) svg += `<line x1="${L}" x2="${W - R}" y1="${Y(y)}" y2="${Y(y)}" stroke="rgba(110,231,183,.07)" stroke-dasharray="2 4"/><text x="${L - 8}" y="${Y(y) + 3}" text-anchor="end">${y}</text>`;
  const ticks = [1, Math.round(NN / 4), Math.round(NN / 2), Math.round(NN * 3 / 4), NN];
  ticks.forEach((n, i, arr) => svg += `<text x="${X(n)}" y="${H - 6}" text-anchor="${i === 0 ? "start" : i === arr.length - 1 ? "end" : "middle"}">#${n}</text>`);
  const pivot = IS.dec.length > 1 ? IS.dec[Math.floor(IS.dec.length / 2)].d : 2000;
  pts.forEach(t => svg += `<circle cx="${X(t.n)}" cy="${Y(t.year)}" r="3" fill="${t.year < pivot ? "#6EE7B7" : "#10B981"}" opacity=".55"/>`);
  const win = Math.max(5, Math.min(41, Math.floor(pts.length / 8) | 1));
  const med = pts.map((t, i) => { const w = pts.slice(Math.max(0, i - (win >> 1)), i + (win >> 1) + 1).map(x => x.year); return [X(t.n), Y(median(w))]; });
  svg += `<path d="M${med.map(p => p.map(v => v.toFixed(1)).join(",")).join("L")}" fill="none" stroke="#F0FDF7" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" style="filter:drop-shadow(0 0 6px rgba(167,243,208,.6))"/>`;
  svg += `<circle id="sc-hot" r="6" fill="none" stroke="#F0FDF7" stroke-width="2" opacity="0"/></svg>`;
  box.innerHTML = svg;
  const s = box.querySelector("svg"), hot = s.querySelector("#sc-hot");
  s.addEventListener("pointermove", e => {
    const b = s.getBoundingClientRect(), x = e.clientX - b.left, y = e.clientY - b.top;
    let best = null, bd = 1e9;
    for (const t of pts){ const d = Math.hypot(X(t.n) - x, (Y(t.year) - y) * .6); if (d < bd){ bd = d; best = t; } }
    if (!best || bd > 40){ hot.setAttribute("opacity", 0); hideTip(); return; }
    hot.setAttribute("cx", X(best.n)); hot.setAttribute("cy", Y(best.year)); hot.setAttribute("opacity", 1);
    const i = pts.indexOf(best), md = Math.round(median(pts.slice(Math.max(0, i - (win >> 1)), i + (win >> 1) + 1).map(x => x.year)));
    showTip(`<div class="eyebrow">#${best.n} na playlist</div><div class="t">${esc(best.title)}</div>
      <div class="k"><span>${esc(best.artist)}</span></div><div class="k"><span>${esc(best.album)}</span></div><hr>
      <div class="k"><span>Lançada em</span><b>${best.year}</b></div>
      <div class="k"><span>Mediana do trecho</span><b>${md}</b></div>
      <div class="k"><span>Vs. o trecho</span><b>${best.year === md ? "na média" : (best.year > md ? "+" : "−") + Math.abs(best.year - md) + " anos"}</b></div>`, e);
  });
  s.addEventListener("pointerleave", () => { hot.setAttribute("opacity", 0); hideTip(); });
}
function renderDisc(){
  const el = $("#disc"); if (!el) return;
  const seen = new Set(); const cum = BY_PLAYLIST.map(t => (seen.add(t.artist), seen.size));
  const W = 300, H = 120, n = cum.length, mx = cum[n - 1];
  const P = cum.map((c, i) => `${(i / Math.max(1, n - 1) * W).toFixed(1)},${(H - 4 - (c / mx) * (H - 8)).toFixed(1)}`).join("L");
  const half = cum.findIndex(c => c >= Math.ceil(mx / 2));
  el.innerHTML = `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" style="width:100%;flex:1;min-height:${H}px;display:block;overflow:visible" aria-label="Artistas acumulados ao longo da playlist">
    <defs><linearGradient id="dg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="rgba(16,185,129,.35)"/><stop offset="1" stop-color="rgba(16,185,129,0)"/></linearGradient></defs>
    <path d="M0,${H}L${P}L${W},${H}Z" fill="url(#dg)"/><path d="M${P}" fill="none" stroke="#6EE7B7" stroke-width="2" vector-effect="non-scaling-stroke"/>
    <line x1="${half / Math.max(1, n - 1) * W}" x2="${half / Math.max(1, n - 1) * W}" y1="0" y2="${H}" stroke="rgba(240,253,247,.5)" stroke-dasharray="3 3" vector-effect="non-scaling-stroke"/></svg>
    <div style="display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap;font-size:11px;color:var(--ink-3);margin-top:6px"><span>artistas acumulados</span><span>metade em #${BY_PLAYLIST[half].n}</span><span>${mx} no total</span></div>`;
  el.style.display = "flex"; el.style.flexDirection = "column"; el.style.flex = "1";
}
function renderNote(){
  $("#ins-note").textContent = `${IS.journey ? `Ordem de entrada = coluna "número" da lista (#1 é a mais antiga na playlist). Capítulos = 6 blocos de ~${Math.round(NN / 6)} adições; trechos = ${NN >= 36 ? 12 : 6} blocos de ~${Math.round(NN / (NN >= 36 ? 12 : 6))}. ` : ""}Cada faixa conta uma vez para o artista exatamente como está escrito na lista. Índice de concentração = soma dos quadrados das participações (HHI). Os textos desta aba são gerados por regras a partir dos dados atuais e mudam quando a lista muda.`;
}
function renderTechBar(){
  const b = $("#tech-toggle");
  b.setAttribute("aria-pressed", techOn);
  b.textContent = techOn ? "Ver insights simples" : "Ver insights técnicos";
  $("#insights").dataset.view = techOn ? "tech" : "simple";
  $("#tech-hint").textContent = techOn ? "Mostrando só a análise técnica: jornada da playlist, cards avançados e metodologia." : "Mostrando a leitura simples: resumo e cards principais.";
}
$("#tech-toggle").addEventListener("click", () => {
  techOn = !techOn;
  try { localStorage.setItem(TECH_KEY, techOn ? "1" : "0"); } catch (e) {}
  renderCards(); renderDisc(); renderTechBar(); animateInsights();
});
(function buildInsights(){
  try { renderHero(); renderJourney(); renderCards(); renderDisc(); renderTechBar(); renderNote(); }
  catch (e){ console.error(e); $("#mix").innerHTML = `<article class="card ic"><h3>Não foi possível gerar os insights</h3><p>${esc(e.message)}</p></article>`; }
})();

function animateInsights(){
  requestAnimationFrame(() => requestAnimationFrame(() => {
    document.querySelectorAll("#insights .decades i").forEach(i => i.style.height = `${Math.max(4, i.dataset.h / 100 * 80)}px`);
    document.querySelectorAll("#insights .stack i").forEach(i => i.style.flexGrow = i.dataset.g);
    document.querySelectorAll("#insights i[data-w]").forEach(i => i.style.width = i.dataset.w + "%");
    document.querySelectorAll("#heat .hc").forEach((el, k) => setTimeout(() => el.style.background = el.dataset.bg, k * 6));
    drawScatter();
  }));
}


/* ================= DATA TOOLS: import · table · export ================= */
const ICON = {
  list: '<svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 3.5h12M2 8h12M2 12.5h8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" fill="none"/></svg>',
  up: '<svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11V2.5M4.5 6 8 2.5 11.5 6M2.5 13.5h11" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>',
  down: '<svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2.5V11M4.5 7.5 8 11l3.5-3.5M2.5 13.5h11" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>',
  x: '<svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
  sync: '<svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true"><path d="M13.5 6.5A5.5 5.5 0 0 0 3.3 4.6M2.5 9.5a5.5 5.5 0 0 0 10.2 1.9M3 2v3h3M13 14v-3h-3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>'
};
const pad2 = n => String(n).padStart(2, "0");
const durTxt = s => !s ? "" : `${Math.floor(s / 60)}:${pad2(s % 60)}`;
const today = () => { const d = new Date(); return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`; };
const currentRows = () => BY_PLAYLIST.map(t => { const r = [t.n, t.title, t.artist === NI ? "" : t.artist, t.album === NI ? "" : t.album, t.sec, t.date]; if (t.m) r.push(t.m); return r; });

/* ---------- modal system ---------- */
const modalStack = [];
function openModal({title, sub = "", body, foot, size = "", headerExtra = "", onClose}){
  const bg = document.createElement("div");
  bg.className = "mbg";
  bg.innerHTML = `<div class="modal${size ? " m-" + size : ""}" role="dialog" aria-modal="true" aria-label="${esc(title)}">
    <header class="mh"><div class="mh-left"><div><h3>${esc(title)}</h3>${sub ? `<p>${sub}</p>` : ""}</div>${headerExtra ? `<div class="mh-extra">${headerExtra}</div>` : ""}</div><button class="mx" type="button" aria-label="Fechar">${ICON.x}</button></header>
    <div class="mb"></div><footer class="mf"></footer></div>`;
  const m = bg.querySelector(".modal");
  if (typeof body === "string") m.querySelector(".mb").innerHTML = body; else m.querySelector(".mb").appendChild(body);
  if (foot) { if (typeof foot === "string") m.querySelector(".mf").innerHTML = foot; else m.querySelector(".mf").appendChild(foot); } else m.querySelector(".mf").remove();
  const close = () => { bg.classList.remove("on"); setTimeout(() => bg.remove(), 250); const i = modalStack.indexOf(api); if (i >= 0) modalStack.splice(i, 1); onClose && onClose(); if (!modalStack.length) document.body.style.overflow = ""; };
  const api = {bg, m, close, q: s => m.querySelector(s)};
  bg.addEventListener("pointerdown", e => { if (e.target === bg) close(); });
  m.querySelector(".mx").addEventListener("click", close);
  document.body.appendChild(bg); document.body.style.overflow = "hidden";
  requestAnimationFrame(() => bg.classList.add("on"));
  modalStack.push(api);
  setTimeout(() => { const f = m.querySelector("[autofocus], textarea, input[type=search]"); f && f.focus({preventScroll: true}); }, 80);
  return api;
}
document.addEventListener("keydown", e => { if (e.key === "Escape" && modalStack.length){ e.stopPropagation(); modalStack[modalStack.length - 1].close(); } }, true);
function confirmModal({title, html, ok = "Confirmar", cancel = "Cancelar", danger = false, extra}){
  return new Promise(res => {
    let done = false;
    const foot = document.createElement("div"); foot.className = "mfrow";
    foot.innerHTML = `${extra ? `<button class="gbtn" type="button" data-x>${extra.label}</button>` : ""}<span class="sp"></span><button class="gbtn" type="button" data-c>${cancel}</button><button class="pbtn ${danger ? "danger" : ""}" type="button" data-o autofocus>${ok}</button>`;
    const md = openModal({title, body: `<div class="confirm">${html}</div>`, foot, size: "sm", onClose: () => { if (!done) res(false); }});
    foot.querySelector("[data-c]").onclick = () => md.close();
    foot.querySelector("[data-o]").onclick = () => { done = true; md.close(); res(true); };
    if (extra) foot.querySelector("[data-x]").onclick = extra.run;
  });
}

/* ---------- commit: save the new list and rebuild the whole dashboard ---------- */
async function commitRows(rows, flash){
  const sorted = [...rows].sort((a, b) => a[0] - b[0]).map((r, i) => r[6] ? [i + 1, r[1], r[2], r[3], r[4], r[5], r[6]] : [i + 1, r[1], r[2], r[3], r[4], r[5]]);
  if (!sorted.length){ toast("A playlist não pode ficar vazia."); return; }
  writeStore({rows: sorted, updated: Date.now()});
  /* confere se o navegador realmente gravou (abrir o arquivo via file:// pode bloquear
     localStorage em alguns navegadores/modos de privacidade) antes de recarregar */
  const verify = readStore();
  const persisted = verify && Array.isArray(verify.rows) && verify.rows.length === sorted.length;
  if (!persisted){
    const proceed = await confirmModal({title: "O navegador pode estar bloqueando o salvamento", danger: true, ok: "Continuar mesmo assim",
      html: `<p>Não foi possível confirmar que os dados foram gravados no navegador. Isso costuma acontecer quando o arquivo é aberto direto (<code>file://</code>) e o navegador restringe o armazenamento local nesse modo.</p><p><strong>Se continuar, as músicas podem sumir ao recarregar ou fechar a página.</strong></p><p class="muted">Exporte um backup agora, ou cancele e tente em outro navegador.</p>`,
      extra: {label: `${ICON.down} Exportar backup`, run: () => exportTxt()}});
    if (!proceed) return;
  }
  setFlash(flash);
  document.body.classList.add("leaving");
  setTimeout(() => location.reload(), 260);
}
const RESET_PHRASE = "EU ACEITO RESETAR A LISTA DE MÚSICAS";
// apagar a playlist inteira não tem volta: só libera depois de digitar a frase (sem diferenciar maiúscula/acento)
function confirmReset(){
  const norm = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, " ").trim().toUpperCase();
  return new Promise(res => {
    let done = false;
    const foot = document.createElement("div"); foot.className = "mfrow";
    foot.innerHTML = `<button class="gbtn" type="button" data-x>${ICON.down} Exportar atual</button><span class="sp"></span><button class="gbtn" type="button" data-c autofocus>Cancelar</button><button class="pbtn danger" type="button" data-o disabled>Apagar e restaurar</button>`;
    const md = openModal({title: "Apagar a sua playlist?", size: "sm", foot, onClose: () => { if (!done) res(false); },
      body: `<div class="confirm">
        <p><strong>Isso apaga as ${faixas(NN)} da sua playlist</strong> e o painel volta para a lista de exemplo do site. Não dá pra desfazer.</p>
        <p class="muted">Se quiser guardar a lista, clique em "Exportar atual" antes.</p>
        <p style="margin-top:14px">Para confirmar, digite <strong class="rs-phrase">${RESET_PHRASE}</strong></p>
        <div class="imrow"><input type="text" id="rs-in" autocomplete="off" spellcheck="false" placeholder="${RESET_PHRASE}"></div></div>`});
    const inp = md.q("#rs-in"), go = foot.querySelector("[data-o]");
    inp.addEventListener("input", () => { go.disabled = norm(inp.value) !== norm(RESET_PHRASE); });
    inp.addEventListener("paste", e => e.preventDefault());   // tem que digitar, não colar
    foot.querySelector("[data-x]").onclick = () => exportTxt();
    foot.querySelector("[data-c]").onclick = () => md.close();
    go.onclick = () => { done = true; md.close(); res(true); };
  });
}
async function restoreOriginal(){
  const ok = await confirmReset();
  if (!ok) return;
  clearStore(); setFlash(`Playlist original restaurada · ${faixas(DEFAULT_RAW.length)}`);
  document.body.classList.add("leaving"); setTimeout(() => location.reload(), 260);
}

/* ---------- parsing: TSV / CSV / XLSX into rows ---------- */
function splitCSV(line, sep){
  const out = []; let cur = "", q = false;
  for (let i = 0; i < line.length; i++){
    const ch = line[i];
    if (q){ if (ch === '"' && line[i + 1] === '"'){ cur += '"'; i++; } else if (ch === '"') q = false; else cur += ch; }
    else if (ch === '"') q = true; else if (ch === sep){ out.push(cur); cur = ""; } else cur += ch;
  }
  out.push(cur); return out;
}
function textToCells(text){
  const lines = text.replace(/^﻿/, "").split(/\r?\n/).filter(l => l.trim());
  if (!lines.length) return [];
  const sample = lines.slice(0, 5).join("\n");
  const sep = sample.includes("\t") ? "\t" : (sample.split(";").length > sample.split(",").length ? ";" : ",");
  return lines.map(l => sep === "\t" ? l.split("\t") : splitCSV(l, sep));
}
function parseDur(v){
  if (v == null) return null; const s = String(v).trim(); if (!s) return null;
  let m;
  if ((m = s.match(/^(\d{1,2}):(\d{1,2}):(\d{2})$/))) return +m[1] * 3600 + +m[2] * 60 + +m[3];
  if ((m = s.match(/^(\d{1,3}):(\d{2})$/))) return +m[1] * 60 + +m[2];
  if (/^0?[.,]\d+$/.test(s)) return Math.round(parseFloat(s.replace(",", ".")) * 86400);   // Excel time fraction
  if (/^\d+$/.test(s) && +s >= 20 && +s < 36000) return +s;                                  // plain seconds
  return undefined;
}
function parseDate(v){
  if (v == null) return ""; const s = String(v).trim(); if (!s) return "";
  let m;
  if ((m = s.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/))) return `${m[1]}-${pad2(m[2])}-${pad2(m[3])}`;
  if ((m = s.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})$/))) return `${m[3]}-${pad2(m[2])}-${pad2(m[1])}`;
  if ((m = s.match(/^(\d{4})[-/.](\d{1,2})$/))) return `${m[1]}-${pad2(m[2])}-01`;
  if (/^\d{4}$/.test(s) && +s > 1900 && +s < 2100) return s;
  if (/^\d{5}(\.\d+)?$/.test(s)){ const d = new Date(Date.UTC(1899, 11, 30) + Math.round(parseFloat(s)) * 864e5); return `${d.getUTCFullYear()}-${pad2(d.getUTCMonth() + 1)}-${pad2(d.getUTCDate())}`; }   // Excel serial
  return undefined;
}
const HDR = {n: /^(n[uú]mero|numero|n[ºo°]?|#|pos(i[cç][aã]o)?|ordem|index)$/i, title: /^(m[uú]sicas?|faixas?|t[ií]tulo|title|track|song|nome(_da_m[uú]sica)?)$/i, artist: /^(bandas?|artistas?|banda_artista|banda\/artista|artist|int[eé]rprete)$/i,
  album: /^([aá]lbum|album)$/i, dur: /^(dura[cç][aã]o|tempo|duration|length|dur)$/i, date: /^(data|lan[cç]amento|data_(de_)?lan[cç]amento|release(_date)?|ano|year|date)$/i,
  meta: /^(dados_spotify|meta)$/i};
// coluna extra que a própria exportação em texto grava: os dados do Spotify em JSON (explícita, tipo, popularidade…)
function parseMeta(v){
  if (!v || v[0] !== "{") return null;
  try { const m = JSON.parse(v); return m && typeof m === "object" && !Array.isArray(m) ? m : null; } catch (e) { return null; }
}
function cellsToRows(cells){
  const warnings = []; let start = 0, map = null;
  const h = cells[0] ? cells[0].map(c => String(c).trim().toLowerCase().replace(/\s+/g, "_")) : [];
  // a header row names at least two known columns and has no value that looks like data (a duration)
  const hasHeader = Object.keys(HDR).filter(k => h.some(c => HDR[k].test(c))).length >= 2 && !h.some(c => /^\d{1,3}:\d{2}$/.test(c));
  if (hasHeader){
    map = {}; start = 1;
    h.forEach((c, i) => { for (const k of Object.keys(HDR)) if (map[k] === undefined && HDR[k].test(c)) { map[k] = i; break; } });
  }
  const rows = [];
  for (let li = start; li < cells.length; li++){
    const c = cells[li].map(x => String(x == null ? "" : x).trim());
    if (!c.some(Boolean)) continue;
    let n, title, artist, album, dur, date, metaTxt;
    if (map){ n = c[map.n]; title = c[map.title]; artist = c[map.artist]; album = c[map.album]; dur = c[map.dur]; date = c[map.date]; metaTxt = map.meta !== undefined ? c[map.meta] : undefined; }
    else if (c.length >= 6 && /^\d+$/.test(c[0])) [n, title, artist, album, dur, date, metaTxt] = c;
    else if (c.length >= 5) [title, artist, album, dur, date] = c;
    else if (c.length >= 2){ [title, artist, album, dur, date] = c; }
    else { warnings.push({line: li + 1, msg: "linha com poucas colunas, ignorada"}); continue; }
    if (!title){ warnings.push({line: li + 1, msg: "sem nome da música, ignorada"}); continue; }
    let sec = parseDur(dur);
    if (sec === undefined){ warnings.push({line: li + 1, msg: `duração "${dur}" não reconhecida (fica 0:00)`}); sec = 0; }
    if (sec === null){ warnings.push({line: li + 1, msg: "sem duração (fica 0:00 e não entra na média)"}); sec = 0; }
    let d = parseDate(date);
    if (d === undefined){ warnings.push({line: li + 1, msg: `data "${date}" não reconhecida (fica "${NI}")`}); d = ""; }
    if (!artist) warnings.push({line: li + 1, msg: `sem artista (fica "${NI}")`});
    const meta = parseMeta(metaTxt);
    rows.push({n: /^\d+$/.test(n || "") ? +n : null, title, artist: artist || "", album: album || "", sec, date: d, ...(meta ? {meta} : {})});
  }
  return {rows, warnings};
}
// texto solto colado sem querer vira poucas "faixas" sem duração nem data reconhecidas, com
// título/artista com cara de frase cortada no meio — nesse caso é melhor avisar do que fingir
// que importou música de verdade (uma vírgula no meio da frase pode virar um "artista" falso)
function looksLikeGarbage(parsed){
  if (!parsed || !parsed.rows.length || parsed.rows.length > 3) return false;
  return parsed.rows.every(r => {
    if (r.sec || r.date) return false; // duração ou data reconhecidas: provavelmente é dado de verdade
    const text = `${r.title || ""} ${r.artist || ""}`.trim();
    const words = text.split(/\s+/).filter(Boolean).length;
    return text.length > 60 || words > 9 || /[.!?]\s|\.\)|\)\./.test(text);
  });
}
/* minimal XLSX reader (ZIP + XML), using the browser's own inflater */
async function xlsxToCells(buf){
  const dv = new DataView(buf), u8 = new Uint8Array(buf);
  let eocd = -1; for (let i = u8.length - 22; i >= Math.max(0, u8.length - 65557); i--) if (dv.getUint32(i, true) === 0x06054b50){ eocd = i; break; }
  if (eocd < 0) throw new Error("arquivo .xlsx inválido");
  const cnt = dv.getUint16(eocd + 10, true); let p = dv.getUint32(eocd + 16, true);
  const files = {}; const dec = new TextDecoder();
  for (let i = 0; i < cnt; i++){
    const method = dv.getUint16(p + 10, true), csize = dv.getUint32(p + 20, true), nlen = dv.getUint16(p + 28, true), elen = dv.getUint16(p + 30, true), clen = dv.getUint16(p + 32, true), off = dv.getUint32(p + 42, true);
    const name = dec.decode(u8.slice(p + 46, p + 46 + nlen));
    files[name] = {method, csize, off}; p += 46 + nlen + elen + clen;
  }
  const read = async name => {
    const f = files[name]; if (!f) return null;
    const start = f.off + 30 + dv.getUint16(f.off + 26, true) + dv.getUint16(f.off + 28, true), data = u8.slice(start, start + f.csize);
    if (f.method === 0) return dec.decode(data);
    if (typeof DecompressionStream === "undefined") throw new Error("este navegador não lê .xlsx compactado; exporte como texto");
    const ds = new Blob([data]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
    return await new Response(ds).text();
  };
  const xml = s => new DOMParser().parseFromString(s, "application/xml");
  const ssXml = await read("xl/sharedStrings.xml");
  const ss = ssXml ? [...xml(ssXml).getElementsByTagName("si")].map(si => [...si.getElementsByTagName("t")].map(t => t.textContent).join("")) : [];
  const sheetName = Object.keys(files).filter(n => /^xl\/worksheets\/sheet\d+\.xml$/.test(n)).sort((a, b) => parseInt(a.match(/\d+/)) - parseInt(b.match(/\d+/)))[0];
  if (!sheetName) throw new Error("planilha sem abas");
  const doc = xml(await read(sheetName));
  const colIdx = ref => { let n = 0; for (const ch of ref.replace(/\d+/g, "")) n = n * 26 + ch.charCodeAt(0) - 64; return n - 1; };
  return [...doc.getElementsByTagName("row")].map(r => {
    const out = [];
    for (const c of r.getElementsByTagName("c")){
      const t = c.getAttribute("t"), v = c.getElementsByTagName("v")[0], is = c.getElementsByTagName("is")[0];
      out[colIdx(c.getAttribute("r") || "A")] = t === "s" ? ss[+v.textContent] : t === "inlineStr" ? (is ? is.textContent : "") : (v ? v.textContent : "");
    }
    return Array.from(out, x => x == null ? "" : x);
  });
}

/* ---------- import by Spotify link: fetch title/artist/album/duration/release date from the Web API ---------- */
const SPOTIFY_CREDS_KEY = "catalogo-musical:spotify-creds";
const SPOTIFY_APP_OK_KEY = "catalogo-musical:spotify-app-ok"; // marca que esse navegador já autenticou com um app do Spotify, mesmo sem salvar as credenciais
function hasSpotifyApp(){ try { return !!localStorage.getItem(SPOTIFY_APP_OK_KEY) || !!loadSpotifyCreds().id; } catch (e) { return false; } }
const SPOTIFY_ID_RE = /^[0-9a-f]{32}$/i; // Client ID e Client Secret do Spotify são sempre 32 caracteres hexadecimais
function loadSpotifyCreds(){ try { return JSON.parse(localStorage.getItem(SPOTIFY_CREDS_KEY) || "null") || {}; } catch (e) { return {}; } }
function saveSpotifyCreds(id, secret){ try { localStorage.setItem(SPOTIFY_CREDS_KEY, JSON.stringify({id, secret})); } catch (e) {} }
function clearSpotifyCreds(){ try { localStorage.removeItem(SPOTIFY_CREDS_KEY); } catch (e) {} }
/* metadados já buscados, por ID da faixa: links repetidos não gastam requisição (o limite do Spotify é o gargalo) */
const SPOTIFY_TRACK_CACHE_KEY = "catalogo-musical:spotify-tracks";
function loadTrackCache(){ try { return JSON.parse(localStorage.getItem(SPOTIFY_TRACK_CACHE_KEY) || "null") || {}; } catch (e) { return {}; } }
function saveTrackCache(rows){
  const c = loadTrackCache();
  for (const r of rows) if (r.id) c[r.id] = {title: r.title, artist: r.artist, album: r.album, sec: r.sec, date: r.date, cover: r.cover, meta: r.meta};
  try { localStorage.setItem(SPOTIFY_TRACK_CACHE_KEY, JSON.stringify(c)); } catch (e) {}
}
function parseSpotifyIds(text){
  const ids = [];
  for (const tok of text.split(/\s+/)){ const m = tok.match(/track[/:]([A-Za-z0-9]{22})/); if (m) ids.push(m[1]); }
  return [...new Set(ids)];
}
function parseSpotifyPlaylistIds(text){
  const ids = [];
  for (const tok of text.split(/\s+/)){ const m = tok.match(/playlist[/:]([A-Za-z0-9]{22})/); if (m) ids.push(m[1]); }
  return [...new Set(ids)];
}
function parseSpotifyAlbumIds(text){
  const ids = [];
  for (const tok of text.split(/\s+/)){ const m = tok.match(/album[/:]([A-Za-z0-9]{22})/); if (m) ids.push(m[1]); }
  return [...new Set(ids)];
}
async function spotifyToken(id, secret){
  let r;
  try { r = await fetch("https://accounts.spotify.com/api/token", {method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded", "Authorization": "Basic " + btoa(`${id}:${secret}`)}, body: "grant_type=client_credentials"}); }
  catch (e) { throw new Error("Não foi possível conectar ao Spotify (sem internet ou bloqueado pelo navegador)."); }
  if (!r.ok) throw new Error(r.status === 400 ? "Client ID ou Client Secret inválidos." : `Falha ao autenticar no Spotify (HTTP ${r.status}).`);
  const j = await r.json();
  if (!j.access_token) throw new Error("Resposta inesperada do Spotify ao autenticar.");
  try { localStorage.setItem(SPOTIFY_APP_OK_KEY, "1"); } catch (e) {}
  return j.access_token;
}
/* tudo isso já vem na mesma resposta da faixa/álbum — guardar não custa pedido nenhum.
   popularidade só vem na faixa completa (GET /tracks), e pode faltar em apps de desenvolvimento */
function spotifyMeta(t, album){
  const m = {x: t.explicit ? 1 : 0};
  if (album && album.album_type) m.ty = album.album_type;
  if (t.track_number) m.tn = t.track_number;
  if (album && album.total_tracks) m.tt = album.total_tracks;
  if (typeof t.popularity === "number") m.p = t.popularity;
  const aid = (t.artists || []).map(a => a.id).filter(Boolean);
  if (aid.length) m.aid = aid;
  if (t.id) m.id = t.id;   // ID da faixa: é com ele que os links batem com as músicas já salvas (sem gastar requisição)
  return m;
}
function spotifyDate(album){
  const d = (album && album.release_date) || ""; if (!d) return "";
  if (d.length >= 10) return d.slice(0, 10);
  if (d.length === 7) return d + "-01";
  if (d.length === 4) return d + "-01-01";
  return "";
}
/* controle da busca por links. As buscas chamam gate() antes de cada pedido ao Spotify:
   - cancel(): lança o erro de cancelamento (nada é importado);
   - suspend(): fechou a tela de importar. Lança um erro "keepPartial", que devolve o que já veio (e o
     cache de faixas guarda), sem gastar mais nenhuma requisição; ao reabrir, a busca recomeça só do que falta */
function makeFetchCtl(){
  const c = {stop: null,
    cancel(){ c.stop = "cancel"; },
    suspend(){ if (!c.stop) c.stop = "suspend"; },
    gate(){
      if (!c.stop) return;
      const e = new Error(c.stop === "cancel" ? "Busca cancelada: nenhuma música foi adicionada." : "Busca pausada.");
      if (c.stop === "cancel") e.cancelled = true; else e.keepPartial = true;
      throw e;
    }};
  return c;
}
async function spotifyFetchTracks(ids, token, onProgress, onWait, ctl){
  /* desde fev/2026 o Spotify removeu a busca em lote (GET /tracks?ids=...) para apps em
     Development Mode; agora só GET /tracks/{id}, uma faixa por vez. Com listas grandes isso
     esbarra no limite de requisições (HTTP 429). O header Retry-After do Spotify, nesse modo,
     costuma vir baixo (2-3s) mesmo quando o bloqueio real dura bem mais — respeitar só ele faz
     martelar o mesmo erro sem avançar. Por isso a espera cresce (backoff) a cada 429 seguido,
     e só volta a diminuir depois de uma faixa bem-sucedida. */
  const rows = [], warnings = [];
  let backoff = 0, attempt = 0;
  try {
    for (let i = 0; i < ids.length; i++){
      const id = ids[i];
      for (let tries = 0; ; tries++){
        if (ctl) ctl.gate();
        let r; try { r = await fetch(`https://api.spotify.com/v1/tracks/${id}`, {headers: {Authorization: `Bearer ${token}`}}); }
        catch (e) { throw new Error("Não foi possível buscar as faixas no Spotify."); }
        if (r.status === 429){
          attempt++;
          if (attempt > 40) throw new Error("O Spotify manteve o limite de requisições por tempo demais seguidas; tente de novo em alguns minutos.");
          const headerWait = parseInt(r.headers.get("Retry-After") || "", 10);
          backoff = Math.min(90, Math.max(Number.isFinite(headerWait) && headerWait > 0 ? headerWait : 2, backoff ? backoff * 1.7 : 2));
          const wait = Math.max(1, Math.round(backoff));
          onWait && await onWait(wait, i, ids.length, attempt);
          continue;
        }
        backoff = Math.max(0, backoff - 3); attempt = 0;
        if (r.status === 404){ warnings.push({line: i + 1, msg: `faixa ${id} não encontrada no Spotify`}); onProgress && onProgress(i + 1, ids.length); break; }
        if (r.status === 403) throw new Error("Spotify recusou o acesso (HTTP 403). Confira se a conta dona do app tem Spotify Premium (exigido para apps em modo de desenvolvimento) e se o Client ID/Secret estão corretos.");
        if (!r.ok) throw new Error(`Falha ao buscar faixas no Spotify (HTTP ${r.status}).`);
        const t = await r.json();
        rows.push({n: null, id, title: t.name, artist: (t.artists || []).map(a => a.name).join(", "), album: t.album ? t.album.name : "", sec: Math.round(t.duration_ms / 1000), date: spotifyDate(t.album), cover: spotifyCover(t.album && t.album.images), meta: spotifyMeta(t, t.album)});
        onProgress && onProgress(i + 1, ids.length);
        break;
      }
    }
  } catch (e) {
    if (e && e.keepPartial) return {rows, warnings, partial: true};
    throw e;
  }
  return {rows, warnings};
}
async function spotifyFetchAlbumTracks(albumIds, token, onProgress, onWait, ctl){
  /* álbum é catálogo público (como uma faixa avulsa), não precisa de login — e GET /albums/{id}
     já devolve o nome/data do álbum junto com a primeira página de faixas numa única chamada */
  const rows = [], warnings = [];
  let backoff = 0, attempt = 0;
  try {
    for (let ai = 0; ai < albumIds.length; ai++){
      const id = albumIds[ai];
      let url = `https://api.spotify.com/v1/albums/${id}?limit=50`, first = true;
      let albumName = "", albumDate = "", albumCover = null, albumObj = null, total = Infinity, got = 0;
      while (url){
        let r;
        for (;;){
          if (ctl) ctl.gate();
          try { r = await fetch(url, {headers: {Authorization: `Bearer ${token}`}}); }
          catch (e) { throw new Error("Não foi possível buscar o álbum no Spotify."); }
          if (r.status === 429){
            attempt++;
            if (attempt > 40) throw new Error("O Spotify manteve o limite de requisições por tempo demais seguidas; tente de novo em alguns minutos.");
            const headerWait = parseInt(r.headers.get("Retry-After") || "", 10);
            backoff = Math.min(90, Math.max(Number.isFinite(headerWait) && headerWait > 0 ? headerWait : 2, backoff ? backoff * 1.7 : 2));
            const wait = Math.max(1, Math.round(backoff));
            onWait && await onWait(wait, rows.length, total === Infinity ? rows.length : total, attempt);
            continue;
          }
          backoff = Math.max(0, backoff - 3); attempt = 0;
          if (r.status === 404) throw new Error("Álbum não encontrado (verifique o link).");
          if (r.status === 403) throw new Error("Spotify recusou o acesso ao álbum (HTTP 403).");
          if (!r.ok) throw new Error(`Falha ao buscar o álbum no Spotify (HTTP ${r.status}).`);
          break;
        }
        const j = await r.json();
        const page = first ? j.tracks : j;
        if (first){ albumName = j.name || ""; albumDate = spotifyDate({release_date: j.release_date}); albumCover = spotifyCover(j.images); albumObj = {album_type: j.album_type, total_tracks: j.total_tracks}; }
        total = typeof page.total === "number" ? page.total : got + (page.items || []).length;
        for (const t of (page.items || [])){
          if (!t) continue;
          rows.push({n: null, id: t.id, title: t.name, artist: (t.artists || []).map(a => a.name).join(", "), album: albumName, sec: Math.round(t.duration_ms / 1000), date: albumDate, cover: albumCover, meta: spotifyMeta(t, albumObj)});
        }
        got += (page.items || []).length;
        url = page.next || null;
        first = false;
        onProgress && onProgress(Math.min(got, total), total, ai + 1, albumIds.length);
      }
    }
  } catch (e) {
    if (e && e.keepPartial) return {rows, warnings, partial: true};
    throw e;
  }
  return {rows, warnings};
}

function copyText(text){
  const fallback = () => {
    const ta = document.createElement("textarea");
    ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); toast("Copiado!"); } catch (e) { toast("Não deu pra copiar — selecione o texto e copie manualmente."); }
    ta.remove();
  };
  if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(() => toast("Copiado!"), fallback);
  else fallback();
}
function openSpotifyAppHelp({id = "", secret = "", onDone, returning = false} = {}){
  /* o Spotify exige uma Redirect URI no cadastro do app, mas o fluxo Client Credentials nunca a usa */
  const redirect = location.protocol === "https:" ? location.origin + "/callback" : "http://127.0.0.1:8080/callback";
  const vals = {name: "Painel Musical", desc: "Busca dados das faixas para o meu painel de playlist", redirect};
  const copyRow = (label, key) => `<div class="wz-copy"><span>${label}</span><code>${esc(vals[key])}</code><button class="gbtn" type="button" data-copy="${key}">Copiar</button></div>`;
  const steps = [
    {t: "Entre no painel do Spotify", h: `<p class="mdesc">Abra o painel de desenvolvedor em outra aba e faça login com a <strong>sua conta Spotify</strong> (a mesma que você usa pra ouvir música). Se for o primeiro acesso, aceite os termos de desenvolvedor.</p>
      <p style="margin:16px 0"><a class="pbtn" href="https://developer.spotify.com/dashboard" target="_blank" rel="noopener" style="text-decoration:none">Abrir o painel do Spotify ↗</a></p>
      <p class="muted">Deixe esta janela aberta — você volta aqui no próximo passo. É grátis e leva uns 2 minutos.</p>`},
    {t: "Crie o app", h: `<p class="mdesc">No painel, clique em <strong>Create app</strong> e preencha copiando os valores abaixo:</p>
      ${copyRow("App name", "name")}${copyRow("App description", "desc")}${copyRow("Redirect URI", "redirect")}
      <p class="mdesc">Depois de colar a Redirect URI, clique em <strong>Add</strong>. Em <strong>Which API/SDKs are you planning to use?</strong> marque <strong>Web API</strong>, aceite os termos e clique em <strong>Save</strong>.</p>
      <p class="muted">A Redirect URI é obrigatória no formulário do Spotify, mas esta ferramenta não usa — por isso qualquer valor válido serve.</p>`},
    {t: "Cole o Client ID e o Secret", h: `${returning ? `<p class="mdesc">Você já usou um app do Spotify aqui antes, então abrimos o <a href="https://developer.spotify.com/dashboard" target="_blank" rel="noopener" style="color:var(--mint)">painel do Spotify</a> direto em outra aba. Ainda não tem um app? Clique em <strong>Voltar</strong> para ver como criar.</p>` : ""}<p class="mdesc">Na tela do app, clique em <strong>Settings</strong>. Em <strong>Basic Information</strong> aparece o <strong>Client ID</strong>; clique em <strong>View client secret</strong> para ver o <strong>Client Secret</strong>. Cole os dois aqui:</p>
      <div class="wz-field"><label for="wz-id">Client ID</label><input type="text" id="wz-id" autocomplete="off" spellcheck="false" placeholder="32 letras/números"><small id="wz-id-st"></small></div>
      <div class="wz-field"><label for="wz-secret">Client Secret</label><input type="password" id="wz-secret" autocomplete="new-password" spellcheck="false" placeholder="32 letras/números"><small id="wz-secret-st"></small></div>
      <p class="sp-status" id="wz-status"></p>`}
  ];
  let step = returning ? steps.length - 1 : 0;
  const body = document.createElement("div");
  const foot = document.createElement("div"); foot.className = "mfrow";
  foot.innerHTML = `<button class="gbtn" type="button" data-back>Voltar</button><span class="sp"></span><button class="pbtn" type="button" data-next>Próximo</button>`;
  const md = openModal({title: "Assistente: criar seu app no Spotify", body, foot, size: "sm"});
  const back = foot.querySelector("[data-back]"), next = foot.querySelector("[data-next]");
  const clean = v => v.replace(/\s+/g, "");
  function checkField(inp, st){
    const v = clean(inp.value);
    st.className = "";
    if (!v){ st.textContent = ""; return false; }
    if (SPOTIFY_ID_RE.test(v)){ st.textContent = "✓ formato certo"; st.className = "ok"; return true; }
    st.textContent = /[^0-9a-f]/i.test(v) ? "Tem caracteres que não deveriam estar aí — copie de novo pelo botão do Spotify." : `Deveria ter 32 caracteres (tem ${v.length}).`;
    st.className = "err"; return false;
  }
  function render(){
    body.innerHTML = `<ol class="wz-dots">${steps.map((s, i) => `<li class="${i === step ? "on" : i < step ? "done" : ""}"><b>${i < step ? "✓" : i + 1}</b><span>${s.t}</span></li>`).join("")}</ol>${steps[step].h}`;
    back.style.visibility = step ? "" : "hidden";
    next.textContent = step === steps.length - 1 ? "Testar e usar" : "Próximo";
    next.disabled = false;
    body.querySelectorAll("[data-copy]").forEach(b => b.addEventListener("click", () => copyText(vals[b.dataset.copy])));
    if (step === steps.length - 1){
      const fi = body.querySelector("#wz-id"), fs = body.querySelector("#wz-secret");
      fi.value = id; fs.value = secret;
      const sync = () => { id = clean(fi.value); secret = clean(fs.value); checkField(fi, body.querySelector("#wz-id-st")); checkField(fs, body.querySelector("#wz-secret-st")); };
      fi.addEventListener("input", sync); fs.addEventListener("input", sync); sync();
      setTimeout(() => (id ? fs : fi).focus({preventScroll: true}), 60);
    }
  }
  back.addEventListener("click", () => { if (step){ step--; render(); } });
  next.addEventListener("click", async () => {
    if (step < steps.length - 1){ step++; render(); return; }
    const st = body.querySelector("#wz-status");
    st.classList.remove("err");
    if (!SPOTIFY_ID_RE.test(id) || !SPOTIFY_ID_RE.test(secret)){ st.classList.add("err"); st.textContent = "Confira os dois campos: cada um tem 32 letras/números."; return; }
    if (id.toLowerCase() === secret.toLowerCase()){ st.classList.add("err"); st.textContent = "Você colou o mesmo valor nos dois campos — o Secret aparece em \"View client secret\"."; return; }
    next.disabled = true; st.textContent = "Testando com o Spotify…";
    try { await spotifyToken(id, secret); }
    catch (e){ next.disabled = false; st.classList.add("err"); st.textContent = e.message + (/inválidos/.test(e.message) ? " Confira se copiou do app certo e se clicou em Save." : ""); return; }
    md.close();
    if (onDone) onDone(id, secret);
    toast("Tudo certo! Credenciais conferidas com o Spotify.");
  });
  render();
}
function openPlaylistLinkHelp(){
  const md = openModal({
    title: "Como importar uma playlist inteira",
    body: `<ol class="mdesc" style="padding-left:18px;display:flex;flex-direction:column;gap:10px;margin:0">
        <li>Abra a playlist no <strong>Spotify do PC</strong>.</li>
        <li>No topo da coluna com a data em que cada música foi adicionada, clique em <strong>"Adicionada em"</strong> até as mais antigas ficarem no topo. <button type="button" class="lnk" data-no-added style="padding:0;font:inherit;vertical-align:baseline">Não encontrei "Adicionada em"</button></li>
        <li>Aperte <strong>Ctrl+A</strong> e depois <strong>Ctrl+C</strong>.</li>
        <li>Volte aqui e cole (<strong>Ctrl+V</strong>).</li>
      </ol>
      <p class="muted" style="margin-top:14px">Link da playlist não funciona: o Spotify não informa a ordem em que você adicionou as músicas.</p>`,
    size: "sm"
  });
  md.q("[data-no-added]").addEventListener("click", () => openModal({
    title: "Não encontrei \"Adicionada em\"",
    body: `<p class="mdesc">Se ela não aparece no topo da lista de músicas da playlist:</p>
      <ol class="mdesc" style="padding-left:18px;display:flex;flex-direction:column;gap:10px;margin:10px 0 0">
        <li>Clique nos <strong>3 tracinhos</strong> (☰) ao lado da lupa de pesquisar.</li>
        <li>Procure <strong>"Adicionada em"</strong> e clique nela até ficar com a <strong>seta pra cima</strong>.</li>
      </ol>`,
    size: "sm"
  }));
}
function openRateLimitModal({done, total, update = false}){
  /* só aparece depois de algumas tentativas seguidas (não a cada 429 isolado, que é normal
     e resolve em poucos segundos) — e volta a aparecer periodicamente se continuar travado,
     caso a pessoa escolha "continuar esperando" e o bloqueio persista. */
  return new Promise(res => {
    let decided = false;
    const foot = document.createElement("div"); foot.className = "mfrow"; foot.style.flexWrap = "wrap";
    const hasSome = done > 0;
    const keepLbl = done === 1 ? (update ? "Salvar a 1 atualizada" : "Usar a 1 carregada") : update ? `Salvar as ${done} atualizadas` : `Usar as ${done} carregadas`;
    foot.innerHTML = `<button class="gbtn" type="button" data-cancel>${hasSome ? "Cancelar tudo" : "Cancelar"}</button><span class="sp"></span>${hasSome ? `<button class="gbtn" type="button" data-keep>${keepLbl}</button>` : ""}<button class="pbtn" type="button" data-wait autofocus>Esperar</button>`;
    const md = openModal({
      title: "O Spotify pediu uma pausa",
      body: `<div class="confirm">
          <p>O Spotify limita quantas buscas dá pra fazer em pouco tempo. Isso costuma acontecer quando <strong>já foram buscadas muitas músicas hoje</strong> ou agora há pouco.</p>
          <p>${hasSome ? `Já ${update ? "atualizamos" : "carregamos"} <strong>${done} de ${total}</strong>. ${update ? "O resto só vai ser atualizado" : "As outras só vão carregar"} quando o Spotify liberar` : `${update ? `Nada foi atualizado ainda (${total} buscas na fila)` : `Nenhuma das <strong>${total}</strong> músicas carregou`}. ${update ? "Só vai continuar" : "Elas só vão carregar"} quando o Spotify liberar`} — pode levar minutos ou até horas.</p>
          <div style="display:flex;flex-direction:column;gap:8px;margin-top:14px">
            <div><strong>Esperar:</strong> <span class="muted">continua sozinho quando o Spotify liberar.</span></div>
            ${hasSome ? `<div><strong>${keepLbl}:</strong> <span class="muted">${update ? "guarda o que já veio e para." : "importa só essas agora."}</span></div>` : ""}
            <div><strong>${hasSome ? "Cancelar tudo" : "Cancelar"}:</strong> <span class="muted">${hasSome ? (update ? "não salva nada desta atualização." : "não importa nenhuma.") : "para tudo. Tente de novo mais tarde."}</span></div>
          </div>
        </div>`,
      foot, size: "sm",
      onClose: () => { if (!decided) res("wait"); }
    });
    const pick = v => { decided = true; md.close(); res(v); };
    foot.querySelector("[data-wait]").onclick = () => pick("wait");
    if (hasSome) foot.querySelector("[data-keep]").onclick = () => pick("keep");
    foot.querySelector("[data-cancel]").onclick = () => pick("cancel");
  });
}
// known = músicas da mesma colagem que já vieram do que está salvo (não passam pelo Spotify, mas contam como "carregadas")
async function spotifyRunFetch({token, ids, albumIds, status, btn, known = 0, ctl}){
  status.classList.remove("err");
  btn.disabled = true;
  status.textContent = albumIds.length ? `Buscando álbum${albumIds.length > 1 ? "ns" : ""}…` : `Buscando ${faixas(ids.length)}…`;
  /* cronômetro: sempre recalcula o restante a partir de "quando deve terminar" (timestamp real),
     em vez de só subtrair 1s por tick — assim não trava/atrasa mesmo se o navegador atrasar
     o timer (ex.: aba em segundo plano) */
  let t0 = performance.now(), done = 0, total = 1, etaEndTs = null, waitEndTs = null, waitAttempt = 0, tick = null;
  const fmtEta = ms => { const s = Math.max(0, Math.round(ms / 1000)); return `${Math.floor(s / 60)}:${pad2(s % 60)}`; };
  const render = () => {
    if (waitEndTs != null){
      status.textContent = `Spotify pediu espera por limite de requisições${waitAttempt > 1 ? ` (tentativa ${waitAttempt})` : ""} — aguardando para tentar de novo (faixa ${done + 1} de ${total})…`;
      return;
    }
    status.textContent = `Buscando faixa ${done} de ${total}…${etaEndTs != null ? ` cerca de ${fmtEta(etaEndTs - performance.now())} restante` : ""}`;
  };
  const startTick = () => { clearInterval(tick); tick = setInterval(render, 1000); };
  const onWait = async (secs, i, t, attempt) => {
    done = i; total = t;
    const shouldPrompt = attempt === 3 || (attempt > 3 && (attempt - 3) % 5 === 0);
    if (shouldPrompt){
      clearInterval(tick);
      const decision = await openRateLimitModal({done: known + i, total: known + t, attempt});
      startTick();
      if (decision === "keep"){ const e = new Error("keep"); e.keepPartial = true; throw e; }
      if (decision === "cancel"){ const e = new Error("Importação cancelada: nenhuma música foi adicionada."); e.cancelled = true; throw e; }
    }
    waitAttempt = attempt; waitEndTs = performance.now() + secs * 1000;
    render();
    return new Promise(res => { const left = waitEndTs - performance.now(); setTimeout(() => { waitEndTs = null; res(); }, Math.max(0, left)); });
  };
  try {
    startTick();
    const results = [];
    if (albumIds.length){
      const base = results.reduce((s, r) => s + r.rows.length + r.warnings.length, 0);
      results.push(await spotifyFetchAlbumTracks(albumIds, token, (d, t, ai, an) => {
        done = base + d; total = base + t;
        etaEndTs = performance.now() + ((performance.now() - t0) / Math.max(done, 1)) * (total - done);
        status.textContent = `Buscando faixa ${done} de ${total}${an > 1 ? ` (álbum ${ai} de ${an})` : ""}…${etaEndTs != null ? ` cerca de ${fmtEta(etaEndTs - performance.now())} restante` : ""}`;
      }, onWait, ctl));
    }
    const stoppedEarly = results.length && results[results.length - 1].partial;
    if (ids.length && !stoppedEarly){
      const base = results.reduce((s, r) => s + r.rows.length + r.warnings.length, 0);
      results.push(await spotifyFetchTracks(ids, token, (d, t) => {
        done = base + d; total = base + t;
        etaEndTs = performance.now() + ((performance.now() - t0) / Math.max(done, 1)) * (total - done);
        render();
      }, onWait, ctl));
    }
    clearInterval(tick);
    const rows = results.flatMap(r => r.rows), warnings = results.flatMap(r => r.warnings);
    saveTrackCache(rows);
    const partial = results.some(r => r.partial);
    if (!rows.length && partial && known){ status.textContent = "Carregamento parado: o Spotify está limitando."; return {rows, warnings, partial}; }   // nenhuma nova, mas as já salvas valem
    if (!rows.length){ status.classList.add("err"); status.textContent = "Nenhuma faixa encontrada."; return null; }
    status.textContent = partial
      ? `${faixas(rows.length)} encontrada${rows.length > 1 ? "s" : ""} até você parar o carregamento${warnings.length ? ` · ${warnings.length} não encontrada(s)` : ""}.`
      : `${faixas(rows.length)} encontrada${rows.length > 1 ? "s" : ""}${warnings.length ? ` · ${warnings.length} não encontrada(s)` : ""}.`;
    return {rows, warnings, partial};
  } catch (e) {
    clearInterval(tick);
    if (e.cancelled){ status.textContent = e.message; return null; }
    status.classList.add("err"); status.textContent = e.message || "Erro ao buscar no Spotify.";
    return null;
  } finally { btn.disabled = false; }
}

/* ---------- dados extras: gênero (por artista) e "Atualizar dados" (músicas antigas, sem ID) ---------- */
const GENRE_ON_KEY = "catalogo-musical:genre-on";
const genreOn = () => { try { return localStorage.getItem(GENRE_ON_KEY) !== "0"; } catch (e) { return true; } };
const setGenreOn = v => { try { localStorage.setItem(GENRE_ON_KEY, v ? "1" : "0"); } catch (e) {} };
const hasMeta = t => !!(t.m && t.m.x !== undefined);   // {nf:1} = procurada no Spotify e não achada
/* GET com a mesma espera crescente da importação; depois de muitos 429 seguidos desiste com
   e.limited = true, pra quem chamou salvar o que já veio em vez de travar a tela */
async function spotifyGetJSON(url, token, onWait){
  let backoff = 0;
  for (let attempt = 1; ; attempt++){
    let r; try { r = await fetch(url, {headers: {Authorization: `Bearer ${token}`}}); }
    catch (e) { throw new Error("Não foi possível conectar ao Spotify."); }
    if (r.status === 429){
      if (attempt > 40){ const e = new Error("O Spotify pediu uma pausa longa."); e.limited = true; throw e; }
      const hw = parseInt(r.headers.get("Retry-After") || "", 10);
      backoff = Math.min(90, Math.max(Number.isFinite(hw) && hw > 0 ? hw : 2, backoff ? backoff * 1.7 : 2));
      if (onWait) await onWait(Math.round(backoff), attempt);   // pode abrir o modal e lançar (parar/cancelar)
      await coverSleep(backoff * 1000);
      continue;
    }
    if (r.status === 404) return null;
    if (r.status === 401) throw new Error("A autorização do Spotify expirou. Tente de novo.");
    if (!r.ok) throw new Error(`Falha ao consultar o Spotify (HTTP ${r.status}).`);
    return r.json();
  }
}
// artistas (por nome minúsculo, igual ao GENRES) que ainda não têm gênero pesquisado
function genreTargets(list){
  const m = new Map();
  for (const r of list){
    const artist = (r.artist || "").trim(); if (!artist || artist === NI) continue;
    const parts = splitArtists(artist), raw = splitArtistsRaw(artist), aid = (r.meta && r.meta.aid) || [];
    parts.forEach((p, i) => { if (!hasGenre(p) && !m.has(p)) m.set(p, {key: p, name: raw[i] || p, id: parts.length === aid.length ? aid[i] : null}); });
  }
  return [...m.values()];
}
async function spotifyFetchGenres(list, token, onProgress){
  let done = 0;
  for (const a of list){
    const wait = (s, att) => onProgress && onProgress(done, list.length, s, att);
    const j = await spotifyGetJSON(a.id ? `https://api.spotify.com/v1/artists/${a.id}` : `https://api.spotify.com/v1/search?type=artist&limit=5&q=${encodeURIComponent(a.name)}`, token, wait);
    const art = !j ? null : a.id ? j : ((j.artists && j.artists.items) || []).find(x => normC(x.name || "") === normC(a.name));
    GENRES[a.key] = art && Array.isArray(art.genres) ? art.genres : [];
    saveGenres(); done++;
    onProgress && onProgress(done, list.length);
  }
  return done;
}
async function spotifyFetchUserProfile(token){
  try {
    const profile = await spotifyGetJSON("https://api.spotify.com/v1/me", token);
    if (profile && profile.display_name) spotifyUserDisplay = profile.display_name;
  } catch (e) {}  // ignorar erros ao buscar o perfil
}
// música antiga não tem ID do Spotify: procura pelo título + artista e só aceita se o artista bater
function pickTrack(items, title, artist){
  const nt = normC(cleanTitle(title)), arts = splitArtists(artist).map(normC);
  const ok = (items || []).filter(it => it && (it.artists || []).some(a => arts.includes(normC(a.name || ""))));
  return ok.find(it => normC(cleanTitle(it.name || "")) === nt) || ok.find(it => { const n = normC(cleanTitle(it.name || "")); return n && (n.includes(nt) || nt.includes(n)); }) || null;
}
function openDataUpdate(){
  const tracks = BY_PLAYLIST.filter(t => !t.m && t.artist !== NI && t.title);
  const genreArts = () => genreTargets(BY_PLAYLIST.map(t => ({artist: t.artist, meta: t.m})));
  const ga = genreArts().length;
  if (!tracks.length && !ga){ toast("Todas as músicas já estão com os dados completos."); return; }
  let useGenre = genreOn() && ga > 0;
  const incomplete = BY_PLAYLIST.filter(t => !t.m || !t.gs);
  const body = document.createElement("div");
  const foot = document.createElement("div"); foot.className = "mfrow";
  foot.innerHTML = `<span class="sp"></span><button class="gbtn" type="button" data-c>Cancelar</button><button class="pbtn" type="button" data-go autofocus>Atualizar dados</button>`;
  const md = openModal({title: "Atualizar dados das músicas", body, foot, size: "sm"});
  const total = () => tracks.length + (useGenre ? ga : 0);
  const drawConfirm = () => {
    body.innerHTML = `<div class="confirm">
      <p>Vamos buscar no Spotify o que falta nas suas músicas (explícita, single ou álbum, popularidade${ga ? " e gênero" : ""}).</p>
      <div class="du-rows">
        ${tracks.length ? `<div><b>${nf(tracks.length)}</b><span>música${tracks.length > 1 ? "s" : ""} sem dados · <strong>1 busca por música</strong></span></div>` : ""}
        ${ga ? `<label class="chk"><input type="checkbox" id="du-genre" ${useGenre ? "checked" : ""}><span><b>${nf(ga)}</b> artista${ga > 1 ? "s" : ""} sem gênero · <strong>1 busca por artista</strong></span></label>` : ""}
      </div>
      <p>Total: <strong id="du-total">${nf(total())} busca${total() === 1 ? "" : "s"}</strong>. Cada uma conta no limite do Spotify, igual a importar uma música.</p>
      <p><button type="button" class="lnk" id="du-list" style="padding:0">Ver as ${faixas(incomplete.length)} com dados faltando</button></p>
      <p class="muted">Se o Spotify pedir uma pausa longa, o que já veio fica salvo e dá pra continuar depois.</p></div>`;
    const cb = body.querySelector("#du-genre");
    if (cb) cb.addEventListener("change", () => { useGenre = cb.checked; setGenreOn(cb.checked); const n = total(); body.querySelector("#du-total").textContent = `${nf(n)} busca${n === 1 ? "" : "s"}`; foot.querySelector("[data-go]").disabled = !n; });
    body.querySelector("#du-list").addEventListener("click", () => openModal({title: `${faixas(incomplete.length)} com dados faltando`, size: "lg",
      sub: "“—” é o que ainda falta buscar", body: songTable(incomplete)}));
  };
  drawConfirm();
  foot.querySelector("[data-c]").onclick = () => md.close();
  foot.querySelector("[data-go]").onclick = () => {
    const c = loadSpotifyCreds();
    if (SPOTIFY_ID_RE.test(c.id || "") && SPOTIFY_ID_RE.test(c.secret || "")) run(c.id, c.secret);
    else openSpotifyAppHelp({returning: hasSpotifyApp(), onDone: (id, secret) => run(id, secret)});
  };
  async function run(id, secret){
    let stop = false, found = 0, nf_ = 0, gDone = 0, limited = false;
    const metaByN = new Map();
    body.innerHTML = `<div class="confirm"><p id="du-st">Conectando ao Spotify…</p><p class="muted" id="du-eta" style="margin-top:4px;min-height:1.4em"></p><div class="ht" style="margin-top:12px"><i id="du-bar" style="width:0%"></i></div><p class="muted" style="margin-top:12px">Pode parar quando quiser: o que já veio fica salvo.</p></div>`;
    foot.innerHTML = `<span class="sp"></span><button class="gbtn" type="button" data-stop>Parar e salvar</button>`;
    foot.querySelector("[data-stop]").onclick = () => { stop = true; foot.querySelector("[data-stop]").disabled = true; foot.querySelector("[data-stop]").textContent = "Parando…"; };
    const st = body.querySelector("#du-st"), bar = body.querySelector("#du-bar");
    const all = total(), t0 = performance.now();
    /* estimativa pela média real de cada busca até aqui (já contando as pausas do Spotify),
       então se ajusta sozinha se o Spotify começar a segurar */
    // a cada busca recalcula "quando termina"; entre uma busca e outra o relógio só desce de segundo em segundo
    let endTs = null;
    const etaEl = body.querySelector("#du-eta");
    const drawEta = () => {
      if (endTs === null){ etaEl.textContent = ""; return; }
      const s = Math.max(0, Math.round((endTs - performance.now()) / 1000)), m = Math.floor(s / 60);
      etaEl.textContent = `Faltam cerca de ${m ? `${m} min ` : ""}${s % 60} s`;
    };
    const tick = setInterval(drawEta, 1000);
    const show = (txt, k) => {
      st.textContent = txt;
      endTs = k >= 3 && k < all ? performance.now() + (performance.now() - t0) / k * (all - k) : null;
      drawEta();
      bar.style.width = (all ? 100 * k / all : 100) + "%";
    };
    const save = () => {
      if (!metaByN.size) return;
      const rowsNow = currentRows().map(r => metaByN.has(r[0]) ? [r[0], r[1], r[2], r[3], r[4], r[5], metaByN.get(r[0])] : r);
      writeStore({rows: rowsNow, updated: Date.now()});
    };
    // "Cancelar tudo" desfaz o que esta atualização já tinha gravado (o progresso é salvo aos poucos)
    const storeBefore = readStore(), genresBefore = JSON.stringify(GENRES);
    /* pausa do Spotify: igual à importação — some a estimativa (não dá pra prever o bloqueio) e,
       depois de 3 tentativas seguidas (e a cada 5 depois), a pessoa escolhe esperar, salvar ou cancelar */
    const pause = async (label, attempt, k) => {
      st.textContent = `O Spotify pediu uma pausa… (${label})`;
      endTs = null; drawEta();
      if (attempt === 3 || (attempt > 3 && (attempt - 3) % 5 === 0)){
        const choice = await openRateLimitModal({done: k, total: all, update: true});
        if (choice === "keep"){ const e = new Error("stop"); e.stopped = true; throw e; }
        if (choice === "cancel"){ const e = new Error("cancel"); e.cancelled = true; throw e; }
      }
    };
    try {
      const token = await spotifyToken(id, secret);
      for (let i = 0; i < tracks.length && !stop; i++){
        const t = tracks[i];
        const q = `track:${cleanTitle(t.title)} artist:${splitArtistsRaw(t.artist)[0]}`;
        show(`Buscando música ${i + 1} de ${tracks.length}: ${t.title}`, i);
        const j = await spotifyGetJSON(`https://api.spotify.com/v1/search?type=track&limit=5&q=${encodeURIComponent(q)}`, token, (_, att) => pause(`música ${i + 1} de ${tracks.length}`, att, i));
        const it = pickTrack(j && j.tracks && j.tracks.items, t.title, t.artist);
        if (it){
          const meta = spotifyMeta(it, it.album); metaByN.set(t.n, meta); t.m = meta; found++;
          const cv = spotifyCover(it.album && it.album.images);
          if (cv && it.album && normC(it.album.name || "") === normC(t.album)) rememberSpotifyCovers([{artist: t.artist, album: t.album, cover: cv}]);
        } else { metaByN.set(t.n, {nf: 1}); t.m = {nf: 1}; nf_++; }
        if (metaByN.size % 20 === 0) save();
      }
      save();
      if (useGenre && !stop){
        const arts = genreArts();   // recalculado: as músicas achadas agora trazem o ID do artista (busca mais certeira)
        gDone = await spotifyFetchGenres(arts, token, (d, n, s, att) => {
          if (stop){ const e = new Error("stop"); e.stopped = true; throw e; }
          if (s) return pause(`gênero ${d + 1} de ${n}`, att, tracks.length + d);
          show(`Buscando gênero: artista ${Math.min(d + 1, n)} de ${n}`, tracks.length + d);
        });
      }
    } catch (e){
      if (e.cancelled){
        clearInterval(tick);
        if (storeBefore) writeStore(storeBefore); else clearStore();
        try { localStorage.setItem(GENRE_KEY, genresBefore); } catch (e2) {}
        setFlash("Atualização cancelada: nada foi salvo");
        document.body.classList.add("leaving"); setTimeout(() => location.reload(), 260);
        return;
      }
      save();
      if (e.limited) limited = true;
      else if (!e.stopped){ clearInterval(tick); show(e.message, 0); foot.innerHTML = `<span class="sp"></span><button class="gbtn" type="button" data-c>Fechar</button>`; foot.querySelector("[data-c]").onclick = () => md.close(); return; }
    }
    const parts = [];
    if (found) parts.push(`${faixas(found)} com dados novos`);
    if (nf_) parts.push(`${nf_} não encontrada${nf_ > 1 ? "s" : ""} no Spotify`);
    if (gDone) parts.push(`gênero de ${gDone} artista${gDone > 1 ? "s" : ""}`);
    setFlash(`${parts.join(" · ") || "Nada novo"}${limited ? " · o Spotify pediu pausa: continue depois em Atualizar dados" : stop ? " · parado por você" : ""}`);
    clearInterval(tick);
    document.body.classList.add("leaving"); setTimeout(() => location.reload(), 260);
  }
}

/* ---------- import modal ---------- */
let importSession = null;   // {text, mode}: busca por links pausada porque a pessoa fechou a tela de importar
function openImport(prefillText = null){
  // somar músicas à playlist de exemplo misturaria o exemplo com as da pessoa: aí só dá pra substituir
  // e com playlist própria o modal sempre abre em "Adicionar": substituir só passando pela confirmação da aba
  // busca por links que ficou pausada porque a pessoa fechou esta tela: volta com os mesmos links e pergunta se continua
  const sess = prefillText == null ? importSession : null;
  if (sess){ importSession = null; prefillText = sess.text; }
  let mode = sess ? sess.mode : STORE ? "add" : "replace", parsed = null;
  const body = document.createElement("div");
  body.innerHTML = `<p class="mdesc" id="im-desc"></p>
    <div class="imrow"><label class="chk" id="im-dupwrap"><input type="checkbox" id="im-dup" checked><span>Ignorar faixas que já estão na playlist (mesmo título e artista)</span></label></div>
    <label class="drop" id="im-drop"><textarea id="im-text" spellcheck="false" placeholder="Aceita: link de faixa/álbum do Spotify (um por linha), lista colada (1 faixa por linha, colunas separadas por TAB), ou arquivo .txt/.tsv/.csv/.xlsx (arraste para cá). Links de playlist não são aceitos — veja como importar uma playlist inteira.&#10;&#10;Link do Spotify:&#10;https://open.spotify.com/track/0G7mYkFpOp7HFRfiuNzoru&#10;https://open.spotify.com/track/0G7mYkFpOp7HFRfiuNew73&#10;&#10;Ou lista colada:&#10;1&#9;Nome da música&#9;Artista&#9;Álbum&#9;4:51&#9;2004-08-26"></textarea></label>
    <div class="imrow"><label class="gbtn file">${ICON.up}<span>Escolher arquivo</span><input type="file" id="im-file" accept=".txt,.tsv,.csv,.xlsx,text/plain,text/csv"></label><button class="lnk" type="button" id="im-copy-help">Não sei copiar minhas músicas</button></div>
    <div id="sp-fields" style="display:none">
      <p class="mdesc" id="sp-detect-msg"></p>
      <div id="sp-cc">
        <p class="mdesc">Informe o <strong>Client ID</strong> e o <strong>Client Secret</strong> do seu app no Spotify — <strong>Não é seu usuário nem senha de login</strong>.</p>
        <div class="imrow"><input type="text" id="sp-id" name="spotify-client-id" placeholder="Ex: 1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d" autocomplete="off"><input type="password" id="sp-secret" name="spotify-client-secret" placeholder="Ex: 9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c" autocomplete="new-password">
          <label class="chk" style="flex:none"><input type="checkbox" id="sp-remember" checked><span>Salvar neste navegador</span></label></div>
        <div class="imrow" style="margin:0"><label class="chk"><input type="checkbox" id="sp-genre"><span>Buscar gênero musical <span class="muted">· 1 busca a mais por artista novo (não por música)</span></span></label></div>
        <div class="imrow" style="gap:18px;margin:4px 0 8px"><button class="lnk" type="button" id="sp-why">Pra que pedimos isso?</button><button class="lnk" type="button" id="sp-id-help">Não sei meu ID/Secret</button></div>
        <div class="imrow"><span class="sp-status" id="sp-status"></span></div>
      </div>
    </div>
    <div id="im-prev" class="prev"></div>`;
  const foot = document.createElement("div"); foot.className = "mfrow";
  foot.innerHTML = `${STORE ? `<button class="lnk" type="button" id="im-restore">Restaurar playlist original</button>` : ""}<span class="sp"></span><button class="gbtn" type="button" id="im-cancel">Cancelar</button><button class="gbtn" type="button" id="im-cancel-fetch" style="display:none">Cancelar busca</button><button class="pbtn" type="button" id="im-go" disabled>Importar</button>`;
  const isAllowedUser = spotifyUserDisplay === "Crowd Goes Wild" || spotifyUserDisplay === "juia";
  const headerExtra = `<div class="seg" role="tablist" id="im-mode-seg"><button type="button" data-m="add"${STORE || isAllowedUser ? "" : ` disabled title="A playlist atual é só um exemplo: primeiro substitua pela sua"`}>Adicionar músicas</button><button type="button" data-m="replace">Substituir playlist</button></div>`;
  const md = openModal({title: "Importar músicas", sub: `Playlist atual: ${faixas(NN)} · ${IS.art.length} artistas`, body, foot, size: "md", headerExtra,
    onClose: () => {
      // fechar a tela no meio da busca (ou com ela adiada) não cancela: pausa e guarda os links pra quando reabrir
      if (fetchCtl) fetchCtl.suspend();
      if (fetchCtl || pendingResume) importSession = {text: ta.value, mode};
    }});
  const q = s => md.m.querySelector(s), ta = q("#im-text");
  const existing = new Set(BY_PLAYLIST.map(t => (t.title + "|" + t.artist).toLowerCase()));
  /* busca por links: fechar esta tela no meio PAUSA (não cancela). Ao reabrir, os links voltam e um modal pergunta
     se continua; "Agora não" deixa pendente: o botão vira "Continuar busca" e "Cancelar busca" aparece ao lado */
  let fetchCtl = null, pendingResume = false, lastStop = null;
  function syncFetchUI(){
    q("#im-cancel-fetch").style.display = fetchCtl || pendingResume ? "" : "none";
    ta.readOnly = !!fetchCtl;
    const go = q("#im-go");
    if (fetchCtl){ go.disabled = true; go.classList.remove("danger"); go.textContent = "Buscando…"; }
    else if (pendingResume){ go.disabled = false; go.classList.remove("danger"); go.textContent = "Continuar busca"; }
  }
  async function askResumeSession(){
    pendingResume = true; syncFetchUI();
    const ok = await confirmModal({title: "Continuar o carregamento?", ok: "Continuar", cancel: "Agora não",
      html: `<p>A busca das músicas foi <strong>pausada</strong> quando você fechou esta tela. Seus links continuam aqui, e as músicas que já tinham carregado não são buscadas de novo.</p>`});
    if (ok){ pendingResume = false; syncFetchUI(); runCcFetch(); }
  }
  function update(){
    if (fetchCtl || pendingResume) return syncFetchUI();
    md.m.querySelectorAll("#im-mode-seg button").forEach(b => b.setAttribute("aria-pressed", b.dataset.m === mode));
    q("#im-desc").innerHTML = mode === "add"
      ? `As músicas novas entram <strong>no fim da playlist</strong>, como as adições mais recentes (a partir da #${NN + 1}). Nada do que já existe é apagado.`
      : !STORE && !isAllowedUser ? `A playlist atual é só um <strong>exemplo</strong>: a sua lista entra no lugar dela. Depois disso, "Adicionar músicas" fica liberado pra ir somando novas.`
      : `A lista colada <strong>substitui toda a playlist atual</strong>. Painel, gráficos e insights são recalculados do zero com as músicas novas.`;
    q("#im-dupwrap").style.display = mode === "add" ? "" : "none";
    const go = q("#im-go");
    const spOn = q("#sp-fields").style.display !== "none";
    if (!parsed || !parsed.rows.length){
      go.style.display = "";
      if (spOn){ go.disabled = false; go.textContent = "Buscar dados no Spotify"; go.classList.remove("danger"); }
      else { go.disabled = true; go.textContent = mode === "add" ? "Adicionar" : "Substituir playlist"; go.classList.toggle("danger", mode === "replace"); }
      q("#im-prev").innerHTML = parsed && parsed.error
        ? `<div class="pv bad">${esc(parsed.error)}${parsed.playlistBlocked ? ` <button type="button" class="lnk" id="im-pl-help" style="padding:0;font:inherit;vertical-align:baseline">Veja como</button>` : ""}</div>`
        : "";
      if (parsed && parsed.playlistBlocked){ const b = q("#im-pl-help"); b && b.addEventListener("click", openPlaylistLinkHelp); }
      return;
    }
    go.style.display = "";
    // links que já batem com músicas salvas (pelo ID) viram "reordenar", não duplicata nem faixa nova
    const hitIds = new Set(mode === "add" ? matchLinkIds(parsed.rows.filter(r => r.id).map(r => r.id)).matched.map(m => m.id) : []);
    const isHit = r => !!r.id && hitIds.has(r.id);
    const isDup = r => !isHit(r) && existing.has((r.title + "|" + (r.artist || NI)).toLowerCase());
    const dedupeOn = mode === "add" && q("#im-dup").checked;
    const dup = dedupeOn ? parsed.rows.filter(isDup) : [];
    const fresh = (dedupeOn ? parsed.rows.filter(r => !isDup(r)) : parsed.rows).filter(r => !isHit(r));
    const n = fresh.length;
    const arts = new Set(parsed.rows.map(r => r.artist || NI)).size;
    go.disabled = n === 0 && !hitIds.size; go.classList.toggle("danger", mode === "replace");
    go.textContent = mode === "add" ? (hitIds.size ? `Reordenar${n ? ` e adicionar ${faixas(n)}` : ""}…` : `Adicionar ${faixas(n)}`) : `Substituir por ${faixas(n)}…`;
    q("#im-prev").innerHTML = `<div class="pv ok"><b>${faixas(parsed.rows.length)}</b> reconhecidas · ${arts} artistas${hitIds.size ? ` · <b>${hitIds.size}</b> já ${hitIds.size > 1 ? "estão" : "está"} na playlist e ${hitIds.size > 1 ? "serão reordenadas" : "será reordenada"} pela ordem dos links` : ""}${dup.length ? ` · <b>${dup.length}</b> já estão na playlist e serão ignoradas` : ""}${parsed.warnings.length ? ` · <span class="warn">${parsed.warnings.length} aviso${parsed.warnings.length > 1 ? "s" : ""}</span>` : ""}</div>
      ${parsed.warnings.length ? `<details class="warns"><summary>Ver avisos</summary><ul>${parsed.warnings.slice(0, 30).map(w => `<li>Linha ${w.line}: ${esc(w.msg)}</li>`).join("")}${parsed.warnings.length > 30 ? `<li>+ ${parsed.warnings.length - 30} avisos</li>` : ""}</ul></details>` : ""}
      ${dup.length ? `<details class="warns"><summary>Ver as ${dup.length} já existentes (ignoradas)</summary><ul>${dup.slice(0, 30).map(r => `<li>${esc(r.title)} — ${esc(r.artist || NI)}</li>`).join("")}${dup.length > 30 ? `<li>+ ${dup.length - 30} faixas</li>` : ""}</ul></details>` : ""}
      <p class="muted" style="margin:10px 0 4px">${dedupeOn && dup.length ? `Serão adicionadas (${faixas(fresh.length)}):` : "Faixas:"}</p>
      <div class="ptab"><table><thead><tr>${songHead(false)}</tr></thead><tbody>
      ${fresh.slice(0, 8).map(r => `<tr>${songCells(songView(r))}</tr>`).join("")}</tbody></table>
      ${fresh.length > 8 ? `<div class="more">+ ${fresh.length - 8} faixas</div>` : ""}</div>`;
  }
  function setSpotifyMode(on, n, an){
    q("#sp-fields").style.display = on ? "" : "none";
    if (!on) return;
    const parts = [];
    if (an) parts.push(`${an} álbu${an > 1 ? "ns" : "m"}`);
    if (n) parts.push(faixas(n));
    const single = n === 1 && !an;
    q("#sp-detect-msg").innerHTML = `Detectei ${parts.join(" e ")} do Spotify nessa lista.${single ? ` <button type="button" class="lnk" id="sp-whole-pl" style="padding:0;font:inherit;vertical-align:baseline">Quer adicionar a playlist inteira?</button>` : ""}`;
    if (single) q("#sp-whole-pl").addEventListener("click", openPlaylistLinkHelp);
  }
  const fromText = () => {
    const t = ta.value;
    if (!t.trim()){ parsed = null; setSpotifyMode(false); return update(); }
    const ids = parseSpotifyIds(t);
    const plIds = parseSpotifyPlaylistIds(t);
    const albIds = parseSpotifyAlbumIds(t);
    if (plIds.length){
      parsed = {rows: [], warnings: [], playlistBlocked: true, error: "Links de playlist não são aceitos: o Spotify só garante a ordem de exibição atual da playlist, que pode não ser a ordem real em que as músicas foram adicionadas."};
      setSpotifyMode(false);
      return update();
    }
    const lines = t.split(/\r?\n/).filter(l => l.trim());
    if ((ids.length || albIds.length) && (ids.length + albIds.length) / lines.length >= 0.5){ parsed = null; setSpotifyMode(true, ids.length, albIds.length); return update(); }
    setSpotifyMode(false);
    try {
      parsed = cellsToRows(textToCells(t));
      if (!parsed.rows.length) parsed.error = "Nenhuma faixa reconhecida. Confira se as colunas estão separadas por TAB, ponto e vírgula ou vírgula.";
      else if (looksLikeGarbage(parsed)) parsed = {rows: [], warnings: [], error: "Isso não parece ser uma lista de músicas, um link do Spotify ou um arquivo reconhecido. Confira o que foi colado e tente de novo."};
    } catch (e) { parsed = {rows: [], warnings: [], error: e.message}; }
    update();
  };
  let tmr; ta.addEventListener("input", () => { if (pendingResume){ pendingResume = false; syncFetchUI(); } clearTimeout(tmr); tmr = setTimeout(fromText, 200); });
  async function loadFile(f){
    try {
      if (/\.xlsx$/i.test(f.name)){ const cells = await xlsxToCells(await f.arrayBuffer()); parsed = cellsToRows(cells); ta.value = cells.map(r => r.join("\t")).join("\n"); setSpotifyMode(false); }
      else { ta.value = await f.text(); fromText(); return; }
      if (!parsed.rows.length) parsed.error = "Nenhuma faixa reconhecida no arquivo.";
      else if (looksLikeGarbage(parsed)) parsed = {rows: [], warnings: [], error: "Isso não parece ser uma lista de músicas reconhecível. Confira o conteúdo do arquivo e tente de novo."};
    } catch (e) { parsed = {rows: [], warnings: [], error: `Não foi possível ler o arquivo: ${e.message}`}; }
    update();
  }
  q("#im-file").addEventListener("change", e => e.target.files[0] && loadFile(e.target.files[0]));
  const drop = q("#im-drop");
  ["dragenter", "dragover"].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.add("over"); }));
  ["dragleave", "drop"].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.remove("over"); }));
  drop.addEventListener("drop", e => { const f = e.dataTransfer.files[0]; if (f) loadFile(f); });
  md.m.querySelectorAll("#im-mode-seg button").forEach(b => b.addEventListener("click", async () => {
    // com uma playlist própria salva, entrar em "Substituir" pede confirmação (a lista atual vai ser apagada)
    if (b.dataset.m === "replace" && mode !== "replace" && STORE){
      const ok = await confirmModal({title: "Substituir a playlist inteira?", danger: true, ok: "Quero substituir",
        html: `<p>Nesse modo, a lista que você subir <strong>apaga as ${faixas(NN)} da playlist atual</strong> e fica no lugar delas.</p>
          <p>Se a ideia é só colocar músicas novas, use <strong>Adicionar músicas</strong>: nada do que já existe é apagado.</p>
          <p class="muted">Você ainda vai confirmar mais uma vez antes de apagar.</p>`,
        extra: {label: `${ICON.down} Exportar atual`, run: () => exportTxt()}});
      if (!ok) return;
    }
    mode = b.dataset.m; update();
  }));
  const creds = loadSpotifyCreds();
  q("#sp-id").value = creds.id || ""; q("#sp-secret").value = creds.secret || "";
  const openWizard = (returning = false) => openSpotifyAppHelp({returning, id: q("#sp-id").value.trim(), secret: q("#sp-secret").value.trim(), onDone: (id, secret) => {
    q("#sp-id").value = id; q("#sp-secret").value = secret;
    if (q("#sp-remember").checked) saveSpotifyCreds(id, secret);
    const st = q("#sp-status"); st.classList.remove("err");
    st.textContent = "Credenciais conferidas com o Spotify ✓ — agora é só clicar em \"Buscar dados no Spotify\".";
  }});
  async function runCcFetch(){
    const id = q("#sp-id").value.trim(), secret = q("#sp-secret").value.trim();
    const ids = parseSpotifyIds(ta.value), albumIds = parseSpotifyAlbumIds(ta.value);
    const status = q("#sp-status"), btn = q("#im-go");
    status.classList.remove("err");
    if (!ids.length && !albumIds.length){ status.classList.add("err"); status.textContent = "Nenhum link do Spotify reconhecido."; return; }
    const cache = {...ownTracksById(), ...loadTrackCache()}, toFetch = ids.filter(x => !cache[x]), known = ids.length - toFetch.length;
    let res = {rows: [], warnings: []};
    if (toFetch.length || albumIds.length){
      res = await fetchFromSpotify(id, secret, toFetch, albumIds, status, btn, known);
      if (lastStop === "suspend") return;
      if (!res){ parsed = null; update(); return; }
    }
    const fetchedSet = new Set(toFetch), got = new Map(res.rows.filter(r => fetchedSet.has(r.id)).map(r => [r.id, r]));
    const albumRows = res.rows.filter(r => !fetchedSet.has(r.id));
    const trackRows = ids.map(x => cache[x] ? {n: null, id: x, ...cache[x]} : got.get(x)).filter(Boolean);
    parsed = {rows: [...albumRows, ...trackRows], warnings: res.warnings};
    parsed.rows.forEach(r => { if (r.id && r.meta && !r.meta.id) r.meta = {...r.meta, id: r.id}; });
    rememberSpotifyCovers(parsed.rows);
    if (known){
      status.classList.remove("err");
      const msg = `${known === 1 ? "1 música já era conhecida" : `${known} músicas já eram conhecidas`} — não precisou buscar no Spotify.`;
      status.textContent = toFetch.length || albumIds.length ? `${status.textContent} ${msg}` : msg;
    }
    // as músicas aparecem (e já dá pra adicionar) antes do gênero: gênero é extra e nunca pode segurar a importação
    update();
    const arts = q("#sp-genre").checked && id && secret && parsed.rows.length ? genreTargets(parsed.rows) : [];
    if (!arts.length) return;
    const before = status.textContent;
    // se o Spotify já estava limitando (a pessoa parou e ficou com o que carregou), pedir gênero agora só travaria de novo
    if (res.partial){ status.textContent = `${before} Gênero fica pra depois: use "Atualizar dados" quando o Spotify liberar.`; return; }
    const token = await getToken(id, secret, status);
    if (!token) return;
    try {
      const n = await spotifyFetchGenres(arts, token, (d, tot, s) => {
        // primeiro sinal de limite: para os gêneros na hora (sem modal) — as músicas continuam prontas pra adicionar
        if (s){ const e = new Error("limite"); e.limited = true; throw e; }
        status.textContent = `${before} Buscando gênero musical: artista ${Math.min(d + 1, tot)} de ${tot}…`;
      });
      status.textContent = n ? `${before} Gênero de ${n} artista${n > 1 ? "s" : ""} encontrado.` : before;
    } catch (e){
      status.textContent = `${before} ${e.limited ? "O Spotify pediu uma pausa, então o gênero ficou pra depois" : "Não deu pra buscar todos os gêneros"} — complete em "Atualizar dados".`;
    }
  }
  let lastToken = null;
  async function getToken(id, secret, status){
    if (lastToken) return lastToken;
    if (!id && !secret){ status.classList.add("err"); status.textContent = "Informe o Client ID e o Client Secret."; return; }
    if (id && !SPOTIFY_ID_RE.test(id)){ status.classList.add("err"); status.textContent = "Esse Client ID não parece válido: deveria ter 32 letras/números (ex: 1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d)."; openWizard(); return; }
    if (!id){ status.classList.add("err"); status.textContent = "Informe o Client ID."; return; }
    if (secret && !SPOTIFY_ID_RE.test(secret)){ status.classList.add("err"); status.textContent = "Esse Client Secret não parece válido: deveria ter 32 letras/números."; openWizard(); return; }
    if (!secret){ status.classList.add("err"); status.textContent = "Informe o Client Secret."; return; }
    if (q("#sp-remember").checked) saveSpotifyCreds(id, secret); else clearSpotifyCreds();
    try { lastToken = await spotifyToken(id, secret); } catch (e2) { status.classList.add("err"); status.textContent = e2.message; return; }
    // busca o perfil do usuário pra saber quem está logado (usado pra "Crowd Goes Wild")
    spotifyFetchUserProfile(lastToken);
    setTimeout(() => { lastToken = null; }, 50 * 60 * 1000);   // token do Spotify vale 1h
    return lastToken;
  }
  async function fetchFromSpotify(id, secret, ids, albumIds, status, btn, known = 0){
    const token = await getToken(id, secret, status);
    if (!token) return;
    fetchCtl = makeFetchCtl(); syncFetchUI();
    const ctl = fetchCtl;
    try { return await spotifyRunFetch({token, ids, albumIds, status, btn, known, ctl}); }
    finally { lastStop = ctl.stop; fetchCtl = null; syncFetchUI(); }
  }
  q("#im-cancel-fetch").addEventListener("click", async () => {
    if (!fetchCtl && !pendingResume) return;
    const ok = await confirmModal({title: "Cancelar a busca?", danger: true, ok: "Cancelar busca", cancel: "Voltar",
      html: `<p>Se cancelar agora, o carregamento das músicas <strong>terá sido à toa</strong>: nenhuma música será importada.</p>
        <p>E as requisições ao Spotify que já foram usadas só voltam a ficar disponíveis daqui a cerca de <strong>24 horas</strong>.</p>`});
    if (!ok) return;
    if (fetchCtl){ fetchCtl.cancel(); return; }
    pendingResume = false; parsed = null;
    q("#sp-status").textContent = "Busca cancelada: nenhuma música foi adicionada.";
    update();
  });
  q("#im-copy-help").addEventListener("click", openPlaylistLinkHelp);
  q("#sp-genre").checked = genreOn();
  q("#sp-genre").addEventListener("change", e => setGenreOn(e.target.checked));
  q("#sp-why").addEventListener("click", () => {
    openModal({
      title: "Por que pedimos isso?",
      body: `<p class="mdesc">O Client ID (e o Client Secret, quando pedido) servem só para autenticar a busca de música, artista, álbum, duração e lançamento direto na API oficial do Spotify. Essa busca acontece aqui mesmo, no seu navegador — nada passa por um servidor nosso.</p>
        <p class="mdesc">Este site nem tem banco de dados: não existe nenhum lugar nosso guardando essas informações, então não há como o dono do site acessar o que você digita aqui. Tudo fica salvo só no seu próprio navegador (localStorage), e some quando você desmarcar "Salvar neste navegador" ou limpar os dados do site.</p>`,
      size: "sm"
    });
  });
  q("#sp-id-help").addEventListener("click", () => {
    if (!hasSpotifyApp()) return openWizard();
    window.open("https://developer.spotify.com/dashboard", "_blank", "noopener");
    openWizard(true);
  });
  if (prefillText){
    ta.value = prefillText;
    fromText();
  }
  q("#im-dup").addEventListener("change", update);
  q("#im-cancel").addEventListener("click", md.close);
  if (sess) setTimeout(askResumeSession, 0);
  if (STORE) q("#im-restore").addEventListener("click", restoreOriginal);
  q("#im-go").addEventListener("click", async () => {
    if (fetchCtl) return;
    if (pendingResume){ pendingResume = false; syncFetchUI(); return runCcFetch(); }
    if (!parsed || !parsed.rows.length){
      if (q("#sp-fields").style.display !== "none") return runCcFetch();
      return;
    }
    const toRow = (r, n) => r.meta ? [n, r.title, r.artist, r.album, r.sec, r.date, r.meta] : [n, r.title, r.artist, r.album, r.sec, r.date];
    if (mode === "add"){
      const skip = q("#im-dup").checked;
      const seen = new Set(existing), fresh = [], seq = [];
      const ordered = parsed.rows.every(r => r.n != null) ? [...parsed.rows].sort((a, b) => a.n - b.n) : parsed.rows;
      // links que já batem com músicas salvas (pelo ID) não são adicionadas de novo: a música é reposicionada na ordem dos links
      const idRows = ordered.filter(r => r.id), mt = idRows.length ? matchLinkIds(idRows.map(r => r.id)) : {matched: [], missing: BY_PLAYLIST};
      const hit = new Map(mt.matched.map(m => [m.id, m.t]));
      for (const r of ordered){
        if (r.id && hit.has(r.id)){ seq.push({id: r.id, t: hit.get(r.id)}); continue; }
        const k = (r.title + "|" + (r.artist || NI)).toLowerCase(); if (skip && seen.has(k)) continue; seen.add(k); fresh.push(r); seq.push({r});
      }
      if (!fresh.length && !hit.size) return toast("Todas as faixas já estão na playlist.");
      const total = NN + fresh.length;
      const ok = await confirmModal({title: hit.size ? "Reordenar e adicionar?" : `Adicionar ${faixas(fresh.length)}?`, ok: hit.size ? "Confirmar" : "Adicionar",
        html: hit.size
          ? `<p><strong>${faixas(hit.size)}</strong> dos links já ${hit.size > 1 ? "estão" : "está"} na playlist e ${hit.size > 1 ? "vão" : "vai"} ser <strong>reordenada${hit.size > 1 ? "s" : ""} pela ordem em que você colou</strong> (sem gastar nenhuma busca no Spotify).</p>
            ${fresh.length ? `<p>${faixas(fresh.length)} nova${fresh.length > 1 ? "s" : ""} ${fresh.length > 1 ? "entram" : "entra"} na mesma sequência. O que não estava nos links fica no começo, na ordem atual.</p>` : ""}
            <p>A playlist fica com <strong>${faixas(total)}</strong>.</p>`
          : `<p>As faixas entram no fim da playlist, da <strong>#${NN + 1}</strong> à <strong>#${NN + fresh.length}</strong>, e o painel será recalculado com ${faixas(NN + fresh.length)}.</p>`});
      if (!ok) return;
      ssSet("verify", "1");
      if (hit.size){
        const cache = loadTrackCache(), out = []; let n = 0;
        for (const t of mt.missing) out.push(rowOf(t, ++n, null, cache));
        for (const s of seq) out.push(s.t ? rowOf(s.t, ++n, s.id, cache) : toRow(s.r, ++n));
        return commitRows(out, `${faixas(hit.size)} reordenada${hit.size > 1 ? "s" : ""}${fresh.length ? ` · ${faixas(fresh.length)} adicionada${fresh.length > 1 ? "s" : ""}` : ""} · playlist com ${faixas(total)}`);
      }
      commitRows(applyOrderPlan([...currentRows(), ...fresh.map((r, i) => toRow(r, NN + i + 1))], NN), `${faixas(fresh.length)} adicionada${fresh.length > 1 ? "s" : ""} · playlist com ${faixas(NN + fresh.length)}`);
    } else {
      const rows = parsed.rows.every(r => r.n != null) && new Set(parsed.rows.map(r => r.n)).size === parsed.rows.length ? parsed.rows.map(r => toRow(r, r.n)) : parsed.rows.map((r, i) => toRow(r, i + 1));
      const arts = new Set(parsed.rows.map(r => r.artist || NI)).size;
      const ok = await confirmModal({title: "Substituir a playlist inteira?", danger: true, ok: "Apagar e substituir",
        html: `<div class="cmp"><div><span>Atual</span><b>${faixas(NN)}</b><em>${IS.art.length} artistas</em></div><i>→</i><div><span>Nova</span><b>${faixas(rows.length)}</b><em>${arts} artistas</em></div></div>
          <p>Todas as músicas atuais serão <strong>apagadas</strong> e substituídas pela lista nova. Painel, gráficos e insights serão gerados do zero.</p>
          <p class="muted">Não dá para desfazer. Se quiser guardar a lista atual, exporte antes.</p>`,
        extra: {label: `${ICON.down} Exportar atual`, run: () => exportTxt()}});
      if (!ok) return;
      ssSet("verify", "1");
      commitRows(rows, `Nova playlist carregada · ${faixas(rows.length)} de ${arts} artistas`);
    }
  });
  update();
}

/* ---------- ordem da playlist: bater links com as músicas já salvas (nenhuma requisição ao Spotify) ---------- */
const ownKey = (title, artist) => (title || "").trim().toLowerCase() + "|" + (splitArtists(artist || "")[0] || "");
// faixas que já estão na playlist e carregam o próprio ID, no mesmo formato do cache de faixas
function ownTracksById(){
  const o = {};
  for (const t of BY_PLAYLIST) if (t.m && t.m.id) o[t.m.id] = {title: t.title, artist: t.artist === NI ? "" : t.artist, album: t.album === NI ? "" : t.album, sec: t.sec, date: t.date, meta: t.m};
  return o;
}
/* id → música da playlist. 1º pelo ID guardado na música (meta.id); 2º, pras antigas sem ID, pelo cache de faixas
   já buscadas (título + artista principal). matched = na ordem dos links; fresh = links que não estão na playlist;
   missing = músicas da playlist que não vieram nos links */
function matchLinkIds(ids){
  const cache = loadTrackCache(), byId = new Map(), byKey = new Map(), used = new Set(), matched = [], fresh = [];
  for (const t of BY_PLAYLIST){
    if (t.m && t.m.id) byId.set(t.m.id, t);
    else { const k = ownKey(t.title, t.artist); (byKey.get(k) || byKey.set(k, []).get(k)).push(t); }
  }
  for (const id of ids){
    let t = byId.get(id);
    if (!t && cache[id]){ const arr = byKey.get(ownKey(cache[id].title, cache[id].artist)); t = arr && arr.find(x => !used.has(x.n)); }
    if (t && !used.has(t.n)){ used.add(t.n); matched.push({id, t}); } else fresh.push(id);
  }
  return {matched, fresh, missing: BY_PLAYLIST.filter(t => !used.has(t.n))};
}
// linha pra gravar de uma música já salva; com o id, guarda o ID dentro dos dados dela (dá pra bater de novo depois)
function rowOf(t, n, id, cache){
  const c = id && cache[id], base = {...(c && c.meta || {}), ...(t.m || {})};
  const m = id && Object.keys(base).length ? {...base, id} : t.m;
  const r = [n, t.title, t.artist === NI ? "" : t.artist, t.album === NI ? "" : t.album, t.sec, t.date];
  if (m) r.push(m);
  return r;
}
const ssGet = k => { try { return sessionStorage.getItem(STORE_KEY + ":" + k); } catch (e) { return null; } };
const ssSet = (k, v) => { try { sessionStorage.setItem(STORE_KEY + ":" + k, v); } catch (e) {} };
const ssDel = k => { try { sessionStorage.removeItem(STORE_KEY + ":" + k); } catch (e) {} };
const linksText = ids => ids.map(id => `https://open.spotify.com/track/${id}`).join("\n");
/* plano de ordem (ids na ordem dos links): usado quando faltaram músicas que ainda precisam ser buscadas e
   entram na posição certa, e não no fim */
function applyOrderPlan(rows, oldCount){
  let plan = null; try { plan = JSON.parse(ssGet("plan") || "null"); } catch (e) {}
  ssDel("plan");
  if (!Array.isArray(plan) || !plan.length) return rows;
  const pos = new Map(plan.map((id, i) => [id, i]));
  const inPlan = r => r[6] && r[6].id && pos.has(r[6].id);
  const front = rows.filter(r => !inPlan(r) && r[0] <= oldCount), mid = rows.filter(inPlan).sort((a, b) => pos.get(a[6].id) - pos.get(b[6].id)), tail = rows.filter(r => !inPlan(r) && r[0] > oldCount);
  return [...front, ...mid, ...tail].map((r, i) => [i + 1, ...r.slice(1)]);
}
function openFixOrder(){
  const body = document.createElement("div");
  body.innerHTML = `<div class="ordnote"><div class="ordcaps">ATENÇÃO: AS MÚSICAS PRECISAM ESTAR NA ORDEM DE ADIÇÃO — DA PRIMEIRA MÚSICA ADICIONADA À PLAYLIST (#1) ATÉ A ÚLTIMA (#${NN}). SE VIEREM NA ORDEM ERRADA, A PLAYLIST VAI FICAR ERRADA DE NOVO.</div></div>
    <ol class="ordsteps">
      <li>Abra a playlist no <strong>Spotify do PC</strong>.</li>
      <li>No topo da coluna com a data de adição, clique em <strong>"Adicionada em"</strong> até as <strong>MAIS ANTIGAS ficarem NO TOPO</strong> (seta para cima). Se não aparecer, clique nos <strong>3 tracinhos</strong> (☰) ao lado da lupa e escolha "Adicionada em".</li>
      <li>Aperte <strong>Ctrl+A</strong> e depois <strong>Ctrl+C</strong>: o Spotify copia o <strong>link de cada música</strong>.</li>
      <li>Volte aqui e cole no campo abaixo (<strong>Ctrl+V</strong>).</li>
    </ol>
    <textarea class="ordta" id="fo-text" spellcheck="false" placeholder="https://open.spotify.com/track/…&#10;https://open.spotify.com/track/…"></textarea>
    <p class="muted" id="fo-status" style="margin:8px 0 0">Nada é buscado no Spotify: o site só confere os links com as músicas que já estão salvas aqui.</p>`;
  const foot = document.createElement("div"); foot.className = "mfrow";
  foot.innerHTML = `<span class="sp"></span><button class="gbtn" type="button" id="fo-cancel">Cancelar</button><button class="pbtn" type="button" id="fo-go" disabled>Reordenar playlist</button>`;
  const md = openModal({title: "Consertar a ordem da playlist", body, foot, size: "md"});
  const q = s => md.m.querySelector(s), ta = q("#fo-text"), st = q("#fo-status"), go = q("#fo-go");
  const ids = () => parseSpotifyIds(ta.value);
  ta.addEventListener("input", () => { const n = ids().length; st.classList.remove("err"); st.textContent = n ? `${n} link${n > 1 ? "s" : ""} reconhecido${n > 1 ? "s" : ""}.` : "Nada é buscado no Spotify: o site só confere os links com as músicas que já estão salvas aqui."; go.disabled = !n; });
  q("#fo-cancel").addEventListener("click", md.close);
  go.addEventListener("click", async () => {
    const list = ids(); if (!list.length) return;
    const mt = matchLinkIds(list), cache = loadTrackCache();
    if (!mt.matched.length){ st.classList.add("err"); st.textContent = "Nenhum link bate com as músicas salvas. Isso acontece com músicas que entraram sem link do Spotify (lista colada): nesse caso use Adicionar músicas → Substituir playlist."; return; }
    const rows = []; let n = 0;
    for (const t of mt.missing) rows.push(rowOf(t, ++n, null, cache));
    for (const {id, t} of mt.matched) rows.push(rowOf(t, ++n, id, cache));
    const ok = await confirmModal({title: "Reordenar a playlist?", ok: "Reordenar",
      html: `<p><strong>${faixas(mt.matched.length)}</strong> de ${nf(NN)} batem com os links e vão ficar na ordem em que você colou: a primeira do que você colou vira a <strong>#${mt.missing.length + 1}</strong> e a última, a <strong>#${NN}</strong>. Nenhuma busca no Spotify é feita.</p>
        ${mt.missing.length ? `<p><strong>${faixas(mt.missing.length)}</strong> da playlist não estavam nos links: ficam no começo (#1 a #${mt.missing.length}), na ordem atual.</p>` : ""}
        ${mt.fresh.length ? `<p><strong>${mt.fresh.length} link${mt.fresh.length > 1 ? "s" : ""}</strong> não ${mt.fresh.length > 1 ? "estão" : "está"} na playlist. Depois de reordenar eu pergunto se você quer buscar ${mt.fresh.length > 1 ? "essas músicas" : "essa música"} e adicionar.</p>` : ""}
        <p class="muted">Para guardar a lista atual antes, exporte primeiro.</p>`,
      extra: {label: `${ICON.down} Exportar atual`, run: () => exportTxt()}});
    if (!ok) return;
    if (mt.fresh.length){ ssSet("fresh", JSON.stringify({ids: mt.fresh, plan: list})); }
    commitRows(rows, `Playlist reordenada · ${faixas(mt.matched.length)} conferidas com os links`);
  });
}
async function askFetchFresh({ids, plan}){
  const n = ids.length;
  const ok = await confirmModal({title: `${n === 1 ? "Sobrou 1 link" : `Sobraram ${n} links`} fora da playlist`, ok: "Buscar e adicionar", cancel: "Agora não",
    html: `<p>${n === 1 ? "Esse link não está" : "Esses links não estão"} na playlist. Quer que o site ${n === 1 ? "busque essa música" : "busque essas músicas"} no Spotify e ${n === 1 ? "a adicione" : "as adicione"}, na posição certa pela ordem dos links que você colou?</p><p class="muted">Gasta 1 busca no Spotify por música nova.</p>`});
  if (!ok) return;
  ssSet("plan", JSON.stringify(plan));
  openImport(linksText(ids));
}
function askVerifyOrder(){
  confirmModal({title: "Verifique se você salvou suas músicas na ordem certa", ok: "Verificar", cancel: "Agora não",
    html: `<p>A playlist precisa estar na <strong>ordem em que as músicas foram adicionadas</strong>: a primeira adicionada é a <strong>#1</strong> e a última é a <strong>#${NN}</strong>.</p><p>Quer conferir agora?</p>`})
    .then(ok => { if (ok) openTable({verify: true}); });
}

/* ---------- song table with removal ---------- */
function openTable({verify = false} = {}){
  const marked = new Set(); let sortK = "n", sortDir = 1, query = "";
  const body = document.createElement("div"); body.className = "tbwrap";
  body.innerHTML = `${verify ? `<div class="ordnote">Confira a coluna <strong>#</strong>: a playlist deve ir da <strong>primeira música adicionada (#1)</strong> até a <strong>última (#${NN})</strong>. Se estiver fora de ordem, clique em <strong>CONSERTAR ORDEM DA PLAYLIST</strong>.</div>` : ""}<div class="tbtools"><input type="search" id="tb-q" placeholder="Buscar por música, artista ou álbum…" aria-label="Buscar"><button class="gbtn" type="button" id="tb-markall">Marcar resultados</button><button class="gbtn" type="button" id="tb-clear" disabled>Desmarcar tudo</button>${STORE ? `<button class="gbtn" type="button" id="tb-reverse" title="A #1 vira a última e a última vira a #1">Inverter ordem</button><button class="pbtn" type="button" id="tb-fix" title="Cole os links da playlist do Spotify e a ordem é refeita, sem buscar nada">CONSERTAR ORDEM DA PLAYLIST</button>` : ""}<span class="tbcount" id="tb-count"></span></div>
    <div class="tbscroll"><table class="tb"><thead><tr><th class="ck"></th>${songHead()}</tr></thead><tbody></tbody></table></div>`;
  const foot = document.createElement("div"); foot.className = "mfrow";
  foot.innerHTML = `<span class="hintf" id="tb-hint">Marque as faixas que quer remover. Nada é apagado até você salvar.</span><span class="sp"></span><button class="gbtn" type="button" id="tb-cancel">Fechar</button><button class="pbtn danger" type="button" id="tb-save" disabled>Remover faixas</button>`;
  const md = openModal({title: "Músicas da playlist", sub: `${faixas(NN)} · ${IS.art.length} artistas · ${IS.alb.length} álbuns`, body, foot, size: "lg"});
  const q = s => md.m.querySelector(s), tbody = q("tbody");
  const rowsHtml = list => list.map(t => `<tr data-n="${t.n}" class="${marked.has(t.n) ? "mk" : ""}"><td class="ck"><button type="button" class="rm" aria-pressed="${marked.has(t.n)}" aria-label="${marked.has(t.n) ? "Manter" : "Remover"} ${esc(t.title)}">${ICON.x}</button></td>${songCells(t)}</tr>`).join("");
  let visible = [];
  function draw(){
    const qq = query.trim().toLowerCase();
    visible = BY_PLAYLIST.filter(t => !qq || (t.title + " " + t.artist + " " + t.album + " " + t.genre).toLowerCase().includes(qq));
    visible.sort(cmpSong(sortK, sortDir));
    tbody.innerHTML = visible.length ? rowsHtml(visible) : `<tr><td colspan="${SONG_COLS.length + 1}" class="none">Nenhuma faixa encontrada.</td></tr>`;
    md.m.querySelectorAll("th[data-k]").forEach(th => th.setAttribute("aria-sort", th.dataset.k === sortK ? (sortDir > 0 ? "ascending" : "descending") : "none"));
    counts();
  }
  function counts(){
    q("#tb-count").textContent = query ? `${visible.length} de ${NN}` : `${NN} faixas`;
    const k = marked.size, save = q("#tb-save");
    save.disabled = !k || k >= NN; save.textContent = k ? `Remover ${faixas(k)}…` : "Remover faixas";
    q("#tb-clear").disabled = !k;
    q("#tb-hint").innerHTML = k >= NN ? `<span class="warn">A playlist não pode ficar vazia.</span>` : k ? `<strong>${faixas(k)}</strong> marcada${k > 1 ? "s" : ""} para remover.` : "Marque as faixas que quer remover. Nada é apagado até você salvar.";
  }
  tbody.addEventListener("click", e => {
    const b = e.target.closest(".rm"); if (!b) return;
    const tr = b.closest("tr"), n = +tr.dataset.n;
    marked.has(n) ? marked.delete(n) : marked.add(n);
    tr.classList.toggle("mk", marked.has(n)); b.setAttribute("aria-pressed", marked.has(n)); counts();
  });
  md.m.querySelectorAll("th[data-k]").forEach(th => { const go = () => { if (sortK === th.dataset.k) sortDir *= -1; else { sortK = th.dataset.k; sortDir = 1; } draw(); };
    th.addEventListener("click", go); th.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " "){ e.preventDefault(); go(); } }); });
  let tmr; q("#tb-q").addEventListener("input", e => { clearTimeout(tmr); tmr = setTimeout(() => { query = e.target.value; draw(); }, 120); });
  q("#tb-markall").addEventListener("click", () => { visible.forEach(t => marked.add(t.n)); draw(); });
  q("#tb-clear").addEventListener("click", () => { marked.clear(); draw(); });
  q("#tb-cancel").addEventListener("click", md.close);
  if (STORE) q("#tb-fix").addEventListener("click", openFixOrder);
  if (STORE) q("#tb-reverse").addEventListener("click", async () => {
    const first = BY_PLAYLIST[0], last = BY_PLAYLIST[NN - 1];
    const ok = await confirmModal({title: "Inverter a ordem da playlist?", ok: "Inverter ordem",
      html: `<p>A ordem de entrada das <strong>${faixas(NN)}</strong> vai ser invertida: <strong>${esc(last.title)}</strong> (hoje a #${NN}) passa a ser a <strong>#1</strong> e <strong>${esc(first.title)}</strong> (hoje a #1) passa a ser a <strong>#${NN}</strong>.</p>
        <p>Painel e insights são recalculados com a nova ordem (o que depende de "quem entrou primeiro" muda).</p>
        <p class="muted">Para voltar ao que era antes, é só inverter de novo. Para guardar a lista atual, exporte primeiro.</p>`,
      extra: {label: `${ICON.down} Exportar atual`, run: () => exportTxt()}});
    if (!ok) return;
    commitRows(currentRows().map(r => [NN + 1 - r[0], ...r.slice(1)]), `Ordem invertida · ${faixas(NN)}`);
  });
  q("#tb-save").addEventListener("click", async () => {
    const k = marked.size; if (!k || k >= NN) return;
    const gone = BY_PLAYLIST.filter(t => marked.has(t.n));
    const arts = [...groupBy(gone, "artist")].map(([a, rs]) => [a, rs.length]).sort((x, y) => y[1] - x[1]);
    const pending = confirmModal({title: `Remover ${faixas(k)}?`, danger: true, ok: "Remover",
      html: `<p>${k <= 3 ? gone.map(t => `<strong>${esc(t.title)}</strong> (${esc(t.artist)})`).join(", ") : `Faixas de ${listPt(arts.slice(0, 3).map(([a, n]) => `${esc(a)} (${n})`))}${arts.length > 3 ? ` e mais ${arts.length - 3} artistas` : ""}`} sairão da playlist.</p>
        ${k > 3 ? `<p><button type="button" class="lnk" id="rm-see-all" style="padding:0">Ver todas as ${faixas(k)} que serão apagadas</button></p>` : ""}
        <p>A playlist fica com <strong>${faixas(NN - k)}</strong>, renumeradas de 1 a ${NN - k} mantendo a ordem de entrada. Painel e insights serão recalculados.</p><p class="muted">Para guardar a lista antes, exporte primeiro.</p>`,
      extra: {label: `${ICON.down} Exportar atual`, run: () => exportTxt()}});
    const seeAll = document.querySelector("#rm-see-all");
    if (seeAll) seeAll.addEventListener("click", () => openModal({
      title: `${faixas(k)} serão apagadas`,
      body: songTable(gone),
      size: "lg"
    }));
    const ok = await pending;
    if (!ok) return;
    commitRows(currentRows().filter(r => !marked.has(r[0])), `${faixas(k)} removida${k > 1 ? "s" : ""} · playlist com ${faixas(NN - k)}`);
  });
  draw();
}

/* ---------- export ---------- */
function download(name, blob){
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = name;
  document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
}
function exportTxt(){
  const txt = currentRows().map(r => [r[0], r[1], r[2], r[3], durTxt(r[4]), r[5], ...(r[6] ? [JSON.stringify(r[6])] : [])].map(v => String(v ?? "").replace(/[\t\r\n]+/g, " ")).join("\t")).join("\n") + "\n";
  download(`playlist-${today()}.txt`, new Blob([txt], {type: "text/plain;charset=utf-8"}));
  toast(`Lista exportada em texto · ${faixas(NN)}`);
}
const CRC = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++){ let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
const crc32 = u8 => { let c = 0xFFFFFFFF; for (let i = 0; i < u8.length; i++) c = CRC[(c ^ u8[i]) & 0xFF] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; };
function zipStore(files){
  const enc = new TextEncoder(), parts = [], central = []; let off = 0;
  for (const f of files){
    const name = enc.encode(f.name), data = typeof f.data === "string" ? enc.encode(f.data) : f.data, crc = crc32(data);
    const h = new DataView(new ArrayBuffer(30));
    h.setUint32(0, 0x04034b50, true); h.setUint16(4, 20, true); h.setUint16(6, 0x0800, true); h.setUint16(8, 0, true); h.setUint16(10, 0, true); h.setUint16(12, 0x21, true);
    h.setUint32(14, crc, true); h.setUint32(18, data.length, true); h.setUint32(22, data.length, true); h.setUint16(26, name.length, true); h.setUint16(28, 0, true);
    parts.push(new Uint8Array(h.buffer), name, data);
    const c = new DataView(new ArrayBuffer(46));
    c.setUint32(0, 0x02014b50, true); c.setUint16(4, 20, true); c.setUint16(6, 20, true); c.setUint16(8, 0x0800, true); c.setUint16(10, 0, true); c.setUint16(12, 0, true); c.setUint16(14, 0x21, true);
    c.setUint32(16, crc, true); c.setUint32(20, data.length, true); c.setUint32(24, data.length, true); c.setUint16(28, name.length, true);
    c.setUint32(42, off, true);
    central.push(new Uint8Array(c.buffer), name);
    off += 30 + name.length + data.length;
  }
  const csize = central.reduce((s, p) => s + p.length, 0);
  const e = new DataView(new ArrayBuffer(22));
  e.setUint32(0, 0x06054b50, true); e.setUint16(8, files.length, true); e.setUint16(10, files.length, true); e.setUint32(12, csize, true); e.setUint32(16, off, true);
  return new Blob([...parts, ...central, new Uint8Array(e.buffer)], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
}
function exportXlsx(){
  const x = s => String(s ?? "").replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").replace(/[&<>"]/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"}[c]));
  const col = i => String.fromCharCode(65 + i);
  const head = ["numero", "musica", "banda_artista", "album", "duração", "data_lançamento", "gêneros", "popularidade", "explícita", "tipo_lançamento"];
  const rows = currentRows();
  const extra = r => {
    const m = r[6] || {}, gs = shownGenres((r[2] || "").trim() || NI);
    return [gs ? gs.join(", ") : "", typeof m.p === "number" ? m.p : "", m.x === undefined ? "" : m.x ? "Sim" : "Não", TYPE_PT[m.ty] || ""];
  };
  const cell = (v, r, i, s) => typeof v === "number" ? `<c r="${col(i)}${r}"${s ? ` s="${s}"` : ""}><v>${v}</v></c>` : `<c r="${col(i)}${r}" t="inlineStr"${s ? ` s="${s}"` : ""}><is><t xml:space="preserve">${x(v)}</t></is></c>`;
  const sheet = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
<cols><col min="1" max="1" width="9" customWidth="1"/><col min="2" max="2" width="48" customWidth="1"/><col min="3" max="3" width="26" customWidth="1"/><col min="4" max="4" width="38" customWidth="1"/><col min="5" max="5" width="10" customWidth="1"/><col min="6" max="6" width="16" customWidth="1"/></cols>
<sheetData><row r="1">${head.map((h, i) => cell(h, 1, i, 1)).join("")}</row>${rows.map((r, k) => `<row r="${k + 2}">${[r[0], r[1], r[2], r[3], durTxt(r[4]), r[5], ...extra(r)].map((v, i) => cell(v, k + 2, i)).join("")}</row>`).join("")}</sheetData>
<autoFilter ref="A1:${col(head.length - 1)}${rows.length + 1}"/></worksheet>`;
  const files = [
    {name: "[Content_Types].xml", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>`},
    {name: "_rels/.rels", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>`},
    {name: "xl/workbook.xml", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Músicas" sheetId="1" r:id="rId1"/></sheets><definedNames><definedName name="_xlnm._FilterDatabase" localSheetId="0" hidden="1">'Músicas'!$A$1:$F$${rows.length + 1}</definedName></definedNames></workbook>`},
    {name: "xl/_rels/workbook.xml.rels", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`},
    {name: "xl/styles.xml", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><fonts count="2"><font><sz val="11"/><name val="Arial"/></font><font><b/><sz val="11"/><color rgb="FFFFFFFF"/><name val="Arial"/></font></fonts><fills count="3"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FF064E3B"/><bgColor indexed="64"/></patternFill></fill></fills><borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="2"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>`},
    {name: "xl/worksheets/sheet1.xml", data: sheet}
  ];
  download(`playlist-${today()}.xlsx`, zipStore(files));
  toast(`Planilha exportada · ${faixas(NN)}`);
}
function openExport(){
  const body = `<div class="xopts">
    <button type="button" class="xopt" data-f="xlsx"><span class="xi">XLSX</span><b>Planilha do Excel</b><em>Abre no Excel, Google Sheets ou LibreOffice. Uma linha por faixa, com cabeçalho e filtro.</em></button>
    <button type="button" class="xopt" data-f="txt"><span class="xi">TXT</span><b>Texto para importar</b><em>Mesmo formato que o painel aceita (colunas separadas por TAB). Ideal para guardar ou mandar para uma nova análise.</em></button></div>
    <p class="muted" style="margin-top:14px">A exportação usa a lista atual: ${faixas(NN)}, já com as músicas adicionadas ou removidas.</p>`;
  const md = openModal({title: "Exportar lista de músicas", body, size: "sm"});
  md.m.querySelectorAll(".xopt").forEach(b => b.addEventListener("click", () => { b.dataset.f === "xlsx" ? exportXlsx() : exportTxt(); md.close(); }));
}

/* ---------- duplicadas e covers: títulos parecidos (sem versão/remaster) agrupados por artista principal ---------- */
function similarTitles(){
  const g = new Map();
  for (const t of BY_PLAYLIST){
    const key = normC(cleanTitle(t.title)); if (key.length < 2 || t.artist === NI) continue;
    if (!g.has(key)) g.set(key, []);
    g.get(key).push(t);
  }
  const dups = [], covers = [];
  for (const [key, rs] of g){
    if (rs.length < 2) continue;
    const mains = new Map();
    for (const t of rs){ const m = splitArtists(t.artist)[0]; if (!mains.has(m)) mains.set(m, []); mains.get(m).push(t); }
    for (const [, list] of mains) if (list.length > 1) dups.push({title: cleanTitle(list[0].title), rs: list});
    if (mains.size > 1) covers.push({title: cleanTitle(rs[0].title), rs});
  }
  const by = (a, b) => b.rs.length - a.rs.length || coll.compare(a.title, b.title);
  return {dups: dups.sort(by), covers: covers.sort(by)};
}
function openDups(){
  const {dups, covers} = similarTitles();
  let tab = dups.length || !covers.length ? "dups" : "covers";
  const body = document.createElement("div");
  const seg = `<div class="seg" role="group" aria-label="Tipo"><button type="button" data-t="dups">Duplicadas (${dups.length})</button><button type="button" data-t="covers">Covers (${covers.length})</button></div>`;
  const md = openModal({title: "Duplicadas e covers", sub: "Títulos iguais ou parecidos (ignorando remaster, live, remix…)", body, headerExtra: seg, size: "lg"});
  const draw = () => {
    md.m.querySelectorAll(".seg button").forEach(b => b.setAttribute("aria-pressed", b.dataset.t === tab));
    const list = tab === "dups" ? dups : covers;
    body.innerHTML = `<p class="mdesc">${tab === "dups" ? "Mesmo título e mesmo artista principal: provavelmente a mesma música adicionada duas vezes (ou em versões diferentes). Para apagar, use o botão <strong>Músicas</strong>." : "Mesmo título gravado por artistas principais diferentes: covers, ou apenas músicas com o mesmo nome."}</p>` +
      (list.length ? list.map(x => `<div class="eyebrow" style="margin:14px 0 6px">${esc(x.title)} · ${faixas(x.rs.length)}</div>${songTable(x.rs)}`).join("") : `<p class="muted">Nenhum caso encontrado.</p>`);
  };
  md.m.querySelectorAll(".seg button").forEach(b => b.addEventListener("click", () => { tab = b.dataset.t; draw(); }));
  draw();
}

/* ---------- wire the header buttons ---------- */
$("#dt-table").innerHTML = `${ICON.list}<span>Músicas</span>`;
$("#dt-import").innerHTML = `${ICON.up}<span>Adicionar músicas</span>`;
$("#dt-export").innerHTML = `${ICON.down}<span>Baixar lista</span>`;
$("#dt-table").addEventListener("click", () => openTable());
$("#dt-import").addEventListener("click", () => openImport());
$("#dt-dups").innerHTML = `${ICON.list}<span>Duplicadas e covers</span>`;
$("#dt-dups").addEventListener("click", openDups);
{ const s = similarTitles(); $("#dt-dups").hidden = !s.dups.length && !s.covers.length; }
$("#dt-export").addEventListener("click", openExport);
$("#dt-update").innerHTML = `${ICON.sync}<span>Atualizar dados</span>`;
$("#dt-update").addEventListener("click", openDataUpdate);
// mesma conta do openDataUpdate: música sem dados do Spotify ou artista sem gênero pesquisado
// playlist de exemplo (nada salvo no navegador): baixar ou completar dados não faz sentido
$("#dt-export").hidden = !STORE;
$("#dt-update").hidden = !STORE || !BY_PLAYLIST.some(t => !t.m && t.artist !== NI && t.title) && !genreTargets(BY_PLAYLIST.map(t => ({artist: t.artist, meta: t.m}))).length;
$("#foot-src").textContent = STORE ? `Lista editada neste navegador · ${faixas(NN)} · ${new Date(STORE.updated || Date.now()).toLocaleDateString("pt-BR")}` : `Fonte: lista de ${faixas(NN)} fornecida · sem dados externos`;
if (STORE) $("#srcline").textContent += " · lista editada";

/* ---------------- boot ---------------- */
let rz;
addEventListener("resize", () => { clearTimeout(rz); rz = setTimeout(() => { placePill(); if ($("#insights").classList.contains("on")) drawScatter(); if ($("#painel").classList.contains("on") && rows().length){ renderTree(); renderYears(rows()); renderKPIs(rows()); drawEvo(); } }, 120); });
function boot(){
  placePill();
  render();
  queueAppleGenres();
  const flash = takeFlash(); if (flash) setTimeout(() => toast(flash), 900);
  if (STORE){
    let fresh = null; try { fresh = JSON.parse(ssGet("fresh") || "null"); } catch (e) {}
    const verify = ssGet("verify") === "1"; ssDel("fresh"); ssDel("verify");
    if (fresh && fresh.ids && fresh.ids.length) setTimeout(() => askFetchFresh(fresh), 1400);
    else if (verify) setTimeout(askVerifyOrder, 1400);
  }
  if (location.hash === "#insights") showTab("insights");
  const params = new URLSearchParams(location.search);
  if (params.get("import") === "nova-playlist"){
    params.delete("import");
    const qs = params.toString();
    history.replaceState({}, "", location.pathname + (qs ? "?" + qs : "") + location.hash);
    openImport();
  } else if (!STORE) openExampleNotice();
}
function openExampleNotice(){
  const foot = document.createElement("div"); foot.className = "mfrow";
  foot.innerHTML = `<button class="gbtn" type="button" data-ex>Ver o exemplo</button><span class="sp"></span><button class="pbtn" type="button" data-mine autofocus>Adicionar minha playlist</button>`;
  const md = openModal({
    title: "Esta playlist é só um exemplo",
    body: `<div class="confirm"><p>As músicas que você está vendo são de demonstração.</p><p>Para ver o painel com a <strong>SUA PLAYLIST</strong>, clique em <strong>Adicionar músicas</strong> no topo da página e depois em <strong>Substituir playlist</strong>.</p><p class="muted">Ou, mais rápido: clique em <strong>Adicionar minha playlist</strong> aqui embaixo.</p></div>`,
    foot, size: "sm"
  });
  foot.querySelector("[data-ex]").onclick = () => md.close();
  foot.querySelector("[data-mine]").onclick = () => { md.close(); openImport(); };
}
(document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(boot);
