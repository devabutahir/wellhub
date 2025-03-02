/* ========== Classes for all components ========== */
class BaseComponent {
  constructor(id, options = {}) {
    this.id = id;
    this.element = document.getElementById(id);
    this.options = options;
    this.overlay = null;
    this.isOpen = false;
  }

  createOverlay() {
    this.overlay = document.createElement('div');
    this.overlay.className = 'fixed inset-0 bg-black opacity-50 z-40 hidden transition-opacity duration-300';
    document.body.appendChild(this.overlay);
  }

  addEventListeners() {
    document.querySelectorAll(`[data-${this.componentType}-target="${this.id}"]`).forEach((button) => {
      button.addEventListener('click', () => this.open());
    });

    this.element.querySelectorAll(`[data-${this.componentType}-close="${this.id}"]`).forEach((button) => {
      button.addEventListener('click', () => this.close());
    });

    this.overlay.addEventListener('click', () => this.close());
  }

  open() {
    if (this.isOpen) return;
    this.isOpen = true;
    this.element.classList.remove('invisible');
    this.overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }
  moveToBody() {
    document.body.appendChild(this.element);
  }
  close() {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.overlay.classList.add('hidden');
    document.body.style.overflow = ''; // Re-enable scrolling
  }
}

class OffCanvas extends BaseComponent {
  constructor(id, options = {}) {
    super(id, {
      position: 'left',
      width: '16rem',
      ...options,
    });
    this.componentType = 'offcanvas';
    this.init();
  }

  init() {
    this.createOverlay();
    this.applyStyles();
    this.addEventListeners();
    this.moveToBody();
  }

  applyStyles() {
    this.element.style.width = this.options.width;
    if (this.options.position === 'right') {
      this.element.classList.remove('left-0', '-translate-x-full');
      this.element.classList.add('right-0', 'translate-x-full');
    }
  }

  open() {
    super.open();
    this.element.classList.remove(this.options.position === 'left' ? '-translate-x-full' : 'translate-x-full');
  }

  close() {
    this.element.classList.add(this.options.position === 'left' ? '-translate-x-full' : 'translate-x-full');
    this.overlay.classList.add('hidden');
    document.body.style.overflow = '';
    this.isOpen = false;
  }
}

class Modal extends BaseComponent {
  constructor(id, options = {}) {
    super(id, options);
    this.componentType = 'modal';
    this.init();
  }

  init() {
    this.createOverlay();
    this.addEventListeners();
    this.moveToBody();
  }
}

class Tabs {
  constructor(element) {
    this.tabLinks = element.querySelectorAll('.tab-link');
    this.tabPanels = element.querySelectorAll('.tab-panel');

    // Error Handling: Check if we have the necessary elements
    if (!this.tabLinks.length) {
      console.warn('No tab links found for this tab group. Skipping initialization.');
      return;
    }
    if (!this.tabPanels.length) {
      console.warn('No tab panels found for this tab group. Skipping initialization.');
      return;
    }
    if (this.tabLinks.length !== this.tabPanels.length) {
      console.warn('The number of tab links does not match the number of tab panels.');
    }

    this.init();
  }

  init() {
    // Add event listeners to all tab links
    this.tabLinks.forEach((link, index) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.switchTab(index); // Pass the index of the clicked tab
      });
    });
  }

  switchTab(index) {
    // Remove active state from all tabs
    this.tabLinks.forEach((link) => {
      link.classList.remove('active');
    });

    // Hide all panels
    this.tabPanels.forEach((panel) => {
      panel.classList.add('hidden');
    });

    // Activate the clicked tab and corresponding panel
    if (this.tabLinks[index]) {
      this.tabLinks[index].classList.add('active');
    }
    if (this.tabPanels[index]) {
      this.tabPanels[index].classList.remove('hidden');
    }
  }
}

class Dropdown {
  constructor(element) {
    this.toggleButton = element.querySelector('.dropdown-toggle');
    this.menu = element.querySelector('.dropdown-menu');

    // Error Handling: Check if required elements exist
    if (!this.toggleButton) {
      console.warn('Dropdown toggle button not found.');
      return;
    }
    if (!this.menu) {
      console.warn('Dropdown menu not found.');
      return;
    }

    // Initialize event listener for the dropdown toggle
    this.init();
  }

