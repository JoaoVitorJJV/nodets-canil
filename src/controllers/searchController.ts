import { Request, Response } from 'express';

import { Pet } from '../models/Pet';
import { createMenuOptions } from '../helpers/createObjectMenu';

export const search = (req: Request, res: Response) => {
    let query = req.query.q as string;

    if(!query){
        res.redirect('/');
    }

    let list = Pet.getFromName(query);
    
    res.render('pages/page', {
        menu: createMenuOptions(""),
        list,
        query
    });
}