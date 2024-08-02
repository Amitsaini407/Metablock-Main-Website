import React from 'react'
import { useNavigate } from 'react-router-dom';

const Sitemap = () => {
    const navigate = useNavigate(" ")
    return (
        <div style={{ marginTop: '20vh', paddingLeft: '10px', cursor: "pointer" }} className='main-sitemap-div'>
            <h4 onClick={() => navigate('/')}>Home</h4>
            <ul>
                <li className='main-headings-sitemap' >
                    <a onClick={() => navigate("/WebsiteDevelopment")} className='blue-color'>Website Development</a>
                    <ul>
                        <a onClick={() => navigate("/staticwebsite")}><li>Static Website</li></a>
                        <a onClick={() => navigate("/DynamicWebsite")}><li>Dynamic Website</li></a>
                        <a onClick={() => navigate("/Ecommerce-website")}><li>E-Commerce Website</li></a>
                    </ul>
                </li>
                <li className='main-headings-sitemap'>
                    <a onClick={() => navigate("/SoftwareDevelopment")} className='blue-color'>Software Development</a>
                    <ul>
                        <a onClick={() => navigate("/ERPSoftware")}><li>ERP Software</li></a>
                        <a onClick={() => navigate("/SAASSoftware")}><li>SAAS Software</li></a>
                        <a onClick={() => navigate("/WarehouseManagmentSoftware")}><li>Warehouse Managment Software</li></a>
                        <a onClick={() => navigate("/HRMSSoftware")}><li>HRMS Software</li></a>
                        <a onClick={() => navigate("/InventoryManagmentSoftware")}><li>Inventory Managment Software</li></a>
                        <a onClick={() => navigate("/AccountBillingSoftware")}><li>Accounting & Billing Software</li></a>
                        <a onClick={() => navigate("/POSSystemSoftware")}><li>POS System Software</li></a>
                        <a onClick={() => navigate("/EmployeeTrackingSoftware")}><li>Employee Tracking Software</li></a>
                        <a onClick={() => navigate("/AttendanceSystemSoftware")}><li>Attendance System Software</li></a>
                        <a onClick={() => navigate("/LibraryManagmentSystem")}><li>Library Managment System</li></a>
                        <a onClick={() => navigate("/LMSWithLiveClassSoftware")}><li>LMS With Live Class Software</li></a>
                        <a onClick={() => navigate("/UniversityManagmentSoftware")}><li>University Managment Software</li></a>
                        <a onClick={() => navigate("/AstrologySoftware")}><li>Astrology Software</li></a>
                        <a onClick={() => navigate("/TravelBookingSoftware")}><li>Travel Booking Software</li></a>
                        <a onClick={() => navigate("/MatrimonialSoftware")}><li>Matrimonial Software</li></a>
                        <a onClick={() => navigate("/RestaurantManagmentSoftware")}><li>Restaurant Managment System Software</li></a>
                        <a onClick={() => navigate("/HotelManagmentSoftware")}><li>Hotel Managment Software</li></a>
                        <a onClick={() => navigate("/EventmanagementSoftware")}><li>Event management Software</li></a>
                        <a onClick={() => navigate("/HospitalManagementSoftware")}><li>Hospital Managment System Software</li></a>
                        <a onClick={() => navigate("/RealstateSoftware")}><li>Real state Software</li></a>
                        <a onClick={() => navigate("/ClinicManagmentSoftware")}><li>Clinic Managment System Software</li></a>
                        <a onClick={() => navigate("/MLMSoftware")}><li>MLM Software</li></a>
                        <a onClick={() => navigate("/TradingSoftware")}><li>Trading Software</li></a>
                        <a onClick={() => navigate("/JobPortalSoftware")}><li>Job Portal Software</li></a>
                    </ul>
                </li>
                <li className='main-headings-sitemap'>
                    <a onClick={() => navigate("/blockchaindevelopment")} className='blue-color'>Blockchain Development</a>
                    <ul>
                        <li>
                            <a onClick={() => navigate("/blockchaindevelopment")} className='blue-color'>Blockchain Development</a>
                            <ul>
                                <a onClick={() => navigate("/SmartContractDevelopemnt")}><li>Smart Contract Developemnt</li></a>
                                <a onClick={() => navigate("/Private/PublicBlockchainDevelopment")}><li>Private / Public Blockchain Development</li></a>
                                <a onClick={() => navigate("/DAOBlockchainDevelopmnent")}><li>DAO Blockchain Developmnent</li></a>
                                <a onClick={() => navigate("/BlockchainSupply")}><li> Blockchain in SupplyChain</li></a>
                                <a onClick={() => navigate("/BlockchainVoting")}><li> Blockchain in Voting</li></a>
                                <a onClick={() => navigate("/BlockchainLiveAution")}><li>Blockchain in Live Auction</li></a>
                                <a onClick={() => navigate("/BlockchainDocument")}><li> Blockchain in Document Verifiction</li></a>
                                <a onClick={() => navigate("/GameFiLaunchapd")}><li>Blockchain in Identity Verifiction</li></a>
                            </ul>
                        </li>
                        <li>
                            <a className='blue-color'>Launchpad Development</a>
                            <ul>
                                <a onClick={() => navigate("/GameFiLaunchapd")} ><li>GameFi Launchapd Developemnt</li></a>
                                <a onClick={() => navigate("/LunchpadDevelopment")} ><li>Lunchpad Development</li></a>
                            </ul>
                        </li>

                        <li>
                            <a className='blue-color'>Wallet Development</a>
                            <ul>
                                <a onClick={() => navigate("/TrustWalletCloneDevelopment")} ><li>Trust Wallet Clone Development</li></a>
                                <a onClick={() => navigate("/WalletConnectClone")} ><li>Wallet Connect Clone Development</li></a>
                                <a onClick={() => navigate("/WhitePaperWrittingServices")} ><li>White Paper Writting Services</li></a>
                            </ul>
                        </li>

                        <li>
                            <a className='blue-color'>Token Development</a>
                            <ul>
                                <a onClick={() => navigate("/SemiFungibleTokenDevelopment")} className='blue-color'><li>Semi -Fungible Token Development</li></a>
                                <a onClick={() => navigate("/BinanaceSmartChainBEP20TokenDevelopment")} className='blue-color' ><li>Binanace Smart Chain BEP20 Token Development</li></a>
                                <a onClick={() => navigate("/EthereumTokenDevelopment")} className='blue-color' ><li>Ethereum Token Development</li></a>
                            </ul>
                        </li>

                        <li>
                            <a className='blue-color'>DeFi Development</a>
                            <ul>
                                <a onClick={() => navigate("/DefiStaking")}><li>DeFi Staking Platform Development</li></a>
                                <a onClick={() => navigate("/DeFiTokenDevelopment")}><li>DeFi Token Development</li></a>
                                <a onClick={() => navigate("/DeFiWalletDevelopment")}><li>DeFI Wallet Development</li></a>
                                <a onClick={() => navigate("/DeFiSmartContractDevelopment")}><li>DeFi Smart Contract Development</li></a>
                                <a onClick={() => navigate("/DeFiDAppsDevelopment")}><li>DeFi DApps Development</li></a>
                                <a onClick={() => navigate("/DeFiInsuranceDevelopment")}><li>DeFi Insurance Development</li></a>
                            </ul>
                        </li>

                        <li>
                            <a className='blue-color'>NFT Development</a>
                            <ul>
                                <a onClick={() => navigate("/NFTToken")}  ><li>NFT Token Development</li></a>
                                <a onClick={() => navigate("/NFTMarketplace")}  ><li>NFT Marketplace Development</li></a>
                                <a onClick={() => navigate("/NFTCrosschainPlatfromDevelopment")}  ><li>NFT Crosschain Platfrom Development</li></a>
                                <a onClick={() => navigate("/NFTCrosschainPlatfromDevelopment")}  ><li>NFT Minting Development</li></a>
                                <a onClick={() => navigate("/NFTArtMarketplaceDevelopment")}  ><li>NFT Art Marketplace Development</li></a>
                                <a onClick={() => navigate("/NFTMusicMarketplaceDevelopment")}  ><li>NFT Music Marketplace Development</li></a>
                                <a onClick={() => navigate("/NFTLendingPlatform")}  ><li>NFT Fantasy Sports Platform Development</li></a>
                            </ul>
                        </li>
                        <li>
                            <a className='blue-color'>Dex Development</a>
                            <ul>
                                <a onClick={() => navigate("/PancakeswapExchange")}  ><li>Pancakeswap Exchange Clone Development</li></a>
                                <a onClick={() => navigate("/UniswapExchange")}  ><li>Uniswap Exchange Clone Developemnt</li></a>
                                <a onClick={() => navigate("/SushiSwapExchange")}  ><li>SushiSwap Exchange Clone Developement</li></a>
                                <a onClick={() => navigate("/WhiteLabelexchangedevelopment")}  ><li>White Label Exchange Development</li></a>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li className='main-headings-sitemap' >
                    <a onClick={() => navigate("/ApplicationDevelopment")} className='blue-color' >Applicataion Development</a>
                    <ul>

                        <a onClick={() => navigate("/CabBookingApps")}><li>Cab Booking Apps</li></a>
                        <a onClick={() => navigate("/GroceryApps")}><li>Grocery Apps</li></a>
                        <a onClick={() => navigate("/TravellingApps")}><li>Travelling Apps</li></a>
                        <a onClick={() => navigate("/ChattingApps")}><li>Chatting Apps</li></a>
                        <a onClick={() => navigate("/FitnessApps")}><li>Fitness Apps</li></a>
                        <a onClick={() => navigate("/RentalApps")}><li>Rental Apps</li></a>
                        <a onClick={() => navigate("/DatingApps")}><li>Dating Apps</li></a>
                        <a onClick={() => navigate("/AstrologyApps")}><li>Astrology Apps</li></a>
                        <a onClick={() => navigate("/FooddeliveryApps")}><li>Food delivery Apps</li></a>
                        <a onClick={() => navigate("/SocialMediaApps")}><li>Social Media Apps</li></a>
                        <a onClick={() => navigate("/LearningManagmentApps")}><li>Learning Managment Apps</li></a>
                        <a onClick={() => navigate("/EcommerceApps")}><li>Ecommerce Apps</li></a>
                        <a onClick={() => navigate("/MultivendorHomeServiceApps")}><li>Multivendor Home Service Apps</li></a>
                    </ul>
                </li>

                <li className='main-headings-sitemap'>
                    <a onClick={() => navigate("/MetaverseDevelopment")} className='blue-color'>Metaverse Development</a>
                    <ul>

                        <a onClick={() => navigate("/MetaverseGameDevelopment")}><li>Metaverse Game Development</li></a>
                        <a onClick={() => navigate("/MetaverseNFTMarketplaceDevelopment")}><li>Metaverse NFT Marketplace Development</li></a>
                        <a onClick={() => navigate("/MetaverseVirtualShowroomDevelopment")}><li>Metaverse Virtual Showroom Development</li></a>
                        <a onClick={() => navigate("/MetaverseEventPlatformDevelopment")}><li>Metaverse Event Platform Development</li></a>
                        <a onClick={() => navigate("/MetaverseAvatarDevelopment")}><li>Metaverse Avatar Development</li></a>
                        <a onClick={() => navigate("/MetaverseSocialMediaPlatformDevelopment")}><li>Metaverse Social Media Platform Development</li></a>
                        <a onClick={() => navigate("/MetaverseRealEstateDevelopment")}><li>Metaverse Real Estate Development</li></a>
                        <a onClick={() => navigate("/MetaverseVirtualLandDevelopment")}><li>Metaverse Virtual Land Development</li></a>
                        <a onClick={() => navigate("/MetaverseLaunchpadDevelopment")}><li>Metaverse Launchpad Development</li></a>
                    </ul>
                </li>


                <li className='main-headings-sitemap'>
                    <a onClick={() => navigate("/GameDevelopment")} className='blue-color'>Game Development</a>
                    <ul>
                        <li>
                            <a className='blue-color'>Casino Game Development</a>
                            <ul>
                                <a onClick={() => navigate("/LudoGameDevelopment")} ><li>Ludo Game Development</li></a>
                                <a onClick={() => navigate("/RummyGameDevelopment")}><li>Rummy Game Development</li></a>
                                <a onClick={() => navigate("/TeenpattiGameDevelopment")}><li>Teenpatti Game Development</li></a>
                                <a onClick={() => navigate("/TeenpattiGameDevelopment")}><li>Dragon & Tiger Game Development</li></a>
                                <a onClick={() => navigate("/PokerGameDevelopment")}><li>Poker Game Development</li></a>
                                <a onClick={() => navigate("/BaccaratGameDevelopment")}><li>Baccarat Game Development</li></a>
                                <a onClick={() => navigate("/RouletteGameDevelopment")}><li>Roulette Game Development</li></a>
                                <a onClick={() => navigate("/AndarBaharGameDevelopment")} ><li>Andar Bahar Game Development</li></a>
                                <a onClick={() => navigate("/FantasyCricketGameDevelopment")}><li>Fantasy Cricket Game Development</li></a>
                            </ul>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <a onClick={() => navigate("/MetaverseGame")} className='blue-color'>Metaverse Game Development</a>
                        </li>
                    </ul>
                </li>


                <li className='main-headings-sitemap'>
                    <a className='blue-color'>Insights</a>
                    <ul>
                        <li>
                            <a className='blue-color'>Company</a>
                            <ul>
                                <a onClick={() => navigate("/Aboutus")} ><li>About Us</li></a>
                                <a onClick={() => navigate("/portfolio")} ><li>Portfolio</li></a>
                                <a onClick={() => navigate("/ourteam")}><li>Our Team</li></a>
                                <a onClick={() => navigate("/gallery")}><li>Gallery</li></a>
                                <a onClick={() => navigate("/InsightsFAQ")}><li>FAQ</li></a>
                                <a onClick={() => navigate("/TermAndCondition")}><li>Terms and Conditions</li></a>
                                <a onClick={() => navigate("/PrivacyPolicy")}><li>Privacy Policy</li></a>

                            </ul>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <a onClick={() => navigate("/testimonial")} className='blue-color'>Testimonial</a>
                        </li>
                    </ul>
                </li>
                <li className='main-headings-sitemap'>
                    <a onClick={() => navigate("/contact-us")} className='blue-color'>Contact Us</a>
                </li>
                <li className='main-headings-sitemap'>
                    <a onClick={() => navigate("/Blog")} className='blue-color'>Blogs</a>
                </li>
            </ul>
        </div >
    )
}

export default Sitemap;
