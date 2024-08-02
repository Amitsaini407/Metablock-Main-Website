import './App.css';
import About from "./Component/About";
import Footer from "./Component/Footer";
// import AllRouteFiles from "./AllRouteFiles";
import { FaPhoneSquareAlt, FaWhatsapp } from "react-icons/fa";
import Chat from './Chat';


import React from "react";

import GenerativeAl from "./Component/MainPage/GenerativeAl";
import Navbar from "./Component/Navbar/Navbar";
import CardSlider from "./Component/WebApplicationDevelopment/CardSlider";
import OnDemandAppSlider from "./Component/WebApplicationDevelopment/OnDemandAppSlider";
import WebApplication from "./Component/WebApplicationDevelopment/WebApplication";
import WebApplicationMainPage from "./Component/WebApplicationDevelopment/WebApplicationMainPage";
import ERPSoftware from "./Component/WebApplicationDevelopment/SoftwarePages/ERPSoftware";
import TimeandSlider from "./DisplayProduct/TimeandSlider";
import Main from "./Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SAASSoftware from "./Component/WebApplicationDevelopment/SoftwarePages/SAASSoftware";
import WarehouseManagmentSoftware from "./Component/WebApplicationDevelopment/SoftwarePages/WarehouseManagmentSoftware";
import HRMSSoftware from "./Component/WebApplicationDevelopment/SoftwarePages/HRMSSoftware";
import InventoryManagmentSoftware from "./Component/WebApplicationDevelopment/SoftwarePages/InventoryManagmentSoftware";
import POSSystemSoftware from "./Component/WebApplicationDevelopment/SoftwarePages/POSSystemSoftware";
import EmployeeTrackingSoftware from "./Component/WebApplicationDevelopment/SoftwarePages/EmployeeTrackingSoftware";
import AttendanceSystemSoftware from "./Component/WebApplicationDevelopment/SoftwarePages/AttendanceSystemSoftware";
import LibraryManagmentSystem from "./Component/WebApplicationDevelopment/SoftwarePages/LibraryManagmentSystem";
import LMSWithLiveClassSoftware from "./Component/WebApplicationDevelopment/SoftwarePages/LMSWithLiveClassSoftware";
import UniversityManagmentSoftware from "./Component/WebApplicationDevelopment/SoftwarePages/UniversityManagmentSoftware";
import QuizSystemSoftware from "./Component/WebApplicationDevelopment/SoftwarePages/QuizSystemSoftware";
import AstrologySoftware from "./Component/WebApplicationDevelopment/SoftwarePages/AstrologySoftware";
import TravelBookingSoftware from "./Component/WebApplicationDevelopment/SoftwarePages/TravelBookingSoftware";
import MatrimonialSoftware from "./Component/WebApplicationDevelopment/SoftwarePages/MatrimonialSoftware";
import RestaurantManagmentSystemSoftware from "./Component/WebApplicationDevelopment/SoftwarePages/RestaurantManagmentSystemSoftware";
import HotelManagmentSoftware from "./Component/WebApplicationDevelopment/SoftwarePages/HotelManagmentSoftware";
import EventmanagementSoftware from "./Component/WebApplicationDevelopment/SoftwarePages/EventmanagementSoftware";
import HospitalManagmentSystemSoftware from "./Component/WebApplicationDevelopment/SoftwarePages/HospitalManagmentSystemSoftware";
import RealstateSoftware from "./Component/WebApplicationDevelopment/SoftwarePages/RealstateSoftware";
import ClinicManagmentSystemSoftware from "./Component/WebApplicationDevelopment/SoftwarePages/ClinicManagmentSystemSoftware";
import MLMSoftware from "./Component/WebApplicationDevelopment/SoftwarePages/MLMSoftware";
import TradingSoftware from "./Component/WebApplicationDevelopment/SoftwarePages/TradingSoftware";
import JobPortalSoftware from "./Component/WebApplicationDevelopment/SoftwarePages/JobPortalSoftware";
import CabBookingApps from "./Component/WebApplicationDevelopment/ApplicationPages/CabBookingApps";
import GroceryApps from "./Component/WebApplicationDevelopment/ApplicationPages/GroceryApps";
import TravellingApps from "./Component/WebApplicationDevelopment/ApplicationPages/TravellingApps";
import ChattingApps from "./Component/WebApplicationDevelopment/ApplicationPages/ChattingApps";
import FitnessApps from "./Component/WebApplicationDevelopment/ApplicationPages/FitnessApps";
import RentalApps from "./Component/WebApplicationDevelopment/ApplicationPages/RentalApps";
import DatingApps from "./Component/WebApplicationDevelopment/ApplicationPages/DatingApps";
import AstrologyApps from "./Component/WebApplicationDevelopment/ApplicationPages/AstrologyApps";
import FooddeliveryApps from "./Component/WebApplicationDevelopment/ApplicationPages/FooddeliveryApps";
import SocialMediaApps from "./Component/WebApplicationDevelopment/ApplicationPages/SocialMediaApps";
import LearningManagmentApps from "./Component/WebApplicationDevelopment/ApplicationPages/LearningManagmentApps";
import EcommerceApps from "./Component/WebApplicationDevelopment/ApplicationPages/EcommerceApps";
import MultivendorHomeServiceApps from "./Component/WebApplicationDevelopment/ApplicationPages/MultivendorHomeServiceApps";
import MetaverseDevelopment from "./Component/MetaversDevelopment/MetaverseDevelopment";
import MetaverseGameDevelopment from "./Component/MetaversDevelopment/MetaverseGameDevelopment";
import MetaverseAvatarDevelopment from "./Component/MetaversDevelopment/MetaverseAvatarDevelopment";
import MetaverseLaunchpadDevelopment from "./Component/MetaversDevelopment/MetaverseLaunchpadDevelopment";
import MetaverseNFTMarketplaceDevelopment from "./Component/MetaversDevelopment/Metaverse NFTMarketplaceDevelopment";
import MetaverseVirtualShowroomDevelopment from "./Component/MetaversDevelopment/MetaverseVirtualShowroomDevelopment";
import MetaverseEventPlatformDevelopment from "./Component/MetaversDevelopment/MetaverseEventPlatformDevelopment/MetaverseEventPlatformDevelopment";
import MetaverseSocialMediaPlatformDevelopment from "./Component/MetaversDevelopment/MetaverseSocialMediaPlatformDevelopment";
import MetaverseRealEstateDevelopment from "./Component/MetaversDevelopment/MetaverseRealEstateDevelopment";
import MetaverseVirtualLandDevelopment from "./Component/MetaversDevelopment/MetaverseVirtualLandDevelopment";
import ContectUsForm from "./Component/Insights/ContectUsForm/ContectUsForm";
import InsightsFAQ from "./Component/Insights/InsightsFAQ/InsightsFAQ";
import PrivacyPolicy from "./privacyPolicy/privacyPolicy";
import TermAndCondition from "./TermAndCondition/TermAndCondition";
import CaseStudy from "./Case Study/CaseStudy";
import Aboutus from "./Component/Insights/company/About/Aboutus";
import Celebrations from "./Component/Insights/company/Celebrations/Celebrations";


