import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Catalog from './components/Catalog'
import Landing from './components/Landing'
import MovieDetail from './components/MovieDetail'


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        { id: 0, isRented: false, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out.", trailer: 'MwU5ZqyhV5Q' },
        { id: 1, isRented: false, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies.", trailer: 'hY7xBISLBIA' },
        { id: 2, isRented: false, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself.", trailer: 'e3Nl_TCQXuw' },
        { id: 3, isRented: false, title: "The Sword in the Stone", year: 1963, img: "https://i.ebayimg.com/13/!!eBqSjwB2M~$(KGrHqQOKp0E0V7,0EISBNQ0T3(Ifw~~_35.JPG?set_id=89040003C1", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means.", trailer: 'KnL0rYFKuL4' },
        { id: 4, isRented: false, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation.", trailer: 'e3Nl_TCQXuw' },
        { id: 5, isRented: false, title: "Mulan", year: 1998, img: "https://images-na.ssl-images-amazon.com/images/I/71ae0hJA2HL._SL1500_.jpg", descrShort: "To save her father from death in the army, a young maiden secretly goes in his place and becomes one of China's greatest heroines in the process.", trailer: 'HKH7_n425Ss' },
        { id: 6, isRented: false, title: "Hercules", img: "https://i.pinimg.com/originals/73/df/13/73df13b8efd8b6bf8d0a0d677e3aa955.jpg", year: 1997, descrShort: "The son of Zeus and Hera is stripped of his immortality as an infant and must become a true hero in order to reclaim it.", trailer: 'ZvtspevZxpg' },
        { id: 7, isRented: false, title: "Frozen", year: 2013, img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Frozen_2_poster.jpg/220px-Frozen_2_poster.jpg", descrShort: "When the newly-crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.", trailer: 'TbQm5doF_Uc' },
        { id: 8, isRented: false, title: "Moana", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/814%2ByjRknwL._SY445_.jpg", descrShort: "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right.", trailer: 'LKFuXETZUsI' },
        { id: 9, isRented: false, title: "Shrek", year: 2001, img: "https://www.aelpublications.com/wp-content/uploads/2017/06/ShrekForeverAftercover.jpg", descrShort: "A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back.", trailer: 'W37DlG1i61s' },
        { id: 10, isRented: false, title: "Pocahontas", year: 1995, img: "https://www.arthipo.com/image/cache/catalog/genel-tasarim/all-posters/sinema-cinema-film-postersleri/yabanci-filmler/pfilm156-pocahontas-film-poster-movie-1000x1000.jpg", descrShort: "An English soldier and the daughter of an Algonquin chief share a romance when English colonists invade seventeenth-century Virginia.", trailer: 'hpVNsegX94g' },
        { id: 11, isRented: false, title: "Lilo & Stitch", year: 2002, img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/LiloandStitchmovieposter.jpg/220px-LiloandStitchmovieposter.jpg", descrShort: "A Hawaiian girl adopts an unusual pet who is actually a notorious extra-terrestrial fugitive.", trailer: 'wAtaSKQ4-T0' }
      ],
      budget: 10
    };
  }

  rentMovie = (event) => {
    if(this.state.budget -3 > 0){
      let movies = [...this.state.movies]
      let movieIndex = movies.findIndex(i => i.id == event.target.id)
  
      let budget = this.state.budget -= 3
      movies[movieIndex].isRented = !movies[movieIndex].isRented
      this.setState({
        movies,
        budget
      })
    } else {
      alert("no budget")
    }
  }

  returnMovie = (event) => {
    let movies = [...this.state.movies]
    let movieIndex = movies.findIndex(i => i.id == event.target.id)

    let budget = this.state.budget += 3
    movies[movieIndex].isRented = !movies[movieIndex].isRented
    this.setState({
      movies,
      budget
    })
  }

  

    render() {
      return (
        <Router>
          <div className="App" >
            <div id="main-links">
              <div className="side-nav">
                <Link to="/">Home</Link>
                <Link to="/catalog">Catalog</Link>
              </div>
              <Link to="/"><div className="logo"><img src="https://fontmeme.com/permalink/191129/5b20407015868d6dff24ab8060012f4e.png" /></div></Link>
            </div>
            <Route path="/" exact component={Landing} />
            <Route path="/catalog" exact render={() => <Catalog movies={this.state.movies} rentMovie={this.rentMovie} returnMovie={this.returnMovie} budget={this.state.budget} />} />
            <Route path="/movies/:movieId" exact render={({ match }) => <MovieDetail match={match} state={this.state.movies} />} />
          </div>
        </Router>
      )
    }
  }

  export default App;
