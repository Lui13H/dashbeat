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
const RAW0 = STORE ? STORE.rows : DEFAULT_RAW;   // linhas como estão salvas
/* "é a mesma banda" (o site não detectou: "Guns N' Roses" x "Guns N Roses"): nome (minúsculo) → nome que fica. Só na visualização:
   o que está salvo na playlist e nos arquivos baixados não muda (t.artistRaw guarda o original) */
const ALIAS_KEY = "catalogo-musical:artist-alias";
const ALIAS = (() => { try { return JSON.parse(localStorage.getItem(ALIAS_KEY) || "null") || {}; } catch (e) { return {}; } })();
const saveAlias = () => { try { localStorage.setItem(ALIAS_KEY, JSON.stringify(ALIAS)); } catch (e) {} };
const NI = "Não identificado";
const coll = new Intl.Collator("pt-BR", {sensitivity: "base", numeric: true});
/* numa faixa com vários artistas (feat., parceria) o principal (o primeiro) sempre conta; os outros só contam
   se tiverem pelo menos uma faixa solo (sem feat.) na lista. Sem faixa solo, a faixa vai só pro principal —
   até aparecer uma faixa solo de algum participante, e aí ele passa a contar também nas parcerias.
   splitArtistsAll devolve todos, só pra saber se a faixa é uma parceria */
const ARTIST_SEP = /\s*(?:,|&|\/|\bfeat\.?(?=\s)|\bft\.?(?=\s))\s*/i;
const splitArtistsAll = s => s.split(ARTIST_SEP).map(x => x.trim()).filter(Boolean);
// troca cada artista da faixa pelo nome que a pessoa escolheu (mantém os separadores: "A feat. B")
const aliasArtist = a => Object.keys(ALIAS).length ? a.split(/(\s*(?:,|&|\/|feat\.?(?=\s)|ft\.?(?=\s))\s*)/i).map((x, i) => i % 2 ? x : (ALIAS[x.trim().toLowerCase()] ? x.replace(x.trim(), ALIAS[x.trim().toLowerCase()]) : x)).join("") : a;
const RAW = RAW0.map(r => { const a = String(r[2] || ""), b = aliasArtist(a); return a === b ? r : [r[0], r[1], b, ...r.slice(3)]; });
const SOLO = new Set();   // artistas (minúsculo) com pelo menos uma faixa solo na lista
for (const r of RAW){ const all = splitArtistsAll(String(r[2] || "")); if (all.length === 1) SOLO.add(all[0].toLowerCase()); }
// posições (em splitArtistsAll) dos artistas que contam nessa faixa: o principal e quem tem faixa solo
const countedIdx = all => all.map((a, i) => i).filter(i => i === 0 || SOLO.has(all[i].toLowerCase()));
const splitArtists = s => { const all = splitArtistsAll(s.toLowerCase()); return countedIdx(all).map(i => all[i]); };
const splitArtistsRaw = s => { const all = splitArtistsAll(s); return countedIdx(all).map(i => all[i]); };

/* ---------- álbuns que são o mesmo ("Symbolic" e "Symbolic (Remastered Version)") ----------
   Do mesmo artista principal, o site junta sozinho os álbuns que só mudam na marca de edição (remaster, deluxe, bonus…).
   Quando o nome só se parece (um é o começo do outro, ou a grafia é quase igual), ele fica "em dúvida" e pergunta na tela
   Duplicadas e covers › Álbuns. As respostas ficam salvas. O nome que prevalece num grupo é sempre o MAIS CURTO. */
const ALBMERGE_KEY = "catalogo-musical:album-merges";
const ALBMERGE = (() => { try { const o = JSON.parse(localStorage.getItem(ALBMERGE_KEY) || "null"); return o && typeof o === "object" ? o : {}; } catch (e) { return {}; } })();
const saveAlbMerge = () => { try { localStorage.setItem(ALBMERGE_KEY, JSON.stringify(ALBMERGE)); } catch (e) {} };
const albTokens = s => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/&/g, " and ").split(/[^a-z0-9]+/).filter(Boolean);
const ED_KW = /^(remaster|remastered|remasterizado|remasterizada|remastering|mastered|deluxe|expanded|anniversary|edition|edicao|version|bonus|special|collector|collectors|reissue|mono|stereo|digital|explicit|clean|international|import|japan|japanese)$/;
const ED_OK = /^(the|of|and|track|tracks|with|from|new|mix|mixed|disc|cd|re|\d{2,4}s?|\d+(st|nd|rd|th))$/;
const editionish = txt => { const t = albTokens(txt); return t.length > 0 && t.some(w => ED_KW.test(w)) && t.every(w => ED_KW.test(w) || ED_OK.test(w)); };
function albCore(name){   // o nome sem a marca de edição, em palavras: "Symbolic (Remastered Version)" -> ["symbolic"]
  let s = String(name);
  s = s.replace(/\s*[(\[]([^)\]]*)[)\]]/g, (m, inner) => editionish(inner) ? "" : m);
  s = s.replace(/\s+[-–—:]\s+([^-–—:]+)$/, (m, rest) => editionish(rest) ? "" : m);
  const t = albTokens(s); return t.length ? t : albTokens(name);
}
function lev(a, b){
  const p = Array.from({length: b.length + 1}, (_, i) => i);
  for (let i = 1; i <= a.length; i++){ let prev = p[0]; p[0] = i; for (let j = 1; j <= b.length; j++){ const t = p[j]; p[j] = Math.min(p[j] + 1, p[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1)); prev = t; } }
  return p[b.length];
}
function albRelation(ta, tb){   // "auto" = mesmo álbum (só muda a edição) · "doubt" = parece, mas pergunta · null = outro álbum
  const A = ta.join(" "), B = tb.join(" ");
  if (A === B) return {kind: "auto"};
  const [s, l] = ta.length <= tb.length ? [ta, tb] : [tb, ta];
  if (l.length > s.length && s.every((w, i) => w === l[i])){   // um nome é o começo do outro ("Human" e "Human Live")
    const extra = l.slice(s.length);
    const sequel = extra.every(w => /^(\d+|i|ii|iii|iv|v|vi|vii|viii|ix|x|xi|xii|vol|volume|part|pt|chapter)$/.test(w));   // "II", "Vol. 2": é outro álbum, não pergunta
    return !sequel && extra.length <= 3 ? {kind: "doubt", why: "um nome é o começo do outro"} : null;
  }
  if (A.length >= 6 && B.length >= 6 && 1 - lev(A, B) / Math.max(A.length, B.length) >= .85) return {kind: "doubt", why: "nomes quase iguais (grafia diferente)"};
  return null;
}
const albArtKey = a => { a = String(a || "").trim(); return a ? (splitArtists(a)[0] || a.toLowerCase()) : ""; };
function analyzeAlbums(raw){
  const byArt = new Map(), map = new Map(), dates = new Map(), groups = [], doubts = [], rejected = [];
  for (const r of raw){
    const alb = String(r[3] || "").trim(); if (!alb) continue;
    const key = albArtKey(r[2]), e = byArt.get(key) || byArt.set(key, {name: String(r[2] || "").trim(), albs: new Map(), dmin: new Map()}).get(key);
    e.albs.set(alb, (e.albs.get(alb) || 0) + 1);
    const d = String(r[5] || "").trim();
    if (/^\d{4}/.test(d)){ const cur = e.dmin.get(alb); if (!cur || d < cur) e.dmin.set(alb, d); }
  }
  for (const [art, {name: artName, albs, dmin}] of byArt){
    const names = [...albs.keys()]; if (names.length < 2) continue;
    const core = new Map(names.map(n => [n, albCore(n)])), parent = new Map(names.map(n => [n, n]));
    const find = x => { while (parent.get(x) !== x){ parent.set(x, parent.get(parent.get(x))); x = parent.get(x); } return x; };
    const edges = [];
    for (let i = 0; i < names.length; i++) for (let j = i + 1; j < names.length; j++){
      const rel = albRelation(core.get(names[i]), core.get(names[j])); if (!rel) continue;
      const [a, b] = names[i] < names[j] ? [names[i], names[j]] : [names[j], names[i]], id = `${art}|${a}|${b}`;
      edges.push({art, artName, a, b, id, rel, dec: ALBMERGE[id], ca: albs.get(a), cb: albs.get(b)});
    }
    const used = [];
    for (const e of edges){
      if (e.dec === "nao"){ rejected.push(e); continue; }
      if (e.rel.kind === "auto" || e.dec === "sim"){ parent.set(find(e.a), find(e.b)); used.push(e); }
    }
    for (const e of edges) if (e.dec !== "nao" && !(e.rel.kind === "auto" || e.dec === "sim") && find(e.a) !== find(e.b)) doubts.push(e);
    const comps = new Map();
    for (const n of names){ const k = find(n); if (!comps.has(k)) comps.set(k, []); comps.get(k).push(n); }
    for (const list of comps.values()){
      if (list.length < 2) continue;
      const canon = [...list].sort((x, y) => x.length - y.length || albs.get(y) - albs.get(x) || x.localeCompare(y))[0];   // o nome mais curto prevalece
      for (const n of list) map.set(art + "|" + n, canon);
      // a data do álbum unificado é a MAIS ANTIGA entre as edições (a original, não a do relançamento)
      const oldest = list.map(n => dmin.get(n)).filter(Boolean).sort()[0] || "";
      if (oldest) for (const n of list) dates.set(art + "|" + n, oldest);
      const ids = used.filter(e => list.includes(e.a) && list.includes(e.b));
      groups.push({art, artName, canon, oldest, variants: list.map(n => ({name: n, count: albs.get(n)})).sort((x, y) => x.name.length - y.name.length || x.name.localeCompare(y.name)), ids: ids.map(e => e.id), confirmed: ids.some(e => e.rel.kind !== "auto" || e.dec === "sim")});
    }
  }
  return {map, dates, groups, doubts, rejected};
}
const ALBUM_INFO = analyzeAlbums(RAW);
const albumCanon = (artist, album) => { const raw = String(album || "").trim(); return raw ? (ALBUM_INFO.map.get(albArtKey(artist) + "|" + raw) || raw) : NI; };
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
/* gênero do MusicBrainz (tags de artista, sem login, ~1 req/s): terceira fonte */
const MBGENRE_KEY = "catalogo-musical:genres-mb";
const MBGENRES = (() => { try { return JSON.parse(localStorage.getItem(MBGENRE_KEY) || "null") || {}; } catch (e) { return {}; } })();
const saveMBGenres = () => { try { localStorage.setItem(MBGENRE_KEY, JSON.stringify(MBGENRES)); } catch (e) {} };
const mbHasGenre = p => Object.prototype.hasOwnProperty.call(MBGENRES, p);
/* gênero do TheAudioDB (artista, sem login, público): quarta fonte */
const TADB_KEY = "catalogo-musical:genres-tadb";
const TADBGENRES = (() => { try { return JSON.parse(localStorage.getItem(TADB_KEY) || "null") || {}; } catch (e) { return {}; } })();
const saveTADBGenres = () => { try { localStorage.setItem(TADB_KEY, JSON.stringify(TADBGENRES)); } catch (e) {} };
const tadbHasGenre = p => Object.prototype.hasOwnProperty.call(TADBGENRES, p);
/* gênero do Deezer (artista, sem login, público): quinta fonte */
const DEEZER_KEY = "catalogo-musical:genres-deezer";
const DEEZERGENRES = (() => { try { return JSON.parse(localStorage.getItem(DEEZER_KEY) || "null") || {}; } catch (e) { return {}; } })();
const saveDeezerGenres = () => { try { localStorage.setItem(DEEZER_KEY, JSON.stringify(DEEZERGENRES)); } catch (e) {} };
const deezerHasGenre = p => Object.prototype.hasOwnProperty.call(DEEZERGENRES, p);
const spotifyHas = p => hasGenre(p) && GENRES[p].length > 0;
// gênero que aparece: Spotify → MusicBrainz → TheAudioDB → Deezer → Apple
function shownGenres(artist){
  if (artist === NI) return [];
  const out = new Set(); let any = false;
  for (const p of splitArtists(artist)){
    const g = spotifyHas(p) ? GENRES[p]
      : (Array.isArray(MBGENRES[p]) && MBGENRES[p].length ? MBGENRES[p]
      : (Array.isArray(TADBGENRES[p]) && TADBGENRES[p].length ? TADBGENRES[p]
      : (Array.isArray(DEEZERGENRES[p]) && DEEZERGENRES[p].length ? DEEZERGENRES[p]
      : (Array.isArray(AGENRES[p]) ? AGENRES[p] : null))));
    if (g){ any = true; g.forEach(x => out.add(x)); }
  }
  return any ? [...out] : null;
}
/* allGenresByCover: coleta todas as fontes disponíveis pra um artista (para divergência) */
function allGenresBySource(p){
  const out = {};
  if (spotifyHas(p)) out.Spotify = GENRES[p];
  if (Array.isArray(MBGENRES[p]) && MBGENRES[p].length) out.MusicBrainz = MBGENRES[p];
  if (Array.isArray(TADBGENRES[p]) && TADBGENRES[p].length) out.TheAudioDB = TADBGENRES[p];
  if (Array.isArray(DEEZERGENRES[p]) && DEEZERGENRES[p].length) out.Deezer = DEEZERGENRES[p];
  if (Array.isArray(AGENRES[p]) && AGENRES[p].length) out.Apple = AGENRES[p];
  return out;
}
/* root genre: agrupa gêneros detalhados num balde simples para comparar fontes */
const GENRE_ROOT_RULES = [
  ["metal",      /\bmetal/],
  ["rock",       /\brock\b/],
  ["hip-hop",    /\bhip.?hop\b|\brap\b/],
  ["jazz",       /\bjazz\b/],
  ["classical",  /\bclassical\b/],
  ["electronic", /\belectronic\b|\bedm\b|\btechno\b|\bhouse\b|\bdrum.?and.?bass\b/],
  ["country",    /\bcountry\b/],
  ["folk",       /\bfolk\b/],
  ["r&b",        /\br.?b\b|\bsoul\b/],
  ["punk",       /\bpunk\b/],
  ["blues",      /\bblues\b/],
  ["pop",        /\bpop\b/],
];
function rootGenre(genres){ const s = (genres||[]).join(" ").toLowerCase(); for (const [r,re] of GENRE_ROOT_RULES) if (re.test(s)) return r; return null; }
function genreToRoot(g){ g = (g||"").toLowerCase(); for (const [r,re] of GENRE_ROOT_RULES) if (re.test(g)) return r; return null; }
/* coluna 7 (opcional): dados extras que vêm de graça na resposta do Spotify —
   x explícita (0/1) · ty tipo do lançamento (album/single/compilation) · tn nº da faixa no álbum ·
   tt total de faixas do álbum · aid IDs dos artistas */
const TYPE_PT = {album: "Álbum", single: "Single/EP", compilation: "Coletânea"};
// campos planos (pra tabelas e ordenação); null/"" = dado que não existe pra essa música
function extraProps(m, gs){
  const ok = !!(m && m.x !== undefined);
  return {genre: gs && gs.length ? gs.join(", ") : "", ex: ok ? m.x : null,
    ty: ok && m.ty || ""};
}
/* "bandas" de uma faixa = os artistas que contam nela (principal + quem tem faixa solo). Cada uma é uma banda
   nos filtros, nas contagens e nos gráficos; o texto original ("A, B") continua em t.artist só para exibir.
   A grafia é a da primeira vez que o artista aparece, pra "Lamb of God" e "lamb of god" serem a mesma banda. */
const BAND_NAME = new Map();
function bandsOf(artist){
  if (artist === NI) return [NI];
  return splitArtistsRaw(artist).map(n => { const k = n.toLowerCase(); if (!BAND_NAME.has(k)) BAND_NAME.set(k, n); return BAND_NAME.get(k); });
}
const bandsOfRow = r => r.bands || [r.artist];
const hasBand = (r, name) => { const k = String(name).toLowerCase(); return bandsOfRow(r).some(b => b.toLowerCase() === k); };
/* data completa pela Apple (sem login, não gasta o Spotify): o Spotify às vezes só sabe o ano ("1990-01-01").
   "artista principal|álbum" → "AAAA-MM-DD" ("" = a Apple não achou). Só vale pra faixa cuja data ainda é só o ano e se o ano bater;
   a data guardada na playlist e nos arquivos baixados continua intacta */
const ADATE_KEY = "catalogo-musical:apple-dates";
const ADATES = (() => { try { return JSON.parse(localStorage.getItem(ADATE_KEY) || "null") || {}; } catch (e) { return {}; } })();
const saveADates = () => { try { localStorage.setItem(ADATE_KEY, JSON.stringify(ADATES)); } catch (e) {} };
const yearOnly = d => /^\d{4}-01-01$/.test(d || "");
const adateKey = (artist, album) => `${(splitArtistsRaw(String(artist || ""))[0] || "").toLowerCase()}|${String(album || "").trim().toLowerCase()}`;
/* reavaliação de datas (álbuns do mesmo artista que saíram "no mesmo dia" por causa da Apple): DFIX[artista|álbum] = {d: data, review: bool}.
   Vale só enquanto a data guardada da faixa ainda é só o ano (se a pessoa editar, a edição manda). review = a pessoa precisa conferir à mão (pesa na nota).
   DREV = álbuns já reavaliados (não pergunta de novo) */
const DFIX_KEY = "catalogo-musical:date-fix", DREV_KEY = "catalogo-musical:date-reviewed";
const DFIX = (() => { try { return JSON.parse(localStorage.getItem(DFIX_KEY) || "null") || {}; } catch (e) { return {}; } })();
const DREV = (() => { try { return new Set(JSON.parse(localStorage.getItem(DREV_KEY) || "[]")); } catch (e) { return new Set(); } })();
const saveDFix = () => { try { localStorage.setItem(DFIX_KEY, JSON.stringify(DFIX)); localStorage.setItem(DREV_KEY, JSON.stringify([...DREV])); } catch (e) {} };
const adateFor = (artist, album, base) => { const d = ADATES[adateKey(artist, album)]; return yearOnly(base) && d && d.slice(0, 4) === base.slice(0, 4) ? d : base; };
/* faixas que não são de álbum (single/EP, coletânea…) mas talvez sejam: busca na Apple (sem login). "artista principal|título" → {album, tn, tt} ("" = só existe como single).
   É só uma sugestão (não pesa na nota): a pessoa aceita ou recusa na Saúde; recusadas ficam em ASING_IGN */
const ASING_KEY = "catalogo-musical:apple-singles", ASING_IGN_KEY = "catalogo-musical:apple-singles-ignored";
const ASING = (() => { try { return JSON.parse(localStorage.getItem(ASING_KEY) || "null") || {}; } catch (e) { return {}; } })();
const ASING_IGN = (() => { try { return new Set(JSON.parse(localStorage.getItem(ASING_IGN_KEY) || "[]")); } catch (e) { return new Set(); } })();
const saveASing = () => { try { localStorage.setItem(ASING_KEY, JSON.stringify(ASING)); } catch (e) {} };
const saveASingIgn = () => { try { localStorage.setItem(ASING_IGN_KEY, JSON.stringify([...ASING_IGN])); } catch (e) {} };
const singleKey = t => `${(splitArtistsRaw(t.artist)[0] || "").toLowerCase()}|${normC(cleanTitle(t.title))}`;
const T = RAW.map(([n, title, artist, album, sec, date, meta], ri) => {
  const a = (artist || "").trim() || NI, m = meta && typeof meta === "object" ? meta : null, gs = genresOf(a), ge = shownGenres(a);
  const od = ALBUM_INFO.dates.get(albArtKey(artist) + "|" + String(album || "").trim()), dfx = DFIX[adateKey(artist, album)], dateUse = dfx && (yearOnly(date) || dfx.force) ? dfx.d : adateFor(artist, album, od || date || "");   // álbum unificado: vale a data mais antiga
  // gs = gênero do Spotify (null = falta buscar) · ge = gênero exibido/calculado (Spotify ou, na falta, Apple)
  return {n, title, artist: a, dfix: !!(dfx && dfx.review && yearOnly(date)), artistRaw: String(RAW0[ri][2] || "").trim(), bands: bandsOf(a), album: albumCanon(artist, album), albumRaw: (album || "").trim() || NI,
    sec: sec, date: dateUse, dateRaw: date || "", year: dateUse ? +dateUse.slice(0, 4) : NI, m, gs, ge, ...extraProps(m, ge)};
});
const ALL_BANDS = [...new Set(T.flatMap(t => t.bands))].sort(niLast);
const ALL_ALBUMS = [...new Set(T.map(t => t.album))].sort(niLast);
const ALL_YEARS = [...new Set(T.map(t => t.year))].sort((a, b) => a === NI ? 1 : b === NI ? -1 : a - b);
function niLast(a, b){ return a === NI ? 1 : b === NI ? -1 : coll.compare(a, b); }
const bandAlbums = new Map(), albumBands = new Map();
for (const t of T){
  for (const b of t.bands){
    (bandAlbums.get(b) || bandAlbums.set(b, new Set()).get(b)).add(t.album);
    (albumBands.get(t.album) || albumBands.set(t.album, new Set()).get(t.album)).add(b);
  }
}
const state = {bands: new Set(), albums: new Set(), genres: new Set(), years: new Set(), upTo: null};   // upTo: máquina do tempo (só faixas até a #n); null = playlist inteira
let expandedGenreBucket = null;
let tmBusy = false;   // tocando ou arrastando a máquina do tempo: sem animações caras nos gráficos
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
function groupBy(rows, key){
  const m = new Map(), add = (k, r) => (m.get(k) || m.set(k, []).get(k)).push(r);
  for (const r of rows){ if (key === "artist") bandsOfRow(r).forEach(b => add(b, r)); else add(r[key], r); }
  return m;
}
const sum = (a, f) => a.reduce((s, x) => s + f(x), 0);

