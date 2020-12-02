var CURRENT_LANGUAGE = " ";

var NUMBER_OF_TEXT_FIELDS = 52;

var LIME = "#01FF70";

var FRENCH = [
    "Kalina Bertin | Cinéaste",
    "Films",
    "Photographie",
    "à propos",
    "Contact",
    "Kalina Bertin",
    "Cinéaste",
    "",
    "Videography",
    "Demain à l'Aube",
    "Demain à l'Aube est un court métrage mettant en vedette Monique Mercure et Danielle Proulx.",
    " Mon role: Cinéaste",
    "Le film a été tourné avec la Arri Alexa en usant des objectifs Zeiss Prime.",
    "Réalisation/Director : Patrick Francke-Sirois",
    "Byblos",
    "En poussant son chariot dans les étroites allées du marché, Zeina tombe nez-à-nez avec un homme d’allure étrangement familière, évoquant un moment irrésolu de son enfance. Byblos nous transporte entre passé et présent où l’on découvre l’histoire d’une jeune femme qui tente de trouver, par tous les moyens, un sens à son passé, puis son identité.",
    " Mon role: Cinéaste",
    "Mettant en vedette Raia Haidar, Rony Kramer, Aida Nader et Galia Oliel-Sabbag.<br><br> Le film a été tourné avec la Arri Alexa en usant des objectifs Zeiss Prime. ",
    "Réalisation : Joanne Geha <br> <br> Scénarisation : Joanne Geha, Kalina Bertin",
    "Délit de Fuite",
    "Délit de Fuite est un court métrage mettant en vedette Julien Poulin et Catherine De Léan.",
    " Mon role: Cinéaste",
    "Le film a été filmé avec la Arriflex 16SR2, en 16 mm",
    "Réalisation: Patrick Francke-Sirois",
    "L’expression du temps",
    "Rencontre avec Yvonne Sirois, la première photographe de Matane.",
    " Mon role: Cinéaste",
    "Filmé avec Sony XDCAM EX PMW-EX1R et la Bolex H16 REX-5 16 mm.",
    "Réalisation: Patrick Francke-Sirois",
    "À propos",
    "Kalina Bertin <br> Réalisatrice, Productrice, Directrice de la photographie,",
    "Après avoir obtenu son diplôme en cinéma à l’UQÀM, la réalisatrice Kalina Bertin a rapidement pris conscience que si elle ne cherchait pas à comprendre la maladie mentale qui rongeait son frère et sa soeur, cela la détruirait. Ce processus a donné vie à son fascinant documentaire Manic qui explore l’héritage du trouble bipolaire dans sa famille. Manic a eu sa première mondiale au festival Hot Docs à Toronto en 2017 où Kalina a reçu le prix Don Haig Pay it forward. Son documentaire fut nominé par l’Académie Canadienne du Cinéma et de Télévision pour deux Prix Écrans canadiens dans les catégories meilleur documentaire et meilleur montage. Dans le cadre du Gala Québec Cinéma, Manic fut nominé pour meilleur documentaire puis gagna le prix Iris dans la catégorie meilleur montage. Le film a également remporté le Spirit Award au Brooklyn Film Festival; le prix spécial du jury au Cinema on the Bayou Film Festival en Louisiane puis à reçue une mention spéciale du jury au Front Doc International Film Festival en Italie. Manic a été reçu dans des salles combles à travers le monde, du Moscow International Film Festival en Russie jusqu’au Rencontres International Du Cinéma Documentaire de Montréal.",
    "Dans le but de susciter de l’empathie envers le trouble bipolaire et continuer à explorer cette condition très complexe, Kalina réalise ensuite ManicVR, une œuvre de réalité virtuelle interactive qui permettra à l’utilisateur d’explorer le monde du trouble bipolaire entendu de l’intérieur. Le projet a été développé à l’Atelier Grand Nord RV de la SODEC organisé en collaboration avec MUTEK. Kalina à ensuite été invitée a discuter du processus de création de ManicVR au Laboratoire Open Documentary du MIT. Manic VR a été présenté en première mondiale au prestigieux Sheffield Doc/Fest en Angleterre en Juin 2018, avant de se rendre en compétition au Suisse au World VR Forum puis au Taipei Film Festival à Taiwan. ManicVR a été produits par EyeSteelFilm et DPT. <br> <br> Kalina travaille présentement sur son prochain long-métrage documentaire.",
    "Média",
    "Trouvez moi sur IMDB!",
    "Trouvez moi sur Vimeo!",
    "Trouvez moi sur Linkedin!",
    "Contactez-moi",
    "Envoyer",
    "Demain à l'Aube",
    "Demain à l'Aube est un court métrage mettant en vedette Monique Mercure et Danielle Proulx.",
    "Byblos",
    "En poussant son chariot dans les étroites allées du marché, Zeina tombe nez-à-nez avec un homme d’allure étrangement familière...",
    "Délit de Fuite",
    "Délit de Fuite est un court métrage mettant en vedette Julien Poulin et Catherine De Léan.",
     "Manic",
    "Face aux problèmes psychologiques qu’endurent son frère et sa sœur, la cinéaste Kalina Bertin explore le passé de son père pour mieux comprendre le mal-être qui ronge sa famille.",
    "Face aux problèmes psychologiques qu’endurent son frère et sa sœur, la cinéaste Kalina Bertin explore le passé de son père pour mieux comprendre le mal-être qui ronge sa famille. Peu à peu, elle découvre un autre homme que celui dont elle se souvient : gourou de secte, bipolaire, mythomane, aussi séduisant que manipulateur. Manic nous entraîne dans les multiples vies de cet homme insaisissable et témoigne avec finesse des conséquences ramifiées de la maladie mentale. En ouvrant les verrous du passé, c’est bien le présent que la cinéaste tente de reconstruire : des films de famille parfois tournés par son père aux images d’aujourd’hui saisies sur le vif, elle renoue le dialogue et transforme son journal intime en thérapie collective. Un drame familial à la fois réflexif et émouvant.",
    "Conférences",
    "Nominé pour 2 prix Académie Canadienne du cinéma et de la télévision",
    "Manic est désormais disponible sur Video On Demand.",
    "Site Web réalisé par Jeremy Bertin",
    "Votre Nom ",
    "Votre Courriel ",
    "Votre Message ",
];

