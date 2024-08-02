import React from 'react'
import './MetaVerseEcosystem.css'

const MetaverseEcosystem = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: "",
    phone: "",
    country: ""
  });


  const handleInputChange = (e) => {
    const { name, value, email, phone, message, country } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      [email]: value,
      [phone]: value,
      [message]: value,
      [country]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.type = 0;
    console.log("Form data:", formData);
    const res = await postData("/contact/submit-enquiry", formData)
    console.log(res)
  };

  return (
    <>
      <header className="HddrBg">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="logo_header">
              <a href="https://www.metablocktechnologies.com/" className><img src="https://www.metablocktechnologies.com/asset/home-page-new/images/metablock-white-logo-gif.gif" className="img-fluid mbl_res_logo" alt="metablock" title="metablock" width="80%" /></a>
            </div>
            <button type="button" onclick="this.classList.toggle('active')" className="plate navbar-toggle CollBTn collapsed sm-only ui" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-expanded="false" aria-controls="navbarNavAltMarkup" aria-label="Toggle navigation">
              <svg className viewBox="0 13 75 75" xmlns="http://www.w3.org/2000/svg" onclick="this.classList.toggle('active')">
                <path className="line line_1" d="M0 40h62c13 0 6 28-4 18L35 35" />
                <path className="line line_2" d="M0 50h70" />
                <path className="line line_3" d="M0 60h62c13 0 6-28-4-18L35 65" />
              </svg>
            </button>
            <div className="CllpsMenu collapse navbar-collapse w-100" id="navbarNavAltMarkup">
              <ul className="navbar-nav HddrLnks HdrSroll navMnuMn w-100">
                <li className="nav-item tbsMenu menu_desk">
                  <a className="nav-link" href="#">Services</a>
                  <div className="sub-menu serSubMnu">
                    <div className="d-flex">
                      <ul id="tabs" className="nav nav-tabs serTabsOver" role="tablist">
                        <li className="nav-item">
                          <a id="tab-ai_development" href="#ai_development" className="nav-link active" data-toggle="tab" role="tab">AI Development</a>
                        </li>
                        <li className="nav-item">
                          <a id="tab-blockchain_development" href="#blockchain_development" className="nav-link " data-toggle="tab" role="tab">Blockchain Development</a>
                        </li>
                        <li className="nav-item">
                          <a id="tab-web3_development" href="#web3_development" className="nav-link " data-toggle="tab" role="tab">Web3 Development</a>
                        </li>
                        <li className="nav-item">
                          <a id="tab-metaverse_development" href="#metaverse_development" className="nav-link " data-toggle="tab" role="tab">Metaverse Development</a>
                        </li>
                        <li className="nav-item">
                          <a id="tab-nft_development" href="#nft_development" className="nav-link " data-toggle="tab" role="tab">NFT Development</a>
                        </li>
                        <li className="nav-item">
                          <a id="tab-crypto_exchange_development" href="#crypto_exchange_development" className="nav-link " data-toggle="tab" role="tab">Crypto Exchange Development</a>
                        </li>
                        <li className="nav-item">
                          <a id="tab-defi_development" href="#defi_development" className="nav-link " data-toggle="tab" role="tab">DeFi Development</a>
                        </li>
                        <li className="nav-item">
                          <a id="tab-game_development" href="#game_development" className="nav-link " data-toggle="tab" role="tab">Game Development</a>
                        </li>
                        <li className="nav-item">
                          <a id="tab-token_development" href="#token_development" className="nav-link " data-toggle="tab" role="tab">Token Development</a>
                        </li>
                        <li className="nav-item">
                          <a id="tab-hire_developers" href="#hire_developers" className="nav-link " data-toggle="tab" role="tab">Hire Developers</a>
                        </li>
                        <li className="nav-item">
                          <a id="tab-dapp_development" href="#dapp_development" className="nav-link " data-toggle="tab" role="tab">DApp Development</a>
                        </li>
                        <li className="nav-item">
                          <a id="tab-web_and_mobile_app_development" href="#web_and_mobile_app_development" className="nav-link " data-toggle="tab" role="tab">Web and Mobile App Development</a>
                        </li>
                      </ul>
                      <div id="content" className="tab-content" role="tablist">
                        <div id="ai_development" className="card tab-pane fade active in show">
                          <div className="card-header" role="tab" id="heading-ai_development">
                            <p className="mb-0">
                              <a data-toggle="collapse" href="#collapse-ai_development" aria-expanded="true" aria-controls="collapse-ai_development">
                                AI Development                      </a>
                            </p>
                          </div>
                          <div id="collapse-ai_development" className="collapse show" data-parent="#content" role="tabpanel" aria-labelledby="heading-ai_development">
                            <div className="card-body cmpy_Overflow">
                              <div className="row">
                                <div className="col-md-6 mb-3">
                                  <div>
                                    <ul>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/ai-development-company">
                                          AI Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/generative-ai-development-company">
                                          Generative AI Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/ai-nft-image-generator-development">
                                          AI NFT Generator Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/ai-crypto-trading-bot-development">
                                          AI Crypto Trading Bot Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/ai-chat-bot-development">
                                          AI Chatbot Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/customized-chatgpt-app">
                                          Custom ChatGPT APP                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/ai-business-ideas">
                                          Top 10 AI Business Ideas                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/chatgpt-for-information-technology">
                                          ChatGPT for IT                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="blockchain_development" className="card tab-pane    ">
                          <div className="card-header" role="tab" id="heading-blockchain_development">
                            <p className="mb-0">

                              <a data-toggle="collapse" href="#collapse-blockchain_development" aria-expanded="true" aria-controls="collapse-blockchain_development">
                                Blockchain Development                      </a>
                            </p>
                          </div>

                          <div id="collapse-blockchain_development" className="collapse " data-parent="#content" role="tabpanel" aria-labelledby="heading-blockchain_development">
                            <div className="card-body cmpy_Overflow">
                              <div className="row">
                                <div className="col-md-6 mb-3">
                                  <div>
                                    <ul>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blockchain-development-company">
                                          Blockchain Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/smart-contract-development">
                                          Smart Contract Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/enterprise-blockchain-solutions">
                                          Enterprise Blockchain Solutions                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blockchain-crowdfunding-platform-development">
                                          Blockchain  Crowdfunding Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/private-public-blockchain-development">
                                          Private/Public Blockchain Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blockchain-p2p-lending-platform">
                                          Blockchain P2P Lending Platform                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blockchain-iot-development">
                                          Blockchain IoT Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blockchain-consulting-services">
                                          Blockchain Consulting Services                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/hedera-hashgraph-development">
                                          Hedera Hashgraph Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blockchain-ai-development">
                                          Blockchain AI Development                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                  <div>
                                    <ul>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/smart-contract-audit">
                                          Smart Contract Audit                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/blockchain-business-ideas-2023">
                                          Top10 Blockchain Business Ideas                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/solana-blockchain-development">
                                          Solana Blockchain Development Company                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/polygon-matic-blockchain-development">
                                          Polygon Blockchain Development Company                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/dao-blockchain-development">
                                          DAO Blockchain Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/makerdao-clone-script">
                                          MakerDAO Clone Script                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/binance-smart-chain-development">
                                          Binance Smart Chain (BSC) Blockchain Development                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="web3_development" className="card tab-pane    ">
                          <div className="card-header" role="tab" id="heading-web3_development">
                            <p className="mb-0">
                              {/* Note: `data-parent` removed from here */}
                              <a data-toggle="collapse" href="#collapse-web3_development" aria-expanded="true" aria-controls="collapse-web3_development">
                                Web3 Development                      </a>
                            </p>
                          </div>
                          {/* Note: New place of `data-parent` */}
                          <div id="collapse-web3_development" className="collapse " data-parent="#content" role="tabpanel" aria-labelledby="heading-web3_development">
                            <div className="card-body cmpy_Overflow">
                              <div className="row">
                                <div className="col-md-12 mb-3">
                                  <div>
                                    <ul>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/web3-development-company">
                                          Web3 Development Company                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/web3-game-development">
                                          Web3 Game Development Company                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/web3.0-crypto-exchange-development">
                                          Web3 Crypto Exchange Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/web3-smart-contract-development">
                                          Web3 Smart Contract Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/web3-wallet-development">
                                          Web3 Wallet Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/top-10-web3-business-ideas-in-2023">
                                          Top 10 Web3 Business Ideas                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="metaverse_development" className="card tab-pane    ">
                          <div className="card-header" role="tab" id="heading-metaverse_development">
                            <p className="mb-0">
                              {/* Note: `data-parent` removed from here */}
                              <a data-toggle="collapse" href="#collapse-metaverse_development" aria-expanded="true" aria-controls="collapse-metaverse_development">
                                Metaverse Development                      </a>
                            </p>
                          </div>
                          {/* Note: New place of `data-parent` */}
                          <div id="collapse-metaverse_development" className="collapse " data-parent="#content" role="tabpanel" aria-labelledby="heading-metaverse_development">
                            <div className="card-body cmpy_Overflow">
                              <div className="row">
                                <div className="col-md-6 mb-3">
                                  <div>
                                    <ul>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/metaverse-ecosystem">
                                          Metaverse Ecosystem                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/metaverse-development-company">
                                          Metaverse Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/metaverse-game-development">
                                          Metaverse Game Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/metaverse-nft-marketplace-development">
                                          Metaverse NFT Marketplace Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/metaverse-token-development">
                                          Metaverse Token Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/metaverse-virtual-showroom-development">
                                          Metaverse Virtual Showroom Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/metaverse-event-platform-development">
                                          Metaverse Event Platform Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/metaverse-virtual-mall-development">
                                          Metaverse Virtual Mall Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/top-10-metaverse-development-companies">
                                          Top 10 Metaverse Development Company                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                  <div>
                                    <ul>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/metaverse-social-media-platform-development">
                                          Metaverse Social Media Platform Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/metaverse-real-estate-development">
                                          Metaverse Real Estate Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/metaverse-avatar-development">
                                          Metaverse Avatar Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/metaverse-3d-space-development">
                                          Metaverse 3d Space Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/metaverse-launchpad-development">
                                          Metaverse Launchpad Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/metaverse-business-ideas-2023">
                                          Metaverse Business Ideas                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/metaverse-virtual-land-development">
                                          Metaverse Virtual Land Development                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="nft_development" className="card tab-pane    ">
                          <div className="card-header" role="tab" id="heading-nft_development">
                            <p className="mb-0">
                              {/* Note: `data-parent` removed from here */}
                              <a data-toggle="collapse" href="#collapse-nft_development" aria-expanded="true" aria-controls="collapse-nft_development">
                                NFT Development                      </a>
                            </p>
                          </div>
                          {/* Note: New place of `data-parent` */}
                          <div id="collapse-nft_development" className="collapse " data-parent="#content" role="tabpanel" aria-labelledby="heading-nft_development">
                            <div className="card-body cmpy_Overflow">
                              <div className="row">
                                <div className="col-md-4 mb-3">
                                  <div>
                                    <ul>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/nft-development-company">
                                          NFT Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/nft-marketplace-development">
                                          NFT Marketplace Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/nft-game-development">
                                          NFT Gaming Platform Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/nft-token-development">
                                          NFT Token Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/white-label-nft-marketplace-development">
                                          White Label NFT Solution                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/nft-minting-platform-development">
                                          NFT Minting Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/nft-exchange-development">
                                          NFT Exchange Platform Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/nft-launchpad-development">
                                          NFT Launchpad Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/nft-fashion-marketplace-development">
                                          NFT Fashion Marketplace Development                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                  <div>
                                    <ul>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/nft-art-marketplace-development">
                                          NFT Art Marketplace Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/nft-music-marketplace-development">
                                          NFT Music Marketplace Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/carbon-credits-nft-marketplace-development">
                                          Carbon Credits NFT Marketplace Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/binance-nft-marketplace-clone-script">
                                          Binance NFT Marketplace Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/polygon-matic-nft-marketplace-development">
                                          Polygon NFT Marketplace Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/solana-nft-marketplace-development">
                                          Solana NFT Marketplace Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/influencer-nft-marketplace-development">
                                          Influencers NFT Marketplace Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/nft-ticketing-marketplace-development">
                                          NFT Ticketing Marketplace Development                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                  <div>
                                    <ul>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/defi-nft-social-media-platform-development">
                                          DeFi NFT Marketplace Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/nft-marketplace-for-sports">
                                          NFT Fantasy Sports Platform Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/nft-storage-solutions">
                                          NFT Storage Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/nft-lending-platform-development">
                                          NFT Lending Platform Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/nft-business-ideas-2023">
                                          Top10 NFT Business Ideas                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="crypto_exchange_development" className="card tab-pane    ">
                          <div className="card-header" role="tab" id="heading-crypto_exchange_development">
                            <p className="mb-0">
                              {/* Note: `data-parent` removed from here */}
                              <a data-toggle="collapse" href="#collapse-crypto_exchange_development" aria-expanded="true" aria-controls="collapse-crypto_exchange_development">
                                Crypto Exchange Development                      </a>
                            </p>
                          </div>
                          {/* Note: New place of `data-parent` */}
                          <div id="collapse-crypto_exchange_development" className="collapse " data-parent="#content" role="tabpanel" aria-labelledby="heading-crypto_exchange_development">
                            <div className="card-body cmpy_Overflow">
                              <div className="row">
                                <div className="col-md-6 mb-3">
                                  <div>
                                    <ul>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/cryptocurrency-exchange-software-development">
                                          Cryptocurrency Exchange Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/decentralized-exchange-development">
                                          Decentralized Exchange Development Company                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/white-label-crypto-exchange-software">
                                          White Label Crypto Exchange Software                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/p2p-crypto-exchange-development">
                                          P2P Cryptocurrency Exchange Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/otc-exchange-development">
                                          OTC Exchange Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/cryptocurrency-wallet-development">
                                          Cryptocurrency Wallet Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/cryptocurrency-exchange-app-development">
                                          Cryptocurrency Exchange App Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/stock-trading-software-development">
                                          Stock Trading Software Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/cryptocurrency-development">
                                          Cryptocurrency Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/cryptocurrency-exchange-listing-services">
                                          Crypto Exchange Listing Services                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/top-countries-to-kick-start-your-cryptocurrency-exchange">
                                          Top countries to start Crypto                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/smart-contract-development">
                                          Smart Contract Development                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                  <div>
                                    <ul>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/binance-clone-script">
                                          Binance Clone Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/coinbase-clone-development">
                                          Coinbase Clone Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/wazirx-clone-script">
                                          Wazirx Clone Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/bybit-clone-script">
                                          ByBit Clone Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/kucoin-clone-development">
                                          Kucoin Clone Development                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="defi_development" className="card tab-pane    ">
                          <div className="card-header" role="tab" id="heading-defi_development">
                            <p className="mb-0">
                              {/* Note: `data-parent` removed from here */}
                              <a data-toggle="collapse" href="#collapse-defi_development" aria-expanded="true" aria-controls="collapse-defi_development">
                                DeFi Development                      </a>
                            </p>
                          </div>
                          {/* Note: New place of `data-parent` */}
                          <div id="collapse-defi_development" className="collapse " data-parent="#content" role="tabpanel" aria-labelledby="heading-defi_development">
                            <div className="card-body cmpy_Overflow">
                              <div className="row">
                                <div className="col-md-6 mb-3">
                                  <div>
                                    <ul>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/decentralized-finance-defi-development">
                                          Decentralized Finance (DeFi) Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/defi-lending-borrowing-platform-development">
                                          DeFi Lending/ Borrowing Platform Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/decentralized-finance-defi-staking-platform-development">
                                          DeFi Staking Platform Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/decentralized-finance-defi-token-development">
                                          DeFi Token Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/decentralized-finance-defi-wallet-development">
                                          DeFi Wallet Development                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                  <div>
                                    <ul>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/decentralized-finance-defi-smart-contract-development">
                                          DeFi Smart Contract Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/decentralized-finance-defi-dapp-development">
                                          DeFi DApp Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/decentralized-finance-defi-exchange-development">
                                          Decentralized Exchange Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/decentralized-finance-defi-insurance-development">
                                          DeFi Insurance Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/defi-crypto-synthetic-assets-explained">
                                          DeFi Crypto Synthetic Assets Development                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="game_development" className="card tab-pane    ">
                          <div className="card-header" role="tab" id="heading-game_development">
                            <p className="mb-0">
                              {/* Note: `data-parent` removed from here */}
                              <a data-toggle="collapse" href="#collapse-game_development" aria-expanded="true" aria-controls="collapse-game_development">
                                Game Development                      </a>
                            </p>
                          </div>
                          {/* Note: New place of `data-parent` */}
                          <div id="collapse-game_development" className="collapse " data-parent="#content" role="tabpanel" aria-labelledby="heading-game_development">
                            <div className="card-body cmpy_Overflow">
                              <div className="row">
                                <div className="col-md-6 mb-3">
                                  <div>
                                    <ul>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/game-development-company">
                                          Game Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/metaverse-game-development">
                                          Metaverse Game Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blockchain-game-development-company">
                                          Blockchain Game Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/casino-game-development">
                                          Casino Game Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/nft-game-development">
                                          NFT Gaming Platform Development                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                  <div>
                                    <ul>
                                      <li className="menu_sub_title">Web3 Games</li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/web3-game-development">
                                          Web3 Game Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/play-to-earn-game-development">
                                          Play To Earn Game Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/move-to-earn-game-development">
                                          Move To Earn Game Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/role-playing-game-rpg-development">
                                          Role Playing Game Development                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                  <div>
                                    <ul>
                                      <li className="menu_sub_title">Blockchain Games</li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/eggies-world-clone-script">
                                          Eggies World Clone Script                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/dungeonswap-clone-script">
                                          DungeonSwap Clone Script                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/battlepets-clone-script">
                                          Battle Pets Clone Script                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/cryptokitties-clone-script">
                                          Cryptokitties Clone Script                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                  <div>
                                    <ul>
                                      <li className="menu_sub_title">Casino Games</li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/poker-game-development">
                                          Poker Game                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/slot-game-development">
                                          Slot Game                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/bc-game-clone-script">
                                          BC Game Clone                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                  <div>
                                    <ul>
                                      <li className="menu_sub_title">NFT Games</li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/zed-run-clone-script">
                                          Zed Run Clone                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/axie-infinity-clone-script">
                                          Axie Infinity Clone                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/cryptosnake-clone-script">
                                          Crypto Snack Clone                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                  <div>
                                    <ul>
                                      <li className="menu_sub_title">Metaverse Games</li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/sandbox-clone-script">
                                          Sandbox Clone                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/roblox-clone-script">
                                          Roblox Clone                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                  <div>
                                    <ul>
                                      <li className="menu_sub_title">Defi Games</li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/polkawar-clone-script">
                                          Polkawar Clone                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                  <div>
                                    <ul>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="token_development" className="card tab-pane    ">
                          <div className="card-header" role="tab" id="heading-token_development">
                            <p className="mb-0">
                              {/* Note: `data-parent` removed from here */}
                              <a data-toggle="collapse" href="#collapse-token_development" aria-expanded="true" aria-controls="collapse-token_development">
                                Token Development                      </a>
                            </p>
                          </div>
                          {/* Note: New place of `data-parent` */}
                          <div id="collapse-token_development" className="collapse " data-parent="#content" role="tabpanel" aria-labelledby="heading-token_development">
                            <div className="card-body cmpy_Overflow">
                              <div className="row">
                                <div className="col-md-6 mb-3">
                                  <div>
                                    <ul>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/token-development">
                                          Token Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/semi-fungible-token-development">
                                          Semi-Fungible Token Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/bep20-token-development">
                                          Binance Smart Chain BEP20 Token Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/ethereum-token-development">
                                          Ethereum Token Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/asset-tokenization-development">
                                          Asset Tokenization Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/white-paper-writing-services" style={{ fontWeight: 700 }}>
                                          Whitepaper Writing Services                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                  <div>
                                    <ul>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="hire_developers" className="card tab-pane    ">
                          <div className="card-header" role="tab" id="heading-hire_developers">
                            <p className="mb-0">
                              {/* Note: `data-parent` removed from here */}
                              <a data-toggle="collapse" href="#collapse-hire_developers" aria-expanded="true" aria-controls="collapse-hire_developers">
                                Hire Developers                      </a>
                            </p>
                          </div>
                          {/* Note: New place of `data-parent` */}
                          <div id="collapse-hire_developers" className="collapse " data-parent="#content" role="tabpanel" aria-labelledby="heading-hire_developers">
                            <div className="card-body cmpy_Overflow">
                              <div className="row">
                                <div className="col-md-6 mb-3">
                                  <div>
                                    <ul>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/hire-metaverse-developers">
                                          Hire Metaverse Developers                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/hire-dapp-developers">
                                          Hire DApp Developers                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/hire-smart-contract-developers">
                                          Hire Smart Contract Developers                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/hire-python-developers">
                                          Hire Python Developers                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/hire-mern-stack-developers">
                                          Hire MERN Stack Developers                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/hire-web3-developers">
                                          Hire Web3 Developers                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="dapp_development" className="card tab-pane    ">
                          <div className="card-header" role="tab" id="heading-dapp_development">
                            <p className="mb-0">
                              {/* Note: `data-parent` removed from here */}
                              <a data-toggle="collapse" href="#collapse-dapp_development" aria-expanded="true" aria-controls="collapse-dapp_development">
                                DApp Development                      </a>
                            </p>
                          </div>
                          {/* Note: New place of `data-parent` */}
                          <div id="collapse-dapp_development" className="collapse " data-parent="#content" role="tabpanel" aria-labelledby="heading-dapp_development">
                            <div className="card-body cmpy_Overflow">
                              <div className="row">
                                <div className="col-md-12 mb-3">
                                  <div>
                                    <ul>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/dapp-development">
                                          DApp Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/solana-dapp-development">
                                          Solana DApp Development                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="web_and_mobile_app_development" className="card tab-pane    ">
                          <div className="card-header" role="tab" id="heading-web_and_mobile_app_development">
                            <p className="mb-0">
                              {/* Note: `data-parent` removed from here */}
                              <a data-toggle="collapse" href="#collapse-web_and_mobile_app_development" aria-expanded="true" aria-controls="collapse-web_and_mobile_app_development">
                                Web and Mobile App Development                      </a>
                            </p>
                          </div>
                          {/* Note: New place of `data-parent` */}
                          <div id="collapse-web_and_mobile_app_development" className="collapse " data-parent="#content" role="tabpanel" aria-labelledby="heading-web_and_mobile_app_development">
                            <div className="card-body cmpy_Overflow">
                              <div className="row">
                                <div className="col-md-6 mb-3">
                                  <div>
                                    <ul>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/web-development">
                                          Web Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/mobile-app-development">
                                          Mobile App Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/on-demand-app-development">
                                          On-demand App Development                                        </a>
                                      </li>
                                      <li>
                                        <a target="_blank" href="https://www.metablocktechnologies.com/blog/ott-app-development">
                                          OTT App                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="menu_social_icon_main">
                          <p className="contents">We're One Tap Away!</p>
                          <ul className="menu_social_listsec">
                            <li className="menu_social_list">
                              <a href="https://web.whatsapp.com/send?phone=919442164852&text=Hi,%20I%20need%20more%20details%20about%20your%20services.%20Shall%20we%20discuss%20now?%20-%20' . full_url() . '" target="_blank">
                                <img src="https://www.metablocktechnologies.com/asset/img/menu-whatsapp.svg" className="img-fluid " alt="Whatsapp" title="Whatsapp" />
                              </a>
                            </li>
                            <li className="menu_social_list">
                              <a href="https://telegram.me/metablock_Tech" target="_blank">
                                <img src="https://www.metablocktechnologies.com/asset/img/menu-telegram.svg" className="img-fluid " alt="Telegram " title="Telegram" />
                              </a>
                            </li>
                            <li className="menu_social_list">
                              <a target="_blank" href="mailto:sales@metablocktechnologies.com">
                                <img src="https://www.metablocktechnologies.com/asset/img/menu-mail.svg" className="img-fluid" alt="Mail" title="Mail" />
                              </a>
                            </li>
                            <li className="menu_social_list">
                              <a href="https://join.skype.com/invite/lAF0IYo03Kfu" target="_blank">
                                <img src="https://www.metablocktechnologies.com/asset/img/menu-skype.svg" className="img-fluid" alt="Skype" title="Skype" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown menu_res">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    Blockchain
                  </a>
                  <div className="dropdown-menu">
                    <ul>
                      <li><a href="https://www.metablocktechnologies.com/blockchain-development-company" target="_blank">Blockchain Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/smart-contract-development" target="_blank">Smart Contract Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/enterprise-blockchain-solutions" target="_blank">Enterprise Blockchain Solutions</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blockchain-crowdfunding-platform-development" target="_blank">Blockchain Crowdfunding Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/private-public-blockchain-development" target="_blank">Private/Public Blockchain Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blockchain-p2p-lending-platform" target="_blank">Blockchain P2P Lending Platform</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blockchain-iot-development" target="_blank">Blockchain IoT Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/smart-contract-audit" target="_blank">Smart Contract Audit</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/blockchain-business-ideas-2023" target="_blank">Top10 Blockchain Business Ideas</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/solana-blockchain-development" target="_blank">Solana Blockchain Development Company</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/polygon-matic-blockchain-development" target="_blank">Polygon Blockchain Development Company</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/dao-blockchain-development" target="_blank">DAO Blockchain Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/makerdao-clone-script" target="_blank">MakerDAO Clone Script</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/binance-smart-chain-development" target="_blank">Binance Smart Chain (BSC) Blockchain Development</a></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item dropdown menu_res">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    Web3
                  </a>
                  <div className="dropdown-menu">
                    <ul>
                      <li><a href="https://www.metablocktechnologies.com/web3-development-company" target="_blank">Web3 Development Company</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/web3-game-development" target="_blank">Web3 Game Development Company</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/web3.0-crypto-exchange-development" target="_blank">Web3 Crypto Exchange Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/contact-us" target="_blank">Web3 Smart Contract Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/web3-wallet-development" target="_blank">Web3 Wallet Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/top-10-web3-business-ideas-in-2023" target="_blank">Top 10 Web3 Business Ideas</a></li>

                    </ul>
                  </div>
                </li>
                <li className="nav-item menu_desk">
                  <a className="nav-link" href="#">Exchange</a>
                  <div className="sub-menu">
                    <div className="row">
                      <div className="col-lg-6">
                        <div>
                          <ul>
                            <li><a href="https://www.metablocktechnologies.com/cryptocurrency-exchange-software-development" target="_blank">Cryptocurrency Exchange Development</a></li>
                            <li><a href="https://www.metablocktechnologies.com/decentralized-exchange-development" target="_blank">Decentralized Exchange Development Company</a></li>
                            <li><a href="https://www.metablocktechnologies.com/white-label-crypto-exchange-software" target="_blank">White Label Crypto Exchange Software</a></li>
                            <li><a href="https://www.metablocktechnologies.com/p2p-crypto-exchange-development" target="_blank">P2P Cryptocurrency Exchange Development</a></li>
                            <li><a href="https://www.metablocktechnologies.com/cryptocurrency-development" target="_blank">Cryptocurrency Development</a></li>
                            <li><a href="https://www.metablocktechnologies.com/cryptocurrency-wallet-development" target="_blank">Cryptocurrency Wallet Development</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div>
                          <ul>
                            <li><a href="https://www.metablocktechnologies.com/binance-clone-script" target="_blank">Binance Clone Development</a></li>
                            <li><a href="https://www.metablocktechnologies.com/coinbase-clone-development" target="_blank">Coinbase Clone Development</a></li>
                            <li><a href="https://www.metablocktechnologies.com/blog/wazirx-clone-script" target="_blank">Wazirx Clone Development</a></li>
                            <li><a href="https://www.metablocktechnologies.com/blog/bybit-clone-script" target="_blank">ByBit Clone Development</a></li>
                            <li><a href="https://www.metablocktechnologies.com/kucoin-clone-development" target="_blank">Kucoin Clone Development</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item menu_desk">
                  <a className="nav-link" href="#">Metaverse</a>
                  <div className="sub-menu">
                    <div className="row">
                      <div className="col-lg-6">
                        <div>
                          <ul>
                            <li><a href="https://www.metablocktechnologies.com/metaverse-ecosystem" target="_blank">Metaverse Ecosystem</a></li>
                            <li><a href="https://www.metablocktechnologies.com/metaverse-development-company" target="_blank">Metaverse Development</a></li>
                            <li><a href="https://www.metablocktechnologies.com/metaverse-game-development" target="_blank">Metaverse Game Development</a></li>
                            <li><a href="https://www.metablocktechnologies.com/blog/metaverse-nft-marketplace-development" target="_blank">Metaverse NFT Marketplace Development</a></li>
                            <li><a href="https://www.metablocktechnologies.com/blog/metaverse-token-development" target="_blank">Metaverse Token Development</a></li>
                            <li><a href="https://www.metablocktechnologies.com/blog/metaverse-virtual-showroom-development" target="_blank">Metaverse Virtual Showroom Development</a></li>
                            <li><a href="https://www.metablocktechnologies.com/blog/metaverse-event-platform-development" target="_blank">Metaverse Event Platform Development</a></li>
                            <li><a href="https://www.metablocktechnologies.com/blog/metaverse-virtual-mall-development" target="_blank">Metavere Virtual Mall Development</a></li>
                            <li><a href="https://www.metablocktechnologies.com/blog/top-10-metaverse-development-companies" target="_blank">Top 10 Metaverse Development Company</a></li>
                            {/* <li><a href="https://www.metablocktechnologies.com/request-for-quotation" target="_blank">Metaverse E-commerce Development</a></li> */}
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div>
                          <ul>
                            <li><a href="https://www.metablocktechnologies.com/blog/metaverse-social-media-platform-development" target="_blank">Metaverse Social Media Platform Development</a></li>
                            <li><a href="https://www.metablocktechnologies.com/blog/metaverse-real-estate-development" target="_blank">Metaverse Real Estate Development</a></li>
                            <li><a href="https://www.metablocktechnologies.com/blog/metaverse-avatar-development" target="_blank">Metaverse Avatar Development</a></li>
                            <li><a href="https://www.metablocktechnologies.com/blog/metaverse-3d-space-development" target="_blank">Metaverse 3d Space Development</a></li>
                            <li><a href="https://www.metablocktechnologies.com/blog/metaverse-launchpad-development" target="_blank">Metaverse Launchpad Development</a></li>
                            <li><a href="https://www.metablocktechnologies.com/blog/metaverse-business-ideas-2023" target="_blank">Metaverse Business Ideas</a></li>
                            <li><a href="https://www.metablocktechnologies.com/blog/metaverse-virtual-land-development" target="_blank">Metaverse Virtual Land Development</a></li>
                            {/* <li><a href="https://www.metablocktechnologies.com/request-for-quotation" target="_blank">Metaverse Solutions for Industries</a></li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown menu_res">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    Metaverse
                  </a>
                  <div className="dropdown-menu">
                    <ul>
                      <li><a href="https://www.metablocktechnologies.com/metaverse-ecosystem" target="_blank">Metaverse Ecosystem</a></li>
                      <li><a href="https://www.metablocktechnologies.com/metaverse-development-company" target="_blank">Metaverse Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/metaverse-game-development" target="_blank">Metaverse Game Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/metaverse-token-development" target="_blank">Metaverse Token Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/metaverse-nft-marketplace-development" target="_blank">Metaverse NFT Marketplace Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/metaverse-event-platform-development" target="_blank">Metaverse Event Platform Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/metaverse-virtual-mall-development" target="_blank">Metavere Virtual Mall Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/metaverse-social-media-platform-development" target="_blank">Metaverse Social Media Platform Development</a></li>
                      {/* <li><a href="https://www.metablocktechnologies.com/request-for-quotation" target="_blank">Metaverse E-commerce Development</a></li> */}
                      <li><a href="https://www.metablocktechnologies.com/blog/metaverse-real-estate-development" target="_blank">Metaverse Real Estate Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/metaverse-avatar-development" target="_blank">Metaverse Avatar Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/metaverse-3d-space-development" target="_blank">Metaverse 3d Space Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/request-for-quotation" target="_blank">Metaverse Solutions for Industries</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/metaverse-launchpad-development" target="_blank">Metaverse Launchpad Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/metaverse-business-ideas-2023" target="_blank">Metaverse Business Ideas</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/metaverse-virtual-land-development" target="_blank">Metaverse Virtual Land Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/top-10-metaverse-development-companies" target="_blank">Top 10 Metaverse Development Company</a></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item dropdown menu_res">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    AI
                  </a>
                  <div className="dropdown-menu compyMenuResHight">
                    <ul>
                      <li><a href="https://www.metablocktechnologies.com/ai-development-company" target="_blank">AI Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/generative-ai-development-company" target="_blank">Generative AI Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/ai-nft-image-generator-development" target="_blank">AI NFT Generator Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/ai-crypto-trading-bot-development" target="_blank">AI Crypto Trading Bot Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/ai-chat-bot-development" target="_blank">AI Chatbot Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/customized-chatgpt-app" target="_blank">Custom ChatGPT APP</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/ai-business-ideas" target="_blank">Top 10 AI Business Ideas</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/chatgpt-for-information-technology" target="_blank">ChatGPT for IT</a></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item dropdown menu_res">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    NFT
                  </a>
                  <div className="dropdown-menu">
                    <ul>
                      <li><a href="https://www.metablocktechnologies.com/nft-development-company" target="_blank">NFT Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/nft-marketplace-development" target="_blank">NFT Marketplace Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/nft-game-development" target="_blank">FT Gaming Platform Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/nft-token-development" target="_blank">NFT Token Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/white-label-nft-marketplace-development" target="_blank">White Label NFT Solution</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/nft-minting-platform-development" target="_blank">NFT Minting Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/nft-exchange-development" target="_blank">NFT Exchange Platform Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/nft-launchpad-development" target="_blank">NFT Launchpad Development</a></li>
                      {/* <li><a href="https://www.metablocktechnologies.com/blog/request-for-quotation" target="_blank">NFT for Real Estate</a></li> */}
                      <li><a href="https://www.metablocktechnologies.com/blog/nft-fashion-marketplace-development" target="_blank">NFT Fashion Marketplace Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/nft-art-marketplace-development" target="_blank">NFT Art Marketplace Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/nft-music-marketplace-development" target="_blank">NFT Music Marketplace Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/carbon-credits-nft-marketplace-development" target="_blank">Carbon Credits NFT Marketplace Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/binance-nft-marketplace-clone-script" target="_blank">Binance NFT Marketplace Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/polygon-matic-nft-marketplace-development" target="_blank">Polygon NFT Marketplace Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/solana-nft-marketplace-development" target="_blank">Solana NFT Marketplace Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/influencer-nft-marketplace-development" target="_blank">Influencers NFT Marketplace Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/nft-ticketing-marketplace-development" target="_blank">NFT Ticketing Marketplace Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/defi-nft-social-media-platform-development" target="_blank">DeFi NFT Marketplace Development</a></li>
                      {/* <li><a href="https://www.metablocktechnologies.com/request-for-quotation" target="_blank">Multi-Chain NFT Marketplace Development</a></li> */}
                      {/* <li><a href="https://www.metablocktechnologies.com/request-for-quotation" target="_blank">Cross-Chain NFT Marketplace Development</a></li> */}
                      <li><a href="https://www.metablocktechnologies.com/blog/nft-marketplace-for-sports" target="_blank">NFT Fantasy Sports Platform Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/nft-storage-solutions" target="_blank">NFT Storage Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/nft-lending-platform-development" target="_blank">NFT Lending Platform Development</a></li>
                      {/* <li><a href="https://www.metablocktechnologies.com/request-for-quotation" target="_blank">Hire NFT Developers</a></li> */}
                      {/* <li><a href="https://www.metablocktechnologies.com/request-for-quotation" target="_blank">NFT Solutions for Industries</a></li> */}
                      <li><a href="https://www.metablocktechnologies.com/blog/nft-business-ideas-2023" target="_blank">Top10 NFT Business Ideas</a></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item dropdown menu_res">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    Crypto Exchange
                  </a>
                  <div className="dropdown-menu">
                    <ul>
                      <li><a href="https://www.metablocktechnologies.com/cryptocurrency-exchange-software-development" target="_blank">Cryptocurrency Exchange Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/decentralized-exchange-development" target="_blank">Decentralized Exchange Development Company</a></li>
                      <li><a href="https://www.metablocktechnologies.com/white-label-crypto-exchange-software" target="_blank">White Label Crypto Exchange Software</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/p2p-crypto-exchange-development" target="_blank">P2P Cryptocurrency Exchange Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/otc-exchange-development" target="_blank">OTC Exchange Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/cryptocurrency-wallet-development" target="_blank">Cryptocurrency Wallet Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/cryptocurrency-exchange-app-development" target="_blank">Cryptocurrency Exchange App Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/stock-trading-software-development" target="_blank">Stock Trading Software Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/cryptocurrency-development" target="_blank">Cryptocurrency Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/cryptocurrency-exchange-listing-services" target="_blank">Crypto Exchange Listing Services</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/top-countries-to-kick-start-your-cryptocurrency-exchange" target="_blank">Top countries to start Crypto</a></li>
                      <li><a href="https://www.metablocktechnologies.com/smart-contract-development" target="_blank">Smart Contract Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/binance-clone-script" target="_blank">Binance Clone Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/coinbase-clone-development" target="_blank">Coinbase Clone Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/wazirx-clone-script" target="_blank">Wazirx Clone Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/kucoin-clone-development" target="_blank">Kucoin Clone Development</a></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item dropdown menu_res">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    DeFi
                  </a>
                  <div className="dropdown-menu">
                    <ul>
                      <li><a href="https://www.metablocktechnologies.com/decentralized-finance-defi-development" target="_blank">Decentralized Finance (DeFi) Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/defi-lending-borrowing-platform-development" target="_blank">DeFi Lending/ Borrowing Platform Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/decentralized-finance-defi-staking-platform-development" target="_blank">DeFi Staking Platform Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/decentralized-finance-defi-token-development" target="_blank">DeFi Token Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/decentralized-finance-defi-wallet-development" target="_blank">DeFi Wallet Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/decentralized-finance-defi-smart-contract-development" target="_blank">DeFi Smart Contract Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/decentralized-finance-defi-dapp-development" target="_blank">DeFi DApp Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/decentralized-finance-defi-exchange-development" target="_blank">Decentralized Exchange Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/decentralized-finance-defi-insurance-development" target="_blank">DeFi Insurance Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/defi-crypto-synthetic-assets-explained" target="_blank">DeFi Crypto Synthetic Assets Development</a></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item dropdown menu_res">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    Gaming
                  </a>
                  <div className="dropdown-menu">
                    <ul>
                      <li><a href="https://www.metablocktechnologies.com/game-development-company" target="_blank">Game Development</a></li>
                      <li>
                        <div className="mbl_sub_head">Metaverse Games</div>
                      </li>
                      <li className="mbl_submenu_list"><a href="https://www.metablocktechnologies.com/metaverse-game-development" target="_blank">Metaverse Game Development</a></li>
                      <li className="mbl_submenu_list"><a href="https://www.metablocktechnologies.com/blog/sandbox-clone-script" target="_blank">Sandbox Clone</a></li>
                      <li className="mbl_submenu_list"><a href="https://www.metablocktechnologies.com/blog/roblox-clone-script" target="_blank">Roblox Clone</a></li>
                      <li>
                        <div className="mbl_sub_head">Blockchain Games</div>
                      </li>
                      <li className="mbl_submenu_list"><a href="https://www.metablocktechnologies.com/blockchain-game-development-company" target="_blank">Blockchain Game Development</a></li>
                      <li className="mbl_submenu_list"><a href="https://www.metablocktechnologies.com/blog/eggies-world-clone-script" target="_blank">Eggies World Clone Script</a></li>
                      <li className="mbl_submenu_list"><a href="https://www.metablocktechnologies.com/blog/dungeonswap-clone-script" target="_blank">DungeonSwap Clone Script</a></li>
                      <li className="mbl_submenu_list"><a href="https://www.metablocktechnologies.com/blog/battlepets-clone-script" target="_blank">Battle Pets Clone Script</a></li>
                      <li>
                        <div className="mbl_sub_head">Casino Games</div>
                      </li>
                      <li className="mbl_submenu_list"><a href="https://www.metablocktechnologies.com/casino-game-development" target="_blank">Casino Game Development</a></li>
                      <li className="mbl_submenu_list"><a href="https://www.metablocktechnologies.com/blog/poker-game-development" target="_blank">Poker Game</a></li>
                      <li className="mbl_submenu_list"><a href="https://www.metablocktechnologies.com/blog/slot-game-development" target="_blank">Slot Game</a></li>
                      <li className="mbl_submenu_list"><a href="https://www.metablocktechnologies.com/blog/bc-game-clone-script" target="_blank">BC Game Clone</a></li>
                      <li>
                        <div className="mbl_sub_head">NFT Games</div>
                      </li>
                      <li className="mbl_submenu_list"><a href="https://www.metablocktechnologies.com/nft-game-development" target="_blank">NFT Game Development</a></li>
                      <li className="mbl_submenu_list"><a href="https://www.metablocktechnologies.com/blog/zed-run-clone-script" target="_blank">Zed Run Clone</a></li>
                      <li className="mbl_submenu_list"><a href="https://www.metablocktechnologies.com/blog/axie-infinity-clone-script" target="_blank">Axie Infinity Clone</a></li>
                      <li className="mbl_submenu_list"><a href="https://www.metablocktechnologies.com/blog/cryptosnake-clone-script" target="_blank">Cryptosnack Clone</a></li>
                      <li>
                        <div className="mbl_sub_head">Web3 Games</div>
                      </li>
                      <li className="mbl_submenu_list"><a href="https://www.metablocktechnologies.com/blog/web3-game-development" target="_blank">Web3 Game Development</a></li>
                      <li className="mbl_submenu_list"><a href="https://www.metablocktechnologies.com/move-to-earn-game-development" target="_blank">M2E Game Development</a></li>
                      <li className="mbl_submenu_list"><a href="https://www.metablocktechnologies.com/play-to-earn-game-development" target="_blank">P2E Game Development</a></li>
                      <li className="mbl_submenu_list"><a href="https://www.metablocktechnologies.com/blog/role-playing-game-rpg-development" target="_blank">RPG Game Development</a></li>
                      <li>
                        <div className="mbl_sub_head">Defi Game Development</div>
                      </li>
                      <li className="mbl_submenu_list"><a href="https://www.metablocktechnologies.com/blog/polkawar-clone-script" target="_blank">Polkawar Clone</a></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item dropdown menu_res">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    Token Development
                  </a>
                  <div className="dropdown-menu">
                    <ul>
                      <li><a href="https://www.metablocktechnologies.com/token-development" target="_blank">Token Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/semi-fungible-token-development" target="_blank">Semi-Fungible Token Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/bep20-token-development" target="_blank">Binance Smart Chain BEP20 Token Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/ethereum-token-development" target="_blank">Ethereum Token Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/asset-tokenization-development" target="_blank">Asset Tokenization Development</a></li>
                      <li><a href="https://www.metablocktechnologies.com/white-paper-writing-services" target="_blank">Whitepaper Writing Services</a></li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item menu_desk">
                  <a className="nav-link" href="#">AI</a>
                  <div className="sub-menu">
                    <div className="row">
                      <div className="col-lg-12">
                        <div>
                          <ul>
                            <li><a href="https://www.metablocktechnologies.com/ai-development-company" target="_blank">AI Development</a></li>
                            <li><a href="https://www.metablocktechnologies.com/generative-ai-development-company" target="_blank">Generative AI Development</a></li>
                            <li><a href="https://www.metablocktechnologies.com/blog/ai-nft-image-generator-development" target="_blank">AI NFT Generator Development</a></li>
                            <li><a href="https://www.metablocktechnologies.com/blog/ai-crypto-trading-bot-development" target="_blank">AI Crypto Trading Bot Development</a></li>
                            <li><a href="https://www.metablocktechnologies.com/ai-chat-bot-development" target="_blank">AI Chatbot Development</a></li>
                            <li><a href="https://www.metablocktechnologies.com/blog/customized-chatgpt-app" target="_blank">Custom ChatGPT APP</a></li>
                            <li><a href="https://www.metablocktechnologies.com/blog/ai-business-ideas" target="_blank">Top 10 AI Business Ideas</a></li>
                            <li><a href="https://www.metablocktechnologies.com/blog/chatgpt-for-information-technology" target="_blank">ChatGPT for IT</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item menu_desk">
                  <a className="nav-link" href="#">Gaming</a>
                  <div className="sub-menu">
                    <div className="row">
                      <div className="col-lg-12">
                        <div>
                          <ul>
                            <li><a href="https://www.metablocktechnologies.com/game-development-company" target="_blank">Game Development</a></li>
                            <li><a href="https://www.metablocktechnologies.com/metaverse-game-development" target="_blank">Metaverse Game Development</a></li>
                            <li><a href="https://www.metablocktechnologies.com/blockchain-game-development-company" target="_blank">Blockchain Game Development</a></li>
                            <li><a href="https://www.metablocktechnologies.com/casino-game-development" target="_blank">Casino Game Development</a></li>
                            <li><a href="https://www.metablocktechnologies.com/nft-game-development" target="_blank">NFT Game Development</a></li>
                            <li><a href="https://www.metablocktechnologies.com/play-to-earn-game-development" target="_blank">Play To Earn Game Development</a></li>
                            <li><a href="https://www.metablocktechnologies.com/move-to-earn-game-development" target="_blank">Move To Earn Game Development</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown menu_res">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    Hire Developers
                  </a>
                  <div className="dropdown-menu">
                    <ul>

                      <li><a href="https://www.metablocktechnologies.com/blog/hire-metaverse-developers" target="_blank">Hire Metaverse Developers</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/hire-dapp-developers" target="_blank">Hire DApp Developers</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/hire-smart-contract-developers" target="_blank">Hire Smart Contract Developers</a></li>
                      <li><a href="https://www.metablocktechnologies.com/blog/hire-python-developers" target="_blank">Hire Python Developers</a></li>

                      <li><a href="https://www.metablocktechnologies.com/blog/hire-mern-stack-developers" target="_blank">Hire MERN Stack Developers</a></li>
                      <li><a href="https://www.metablocktechnologies.com/hire-web3-developers" target="_blank">Hire Web3 Developers</a></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item menu_desk">
                  <a className="nav-link" href="#">Insights</a>
                  <div className="sub-menu">
                    <div className="row">
                      <div className="col-lg-12">
                        <div>
                          <ul>
                            <div className="dropdown_sub_menu dropright">
                              <a className="dropdown_nav_link dropdown-toggle" href="#" id="Company_navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">Company</a>
                              <div className="dropdown-menu drop_right_menu" aria-labelledby="navbarDropdown">
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div>
                                      <li><a href="https://www.metablocktechnologies.com/about-us" target="_blank">About Us</a></li>
                                      <li><a href="https://www.metablocktechnologies.com/metablock-company-profile-brochure.pdf?v1" target="_blank">Company Profile</a></li>
                                      <li><a href="https://www.metablocktechnologies.com/metablock-pitchdeck.pdf?v1" target="_blank">Pitch Deck</a></li>
                                      <li><a href="https://www.metablocktechnologies.com/life-at-metablock" target="_blank">Life@metablock</a></li>
                                      <li><a href="https://www.metablocktechnologies.com/events" target="_blank">Events</a></li>
                                      <li><a href="https://www.metablocktechnologies.com/celebrations" target="_blank">Celeberations</a></li>
                                      <li><a href="https://www.metablocktechnologies.com/terms-and-conditions" target="_blank">Terms and Conditions</a></li>
                                      <li><a href="https://www.metablocktechnologies.com/payment-refund-policy" target="_blank">Privacy Policy</a></li>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="dropdown_sub_menu dropright">
                              <a className="dropdown_nav_link dropdown-toggle" href="#" id="contact_navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">Contact Us</a>
                              <div className="dropdown-menu drop_right_menu" aria-labelledby="navbarDropdown">
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div>
                                      <li><a href="https://www.metablocktechnologies.com/contact-us" target="_blank">Contact Us</a></li>
                                      <li><a href="https://www.metablocktechnologies.com/request-for-quotation" target="_blank">Request For Quote</a></li>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <li><a href="https://www.metablocktechnologies.com/news" target="_blank">News</a></li>
                            <li><a href="https://www.metablocktechnologies.com/announcement" target="_blank">Announcement</a></li>
                            <li><a href="https://www.metablocktechnologies.com/faq" target="_blank">FAQ</a></li>

                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown menu_res">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    Insights
                  </a>
                  <div className="dropdown-menu">
                    <ul>
                      <li><a href="https://www.metablocktechnologies.com/blog" target="_blank">Blogs</a></li>
                      <li><a href="https://www.metablocktechnologies.com/news" target="_blank">News</a></li>
                      <li><a href="https://www.metablocktechnologies.com/announcement" target="_blank">Announcement</a></li>

                      <li><a href="https://www.metablocktechnologies.com/faq" target="_blank">FAQ</a></li>

                      <li><a href="https://www.metablocktechnologies.com/testimonials" target="_blank">Testimonials</a></li>

                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://career.metablocktechnologies.in/" target="_blank">Careers</a>
                </li>
                <li className="nav-item menu_desk">
                  <a className="nav-link" href="https://www.metablocktechnologies.com/blog" target="_blank">Blogs</a>
                </li>

                <li className="nav-item dropdown menu_res">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    Company
                  </a>
                  <div className="dropdown-menu compyMenuResHight">
                    <ul>
                      <li><a href="https://www.metablocktechnologies.com/about-us" target="_blank">About Us</a></li>
                      <li><a href="https://www.metablocktechnologies.com/metablock-company-profile-brochure.pdf?v1" target="_blank">Company Profile</a></li>
                      <li><a href="https://www.metablocktechnologies.com/metablock-pitchdeck.pdf?v1" target="_blank">Pitch Deck</a></li>
                      <li><a href="https://www.metablocktechnologies.com/vision-mission" target="_blank">Vision &amp; Mission</a></li>
                      <li><a href="https://www.metablocktechnologies.com/infrastructure" target="_blank">Infrastructure</a></li>
                      <li><a href="https://www.metablocktechnologies.com/why-metablock" target="_blank">Why metablock</a></li>
                      <li><a href="https://www.metablocktechnologies.com/benefits" target="_blank">Benefits</a></li>
                      <li><a href="https://www.metablocktechnologies.com/life-at-metablock" target="_blank">Life@metablock</a></li>
                      <li><a href="https://www.metablocktechnologies.com/quality-policy" target="_blank">Quality Policy</a></li>
                      <li><a href="https://www.metablocktechnologies.com/events" target="_blank">Events</a></li>
                      <li><a href="https://www.metablocktechnologies.com/celebrations" target="_blank">Celeberations</a></li>
                      <li><a href="https://www.metablocktechnologies.com/business-model" target="_blank">Business Model</a></li>
                      <li><a href="https://www.metablocktechnologies.com/our-digital-lab" target="_blank">Our Lab</a></li>
                      <li><a href="https://www.metablocktechnologies.com/development-process" target="_blank">Development Process</a></li>
                      <li><a href="https://www.metablocktechnologies.com/our-expertise" target="_blank">Our Expertise</a></li>
                      <li><a href="https://www.metablocktechnologies.com/terms-and-conditions" target="_blank">Terms and Conditions</a></li>
                      <li><a href="https://www.metablocktechnologies.com/payment-refund-policy" target="_blank">Privacy Policy</a></li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item dropdown menu_res">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    Contact Us
                  </a>
                  <div className="dropdown-menu compyMenuResHight">
                    <ul>
                      <li><a href="https://www.metablocktechnologies.com/contact-us" target="_blank">Contact Us</a></li>
                      <li><a href="https://www.metablocktechnologies.com/request-for-quotation" target="_blank">Request For Quote</a></li>
                    </ul>
                  </div>
                </li>

                {/* <li class="nav-item menu_desk hasNewMenu ml-10 mr-40" role="button"> */}
                <li className="nav-item menu_desk hasNewMenu hover_me ml-auto mr-40">
                  <a className="nav-link" href="#">
                    <img src="https://www.metablocktechnologies.com/asset/home-page-new/images/ftr-top-icon2.svg" alt="Social Icons" title="Social Icons" className="contactIconTop" />
                  </a>
                  <article className="sub-menu social_icon_sub_menu">
                    <div className="topNewContact">
                      <ul>
                        <li>
                          <img src="https://www.metablocktechnologies.com/asset/home-page-new/images/menu-headphone.svg" alt="headphone Icon" title="headphone Icon" className />
                          <a className="desktop nav-link d-none d-lg-block icons_li whatsapp" href="https://web.whatsapp.com/send?phone=919442164852&text=Hi,%20I%20need%20more%20details%20about%20your%20services.%20Shall%20we%20discuss%20now?%20-%20' https://www.metablocktechnologies.com/blog/metaverse-avatar-development '" target="_blank">Let's Connect With metablock Team</a>
                        </li>
                      </ul>
                    </div>
                    <div className="middlePartMenu">
                      <p>For Careers Inquiry :</p>
                      <ul>
                        <li>
                          <img src="https://www.metablocktechnologies.com/asset/home-page-new/images/ftr-top-icon2.svg" alt="Phone Icons" title="Phone Icons" className />
                          <a target="_blank" href="tel:+91 9500481067">+91 9500481067</a>
                        </li>
                        <li>
                          <img src="https://www.metablocktechnologies.com/asset/home-page-new/images/mail-icon.svg" alt="Mail Icons" title="Mail Icons" className />
                          <a target="_blank" href="mailto:hr@metablocktechnologies.com">hr@metablocktechnologies.com</a>
                        </li>
                      </ul>
                    </div>
                    <div className="middlePartMenu">
                      <p>For Sales Inquiry :</p>
                      <ul>
                        <li>
                          <img src="https://www.metablocktechnologies.com/asset/home-page-new/images/ftr-top-icon2.svg" alt="Phone Icons" title="Phone Icons" className />
                          <a target="_blank" href="tel:+91 9442164852">+91 9442164852</a>
                        </li>
                        <li>
                          <img src="https://www.metablocktechnologies.com/asset/home-page-new/images/mail-icon.svg" alt="Mail Icons" title="Mail Icons" className />
                          <a target="_blank" href="mailto:sales@metablocktechnologies.com">sales@metablocktechnologies.com</a>
                        </li>
                      </ul>
                    </div>
                    <div className="middlePartMenu">
                      <p>For Quick Connect :</p>
                      <ul>
                        <li className="lastWhatsapp">
                          <img src="https://www.metablocktechnologies.com/asset/home-page-new/images/menu-skype.svg" alt="Skype Icons" title="Skype Icons" className="middlePartMenu_img" />
                          <a href="https://join.skype.com/invite/lAF0IYo03Kfu" target="_blank" className="nav-link icons_li skype">metablock. tech</a>
                        </li>
                        <li className="lastWhatsapp">
                          <img src="https://www.metablocktechnologies.com/asset/home-page-new/images/menu-telegram.svg" alt="Telegram Icons" title="Telegram Icons" className="middlePartMenu_img" />
                          <a href="https://telegram.me/metablock_Tech" target="_blank" className="nav-link icons_li telegram">metablock_Tech</a>
                        </li>
                        <li className="lastWhatsapp">
                          <img src="https://www.metablocktechnologies.com/asset/home-page-new/images/menu-whatsapp.svg" alt="Whatsapp Icons" title="Whatsapp Icons" className="middlePartMenu_img" />
                          <a className="desktop nav-link d-none d-lg-block icons_li whatsapp" href="https://web.whatsapp.com/send?phone=919442164852&text=Hi,%20I%20need%20more%20details%20about%20your%20services.%20Shall%20we%20discuss%20now?%20-%20' https://www.metablocktechnologies.com/blog/metaverse-avatar-development '" target="_blank">+91 9442164852</a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </li>

                {/*  */}
                <li className="HddrBtns co web_menu_btn_sec">
                  <button className="btn menu_btn button_christ" id="proposal_btn" onclick="openContact()">GET A PROPOSAL <img src="https://www.metablocktechnologies.com/asset/img/reindeer.webp" className="img-fluid raindeer_img" alt="raindeer-img" title="Raindeer" /> </button>

                  <article className="contact_form_mainsec" id="contact_form_main">
                    <div className="topNewContact">
                      <p className="sub_title">Let's quickly bond.</p>
                    </div>
                    <div className="contact_form_sec">
                      <form onSubmit={handleSubmit} className="fitoutform" id="side_contact_form" >
                        <div className="row">
                          <div className="col-lg-12 col-12 form-group">
                            <input type="text"
                              name="name"
                              placeholder="Enter Your Name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              autoComplete='off' />
                          </div>
                          <input type="hidden" className="form-control" defaultValue="header_proposal_form_blog" name="category_name" />
                          <div className="col-lg-12 col-12 form-group">
                            <input type="text"
                              className="form-control"
                              name="email"
                              placeholder="Enter Your Email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required />
                          </div>
                          <div className="col-lg-12 col-12 form-group">
                            <div className="selecpicker_input_group_div">
                              <select className="selectpicker form-control select_icon_list" name="country"
                                aria-label="Contact Details"
                                value={formData.country}
                                onChange={(e) => {
                                  handleInputChange(e);
                                  console.log(e.target.value);
                                }}>
                                <option data-icon="fa fa-phone" value="mobile" />
                                <option data-icon="fab fa-whatsapp" value="whatsapp" />
                                <option data-icon="fab fa-telegram" value="telegram" />
                              </select>
                              <input type="phone"
                                name="phone"
                                placeholder="Your Phone Number"
                                className="telephone"
                                value={formData.phone}
                                onChange={handleInputChange} />
                              <input type="hidden" name="social_link_type_hidden" defaultValue="mobile" />
                            </div>
                          </div>
                          <div className="col-lg-12 col-12 form-group">
                            <div className="popup_country">
                              <select className="form-control form_control_select select2country_popup" name="country" id="header_proposal_popup_country" aria-label="Country">
                                <option value hidden>Select Country</option>
                                <option value="Afghanistan" id="AF">Afghanistan</option>
                                <option value="Albania" id="AL">Albania</option>
                                <option value="Algeria" id="DZ">Algeria</option>
                                <option value="American Samoa" id="AS">American Samoa</option>
                                <option value="Andorra" id="AD">Andorra</option>
                                <option value="Angola" id="AO">Angola</option>
                                <option value="Anguilla" id="AI">Anguilla</option>
                                <option value="Antarctica" id="AQ">Antarctica</option>
                                <option value="Antigua and Barbuda" id="AG">Antigua and Barbuda</option>
                                <option value="Argentina" id="AR">Argentina</option>
                                <option value="Armenia" id="AM">Armenia</option>
                                <option value="Aruba" id="AW">Aruba</option>
                                <option value="Australia" id="AU">Australia</option>
                                <option value="Austria" id="AT">Austria</option>
                                <option value="Azerbaijan" id="AZ">Azerbaijan</option>
                                <option value="Bahamas" id="BS">Bahamas</option>
                                <option value="Bahrain" id="BH">Bahrain</option>
                                <option value="Bangladesh" id="BD">Bangladesh</option>
                                <option value="Barbados" id="BB">Barbados</option>
                                <option value="Belarus" id="BY">Belarus</option>
                                <option value="Belgium" id="BE">Belgium</option>
                                <option value="Belize" id="BZ">Belize</option>
                                <option value="Benin" id="BJ">Benin</option>
                                <option value="Bermuda" id="BM">Bermuda</option>
                                <option value="Bhutan" id="BT">Bhutan</option>
                                <option value="Bolivia" id="BO">Bolivia</option>
                                <option value="Bosnia and Herzegovina" id="BA">Bosnia and Herzegovina</option>
                                <option value="Botswana" id="BW">Botswana</option>
                                <option value="Bouvet Island" id="BV">Bouvet Island</option>
                                <option value="Brazil" id="BR">Brazil</option>
                                <option value="British Indian Ocean Territory" id="IO">British Indian Ocean Territory</option>
                                <option value="Brunei Darussalam" id="BN">Brunei Darussalam</option>
                                <option value="Bulgaria" id="BG">Bulgaria</option>
                                <option value="Burkina Faso" id="BF">Burkina Faso</option>
                                <option value="Burundi" id="BI">Burundi</option>
                                <option value="Cambodia" id="KH">Cambodia</option>
                                <option value="Cameroon" id="CM">Cameroon</option>
                                <option value="Canada" id="CA">Canada</option>
                                <option value="Cape Verde" id="CV">Cape Verde</option>
                                <option value="Cayman Islands" id="KY">Cayman Islands</option>
                                <option value="Central African Republic" id="CF">Central African Republic</option>
                                <option value="Chad" id="TD">Chad</option>
                                <option value="Chile" id="CL">Chile</option>
                                <option value="China" id="CN">China</option>
                                <option value="Christmas Island" id="CX">Christmas Island</option>
                                <option value="Cocos (Keeling) Islands" id="CC">Cocos (Keeling) Islands</option>
                                <option value="Colombia" id="CO">Colombia</option>
                                <option value="Comoros" id="KM">Comoros</option>
                                <option value="Congo" id="CG">Congo</option>
                                <option value="Congo, the Democratic Republic of the" id="CD">Congo, the Democratic Republic of the</option>
                                <option value="Cook Islands" id="CK">Cook Islands</option>
                                <option value="Costa Rica" id="CR">Costa Rica</option>
                                <option value="Cote D'Ivoire" id="CI">Cote D'Ivoire</option>
                                <option value="Croatia" id="HR">Croatia</option>
                                <option value="Cuba" id="CU">Cuba</option>
                                <option value="Cyprus" id="CY">Cyprus</option>
                                <option value="Czech Republic" id="CZ">Czech Republic</option>
                                <option value="Denmark" id="DK">Denmark</option>
                                <option value="Djibouti" id="DJ">Djibouti</option>
                                <option value="Dominica" id="DM">Dominica</option>
                                <option value="Dominican Republic" id="DO">Dominican Republic</option>
                                <option value="Ecuador" id="EC">Ecuador</option>
                                <option value="Egypt" id="EG">Egypt</option>
                                <option value="El Salvador" id="SV">El Salvador</option>
                                <option value="Equatorial Guinea" id="GQ">Equatorial Guinea</option>
                                <option value="Eritrea" id="ER">Eritrea</option>
                                <option value="Estonia" id="EE">Estonia</option>
                                <option value="Ethiopia" id="ET">Ethiopia</option>
                                <option value="Falkland Islands (Malvinas)" id="FK">Falkland Islands (Malvinas)</option>
                                <option value="Faroe Islands" id="FO">Faroe Islands</option>
                                <option value="Fiji" id="FJ">Fiji</option>
                                <option value="Finland" id="FI">Finland</option>
                                <option value="France" id="FR">France</option>
                                <option value="French Guiana" id="GF">French Guiana</option>
                                <option value="French Polynesia" id="PF">French Polynesia</option>
                                <option value="French Southern Territories" id="TF">French Southern Territories</option>
                                <option value="Gabon" id="GA">Gabon</option>
                                <option value="Gambia" id="GM">Gambia</option>
                                <option value="Georgia" id="GE">Georgia</option>
                                <option value="Germany" id="DE">Germany</option>
                                <option value="Ghana" id="GH">Ghana</option>
                                <option value="Gibraltar" id="GI">Gibraltar</option>
                                <option value="Greece" id="GR">Greece</option>
                                <option value="Greenland" id="GL">Greenland</option>
                                <option value="Grenada" id="GD">Grenada</option>
                                <option value="Guadeloupe" id="GP">Guadeloupe</option>
                                <option value="Guam" id="GU">Guam</option>
                                <option value="Guatemala" id="GT">Guatemala</option>
                                <option value="Guinea" id="GN">Guinea</option>
                                <option value="Guinea-Bissau" id="GW">Guinea-Bissau</option>
                                <option value="Guyana" id="GY">Guyana</option>
                                <option value="Haiti" id="HT">Haiti</option>
                                <option value="Heard Island and Mcdonald Islands" id="HM">Heard Island and Mcdonald Islands</option>
                                <option value="Holy See (Vatican City State)" id="VA">Holy See (Vatican City State)</option>
                                <option value="Honduras" id="HN">Honduras</option>
                                <option value="Hong Kong" id="HK">Hong Kong</option>
                                <option value="Hungary" id="HU">Hungary</option>
                                <option value="Iceland" id="IS">Iceland</option>
                                <option value="India" id="IN">India</option>
                                <option value="Indonesia" id="ID">Indonesia</option>
                                <option value="Iran, Islamic Republic of" id="IR">Iran, Islamic Republic of</option>
                                <option value="Iraq" id="IQ">Iraq</option>
                                <option value="Ireland" id="IE">Ireland</option>
                                <option value="Israel" id="IL">Israel</option>
                                <option value="Italy" id="IT">Italy</option>
                                <option value="Jamaica" id="JM">Jamaica</option>
                                <option value="Japan" id="JP">Japan</option>
                                <option value="Jordan" id="JO">Jordan</option>
                                <option value="Kazakhstan" id="KZ">Kazakhstan</option>
                                <option value="Kenya" id="KE">Kenya</option>
                                <option value="Kiribati" id="KI">Kiribati</option>
                                <option value="North Korea" id="KP">North Korea</option>
                                <option value="South Korea" id="KR">South Korea</option>
                                <option value="Kuwait" id="KW">Kuwait</option>
                                <option value="Kyrgyzstan" id="KG">Kyrgyzstan</option>
                                <option value="Lao People's Democratic Republic" id="LA">Lao People's Democratic Republic</option>
                                <option value="Latvia" id="LV">Latvia</option>
                                <option value="Lebanon" id="LB">Lebanon</option>
                                <option value="Lesotho" id="LS">Lesotho</option>
                                <option value="Liberia" id="LR">Liberia</option>
                                <option value="Libyan Arab Jamahiriya" id="LY">Libyan Arab Jamahiriya</option>
                                <option value="Liechtenstein" id="LI">Liechtenstein</option>
                                <option value="Lithuania" id="LT">Lithuania</option>
                                <option value="Luxembourg" id="LU">Luxembourg</option>
                                <option value="Macao" id="MO">Macao</option>
                                <option value="Macedonia, the Former Yugoslav Republic of" id="MK">Macedonia, the Former Yugoslav Republic of</option>
                                <option value="Madagascar" id="MG">Madagascar</option>
                                <option value="Malawi" id="MW">Malawi</option>
                                <option value="Malaysia" id="MY">Malaysia</option>
                                <option value="Maldives" id="MV">Maldives</option>
                                <option value="Mali" id="ML">Mali</option>
                                <option value="Malta" id="MT">Malta</option>
                                <option value="Marshall Islands" id="MH">Marshall Islands</option>
                                <option value="Martinique" id="MQ">Martinique</option>
                                <option value="Mauritania" id="MR">Mauritania</option>
                                <option value="Mauritius" id="MU">Mauritius</option>
                                <option value="Mayotte" id="YT">Mayotte</option>
                                <option value="Mexico" id="MX">Mexico</option>
                                <option value="Micronesia, Federated States of" id="FM">Micronesia, Federated States of</option>
                                <option value="Moldova, Republic of" id="MD">Moldova, Republic of</option>
                                <option value="Monaco" id="MC">Monaco</option>
                                <option value="Mongolia" id="MN">Mongolia</option>
                                <option value="Montserrat" id="MS">Montserrat</option>
                                <option value="Morocco" id="MA">Morocco</option>
                                <option value="Mozambique" id="MZ">Mozambique</option>
                                <option value="Myanmar" id="MM">Myanmar</option>
                                <option value="Namibia" id="NA">Namibia</option>
                                <option value="Nauru" id="NR">Nauru</option>
                                <option value="Nepal" id="NP">Nepal</option>
                                <option value="Netherlands" id="NL">Netherlands</option>
                                <option value="Netherlands Antilles" id="AN">Netherlands Antilles</option>
                                <option value="New Caledonia" id="NC">New Caledonia</option>
                                <option value="New Zealand" id="NZ">New Zealand</option>
                                <option value="Nicaragua" id="NI">Nicaragua</option>
                                <option value="Niger" id="NE">Niger</option>
                                <option value="Nigeria" id="NG">Nigeria</option>
                                <option value="Niue" id="NU">Niue</option>
                                <option value="Norfolk Island" id="NF">Norfolk Island</option>
                                <option value="Northern Mariana Islands" id="MP">Northern Mariana Islands</option>
                                <option value="Norway" id="NO">Norway</option>
                                <option value="Oman" id="OM">Oman</option>
                                <option value="Pakistan" id="PK">Pakistan</option>
                                <option value="Palau" id="PW">Palau</option>
                                <option value="Palestinian Territory, Occupied" id="PS">Palestinian Territory, Occupied</option>
                                <option value="Panama" id="PA">Panama</option>
                                <option value="Papua New Guinea" id="PG">Papua New Guinea</option>
                                <option value="Paraguay" id="PY">Paraguay</option>
                                <option value="Peru" id="PE">Peru</option>
                                <option value="Philippines" id="PH">Philippines</option>
                                <option value="Pitcairn" id="PN">Pitcairn</option>
                                <option value="Poland" id="PL">Poland</option>
                                <option value="Portugal" id="PT">Portugal</option>
                                <option value="Puerto Rico" id="PR">Puerto Rico</option>
                                <option value="Qatar" id="QA">Qatar</option>
                                <option value="Reunion" id="RE">Reunion</option>
                                <option value="Romania" id="RO">Romania</option>
                                <option value="Russian Federation" id="RU">Russian Federation</option>
                                <option value="Rwanda" id="RW">Rwanda</option>
                                <option value="Saint Helena" id="SH">Saint Helena</option>
                                <option value="Saint Kitts and Nevis" id="KN">Saint Kitts and Nevis</option>
                                <option value="Saint Lucia" id="LC">Saint Lucia</option>
                                <option value="Saint Pierre and Miquelon" id="PM">Saint Pierre and Miquelon</option>
                                <option value="Saint Vincent and the Grenadines" id="VC">Saint Vincent and the Grenadines</option>
                                <option value="Samoa" id="WS">Samoa</option>
                                <option value="San Marino" id="SM">San Marino</option>
                                <option value="Sao Tome and Principe" id="ST">Sao Tome and Principe</option>
                                <option value="Saudi Arabia" id="SA">Saudi Arabia</option>
                                <option value="Senegal" id="SN">Senegal</option>
                                <option value="Serbia and Montenegro" id="CS">Serbia and Montenegro</option>
                                <option value="Seychelles" id="SC">Seychelles</option>
                                <option value="Sierra Leone" id="SL">Sierra Leone</option>
                                <option value="Singapore" id="SG">Singapore</option>
                                <option value="Slovakia" id="SK">Slovakia</option>
                                <option value="Slovenia" id="SI">Slovenia</option>
                                <option value="Solomon Islands" id="SB">Solomon Islands</option>
                                <option value="Somalia" id="SO">Somalia</option>
                                <option value="South Africa" id="ZA">South Africa</option>
                                <option value="South Georgia and the South Sandwich Islands" id="GS">South Georgia and the South Sandwich Islands</option>
                                <option value="Spain" id="ES">Spain</option>
                                <option value="Sri Lanka" id="LK">Sri Lanka</option>
                                <option value="Sudan" id="SD">Sudan</option>
                                <option value="Suriname" id="SR">Suriname</option>
                                <option value="Svalbard and Jan Mayen" id="SJ">Svalbard and Jan Mayen</option>
                                <option value="Swaziland" id="SZ">Swaziland</option>
                                <option value="Sweden" id="SE">Sweden</option>
                                <option value="Switzerland" id="CH">Switzerland</option>
                                <option value="Syrian Arab Republic" id="SY">Syrian Arab Republic</option>
                                <option value="Taiwan, Province of China" id="TW">Taiwan, Province of China</option>
                                <option value="Tajikistan" id="TJ">Tajikistan</option>
                                <option value="Tanzania, United Republic of" id="TZ">Tanzania, United Republic of</option>
                                <option value="Thailand" id="TH">Thailand</option>
                                <option value="Timor-Leste" id="TL">Timor-Leste</option>
                                <option value="Togo" id="TG">Togo</option>
                                <option value="Tokelau" id="TK">Tokelau</option>
                                <option value="Tonga" id="TO">Tonga</option>
                                <option value="Trinidad and Tobago" id="TT">Trinidad and Tobago</option>
                                <option value="Tunisia" id="TN">Tunisia</option>
                                <option value="Turkey" id="TR">Turkey</option>
                                <option value="Turkmenistan" id="TM">Turkmenistan</option>
                                <option value="Turks and Caicos Islands" id="TC">Turks and Caicos Islands</option>
                                <option value="Tuvalu" id="TV">Tuvalu</option>
                                <option value="Uganda" id="UG">Uganda</option>
                                <option value="Ukraine" id="UA">Ukraine</option>
                                <option value="United Arab Emirates" id="AE">United Arab Emirates</option>
                                <option value="United Kingdom" id="GB">United Kingdom</option>
                                <option value="United States" id="US">United States</option>
                                <option value="United States Minor Outlying Islands" id="UM">United States Minor Outlying Islands</option>
                                <option value="Uruguay" id="UY">Uruguay</option>
                                <option value="Uzbekistan" id="UZ">Uzbekistan</option>
                                <option value="Vanuatu" id="VU">Vanuatu</option>
                                <option value="Venezuela" id="VE">Venezuela</option>
                                <option value="Viet Nam" id="VN">Viet Nam</option>
                                <option value="Virgin Islands, British" id="VG">Virgin Islands, British</option>
                                <option value="Virgin Islands, U.s." id="VI">Virgin Islands, U.s.</option>
                                <option value="Wallis and Futuna" id="WF">Wallis and Futuna</option>
                                <option value="Western Sahara" id="EH">Western Sahara</option>
                                <option value="Yemen" id="YE">Yemen</option>
                                <option value="Zambia" id="ZM">Zambia</option>
                                <option value="Zimbabwe" id="ZW">Zimbabwe</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-12 form-group msg_div">
                            <textarea name="message"
                              className="form-control"
                              rows={3}
                              id="footer_msg"
                              placeholder="Enter your subject"
                              defaultValue={""}
                              value={formData.message}
                              onChange={handleInputChange} />
                          </div>
                          <div className="col-lg-12 form-group text-center">
                            <div id="side_contact_form_error_msg" />
                            <button className="btn side_contact_submit_btn" type="Submit" aria-label="Submit" id="side_contact_submit_btn">Submit</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </article>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </header>


      <main id="metaverse_ecosystem_main">
        <section className="metaverse_ecosystem_banner">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-12" />
              <div className="col-lg-6 col-12">
                <div className="banner_sec">
                  <h1 className="title">Metaverse Ecosystem</h1>
                  <p className="contents">Embark on an extraordinary journey into the Metaverse with our comprehensive Metaverse development solutions. From immersive 3D virtual spaces to dynamic metaverse NFT marketplaces, innovative metaverse applications, and decentralized
                    platforms, we have the expertise to bring your vision to life. Step into the future of digital experiences with us and dive into a thriving metaverse ecosystem.</p>
                  <div className="HddrBtns banner_btn_sec">
                    <button data-toggle="modal" data-target="#popup_form_modal" className="btn BtnPrimry TlkBtn banner_btn">
                      <span><img src="https://www.metablocktechnologies.com/asset/home-page-new/images/btn-call-icon.gif" alt="enquiry" loading="eager" className="img-fluid lazyload mr-2" />Get A Demo</span>
                      <span><img src="https://www.metablocktechnologies.com/asset/home-page-new//images/btn-call-icon.gif" alt="enquiry" loading="eager" className="img-fluid lazyload mr-2" />Get A Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="metaverse_ecosystem_sec">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 col-12 order-1 order-lg-1 pl-lg-0">
                <div>
                  <h2 className="title">Metaverse Ecosystem</h2>
                  <p className="contents">The Metaverse Ecosystem is a transformative digital landscape where innovation, connection, and exploration converge. It offers boundless opportunities for individuals and businesses to immerse themselves in a virtual realm
                    of limitless possibilities. From Metaverse platform development to NFT marketplaces and game development, the Metaverse opens doors to new frontiers of engagement and connectivity. With its potential to revolutionize industries
                    such as gaming, education, retail, and more, our Metaverse Ecosystem empowers entrepreneurs and enterprises to shape the future of digital experiences. Step into this virtual universe and witness the transformative power
                    of the Metaverse with us.</p>
                  <div className="metaverse_ecosystem_about_btn_sec">
                    <a href="https://web.whatsapp.com/send?phone=919442164852&text=Hi,%20I%20need%20more%20details%20about%20your%20services.%20Shall%20we%20discuss%20now?%20-%20' https://www.metablocktechnologies.com/metaverse-ecosystem '" className="btn metaverse_ecosystem_about_btn desktop" target="_blank"><i className="fab fa-whatsapp" />&nbsp;WhatsApp</a>
                    <a href="https://api.whatsapp.com/send?phone=919442164852&text=Hi,%20I%20need%20more%20details%20about%20your%20services.%20Shall%20we%20discuss%20now?%20-%20' https://www.metablocktechnologies.com/metaverse-ecosystem '" className="btn metaverse_ecosystem_about_btn mobile" target="_blank"><i className="fab fa-whatsapp" />&nbsp;WhatsApp</a>
                    <a href="https://telegram.me/metablock_Tech" className="btn metaverse_ecosystem_about_btn1" target="_blank"><i className="fab fa-telegram" />&nbsp;Telegram</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 order-2 order-lg-2 pr-lg-0">
                <div className="img_sec">
                  <img src="https://www.metablocktechnologies.com/asset/inner-pages-new/metaverse-ecosystem/ecosystem-sec-img.webp" alt="Metaverse Ecosystem" title="Metaverse Ecosystem" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="metaverse_dev_company">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12 col-12">
                <div className="virtual_content_sec">
                  <h2 className="title">Metaverse Development Company</h2>
                  <p className="contents">metablock Technologies is a top Metaverse Development Company that empowers businesses to embrace the future of digital spaces. Our metaverse services encompass 3D virtual spaces, metaverse NFT marketplaces, applications, and decentralized
                    platforms. With expertise in blockchain, augmented reality, and virtual reality, we deliver tailored solutions that blur the line between reality and digital realms. Our experienced team works closely with clients to understand
                    the client's vision and bring it to life, providing high-quality metaverse solutions that captivate users. Join us on this exciting journey into the metaverse and unlock the endless possibilities it offers for transformative
                    digital experiences.</p>
                  <div className="HddrBtns met_ecosys_dev_btn_sec">
                    <button data-toggle="modal" data-target="#popup_form_modal" className="btn BtnPrimry TlkBtn met_ecosys_btn">
                      <span><img src="https://www.metablocktechnologies.com/asset/home-page-new/images/btn-call-icon.gif" alt="enquiry" loading="eager" className="img-fluid lazyload mr-2" />Get A Quote</span>
                      <span><img src="https://www.metablocktechnologies.com/asset/home-page-new//images/btn-call-icon.gif" alt="enquiry" loading="eager" className="img-fluid lazyload mr-2" />Get A Quote</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="metaverse_nft_marketplace">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-10 col-12">
                <div className="marketplace_content_sec">
                  <h2 className="title">Metaverse NFT Marketplace Development</h2>
                  <p className="contents">metablock Technologies is a prominent Metaverse NFT Marketplace Development Company that offers premium services to cater to the growing demand for Metaverse development. Our expert team ensures that your NFT Marketplace for the
                    Metaverse is designed and developed with high standards and market-pulling features, meeting your business requirements. Our services encompass various crucial aspects of Metaverse NFT Marketplace development, including
                    NFT Wallet Integration, Cross Chain Linking, Virtual Land Creation, NFT Storage, In-game Assets, and 3D Support. Leveraging the potential of blockchain technology and the metaverse, our developers transform your business
                    idea into a revolutionary metaverse NFT platform, bringing it to life in the digital realm. Connect with our experts and make your Metaverse NFT Marketplace a reality.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="metaverse_game_dev">
          <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 col-12 pl-lg-5 order-lg-1 order-2">
                <div className="contents_sec">
                  <h2 className="title">Metaverse Game Development</h2>
                  <p className="contents">metablock Technologies is a leading Metaverse Game Development Company, specializing in innovative and cutting-edge Metaverse games. Our team of blockchain experts is dedicated to delivering incredible gaming platforms worldwide.
                    With expertise in various blockchain networks and technologies like Ethereum, Binance Smart Chain (BSC), Solana, Polygon, Avalanche, Cardano, Unreal Engine, and Blender, we offer a wide range of services, including 3D Environment
                    Development, NFT Game Development, Play to Earn Game Development, Avatar Development, Decentralized Gaming Platform creation, Custom Games Creation, Gaming Metaverse Marketplace Development, and Gaming dApps. As a dominant
                    player in the metaverse industry, metablock Technologies has been at the forefront of advancing the digital space with state-of-the-art technologies, establishing ourselves as a leading force in Metaverse game development.</p>
                  <div className="HddrBtns met_game_dev_btn_sec">
                    <button data-toggle="modal" data-target="#popup_form_modal" className="btn BtnPrimry TlkBtn met_game_dev_btn">
                      <span><img src="https://www.metablocktechnologies.com/asset/home-page-new/images/btn-call-icon.gif" alt="enquiry" loading="eager" className="img-fluid lazyload mr-2" />Request A Quote</span>
                      <span><img src="https://www.metablocktechnologies.com/asset/home-page-new//images/btn-call-icon.gif" alt="enquiry" loading="eager" className="img-fluid lazyload mr-2" />Request A Quote</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 pr-lg-0 order-lg-2 order-1">
                <div className="img_sec">
                  <img src="https://www.metablocktechnologies.com/asset/inner-pages-new/metaverse-ecosystem/metaverse-game-dev.webp" alt="Metaverse Game Development" title="Metaverse Game Development" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="metaverse_virtual_mall">
          <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12 col-12 p-0">
                <div className="img_sec">
                  <img src="https://www.metablocktechnologies.com/asset/inner-pages-new/metaverse-ecosystem/metaverse-virtual-mall.webp?v1" alt="Metaverse Platform Development" title="Metaverse Platform Development" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-10 col-12">
                <div className="contents_sec">
                  <h2 className="title">Metaverse Platform Development</h2>
                  <p className="contents">Metaverse platform development is a transformative process that unlocks the potential of virtual reality and augmented reality technologies to create immersive digital environments. It involves building platforms and ecosystems
                    that enable users to engage, interact, and explore limitless possibilities within a virtual realm. From gaming and social experiences to education, shopping, and entertainment, metaverse platform development opens up new
                    frontiers of engagement and connectivity in the digital landscape. Avail of custom metaverse platform development from the certified developers of metablock Technologies that suits your business and helps your growth in the
                    virtual space. We offer metaverse platform development to innumerable sectors and, with strong expertise in blockchain and other next-gen technologies, our metaverse developers will develop a stunning metaverse platform
                    that will mesmerize your targeted audience.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="metaverse_industries">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12 col-12">
                <div className="met_industry_content_sec">
                  <h2 className="title">Metaverse For Industries</h2>
                  <p className="contents">metablock Technologies, a pre-eminent Metaverse Development Company, helps you unlock the potential of the Metaverse for your industry and stay ahead in the rapidly evolving digital landscape. Embrace the transformative power of
                    the Metaverse across industries. From gaming and entertainment to education, retail, healthcare, and beyond, the Metaverse offers limitless possibilities. Create immersive virtual experiences for events, revolutionize shopping
                    with virtual storefronts, enhance learning through virtual classrooms, and explore new dimensions of collaboration. Metaverse opens doors to innovative solutions that drive engagement, connectivity, and efficiency, revolutionizing
                    industries and shaping the future of digital experiences.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="metaverse_why_metablock">
          <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-7 col-12 pl-lg-5">
                <div className="contents_sec">
                  <h2 className="title">Why metablock Technologies for Metaverse Development?</h2>
                  <p className="contents">metablock Technologies is a leading Metaverse Game Development Company, specializing in innovative and cutting-edge Metaverse games. Our team of blockchain experts is dedicated to delivering incredible gaming platforms worldwide.
                    With expertise in various blockchain networks and technologies like Ethereum, Binance Smart Chain (BSC), Solana, Polygon, Avalanche, Cardano, Unreal Engine, and Blender, we offer a wide range of services, including 3D Environment
                    Development, NFT Game Development, Play to Earn Game Development, Avatar Development, Decentralized Gaming Platform creation, Custom Games Creation, Gaming Metaverse Marketplace Development, and Gaming dApps. As a dominant
                    player in the metaverse industry, metablock Technologies has been at the forefront of advancing the digital space with state-of-the-art technologies, establishing ourselves as a leading force in Metaverse game development.</p>
                  <div className="HddrBtns met_game_dev_btn_sec">
                    <a href="https://www.metablocktechnologies.com/contact-us" target="_blank" className="btn BtnPrimry TlkBtn met_game_dev_btn">
                      <span><img src="https://www.metablocktechnologies.com/asset/home-page-new/images/btn-call-icon.gif" alt="enquiry" loading="eager" className="img-fluid lazyload mr-2" />Talk To Our Expert</span>
                      <span><img src="https://www.metablocktechnologies.com/asset/home-page-new//images/btn-call-icon.gif" alt="enquiry" loading="eager" className="img-fluid lazyload mr-2" />Talk To Our Expert</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-12">
                {/*                             <div class="img_sec">
                          <img src="https://www.metablocktechnologies.com/asset/inner-pages-new/metaverse-ecosystem/why-metablock.webp" alt="Why metablock Technologies for Metaverse Development?" title="Why metablock Technologies for Metaverse Development?" class="img-fluid">
                      </div>
                   */}
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className="MtaverseSec DapsMainBg OurBlgBg">
        <div className="container container-1170 ">
          <div className="row align-items-center ">
            <div className="col-xl-9 ">
              <div className="BnrCnt OurservHdd mb-4 ">
                <p className="mb-4 main_title">Futuristic Tales: Unveiling Technology's Next Big Steps
                </p>
              </div>
            </div>
            <div className="col-xl-3 text-right ">
              <div className=" ">
                <a href="https://www.metablocktechnologies.com/blog" className="ViwallLnk " target="_blank">
                  <span className="VwAllLnkHov VwAllLnkHov1 ">View All <img src="https://www.metablocktechnologies.com/asset/home-page-new/images/view-all-arrw.svg " className="ml-2 " alt="Arrow" title="Arrow" /></span>
                  <span className="VwAllLnkHov VwAllLnkHov2 ">View All <img src="https://www.metablocktechnologies.com/asset/home-page-new/images/view-all-arrw.svg " className="ml-2 " alt="Arrow" title="Arrow" /></span>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mt-4">
              <div className="OurSrvcHdd mb-3 ">
                <p className="rel_title">Our Blog'S</p>
              </div>
              <div className="blog_box home_blog_box">
                <div className="inr_img">
                  <a href="https://www.metablocktechnologies.com/blog/changelly-clone-script" aria-label="Read more about Changelly Clone Script: A Budget-Friendly Solution to Launch Your Own Cryptocurrency Exchange" target="_blank">
                    <img src="https://metablocktechnologies.s3.us-east-2.amazonaws.com/blog/Changelly-Clone-Script.webp" className="img img-responsive img-middle home_blog" alt="Changelly Clone Script: A Budget-Friendly Solution to Launch Your Own Cryptocurrency Exchange" title="Changelly Clone Script: A Budget-Friendly Solution to Launch Your Own Cryptocurrency Exchange" />
                  </a>
                </div>
                <div className="inr_cont">
                  {/* <span class="month-time">Dec 20,2023</span>
      <span class="time-time">11:37:29 AM</span> */}
                  <a href="https://www.metablocktechnologies.com/blog/changelly-clone-script" aria-label="Read more about Changelly Clone Script: A Budget-Friendly Solution to Launch Your Own Cryptocurrency Exchange" target="_blank">
                    <p className="mt-1rem sub_title">Changelly Clone Script: A Budget-Friendly Solution to Launch Your Own Cryptocurrency Exchange</p>
                  </a>
                  {/* <p class="normal_text text-justify mb-2">
        The cryptocurrency revolution has opened up new possibilities for financial innovation, and launching your cryptocurrency exchange is an enticing prospect. However, the road to establishing a successful exchange can be complex and costly. This is where the Changelly Clone Script comes into play, offering a budget-friendly solution that combines efficiency, security, and user-friendly features.
      </p> */}
                  <p className="normal_text text-justify mb-2">The cryptocurrency revolution has opened up new possibilities for financial innovation, and launchin...</p>
                  <a href="https://www.metablocktechnologies.com/blog/changelly-clone-script" aria-label="Read more about Changelly Clone Script: A Budget-Friendly Solution to Launch Your Own Cryptocurrency Exchange" className="readmore" target="_blank">Read More...</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="OurSrvcHdd mb-3 ">
                <p className="rel_title">Our New'S</p>
              </div>
              <div className="blog_box home_blog_box">
                <div className="inr_img">
                  <a href="https://www.metablocktechnologies.com/news/decathlon-launches-new-nft-game" target="_blank">
                    <img src="https://metablocktechnologies.s3.us-east-2.amazonaws.com/images/Decathlon launches a new NFT game.webp" className="img img-responsive img-middle home_blog" alt="Decathlon has launched an exciting new NFT game" title="Decathlon has launched an exciting new NFT game" />
                  </a>
                </div>
                <div className="inr_cont">
                  {/* <span class="month-time">Dec 20,2023</span>
      <span class="time-time">11:37:29 AM</span> */}
                  <a href="https://www.metablocktechnologies.com/news/decathlon-launches-new-nft-game" target="_blank">
                    <p className="mt-1rem sub_title">Decathlon has launched an exciting new NFT game</p>
                  </a>
                  {/* <p class="normal_text text-justify mb-2">
                    </p> */}
                  <p className="normal_text text-justify mb-2">Decathlon, the French sports retailer, is venturing into the NFT (non-fungible token) space again wi...</p>
                  <a href="https://www.metablocktechnologies.com/news/decathlon-launches-new-nft-game" className="readmore" target="_blank">Read More...</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="OurSrvcHdd mb-3 ">
                <p className="rel_title">Our Announcement'S</p>
              </div>
              <div className="blog_box home_blog_box">
                <div className="inr_img">
                  <a href="https://www.metablocktechnologies.com/announcement/merry-christmas-newyear-2024-offers " target="_blank">
                    <img src="https://metablocktechnologies.s3.us-east-2.amazonaws.com/images/Merry-Christmas- Newyear-2024.webp" className="img img-responsive img-middle home_blog" alt="Merry Christmas and New Year 2024: Enjoy 10% OFF!" title="Merry Christmas and New Year 2024: Enjoy 10% OFF!" />
                  </a>
                </div>
                <div className="inr_cont">
                  {/* <span class="month-time">Dec 20,2023</span>
      <span class="time-time">11:37:29 AM</span> */}
                  <a href="https://www.metablocktechnologies.com/announcement/merry-christmas-newyear-2024-offers " target="_blank">
                    <p className="mt-1rem sub_title">Merry Christmas and New Year 2024: Enjoy 10% OFF!</p>
                  </a>
                  {/* <p class="normal_text text-justify mb-2">
                    </p> */}
                  <p className="normal_text text-justify mb-2">Celebrate the festive season with metablock Technologies' exclusive Christmas and New Year 2024 offer! As...</p>
                  <a href="https://www.metablocktechnologies.com/announcement/merry-christmas-newyear-2024-offers " className="readmore" target="_blank">Read More...</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed_social_icons">
        <ul>
          {/* <li class="desktop d-flex"  title="Whatsapp">
      <a href="https://web.whatsapp.com/send?phone=919442164852&text=Hi,%20I%20need%20more%20details%20about%20metablock%20software%20development%20services.%20Shall%20we%20discuss%20now?%20-%20https://www.metablocktechnologies.com/metaverse-ecosystem"  class="desktop nav-link whatsapp__icons whatsapp"><img src="https://www.metablocktechnologies.com/asset/img/whatsapp.svg" alt="whatsapp"></a>
            <a href="https://api.whatsapp.com/send?phone=919442164852&text=Hi,%20I%20need%20more%20details%20about%20metablock%20software%20development%20services.%20Shall%20we%20discuss%20now?%20-%20https://www.metablocktechnologies.com/metaverse-ecosystem"  class="mobile nav-link whatsapp__icons whatsapp"><img src="https://www.metablocktechnologies.com/asset/img/whatsapp.svg" alt="whatsapp"></a>


    
  </li>
  <li class="desktop telegram_new" title="Telegram"><a href="https://telegram.me/metablock_Tech" target="_blank" class=" nav-link telegram_new"><img src="https://www.metablocktechnologies.com/asset/img/telegram.svg" src="{{url('asset/img/telegram.svg')}}" alt="telegram"></a></li>

  <li class="desktop " title="Skype"><a href="https://join.skype.com/invite/lAF0IYo03Kfu" class="nav-link skype_new"><img src="https://www.metablocktechnologies.com/asset/img/skype.svg" alt="skype-icon"></a></li> */}
          <li className="desktop top_button_sec" title="TopButton">
            {/* Back to Top */}
            <a id="back_to_top_button"><i className="fa fa-angle-up" aria-hidden="true" /></a>
          </li>
        </ul>
      </div>




    </>
  )
}

export default MetaverseEcosystem
