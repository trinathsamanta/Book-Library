import {
  FETCH_DATA
} from "../action/action";

const initial = [{
  id: "1",
  name: "Harappa Trilogy",
  releaseYear: 2016,
  description: "2017, Delhi – Vidyut’s dying ancestor summons him to Banaras. The old Brahmin chieftain of the Dev-Raakshasa Matth, or the God-Demon Clan, bears a chilling secret. Their bloodline carries an ancient curse that will plague mankind - towards its own violent extinction.1700 BCE, Harappa – Harappa is a magnificent city on the banks of the mighty Saraswati river. The darkness of treachery, taantric exorcism and bloodshed unleashes itself on the last devta, paving the way for his devastating revenge…and the horrifying truth behind the fall of the glorious civilisation.2017, Paris – The world’s most powerful religious institution is rattled. Europe’s dreaded crime lord meets a mysterious man in Paris. A lethal assassin boards a train, as Rome fears the worst. The prophesied devta has returned.What connects Banaras, Harappa and Rome? What was the ancient curse and who was the last devta? What is the terrible secret behind the fall of the colossal Indus Valley? Read on as you travel through a saga of deceit and violence, gods and demons, love and ambition",
  genre: "mystery",
  image: "https://images.unsplash.com/photo-1469545729389-ea8b27faed25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80",
  
},
{
  id: "2",
  name: "Harappa Trilogy",
  releaseYear: 2016,
  description: "2017, Delhi – Vidyut’s dying ancestor summons him to Banaras. The old Brahmin chieftain of the Dev-Raakshasa Matth, or the God-Demon Clan, bears a chilling secret. Their bloodline carries an ancient curse that will plague mankind - towards its own violent extinction.1700 BCE, Harappa – Harappa is a magnificent city on the banks of the mighty Saraswati river. The darkness of treachery, taantric exorcism and bloodshed unleashes itself on the last devta, paving the way for his devastating revenge…and the horrifying truth behind the fall of the glorious civilisation.2017, Paris – The world’s most powerful religious institution is rattled. Europe’s dreaded crime lord meets a mysterious man in Paris. A lethal assassin boards a train, as Rome fears the worst. The prophesied devta has returned.What connects Banaras, Harappa and Rome? What was the ancient curse and who was the last devta? What is the terrible secret behind the fall of the colossal Indus Valley? Read on as you travel through a saga of deceit and violence, gods and demons, love and ambition",
  genre: "mystery",
  image: "https://images.unsplash.com/photo-1576224817388-be5edde4bb0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  
},
{
  id: "3",
  name: "Harappa Trilogy",
  releaseYear: 2016,
  description: "2017, Delhi – Vidyut’s dying ancestor summons him to Banaras. The old Brahmin chieftain of the Dev-Raakshasa Matth, or the God-Demon Clan, bears a chilling secret. Their bloodline carries an ancient curse that will plague mankind - towards its own violent extinction.1700 BCE, Harappa – Harappa is a magnificent city on the banks of the mighty Saraswati river. The darkness of treachery, taantric exorcism and bloodshed unleashes itself on the last devta, paving the way for his devastating revenge…and the horrifying truth behind the fall of the glorious civilisation.2017, Paris – The world’s most powerful religious institution is rattled. Europe’s dreaded crime lord meets a mysterious man in Paris. A lethal assassin boards a train, as Rome fears the worst. The prophesied devta has returned.What connects Banaras, Harappa and Rome? What was the ancient curse and who was the last devta? What is the terrible secret behind the fall of the colossal Indus Valley? Read on as you travel through a saga of deceit and violence, gods and demons, love and ambition",
  genre: "mystery",
  image: "https://images.unsplash.com/photo-1469545729389-ea8b27faed25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80",
  
}]

export const Bookreducer = (state = initial, action) => {
  let newState = state
  switch (action.type) {
    case FETCH_DATA:
      newState = [...state,action.payload];
      return newState


    default:
      return newState
  }
}