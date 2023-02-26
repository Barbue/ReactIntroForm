import React, { Component } from "react";


/**
 * Table React Component 
 * 
 */

/**
 * HTML REVIEW
 * thead -> table head 
 * tr -> table row 
 * th -> table header 
 * tbody -> table body
 * td -> table cell
 */



/*
create two simple function components to make
our table code more readable
*/





//TABLE HEADER SIMPLE COMPONENT
const MovieTableHeader = () => {
    return (
        <thead>
              <tr>
                <th>Title</th>
                <th>Actors</th>
                <th>Plot</th>
                <th>Genre</th>
                <th>ImdbRating</th>
                <th>Director</th>
                <th>Year</th>
                <th>DateAdded</th>
              </tr>
            </thead>
    );
}

//TABLE BODY SIMPLE COMPONENT 
const MovieTableBody = (props) => {


    //construct rows
    // use map to iterate over each row and wrap it in
    // a html table row  
    //registered an on click listener to remove the character

const rows = props.data.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.title}</td>
          <td>{row.actors}</td>
          <td>{row.plot}</td>
          <td>{row.genre}</td>
          <td>{row.imdbRating}</td>
          <td>{row.director}</td>
          <td>{row.year}</td>
          <td>{row.dateAdded}</td> 
          <td><button onClick={() => props.removeMovie(index)}> Delete</button></td>
        </tr>
      )
    })
    //return rows wrapped in tbody
    return <tbody>{rows}</tbody>
  }
// TABLE is our main Component
class Table extends Component {
    render() {
        //read props passed in from App.js
        const { 
          movieData, 
          removeMovie
          
        } = this.props;

        return ( 
          <table>
            <MovieTableHeader/>
            <MovieTableBody 
              data={movieData} 
              removeMovie={removeMovie}
             />
          </table>
        )
      }
 }


export default Table