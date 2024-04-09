const Countries = ({countries, searchCountry = ''}) =>{                           //if no searchName value is given, it will count as empty
  const filteredCountries = (countries.filter(country => country.name.common.toLowerCase().includes(searchCountry.toLowerCase())))
  console.log(filteredCountries)

  if(filteredCountries.length <= 10 && searchCountry !='') {
    if(filteredCountries.length == 0){return <p>No results</p>}
    return(
        <>
            {
            filteredCountries.map(country => {    
                    return <Country key={country.name.common} country={country} />

          
            })}
        </>)
  }else{
    return <p>Too much countries</p>
  }
}

const Country = ({country}) => 
  <>
    <p>
      {country.name.common} 
    </p>
  </>

export default Countries