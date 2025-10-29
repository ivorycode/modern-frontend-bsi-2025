// Define the GreetingCard Web Component
class GreetingCard extends HTMLElement {
    constructor() {
        super();

        // Attach shadow DOM
        this.attachShadow({ mode: 'open' });

        // Create template
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    margin: 20px 0;
                }

                .card {
                    border: 3px solid var(--card-color, #333);
                    border-radius: 10px;
                    padding: 20px;
                    background: white;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    transition: transform 0.2s;
                }

                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
                }

                .message {
                    color: #666;
                    font-size: 16px;
                    line-height: 1.5;
                }
            </style>

            <div class="card">
                <card-heading id="heading" icon="👋"></card-heading>
                <div class="message">
                    <slot>Default message goes here</slot>
                </div>
            </div>
        `;
    }

    // Define observed attributes
    static get observedAttributes() {
        return ['name', 'color'];
    }

    // Called when element is added to the DOM
    connectedCallback() {
        this.updateName();
        this.updateColor();
    }

    // Called when attributes change
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'name') {
            this.updateName();
        }
        if (name === 'color') {
            this.updateColor();
        }
    }

    updateName() {
        const heading = this.shadowRoot.getElementById('heading');
        const name = this.getAttribute('name') || 'Guest';
        heading.textContent = `Hello, ${name}!`;
    }

    updateColor() {
        const card = this.shadowRoot.querySelector('.card');
        const heading = this.shadowRoot.getElementById('heading');
        const color = this.getAttribute('color') || '#333';
        card.style.setProperty('--card-color', color);
        heading.setAttribute('color', color);
    }
}

// Register the custom element
customElements.define('greeting-card', GreetingCard);
