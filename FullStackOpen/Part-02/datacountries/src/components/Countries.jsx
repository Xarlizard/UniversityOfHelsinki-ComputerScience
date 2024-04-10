import Country from "./Country"
import OneCountry from "./OneCountry"

const Countries = ({filtered, setToFiltered, searchCountry, wind, setWind, temp, setTemp, wImg, setWImg, last, setLast}) =>{                           //if no searchName value is given, it will count as empty
  
  if(filtered.length <= 10) {                                               //when there ar 10 matches at most
    if(filtered.length == 0){return <p>No results</p>}                      //when no matches
    if(filtered.length == 1){                                               //when there's only 1 match render only OneCountry
      return( 
        <OneCountry 
          country={filtered[0]} 
          wind={wind} setWind={setWind} 
          temp={temp} setTemp={setTemp}
          last={last} setLast={setLast}
          wImg={wImg} setWImg={setWImg}
        />
      )
    }
  
    return(
      <>
        {filtered.map(country => {    
            return <Country key={country.name.common} country={country} setToFiltered={setToFiltered}/>  //multiple countries render only name from each
          })}
      </>
    )

  }else if (searchCountry == ''){return <p>Too much countries</p>}           //when there are too many matches
  else {return <p>Type to search a country</p>}                              //waiting for input
}

export default Countries