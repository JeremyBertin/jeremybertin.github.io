var CURRENT_LANGUAGE = " ";

var NUMBER_OF_TEXT_FIELDS = 47;

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
    "Après avoir complété son BAC en cinéma à l'UQÀM, Kalina à rapidement réalisé qu’elle serait détruite par la maladie mentale dans sa famille si elle ne tentais pas de la comprendre. <br> <br> Ce processus a donné naissance à son documentaire Manic, produit par Eyesteelfilm et en cours de post-production.",
    "",
    "Elle développe présentement une expérience de réalité virtuelle permettant au spectateur de naviguer à travers l'imagination d'une personne atteinte du trouble bipolaire. Le projet à été sélectionné par la SODEC pour participer à la première édition de l'Atelier Grand Nord VR.",
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
    "L’expression du temps",
    "Rencontre avec Yvonne Sirois, la première photographe de Matane.",
    "Votre Nom ",
    "Votre Courriel ",
    "Votre Message ",
];

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
    "About Me",
    "After completing her degree in film production in Montreal, filmmaker Kalina Bertin quickly realized that if she didn’t set out to understand the mental illness in her family it would destroy her. <br> <br> This process gave birth to her documentary film Manic which explores the legacy of bipolar disorder in her family.",
    "",
    "Aiming to build empathy and awareness toward such a complex condition, she currently is directing a virtual reality project which will enable the viewer to explore the world of manic-depression from within.",
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
    "L’expression du temps",
    "Meet Yvonne Sirois, the first woman photographer of Matane.",
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
