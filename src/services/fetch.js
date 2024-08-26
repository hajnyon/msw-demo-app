export const getData = async () => {
    return new Promise((resolve, _reject)=> {
        resolve([
            {id: 1, votes: 5, title: "Roasted Potatoes", img: "cocktail-sauce.png"},
            {id: 2, votes: 5, title: "Prawn Coctail", img: "roasted-potatoes.png"}
        ])
    } )
}