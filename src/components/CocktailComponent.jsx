import { Component } from "react";

export default class CocktailComponent extends Component {
  constructor(props) {
    console.log(props);
    super(props);

    this.state = {};
  }

  render() {
    return (
      <article className="cocktail-container" key={this.props.idDrink}>
        <h2>{this.props.strDrink}</h2>
        <img src={this.props.strDrinkThumb} alt={this.props.strDrink} />
        <p>{this.props.strInstructions}</p>
        <button onClick={(e) => this.props.handleClick(this.props.idDrink)}>
          Delete me
        </button>
      </article>
    );
  }
}
