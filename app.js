class LanguageManager {
  #cache   = {};
  #current = 'de';

  async load(lang) {
    if (!this.#cache[lang]) {
      const res  = await fetch(`locales/${lang}.json`);
      this.#cache[lang] = await res.json();
    }
    return this.#cache[lang];
  }

  async apply(lang) {
    const t = await this.load(lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    document.title                       = t['page-title'];
    document.documentElement.lang        = lang;
    document.getElementById('langBtn').textContent = t['lang-btn'];

    this.#current = lang;
  }

  async toggle() {
    await this.apply(this.#current === 'de' ? 'en' : 'de');
  }

  get currentLang() {
    return this.#current;
  }
}


class PlantFilter {
  #activeType = 'all';

  filter(type) {
    this.#activeType = type;

    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`.filter-btn.${type}`).classList.add('active');

    let visible = 0;
    document.querySelectorAll('.card').forEach(card => {
      const match = type === 'all' || card.dataset.type === type;
      card.classList.toggle('hidden', !match);
      if (match) visible++;
    });

    document.getElementById('noResults').style.display = visible === 0 ? 'block' : 'none';
  }

  get activeType() {
    return this.#activeType;
  }
}


class PlantGuide {
  #lang   = new LanguageManager();
  #filter = new PlantFilter();

  async init() {
    await this.#lang.apply('de');

    document.getElementById('langBtn')
      .addEventListener('click', () => this.#lang.toggle());

    document.querySelectorAll('.filter-btn').forEach(btn => {
      const type = [...btn.classList].find(c => c !== 'filter-btn');
      btn.addEventListener('click', () => this.#filter.filter(type));
    });
  }
}


document.addEventListener('DOMContentLoaded', () => {
  new PlantGuide().init();
});