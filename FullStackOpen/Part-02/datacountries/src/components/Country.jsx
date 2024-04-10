const Country = ({country, setToFiltered}) =>              
  <>
    <p>{country.name.common} <button onClick={() => setToFiltered(country)}>show</button></p>
  </>

  export default Country