//    "L’expression du temps",
//    "Rencontre avec Yvonne Sirois, la première photographe de Matane.",
//   "L’expression du temps",
//    "Meet Yvonne Sirois, the first woman photographer of Matane.",

var ENGLISH = [
    "Kalina Bertin | Filmmaker",
    "Films",
    "Photography",
    "About",
    "Contact",
    "Kalina Bertin",
    "Filmmaker",
    "",
    "Films",
    "Demain à l'Aube",
    "Demain à l'Aube is a short film starring Monique Mercure et Danielle Proulx.",
    " My role: Cinematographer",
    "The film was shot with the Arri Alexa using Zeiss Prime lenses.",
    "Director: Patrick Francke-Sirois",
    "Byblos",
    "Byblos follows the story of Zeina, a young Lebanese woman who must face the ghosts of her past. The pace of the film draws you in closely, as each flashback has something new to reveal. Will her memories suffice; or is she about to discover another spoon full of secrets?",
    " My role: Cinematographer and Screenwriter",
    "Director : Joanne Geha",
    "Screenwriters : Joanne Geha, Kalina Bertin",
    "Délit de Fuite",
    "Délit de Fuite is a short film starring Julien Poulin et Catherine De Léan.",
    " My role: Cinematographer",
    "The film was shot with an Arriflex 16SR2, in 16 mm film.",
    "Director : Patrick Francke-Sirois",
    "L’expression du temps",
    "Meet Yvonne Sirois, the first woman photographer of Matane.",
    " My role: Cinematographer",
    "Shot with the Sony XDCAM EX PMW-EX1R and a Bolex H16 REX-5  on16 mm film.",
    "Director: Patrick Francke-Sirois",
    "About",
    "Kalina Bertin <br> Director, Producer, Cinematographer,",
    "Kalina Bertin is an award winning filmmaker based in Montreal. After completing her degree in film production at UQÀM, she quickly realized that if she didn’t set out to understand the mental illness in her family it would destroy her. This process gave birth to her award winning documentary film <a class='about-text-link' href='/manic-documentary/' target='_blank'> Manic </a>, which explores the legacy of bipolar disorder in her family. Manic had it’s world premiere at <a class='about-text-link' href='https://www.hotdocs.ca/archive/films/manic' target='_blank'> Hot Docs in 2017 </a>, where Kalina received the <a class='about-text-link' href='https://www.hotdocs.ca/i/award-winners' target='_blank'> Don Haig Pay it forward award </a>. In 2018, Manic was nominated by <a class='about-text-link' href='https://www.academy.ca/2018/manic/' target='_blank'> the Canadian Academy of Cinema and Television </a> for two Screen Awards in the categories of best documentary and best editing. The film subsequently won an Iris award for Best editing at the Québec Cinéma Gala. It was also awarded the <a class='about-text-link' href='http://www.brooklynfilmfestival.org/winners/' target='_blank'> Spirit Award </a> at the Brooklyn film festival; the special jury prize at the Cinema on the Bayou Film Festival in Louisiana and received a special jury mention at the Front Doc International Film Festival in Italy. Manic has been acclaimed by audiences across the world, from the Moscow International Film Festival to the <a class='about-text-link' href='http://ridm.ca/en/films/manic' target='_blank'> Montreal International Documentary film Festival </a>. <br> <br>",
    "Aiming to build empathy and awareness toward bipolar disorder, Kalina then went on to direct ManicVR, a virtual reality experience which enables the viewer to explore the world of manic depression from within. She initially presented this project in development at the <a class='about-text-link' href='http://opendoclab.mit.edu/' target='_blank'> MIT Open Documentary lab </a> and at SODEC’s <a class='about-text-link' href='http://www.mutek.org/en/img/2016/atelier-grand-nord-vr' target='_blank'> Atelier Grand Nord VR </a>, organized in collaboration with MUTEK. ManicVR had its world premiere at the prestigious Sheffield Doc/Fest in England in June 2018 before heading to Switzerland at the World VR Forum and Taiwan, at the Taipei Film Festival. ManicVR is produced by <a class='about-text-link' href='http://www.eyesteelfilm.com/' target='_blank'> EyeSteelFilm </a>, a two-time Emmy award winning production company based in Montreal and <a class='about-text-link' href='http://dpt.co/en/home/' target='_blank'> DPT creative digital studio</a>. <br> <br> Kalina is currently working on her next documentary film.",
    "Media",
    "Find me on IMDB!",
    "Find me on Vimeo!",
    "Find me on Linkedin!",
    "Contact Me",
    "Send Message",
    "Demain à l'Aube",
    "Demain à l'Aube is a short film starring Monique Mercure et Danielle Proulx.",
    "Byblos",
    "Byblos follows the story of Zeina, a young Lebanese woman who must face the ghosts of her past...",
    "Délit de Fuite",
    "Délit de Fuite is a short film starring Julien Poulin and Catherine De Léan.",
    "Manic",
    "Manic chronicles filmmaker Kalina Bertin’s struggle to make sense of the legacy of mental illness wreaking havoc over her siblings’ lives.",
    "Manic chronicles filmmaker Kalina Bertin’s struggle to make sense of the legacy of mental illness wreaking havoc over her siblings’ lives. Convinced that her father holds a key piece of the      puzzle, she sets out to find the truth about him, and discovers a man known alternately as a cult leader, a scam artist, a prophet, and a father of fifteen. Manic invites the viewer on a        compelling and intimate journey through time and through the mind, where past and present collide.",
    "Talks and Conferences",
    "Nominated for 2 Canadian Screen Awards",
    "Manic is now available on Video On Demand.",
    "Website Built by Jeremy Bertin",
    "Your Name ",
    "Your Email ",
    "Your Message ",
];