import Blog from "./Component/blog/Blog";
import MainNews from "./Component/Insights/company/News/MainNews";
import WbsiteDevelopment from "./Component/websitedevelopment/WbsiteDevelopment";
import Static from "./Component/websitedevelopment/Static";
import DynamicWebsite from "./Component/websitedevelopment/DynamicWebsite";
import Ecommerce from "./Component/websitedevelopment/Ecommerce";
import GeneralGamesDevelopment from "./Component/gaming/gernralgames/GeneralGamesDevelopment";
import CasinoGames from "./Component/gaming/CasinoGames/CasinoGames";
import MetaverseGame from "./Component/gaming/metaversgame/MetaverseGame";
import Blockchain from "./Component/gaming/blockchaingame/BlockchainGame";
import BlockchainGame from "./Component/gaming/blockchaingame/BlockchainGame";
import SmartContractDevelopemnt from "./Component/blockchain/BlockChainDevelopment/SmartContract/SmartContractDevelopemnt";
import PrivatePublicBlockchain from "./Component/blockchain/BlockChainDevelopment/privatepublicblockchain/PrivatePublicBlockchain";
import DaoBlockchain from "./Component/blockchain/BlockChainDevelopment/DAOBlockchainDevelopmnent/DaoBlockchain";
import WhitePaperWrittingServices from "./Component/blockchain/Walletdevelopmen/WhitePaperWrittingServices/WhitePaperWrittingServices/WhitePaperWritting/WhitePaperWrittingServices";
import EthereumTokenDevelopment from "./Component/blockchain/tokendevelopment/EthereumToken/EthereumTokenDevelopment";
import DefiStaking from "./Component/blockchain/DeFiDevelopment/DeFiStakingPlatformDevelopment/DefiStaking";
import NFTMarketplace from "./Component/blockchain/NFTDevelopment/NFTMarketplaceDevelopment/NFTMarketplace";
import NFTToken from "./Component/blockchain/NFTDevelopment/NFTTokenDevelopment/NFTToken";
import WhiteLabel from "./Component/blockchain/DEXDevelopment/WhiteLabelExchange/WhiteLabel";
import BlockchainSupply from "./Component/blockchain/BlockChainDevelopment/BlockchainSupplyChain/BlockchainSupply";
import BlockchainVoting from "./Component/blockchain/BlockChainDevelopment/BlockchaininVoting/BlockchainVoting";
import BlockchainLiveAution from "./Component/blockchain/BlockChainDevelopment/BlockchaininLiveAution/BlockchainLiveAution";
import BlockchainDocument from "./Component/blockchain/BlockChainDevelopment/BlockchainDocumentVerifiction/BlockchainDocument";
import BlockchainIdentityVerifiction from "./Component/blockchain/BlockChainDevelopment/BlockchainIdentityVerifiction/BlockchainIdentityVerifiction";
import TrustWalletCloneDevelopment from "./Component/blockchain/Walletdevelopmen/TrustWalletCloneDevelopment/TrustWalletCloneDevelopment";
import BinanaceSmartChainBEP20TokenDevelopment from "./Component/blockchain/tokendevelopment/Binanace Smart Chain BEP20 Token Development/BinanaceSmartChainBEP20TokenDevelopment";
import SemiFungibleTokenDevelopment from "./Component/blockchain/tokendevelopment/Semi -Fungible Token Development/SemiFungibleTokenDevelopment";
import PancakeswapExchange from "./Component/blockchain/DEXDevelopment/PancakeswapExchangeCloneDevelopment/PancakeswapExchange";
import DeFiTokenDevelopment from "./Component/blockchain/DeFiDevelopment/DeFiTokenDevelopment/DeFiTokenDevelopment";
import DeFiWalletDevelopment from "./Component/blockchain/DeFiDevelopment/DeFiWalletDevelopment/DeFiWalletDevelopment";
import DeFiSmartContractDevelopment from "./Component/blockchain/DeFiDevelopment/DeFi Smart Contract Development/DeFiSmartContractDevelopment";
import DeFiDAppsDevelopment from "./Component/blockchain/DeFiDevelopment/DeFi DApps Development/DeFiDAppsDevelopment";
import DeFiInsuranceDevelopment from "./Component/blockchain/DeFiDevelopment/DeFi Insurance Development/DeFiInsuranceDevelopment";
import SushiSwapExchange from "./Component/blockchain/DEXDevelopment/SushiSwapExchangeClone/SushiSwapExchange";
import UniswapExchange from "./Component/blockchain/DEXDevelopment/UniswapExchangeCloneDevelopemnt/UniswapExchange";
import LunchpadDevelopment from "./Component/blockchain/LaunchpadDevelopment/LunchpadDevelopment/LunchpadDevelopment";
import GameFiLaunchapd from "./Component/blockchain/LaunchpadDevelopment/GameFiLaunchapd/GameFiLaunchapd";
import PolygonNFT from "./Component/blockchain/NFTDevelopment/PolygonNFTMarketplace/PolygonNFT";
import NFTLendingPlatform from "./Component/blockchain/NFTDevelopment/NFTLendingPlatform/NFTLendingPlatform";
import BinanceNFT from "./Component/blockchain/NFTDevelopment/BinanceNFTMarketplace/BinanceNFT";
import NFTMintingDevelopment from "./Component/blockchain/NFTDevelopment/NFTMintingDevelopment/NFTMintingDevelopment";
import NFTArtMarketplaceDevelopment from "./Component/blockchain/NFTDevelopment/NFTArtMarketplaceDevelopment/NFTArtMarketplaceDevelopment";
import NFTMusicMarketplaceDevelopment from "./Component/blockchain/NFTDevelopment/NFTMusicMarketplaceDevelopment/NFTMusicMarketplaceDevelopment";
import NFTCrosschainPlatfromDevelopment from "./Component/blockchain/NFTDevelopment/NFTCrosschainPlatfromDevelopment/NFTCrosschainPlatfromDevelopment";
import NFTFantasySportsPlatformDevelopment from "./Component/blockchain/NFTDevelopment/NFTFantasySportsPlatformDevelopment/NFTFantasySportsPlatformDevelopment";
import MainBlockchain from "./Component/blockchain/mainblockchain/MainBlockchain";
import WalletConnectClone from "./Component/blockchain/Walletdevelopmen/WalletConnectClone/WalletConnectClone";
import AccountBilling from "./Component/WebApplicationDevelopment/SoftwarePages/Accounting&BillingSoftware";
import LudoGameDevelopment from "./Component/gaming/CasinoGames/LudoGameDevelopment"
import TeenpattiGameDevelopment from "./Component/gaming/CasinoGames/TeenpattiGameDevelopment"
import RummyGameDevelopment from "./Component/gaming/CasinoGames/RummyGameDevelopment"
import DragonTiger from "./Component/gaming/CasinoGames/DragonTiger"
// import DragonTiger from "./Component/gaming/CasinoGames/DragonTiger"
import PokerGameDevelopment from "./Component/gaming/CasinoGames/PokerGameDevelopment"
import BaccaratGameDevelopment from "./Component/gaming/CasinoGames/BaccaratGameDevelopment"
import RouletteGameDevelopment from "./Component/gaming/CasinoGames/RouletteGameDevelopment"
import TournamentDevelopment from "./Component/gaming/CasinoGames/TournamentDevelopment"
import FantasyCricketGameDevelopment from "./Component/gaming/CasinoGames/FantasyCricketGameDevelopment"
import AndarBaharGameDevelopment from "./Component/gaming/CasinoGames/AndarBaharGameDevelopment"











