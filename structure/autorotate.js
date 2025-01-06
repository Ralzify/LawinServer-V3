const axios = require('axios');
const fs = require('fs');
const path = require('path');

const itemsFilePath = path.join(__dirname, '..', 'config', 'items.json');
const itemshopFilePath = path.join(__dirname, '..', 'config', 'catalog_config.json');

const rawData = fs.readFileSync(itemsFilePath);
const items = JSON.parse(rawData);

const excludedItemIds = [
    "halloweenscythe",
    "wrap_007_candycane",
];

const filterExcludedItems = (itemsList) => {
    return itemsList.filter(item => {
        const isExcludedId = excludedItemIds.includes(item.id);
        const isChapter2 = item.introduction?.chapter === '2';
        const hasShopHistory = Array.isArray(item.shopHistory) && item.shopHistory.length > 0;
        return !isExcludedId && !isChapter2 && hasShopHistory;
    });
};

const backpacks = filterExcludedItems(items.filter(item => item.type === 'AthenaBackpack'));
const pickaxes = filterExcludedItems(items.filter(item => item.type === 'AthenaPickaxe'));
const characters = filterExcludedItems(items.filter(item => item.type === 'AthenaCharacter'));
const itemWraps = filterExcludedItems(items.filter(item => item.type === 'AthenaItemWrap'));
const musicPacks = filterExcludedItems(items.filter(item => item.type === 'AthenaMusicPack'));
const dances = filterExcludedItems(items.filter(item => item.type === 'AthenaDance'));
const gliders = filterExcludedItems(items.filter(item => item.type === 'AthenaGlider'));
const contrails = filterExcludedItems(items.filter(item => item.type === 'AthenaSkyDiveContrail'));

const usedItemIds = new Set();

const getUniqueItem = (itemsList) => {
    const availableItems = itemsList.filter(item => !usedItemIds.has(item.id));
    if (availableItems.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * availableItems.length);
    const item = availableItems[randomIndex];
    usedItemIds.add(item.id);
    return item;
};

const getPrice = (item) => {
    const prices = {
        characters: {
            uncommon: 800,
            rare: 1200,
            epic: 1500,
            legendary: 2000,
            dark: 1200,
            dc: 1500,
            gaminglegends: 1500,
            frozen: 1200,
            lava: 1200,
            marvel: 1500,
            starwars: 2000,
            slurp: 1800,
            shadow: 1200,
            icon: 1500
        },
        pickaxes: {
            uncommon: 500,
            rare: 800,
            epic: 1200,
            icon: 500,
            dark: 1200,
            gaminglegends: 800,
            frozen: 1000,
            slurp: 1500,
            starwars: 1000,
            shadow: 1000,
            marvel: 1000,
            dc: 800
        },
        gliders: {
            common: 300,
            uncommon: 500,
            rare: 800,
            epic: 1200,
            legendary: 1500,
            icon: 500,
            dc: 1200,
            dark: 500,
            frozen: 1000,
            shadow: 1000,
            slurp: 1000,
            starwars: 1000,
            marvel: 1000,
            lava: 1200
        },
        wraps: {
            uncommon: 300,
            rare: 500,
            starwars: 700,
            epic: 700,
            legendary: 1000,
            icon: 700,
            dc: 1000,
            dark: 700,
            shadow: 700,
            slurp: 700,
            frozen: 500,
            starwars: 500,
            marvel: 500,
            lava: 700
        },
        dances: {
            uncommon: 200,
            rare: 500,
            epic: 800,
            icon: 500,
            marvel: 500,
            starwars: 500,
            dc: 300,
            dark: 800,
            slurp: 750,
            frozen: 800,
            shadow: 500,
            starwars: 800,
            lava: 800
        },
        contrails: {
            uncommon: 300,
            rare: 500,
            starwars: 750,
            epic: 500,
            legendary: 750,
            icon: 750,
            dc: 1000,
            dark: 750,
            shadow: 750,
            frozen: 1000,
            starwars: 1000,
            slurp: 750,
            marvel: 1000,
            lava: 750
        },
        backpacks: {
            uncommon: 400,
            rare: 600,
            epic: 800,
            legendary: 1000,
            starwars: 1500,
            gaminglegends: 800,
            marvel: 1200,
            dc: 1200,
            dark: 800,
            slurp: 1000,
            shadow: 1000,
            frozen: 1200,
            lava: 800
        },
        musicPacks: {
            uncommon: 200,
            rare: 300,
            starwars: 750,
            epic: 500,
            legendary: 750,
            icon: 750,
            dc: 1000,
            dark: 750,
            slurp: 500,
            frozen: 1000,
            starwars: 1000,
            marvel: 1000,
            lava: 750
        }
    };

    switch (item.type) {
        case 'AthenaCharacter':
            return prices.characters[item.rarity] || 0;
        case 'AthenaPickaxe':
            return prices.pickaxes[item.rarity] || 0;
        case 'AthenaGlider':
            return prices.gliders[item.rarity] || 0;
        case 'AthenaItemWrap':
            return prices.wraps[item.rarity] || 0;
        case 'AthenaDance':
            return prices.dances[item.rarity] || 0;
        case 'AthenaBackpack':
            return prices.backpacks[item.rarity] || 0;
        case 'AthenaSkyDiveContrail':
            return prices.contrails[item.rarity] || 0;
        case 'AthenaMusicPack':
            return prices.musicPacks[item.rarity] || 0;
        default:
            return 0;
    }
};

