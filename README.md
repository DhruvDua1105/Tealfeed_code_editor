# Tealfeed Code Editor

A simple no-frills code editor with syntax highlighting.

## Screenshot
![tealfeed_code_editor](https://github.com/DhruvDua1105/Tealfeed_code_editor/assets/86777191/678ccaf4-0aa9-45cb-8b17-0bfca9180b1a)

## Features

- **Syntax Highlighting:** Highlight code with custom styles.
- **Undo/Redo:** Easily undo and redo changes.
- **Tab Indentation:** Support for tabs and spaces.
- **Customizable:** Highly customizable with various props.
- **Cross-browser Compatibility:** Works on modern browsers.
- **Dark Themes Supported:** Variety of dark themes are available to choose from.

## Usage of Prismjs

Prismjs works by overlaying a syntax-highlighted `<pre>` block over a `<textarea>`. When you type, select, copy text, etc., you interact with the underlying `<textarea>`, so the experience feels native. This approach is much simpler compared to other editors that re-implement the behavior.

The syntax highlighting can be done by any third-party library as long as it returns HTML and is fully controllable by the user.

The vanilla `<textarea>` doesn't support inserting tab characters for indentation, so we re-implement it by listening to `keydown` events and programmatically updating the text. One caveat with programmatically updating the text is that we lose the undo stack, so we need to maintain our own undo stack. As a result, we can also implement improved undo behavior such as undoing whole words, similar to editors like VSCode.

## Installation and Setup

Follow these steps to set up the project on your local machine:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/DhruvDua1105/Tealfeed_code_editor.git
    cd Tealfeed_code_editor
    ```

2. **Install project dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm start
    ```

This will start the development server on `http://localhost:3000`.



