import React from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {CookiesKeys} from '../utils/cookies/keys';
import {setCookies} from '../utils/cookies/utils';
import {useI18n} from './hook';
import {SupportedLanguageNames, SupportedLanguages} from './langCode';


export const LanguageSwitch = () => {
  const {t, lang} = useI18n();

  const currentLangName = SupportedLanguageNames[lang];

  const onLangChanged = (newLang: SupportedLanguages) => () => {
    setCookies(CookiesKeys.LANG, newLang);
    location.reload();
  };

  return (
    <Dropdown title={currentLangName}>
      <Dropdown.Toggle variant="outline-light">
        {currentLangName}
      </Dropdown.Toggle>

      <Dropdown.Menu variant="dark">
        <Dropdown.Header>
          {t((t) => t.lang.inUse)}
        </Dropdown.Header>
        <Dropdown.Item disabled>
          {currentLangName}
        </Dropdown.Item>
        <NavDropdown.Divider/>
        {Object.values(SupportedLanguages).map((newLang) => (
          <Dropdown.Item
            key={newLang}
            onClick={onLangChanged(newLang)}
            className={lang === newLang ? 'active' : ''}
          >
            {SupportedLanguageNames[newLang]}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
