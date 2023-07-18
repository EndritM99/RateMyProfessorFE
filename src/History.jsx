  import React from 'react';
  import './history.css';
  import harvard from './Harvard_shield_wreath.svg.png';

  const Banner = () => {
    return (
      <section className="banner">
        <div>
          <h2>The History of Harvard</h2>
          <h3>
            Welcome to the cat kingdom, please take a moment to browse our
            collection.
          </h3>
        </div>
        <img src={harvard} alt="harvard" />
      </section>
    );
  };

  const History = () => {
    return (
      <div id="history-section">
        <Banner />
        <section className="content-section">
          <h2>Brand New Shiz</h2>
          <p>
            An NFT collection is an assortment of digital assets released by an
            artist (or group of artists) containing a limited number of individual
            NFTs. Typically, most NFT collections consist of numerous NFTs that all
            conform to the same artistic style, with slight variations across each
            individual token.
          </p>
          <p>
            An NFT collection is an assortment of digital assets released by an
            artist (or group of artists) containing a limited number of individual
            NFTs. Typically, most NFT collections consist of numerous NFTs that all
            conform to the same artistic style, with slight variations across each
            individual token.
          </p> <p>
            An NFT collection is an assortment of digital assets released by an
            artist (or group of artists) containing a limited number of individual
            NFTs. Typically, most NFT collections consist of numerous NFTs that all
            conform to the same artistic style, with slight variations across each
            individual token.
          </p> <p>
            An NFT collection is an assortment of digital assets released by an
            artist (or group of artists) containing a limited number of individual
            NFTs. Typically, most NFT collections consist of numerous NFTs that all
            conform to the same artistic style, with slight variations across each
            individual token.
          </p>
        </section>
      </div>
    );
  };

  export default History;
