const songs = [
    {
        title: "Jam jest dudka",
        text: "1. Jam jest dudka Jezusa małego, \nBędę Mu grał z serca uprzejmego. \nGraj dudka, graj, \nGraj Panu, graj! \n\n2. Zagramci Mu najpierwej w dudeczki,\nWy z nim chyżo skaczcie panieneczki\nGraj dudka, graj, \nGraj Panu, graj! \n\n3. Na piszczałce i na multaneczkach, \nNa bandurce oraz na skrzypeczkach.\nGraj dudka, graj,\nGraj Panu, graj!\n\n4. Na fujarze, arfie i cymbale,\nNa organach i wdzięcznym regale.\nGraj dudka, graj,\nGraj Panu, graj!\n\n5. W szałamaje i klawicymbały,\nAż Dzieciątku nóżki będą drgały.\nGraj dudka, graj,\nGraj Panu, graj!\n\n6. Na puzonie, cytrze i wioli,\nNiech się Dziecię nacieszy do woli.\nGraj dudka, graj,\nGraj Panu, graj!\n\n7. Na klarnetach i do lutni zmierzę, \nW trąby, w kotły na wiwat uderzę.\nGraj dudka, graj,\nGraj Panu, graj!\n\n8. Jać będę grał, póki mi sił staje;\nI sam Ci się za instrument daję.\nGraj dudka, graj,\nGraj Panu, graj!\n\n9. Jak tylko chcesz do uciechy Swojej,\nCiągnij struny z ciała, z duszy mojej.\nGraj dudka, graj,\nGraj Panu, graj!\n\n10. Bij jak w bęben, aż tubalne głosy\nSerce wyda, niech idą w niebiosy.\nBij Panie bij,\nBij w serce bij.\n\n11. Pomnij Jezu, żem ja Twój jest dudka;\nPieśń ma szczera, chociaż jest króciutka.\nŻyj we mnie, żyj,\nŻyj wiecznie, żyj."
    },
    {
        title: "Tryumfy Króla Niebieskiego",
        text: "1. Triumfy Króla niebieskiego,\nzstąpiły z nieba wysokiego.\n\n2. Pobudziły pasterzów,\ndobytku swego stróżów,\nśpiewaniem, śpiewaniem, śpiewaniem.\n\n3. Chwała bądź Bogu w wysokości,\na ludziom pokój na niskości.\nNarodził się Zbawiciel,\ndusz ludzkich Odkupiciel,\nna ziemi, na ziemi, na ziemi.\n\n4. Zrodziła Maryja Dziewica\nwiecznego Boga bez rodzica.\nBy nas z piekła wybawił,\na w niebieskich postawił,\npałacach, pałacach, pałacach.\n\n5. Pasterze w podziwieniu stają,\ntriumfu przyczynę badają.\nCo się nowego dzieje,\nże tak światłość jaśnieje, \nnie wiedzą, nie wiedzą, nie wiedzą."
    },
    {
        title: "Gdy śliczna Panna",
        text: "1. Gdy śliczna Panna Syna kołysała,\nZ wielkiem weselem tak jemu śpiewała:\nLi li li li laj, moje dzieciąteczko,\nLi li li li laj, śliczne paniąteczko.\n\n2. Przybądźcie z nieba, święci Aniołowie,\nŚpieszcie do ludzi z pokojem, posłowie.\nLi li li li laj, wielki królewiczu,\nli li li li laj, niebieski dziedzicu.\n\n3. Łączcie się w dziełach wszystkie ziemskie dzieci,\nNiechaj się miłość w sercu waszym nieci.\nLi li li li laj, wielki królewiczu,\nli li li li laj, niebieski dziedzicu."
    },
    {
        title: "Lulajże Jezuniu",
        text: "1. Lulajże Jezuniu, moja Perełko,\nLulaj ulubione me Pieścidełko.\nLulajże Jezuniu, lulaj, że lulaj,\nA ty go matulu w płaczu utulaj.\n\n2. Zamknijże znużone płaczem powieczki,\nUtulże zemdlone łkaniem usteczki.\nLulajże, Jezuniu...\n\n3. Lulajże, piękniuchny nasz Aniołeczku.\nLulajże wdzięczniuchny świata Kwiateczku.\nLulajże, Jezuniu...\n\n4. Lulajże, Różyczko najozdobniejsza,\nLulajże, Lilijko najprzyjemniejsza.\nLulajże, Jezuniu..."
    },
    {
        title: "Kołysanka Józefa",
        text: "1. Śpij syneczku mój\nW stajence pełnej snów.\nTak długa droga czeka cię,\nMaleńki zaśnij już.\nCzy już widzisz ogrom swojej chwały,\nCzy zbawienia cenę znasz,\nMoże myśli Twe ochrania Bóg,\nByś spać spokojnie mógł.\n\n2. Śpij syneczku mój,\nMiej pogodne sny,\nTen świat zaczeka jeszcze chwilę,\nDziś spokojnie śpij.\nTo niezwykłe jak majestat nieba\nMieści się w ramionach mych,\nCo za szczęście być dla Ciebie tatą\nPrzez tych parę chwil.\n\n3. Śpij syneczku mój,\nKochane oczka zmruż.\nPrzyjdzie dzień gdy zbawisz świat,\nDzisiaj cały mój świat to ty.\nMój Jezu\nJuż śpij."
    },
    {
        title: "Jezus malusieńki",
        text: "1. Jezus malusieńki leży wśród stajenki,\nPłacze z zimna, nie dała Mu matusia sukienki.\n\n2. Bo uboga była, rąbek z głowy zdjęła,\nW który dziecię, uwinąwszy, siankiem Je okryła.\n\n3. Nie ma kolebeczki ani poduszeczki,\nWe żłobie Mu położyła siana pod główeczki.\n\n4. Gdy dziecina kwili, patrzy w każdej chwili,\nNa dzieciątko boskie w żłóbku, oko Jej nie myli."
    },
    {
        title: "Mizerna cicha",
        text: "1. Mizerna, cicha, stajenka licha,\nPełna niebieskiej chwały.\nOto leżący, przed nami śpiący\nW promieniach Jezus mały.\n\n2. Nad nim anieli w locie stanęli\nI pochyleni klęczą\nZ włosy złotymi, z skrzydła białymi,\nPod malowaną tęczą.\n\n3. I oto mnodzy, ludzie ubodzy\nRadzi oglądać Pana,\nPełni natchnienia, pełni zdziwienia\nUpadli na kolana.\n\n4. Wielkie zdziwienie:wszelkie stworzenie\nCały świat orzeźiony;\nMądrość Mądrości, Światłość Światłości,\nBóg – człowiek tu wcielony!"
    },
    {
        title: "W żłobie leży",
        text: "1. W żłobie leży, któż pobieży\nKolędować Małemu?\nJezusowi, Chrystusowi,\nDziś nam narodzonemu?\nPastuszkowie przybywajcie,\nJemu wdzięcznie przygrywajcie,\nJako Panu naszemu.\n\n2. My zaś sami z piosneczkami\nZa wami się śpieszmy,\nI tak tego, maleńkiego,\nNiech wszyscy zobaczmy:\nJak ubogo narodzony,\nPłacze w stajni położony,\nWięc go dziś ucieszmy.\n\n3. Naprzód tedy, niechaj wszędy\nZabrzmi świat w wesołości,\nŻe posłany nam jest dany\nEmmanuel w niskości!\nJego tedy przywitajmy,\nZ aniołami zaśpiewajmy\nChwała na wysokości!\n\n4. Witaj, Panie, cóż się stanie,\nŻe rozkosze niebieskie\nOpuściłeś a zstąpiłeś\nNa te niskości ziemskie ?\nMiłość moja to sprawiła,\nBy człowieka wywyższyła\nPod nieba emipryjskie."
    },
    {
        title: "Oj maluśki",
        text: "1. Oj, maluski, maluski, maluski, jako rękawicka\nAlboli tyz jakoby, jakoby kawałecek smycka.\n\n2. Cy nie lepiej by tobie, by Tobie siedzieć było w niebie\nWsak Twój Tatuś kochany, kochany nie wyganiał Ciebie.\n\n3. Śpiewajcie i grajcie mu\nMałemu, małemu...\n\n4. Tam wciornaska wygoda, wygoda, a tu bieda wsędzie,\nTa Ci teraz dokuca, dokuca, ta i potem będzie.\n\n5. Tam Ty miałeś pościółkę, pościółkę i mietkie piernatki,\nTu na to Twej nie stanie, nie stanie ubozuchnej Matki."
    },
    {
        title: "Pierwsza gwiazda",
        text: "1. Niech błyśnie pierwsza gwiazda,\nBy wytęskniony nastał czas,\nGdy wszystko będzie jasne\nI światła jakby więcej w nas.\n\n2. Niech pierwsza gwiazda błyśnie,\nBy do spotkania wszystkim nam powód dać,\nByś wrócić chciał do domu,\nNa małą chwilę dzieckiem się stać.\n\n3. Do mamy chcesz i taty,\nLecz dzisiaj to już światy dwa,\nDlaczego droga prosta\nZakrętów tyle ostrych ma?\n\n4. Dziś drogą nawet krętą\nNiech wróci do nas ciepło dziecięcych lat,\nZwyczajów pełen pięknych\nNasz zwyczajnie piękny świat."
    },
    {
        title: "Mędrcy świata",
        text: "1. Mędrcy świata, monarchowie,\ngdzie śpiesznie dążycie?\nPowiedzcież nam Trzej Królowie,\nchcecie widzieć Dziecię?\nOno w żłobie nie ma tronu,\ni berła nie dzierży,\na proroctwo jego zgonu,\njuż się w świecie szerzy.\n\n2. Mędrcy świata, złość okrutna,\nDziecię prześladuje,\nwieść okropna, wieść to smutna,\nHerod spiski knuje.\nNic monarchów nie odstrasza,\ndo Betlejem spieszą,\ngwiazda zbawcę im ogłasza,\nnadzieją się cieszą.\n\n3. Przed Maryją stoją społem,\nNiosą Panu dary.\nPrzed Jezusem biją czołem,\nskładają ofiary.\nTrzykroć szczęśliwi królowie,\nKtóż wam nie zazdrości?\nCóż my damy, kto nam powie,\npałając z miłości."
    },
    {
        title: "Kolęda dla nieobecnych",
        text: "1. A nadzieja znów wstąpi w nas,\nNieobecnych pojawią się cienie.\nUwierzymy kolejny raz,\nW jeszcze jedno Boże Narodzenie.\nI choć przygasł Świąteczny gwar,\nBo zabrakło znów czyjegoś głosu.\nPrzyjdź tu do nas i z nami trwaj,\nWbrew tak zwanej ironii losu.\n\n2. Daj nam wiarę, że to ma sens,\nŻe nie trzeba żałować przyjaciół.\nŻe gdziekolwiek są dobrze im jest,\nBo są z nami choć w innej postaci.\nI przekonaj, że tak ma być,\nŻe po głosach tych wciąż drży powietrze,\nŻe odeszli po to by żyć.\nI tym razem będą żyć wiecznie.\n\n3. Przyjdź na świat,\nBy wyrównać rachunki strat.\nŻeby zająć wśród nas,\nPuste miejsce przy stole.\nJeszcze raz pozwól cieszyć się dzieckiem w nas,\nI zapomnieć że są puste miejsca przy stole."
    },
    {
        title: "Jezusa narodzonego",
        text: "1. Jezusa narodzonego wszyscy witajmy,\nJemu po kolędzie dary wzajem oddajmy.\nOddajmy wesoło, skłaniajmy swe czoło,\nSkłaniajmy swe czoło Panu naszemu.\n\n2. Oddajmy za złoto wiarę, czyniąc wyznanie,\nŻe to Bóg i człowiek prawy leży na sianie.\nOddajmy wesoło...\n\n3. Oddajmy też na kadzidło Panu nadzieję,\nŻe Go będziem widzieć w niebie, mówiąc to śmiele.\nOddajmy wesoło...\n\n4. Oddajmy za mirrę miłość na dowód tego,\nŻe Go nad wszystko kochamy z serca całego.\nOddajmy wesoło..."
    },
    {
        title: "Gdy się Chrystus rodzi",
        text: "1. Gdy się Chrystus rodzi\nI na świat przychodzi,\nCiemna noc w jasności\nPromienistej brodzi.\nAniołowie się radują,\nPod niebiosy wyśpiewują:\n\nGloria, gloria, gloria\nIn excelsis Deo!\n\n2. Mówią do pasterzy,\nKtórzy trzód swych strzegli,\nAby do Betlejem,\nCzym prędzej pobiegli.\nBo się narodził Zbawiciel,\nWszego świata Odkupiciel,\n\nGloria...\n\n3. O niebieskie Duchy\ni posłowie nieba.\nPowiedzcież wyraźniej\nco nam czynić trzeba:\nBo my nic nie pojmujemy,\nLedwo od strachu żyjemy.\n\nGloria..."
    },
    {
        title: "A wczora z wieczora",
        text: "A wczora z wieczora, a wczora z wieczora\nz niebieskiego dwora, z niebieskiego dwora.\nPrzyszła nam nowina, przyszła nam nowina:\nPanna rodzi Syna, Panna rodzi Syna.\n\nBoga prawdziwego,\nnieogarnionego.\nZa wyrokiem Boskim,\nw Betlejem żydowskim.\n\nPastuszkowie mali\nw polu wtenczas spali,\ngdy Anioł z północy\nświatłość z nieba toczy.\n\nChwałę oznajmując,\nszopę pokazując,\nchwałę Boga tego,\ndziś nam zrodzonego."
    },
    {
        title: "Pasterze mili",
        text: "Pasterze mili, coście widzieli?\nWidzieliście maleńkiego,\nJezusa narodzonego,\nSyna Bożego, Syna Bożego.\n\nCo za pałac miał, gdzie gospodą stał?\nSzopa bydłu przyzwoita,\nI to jeszcze źle pokryta,\nPałacem była, pałacem była.\n\nJakie łóżeczko, miał Paniąteczko?\nMarmur twardy, żłób kamienny,\nNa tym depozyt zbawienny,\nSpoczywał łożu, spoczywał łożu.\n\nCo za obicie miało to Dziecię?\nWisząc spod strzech pajęczyna,\nBoga i Maryi Syna,\nObiciem była, obiciem była."
    },
]

export default songs