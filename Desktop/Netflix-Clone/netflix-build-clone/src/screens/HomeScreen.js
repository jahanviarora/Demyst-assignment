import React from "react";
import "./homeScreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import requests from "../Request";
import Row from "../Row"
function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNEtflixOriginals}
        isLargeRow
      />
      <Row
      title="Top Rated"
      fetchURL={requests.fetchTopRated}
       />
      <Row 
      title="Action Movies"
      fetchURL={requests.fetchActionMovie}
     />
      <Row 
      title="Comedy Movies"
      fetchURL={requests.fetchComedyMovie}
      />
      <Row 
      title="Horror Movies"
      fetchURL={requests.fetchHorrorMovie}
      />
       <Row 
      title="Romance Movies"
      fetchURL={requests.fetchRomanticMovie}
      />
       <Row 
      title="Documenaries"
      fetchURL={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default HomeScreen;
