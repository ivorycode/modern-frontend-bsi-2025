# Web Components Demo

This demo demonstrates how to create a custom Web Component using the modern Web Components API.

## What are Web Components?

Web Components are a set of web platform APIs that allow you to create custom, reusable, encapsulated HTML tags to use in web pages and web apps. They work across modern browsers and can be used with any JavaScript library or framework.

## Core Technologies

Web Components are built on three main technologies:

1. **Custom Elements** - Define new HTML elements
2. **Shadow DOM** - Encapsulate markup and styles
3. **HTML Templates** - Reusable DOM structures (not used in this simple demo)

## Demo Component: `<greeting-card>`

This demo implements a `<greeting-card>` custom element that displays a styled greeting card.

### Usage

```html
<greeting-card name="Alice" color="blue">
    Welcome to Web Components!
</greeting-card>
```

### Attributes

- `name` - The name to display in the greeting (default: "Guest")
- `color` - The color for the border and greeting text (default: "#333")

### Features Demonstrated

#### 1. Custom Element Registration

```javascript
class GreetingCard extends HTMLElement {
    // Component implementation
}

customElements.define('greeting-card', GreetingCard);
```

The component extends `HTMLElement` and is registered with a custom tag name using `customElements.define()`.

#### 2. Shadow DOM

```javascript
constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    // ...
}
```

- Creates an encapsulated DOM tree
- Styles inside the shadow DOM don't affect the outer page
- Styles from the outer page don't affect the shadow DOM

#### 3. Lifecycle Callbacks

**connectedCallback()**
```javascript
connectedCallback() {
    this.updateName();
    this.updateColor();
}
```
Called when the element is inserted into the DOM.

**attributeChangedCallback()**
```javascript
attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'name') {
        this.updateName();
    }
    if (name === 'color') {
        this.updateColor();
    }
}
```
Called when an observed attribute changes.

#### 4. Observed Attributes

```javascript
static get observedAttributes() {
    return ['name', 'color'];
}
```

Defines which attributes trigger the `attributeChangedCallback()` when they change.

#### 5. Slots (Content Projection)

```html
<div class="message">
    <slot>Default message goes here</slot>
</div>
```

Allows users of the component to inject their own content:

```html
<greeting-card name="Bob">
    This custom content appears in the slot!
</greeting-card>
```

#### 6. Scoped CSS

```css
:host {
    display: block;
    margin: 20px 0;
}

.card {
    border: 3px solid var(--card-color, #333);
    /* ... */
}
```

- `:host` selector targets the component itself
- CSS custom properties (CSS variables) for dynamic styling
- All styles are scoped to the shadow DOM

#### 7. Dynamic Attribute Updates

The demo includes interactive buttons that demonstrate:
- Changing attributes programmatically
- Reactive updates when attributes change
- Live re-rendering of component content

```javascript
card.setAttribute('name', 'NewName');
card.setAttribute('color', 'red');
```

#### 8. Component Composability

One of the most powerful features of Web Components is that they can be composed together. The `<greeting-card>` component uses the `<card-heading>` component internally to render its heading.

**card-heading.js:**
```javascript
class CardHeading extends HTMLElement {
    // Reusable heading component with icon support
}

customElements.define('card-heading', CardHeading);
```

**Usage in greeting-card.js:**
```html
<card-heading id="heading" icon="👋"></card-heading>
```

**Benefits:**
- **Modularity** - Break complex components into smaller, focused pieces
- **Reusability** - The `<card-heading>` component can be used in other components
- **Maintainability** - Changes to heading behavior are centralized
- **Separation of Concerns** - Each component handles its own styling and logic

The `<greeting-card>` component communicates with the `<card-heading>` component by:
- Setting its text content via `textContent`
- Passing attributes like `color` and `icon`
- Leveraging the heading's own encapsulated styles and behavior

This demonstrates how Web Components can be nested and composed just like native HTML elements, creating a tree of reusable components.

## Components in this Demo

### `<card-heading>`
A reusable heading component with icon support.

**Attributes:**
- `icon` - Emoji or icon to display after the text
- `color` - Text color (default: "#333")
- `size` - Font size (default: "24px")

**Usage:**
```html
<card-heading icon="🎉" color="blue" size="28px">
    Hello World
</card-heading>
```

### `<greeting-card>`
A greeting card component that uses `<card-heading>` internally.

**Attributes:**
- `name` - The name to display in the greeting (default: "Guest")
- `color` - The color for the border and heading (default: "#333")

## File Structure

```
08-web-components/
├── index.html           # Demo page with component usage examples
├── card-heading.js      # Reusable heading component
├── greeting-card.js     # Greeting card component (uses card-heading)
├── demo.js             # Interactive demo controls
└── README.md           # This file
```

**Note:** Components must be loaded in dependency order. Since `<greeting-card>` uses `<card-heading>`, the `card-heading.js` script must be loaded first.

## Running the Demo

Simply open `index.html` in a modern web browser. No build tools or dependencies required!

```bash
# Option 1: Open directly
open index.html

# Option 2: Use a local server
python -m http.server 8000
# Then navigate to http://localhost:8000
```

## Browser Support

Web Components are supported in all modern browsers:
- Chrome/Edge (Chromium)
- Firefox
- Safari

## Key Takeaways

1. **Reusability** - Create components once, use them anywhere
2. **Encapsulation** - Styles and markup are isolated
3. **Standards-based** - Native browser APIs, no framework required
4. **Interoperability** - Works with any JavaScript framework
5. **Lifecycle management** - Built-in callbacks for component lifecycle
6. **Reactive** - Components respond to attribute changes automatically
7. **Composability** - Components can be nested and composed like native HTML elements

## Further Exploration

To extend this demo, you could:
- Add custom events for user interactions
- Implement more lifecycle callbacks (`disconnectedCallback`, `adoptedCallback`)
- Use HTML templates for more complex components
- Add form-associated custom elements
- Implement two-way data binding
- Add more complex state management