  init() {
    // Toggle the dropdown menu when the button is clicked
    this.toggleButton.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggleDropdown();
    });

    // Close the dropdown if clicked outside
    document.addEventListener('click', (e) => {
      if (!this.menu.contains(e.target) && !this.toggleButton.contains(e.target)) {
        this.closeDropdown();
      }
    });

    // Close dropdown when a menu item is clicked
    const items = this.menu.querySelectorAll('.dropdown-item');
    items.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        this.closeDropdown();
      });
    });
  }

  toggleDropdown() {
    // Toggle between hidden and visible states
    if (this.menu.classList.contains('hidden')) {
      this.openDropdown();
    } else {
      this.closeDropdown();
    }
  }

  openDropdown() {
    this.menu.classList.remove('hidden');
  }

  closeDropdown() {
    this.menu.classList.add('hidden');
  }
}

class Accordion {
  constructor(accordion) {
    try {
      this.accordion = accordion;
      if (!this.accordion) {
        throw new Error(`Accordion with class "${accordion}" not found`);
      }
      this.items = this.accordion.querySelectorAll('.accordion-item');
      if (this.items.length === 0) {
        throw new Error(`No accordion items found in accordion with class "${accordion}"`);
      }
      this.init();
    } catch (error) {
      console.error('Accordion initialization error:', error.message);
    }
  }

  init() {
    this.items.forEach((item, index) => {
      const header = item.querySelector('.accordion-header');
      const content = item.querySelector('.accordion-content');
      const arrow = item.querySelector('.accordion-arrow');

      if (!header || !content || !arrow) {
        console.warn(`Accordion item ${index} is missing required elements`);
        return;
      }

      // Set initial state with a slight delay to allow transitions
      if (index === 0) {
        item.classList.add('active');
        arrow.style.transform = 'rotate(180deg)';
        // Apply maxHeight after a delay to ensure transition applies
        setTimeout(() => {
          content.style.maxHeight = `${content.scrollHeight}px`;
          content.style.transition = 'max-height 0.3s ease';
        }, 10);
      } else {
        content.style.maxHeight = '0px';
        arrow.style.transform = 'rotate(0deg)';
      }

      header.addEventListener('click', () => this.toggleItem(item));
    });
  }

  toggleItem(item) {
    const content = item.querySelector('.accordion-content');
    const arrow = item.querySelector('.accordion-arrow');
    const isActive = item.classList.contains('active');

    // Close all items
    this.items.forEach((i) => {
      const itemContent = i.querySelector('.accordion-content');
      const itemArrow = i.querySelector('.accordion-arrow');
      i.classList.remove('active');
      if (itemContent) itemContent.style.maxHeight = '0px';
      if (itemArrow) itemArrow.style.transform = 'rotate(0deg)';
    });

    // Open clicked item if it was closed
    if (!isActive) {
      item.classList.add('active');
      if (content) content.style.maxHeight = `${content.scrollHeight}px`;
      if (arrow) arrow.style.transform = 'rotate(180deg)';
    }
  }
}

class Submenu {
  constructor(menuSelector) {
    try {
      this.menus = document.querySelectorAll(menuSelector);
      if (this.menus.length === 0) {
        throw new Error(`No submenu items found with selector "${menuSelector}"`);
      }
      this.init();
    } catch (error) {
      console.error('Submenu initialization error:', error.message);
    }
  }

  init() {
    this.menus.forEach((menu, index) => {
      const button = menu.querySelector('.submenu-btn');
      const content = menu.querySelector('.submenu-content');

      if (!button || !content) {
        console.warn(`Submenu item ${index} is missing required elements`);
        return;
      }

      // Hide submenu content initially
      content.style.maxHeight = '0px';
      content.style.overflow = 'hidden';
      content.style.transition = 'max-height 0.4s ease';

      button.addEventListener('click', (event) => {
        event.stopPropagation();
        this.toggleMenu(menu);
      });

      // Close the submenu if clicking outside
      document.addEventListener('click', (event) => {
        if (!menu.contains(event.target)) {
          this.closeMenu(menu);
        }
      });
    });
  }

  toggleMenu(menu) {
    const content = menu.querySelector('.submenu-content');
    const isOpen = menu.classList.contains('active');

    // Close all other menus
    this.menus.forEach((m) => this.closeMenu(m));

    // Open the clicked menu if it was closed
    if (!isOpen) {
      menu.classList.add('active');
      if (content) content.style.maxHeight = `${content.scrollHeight}px`;
    }
  }

  closeMenu(menu) {
    const content = menu.querySelector('.submenu-content');
    menu.classList.remove('active');
    if (content) content.style.maxHeight = '0px';
  }
}

export { Tabs, Dropdown, Accordion, Submenu, OffCanvas, Modal };