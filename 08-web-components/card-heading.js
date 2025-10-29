// Define the CardHeading Web Component
class CardHeading extends HTMLElement {
    constructor() {
        super();

        // Attach shadow DOM
        this.attachShadow({ mode: 'open' });

        // Create template
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }

                .heading {
                    font-size: var(--heading-size, 24px);
                    font-weight: bold;
                    color: var(--heading-color, #333);
                    margin: 0 0 10px 0;
                    padding: 0;
                }

                .icon {
                    margin-left: 5px;
                }
            </style>

            <p class="heading">
                <slot></slot>
                <span class="icon" id="icon"></span>
            </p>
        `;
    }

    // Define observed attributes
    static get observedAttributes() {
        return ['icon', 'color', 'size'];
    }

    // Called when element is added to the DOM
    connectedCallback() {
        this.updateIcon();
        this.updateColor();
        this.updateSize();
    }

    // Called when attributes change
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'icon') {
            this.updateIcon();
        }
        if (name === 'color') {
            this.updateColor();
        }
        if (name === 'size') {
            this.updateSize();
        }
    }

    updateIcon() {
        const iconElement = this.shadowRoot.getElementById('icon');
        iconElement.textContent = this.getAttribute('icon') || '';
    }

    updateColor() {
        const heading = this.shadowRoot.querySelector('.heading');
        const color = this.getAttribute('color') || '#333';
        heading.style.setProperty('--heading-color', color);
    }

    updateSize() {
        const heading = this.shadowRoot.querySelector('.heading');
        const size = this.getAttribute('size') || '24px';
        heading.style.setProperty('--heading-size', size);
    }
}

// Register the custom element
customElements.define('card-heading', CardHeading);
