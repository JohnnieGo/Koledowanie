const songs = [
    {
        title: "Jam jest dudka",
        text: "1. Jam jest dudka Jezusa małego,\n Będę Mu grał z serca uprzejmego.\n Graj dudka, graj, Graj Panu, graj!\n \n 2. Zagram Panu w kozłowe dudeczki,\n Dla Jezusa i dla Panieneczki.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 3. Na piszczałce i na multaneczkach,\n Na bandurce, ba, i na skrzypeczkach.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 4. Pobiegnęć ja do Walkowej budy,\n A przyniosę tamte większe dudy.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 5. Póki tylko w ciele moim siły,\n Póty będę grać mój Jezu miły.\n Graj dudka, graj,\n Graj Panu, graj!"
    },
    {
        title: "Gdy śliczna Panna",
        text: "1. Jam jest dudka Jezusa małego,\n Będę Mu grał z serca uprzejmego.\n Graj dudka, graj, Graj Panu, graj!\n \n 2. Zagram Panu w kozłowe dudeczki,\n Dla Jezusa i dla Panieneczki.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 3. Na piszczałce i na multaneczkach,\n Na bandurce, ba, i na skrzypeczkach.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 4. Pobiegnęć ja do Walkowej budy,\n A przyniosę tamte większe dudy.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 5. Póki tylko w ciele moim siły,\n Póty będę grać mój Jezu miły.\n Graj dudka, graj,\n Graj Panu, graj!"
    },
    {
        title: "Lulajże Jezuniu",
        text: "1. Jam jest dudka Jezusa małego,\n Będę Mu grał z serca uprzejmego.\n Graj dudka, graj, Graj Panu, graj!\n \n 2. Zagram Panu w kozłowe dudeczki,\n Dla Jezusa i dla Panieneczki.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 3. Na piszczałce i na multaneczkach,\n Na bandurce, ba, i na skrzypeczkach.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 4. Pobiegnęć ja do Walkowej budy,\n A przyniosę tamte większe dudy.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 5. Póki tylko w ciele moim siły,\n Póty będę grać mój Jezu miły.\n Graj dudka, graj,\n Graj Panu, graj!"
    },
    {
        title: "Kołysanka Józefa",
        text: "1. Jam jest dudka Jezusa małego,\n Będę Mu grał z serca uprzejmego.\n Graj dudka, graj, Graj Panu, graj!\n \n 2. Zagram Panu w kozłowe dudeczki,\n Dla Jezusa i dla Panieneczki.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 3. Na piszczałce i na multaneczkach,\n Na bandurce, ba, i na skrzypeczkach.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 4. Pobiegnęć ja do Walkowej budy,\n A przyniosę tamte większe dudy.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 5. Póki tylko w ciele moim siły,\n Póty będę grać mój Jezu miły.\n Graj dudka, graj,\n Graj Panu, graj!"
    },
    {
        title: "Jezus malusieńki",
        text: "1. Jam jest dudka Jezusa małego,\n Będę Mu grał z serca uprzejmego.\n Graj dudka, graj, Graj Panu, graj!\n \n 2. Zagram Panu w kozłowe dudeczki,\n Dla Jezusa i dla Panieneczki.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 3. Na piszczałce i na multaneczkach,\n Na bandurce, ba, i na skrzypeczkach.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 4. Pobiegnęć ja do Walkowej budy,\n A przyniosę tamte większe dudy.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 5. Póki tylko w ciele moim siły,\n Póty będę grać mój Jezu miły.\n Graj dudka, graj,\n Graj Panu, graj!"
    },
    {
        title: "Mizerna cicha",
        text: "1. Jam jest dudka Jezusa małego,\n Będę Mu grał z serca uprzejmego.\n Graj dudka, graj, Graj Panu, graj!\n \n 2. Zagram Panu w kozłowe dudeczki,\n Dla Jezusa i dla Panieneczki.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 3. Na piszczałce i na multaneczkach,\n Na bandurce, ba, i na skrzypeczkach.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 4. Pobiegnęć ja do Walkowej budy,\n A przyniosę tamte większe dudy.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 5. Póki tylko w ciele moim siły,\n Póty będę grać mój Jezu miły.\n Graj dudka, graj,\n Graj Panu, graj!"
    },
    {
        title: "W żłobie leży",
        text: "1. Jam jest dudka Jezusa małego,\n Będę Mu grał z serca uprzejmego.\n Graj dudka, graj, Graj Panu, graj!\n \n 2. Zagram Panu w kozłowe dudeczki,\n Dla Jezusa i dla Panieneczki.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 3. Na piszczałce i na multaneczkach,\n Na bandurce, ba, i na skrzypeczkach.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 4. Pobiegnęć ja do Walkowej budy,\n A przyniosę tamte większe dudy.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 5. Póki tylko w ciele moim siły,\n Póty będę grać mój Jezu miły.\n Graj dudka, graj,\n Graj Panu, graj!"
    },
    {
        title: "Oj maluśki",
        text: "1. Jam jest dudka Jezusa małego,\n Będę Mu grał z serca uprzejmego.\n Graj dudka, graj, Graj Panu, graj!\n \n 2. Zagram Panu w kozłowe dudeczki,\n Dla Jezusa i dla Panieneczki.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 3. Na piszczałce i na multaneczkach,\n Na bandurce, ba, i na skrzypeczkach.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 4. Pobiegnęć ja do Walkowej budy,\n A przyniosę tamte większe dudy.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 5. Póki tylko w ciele moim siły,\n Póty będę grać mój Jezu miły.\n Graj dudka, graj,\n Graj Panu, graj!"
    },
    {
        title: "Pierwsza gwiazda",
        text: "1. Jam jest dudka Jezusa małego,\n Będę Mu grał z serca uprzejmego.\n Graj dudka, graj, Graj Panu, graj!\n \n 2. Zagram Panu w kozłowe dudeczki,\n Dla Jezusa i dla Panieneczki.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 3. Na piszczałce i na multaneczkach,\n Na bandurce, ba, i na skrzypeczkach.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 4. Pobiegnęć ja do Walkowej budy,\n A przyniosę tamte większe dudy.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 5. Póki tylko w ciele moim siły,\n Póty będę grać mój Jezu miły.\n Graj dudka, graj,\n Graj Panu, graj!"
    },
    {
        title: "Mędrcy świata",
        text: "1. Jam jest dudka Jezusa małego,\n Będę Mu grał z serca uprzejmego.\n Graj dudka, graj, Graj Panu, graj!\n \n 2. Zagram Panu w kozłowe dudeczki,\n Dla Jezusa i dla Panieneczki.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 3. Na piszczałce i na multaneczkach,\n Na bandurce, ba, i na skrzypeczkach.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 4. Pobiegnęć ja do Walkowej budy,\n A przyniosę tamte większe dudy.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 5. Póki tylko w ciele moim siły,\n Póty będę grać mój Jezu miły.\n Graj dudka, graj,\n Graj Panu, graj!"
    },
    {
        title: "Kolęda dla nieobecnych",
        text: "1. Jam jest dudka Jezusa małego,\n Będę Mu grał z serca uprzejmego.\n Graj dudka, graj, Graj Panu, graj!\n \n 2. Zagram Panu w kozłowe dudeczki,\n Dla Jezusa i dla Panieneczki.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 3. Na piszczałce i na multaneczkach,\n Na bandurce, ba, i na skrzypeczkach.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 4. Pobiegnęć ja do Walkowej budy,\n A przyniosę tamte większe dudy.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 5. Póki tylko w ciele moim siły,\n Póty będę grać mój Jezu miły.\n Graj dudka, graj,\n Graj Panu, graj!"
    },
    {
        title: "Jezusa narodzonego",
        text: "1. Jam jest dudka Jezusa małego,\n Będę Mu grał z serca uprzejmego.\n Graj dudka, graj, Graj Panu, graj!\n \n 2. Zagram Panu w kozłowe dudeczki,\n Dla Jezusa i dla Panieneczki.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 3. Na piszczałce i na multaneczkach,\n Na bandurce, ba, i na skrzypeczkach.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 4. Pobiegnęć ja do Walkowej budy,\n A przyniosę tamte większe dudy.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 5. Póki tylko w ciele moim siły,\n Póty będę grać mój Jezu miły.\n Graj dudka, graj,\n Graj Panu, graj!"
    },
    {
        title: "Gdy się Chrystus rodzi",
        text: "1. Jam jest dudka Jezusa małego,\n Będę Mu grał z serca uprzejmego.\n Graj dudka, graj, Graj Panu, graj!\n \n 2. Zagram Panu w kozłowe dudeczki,\n Dla Jezusa i dla Panieneczki.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 3. Na piszczałce i na multaneczkach,\n Na bandurce, ba, i na skrzypeczkach.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 4. Pobiegnęć ja do Walkowej budy,\n A przyniosę tamte większe dudy.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 5. Póki tylko w ciele moim siły,\n Póty będę grać mój Jezu miły.\n Graj dudka, graj,\n Graj Panu, graj!"
    },
    {
        title: "A wczora z wieczora",
        text: "1. Jam jest dudka Jezusa małego,\n Będę Mu grał z serca uprzejmego.\n Graj dudka, graj, Graj Panu, graj!\n \n 2. Zagram Panu w kozłowe dudeczki,\n Dla Jezusa i dla Panieneczki.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 3. Na piszczałce i na multaneczkach,\n Na bandurce, ba, i na skrzypeczkach.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 4. Pobiegnęć ja do Walkowej budy,\n A przyniosę tamte większe dudy.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 5. Póki tylko w ciele moim siły,\n Póty będę grać mój Jezu miły.\n Graj dudka, graj,\n Graj Panu, graj!"
    },
    {
        title: "Pasterze mili",
        text: "1. Jam jest dudka Jezusa małego,\n Będę Mu grał z serca uprzejmego.\n Graj dudka, graj, Graj Panu, graj!\n \n 2. Zagram Panu w kozłowe dudeczki,\n Dla Jezusa i dla Panieneczki.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 3. Na piszczałce i na multaneczkach,\n Na bandurce, ba, i na skrzypeczkach.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 4. Pobiegnęć ja do Walkowej budy,\n A przyniosę tamte większe dudy.\n Graj dudka, graj,\n Graj Panu, graj!\n \n 5. Póki tylko w ciele moim siły,\n Póty będę grać mój Jezu miły.\n Graj dudka, graj,\n Graj Panu, graj!"
    },
]

export default songs