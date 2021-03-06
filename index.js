const cardSelect = document.querySelectorAll('.cardSelect');

function hiddenWelcome () {
    document.querySelector(".tarot-container-a").classList.add("displayHidden");
    document.querySelector(".main-menu-section").classList.remove("displayHidden");
}

function mainToCardSelectDaily () {
    for (var i=0; i < cardSelect.length; i++) {
        cardSelect[i].setAttribute("onclick", "setTimeout(dailyToResult, 1000), dailyResult();");
    }

    document.querySelector(".main-menu-section").classList.add("displayHidden");
    document.querySelector(".tarot-container-daily").classList.remove("displayHidden");
}

function mainToCardSelectLove () {
    for (var i=0; i < cardSelect.length; i++) {
        cardSelect[i].setAttribute("onclick", "setTimeout(dailyToResult, 1000), loveResult();");
    }

    document.querySelector(".main-menu-section").classList.add("displayHidden");
    document.querySelector(".tarot-container-daily").classList.remove("displayHidden");
}

function mainToCardSelectYesnot () {
    document.querySelector('#textarea-send').setAttribute("onclick", "setTimeout(dailyToResult, 1000), yesnotResult();");

    document.querySelector(".main-menu-section").classList.add("displayHidden");
    document.querySelector(".question-container").classList.remove("displayHidden");
}

function mainToCardSelectCareer () {
    for (var i=0; i < cardSelect.length; i++) {
        cardSelect[i].setAttribute("onclick", "setTimeout(dailyToResult, 1000), careerResult();");
    }

    document.querySelector(".main-menu-section").classList.add("displayHidden");
    document.querySelector(".tarot-container-daily").classList.remove("displayHidden");
}

function mainToCardSelectNumeric () {
    document.querySelector('#date-send').setAttribute("onclick", "setTimeout(dailyToResult, 1000), numericResult();");

    document.querySelector(".main-menu-section").classList.add("displayHidden");
    document.querySelector(".numeric-container").classList.remove("displayHidden");
}

function dailyToResult () {
    document.querySelector(".tarot-container-daily").classList.add("displayHidden");
    document.querySelector(".numeric-container").classList.add("displayHidden");
    document.querySelector(".question-container").classList.add("displayHidden");
    document.querySelector(".tarot-container-daily-result").classList.remove("displayHidden");
}

function returnToMain () {
    //Reset Result Scroll
    document.querySelector('#result').scrollTo(0,0);
    //Reset Card Flip
    flipped();
    //Reset TextArea
    document.querySelector('#textarea-name').value = "";
    document.querySelector('#textarea-question').value = "";
    
    document.querySelector(".tarot-container-daily-result").classList.add("displayHidden");
    document.querySelector(".main-menu-section").classList.remove("displayHidden");
}