function rows(useBand = true, useAlbum = true, useGenre = true, useTime = true, useYear = true){
  return T.filter(t => (!useTime || state.upTo == null || t.n <= state.upTo) &&
                       (!useBand || !state.bands.size || t.bands.some(b => state.bands.has(b))) &&
                       (!useAlbum || !state.albums.size || state.albums.has(t.album)) &&
                       (!useYear || !state.years.size || state.years.has(t.year)) &&
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
  if (matchMedia("(prefers-reduced-motion: reduce)").matches || from === to || document.hidden || tmBusy){ tweens.set(el, to); el.textContent = fmt(to); return; }
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
  if (kind === "year"){   // clicar numa coluna da linha do tempo filtra as músicas daquele ano (clicar de novo tira; dá pra somar anos)
    if (state.years.has(v)) state.years.delete(v); else state.years.add(v);
    if (!rows().length){ state.years.delete(v); toast("Nenhuma faixa desse ano no recorte atual"); }
    render(); return;
  }
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
  if (!rows().length && state.years.size){ state.years.clear(); toast("O filtro de ano saiu: sem faixas no novo recorte"); }
  if (!rows().length){ set.delete(v); toast(`Sem faixas de ${v} até a #${state.upTo} da máquina do tempo`); }
  render();
}
$("#tree-mode").addEventListener("click", e => {
  const b = e.target.closest("button[data-m]"); if (!b) return;
  treePref = b.dataset.m;
  if (treePref === "bandas") { state.bands.clear(); state.years.clear(); }   // voltar para as bandas: sai do leque (banda/ano escolhidos)
  render();
});
function clearAll(){ state.bands.clear(); state.albums.clear(); state.genres.clear(); state.years.clear(); state.upTo = null; tmSync(); render(); }
const activeFilters = () => state.bands.size + state.albums.size + state.genres.size + state.years.size;
// "Limpar filtros" de cada card: tira banda, álbum, gênero e ano (a máquina do tempo tem o próprio botão de cancelar)
function clearFilters(){ state.bands.clear(); state.albums.clear(); state.genres.clear(); state.years.clear(); render(); }
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
  const chips = $("#chips");
  const sig = [["band", state.bands], ["album", state.albums], ["genre", state.genres], ["year", state.years]].map(([k, s]) => k + ":" + [...s].join("")).join("|");
  if (chips._sig !== sig){   // só reconstrói quando os filtros mudam: a cada quadro da máquina do tempo isso fazia os chips piscarem
    chips._sig = sig;
    const nodes = [];
    for (const [kind, set, tag] of [["band", state.bands, "Banda"], ["album", state.albums, "Álbum"], ["genre", state.genres, "Gênero"], ["year", state.years, "Ano"]]){
      for (const v of [...set].sort((a, b) => kind === "year" ? (a === NI ? 1 : b === NI ? -1 : a - b) : 0)){
        const c = document.createElement("button");
        c.className = "chip"; c.type = "button"; c.setAttribute("aria-label", `Remover ${v}`);
        c.innerHTML = `<b>${tag}</b><span>${esc(v)}</span><span class="x">×</span>`;
        c.addEventListener("click", () => toggle(kind, v));
        nodes.push(c);
      }
    }
    chips.replaceChildren(...nodes, ROW_TIME);   // o chip do tempo é um elemento fixo: continua aqui, na linha de filtros
  }
  $("#clear").classList.toggle("on", activeFilters() > 0 || state.upTo != null);
  const anyF = activeFilters() > 0;
  document.querySelectorAll(".clr-btn").forEach(b => { b.hidden = !anyF; });
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
function renderHeroTotal(R){
  const total = R.length, secs = sum(R, r => r.sec);
  tween($("#k-total"), total, v => fmtInt(Math.round(v)));
  $("#k-total-sub").innerHTML = `<strong>${fmtLong(secs)}</strong> de música${state.bands.size + state.albums.size + state.years.size + (state.upTo != null ? 1 : 0) ? ` · ${pct(total, T.length)} do catálogo` : " em sequência"}`;
}
function renderKPIs(R){
  renderHeroTotal(R);
  const total = R.length;
  const arts = new Set(R.filter(r => r.artist !== NI).flatMap(bandsOfRow)).size;
  tween($("#k-art"), arts, v => fmtInt(Math.round(v)));
  const albs = new Set(R.map(r => r.album)).size;
  $("#k-art-sub").textContent = `em ${albs} álbu${albs === 1 ? "m" : "ns"}`;
  const timed = R.filter(r => r.sec > 0);
  tween($("#k-avg"), timed.length ? sum(timed, r => r.sec) / timed.length : 0, fmtDur);
  // dado principal: ano médio de lançamento; a moda (ano com mais músicas) vira a informação secundária
  const y = modeOf(R, "year"), dated = R.filter(r => r.year !== NI), avgY = dated.length ? Math.round(sum(dated, r => r.year) / dated.length) : 0;
  tween($("#k-year"), avgY, v => avgY ? String(Math.round(v)) : "—");
  $("#k-year-sub").innerHTML = y.best ? `Ano com mais músicas: <strong>${y.best}</strong> · ${y.max} faixa${y.max > 1 ? "s" : ""}${y.ties ? ` · empate com +${y.ties}` : ""}` : "";
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
    const ratio = t.sec / maxS;
    r.style.fill = `hsl(calc(var(--h) + ${Math.round(5 - 10 * ratio)}), 70%, ${Math.round(28 + 30 * (1 - ratio))}%)`;
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
    const mine = T.filter(x => hasBand(x, bandsOfRow(t)[0]));
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
  const all = state.bands.size + state.albums.size + state.years.size === 0 && state.upTo == null;
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
  c.setAttribute("role", "button"); c.tabIndex = 0;
  c.setAttribute("aria-label", y === NI ? "Filtrar as músicas de ano não identificado" : `Filtrar as músicas de ${y}`);
  const pick = () => { if (!c.classList.contains("zero") || state.years.has(y)) toggle("year", y); };
  c.addEventListener("click", pick);
  c.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " "){ e.preventDefault(); pick(); } });
  yearsEl.appendChild(c); YC.set(y, c);
}
function yearTip(y){
  const R = rows(true, true, true, true, false).filter(r => r.year === y);
  if (!R.length) return `<div class="eyebrow">${y}</div><div class="t">Sem faixas neste recorte</div>`;
  const albs = [...groupBy(R, "album")].map(([a, rs]) => [a, rs.length, rs[0].artist]).sort((a, b) => b[1] - a[1] || coll.compare(a[0], b[0]));
  const top = albs.slice(0, 4);
  const rest = albs.length - top.length;
  return `<div class="eyebrow">${y === NI ? "Ano não identificado" : y}</div><div class="t">${R.length} faixa${R.length > 1 ? "s" : ""} · ${fmtLong(sum(R, r => r.sec))}</div>
    <div class="k"><span>${(na => `${na} artista${na > 1 ? "s" : ""}`)(new Set(R.flatMap(bandsOfRow)).size)} · ${albs.length} álbu${albs.length > 1 ? "ns" : "m"}</span></div><hr>
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
    c.classList.toggle("sel", state.years.has(y));
    c.classList.toggle("dim", state.years.size > 0 && !state.years.has(y));
    c.setAttribute("aria-pressed", String(state.years.has(y)));
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
let TREE_MODE = "artist";   // o gráfico de quadrados mostra bandas; com um ano (linha do tempo) ou uma banda (ranking, filtro, o próprio gráfico) escolhidos ele mostra álbuns ("album")
/* aba do card: Bandas (padrão) ou Álbuns, escolhida à mão; um ano ou uma banda escolhidos também abrem a visão de álbuns (o leque) */
let treePref = "bandas";   // sempre abre em Bandas; a escolha vale só enquanto a página está aberta
const treeByAlbum = () => treePref === "albuns" || state.years.size > 0 || state.bands.size > 0;
/* o squarify clássico decide linha por linha e às vezes estica um bloco grande pra poupar os pequenos.
   Aqui testamos todos os jeitos de montar as 3 primeiras linhas (1 a 6 blocos cada, o resto no clássico)
   e ficamos com o que deixa os MAIORES mais quadrados (peso = área²). 216 tentativas, ~3ms. */
function squarifyAll(items, W, H){
  if (!items.length || !W || !H) return [];
  const asp = d => d.w && d.h ? Math.max(d.w / d.h, d.h / d.w) : 1, out = [];
  for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) for (let c = 1; c <= 6; c++){
    const L = squarifyRows(items, W, H, [a, b, c]);
    out.push({L, k: sum(L, d => d.area * d.area * (asp(d) - 1))});
    if (items.length <= a + b) break;   // as outras combinações dariam o mesmo resultado
  }
  return out;
}
function squarify(items, W, H){
  if (!items.length || !W || !H) return squarifyRows(items, W, H, []);
  let best = null, bc = Infinity;
  for (const c of squarifyAll(items, W, H)) if (c.k < bc){ bc = c.k; best = c.L; }
  return best;
}
function squarifyRows(items, W, H, forced){
  const total = sum(items, d => d.value), out = [];
  if (!total) return out;
  const scale = W * H / total;
  const list = items.map(d => ({...d, area: d.value * scale}));
  let rect = {x: 0, y: 0, w: W, h: H}, row = [], i = 0;
  const struct = [];   // linhas na ordem em que foram montadas (chaves): é o "esqueleto" que o layout estável reaproveita
  const worst = (r, len) => { if (!r.length) return Infinity; const s = sum(r, d => d.area); let mx = 0, mn = Infinity; for (const d of r){ mx = Math.max(mx, d.area); mn = Math.min(mn, d.area); } return Math.max(len * len * mx / (s * s), s * s / (len * len * mn)); };
  const lay = r => {
    struct.push(r.map(d => d.k));
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
  out.struct = struct;
  return out;
}
/* Layout ESTÁVEL: refazer o melhor layout do zero a cada mudança fazia vários blocos "pularem" por causa de uma
   música só. Agora, a cada mudança, juntamos os candidatos (as 216 montagens do squarify + o esqueleto da
   montagem anterior, só com os tamanhos novos), mantemos só os que respeitam a TOLERÂNCIA DE FORMATO DE CADA BLOCO
   e, entre eles, escolhemos o que MENOS MEXE nos blocos em relação ao desenho anterior (cantos dos blocos, pesando pela área).

   Tolerância de cada bloco = quanto a proporção (lado maior / lado menor) dele pode passar da que ele teria no melhor layout.
   Ela vem de três taxas, combinadas pela soma de taxas composta (a forma padrão de somar taxas: (1+a)^p · (1+b)^q · (1+c)^r − 1,
   com pesos p+q+r = 1, ou seja, uma média geométrica das taxas compostas):
     • taxa pelo tamanho ATUAL do bloco (peso maior): bloco pequeno tolera mais, o maior quase nada;
     • taxa pelo tamanho ESPERADO, medido pelo tamanho que a banda terá no fim da máquina do tempo: quem vai terminar grande tolera menos
       mesmo enquanto ainda é pequeno;
     • taxa pelo AVANÇO na linha do tempo: larga no começo (poucas bandas, pouco a perder) e baixa no momento atual.
   No momento atual (sem tocar) o tamanho esperado é o próprio tamanho atual e o avanço é 100%. */
let TREE_STRUCT = null, TREE_PREV = null;
/* velocidade da troca dos quadrados acompanha a velocidade da animação: 0,125x ≈ 3,1 s, 0,25x ≈ 2,2 s, 0,5x ≈ 1,5 s, 1x ≈ 1,1 s, 2x ≈ 0,77 s, 4x ≈ 0,54 s (referência: 1,25 s em 0,75x).
   Quando a animação ACABA e o gráfico se ajusta pro melhor layout, essa duração é mantida por mais um tempo (o ajuste é tão lento quanto a animação) */
let tileHold = 0;
const tileDur = () => 1.25 * Math.sqrt(0.75 / (tm.speed || 1));   // 1,25 s é a duração de referência na velocidade 0,75x; as outras seguem a raiz da razão entre as velocidades
function holdTiles(){
  treeEl.style.setProperty("--tile-dur", tileDur().toFixed(2) + "s"); treeEl.classList.add("flow");
  clearTimeout(tileHold);
  tileHold = setTimeout(() => { tileHold = 0; if (!tmBusy){ treeEl.style.removeProperty("--tile-dur"); treeEl.classList.remove("flow"); } }, tileDur() * 1000 + 500);
}
function releaseTiles(){ clearTimeout(tileHold); tileHold = 0; treeEl.style.removeProperty("--tile-dur"); }
const TREE_CFG = {
  tolMax: 2.0, tolMin: 0.05,        // taxa do menor bloco / do maior bloco (0,05 = pode ficar 5% mais esticado que no ideal; 2,0 = até 3x)
  progStart: 3, progEnd: 0.03,    // taxa do avanço: no começo da linha do tempo / no momento atual
  wCur: 0.45, wExp: 0.3, wProg: 0.25   // pesos das três taxas (somam 1); o tamanho atual pesa um pouco mais que o esperado
};
function treeCost(L, W, H){
  const A = (W * H) || 1;
  return sum(L, d => d.area * d.area * ((d.w && d.h ? Math.max(d.w / d.h, d.h / d.w) : 1) - 1)) / (A * A);
}
function layoutFromStruct(struct, items, W, H){
  const val = new Map(items.map(d => [d.k, d.value])), total = sum(items, d => d.value), out = [];
  if (!total || !W || !H) return out;
  const scale = W * H / total;
  let rect = {x: 0, y: 0, w: W, h: H};
  for (const keys of struct){
    const r = keys.map(k => ({k, value: val.get(k), area: val.get(k) * scale}));
    const s = sum(r, d => d.area);
    if (rect.w >= rect.h){ const cw = s / rect.h; let y = rect.y; for (const d of r){ const h = d.area / cw; out.push({...d, x: rect.x, y, w: cw, h}); y += h; } rect.x += cw; rect.w -= cw; }
    else { const rh = s / rect.w; let x = rect.x; for (const d of r){ const w = d.area / rh; out.push({...d, x, y: rect.y, w, h: rh}); x += w; } rect.y += rh; rect.h -= rh; }
  }
  return out;
}
function patchStruct(struct, items){
  const val = new Map(items.map(d => [d.k, d.value]));
  const rowsK = struct.map(r => r.filter(k => val.has(k))).filter(r => r.length);
  const have = new Set(rowsK.flat());
  for (const d of items){
    if (have.has(d.k)) continue;
    if (!rowsK.length){ rowsK.push([d.k]); continue; }
    let idx = rowsK.findIndex(r => { const vs = r.map(k => val.get(k)); return d.value <= Math.max(...vs) && d.value >= Math.min(...vs); });
    if (idx < 0) idx = d.value > Math.max(...rowsK[0].map(k => val.get(k))) ? 0 : rowsK.length - 1;
    rowsK[idx].push(d.k);
  }
  return rowsK;
}
const tileAsp = d => d.w && d.h ? Math.max(d.w / d.h, d.h / d.w) : 1;
// quanto o layout L se afasta do desenho anterior: soma, por bloco que existia nos dois, do deslocamento dos cantos pesado pela área
function treeMove(L, W, H){
  if (!TREE_PREV) return 0;
  let m = 0;
  for (const d of L){
    const p = TREE_PREV.get(d.k); if (!p) continue;
    m += d.area * (Math.abs(d.x / W - p.x0) + Math.abs(d.y / H - p.y0) + Math.abs((d.x + d.w) / W - p.x1) + Math.abs((d.y + d.h) / H - p.y1));
  }
  return m;
}
/* final: Map banda -> faixas no momento atual (null = sem máquina do tempo: o esperado é o próprio tamanho atual). */
const treeRate = rel => TREE_CFG.tolMin + (1 - rel) * (TREE_CFG.tolMax - TREE_CFG.tolMin);   // rel 1 (maior) -> tolMin, rel 0 -> tolMax
function treeSlack(rCur, rExp, rProg){   // soma de taxas composta com pesos
  const {wCur, wExp, wProg} = TREE_CFG;
  return Math.pow(1 + rCur, wCur) * Math.pow(1 + rExp, wExp) * Math.pow(1 + rProg, wProg) - 1;
}
function stableSquarify(items, W, H, now = false, progress = 1, final = null){
  const cands = squarifyAll(items, W, H);
  if (!cands.length){ TREE_STRUCT = TREE_PREV = null; return []; }
  const kBest = Math.min(...cands.map(c => c.k));
  const best = cands.reduce((a, c) => c.k < a.k ? c : a);
  const bestAsp = new Map(best.L.map(d => [d.k, tileAsp(d)]));
  const vmax = Math.max(...items.map(d => d.value)), fmax = final ? Math.max(1, ...final.values()) : vmax;
  const rProg = TREE_CFG.progEnd + (TREE_CFG.progStart - TREE_CFG.progEnd) * (1 - Math.min(1, Math.max(0, now ? 1 : progress)));
  const slack = new Map(items.map(d => {
    const rCur = treeRate(Math.sqrt(d.value / vmax)), rExp = treeRate(Math.sqrt(Math.min(1, (final ? (final.get(d.k) || d.value) : d.value) / fmax)));
    return [d.k, treeSlack(rCur, rExp, rProg)];
  }));
  const A2 = (W * H) * (W * H) || 1, eps = 0.004 * A2;
  let pick = null, pm = Infinity;
  const consider = (L, k, struct) => {
    if (k > kBest * 4 + eps) return;   // trava de segurança no custo global
    if (!L.every(d => tileAsp(d) <= (bestAsp.get(d.k) || 1) * (1 + (slack.get(d.k) || 0)) + 0.02)) return;
    const m = treeMove(L, W, H);
    if (m < pm - 1e-9 || (Math.abs(m - pm) <= 1e-9 && pick && k < pick.k)){ pm = m; pick = {L, k, struct}; }
  };
  for (const c of cands) consider(c.L, c.k, c.L.struct);
  if (TREE_STRUCT){
    const patched = patchStruct(TREE_STRUCT, items), reused = layoutFromStruct(patched, items, W, H);
    if (reused.length === best.L.length) consider(reused, treeCost(reused, W, H) * A2, patched);
  }
  if (!pick) pick = {L: best.L, k: best.k, struct: best.L.struct};
  TREE_STRUCT = pick.struct;
  TREE_PREV = new Map(pick.L.map(d => [d.k, {x0: d.x / W, y0: d.y / H, x1: (d.x + d.w) / W, y1: (d.y + d.h) / H}]));
  return pick.L;
}
let TREE_FINAL = null, TREE_FINAL_KEY = "";
function treeFinal(){   // quantas faixas cada banda (ou álbum) tem no momento atual (sem a máquina do tempo), pra saber quem vai terminar grande
  const byAlbum = treeByAlbum();
  const key = T.length + "|" + byAlbum + "|" + [...state.albums].join(",") + "|" + [...state.bands].join(",") + "|" + [...state.years].join(",");
  if (TREE_FINAL && TREE_FINAL_KEY === key) return TREE_FINAL;
  TREE_FINAL = new Map(); for (const [k, rs] of groupBy(byAlbum ? rows(true, false, true, false) : rows(false, true, true, false), byAlbum ? "album" : "artist")) TREE_FINAL.set(k, rs.length);
  TREE_FINAL_KEY = key; return TREE_FINAL;
}
function tileTip(b){
  const R = rows(false, true).filter(r => hasBand(r, b));
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
const COVER_KEY = "catalogo-musical:covers:v3";   // v3 descarta as capas da Apple guardadas pelo escolhedor antigo (edição Deluxe ou EP no lugar do álbum); as do Spotify ficam
const COVER_MISS_TTL = 7 * 24 * 3600 * 1000;       // "sem capa" expira: a Apple pode passar a ter o álbum
const COVERS = (() => {
  try { localStorage.removeItem("catalogo-musical:covers"); } catch (e) {}
  let c = {}; try { c = JSON.parse(localStorage.getItem(COVER_KEY) || "null") || {}; } catch (e) {}
  try {   // migra do v2 só as capas do Spotify (a edição exata que a pessoa tem); as da Apple são buscadas de novo, agora com o escolhedor corrigido
    const old = JSON.parse(localStorage.getItem("catalogo-musical:covers:v2") || "null");
    if (old){ for (const k in old) if (!(k in c) && typeof old[k] === "string" && /scdn\.co/.test(old[k])) c[k] = old[k]; localStorage.setItem(COVER_KEY, JSON.stringify(c)); localStorage.removeItem("catalogo-musical:covers:v2"); }
  } catch (e) {}
  for (const k in c) if (c[k] && typeof c[k] === "object" && Date.now() - c[k].miss > COVER_MISS_TTL) delete c[k];
  return c;
})();
const coverOf = k => typeof COVERS[k] === "string" ? COVERS[k] : coverAlias(k);
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
/* pontos: 5 = nome igual · 4 = mesmo álbum sem marca de edição · 3 = mesmo álbum numa edição (deluxe, remaster…) · 2 = nome parecido.
   Antes o texto entre parênteses era ignorado ("Vol. 3: (The Subliminal Verses)" virava "vol 3" e a edição Deluxe ganhava da padrão) e um
   "Slipknot - EP" valia como o álbum "Slipknot". Só aceita a partir de `min` pontos. */
function pickAlbum(results, artist, album, min = 2){
  const a = normC(artist), alRaw = String(album).toLowerCase().trim(), alCore = albCore(album).join(" "), alN = normC(album);
  const wantsEp = /\b(ep|single)\b/i.test(album), wantsLive = /\b(live|ao vivo)\b/i.test(album);
  const sameArtist = results.filter(r => { const ra = normC(r.artistName || ""); return ra && (ra.includes(a) || a.includes(ra)); });
  const score = r => {
    const name = r.collectionName || "", low = name.toLowerCase().trim();
    if (!wantsEp && /\s-\s(ep|single)$/i.test(name)) return 0;
    if (low === alRaw) return 5;
    const core = albCore(name).join(" "), hasEd = albTokens(name).join(" ") !== core;
    if (core === alCore) return hasEd ? 3 : 4;
    if (!wantsLive && /\b(live|ao vivo)\b/i.test(name)) return 0;
    const c = normC(name);
    return c && alN && (c === alN || c.includes(alN) || alN.includes(c)) ? 2 : 0;
  };
  const best = sameArtist.map(r => [r, score(r)]).filter(x => x[1] >= min).sort((x, y) => y[1] - x[1])[0];
  return best ? best[0] : null;
}
const pickCover = (...args) => artUrl(pickAlbum(...args));
/* álbuns unificados: a capa pode ter sido guardada com o nome de uma das edições ("Symbolic (Remastered Version)") */
function coverAlias(key){
  const i = key.indexOf("|"); if (i < 0) return null;
  const artist = key.slice(0, i), album = key.slice(i + 1), g = ALBUM_INFO.groups.find(x => x.canon === album && x.art === albArtKey(artist));
  if (g) for (const v of g.variants){ const k2 = artist + "|" + v.name; if (typeof COVERS[k2] === "string") return COVERS[k2]; }
  return null;
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
  let url = pickCover(await itunes(`search?entity=album&limit=10&term=${encodeURIComponent(main + " " + album)}`), main, album, 3);   // na busca rápida só vale o mesmo álbum; o resto vai pra discografia
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
  const alias = typeof COVERS[key] === "string" ? null : coverAlias(key);
  if (alias){ cb(alias); return; }
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
/* data completa: 1 busca na Apple por álbum cuja data (do Spotify) é só o ano. Mesma fila das capas e dos gêneros (depois deles).
   Em silêncio: sem aviso e sem recarregar. O que a Apple achar vale na próxima vez que o site abrir, e a busca segue aos poucos */
/* faixa fora de álbum ou faixa de álbum? 1 busca na Apple por faixa que o Spotify não marca como álbum. Só vale um álbum "de verdade": sem - Single/EP, ao vivo ou coletânea; o mais antigo */
function pickSongAlbum(results, artist, title){
  const a = normC(artist), nt = normC(cleanTitle(title)), skip = /\b(best of|greatest|hits|collection|anthology|essentials?|box set|live|ao vivo)\b/i;
  const variant = /(live|demo|radio edit|acoustic|remix|instrumental|writing in progress|edit)/i, ownVariant = variant.test(title);   // faixa ao vivo/demo/edit só vale se a sua também for
  const ok = results.filter(r => r.kind === "song" && r.collectionName && (ownVariant || !variant.test(r.trackName || "")) && normC(cleanTitle(r.trackName || "")) === nt && (() => { const ra = normC(r.artistName || ""); return ra && (ra.includes(a) || a.includes(ra)); })()
    && !/\s-\s(single|ep)$/i.test(r.collectionName) && !skip.test(r.collectionName));
  const ed = r => albTokens(r.collectionName).join(" ") !== albCore(r.collectionName).join(" ") ? 1 : 0;   // o mais antigo; na mesma data, o álbum sem marca de edição (deluxe, remaster…)
  ok.sort((x, y) => String(x.releaseDate || "9").localeCompare(String(y.releaseDate || "9")) || ed(x) - ed(y));
  const r = ok[0]; return r ? {album: r.collectionName, tn: r.trackNumber || 0, tt: r.trackCount || 0} : null;
}
/* MusicBrainz (grátis, sem login, ~1 pedido por segundo): segunda fonte depois da Apple e antes de qualquer busca no Spotify */
async function mbJSON(path){
  const r = await fetch("https://musicbrainz.org/ws/2/" + path + (path.includes("?") ? "&" : "?") + "fmt=json");
  if (!r.ok) throw new Error("mb " + r.status);
  return r.json();
}
const mbArtistOk = (credits, art) => { const a = normC(art); return (credits || []).some(c => { const n = normC(c.name || (c.artist && c.artist.name) || ""); return n && (n === a || n.includes(a) || a.includes(n)); }); };
// data original (a mais antiga) do álbum: release-group sem tipo secundário (ao vivo, coletânea…); "" se não achar
async function mbAlbumDate(art, album){
  const core = albCore(album).join(" "); if (!core) return "";
  await new Promise(r => setTimeout(r, 1200));
  const j = await mbJSON("release-group/?query=" + encodeURIComponent(`releasegroup:"${core}" AND artist:"${art}" AND primarytype:album`) + "&limit=15");
  const ok = ((j && j["release-groups"]) || []).filter(g => g.title && albTokens(g.title).join(" ") === core && !(g["secondary-types"] || []).length && mbArtistOk(g["artist-credit"], art));
  ok.sort((x, y) => String(x["first-release-date"] || "9").localeCompare(String(y["first-release-date"] || "9")));
  return ok[0] ? String(ok[0]["first-release-date"] || "") : "";
}
// a faixa num álbum de verdade: release oficial de um release-group do tipo álbum (sem tipo secundário e sem marca de edição); o mais antigo
async function mbTrackAlbum(art, title){
  const nt = normC(cleanTitle(title));
  await new Promise(r => setTimeout(r, 1200));
  const j = await mbJSON("recording/?query=" + encodeURIComponent(`recording:"${cleanTitle(title)}" AND artist:"${art}"`) + "&limit=15");
  const cands = [];
  for (const rec of (j && j.recordings) || []){
    if (normC(cleanTitle(rec.title || "")) !== nt || !mbArtistOk(rec["artist-credit"], art)) continue;
    for (const rel of rec.releases || []){
      const rg = rel["release-group"] || {};
      if (rg["primary-type"] !== "Album" || (rg["secondary-types"] || []).length || (rel.status && rel.status !== "Official")) continue;
      if (albCore(rel.title || "").join(" ") !== albTokens(rel.title || "").join(" ")) continue;
      cands.push({album: rel.title, date: rel.date || rg["first-release-date"] || "", tn: 0, tt: rel["track-count"] || 0});
    }
  }
  cands.sort((x, y) => String(x.date || "9").localeCompare(String(y.date || "9")));
  return cands[0] ? {album: cands[0].album, tn: 0, tt: 0} : null;   // o nº de faixas do MusicBrainz varia por edição: não usa
}
async function mbArtistTags(name){
  await new Promise(r => setTimeout(r, 1200));
  const j = await mbJSON(`artist/?query=artist:${encodeURIComponent('"' + name + '"')}&limit=5`);
  const best = ((j && j.artists) || []).find(a => normC(a.name || "") === normC(name));
  if (!best || !best.id) return [];
  await new Promise(r => setTimeout(r, 1200));
  const j2 = await mbJSON(`artist/${best.id}?inc=tags`);
  return ((j2 && j2.tags) || []).filter(t => t.count >= 2).sort((a, b) => b.count - a.count).slice(0, 6).map(t => t.name.toLowerCase());
}
function queueMBGenres(){
  const need = new Map();
  for (const t of T){
    if (t.artist === NI) continue;
    const raw = splitArtistsRaw(t.artist);
    splitArtists(t.artist).forEach((p, i) => { if (!spotifyHas(p) && !mbHasGenre(p) && !need.has(p)) need.set(p, raw[i] || p); });
  }
  for (const [p, name] of need) coverQueue.push({job: async () => {
    try { MBGENRES[p] = await mbArtistTags(name); } catch(e){ MBGENRES[p] = []; }
    saveMBGenres(); refreshShownGenres();
  }});
  if (need.size) pumpCovers();
}
async function tadbArtistGenres(name){
  await new Promise(r => setTimeout(r, 400));
  const r = await fetch(`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${encodeURIComponent(name)}`);
  if (!r.ok) return [];
  const j = await r.json();
  const a = j && j.artists && j.artists[0];
  if (!a) return [];
  const found = normC(a.strArtist || "") === normC(name);
  if (!found) return [];
  return [a.strGenre, a.strStyle, a.strMood].filter(Boolean).map(g => g.toLowerCase());
}
function queueTADBGenres(){
  const need = new Map();
  for (const t of T){
    if (t.artist === NI) continue;
    const raw = splitArtistsRaw(t.artist);
    splitArtists(t.artist).forEach((p, i) => { if (!spotifyHas(p) && !tadbHasGenre(p) && !need.has(p)) need.set(p, raw[i] || p); });
  }
  for (const [p, name] of need) coverQueue.push({job: async () => {
    try { TADBGENRES[p] = await tadbArtistGenres(name); } catch(e){ TADBGENRES[p] = []; }
    saveTADBGenres(); refreshShownGenres();
  }});
  if (need.size) pumpCovers();
}
// Nota: Deezer não expõe gênero de artista na API pública; as quatro fontes ativas são Spotify, MusicBrainz, TheAudioDB e Apple
function queueAppleSingles(){
  const need = new Map();
  for (const t of T){
    if (!t.m || !t.m.ty || t.m.ty === "album" || t.artist === NI || !t.title) continue;   // single/EP, coletânea… tudo que não é faixa de álbum
    const k = singleKey(t); if (!(k in ASING) && !need.has(k)) need.set(k, {main: splitArtistsRaw(t.artist)[0], title: t.title});
  }
  for (const [k, x] of need) coverQueue.push({job: async () => {
    let r = pickSongAlbum(await itunes(`search?entity=song&limit=15&term=${encodeURIComponent(x.main + " " + cleanTitle(x.title))}`), x.main, x.title);
    if (!r){ try { r = await mbTrackAlbum(x.main, x.title); } catch (e) {} }   // 2ª fonte grátis: MusicBrainz
    ASING[k] = r || ""; saveASing();
  }});
  if (need.size) pumpCovers();
}
function queueAppleDates(){
  const need = new Map();
  for (const r of RAW){
    const [, , artist, album, , date] = r, a = String(artist || "").trim(), al = String(album || "").trim();
    if (!a || !al || !yearOnly(date)) continue;
    const k = adateKey(a, al);
    if (!(k in ADATES) && !need.has(k)) need.set(k, {main: splitArtistsRaw(a)[0], album: al});
  }
  if (!need.size) return;
  for (const [k, x] of need) coverQueue.push({job: async () => {
    const r = pickAlbum(await itunes(`search?entity=album&limit=10&term=${encodeURIComponent(x.main + " " + x.album)}`), x.main, x.album, 3);   // só vale o mesmo álbum
    let d = r && r.releaseDate ? String(r.releaseDate).slice(0, 10) : "";
    if (!d){ try { const m = await mbAlbumDate(x.main, x.album); if (/^\d{4}-\d{2}-\d{2}$/.test(m)) d = m; } catch (e) {} }   // 2ª fonte grátis: MusicBrainz (o ano precisa bater, como na Apple)
    ADATES[k] = d; saveADates();
  }});
  pumpCovers();
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
/* a foto de uma banda é a capa do álbum com MAIS músicas dela na playlist (álbuns unificados contam juntos; empate: o que entrou primeiro) */
function topAlbumOf(rs){
  const c = new Map();
  for (const t of rs) if (t.album !== NI) c.set(t.album, (c.get(t.album) || 0) + 1);
  return [...c].sort((a, b) => b[1] - a[1])[0]?.[0] || null;
}

function renderTree(){
  const byAlbum = treeByAlbum(), keyName = byAlbum ? "album" : "artist";
  let spawn = null;   // "leque": os álbuns da banda escolhida nascem de dentro do quadrado dela (vale pro clique no gráfico, no ranking ou no filtro)
  if (TREE_MODE !== keyName){   // trocou de bandas para álbuns (ou o contrário): recomeça os quadrados, que mudam de chave e de clique
    if (byAlbum && TREE_MODE === "artist" && state.bands.size){
      const t = TILES.get([...state.bands].pop());
      if (t && !t.classList.contains("leaving") && parseFloat(t.style.width) > 0) spawn = {l: t.style.left, t: t.style.top, w: t.style.width, h: t.style.height};
    }
    TREE_MODE = keyName;
    for (const el of TILES.values()){ clearTimeout(el._rm); el.remove(); }
    TILES.clear(); TREE_STRUCT = null; TREE_PREV = null; TREE_FINAL = null;
  }
  const ttl = $("#tree-title"); if (ttl) ttl.textContent = byAlbum ? "Músicas por álbum" : "Músicas por banda/artista";
  document.querySelectorAll("#tree-mode button").forEach(b => b.setAttribute("aria-pressed", String((b.dataset.m === "albuns") === byAlbum)));
  treeEl.classList.toggle("byalbum", byAlbum);
  const base = byAlbum ? rows(true, false) : rows(false, true);   // o filtro do próprio tipo de quadrado não esconde os outros quadrados
  const g = groupBy(base, keyName);
  const items = [...g].map(([k, rs]) => ({k, value: rs.length})).sort((a, b) => b.value - a.value || coll.compare(a.k, b.k));
  const W = treeEl.clientWidth, H = treeEl.clientHeight;
  const laid = stableSquarify(items, W, H, state.upTo == null && !tmBusy, state.upTo == null ? 1 : state.upTo / TM_N, state.upTo == null ? null : treeFinal());
  treeEl.classList.toggle("flow", tmBusy || !!tileHold);
  if (tmBusy) treeEl.style.setProperty("--tile-dur", tileDur().toFixed(2) + "s"); else if (!tileHold) treeEl.style.removeProperty("--tile-dur");   // tocando a máquina do tempo: movimento mais curto e contínuo
  const max = items.length ? items[0].value : 1;
  const selSet = byAlbum ? state.albums : state.bands, hasSel = selSet.size > 0;
  const seen = new Set();
  /* a fonte acompanha o tamanho do quadrado (quadrado pequeno = letra pequena, até 7px) e a margem interna também
     encolhe; vale a maior fonte em que o nome inteiro cabe numa linha (0 = só a capa) */
  const FONT_MIN = 7, FONT_MAX = 17;
  const padOf = (w, h) => Math.max(3, Math.min(9, Math.min(w, h) / 9));
  const sizesOf = (w, h) => {
    const cap = Math.min(FONT_MAX, Math.max(FONT_MIN, Math.sqrt(Math.max(0, w) * Math.max(0, h)) / 6.5)), out = [];
    for (let v = Math.floor(cap * 2) / 2; v >= FONT_MIN; v -= .5) out.push(v);
    return out;
  };
  const labelSize = (name, w, h) => {
    const pad = padOf(w, h);
    for (const s of sizesOf(w, h)){
      const roomForLine = h - 2 * pad - Math.max(FONT_MIN, s - 2) * 1.2 - 4 >= s * 1.05;   // one name line above the count
      if (w - 2 * pad <= 0 || !roomForLine) continue;
      if (byAlbum ? fitsAt(name, s, "Sora, sans-serif", 600, w - 2 * pad, 2, "-.01em") : fitsOneLine(name, s, "Sora, sans-serif", 600, w - 2 * pad, "-.01em")) return s;
    }
    return 0;
  };
  const labelSizes = new Map(laid.map(d => [d.k, labelSize(d.k, Math.max(0, d.w - 4), Math.max(0, d.h - 4))]));
  // once a band loses its name, every band with the same or fewer songs loses it too (no labels "skipping" around)
  const hiddenMax = Math.max(0, ...laid.filter(d => !labelSizes.get(d.k)).map(d => d.value));
  // o número tem conta própria: onde o nome não cabe, o número ainda aparece sozinho (no maior tamanho que couber)
  const numSize = (value, w, h) => {
    const pad = padOf(w, h);
    for (const s of sizesOf(w, h)){
      if (w - 2 * pad > 0 && h - 2 * pad >= s * 1.1 && fitsOneLine(String(value), s, "Sora, sans-serif", 700, w - 2 * pad, "0")) return s;
    }
    return 0;
  };
  const numSizes = new Map(laid.map(d => [d.k, numSize(d.value, Math.max(0, d.w - 4), Math.max(0, d.h - 4))]));
  const numHiddenMax = Math.max(0, ...laid.filter(d => !numSizes.get(d.k)).map(d => d.value));   // mesma regra dos nomes: sem "pular" número por aí
  for (const d of laid){
    seen.add(d.k);
    let el = TILES.get(d.k);
    const create = !el;
    let fresh = create;
    if (el && el.classList.contains("leaving")){
      // bloco que estava saindo e voltou: nasce de novo no canto (sem voar de onde estava), igual a um bloco novo
      el.style.transition = "none"; el.style.left = W + "px"; el.style.top = H + "px"; el.style.width = "0px"; el.style.height = "0px"; el.style.opacity = "0";
      void el.offsetWidth; el.style.transition = "";
      fresh = true;
    }
    if (create){
      el = document.createElement("div"); el.className = "tile";
      el.innerHTML = `<i class="cov"></i><div class="lbl"><strong></strong><span></span></div>`;
      el.querySelector("strong").textContent = d.k;
      el.addEventListener("click", () => { if (!treeEl.closest(".tree-big")) toggle(byAlbum ? "album" : "band", d.k); });   // em tela cheia é só pra ver
      bindTip(el, () => byAlbum ? albumTip(d.k) : tileTip(d.k));
      el.style.opacity = "0";
      // blocos novos nascem pequenininhos no canto de baixo à direita do gráfico e crescem até o lugar deles
      if (spawn){ el.style.left = spawn.l; el.style.top = spawn.t; el.style.width = spawn.w; el.style.height = spawn.h; }
      else { el.style.left = W + "px"; el.style.top = H + "px"; el.style.width = "0px"; el.style.height = "0px"; }
      treeEl.appendChild(el); TILES.set(d.k, el);
    }
    el.classList.remove("leaving"); clearTimeout(el._rm);   // voltou antes de sumir de vez
    const g2 = treeEl.classList.contains("flush") ? 0 : 2, x = d.x + g2, y = d.y + g2, w = Math.max(0, d.w - 2 * g2), h = Math.max(0, d.h - 2 * g2);
    const k = Math.sqrt(d.value / max);
    const sel = selSet.has(d.k);
    el.classList.toggle("sel", sel);
    el.classList.toggle("dim", hasSel && !sel);
    el.style.background = sel ? "linear-gradient(150deg,hsla(var(--h),80%,90%,.4),hsla(var(--h),65%,52%,.3))" :
      `linear-gradient(150deg, hsl(var(--h),62%,${16 + 26 * k}%), hsl(var(--h),70%,${10 + 18 * k}%))`;
    const lbl = el.querySelector(".lbl");
    lbl.style.color = "hsl(var(--h),80%,98%)";
    el.querySelector("span").textContent = d.value;
    const album = byAlbum ? (d.k === NI ? null : d.k) : topAlbumOf(g.get(d.k));
    const coverBand = byAlbum ? modeOf(g.get(d.k), "artist").best : d.k;   // álbum: a capa vem da banda que mais aparece nele
    const covKey = album && coverBand ? coverBand + "|" + album : "";
    if (el.dataset.cov !== covKey){ el.dataset.cov = covKey; el.classList.remove("hascov"); }
    if (covKey) getCover(coverBand, album, url => {
      if (el.dataset.cov !== covKey || !url) return;
      el.querySelector(".cov").style.backgroundImage = `url("${url}")`;
      el.classList.add("hascov");
    });
    const size = d.value > hiddenMax ? labelSizes.get(d.k) : 0;
    lbl.style.padding = padOf(Math.max(0, d.w - 4), Math.max(0, d.h - 4)) + "px";
    const nSize = size ? Math.max(FONT_MIN, size - 2) : (d.value > numHiddenMax ? numSizes.get(d.k) : 0);
    lbl.style.opacity = size || nSize ? 1 : 0;
    lbl.style.justifyContent = size ? "" : "flex-end";   // só o número: fica no mesmo cantinho de baixo de sempre
    el.style.borderRadius = Math.max(3, Math.min(10, w / 4, h / 4)) + "px";
    const strongEl = lbl.querySelector("strong");
    strongEl.style.fontSize = size + "px";
    strongEl.style.display = size ? "" : "none";
    lbl.querySelector("span").style.fontSize = (nSize || FONT_MIN) + "px";
    const apply = () => { el.style.opacity = ""; el.style.left = x + "px"; el.style.top = y + "px"; el.style.width = w + "px"; el.style.height = h + "px"; };
    fresh ? requestAnimationFrame(() => requestAnimationFrame(apply)) : apply();
  }
  for (const [k, el] of TILES) if (!seen.has(k)){
    el.classList.add("leaving"); el.style.pointerEvents = "none";
    // depois de sumir (fade) o bloco é removido: se a banda voltar, ela nasce de novo no canto, em vez de voar de onde parou
    if (!el._rm) el._rm = setTimeout(() => { if (el.classList.contains("leaving") && TILES.get(k) === el){ el.remove(); TILES.delete(k); } el._rm = 0; }, 1200);
  }
  for (const [k, el] of TILES) if (seen.has(k)) el.style.pointerEvents = "";
}

/* o mesmo gráfico (não uma cópia) vai pro modal e volta ao fechar: capas, filtro e tooltip continuam valendo */
// ao trocar de lugar os blocos pulam direto pro tamanho novo (sem a transição, que ficava "voando" pela tela)
function moveTree(to){
  treeEl.classList.add("notrans");
  to.appendChild(treeEl);
  setTimeout(() => { renderTree(); setTimeout(() => treeEl.classList.remove("notrans"), 60); }, 30);
}
/* "Tela cheia" = tela cheia do navegador (igual F11) só com o gráfico, sem modal. Esc o próprio navegador trata;
   clicar em qualquer lugar também sai; a barra de espaço pausa/continua a animação */
let treeFull = null;   // {body, home, onKey} enquanto o gráfico está em tela cheia
function openTreeBig(){
  if (treeFull) return;
  const home = treeEl.parentElement;
  const body = document.createElement("div"); body.className = "tree-big tree-full";
  const onKey = e => { if (e.code === "Space"){ e.preventDefault(); const cc = CARDS.tree; cc.playing ? cardPause("tree") : cardStart("tree", cc.n != null ? Math.max(1, cc.n) : 1); } };
  body.addEventListener("click", () => { if (document.fullscreenElement === body) document.exitFullscreen(); });
  document.body.appendChild(body);
  hideTip();
  body.requestFullscreen().then(() => {
    treeFull = {body, home, onKey};
    document.addEventListener("keydown", onKey);
    moveTree(body);
    toast("Espaço pausa/continua a animação · Esc ou um clique sai");
  }).catch(() => { body.remove(); toast("O navegador não deixou entrar em tela cheia."); });
}
document.addEventListener("fullscreenchange", () => {
  if (!treeFull) return;
  if (document.fullscreenElement === treeFull.body){ hideTip(); moveTree(treeFull.body); return; }   // recalcula pro tamanho novo (sem animação)
  const {body, home, onKey} = treeFull; treeFull = null;
  hideTip(); document.removeEventListener("keydown", onKey);
  moveTree(home); body.remove();
});
$("#tree-expand").addEventListener("click", openTreeBig);
// opções do gráfico (nomes, números, bordas, animação): caixa marcada = recurso ligado; valem pro card e pra tela cheia — e ficam salvas (vale depois do F5)
const TREE_OPTS = [
  {opt: "nomes", cls: "nolabels", key: "catalogo-musical:tree-nonames", txt: "Mostrar nomes"},
  {opt: "numeros", cls: "nonums", key: "catalogo-musical:tree-nonums", txt: "Mostrar números"},
  {opt: "bordas", cls: "flush", key: "catalogo-musical:tree-flush", txt: "Bordas redondas"},
  {opt: "semanim", cls: "noanim", key: "catalogo-musical:tree-noanim", txt: "Animar a troca de lugar"}
];
function treeOptsHtml(){
  const boxes = TREE_OPTS.map(o => `<label class="chk"><input type="checkbox" class="tree-opt" data-opt="${o.opt}"${treeEl.classList.contains(o.cls) ? "" : " checked"}><span>${o.txt}</span></label>`).join("");
  return `<span class="sty"><button class="gbtn sty-btn" type="button" aria-haspopup="true" aria-expanded="false" title="Opções de estilo do gráfico">Estilo <svg width="10" height="10" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></button><div class="sty-pop">${boxes}</div></span>`;
}
$("#tree-style-slot").outerHTML = treeOptsHtml();
const closeStyle = () => document.querySelectorAll(".sty.open").forEach(s => { s.classList.remove("open"); s.querySelector(".sty-btn").setAttribute("aria-expanded", "false"); });
document.addEventListener("click", e => {
  const btn = e.target.closest && e.target.closest(".sty-btn");
  if (btn){
    const s = btn.closest(".sty"), open = !s.classList.contains("open");
    closeStyle();
    if (open){ s.classList.add("open"); btn.setAttribute("aria-expanded", "true"); }
  } else if (!(e.target.closest && e.target.closest(".sty-pop"))) closeStyle();
});
document.addEventListener("keydown", e => { if (e.key === "Escape") closeStyle(); });
for (const o of TREE_OPTS){
  try { if (localStorage.getItem(o.key) === "1") treeEl.classList.add(o.cls); } catch (e) {}
  document.querySelectorAll(`.tree-opt[data-opt="${o.opt}"]`).forEach(cb => { cb.checked = !treeEl.classList.contains(o.cls); });
}
function setTreeOpt(o, off){   // a caixa marcada = recurso LIGADO; a classe (nolabels, noshadow...) é o estado "desligado"
  try { localStorage.setItem(o.key, off ? "1" : "0"); } catch (e2) {}
  treeEl.classList.toggle(o.cls, off);
  document.querySelectorAll(`.tree-opt[data-opt="${o.opt}"]`).forEach(x => { x.checked = !off; });
}
document.addEventListener("change", e => {
  const cb = e.target, o = cb.classList && cb.classList.contains("tree-opt") && TREE_OPTS.find(x => x.opt === cb.dataset.opt);
  if (!o) return;
  setTreeOpt(o, !cb.checked);
  if (o.opt === "bordas"){ treeEl.classList.add("notrans"); renderTree(); setTimeout(() => treeEl.classList.remove("notrans"), 60); }   // muda o tamanho dos blocos
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
  const rm = tmBusy || matchMedia("(prefers-reduced-motion: reduce)").matches;
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
  const arts = [...new Set(R.flatMap(bandsOfRow))];
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
/* card de álbuns com duas visões ("abas"): por quantidade de faixas (padrão) ou pelo tempo total somado (como era antes) */
const ALB_KEY = "catalogo-musical:albums-mode";
let albMode = (() => { try { return localStorage.getItem(ALB_KEY) === "duracao" ? "duracao" : "faixas"; } catch (e) { return "faixas"; } })();
function renderAlbums(){
  const g = groupBy(rows(true, false), "album"), byDur = albMode === "duracao";
  const items = [...g].map(([k, rs]) => ({k, value: byDur ? sum(rs, r => r.sec) : rs.length, n: rs.length, sec: sum(rs, r => r.sec)}))
    .sort((a, b) => b.value - a.value || (byDur ? b.n - a.n : b.sec - a.sec) || coll.compare(a.k, b.k));
  renderList($("#albums"), items, {kind: "album", selected: state.albums, tip: albumTip, scrollToSel: true,
    label: d => byDur ? `${fmtDur(d.sec)}<small>${d.n} faixa${d.n > 1 ? "s" : ""}</small>` : `${d.n}<small>${fmtDur(d.sec)}</small>`});
  $("#alb-title").textContent = byDur ? "Duração por álbum" : "Músicas por álbum";
  const what = byDur ? "Tempo total somado das faixas" : "Quantidade de faixas de cada álbum";
  $("#alb-hint").textContent = `${what} · ` + (state.bands.size ? `${items.length} álbu${items.length > 1 ? "ns" : "m"} no recorte` : `${items.length} álbuns`) + " · clique para filtrar";
  $("#alb-mode").querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.m === albMode)));
}
$("#alb-mode").addEventListener("click", e => {
  const b = e.target.closest("button[data-m]"); if (!b || b.dataset.m === albMode) return;
  albMode = b.dataset.m; try { localStorage.setItem(ALB_KEY, albMode); } catch (err) {}
  cardRender("albums");
});
function rankTip(b){
  const base = rows(false, true);
  const g = [...groupBy(base, "artist")].map(([k, rs]) => [k, rs.length]).sort((x, y) => y[1] - x[1] || coll.compare(x[0], y[0]));
  const i = g.findIndex(([k]) => k === b), n = g[i][1];
  const cum = sum(g.slice(0, i + 1), x => x[1]);
  const R = base.filter(r => hasBand(r, b));
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
  const missing = STORE ? base.filter(t => !t.gs).length : 0;
  const withG = base.filter(t => t.ge && t.ge.length).length;
  // Build buckets: each track counted once per bucket, sub-genres counted per occurrence
  const buckets = new Map(); // bucket → { trackNs: Set, subs: Map<genre, Set<trackN>> }
  const orphans = new Map(); // genres without a bucket → Set<trackN>
  for (const t of base){
    for (const g of t.ge || []){
      const root = genreToRoot(g);
      const store = root ? buckets : orphans;
      const key = root || g;
      if (!store.has(key)) store.set(key, root ? { trackNs: new Set(), subs: new Map() } : new Set());
      if (root){
        const b = buckets.get(root);
        b.trackNs.add(t.n);
        if (!b.subs.has(g)) b.subs.set(g, new Set());
        b.subs.get(g).add(t.n);
      } else {
        orphans.get(g).add(t.n);
      }
    }
  }
  // bucket com poucas faixas → migra pra bucket relacionado (se existir) ou cai em Outros
  const BUCKET_FALLBACK = {punk: "rock", blues: "rock", folk: "country", classical: null};
  const MIN_BUCKET = Math.max(3, Math.ceil(withG * 0.01));
  for (const [root, data] of [...buckets]){
    if (data.trackNs.size >= MIN_BUCKET) continue;
    const fb = Object.prototype.hasOwnProperty.call(BUCKET_FALLBACK, root) ? BUCKET_FALLBACK[root] : null;
    const target = fb && buckets.has(fb) && buckets.get(fb).trackNs.size >= MIN_BUCKET ? buckets.get(fb) : null;
    if (target){
      for (const n of data.trackNs) target.trackNs.add(n);
      for (const [g, ns] of data.subs) target.subs.set(g, ns);
    } else {
      for (const [g, ns] of data.subs) orphans.set(g, ns);
    }
    buckets.delete(root);
  }
  const upd = missing ? ` · <button type="button" class="lnk" data-upd style="padding:0">buscar gênero de ${faixas(missing)}</button>` : "";
  if (!buckets.size && !orphans.size){
    el.innerHTML = `<div class="empty-in"><p>${!STORE ? "Os gêneros aparecem aqui assim que forem encontrados." : missing ? "Nenhuma música tem gênero ainda." : "O Spotify não informa gênero para os artistas dessa seleção."}</p>${missing ? `<button class="pbtn" type="button" data-upd>Atualizar dados</button><p class="muted">Gasta 1 busca no Spotify por artista, não por música.</p>` : ""}</div>`;
    $("#gen-hint").innerHTML = ""; return;
  }
  const hasSel = state.genres.size > 0;
  const sortedBuckets = [...buckets]
    .map(([k, v]) => {
      // agrupa sub-gêneros com as EXATAS mesmas faixas (serializa o Set pra comparar)
      const tGroups = new Map();
      for (const [g, ns] of v.subs){
        const tKey = [...ns].sort((a,b) => a-b).join(",");
        if (!tGroups.has(tKey)) tGroups.set(tKey, []);
        tGroups.get(tKey).push({k: g, value: ns.size});
      }
      const subs = [...tGroups.values()].map(group => {
        if (group.length === 1) return group[0];
        // múltiplos gêneros idênticos: mescla o nome
        const names = group.map(s => s.k).sort((a,b) => a.length - b.length);
        const combined = names.map(capFirst).join(" / ");
        return { k: group[0].k, value: group[0].value, label: combined.length <= 36 ? combined : capFirst(names[0]) };
      }).sort((a,b) => b.value - a.value || coll.compare(a.k, b.k));
      return [k, { count: v.trackNs.size, subs }];
    })
    .sort((a,b) => b[1].count - a[1].count);
  const orphanGroups = new Map();
  for (const [g, ns] of orphans){
    const tKey = [...ns].sort((a,b) => a-b).join(",");
    if (!orphanGroups.has(tKey)) orphanGroups.set(tKey, []);
    orphanGroups.get(tKey).push({k: g, value: ns.size});
  }
  const sortedOrphans = [...orphanGroups.values()].map(group => {
    if (group.length === 1) return group[0];
    const names = group.map(s => s.k).sort((a,b) => a.length - b.length);
    const combined = names.map(capFirst).join(" / ");
    return { k: group[0].k, value: group[0].value, label: combined.length <= 36 ? combined : capFirst(names[0]) };
  }).sort((a,b) => b.value - a.value || coll.compare(a.k, b.k));
  const maxCount = Math.max(...sortedBuckets.map(([,d]) => d.count), ...sortedOrphans.map(o => o.value), 1);
  const totalBuckets = sortedBuckets.length + (sortedOrphans.length ? 1 : 0);
  const totalGenres = [...buckets.values()].reduce((n,b) => n + b.subs.size, 0) + orphans.size;
  let html = "";

  // modo foco: um único bucket aberto ocupa todo o espaço
  const focusKey = expandedGenreBucket;
  if (focusKey !== null){
    let focusCount = 0, focusSubs = [], focusRk = "", focusLabel = "";
    if (focusKey === "__outros__"){
      focusCount = sortedOrphans.reduce((n,o) => n + o.value, 0);
      focusSubs = sortedOrphans;
      focusRk = String(sortedBuckets.length + 1).padStart(2, "0");
      focusLabel = `Outros (${sortedOrphans.length})`;
    } else {
      const idx = sortedBuckets.findIndex(([k]) => k === focusKey);
      if (idx >= 0){
        const [, fd] = sortedBuckets[idx];
        focusCount = fd.count;
        focusSubs = fd.subs.filter(s => s.k.toLowerCase() !== focusKey);
        focusRk = String(idx + 1).padStart(2, "0");
        focusLabel = capFirst(focusKey);
      } else {
        // bucket sumiu após filtro: sai do foco
        expandedGenreBucket = null;
      }
    }
    if (expandedGenreBucket !== null){
      el.classList.add("genres-focus");
      el.classList.toggle("genres-multicol", focusSubs.length > 6);
      const bucketSel = focusSubs.some(s => state.genres.has(s.k));
      html += `<div class="row genre-bucket${bucketSel ? " sel" : ""}" data-bucket="${esc(focusKey)}">
        <span class="rk">${focusRk}</span><span class="bucket-tog">▾</span>
        <span class="nm">${focusLabel}</span>
        <span class="vl">${focusCount}<small>${pct(focusCount, withG)}</small></span>
        <div class="tr"><div class="fl" style="width:${(focusCount/maxCount)*100}%"></div></div></div>`;
      const subMax = focusSubs[0]?.value || 1;
      html += `<div class="genre-subs-grid">`;
      focusSubs.forEach(s => {
        const sel = state.genres.has(s.k);
        html += `<div class="row genre-sub${sel ? " sel" : ""}${hasSel && !sel ? " dim" : ""}" data-genre="${esc(s.k)}">
          <span class="nm">${esc(s.label || capFirst(s.k))}</span>
          <span class="vl">${s.value}<small>${pct(s.value, withG)}</small></span>
          <div class="tr"><div class="fl" style="width:${(s.value/subMax)*100}%"></div></div></div>`;
      });
      html += `</div>`;
      el.innerHTML = html;
      el.querySelectorAll(".genre-sub[data-genre]").forEach(r => bindTip(r, () => genreTip(r.dataset.genre)));
      $("#gen-hint").innerHTML = `${totalBuckets} categorias · ${totalGenres} gêneros · clique na categoria para fechar${upd}`;
      return;
    }
  }

  // modo lista: todos os buckets, 1 coluna sempre
  el.classList.remove("genres-focus", "genres-multicol");
  sortedBuckets.forEach(([root, data], bi) => {
    const visibleSubs = data.subs.filter(s => s.k.toLowerCase() !== root);
    const rk = String(bi + 1).padStart(2, "0");
    html += `<div class="genre-group">`;
    if (visibleSubs.length >= 2){
      const bucketSel = data.subs.some(s => state.genres.has(s.k));
      html += `<div class="row genre-bucket${bucketSel ? " sel" : ""}${hasSel && !bucketSel ? " dim" : ""}" data-bucket="${esc(root)}">
        <span class="rk">${rk}</span><span class="bucket-tog">›</span>
        <span class="nm">${capFirst(root)} <small class="sub-ct">(${visibleSubs.length})</small></span>
        <span class="vl">${data.count}<small>${pct(data.count, withG)}</small></span>
        <div class="tr"><div class="fl" style="width:${(data.count/maxCount)*100}%"></div></div></div>`;
    } else {
      const s = visibleSubs[0];
      const gKey = s ? s.k : root, gLabel = s ? (s.label || capFirst(s.k)) : capFirst(root);
      const sel = state.genres.has(gKey);
      html += `<div class="row genre-bucket${sel ? " sel" : ""}${hasSel && !sel ? " dim" : ""}" data-genre="${esc(gKey)}">
        <span class="rk">${rk}</span><span class="bucket-tog"></span>
        <span class="nm">${esc(gLabel)}</span>
        <span class="vl">${data.count}<small>${pct(data.count, withG)}</small></span>
        <div class="tr"><div class="fl" style="width:${(data.count/maxCount)*100}%"></div></div></div>`;
    }
    html += `</div>`;
  });
  if (sortedOrphans.length){
    const oBucketSel = sortedOrphans.some(o => state.genres.has(o.k));
    const rk = String(sortedBuckets.length + 1).padStart(2, "0");
    html += `<div class="genre-group"><div class="row genre-bucket${oBucketSel ? " sel" : ""}${hasSel && !oBucketSel ? " dim" : ""}" data-bucket="__outros__">
      <span class="rk">${rk}</span><span class="bucket-tog">›</span>
      <span class="nm">Outros (${sortedOrphans.length})</span>
      <span class="vl">${sortedOrphans.reduce((n,o) => n + o.value,0)}<small></small></span>
      <div class="tr"><div class="fl" style="width:${(sortedOrphans.reduce((n,o)=>n+o.value,0)/maxCount)*100}%"></div></div></div></div>`;
  }
  el.innerHTML = html;
  $("#gen-hint").innerHTML = `${totalBuckets} categorias · ${totalGenres} gêneros · clique na categoria para ver os subgêneros${upd}`;
}
document.querySelector("#genres")?.addEventListener("click", e => {
  const bucketRow = e.target.closest("[data-bucket]"), subRow = e.target.closest("[data-genre]");
  if (bucketRow && !subRow){
    const k = bucketRow.dataset.bucket;
    expandedGenreBucket = (expandedGenreBucket === k) ? null : k;
    renderGenres();
  } else if (subRow){
    toggle("genre", subRow.dataset.genre);
  }
});
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
  let html = "";

  // --- duração (t.sec sempre disponível) ---
  const withSec = R.filter(t => t.sec > 0);
  if (withSec.length){
    const dur = {short: 0, normal: 0, long: 0, epic: 0};
    for (const t of withSec){
      if (t.sec < 180) dur.short++;
      else if (t.sec < 300) dur.normal++;
      else if (t.sec < 480) dur.long++;
      else dur.epic++;
    }
    const dTotal = withSec.length;
    const domLabel = dur.normal >= dur.short && dur.normal >= dur.long && dur.normal >= dur.epic ? `${pct(dur.normal, dTotal, 0)} são normais` :
                     dur.short  >= dur.normal && dur.short  >= dur.long  && dur.short  >= dur.epic  ? `${pct(dur.short,  dTotal, 0)} são curtas`  :
                     dur.long   >= dur.normal && dur.long   >= dur.short && dur.long   >= dur.epic  ? `${pct(dur.long,   dTotal, 0)} são longas`  :
                     `${pct(dur.epic, dTotal, 0)} são épicas`;
    html += profStack("Duração das faixas", domLabel,
      [[dur.short, "hsl(var(--h),60%,72%)", "Curtas < 3min"], [dur.normal, "hsl(var(--h),65%,52%)", "Normais 3–5min"], [dur.long, "hsl(var(--h),93%,24%)", "Longas 5–8min"], [dur.epic, "hsl(var(--h),85%,20%)", "Épicas > 8min"]], dTotal);
    const longest = [...withSec].sort((a, b) => b.sec - a.sec).slice(0, 3);
    if (longest.length) html += `<div class="pf"><div class="pf-h"><span>Músicas mais longas</span><b>Duração</b></div>
      ${longest.map(t => `<div class="hrow"><div class="hl"><span>${esc(t.title)} <em>${esc(t.artist)}</em></span><b>${durTxt(t.sec)}</b></div><div class="ht"><i style="width:${Math.max(2, t.sec / longest[0].sec * 100)}%;background:linear-gradient(90deg,hsl(calc(var(--h) + 75),65%,38%),hsl(calc(var(--h) + 75),60%,62%))"></i></div></div>`).join("")}</div>`;
  }

  // --- décadas (t.date sempre disponível) ---
  const withYear = R.filter(t => t.date && String(t.date).length >= 4);
  if (withYear.length){
    const decades = new Map();
    for (const t of withYear){
      const y = parseInt(String(t.date).slice(0, 4), 10);
      if (!y || y < 1950 || y > 2030) continue;
      const dec = Math.floor(y / 10) * 10;
      decades.set(dec, (decades.get(dec) || 0) + 1);
    }
    if (decades.size > 1){
      const sorted = [...decades].sort((a, b) => a[0] - b[0]);
      const decMax = Math.max(...sorted.map(([, n]) => n));
      html += `<div class="pf"><div class="pf-h"><span>Por década</span><b>Faixas</b></div>
        ${sorted.map(([d, n]) => `<div class="hrow"><div class="hl"><span>${d}s</span><b>${n} <em>${pct(n, withYear.length, 0)}</em></b></div><div class="ht"><i style="width:${Math.max(2, n / decMax * 100)}%;background:linear-gradient(90deg,hsl(calc(var(--h) + 30),70%,35%),hsl(calc(var(--h) + 30),65%,58%))"></i></div></div>`).join("")}</div>`;
    }
  }

  // --- artistas mais explícitos (aqui para manter sequência fria→quente com os outros cards de barras) ---
  if (M.length){
    const exA = M.filter(t => t.m.x).length;
    if (exA){
      const artsA = [...groupBy(M, "artist")].map(([k, rs]) => ({k, n: rs.length, e: rs.filter(t => t.m.x).length}))
        .filter(a => a.n >= 3 && a.e).sort((a, b) => b.e / b.n - a.e / a.n || b.e - a.e).slice(0, 4);
      if (artsA.length) html += `<div class="pf"><div class="pf-h"><span>Artistas mais explícitos</span><b>% das faixas</b></div>
        ${artsA.map(a => `<div class="hrow"><div class="hl"><span>${esc(a.k)} <em>${a.e} de ${a.n}</em></span><b>${pct(a.e, a.n, 0)}</b></div><div class="ht"><i style="width:${Math.max(2, a.e / a.n * 100)}%;background:linear-gradient(90deg,hsl(calc(var(--h) - 45),75%,32%),hsl(calc(var(--h) - 45),65%,58%))"></i></div></div>`).join("")}</div>`;
    }
  }

  // --- dados do Spotify (apenas quando importado por link) ---
  if (M.length){
    const ex = M.filter(t => t.m.x).length;
    const ty = {album: 0, single: 0, compilation: 0}; M.forEach(t => { if (t.m.ty in ty) ty[t.m.ty]++; });
    const tyN = ty.album + ty.single + ty.compilation;
    html += tyN ? profStack("De onde vêm", pct(ty.album, tyN, 0) + " de álbuns", [[ty.album, "hsl(var(--h),65%,52%)", "Álbum"], [ty.single, "hsl(var(--h),60%,72%)", "Single/EP"], [ty.compilation, "hsl(var(--h),93%,24%)", "Coletânea"]], tyN) : "";
    html += profStack("Explícitas", pct(ex, M.length, 0), [[ex, "hsl(var(--h),80%,98%)", "Explícitas"], [M.length - ex, "hsl(var(--h),93%,24%)", "Sem palavrão"]], M.length);
  } else if (!html){
    html = `<div class="empty-in"><p>Explícitas e singles aparecem aqui para músicas importadas por <strong>link do Spotify</strong>.</p>${missing ? `<button class="pbtn" type="button" data-upd>Atualizar dados</button><p class="muted">Procura as músicas que já estão na playlist: 1 busca por música.</p>` : ""}</div>`;
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
  const active = state.bands.size + state.albums.size + state.genres.size + state.years.size > 0;
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
  renderKPIs(R);
  for (const k of ["wave", "years", "tree", "albums", "rank", "genres", "profile"]) cardRender(k);   // cada card com o seu tempo (animação por card)
  // o gráfico de evolução compara bandas/gêneros entre si: com banda, álbum ou gênero filtrado ele não faz sentido, então some (a máquina do tempo não esconde)
  const evoOff = state.bands.size + state.albums.size + state.genres.size + state.years.size > 0;
  $("#evo-card").style.display = evoOff ? "none" : "";
  if (!evoOff) cardRender("evo");
  renderFilteredList(R);
  $("#tm-note").textContent = state.upTo != null ? `Máquina do tempo ligada no Painel (até a #${state.upTo}): os insights usam a playlist inteira.` : "";
}

/* ---------------- máquina do tempo: o painel como a playlist era até a #n (ordem de adição) ---------------- */
const TM_N = BY_PLAYLIST.length;
const tm = {playing: false, paused: false, raf: 0, t0: 0, lastRender: 0, pos: TM_N, speed: 1, shown: TM_N};
const TM_REDUCE = matchMedia("(prefers-reduced-motion: reduce)").matches;
const TM_ICON = {play: '<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M4.5 2.8v10.4a.6.6 0 0 0 .9.5l8.3-5.2a.6.6 0 0 0 0-1L5.4 2.3a.6.6 0 0 0-.9.5z" fill="currentColor"/></svg>',
  pause: '<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><rect x="3.5" y="2.5" width="3.2" height="11" rx="1" fill="currentColor"/><rect x="9.3" y="2.5" width="3.2" height="11" rx="1" fill="currentColor"/></svg>'};
function tmSync(){
  const n = state.upTo == null ? TM_N : state.upTo, r = $("#tm-range");
  tm.pos = n; tm.shown = n;
  r.value = n; r.style.setProperty("--p", (TM_N > 1 ? (n - 1) / (TM_N - 1) * 100 : 100) + "%");
  const last = BY_PLAYLIST[n - 1];
  timeChip();
  $("#tm-label").innerHTML = `Até a <b>#${n}</b> de ${fmtInt(TM_N)} · ${pct(n, TM_N, 0)} da playlist`;
  $("#tm-last").innerHTML = last ? `Última adicionada neste ponto: <b>#${last.n} ${esc(last.title)}</b> — ${esc(last.artist)}` : "";
  $("#tm-now").style.display = state.upTo == null ? "none" : "";
  // o conteúdo do botão só é trocado quando o estado muda (tmSync roda a cada quadro): reescrever o botão no meio de um clique fazia o clique se perder
  const want = tm.playing ? "pause" : "play";
  if (tm._icon !== want){
    tm._icon = want;
    for (const id of ["#tm-play", "#tb-play"]){   // o do cabeçalho (barra fixa) é o mesmo botão, só que sempre à mão quando a tela desce
      $(id).innerHTML = TM_ICON[want];
      $(id).setAttribute("aria-label", tm.playing ? "Pausar" : "Reproduzir a playlist crescendo");
    }
  }
  tbPlayVis();
}
/* animação POR CARD: cada gráfico tem o seu "Animar" e só ele roda a playlist crescendo (os outros cards ficam como estão).
   O botão da máquina do tempo (barra de cima) anima TODOS os cards. Estados do card: parado ("Animar") → tocando ("Pausar") →
   pausado ("Retomar" + "Cancelar", com o "Até a #n ×" no cabeçalho do site). Usa a velocidade escolhida na barra. Só um card anima por vez.
   Pra desenhar um card com o tempo dele, trocamos state.upTo só durante o desenho dele (rows() já respeita isso). */
const CARD_DEF = {
  wave: () => { const R = rows(); renderHeroTotal(R); renderWave(R); },
  years: () => renderYears(rows(true, true, true, true, false)), tree: () => renderTree(), albums: () => renderAlbums(), rank: () => renderRank(),
  genres: () => renderGenres(), profile: () => renderProfile(rows()), evo: () => renderEvolution(rows())
};
const CARDS = {};
for (const k in CARD_DEF) CARDS[k] = {name: k, playing: false, n: null, raf: 0, t0: 0, pos: 1, last: 0, uis: []};   // uis: conjuntos de botões (no card e, no gráfico de quadrados, também na tela cheia)
function cardRender(name){
  const c = CARDS[name];
  if (c.n == null) return CARD_DEF[name]();
  const saved = state.upTo; state.upTo = c.n;
  try { CARD_DEF[name](); } finally { state.upTo = saved; }
}
function cardUI(name){
  const c = CARDS[name], paused = !c.playing && c.n != null;
  for (const u of c.uis){
    // o botão principal nunca muda de lugar: Animar → Pausar → Retomar; o Cancelar aparece ao lado enquanto toca ou pausado
    const html = c.playing ? `${TM_ICON.pause}<span>Pausar</span>` : `${TM_ICON.play}<span>${paused ? "Retomar" : "Animar"}</span>`;
    if (u._html !== html){   // só reescreve o botão quando o estado muda (cardUI roda a cada quadro; trocar o conteúdo no meio de um clique perdia o clique)
      u._html = html; u.play.innerHTML = html;
      u.play.setAttribute("aria-label", c.playing ? "Pausar a animação deste gráfico" : paused ? "Retomar a animação deste gráfico" : "Animar só este gráfico");
    }
    u.restart.style.display = c.playing || paused ? "" : "none";   // "Cancelar" aparece ao lado do botão principal
    if (u.chip){
      u.chip.style.display = c.n != null ? "" : "none";
      if (c.n != null){ const tx = `Até a #${c.n} ×`; if (u.chip.textContent !== tx) u.chip.textContent = tx; }
    }
  }
  toolbarChip();
}
/* "Até a #n": em vez de repetir em cada card, aparece UMA vez no cabeçalho do site (a barra fixa que desce junto com a tela) */
const CARD_LABEL = {wave: "Total", years: "Linha do tempo", tree: "Quadrados", albums: "Álbuns", rank: "Ranking", genres: "Gêneros", profile: "Perfil", evo: "Evolução"};
function toolbarChip(){
  const b = $("#tb-anim"); if (!b) return;
  const c = Object.values(CARDS).find(x => x.n != null);
  if (!c){ b.style.display = "none"; b.dataset.card = ""; return; }
  b.style.display = ""; b.dataset.card = c.name;
  const html = `<b>${CARD_LABEL[c.name]}</b><span>Até a #${c.n}</span><span class="x">×</span>`;
  if (b._html !== html){ b._html = html; b.innerHTML = html; }
}
// cria um conjunto de botões (Animar/Pausar/Retomar, Cancelar, chip) ligado ao card; dispose() tira dele (ex.: ao fechar a tela cheia)
/* VELOCIDADE UNIVERSAL: a da barra de cima, a de cada card e a da tela cheia são a mesma (tm.speed); mexer em uma muda todas */
const SPEEDS = [0.125, 0.25, 0.5, 1, 2, 4], SPEED_SEGS = [];
const speedTxt = s => (s === 0.125 ? "0,12" : String(s).replace(".", ",")) + "x";   // 0,125x aparece como "0,12x" (o valor continua 0,125)
function syncSpeedSegs(){
  for (const seg of SPEED_SEGS){
    seg.querySelectorAll("button[data-s]").forEach(b => b.setAttribute("aria-pressed", +b.dataset.s === tm.speed));
    const t = seg.querySelector(".spd-txt"); if (t) t.textContent = speedTxt(tm.speed);
  }
}
function setSpeed(v){ tm.speed = v; syncSpeedSegs(); }
/* velocidade nos cards: um botão (mesmo tamanho dos outros) que mostra a velocidade atual e abre um mini menu com as opções */
function makeSpeedSeg(){
  const seg = document.createElement("span"); seg.className = "sty spd"; seg.setAttribute("role", "group"); seg.setAttribute("aria-label", "Velocidade da animação (vale para o site todo)");
  seg.innerHTML = `<button class="gbtn sty-btn spd-btn" type="button" aria-haspopup="true" aria-expanded="false" title="Velocidade da animação (vale para o site todo)"><span class="spd-txt">${speedTxt(tm.speed)}</span><svg width="10" height="10" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    <div class="sty-pop spd-pop">${SPEEDS.map(s => `<button type="button" data-s="${s}" aria-pressed="${s === tm.speed}">${speedTxt(s)}</button>`).join("")}</div>`;
  seg.addEventListener("click", e => { const b = e.target.closest(".spd-pop button"); if (b){ setSpeed(+b.dataset.s); closeStyle(); } });
  SPEED_SEGS.push(seg);
  return seg;
}
function makeCardControls(name, withChip = false, withSpeed = true){
  const mk = (cls, txt) => { const b = document.createElement("button"); b.type = "button"; b.className = "gbtn anim-btn " + cls; if (txt) b.textContent = txt; return b; };
  const grp = document.createElement("span"); grp.className = "anim-grp";
  const u = {play: mk("anim-play"), restart: mk("anim-restart", "Cancelar"), chip: withChip ? mk("anim-chip") : null};
  u.restart.title = "Cancelar a animação e ir direto para o final";
  u.restart.style.display = "none";
  if (u.chip){ u.chip.title = "Voltar este gráfico para a playlist inteira"; u.chip.style.display = "none"; }
  u.play.addEventListener("click", () => { const c = CARDS[name]; if (c.playing) cardPause(name); else cardStart(name, c.n != null ? Math.max(1, c.n) : 1); });
  u.restart.addEventListener("click", () => cardCancel(name));   // não recomeça: só cancela e vai pro final
  if (u.chip) u.chip.addEventListener("click", () => cardReset(name));
  grp.append(u.play, u.restart); if (u.chip) grp.append(u.chip);
  const speed = withSpeed ? makeSpeedSeg() : null; if (speed) grp.append(speed);
  CARDS[name].uis.push(u); cardUI(name);
  return {grp, dispose: () => { const arr = CARDS[name].uis, i = arr.indexOf(u); if (i >= 0) arr.splice(i, 1); if (speed){ const k = SPEED_SEGS.indexOf(speed); if (k >= 0) SPEED_SEGS.splice(k, 1); } }};
}
const anyCardPlaying = () => Object.values(CARDS).some(c => c.playing);
function cardSettle(){   // ao pausar: os quadrados terminam a troca em 0,35 s e o resto do painel volta ao normal
  releaseTiles(); treeEl.classList.add("settle"); clearTimeout(cardSettle.t); cardSettle.t = setTimeout(() => treeEl.classList.remove("settle"), 700);
  if (!tm.playing){ tmBusy = false; treeEl.classList.remove("flow"); evoPanels(); }
}
function cardPause(name){
  const c = CARDS[name]; c.playing = false; cancelAnimationFrame(c.raf);
  if (!anyCardPlaying()) cardSettle();
  cardUI(name);
}
$("#tb-anim").addEventListener("click", () => { const k = $("#tb-anim").dataset.card; if (k) cardReset(k); });
/* "Cancelar": para a animação e manda o card direto pro final (playlist inteira); o ajuste pro melhor layout sai na mesma velocidade lenta da animação */
function cardCancel(name){
  const c = CARDS[name]; if (c.n == null && !c.playing) return;
  c.playing = false; cancelAnimationFrame(c.raf); c.n = null;
  if (!anyCardPlaying() && !tm.playing){ holdTiles(); tmBusy = false; evoPanels(); }
  cardUI(name); cardRender(name);
}
function cardReset(name){
  const c = CARDS[name]; if (c.n == null && !c.playing) return;
  c.playing = false; cancelAnimationFrame(c.raf); c.n = null;
  if (!anyCardPlaying() && !tm.playing){ tmBusy = false; treeEl.classList.remove("flow"); }
  cardUI(name); cardRender(name);
  if (name === "evo") evoPanels();
}
function cardsResetAll(){ for (const k in CARDS) cardReset(k); }
function cardFrame(name, ts){
  const c = CARDS[name]; if (!c.playing) return;
  const dt = Math.min(100, ts - c.t0); c.t0 = ts;
  const end = state.upTo == null ? TM_N : state.upTo;
  c.pos += (TM_N / 20) * tm.speed * dt / 1000;
  const n = Math.min(end, Math.floor(c.pos));
  if (n !== c.n && (ts - c.last >= 90 || n >= end)){ c.n = n; c.last = ts; cardRender(name); cardUI(name); }
  if (n >= end){   // terminou: o card volta pra playlist inteira e o gráfico se ajusta pro melhor layout na mesma velocidade lenta da animação
    c.playing = false; c.n = null; cardUI(name);
    if (!anyCardPlaying() && !tm.playing){ holdTiles(); tmBusy = false; evoPanels(); }
    cardRender(name); return;
  }
  c.raf = requestAnimationFrame(ts2 => cardFrame(name, ts2));
}
function cardStart(name, from){
  for (const k in CARDS) if (k !== name) cardReset(k);   // só um card anima por vez
  if (tm.playing){ tmStop(); }
  tm.paused = false; tmSync();
  const c = CARDS[name];
  c.n = from; c.pos = from; c.playing = true; c.t0 = performance.now(); c.last = 0;
  releaseTiles(); tmBusy = true;
  cardUI(name); cardRender(name);
  c.raf = requestAnimationFrame(ts => cardFrame(name, ts));
}
// fileira de controles do card (onde ficam os outros botões/opções): a do gráfico de quadrados, a da onda, ou uma nova embaixo do texto de ajuda
function cardToolsHost(host){
  if (host.classList.contains("wave-cap")) return host;
  const own = host.querySelector(".tree-tools"); if (own) return own;
  let tools = host.querySelector(":scope > .card-tools");
  if (!tools){ tools = document.createElement("div"); tools.className = "card-tools"; host.appendChild(tools); }
  return tools;
}
(function addClearButtons(){
  for (const art of document.querySelectorAll("article.chart:not(#filtered-list-card):not(#evo-card)")){
    const h = art.querySelector(":scope > header"); if (!h) continue;
    const b = document.createElement("button");
    b.type = "button"; b.className = "gbtn clr-btn"; b.hidden = true; b.textContent = "Limpar filtros";
    b.title = "Tirar os filtros de banda, álbum, gênero e ano";
    b.addEventListener("click", clearFilters);
    cardToolsHost(h).appendChild(b);
  }
})();
(function addCardButtons(){
  if (TM_N < 2 || TM_REDUCE) return;
  const nameOf = art => art.id === "evo-card" ? "evo" : art.querySelector("#years") ? "years" : art.querySelector("#tree") ? "tree" : art.querySelector("#albums") ? "albums"
    : art.querySelector("#rank") ? "rank" : art.querySelector("#genres") ? "genres" : art.querySelector("#profile") ? "profile" : null;
  const targets = [...document.querySelectorAll("article.chart:not(#filtered-list-card) > header")].map(h => [h, nameOf(h.parentElement)]);
  const wave = document.querySelector(".hero .wave-cap"); if (wave) targets.push([wave, "wave"]);
  for (const [host, name] of targets){
    if (!name) continue;
    cardToolsHost(host).appendChild(makeCardControls(name, false, name !== "wave").grp);   // os botões entram na mesma fileira de controles do card, como qualquer outro
  }
  document.addEventListener("visibilitychange", () => { if (document.hidden) for (const k in CARDS) if (CARDS[k].playing) cardPause(k); });
})();
/* chip "Tempo · Até a #n ×": fica na linha de filtros (em cima do player) enquanto ela está visível; quando a tela desce e a linha sai de vista,
   ele sobe para o cabeçalho colado (barra fixa; no celular, etiqueta flutuante). Só troca o texto quando o número muda (não pisca) */
const ROW_TIME = (() => {
  const b = document.createElement("button");
  b.className = "chip"; b.type = "button"; b.id = "row-time"; b.style.display = "none"; b.title = "Voltar o painel para a playlist inteira";
  b.addEventListener("click", () => tmCancel());
  return b;
})();
function rowTimeInView(){
  const r = ROW_TIME.getBoundingClientRect(), tb = document.querySelector(".toolbar");
  const lim = innerWidth >= 900 && tb ? tb.getBoundingClientRect().bottom : 0;   // a barra fixa cobre o topo da tela nas telas largas
  return r.height > 0 && r.bottom > lim + 2 && r.top < innerHeight;
}
function timeChip(){
  const hdr = $("#tb-time"); if (!hdr) return;
  const on = state.upTo != null;
  const html = on ? `<b>Tempo</b><span>Até a #${state.upTo}</span><span class="x">×</span>` : "";
  ROW_TIME.style.display = on ? "" : "none";
  if (on && ROW_TIME._html !== html){ ROW_TIME._html = html; ROW_TIME.innerHTML = html; }
  const showHdr = on && !rowTimeInView();
  hdr.style.display = showHdr ? "" : "none";
  if (showHdr && hdr._html !== html){ hdr._html = html; hdr.innerHTML = html; }
}
addEventListener("scroll", () => { if (state.upTo != null) requestAnimationFrame(timeChip); requestAnimationFrame(tbPlayVis); }, {passive: true});
addEventListener("resize", () => { if (state.upTo != null) timeChip(); tbPlayVis(); });
/* botão de tocar/pausar da máquina do tempo no cabeçalho: aparece quando a barra da máquina do tempo saiu de vista (tela desceu) e só no Painel */
function tbPlayVis(){
  const b = $("#tb-play"), box = $("#tm"); if (!b || !box) return;
  let show = false;
  if (!box.hidden && !TM_REDUCE && TM_N >= 2 && $("#painel").classList.contains("on")){
    const r = box.getBoundingClientRect(), tb = document.querySelector(".toolbar");
    const lim = innerWidth >= 900 && tb ? tb.getBoundingClientRect().bottom : 0;
    show = r.bottom <= lim + 2 || r.top >= innerHeight;
  }
  b.style.display = show ? "" : "none";
}
// cancela a animação (se estiver tocando) e volta o painel direto pro final, com o ajuste lento do layout
function tmCancel(){
  tm.paused = false; tm.playing = false; cancelAnimationFrame(tm.raf);
  holdTiles(); tmBusy = false; tmGo(TM_N); evoPanels();
}
$("#tb-time").addEventListener("click", tmCancel);
function tmGo(n){
  tm.paused = false;
  n = Math.min(TM_N, Math.max(1, Math.round(n)));
  state.upTo = n >= TM_N ? null : n;
  tmSync(); render();
}
function tmStop(natural = false){
  const was = tm.playing;
  tm.playing = false; cancelAnimationFrame(tm.raf);
  if (tmBusy && natural){
    // a animação acabou sozinha: o gráfico se ajusta pro melhor layout NA MESMA velocidade lenta da animação
    holdTiles(); tmBusy = false; tmSync(); render(); evoPanels();
  } else if (tmBusy){
    // pausou: o último desenho sai SEM animações (números e listas param na hora) e os quadrados terminam a troca em 0,35 s
    releaseTiles(); treeEl.classList.add("settle"); clearTimeout(tmStop.t); tmStop.t = setTimeout(() => treeEl.classList.remove("settle"), 700);
    tmSync(); render();
    tmBusy = false; treeEl.classList.remove("flow"); evoPanels();
  } else tmSync();
  return was;
}
function tmFrame(ts){
  if (!tm.playing) return;
  const dt = Math.min(100, ts - tm.t0); tm.t0 = ts;
  tm.pos += (TM_N / 20) * tm.speed * dt / 1000;   // 1x percorre a playlist inteira em ~20 s
  const n = Math.min(TM_N, Math.floor(tm.pos));
  if (n !== tm.shown && (ts - tm.lastRender >= 90 || n >= TM_N)){
    tm.shown = n; tm.lastRender = ts;
    state.upTo = n >= TM_N ? null : n;
    const keep = tm.pos; tmSync(); tm.pos = keep; tm.shown = n;
    render();
  }
  if (n >= TM_N){ tmStop(true); return; }
  tm.raf = requestAnimationFrame(tmFrame);
}
function tmPlay(){
  if (TM_N < 2) return;
  if (tm.playing){ tmStop(); tm.paused = true; tmSync(); return; }   // pausou: o botão da barra volta a ser o play (retoma de onde parou)
  tm.paused = false;
  cardsResetAll();   // o botão de cima anima TODOS os cards
  if (state.upTo == null){ state.upTo = 1; tm.pos = 1; }
  releaseTiles();
  tmBusy = true; tm.playing = true; tm.t0 = performance.now(); tm.lastRender = 0;
  tmSync(); render();
  tm.raf = requestAnimationFrame(tmFrame);
}
(function initTimeMachine(){
  const box = $("#tm"), r = $("#tm-range");
  if (TM_N < 2){ box.hidden = true; return; }
  r.max = TM_N;
  if (TM_REDUCE){ $("#tm-play").style.display = "none"; $("#tm-speed").style.display = "none"; }
  $("#tm-play").addEventListener("click", tmPlay);
  $("#tb-play").addEventListener("click", tmPlay);
  document.querySelector("nav.tabs").addEventListener("click", () => setTimeout(tbPlayVis, 80));
  tbPlayVis();
  $("#tm-now").addEventListener("click", () => { tmStop(); tmGo(TM_N); });
  $("#tm-speed").addEventListener("click", e => { const b = e.target.closest("button"); if (b) setSpeed(+b.dataset.s); });
  SPEED_SEGS.push($("#tm-speed"));
  let drag = false;
  r.addEventListener("pointerdown", () => { drag = true; tmBusy = true; });
  const endDrag = () => { if (drag){ drag = false; if (!tm.playing){ tmBusy = false; render(); } } };
  addEventListener("pointerup", endDrag); addEventListener("pointercancel", endDrag);
  r.addEventListener("input", () => {
    if (tm.playing){ tm.playing = false; cancelAnimationFrame(tm.raf); tmBusy = drag; }
    tmGo(+r.value);
  });
  r.addEventListener("keydown", e => { if (e.key === " "){ e.preventDefault(); tmPlay(); } });
  document.addEventListener("visibilitychange", () => { if (document.hidden && tm.playing) tmStop(); });
  tmSync();
})();

/* ---------------- chart 7: evolução por banda/gênero (linhas acumuladas pela ordem de adição; banda = artista principal) ---------------- */
// as 8 primeiras linhas usam as cores categóricas validadas (versão escura), em ordem fixa; da 9ª em diante
// (dá pra marcar todas) as cores são geradas espalhando o matiz. Cada linha mantém a cor enquanto está marcada
const EVO_COLORS = ["#3987e5", "#d95926", "#199e70", "#c98500", "#d55181", "#008300", "#9085e9", "#e66767"];
// 9 paletas categóricas — uma por preset de tema (ordem: Vermelho, Laranja, Amarelo, Lima, Verde, Ciano, Azul, Roxo, Rosa)
const EVO_PALETTES = [
  ["#e05555","#e07830","#d4c040","#60c860","#4898e0","#a050d0","#d060a8","#40b8c0"], // 0 Vermelho
  ["#e0782a","#e0c038","#c0d840","#40c870","#4080e0","#9040d0","#e04080","#40c8c8"], // 1 Laranja
  ["#d8c030","#e08820","#a0d840","#38b870","#3878d8","#9838d0","#d84888","#38c8c0"], // 2 Amarelo
  ["#80c830","#c8d020","#e08020","#38a870","#3878d8","#9838d0","#d84888","#e05050"], // 3 Lima
  ["#3987e5","#d95926","#199e70","#c98500","#d55181","#008300","#9085e9","#e66767"], // 4 Verde (padrão)
  ["#30b8c8","#3870d0","#70d838","#d0c830","#e07820","#d04080","#9040d0","#e05050"], // 5 Ciano
  ["#3878d8","#30b8d0","#7830d0","#d04080","#d87020","#c0d030","#38b840","#e05050"], // 6 Azul
  ["#9040d0","#c030a0","#3870d8","#30b8c8","#38b840","#d0c030","#e08020","#e05050"], // 7 Roxo
  ["#d040a0","#e05050","#d86020","#3878d8","#30b0c0","#9030c8","#78c030","#c0d030"], // 8 Rosa
];
function getThemePaletteIdx(){
  const h = +(getComputedStyle(document.documentElement).getPropertyValue('--h').trim()) || 153;
  const hues = [0, 25, 50, 100, 153, 185, 210, 265, 320];
  let best = 4, bestDist = 999;
  hues.forEach((ph, i) => {
    const dist = Math.abs(((ph - h + 180 + 360) % 360) - 180);
    if (dist < bestDist){ bestDist = dist; best = i; }
  });
  return best;
}
const EVO_DEFAULT = 10, EVO_TOPS = [1, 3, 5, 10, 25, 50, 100, 250, 500, 750, 1000];
const evoCol = s => { const pal = EVO_PALETTES[getThemePaletteIdx()]; return s < pal.length ? pal[s] : `hsl(${Math.round(((s - pal.length) * 137.5 + 20) % 360)}, 62%, 62%)`; };
const evo = {mode: "band", dyn: {band: null, genre: null}, sel: {band: null, genre: null}, slot: {band: new Map(), genre: new Map()}, list: [], map: new Map(), R: [], N: 0};
const evoName = k => evo.mode === "genre" ? capFirst(k) : k;
function evoBuild(R){
  const sorted = [...R].sort((a, b) => a.n - b.n), idx = new Map();
  sorted.forEach((t, i) => {
    const rawKeys = evo.mode === "band" ? (t.artist === NI ? [] : (splitArtistsRaw(t.artist).length ? splitArtistsRaw(t.artist) : [t.artist])) : (t.ge || []);
    const keys = evo.mode === "genre" ? [...new Set(rawKeys.map(g => genreToRoot(g) || g))] : rawKeys;
    for (const k of keys) (idx.get(k) || idx.set(k, []).get(k)).push(i);
  });
  evo.R = sorted; evo.N = sorted.length;
  // com a máquina do tempo o eixo continua com o tamanho total (as linhas crescem da esquerda pra direita)
  evo.full = state.upTo == null ? sorted : rows(true, true, true, false).sort((a, b) => a.n - b.n);
  evo.axisN = evo.full.length;
  evo.list = [...idx].map(([k, ix]) => ({k, ix, c: ix.length})).sort((a, b) => b.c - a.c || coll.compare(a.k, b.k));
  evo.map = new Map(evo.list.map(s => [s.k, s]));
  evoSel(); evoApplyDyn();
}
/* "Top N" é dinâmico: as linhas mostradas são as N maiores NO MOMENTO (na máquina do tempo mudam conforme o gráfico
   avança), e não as N maiores do final. Escolher/tirar uma linha à mão, ou clicar em "Fixar top", congela a escolha */
function evoApplyDyn(){
  const m = evo.mode, n = evo.dyn[m]; if (!n || !evo.sel[m]) return;
  const want = evo.list.slice(0, n).map(s => s.k), wantSet = new Set(want);
  for (const k of [...evo.sel[m]]) if (!wantSet.has(k)) evoDel(k);
  for (const k of want) if (!evo.sel[m].has(k)) evoAdd(k);
}
function evoAdd(k){
  const m = evo.mode, used = new Set();
  for (const [kk, s] of evo.slot[m]) if (evo.map.has(kk)) used.add(s);
  let s = 0; while (used.has(s)) s++;
  evo.sel[m].add(k); evo.slot[m].set(k, s); return true;
}
function evoDel(k){ evo.sel[evo.mode].delete(k); evo.slot[evo.mode].delete(k); }
function evoTop(n){ const m = evo.mode; evo.sel[m] = new Set(); evo.slot[m] = new Map(); evo.dyn[m] = n; evo.list.slice(0, n).forEach(s => evoAdd(s.k)); }
function evoReset(){ evoTop(EVO_DEFAULT); }
function evoSel(){ if (!evo.sel[evo.mode]) evoReset(); return evo.sel[evo.mode]; }
const evoColor = k => evoCol(evo.slot[evo.mode].get(k));
const EVO_SPLIT = 25;
const evoOptHtml = s => { const on = evoSel().has(s.k); return `<button type="button" class="evo-opt${on ? " on" : ""}" data-k="${esc(s.k)}" aria-pressed="${on}"${on ? ` style="--sc:${evoColor(s.k)}"` : ""}>${on ? "<i></i>" : ""}${esc(evoName(s.k))}<em>${s.c}</em></button>`; };
function openEvoSingles(){
  const body = document.createElement("div");
  body.innerHTML = `<p class="mdesc">${evo.mode === "band" ? "Artistas" : "Gêneros"} com <strong>só 1 faixa</strong> na playlist. Uma linha de 1 faixa é só um degrau no gráfico, por isso ficam escondidos da lista principal. Clique para ligar ou desligar a linha.</p>
    <input type="search" id="evs-q" placeholder="Buscar…" aria-label="Buscar" style="width:100%;max-width:340px;border:1px solid var(--line-2);background:hsla(var(--h),55%,9%,.8);color:var(--ink);font:500 13px var(--body);padding:9px 12px;border-radius:12px;outline:none">
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
  evo.dyn[evo.mode] = null;   // escolha manual: deixa de acompanhar o top
  if (evoSel().has(k)) evoDel(k);
  else evoAdd(k);
  evoPanels(); drawEvo();
}
const evoPin = (() => {
  const b = document.createElement("button");
  b.type = "button"; b.className = "gbtn"; b.hidden = true; b.textContent = "Fixar top"; b.title = "Congela as linhas que estão no gráfico agora, mesmo com a máquina do tempo andando";
  b.addEventListener("click", () => { evo.dyn[evo.mode] = null; b.hidden = true; evoPanels(); toast("Top fixado: as linhas não mudam mais com o tempo."); });
  const row = $("#evo-tops"); if (row) row.insertAdjacentElement("afterend", b);
  return b;
})();
function drawEvo(){
  const box = $("#evo"); if (!box) return;
  evoPin.hidden = !(evo.dyn[evo.mode] && state.upTo != null);   // só faz sentido com a máquina do tempo no meio do caminho
  const W = box.clientWidth, N = evo.N;
  if (!evo.list.length){ box.innerHTML = `<p class="none">${evo.mode === "genre" ? "Ainda não há gêneros para mostrar. Use \"Atualizar dados\" para buscá-los." : "Sem dados para este recorte."}</p>`; return; }
  if (!W) return;
  const shown = [...evoSel()].filter(k => evo.map.has(k)).sort((a, b) => evo.slot[evo.mode].get(a) - evo.slot[evo.mode].get(b));
  const H = 300, L = 38, Rm = Math.round(Math.min(160, Math.max(60, W * 0.22))), Tp = 14, Bt = 26;   // margem da direita comporta os rótulos empurrados
  const NA = Math.max(N, evo.axisN || N);
  const X = i => L + (NA <= 1 ? 0 : i / (NA - 1)) * (W - L - Rm);
  const cum = shown.map(k => { const ix = evo.map.get(k).ix, a = new Int32Array(N); let p = 0, c = 0; for (let i = 0; i < N; i++){ if (p < ix.length && ix[p] === i){ c++; p++; } a[i] = c; } return a; });
  const mx = Math.max(1, ...cum.map(a => a[N - 1]));
  const raw = mx / 4, pow = Math.pow(10, Math.floor(Math.log10(raw))), step = Math.max(1, [1, 2, 5, 10].map(m => m * pow).find(s => s >= raw));
  const top = Math.ceil(mx / step) * step;
  const Y = v => Tp + (1 - v / top) * (H - Tp - Bt);
  let svg = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Evolução acumulada de faixas por ${evo.mode === "band" ? "banda" : "gênero"}, pela ordem de adição">`;
  for (let v = 0; v <= top; v += step) svg += `<line x1="${L}" x2="${W - Rm}" y1="${Y(v)}" y2="${Y(v)}" stroke="hsla(var(--h),60%,67%,.08)" stroke-dasharray="2 4"/><text x="${L - 8}" y="${Y(v) + 4}" text-anchor="end">${v}</text>`;
  [0, .25, .5, .75, 1].forEach((f, j, arr) => { const i = Math.round(f * (NA - 1)); svg += `<text x="${X(i)}" y="${H - 6}" text-anchor="${j === 0 ? "start" : j === arr.length - 1 ? "end" : "middle"}">#${(evo.full[i] || evo.R[Math.min(i, N - 1)]).n}</text>`; });
  const every = Math.max(1, Math.ceil(N / 500));
  // pré-computa pontos e cores para os dois passes
  const lineData = cum.map((a, j) => {
    const pts = []; for (let i = 0; i < N; i += every) pts.push(i); if (pts[pts.length - 1] !== N - 1) pts.push(N - 1);
    return {a, pts, col: evoCol(evo.slot[evo.mode].get(shown[j])), final: a[N - 1]};
  });
  // 1º passo — linhas: menor count por último (em cima) → cor de quem chegou por último domina
  const pathOrd = lineData.map((_, j) => j).sort((a, b) => lineData[b].final - lineData[a].final);
  for (const j of pathOrd) {
    const {a, pts, col} = lineData[j];
    svg += `<path d="M${pts.map(i => `${X(i).toFixed(1)},${Y(a[i]).toFixed(1)}`).join("L")}" fill="none" stroke="${col}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>`;
  }
  // 2º passo — bolinhas: maior count por último (em cima) → bolinha de quem chegou primeiro domina
  const circOrd = lineData.map((_, j) => j).sort((a, b) => lineData[a].final - lineData[b].final);
  for (const j of circOrd) {
    const {a, col} = lineData[j];
    svg += `<circle cx="${X(N - 1)}" cy="${Y(a[N - 1])}" r="4" fill="${col}" stroke="hsl(var(--h),55%,9%)" stroke-width="2"/>`;
  }
  /* rótulos na ponta das linhas: empurrados à direita quando colidirem verticalmente (mesma altura),
     prioridade ao de maior contagem (fica mais perto do ponto); 2+ colisões truncam para 5 chars */
  const CH = 7.5, LBL_GAP = 4, baseX = X(N - 1) + 9;
  const maxCh = Math.max(1, Math.floor((Rm - 16) / CH));
  const wrapLbl = nm => {
    if (nm.length <= maxCh) return [nm];
    const words = nm.split(/\s+/); let cur = "";
    const lines = [];
    for (const w of words) {
      const next = cur ? cur + " " + w : w;
      if (next.length <= maxCh) { cur = next; }
      else { if (cur) lines.push(cur); cur = w.length > maxCh ? w.slice(0, maxCh - 1) + "…" : w; if (lines.length) break; }
    }
    if (cur) lines.push(cur.length > maxCh ? cur.slice(0, maxCh - 1) + "…" : cur);
    return lines.slice(0, 2);
  };
  const ends = shown.map((k, j) => {
    const nm = String(evoName(k)).trim(), first = nm.split(/\s+/)[0] || nm;
    let txt = first.length > maxCh ? first.slice(0, Math.max(1, maxCh - 1)) + "…" : first;
    const count = cum[j][N - 1];
    return {txt, nm, rawY: Y(count), col: evoCol(evo.slot[evo.mode].get(k)), count};
  });
  ends.sort((a, b) => a.rawY - b.rawY);
  // bandas/gêneros com só 1 faixa não recebem rótulo (evita poluição quando há muitos selecionados)
  const endsVis = ends.filter(e => e.count > 1);
  // agrupar por proximidade vertical (≤ 12px)
  const grps = [];
  for (const e of endsVis) {
    const g = grps[grps.length - 1];
    if (g && e.rawY - g[g.length - 1].rawY <= 12) g.push(e);
    else grps.push([e]);
  }
  for (const g of grps) {
    g.sort((a, b) => b.count - a.count);   // maior count = mais perto do ponto
    if (g.length === 1) {
      const nm = g[0].nm, first = nm.split(/\s+/)[0] || nm;
      const compoundLimit = 12;   // nomes compostos acima deste tamanho usam só a primeira palavra
      const fits = nm.includes(" ") ? nm.length <= compoundLimit : nm.length <= maxCh;
      const lbl = fits ? nm : (first.length > maxCh ? first.slice(0, maxCh - 1) + "…" : first);
      g[0].lines = [lbl];
      g[0].finalX = baseX; g[0].finalY = g[0].rawY;
    } else {
      // flui horizontalmente dentro de Rm; quando passa da borda, quebra para a linha abaixo
      const maxX = W - 4, ROW_H = 13;
      const anchorY = g[0].rawY;
      let cx = baseX, row = 0;
      for (const e of g) {
        e.lbl = e.txt.slice(0, 5);
        const lblW = e.lbl.length * CH + LBL_GAP;
        if (cx + lblW > maxX && cx > baseX) { cx = baseX; row++; }
        e.finalX = cx; e.finalY = anchorY + row * ROW_H;
        cx += lblW;
      }
    }
  }
  endsVis.forEach(e => {
    const x = (e.finalX ?? baseX).toFixed(1), y = ((e.finalY ?? e.rawY) + 4).toFixed(1);
    const lines = e.lines ?? [e.lbl ?? e.txt];
    if (lines.length === 1) { svg += `<text class="evo-end" x="${x}" y="${y}" style="fill:${e.col}">${esc(lines[0])}</text>`; }
    else { svg += `<text class="evo-end" x="${x}" y="${y}" style="fill:${e.col}"><tspan x="${x}" dy="0">${esc(lines[0])}</tspan><tspan x="${x}" dy="13">${esc(lines[1])}</tspan></text>`; }
  });
  svg += `<g id="evo-hot" style="display:none"><line y1="${Tp}" y2="${H - Bt}" stroke="hsla(var(--h),80%,98%,.35)" stroke-dasharray="3 3"/>${cum.map((a, j) => `<circle r="4.5" fill="${evoCol(evo.slot[evo.mode].get(shown[j]))}" stroke="hsl(var(--h),55%,9%)" stroke-width="2"/>`).join("")}</g>`;
  svg += `<rect id="evo-hit" x="${L}" y="0" width="${W - L - Rm}" height="${H - Bt}" fill="transparent"/></svg>`;
  box.innerHTML = svg;
  const s = box.querySelector("svg"), hot = s.querySelector("#evo-hot"), line = hot.querySelector("line"), dots = [...hot.querySelectorAll("circle")];
  const at = e => {
    const b = s.getBoundingClientRect(), x = (e.clientX - b.left) / b.width * W;
    const i = Math.min(N - 1, Math.max(0, Math.round((x - L) / (W - L - Rm) * (NA - 1))));
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
function renderEvolution(R){ evoBuild(R); if (!tmBusy) evoPanels(); drawEvo(); }
$("#evo-mode").addEventListener("click", e => { const b = e.target.closest("button"); if (!b || b.dataset.m === evo.mode) return; evo.mode = b.dataset.m; evoBuild(rows()); evoPanels(); drawEvo(); });
$("#evo-tops").addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; evoTop(b.dataset.n === "all" ? Infinity : +b.dataset.n); evoPanels(); drawEvo(); });
$("#evo-none").addEventListener("click", () => { evo.dyn[evo.mode] = null; evo.sel[evo.mode] = new Set(); evo.slot[evo.mode] = new Map(); evoPanels(); drawEvo(); });
$("#evo-opts").addEventListener("click", e => { const b = e.target.closest(".evo-opt"); if (b) evoToggle(b.dataset.k); });
$("#evo-q").addEventListener("input", evoPanels);
$("#evo-singles").addEventListener("click", openEvoSingles);
$("#evo-singles-x").addEventListener("click", () => { evo.dyn[evo.mode] = null; evo.list.filter(s => s.c === 1).forEach(s => { if (evoSel().has(s.k)) evoDel(s.k); }); evoPanels(); drawEvo(); });

/* ---------------- tabs ---------------- */
const tabs = [...document.querySelectorAll(".tabs button")];
function placePill(){ const on = tabs.find(t => t.getAttribute("aria-selected") === "true"); const p = $(".tabs .pill"); p.style.left = on.offsetLeft + "px"; p.style.width = on.offsetWidth + "px"; }
function showTab(id){
  tabs.forEach(t => t.setAttribute("aria-selected", t.getAttribute("aria-controls") === id));
  document.querySelectorAll(".tabpanel").forEach(p => p.classList.toggle("on", p.id === id));
  placePill(); hideTip();
  document.title = id === "insights" ? "Dashbeat — Insights" : "Dashbeat — Painel";
  try { history.replaceState(null, "", id === "insights" ? "#insights" : "#"); } catch (e) {}
  if (id === "insights") animateInsights(); else requestAnimationFrame(() => { renderTree(); renderYears(rows()); drawEvo(); });
  dispatchEvent(new Event("fx:refresh"));
}
tabs.forEach(t => t.addEventListener("click", () => showTab(t.getAttribute("aria-controls"))));
addEventListener("hashchange", () => showTab(location.hash === "#insights" ? "insights" : "painel"));

/* ================= INSIGHTS ENGINE =================
   Every sentence on the Insights tab is written here from rules over the current list,
   so a new or edited playlist produces a different reading. Numbers are always computed. */
const NN = BY_PLAYLIST.length;
function median(a){ if (!a.length) return NaN; const s = [...a].sort((x, y) => x - y), m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; }
function blocks(k){ k = Math.max(1, Math.min(k, NN)); const out = []; for (let i = 0; i < k; i++){ const a = Math.floor(i * NN / k), b = Math.floor((i + 1) * NN / k); out.push(BY_PLAYLIST.slice(a, b)); } return out; }
function chapCount(n){ return Math.max(3, Math.min(10, Math.round(1.5 + Math.log2(n / 15)))); }
function chapPos(i, total){ const p = i / Math.max(1, total - 1); return p < 0.33 ? "no início" : p < 0.67 ? "no meio" : "no final"; }
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
    /* "colaborador" é quem divide uma faixa com este artista e conta como artista (ver SOLO no topo) */
    const nameLC = name.toLowerCase(), others = new Set();
    for (const t of T){ const parts = splitArtists(t.artist); if (parts.length > 1 && parts.includes(nameLC)) parts.forEach(p => { if (p !== nameLC) others.add(p); }); }
    return S.art.filter(a => others.has(a.k.toLowerCase()));
  };
  S.journey = NN >= 30;
  S.chap = S.journey ? blocks(chapCount(NN)) : [];
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
      <div style="height:6px;border-radius:6px;background:hsla(var(--h),60%,67%,.08);margin-top:5px;overflow:hidden"><i data-w="${(a.c / mx) * 100}" style="display:block;height:100%;width:0;border-radius:6px;background:linear-gradient(90deg,hsl(var(--h),93%,24%),hsl(var(--h),60%,64%));transition:width 1.1s cubic-bezier(.2,.75,.15,1)"></i></div></div>`).join("");
  },
  stack(seg, tot = NN){
    return `<div class="stack">${seg.filter(s => s[0] > 0).map(([n, c]) => `<i style="background:${c};flex-grow:0" data-g="${n}"></i>`).join("")}</div>
      <div class="legend">${seg.filter(s => s[0] > 0).map(([n, c, l]) => `<span><i style="background:${c}"></i>${l} · ${n} (${pc1(n, tot)})</span>`).join("")}</div>`;
  },
  bars(rows, max){
    return rows.map(([label, sub, v]) => `<div class="hrow"><div class="hl"><span>${esc(label)} <em>${esc(sub)}</em></span><b>${v}</b></div><div class="ht"><i style="width:${Math.max(2, v / max * 100)}%"></i></div></div>`).join("");
  },
  decComp(arts){
    const decs = IS.dec.map(d => d.d).slice(-5), shade = ["hsl(var(--h),85%,20%)", "hsl(var(--h),93%,24%)", "hsl(var(--h),82%,38%)", "hsl(var(--h),60%,64%)", "hsl(var(--h),72%,92%)"].slice(-decs.length);
    return arts.map(a => {
      const rs = a.rs.filter(t => t.year !== NI);
      const seg = decs.map(d => rs.filter(t => Math.floor(t.year / 10) * 10 === d).length);
      return `<div class="drow"><span class="dn">${esc(a.k)}</span><div class="dbar">${seg.map((v, i) => v ? `<i style="flex:${v};background:${shade[i]};color:${i >= decs.length - 2 ? "hsl(var(--h),90%,8%)" : "hsl(var(--h),80%,98%)"}" title="${decs[i]}s: ${v}">${rs.length && v / rs.length >= .14 ? v : ""}</i>` : "").join("")}</div></div>`;
    }).join("") + `<div class="lg">${decs.map((d, i) => `<span><i style="background:${shade[i]}"></i>${String(d).slice(2)}s</span>`).join("")}<span class="r">faixas por década de lançamento</span></div>`;
  },
  strips(names){
    const bounds = IS.chap.slice(1).map(seg => seg[0].n - 1);
    return names.map(nm => {
      const a = IS.artMap.get(nm); if (!a) return "";
      const ticks = a.rs.map(t => `<rect x="${t.n - 1}" y="0" width="1" height="14" fill="hsl(var(--h),60%,64%)"/>`).join("");
      const seps = bounds.map(x => `<rect x="${x}" y="0" width=".6" height="14" fill="hsla(var(--h),80%,98%,.18)"/>`).join("");
      return `<div class="strip"><div class="sl"><span>${esc(nm)}</span><em>#${a.rs[0].n} → #${a.rs[a.rs.length - 1].n} · ${faixas(a.c)}</em></div>
        <svg viewBox="0 0 ${NN} 14" preserveAspectRatio="none" class="strip-svg" aria-hidden="true"><rect width="${NN}" height="14" rx="3" fill="hsla(var(--h),60%,67%,.06)"/>${seps}${ticks}</svg></div>`;
    }).join("") + `<div class="sx"><span>#1</span><span>início → fim</span><span>#${NN}</span></div>`;
  },
  cells(win, a1, a2){
    const col = t => hasBand(t, a1) ? "hsl(var(--h),80%,98%)" : hasBand(t, a2) ? "hsl(var(--h),82%,38%)" : "hsla(var(--h),60%,67%,.14)";
    return `<div class="cells">${win.map(t => `<i style="background:${col(t)}" title="#${t.n} ${esc(t.title)} — ${esc(t.artist)}"></i>`).join("")}</div>
      <div class="lg"><span><i style="background:hsl(var(--h),80%,98%)"></i>${esc(a1)}</span>${a2 ? `<span><i style="background:hsl(var(--h),82%,38%)"></i>${esc(a2)}</span>` : ""}<span><i style="background:hsla(var(--h),60%,67%,.14)"></i>outros</span><span class="r">primeiras ${win.length} adições</span></div>`;
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
/* (definidos aqui em cima porque as regras de insights abaixo já usam coverIgnored ao carregar a página) */
const DUPIGN_KEY = "catalogo-musical:dups-ignored";
const DUPIGN = (() => { try { return new Set(JSON.parse(localStorage.getItem(DUPIGN_KEY) || "[]")); } catch (e) { return new Set(); } })();
const saveDupIgn = () => { try { localStorage.setItem(DUPIGN_KEY, JSON.stringify([...DUPIGN])); } catch (e) {} };
/* "é a mesma música, só outra versão" (ao vivo, remaster, deluxe…): sai das listas como as ignoradas (entra no mesmo DUPIGN, então também
   não conta como cover nem como repetida) e guarda o tipo da versão pra mostrar em "Tratados" */
const VERS_KEY = "catalogo-musical:dups-versions";
const VERS = (() => { try { return JSON.parse(localStorage.getItem(VERS_KEY) || "null") || {}; } catch (e) { return {}; } })();
const saveVers = () => { try { localStorage.setItem(VERS_KEY, JSON.stringify(VERS)); } catch (e) {} };
const VERS_LABEL = {live: "versão ao vivo", remaster: "remasterizada", deluxe: "edição deluxe/especial", other: "outra versão (remix, acústica…)"};
/* "é um cover" confirmado pela pessoa: sai da lista de pendências (vai pra "Tratados") mas NÃO é ignorado, então continua contando como cover nos insights */
const CONF_KEY = "catalogo-musical:dups-confirmed";
const CONF = (() => { try { return new Set(JSON.parse(localStorage.getItem(CONF_KEY) || "[]")); } catch (e) { return new Set(); } })();
const saveConf = () => { try { localStorage.setItem(CONF_KEY, JSON.stringify([...CONF])); } catch (e) {} };
const coverIgnored = key => DUPIGN.has("c|" + normC(key));
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
  const seg = [[c[0], "hsl(var(--h),80%,98%)", "Líder"], [t5 - c[0], "hsl(var(--h),65%,52%)", "2º ao 5º"], [top(10) - t5, "hsl(var(--h),93%,24%)", "6º ao 10º"], [NN - top(10), "hsla(var(--h),60%,67%,.16)", `Demais ${Math.max(0, IS.art.length - 10)}`]];
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
  const run = IS.runs[0], a0 = bandsOfRow(run[0])[0], k = run.length, art = IS.artMap.get(a0);
  const later = art.c - k, last = art.rs[art.rs.length - 1].n;
  const win = BY_PLAYLIST.slice(0, Math.min(60, NN));
  const g = [...groupBy(win, "artist")].map(([x, rs]) => [x, rs.length]).sort((a, b) => b[1] - a[1]);
  const second = (g.find(([x]) => x !== a0) || [])[0];
  if (k < 4){
    const w20 = BY_PLAYLIST.slice(0, 20), na = new Set(w20.flatMap(bandsOfRow)).size;
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
  const myRun = IS.runsSorted.find(r => hasBand(r[0], a1.k)), isBiggest = myRun && IS.runsSorted[0] === myRun;
  if (tail >= Math.max(15, NN * .15)){
    return {kind: "pl", theme: 1, score: 82,
      title: pickV("faded", ["O líder do catálogo ficou no passado", "O maior artista do catálogo parou de crescer"]),
      body: `<p>${myRun && myRun.length >= 5 ? `${esc(a1.k)} tem ${isBiggest ? "a maior maratona da lista" : `uma maratona de ${myRun.length}`} (${B(`${myRun.length} seguidas, #${myRun[0].n} a #${myRun[myRun.length - 1].n}`)}) e depois some.` : `${esc(a1.k)} lidera o total, mas a última faixa entrou na ${B("#" + last)}.`}</p>`,
      viz: V.strips([a1.k]), kick: ["0", `faixas de ${a1.k} nas últimas ${nf(tail)} adições`]};
  }
  const lastCh = CHI[CHI.length - 1], x = lastCh.seg.filter(t => hasBand(t, a1.k)).length;
  if (lastCh.top[0] === a1.k) return {kind: "pl", theme: 1, score: 78, title: `${a1.k} lidera o catálogo e também o agora`,
    body: `<p>O maior artista do catálogo continua dominando as adições recentes: é o artista mais presente no final da playlist.</p>`, viz: V.strips([a1.k]), kick: [nf(x), `das últimas ${lastCh.seg.length} adições são de ${a1.k}`]};
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
  const run = IS.runsSorted.find(r => hasBand(r[0], c.a.k) && r[0].n > cut * .9);
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
    const cov = bl.filter(seg => seg.some(t => hasBand(t, a.k))).length, span = a.rs[a.rs.length - 1].n - a.rs[0].n;
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
    body: `<p>${ml > mf + 1 ? "A mediana do ano de lançamento sobe ao longo da playlist" : ml < mf - 1 ? "A mediana do ano de lançamento cai ao longo da playlist" : "A mediana do ano de lançamento quase não muda"}${backers.length ? `, mas o final da playlist resgata ${listPt(backers)}` : ""}.</p>`,
    viz: V.mbars(pre, CHI.map((_, i) => `${i + 1}`), `faixas lançadas antes de ${pivot}, por parte da playlist`),
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
  const halfPct = Math.round(half.n / NN * 100);
  return {tech: true, kind: "pl", theme: 4, score: 66,
    title: slow ? "A descoberta desacelerou" : "A playlist segue descobrindo artistas",
    body: `<p>Metade dos ${total} artistas apareceu nos primeiros ${halfPct}% da playlist (até a #${half.n}). O trecho ${chapPos(best.i, CHI.length)} foi o mais rico: ${best.arts} artistas em ${best.seg.length} faixas.</p>`,
    viz: V.disc(), mvClass: "disc",
    kick: [nf(fresh.length), `artista${fresh.length === 1 ? "" : "s"} novo${fresh.length === 1 ? "" : "s"} nas últimas ${nf(NN - cut)} adições${col.length ? `, ${col.length} ${col.length > 1 ? "deles parcerias" : "deles parceria"}${colOwner ? ` de ${colOwner}` : ""}` : ""}`]};
});

