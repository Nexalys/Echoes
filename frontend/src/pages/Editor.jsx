import { useState, useCallback } from "react";

import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';
import MarkdownPreview from '@uiw/react-markdown-preview';

import { EditorNav } from "../components/Navbar.jsx";
import { useTheme } from "next-themes";

// Markdown instructions
const markdownInstructions = `# How Markdown Works

Markdown is a lightweight markup language that you can use to add 
formatting elements to plaintext text documents. Created by John Gruber 
in 2004, Markdown is now one of the world's most popular markup languages.

## Basic Syntax

### Headers

You can create headers by using the \`#\` symbol:

# This is an H1
## This is an H2
### This is an H3

### Emphasis

To emphasize text, you can use *italics* or **bold**:

*This text will be italic*
**This text will be bold**

### Lists

You can create unordered lists using asterisks, plus signs, or hyphens:

* Item 1
* Item 2
  * Subitem 2.1
  * Subitem 2.2

Ordered lists use numbers:

1. First item
2. Second item
3. Third item

### Links

To create a link, use square brackets for the link text followed by parentheses containing the URL:

[Visit OpenAI](https://www.openai.com)

### Images

Images are similar to links, but with an exclamation mark in front:

![Alt text](https://example.com/image.jpg)

### Blockquotes

For blockquotes, use the > character before the line:

> This is a blockquote.
> It can span multiple lines.

### Code

For inline code, use backticks:

Use the \`print()\` function in Python.

For code blocks, use triple backticks or indent with four spaces:

\`\`\`python
def hello_world():
    print("Hello, World!")
\`\`\`

### Horizontal Rules

You can create a horizontal rule with three or more hyphens, asterisks, or underscores:

---

## Advanced Markdown

Some Markdown processors support additional features:

### Tables

| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |

### Task Lists

- [x] Completed task
- [ ] Incomplete task

### Fenced Code Blocks with Syntax Highlighting

\`\`\`javascript
function greet(name) {
    console.log(\`Hello, ${name}!\`);
}
\`\`\`

### Footnotes

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### Strikethrough

~~Strikethrough~~ uses two tildes.

Remember, not all Markdown applications support these extended syntax features. 
Always check the documentation of the specific Markdown processor you're using.
`

// Polyfill
const hslToHex = (h, s, l) => {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
};

// Convert HSL values to hex
const lightTheme = {
    text: hslToHex(227, 90, 8),
    background: hslToHex(198, 16, 87),
    primary: hslToHex(230, 91, 53),
    secondary: hslToHex(332, 90, 72),
    accent: hslToHex(2, 91, 62),
};

const darkTheme = {
    text: hslToHex(201, 100, 97),
    background: hslToHex(234, 14, 14),
    primary: hslToHex(223, 19, 71),
    secondary: hslToHex(274, 19, 35),
    accent: hslToHex(344, 71, 59),
};

// Common Settings
const settings = {
    background: 'hsl(var(--background))',
    backgroundImage: '',
    foreground: 'hsl(var(--text))',
    caret: 'hsl(var(--accent))',
    selection: 'hsl(var(--accent) / 20%)',
    selectionMatch: 'hsl(var(--accent) / 20%)',
    lineHighlight: 'hsl(var(--accent) / 30%)',
    gutterBackground: 'hsl(var(--background))',
    gutterForeground: 'hsl(var(--text) / 70%)',
    fontFamily: 'JetBrains Mono'
}


export const theme = createTheme({
    settings,
    styles: [
        { tag: t.comment, color: lightTheme.secondary + '99' },
        { tag: t.variableName, color: lightTheme.primary },
        { tag: [t.string, t.special(t.brace)], color: lightTheme.accent },
        { tag: t.number, color: lightTheme.primary },
        { tag: t.bool, color: lightTheme.primary },
        { tag: t.null, color: lightTheme.primary },
        { tag: t.keyword, color: lightTheme.secondary },
        { tag: t.operator, color: lightTheme.text },
        { tag: t.className, color: lightTheme.accent },
        { tag: t.definition(t.typeName), color: lightTheme.secondary },
        { tag: t.typeName, color: lightTheme.primary },
        { tag: t.angleBracket, color: lightTheme.text },
        { tag: t.tagName, color: lightTheme.accent },
        { tag: t.attributeName, color: lightTheme.primary },
    ],
});

export default function Editor() {
    const [value, setValue] = useState(markdownInstructions);

    const onChange = useCallback((val, viewUpdate) => {
        setValue(val);
    }, []);

    return (
        <section className='flex flex-col gap-10 p-5'>
            <EditorNav/>
            <div className='flex gap-[2%] justify-center'>
                <div className='w-[50%] rounded-xl overflow-hidden shadow-main pb-[50vh] p-10 editor'>
                    <CodeMirror
                        value={value}
                        height="100%"
                        width="100%"
                        extensions={[markdown({
                            base: markdownLanguage,
                            codeLanguages: languages
                        })]}
                        onChange={onChange}
                        theme={theme}
                    />
                </div>
                <div className='w-[50%] markdown-preview-container'>
                    <MarkdownPreview
                        source={value}
                        className='rounded-xl shadow-main p-[100px] h-full bg-background text-text'
                        wrapperElement={{
                            "data-color-mode": useTheme().resolvedTheme
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
