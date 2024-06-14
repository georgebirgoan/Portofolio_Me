import './footer.scss';
import { handleScroll } from '../../../utils/handleScroll'; // Asigură-te că importul este corect

export default function Footer() {
  return (
    <div className='footer'>
      <span>@All Rights Reserved By George</span>
      <a href='#hero' onClick={handleScroll}>
        <i className='bx bxs-hand-up'></i>
      </a>
    </div>
  );
}