var cards = [
    {
        "name": "El Loco",
        "number": 0,
        "descriptionDaily": "Disfrutas viajar en todos los niveles: mental, espiritual, emocional y f??sico. Eres alguien dispuesto a correr riesgos y no tan dispuesto a estar atado a una sola cosa por mucho tiempo. Puede encajar en casi todos los lugares a los que vaya y tener la capacidad de seguir adelante sin llevar mucho equipaje. Aportas entusiasmo creativo, inocencia y nuevas formas de ver las cosas a todas tus empresas. Las personalidades tontas son especialmente divertidas y suelen ser las favoritas de las fiestas.",
        "descriptionLove": "Est??s a punto de embarcarte en un nuevo viaje rom??ntico. Si ya est?? en una relaci??n, este podr??a ser un nuevo cap??tulo como un compromiso, una boda o incluso un beb??. Si eres soltero y buscas relacionarte, el Loco en una lectura de amor significa que podr??s manifestar una nueva relaci??n rom??ntica con mucha facilidad y sin preocupaciones. El significado que debe extraerse de esto es estar abierto e invitar a personas nuevas e inesperadas en su vida. Es un buen momento para exponerse y tomar nuevas oportunidades con socios con los que de otro modo no considerar??a salir. Esta carta te anima a confiar en lo desconocido y adoptar una perspectiva m??s optimista y esperanzadora, celebrando y recuperando a tu ni??o interior.",
        "descriptionCareer": "Esta carta sugiere que hay nuevas oportunidades en el horizonte y ahora puedes dar ese salto que siempre has querido.<br><br>??No sabes si deberias aplicar para ese trabajo que tanto te gusta? ??O desde hace tiempo has querido emprender tu propio negocio pero temes de los resultados? ??Quieres ese ascenso pero nunca llegaste a postularte?<br><br>??El Loco te est?? diciendo que lo hagas! Sigue lo que tu alma quiere y recuerda, tomar riesgos est?? de tu lado en este momento. Puedes avanzar r??pida y f??cilmente ahora mismo siempre que enfoques tu energia en ello.",
        "descriptionYesNot": "Si",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "??? Inocencia ??? Espontaneidad ??? Esp??ritu Libre ??? Ingenuidad ???<br><br><strong>Planeta: </strong> Urano<br><strong>Letra Hebrea: </strong>  Tau<br><strong>Elemento: </strong>  Fuego<br><strong>Numerolog??a: </strong>  22",
    },{ 
        "name": "El Mago",
        "number": 1,
        "descriptionDaily": "Visionario e inspirador, usted es la persona a la que la gente acude en busca de nuevas ideas. Tienes la asombrosa habilidad de convertir tus ideas en realidad, o al menos hacer que otros se entusiasmen tanto que lo hagan por ti. El enfoque es la clave de su ??xito. Si pones tu mente en algo de manera seria, est??s casi seguro de que se har?? realidad. Las comunicaciones y el pensamiento claro y r??pido son sus dones. La magia no es m??s que la manipulaci??n de la energ??a a voluntad. En el mejor de los casos, los magos son verdaderos maestros de la manipulaci??n.",
        "descriptionLove": "Representa a alguien suave y encantador, ??l o ella entrara a tu vida y te sorprender?? de una manera verdaderamente m??gica, este es un romance vertiginoso que se siente como un cuento de hadas. Si a??n no ha sucedido, pronto lo har??. ??Resistir?? esta relaci??n la prueba del tiempo? Bueno, eso depende. La carta del tarot Mago a veces representa a un manipulador, alguien que usa su personalidad y carisma para enga??ar a quienes caen bajo su hechizo. ??Qu?? dice tu intuici??n? Mire las cartas alrededor del Mago para determinar sus verdaderas intenciones. De todos modos, esta conexi??n ser?? una que cambiar?? la vida.",
        "descriptionCareer": "Esta carta sugiere que hay oportunidades nuevas y emocionantes en el horizonte, y que tienes los poderes y habilidades para perseguirlas y tener ??xito.<br><br>??D??nde est??s en lo que respecta a tu carrera? ??Hay cosas que todav??a quieres lograr?<br><br>El Mago te est?? diciendo que vayas tras tus sue??os. Es hora de poner tus pasiones primero y elaborar un plan claro para tu destino. Si hay oportunidades para promociones o empresas comerciales, ??aprov??chalas con toda tu energ??a! Tienes las herramientas para tener ??xito, as?? que ponte ah?? fuera y manifiesta tu futuro.",    
        "descriptionYesNot": "Si",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "??? Poder ??? Habilidad ??? Concentraci??n ??? Acci??n ??? Ingenio ???<br><br><strong>Planeta Regente: </strong> Mercurio<br><strong>Letra Hebrea: </strong>  Aleph <br><strong>Elemento: </strong>  Aire<br><strong>Signo: </strong>  Aries<br><strong>Numerolog??a: </strong>  1",
    },{ 
        "name": "La Suma Sacerdotisa",
        "number": 2,
        "descriptionDaily": "Nada puede crearte un momento de silencio, toma nota cuidadosamente de todo lo que te rodea. Sensible a las energ??as m??s sutiles, se puede confiar en usted para notar lo que la mayor??a de nosotros se pierde. Su tranquila paciencia y comportamiento virtuoso a menudo lo colocan en un pedestal ante el cual la gente agradece inclinarse. Su intuici??n es fuerte y tiende a usar sus sentimientos al menos tanto como su fino intelecto cuando toma decisiones importantes. Los representados por la Suma Sacerdotisa tienen el don de ver un panorama completo sin dejarse abrumar por los detalles.",
        "descriptionLove": "Es posible que te sientas insatisfecho con muchas ??reas de tu vida, incluido el amor. Probablemente sientas que no puedes lograr la intimidad sin importar cu??nto lo intentes.<br><br>Afortunadamente, hay una soluci??n f??cil: ??deja de intentarlo! No estamos diciendo que renuncies a la vida o a tus relaciones, sino que simplemente des un paso atr??s y dejes que florezca lo que ya es.<br><br>Si nos obligamos a comprometernos o 'estar contentos' antes de que nosotros estemos listos, el resentimiento comienza a acumularse. Realmente est?? bien ser pasivo y paciente.<br><br>??? Enf??cate en tus propios deseos y necesidades<br>??? Deja de intentarlo y da un paso atr??s<br>??? Ser pasivo y paciente",
        "descriptionCareer": "Buscas conocimiento e inspiracion. Pronto aparecer??n nuevas ideas y objetivos de trabajo y esto puede provocar un cambio de carrera.<br><br>Piensa en tus verdaderos sue??os y deseos internos. ??Qu?? es lo que realmente esperas de tu vida laboral? ??Lo est??s consiguiendo ahora mismo? ??O necesita cambiar las cosas y seguir un nuevo camino?<br><br>Si has de tomar decisiones importantes en el ??mbito laboral, escucha tu intuici??n. Amigos y familiares podrian tratar de ayudar con consejos, pero por ahora deberas buscar la respuesta en ti. T??mate un tiempo para meditar sobre lo que realmente quieres.",    
        "descriptionYesNot": "Si",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "??? Intuici??n ??? Misterio ??? Mente Subconsciente ??? Actitud Velada ??? Voz Interior ???<br><br><strong>Asociaci??n: </strong> La Luna<br><strong>Letra Hebrea: </strong>  Beth <br><strong>Elemento: </strong>  Agua<br><strong>Signo: </strong>  Escorpio<br><strong>Numerolog??a: </strong>  2",
    },{ 
        "name": "La Emperatriz",
        "number": 3,
        "descriptionDaily": "Est??s ocupado dando a luz nuevas creaciones en forma de arte, comida, m??sica o cualquier cosa que inspire los sentidos. Eres la sensualidad encarnada y cuando te enfocas en tu tarea, inusualmente prol??fica. Tu naturaleza amable atrae a muchas almas descarriadas hacia ti y haces todo lo posible para ayudarlas a todas. Para la Emperatriz nada es m??s importante que la creaci??n y la creaci??n nace del amor.",
        "descriptionLove": "La Emperatriz representa la relaci??n perfecta con uno mismo y con los dem??s.<br><br>Si deseas una conexi??n amorosa sana, ??ntegra y armoniosa, la Emperatriz en una lectura de amor es una buena se??al. Sin embargo, esto no es algo que puedas manifestar a menos que primero te asegures de estar bien contigo.<br><br>??Te aceptas como eres? ??Aceptas tus defectos? ??Est??s lleno de confianza o todav??a est??s luchando con la verg??enza y la culpa? El tipo de relaci??n que brinda la Emperatriz es un subproducto del autocuidado.<br><br>Vale la pena se??alar nuevamente que la emperatriz tiene un fuerte v??nculo con el 'rol maternal'. Si ya es madre o desea serlo pronto, esto no le sorprende. Si a??n no est?? listo para asumir el papel de padre, considere convertirse en mentor.<br><br>??? Aseg??rate de estar bien contigo<br>??? Practica el autocuidado<br>??? Cuida de los dem??s con amor y compasi??n",
        "descriptionCareer": "??Estas prosperando en tu carrera? Si no es ahora, probablemente lo har?? pronto. La Emperatriz tambi??n podr??a anunciar una ??poca de intensificaci??n de la pasi??n y la creatividad en el trabajo. Entonces, si tiene su creatividad fluyendo, ahora es el momento de ponerla a trabajar.<br><br>Hay muchas posibilidades de que lo que pones ahora en tu energ??a valga la pena. Tambien podria significar que tienes compa??eros de trabajo que te apoyan y te cuidan, o que se sienten particularmente comodos contigo.<br><br>Quizas sea un buen momento para renovar tu oficina o lugar de trabajo, deja que tu creatividad fluya.",    
        "descriptionYesNot": "Si",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "??? Fertilidad ??? Belleza ??? Naturaleza ??? Dependencia ??? Servilismo ???<br><br><strong>Planeta: </strong> Venus<br><strong>Letra Hebrea: </strong>  Ghimed <br><strong>Elemento: </strong>  Aire<br><strong>Signo: </strong>  Libra<br><strong>Numerolog??a: </strong>  3",
    },{ 
        "name": "El Emperador",
        "number": 4,
        "descriptionDaily": "Asertivo y confiado, tienes un fuerte sentido de tu propio dominio. Trabajas duro para crear el mundo en el que quieres vivir y tienes poca tolerancia con los advenedizos que llegan sin invitaci??n. Una vez que te has propuesto algo, tu enfoque rara vez flaquea. Te rodea un aura de autoridad y, a menudo, te encuentras a cargo. Eres un apasionado de tus convicciones y pocos de los que te conocen desconocen tus creencias. En tu mejor momento eres din??mico, l??gico y conoces tu propio poder. Realmente puedes hacer que las cosas sucedan, y ??ay de aquellos que intenten detenerte!",
        "descriptionLove": "Si eres soltero, ??prep??rate para enamorarte pronto! La carta del tarot Emperador en una lectura de amor y relaci??n significa acci??n, compromiso y estabilidad.<br><br>Conocido por su autoridad y naturaleza paternal, el Emperador a menudo indica una relaci??n rom??ntica con una persona mayor, que te colmar?? de amor, atenci??n y apoyo.<br><br>Si ya est??s en una relaci??n, la carta del tarot del Emperador es una buena se??al, ya que representa la monogamia y las relaciones duraderas. Te dice que tu pareja est?? contigo a largo plazo y que tu relaci??n ser?? estable.<br><br>??Est??s pasando por un momento dif??cil con tu ser querido? Si este es el caso, esta carta te dice que la situaci??n mejorar?? pronto.<br><br>??? Prep??rate para enamorarte pronto si est??s soltero<br>??? Si est??s en una relaci??n, podria ser duradera<br>??? Los problemas de relaci??n pronto terminar??n o mejorar??n",
        "descriptionCareer": "Profesionalmente eres capaz de hacerte cargo y liderar. El Emperador indica que puedes ser visto como alguien con poder o control sobre otras personas a su alrededor en el trabajo, pero tambi??n tiene responsabilidad y cualidades de liderazgo.<br><br>Esta carta tambien presagia que tu trabajo es notado y apreciado, lo que te traer?? grandes recompensas a cambio.<br><br>Si est?? buscando trabajo, podrias encontrar uno que se adapte a ti y que funcione en tu horario diario. Eres perseverante y comprometido con tu carrera, solo recuerda tambien serlo en otros aspectos de tu vida.<br><br>Tambi??n podr??a indicar que alcanzaras estabilidad en tu trabajo y carrera.",   
        "descriptionYesNot": "Si",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "??? Autoridad ??? Figura Paterna ??? Estructura ??? Rigidez ??? Control ???<br><br><strong>Planeta: </strong> J??piter<br><strong>Letra Hebrea: </strong>  Daleth <br><strong>Elemento: </strong>  Fuego<br><strong>Signo: </strong>  Aries<br><strong>Numerolog??a: </strong>  4",
    },{ 
        "name": "El Sumo Sacerdote",
        "number": 5,
        "descriptionDaily": "Con los pies en la tierra y firmes en sus convicciones espirituales, las personas lo buscan para que les ayude con sus decisiones importantes. A menudo se te ve como una autoridad moral y es un papel que disfrutas. La familia, la tradici??n y la practicidad se destacan con la energ??a de El Sumo Sacerdote, al igual que un sentido altamente sintonizado de lo divino. Pasas mucho tiempo tratando de traerlo a la tierra para que el resto de nosotros aprendamos. A veces inflexible, tu sentido del bien y del mal est?? firmemente definido. Cuando se le pide que emita un juicio, El Sumo Sacerdote rara vez rehuye el desaf??o.",
        "descriptionLove": "Compromiso total, por lo tanto El Sumo Sacerdote en un contexto de amor es una muy buena se??al. Se asocia con relaciones tradicionales y s??lidas e indica que usted y su pareja est??n en la misma p??gina sobre casi todo. Esta no es solo una relaci??n normal, sino una que se siente como 'destinada a ser' y casi sagrada.<br><br>Si eres soltero, el Hierofante en una lectura de tarot de amor indica que alguien en tu c??rculo ??ntimo te est?? vigilando. Este podr??a ser un amigo en el que ha estado interesado durante un tiempo, pero parec??a estar fuera de su alcance. ??Prep??rate para que una de tus amistades se convierta en un romance lleno de romance y fidelidad!<br><br>Al ser vulnerable y honesto, ??te ganar??s el respeto de los dem??s! Incluso si son de un entorno totalmente diferente o no est??n de acuerdo con sus valores.",
        "descriptionCareer": "El Sumo Sacerdote tiene que ver con trabajar con otros y aprender de los que est??n por encima de usted, as?? que tenga esto en cuenta en su lugar de trabajo. La cooperaci??n podria traerte recompensas. Trabajar en equipo sera muy util en este momento. Manten el statu quo, sugerir o probar ideas nuevas no convencionales podrian no ser lo indicado ahora.<br><br>Escucha a tus mentores y expertos. Esta carta esta conectada con el aprendizaje y la ense??anza, ??qu?? es lo que necesitas aprender para tener ??xito? Manten contacto con personas que pueden impulsar tu carrera.<br><br>En algunos casos, esta carta sugirere que debes ense??ar a otros. Tal vez ya has alcanzado el exito, recuerda dar asi como recibes. ??Hay alguien en tu lugar de trabajo a quien puedas guiar?",    
        "descriptionYesNot": "Quiz??s",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "??? Religi??n ??? Identificaci??n Social ??? Creencias ??? Statu Quo ??? Restricci??n ???<br><br><strong>Planeta: </strong> J??piter<br><strong>Letra Hebrea: </strong>  Heth <br><strong>Elemento: </strong>  Aire<br><strong>Signo: </strong>  Tauro<br><strong>Numerolog??a: </strong>  5",
    },{ 
        "name": "Los Enamorados",
        "number": 6,
        "descriptionDaily": "Cuidar tus redes es un componente vital de tu personalidad. Te gusta tener gente a tu alrededor y te sientes m??s c??modo como parte de una pareja. Aunque a menudo est?? tranquilo en medio de una multitud, presta mucha atenci??n a lo que sucede y encuentra mucho que decir m??s tarde cuando est?? seguro en casa con su otra mitad o sus confidentes cercanos. Tomar decisiones a veces puede ser una lucha y es posible que te encuentres dando vueltas un poco hasta que finalmente est??s listo para comprometerte. Pero una vez que lo haces, generalmente lo dices en serio.",
        "descriptionLove": "Si eres soltero, ag??rrate fuerte porque esta carta te dice que un romance al rojo vivo est?? en camino. Incluso existe la posibilidad de elegir entre dos amantes diferentes.<br><br>Si est?? en una relaci??n o ya est?? comprometido, esta tarjeta indica una conexi??n de almas hermosa con un ser querido.<br><br>Conseguir esta carta en una lectura de Amor es se??al de que puedes dejar claros tus sentimientos e intenciones con la confianza de que ser??n correspondidos.<br><br>Tambi??n indica deseabilidad y armon??a entre las personas que se aman, por lo que si has estado deseando la renovaci??n de tu relaci??n, ahora es momento adecuado.<br><br>??? Si eres soltero, prep??rate para un fuerte romance<br>??? Si est??s en una relaci??n, esta es una conexi??n del alma<br>??? ??Est??s deseando renovarte? Si es as??, esto suceder?? pronto",
        "descriptionCareer": "Tendras que tomar decisiones. Y no cualquier elecci??n, sino una que tendr?? bastante importancia. Al considerar las opciones, aseg??rese de que su coraz??n est?? al cien por cien en ello.<br><br>Si amas lo que haces, esta carta sugiere que estas en el lugar indicado. Todo lo que necesitas hacer es entregarte con pasi??n. Si en algun momento sientes que fallas, recuerda que estos son curvas de aprendizaje.<br><br>Por otro lado esta carta te recuerda que no vivas en un mundo de ilusi??n. Cuando necesites tomar decisiones no te quedes nadando en la duda. Ten un conocimiento claro de los factores, asi como de tus sue??os.",    
        "descriptionYesNot": "Si",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "??? Uni??n ??? Similitud ??? Opciones ??? Desequilibrio ??? Sentimiento ???<br><br><strong>Estaci??n: </strong> Oto??o<br><strong>Letra Hebrea: </strong>  Vau <br><strong>Elemento: </strong>  Tierra<br><strong>Signo: </strong>  Virgo<br><strong>Numerolog??a: </strong>  6",
    },{ 
        "name": "El Carro",
        "number": 7,
        "descriptionDaily": "Tu mejor momento cuando est??s en movimiento. Nada te deprime m??s r??pido que obligarte a permanecer en el mismo lugar durante demasiado tiempo. Trabajas duro y te mueves con el flujo de las cosas. Otros dependen de su estabilidad de fluidos. La gente aprecia tu fuerza y disposici??n para hacer el trabajo que esperas de los dem??s. Has logrado unificar los elementos opuestos dentro de ti y sabes lo que se necesita para comprometerse. La victoria es el fruto del trabajo de El Carro, ya que en ??ltima instancia eres reconocido por tu determinaci??n, enfoque y lealtad constante.",
        "descriptionLove": "Puede representar problemas de control o ser presionado para estalecerse en las relaciones.<br><br>Tambi??n representa discusiones tontas, competencia, as?? como celos. Si esto es algo que est?? sucediendo en tus relaciones actualmente, deber??s tomar una posici??n.<br><br>Si hay una manera de comunicarse y superar tus problemas, debes hacerlo. Sin embargo, nunca debes permitir que te maltraten mientras doblegan tu voluntad.<br><br>Si eres soltero o est??s tratando de sanar de una relaci??n herida, la carta de El Carro en este contexto, a menudo representa que el cuidado y amor personal debe estar presente en nuestra vida.<br><br>??Hay miedos o sistemas de creencias negativas que te est??n desconectando del amor que deseas y mereces?<br><br>Al descubrir cu??les son estos obst??culos, podr??s avanzar en un camino que conduce a que se cumplan todos tus deseos, incluidos los de naturaleza rom??ntica.<br><br>??? En las relaciones: toma una posici??n<br>??? Comunica y supera tus problemas<br>??? Practica el autocuidado<br>??? Averigua si hay algo que te impide amar",
        "descriptionCareer": "Es una carta de progreso y logro y, por lo tanto, significa que est?? en el camino correcto con respecto a sus objetivos profesionales.<br><br>Si est?? buscando una promoci??n o comenzar una nueva carrera, ahora es el momento de hacerlo. Est??s muy motivado en este momento y te sientes empe??ado en el ??xito. ??Abraza este sentimiento y act??a! Permanece enfocado en tu verdadera vocaci??n y no te dejes llevar solo por las recompensas materiales. Cuando se trata de tu carrera, sigue tu pasi??n y no lo que parece bueno para ti en este momento.<br><br>Tienes el poder de triunfar, superando cualquier obst??culo en tu camino.",
        "descriptionYesNot": "Si",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "??? Voluntad ??? Afirmaci??n ??? Determinaci??n ??? Agresi??n ??? Incertidumbre ???<br><br><strong>Planeta: </strong> Marte<br><strong>Letra Hebrea: </strong>  Za??n <br><strong>Elemento: </strong>  Fuego<br><strong>Signo: </strong>  C??ncer<br><strong>Numerolog??a: </strong>  7",
    },{ 
        "name": "La Fuerza",
        "number": 8,
        "descriptionDaily": "Tienes una naturaleza ardiente y, sin embargo, sabes c??mo dirigir tu salvajismo interior para fomentar tu poder personal. Equilibrar la bestia interior con una perspectiva inocente y sabidur??a compasiva te permite alcanzar tus metas. Tienes la capacidad de vivir con pasi??n, mientras permaneces mentalmente en paz. El coraje y la integridad son tus dones cuando te enfocas y te mantienes fiel a tu sabidur??a interior. Hay m??s poder en el toque suave que en forzar un problema con ira e impetuosidad. La personalidad de la Fuerza tiene un fuerte deseo por la vida y una apreciaci??n particular por sus ciclos eternos.",
        "descriptionLove": "La carta del tarot de la Fuerza en un contexto de amor a menudo aparece cuando tienes problemas de relaci??n, ya sea con la familia, un amigo o tu amante.<br><br>Sin embargo, esto no es algo malo. Esta carta representa tu capacidad para aceptar a los dem??s tal como son, practicar la paciencia y demostrar la fuerza del amor.<br><br>??Qu?? puedes hacer para ser m??s abierto y amoroso? ??Hay heridas del pasado que necesitas perdonar? Evita la tendencia a cerrarte cuando te enfrentes al dolor.<br><br>Encuentra formas de abrir tu coraz??n a??n m??s durante estos tiempos. La meditaci??n, el trabajo voluntario y pasar tiempo haciendo las cosas que amas son excelentes opciones.<br><br>??? Est??s teniendo problemas de relaci??n<br>??? Demuestra la fuerza del amor<br>??? Encuentra maneras de abrir tu coraz??n",
        "descriptionCareer": "Hay algo que has querido hacer con tu carrera, deja que tu pasi??n te impulse a dar ese paso. Has cultivado las habilidades. Y ahora es el momento de profundizar y encontrar el coraje que necesitas para dar un salto adelante.<br><br>??Est??s buscando cambiar de trayectoria? Esta carta predice que es un buen momento para hacerlo. Si buscas un ascenso, ten confianza y llama la atencion con buenas practicas en tu espacio laboral, tus esfuerzos seran notados. <br><br>Todo lo que necesitas hacer es tener el coraje de seguir tus sue??os. Da el salto de fe.<br>",
        "descriptionYesNot": "Si",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "",
        "descriptionNumeric": "??? Fortaleza ??? Coraje ??? Compasi??n ??? Inseguridad ??? Auto-Disciplina ???<br><br><strong>Planeta: </strong> Saturno<br><strong>Letra Hebrea: </strong>  Kath <br><strong>Elemento: </strong>  Fuego<br><strong>Signo: </strong>  Leo<br><strong>Numerolog??a: </strong>  11 y 2",
    },{ 
        "name": "El Ermita??o",
        "number": 9,
        "descriptionDaily": "Las preguntas del esp??ritu te impulsan a mirar dentro de ti mismo para encontrar tu camino. Aunque a menudo est?? m??s contento solo, rara vez rechaza a las personas que buscan seriamente un consejo. Y suelen aparecer. En su b??squeda de la verdad, alienta a otros a mirar hacia adentro, tal como lo intenta. Tienes fe solo en lo que sabes por experiencia: la tuya y la de otros en los que conf??as. Reunir tus pensamientos y construir tu esp??ritu requiere tiempo y un silencio paciente. Pero vale la pena. A pesar de su solemnidad, el tipo Ermita??o normalmente ama la vida y disfruta de una buena carcajada.",
        "descriptionLove": "Cuando se trata de amor y relaciones, esta no es una carta de 'romance' positiva. No siempre significa el final de una relaci??n o solter??a, aunque puede. Si eres soltero y quieres amor, aseg??rate de estar realmente listo para una relaci??n.<br><br>??Te cuesta buscar la validaci??n de los dem??s? Trabaja en eso. Si tiene problemas de codependencia o seguridad, dedique tiempo a corregirlos, de esta manera puedes atraer una pareja con una vibraci??n positiva. De lo contrario, atraer??s a alguien que refleje esos mismos problemas.<br><br>Si est??s comprometido y quieres seguir as??, genial. Sin embargo, el mismo concepto de esta carta podria afectarte.<br><br>Aseg??rate de que estas invirtiendo tanta energ??a en usted como en su pareja y familia. No te pierdas tanto en tu matrimonio que descuides la relaci??n contigo mismo.",
        "descriptionCareer": "Esta carta sugiere que hay otros aspectos de tu vida que requieren atencion, tu carrera o trabajo deberan esperar.<br><br>Si eres una persona trabajadora o estas muy enfocado en tus estudios, El Ermita??o indica que debes tomarte un descanso. El exito es muy importante para ti, pero una buena salud mental y fisica tambien es parte de este.<br><br>Podrias sentirse atra??do por explorar tu lado espiritual o encontrar nuevas formas de trabajar. Tu vida laboral y emocional deben encontrar un equilibrio, este es un buen momento para hacerlo.<br><br>Emprenderas un viaje de autodescubrimiento.",
        "descriptionYesNot": "No",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "??? Espiritualidad ??? Neutralidad ??? Mensaje Profundo ???<br><br><strong>Estaci??n: </strong> Oto??o<br><strong>Letra Hebrea: </strong>  Teth <br><strong>Elemento: </strong>  Tierra<br><strong>Signo: </strong>  Virgo<br><strong>Numerolog??a: </strong>  9",
    },{ 
        "name": "La Rueda De La Fortuna",
        "number": 10,
        "descriptionDaily": "Las oportunidades y los nuevos horizontes mantienen su vida girando con cambios regulares y nuevas perspectivas. Re??ne experiencias de todos los ??mbitos de la vida y las moldea en nuevas perspectivas para su futuro. La comunicaci??n creativa y la voluntad de seguir adelante son partes integrales de su personalidad. Quedarse atrapado en una rutina lo vuelve loco, y si alguna vez se siente atrapado, cuanto m??s r??pido sacuda las cosas, mejor. El mundo nunca se detiene, y t?? tampoco. Los tipos de la rueda de la fortuna esperan que les llegue la buena fortuna, y por lo general sucede.",
        "descriptionLove": "??Ya est??s comprometido? Si eres feliz en tu relaci??n y quieres que contin??e, la Rueda de la Fortuna en el amor y las relaciones sugiere que un evento positivo los acercar?? a??n m??s.<br><br>La agitaci??n y un cambio completo pueden ser su mejor apuesta. Dejar que tu Ser Superior sea tu gu??a siempre es una opci??n s??lida.<br><br>Si eres soltero, pronto conocer??s a tu alma gemela, por casualidad. No sabr??s cu??ndo o d??nde aparecer?? esta persona, pero cuando lo haga, ??ver??s que es el destino!<br><br>En un contexto de relaci??n, esta carta tambi??n se conoce como la rueda del karma. Este es un gran recordatorio de que 'cosechas lo que siembras'. Eventualmente, enfrentar?? las consecuencias de tus acciones.<br><br>Da el tipo de energ??a que tambi??n quieres recibir de los dem??s.",
        "descriptionCareer": "Se avecina un cambio en tu situaci??n laboral, ??y este ser?? positivo! Si est?? buscando cambiar de carrera o solicitar un nuevo trabajo, h??galo ahora. El universo es abundante y esta a tu favor.<br><br>Hay grandes energias detras de ti en este momento, debes tomar accion rapida si deseas aprovecharla. ??Sigue lo que tu coraz??n te dice y arri??sgate! Pronto cosechar??s las recompensas que has estado buscando.<br><br>Si financieramente has estado teniendo problemas, La Rueda De La Fortuna sugiere un cambio en sus circunstancias. ??El dinero podr??a estar en camino a tus manos!",
        "descriptionYesNot": "Si",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "??? Buena Suerte ??? Karma ??? Cambios ??? Mala Suerte ??? Energ??as Negativas ???<br><br><strong>Planeta: </strong> J??piter<br><strong>Letra Hebrea: </strong>  Yoth <br><strong>Elemento: </strong>  Tierra<br><strong>Signo: </strong>  Capricornio<br><strong>Numerolog??a: </strong>  10",
    },{ 
        "name": "La Justicia",
        "number": 11,
        "descriptionDaily": "El equilibrio es vital para su personalidad y esforzarse por mantenerlo es un enfoque principal. Tu respeto por la autoridad est?? directamente relacionado con cu??n justa y honesta la percibes. No tienes tiempo para mentirosos y desprecias la injusticia en todas partes. Entiendes bien las lecciones del karma, reconociendo c??mo la acci??n o el pensamiento m??s peque??o puede causar los cambios m??s grandes. Tu pasi??n por la justicia a nivel universal es igual solo a tu necesidad de mantener el equilibrio a nivel personal. Es importante que los tipos de personalidad de Justicia se tomen el tiempo para realinearse, rejuvenecer y regocijarse regularmente.",
        "descriptionLove": "En el campo del amor y las relaciones, la carta del tarot de la Justicia representa decisiones y elecciones. ??Conoces tu valor? Conformarte con menos de lo que mereces, ya sea soltero o comprometido, nunca es una opci??n.<br><br>A veces, esto significa permanecer soltero incluso cuando ves a todos los dem??s comprometi??ndose o cas??ndose. Otras veces significa, dejar una relaci??n que alguna vez apreciaste. La justicia te insta a ser fiel a ti mismo primero y luego seguir adelante.<br><br>Si est?? pasando por el final de una relaci??n, podr??a estar avecin??ndose una batalla legal. Es dif??cil decir si las cosas funcionar??n (o no) a tu favor. A??n as??, la Justicia puede representar lecciones de vida que te ayudar??n a elevarte a un plano superior sin importar el resultado.",
        "descriptionCareer": "Esta carta sugiere que cualquier problema de injusticia en su lugar de trabajo pronto se resolver??. Si ha sido honesto y respetuoso con sus compa??eros de trabajo, entonces no tiene de qu?? preocuparse. Sin embargo, si ha estado involucrado en dramas y conflictos, es posible que pronto enfrente repercusiones.<br><br>Tambien puede significar una necesidad de equilibrio entre su carrera profesional y su vida personal. ??Est??s demasiado involucrado en tu carrera y te olvidas de relajarte? ??Quiz??s tus amigos o familiares te sienten muy distante ya que pasas mucho tiempo afuera?<br><br>T??mate un tiempo fuera de tu oficina y disfrutalo con tus seres queridos y contigo mismo. El trabajo es importante para ti, ??pero no lo es todo!",
        "descriptionYesNot": "Quiz??s",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "??? Verdad ??? Causa y Efecto ??? Honestidad ??? Rendir Cuentas ??? Karma ???<br><br><strong>Planeta: </strong> Venus<br><strong>Letra Hebrea: </strong>  Cheth <br><strong>Elemento: </strong>  Agua<br><strong>Signo: </strong>  Libra<br><strong>Numerolog??a: </strong>  8",
    },{ 
        "name": "El Colgado",
        "number": 12,
        "descriptionDaily": "Eres una persona que reconoce la importancia del sacrificio y la paciencia. La paciencia es una virtud, permitir el tiempo necesario para ver todos los lados. El sacrificio es un requisito previo para la iluminaci??n. A veces hay un prop??sito m??s elevado que nuestro yo inmediato, y eres particularmente bueno para verlo. Cuando te tomas tu tiempo y miras las cosas desde diferentes perspectivas, puedes descubrir tu verdadero camino. Observe atentamente y siempre sabr?? cu??ndo es el momento adecuado para actuar. La personalidad del Colgado se siente m??s c??moda cuando logra alinear sus principios superiores con sus actitudes mentales y comportamientos f??sicos.",
        "descriptionLove": "Esta carta simboliza la infelicidad y la rutina en las relaciones de cualquier tipo. Es hora de deshacerte de cualquier conexi??n t??xica y solo enfocarte en las que te dan paz y alegr??a.<br><br>Si estas pensando en poner fin a una relaci??n rom??ntica o una amistad, no hay necesidad de apresurarse. Sin embargo, necesitas meditar tu situaci??n.<br><br>??Existe algo que puedas mejorar? Dale una oportunidad. ??Has hecho todo lo que puedes hacer? Camina hacia un lugar de aceptaci??n. Este puede ser un momento que representar?? dejar el pasado y comenzar a tomar un camino mejor.",
        "descriptionCareer": "Hay incertidumbre en el aspecto laboral. Es posible que las cosas no sucedan tan r??pido como esperaba con respecto a la promoci??n y el ??xito, y esto te genera preocupaci??n.<br><br>En nuestra vida experimentamos ciclos constantemente. Todo sucede en su debido momento junto al ritmo del universo. Podrias pensar que no avanzas lo suficientemente rapido, pero habr?? una raz??n para esto. Aprovecha las pausas para resolver otros asuntos.<br><br>Dificultades para tomar una decisiones, reconsideraras tus siguientes pasos. El tiempo ayudar?? a despejar tu mente.",
        "descriptionYesNot": "Quiz??s",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "??? Observar ??? Suspenso ??? Postergaci??n ??? Soltar ??? Sacrificar ???<br><br><strong>Planeta: </strong> Neptuno<br><strong>Letra Hebrea: </strong>  Lameth <br><strong>Elemento: </strong>  Aire<br><strong>Signo: </strong>  Libra<br><strong>Numerolog??a: </strong>  12",
    },{ 
        "name": "La Muerte",
        "number": 13,
        "descriptionDaily": "La transformaci??n y la renovaci??n son naturales para usted, no algo que deba evitar o asustar. Reconoces la importancia de dejar ir los elementos de tu vida que ya no son ??tiles o que te impiden el futuro que est??s tratando de crear. Las nuevas oportunidades solo se pueden realizar cuando se despeja el desorden del pasado. Eres especialmente h??bil para avanzar cuando llega el momento. Aferrarse al pasado o revolcarse en la p??rdida de tiempos pasados solo estancar?? su crecimiento interior. La personalidad de la Muerte es consciente de que el ciclo constante de muerte y renacimiento es nada menos que la vida misma. Uno no es posible sin el otro.",
        "descriptionLove": "Existen problemas, especialmente si te preguntas si debes quedarte o irte. Pero la carta de La Muerte no tiene que representar una relaci??n actual.<br><br>De hecho, tambi??n puede sugerir la necesidad de dejar atr??s un amor o dolor pasado que est?? afectando tu presente. Esto es especialmente cierto para las personas solteras que desean comenzar a salir nuevamente.<br><br>Si su relaci??n es t??xica o usted y su pareja no son compatibles, puede ser hora de aceptar esto y seguir adelante.<br><br>Por otro lado, si realmente crees que has encontrado a tu alma gemela, deberias enterrar el pasado y abrazar este nuevo comienzo para que no este contaminado con los problemas del ayer.",
        "descriptionCareer": "Esta carta aparecer?? cuando existe disconformidad con el trabajo y est?? debatiendo un cambio de carrera. Un trabajo puede brindar estabilidad y los ingresos te hacen sentir seguro, pero si no eres realmente feliz, el esfuerzo no lo vale. Si te aburres y estresas esto afectar?? tu bienestar espiritual y emocional.<br><br>La Muerte te envia un mensaje. El universo te escucha, es momento de hacer cambios, ??encuentra la fuerza para hacerlo! El camino puede que sea dificil, pero pronto te dar??s cuenta que tu decisi??n fue la mas acertada. ??Vives en un mundo abundate, siempre hay nuevas y emocionantes oportunidades!",
        "descriptionYesNot": "Si",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "??? Transformaci??n ??? Transici??n ??? Ciclos Finales ??? Inicio ???<br><br><strong>Planeta: </strong> Plut??n<br><strong>Letra Hebrea: </strong>  Mem <br><strong>Elemento: </strong>  Agua<br><strong>Signo: </strong>  Escorpio<br><strong>Numerolog??a: </strong>  13 o 4",
    },{ 
        "name": "La Templanza",
        "number": 14,
        "descriptionDaily": "Te esfuerzas por lograr la armon??a entre tu ser emocional/espiritual y f??sico/mental. A veces esto es dif??cil, pero la disciplina y el autocontrol te ense??an a combinar estos opuestos para crear un todo hermoso. Puede traer las lecciones del pasado al presente de maneras nuevas e innovadoras. La personalidad de Templanza est?? especialmente en sinton??a con los mensajes de lo divino y, en el mejor de los casos, sirven como puentes entre el esp??ritu y las llanuras terrenales. La vida fluye m??s suavemente cuando prestas atenci??n a la voz de tu alma y la personalidad de Templanza puede ser especialmente h??bil para hacerlo.",
        "descriptionLove": "En el contexto del amor, esta es una carta muy prometedora. La templanza representa la armon??a, lo que significa que una relaci??n pac??fica y beneficiosa est?? en el horizonte.<br><br>Si eres soltero, prep??rate para conocer a alguien que encajara muy bien en tu vida. Si ya est?? comprometido, esta uni??n alcanzar?? niveles m??s altos.<br><br>La ??nica excepci??n aqu?? es cuando est??s involucrado en una relaci??n o matrimonio donde hay muchas peleas. Si este es el caso, deber?? adoptar un enfoque muy diferente al que est?? sucediendo en el presente.<br><br>Cuando las cosas no van bien, tendemos a se??alar con el dedo a nuestra pareja y nos quejamos de cada falla y defecto. Esto es in??til ya que no tenemos la capacidad de cambiar a otra persona.<br><br>En lugar de continuar con la batalla, deje a un lado el orgullo y encuentre un punto medio. Fomentar la cooperaci??n con su c??nyuge, puede significar la diferencia entre el ??xito y el fracaso.<br>",
        "descriptionCareer": "Si has pensado en emprender alguna acci??n en tu carrera, por ahora deber??s tener paciencia. Sabes d??nde quieres estar y sabes c??mo llegar all??, ??entonces no te apresures y conf??a en ti mismo!<br><br>Tienes mucho que ofrecer, si colocas la cantidad correcta de energia todo saldr?? bien.<br><br>Pueden crearse problemas en tu lugar de trabajo, con emociones muy altas entre compa??eros. No tomes partido y se diplomatico en situaciones como estas. Posees el conocimiento y la comprensi??n para resolver conflictos, lograr??s grandes cosas de manera tranquila y cooperativa.",
        "descriptionYesNot": "Si",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "??? Paciencia ??? Balance ??? Moderaci??n ??? Tenacidad ??? Carencia ???<br><br><strong>Planeta: </strong> J??piter<br><strong>Letra Hebrea: </strong>  Nun <br><strong>Elemento: </strong>  Tierra<br><strong>Signo: </strong>  Sagitario<br><strong>Numerolog??a: </strong>  14 y 7",
    },{ 
        "name": "El Diablo",
        "number": 15,
        "descriptionDaily": "Intenso y a veces obsesivo. Te enfocas en algo que sigues haciendo hasta que est?? hecho. Est??s m??s preocupado por lo que puedes ver y tocar que por las teor??as de las hadas. Y no tienes mucha paciencia con aquellos que no quieren ensuciarse cuando sea el momento adecuado. Pero cuando juegas, juegas duro, y a nadie le gusta re??rse de lo locos que estamos todos que a ti. Para la personalidad del Diablo, nada es tab??. En lo que a ti concierne, las personas pueden hacer lo que quieran, pero deben hacerlo como si lo dijeran en serio.",
        "descriptionLove": "Las noticias no son buenas. En el amor y las relaciones, El Diablo representa a alguien que es ego??sta, abusivo e infiel, tan atrapado en deseos lujuriosos que no importa mucho m??s.<br><br>La adicci??n y los problemas de salud mental tambi??n pueden estar jugando un papel en la desaparici??n de la relaci??n.<br><br>Si este es el caso, ambos deber??n buscar el tipo de ayuda adecuado para sus luchas individuales. Su relaci??n no est?? necesariamente condenada, pero sanarla ser?? ahora tu prioridad maxima.<br><br>Tal vez seas soltera(o) y sientas que nunca encontrar??s al indicado(a). Tal vez est??s comprometido y, por una u otra raz??n, las cosas no se muevan en la direcci??n correcta.<br><br>No te apresures en renunciar al amor. En su lugar, considera pasar un tiempo contigo mismo y ten salidas individuales para despejar tu mente.",
        "descriptionCareer": "La carta de El Diablo sugiere insatisfacci??n con tu trabajo. Quiz??s est??s sintiendo que no tienes pocas oportunidades en este momento. Podrias sentir que est?? atrapado en un trabajo que poco a poco est?? socavando la confianza en ti mismo y en tu autoestima.<br><br>??Afortunadamente tienes una salida y hay tantas opciones diferentes para ti! Ahora es el momento de mirar sus objetivos profesionales y preguntarse cu??les son sus sue??os. La vida es demasiado corta para estar en un trabajo que odias y que te consume.",
        "descriptionYesNot": "No",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "??? Masoquismo ??? Adicci??n ??? Materialismo ??? Pasiones ??? Conflictos ???<br><br><strong>Planeta: </strong> Saturno<br><strong>Letra Hebrea: </strong>  Samech <br><strong>Elemento: </strong>  Fuego<br><strong>Signo: </strong>  Capricornio<br><strong>Numerolog??a: </strong>  15 y 6",
    },{
        "name": "La Torre",
        "number": 16,
        "descriptionDaily": "Por mucho que intente mantener el mundo estructurado y estable, siempre parece derrumbarse a su alrededor. Justo cuando pones mortero en el ??ltimo ladrillo en su lugar, cae un rayo y est??s comenzando todo de nuevo. O tal vez eres t?? quien est?? sacudiendo las cosas o actuando como un pararrayos para el loco mundo que te rodea. Hay pocas personas m??s capaces de resistir la tormenta que las que nacen con la Torre como s??mbolo. Tu fuerza y fortaleza son enormes, especialmente cuando las cosas se ponen dif??ciles. La experiencia te ha ense??ado que nada dura para siempre, independientemente de lo permanente que parezca. Y de todos modos, a veces los muros se convierten m??s en una prisi??n que en un refugio.",
        "descriptionLove": "En las relaciones, La Torre suele predecir el final de una amistad, una ruptura o un divorcio. Cuando obtienes esta carta, las probabilidades de ??xito no son buenas.<br><br>Puede estar relacionado con el enga??o de alg??n tipo y el eventual descubrimiento de la verdad. Quizas existan momentos de ira y crisis emocionales. Este definitivamente no ser?? el tipo de final amistoso que la mayor??a de la gente espera al cerrar un cap??tulo.<br><br>Perder a la persona que amas o con quien esperabas construir un futuro puede ser una experiencia dolorosamente humillante. Pero si las cosas no est??n destinadas a ser, esta ser?? una transici??n necesaria.<br><br>A veces, la parte m??s dif??cil es el cambio inicial. Recuerda, es mucho mejor aceptar la verdad y que vivir una mentira.",
        "descriptionCareer": "Fuertes transiciones se aproximan. Hay una interrupci??n en tu vida laboral, con un cambio de poder y responsabilidad.<br><br>Es posible que las cosas funcionen a una velocidad lenta en este momento con respecto a tu carrera, existe una resistencia natural por lo no conocido pero los cambios son necesarios y nos ayudan a crecer y tener ??xito.<br><br>Esta carta presagia interrupciones y mucho estres en tu vida laboral, incluso es posible quedar o permanecer desempleado. Sin embargo, esta situaci??n te guia a un camino m??s acorde a ti en tu vida que te permitir?? prosperar.",
        "descriptionYesNot": "No",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "??? Agitaci??n ??? Revelaciones ??? Cambios Repentinos ??? Evitar Riesgos ??? Miedos ???<br><br><strong>Planeta: </strong> Marte<br><strong>Letra Hebrea: </strong>  Hain <br><strong>Elemento: </strong>  Tierra<br><strong>Signo: </strong>  Capricornio<br><strong>Numerolog??a: </strong>  16",
    },{ 
        "name": "La Estrella",
        "number": 17,
        "descriptionDaily": "Lleno de esperanza, incluso en las situaciones m??s sombr??as, tu optimismo es contagioso. Las personas gravitan hacia tu personalidad compasiva y energizante. Tienes una gran fe en la capacidad del Universo para darnos lo que necesitamos cuando m??s lo necesitamos. Has visto lo feas que pueden ser las cosas, pero conservas una devoci??n inquebrantable por la belleza. La personalidad de la Estrella tiene el don del rejuvenecimiento. Eres capaz de reponerte a ti mismo y a los dem??s con tu gracia, encanto y amor por todas las criaturas del universo.",
        "descriptionLove": "Cuando se trata de amor, La Estrella tiene un mensaje claro: suelta tus cargas.<br><br>Sin saberlo, a menudo dejamos que el miedo y las heridas del pasado gu??en nuestras relaciones actuales. Si un amigo o amante nos traiciona, podr??amos tener problemas para confiar en otras personas en nuestras vidas. Es posible que deseemos acercarnos a los dem??s, pero dudamos porque tenemos miedo de sentir el mismo aguij??n que sentimos una vez.<br><br>Centrarse en el pasado, ser paranoico y negarse a ser vulnerable solo atrae m??s de lo que no queremos.<br><br>Si quieres encontrar el amor o hacer crecer una relaci??n actual, practica el arte de dejar ir. Hacerlo traer?? tanto armon??a como felicidad.",
        "descriptionCareer": "Esta carta auguria suerte, logros, premios e incluso fama. Eres un gran trabajador y has seguido diligentemente tus objetivos desde hace un tiempo. A veces sientes que todo el trabajo que has puesto en tu carrera nunca dar?? sus frutos. ??Pero pronto esto cambiar??!<br><br>Las oportunidades y el ??xito se avecinan y cosechar??s las recompensas por las que has estado trabajando tan duro. Mant??n tu cabeza en alto y tu mente enfocada en lo que quieres lograr.<br><br>Cuando las cosas buenas se te presenten, ??debes recordar celebrar tus logros! T??mese el tiempo para recompensarse y tomar un peque??o descanso del trabajo.",
        "descriptionYesNot": "Si",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "??? Esperanza ??? Renovaci??n ??? Inspiraci??n??? Tristeza ??? Distorsi??n ???<br><br><strong>Planeta: </strong> Mercurio<br><strong>Letra Hebrea: </strong>  Peth <br><strong>Elemento: </strong>  Aire<br><strong>Signo: </strong>  Acuario<br><strong>Numerolog??a: </strong>  17 y 8",
    },{ 
        "name": "La Luna",
        "number": 18,
        "descriptionDaily": "A menudo hay un manto de misterio que te rodea, pero ciertamente no es porque no dejes que los dem??s sepan lo que piensas. Est?? dispuesto a hacer las preguntas dif??ciles y enfrentar directamente sus miedos. Tienes una personalidad tan profunda que hace que la gente quiera saber m??s. Tus amigos y socios a menudo tienen la sensaci??n de que no est??s revelando todo, incluso si hablas mucho. Las personalidades de la Luna, altamente intuitivas y, a menudo, ps??quicas, suelen estar interesadas en lo oculto y/u otros temas del lado m??s oscuro.",
        "descriptionLove": "Esta carta suele significar falta de comunicaci??n. Podr??as estar teniendo discusiones m??s frecuentes con tu pareja debido a esto. Como resultado, su relaci??n sufrir?? falta de armon??a y tambi??n ser?? tensa.<br><br>Tendr??s que canalizar gran parte de esa energ??a negativa en motivaci??n para traer armon??a a su relaci??n una vez m??s. Permite que la luz de La Luna guie tu camino.<br><br>Si eres soltero, alguien que te interesa puede no ser todo lo que parece. Puede que te este enga??ando intencionalmente o se oculta detras de una mascara. Aseg??rate de tomarte el tiempo para conocer verdaderamente a esta persona antes de sumergirte demasiado en una nueva relaci??n con ella.",
        "descriptionCareer": "La Luna a menudo aparecer?? cuando est??s confundido y ansioso acerca de tu direcci??n en la vida. Preguntate, ??eres feliz en tu trabajo en este momento? ??Te sientes defraudado y desilusionado con tu carrera? ??Tu coraz??n no est?? en lo que haces ahora?<br><br>Esta carta aparecer?? a menudo cuando tengas un trabajo bien pagado pero, en ??ltima instancia, sin alma. Hay m??s en la vida que el ??xito y las riquezas materiales. Si est??s viviendo la vida simplemente por dinero, est??s bajo una ilusi??n. Para ser verdaderamente feliz, debes estar espiritual y emocionalmente realizado.",
        "descriptionYesNot": "No",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "??? Miedo ??? Ansiedad ??? Subconsciente ??? Ilusi??n ??? Confusi??n ???<br><br><strong>Asociaci??n: </strong> La Luna<br><strong>Letra Hebrea: </strong>  Tzade <br><strong>Elemento: </strong>  Agua<br><strong>Signo: </strong>  Piscis<br><strong>Numerolog??a: </strong>  18 y 9",
    },{ 
        "name": "El Sol",
        "number": 19,
        "descriptionDaily": "Eres el tipo de persona que la gente nota. Aunque juguet??n y divertido, ciertamente no eres un peso ligero. El Sol es el centro de nuestro universo y, al igual que t??, disfrutas ser el centro del escenario compartiendo tu brillo con el mundo. Te resistes a los l??mites y requieres el dominio de tu propio destino. De hecho, es dif??cil para ti doblegarte a la voluntad de otro, y tu disposici??n alegre r??pidamente se vuelve nublada si sientes que alguien est?? tratando de controlarte. Est??s dispuesto a ser vulnerable, pero solo si eso significa que eres libre de ser tu verdadero yo. Decididamente art??stica e imaginativa, la personalidad del Sol brilla m??s cuando se le da la oportunidad de crear. Y crear??n lo suficiente, grandes, brillantes y calientes para que todos los vean.",
        "descriptionLove": "El Sol denota pasi??n y alegr??a en tu vida. Este es el momento de deleitarse con el amor que t?? y tu pareja comparten. Si han estado comprometidos durante un largo per??odo de tiempo, es f??cil olvidar lo que los uni?? en primer lugar.<br><br>El Sol dice que es hora de revitalizar la pasi??n en su relaci??n. Como resultado, la qu??mica entre t?? y tu pareja ser?? m??s fuerte que nunca. Tambien sera un buen momento para crear compromisos mas formales.<br><br>Si eres soltero, no te preocupes. Esta carta te insta a encontrar la felicidad y la comodidad al vivir una vida de soltero.<br><br>Tu alegr??a es tan contagiosa que cuando alguien te ve, tambi??n adquiere confianza. ",
        "descriptionCareer": "??Esta carta simboliza el ??xito, momentos muy positivos te esperan! Tus objetivos est??n a tu alcance en este momento, as?? que sigue avanzando y pronto alcanzar??s tus sue??os.<br><br>Habr??n nuevas oportunidades en tu camino con respecto al trabajo, as?? que recuerda mantener tu mente abierta.<br><br>Eres una persona muy solidaria y siempre puedes animar a la gente, y todos los que te rodean realmente lo aprecian. Extiende tu energia y mantente brillando.",
        "descriptionYesNot": "Si",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "??? Emoci??n ??? ??xito ??? Positividad ??? Felicidad ??? Pureza ???<br><br><strong>Asociaci??n: </strong> El Sol<br><strong>Letra Hebrea: </strong>  Qoph <br><strong>Elemento: </strong>  Fuego<br><strong>Signo: </strong>  Leo<br><strong>Numerolog??a: </strong>  19 y 1",
    },{ 
        "name": "El Juicio",
        "number": 20,
        "descriptionDaily": "Los conceptos de resurrecci??n y renovaci??n son importantes para su vida. Alcanzando lo divino, encuentras fuerza en la reflexi??n honesta y la inspiraci??n en los ciclos cambiantes de la vida. Las personas dependen de su integridad y sinceridad. Tienes un aura de sinceridad que pocos pueden igualar. Eres especialmente bueno en el manejo de la interacci??n de tu conciencia, inconsciente y conciencia superior. A menudo, una parte integral de su comunidad, la personalidad del Juicio se siente especialmente c??moda cuando ayuda a otros a encontrar sus propias fuentes de renovaci??n.",
        "descriptionLove": "Es hora de considerar lo que realmente necesitas en una relaci??n. Si esta relaci??n es importante para ti, deben apreciarse el uno al otro.<br><br>??Tal vez t?? y tu pareja se est??n juzgando con demasiada dureza? ??O tal vez sigues recordando viejos tiempos y no puedes valorar tu relaci??n como es en este momento?<br><br>La comunicaci??n es vital, descubra aquello que es mejor para ambos.<br><br>Si eres soltero, no te lances de cualquier manera a la primera relaci??n que se presente. En su lugar, reflexiona y piensa lo que realmente estas buscando en una pareja.<br><br>Esta carta te aconseja no juzgar e intentar salir con alguien fuera de sus preferencias habituales. Tal vez algo hermoso florezca cuando te abras a alguien con una visi??n o antecedentes completamente diferentes que de otro modo te habr??as perdido.",
        "descriptionCareer": "Momento de despertar. ??Te sientes empujado hacia una carrera diferente? Ese podr??a ser el prop??sito de llamarte. O tal vez nuevos cambios te llevan a tomar diferentes caminos. Esto puede ser estresante a veces, pero debes tomar el control para que no sea peor.<br><br>??Ha sido su lugar de trabajo un lugar de tensi??n recientemente? Tus acciones est??n impactando a quienes te rodean. Evaluate y realiza una revisi??n imparcial de c??mo tu comportamiento podr??a estar afectando a los dem??s. Luego, observa d??nde podr??as mejorar.<br><br>Esta carta se trata menos de emitir un juicio severo y m??s de ser consciente de nuestras acciones y asumir la responsabilidad de ellas.",
        "descriptionYesNot": "Si",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "??? Renacimiento ??? Llamado Interno ??? Absoluci??n ??? Decisiones Finales ??? Triunfo ???<br><br><strong>Asociaci??n: </strong> Plut??n<br><strong>Letra Hebrea: </strong>  Resh <br><strong>Elemento: </strong>  Aire<br><strong>Signo: </strong>  Piscis<br><strong>Numerolog??a: </strong>  20 y 2",
    },{ 
        "name": "El Mundo",
        "number": 21,
        "descriptionDaily": "Tienes una extra??a habilidad para fusionar tu yo consciente con tu yo inconsciente. Entiendes que en ??ltima instancia son lo mismo y tus pensamientos y creatividad fluyen libremente de uno a otro. Puedes crear un universo en una taza de t??. La estructura no te estorba. Solo te desaf??a a encontrar la libertad dentro de ??l. Est??s entusiasmado y dispuesto a probarlo todo, porque todo vale la pena y es posible. Si puedes pensarlo, sabes que puede ser real. Abrazas la alegr??a de la vida y animas a todos a unirse a ti. La personalidad del Universo equilibra las contradicciones de la vida como un profesional y es m??s feliz cuando todos bailan.",
        "descriptionLove": "El Mundo representa la total realizaci??n de lo que deseemos hacer y tener. Si el amor y el romance son lo que m??s deseas, este es tu mejor momento.<br><br>Esta fase de tu vida ser?? una en la que reunir??s todas las partes y lograr??s una sensaci??n de equilibrio y plenitud.<br><br>Si eres soltero y quieres continuar con ese estilo de vida, no hay nada de malo en esto. Pero si quieres conocer a tu alma gemela, la carta Mundo sugiere que la relaci??n podr??a ser una que se desarrolle a distancia (al menos al principio).<br><br>Si ya est?? comprometido, esta podr??a ser una oportunidad para que ustedes dos trabajen al un??sono y creen una hermosa vida juntos. Si ha tenido problemas con la intimidad, las cosas mejorar??n pronto.",
        "descriptionCareer": "El Mundo sugiere que has completado tus objetivos laborales, o que estaras cerca de completarlos. Lo m??s probable es que tengas un trabajo en el que te sientas bien, all?? estimulas tu intelecto y espiritualidad. Tal vez ha habido desaf??os, pero recientemente los superaste y descubriste qu?? necesita hacer exactamente para tener ??xito.<br><br>Si te sientes realizado y estas teniendo buenos resultados, recuerda tambien celebrarlo y tomarte un momento para descansar.<br><br>Probablemente est??s mirando hacia adelante en la vida, hacia la siguiente etapa de tucarrera. Esto es natural y significa que podr??s progresar m??s. Pero recuerda reconocer tus logros.",
        "descriptionYesNot": "Si",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "??? Realizaci??n ??? Viajes ??? Logros ??? Suerte ??? Integraci??n ???<br><br><strong>Asociaci??n: </strong> Saturno<br><strong>Letra Hebrea: </strong>  Shin <br><strong>Elemento: </strong>  Agua<br><strong>Signo: </strong>  Escorpio<br><strong>Numerolog??a: </strong>  21 y 3",
    },
]

