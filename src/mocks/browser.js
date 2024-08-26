import { http, HttpResponse, passthrough } from 'msw'
import { setupWorker } from 'msw/browser'
 
export const worker = setupWorker(
  http.get('/api/v1/data', () => HttpResponse.json([
        {id: 1, votes: 5, title: "Cocktail Sauce", img: "cocktail-sauce.png"},
        {id: 2, votes: 5, title: "Roasted Potatoes", img: "roasted-potatoes.png"}
    ])),
  http.get('*', () => {
    return passthrough()
  })
)