import './assets/scss/style.scss'
import apple from './assets/images/icons/apple.svg'
import googlePlaystore from './assets/images/icons/google-playstore.svg'
import closeIconGrayCircle from './assets/images/icons/close-cong-gray-circle.svg'
import { StickyFooter } from './components/sticky_footer.js'

customElements.define("sticky-footer", StickyFooter);

const stickyFooter = new StickyFooter({
  delay: 500,
  href: "https://performance-golf.onelink.me/gVYJ/pe428mxe",
  socialIcons: [apple, googlePlaystore],
  stickyFooterLabel: "Download The Free",
  appLabel: "App",
  clickHereLabel: "Click Here",
  closeIcon: closeIconGrayCircle
});

document.body.append(stickyFooter);