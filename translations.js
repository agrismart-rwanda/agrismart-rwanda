// translations.js

const translations = {
    en: {
        // Header & Navigation
        header: {
            home: "Home",
            crops: "Crops",
            pests: "Pests",
            seasons: "Seasons",
            contact: "Contact",
            login: "Login"
        },
        // Crops Page Example (you can extend to all crops)
        crops: [
            {name: "Maize", description: "Staple cereal crop, requires moderate rainfall."},
            {name: "Beans", description: "High-protein legume, improves soil fertility."},
            {name: "Cassava", description: "Drought-resistant tuber crop."},
            {name: "Sweet Potatoes", description: "Rich in vitamins and easy to grow."}
            // add all crops similarly
        ],
        // Pests Page
        pests: [
            {name: 'Fall Armyworm', measure: 'Use integrated pest management, rotate crops, and apply recommended insecticides.'},
            {name: 'Colorado Potato Beetle', measure: 'Handpick beetles, use neem oil, and rotate potato crops.'},
            {name: 'Aphids', measure: 'Spray with insecticidal soap, encourage natural predators like ladybugs.'},
            {name: 'Banana Weevil', measure: 'Remove infected plants, apply insecticides, and practice crop sanitation.'},
            {name: 'Whiteflies', measure: 'Use yellow sticky traps and biological control agents.'},
            {name: 'Cutworms', measure: 'Apply barrier methods, plow soil to expose larvae.'},
            {name: 'Leaf Miners', measure: 'Remove affected leaves and use biological control.'},
            {name: 'Spider Mites', measure: 'Spray miticides and maintain humidity to reduce infestation.'},
            {name: 'Thrips', measure: 'Use insecticidal sprays and encourage natural predators.'},
            {name: 'Mealybugs', measure: 'Spray with insecticidal soap and remove heavily infested parts.'},
            {name: 'Cabbage Worm', measure: 'Handpick larvae and use Bt-based biological insecticides.'},
            {name: 'Nematodes', measure: 'Rotate crops and use nematicides where appropriate.'},
            {name: 'Stemborer', measure: 'Plant resistant varieties and apply insecticides.'},
            {name: 'Grasshoppers', measure: 'Use chemical sprays and biological predators.'},
            {name: 'Locusts', measure: 'Monitor swarms and apply approved insecticides.'},
            {name: 'Red Spider Mite', measure: 'Increase humidity, use miticides, and remove infested leaves.'},
            {name: 'Root-knot Nematodes', measure: 'Rotate crops and use nematode-resistant varieties.'},
            {name: 'Fruit Fly', measure: 'Use bait traps and timely harvesting.'},
            {name: 'Mango Hopper', measure: 'Spray neem oil and remove infested shoots.'},
            {name: 'Banana Aphid', measure: 'Control with insecticidal sprays and natural predators.'},
            {name: 'Potato Tuber Moth', measure: 'Use pheromone traps and store tubers properly.'},
            {name: 'Bean Fly', measure: 'Plant resistant varieties and apply recommended insecticides.'},
            {name: 'Cabbage Aphid', measure: 'Spray with insecticidal soap and encourage ladybugs.'},
            {name: 'Tomato Hornworm', measure: 'Handpick larvae and use Bt sprays.'},
            {name: 'Okra Aphid', measure: 'Spray neem oil and encourage beneficial insects.'},
            {name: 'Rice Weevil', measure: 'Store grains in sealed containers and use fumigants if necessary.'},
            {name: 'Wheat Aphid', measure: 'Use resistant varieties and apply insecticides carefully.'},
            {name: 'Sorghum Midge', measure: 'Plant early maturing varieties and remove affected panicles.'},
            {name: 'Maize Weevil', measure: 'Store grains properly and apply safe insecticides.'},
            {name: 'Groundnut Leaf Miner', measure: 'Remove infested leaves and use insecticides.'},
            {name: 'Soybean Aphid', measure: 'Apply neem oil or insecticidal soap and encourage natural predators.'},
            {name: 'Citrus Leaf Miner', measure: 'Prune affected leaves and apply approved insecticides.'},
            {name: 'Potato Aphid', measure: 'Use natural predators and insecticidal sprays.'},
            {name: 'Tomato Fruitworm', measure: 'Apply Bt or insecticides and remove infected fruits.'},
            {name: 'Cotton Bollworm', measure: 'Plant resistant varieties and use recommended insecticides.'},
            {name: 'Tobacco Whitefly', measure: 'Use yellow sticky traps and insecticides as needed.'},
            {name: 'Sugarcane Borer', measure: 'Remove infected stems and apply recommended insecticides.'},
            {name: 'Cabbage Looper', measure: 'Handpick larvae and apply Bt sprays.'},
            {name: 'Rice Stem Borer', measure: 'Apply insecticides and rotate crops.'},
            {name: 'Banana Sigatoka', measure: 'Remove affected leaves and apply fungicides.'}
        ],
        // Seasons Page
        seasons: {
            mainSeasons: [
                {
                    name: "Dry Season",
                    months: "June - September",
                    characteristics: "Minimal rainfall, sunny days, lower humidity. Ideal for irrigation-dependent crops and land preparation.",
                    crops: ["Maize", "Beans", "Cassava", "Sweet Potatoes"]
                },
                {
                    name: "Short Rainy Season",
                    months: "October - November",
                    characteristics: "Moderate rainfall, good for planting short-cycle crops. Soil moisture is optimal for germination.",
                    crops: ["Irish Potatoes", "Wheat", "Vegetables", "Beans"]
                },
                {
                    name: "Long Rainy Season",
                    months: "March - May",
                    characteristics: "Heavy rainfall, high humidity. Main planting season for most crops. Watch for waterlogging and erosion.",
                    crops: ["Maize", "Beans", "Sorghum", "Rice"]
                }
            ],
            plantingCalendar: [
                {month: "January", task: "Prepare land for long rainy season. Plant vegetables and short-cycle crops."},
                {month: "February", task: "Continue land preparation. Start planting early maize and beans."},
                {month: "March", task: "Main planting season begins. Plant maize, beans, sorghum."},
                {month: "April", task: "Continue planting. Weed management and pest control important."}
            ],
            tips: [
                {title: "Soil Preparation", content: "Prepare your land during the dry season to take advantage of the first rains. Use organic manure to improve soil fertility."},
                {title: "Crop Rotation", content: "Practice crop rotation between seasons to maintain soil health and reduce pest buildup."},
                {title: "Water Management", content: "During rainy seasons, ensure proper drainage to prevent waterlogging. In dry seasons, use irrigation wisely."}
            ]
        }
    },
    // Kinyarwanda (RW)
    rw: {
        header: {
            home: "Ahabanza",
            crops: "Ibihingwa",
            pests: "Ibyorezo",
            seasons: "Ibihe",
            contact: "Twandikire",
            login: "Injira"
        },
        crops: [
            {name: "Ibigori", description: "Icyatsi kiboneka cyane, gisaba imvura ihagije."},
            {name: "Ibishyimbo", description: "Icyatsi gifite poroteyine nyinshi, gikiza ubutaka."},
            {name: "Imyumbati", description: "Ikihingwa cyihanganira ubushyuhe buke."},
            {name: "Ibirayi", description: "Byuzuyemo intungamubiri kandi byoroshye gukura."}
        ],
        pests: [
            {name: 'Fall Armyworm', measure: 'Koresha gucunga ibyorezo byuzuye, hindura ibihingwa, unyure ku binyabutabire byemewe.'},
            {name: 'Colorado Potato Beetle', measure: 'Kuramo ibinyabutabire n’intoki, koresha amavuta ya neem, kandi uhindure ibihingwa by’ibirayi.'},
            {name: 'Aphids', measure: 'Sasa ifu yica udukoko, kandi shyigikira abasirikare kamere nka ladybugs.'},
            {name: 'Banana Weevil', measure: 'Kuramo ibihingwa byanduye, koresha ibinyabutabire, kandi utegure ubutaka.'},
            {name: 'Whiteflies', measure: 'Koresha amarobo y’umuhondo n’uburyo bw’ibinyabuzima.'},
            {name: 'Cutworms', measure: 'Shyiraho imipaka, uhindure ubutaka kugirango ugaragaze larvae.'},
            {name: 'Leaf Miners', measure: 'Kuramo amababi yangiritse kandi ukoreshe uburyo bw’ibinyabuzima.'},
            {name: 'Spider Mites', measure: 'Sasa miticide kandi uzamure ubushyuhe kugirango ugabanye ibyorezo.'},
            {name: 'Thrips', measure: 'Koresha ibisuka byica udukoko kandi shyigikira abashinzwe kamere.'},
            {name: 'Mealybugs', measure: 'Sasa ifu yica udukoko kandi ukure ibice byanduye cyane.'},
            // continue translation for all pests...
        ],
        seasons: {
            mainSeasons: [
                {
                    name: "Igihe cy'Umuhindo",
                    months: "Werurwe - Nzeri",
                    characteristics: "Imvura nkeya, amasaha y'izuba, ubushyuhe bugabanutse. Birambuye kubihingwa bifite amasoko no gutegura ubutaka.",
                    crops: ["Ibigori", "Ibishyimbo", "Imyumbati", "Ibirayi"]
                },
                {
                    name: "Igihe cy'Imvura Ntoya",
                    months: "Ukwezi k'Ukwakira - Ugushyingo",
                    characteristics: "Imvura y'imiterere, irambuye kubihingwa by'igihe gito. Ubwondo bw'ubutaka burambuye kubihingwa.",
                    crops: ["Ibirayi", "Ingano", "Imboga", "Ibishyimbo"]
                },
                {
                    name: "Igihe cy'Imvura Nini",
                    months: "Werurwe - Gicurasi",
                    characteristics: "Imvura nyinshi, ubushyuhe bukabije. Igihe cy'ingenzi cyo guhinga ibihingwa byinshi. Raba neza ubutaka n'imyuzure.",
                    crops: ["Ibigori", "Ibishyimbo", "Amasaka", "Umuceri"]
                }
            ],
            plantingCalendar: [
                {month: "Mutarama", task: "Tegura ubutaka kugihe cy'imvura nini. Hinga imboga n'ibihingwa by'igihe gito."},
                {month: "Gashyantare", task: "Komeza gutegura ubutaka. Tangira guhinga ibigori n'ibishyimbo vuba."},
                {month: "Werurwe", task: "Igihe cy'ingenzi cyo guhinga gitangira. Hinga ibigori, ibishyimbo, amasaka."},
                {month: "Mata", task: "Komeza guhinga. Gucunga ibyatsi n'ubwoko bw'ibyorezo by'ingenzi."}
            ],
            tips: [
                {title: "Gutegura Ubutaka", content: "Tegura ubutaka bwawe mu gihe cy'umuhindo kugirango ukoreshe imvura ya mbere. Koresha ifumbire y'ibinyabuzima kugirango wongere ubworozi bw'ubutaka."},
                {title: "Guhindura Ibihingwa", content: "Kora guhindura ibihingwa hagati y'ibihe kugirango ukomeze ubuzima bw'ubutaka no kugabanya ibyorezo."},
                {title: "Gucunga Amazi", content: "Mu bihe by'imvura, menya neza ko ubutaka bufite amasoko kugirango bidakuremo amazi menshi. Mu bihe by'umuhindo, koresha amasoko mu buryo bwiza."}
            ]
        }
    },
    // French (FR)
    fr: {
        header: {
            home: "Accueil",
            crops: "Cultures",
            pests: "Ravageurs",
            seasons: "Saisons",
            contact: "Contact",
            login: "Connexion"
        },
        crops: [
            {name: "Maïs", description: "Culture céréalière de base, nécessite des précipitations modérées."},
            {name: "Haricots", description: "Légumineuse riche en protéines, améliore la fertilité du sol."},
            {name: "Manioc", description: "Culture tuberculeuse résistante à la sécheresse."},
            {name: "Patates Douces", description: "Riche en vitamines et facile à cultiver."}
        ],
        pests: [
            {name: 'Fall Armyworm', measure: 'Utilisez la gestion intégrée des ravageurs, alternez les cultures et appliquez les insecticides recommandés.'},
            {name: 'Colorado Potato Beetle', measure: 'Ramassez les coléoptères à la main, utilisez de l’huile de neem et alternez les cultures de pommes de terre.'},
            {name: 'Aphids', measure: 'Pulvérisez avec du savon insecticide, encouragez les prédateurs naturels comme les coccinelles.'},
            {name: 'Banana Weevil', measure: 'Retirez les plantes infectées, appliquez des insecticides et pratiquez la sanitation des cultures.'},
            {name: 'Whiteflies', measure: 'Utilisez des pièges collants jaunes et des agents de lutte biologique.'},
            {name: 'Cutworms', measure: 'Appliquez des méthodes barrières, labourez le sol pour exposer les larves.'},
            {name: 'Leaf Miners', measure: 'Retirez les feuilles affectées et utilisez le contrôle biologique.'},
            {name: 'Spider Mites', measure: 'Pulvérisez des miticides et maintenez l’humidité pour réduire l’infestation.'},
            {name: 'Thrips', measure: 'Utilisez des pulvérisations insecticides et encouragez les prédateurs naturels.'},
            {name: 'Mealybugs', measure: 'Pulvérisez du savon insecticide et retirez les parties fortement infestées.'}
            // continue translation for all pests...
        ],
        seasons: {
            mainSeasons: [
                {
                    name: "Saison Sèche",
                    months: "Juin - Septembre",
                    characteristics: "Précipitations minimales, journées ensoleillées, faible humidité. Idéal pour les cultures dépendantes de l’irrigation et la préparation des terres.",
                    crops: ["Maïs", "Haricots", "Manioc", "Patates Douces"]
                },
                {
                    name: "Petite Saison des Pluies",
                    months: "Octobre - Novembre",
                    characteristics: "Précipitations modérées, bonnes pour la plantation de cultures à cycle court. L'humidité du sol est optimale pour la germination.",
                    crops: ["Pommes de Terre", "Blé", "Légumes", "Haricots"]
                },
                {
                    name: "Grande Saison des Pluies",
                    months: "Mars - Mai",
                    characteristics: "Fortes précipitations, humidité élevée. Principale saison de plantation pour la plupart des cultures. Attention à l'engorgement et à l'érosion.",
                    crops: ["Maïs", "Haricots", "Sorgho", "Riz"]
                }
            ],
            plantingCalendar: [
                {month: "Janvier", task: "Préparez les terres pour la grande saison des pluies. Plantez des légumes et des cultures à cycle court."},
                {month: "Février", task: "Continuez la préparation des terres. Commencez à planter du maïs et des haricots précoces."},
                {month: "Mars", task: "La principale saison de plantation commence. Plantez du maïs, des haricots, du sorgho."},
                {month: "Avril", task: "Continuez la plantation. La gestion des mauvaises herbes et la lutte antiparasitaire sont importantes."}
            ],
            tips: [
                {title: "Préparation du Sol", content: "Préparez vos terres pendant la saison sèche pour profiter des premières pluies. Utilisez du fumier organique pour améliorer la fertilité du sol."},
                {title: "Rotation des Cultures", content: "Pratiquez la rotation des cultures entre les saisons pour maintenir la santé du sol et réduire l'accumulation de ravageurs."},
                {title: "Gestion de l'Eau", content: "Pendant les saisons des pluies, assurez un bon drainage pour éviter l'engorgement. Pendant les saisons sèches, utilisez l'irrigation judicieusement."}
            ]
        }
    }
};

// Function to get translation
function t(lang, section, key) {
    if(translations[lang] && translations[lang][section]){
        return translations[lang][section][key] || '';
    }
    return '';
}
