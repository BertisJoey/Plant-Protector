var cardSectionElement = $("#card-section");
var cardListElement = $(".card-lists");
var plantCardTitle = $(".plantcard-title");
var scientificNameLiElement = $(".scientific-name");
var cycleLiElement = $(".cycle");
var wateringLiElement = $(".watering");
var searchBtn = $("#search-button");

var fakePlantListAPI = [
    {
        id: 1,
        common_name: "European Silver Fir",
        scientific_name: [
            "Abies alba"
        ],
        "other_name": [
            "Common Silver Fir"
        ],
        cycle: "Perennial",
        watering: "Frequent",
        "sunlight": [],
        "default_image": {
            "image_id": 9,
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
            "original_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/og/49255769768_df55596553_b.jpg",
            "regular_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/regular/49255769768_df55596553_b.jpg",
            "medium_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/medium/49255769768_df55596553_b.jpg",
            "small_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/small/49255769768_df55596553_b.jpg",
            "thumbnail": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/thumbnail/49255769768_df55596553_b.jpg"
        }
    },
    {
        id: 2,
        common_name: "Pyramidalis Silver Fir",
        scientific_name: [
            "Abies alba 'Pyramidalis'"
        ],
        cycle: "Perennial",
        watering: "Frequent",
        "sunlight": [],
        "other_name": null,
        "default_image": {
            "image_id": 9,
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
            "original_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/og/49255769768_df55596553_b.jpg",
            "regular_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/regular/49255769768_df55596553_b.jpg",
            "medium_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/medium/49255769768_df55596553_b.jpg",
            "small_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/small/49255769768_df55596553_b.jpg",
            "thumbnail": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/thumbnail/49255769768_df55596553_b.jpg"
        }
    }]

var fakePlantDetailAPI = [
    {
        "id": 1,
        "common_name": "European Silver Fir",
        "scientific_name": [
            "Abies alba"
        ],
        "other_name": [
            "Common Silver Fir"
        ],
        "family": "",
        "origin": null,
        "type": "tree",
        "dimensions": {
            "type": null,
            "min_value": 1,
            "max_value": 1.5,
            "unit": "feet"
        },
        "cycle": "Perennial",
        "watering": "Frequent",
        "depth_water_requirement": {
            "unit": "mm",
            "value": "50"
        },
        "volume_water_requirement": {
            "unit": "feet",
            "value": "1"
        },
        "watering_period": "morning",
        "watering_general_benchmark": {
            "value": 5-7,
            "unit": "days"
        },
        "plant_anatomy": {
            "bark":"brown",
            "leaves":"green"
        },
        "sunlight": [
            "Part shade"
        ],
        "pruning_month": [
            "March",
            "April"
        ],
        "pruning_count": {
            "amount": 1,
            "interval": "yearly"
        },
        "seeds": 0,
        "attracts":[
          "bees",
          "birds",
          "rabbits"
        ],
        "propagation":[
            "seed",
            "cutting"
        ],
        "hardiness": {
            "min": "7",
            "max": "7"
        },
        "flowers": true,
        "flowering_season": "Spring",
        "color": "",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "soil": [],
        "pest_susceptibility": null,
        "cones": true,
        "fruits": false,
        "edible_fruit": false,
        "fruit_color": null,
        "fruiting_season": null,
        "harvest_season": null,
        "harvest_method": "cutting",
        "leaf": true,
        "leaf_color": [
            "green"
        ],
        "edible_leaf": false,
        "growth_rate": "High",
        "maintenance": "Low",
        "medicinal": true,
        "poisonous_to_humans": false,
        "poisonous_to_pets": false,
        "drought_tolerant": false,
        "salt_tolerant": false,
        "thorny": false,
        "invasive": false,
        "rare": false,
        "rare_level": "3",
        "tropical": false,
        "cuisine": false,
        "indoor": false,
        "care_level": "Medium",
        "description": "Amazing garden plant that is sure to capture attention...",
        "default_image": {
          "image_id": 9,
          "license": 5,
          "license_name": "Attribution-ShareAlike License",
          "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
          "original_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/og/49255769768_df55596553_b.jpg",
          "regular_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/regular/49255769768_df55596553_b.jpg",
          "medium_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/medium/49255769768_df55596553_b.jpg",
          "small_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/small/49255769768_df55596553_b.jpg",
          "thumbnail": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/thumbnail/49255769768_df55596553_b.jpg"
        }
    }
];



//this function was created to generate cards that show information based on our fake data 
var generateFakeCard = function() {
    for (var i = 0; i < plantCardTitle.length; i++)
        plantCardTitle.text(fakePlantListAPI[i].common_name);

    for (var i = 0; i < scientificNameLiElement.length; i++)
        scientificNameLiElement.text("Scientific Name: " + fakePlantListAPI[i].scientific_name[0]);

    for (var i = 0; i < cycleLiElement.length; i++)
        cycleLiElement.text("Cycle: " + fakePlantListAPI[i].cycle);

    for (var i = 0; i < wateringLiElement.length; i++)
        wateringLiElement.text("Watering: " + fakePlantListAPI[i].watering);

};

generateFakeCard();