function dailyResult() {
    var number =  Math.floor(Math.random() * 22);

    var cardResult = document.querySelector(".daily-card-result2 img");
    var descriptionResult = document.querySelector(".daily-text-content");

    cardResult.src="./images/card" + number + ".png";
    descriptionResult.innerHTML = "<p>" + cards[number].descriptionDaily + "</p>";

    setTimeout(flipped, 2000);
}

function loveResult() {
    var number =  Math.floor(Math.random() * 22);

    var cardResult = document.querySelector(".daily-card-result2 img");
    var descriptionResult = document.querySelector(".daily-text-content");

    cardResult.src="./images/card" + number + ".png";
    descriptionResult.innerHTML = "<p>" + cards[number].descriptionLove + "</p>";

    setTimeout(flipped, 2000);
}

function yesnotResult() {
    var number =  Math.floor(Math.random() * 22);
    var question = document.querySelector('#textarea-question').value
    var name = document.querySelector('#textarea-name').value

    var cardResult = document.querySelector(".daily-card-result2 img");
    var descriptionResult = document.querySelector(".daily-text-content");

    cardResult.src="./images/card" + number + ".png";
    descriptionResult.innerHTML = "<h1>" + cards[number].descriptionYesNot + "</h1>" + "<br><p><i>'" + question + "'</i></p>" + "<br><p>-" + name + "</p>";

    setTimeout(flipped, 2000);
}

