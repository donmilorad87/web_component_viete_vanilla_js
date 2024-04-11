export class StickyFooter extends HTMLElement {

  constructor(stickyFooterConstructionObject) {

    super();
    const { delay, href, socialIcons, stickyFooterLabel, appLabel, clickHereLabel, closeIcon } = stickyFooterConstructionObject;

    this.delay = delay;
    this.href = href;
    this.socialIcons = socialIcons;
    this.stickyFooterLabel = stickyFooterLabel;
    this.appLabel = appLabel;
    this.clickHereLabel = clickHereLabel;
    this.closeIcon = closeIcon;

  }

  render() {

    let stickyFooter = document.createElement('div');
    stickyFooter.className = 'stickyFooter';

    this.className = 'stickyFooter';
    let stickyFooter__link = document.createElement('a');
    stickyFooter__link.className = 'stickyFooter__link';
    stickyFooter__link.href = this.href;

    this.append(stickyFooter__link);

    let stickyFooter__link__icon_container = document.createElement('div');
    stickyFooter__link__icon_container.className = "stickyFooter__link__icon-container";



    this.socialIcons.forEach((icon, index) => {
      stickyFooter__link__icon_container.append(this.createIcon(icon));

      if (index !== (this.socialIcons.length - 1)) {
        let spliter = document.createElement('span');
        spliter.textContent = '|';
        stickyFooter__link__icon_container.append(spliter);
      }
    });


    stickyFooter__link.append(stickyFooter__link__icon_container);

    let stickyFooter__link__label = document.createElement('span');
    stickyFooter__link__label.textContent = this.stickyFooterLabel;
    stickyFooter__link__label.className = 'stickyFooter__link__label';

    let stickyFooter__link__label__bold = document.createElement('b');
    stickyFooter__link__label__bold.textContent = this.appLabel;
    stickyFooter__link__label__bold.className = 'stickyFooter__link__label__bold';

    stickyFooter__link__label.append(stickyFooter__link__label__bold);

    stickyFooter__link.append(stickyFooter__link__label);

    let stickyFooter__link__underlined = document.createElement('span');
    stickyFooter__link__underlined.className = "stickyFooter__link__label stickyFooter__link__label__underlined";
    stickyFooter__link__underlined.textContent = this.clickHereLabel;

    stickyFooter__link.append(stickyFooter__link__underlined);

    this.append(this.closeStickyFooterButton);

  }

  createIcon(image, id = false) {
    let img = document.createElement('img');
    img.src = image;
    if (id) {
      img.id = id;
    }
    return img;
  }

  getImages(image) {
    return location.origin + '/assets/images/icons/' + image;
  }

  showStickyFooter() {
    setTimeout(() => {
      this.classList.add('stickyFooter--show');
    }, this.delay);
  }

  closeStickyFooter() {
    this.closeStickyFooterButton.addEventListener('click', () => {

      this.classList.remove('stickyFooter--show');


      setTimeout(() => {
        this.remove();
      }, 333);
    });
  }

  connectedCallback() {
    console.info('Sticky footer component started with initialization.');

    this.closeStickyFooterButton = this.createIcon(this.closeIcon, 'closeStickyFooter');
    this.render();
    this.showStickyFooter();
    this.closeStickyFooter();

  }

  disconnectedCallback() {
    console.info('Sticky footer disabled unti next log in.');
  }
}

