import { getBackgroundColor16x16AmongUs, getBackgroundColor16x16Charmander, getBackgroundColor16x16Pokeball, getBackgroundColor16x16Yoshi, getBackgroundColor32x32Pikachu, getBackgroundColor4x4, getBackgroundColor4x4Pacman, getBackgroundColor4x4SouthPark, getBackgroundColor4x4Tarzan, getBackgroundColor8x8Ghost, getBackgroundColor8x8Kirby, getBackgroundColor8x8Pikachu, getBackgroundColor8x8SpaceInvader } from './GetBackgroundColor';
import { Drawing } from './models/Game';

export const getBackgroundColorFunction = (drawing : Drawing) : ((x : number, y : number) => string) => {
    switch (drawing) {
        case Drawing.FOUR :
            return getBackgroundColor4x4;
        case Drawing.FOUR_PACMAN :
            return getBackgroundColor4x4Pacman;
        case Drawing.FOUR_SOUTH_PARK :
            return getBackgroundColor4x4SouthPark;
        case Drawing.FOUR_TARZAN :
            return getBackgroundColor4x4Tarzan;
        case Drawing.EIGHT_PIKACHU :
            return getBackgroundColor8x8Pikachu;
        case Drawing.EIGHT_KIRBY :
            return getBackgroundColor8x8Kirby;
        case Drawing.EIGHT_SPACE_INVADER :
            return getBackgroundColor8x8SpaceInvader;
        case Drawing.EIGHT_GHOST :
            return getBackgroundColor8x8Ghost;
        case Drawing.SIXTEEN_POKEBALL :
            return getBackgroundColor16x16Pokeball;
        case Drawing.SIXTEEN_CHARMANDER :
            return getBackgroundColor16x16Charmander;
        case Drawing.SIXTEEN_AMONG_US :
            return getBackgroundColor16x16AmongUs;
        case Drawing.SIXTEEN_YOSHI :
            return getBackgroundColor16x16Yoshi;
        case Drawing.THIRTYTWO_PIKACHU :
            return getBackgroundColor32x32Pikachu;
        default:
            return getBackgroundColor4x4;
    }
}

export const getSize = (drawing : Drawing) => {
    switch (drawing) {
        case Drawing.FOUR:
        case Drawing.FOUR_PACMAN:
        case Drawing.FOUR_SOUTH_PARK:
        case Drawing.FOUR_TARZAN:
            return 4;
        case Drawing.EIGHT_PIKACHU:
        case Drawing.EIGHT_KIRBY:
        case Drawing.EIGHT_SPACE_INVADER:
        case Drawing.EIGHT_GHOST:
            return 8;
        case Drawing.SIXTEEN_POKEBALL:
        case Drawing.SIXTEEN_CHARMANDER:
        case Drawing.SIXTEEN_AMONG_US:
        case Drawing.SIXTEEN_YOSHI:
            return 16;
        case Drawing.THIRTYTWO_PIKACHU:
            return 32;
        default:
            return 4;
    }
}