// PLAYLIST · same title recorded by different artists
rule(() => {
  if (!IS.journey) return null;
  const g = groupBy(T.map(t => ({...t, key: cleanTitle(t.title).toLowerCase()})).filter(t => t.key.length > 2), "key");
  const pairs = [...g.values()].filter(rs => new Set(rs.map(r => r.artist)).size > 1 && !coverIgnored(cleanTitle(rs[0].title))).map(rs => {
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
    viz: V.stack([[ex, "hsl(var(--h),80%,98%)", "Explícitas"], [MT.length - ex, "hsl(var(--h),93%,24%)", "Sem palavrão"]], MT.length),
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
    viz: V.stack([[c.album, "hsl(var(--h),65%,52%)", "Álbum"], [c.single, "hsl(var(--h),60%,72%)", "Single/EP"], [c.compilation, "hsl(var(--h),93%,24%)", "Coletânea"]], M.length),
    kick: [pc0(c.single, M.length), "das faixas vieram de singles ou EPs"]};
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
    viz: V.mbars(perCh, CHI.map((_, i) => `${i + 1}`), `faixas de ${up.g} por parte da playlist`),
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
    if (lastCh) pl.push([`Mais presente no final`, lastCh.top[0], `${lastCh.top[1]} de ${lastCh.seg.length} adições`]);
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
      <div class="cn">${c.i + 1}</div><div class="ct">${esc(c.name)}</div><div class="cr">#${c.seg[0].n} → #${c.seg[c.seg.length - 1].n}</div>
      <div class="cw"><b>${esc(c.top[0])}</b>${c.top[1]} de ${c.seg.length} faixas${c.g[1] ? ` · depois ${esc(c.g[1][0])} (${c.g[1][1]})` : ""}</div>
      <div class="cs"><span><b>${c.arts}</b> artistas</span><span><b>${c.fresh}</b> novos</span>${isNaN(c.yr) ? "" : `<span>lanç. mediano <b>${Math.round(c.yr)}</b></span>`}</div></div>`).join("");
  document.querySelectorAll(".chap").forEach(el => bindTip(el, () => {
    const c = CHI[+el.dataset.i];
    return `<div class="eyebrow">Parte ${c.i + 1} · #${c.seg[0].n} a #${c.seg[c.seg.length - 1].n}</div><div class="t">${esc(c.name)}</div>
      <div class="k"><span>Tempo adicionado</span><b>${fmtLong(sum(c.seg, r => r.sec))}</b></div><hr>
      <div class="eyebrow">Quem mais entrou</div>${sbars(c.g.slice(0, 4).map(([a, n]) => [a, `${n} · ${pc0(n, c.seg.length)}`, n / c.seg.length]))}`;
  }));
  const HEAT_OPTS = [6, 8, 10, 12, 16, 20].filter(n => n <= NN);
  const heatColKey = "catalogo-musical:heat-cols";
  const _hcDef = NN >= 10 ? 10 : HEAT_OPTS[0];
  const _hcSaved = (() => { try { return +localStorage.getItem(heatColKey) || 0; } catch(e){ return 0; } })();
  let heatCols = HEAT_OPTS.includes(_hcSaved) ? _hcSaved : (HEAT_OPTS.includes(_hcDef) ? _hcDef : HEAT_OPTS[HEAT_OPTS.length - 1]);
  const colsRow = $("#heat-cols");
  colsRow.innerHTML = HEAT_OPTS.map(n => `<button type="button" data-n="${n}" aria-pressed="${n === heatCols}">${n}</button>`).join("");

  function renderHeat(){
    const BL = blocks(heatCols);
    const top = IS.art.slice(0, 10).map(a => a.k);
    const grid = top.map(a => BL.map(seg => seg.filter(r => hasBand(r, a))));
    const mx = Math.max(1, ...grid.flat().map(x => x.length));
    let html = "";
    top.forEach((a, ai) => {
      html += `<div class="hn">${esc(a)}</div>`;
      grid[ai].forEach((rs, bi) => { const k = rs.length / mx; const bg = rs.length ? `hsla(var(--h), 70%, ${18 + 50 * k}%, ${.35 + .65 * k})` : "hsla(var(--h),60%,67%,.04)";
        html += `<div class="hc" data-a="${ai}" data-b="${bi}" data-bg="${bg}" style="background:hsla(var(--h),60%,67%,.04);color:${k > .55 ? "hsl(var(--h),90%,8%)" : "var(--ink)"}">${rs.length || ""}</div>`; });
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
    requestAnimationFrame(() => heat.querySelectorAll(".hc").forEach((el, k) => setTimeout(() => el.style.background = el.dataset.bg, k * 6)));
  }
  renderHeat();
  colsRow.addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    heatCols = +b.dataset.n;
    try { localStorage.setItem(heatColKey, heatCols); } catch(e2){}
    colsRow.querySelectorAll("button").forEach(btn => btn.setAttribute("aria-pressed", btn.dataset.n === String(heatCols)));
    renderHeat();
  });
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
    if (i % 2) svg += `<rect x="${xa}" y="${Tp - 16}" width="${xb - xa}" height="${H - Tp - Bt + 16}" fill="hsla(var(--h),60%,67%,.04)" rx="6"/>`;
    svg += `<text x="${(xa + xb) / 2}" y="${Tp - 6}" text-anchor="middle">${i + 1}</text>`; });
  const step = (y1 - y0) > 60 ? 20 : 10;
  for (let y = y0; y <= y1; y += step) svg += `<line x1="${L}" x2="${W - R}" y1="${Y(y)}" y2="${Y(y)}" stroke="hsla(var(--h),60%,67%,.07)" stroke-dasharray="2 4"/><text x="${L - 8}" y="${Y(y) + 3}" text-anchor="end">${y}</text>`;
  const ticks = [1, Math.round(NN / 4), Math.round(NN / 2), Math.round(NN * 3 / 4), NN];
  ticks.forEach((n, i, arr) => svg += `<text x="${X(n)}" y="${H - 6}" text-anchor="${i === 0 ? "start" : i === arr.length - 1 ? "end" : "middle"}">#${n}</text>`);
  const pivot = IS.dec.length > 1 ? IS.dec[Math.floor(IS.dec.length / 2)].d : 2000;
  pts.forEach(t => svg += `<circle cx="${X(t.n)}" cy="${Y(t.year)}" r="3" fill="${t.year < pivot ? "hsl(var(--h),60%,64%)" : "hsl(var(--h),82%,38%)"}" opacity=".55"/>`);
  const win = Math.max(5, Math.min(41, Math.floor(pts.length / 8) | 1));
  const med = pts.map((t, i) => { const w = pts.slice(Math.max(0, i - (win >> 1)), i + (win >> 1) + 1).map(x => x.year); return [X(t.n), Y(median(w))]; });
  svg += `<path d="M${med.map(p => p.map(v => v.toFixed(1)).join(",")).join("L")}" fill="none" stroke="hsl(var(--h),80%,98%)" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" style="filter:drop-shadow(0 0 6px hsla(var(--h),75%,82%,.6))"/>`;
  svg += `<circle id="sc-hot" r="6" fill="none" stroke="hsl(var(--h),80%,98%)" stroke-width="2" opacity="0"/></svg>`;
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
    <defs><linearGradient id="dg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="hsla(var(--h),84%,40%,.35)"/><stop offset="1" stop-color="hsla(var(--h),84%,40%,0)"/></linearGradient></defs>
    <path d="M0,${H}L${P}L${W},${H}Z" fill="url(#dg)"/><path d="M${P}" fill="none" stroke="hsl(var(--h),60%,64%)" stroke-width="2" vector-effect="non-scaling-stroke"/>
    <line x1="${half / Math.max(1, n - 1) * W}" x2="${half / Math.max(1, n - 1) * W}" y1="0" y2="${H}" stroke="hsla(var(--h),80%,98%,.5)" stroke-dasharray="3 3" vector-effect="non-scaling-stroke"/></svg>
    <div style="display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap;font-size:11px;color:var(--ink-3);margin-top:6px"><span>artistas acumulados</span><span>metade em #${BY_PLAYLIST[half].n}</span><span>${mx} no total</span></div>`;
  el.style.display = "flex"; el.style.flexDirection = "column"; el.style.flex = "1";
}
function renderNote(){
  const nc = chapCount(NN); $("#ins-note").textContent = `${IS.journey ? `Ordem de entrada = coluna "número" da lista (#1 é a mais antiga na playlist). Partes = ${nc} blocos de ~${Math.round(NN / nc)} adições. ` : ""}Cada faixa conta uma vez para o artista exatamente como está escrito na lista. Índice de concentração = soma dos quadrados das participações (HHI). Os textos desta aba são gerados por regras a partir dos dados atuais e mudam quando a lista muda.`;
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
  dispatchEvent(new Event("fx:refresh"));
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
  sync: '<svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true"><path d="M13.5 6.5A5.5 5.5 0 0 0 3.3 4.6M2.5 9.5a5.5 5.5 0 0 0 10.2 1.9M3 2v3h3M13 14v-3h-3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>',
  palette: '<svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.5a6.5 6.5 0 1 0 4.4 11.4c.6-.5.5-1.4-.2-1.7a1 1 0 0 1 .8-1.8h.8c.7 0 1.2-.6 1.2-1.4A6.5 6.5 0 0 0 8 1.5z" stroke="currentColor" stroke-width="1.3" fill="none"/><circle cx="5.5" cy="5.5" r=".95" fill="currentColor"/><circle cx="8" cy="4" r=".95" fill="currentColor"/><circle cx="10.5" cy="5.5" r=".95" fill="currentColor"/><circle cx="5" cy="9.5" r=".95" fill="currentColor"/></svg>',
  reset: '<svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8a5 5 0 1 0 .8-2.7M3 3.5V6h2.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>'
};
const pad2 = n => String(n).padStart(2, "0");
const durTxt = s => !s ? "" : `${Math.floor(s / 60)}:${pad2(s % 60)}`;
const today = () => { const d = new Date(); return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`; };
const currentRows = () => BY_PLAYLIST.map(t => { const r = [t.n, t.title, t.artistRaw, t.albumRaw === NI ? "" : t.albumRaw, t.sec, t.dateRaw]; if (t.m){ const {p, ...rest} = t.m; r.push(rest); } return r; });

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
// coluna extra que a própria exportação em texto grava: os dados do Spotify em JSON (explícita, tipo…)
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

/* ---------- login com Spotify (Authorization Code + PKCE): controle de acesso a links de playlist ---------- */
const SPOTIFY_OAUTH_KEY = "catalogo-musical:spotify-oauth";
const SPOTIFY_PKCE_KEY = "catalogo-musical:spotify-pkce";
const SPOTIFY_PENDING_KEY = "catalogo-musical:spotify-pending-import";
function spotifyRedirectUri(){ return location.origin + location.pathname; }

function isAllowedSpotifyUser(name){
  if (!name || typeof name !== "string") return false;
  // normaliza removendo acentos, espaços extras e deixando em minúsculas
  const norm = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/\s+/g, " ");
  return ["crowd goes wild", "juia", "arthur ambrosio", "luis.tv"].includes(norm);
}
function currentSpotifyUser(){
  const oauth = loadSpotifyOAuth();
  if (oauth && oauth.profile && (oauth.profile.name || oauth.profile.id)) return oauth.profile.name || oauth.profile.id;
  return spotifyUserDisplay;
}

function b64url(buf){ return btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); }
function spotifyRandToken(len = 64){ const a = new Uint8Array(len); crypto.getRandomValues(a); return b64url(a); }
async function spotifyPkceChallenge(verifier){ return b64url(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(verifier))); }
function loadSpotifyOAuth(){ try { return JSON.parse(localStorage.getItem(SPOTIFY_OAUTH_KEY) || "null"); } catch (e) { return null; } }
function saveSpotifyOAuth(j, clientId){
  const prev = loadSpotifyOAuth();
  const obj = {access_token: j.access_token, refresh_token: j.refresh_token, expires_at: Date.now() + ((j.expires_in || 3600) * 1000) - 30000, client_id: clientId, profile: (prev && prev.profile) || null};
  try { localStorage.setItem(SPOTIFY_OAUTH_KEY, JSON.stringify(obj)); } catch (e) {}
  return obj;
}
function saveSpotifyProfile(profile){
  const oauth = loadSpotifyOAuth();
  if (!oauth) return;
  oauth.profile = {name: profile.display_name || profile.id || "", avatar: (profile.images && profile.images[0] && profile.images[0].url) || ""};
  try { localStorage.setItem(SPOTIFY_OAUTH_KEY, JSON.stringify(oauth)); } catch (e) {}
}
function clearSpotifyOAuth(){ try { localStorage.removeItem(SPOTIFY_OAUTH_KEY); } catch (e) {} }
async function spotifyFetchProfile(token){
  let r; try { r = await fetch("https://api.spotify.com/v1/me", {headers: {Authorization: `Bearer ${token}`}}); } catch (e) { return null; }
  return r.ok ? r.json() : null;
}
const SPOTIFY_GLYPH = `<svg width="16" height="16" viewBox="0 0 24 24" fill="#1DB954" style="flex:none"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.308c-.217.356-.677.469-1.033.252-2.829-1.729-6.39-2.12-10.584-1.162-.407.094-.813-.158-.906-.566-.094-.407.158-.813.566-.906 4.593-1.05 8.528-.604 11.705 1.349.356.217.469.677.252 1.033zm1.472-3.272c-.273.444-.855.586-1.299.313-3.238-1.99-8.175-2.566-12.003-1.404-.499.152-1.025-.133-1.176-.631-.152-.499.133-1.025.631-1.176 4.38-1.33 9.814-.687 13.534 1.644.443.273.586.855.313 1.298zm.126-3.41c-3.882-2.305-10.292-2.518-14.004-1.391-.595.181-1.223-.157-1.404-.752-.181-.595.157-1.223.752-1.404 4.269-1.296 11.344-1.045 15.82 1.613.535.317.709 1.012.392 1.547-.317.535-1.012.709-1.547.392z"/></svg>`;
function spotifyChipHtml(profile){
  const avatar = profile.avatar ? `<img src="${esc(profile.avatar)}" alt="" style="width:22px;height:22px;border-radius:50%;object-fit:cover;flex:none">`
    : `<span style="width:22px;height:22px;border-radius:50%;background:var(--mint);color:hsl(var(--h),50%,5%);display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:11px;flex:none">${esc((profile.name || "?").slice(0, 1).toUpperCase())}</span>`;
  return `${SPOTIFY_GLYPH}${avatar}<span class="sp-name">${esc(profile.name || "Conta Spotify")}</span><button type="button" class="sp-logout-x" title="Sair da conta Spotify" aria-label="Sair da conta Spotify">${ICON.x}</button>`;
}
function renderSpAccountBar(){
  const bar = $("#sp-account-bar");
  if (!bar) return;
  const oauth = loadSpotifyOAuth();
  if (!oauth || !oauth.profile){ bar.style.display = "none"; bar.innerHTML = ""; return; }
  bar.innerHTML = spotifyChipHtml(oauth.profile);
  bar.style.display = "";
  const btn = bar.querySelector(".sp-logout-x");
  if (btn) btn.addEventListener("click", () => {
    const name = (loadSpotifyOAuth()?.profile?.name) || "sua conta Spotify";
    const body = document.createElement("div");
    body.innerHTML = `<div class="confirm"><p>Sair de <strong>${esc(name)}</strong>?</p><p class="muted">Você não perderá os dados da playlist, só a conexão com o Spotify.</p></div>`;
    const foot = document.createElement("div"); foot.className = "mfrow";
    foot.innerHTML = `<span class="sp"></span><button class="gbtn" type="button" data-c>Cancelar</button><button class="pbtn nm-red" type="button" data-ok>Sair</button>`;
    const md = openModal({title: "Sair do Spotify", body, foot, size: "sm"});
    foot.querySelector("[data-c]").onclick = () => md.close();
    foot.querySelector("[data-ok]").onclick = () => { md.close(); clearSpotifyOAuth(); spotifyUserDisplay = null; renderSpAccountBar(); toast("Você saiu da conta Spotify."); };
  });
}
async function spotifyLogin(clientId, pendingText, pendingMode){
  const verifier = spotifyRandToken(), state = spotifyRandToken(16);
  const challenge = await spotifyPkceChallenge(verifier);
  try { sessionStorage.setItem(SPOTIFY_PKCE_KEY, JSON.stringify({verifier, state, clientId})); } catch (e) {}
  try { sessionStorage.setItem(SPOTIFY_PENDING_KEY, JSON.stringify({text: pendingText || "", mode: pendingMode || "add"})); } catch (e) {}
  const p = new URLSearchParams({client_id: clientId, response_type: "code", redirect_uri: spotifyRedirectUri(), code_challenge_method: "S256", code_challenge: challenge, scope: "playlist-read-private playlist-read-collaborative user-read-private", state});
  location.href = "https://accounts.spotify.com/authorize?" + p.toString();
}
async function spotifyExchangeCode(code, verifier, clientId){
  const body = new URLSearchParams({grant_type: "authorization_code", code, redirect_uri: spotifyRedirectUri(), client_id: clientId, code_verifier: verifier});
  let r; try { r = await fetch("https://accounts.spotify.com/api/token", {method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded"}, body}); }
  catch (e) { throw new Error("Não foi possível conectar ao Spotify para concluir o login."); }
  const j = await r.json();
  if (!r.ok || !j.access_token) throw new Error(j.error_description || "Falha ao concluir o login com o Spotify.");
  return j;
}
async function spotifyRefreshToken(oauth){
  const body = new URLSearchParams({grant_type: "refresh_token", refresh_token: oauth.refresh_token, client_id: oauth.client_id});
  let r; try { r = await fetch("https://accounts.spotify.com/api/token", {method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded"}, body}); }
  catch (e) { throw new Error("Não foi possível renovar o login do Spotify."); }
  const j = await r.json();
  if (!r.ok || !j.access_token){ clearSpotifyOAuth(); throw new Error("Sua sessão do Spotify expirou; entre novamente."); }
  if (!j.refresh_token) j.refresh_token = oauth.refresh_token;
  return saveSpotifyOAuth(j, oauth.client_id);
}
async function spotifyUserToken(){
  let oauth = loadSpotifyOAuth();
  if (!oauth) return null;
  if (Date.now() >= oauth.expires_at) oauth = await spotifyRefreshToken(oauth);
  return oauth.access_token;
}
async function handleSpotifyRedirectAndResume(){
  const url = new URL(location.href);
  const code = url.searchParams.get("code"), state = url.searchParams.get("state"), err = url.searchParams.get("error");
  if (!code && !err) return;
  let pkce = null; try { pkce = JSON.parse(sessionStorage.getItem(SPOTIFY_PKCE_KEY) || "null"); } catch (e) {}
  try { sessionStorage.removeItem(SPOTIFY_PKCE_KEY); } catch (e) {}
  url.searchParams.delete("code"); url.searchParams.delete("state"); url.searchParams.delete("error");
  history.replaceState({}, "", url.pathname + (url.searchParams.toString() ? "?" + url.searchParams.toString() : "") + url.hash);
  let pending = null; try { pending = JSON.parse(sessionStorage.getItem(SPOTIFY_PENDING_KEY) || "null"); } catch (e) {}
  try { sessionStorage.removeItem(SPOTIFY_PENDING_KEY); } catch (e) {}
  if (err){
    toast(`Login com o Spotify cancelado ou recusado (${err}).`);
    if (pending) openImport(pending.text);
    return;
  }
  if (!pkce || pkce.state !== state){
    toast("Não foi possível concluir o login do Spotify (sessão expirada); tente novamente.");
    if (pending) openImport(pending.text);
    return;
  }
  try {
    const j = await spotifyExchangeCode(code, pkce.verifier, pkce.clientId);
    saveSpotifyOAuth(j, pkce.clientId);
    const prof = await spotifyFetchProfile(j.access_token);
    if (prof) saveSpotifyProfile(prof);
    const dispName = (prof && (prof.display_name || prof.id)) || "";
    spotifyUserDisplay = dispName;
    renderSpAccountBar();
    if (isAllowedSpotifyUser(dispName) || (prof && isAllowedSpotifyUser(prof.id))){
      toast(`Login concluído! Bem-vindo(a), ${dispName} ✓ (acesso a links de playlist liberado)`);
    } else {
      toast(`Conectado como ${dispName}. Sua conta não tem permissão para links de playlist.`);
    }
  } catch (e) {
    toast(e.message || "Falha ao concluir login com o Spotify.");
    if (pending) openImport(pending.text);
    return;
  }
  openImport(pending ? pending.text : null);
}

function openPlaylistAuthModal(pendingText = "", pendingMode = "add"){
  const creds = loadSpotifyCreds();
  let clientId = creds.id || "";
  const body = document.createElement("div");
  body.innerHTML = `<div class="confirm">
    <p style="margin:0 0 8px;font-size:14px;font-weight:700;color:var(--ink)">Apenas alguns usuários são habilitados a usar links de playlist.</p>
    <p class="muted" style="margin:0 0 16px">Faça login com a sua conta do Spotify para verificar se você está apto:</p>
    <div style="margin:16px 0">
      <label for="pl-auth-cid" style="display:block;font-size:12px;font-weight:600;margin-bottom:6px">Client ID do seu app Spotify</label>
      <input type="text" id="pl-auth-cid" value="${esc(clientId)}" placeholder="Ex: 1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d" autocomplete="off" spellcheck="false" style="width:100%;box-sizing:border-box">
      <div style="margin-top:6px;display:flex;justify-content:space-between;align-items:center">
        <small class="muted" id="pl-auth-cid-st"></small>
        <button type="button" class="lnk" id="pl-auth-help" style="font-size:12px">Não sei meu Client ID</button>
      </div>
    </div>
    <div style="background:rgba(255,255,255,0.04);border-radius:8px;padding:10px 12px;margin:12px 0;font-size:12px" class="muted">
      <strong>Redirect URI cadastrada no app:</strong><br>
      <code style="word-break:break-all">${esc(spotifyRedirectUri())}</code>
      <button type="button" class="lnk" id="pl-auth-copy-uri" style="margin-left:8px;font-size:12px">Copiar</button>
    </div>
    <p class="sp-status" id="pl-auth-status" style="margin:8px 0 0"></p>
  </div>`;
  const foot = document.createElement("div"); foot.className = "mfrow";
  foot.innerHTML = `<button class="gbtn" type="button" id="pl-auth-manual">Usar método manual</button><span class="sp"></span><button class="pbtn" type="button" id="pl-auth-go">Entrar com Spotify</button>`;
  const md = openModal({title: "Acesso a links de playlist", body, foot, size: "sm"});

  body.querySelector("#pl-auth-copy-uri").onclick = () => copyText(spotifyRedirectUri());
  body.querySelector("#pl-auth-help").onclick = () => openSpotifyAppHelp();
  foot.querySelector("#pl-auth-manual").onclick = () => { md.close(); openPlaylistLinkHelp(); };
  foot.querySelector("#pl-auth-go").onclick = () => {
    const cid = body.querySelector("#pl-auth-cid").value.trim();
    const st = body.querySelector("#pl-auth-status");
    st.classList.remove("err");
    if (!cid){ st.classList.add("err"); st.textContent = "Informe o Client ID do seu app no Spotify."; return; }
    if (!SPOTIFY_ID_RE.test(cid)){ st.classList.add("err"); st.textContent = "O Client ID deve ter 32 letras/números."; return; }
    saveSpotifyCreds(cid, creds.secret || "");
    md.close();
    spotifyLogin(cid, pendingText, pendingMode);
  };
}
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
   */
function spotifyMeta(t, album){
  const m = {x: t.explicit ? 1 : 0};
  if (album && album.album_type) m.ty = album.album_type;
  if (t.track_number) m.tn = t.track_number;
  if (album && album.total_tracks) m.tt = album.total_tracks;
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
async function spotifyFetchPlaylistTracks(playlistIds, token, onProgress, onWait, ctl){
  const rows = [], warnings = [];
  let backoff = 0, attempt = 0;
  for (let pi = 0; pi < playlistIds.length; pi++){
    const pid = playlistIds[pi];
    const plRows = [];
    let offset = 0, total = Infinity;
    while (offset < total){
      let r;
      for (;;){
        if (ctl) ctl.gate();
        try {
          r = await fetch(`https://api.spotify.com/v1/playlists/${pid}/items?limit=100&offset=${offset}&fields=total,items(added_at,item(id,name,artists(id,name),album(name,release_date,images,album_type,total_tracks),duration_ms,is_local,explicit,track_number),track(id,name,artists(id,name),album(name,release_date,images,album_type,total_tracks),duration_ms,is_local,explicit,track_number))`, {headers: {Authorization: `Bearer ${token}`}});
          if (r.status === 404){
            r = await fetch(`https://api.spotify.com/v1/playlists/${pid}/tracks?limit=100&offset=${offset}&fields=total,items(added_at,track(id,name,artists(id,name),album(name,release_date,images,album_type,total_tracks),duration_ms,is_local,explicit,track_number))`, {headers: {Authorization: `Bearer ${token}`}});
          }
        } catch (e) { throw new Error("Não foi possível buscar a playlist no Spotify."); }
        if (r.status === 429){
          attempt++;
          if (attempt > 40) throw new Error("O Spotify manteve o limite de requisições por tempo demais seguidas; tente de novo em alguns minutos.");
          const headerWait = parseInt(r.headers.get("Retry-After") || "", 10);
          backoff = Math.min(90, Math.max(Number.isFinite(headerWait) && headerWait > 0 ? headerWait : 2, backoff ? backoff * 1.7 : 2));
          const wait = Math.max(1, Math.round(backoff));
          onWait && await onWait(wait, rows.length + plRows.length, total === Infinity ? rows.length + plRows.length : total, attempt);
          continue;
        }
        backoff = Math.max(0, backoff - 3); attempt = 0;
        if (r.status === 404) throw new Error("Playlist não encontrada (verifique o link).");
        if (r.status === 403) throw new Error("Spotify recusou o acesso à playlist (HTTP 403). Confira se a conta tem acesso a ela.");
        if (!r.ok) throw new Error(`Falha ao buscar a playlist no Spotify (HTTP ${r.status}).`);
        break;
      }
      const j = await r.json();
      total = typeof j.total === "number" ? j.total : offset + (j.items || []).length;
      for (const it of (j.items || [])){
        const t = it.item || it.track;
        if (!t || t.is_local){ warnings.push({line: rows.length + plRows.length + warnings.length + 1, msg: "faixa local ou indisponível ignorada"}); continue; }
        plRows.push({
          n: null,
          id: t.id || "",
          title: t.name,
          artist: (t.artists || []).map(a => a.name).join(", "),
          album: t.album ? t.album.name : "",
          sec: Math.round(t.duration_ms / 1000),
          date: spotifyDate(t.album),
          cover: spotifyCover(t.album && t.album.images),
          meta: spotifyMeta(t, t.album),
          addedAt: it.added_at || null
        });
      }
      offset += 100;
      onProgress && onProgress(Math.min(offset, total), total, pi + 1, playlistIds.length);
    }
    plRows.sort((a, b) => {
      if (a.addedAt && b.addedAt) return a.addedAt < b.addedAt ? -1 : a.addedAt > b.addedAt ? 1 : 0;
      if (a.addedAt) return -1;
      if (b.addedAt) return 1;
      return 0;
    });
    const noDate = plRows.filter(r => !r.addedAt).length;
    if (noDate) warnings.push({line: rows.length + 1, msg: `${noDate} faixa${noDate > 1 ? "s" : ""} dessa playlist sem data de adição registrada pelo Spotify; foram colocadas no fim`});
    plRows.forEach(r => rows.push(r));
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
  const redirect = spotifyRedirectUri();
  const vals = {name: "Dashbeat", desc: "Busca dados das faixas para o meu painel de playlist", redirect};
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
        <li>Escolha <strong>"Adicionado recentemente"</strong> e clique de novo nele até a <strong>setinha ficar para cima</strong>.</li>
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
async function spotifyRunFetch({token, ids, plIds = [], albumIds, status, btn, known = 0, ctl}){
  status.classList.remove("err");
  btn.disabled = true;
  status.textContent = plIds.length ? `Buscando playlist${plIds.length > 1 ? "s" : ""}…` : albumIds.length ? `Buscando álbum${albumIds.length > 1 ? "ns" : ""}…` : `Buscando ${faixas(ids.length)}…`;
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
    if (plIds.length){
      const base = results.reduce((s, r) => s + r.rows.length + r.warnings.length, 0);
      results.push(await spotifyFetchPlaylistTracks(plIds, token, (d, t, pi, pn) => {
        done = base + d; total = base + t;
        etaEndTs = performance.now() + ((performance.now() - t0) / Math.max(done, 1)) * (total - done);
        status.textContent = `Buscando faixa ${done} de ${total}${pn > 1 ? ` (playlist ${pi} de ${pn})` : ""}…${etaEndTs != null ? ` cerca de ${fmtEta(etaEndTs - performance.now())} restante` : ""}`;
      }, onWait, ctl));
    }
    const stoppedPl = results.length && results[results.length - 1].partial;
    if (albumIds.length && !stoppedPl){
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
    const all = splitArtistsAll(artist), idx = countedIdx(all), aid = (r.meta && r.meta.aid) || [];
    idx.forEach(i => { const p = all[i].toLowerCase(); if (!hasGenre(p) && !m.has(p)) m.set(p, {key: p, name: all[i], id: all.length === aid.length ? aid[i] : null}); });
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
/* música que já tem os dados do Spotify mas não guardou o ID da faixa (importada antes de o site guardar o link):
   o ID é o que faz um link colado bater com ela depois (ex.: "Consertar ordem da playlist") */
const needsLink = t => !!t.m && t.m.x !== undefined && !t.m.id && t.artist !== NI && !!t.title;
const needsUpdate = t => (!t.m && t.artist !== NI && !!t.title) || needsLink(t);
// ID já conhecido pelo cache de faixas (título + artista principal): recupera sem gastar busca
function cachedIdFor(t, idx){ return idx.get(ownKey(t.title, t.artist)) || null; }
function cacheKeyIndex(){
  const idx = new Map();
  for (const [id, c] of Object.entries(loadTrackCache())){ const k = ownKey(c.title, c.artist); if (!idx.has(k)) idx.set(k, id); }
  return idx;
}
function openDataUpdate(){
  const tracks = BY_PLAYLIST.filter(needsUpdate);
  // as que já têm dados e o cache sabe o ID: só recuperar o link (grátis). O resto vai pro Spotify: pelo ID quando existe, senão pelo nome
  const keyIdx = cacheKeyIndex(), free = new Map();
  for (const t of tracks) if (needsLink(t)){ const id = cachedIdFor(t, keyIdx); if (id) free.set(t.n, id); }
  const todo = tracks.filter(t => !free.has(t.n));
  const genreArts = () => genreTargets(BY_PLAYLIST.map(t => ({artist: t.artist, meta: t.m})));
  const ga = genreArts().length;
  if (!tracks.length && !ga){ toast("Todas as músicas já estão com os dados completos."); return; }
  let useGenre = genreOn() && ga > 0;
  const incomplete = BY_PLAYLIST.filter(t => !t.m || !t.gs);
  const body = document.createElement("div");
  const foot = document.createElement("div"); foot.className = "mfrow";
  foot.innerHTML = `<span class="sp"></span><button class="gbtn" type="button" data-c>Cancelar</button><button class="pbtn" type="button" data-go autofocus>Atualizar dados</button>`;
  const md = openModal({title: "Atualizar dados das músicas", body, foot, size: "sm"});
  const total = () => todo.length + (useGenre ? ga : 0);
  const drawConfirm = () => {
    body.innerHTML = `<div class="confirm">
      <p>Vamos buscar no Spotify o que falta nas suas músicas (explícita, single ou álbum${ga ? " e gênero" : ""}).</p>
      <div class="du-rows">
        ${todo.length ? `<div><b>${nf(todo.length)}</b><span>música${todo.length > 1 ? "s" : ""} sem dados ou sem o link guardado · <strong>1 busca por música</strong> (pelo link quando existe, senão pelo nome)</span></div>` : ""}
        ${free.size ? `<div><b>${nf(free.size)}</b><span>música${free.size > 1 ? "s" : ""} com o link recuperado do que já foi buscado · <strong>sem gastar busca</strong></span></div>` : ""}
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
    let stop = false, found = 0, nf_ = 0, gDone = 0, limited = false, healed = 0;
    const metaByN = new Map();
    body.innerHTML = `<div class="confirm"><p id="du-st">Conectando ao Spotify…</p><p class="muted" id="du-eta" style="margin-top:4px;min-height:1.4em"></p><div class="ht" style="margin-top:12px"><i id="du-bar" style="width:0%"></i></div><p class="muted" style="margin-top:12px">Pode parar quando quiser: o que já veio fica salvo.</p></div>`;
    foot.innerHTML = `<span class="sp"></span><button class="gbtn" type="button" data-stop>Parar e salvar</button>`;
    foot.querySelector("[data-stop]").onclick = () => { stop = true; foot.querySelector("[data-stop]").disabled = true; foot.querySelector("[data-stop]").textContent = "Parando…"; };
    const st = body.querySelector("#du-st"), bar = body.querySelector("#du-bar");
    const all = Math.max(1, total()), t0 = performance.now();
    // recupera de graça o ID das que o cache já conhece (os dados delas ficam como estão)
    for (const t of tracks) if (free.has(t.n)){ const meta = {...t.m, id: free.get(t.n)}; metaByN.set(t.n, meta); t.m = meta; healed++; }
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
      const token = (todo.length || useGenre) ? await spotifyToken(id, secret) : null;
      for (let i = 0; i < todo.length && !stop; i++){
        const t = todo[i];
        show(`Buscando música ${i + 1} de ${todo.length}: ${t.title}`, i);
        let it = null;
        const wait = (_, att) => pause(`música ${i + 1} de ${todo.length}`, att, i);
        if (t.m && t.m.id){
          // 1º o link (ID da faixa): vem exatamente a música certa, sem adivinhar
          it = await spotifyGetJSON(`https://api.spotify.com/v1/tracks/${t.m.id}`, token, wait);
        } else {
          // sem link guardado: procura pelo nome e já guarda o ID da que achar
          const q = `track:${cleanTitle(t.title)} artist:${splitArtistsRaw(t.artist)[0]}`;
          const j = await spotifyGetJSON(`https://api.spotify.com/v1/search?type=track&limit=5&q=${encodeURIComponent(q)}`, token, wait);
          it = pickTrack(j && j.tracks && j.tracks.items, t.title, t.artist);
        }
        if (it){
          const nm = spotifyMeta(it, it.album);
          const meta = hasMeta(t) ? {...nm, ...t.m, id: nm.id || t.m.id} : nm;   // quem já tinha dados mantém os seus e só ganha o link
          metaByN.set(t.n, meta); t.m = meta; found++;
          const cv = spotifyCover(it.album && it.album.images);
          if (cv && it.album && normC(it.album.name || "") === normC(t.album)) rememberSpotifyCovers([{artist: t.artist, album: t.album, cover: cv}]);
        } else if (!hasMeta(t)){ metaByN.set(t.n, {nf: 1}); t.m = {nf: 1}; nf_++; }
        else nf_++;   // já tinha dados: continua como está, só não achou o link
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
    if (found) parts.push(`${faixas(found)} com dados novos ou link guardado`);
    if (healed) parts.push(`${faixas(healed)} com o link recuperado sem gastar busca`);
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
  const isAllowedUser = isAllowedSpotifyUser(currentSpotifyUser());
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
  let fetchCtl = null, pendingResume = false, lastStop = null, preNeed = null;
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
      if (spOn){ go.disabled = false; go.textContent = preNeed === 0 ? "Conferir com a playlist" : "Buscar dados no Spotify"; go.classList.remove("danger"); }
      else if (parsed && parsed.playlistAuthNeeded){ go.disabled = false; go.textContent = "Entrar com Spotify para verificar"; go.classList.remove("danger"); }
      else { go.disabled = true; go.textContent = mode === "add" ? "Adicionar" : "Substituir playlist"; go.classList.toggle("danger", mode === "replace"); }
      q("#im-prev").innerHTML = parsed && parsed.playlistAuthNeeded
        ? `<div class="pv info" style="text-align:left;border-left:4px solid var(--mint);padding:14px;background:hsla(var(--h),84%,40%,.08);border-radius:8px">
            <div style="font-weight:700;font-size:14px;margin-bottom:6px;color:var(--ink)">Apenas alguns usuários são habilitados a usar links de playlist.</div>
            <p style="margin:0 0 12px;font-size:13px;color:var(--ink-2)">Faça login com a sua conta do Spotify para verificar se você está apto:</p>
            <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">
              <button type="button" class="pbtn" id="im-pl-login-btn">Entrar com Spotify</button>
              <button type="button" class="gbtn" id="im-pl-manual-btn">Como copiar pelo PC</button>
            </div>
          </div>`
        : parsed && parsed.playlistBlocked
        ? `<div class="pv bad" style="text-align:left">
            <div>${esc(parsed.error)}</div>
            <div style="margin-top:10px;display:flex;gap:10px;flex-wrap:wrap">
              ${parsed.notAllowed ? `<button type="button" class="pbtn" id="im-pl-switch-btn">Trocar conta Spotify</button>` : ""}
              <button type="button" class="gbtn" id="im-pl-help">Ver método manual</button>
            </div>
          </div>`
        : parsed && parsed.error
        ? `<div class="pv bad">${esc(parsed.error)}</div>`
        : "";
      if (parsed && parsed.playlistAuthNeeded){
        const lb = q("#im-pl-login-btn"), mb = q("#im-pl-manual-btn");
        lb && lb.addEventListener("click", () => openPlaylistAuthModal(ta.value, mode));
        mb && mb.addEventListener("click", openPlaylistLinkHelp);
      }
      if (parsed && parsed.playlistBlocked){
        const b = q("#im-pl-help"), sb = q("#im-pl-switch-btn");
        b && b.addEventListener("click", openPlaylistLinkHelp);
        sb && sb.addEventListener("click", () => {
          clearSpotifyOAuth();
          renderSpAccountBar();
          openPlaylistAuthModal(ta.value, mode);
        });
      }
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
    const same = mode === "add" && hitIds.size > 0 && pairLinks(parsed.rows, q("#im-dup").checked).sameOrder;   // tudo já está na playlist, na mesma ordem
    go.textContent = mode === "add" ? (same ? "Conferir com a playlist" : hitIds.size ? `Reordenar${n ? ` e adicionar ${faixas(n)}` : ""}…` : `Adicionar ${faixas(n)}`) : `Substituir por ${faixas(n)}…`;
    q("#im-prev").innerHTML = `<div class="pv ok"><b>${faixas(parsed.rows.length)}</b> reconhecidas · ${arts} artistas${hitIds.size ? ` · <b>${hitIds.size}</b> já ${hitIds.size > 1 ? "estão" : "está"} na playlist e ${hitIds.size > 1 ? "serão reordenadas" : "será reordenada"} pela ordem dos links` : ""}${dup.length ? ` · <b>${dup.length}</b> já estão na playlist e serão ignoradas` : ""}${parsed.warnings.length ? ` · <span class="warn">${parsed.warnings.length} aviso${parsed.warnings.length > 1 ? "s" : ""}</span>` : ""}</div>
      ${parsed.warnings.length ? `<details class="warns"><summary>Ver avisos</summary><ul>${parsed.warnings.slice(0, 30).map(w => `<li>Linha ${w.line}: ${esc(w.msg)}</li>`).join("")}${parsed.warnings.length > 30 ? `<li>+ ${parsed.warnings.length - 30} avisos</li>` : ""}</ul></details>` : ""}
      ${dup.length ? `<details class="warns"><summary>Ver as ${dup.length} já existentes (ignoradas)</summary><ul>${dup.slice(0, 30).map(r => `<li>${esc(r.title)} — ${esc(r.artist || NI)}</li>`).join("")}${dup.length > 30 ? `<li>+ ${dup.length - 30} faixas</li>` : ""}</ul></details>` : ""}
      <p class="muted" style="margin:10px 0 4px">${dedupeOn && dup.length ? `Serão adicionadas (${faixas(fresh.length)}):` : "Faixas:"}</p>
      <div class="ptab"><table><thead><tr>${songHead(false)}</tr></thead><tbody>
      ${fresh.slice(0, 8).map(r => `<tr>${songCells(songView(r))}</tr>`).join("")}</tbody></table>
      ${fresh.length > 8 ? `<div class="more">+ ${fresh.length - 8} faixas</div>` : ""}</div>`;
  }
  function setSpotifyMode(on, n, an, ids, plIds = []){
    q("#sp-fields").style.display = on ? "" : "none";
    preNeed = null;
    if (!on) return;
    const parts = [];
    if (plIds && plIds.length) parts.push(`${plIds.length} playlist${plIds.length > 1 ? "s" : ""}`);
    if (an) parts.push(`${an} álbu${an > 1 ? "ns" : "m"}`);
    if (n) parts.push(faixas(n));
    const single = n === 1 && !an && !plIds.length;
    let known = "";
    if (ids && ids.length && !an && !plIds.length){
      const own = ownTracksById(), cache = loadTrackCache(), k = ids.filter(id => own[id] || cache[id]).length;
      preNeed = ids.length - k;
      known = ` <strong>${k}</strong> já ${k === 1 ? "é conhecida" : "são conhecidas"} (não ${k === 1 ? "gasta" : "gastam"} busca)${preNeed ? ` · <strong>${preNeed}</strong> ${preNeed === 1 ? "precisa" : "precisam"} ser buscada${preNeed > 1 ? "s" : ""} no Spotify` : " · nenhuma precisa de busca: é só conferir com a playlist"}.`;
    }
    const user = currentSpotifyUser();
    const userBadge = user && isAllowedSpotifyUser(user) ? ` · Conectado como <strong>${esc(user)}</strong> ✓ (usuário autorizado)` : "";
    q("#sp-detect-msg").innerHTML = `Detectei ${parts.join(" e ")} do Spotify nessa lista.${known}${userBadge}${single ? ` <button type="button" class="lnk" id="sp-whole-pl" style="padding:0;font:inherit;vertical-align:baseline">Quer adicionar a playlist inteira?</button>` : ""}`;
    if (single) q("#sp-whole-pl").addEventListener("click", openPlaylistLinkHelp);
  }
  const fromText = () => {
    const t = ta.value;
    if (!t.trim()){ parsed = null; setSpotifyMode(false); return update(); }
    const ids = parseSpotifyIds(t);
    const plIds = parseSpotifyPlaylistIds(t);
    const albIds = parseSpotifyAlbumIds(t);
    if (plIds.length){
      const oauth = loadSpotifyOAuth();
      const user = oauth && oauth.profile ? (oauth.profile.name || oauth.profile.id || "") : "";
      const allowed = user && (isAllowedSpotifyUser(user) || (oauth.profile.id && isAllowedSpotifyUser(oauth.profile.id)));
      if (!oauth || !oauth.profile){
        parsed = {rows: [], warnings: [], playlistAuthNeeded: true, error: "Apenas alguns usuários são habilitados a usar links de playlist. Faça login com a sua conta do Spotify para verificar se você está apto."};
        setSpotifyMode(false);
        return update();
      }
      if (!allowed){
        parsed = {rows: [], warnings: [], playlistBlocked: true, notAllowed: true, userName: user, error: `Conectado como "${user}". Apenas usuários autorizados têm acesso a links diretos de playlist.`};
        setSpotifyMode(false);
        return update();
      }
    }
    const lines = t.split(/\r?\n/).filter(l => l.trim());
    if ((ids.length || plIds.length || albIds.length) && (ids.length + plIds.length + albIds.length) / lines.length >= 0.5){ parsed = null; setSpotifyMode(true, ids.length, albIds.length, ids, plIds); return update(); }
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
    const ids = parseSpotifyIds(ta.value), albumIds = parseSpotifyAlbumIds(ta.value), plIds = parseSpotifyPlaylistIds(ta.value);
    const status = q("#sp-status"), btn = q("#im-go");
    status.classList.remove("err");
    if (!ids.length && !albumIds.length && !plIds.length){ status.classList.add("err"); status.textContent = "Nenhum link do Spotify reconhecido."; return; }
    const cache = {...ownTracksById(), ...loadTrackCache()}, toFetch = ids.filter(x => !cache[x]), known = ids.length - toFetch.length;
    let res = {rows: [], warnings: []};
    if (toFetch.length || albumIds.length || plIds.length){
      res = await fetchFromSpotify(id, secret, toFetch, albumIds, plIds, status, btn, known);
      if (lastStop === "suspend") return;
      if (!res){ parsed = null; update(); return; }
    }
    const fetchedSet = new Set(toFetch), got = new Map(res.rows.filter(r => fetchedSet.has(r.id)).map(r => [r.id, r]));
    const nonTrackRows = res.rows.filter(r => !fetchedSet.has(r.id));
    const trackRows = ids.map(x => cache[x] ? {n: null, id: x, ...cache[x]} : got.get(x)).filter(Boolean);
    parsed = {rows: [...nonTrackRows, ...trackRows], warnings: res.warnings};
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
  async function fetchFromSpotify(id, secret, ids, albumIds, plIds = [], status, btn, known = 0){
    let token = null;
    const oauth = loadSpotifyOAuth();
    if (oauth && oauth.profile){
      try { token = await spotifyUserToken(); } catch (e) {}
    }
    if (!token){
      if (plIds && plIds.length){
        openPlaylistAuthModal(ta.value, mode);
        return null;
      }
      token = await getToken(id, secret, status);
      if (!token) return null;
    }
    fetchCtl = makeFetchCtl(); syncFetchUI();
    const ctl = fetchCtl;
    try { return await spotifyRunFetch({token, ids, plIds, albumIds, status, btn, known, ctl}); }
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
      if (parsed && parsed.playlistAuthNeeded) return openPlaylistAuthModal(ta.value, mode);
      if (q("#sp-fields").style.display !== "none") return runCcFetch();
      return;
    }
    const toRow = (r, n) => r.meta ? [n, r.title, r.artist, r.album, r.sec, r.date, r.meta] : [n, r.title, r.artist, r.album, r.sec, r.date];
    if (mode === "add"){
      const skip = q("#im-dup").checked;
      const ordered = parsed.rows.every(r => r.n != null) ? [...parsed.rows].sort((a, b) => a.n - b.n) : parsed.rows;
      // links que já batem com músicas salvas (pelo ID, ou título + artista) não são adicionadas de novo: a música é reposicionada na ordem dos links
      const pr = pairLinks(ordered, skip), hit = pr.hit, missing = pr.onlyPlaylist;
      const seen = new Set(existing), fresh = [], dropped = new Set();
      for (const r of pr.onlyLinks){ const k = (r.title + "|" + (r.artist || NI)).toLowerCase(); if (skip && seen.has(k)){ dropped.add(r); continue; } seen.add(k); fresh.push(r); }
      const seq = pr.seq.filter(s => s.t || !dropped.has(s.r));
      if (pr.hasIds && !fresh.length && !missing.length && seq.every((s, i) => s.t && s.t.n === i + 1)){
        return infoModal("Nada a fazer: já está tudo na playlist", `<p>As <strong>${faixas(seq.length)}</strong> dos links já estão na playlist, <strong>na mesma ordem</strong>. Nenhuma busca foi gasta e nada foi alterado.</p>
          <p class="muted">Se achava que faltava alguma, confira se ela estava mesmo na lista que você copiou do Spotify.</p>`);
      }
      if (!fresh.length && !hit.size) return toast("Todas as faixas já estão na playlist.");
      const total = NN + fresh.length;
      const diff = hit.size ? `${dlist(fresh, "Só nos links (serão adicionadas)", lkRow)}${dlist(missing, "Estão na playlist mas NÃO vieram nos links", plRow)}
        ${missing.length ? `<label class="chk" style="margin-top:8px"><input type="checkbox" id="im-rm-missing"><span>Remover da playlist ${missing.length === 1 ? "a música que não veio" : `as ${missing.length} músicas que não vieram`} nos links</span></label>` : ""}` : "";
      const pending = confirmModal({title: hit.size ? "Reordenar e adicionar?" : `Adicionar ${faixas(fresh.length)}?`, ok: hit.size ? "Confirmar" : "Adicionar",
        html: hit.size
          ? `<p>Comparando os links com a playlist: <strong>${faixas(hit.size)}</strong> ${hit.size > 1 ? "são as mesmas" : "é a mesma"} (${hit.size > 1 ? "vão" : "vai"} ser <strong>reordenada${hit.size > 1 ? "s" : ""} pela ordem em que você colou</strong>, sem gastar busca), <strong>${fresh.length}</strong> ${fresh.length === 1 ? "só está" : "só estão"} nos links e <strong>${missing.length}</strong> ${missing.length === 1 ? "só está" : "só estão"} na playlist.</p>
            ${diff}
            <p class="muted">O que só está na playlist fica no começo, na ordem atual, a não ser que você marque para remover.</p>`
          : `<p>As faixas entram no fim da playlist, da <strong>#${NN + 1}</strong> à <strong>#${NN + fresh.length}</strong>, e o painel será recalculado com ${faixas(NN + fresh.length)}.</p>`});
      const rmCb = document.querySelector("#im-rm-missing");
      const ok = await pending;
      if (!ok) return;
      const dropMissing = !!(rmCb && rmCb.checked);
      ssSet("verify", "1");
      if (hit.size){
        const cache = loadTrackCache(), out = []; let n = 0;
        if (!dropMissing) for (const t of missing) out.push(rowOf(t, ++n, null, cache));
        for (const s of seq) out.push(s.t ? rowOf(s.t, ++n, s.id, cache) : toRow(s.r, ++n));
        return commitRows(applyOrderPlan(out, Infinity), `${faixas(hit.size)} reordenada${hit.size > 1 ? "s" : ""}${fresh.length ? ` · ${faixas(fresh.length)} adicionada${fresh.length > 1 ? "s" : ""}` : ""}${dropMissing && missing.length ? ` · ${faixas(missing.length)} removida${missing.length > 1 ? "s" : ""}` : ""} · playlist com ${faixas(out.length)}`);
      }
      commitRows(applyOrderPlan([...currentRows(), ...fresh.map((r, i) => toRow(r, NN + i + 1))], NN), `${faixas(fresh.length)} adicionada${fresh.length > 1 ? "s" : ""} · playlist com ${faixas(NN + fresh.length)}`);
    } else {
      const rows = parsed.rows.every(r => r.n != null) && new Set(parsed.rows.map(r => r.n)).size === parsed.rows.length ? parsed.rows.map(r => toRow(r, r.n)) : parsed.rows.map((r, i) => toRow(r, i + 1));
      const arts = new Set(parsed.rows.map(r => r.artist || NI)).size;
      const pr = pairLinks(parsed.rows, true);
      if (pr.sameOrder){
        return infoModal("Nada a substituir: a playlist já é essa", `<p>As <strong>${faixas(pr.seq.length)}</strong> dos links já estão na playlist, <strong>na mesma ordem</strong>. Nenhuma busca foi gasta e nada foi alterado.</p>`);
      }
      const diffTxt = pr.hasIds ? `<p>Comparando com a playlist atual: <strong>${faixas(pr.hit.size)}</strong> ${pr.hit.size === 1 ? "é a mesma" : "são as mesmas"}, <strong>${pr.onlyLinks.length}</strong> ${pr.onlyLinks.length === 1 ? "só está" : "só estão"} nos links e <strong>${pr.onlyPlaylist.length}</strong> ${pr.onlyPlaylist.length === 1 ? "só está" : "só estão"} na playlist atual (${pr.onlyPlaylist.length === 1 ? "será apagada" : "serão apagadas"}).</p>${dlist(pr.onlyLinks, "Só nos links (novas)", lkRow)}${dlist(pr.onlyPlaylist, "Só na playlist atual (serão apagadas)", plRow)}` : "";
      const ok = await confirmModal({title: "Substituir a playlist inteira?", danger: true, ok: "Apagar e substituir",
        html: `${diffTxt}<div class="cmp"><div><span>Atual</span><b>${faixas(NN)}</b><em>${IS.art.length} artistas</em></div><i>→</i><div><span>Nova</span><b>${faixas(rows.length)}</b><em>${arts} artistas</em></div></div>
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
/* compara os links colados com a playlist: iguais (batem pelo ID, ou pelo título + artista principal), só nos links, só na playlist */
function pairLinks(rows, useKey){
  const idRows = rows.filter(r => r.id);
  const mt = idRows.length ? matchLinkIds(idRows.map(r => r.id)) : {matched: [], missing: BY_PLAYLIST};
  const hit = new Map(mt.matched.map(m => [m.id, m.t])), free = new Map();
  for (const t of mt.missing){ const k = ownKey(t.title, t.artist); (free.get(k) || free.set(k, []).get(k)).push(t); }
  const onlyLinks = [], seq = [];
  for (const r of rows){
    if (r.id && hit.has(r.id)){ seq.push({id: r.id, t: hit.get(r.id), r}); continue; }
    if (useKey && r.id){ const arr = free.get(ownKey(r.title, r.artist)); if (arr && arr.length){ const t = arr.shift(); hit.set(r.id, t); seq.push({id: r.id, t, r}); continue; } }
    onlyLinks.push(r); seq.push({r});
  }
  const usedN = new Set([...hit.values()].map(t => t.n));
  const onlyPlaylist = BY_PLAYLIST.filter(t => !usedN.has(t.n));
  const sameOrder = !!idRows.length && !onlyLinks.length && !onlyPlaylist.length && seq.every((s, i) => s.t && s.t.n === i + 1);
  return {hit, seq, onlyLinks, onlyPlaylist, sameOrder, hasIds: idRows.length > 0};
}
const dlist = (arr, label, f) => arr.length ? `<details class="warns"><summary>${label} (${arr.length})</summary><ul>${arr.slice(0, 40).map(x => `<li>${esc(f(x))}</li>`).join("")}${arr.length > 40 ? `<li>+ ${arr.length - 40} faixas</li>` : ""}</ul></details>` : "";
const lkRow = r => `${r.title} — ${r.artist || NI}`, plRow = t => `#${t.n} ${t.title} — ${t.artist}`;
const infoModal = (title, html) => confirmModal({title, html, ok: "Entendi", cancel: "Fechar"});
const ownKey = (title, artist) => (title || "").trim().toLowerCase() + "|" + (splitArtists(artist || "")[0] || "");
// faixas que já estão na playlist e carregam o próprio ID, no mesmo formato do cache de faixas
function ownTracksById(){
  const o = {};
  for (const t of BY_PLAYLIST) if (t.m && t.m.id) o[t.m.id] = {title: t.title, artist: t.artistRaw, album: t.albumRaw === NI ? "" : t.albumRaw, sec: t.sec, date: t.dateRaw, meta: t.m};
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
  const r = [n, t.title, t.artistRaw, t.albumRaw === NI ? "" : t.albumRaw, t.sec, t.dateRaw];
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
      <li>No topo da coluna com a data de adição, clique em <strong>"Adicionada em"</strong> até as <strong>MAIS ANTIGAS ficarem NO TOPO</strong> (seta para cima). Se não aparecer, clique nos <strong>3 tracinhos</strong> (☰) ao lado da lupa, escolha <strong>"Adicionado recentemente"</strong> e clique de novo nele até a <strong>setinha ficar para cima</strong>.</li>
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
    if (!mt.matched.length){
      // as músicas salvas antes do site guardar o link do Spotify não têm ID: dá pra descobrir quais são buscando os links UMA vez
      const ok = await confirmModal({title: "Os links ainda não batem com as músicas salvas", ok: "Buscar e reordenar", cancel: "Agora não",
        html: `<p>O site só passou a <strong>guardar o link de cada música agora</strong>. As ${nf(NN)} músicas que já estavam salvas ainda não têm o link guardado, então não dá para bater sem consultar o Spotify.</p>
          <p>Posso buscar esses <strong>${list.length} link${list.length > 1 ? "s" : ""}</strong> no Spotify <strong>uma única vez</strong> (1 busca por música) para descobrir quais são, e reordenar a playlist na ordem em que você colou. A busca pode ser pausada e retomada.</p>
          <p class="muted">Depois disso o link fica salvo junto com cada música e esse conserto nunca mais gasta busca.</p>`});
      if (!ok) return;
      ssSet("plan", JSON.stringify(list));
      md.close();
      return openImport(linksText(list));
    }
    // mandou a mesma ordem que já está salva: ou a playlist já estava certa, ou a ordem dos links está errada de novo
    if (!mt.missing.length && mt.matched.every((m, i) => m.t.n === i + 1)){
      const f = mt.fresh.length;
      const again = await confirmModal({title: "Essa é a mesma ordem que já está salva", ok: f ? "Buscar e adicionar" : "Entendi", cancel: f ? "Fechar" : "Voltar",
        html: `<p>Os links que você colou estão <strong>exatamente na mesma ordem</strong> da playlist atual. Então uma de duas: <strong>a ordem já está certa</strong>, ou você <strong>mandou a ordem errada de novo</strong>.</p>
          <p>Confira no Spotify se as <strong>MAIS ANTIGAS estão NO TOPO</strong> (a primeira adicionada em cima, a última embaixo) e cole de novo se precisar.</p>
          ${f ? `<p>${f === 1 ? "1 link não está" : `${f} links não estão`} na playlist: se quiser, o site busca ${f === 1 ? "essa música" : "essas músicas"} e ${f === 1 ? "a adiciona" : "as adiciona"}.</p>` : ""}`});
      if (f && again){ md.close(); askFetchFresh({ids: mt.fresh, plan: list}); }
      return;
    }
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

async function askReverse(){
  const first = BY_PLAYLIST[0], last = BY_PLAYLIST[NN - 1];
  const ok = await confirmModal({title: "Inverter a ordem da playlist?", ok: "Inverter ordem",
    html: `<p>A ordem de entrada das <strong>${faixas(NN)}</strong> vai ser invertida: <strong>${esc(last.title)}</strong> (hoje a #${NN}) passa a ser a <strong>#1</strong> e <strong>${esc(first.title)}</strong> (hoje a #1) passa a ser a <strong>#${NN}</strong>.</p>
      <p>Painel e insights são recalculados com a nova ordem (o que depende de "quem entrou primeiro" muda).</p>
      <p class="muted">Para voltar ao que era antes, é só inverter de novo. Para guardar a lista atual, exporte primeiro.</p>`,
    extra: {label: `${ICON.down} Exportar atual`, run: () => exportTxt()}});
  if (!ok) return;
  commitRows(currentRows().map(r => [NN + 1 - r[0], ...r.slice(1)]), `Ordem invertida · ${faixas(NN)}`);
}

/* ---------- song table with removal ---------- */
function openTable({verify = false, query: q0 = ""} = {}){
  const marked = new Set(); let sortK = "n", sortDir = 1, query = q0;
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
  q("#tb-q").value = q0;
  let tmr; q("#tb-q").addEventListener("input", e => { clearTimeout(tmr); tmr = setTimeout(() => { query = e.target.value; draw(); }, 120); });
  q("#tb-markall").addEventListener("click", () => { visible.forEach(t => marked.add(t.n)); draw(); });
  q("#tb-clear").addEventListener("click", () => { marked.clear(); draw(); });
  q("#tb-cancel").addEventListener("click", md.close);
  if (STORE) q("#tb-fix").addEventListener("click", openFixOrder);
  if (STORE) q("#tb-reverse").addEventListener("click", askReverse);
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
// nome dos arquivos baixados: 358-msc_DD-MM-AA (quantidade de músicas + data de hoje com ano de 2 dígitos)
const exportName = () => { const d = new Date(); return `${NN}-msc_${pad2(d.getDate())}-${pad2(d.getMonth() + 1)}-${pad2(d.getFullYear() % 100)}`; };
function exportTxt(){
  const txt = currentRows().map(r => [r[0], r[1], r[2], r[3], durTxt(r[4]), r[5], ...(r[6] ? [JSON.stringify(r[6])] : [])].map(v => String(v ?? "").replace(/[\t\r\n]+/g, " ")).join("\t")).join("\n") + "\n";
  download(`${exportName()}.txt`, new Blob([txt], {type: "text/plain;charset=utf-8"}));
  toast(`Lista exportada em texto · ${faixas(NN)}`);
}
const CRC = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++){ let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
const crc32 = u8 => { let c = 0xFFFFFFFF; for (let i = 0; i < u8.length; i++) c = CRC[(c ^ u8[i]) & 0xFF] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; };
function zipStore(files, type = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"){
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
  return new Blob([...parts, ...central, new Uint8Array(e.buffer)], {type});
}
function exportXlsx(){
  const x = s => String(s ?? "").replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").replace(/[&<>"]/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"}[c]));
  const col = i => String.fromCharCode(65 + i);
  const head = ["numero", "musica", "banda_artista", "album", "duração", "data_lançamento", "gêneros", "explícita", "tipo_lançamento", "link_spotify"];
  const rows = currentRows();
  const extra = r => {
    const m = r[6] || {}, gs = shownGenres((r[2] || "").trim() || NI);
    return [gs ? gs.join(", ") : "", m.x === undefined ? "" : m.x ? "Sim" : "Não", TYPE_PT[m.ty] || "", m.id ? `https://open.spotify.com/track/${m.id}` : ""];
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
  download(`${exportName()}.xlsx`, zipStore(files));
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
/* o usuário pode marcar um caso como "não é cover" / "não é repetida": fica salvo no navegador (ids "c|título" e
   "d|título|artista") e o caso sai das listas, da contagem do botão e da análise de covers; dá pra desfazer em "Ignoradas" */
function similarTitles(){
  const g = new Map();
  for (const t of BY_PLAYLIST){
    const key = normC(cleanTitle(t.title)); if (key.length < 2 || t.artist === NI) continue;
    if (!g.has(key)) g.set(key, []);
    g.get(key).push(t);
  }
  const dups = [], covers = [], ignored = [];
  const put = (item) => (DUPIGN.has(item.id) || CONF.has(item.id) ? ignored : item.kind === "d" ? dups : covers).push(item);
  for (const [key, rs] of g){
    if (rs.length < 2) continue;
    const mains = new Map();
    for (const t of rs){ const m = splitArtists(t.artist)[0]; if (!mains.has(m)) mains.set(m, []); mains.get(m).push(t); }
    for (const [m, list] of mains) if (list.length > 1) put({kind: "d", id: `d|${key}|${m}`, title: cleanTitle(list[0].title), rs: list});
    if (mains.size > 1) put({kind: "c", id: `c|${key}`, title: cleanTitle(rs[0].title), rs});
  }
  const by = (a, b) => b.rs.length - a.rs.length || coll.compare(a.title, b.title);
  return {dups: dups.sort(by), covers: covers.sort(by), ignored: ignored.sort(by)};
}
/* juntar nomes de artista que são a mesma banda: pergunta qual nome fica e aplica (só na visualização; o salvo não muda) */
function pickBandName(names, title, lead){
  return new Promise(res => {
    let done = false;
    const pb = document.createElement("div"), foot = document.createElement("div"); foot.className = "mfrow";
    pb.innerHTML = `<div class="confirm"><p>${lead}</p>
      <div class="du-rows">${names.map((n, i) => `<label class="chk"><input type="radio" name="band" value="${esc(n.name)}"${i === 0 ? " checked" : ""}><span>${esc(n.name)} <em>${faixas(n.count)}</em></span></label>`).join("")}</div>
      <p class="muted">Em todo o painel os outros nomes passam a contar como esse. O que está salvo na playlist e nos arquivos baixados não muda. Dá para desfazer na Saúde, em “Grafias parecidas do mesmo artista”.</p></div>`;
    foot.innerHTML = `<span class="sp"></span><button class="gbtn" type="button" data-c>Cancelar</button><button class="pbtn" type="button" data-o autofocus>Juntar</button>`;
    const pm = openModal({title, body: pb, foot, size: "sm", onClose: () => { if (!done) res(null); }});
    foot.querySelector("[data-c]").onclick = pm.close;
    foot.querySelector("[data-o]").onclick = () => { done = true; res(pb.querySelector("input:checked").value); pm.close(); };
  });
}
/* o que a pessoa classificou como "Duplicada" (nomes de artista juntados a partir de um cover): id do grupo → {title, names, canon} */
const DUPMARK_KEY = "catalogo-musical:dups-joined";
const DUPMARK = (() => { try { return JSON.parse(localStorage.getItem(DUPMARK_KEY) || "null") || {}; } catch (e) { return {}; } })();
const saveDupMark = () => { try { localStorage.setItem(DUPMARK_KEY, JSON.stringify(DUPMARK)); } catch (e) {} };
function undoDupMark(id){
  const r = DUPMARK[id]; if (!r) return;
  for (const n of r.names) if (n !== r.canon.toLowerCase()) delete ALIAS[n];
  delete DUPMARK[id]; saveDupMark(); saveAlias(); setFlash("Nomes separados de novo: voltou para a lista."); ssSet("health", "1"); location.reload();
}
function applyAlias(canon, names){
  for (const n of names) if (n.name.toLowerCase() !== canon.toLowerCase()) ALIAS[n.name.toLowerCase()] = canon;
  saveAlias(); setFlash(`Nomes juntados: agora tudo conta como ${canon}.`); ssSet("health", "1"); location.reload();
}
function undoAlias(key){ delete ALIAS[key]; saveAlias(); setFlash("Nome separado de novo."); ssSet("health", "1"); location.reload(); }
/* escolher quais faixas de um grupo apagar (sempre fica pelo menos uma); pede confirmação antes, como qualquer remoção */
function openDeleteList(item, intro){
  const body = document.createElement("div"), foot = document.createElement("div"); foot.className = "mfrow";
  body.innerHTML = `<div class="confirm"><p>${intro}</p><div class="du-rows">${item.rs.map((t, i) => `<label class="chk"><input type="checkbox" data-n="${t.n}"${i ? " checked" : ""}><span><b>#${t.n}</b> ${esc(t.title)} · ${esc(t.artist)} · ${esc(t.albumRaw === NI ? "—" : t.albumRaw)} · ${t.sec ? durTxt(t.sec) : "—"}</span></label>`).join("")}</div><p class="muted">Fica pelo menos uma faixa. Nada é apagado até você confirmar.</p></div>`;
  foot.innerHTML = `<span class="sp"></span><button class="gbtn" type="button" data-c>Cancelar</button><button class="pbtn danger" type="button" data-ok>Apagar</button>`;
  const md = openModal({title: "Quais faixas apagar?", body, foot, size: "sm"});
  const ok = foot.querySelector("[data-ok]"), boxes = [...body.querySelectorAll("input")];
  const picked = () => boxes.filter(b => b.checked).map(b => +b.dataset.n);
  const sync = () => { const k = picked().length; ok.disabled = !k || k >= boxes.length; ok.textContent = k ? `Apagar ${faixas(k)}…` : "Apagar"; };
  body.addEventListener("change", sync); sync();
  foot.querySelector("[data-c]").onclick = md.close;
  ok.onclick = async () => {
    const del = new Set(picked()), gone = item.rs.filter(t => del.has(t.n));
    const go = await confirmModal({title: `Apagar ${faixas(gone.length)}?`, danger: true, ok: "Apagar",
      html: `<p>Vão sair da playlist: ${gone.map(t => `<strong>${esc(t.title)}</strong> (#${t.n}, ${esc(t.artist)})`).join(", ")}.</p><p>A playlist fica com <strong>${faixas(NN - gone.length)}</strong>, renumeradas mantendo a ordem. Painel e insights serão recalculados.</p><p class="muted">Para guardar a lista antes, exporte primeiro.</p>`,
      extra: {label: `${ICON.down} Exportar atual`, run: () => exportTxt()}});
    if (!go) return;
    ssSet("health", "1");
    commitRows(currentRows().filter(r => !del.has(r[0])), `${faixas(gone.length)} removida${gone.length > 1 ? "s" : ""} · playlist com ${faixas(NN - gone.length)}`);
  };
}
function openDups(opt = {}){
  let sim = similarTitles();
  let tab = sim.dups.length || sim.covers.length ? "dups" : "ignored";   // nada para tratar: abre direto em Tratados
  const body = document.createElement("div");
  let kind = "songs", ai = analyzeAlbums(RAW), atab = ai.doubts.length || ai.groups.some(g => !g.confirmed) ? "doubt" : "done", albChanged = false;
  const seg = `<div class="seg" role="group" aria-label="O que comparar" data-g="kind"><button type="button" data-k="songs">Músicas</button><button type="button" data-k="albums"></button></div>
    <div class="seg" role="group" aria-label="Situação" data-g="state"><button type="button" data-s="pend"></button><button type="button" data-s="done"></button></div>
    <div class="seg" role="group" aria-label="Tipo" data-g="tab"><button type="button" data-t="dups"></button><button type="button" data-t="covers"></button><button type="button" data-t="ignored"></button></div>`;
  const md = openModal({title: "Duplicadas e covers", sub: "Títulos iguais ou parecidos (ignorando remaster, live, remix…) e álbuns que são o mesmo", body, headerExtra: seg, size: "lg",
    onClose: () => { if (albChanged){ setFlash("Álbuns atualizados: a junção das edições já vale no painel."); ssSet("health", "1"); location.reload(); } else if (opt.back) opt.back(); }});
  const sg = n => md.m.querySelector('.seg[data-g="' + n + '"]');
  let lastPend = tab === "ignored" ? "dups" : tab;   // última aba de "Para tratar" (pra voltar a ela)
  const albRow = (x, btns) => `<div class="alb-row"><div class="alb-main">${x}</div><div class="alb-btns">${btns}</div></div>`;
  const chips = vs => vs.map(v => `<span class="alb-chip">${esc(v.name)} <em>${faixas(v.count)}</em></span>`).join("");
  const drawAlbums = () => {
    const autoG = ai.groups.filter(g => !g.confirmed), nDoneA = ai.groups.length - autoG.length + ai.rejected.length;
    sg("state").hidden = false; sg("tab").hidden = true;
    sg("state").querySelectorAll("button").forEach(x => { const done = x.dataset.s === "done"; x.textContent = done ? `Tratados (${nDoneA})` : `Para tratar (${ai.doubts.length + autoG.length})`; x.setAttribute("aria-pressed", done === (atab === "done")); });
    const pair = e => `<strong>${esc(e.a)}</strong> <em>${faixas(e.ca)}</em> <span class="alb-x">×</span> <strong>${esc(e.b)}</strong> <em>${faixas(e.cb)}</em> <span class="alb-art">${esc(e.artName || "")}</span>`;
    if (atab !== "done"){
      const chipsA = vs => vs.map(v => `<span class="alb-chip">${esc(v.name)} <em>${faixas(v.count)}</em></span>`).join("");
      body.innerHTML = `<p class="mdesc">O site só sugere: <strong>nada é decidido por ele</strong>. Os que ele acha que são o mesmo álbum já contam como um só nos gráficos, mas continuam aqui (e pesam na nota da Saúde) até você classificar. <strong>Mesmo álbum</strong> confirma (o nome que fica é o mais curto e a data, a mais antiga); <strong>Álbuns diferentes</strong> mantém separados e não pergunta de novo.</p>` +
        (ai.doubts.length + autoG.length ? ai.doubts.map(e => albRow(`<div>${pair(e)}</div><div class="alb-why">${esc(e.rel.why)}</div>`, `<button class="gbtn dup-act" type="button" data-a="alb-yes" data-id="${esc(e.id)}">Mesmo álbum</button><button class="gbtn dup-act" type="button" data-a="alb-no" data-id="${esc(e.id)}">Álbuns diferentes</button>`)).join("")
          + autoG.map(g => albRow(`<div><strong>${esc(g.canon)}</strong> <span class="alb-art">${esc(g.artName || "")}${g.oldest ? " · data mais antiga: " + esc(g.oldest) : ""}</span></div><div class="alb-vars">${chipsA(g.variants)}</div><div class="alb-why">Suspeita do site: mesmo álbum (já conta como um só)</div>`, `<button class="gbtn dup-act" type="button" data-a="alb-confirm" data-id="${esc(g.ids.join("§"))}">Mesmo álbum</button><button class="gbtn dup-act" type="button" data-a="alb-split" data-id="${esc(g.ids.join("§"))}">Álbuns diferentes</button>`)).join("")
          : `<p class="muted">Nada para tratar: o site não encontrou álbuns parecidos.</p>`);
      return;
    }
    // "Tratados": uma coluna por classificação, lado a lado; só nome do álbum e quantas faixas
    const rows = vs => `<table><tbody>${vs.map(v => `<tr><td>${esc(v.name)}</td><td class="muted">${faixas(v.count)}</td></tr>`).join("")}</tbody></table>`;
    const grp = (title, art, vs, btn) => `<div class="trt-g"><div class="trt-h"><span>${esc(title)}${art ? ` <em>${esc(art)}</em>` : ""}</span><span class="trt-b">${btn}</span></div>${rows(vs)}</div>`;
    const undo = id => `<button class="gbtn dup-act" type="button" data-a="alb-undo" data-id="${esc(id)}">Desfazer</button>`;
    const cols = [
      ["Álbuns diferentes", ai.rejected.map(e => grp(e.artName || "Artista", "", [{name: e.a, count: e.ca}, {name: e.b, count: e.cb}], undo(e.id)))],
      ["Mesmo álbum", ai.groups.filter(g => g.confirmed).map(g => grp(g.canon, g.artName, g.variants, undo(g.ids.join("§"))))]
    ];
    body.innerHTML = `<p class="mdesc">O que você já tratou. <strong>Desfazer</strong> devolve o caso para as listas.</p><div class="trt">${cols.map(([t, gs]) => `<section class="trt-c"><h4>${t} <em>${gs.length}</em></h4>${gs.length ? gs.join("") : `<p class="muted">Nada aqui.</p>`}</section>`).join("")}</div>`;
  };
  // "Tratados": uma coluna por classificação, lado a lado; cada grupo mostra só música e banda
  const drawTreated = () => {
    const tbl = rs => `<table><tbody>${rs.map(t => `<tr><td>${esc(t.title)}</td><td class="muted">${esc(t.artist)}</td></tr>`).join("")}</tbody></table>`;
    const grp = (x, sub) => `<div class="trt-g"><div class="trt-h"><span>${esc(x.title)} <em>${faixas(x.rs.length)}</em>${sub ? `<small>${sub}</small>` : ""}</span><span class="trt-b">${VERS[x.id] ? `<button class="gbtn dup-act" type="button" data-id="${esc(x.id)}" data-a="delv">Apagar…</button>` : ""}<button class="gbtn dup-act" type="button" data-id="${esc(x.id)}" data-a="undo">Desfazer</button></span></div>${tbl(x.rs)}</div>`;
    // Duplicadas: grupos que a pessoa disse serem a mesma banda (os nomes foram juntados); acha as faixas pelo título e pelo nome que ficou
    const dupCol = Object.keys(DUPMARK).map(id => { const r = DUPMARK[id], rs = BY_PLAYLIST.filter(t => "c|" + normC(cleanTitle(t.title)) === id && splitArtists(t.artist)[0] === r.canon.toLowerCase()); return rs.length ? {id, title: r.title, rs} : null; }).filter(Boolean);
    const cols = [
      ["Outra música", sim.ignored.filter(x => !CONF.has(x.id) && !VERS[x.id]).map(x => grp(x))],
      ["Cover", sim.ignored.filter(x => CONF.has(x.id)).map(x => grp(x))],
      ["Outra versão", sim.ignored.filter(x => !CONF.has(x.id) && VERS[x.id]).map(x => grp(x, VERS_LABEL[VERS[x.id]]))],
      ["Duplicadas", dupCol.map(x => grp(x, "nomes juntados").replace('data-a="undo"', 'data-a="dup-undo"'))]
    ];
    body.innerHTML = `<p class="mdesc">O que você já tratou, separado por classificação. <strong>Desfazer</strong> devolve o caso para as listas.</p><div class="trt">${cols.map(([t, gs]) => `<section class="trt-c"><h4>${t} <em>${gs.length}</em></h4>${gs.length ? gs.join("") : `<p class="muted">Nada aqui.</p>`}</section>`).join("")}</div>`;
  };
  const draw = () => {
    md.m.querySelectorAll('.seg[data-g="kind"] button').forEach(b => { if (b.dataset.k === "albums") b.textContent = `Álbuns (${ai.doubts.length + ai.groups.filter(g => !g.confirmed).length})`; b.setAttribute("aria-pressed", b.dataset.k === kind); });
    if (kind === "albums"){ drawAlbums(); return; }
    const nDone = sim.ignored.length + Object.keys(DUPMARK).length, pend = [...sim.dups, ...sim.covers].sort((a, b) => b.rs.length - a.rs.length || coll.compare(a.title, b.title));
    sg("state").hidden = false;
    sg("state").querySelectorAll("button").forEach(x => { const done = x.dataset.s === "done"; x.textContent = done ? `Tratados (${nDone})` : `Para tratar (${pend.length})`; x.setAttribute("aria-pressed", done === (tab === "ignored")); });
    sg("tab").hidden = true;   // em "Para tratar" duplicadas e covers vêm juntas: a pessoa é que diz qual é o problema
    if (tab === "ignored"){ drawTreated(); return; }
    const list = pend;
    const desc = "Músicas com o mesmo título (ou parecido). O site só suspeita do problema: você classifica cada caso. <strong>Repetida</strong> = a mesma música duas vezes (você escolhe qual apagar, e ela pesa na nota até sumir). <strong>Outra versão</strong> = ao vivo, remaster, deluxe… (o site sugere apagar, sem pesar na nota). <strong>Cover</strong> = outro artista (ou o mesmo) regravou. <strong>Duplicada</strong> = os nomes dos artistas são a mesma banda escrita diferente. <strong>Outra música</strong> = só têm nome parecido.";
    const B = (x, a, l) => `<button class="gbtn dup-act" type="button" data-id="${esc(x.id)}" data-a="${a}">${l}</button>`;
    const btn = x => `<span class="dup-btns">${x.kind === "c" ? B(x, "conf", "Cover") + B(x, "band", "Duplicada") : B(x, "rep", "Repetida") + B(x, "ver", "Outra versão") + B(x, "conf", "Cover")}${B(x, "ign", "Outra música")}</span>`;
    const tag = x => ` · <span style="text-transform:none;letter-spacing:0">suspeita: ${x.kind === "c" ? "cover" : "repetida"}</span>`;
    body.innerHTML = `<p class="mdesc">${desc}</p>` +
      (list.length ? list.map(x => `<div class="eyebrow dup-head" style="margin:14px 0 6px;display:flex;align-items:center;justify-content:space-between;gap:12px"><span>${esc(x.title)} · ${faixas(x.rs.length)}${tag(x)}</span>${btn(x)}</div>${songTable(x.rs)}`).join("") : `<p class="muted">Nenhum caso ${tab === "ignored" ? "ignorado" : "encontrado"}.</p>`);
  };
  const yr = r => r.year === NI ? "ano desconhecido" : r.year;
  const who = r => `<strong>“${esc(cleanTitle(r.title))}”</strong> de <strong>${esc(r.artist)}</strong> (${yr(r)})`;
  // pergunta antes de marcar: no cover, a faixa de lançamento mais nova é a "cover" e a mais antiga é a original
  async function confirmIgnore(item){
    if (item.kind === "c"){
      const byAge = [...item.rs].sort((a, b) => (b.year === NI ? -1 : a.year === NI ? 1 : b.year - a.year) || b.n - a.n);
      const nova = byAge[0], orig = [...byAge].reverse().find(r => splitArtists(r.artist)[0] !== splitArtists(nova.artist)[0]) || byAge[byAge.length - 1];
      const versoes = new Set(item.rs.map(r => splitArtists(r.artist)[0])).size;
      return confirmModal({title: "Outra música?", ok: "Sim, marcar", cancel: "Cancelar",
        html: `<p>Deseja marcar ${who(nova)} como <strong>não sendo um cover</strong> de ${who(orig)}?</p>
          <p class="muted" style="margin-top:10px">${versoes > 2 ? `Vale para as ${versoes} versões deste título. ` : ""}O caso sai da lista de covers e você pode desfazer em “Ignoradas”.</p>`});
    }
    const a = item.rs[0];
    return confirmModal({title: "Outra música?", ok: "Sim, marcar", cancel: "Cancelar",
      html: `<p>Deseja marcar as ${item.rs.length} faixas <strong>“${esc(item.title)}”</strong> de <strong>${esc(a.artist)}</strong> como <strong>não repetidas</strong>?</p>
        <p class="muted" style="margin-top:10px">O caso sai da lista de duplicadas e você pode desfazer em “Ignoradas”.</p>`});
  }
  // nomes (artista principal) que aparecem no grupo, com o nº de faixas de cada um
  const mainNames = item => { const m = new Map(); for (const t of item.rs){ const n = splitArtistsRaw(t.artist)[0]; m.set(n, (m.get(n) || 0) + 1); } return [...m].map(([name, count]) => ({name, count})).sort((a, b) => b.count - a.count); };
  // pergunta que tipo de versão é (ao vivo, remaster, deluxe, outra)
  const pickVersion = item => new Promise(res => {
    let done = false;
    const pb = document.createElement("div"), foot = document.createElement("div"); foot.className = "mfrow";
    pb.innerHTML = `<div class="confirm"><p>As ${item.rs.length} faixas <strong>“${esc(item.title)}”</strong> são <strong>a mesma música</strong>, em versões diferentes. Que tipo de versão?</p>
      <div class="du-rows">${Object.entries(VERS_LABEL).map(([k, l], i) => `<label class="chk"><input type="radio" name="vers" value="${k}"${i === 0 ? " checked" : ""}><span>${l[0].toUpperCase() + l.slice(1)}</span></label>`).join("")}</div>
      <p class="muted">Sai das listas de repetidas e covers e não conta como cover. Dá para desfazer em “Tratados”.</p></div>`;
    foot.innerHTML = `<span class="sp"></span><button class="gbtn" type="button" data-c>Cancelar</button><button class="pbtn" type="button" data-o autofocus>Marcar</button>`;
    const pm = openModal({title: "Mesma música, outra versão", body: pb, foot, size: "sm", onClose: () => { if (!done) res(null); }});
    foot.querySelector("[data-c]").onclick = pm.close;
    foot.querySelector("[data-o]").onclick = () => { done = true; res(pb.querySelector("input:checked").value); pm.close(); };
  });
  body.addEventListener("click", async e => {
    const b = e.target.closest(".dup-act"); if (!b) return;
    if (b.dataset.a.startsWith("alb-")){
      const ids = b.dataset.id.split("§");
      if (b.dataset.a === "alb-yes") ALBMERGE[ids[0]] = "sim";
      else if (b.dataset.a === "alb-confirm") ids.forEach(id => { ALBMERGE[id] = "sim"; });   // o site já contava como o mesmo: só confirma
      else if (b.dataset.a === "alb-no" || b.dataset.a === "alb-split") ids.forEach(id => { ALBMERGE[id] = "nao"; });
      else ids.forEach(id => { delete ALBMERGE[id]; });
      saveAlbMerge(); ai = analyzeAlbums(RAW); if (b.dataset.a !== "alb-confirm") albChanged = true; draw();
      toast(b.dataset.a === "alb-confirm" ? "Confirmado como o mesmo álbum." : b.dataset.a === "alb-yes" ? "Álbuns juntados. O painel atualiza quando você fechar esta tela." : b.dataset.a === "alb-undo" ? "Voltou para as listas." : "Mantidos como álbuns diferentes. O painel atualiza quando você fechar esta tela.");
      return;
    }
    let verItem = null;
    if (b.dataset.a === "dup-undo"){ undoDupMark(b.dataset.id); return; }
    if (b.dataset.a === "band"){
      const item = sim.covers.find(x => x.id === b.dataset.id);
      const names = item && mainNames(item);
      const canon = item && await pickBandName(names, "Duplicada: qual nome fica?", `Os artistas de <strong>“${esc(item.title)}”</strong> são a <strong>mesma banda</strong> escrita de jeitos diferentes? Então é a mesma música, <strong>duplicada</strong>. Escolha o <strong>nome que fica</strong> (depois ela aparece em Duplicadas):`);
      if (canon){ DUPMARK[item.id] = {title: item.title, names: names.map(n => n.name.toLowerCase()), canon}; saveDupMark(); applyAlias(canon, names); }
      return;
    }
    if (b.dataset.a === "rep"){
      const item = sim.dups.find(x => x.id === b.dataset.id);
      if (item) openDeleteList(item, `As ${item.rs.length} faixas <strong>“${esc(item.title)}”</strong> são a mesma música repetida. Marque as que quer apagar. <strong>Enquanto existirem, a repetida continua pesando na nota da Saúde.</strong>`);
      return;
    }
    if (b.dataset.a === "delv"){
      const item = sim.ignored.find(x => x.id === b.dataset.id);
      if (item) openDeleteList(item, `As ${item.rs.length} faixas <strong>“${esc(item.title)}”</strong> são a mesma música em versões diferentes. Marque as que quer apagar (não afeta a nota da Saúde).`);
      return;
    }
    if (b.dataset.a === "conf"){ CONF.add(b.dataset.id); saveConf(); }
    else if (b.dataset.a === "ver"){
      const item = [...sim.dups, ...sim.covers].find(x => x.id === b.dataset.id);
      verItem = item;
      const type = item && await pickVersion(item);
      if (!type){ return; }
      DUPIGN.add(item.id); VERS[item.id] = type; saveVers();
    } else if (b.dataset.a === "ign"){
      const item = [...sim.dups, ...sim.covers].find(x => x.id === b.dataset.id);
      if (!item || !(await confirmIgnore(item))) return;
      DUPIGN.add(b.dataset.id);
    } else { DUPIGN.delete(b.dataset.id); if (CONF.delete(b.dataset.id)) saveConf(); if (VERS[b.dataset.id]){ delete VERS[b.dataset.id]; saveVers(); } }
    if (b.dataset.a !== "conf") saveDupIgn(); sim = similarTitles(); draw();
    if (verItem){
      const again = await confirmModal({title: "Apagar alguma versão?", ok: "Escolher quais", cancel: "Agora não",
        html: `<p>As ${verItem.rs.length} faixas <strong>“${esc(verItem.title)}”</strong> são a mesma música em versões diferentes. Costuma valer a pena ficar só com uma.</p><p class="muted">Isso não pesa na nota da Saúde: apagar é só uma sugestão.</p>`});
      if (again) openDeleteList(verItem, `Marque as versões que quer apagar. Sempre fica pelo menos uma.`);
    }
    toast(b.dataset.a === "undo" ? "Voltou para as listas." : "Tratado. Ele foi para \"Tratados\" (a análise de covers atualiza ao recarregar a página).");
  });
  md.m.querySelectorAll('.seg[data-g="tab"] button').forEach(b => b.addEventListener("click", () => { if (kind === "albums") atab = b.dataset.t; else tab = b.dataset.t; draw(); }));
  sg("state").querySelectorAll("button").forEach(b => b.addEventListener("click", () => { if (kind === "albums") atab = b.dataset.s === "done" ? "done" : "doubt"; else tab = b.dataset.s === "done" ? "ignored" : lastPend; draw(); }));
  md.m.querySelectorAll('.seg[data-g="kind"] button').forEach(b => b.addEventListener("click", () => { kind = b.dataset.k; draw(); }));
  const albPend = ai.doubts.length + ai.groups.filter(g => !g.confirmed).length;
  if (!sim.dups.length && !sim.covers.length && (albPend || !sim.ignored.length && (ai.groups.length || ai.rejected.length))) kind = "albums";
  if (opt.kind) kind = opt.kind;
  if (opt.tab) tab = opt.tab;
  if (opt.atab) atab = opt.atab === "doubt" ? "doubt" : "done";
  draw();
}

/* ---------- theme color ---------- */
const THEME_KEY = "catalogo-musical:theme-hue";
const THEME_DEFAULT = 153;
const THEME_PRESETS = [
  {h: 0,   label: "Vermelho"},
  {h: 25,  label: "Laranja"},
  {h: 50,  label: "Amarelo"},
  {h: 100, label: "Lima"},
  {h: 153, label: "Verde (padrão)"},
  {h: 185, label: "Ciano"},
  {h: 210, label: "Azul"},
  {h: 265, label: "Roxo"},
  {h: 320, label: "Rosa"},
];
function applyThemeHue(h){ document.documentElement.style.setProperty("--h", h); }
function resetThemeHue(){ document.documentElement.style.removeProperty("--h"); }
async function extractImgHue(url){
  return new Promise(res => {
    const img = new Image(); img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const c = document.createElement("canvas"); c.width = c.height = 20;
        c.getContext("2d").drawImage(img, 0, 0, 20, 20);
        const d = c.getContext("2d").getImageData(0, 0, 20, 20).data;
        const hist = new Float32Array(360);
        for (let i = 0; i < d.length; i += 4){
          const [r,g,b,a] = [d[i],d[i+1],d[i+2],d[i+3]]; if (a < 128) continue;
          const max = Math.max(r,g,b), min = Math.min(r,g,b), df = max - min;
          if (df < 25 || max < 30) continue;
          const sat = df / max; if (sat < 0.25) continue;
          let h;
          if (max===r) h=((g-b)/df%6)*60;
          else if (max===g) h=((b-r)/df+2)*60;
          else h=((r-g)/df+4)*60;
          h=((h%360)+360)%360;
          hist[Math.round(h)%360] += sat;
        }
        let best = -1, bestV = 0;
        for (let i = 0; i < 360; i++){
          const v = hist[(i+359)%360] + hist[i]*2 + hist[(i+1)%360];
          if (v > bestV){ bestV = v; best = i; }
        }
        res(best >= 0 ? best : null);
      } catch { res(null); }
    };
    img.onerror = () => res(null);
    img.src = url;
  });
}
async function themeAutoDetect(){
  const cnt = new Map();
  for (const t of BY_PLAYLIST){ if (t.artist !== NI) cnt.set(t.artist, (cnt.get(t.artist)||0)+1); }
  const top = [...cnt].sort((a,b)=>b[1]-a[1]).slice(0,8).map(([a])=>a);
  const urls = [];
  for (const art of top){
    const prefix = art + "|";
    for (const k of Object.keys(COVERS)){ const v = COVERS[k]; if (k.startsWith(prefix) && typeof v === "string"){ urls.push(v); break; } }
  }
  if (!urls.length) return null;
  const hues = (await Promise.all(urls.map(extractImgHue))).filter(h => h !== null);
  if (!hues.length) return null;
  // média circular para não confundir 359° e 1°
  const sin = hues.reduce((s,h)=>s+Math.sin(h*Math.PI/180),0);
  const cos = hues.reduce((s,h)=>s+Math.cos(h*Math.PI/180),0);
  return Math.round(((Math.atan2(sin,cos)*180/Math.PI)+360)%360);
}
function openTheme(){
  let saved; try { saved = localStorage.getItem(THEME_KEY); } catch {}
  const curH = saved && saved !== "auto" ? +saved : THEME_DEFAULT;
  const body = document.createElement("div");
  body.innerHTML = `
    <div class="thm-preview" id="thm-prev"></div>
    <div class="thm-slider-row">
      <span class="eyebrow">Matiz</span>
      <input type="range" id="thm-sl" class="thm-sl" min="0" max="359" value="${curH}">
    </div>
    <div class="thm-swatches">${THEME_PRESETS.map(p=>`<button type="button" class="thm-sw" data-h="${p.h}" title="${p.label}" style="background:hsl(${p.h},75%,55%)"></button>`).join("")}</div>
    <div class="thm-actions">
      <button type="button" class="gbtn" id="thm-auto">${ICON.palette} Cor automática das capas</button>
      <button type="button" class="gbtn" id="thm-def">${ICON.reset} Restaurar padrão</button>
    </div>`;
  const setPreview = h => { body.querySelector("#thm-prev").style.background = `linear-gradient(90deg,hsl(${h},82%,30%),hsl(${h},75%,64%),hsl(${h},75%,86%))`; };
  setPreview(curH);
  const md = openModal({title: "Cor do site", sub: "Ajusta a matiz de todas as cores", body});
  body.querySelector("#thm-sl").addEventListener("input", e => {
    const h = +e.target.value;
    applyThemeHue(h); setPreview(h);
    try { localStorage.setItem(THEME_KEY, String(h)); } catch {}
  });
  body.addEventListener("click", async e => {
    const sw = e.target.closest(".thm-sw");
    if (sw){ const h = +sw.dataset.h; applyThemeHue(h); setPreview(h); body.querySelector("#thm-sl").value = h; try { localStorage.setItem(THEME_KEY, String(h)); } catch {} return; }
    if (e.target.id === "thm-def"){ resetThemeHue(); setPreview(THEME_DEFAULT); body.querySelector("#thm-sl").value = THEME_DEFAULT; try { localStorage.removeItem(THEME_KEY); } catch {} md.close(); return; }
    if (e.target.id === "thm-auto"){
      const btn = e.target; btn.textContent = "Detectando…"; btn.disabled = true;
      const h = await themeAutoDetect();
      btn.disabled = false; btn.innerHTML = `${ICON.palette} Cor automática das capas`;
      if (h === null){ toast("Não foi possível extrair a cor. Tente com mais capas carregadas."); return; }
      applyThemeHue(h); setPreview(h); body.querySelector("#thm-sl").value = h;
      try { localStorage.setItem(THEME_KEY, String(h)); } catch {}
      toast(`Cor ajustada automaticamente (matiz ${h}°)`);
    }
  });
}
function bootTheme(){
  let saved; try { saved = localStorage.getItem(THEME_KEY); } catch {}
  if (saved && saved !== "auto") applyThemeHue(+saved);
}
bootTheme();

/* ---------- wire the header buttons ---------- */
$("#dt-theme").innerHTML = `${ICON.palette}<span>Cor</span>`;
$("#dt-theme").addEventListener("click", openTheme);
$("#dt-clear").innerHTML = `${ICON.x}<span>Limpar filtros</span>`;
$("#dt-clear").addEventListener("click", clearFilters);
$("#dt-table").innerHTML = `${ICON.list}<span>Músicas</span>`;
$("#dt-import").innerHTML = `${ICON.up}<span>Adicionar músicas</span>`;
$("#dt-export").innerHTML = `${ICON.down}<span>Baixar lista</span>`;
$("#dt-table").addEventListener("click", () => openTable());
$("#dt-import").addEventListener("click", () => openImport());
// dúvidas de álbum: avisa uma vez por sessão que dá pra decidir na tela de duplicadas
if (ALBUM_INFO.doubts.length){ try { if (!sessionStorage.getItem("catalogo-musical:alb-doubt-toast")){ sessionStorage.setItem("catalogo-musical:alb-doubt-toast", "1"); setTimeout(() => toast(`${ALBUM_INFO.doubts.length} álbum${ALBUM_INFO.doubts.length > 1 ? "ns podem" : " pode"} ser o mesmo que outro: veja em Saúde › Álbuns.`), 1800); } } catch (e) {} }
$("#dt-export").addEventListener("click", openExport);
$("#dt-update").innerHTML = `${ICON.sync}<span>Atualizar dados</span>`;
$("#dt-update").addEventListener("click", openDataUpdate);
// mesma conta do openDataUpdate: música sem dados do Spotify ou artista sem gênero pesquisado
// playlist de exemplo (nada salvo no navegador): baixar ou completar dados não faz sentido
$("#dt-export").hidden = !STORE;
$("#dt-update").hidden = !STORE || !BY_PLAYLIST.some(needsUpdate) && !genreTargets(BY_PLAYLIST.map(t => ({artist: t.artist, meta: t.m}))).length;
$("#foot-src").textContent = STORE ? `Lista editada neste navegador · ${faixas(NN)} · ${new Date(STORE.updated || Date.now()).toLocaleDateString("pt-BR")}` : `Fonte: lista de ${faixas(NN)} fornecida · sem dados externos`;
if (STORE) $("#srcline").textContent += " · lista editada";

/* ---------------- boot ---------------- */
let rz;
addEventListener("resize", () => { clearTimeout(rz); rz = setTimeout(() => { placePill(); if ($("#insights").classList.contains("on")) drawScatter(); if ($("#painel").classList.contains("on") && rows().length){ renderTree(); renderYears(rows()); renderKPIs(rows()); drawEvo(); } }, 120); });
function boot(){
  placePill();
  render();
  renderSpAccountBar();
  queueAppleGenres();
  queueMBGenres();
  queueTADBGenres();
  if (STORE){ queueAppleDates(); queueAppleSingles(); }
  const flash = takeFlash(); if (flash) setTimeout(() => toast(flash), 900);
  if (STORE){
    let fresh = null; try { fresh = JSON.parse(ssGet("fresh") || "null"); } catch (e) {}
    const verify = ssGet("verify") === "1"; ssDel("fresh"); ssDel("verify");
    if (fresh && fresh.ids && fresh.ids.length) setTimeout(() => askFetchFresh(fresh), 1400);
    else if (verify) setTimeout(askVerifyOrder, 1400);
  }
  if (location.hash === "#insights") showTab("insights");
  const untouched = !STORE && !touchedExample();   // exemplo do site sem nenhuma alteração
  const params = new URLSearchParams(location.search);
  if (params.get("import") === "nova-playlist"){
    params.delete("import");
    const qs = params.toString();
    history.replaceState({}, "", location.pathname + (qs ? "?" + qs : "") + location.hash);
    if (untouched) openImport();   // quem já tem dados (playlist própria ou qualquer decisão guardada) não leva modal nenhum ao entrar
  } else if (untouched) openExampleNotice();
}
/* o aviso "esta playlist é só um exemplo" só vale pra quem ainda não mexeu em nada nos dados do exemplo:
   qualquer decisão guardada (álbuns, duplicadas, covers, versões, nomes juntados, sugestões recusadas) já conta como mexida */
const TOUCH_KEYS = ["album-merges", "dups-ignored", "dups-versions", "dups-confirmed", "artist-alias", "dups-joined", "apple-singles-ignored"];
function touchedExample(){
  try {
    return TOUCH_KEYS.some(k => { const v = JSON.parse(localStorage.getItem("catalogo-musical:" + k) || "null"); return v && (Array.isArray(v) ? v.length : Object.keys(v).length); });
  } catch (e) { return false; }
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
(document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(boot).then(handleSpotifyRedirectAndResume);
