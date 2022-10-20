import { useTranslation } from 'react-i18next';

import logo from './logo.svg';
import './App.css';

const languages = {
	en: { nativeName: 'English' },
	ko: { nativeName: 'Korean' },
	de: { nativeName: 'Deutsch' }
};

function App() {
	const { t, i18n } = useTranslation();

	return (
		<div className="App">
			<div>
				{Object.keys(languages).map((lng) => (
					<button
						key={lng}
						style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
						type="submit"
						onClick={() => {
							i18n.changeLanguage(lng);
							document.documentElement.lang = i18n.language;
							document.documentElement.dir = i18n.dir();
						}
					}>
						{languages[lng].nativeName}
					</button>
				))}
			</div>
			<h1>{t('description.text1')}</h1>
		</div>
	);
}

export default App;
