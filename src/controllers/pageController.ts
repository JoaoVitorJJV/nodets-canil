import { Request, Response } from 'express';

import { Pet } from '../models/Pet';
import { createMenuOptions } from '../helpers/createObjectMenu';

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll();

    res.render('pages/page', {
        list,
        menu: createMenuOptions('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        }
    });
}

export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog');

    res.render('pages/page', {
        list,
        menu: createMenuOptions('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        }
    });
}

export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat');

    res.render('pages/page', {
        list,
        menu: createMenuOptions('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        }
    });
}

export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish');

    res.render('pages/page', {
        list,
        menu: createMenuOptions('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        }
    });
}