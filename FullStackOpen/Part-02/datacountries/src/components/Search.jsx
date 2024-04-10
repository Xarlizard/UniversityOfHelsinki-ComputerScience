const Search = ({searchCountry, handleSearchCountry}) => 
    <>
        find countries: <input value={searchCountry} onChange={handleSearchCountry} />
    </>

export default Search