function careerResult() {
    var number =  Math.floor(Math.random() * 22);

    var cardResult = document.querySelector(".daily-card-result2 img");
    var descriptionResult = document.querySelector(".daily-text-content");

    cardResult.src="./images/card" + number + ".png";
    descriptionResult.innerHTML = "<p>" + cards[number].descriptionCareer + "</p>";

    setTimeout(flipped, 2000);
}

function numericResult() {
    let cardResult = document.querySelector(".daily-card-result2 img"),
        descriptionResult = document.querySelector(".daily-text-content"),
        days = String(document.getElementById('dias').value),
        months = String(document.getElementById('meses').value),
        years = String(document.getElementById('years').value),
    
        total = String(days + months + years),
        resTotal = 0;

    total.split('').forEach(c => resTotal += parseInt(c));
    
    if (resTotal < 22) {
        cardResult.src="./images/card" + resTotal + ".png";
        descriptionResult.innerHTML = "<h1>" + resTotal + "</h1>" + "<br><p>" + cards[resTotal].descriptionNumeric + "</p>";
    } else if (resTotal == 22) {
        cardResult.src="./images/card" + 0 + ".png";
        descriptionResult.innerHTML = "<h1>" + 22 + "</h1>" + "<br><p>" + cards[resTotal].descriptionNumeric + "</p>";
    } else {
      let resTotal2 = 0;
      String(resTotal).split('').forEach(c => resTotal2 += parseInt(c));
        if (resTotal2 < 22) {
            cardResult.src="./images/card" + resTotal2 + ".png";
            descriptionResult.innerHTML = "<h1>" + resTotal2 + "</h1>" + "<br><p>" + cards[resTotal2].descriptionNumeric + "</p>";
        } else {
            cardResult.src="./images/card" + 0 + ".png";
            descriptionResult.innerHTML = "<h1>" + 22 + "</h1>" + "<br><p>" + cards[0].descriptionNumeric + "</p>";
        }
    }
    setTimeout(flipped, 2000);
}

//CARD ANIMATION
function flipped() {
    const card = document.querySelector('.card__inner');
    card.classList.toggle('is-flipped');
}

//TAROT NUMERICO

//Months Array
function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
};
var dayOfMonth = range(1, 31);

let groupDays = document.createElement('optgroup');
document.getElementById('dias').appendChild(groupDays);

dayOfMonth.forEach(dayOfMonth => {
let option = document.createElement('option');
groupDays.appendChild(option);

option.innerHTML += dayOfMonth;
});

//Years Array
function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
};
var years = range(1922, 2022);
years.sort(function(a, b){return b - a});

let groupYears = document.createElement('optgroup');
document.getElementById('years').appendChild(groupYears);

years.forEach(years => {
let option = document.createElement('option');
groupYears.appendChild(option);

option.innerHTML += years;
});