function getRandomSetWithValidItems(isTwoFeaturedItems) {
    const filteredItems = filterExcludedItems(items);

    const sets = filteredItems
        .filter(item => item.set && item.introduction?.chapter === '1')
        .map(item => item.set)
        .filter((value, index, self) => self.indexOf(value) === index);

    const validSets = sets.filter(set => {
        const setItems = filteredItems.filter(item => item.set === set && item.introduction?.chapter === '1');
        const characters = setItems.filter(item => item.type === 'AthenaCharacter');
        const hasPickaxeOrGlider = setItems.some(item => item.type === 'AthenaPickaxe' || item.type === 'AthenaGlider');

        if (isTwoFeaturedItems) {
            return characters.length === 1 && hasPickaxeOrGlider;
        } else {
            return characters.length >= 2 && hasPickaxeOrGlider;
        }
    });

    if (validSets.length === 0) {
        return null;
    }

    const randomIndex = Math.floor(Math.random() * validSets.length);
    return validSets[randomIndex];
}

const filterItemsBySet = (itemsList, set) => {
    const filteredItems = itemsList.filter(item => item.set === set);
    return filteredItems;
};

const isTwoFeaturedItems = Math.random() < 0.5;

const selectedSet = getRandomSetWithValidItems(isTwoFeaturedItems);

const config = {
    "//": "BR Item Shop Config",
    "daily1": (() => {
        const item = getUniqueItem(gliders);
        return item ? {
            "itemGrants": [`AthenaGlider:${item.id}`],
            "price": getPrice(item)
        } : {};
    })(),
    "daily2": (() => {
        const item = getUniqueItem(pickaxes);
        return item ? {
            "itemGrants": [`AthenaPickaxe:${item.id}`],
            "price": getPrice(item)
        } : {};
    })(),
    "daily3": (() => {
        const item = getUniqueItem(dances);
        return item ? {
            "itemGrants": [`AthenaDance:${item.id}`],
            "price": getPrice(item)
        } : {};
    })(),
    "daily4": (() => {
        const item = getUniqueItem(characters);
        if (item) {
            const grants = [`AthenaCharacter:${item.id}`];
            if (item.attachedCosmetic) {
                grants.push(`AthenaBackpack:${item.attachedCosmetic}`);
            }
            return {
                "itemGrants": grants,
                "price": getPrice(item)
            };
        }
        return {};
    })(),
    "daily5": (() => {
        const item = getUniqueItem(dances);
        return item ? {
            "itemGrants": [`AthenaDance:${item.id}`],
            "price": getPrice(item)
        } : {};
    })(),
    "daily6": (() => {
        const item = getUniqueItem(characters);
        if (item) {
            const grants = [`AthenaCharacter:${item.id}`];
            if (item.attachedCosmetic) {
                grants.push(`AthenaBackpack:${item.attachedCosmetic}`);
            }
            return {
                "itemGrants": grants,
                "price": getPrice(item)
            };
        }
        return {};
    })(),
    "featured1": (() => {
        if (selectedSet) {
            const featuredItems = filterItemsBySet(items, selectedSet);
            const character = getUniqueItem(featuredItems.filter(item => item.type === 'AthenaCharacter'));
            if (character) {
                const grants = [`AthenaCharacter:${character.id}`];
                if (character.attachedCosmetic) {
                    grants.push(`AthenaBackpack:${character.attachedCosmetic}`);
                }
                return {
                    "itemGrants": grants,
                    "price": getPrice(character)
                };
            }
        }
        return {};
    })(),
    "featured2": (() => {
        if (isTwoFeaturedItems && selectedSet) {
            const featuredItems = filterItemsBySet(items, selectedSet);
            const item = getUniqueItem(featuredItems.filter(item => item.type === 'AthenaPickaxe' || item.type === 'AthenaGlider'));
            return item ? {
                "itemGrants": [`${item.type}:${item.id}`],
                "price": getPrice(item)
            } : null;
        } else if (selectedSet) {
            const featuredItems = filterItemsBySet(items, selectedSet);
            const character = getUniqueItem(featuredItems.filter(item => item.type === 'AthenaCharacter'));
            if (character) {
                const grants = [`AthenaCharacter:${character.id}`];
                if (character.attachedCosmetic) {
                    grants.push(`AthenaBackpack:${character.attachedCosmetic}`);
                }
                return {
                    "itemGrants": grants,
                    "price": getPrice(character)
                };
            }
        }
        return {};
    })(),
    "featured3": (() => {
        if (!isTwoFeaturedItems && selectedSet) {
            const featuredItems = filterItemsBySet(items, selectedSet);
            const item = getUniqueItem(featuredItems.filter(item => item.type === 'AthenaPickaxe' || item.type === 'AthenaGlider'));
            return item ? {
                "itemGrants": [`${item.type}:${item.id}`],
                "price": getPrice(item)
            } : null;
        }
        return {};
    })()
};

fs.writeFileSync(itemshopFilePath, JSON.stringify(config, null, 2));