import { ScrollToScroll } from "./WindowToScroll";
import SoftwareDevelopment from "./Component/WebApplicationDevelopment/SoftwarePages/SoftwareDevelopmentMainPage";
import ApplicatonDevelopment from "./Component/WebApplicationDevelopment/ApplicationPages/ApplicationDevelopment";
import Portfolio from "./Component/Insights/company/Portfolio/Portfolio";
import Ourteam from "./Component/Insights/company/OurTeam/Ourteam";
import Gallery from "./Component/Insights/company/Gallery/Gallery";
import ErrorPage from "./ErrorPage";
import Blogshow from "./Component/blog/Blogshow";
import Sitemap from "./Sitemap";
import Authlayout from './outlet/Authlayout';
import Layout from './outlet/Layout';
import Adminmain from './pages/adminpage/Main';
import Team_admin from './components/Team_admin';
import Video_admin from './components/Video_admin';
import Gallery_admin from './components/Gallery_admin';



import Video from './Component/Insights/company/Video/Video';
import Category from './components/Category_admin';
import Blog_categories from './components/Blog_categories';
import Blog_add from './components/Blog_add';
 






function App() {


  const encodedMessage = encodeURIComponent("Hello, I have an inquiry related to software services. I'm reaching out to gather more information about the software solutions your company provides.");

  // Define the Whatsapp link with the pre-filled message
  const whatsappLink = `https://wa.me/919358593003?text=${encodedMessage}`;
  return (
    <div className="App">


      <BrowserRouter>

        <Routes>
          <Route exact path={`/*`} element={<Authlayout />}>
         
            
            <Route path="admin" element={<Adminmain/>} >
              <Route path="Category" element={<Category />} />
              <Route path="teamadmin" element={<Team_admin />} />
              <Route path="videoadmin" element={<Video_admin />} />
              <Route path="galleryadmin" element={<Gallery_admin />} />
              <Route path="Blog_categories" element={<Blog_categories />} />
              <Route path="Blog_add" element={<Blog_add />} />
              

            </Route>
          </Route>

          <Route element={<Layout />}>
        
            <Route path="/" element={<Main />} />
            {/* <Route path="Main" element={<Main />} /> */}

            <Route path="Aboutus" element={<Aboutus />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="ourteam" element={<Ourteam />} />
            <Route path="Celebrations" element={<Celebrations />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="video" element={<Video />} />

            <Route path="sitemap" element={<Sitemap />} />

            <Route path="/testimonial" element={<MainNews />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Blogshow/:id" element={<Blogshow />} />

            {/* Software pages */}
            <Route path="SoftwareDevelopment" element={<SoftwareDevelopment />} />
            <Route path="AccountBillingSoftware" element={<AccountBilling />} />
            <Route path="ERPSoftware" element={<ERPSoftware />} />
            <Route path="SAASSoftware" element={<SAASSoftware />} />
            <Route path="WarehouseManagmentSoftware" element={<WarehouseManagmentSoftware />} />
            <Route path="HRMSSoftware" element={<HRMSSoftware />} />
            <Route path="InventoryManagmentSoftware" element={<InventoryManagmentSoftware />} />
            <Route path="POSSystemSoftware" element={<POSSystemSoftware />} />
            <Route path="EmployeeTrackingSoftware" element={<EmployeeTrackingSoftware />} />
            <Route path="AttendanceSystemSoftware" element={<AttendanceSystemSoftware />} />
            <Route path="LibraryManagmentSystem" element={<LibraryManagmentSystem />} />
            <Route path="LMSWithLiveClassSoftware" element={<LMSWithLiveClassSoftware />} />
            <Route path="UniversityManagmentSoftware" element={<UniversityManagmentSoftware />} />
            <Route path="QuizSystemSoftware" element={<QuizSystemSoftware />} />

            {/* Software pages-1 */}
            <Route path="AstrologySoftware" element={<AstrologySoftware />} />
            <Route path="TravelBookingSoftware" element={<TravelBookingSoftware />} />
            <Route path="MatrimonialSoftware" element={<MatrimonialSoftware />} />
            <Route path="RestaurantManagmentSoftware" element={<RestaurantManagmentSystemSoftware />} />
            <Route path="HotelManagmentSoftware" element={<HotelManagmentSoftware />} />
            <Route path="EventmanagementSoftware" element={<EventmanagementSoftware />} />
            <Route path="HospitalManagementSoftware" element={<HospitalManagmentSystemSoftware />} />
            <Route path="RealstateSoftware" element={<RealstateSoftware />} />
            <Route path="ClinicManagmentSoftware" element={<ClinicManagmentSystemSoftware />} />
            <Route path="MLMSoftware" element={<MLMSoftware />} />
            <Route path="TradingSoftware" element={<TradingSoftware />} />
            <Route path="JobPortalSoftware" element={<JobPortalSoftware />} />

            {/* Application Pages */}
            <Route path="ApplicationDevelopment" element={<ApplicatonDevelopment />} />
            <Route path="CabBookingApps" element={<CabBookingApps />} />
            <Route path="GroceryApps" element={<GroceryApps />} />
            <Route path="TravellingApps" element={<TravellingApps />} />
            <Route path="ChattingApps" element={<ChattingApps />} />
            <Route path="FitnessApps" element={<FitnessApps />} />
            <Route path="RentalApps" element={<RentalApps />} />
            <Route path="DatingApps" element={<DatingApps />} />
            <Route path="AstrologyApps" element={<AstrologyApps />} />
            <Route path="FooddeliveryApps" element={<FooddeliveryApps />} />
            <Route path="SocialMediaApps" element={<SocialMediaApps />} />
            <Route path="LearningManagmentApps" element={<LearningManagmentApps />} />
            <Route path="EcommerceApps" element={<EcommerceApps />} />
            <Route path="MultivendorHomeServiceApps" element={<MultivendorHomeServiceApps />} />

            {/* Metaverse Pages */}
            <Route path="MetaverseDevelopment" element={<MetaverseDevelopment />} />
            <Route path="MetaverseGameDevelopment" element={<MetaverseGameDevelopment />} />
            <Route path="MetaverseNFTMarketplaceDevelopment" element={<MetaverseNFTMarketplaceDevelopment />} />
            <Route path="MetaverseVirtualShowroomDevelopment" element={<MetaverseVirtualShowroomDevelopment />} />
            <Route path="MetaverseEventPlatformDevelopment" element={<MetaverseEventPlatformDevelopment />} />
            <Route path="MetaverseAvatarDevelopment" element={<MetaverseAvatarDevelopment />} />
            <Route path="MetaverseSocialMediaPlatformDevelopment" element={<MetaverseSocialMediaPlatformDevelopment />} />
            <Route path="MetaverseRealEstateDevelopment" element={<MetaverseRealEstateDevelopment />} />
            <Route path="MetaverseVirtualLandDevelopment" element={<MetaverseVirtualLandDevelopment />} />
            <Route path="MetaverseLaunchpadDevelopment" element={<MetaverseLaunchpadDevelopment />} />

            {/* Insights */}
            <Route path="contact-us" element={<ContectUsForm />} />
            <Route path="InsightsFAQ" element={<InsightsFAQ />} />

            {/* Privacy Policy */}
            <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="TermAndCondition" element={<TermAndCondition />} />

            {/* Case Study */}
            <Route path="CaseStudy" element={<CaseStudy />} />

            {/* Website */}
            <Route path="/WebsiteDevelopment" element={<WbsiteDevelopment />} />
            <Route path="staticwebsite" element={<Static />} />
            <Route path="DynamicWebsite" element={<DynamicWebsite />} />
            <Route path="Ecommerce-website" element={<Ecommerce />} />

            {/* Game Development */}
            <Route path="GameDevelopment" element={<GeneralGamesDevelopment />} />
            {/* <Route path="CasinoGames" element={<CasinoGames />} /> */}
            <Route path="MetaverseGame" element={<MetaverseGame />} />
            <Route path="BlockchainGame" element={<BlockchainGame />} />
            <Route path="SmartContractDevelopemnt" element={<SmartContractDevelopemnt />} />
            <Route path="Private/PublicBlockchainDevelopment" element={<PrivatePublicBlockchain />} />
            <Route path="DAOBlockchainDevelopmnent" element={<DaoBlockchain />} />
            <Route path="WhitePaperWrittingServices" element={<WhitePaperWrittingServices />} />
            <Route path="WalletConnectClone" element={<WalletConnectClone />} />
            <Route path="EthereumTokenDevelopment" element={<EthereumTokenDevelopment />} />

            {/* Blockchain */}
            <Route path="blockchaindevelopment" element={<MainBlockchain />} />
            <Route path="BlockchainSupply" element={<BlockchainSupply />} />
            <Route path="BlockchainVoting" element={<BlockchainVoting />} />
            <Route path="BlockchainLiveAution" element={<BlockchainLiveAution />} />
            <Route path="BlockchainDocument" element={<BlockchainDocument />} />
            <Route path="BlockchainIdentityVerifiction" element={<BlockchainIdentityVerifiction />} />
            <Route path="TrustWalletCloneDevelopment" element={<TrustWalletCloneDevelopment />} />
            <Route path="SemiFungibleTokenDevelopment" element={<SemiFungibleTokenDevelopment />} />
            <Route path="BinanaceSmartChainBEP20TokenDevelopment" element={<BinanaceSmartChainBEP20TokenDevelopment />} />

            {/* DeFi */}
            <Route path="DefiStaking" element={<DefiStaking />} />
            <Route path="DeFiTokenDevelopment" element={<DeFiTokenDevelopment />} />
            <Route path="DeFiWalletDevelopment" element={<DeFiWalletDevelopment />} />
            <Route path="DeFiSmartContractDevelopment" element={<DeFiSmartContractDevelopment />} />
            <Route path="DeFiDAppsDevelopment" element={<DeFiDAppsDevelopment />} />
            <Route path="DeFiInsuranceDevelopment" element={<DeFiInsuranceDevelopment />} />

            {/* DEX */}
            {/* <Route path="WhiteLabelexchangedevelopment" element={<WhiteLabelexchangedevelopment />} /> */}
            <Route path="PancakeswapExchange" element={<PancakeswapExchange />} />
            <Route path="SushiSwapExchange" element={<SushiSwapExchange />} />
            <Route path="UniswapExchange" element={<UniswapExchange />} />

            {/* Launchpad */}
            <Route path="GameFiLaunchapd" element={<GameFiLaunchapd />} />
            <Route path="LunchpadDevelopment" element={<LunchpadDevelopment />} />

            {/* NFT */}
            <Route path="NFTMarketplace" element={<NFTMarketplace />} />
            <Route path="NFTToken" element={<NFTToken />} />
            <Route path="PolygonNFT" element={<PolygonNFT />} />
            <Route path="NFTLendingPlatform" element={<NFTLendingPlatform />} />
            <Route path="BinanceNFT" element={<BinanceNFT />} />
            <Route path="NFTCrosschainPlatfromDevelopment" element={<NFTCrosschainPlatfromDevelopment />} />
            <Route path="NFTMintingDevelopment" element={<NFTMintingDevelopment />} />
            <Route path="NFTArtMarketplaceDevelopment" element={<NFTArtMarketplaceDevelopment />} />
            <Route path="NFTMusicMarketplaceDevelopment" element={<NFTMusicMarketplaceDevelopment />} />
            <Route path="NFTFantasySportsPlatformDevelopment" element={<NFTFantasySportsPlatformDevelopment />} />

            {/* Game Development */}
            <Route path="LudoGameDevelopment" element={<LudoGameDevelopment />} />
            <Route path="TeenpattiGameDevelopment" element={<TeenpattiGameDevelopment />} />
            <Route path="RummyGameDevelopment" element={<RummyGameDevelopment />} />
            <Route path="DragonTiger" element={<DragonTiger />} />
            <Route path="PokerGameDevelopment" element={<PokerGameDevelopment />} />
            <Route path="BaccaratGameDevelopment" element={<BaccaratGameDevelopment />} />
            <Route path="RouletteGameDevelopment" element={<RouletteGameDevelopment />} />
            <Route path="TournamentDevelopment" element={<TournamentDevelopment />} />
            <Route path="FantasyCricketGameDevelopment" element={<FantasyCricketGameDevelopment />} />
            <Route path="AndarBaharGameDevelopment" element={<AndarBaharGameDevelopment />} />

            {/* Error Page */}
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* 
      <div className="enq-side-btn-icone ">
        <a href='tel:919358593003' ><img style={{ width: "28px" }} src='./images/telephone2.webp' alt="Telephone logo | metablocktechnologies" /></a>
        <a target='_blank' href={whatsappLink}>
          <img style={{ width: "28px" }} src="./images/whatsapp2.webp" alt="Whatsapp logo | metablocktechnologies" />
        </a>
        <a target='_blank'>
          <img style={{ width: "28px" }} src="./images/skype-button.webp" alt="" />
        </a>
      </div> */}

      {/* <ScrollToScroll /> */}



    </div>



  );
}

export default App;