$(document).ready(function(){
    
    var englishMenu = $("#en");
    
    //event listener for change language en click
     englishMenu.click(function() {
         changeToEnglish();
        });
    
      //event listener for change language fr click
     $("#fr").click(function() {
         changeToFrench();
        });
    
     changeToEnglish();
     changeLanguageMenuColor();
    
    });


function changeToFrench(){
    
    if(CURRENT_LANGUAGE != "fr"){
        
         CURRENT_LANGUAGE = "fr";

        changeLanguageMenuColor();
        
        for(var i=0;i<NUMBER_OF_TEXT_FIELDS;i++){
            $("#text" + i).html(FRENCH[i]);
        }
        
    $('#name').attr('placeholder',FRENCH[NUMBER_OF_TEXT_FIELDS]);
    $('#email').attr('placeholder',FRENCH[NUMBER_OF_TEXT_FIELDS + 1]);
    $('#message').attr('placeholder',FRENCH[NUMBER_OF_TEXT_FIELDS + 2]);
    
    }
       
}

function changeToEnglish(){
    
    if(CURRENT_LANGUAGE != "en"){

        CURRENT_LANGUAGE = "en";
        
      changeLanguageMenuColor();
        
        for(var i=0;i<NUMBER_OF_TEXT_FIELDS;i++){
            $("#text" + i).html(ENGLISH[i]);
        }
        
    $('#name').attr('placeholder',ENGLISH[NUMBER_OF_TEXT_FIELDS]);
    $('#email').attr('placeholder',ENGLISH[NUMBER_OF_TEXT_FIELDS + 1]);
    $('#message').attr('placeholder',ENGLISH[NUMBER_OF_TEXT_FIELDS + 2]);
        

    }
       
}

function changeLanguageMenuColor(){
    
    if(CURRENT_LANGUAGE == "en"){
        
        $( "#en" ).addClass( "languagesActive" );
        $( "#fr" ).removeClass( "languagesActive" );
     
    }
    else if(CURRENT_LANGUAGE == "fr"){

        $( "#fr" ).addClass( "languagesActive" );
        $( "#en" ).removeClass( "languagesActive" );
    }
     
}
