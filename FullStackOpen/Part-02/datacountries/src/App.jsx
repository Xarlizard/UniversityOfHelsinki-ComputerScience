import { useState, useEffect } from 'react'
import countryServcice from './services/countries'
import Search from './components/Search'

function App() {
  const [searchCountry, setSearchCountry] = useState('')

  const handleSearchCountry = (event) => {
    setSearchCountry(event.target.value)
  }

  return (
    <>
      <Search value={searchCountry} onChange={handleSearchCountry} />
    </>
  )
}

export default App