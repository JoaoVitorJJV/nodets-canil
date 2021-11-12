type MenuObject = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenuOptions = (activeMenu: MenuObject) => {

    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }

    if(activeMenu !== ''){
        returnObject[activeMenu] = true;
    }

    return returnObject;
}