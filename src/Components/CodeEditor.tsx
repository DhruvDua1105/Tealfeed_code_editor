import React, { useState, ChangeEvent, KeyboardEvent, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-dark.css';
import 'prismjs/themes/prism-funky.css';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/themes/prism-solarizedlight.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/themes/prism-twilight.css';
import './CodeEditor.css';

import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';

const languages: { [key: string]: string } = {
	javascript: 'JavaScript',
	python: 'Python',
	java: 'Java'
};

const themes: { [key: string]: string } = {
	dark: 'Dark',
	funky: 'Funky',
	okaidia: 'Okaidia',
	twilight: 'Twilight',
};



const CodeEditor: React.FC = () => {
	const [code, setCode] = useState<string>('');
	const [language, setLanguage] = useState<string>('javascript');
	const [theme, setTheme] = useState<string>('dark');
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
		setCode(e.target.value);
	};

	const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>): void => {
		if (event.key === 'Tab') {
			event.preventDefault();
			const { selectionStart, selectionEnd } = event.currentTarget;
			const newCode = code.substring(0, selectionStart) + '\t' + code.substring(selectionEnd);
			setCode(newCode);

			if (textareaRef.current) {
				textareaRef.current.selectionStart = textareaRef.current.selectionEnd = selectionStart + 1;
			}
		}
	};

	const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>): void => {
		setLanguage(event.target.value);
	};

	const handleThemeChange = (event: ChangeEvent<HTMLSelectElement>): void => {
		setTheme(event.target.value);
	};

	const highlightedCode = Prism.highlight(code, Prism.languages[language], language);

	return (
		<div className={`editor-container ${theme}`}>
			<h1 className="heading">Tealfeed Code Editor</h1>
			<p className="sub-text">A simple no-frills code editor with syntax highlighting.</p>
			<div className="editor-toolbar">
				<label className='label' htmlFor="language-select">Select Language:</label>
				<select id="language-select" value={language} onChange={handleLanguageChange}>
					{Object.keys(languages).map((lang) => (
						<option key={lang} value={lang}>
							{languages[lang]}
						</option>
					))}
				</select>
				<label className='label' htmlFor="theme-select">Select Theme:</label>
				<select id="theme-select" value={theme} onChange={handleThemeChange}>
					{Object.keys(themes).map((themeKey) => (
						<option key={themeKey} value={themeKey}>
							{themes[themeKey]}
						</option>
					))}
				</select>
			</div>
			<div className="editor-wrapper">
				<textarea
					ref={textareaRef}
					className="code-input"
					value={code}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					spellCheck="false"
				/>
				<pre className="code-output" dangerouslySetInnerHTML={{ __html: highlightedCode }} />
			</div>
		</div>
	);
};

export default CodeEditor;
