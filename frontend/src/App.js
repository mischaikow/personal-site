import React, { useState, useEffect } from 'react'
import './css/normalize.css'
import './css/base.css'
import BackServices from './services/BackendComm.js'
import QueryServices from './services/URLRead.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Content from './components/Content.js'

const App = () => {
  const [ query, setQuery ] = useState('?page=home')
  const [ page, setPage ] = useState({ page: "home" })

  useEffect(() => {
    setQuery(window.location.search);
  }, [])

  useEffect(() => {
    setPage(QueryServices.getPage(query));
  }, [query]) 

  useEffect(() => {
    window.history.replaceState(null, "ABC", query)
  }, [page])

  return (
    <>
      <Header page={page} setPage={setPage} />
      <Content page={page} setPage={setPage} />
      <Footer />
    </>
  )
}

export default App;
