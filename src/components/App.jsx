import { Routes, Route } from 'react-router-dom';
import MainPage from 'pages/MainPage/MainPage';
import WreathsPage from 'pages/WreathsPage/WreathsPage';
import CoffinsPage from 'pages/CoffinsPage/CoffinsPage';
import CrossesPage from 'pages/CrossesPage/CrossesPage';
import MonumentsPage from 'pages/MonumentsPage/MonumentsPage';
import CoveredPage from 'pages/CoveredPage/CoveredPage';
import OtherAttributesPage from 'pages/OtherAttributesPage/OtherAttributesPage';
import ArtificialWreathsPage from 'pages/ArtificialWreathsPage/ArtificialWreathsPage';
import FreshFlowersWreathPage from 'pages/FreshFlowersWreathPage/FreshFlowersWreathPage';
import FuneralVasesPage from 'pages/FuneralVasesPage/FuneralVasesPage';
import DecorationsPage from 'pages/DecorationsPage/DecorationsPage';
import FuneralPortraitPage from 'pages/FuneralPortraitPage/FuneralPortraitPage';
import FuneralSetPage from 'pages/FuneralSetPage/FuneralSetPage';


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/wreaths" element={<WreathsPage />} />
        <Route path="/coffins" element={<CoffinsPage />} />
        <Route path="/crosses" element={<CrossesPage />} />
        <Route path="/monuments" element={<MonumentsPage />} />
        <Route path="/covered" element={<CoveredPage />} />
        <Route path="/otherattributes" element={<OtherAttributesPage />} />
        <Route path="/artificialwreaths" element={<ArtificialWreathsPage />} />
        <Route path="/freshflowerswreath" element={<FreshFlowersWreathPage />} />
        <Route path="/vases" element={<FuneralVasesPage />} />
        <Route path="/decorations" element={<DecorationsPage />} />
        <Route path="/funeralportrait" element={<FuneralPortraitPage />} />
        <Route path="/funeralset" element={<FuneralSetPage/>} />
      </Routes>
    </>
    
    
  );
};
