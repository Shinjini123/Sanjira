import React,{useState}  from 'react';
import styles from '../styles/Frontpage.module.css';
import { Navigate,Routes,Route } from 'react-router-dom';
function Frontpage() {
    const [redirectToJewellery, setRedirectToJewellery] = useState(false);
    const [redirectToHousehold, setRedirectToHousehold] = useState(false);
    const [redirectToMantra, setRedirectToMantra] = useState(false);
  
    const handleJewellery = () => {
      setRedirectToJewellery(true);
    };
  
    const handleHousehold = () => {
      setRedirectToHousehold(true);
    };
  
    const handleMantra = () => {
      setRedirectToMantra(true);
    };
  
    if (redirectToJewellery) {
      return <Navigate to="/jewellery" />;
    }
  
    if (redirectToHousehold) {
      return <Navigate to="/household" />;
    }
  
    if (redirectToMantra) {
      return <Navigate to="/mantra" />;
    }
  return (
    <>
      <div className={styles.logo}>
        <img
          width="150px"
          height="150px"
          src="https://static.vecteezy.com/system/resources/previews/011/883/296/non_2x/modern-graphic-leaf-abstrack-with-water-drop-colorful-logo-good-for-technology-logo-fruits-logo-fresh-logo-nature-logo-company-logo-dummy-logo-bussiness-logo-vector.jpg"
          alt="Logo"
        />
      </div>
      <div className={styles.login}>
        <h3>Login</h3>
      </div>
      <div className={styles.container}>
        <div className={styles['container-heading']} onClick={handleJewellery}>
        <h1>Jewellery</h1>
        </div>
        <div className={styles['container-img']}>
          <img
            height="300px"
            width="300px"
            src="https://www.jewelsmart.in/media/catalog/product/cache/5e5d5507ad17a23dc9f1bc728eeab23c/l/a/latest-gold-necklace-designs-divine-pot-temple-jewellery-jewelsmart-22275_2_1.jpg"
            alt="Jewellery 1"
          />
          <img
            height="300px"
            width="300px"
            src="https://imgmedia.lbb.in/media/2021/04/607e8125cdcfd211efbd9819_1618903333080.jpg"
            alt="Jewellery 2"
          />
          <img
            height="300px"
            width="300px"
            src="https://i.etsystatic.com/31140218/r/il/345479/3450861091/il_fullxfull.3450861091_77sf.jpg"
            alt="Jewellery 3"
          />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles['container-heading']} onClick={handleHousehold}>
        <h1>Household</h1>
        </div>
        <div className={styles['container-img']}>
          <img
            height="300px"
            width="300px"
            src="https://www.jewelsmart.in/media/catalog/product/cache/5e5d5507ad17a23dc9f1bc728eeab23c/l/a/latest-gold-necklace-designs-divine-pot-temple-jewellery-jewelsmart-22275_2_1.jpg"
            alt="Household 1"
          />
          <img
            height="300px"
            width="300px"
            src="https://imgmedia.lbb.in/media/2021/04/607e8125cdcfd211efbd9819_1618903333080.jpg"
            alt="Household 2"
          />
          <img
            height="300px"
            width="300px"
            src="https://i.etsystatic.com/31140218/r/il/345479/3450861091/il_fullxfull.3450861091_77sf.jpg"
            alt="Household 3"
          />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles['container-heading']} onClick={handleMantra}><h1>Mantra</h1></div>
        <div className={styles['container-img']}>
          <img
            height="300px"
            width="300px"
            src="https://www.jewelsmart.in/media/catalog/product/cache/5e5d5507ad17a23dc9f1bc728eeab23c/l/a/latest-gold-necklace-designs-divine-pot-temple-jewellery-jewelsmart-22275_2_1.jpg"
            alt="Mantra 1"
          />
          <img
            height="300px"
            width="300px"
            src="https://imgmedia.lbb.in/media/2021/04/607e8125cdcfd211efbd9819_1618903333080.jpg"
            alt="Mantra 2"
          />
          <img
            height="300px"
            width="300px"
            src="https://i.etsystatic.com/31140218/r/il/345479/3450861091/il_fullxfull.3450861091_77sf.jpg"
            alt="Mantra 3"
          />
        </div>
      </div>
    </>
  );
}

export default Frontpage;
