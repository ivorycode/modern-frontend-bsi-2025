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

                .greeting {
                    font-size: 24px;
                    font-weight: bold;
                    color: var(--card-color, #333);
                    margin: 0 0 10px 0;
                }

                .message {
                    color: #666;
                    font-size: 16px;
                    line-height: 1.5;
                }
            </style>

            <div class="card">
                <p class="greeting">Hello, <span id="name"></span>! 👋</p>
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
        const nameElement = this.shadowRoot.getElementById('name');
        nameElement.textContent = this.getAttribute('name') || 'Guest';
    }

    updateColor() {
        const card = this.shadowRoot.querySelector('.card');
        const color = this.getAttribute('color') || '#333';
        card.style.setProperty('--card-color', color);
    }
}

// Register the custom element
customElements.define('greeting-card', GreetingCard);
